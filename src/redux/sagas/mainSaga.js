import { all, takeEvery } from 'redux-saga/effects';
import listSaga from './listSaga';
import authSaga from './authSaga';

function* helloSaga() {
  console.log('Hello from saga!');
}

export function* mainSaga() {
  yield all([takeEvery('TEST/ALO', helloSaga), listSaga, authSaga]);
}
