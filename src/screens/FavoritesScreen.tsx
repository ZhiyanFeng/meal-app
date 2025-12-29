import React from 'react';
import { StyleSheet} from 'react-native';
import MealList from "../components/MealList";
import {MEALS} from "../../data/data";
import {useSelector} from "react-redux";
import {RootState} from "../../store/context/redux/store";
import Meal from "../../models/meal";

const FavoritesScreen = () => {
    // Now TypeScript knows favoritesContext is defined, so you can safely destructure
    const favorites = useSelector((state:RootState)=> state.FavoriteMeals.ids)

    const displayedMeals: Meal[] = [];
     MEALS.filter(meal => {
         if(favorites.includes(meal.id)){
             displayedMeals.push(meal);
         }
    });

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
