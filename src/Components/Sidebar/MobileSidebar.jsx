import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from 'react';
import MenuDropdown from '../Dropdown/MenuDropdown';
import { GlobalContext } from '../../Context/GlobalContext';

function MobileSidebar() {

    const { sidebarToggle, setSidebarToggle } = useContext(GlobalContext);

    function handleToggle() {
        setSidebarToggle(!sidebarToggle);
    }

    return (
        <div
            onClick={handleToggle}
            className={`${!sidebarToggle ? "" : "w-screen"} h-full`}>
            <div className={`${!sidebarToggle ? "justify-start" : "justify-end"} flex`}>
                <MenuIcon fontSize="large" />
            </div>
            {sidebarToggle && <MenuDropdown />}
        </div>
    );
}

export default MobileSidebar;