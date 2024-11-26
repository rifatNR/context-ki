import LoginButton from "@/components/layouts/LoginButton";
import { IoWarningOutline } from "react-icons/io5";

const LoginFallback = () => {
    return (
        <div className="flex-1 flex items-center justify-center w-full -mt-20 z-100">
            <div className="space-y-5">
                <IoWarningOutline className="text-7xl text-[#ca982d]" />
                <h1 className="text-4xl">
                    You must log in to access this page.
                </h1>
                <LoginButton />
            </div>
        </div>
    );
};

export default LoginFallback;
