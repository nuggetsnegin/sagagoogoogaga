const initialState = {
    happiness: 0,
    hunger: 0,
    clean: 0,
}

export default function pet(state = initialState, action){
    switch(action.type){
        case 'PLAY_TAMA':
            return{...state, happiness: state.happiness +1}
        case 'FEED_TAMA':
            return{...state, hunger: state.hunger +1}
        case 'CLEAN_TAMA':
            return{...state, clean: state.clean +1}
        case 'INCREASE_HUNGER':
            return{...state, hunger: state.hunger -1}
        case 'DECREASE_HAPPINESS':
            return{...state, happiness: state.happiness -1}
        case 'DECREASE_CLEANLINESS':
            return{...state, clean: state.clean -1}
        default:
            return state;
    }
}