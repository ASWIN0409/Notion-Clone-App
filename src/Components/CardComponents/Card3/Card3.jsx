import { Description } from "@mui/icons-material";

function Card3({ heading, description }) {
    return (
        <div className="p-3 rounded-md cursor-pointer hover:bg-gray-200">
            <h2 className="text-lg font-bold text-gray-700">{heading}</h2>
            <p className="text-xs font-thin">{description}</p>
        </div>
    );
}

export default Card3;