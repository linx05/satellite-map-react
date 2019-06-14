import { SET_SATELLITE_LOCATION, SET_USER_LOCATION } from '../actions/Map';

const initialState = {
  userLocation: {
    lat: 29.097582,
    lng: -111.021851,
  },
  satelliteLocation: {
    info: {
      satname: 'SPACE STATION',
      satid: 25544,
    },
    position: {},
  },
  positionHistory: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOCATION: {
      return {
        ...state,
        userLocation: action.payload,
      };
    }
    case SET_SATELLITE_LOCATION: {
      const { satlatitude: lat, satlongitude: lng, ...position } = action.payload.positions[action.payload.positions.length - 1];

      return {
        ...state,
        satelliteLocation: {
          info: action.payload.info,
          position: {
            lat,
            lng,
            ...position,
          }
        }
      }
    }
    default:
      return state;
  }
}

export default reducer;
