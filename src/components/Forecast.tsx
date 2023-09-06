import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { getDayName, isToday, isTomorrow } from '../utils'

type Props = {
    forecastdays: {}[]
}


export default function Forecast({ forecastdays }: Props) {
    return (
        <View style={styles.list}>
            {forecastdays.map((forecast, index) => {
                return <>
                    <ForecastDay forecast={forecast} />
                    {index !== forecastdays.length - 1 && <Divider />}
                </>
            })}
        </View>
    )
}

function ForecastDay({ forecast }) {
    const { date: dt, day } = forecast;
    const date = new Date(dt)
    let dayName = getDayName(date).substring(0, 3).toUpperCase()

    console.log(dayName)

    return <View style={styles.item}>
        <View style={styles.day}>
            <Text style={styles.dayName}> {dayName} </Text>
        </View>
        <View style={styles.temps}>
            <Text style={styles.temp}> {Math.round(Number(day.maxtemp_c))}° </Text>
            <Text style={styles.tempSep}> {'/'} </Text> 
            <Text style={styles.temp} > {Math.round(Number(day.mintemp_c))}° </Text>
        </View>
        <View style={styles.condition}>
            <Image style={styles.conditionImage} source={{ uri: 'https:' + day.condition.icon }} />
            {/* <Text style={styles.conditionText}> {day.condition.text} </Text> */}
        </View>
    </View>
}

function Divider() {
    return <View style={styles.divider}></View>
}


const styles = StyleSheet.create({
    list: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 100,
        backgroundColor: 'white',
        borderRadius: 15,
        overflow: 'hidden',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        minHeight: 50,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: 'white',
    },
    divider: {
        width: '90%',
        height: 1,
        backgroundColor: '#f0eded',
    },

    day: {
        width: 60,
    },
    dayName: {
        fontWeight: '500',
        color: '#b0acac'
    },

    temps: {
        flexDirection: 'row',
    },
    temp: {
        fontWeight: '600',
    },
    tempSep: {
        color: '#cfcccc',
    },

    condition: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    conditionImage: {
        height: 30,
        width: 30,
    },
    conditionText: {

    },


})
