import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import ProfileDropdownButton from "../Button/ProfileDropdownButton";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

function ProfileDropdown() {

    const { user } = useContext(GlobalContext);
    const navigate = useNavigate();

    return (
        <div className="absolute z-50 w-[32vh] border-gray-300  dark:text-gray-300 dark:bg-[#262626] border rounded-lg h-[33vh] bg-white top-12 left-3 p-2">

            <div className="flex gap-3 p-2 border rounded-lg border-b-gray-400 dark:text-white">
                <div className="h-11 w-full text-center text-3xl bg-gray-300 text-gray-900 basis-[20%] rounded-md border-[3px]">{`${user?.displayName?.charAt(0).toUpperCase()}`}</div>

                <div className="basis-[80%] ">
                    <h4 className="text-md">{`${user?.displayName}'s Notion`}</h4>
                    <p className="text-gray-500 dark:text-white font-extralight">Free Plan . 1 member</p>
                </div>
            </div>

            <div>
                <h4 className="m-2 text-sm">{user?.email}</h4>
                <ProfileDropdownButton
                    buttonText="Add another account"
                    onClick={() => navigate("/register")}
                />

                <ProfileDropdownButton
                    buttonText="Delete account"
                    onClick={() => navigate("/register")}
                />

                <ProfileDropdownButton
                    buttonText="Log out"
                    onClick={() => {
                        signOut(auth);
                        navigate("/");
                    }}
                />
            </div>

        </div>
    );
}

export default ProfileDropdown;