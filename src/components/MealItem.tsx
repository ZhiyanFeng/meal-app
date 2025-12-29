import {View, Text, StyleSheet, Pressable, Image, Platform} from 'react-native'
import React, {useCallback} from 'react'
import {useNavigation} from "@react-navigation/native";
import {RootStackNavigationProp, RootStackParamList} from "../navigation/Types";

type MealItemProps = {
    mealId: string;
    title: string;
    imageUrl: string;
    duration: number;
    complexity: string;
    affordability: string;
};
const MealItem = ({mealId, title, imageUrl, duration, complexity, affordability}:MealItemProps) => {

    const navigation = useNavigation<RootStackNavigationProp>();

    const handlePress = (() => {
        navigation.navigate('MealDetail', {mealId:mealId});
    })

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc',foreground: true}}
                       onPress={() => handlePress()}>
                <View>
                    <Image source={{uri: imageUrl}} style={styles.image}></Image>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.mealItem}>{duration}</Text>
                    <Text style={styles.mealItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.mealItem}>{affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowOpacity: 0.25,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 16,
        overflow: Platform.OS === 'android' ?'hidden' : "visible",
    },
    image: {
        width: '100%',
        height:200,
    },
    title: {
        margin: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
    details: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal:4,
        fontSize:12
    }
});

export default MealItem
