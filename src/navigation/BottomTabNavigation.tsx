import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SCREENS } from '../constants';
import HomeScreens from '../screens/Home';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName={SCREENS.HOME} screenOptions={{}}>
            <Tab.Screen
                name={SCREENS.HOME}
                component={HomeScreens}
                options={{
                    tabBarLabel: 'Home',
                    // tabBarIcon: ({ color, size }) => <Icon name="house-user" color={color} size={20} />,
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigation;
