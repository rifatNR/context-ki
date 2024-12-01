import ServerPrivateRoute from "@/components/auth/ServerPrivateRoute";

const PatentLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-5xl mx-auto px-5 min-h-[calc(100vh-5rem)] flex flex-col">
            <ServerPrivateRoute>{children}</ServerPrivateRoute>
        </div>
    );
};

export default PatentLayout;
