import React from "react";
import { NavigationContainer } from '@react-navigation/native' ;
import { createStackNavigator } from '@react-navigation/stack' ;
import LoginScreen from "./SCREENS/LoginScreen";
import HomeScreen from "./SCREENS/HomeScreen";
import FoodDetailScreen from "./SCREENS/FoodDetailScreen";

const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{headerShown:  false}}
                />
                <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Menu Management'}}
                />
                <Stack.Screen
                name= "FoodDetail"
                component={FoodDetailScreen}
                options={{ title: 'Food Details' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}