import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Participants",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

export default Layout;