import { State, City } from 'country-state-city';

export const getStates = (countryCode) => State.getStatesOfCountry(countryCode);

export const getCities = (countryCode, stateCode) => City.getCitiesOfState(countryCode, stateCode);
