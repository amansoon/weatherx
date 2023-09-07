import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CreateNotification from '../components/CreateNotification'

type Props = {}

export default function NotificationsScreen({}: Props) {
  return (
    <View style={styles.wrapper}>
        <CreateNotification />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    minHeight: 800,
    padding: 15,
    backgroundColor: '#ebeced',
  },
})

