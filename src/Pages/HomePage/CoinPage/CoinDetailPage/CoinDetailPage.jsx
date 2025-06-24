import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchCoinDetails from "../../../../Services/fetchCoinDetails";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { Facebook } from 'react-content-loader'

function CoinDetailPage() {

    const { coinId } = useParams();

    const { data: coin, isLoading, isError, error } = useQuery({
        queryKey: ["coin", coinId],
        queryFn: () => fetchCoinDetails(coinId),
        staleTime: 1000 * 60 * 2,
        cacheTime: 1000 * 60 * 2,
    });

    if (isLoading) return <div className="p-10"><Facebook /></div>
    if (isError) return <p>Error: {error.message}</p>

    return (
        <div className="w-[90%] mx-auto">

            <div className="flex items-center justify-center gap-2 m-16 ">
                <CurrencyBitcoinIcon fontSize="large" className="text-yellow-800" />
                <h1 className="text-3xl font-black text-center text-yellow-500">Crypto Currrency</h1>
            </div>

            <div className="flex flex-col mt-20 p-2 justify-center items-center text-[#3e3e3e] dark:text-gray-300 gap-4">

                <img
                    src={coin?.image?.large}
                    alt={coin?.name}
                    className="mb-5 h-52"
                />
                <h1 className="mb-5 text-4xl font-bold">{coin?.name}</h1>
                <h2 className="text-xl text-green-700">Rank: {coin?.market_cap_rank}</h2>
                <h2 className="text-xl text-green-700">Subscribers: {coin?.developer_data?.subscribers}</h2>
                <h2 className="text-xl text-green-700">Current Price: {coin?.market_data?.current_price?.inr}</h2>

                <p className="w-full px-6 py-4 text-xl text-justify">{coin?.description?.en}</p>

            </div>

        </div>
    );
}

export default CoinDetailPage;