"use client";

import PrevNextButton from "@/app/patent/[id]/PrevNextButton";
import { trpc } from "@/trpc/client";
import { ParticipantDataType } from "@/utils/types";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaUserPlus } from "react-icons/fa6";

type PropType = {
    data: ParticipantDataType[];
};
const ParticipantsClient = ({ data }: PropType) => {
    const { id } = useParams();
    const router = useRouter();
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const [email, setEmail] = useState<string>();

    const { mutate: invite, isLoading: isInviting } =
        trpc.ideas.invite.useMutation();

    const onInviteClick = () => {
        // TODO  Check valid email
        if (email) {
            invite(
                {
                    id: id as string,
                    email: email,
                },
                {
                    onSuccess: (data) => {
                        console.log("SUCCESS", data);
                        setEmail("");
                    },
                    onError: (data) => {
                        console.log("ERROR", data);
                        // TODO  Show toastr on Error
                    },
                }
            );
        }
    };

    const onNextClick = async () => {
        router.push(`/patent/${id}/participants`);
    };

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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-custom-gray-25 bg-transparent w-full text-3xl resize-none overflow-hidden focus:outline-none pr-40"
                        rows={1}
                        maxLength={50}
                        placeholder="@ Enter gmail..."
                    ></textarea>

                    <button
                        onClick={onInviteClick}
                        className="absolute right-0 bottom-2 flex items-center justify-center space-x-5 px-5 py-1 bg-white text-black text-2xl"
                    >
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
                        {data.length ? (
                            data?.map((item) => (
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

                <PrevNextButton
                    prevPath={`/patent/${id}/description`}
                    onNextClick={onNextClick}
                />
            </div>
        </div>
    );
};

export default ParticipantsClient;
