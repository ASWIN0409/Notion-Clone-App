import Button from "../../Components/Button/Button";
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import Button2 from "../../Components/Button/Button2";
import ImageCard from "../../Components/CardComponents/ImageCard/ImageCard";
import Card2 from "../../Components/CardComponents/Card2/Card2";

function LandingPage() {
    
    return (
        <>
            {/* 1st section */}
            <div className="flex flex-col w-full h-full mx-auto bg-white border-gray-300 lg:flex-row">
                <div className="basis-[50%] p-10 lg:p-20">
                    <h1 className="text-4xl font-bold lg:text-6xl">The AI workspace that works for you.</h1>
                    <p className="text-lg lg:text-2xl my-7">One place where teams find every answer, automate the busywork, and get projects done.</p>
                    <div className="flex flex-col w-32 gap-4 ">
                        <Button text="Get Notion free" />
                        <Button
                            className="w-full h-full p-2 font-thin text-blue-500 bg-blue-100 rounded-md hover:bg-blue-200"
                            text="Request a demo"
                        />
                    </div>
                </div>
                <div className="basis-[50%]">
                    <video src="video1.mp4"></video>
                </div>
            </div>

            {/* 2nd section */}
            <div className="justify-center hidden w-full h-full gap-12 lg:flex">
                <p className="mr-10">Trusted by top teams</p>
                <ImageCard src="OpenAI.avif" />
                <ImageCard src="Figma.svg" />
                <ImageCard src="volvo.avif" />
                <ImageCard src="ramp.avif" />
                <ImageCard src="cursor.avif" />
                <ImageCard src="headspace.svg" />
                <ImageCard src="Perplexity.png" />
                <ImageCard src="vercel.svg" />
            </div>

            {/* 3rd section */}
            <div className="flex justify-center w-full h-full gap-4 p-4">
                <div style={{ backgroundColor: "#faebe1" }} className="border rounded-2xl hover:border-[#dfb297]  basis-[45%] p-8">
                    <MicRoundedIcon />
                    <Card2 heading="AI Meeting Notes" description="Perfect notes every time." />
                </div>

                <div className="border bg-blue-100 rounded-2xl hover:border-blue-900  basis-[45%] p-8">
                    <SearchRoundedIcon />
                    <Card2 heading="Enterprise Search" description="One Search for everything." />
                </div>
            </div>

            {/* 4th section */}
            <div className="flex justify-center w-full h-full gap-4 p-4 ">
                <div className="border bg-green-100 rounded-2xl hover:border-green-700  basis-[90%] p-8">
                    <AdsClickOutlinedIcon />
                    <Card2 heading="Projects" description="Keep every plan on track." />
                </div>
            </div>

            {/* 5th section */}
            <div className="flex justify-center w-full h-full gap-4 p-4">
                <div className="border bg-pink-100 rounded-2xl hover:border-pink-600  basis-[45%] p-8">
                    <EmailRoundedIcon />
                    <Card2 heading="Notion Mail" description="The inbox that thinks like you." />
                </div>

                <div className="border bg-yellow-100 rounded-2xl hover:border-yellow-500  basis-[45%] p-8">
                    <BusinessRoundedIcon />
                    <Card2 heading="Business-in-a-box" description="Run your entire company." />
                </div>
            </div>

            {/* 6th section */}
            <div className="w-full h-full p-2 mt-16 text-center mb-28">
                <h2 className="m-2 font-serif text-5xl">"Your AI everything app."</h2>
                <h3 className="font-mono text-2xl">forbes</h3>
            </div>

            {/* 7th section */}
            <div className="w-full h-full text-center">
                <h3 className="text-6xl font-bold">One space for every team.</h3>
                <div className="flex items-center justify-center gap-4 m-5">
                    <Button2
                        className="p-2 text-sm font-thin bg-gray-200 cursor-pointer hover:bg-white rounded-xl "
                        text="Product"
                    />
                    <Button2 text="Engineering" />
                    <Button2 text="Design" />
                    <Button2 text="IT" />
                    <Button2 text="Marketing" />
                    <Button2 text="Startups" />
                </div>
                <hr />
            </div>
        </>
    );
}

export default LandingPage;