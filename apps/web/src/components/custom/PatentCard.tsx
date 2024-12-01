"use client";

import SealSVG from "@/components/svg/SealSVG";
import { formatDate } from "@/utils/helper";
import React, { useEffect, useRef, useState } from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";

type PropType = {
    title: string;
    created_at?: string;
    publish_date: string | null;
};
const PatentCard = ({ title, publish_date, created_at }: PropType) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [date, setDate] = useState<string>();

    const handleScroll = () => {
        setScrollPosition({
            x: window.scrollX,
            y: window.scrollY,
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (publish_date || created_at) {
            const dateToFormat = publish_date ?? created_at;
            if (dateToFormat) {
                setDate(formatDate(dateToFormat));
            }
        }
    }, [publish_date, created_at]);

    const offsetLeft = cardRef?.current?.offsetLeft ?? 0;
    const offsetTop = cardRef?.current?.offsetTop ?? 0;

    return (
        <div
            ref={cardRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative p-0.5 bg-[#6969694b] hover:bg-[#15ca827a] transition-all ease-in duration-150"
        >
            <div className="sticky p-5 bg-black hover:bg-[#000000c4] transition-all ease-in duration-150 z-hoverEffectCardContent cursor-pointer">
                {publish_date && (
                    <div
                        title="patented"
                        className="absolute right-1 top-3 w-14 bg-red-100"
                    >
                        {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                            <SealSVG />
                        </div> */}
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl">
                            🏅
                        </span>
                    </div>
                )}
                <div className="flex items-center space-x-3 text-base mb-1">
                    <IoCalendarNumberOutline />
                    <div className="text-custom-gray-25">
                        {date ?? publish_date ?? created_at}
                    </div>
                </div>
                <div className="text-3xl">{title}</div>
            </div>

            <div
                className="absolute transition-all ease-in duration-150"
                style={{
                    inset: "0px",
                    background: `radial-gradient(
                ${isHovered ? "800px" : "200px"} circle at ${
                        position.x - offsetLeft
                    }px ${position.y - (offsetTop - scrollPosition.y)}px,
                        #15ca82,
                        transparent
                      )`,
                }}
            ></div>
        </div>
    );
};

export default PatentCard;
