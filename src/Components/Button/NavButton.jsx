import { useNavigate } from "react-router-dom";

function NavButton({ text, onClick }) {

    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate("/aboutus")}
            className="p-2 text-sm font-thin list-none rounded-md cursor-pointer hover:bg-gray-200 ">
            <li onClick={onClick}>{text}</li>
        </div>

    );
}

export default NavButton;