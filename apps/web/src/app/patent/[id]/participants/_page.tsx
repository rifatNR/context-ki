"use client";

import PrevNextButton from "@/app/patent/[id]/PrevNextButton";
import { trpc } from "@/trpc/client";
import { ParticipantDataType } from "@/utils/types";
import { TRPCClientError } from "@trpc/client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaUserPlus } from "react-icons/fa6";

type PropType = {
    data: ParticipantDataType[];
};
const ParticipantsClient = ({ data }: PropType) => {
    const { id } = useParams();
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState<string>();
    const [error, setError] = useState<string | null>(null);

    const { mutate: invite, isLoading: isInviting } =
        trpc.ideas.invite.useMutation();

    const onInviteClick = () => {
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
                        setError(null);
                    },
                    onError: (error) => {
                        console.log("ERROR", error.message);

                        if (error instanceof TRPCClientError) {
                            if (error.data?.zodError) {
                                const fieldErrors =
                                    error.data.zodError.fieldErrors;
                                const firstError = (
                                    Object.values(fieldErrors)[0] as any
                                )?.[0];

                                if (firstError) {
                                    setError(firstError);
                                }
                            } else {
                                const errorMessage = error.message;
                                if (errorMessage) {
                                    setError(errorMessage);
                                }
                            }
                        }
                    },
                }
            );
        }
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef]);

    const pendingInvites = useMemo(
        () => data.filter((item) => item.state == "pending"),
        [data]
    );
    const acceptedInvites = useMemo(
        () => data.filter((item) => item.state == "accepted"),
        [data]
    );

    return (
        <div className="flex-1 flex items-center justify-center w-full -mt-20">
            <div className="flex-1">
                <div className="text-4xl mb-10">
                    Invite people who were with you on this idea:
                </div>

                <div className="relative">
                    <input
                        ref={inputRef}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-custom-gray-25 bg-transparent w-full text-3xl resize-none overflow-hidden focus:outline-none pr-40"
                        maxLength={50}
                        type="email"
                        placeholder="@ Enter gmail..."
                    ></input>
                    <button
                        onClick={onInviteClick}
                        className="absolute right-0 bottom-2 flex items-center justify-center space-x-5 px-5 py-1 bg-white text-black text-2xl"
                    >
                        <span>Invite</span>
                        <FaUserPlus className="" />
                    </button>
                </div>
                <div className="w-full bg-white h-0.5 rounded-full motion-scale-x-in-[0] motion"></div>

                {error && (
                    <div
                        className={`text-red-400 text-xl mt-2 motion-preset-typewriter `}
                    >
                        {error}
                    </div>
                )}

                <div className="text-xl text-custom-gray-25 mt-3">
                    People will be included as soon as they join and accept your
                    invitation. They can join even after publishing the patent.
                </div>

                <div className="mt-5">
                    <div className="text-2xl mb-2">People Invited:</div>
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
                <div className="mt-5">
                    <div className="text-2xl mb-2">Participants:</div>
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
                                    <div>{item.email}</div>
                                </div>
                            ))
                        ) : (
                            <div className="mt-3 ml-8 text-lg text-custom-gray-25">
                                No participants
                            </div>
                        )}
                    </div>
                </div>

                <PrevNextButton
                    prevPath={`/patent/${id}/description`}
                    onNextClick={() => {
                        router.push(`/patent/${id}/preview`);
                    }}
                />
            </div>
        </div>
    );
};

export default ParticipantsClient;
