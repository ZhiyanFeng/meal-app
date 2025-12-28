// src/navigation/types.ts or types.ts
import type {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack';
import Meal from "../../models/meal";

export type RootStackParamList = {
    Category: undefined; // No params expected
    MealOverview: { categoryId: string };
    MealDetail: {mealId: string};
    FavoriteMeals: {displayedMeals: Meal[]};
};

// Define the type for a specific screen, e.g., 'Category'
export type MealOverviewScreenProps = NativeStackScreenProps<RootStackParamList, 'MealOverview'>;
export type CategoryScreenProps = NativeStackScreenProps<RootStackParamList, 'Category'>;
export type MealDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'MealDetail'>;


// Type for the navigation prop
export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;



