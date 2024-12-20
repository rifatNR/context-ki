"use client";

import { ReactNode, useEffect, useState } from "react";
import LoginFallback from "@/components/auth/Login";
import { useAuth } from "@/context/AuthContext";

type PropType = {
    children: ReactNode;
    fallback?: ReactNode;
    token?: string;
};

const ClientPrivateRoute = ({ children, fallback, token }: PropType) => {
    const { user, loading } = useAuth();

    const [isAuthenticated, setIsAuthenticated] = useState(!!token);

    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [user, loading]);

    if (!isAuthenticated) {
        return <>{fallback ?? <LoginFallback />}</>;
    } else {
        return <>{children}</>;
    }
};

export default ClientPrivateRoute;
