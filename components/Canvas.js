import { useSelector, useDispatch } from 'react-redux'
import { play } from '../actions/actions'
import { decreaseCleanliness, decreaseHappiness, incrementHunger } from '../sagas/saga'
import Status from './Status'
export default function Canvas(){

    //when to use this versus mapstatetoprops?
    const tamaHappiness = useSelector(state => state.happiness)
    const tamaHunger = useSelector(state => state.hunger)
    const tamaCleanliness = useSelector(state => state.clean)
    const dispatch = useDispatch()

    //saga only runs once - is this the right way of calling it?


    for(let i = 0; i < 200; i++){
        incrementHunger()
        decreaseHappiness()
        decreaseCleanliness()
    }

    return(
        <div className="container">
            <Status happiness={tamaHappiness} hunger={tamaHunger} clean={tamaCleanliness }/>
            <h2><button onClick={() => dispatch(play)}>(ﾉΦωΦ)ﾉ</button></h2>
            <style jsx>{`
                button{
                    font-size: 10rem;
                    border: none;
                    background: none;
                }
                button:hover,
                button:focus{
                    cursor: grabbing;
                }
            `}</style>
        </div>
    )
}

// const mapStateToProps = (state) =>({
//     pet: state.pet.pet,
// })

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         petCat: (cat) => dispatch(pet(cat))
//     }
// }
