import React, { useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import WarningIcon from '@mui/icons-material/Warning';

function Input({ labelName, placeholder, name, label, type, value, onCheckBlur, key }, ref) {

    const { formData, setFormData } = useContext(GlobalContext);
    const [text, setText] = useState("");
    const localref = useRef(null);
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        setIsValid(true);
    }, [text]);

    useImperativeHandle(ref, () => ({

        setInValid: () => {
            setIsValid(false);
        },

    }), []);

    return (
        <div >
            <label
                className="text-xs">
                {labelName}
            </label>
            <br />
            <input
                placeholder={placeholder}
                className={`${(isValid) ? "w-full p-2 border rounded-sm" : "w-full p-2 border animate-bounce border-red-600 rounded-sm"}`}
                type={type}
                name={name}
                value={value}
                ref={localref}
                key={key}
                onBlur={onCheckBlur}
                onChange={(e) => {
                    setText(e.target.value)
                    setFormData({ ...formData, [label]: e.target.value })
                }}
            />
            {(!isValid) ? <p className="font-thin text-red-600"><span className="p-2"><WarningIcon /></span>{label} is not Valid!</p> : null}
        </div>
    );
}

export default React.forwardRef(Input);