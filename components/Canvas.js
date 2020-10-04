import  { connect } from 'react-redux';
import { pet } from '../actions/pet'
function Canvas(){

    const handleClick = (e) =>{
        console.log(e.target.value)
    }

    return(
        <div className="container">
            <h2><button onClick={handleClick}>(ﾉΦωΦ)ﾉ</button></h2>
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

const mapStateToProps = (state) =>({
    pet: state.pet.pet,
})

const mapDispatchToProps = (dispatch) =>{
    return {
        petCat:  (cat) => dispatch(pet(cat))
    }
}

export default connect(mapStateToProps)(mapDispatchToProps)(Canvas);