function ProfileDropdownButton({buttonText, onClick}) {
    return(
        <p 
        className="flex p-1 m-1 text-sm font-light text-gray-400 rounded-md cursor-pointer dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 "
        onClick={onClick}>{buttonText}</p>
    );
}

export default ProfileDropdownButton;