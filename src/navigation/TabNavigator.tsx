import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FavoritesContextProvider from "../../store/context/FavoritesContextProvider";
import {NavigationContainer} from "@react-navigation/native";
import {RootStackParamList} from "./Types";
import {RootNavigator} from "./RootNavigator";
import FavoritesScreen from "../screens/FavoritesScreen";
import Meal from "../../models/meal";
import MealDetailScreen from "../screens/MealDetailScreen";

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigator = () => {
    return (
        <FavoritesContextProvider>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Category" component={RootNavigator}
                                  options={{headerShown:false}}
                    />
                    <Tab.Screen name="FavoriteMeals" component={FavoritesScreen} />
                    <Tab.Screen name="MealDetail" component={MealDetailScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </FavoritesContextProvider>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TabNavigator;
