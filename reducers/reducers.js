import u from 'updeep'

const initialState = {
    happiness: 0,
    hunger: 0,
    clean: 0,
}

const tamaCrying = () =>{
    console.log('i am sad')
}

export default function tama(state = initialState, action){
    switch(action.type){
        case 'PLAY_TAMA':
            return u({happiness: state.happiness +1}, state)
        case 'FEED_TAMA':
            return u({hunger: state.hunger -5}, state)
        case 'CLEAN_TAMA':
            return u({clean: state.clean +10}, state)
        case 'INCREASE_HUNGER':
            return u({hunger: state.hunger +1}, state)
        case 'DECREASE_HAPPINESS':
            return u({happiness: state.happiness -1}, state)
        case 'DECREASE_CLEANLINESS':
            return u({clean: state.clean -1}, state)
        case 'TAMA_CRYING':
            const crying = tamaCrying()
            return {...state, crying}
        default:
            return state;
    }
}