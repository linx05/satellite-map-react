export const SET_SATELLITE_LOCATION = 'MAP/SET_SATELLITE_LOCATION';
export const SET_USER_LOCATION = 'MAP/SET_USER_LOCATION';

export const setSatelliteLocation = location => ({ type: SET_SATELLITE_LOCATION, payload: location });
export const setUserLocation = location => ({ type: SET_USER_LOCATION, payload: location });
