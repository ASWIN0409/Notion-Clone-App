import { useNavigate } from "react-router-dom";

function Button({ text, className }) {

    const navigate = useNavigate();

    function handleClick(e) {
        e.preventDefault();
        navigate("/login");
    }

    return (
        <div className="flex items-center justify-center w-full h-full">
            <button
                type="submit"
                onClick={handleClick}
                className={className || "text-white lg:h-full lg:w-full bg-blue-500 rounded-md  p-2 font-thin hover:bg-blue-600"}
            > {text}
            </button >
        </div>

    );
}

export default Button;