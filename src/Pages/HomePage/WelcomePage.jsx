import WavingHandIcon from '@mui/icons-material/WavingHand';

function WelcomePage() {

    return (
        <div 
        className="flex flex-col items-center justify-center dark:text-gray-300 text-[#3E3E3E] h-full gap-10">
            <WavingHandIcon 
            fontSize='large'
             className='text-yellow-400'/>

            <h1 
            className='text-6xl font-black '
            contentEditable={true}>
                Welcome to Notion!
            </h1>

            <p contentEditable={true} className='text-2xl'>Click to edit...</p>

        </div>
    );
}

export default WelcomePage;
