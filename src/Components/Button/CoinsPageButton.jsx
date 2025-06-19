function CoinsPageButton({ onClick, buttonText }) {
    return (
        <button
            className="p-2 font-semibold text-green-900 bg-yellow-200 rounded-md dark:bg-gray-900 dark:hover:bg-gray-600 dark:text-white hover:bg-yellow-500"
            onClick={onClick}>
            {buttonText}
        </button>
    );
}

export default CoinsPageButton;