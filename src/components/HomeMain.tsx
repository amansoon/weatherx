import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

type Props = {}

function HomeMain({ data }: Props) {
    const date = new Date(data.location.localtime)

    return (
        <View style={styles.container}>
            <Text style={styles.h1}> {data.current.temp_c}° </Text>
            <Text style={styles.condition}> {date.toLocaleString()} </Text>
            <Image
                style={styles.conditionImg}
                source={{ uri: 'https://' + data.current.condition.icon }}
                alt={'sunny'}
                resizeMode='contain'
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        minHeight: 100,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 15,
        backgroundColor: 'white',
        marginTop: 20,
    },
    h1: {
        fontSize: 60,
        fontWeight: '500',
        borderWidth: 1,
        borderColor: 'red',
        color: 'black'
    },
    condition: {
        fontWeight: '500',
        color: 'black',
    },
    conditionImg: {
        width: 50,
        height: 50,
    },
})


export default HomeMain