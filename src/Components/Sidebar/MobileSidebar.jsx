import MenuIcon from '@mui/icons-material/Menu';


function MobileSidebar() {
    console.log("renddering mobile view")

    const [sidebarToggle, setSidebarToggle] = useState(false);   //to toggle sidebar in small screen

    return (
        <div
            onClick={() => setSidebarToggle(!sidebarToggle)}
            className="w-full h-20 mr-5 lg:hidden md:hidden rounded-xl">
            <div>
                <MenuIcon fontSize="large" />
            </div>
        </div>
    );
}

export default MobileSidebar;