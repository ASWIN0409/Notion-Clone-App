function ImageCard2({ src, content }) {
    return (
        <div className="flex flex-col items-start justify-center w-full h-full gap-16 p-1 my-20 lg:flex-row">
            <div className="basis-[50%]">
                <img className="w-full h-full" src={src} alt="" />
            </div>
            <p className="basis-[50%] tracking-wider leading-loose text-justify">{content}</p>
        </div>
    );
}

export default ImageCard2;