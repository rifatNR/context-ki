import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import MainSpinner from "@/components/misc/MainSpinner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        absolute: "",
        default: "এখন টিভি | প্রথম বিজনেস টেলিভিশন",
        template: "%s | এখন টিভি",
    },
    description:
        "বিনিয়োগ, উৎপাদন, বিপণন, আমদানি-রপ্তানি, রাজস্ব আহরণ এবং ব্যাংক ব্যবস্থাপনার খবরের বিস্তারে যেতে আগ্রহী এখন। কৃষি ও শিল্পভিত্তিক অর্থনীতি এখন টিভি মূল প্রতিপাদ্য।",
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
