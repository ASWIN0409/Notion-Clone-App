function CoinsMobileCard({ coin }) {
    return (
        <div className="flex flex-col list-none border-[2px] border-gray-700 h-full w-80 mx-auto text-center m-4 hover:scale-105 transition animate-ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-lg p-4" >
            <div className="flex flex-col items-center justify-center ">
                <div><img src={coin?.image} alt={coin?.name} /></div>
                <p>{coin?.name}</p>
                <p>{coin?.symbol}</p>
            </div>
            <div className="flex flex-col items-center justify-start">
                <p>Current Price: {coin?.current_price.toFixed(0)}</p>
                <p>Price change(24hrs): {coin?.price_change_24h.toFixed(0)}</p>
                <p>High-24hrs: {coin?.high_24h.toFixed(0)}</p>
                <p>Low-24hrs: {coin?.low_24h.toFixed(0)}</p>
            </div>
        </div >
    );
}

export default CoinsMobileCard;