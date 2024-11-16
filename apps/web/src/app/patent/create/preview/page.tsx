"use client";

import PrevNextButton from "@/app/patent/create/PrevNextButton";
import Image from "next/image";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GiMedal, GiRibbonMedal } from "react-icons/gi";
import { LiaMedalSolid } from "react-icons/lia";

const Participants = () => {
    return (
        <div className="flex-1 flex items-center justify-center w-full mt-10 mb-20">
            <div className="flex-1">
                <div className="text-4xl mb-12 font-bold">Preview:</div>

                <div className="text-3xl font-semibold">
                    Put ads on open-source documentation.
                </div>

                <div className="text-2xl mt-5">
                    Non non cillum sint quis occaecat nisi anim ad labore
                    labore. Enim sit dolore nulla id occaecat reprehenderit. Ex
                    mollit sit consequat quis magna officia. Dolor aliquip
                    commodo sit veniam eu duis anim irure sit. Ea consectetur
                    amet aute aliqua ex sunt velit cupidatat dolore non
                    excepteur anim eiusmod. Id exercitation voluptate aliqua
                    laboris laboris ad. Consequat ea culpa excepteur
                    exercitation aliqua. Sit enim ad cillum aliqua sint dolor eu
                    duis deserunt dolor qui dolor. Tempor ullamco Lorem occaecat
                    dolor velit.
                    <br />
                    <br />
                    Eiusmod officia dolor cupidatat in quis. Exercitation dolor
                    est adipisicing Lorem aliqua irure Lorem anim. Anim enim
                    consectetur dolor ipsum do ipsum consectetur consectetur.
                    Proident culpa dolore anim laborum nostrud cillum tempor
                    adipisicing consequat anim ad cupidatat veniam veniam. Dolor
                    eu consectetur nisi ex labore proident.
                    <br />
                    <br />
                    Ad deserunt est exercitation ut mollit anim adipisicing
                    officia dolor mollit enim proident.
                </div>

                <div className="flex items-center space-x-3 mt-5 text-xl">
                    <LiaMedalSolid className="text-yellow-500" />
                    <div className="font-bold">Patent Date: </div>
                    <div className="text-custom-gray-25 gradient-animation">
                        ⠀5th November, 2024
                    </div>
                    <div className="text-base text-custom-gray-25">
                        03:13 PM
                    </div>
                </div>
                <div className="flex items-center space-x-3 mt-5 text-xl">
                    <IoCalendarNumberOutline />
                    <div className="font-bold">Claimed Date: </div>
                    <div className="text-custom-gray-25">
                        3rd September, 2017
                    </div>
                </div>

                <div className="mt-10">
                    <div className="text-2xl mb-2 font-bold">Participants:</div>
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
                            <div>
                                localghost@gmail.com{" "}
                                <span className="text-custom-gray-25 text-sm">
                                    (Author)
                                </span>
                            </div>
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
                <div className="mt-5">
                    <div className="text-2xl mb-2 font-bold">
                        People Invited:
                    </div>
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

                <PrevNextButton
                    prevPath="/patent/create/description"
                    nextPath="/patent/create/preview"
                />
            </div>
        </div>
    );
};

export default Participants;
