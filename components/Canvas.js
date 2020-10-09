import { useSelector, useDispatch } from 'react-redux'
import { getTamaHappiness, getTamaHunger, getTamaCleanliness } from '../selectors'
import { play, feed, clean, tamaCry } from '../actions/actions'
import Status from './Status'

export default function Canvas(){

    const dispatch = useDispatch()

    const tamaHappiness = useSelector(getTamaHappiness)
    const tamaHunger = useSelector(getTamaHunger)
    const tamaCleanliness = useSelector(getTamaCleanliness)

    return(
        <div className="container">
            <Status happiness={tamaHappiness} hunger={tamaHunger} clean={tamaCleanliness} />
            {tamaCry ? <span className="cry">💧</span> : null }
            <h2><button onClick={() => dispatch(play)}>(ﾉΦωΦ)ﾉ</button></h2>
            <button onClick={() => dispatch(feed)}>🍖</button>
            <button onClick={() => dispatch(clean)}>🧻</button>
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
                .container{
                    position: relative;
                }
                .cry{
                    position: absolute;
                    font-size: 7rem;
                    z-index: 2;
                    top: 170px;
                    left: 140px;
                }

            `}</style>
        </div>
    )
}