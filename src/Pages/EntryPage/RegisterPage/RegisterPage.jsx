import { useNavigate } from "react-router-dom";
import Input from "../../../Components/Input/Input";
import { useContext, useRef } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import emailValidator from "../../../Helpers/emailValidator";
import passwordValidator from "../../../Helpers/passwordValidator";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

function RegisterPage() {

    const navigate = useNavigate();
    const { formData } = useContext(GlobalContext);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    function onClickHandler() {
        navigate("/login");
    }

    async function onSubmitHandler(e) {
        try {
            e.preventDefault();
            isValidEmail();
            isValidPassword();
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            await updateProfile(userCredential.user, {
                displayName: formData.name,
            });
            navigate("/home");
            // console.log(formData);
        } catch (error) {
            alert(error.message);
        }
    }

    function isValidEmail() {
        if (!emailValidator(formData.email)) {
            emailRef.current.setInValid();
        }
    }

    function isValidPassword() {
        if (!passwordValidator(formData.password)) {
            passwordRef.current.setInValid();
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <h2 className="text-3xl font-bold">Think it. Make it.</h2>
            <p className="text-3xl font-bold text-gray-400 mb-7">Create your Notion account</p>
            <div className="w-[60vw] h-[60vh] lg:w-[50vw] lg:h-[50vh] mx-auto flex">
                <form onSubmit={onSubmitHandler}
                    className="flex flex-col gap-4 p-4 m-auto border rounded-md w-96"
                    noValidate>

                    <Input
                        labelName="Name"
                        placeholder="Enter your name..."
                        name="name"
                        key={1}
                        label="name"
                        value={formData.name}
                        type="text"
                        ref={nameRef}
                    />

                    <Input
                        labelName="Email"
                        placeholder="Enter your email..."
                        name="email"
                        key={2}
                        label="email"
                        value={formData.email}
                        type="email"
                        ref={emailRef}
                        onCheckBlur={isValidEmail}
                    />

                    <Input
                        labelName="Password"
                        placeholder="Enter your password..."
                        name="password"
                        key={3}
                        label="password"
                        value={formData.password}
                        type="tepasswordxt"
                        ref={passwordRef}
                        onCheckBlur={isValidPassword}
                    />

                    <button className="p-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
                        Register
                    </button>
                    <p onClick={onClickHandler} className="font-thin text-center hover:underline">already have an account? Login now!</p>

                </form>
            </div>
        </div>
    );
}

export default RegisterPage;