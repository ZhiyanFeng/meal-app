import React, {useContext, useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MealList from "../components/MealList";
import Meal from "../../models/meal";
import {FavoritesContext, FavoritesContextType, useFavorites} from "../../store/context/FavoritesContextProvider";
import {MEALS} from "../../data/data";

const FavoritesScreen = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        // Handle the case where there is no provider (e.g., return null, show an error state)
        return <Text>Error: Favorites context not available</Text>;
    }
    // Now TypeScript knows favoritesContext is defined, so you can safely destructure
    const {favorites} = context;
    const displayedMeals : Meal[] = [];
        MEALS.filter(meal => {
        favorites.forEach((id) => {
            if (meal.id === id) {
                displayedMeals.push(meal);
            }
        })
    })

    return <MealList displayedMeals={displayedMeals}/>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FavoritesScreen;
