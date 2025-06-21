function ProfileDropdownButton({buttonText, onClick}) {
    return(
        <p 
        className="flex p-1 my-1 text-sm font-light text-gray-400 rounded-md cursor-pointer dark:hover:bg-[#2F2F2F] dark:text-gray-300 dark:bg-[#262626] hover:bg-gray-200 "
        onClick={onClick}>{buttonText}</p>
    );
}

export default ProfileDropdownButton;