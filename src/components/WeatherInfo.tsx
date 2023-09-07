import { View, Text, StyleSheet } from 'react-native'

type Props = {
    data: {},
}

function WeatherInfo({ data }: Props) {
    const {wind_kph, humidity, vis_km, pressure_mb, cloud } = data.current;
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.item}>
                    <Text style={styles.h1}> {wind_kph} km/h </Text>
                    <Text style={styles.h2}> Wind </Text>
                </View>
                <Divider />
                <View style={styles.item}>
                    <Text style={styles.h1}> {humidity}% </Text>
                    <Text style={styles.h2}> Humidily </Text>
                </View>
                <Divider />
                <View style={styles.item}>
                    <Text style={styles.h1}> {cloud}% </Text>
                    <Text style={styles.h2}> Rain </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.item}>
                    <Text style={styles.h1}> {pressure_mb} mb </Text>
                    <Text style={styles.h2}> Pressure </Text>
                </View>
                <Divider />
                <View style={styles.item}>
                    <Text style={styles.h1}> {vis_km} km </Text>
                    <Text style={styles.h2}> Visiblity </Text>
                </View>
                <Divider />
                <View style={styles.item}>
                    <Text style={styles.h1}> 3.5 </Text>
                    <Text style={styles.h2}> AQI </Text>
                </View>
            </View>
        </View>
    )
}

function Divider() {
    return <View style={styles.divider}></View>
}

const styles = StyleSheet.create({
    container: {
        minHeight: 80,
        paddingVertical: 10,
        borderRadius: 15,
        backgroundColor: 'white',
        marginTop: 20,
    },
    row: {
       flexDirection: 'row',
       alignItems: 'center',
    },
    item: {
        alignItems: 'center',
        width: '33%',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    divider: {
        height: 30,
        borderLeftWidth: 1,
        borderColor: '#e3e3e3',
    },
    h1: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Sen-Bold',
    },
    h2: {
        fontSize: 14,
    },
    
})

export default WeatherInfo