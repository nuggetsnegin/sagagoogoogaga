import { call, put, all, delay, select } from 'redux-saga/effects'
import { getTamaHappiness, getTamaHunger, getTamaCleanliness } from '../selectors'

//takeEvery - listening for actions
//select - pass it a selector to use in sagas


//want to intermitently dispatch actions,
//currently creating generators that have delays and dispatch the action
//while (true)



//if hunger hits a certain threshold that dispatches an action (start crying action :( ))
//bellow a certain threshold stops crying

//use a selector and if theyre crying and hunger is bellow some num then stop crying

export function* incrementHunger(){
  while(true){
    const hungi = yield select(getTamaHunger)
    if(hungi < 5){
      //put dispatch, disput
      yield put({type: 'INCREASE_HUNGER'})
    }
    yield delay(1000)
  }
}

export function* decreaseHappiness(){
  while(true){
    const happi = yield select(getTamaHappiness)
    if(happi > 5){
      yield put({type: 'DECREASE_HAPPINESS'})
    }
    yield delay(2000)
  }
}

export function* decreaseCleanliness(){
  while(true){
    const clun = yield select(getTamaCleanliness)
    if(clun > 0){
      yield put({type: 'DECREASE_CLEANLINESS'})
    }
    yield delay(9000)
  }
}

//single ppont of entry for all sagas
//yield all will run all the effects, but we want to make they'll rerun
//yield all will not know whether to restart them
export default function* rootSaga() {
    yield all([
      call(incrementHunger),
      call(decreaseHappiness),
      call(decreaseCleanliness)
    ])
  }