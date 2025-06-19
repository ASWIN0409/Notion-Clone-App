function ImageCard({src}) {
    return(
        <div className="object-contain w-20 h-20">
            <img src={src} alt="" />
        </div>
    );
}

export default ImageCard;