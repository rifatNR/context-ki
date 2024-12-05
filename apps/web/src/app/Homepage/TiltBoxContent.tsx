import Image from "next/image";
import React from "react";
import { LiaMedalSolid } from "react-icons/lia";

const TiltBoxContent = () => {
    return (
        <div className="p-5 pt-10 text-lg">
            <div
                title="patented"
                className="absolute right-1 top-7 w-14 bg-red-100"
            >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl">
                    🏅
                </span>
            </div>

            <div className="text-xl font-bold">My Billion Dollar Idea.</div>

            <div className="mt-5">
                &quot;An app that reminds you of your billion-dollar ideas...
                because clearly, I just forgot mine.&quot; 😅.
            </div>

            <div className="flex items-center space-x-3 text-base mt-5">
                <LiaMedalSolid className="text-yellow-500" />
                <div className="text-custom-gray-25 gradient-animation">
                    31st february, 2069
                </div>
                <div className="text-base text-custom-gray-25">12:30</div>
            </div>

            <div className="mt-5">
                <div className="mb-2 font-bold">Participants:</div>
                <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                        <div className="relative h-6 w-6 aspect-square rounded-full bg-gray-500 overflow-hidden">
                            <Image
                                src="https://avatar.iran.liara.run/public/41"
                                alt="Avatar"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-base">Rifatnoor92@gmail.com</div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="relative h-6 w-6 aspect-square rounded-full bg-gray-500 overflow-hidden">
                            <Image
                                src="https://avatar.iran.liara.run/public/42"
                                alt="Avatar"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-base">localghost@gmail.com</div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="relative h-6 w-6 aspect-square rounded-full bg-gray-500 overflow-hidden">
                            <Image
                                src="https://avatar.iran.liara.run/public/43"
                                alt="Avatar"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-base">monkeyd@luffy.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TiltBoxContent;
