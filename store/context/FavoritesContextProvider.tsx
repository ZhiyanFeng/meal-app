import React, {createContext, useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export interface FavoritesContextType {
    favorites: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
}

export const FavoritesContext =createContext<FavoritesContextType | undefined>(undefined);
type props = {
    children: React.ReactNode;
}
// Create the custom hook
export const useFavorites = () => {
    const context = useContext(FavoritesContext);

    if (context === null) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};
const FavoritesContextProvider = (props: props) => {
    const [favorites, setFavorites] = useState<string[]>([]);

    const addFavorite = (id: string) => {
        setFavorites((prev) => [...prev, id]);
    };

    const removeFavorite = (id: string) => {
        setFavorites((prev) => prev.filter(fav => fav !== id));
    };

    // This is the object you pass down
    const contextValue: FavoritesContextType = {
        favorites,
        addFavorite,
        removeFavorite,
    };

    return (
        <FavoritesContext.Provider value={contextValue}>
            {props.children}
        </FavoritesContext.Provider>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FavoritesContextProvider;
