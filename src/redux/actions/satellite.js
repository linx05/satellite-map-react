/**
 * *******
 * ACTIONS
 * *******
 */

export const SET_SATELLITE_LOCATION = 'SATELLITE/SET_SATELLITE_LOCATION';

// This action will be dispatched when we want to fetch the satellite location
export const FETCH_SATELLITE_LOCATION = 'SATELLITE/FETCH_SATELLITE_LOCATION';

// This actions will dispatched when we want to start polling the satellite location
export const START_POLLING_SATELLITE_LOCATION =
  'SATELLITE/START_POLLING_SATELLITE_LOCATION';

export const STOP_POLLING_SATELLITE_LOCATION =
  'SATELLITE/STOP_POLLING_SATELLITE_LOCATION';

/**
 * ***************
 * ACTION CREATORS
 * ***************
 */

export const setSatelliteLocation = location => ({
  type: SET_SATELLITE_LOCATION,
  payload: location
});

export const startPollingSatelliteLocation = () => ({
  type: START_POLLING_SATELLITE_LOCATION
});

export const stopPollingSatelliteLocation = () => ({
  type: STOP_POLLING_SATELLITE_LOCATION
});

export const fetchSatelliteLocation = () => ({
  type: FETCH_SATELLITE_LOCATION
});
