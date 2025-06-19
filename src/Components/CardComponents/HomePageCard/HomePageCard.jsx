

function HomePageCard({ icon: Icon, onClick, className, text }) {
    return (
        <div
            onClick={onClick}
            className="flex flex-col items-center justify-center h-24 gap-3 p-4 transition bg-yellow-100 border-[3px]  dark:hover:border-white hover:scale-110 animate-ease w-28 rounded-xl hover:border-yellow-500">
            <Icon className={className} />
            <p className="p-1 mb-5 text-center bg-white border rounded-xl w-28">{text}</p>
        </div>
    )
}

export default HomePageCard;