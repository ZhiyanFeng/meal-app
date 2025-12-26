import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {CATEGORIES} from "../../data/data";
import CategoryGridTile from "../components/CategoryGridTile";
import Category from "../../models/category";
import {SafeAreaView} from 'react-native-safe-area-context';
import {CategoryScreenProps} from "../navigation/Types";

const CategoryScreen = ({route, navigation}: CategoryScreenProps ) => {

    function renderCategoryItem({item}: { item: Category }) {

        return <CategoryGridTile title={item.title} color={item.color}
                                 onPress={
                                ()=>navigation.navigate('MealOverview', {categoryId: item.id})
                                 } />
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.list}>
                <FlatList data={CATEGORIES}
                          keyExtractor={(item: Category) => item.id}
                          renderItem={renderCategoryItem} numColumns={2}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        display: 'flex',
        flex: 1,
        width: '100%',
    }
});

export default CategoryScreen;
