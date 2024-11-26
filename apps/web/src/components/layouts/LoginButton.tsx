"use client";

import { useAuth } from "@/context/AuthContext";

type PropType = {
    title?: string;
};

const LoginButton = ({ title }: PropType) => {
    const { signInWithGoogle } = useAuth();

    const handleLogin = async () => {
        signInWithGoogle();
    };

    return (
        <>
            <button
                onClick={handleLogin}
                className="flex items-center justify-center space-x-3 rounded-lg
                px-3 py-2 bg-black text-white border border-white text-2xl"
            >
                <img className="w-10" src="/google.svg" alt="" />
                <div className="text-nowrap">Login with Google</div>
            </button>
        </>
    );
};

export default LoginButton;
