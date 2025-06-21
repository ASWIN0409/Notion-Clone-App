import { useNavigate } from "react-router-dom";

function Button2({ text, className }) {

    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate("/aboutus")}
            className={className || "p-2 text-sm font-thin cursor-pointer rounded-xl hover:bg-gray-200 "}
            type="submit">
            {text}
        </button>
    );
}

export default Button2;