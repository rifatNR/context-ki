import LoginFallback from "@/components/auth/Login";

const LoginPage = () => {
    return (
        <div className="max-w-5xl mx-auto px-5 min-h-[calc(100vh-5rem)] flex flex-col">
            <LoginFallback />
        </div>
    );
};

export default LoginPage;
