import { ReactNode } from "react";
import { cookies } from "next/headers";
import LoginFallback from "@/components/auth/LoginFallback";

type PropType = {
    children: ReactNode;
    fallback?: ReactNode;
};

const ServerPrivateRoute = async ({ children, fallback }: PropType) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        return <>{fallback ?? <LoginFallback />}</>;
    } else {
        return <>{children}</>;
    }
};

export default ServerPrivateRoute;
