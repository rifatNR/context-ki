import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import TrpcProvider from "@/app/TrpcProvider";
import Navbar from "@/components/layouts/Navbar";

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
            <body className="bg-black text-white font-merriweather">
                <TrpcProvider>
                    <Navbar />
                    <main className="pt-20 min-h-screen">{children}</main>
                </TrpcProvider>
            </body>
        </html>
    );
}
