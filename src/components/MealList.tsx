import React from 'react';
import {View, Text, StyleSheet, ListRenderItem, FlatList} from 'react-native';
import Meal from "../../models/meal";
import MealItem from "./MealItem";

type Props = {
    displayedMeals: Meal[];
}
const MealList = ({displayedMeals}: Props) => {
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

export default MealList;
