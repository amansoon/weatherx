import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Switch } from 'react-native-switch';
import Slider from '@react-native-community/slider';

type Props = {}

export default function CreateNotification({ }: Props) {
    const [isEnabled, toggleSwitch] = useState(true);

    return (
        <View>
            {/* title */}
            <View style={styles.item_wrapper}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={styles.item_heading}> Temperature </Text>
                    <Switch
                        onValueChange={toggleSwitch}
                        value={isEnabled}

                        activeText={''}
                        inActiveText={''}

                        innerCircleStyle={{ backgroundColor: 'white', borderColor: 'gray', borderWidth: 4 }}
                        backgroundActive={'gray'}
                        // circleActiveColor={'transparent'}

                        backgroundInactive={'gray'}
                        // circleInActiveColor={'transparent'}

                        switchLeftPx={3} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                        switchRightPx={3}
                        switchWidthMultiplier={1.8}
                    />
                </View>
                {/* slider */}
                <View>
                    <Slider
                        style={{ height: 20, borderWidth: 1, borderColor: 'red', padding: 10, backgroundColor: 'gray', marginTop: 10 }}
                        minimumValue={-80}
                        maximumValue={80}
                        minimumTrackTintColor="#141414"
                        maximumTrackTintColor="#adadad"

                        thumbTintColor='red'
                    />
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    item_wrapper: {
        marginTop: 10,
        padding: 20,
        borderRadius: 20,
        backgroundColor: 'white',
    },
    item_heading: {
        fontSize: 16,
        fontWeight: '500',
    },
    circle: {
        height: 10,
        width: 10,
        backgroundColor: 'red'
    }
})