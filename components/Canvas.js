import { useSelector, useDispatch } from 'react-redux'
import { pet } from '../actions/pet'
export default function Canvas(){

    const petNum = useSelector(state => state.pet.pet)
    const dispatch = useDispatch()

    console.log(petNum)


    return(
        <div className="container">
            <span>Pets: {petNum}</span>
            <h2><button onClick={() => dispatch(pet)}>(ﾉΦωΦ)ﾉ</button></h2>
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
