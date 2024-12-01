import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type PropType = {
    children: ReactNode;
    fallback?: ReactNode;
};

const ServerPrivateRoute = async ({ children, fallback }: PropType) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        redirect("/login");
    } else {
        return <>{children}</>;
    }
};

export default ServerPrivateRoute;
