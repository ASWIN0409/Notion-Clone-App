function ImageCard3({ src, href }) {
    return (
        <div className="h-44 md:w-64 lg:w-[21rem] hover:bg-gray-200 rounded-md bg-gray-100 p-16 transition ease-in-out">
            <a href={href} target="_blank" rel="noopener noreferrer">
                <img className="w-full h-full" src={src} alt="" />
            </a>
        </div>
    );
}

export default ImageCard3;