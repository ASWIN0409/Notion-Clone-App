import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import HomePageCard from "../../Components/CardComponents/HomePageCard/HomePageCard";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { useNavigate } from "react-router-dom";

function HomePage() {

    const { user } = useContext(GlobalContext);
    const [greeting, setGreeting] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const time = new Date().getHours();

        if (time < 12) {
            setGreeting("Good Morning");
        } else if (time < 18) {
            setGreeting("Good Afternoon");
        } else {
            setGreeting("Good Evening");
        }
    }, []);

    return (
        <div className="flex flex-col items-center w-[80%] dark:text-gray-300 text-[#3E3E3E] mx-auto h-screen m-4 font-mono">
            
            <h3 className="my-10 font-mono text-2xl font-bold md:text-4xl lg:text-5xl">{greeting},{user.displayName}</h3>
            <textarea
                placeholder="Ask or find anything from your Notion..."
                className="block text-[#3E3E3E]  dark:text-gray-300 w-3/4 p-8 mx-auto mb-10 text-lg border border-gray-200 resize-none md:mb-12 lg:mb-20 dark:bg-[#3E3E3E] rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
            />

            <div className="grid grid-cols-2 justify-evenly gap-x-2 md:grid-cols-3 lg:grid-cols-5 gap-y-9 w-[80%] mx-auto  dark:text-black">
                <HomePageCard
                icon={WavingHandIcon}
                className="mt-5 text-yellow-400" 
                text="Welcome to Notion!"
                onClick={() => navigate("welcome")}
                />

                <HomePageCard
                icon={AutoStoriesIcon}
                className="mt-5 text-red-400" 
                text="Reading List"
                onClick={() => navigate("books")}
                />

                <HomePageCard
                icon={LocalDiningIcon}
                className="mt-5 text-green-400" 
                text="Meal Planner"
                onClick={() => navigate("meals")}
                />

                <HomePageCard
                icon={CurrencyBitcoinIcon}
                className="mt-5 text-yellow-900" 
                text="Coin Info"
                onClick={() => navigate("coins")}
                />

                <HomePageCard
                icon={EventNoteIcon}
                className="mt-5 text-red-300" 
                text="Weekly To-do List"
                onClick={() => navigate("todo")}
                />

                <HomePageCard
                icon={NoteAddIcon}
                className="mt-5 text-gray-400" 
                text="Add New Page"
                onClick={() => navigate("todo")}
                />
            </div>

        </div>
    );
}

export default HomePage;