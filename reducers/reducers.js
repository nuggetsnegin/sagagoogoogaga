import u from 'updeep'

const initialState = {
    peepeepoopoo: {
        pee: {
            poo: true
        }
    },
    happiness: 0,
    hunger: 0,
    clean: 0,
}

//SIMON encourages to use updeep 
//obj you want to update the first arg is a 'deep partial' (obj nested within obj, dont wanna have to copy new versions of that obj)
//updeep abstracts that 
export default function tama(state = initialState, action){
    switch(action.type){
        case 'PLAY_TAMA':
            //copied state and then peepeepoopoo is just a regular partial of the piece of state (slice of the redux store but its an entire piece of the redux store)
            //return{...state, peepeepoopoo: {...state.peepeepoopoo, pee: {...state.peepeepoopoo.pee, poo: false}}}
            //deep partial, partial slice of your initial state at an arbritary level of nesting
            //return u({peepeepoopoo: {pee: {poo: false}}}, state)
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
            return u({state, clean: state.clean -1}, state)
        default:
            return state;
    }
}