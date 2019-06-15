import { takeLatest, takeEvery, select, call, put, delay, fork, take, cancel } from 'redux-saga/effects';
import {
  FETCH_SATELLITE_LOCATION,
  START_POLLING_SATELLITE_LOCATION,
  STOP_POLLING_SATELLITE_LOCATION,
  setSatelliteLocation
} from '../redux/actions/satellite';
import SatelliteAPI from '../services/SatelliteAPI';

const selectUserLocation = state => state.map.userLocation;

// Workers
function* fetchLatestPosition() {
  // Get observer position
  const userLocation = yield select(selectUserLocation);

  // Call API to fetch the satellite positions
  const response = yield call(SatelliteAPI.getPositions, userLocation);

  // Dispatch an action to update the redux state
  yield put(setSatelliteLocation(response));
}

function* startPolling() {
  // Start an infinite loop, start an infinite loop, start an infinite loop...
  while (true) {
    // Fetch latest satellite location
    yield call(fetchLatestPosition);
    // Once latest location is fetched, wait tree seconds before pulling it again
    yield delay(3000);
  }
}

function* handlePolling() {
  // Start the polling process
  const pollingTask = yield fork(startPolling)
  // Wait until we hear a cancelling action
  yield take(STOP_POLLING_SATELLITE_LOCATION);
  // Cancel the polling process
  yield cancel(pollingTask);
}

// Listeners
export default [takeEvery(START_POLLING_SATELLITE_LOCATION, handlePolling)];
