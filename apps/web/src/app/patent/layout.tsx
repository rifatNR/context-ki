import ServerPrivateRoute from "@/components/auth/ServerPrivateRoute";
import { Metadata } from "next";
import { cookies } from "next/headers";

const PatentLayout = async ({ children }: { children: React.ReactNode }) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    return (
        <div className="max-w-5xl mx-auto px-5 min-h-[calc(100vh-5rem)] flex flex-col">
            {/* {children} */}
            <ServerPrivateRoute token={token}>{children}</ServerPrivateRoute>
        </div>
    );
};

export default PatentLayout;
