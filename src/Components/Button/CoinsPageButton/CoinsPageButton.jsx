function CoinsPageButton({ onClick, buttonText }) {
    return (
        <button
            className="p-2 font-semibold text-green-900 bg-yellow-200 rounded-md dark:bg-[#3E3E3E] dark:hover:bg-[#2f2f2f] dark:text-white hover:bg-yellow-500"
            onClick={onClick}>
            {buttonText}
        </button>
    );
}

export default CoinsPageButton;