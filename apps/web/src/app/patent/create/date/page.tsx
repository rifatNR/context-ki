"use client";

import PrevNextButton from "@/app/patent/create/PrevNextButton";
import { useEffect, useRef } from "react";
import { VscTriangleDown } from "react-icons/vsc";

const Date = () => {
    const currentYear = 2025; // TODO:: Fix Static
    const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

    return (
        <div className="flex-1 flex items-center justify-center w-full -mt-20">
            <div className="flex-1">
                <div className="text-4xl mb-10">
                    When have you thought of the idea?
                </div>

                <div className="flex items-center justify-stretch w-full space-x-10">
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <select
                                id="underline_select"
                                className="block py-2.5 px-0 w-full text-3xl text-gray-500 bg-transparent appearance-none focus:outline-none focus:ring-0 peer"
                            >
                                <option selected className="bg-black">
                                    Day
                                </option>
                                {[...Array(31)]?.map((item, index) => (
                                    <option
                                        key={item}
                                        value={index + 1}
                                        className="bg-black"
                                    >
                                        {index + 1}
                                    </option>
                                ))}
                            </select>
                            <VscTriangleDown />
                        </div>
                        <div className="w-full bg-white h-0.5 rounded-full motion-scale-x-in-[0] motion"></div>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <select
                                id="underline_select"
                                className="block py-2.5 px-0 w-full text-3xl text-gray-500 bg-transparent appearance-none focus:outline-none focus:ring-0 peer"
                            >
                                <option selected className="bg-black">
                                    Month
                                </option>
                                {[...Array(31)]?.map((item, index) => (
                                    <option
                                        key={item}
                                        value={index}
                                        className="bg-black"
                                    >
                                        {index}
                                    </option>
                                ))}
                            </select>
                            <VscTriangleDown />
                        </div>
                        <div className="w-full bg-white h-0.5 rounded-full motion-scale-x-in-[0] motion"></div>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <select
                                id="underline_select"
                                className="block py-2.5 px-0 w-full text-3xl text-gray-500 bg-transparent appearance-none focus:outline-none focus:ring-0 peer"
                            >
                                <option selected className="bg-black">
                                    Year
                                </option>
                                {years.map((year) => (
                                    <option
                                        key={year}
                                        value={year}
                                        className="bg-black"
                                    >
                                        {year}
                                    </option>
                                ))}
                            </select>
                            <VscTriangleDown />
                        </div>
                        <div className="w-full bg-white h-0.5 rounded-full motion-scale-x-in-[0] motion"></div>
                    </div>
                </div>

                <PrevNextButton />
            </div>
        </div>
    );
};

export default Date;
