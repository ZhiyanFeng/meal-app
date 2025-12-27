import React, {ComponentProps} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export type IoniconsName = ComponentProps<typeof Ionicons>['name'];

type props = {
    icon: IoniconsName;
    color: string;
    size: number;
    onPress?: () => void;
}
const IconButton = ({ icon, color, size, onPress} : props) => {
    return (
        <View>
            <Pressable>
                <Ionicons name={icon} size={size} color={color} onPress={onPress} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default IconButton;
