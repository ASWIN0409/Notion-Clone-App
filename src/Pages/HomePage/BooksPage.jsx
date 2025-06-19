import { useQuery } from "@tanstack/react-query";
import fetchBooks from "../../api/fetchBooks";
import BooksCard from "../../Components/CardComponents/BooksCard/BooksCard";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function BooksPage() {

    const { data, isLoading, isError, error, } = useQuery({
        queryKey: ["books"],
        queryFn: fetchBooks,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error: {error.message}</p>

    return (
        <div className="w-[90%] mx-auto">
            <div className="flex items-center justify-center gap-2 m-16">
                <AutoStoriesIcon fontSize="large" className="text-red-400"/>
                <h1 className="text-3xl font-black text-center text-red-600">Reading List</h1>
            </div>
            <ul className="grid grid-cols-2 gap-20 w-[90%] mx-auto p-10 md:grid-cols-2 lg:grid-cols-3">
                {data?.books?.map((book) => (
                    <BooksCard key={book?.id} book={book} />
                ))}
            </ul>
        </div>

    )
}

export default BooksPage;