import React from 'react'
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { useFetch } from '../hooks/useFetch';
import { BASE_URL } from '../data';
import { API_KEY } from '../constants';
import TempList from '../components/TempList';
import WeatherInfo from '../components/WeatherInfo';
import Forecast from '../components/Forecast';
import SunriseAndSunset from '../components/SunriseAndSunset';
import HomeMain from '../components/HomeMain';





type Props = {
  navigation: any,
}

function HomeScreen({ navigation }: Props) {
  const { data, isLoading } = useFetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${'bangalore'}`)
  const { data: forecastData, isLoading: forecastLoading } = useFetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${'bangalore'}&days=${7}&aqi=${'yes'}`)
  const { data: astronomyData, isLoading : astronomyLoading} =  useFetch(`${BASE_URL}/astronomy.json?key=${API_KEY}&q=${'bangalore'}`)

  const onPress = (e) => {
    Alert.alert('hello')
    navigation.navigate('Profile')
  }

  console.log(data)

  return (
    <SafeAreaView>
      <ScrollView style={styles.wrapper}>
        {data !== null && <HomeMain data={data} />}
        {data !== null && <WeatherInfo data={data} /> }
        {forecastData !== null && (<TempList hours={forecastData.forecast.forecastday[0].hour} />)}
        {astronomyData !== null && <SunriseAndSunset data={astronomyData} /> }
        {forecastData !== null && (<Forecast forecastdays={forecastData.forecast.forecastday} />)}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    backgroundColor: '#ebeced',
  },
})

export default HomeScreen