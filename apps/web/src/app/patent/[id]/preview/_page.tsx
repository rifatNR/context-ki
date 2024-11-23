"use client";

import PrevNextButton from "@/app/patent/[id]/PrevNextButton";
import Image from "next/image";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LiaMedalSolid } from "react-icons/lia";
import { useParams, useRouter } from "next/navigation";
import { IdeaDataType, ParticipantDataType } from "@/utils/types";
import { useMemo } from "react";

type PropType = {
    data: {
        idea: IdeaDataType;
        participants: ParticipantDataType[];
    };
};
const PreviewClient = ({ data }: PropType) => {
    const { id } = useParams();
    const router = useRouter();

    const participants = data.participants;
    const pendingInvites = useMemo(
        () => participants.filter((item) => item.state == "pending"),
        [participants]
    );
    const acceptedInvites = useMemo(
        () => participants.filter((item) => item.state == "accepted"),
        [participants]
    );

    return (
        <div className="flex-1 flex items-center justify-center w-full mt-10 mb-20">
            <div className="flex-1">
                <div className="text-4xl mb-12 font-bold">Preview:</div>

                <div className="text-3xl font-semibold">{data.idea?.title}</div>
                <div className="text-2xl mt-5">{data.idea?.description}</div>

                <div className="flex items-center space-x-3 text-xl mt-5">
                    <LiaMedalSolid className="text-yellow-500" />
                    <div className="font-bold">Patent Date: </div>
                    <div className="text-custom-gray-25 gradient-animation">
                        ⠀5th November, 2024
                    </div>
                    <div className="text-base text-custom-gray-25">
                        03:13 PM
                    </div>
                </div>

                <div className="mt-10">
                    <div className="text-2xl mb-2 font-bold">Participants:</div>
                    <div className="space-y-3">
                        {acceptedInvites.length ? (
                            acceptedInvites?.map((item) => (
                                <div
                                    key={item.id}
                                    className="text-2xl flex items-center space-x-3 ml-8"
                                >
                                    <div className="relative h-8 w-8 aspect-square rounded-full bg-gray-500 overflow-hidden mb-[-5px]">
                                        <Image
                                            src="https://avatar.iran.liara.run/public/42"
                                            alt="Avatar"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        {item.email}{" "}
                                        <span className="text-custom-gray-25 text-sm">
                                            (Author)
                                        </span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="mt-3 ml-8 text-lg text-custom-gray-25">
                                No participants
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-5">
                    <div className="text-2xl mb-2 font-bold">
                        People Invited:
                    </div>
                    <div className="space-y-3">
                        {pendingInvites.length ? (
                            pendingInvites?.map((item) => (
                                <div
                                    key={item.id}
                                    className="text-2xl flex items-center space-x-3 ml-8"
                                >
                                    <div className="bg-white h-1 w-3 rounded-full"></div>
                                    <div>{item.email}</div>
                                </div>
                            ))
                        ) : (
                            <div className="bg-white h-1 w-3 rounded-full mt-3 ml-8"></div>
                        )}
                    </div>
                </div>

                <PrevNextButton
                    prevPath={`/patent/${id}/participants`}
                    onNextClick={() => {
                        router.push(`/patent/${id}/confirmation`);
                    }}
                />
            </div>
        </div>
    );
};

export default PreviewClient;
