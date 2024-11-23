import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

export default Layout;
