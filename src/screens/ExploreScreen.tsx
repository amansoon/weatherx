import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TextInput, FlatList, Touchable, TouchableOpacity, Pressable } from 'react-native'
import { useFetch } from '../hooks/useFetch'
import { API_KEY, BASE_URL } from '../data'
import SavedPlaces from '../components/SavedPlaces'
import storage from '../storage'


type Props = {
  navigation: any
}

export default function ExploreScreen({ navigation }: Props) {
  const [text, setText] = useState('')
  const [result, setResult] = useState([])

  const handleInputChange = (e) => {
    console.log(e)
  }

  useEffect(() => {
    if (text) {
      fetch(`${BASE_URL}/search.json?key=${API_KEY}&q=${text}`)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setResult(data)
        })
        .catch((err) => {
          console.log('err = ', err)
        })
    }
  }, [text])

  const handlePressed = (place) => {
      // navigation.navigate(places)
      const places = JSON.parse(storage.getString('places') as string)
      console.log('PLACES = ', places)
      storage.set('places', JSON.stringify([...places, place]))
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.wrapper}>

        <SavedPlaces />

        {/* Search */}
        <View style={styles.search}>
          <TextInput style={styles.searchInput} placeholder='Search city' value={text} onChangeText={setText} />
        </View>
        {/* Search result */}
        <View style={styles.resultList}>
          {result.map((place) => {
            return (
              <Pressable
                style={({ pressed }) => [styles.resultItem, pressed ? styles.resultItemPressed : null, ]}
                onPress={() => handlePressed(place)} key={place.id}
              >
                <Text style={styles.resultItemText}> {place.name}, {place.country} </Text>
              </Pressable>);
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  wrapper: {
    minHeight: 800,
    padding: 15,
    backgroundColor: '#ebeced',
  },

  search: {

  },
  searchInput: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  resultList: {
    marginTop: 10,
    gap: 1,
  },

  resultItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },

  resultItemPressed: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },

  resultItemText: {
    fontWeight: '500',
    lineHeight: 20,
    // borderWidth: 1,
    // borderColor: 'red',
  },


  savedCities: {
     gap: 10,
     marginBottom: 20,
  },

  savedCity: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'white',
  }



})

