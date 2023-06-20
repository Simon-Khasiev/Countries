import { configureStore } from "@reduxjs/toolkit"
import countriesReducer from './countries'

export const store = configureStore({
    reducer: { countries: countriesReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
