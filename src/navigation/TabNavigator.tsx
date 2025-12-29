import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FavoritesContextProvider from "../../store/context/FavoritesContextProvider";
import {NavigationContainer} from "@react-navigation/native";
import {HomeTabParamList, RootStackParamList} from "./Types";
import {RootNavigator} from "./RootNavigator";
import FavoritesScreen from "../screens/FavoritesScreen";
import CategoryScreen from "../screens/CategoryScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator<HomeTabParamList>();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Category" component={CategoryScreen}
            options={{tabBarShowLabel: false,
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons
                        name={focused ? 'home' : 'home-outline'} // Change icon based on focused state
                        color={color}
                        size={size}
                    />
                ),}}/>
            <Tab.Screen name="FavoriteMeals" component={FavoritesScreen}
                options={{tabBarShowLabel: false,
                tabBarIcon: ({ color, size, focused }) => (
                <Ionicons
                name={focused ? 'heart' : 'heart-outline'} // Change icon based on focused state
                        color={color}
                        size={size}
            />
            ),}}/>
        </Tab.Navigator>
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
