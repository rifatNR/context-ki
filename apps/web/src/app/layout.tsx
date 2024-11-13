import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import MainSpinner from "@/components/misc/MainSpinner";
import TrpcProvider from "@/app/TrpcProvider";

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

                <TrpcProvider>
                    <main>{children}</main>
                </TrpcProvider>
            </body>
        </html>
    );
}
