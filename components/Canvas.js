import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../actions/actions'
import Status from './Status'
export default function Canvas(){

    const play = useSelector(state => state.actions.play)
    const dispatch = useDispatch()

    console.log(petNum)


    return(
        <div className="container">
            <Status/>
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
