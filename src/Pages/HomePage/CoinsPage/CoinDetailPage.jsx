import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchCoinDetails from "../../../api/fetchCoinDetails";

function CoinDetailPage() {

    const { coinId } = useParams();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["coin"],
        queryFn: () => fetchCoinDetails(coinId),
        staleTime: 1000 * 60 * 2,
        cacheTime: 1000 * 60 * 2,
    });

    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Error: {error.message}</p>

    return (
        <div>hello</div>
    );
}

export default CoinDetailPage;