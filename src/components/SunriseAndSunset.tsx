import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

type Props = {}

export default function SunriseAndSunset({ data }: Props) {
    const { sunrise, sunset } = data.astronomy.astro;

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.item}>
                    <Text style={styles.text}> Sunrise </Text>
                    <Icon name='sun' size={16} />
                    <Text> {sunrise.split(' ')[0]} </Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.text}> Sunset </Text>
                    <Icon name='moon' size={16} />
                    <Text> {sunset.split(' ')[0]} </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 40,
        paddingVertical: 15,
        borderRadius: 15,
        backgroundColor: 'white',
        marginTop: 20,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        // borderWidth: 1,
        // borderColor: 'red',
    },
    text: {
        fontWeight: '500',
        marginRight: 10,
    }
})