import { useSelector, useDispatch } from 'react-redux'
import { getTamaHappiness, getTamaHunger, getTamaCleanliness } from '../selectors'
import { play } from '../actions/actions'
import Status from './Status'

export default function Canvas(){

    const dispatch = useDispatch()

    const tamaHappiness = useSelector(getTamaHappiness)
    const tamaHunger = useSelector(getTamaHunger)
    const tamaCleanliness = useSelector(getTamaCleanliness)

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
