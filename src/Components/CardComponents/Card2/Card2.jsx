import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Card2({ heading, description }) {
    return (
        <>
            <h3 className="p-1 font-semibold"> {heading}</h3>
            <div className='flex justify-between p-1'>
                <p className="text-4xl font-thin"> {description}</p>
                <div className='hidden lg:block'> <ArrowForwardIcon /></div>   
            </div>
        </>
    );
}

export default Card2;