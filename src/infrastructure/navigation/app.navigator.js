import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
import { SettingsNavigator } from './settings.navigator';
import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { FavouritesContextProvider } from '../../services/favourites/favourites.context';
const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => {
    return {
        tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Restaurants') {
                iconName = 'md-fast-food';
            } else if (route.name === 'Map') {
                iconName = 'md-map';
            } else if (route.name === 'Settings') {
                iconName = 'md-settings';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF00FF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
    };
}

export const AppNavigator = () => {
    return (

        <FavouritesContextProvider>
            <LocationContextProvider>
                <RestaurantsContextProvider>
                    <Tab.Navigator screenOptions={screenOptions}>
                        <Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
                        <Tab.Screen name='Map' component={MapScreen} />
                        <Tab.Screen name='Settings' component={SettingsNavigator} />
                    </Tab.Navigator>
                </RestaurantsContextProvider>
            </LocationContextProvider>
        </FavouritesContextProvider>
    )
}