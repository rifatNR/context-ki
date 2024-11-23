import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

export default Layout;
