"use client";

import PrevNextButton from "@/app/patent/[id]/PrevNextButton";
import { trpc } from "@/trpc/client";
import { IdeaDataType } from "@/utils/types";
import { TRPCClientError } from "@trpc/client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type PropType = {
    data: IdeaDataType;
};
const TitleClient = ({ data }: PropType) => {
    const { id } = useParams();
    const router = useRouter();
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const [title, setTitle] = useState<string | null>(data?.title ?? null);
    const [error, setError] = useState<string | null>(null);

    const { mutate: save, isLoading: isSaving } =
        trpc.ideas.saveTitle.useMutation();

    const onNextClick = async () => {
        await save(
            {
                id: id as string,
                title: title as string,
            },
            {
                onSuccess: () => {
                    router.push(`/patent/${id}/description`);
                },
                onError: (error) => {
                    console.log("ERROR", error.message);

                    if (error instanceof TRPCClientError) {
                        if (error.data?.zodError) {
                            const fieldErrors = error.data.zodError.fieldErrors;
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
    };

    const handleInputChange = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            const scrollHeight = textareaRef.current.scrollHeight;
            const maxHeight = 253;

            if (scrollHeight > maxHeight) {
                textareaRef.current.style.height = `${maxHeight}px`;
                textareaRef.current.style.overflowY = "scroll";
            } else {
                textareaRef.current.style.height = `${scrollHeight}px`;
                textareaRef.current.style.overflowY = "hidden";
            }
        }
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [textareaRef]);

    return (
        <div className="flex-1 flex items-center justify-center w-full -mt-20 z-100">
            <div className="flex-1">
                <div className="text-4xl mb-10">Enter a Title:</div>

                <textarea
                    ref={textareaRef}
                    value={title ?? ""}
                    onChange={(e) => setTitle(e.target.value)}
                    onInput={handleInputChange}
                    className="text-custom-gray-25 bg-transparent w-full text-3xl resize-none overflow-hidden focus:outline-none"
                    rows={1}
                    placeholder="Enter the title of your idea..."
                ></textarea>
                <div className="w-full bg-white h-0.5 rounded-full motion-scale-x-in-[0] motion"></div>

                {error && (
                    <div
                        className={`text-red-400 text-xl mt-2 motion-preset-typewriter `}
                    >
                        {error}
                    </div>
                )}

                <PrevNextButton
                    isLoading={isSaving}
                    onNextClick={onNextClick}
                />
            </div>
        </div>
    );
};

export default TitleClient;
