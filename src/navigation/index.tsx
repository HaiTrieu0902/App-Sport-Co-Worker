import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from '../constants';
import BottomTabNavigation from './BottomTabNavigation';
const Stack = createStackNavigator();
const NavigationMain = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <>
                    <Stack.Group screenOptions={{ headerShown: false }}>
                        <Stack.Screen name={SCREENS.BOTTOM} component={BottomTabNavigation} />
                    </Stack.Group>
                </>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default NavigationMain;
