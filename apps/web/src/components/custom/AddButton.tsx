"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";

type PropType = {};
const AddButton = ({}: PropType) => {
    const cardRef = useRef<HTMLButtonElement>(null);

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

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
        <button
            ref={cardRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative p-0.5 bg-[#6969694b] hover:bg-[#15ca827a] transition-all ease-in duration-150"
        >
            <div className="sticky flex items-center space-x-3 px-5 py-2 bg-[#08442c4b] hover:bg-[#00000031] transition-all ease-in duration-150 z-hoverEffectCardContent cursor-pointer">
                <FaPlus className="text-xl" />
                <div className="text-2xl">Patent Your Ideas</div>
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
        </button>
    );
};

export default AddButton;
