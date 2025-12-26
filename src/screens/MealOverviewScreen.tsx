import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList,ListRenderItem } from 'react-native';
import {
    MealOverviewScreenProps,
} from "../navigation/Types";
import {CATEGORIES, MEALS} from "../../data/data";
import MealItem from "../components/MealItem";
import Meal from "../../models/meal";

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



    const renderMealItem: ListRenderItem<Meal> = ({item}:{item: Meal}) => {
        const itemProps = {
            mealId: item.id,
            title: item.title,
            duration: item.duration,
            complexity: item.complexity,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
        }
        return(<MealItem {...itemProps}/>);
    }
    return (
        <View style={styles.container}>
            <View style={styles.list}>

            <FlatList data={displayedMeals}
            renderItem={renderMealItem}
            keyExtractor={(item) => item.id}/>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        backgroundColor: "yellow",
    },
    list: {
        display: 'flex',
        flex: 1,
        width: '90%',
    }
});

export default MealOverviewScreen;
