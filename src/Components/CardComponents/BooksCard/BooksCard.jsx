import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function BooksCard({book}) {

    return(
        <div className="border-[3px] h-80 w-60 dark:border-gray-800 dark:hover:border-white border-gray-400 p-4 text-center rounded-xl hover:scale-105 transition animate-ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:border-gray-700">
            <img className="h-48 mx-auto border rounded-xl" src={book?.image} alt="" />
            <h1 className="mt-3 font-bold">{book?.title}</h1>
            <a className="hover:text-blue-500 hover:underline" href={book?.url} target="_blank" rel="noopener noreferrer">Download →</a>
        </div>
    );
}

export default BooksCard;