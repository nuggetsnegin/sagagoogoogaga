import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

export function* incrementHunger(){
    yield delay(1000)
    yield put({type: 'INCREASE_HUNGER'})
}

export function* decreaseHappiness(){
    yield delay(1000)
    yield put({type: 'DECREASE_HAPPINESS'})
}

//single ppont of entry for all sagas
export default function* rootSaga() {
    yield all([
      call(incrementHunger),
      call(decrementHappiness),
    ])
  }