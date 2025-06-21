function SidebarButton({ icon: Icon, onClick, className, text }) {
    return (
        <div
            onClick={onClick}
            className="flex gap-2 p-1 mx-2 my-1 text-sm font-semibold text-[#595555] rounded-md cursor-pointer dark:hover:bg-[#2F2F2F] dark:text-gray-300 dark:bg-[#262626] hover:bg-gray-100 ">
            <Icon
                fontSize="small"
                className={className}
            />
            <p>{text}</p>
        </div>
    );
}

export default SidebarButton;