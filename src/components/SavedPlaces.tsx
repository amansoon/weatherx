
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import storage from '../storage'

type Props = {}

export default function SavedPlaces({ }: Props) {
    const savedCities = JSON.parse(storage.getString('places') as string)

    return <View style={styles.places}>
        {savedCities.map((city) => {
            return <View style={styles.place} key={city.id}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                    <Text style={styles.placeName}> {city.name} </Text>
                    <Text style={styles.placeTemp}> {'24'} </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={styles.placeCondition}> {'Mostly Clear'} </Text>
                </View>
            </View>
        })}
    </View>
}


const styles = StyleSheet.create({
    places: {
        gap: 10,
        marginBottom: 20,
    },

    place: {
        borderRadius: 10,
        padding: 20,
        backgroundColor: 'white',
    },

    placeName: {
        fontSize: 18,
        fontWeight: '500',
    },

    placeTemp: {
        fontSize: 18,
        fontWeight: '500',
        color: 'gray'
    },

    placeCondition: {
        fontSize: 14,
        fontWeight: '500',
    },


})
