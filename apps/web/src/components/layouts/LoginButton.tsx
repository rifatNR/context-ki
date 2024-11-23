"use client";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

type PropType = {
    title?: string;
};

const LoginButton = ({ title }: PropType) => {
    const handleLogin = async () => {
        console.log("Login with Google");

        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth();

            const result = await signInWithPopup(auth, provider);
            const { user } = result;
            console.log("result", result);

            const userData = {
                id: user.uid,
                info: {
                    email: user.email,
                    name: user.displayName,
                    photoURL: user.photoURL,
                    others: user,
                },
            };
            localStorage.setItem("pi-user-id", user.uid);
            localStorage.setItem("pi-user", JSON.stringify(userData));

            const name = user.displayName;
            const email = user.email;
            console.log("CUSTOM EVENT", name, email);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <button
                onClick={handleLogin}
                className="flex items-center justify-center space-x-3 rounded-lg
                px-3 py-2 bg-black text-white border border-white"
            >
                <img className="w-7" src="/google.svg" alt="" />
                <div className="text-nowrap">Login with Google</div>
            </button>
        </>
    );
};

export default LoginButton;
