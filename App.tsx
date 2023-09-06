import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import NavigationBar from './src/components/NavigationBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from './src/components/CustomTabBar';
import Notifications from './src/screens/Notifications';
import ExploreScreen from './src/screens/ExploreScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      {/* tabs */}
      <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


