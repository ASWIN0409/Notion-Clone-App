import { useNavigate } from "react-router-dom";

function Para({ text }) {

    const navigate = useNavigate();

    return (
        <p
            onClick={() => navigate("/aboutus")}
            className="p-1 font-thin text-gray-800 cursor-pointer hover:underline">
            {text}
        </p>
    );
}

export default Para;