import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoryScreen from '../screens/CategoryScreen';
import MealOverviewScreen from "../screens/MealOverviewScreen";
import {RootStackParamList} from "./Types";
import {NavigationContainer} from "@react-navigation/native";
import mealDetailScreen from "../screens/MealDetailScreen";


const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={ {headerStyle: {backgroundColor: '#993333'},
                headerTintColor: 'white',
                contentStyle: {backgroundColor: '#ffcc99'}}}>
                <Stack.Screen name="Category" component={CategoryScreen}
                              options={{title: 'Meal Categories',
                              }}
                />
                <Stack.Screen name="MealOverview" component={MealOverviewScreen}/>
                <Stack.Screen name="MealDetail" component={mealDetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
