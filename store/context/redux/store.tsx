import {configureStore} from "@reduxjs/toolkit";
import favoriteReducer from './favorites';
const store = configureStore({
        reducer: { FavoriteMeals: favoriteReducer}
    }
)


export default store;
// Define and export RootState type from the store itself
export type RootState = ReturnType<typeof store.getState>;
