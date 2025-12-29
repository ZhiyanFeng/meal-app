import {Dispatch} from "redux"
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Meal from "../../../models/meal";

interface State {
    ids: string[];
}
const initialState: State = {
    ids:[]
}

interface PayloadType {
    id: string;
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action :{ payload: PayloadType}) => {
            const id = action.payload.id;
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action:{ payload: PayloadType;}) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;