import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "",
        default: "Patent Ideas",
        template: "%s | Patent Ideas",
    },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

export default Layout;
