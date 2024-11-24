import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import TrpcProvider from "@/app/TrpcProvider";
import Navbar from "@/components/layouts/Navbar";
import Head from "next/head";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
    title: {
        absolute: "",
        default: "Patent Ideas",
        template: "%s | Patent Ideas",
    },
    icons: {
        icon: "/favicon_io/icon.ico",
        apple: "/favicon_io/apple-touch-icon.png",
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
            <Head>
                {/* Preconnect for Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />

                {/* Google Fonts Stylesheet */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="bg-black text-white font-merriweather">
                <TrpcProvider>
                    <AuthProvider>
                        <Navbar />
                        <main className="pt-24 min-h-screen">{children}</main>
                    </AuthProvider>
                </TrpcProvider>
            </body>
        </html>
    );
}
