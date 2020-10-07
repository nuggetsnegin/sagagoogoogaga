import { useSelector, useDispatch } from 'react-redux'
import { play } from '../actions/actions'
import Status from './Status'
export default function Canvas(){

    const playTama = useSelector(state => state.play)
    const dispatch = useDispatch()

    console.log(playTama)


    return(
        <div className="container">
            <Status/>
            <h2><button onClick={() => dispatch(playTama)}>(ﾉΦωΦ)ﾉ</button></h2>
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
