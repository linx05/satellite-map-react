import { SET_SATELLITE_LOCATION } from '../actions/satellite';

const initialState = {
  info: {
    satname: 'SPACE STATION',
    satid: 25544,
  },
  position: {},
  positionHistory: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SATELLITE_LOCATION: {
      const { satlatitude: lat, satlongitude: lng, ...position } = action.payload.positions[action.payload.positions.length - 1];

      return {
        ...state,
        info: action.payload.info,
        position: {
          lat,
          lng,
          ...position,
        }
      }
    }
    default:
      return state;
  }
}

export default reducer;
