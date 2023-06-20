import { Country } from "./interfaces"

export const getCurrency = (country: Country | undefined): string => {
    if(!country) return ''
    let currency = ''
    if(country.currencies){
        const keysFromCurrencies = Object.keys(country.currencies)
        currency = keysFromCurrencies[0]
    }
    return currency
}
