import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, FlatList, ListRenderItem} from 'react-native';
import {MealDetailScreenProps} from "../navigation/Types";
import {MEALS} from "../../data/data";
import Meal from "../../models/meal";
import meal from "../../models/meal";
import IconButton from "../components/IconButton";
import {FavoritesContext} from "../../store/context/FavoritesContextProvider";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/context/redux/store";
import {addFavorite, removeFavorite} from "../../store/context/redux/favorites";


const MealDetailScreen = ({route, navigation}: MealDetailScreenProps) => {
    const mealId: string = route.params.mealId;
    const pickedMeal = MEALS.find((meal) => meal.id === mealId);
    const ingredients = pickedMeal ? pickedMeal.ingredients : null;
    const cookingSteps = pickedMeal ? pickedMeal.steps : null;
    // const favoriteMealsCtx = React.useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state: RootState)=>
        state.FavoriteMeals.ids);
    const dispatch = useDispatch();
    const mealsFavorite = favoriteMealIds.includes(mealId);


    function handleIconPress(){
        if(mealsFavorite){
            // favoriteMealsCtx?.removeFavorite(mealId);
            dispatch(removeFavorite({id: mealId}))
        }else{
           dispatch(addFavorite({id: mealId}));
        }
    }
    // Use useLayoutEffect to reduce the delay in updating the options
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
               <IconButton icon={ mealsFavorite ? "star": 'star-outline' }
                           color="white" size={24} onPress={handleIconPress}></IconButton>
            ),
        });
    }, [navigation, handleIconPress]); // Re-run when navigation or postText changes

    const renderIngredientItem: ListRenderItem<string> = ({item}) => {
        return (
            <View>
                <Text> {item}</Text>
            </View>
        );
    }
    const renderStepItem: ListRenderItem<string> = ({item}) => {
        return (
            <View>
                <Text> {item}</Text>
            </View>
        );
    }
    return (
        <View  style={styles.container}>
            <View style={styles.list}>
                <Text style={styles.title}>Ingredients</Text>
                <FlatList data={ingredients}
                          renderItem={renderIngredientItem}
                          keyExtractor={(item, index) => index.toString()}/>

            </View>
            <View style={styles.list}>
                <Text style={styles.title}>Cooking Steps</Text>
                <FlatList data={cookingSteps}
                          renderItem={renderStepItem}
                          keyExtractor={(item, index) => index.toString()}/>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        paddingBottom: 20
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default MealDetailScreen;
