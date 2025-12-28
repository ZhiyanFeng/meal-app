import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CategoryScreen from "./src/screens/CategoryScreen";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealOverviewScreen from "./src/screens/MealOverviewScreen";
import {RootNavigator} from "./src/navigation/RootNavigator";
import TabNavigator from "./src/navigation/TabNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <StatusBar style="light"/>
            <TabNavigator>

            </TabNavigator>
        </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
