import { combineReducers, configureStore } from "@reduxjs/toolkit";
import alertsSlice from "./alertSlice";

const rootReducer = combineReducers({
    alert: alertsSlice,
})

const store = configureStore({
    reducer: rootReducer
})

export default store