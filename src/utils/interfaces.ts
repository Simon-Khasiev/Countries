export interface Country {
    altSpellings: string[],
    area: number, 
    borders: string[],
    capital: string[],
    capitalInfo: CapitalInfo,
    car: Car,
    cca2: string,
    cca3: string,
    ccn3: string,
    cioc: string,
    coatOfArms: CoatOfArms,
    continents: string[], 
    currencies?: Currencies, 
    demonyms: Demonyms,
    fifa: string,
    flag: string,
    flags: Flags,
    gini: Gini,
    idd: Idd,
    independent: boolean,
    landlocked: boolean,
    languages: Languages,
    latlng: number[],
    maps: Maps,
    name: Name,
    population: number,
    postalCode: PostalCode,
    region: string,
    startOfWeek: string,
    status: string,
    subregion: string,
    timezones: string[],
    tld: string[],
    translations: RepeatInterface,
    unMember: boolean
}

export interface ShortInfoAboutCountry {
    cca3: string,
    flags: Flags,
    name: Name
}

interface RepeatInterface {
    [key: string]: {
        official: string,
        common: string
    }
}

interface Car {
    signs: string[],
    side: string,
}

interface CapitalInfo { 
    latilng: number[] 
}

interface CoatOfArms {
    png: string,
    svg: string,
}

interface Currencies {
    [key: string]: {
        name: string,
        symbol: string,
    }
}

interface Demonyms {
    eng: string,
    fra: string,
}

interface Flags {
    png: string,
    svg: string,
    alt: string,
}

interface Gini {
    [key: string]: number
}

interface Idd {
    root: string,
    suffixes: string[],
}

interface Languages {
    [key: string]: string,
}

interface Maps {
    googleMaps: string,
    openStreetMaps: string,
}

interface Name {
    common: string,
    official: string,
    nativeName: RepeatInterface,
}

interface PostalCode {
    format: string,
    regex: string,
}
