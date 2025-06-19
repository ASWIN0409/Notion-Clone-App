function SidebarButton({ icon: Icon, onClick, className, text }) {
    return (
        <div
            onClick={onClick}
            className="flex gap-2 p-1 mx-2 my-1 text-sm font-light text-gray-900 rounded-md cursor-pointer dark:hover:bg-gray-700 dark:text-white dark:bg-black hover:bg-gray-200 ">
            <Icon
                fontSize="small"
                className={className}
            />
            <p>{text}</p>
        </div>
    );
}

export default SidebarButton;