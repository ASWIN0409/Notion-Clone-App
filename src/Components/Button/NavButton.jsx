function NavButton({ text,onClick }) {
    return (
        <div className="p-2 text-sm font-thin list-none rounded-md cursor-pointer hover:bg-gray-200 ">
            <li onClick={onClick}>{text}</li>
        </div>
        
    );
}

export default NavButton;