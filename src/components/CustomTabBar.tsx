import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


type Props = {
    state: any,
    descriptors: any,
    navigation: any,
}

export default function CustomTabBar({ state, descriptors, navigation }: Props) {
    return (
        <View style={styles.nav}>
            {state.routes.map((route, index) => {
                return <CustomTab
                    state={state}
                    descriptors={descriptors}
                    navigation={navigation}
                    route={route}
                    index={index}
                />
            })}
        </View>
    );
}


function CustomTab({ state, descriptors, navigation, route, index }) {
    const { options } = descriptors[route.key];
    const label =
        options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
                ? options.title
                : route.name;

    const isFocused = state.index === index;

    const onPress = () => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
        }
    };

    const onLongPress = () => {
        navigation.emit({
            type: 'tabLongPress',
            target: route.key,
        });
    };

    let iconName;
    switch(route.name) {
        case 'Home': iconName = 'home'; break;
        case 'Notifications': iconName = 'bell'; break;
        case 'Explore': iconName = 'compass'; break;
        case 'Profile': iconName = 'user'; break;
    }

    return (
        <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
        >
            <View style={styles.tab}>
                <Icon
                    name={iconName}
                    size={22}
                    style={{ backgroundColor: 'transparent' }}
                />
                {/* {isFocused && <Text style={styles.label}> {label} </Text> } */}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        height: 45,
        fontWeight: '600'
        // borderWidth: 1,
        // borderColor: 'red',
    },
    label: {
        fontWeight: '600',
    }
})
