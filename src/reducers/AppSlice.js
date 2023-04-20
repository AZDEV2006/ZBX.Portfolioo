import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Data : {
        Mydata : [],
        Myportfolio : [],
        FilterDetails : [],
        idSelect : null,
        NumData : 0
    },
    StateToggle : {
        DetailsPort : false,
    }
}

export const app = createSlice({
    name : 'app',
    initialState,
    reducers : {
        setData : (state, action) => {
            state.Data = {
                ...state.Data,
                ...action.payload
            }
        },
        setStateToggle : (state, action) => {
            state.StateToggle = {
                ...state.StateToggle,
                ...action.payload
            }
        },
    }
})

export const {
    setData,
    setStateToggle
} = app.actions

export default app.reducer;