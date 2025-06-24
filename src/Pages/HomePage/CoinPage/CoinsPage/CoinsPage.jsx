import { useQuery } from "@tanstack/react-query";
import fetchCoins from "../../../../Services/fetchCoins";
import { useContext, useEffect, useState } from "react";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CoinsCard from "../../../../Components/CardComponents/CoinsCard/CoinsCard";
import CoinsPageButton from "../../../../Components/Button/CoinsPageButton/CoinsPageButton";
import { GlobalContext } from "../../../../Context/GlobalContext";
import CoinsMobileCard from "../../../../Components/CardComponents/CoinsMobileCard/CoinsMobileCard";
import { Facebook } from 'react-content-loader'

function CoinsPage() {

    const [page, setPage] = useState(1);
    const { currency, setCurrency } = useContext(GlobalContext);
    const [toggle, setToggle] = useState(false);

    function handleNextPageClick(e) {
        e.preventDefault();
        setPage(page + 1);
    }

    function handlePrevPageClick(e) {
        e.preventDefault();
        setPage(page - 1);
    }

    function handleClick() {
        setToggle(!toggle);
        setCurrency((prevCurrency) => (prevCurrency === "inr" ? "usd" : "inr"));
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["coins", currency, page],
        queryFn: () => fetchCoins(currency, page),
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    if (isLoading) return <div className="p-10"><Facebook /></div>
    if (isError) return <p>Error: {error.message}</p>

    return (
        <div>
            <div className="flex items-center justify-center gap-2 m-16 ">
                <CurrencyBitcoinIcon fontSize="large" className="text-yellow-800" />
                <h1 className="text-3xl font-black text-center text-yellow-500">Crypto Currrency</h1>
            </div>

            <div className="block md:hidden">
                {data?.map((coin) => (
                    <CoinsMobileCard key={coin.id} coin={coin} />
                ))}
            </div>

            <div className="hidden md:block">
                <div className="flex list-none w-[90%] mx-auto text-center bg-yellow-500 font-bold p-2 rounded-lg">
                    <li className="basis-[25%]">Currency</li>
                    <li onClick={handleClick} className="basis-[25%] cursor-pointer">Current Price {(!toggle) ? <span>(₹)</span> : <span>($)</span>}</li>
                    <li className="basis-[25%]">Price change(24hrs)</li>
                    <li className="basis-[25%]">High-24hrs/Low-24hrs</li>
                </div>

                {data?.map((coin) => (
                    <CoinsCard key={coin.id} coin={coin} />
                ))}
            </div>

            <div className="flex items-center justify-center gap-6 m-9">
                <CoinsPageButton
                    onClick={handlePrevPageClick}
                    buttonText="Prev"
                />
                <CoinsPageButton
                    onClick={handleNextPageClick}
                    buttonText="Next"
                />
            </div>
        </div>

    );
}

export default CoinsPage;