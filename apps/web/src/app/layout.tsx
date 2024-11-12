import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import MainSpinner from "@/components/misc/MainSpinner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        absolute: "",
        default: "Patent Ideas",
        template: "%s | Patent Ideas",
    },
    description: "Description",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MainSpinner />

                <main>{children}</main>
            </body>
        </html>
    );
}
