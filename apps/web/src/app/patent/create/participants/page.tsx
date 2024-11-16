"use client";

import PrevNextButton from "@/app/patent/create/PrevNextButton";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaUserPlus } from "react-icons/fa6";

const Participants = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [textareaRef]);

    return (
        <div className="flex-1 flex items-center justify-center w-full -mt-20">
            <div className="flex-1">
                <div className="text-4xl mb-10">
                    Invite people who were with you on this idea:
                </div>

                <div className="relative">
                    <textarea
                        ref={textareaRef}
                        className="text-custom-gray-25 bg-transparent w-full text-3xl resize-none overflow-hidden focus:outline-none pr-40"
                        rows={1}
                        maxLength={50}
                        placeholder="@ Enter gmail..."
                    ></textarea>

                    <button className="absolute right-0 bottom-2 flex items-center justify-center space-x-5 px-5 py-1 bg-white text-black text-2xl">
                        <span>Invite</span>
                        <FaUserPlus className="" />
                    </button>
                </div>
                <div className="w-full bg-white h-0.5 rounded-full motion-scale-x-in-[0] motion"></div>

                <div className="text-xl text-custom-gray-25 mt-3">
                    People will be included as soon as they join and accept your
                    invitation. They can join even after publishing the patent.
                </div>

                <div className="mt-5">
                    <div className="text-2xl mb-2">People Invited:</div>
                    <div className="space-y-3">
                        <div className="text-2xl flex items-center space-x-3 ml-8">
                            <div className="bg-white h-1 w-3 rounded-full"></div>
                            <div>dannyphantom@gmail.com</div>
                        </div>
                        <div className="text-2xl flex items-center space-x-3 ml-8">
                            <div className="bg-white h-1 w-3 rounded-full"></div>
                            <div>spawn@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="text-2xl mb-2">Participants:</div>
                    <div className="space-y-3">
                        <div className="text-2xl flex items-center space-x-3 ml-8">
                            <div className="relative h-8 w-8 aspect-square rounded-full bg-gray-500 overflow-hidden mb-[-5px]">
                                <Image
                                    src="https://avatar.iran.liara.run/public/42"
                                    alt="Avatar"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>localghost@gmail.com</div>
                        </div>
                        <div className="text-2xl flex items-center space-x-3 ml-8">
                            <div className="relative h-8 w-8 aspect-square rounded-full bg-gray-500 overflow-hidden mb-[-5px]">
                                <Image
                                    src="https://avatar.iran.liara.run/public/42"
                                    alt="Avatar"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>akagamishanks@gmail.com</div>
                        </div>
                        <div className="text-2xl flex items-center space-x-3 ml-8">
                            <div className="relative h-8 w-8 aspect-square rounded-full bg-gray-500 overflow-hidden mb-[-5px]">
                                <Image
                                    src="https://avatar.iran.liara.run/public/42"
                                    alt="Avatar"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>errorist@gmail.com</div>
                        </div>
                    </div>
                </div>

                <PrevNextButton />
            </div>
        </div>
    );
};

export default Participants;
