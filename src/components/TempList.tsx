import { View, ScrollView, StyleSheet, Text, Image } from 'react-native'
import { useFetch } from '../hooks/useFetch'
import { API_KEY, BASE_URL } from '../data'


type Props = {
  temps: {}[],
}

export default function TempList({ hours }: Props) {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.list}>
        {hours.map((hour) => {
          return <TempItem hour={hour} />
        })}
      </View>
    </ScrollView>
  )
}

function TempItem({ hour }: { hour: {} }) {
  const {time : date, temp_c, condition} = hour;
  let time = date.split(' ')[1];
  return (
    <View style={styles.item}>
      <Text style={styles.time}> {time} </Text>
      <Image style={styles.tempImage} source={{ uri: 'https:' + condition.icon }} />
      <Text style={styles.temp}> {temp_c}° </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  item: {
    alignItems: 'center',
    minHeight: 100,
    minWidth: 50,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  time: {
    fontWeight: '500',
    marginBottom: 10,
    color: '#a1a1a1'
  },
  tempImage: {
    width: 45,
    height: 45,
    marginBottom: 5,
  },
  temp: {
    fontSize: 16,
    fontWeight: '800',
  },
})