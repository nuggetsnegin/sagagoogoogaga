import { call, put, all, delay, takeEvery } from 'redux-saga/effects'

export function* incrementHunger(){
    yield delay(1000)
    yield put({type: 'INCREASE_HUNGER'})
}

export function* decreaseHappiness(){
    yield delay(2000)
    yield put({type: 'DECREASE_HAPPINESS'})
}

export function* decreaseCleanliness(){
  yield delay(9000)
  yield put({type: 'DECREASE_CLEANLINESS'})
}

//single ppont of entry for all sagas
export default function* rootSaga() {
    yield all([
      call(incrementHunger),
      call(decreaseHappiness),
      call(decreaseCleanliness)
    ])
  }