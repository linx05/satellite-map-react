import { takeLatest } from 'redux-saga/effects';
import {
  FETCH_SATELLITE_LOCATION,
  START_POLLING_SATELLITE_LOCATION
} from '../redux/actions/satellite';

// Workers
function* fetchLatestPosition() {
  // Get observer position
  // Call API to fetch the satellite positions
  // Dispatch an action to update the redux state
}

function* startPolling() {
  // Start an infinite loop, start an infinite loop, start an infinite loop...
  while (true) {
    // Fetch latest satellite location
    // Once latest location is fetched, wait tree seconds before pulling it again
  }
}

function* handlePolling() {
  // Start the polling process
  // Wait until we hear a cancelling action
  // Cancel the polling process
}

// Listeners
export default [];
