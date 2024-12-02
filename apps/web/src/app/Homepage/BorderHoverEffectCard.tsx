"use client";

import BrainSVG from "@/components/svg/BrainSVG";
import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useRef, useState } from "react";

type PropType = {
    children: ReactNode;
    parentClass?: string;
};
const BorderHoverEffectCard = ({ children, parentClass }: PropType) => {
    const cardRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        handleScroll();
    }, []);

    const offsetLeft = cardRef?.current?.offsetLeft ?? 0;
    const offsetTop = cardRef?.current?.offsetTop ?? 0;

    return (
        <div
            ref={cardRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                `relative p-0.5 bg-[#6969694b] hover:bg-[#15ca827a]
                        transition-all
                        rounded-lg h-full`,
                parentClass
            )}
        >
            <div
                className="sticky p-5 bg-[#1A1A1B] hover:bg-[#000000c4]
                        transition-all ease-in duration-150 z-hoverEffectCardContent
                        h-full rounded-lg"
            >
                {children}
            </div>

            <div
                className="absolute transition-all ease-in duration-150 rounded-lg"
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

export default BorderHoverEffectCard;
