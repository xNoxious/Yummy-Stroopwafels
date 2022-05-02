import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from '../../components/safe-area.component';
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';

const Tab = createBottomTabNavigator();

const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>;

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
        <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
                <Tab.Screen name='Map' component={MapScreen} />
                <Tab.Screen name='Settings' component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}