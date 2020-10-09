export default function Status({ happiness, hunger, clean }){

    return(
        <div className="status-bar">
            <span>Happiness: { happiness}</span>
            <span>Hunger: {hunger}</span>
            <span>Cleanliness: {clean}</span>

            <style jsx>{`
                .status-bar{
                    display: flex;
                    justify-content: space-evenly;
                }
                span{
                    display: flex;
                    justify-content: space-evenly;
                    font-weight: bold;
                }
            `}</style>
        </div>
    )
}