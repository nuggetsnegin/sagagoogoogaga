const initialState = {
    pet: 0,
    love: 0,
    hungry: true,
}

const petCat = (cat) =>{
    console.log(cat.target().value)
}

export default function pet(state = initialState, action){
    switch(action.type){
        case 'PET_CAT':
            return{...state}
        default:
            return state;
    }
}