export default function Status({ happiness, hunger, clean }){

    return(
        <div>
            <span>Happiness:{ happiness}</span>
            <span>Hunger: {hunger}</span>
            <span>Cleanliness: {clean}</span>

            <style jsx>{`
                span{
                    display: flex;
                    justify-content: space-evenly;
                    font-weight: bold;
                }
            `}</style>
        </div>
    )
}