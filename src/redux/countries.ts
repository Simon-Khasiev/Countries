import { Country, ShortInfoAboutCountry } from "../utils/interfaces"
import { createSlice } from "@reduxjs/toolkit"
import { AppDispatch } from "./store"
import axios from "axios"

interface InitialState {
    all: ShortInfoAboutCountry[] | null,
    current: Country | undefined,
}

const initialState: InitialState = {
    all: null,
    current: undefined,
}

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,

    reducers: {
        setAllCountries: (state, action) => {state.all = action.payload},
        setCurrentCountry: (state, action) => {
            state.current =  action.payload
            sessionStorage.setItem('current', JSON.stringify(state.current));
        }
    }
    
})

export const { setAllCountries, setCurrentCountry } = countriesSlice.actions;

export const getAllCountries = () => (dispatch: AppDispatch) => {
    axios.get('https://restcountries.com/v3.1/all?fields=name,flags,cca3')
    .then(response => {
        const sortedData = response.data.sort((a: ShortInfoAboutCountry, b: ShortInfoAboutCountry) => {
            if(a.name.common < b.name.common) { return -1; }
            if(a.name.common > b.name.common) { return 1; }
            return 0;
        })
        dispatch(setAllCountries(sortedData))
    })
}

export const getCurrentCountry = (cca3: string) => (dispatch: AppDispatch) => {
    axios.get(`https://restcountries.com/v3.1/alpha/${cca3}`)
    .then(response => {
        dispatch(setCurrentCountry(response.data[0]))
    })
}

export default countriesSlice.reducer
