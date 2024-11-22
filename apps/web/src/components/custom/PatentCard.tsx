"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";

const PatentCard = () => {
    const cardRef = useRef<HTMLDivElement>(null);

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

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

    const offsetLeft = cardRef?.current?.offsetLeft ?? 0;
    const offsetTop = cardRef?.current?.offsetTop ?? 0;

    return (
        <div ref={cardRef} className="p-0.5 bg-[#6969694b] relative">
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
                className="absolute"
                style={{
                    // top: position.y - 300,
                    // left: position.x - 600,
                    inset: "0px",
                    background: `radial-gradient(
                        200px circle at ${position.x - offsetLeft}px ${
                        position.y - (offsetTop - scrollPosition.y)
                    }px,
                        #15ca82,
                        transparent
                      )`,
                }}
            ></div>
        </div>
    );
};

export default PatentCard;
