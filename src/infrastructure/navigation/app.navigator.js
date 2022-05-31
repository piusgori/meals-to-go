import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { SafeArea } from '../../components/utility/safe-area.component';
import RestaurantsNavigator from './restaurants.navigator';
import MapScreen from '../../features/map/screens/map.screen';


const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: 'md-restaurant',
    Map: 'md-map',
    Settings: 'md-settings'
}

const Settings = () => {
    return (
        <SafeArea>
            <Text>Settings</Text>
        </SafeArea>
    )
}

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color}></Ionicons>
        )
    }
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={createScreenOptions}
                tabBarOptions={{activeTintColor: 'tomato', inactiveTintColor: 'gray'}}
                >
                    <Tab.Screen options={{headerShown: false}} name='Restaurants' component={RestaurantsNavigator}></Tab.Screen>
                    <Tab.Screen options={{headerShown: false}} name='Map' component={MapScreen}></Tab.Screen>
                    <Tab.Screen options={{headerShown: false}} name='Settings' component={Settings}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
