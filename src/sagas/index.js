import { all } from 'redux-saga/effects';

import satelliteSagas from './satellite';

export default function* rootSaga() {
  yield all([...satelliteSagas]);
}
