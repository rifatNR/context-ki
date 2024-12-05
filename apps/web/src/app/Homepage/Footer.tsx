import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="max-w-[1600px] mx-auto bg-black text-center p-6 mt-40">
            <div className="flex items-center justify-between">
                <Image
                    src="/logo-white.svg"
                    alt="Logo"
                    className=""
                    width={200}
                    height={200}
                    priority
                />

                <div>
                    <div className="text-5xl font-bold mb-5">
                        Patent Ideas™️ 💡
                    </div>
                    <div className="flex flex-col items-start space-y-2 text-custom-gray-25 text-2xl">
                        <Link href={"/terms"}>
                            <div className="underline">
                                Terms &amp; Conditions
                            </div>
                        </Link>
                        <Link href={"/privacy"}>
                            <div className="underline">Privacy Policy</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full bg-neutral-800 h-[1px] rounded-full motion-scale-x-in-[0] motion my-10"></div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center space-x-5 mb-5">
                    <a
                        href=""
                        target="_blank"
                        className="p-3 border border-white hover:bg-white hover:text-black rounded-full"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href=""
                        target="_blank"
                        className="p-3 border border-white hover:bg-white hover:text-black rounded-full"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href=""
                        target="_blank"
                        className="p-3 border border-white hover:bg-white hover:text-black rounded-full"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href=""
                        target="_blank"
                        className="p-3 border border-white hover:bg-white hover:text-black rounded-full"
                    >
                        <FaFacebookF />
                    </a>
                </div>
                <p className="text-center text-xl">
                    © 2024 Patent Ideas. All rights reserved (not really). ✨
                </p>
            </div>
        </footer>
    );
};

export default Footer;
