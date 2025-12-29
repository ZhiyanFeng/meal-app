// src/navigation/types.ts or types.ts
import type {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack';
import Meal from "../../models/meal";
import {NavigatorScreenParams} from "@react-navigation/native";

export type HomeTabParamList = {
    Category: undefined;
    FavoriteMeals: {displayedMeals: Meal[]};
}

export type CategoryScreenProps = NativeStackScreenProps<HomeTabParamList, 'Category'>;
export type FavoriteScreenProps = NativeStackScreenProps<HomeTabParamList, 'FavoriteMeals'>;

export type RootStackParamList = {
    HomeTabs: NavigatorScreenParams<HomeTabParamList>; // No params expected
    MealOverview: { categoryId: string };
    MealDetail: {mealId: string};
};

export type MealOverviewScreenProps = NativeStackScreenProps<RootStackParamList, 'MealOverview'>;
export type MealDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'MealDetail'>;
// Type for the navigation prop

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

// export type BottomTabStackNavigatonProps = NativeStackNavigationProp<HomeTabParamList>;



