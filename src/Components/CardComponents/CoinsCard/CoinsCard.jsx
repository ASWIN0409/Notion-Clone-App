import { useNavigate } from "react-router-dom";


function CoinsCard({ coin }) {

    const navigate = useNavigate();

    function onClickHandler() {
        navigate(`${coin.id}`)
    }


    return (
        <div 
        onClick={onClickHandler}
        className="flex list-none border-[2px] border-gray-700 w-[90%] mx-auto text-center m-4 hover:scale-105 transition animate-ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-lg p-4">
            <li className="basis-[25%] flex gap-4 justify-center items-center">
                <div className="w-20">
                    <img src={coin?.image} alt={coin?.name} />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <p>{coin?.symbol}</p>
                    <p>{coin?.name}</p>
                </div>
            </li>
            <li className="basis-[25%] flex justify-center items-center">{coin?.current_price.toFixed(0)}</li>
            <li className="basis-[25%] flex justify-center items-center">{coin?.price_change_24h.toFixed(0)}</li>
            <li className="basis-[25%] flex justify-center items-center">{coin?.high_24h.toFixed(0)}/{coin?.low_24h.toFixed(0)}</li>
        </div>
    );
}

export default CoinsCard;