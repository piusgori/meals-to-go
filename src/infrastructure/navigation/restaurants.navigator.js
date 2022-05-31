import React from'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import RestaurantScreen from '../../features/restaurants/screens/restaurant.screen';
import RestaurantDetailScreen from '../../features/restaurants/screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator headerMode="none" screenOptions={{...TransitionPresets.ModalPresentationIOS}}>
            <RestaurantStack.Screen name='Restaurants' component={RestaurantScreen}></RestaurantStack.Screen>
            <RestaurantStack.Screen name='RestaurantDetail' component={RestaurantDetailScreen}></RestaurantStack.Screen>
        </RestaurantStack.Navigator>
    )
}

export default RestaurantsNavigator;