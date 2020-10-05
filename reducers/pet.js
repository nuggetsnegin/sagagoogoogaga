const initialState = {
    pet: 0,
    love: 0,
    hungry: true,
}

export default function pet(state = initialState, action){
    switch(action.type){
        case 'PET_CAT':
            return{...state, pet: state.pet + 1}
        default:
            return state;
    }
}