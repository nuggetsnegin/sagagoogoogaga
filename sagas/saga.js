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
    if(hungi < 100){
      //put dispatch, disput
      yield put({type: 'INCREASE_HUNGER'})
    }
    if(hungi >= 100){
      yield put({type: 'TAMA_CRYING'})
    }
    yield delay(2000)
  }
}

export function* decreaseHappiness(){
  while(true){
    const happi = yield select(getTamaHappiness)
    if(happi > 0){
      yield put({type: 'DECREASE_HAPPINESS'})
    }
    yield delay(7000)
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

export default function* rootSaga() {
    yield all([
      call(incrementHunger),
      call(decreaseHappiness),
      call(decreaseCleanliness)
    ])
  }