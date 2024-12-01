import ServerPrivateRoute from "@/components/auth/ServerPrivateRoute";
import Navbar from "@/components/layouts/Navbar";
import { cookies } from "next/headers";

const PatentLayout = async ({ children }: { children: React.ReactNode }) => {
    const cookieStore = await cookies();
    const userCookieValue = cookieStore.get("user")?.value;
    const userFromServer = userCookieValue
        ? JSON.parse(userCookieValue)
        : undefined;

    return (
        <div className="">
            <ServerPrivateRoute>
                <>
                    <Navbar userFromServer={userFromServer} />
                    <main className="max-w-5xl mx-auto px-5 min-h-[calc(100vh-5rem)] flex flex-col pt-24">
                        {children}
                    </main>
                </>
            </ServerPrivateRoute>
        </div>
    );
};

export default PatentLayout;
