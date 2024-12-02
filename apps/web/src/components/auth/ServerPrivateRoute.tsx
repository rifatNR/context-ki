import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type PropType = {
    children: ReactNode;
    fallback?: ReactNode;
};

const ServerPrivateRoute = async ({ children, fallback }: PropType) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const headersList = headers();
    const currentUrl = headersList.get("x-url") || "";

    if (!token) {
        redirect(`/login?redirect=${encodeURIComponent(currentUrl)}`);
    } else {
        return <>{children}</>;
    }
};

export default ServerPrivateRoute;
