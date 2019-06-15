import SatelliteAPI from '../../services/SatelliteAPI';

export const SET_SATELLITE_LOCATION = 'SATELLITE/SET_SATELLITE_LOCATION';

export const setSatelliteLocation = location => ({
  type: SET_SATELLITE_LOCATION,
  payload: location
});

export const getSatelliteLocation = () => {
  return (dispatch, getState) => {
    const userLocation = getState().map.userLocation;

    SatelliteAPI.getPositions(userLocation).then(data => {
      dispatch(setSatelliteLocation(data));
    });
  };
};
