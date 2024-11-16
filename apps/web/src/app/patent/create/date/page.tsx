"use client";

import PrevNextButton from "@/app/patent/create/PrevNextButton";
import { useEffect, useRef } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const Date = () => {
    const currentYear = 2025; // TODO:: Fix Static
    const years = Array.from({ length: 20 }, (_, i) => currentYear - i);
    const months = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
    ];

    return (
        <div className="flex-1 flex items-center justify-center w-full -mt-20">
            <div className="flex-1">
                <div className="text-4xl mb-10">
                    When have you thought of the idea?
                </div>

                <div className="flex items-center justify-stretch w-full space-x-10">
                    <div className="flex-1">
                        <Select onValueChange={(value) => console.log(value)}>
                            <SelectTrigger className="relative w-full border-none bg-transparent text-3xl text-gray-500 focus:ring-0 rounded-none">
                                <SelectValue placeholder="Day" />
                                <span className="absolute right-2">
                                    <VscTriangleDown className="text-xl" />
                                </span>
                            </SelectTrigger>
                            <SelectContent className="rounded-none bg-black text-white mt-1 border-2 mt-1 border-2">
                                {[...Array(31)].map((item, index) => (
                                    <SelectItem
                                        key={index}
                                        value={(index + 1).toString()}
                                        className="text-xl rounded-none"
                                    >
                                        {index + 1}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <div className="mt-2 h-0.5 w-full rounded-full bg-white motion-scale-x-in-[0] motion"></div>
                    </div>
                    <div className="flex-1">
                        <Select onValueChange={(value) => console.log(value)}>
                            <SelectTrigger className="relative w-full border-none bg-transparent text-3xl text-gray-500 focus:ring-0 rounded-none capitalize">
                                <SelectValue placeholder="Month" />
                                <span className="absolute right-2">
                                    <VscTriangleDown className="text-xl" />
                                </span>
                            </SelectTrigger>
                            <SelectContent className="rounded-none bg-black text-white mt-1 border-2">
                                {months.map((month) => (
                                    <SelectItem
                                        key={month}
                                        value={month}
                                        className="text-xl rounded-none capitalize"
                                    >
                                        {month}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <div className="mt-2 h-0.5 w-full rounded-full bg-white motion-scale-x-in-[0] motion"></div>
                    </div>
                    <div className="flex-1">
                        <Select onValueChange={(value) => console.log(value)}>
                            <SelectTrigger className="relative w-full border-none bg-transparent text-3xl text-gray-500 focus:ring-0 rounded-none">
                                <SelectValue placeholder="Year" />
                                <span className="absolute right-2">
                                    <VscTriangleDown className="text-xl" />
                                </span>
                            </SelectTrigger>
                            <SelectContent className="rounded-none bg-black text-white mt-1 border-2">
                                {years.map((year) => (
                                    <SelectItem
                                        key={year}
                                        value={year.toString()}
                                        className="text-xl rounded-none"
                                    >
                                        {year}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <div className="mt-2 h-0.5 w-full rounded-full bg-white motion-scale-x-in-[0] motion"></div>
                    </div>
                </div>

                <PrevNextButton />
            </div>
        </div>
    );
};

export default Date;
