import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList,ListRenderItem } from 'react-native';
import {
    MealOverviewScreenProps,
} from "../navigation/Types";
import {CATEGORIES, MEALS} from "../../data/data";
import MealItem from "../components/MealItem";
import Meal from "../../models/meal";
import MealList from "../components/MealList";

const MealOverviewScreen = ({route, navigation}: MealOverviewScreenProps) => {
   const categoryId = route.params.categoryId;
    const displayedMeals = MEALS.filter(meal => {
        if(meal.categoryIds.indexOf(categoryId) >= 0){
            return meal;
        }
    })
    useEffect(()=>{
            const category = CATEGORIES.find(category => category.id === categoryId);
        if(category){
            navigation.setOptions({
                title: category.title,
            });
        }
   }, [categoryId, navigation]);

    return (
        <MealList displayedMeals={displayedMeals}></MealList>
    )




};



export default MealOverviewScreen;
