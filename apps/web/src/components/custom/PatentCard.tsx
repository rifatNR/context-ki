"use client";

import React, { useEffect, useState } from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";

const PatentCard = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="p-1 bg-[#6969694b] relative overflow-hidden">
            <div className="sticky p-5 bg-black z-20">
                <div className="flex items-center space-x-3 text-base">
                    <IoCalendarNumberOutline />
                    <div className="text-custom-gray-25">
                        3rd September, 2017
                    </div>
                </div>
                <div className="text-3xl">This is my new billion $ Idea.</div>
            </div>

            <div
                className="absolute w-[400px] h-[400px] rounded-full z-10
                        bg-[radial-gradient(circle,rgba(235,163,69,0.4)_0%,rgba(209,154,78,0.1)_50%,rgba(255,255,255,0)_90%,rgba(255,255,255,0)_100%)]
                "
                style={{
                    top: position.y - 300,
                    left: position.x - 600,
                }}
            ></div>
        </div>
    );
};

export default PatentCard;
