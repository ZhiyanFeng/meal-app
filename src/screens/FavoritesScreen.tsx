import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MealList from "../components/MealList";
import Meal from "../../models/meal";

type Props = {
    displayedMeals: Meal[];
}

const FavoritesScreen = ({ displayedMeals }: Props) => {
    return (
       <MealList displayedMeals={displayedMeals}></MealList>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FavoritesScreen;
