import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="max-w-[1600px] mx-auto bg-black text-center p-6 mt-40">
            <div className="flex items-center justify-end space-x-10">
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
                    <div className="flex items-start space-x-4 text-custom-gray-25 text-xl">
                        <Link href={"/terms"}>
                            <div className="underline">
                                Terms &amp; Conditions
                            </div>
                        </Link>
                        <Link href={"/privacy"}>
                            <div className="underline">Privacy Policy</div>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-5 mt-5">
                        <a
                            href="https://www.facebook.com/rifat.noor.35"
                            target="_blank"
                            className="p-3 border border-white hover:bg-white hover:text-black rounded-full text-xl"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="mailto:Rifatnoor92@gmail.com"
                            target="_blank"
                            className="p-3 border border-white hover:bg-white hover:text-black rounded-full text-xl"
                        >
                            <IoMailOutline />
                        </a>
                        <a
                            href="https://x.com/Rifat__Noor"
                            target="_blank"
                            className="p-3 border border-white hover:bg-white hover:text-black rounded-full text-xl"
                        >
                            <FaXTwitter />
                        </a>
                        <a
                            href="https://rifatnoor.vercel.app/"
                            target="_blank"
                            className="p-3 border border-white hover:bg-white hover:text-black rounded-full text-xl"
                        >
                            <IoIosGlobe />
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className="w-full bg-neutral-800 h-[1px] rounded-full motion-scale-x-in-[0] motion my-10"></div> */}
            <div className="relative h-0.5 w-full overflow-hidden flex items-center justify-center my-10">
                <div
                    className={`
                                h-[50rem] w-[50rem] motion-scale-x-in-[0]
                                rounded-full bg-gray-600 blur-[200px]`}
                ></div>
            </div>
            <div className="flex flex-col items-center justify-center mb-5">
                <p className="text-center text-xl">
                    © 2024 Patent Ideas. All rights reserved (not really). ✨
                </p>
            </div>
        </footer>
    );
};

export default Footer;
