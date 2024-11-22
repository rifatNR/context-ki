"use client";

import PrevNextButton from "@/app/patent/[id]/PrevNextButton";
import { trpc } from "@/trpc/client";
import { IdeaDataType } from "@/utils/types";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type PropType = {
    data: IdeaDataType;
};
const DescriptionClient = ({ data }: PropType) => {
    const { id } = useParams();
    const router = useRouter();
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const [description, setDescription] = useState<string | null>(
        data?.description ?? null
    );

    const { mutate: save, isLoading: isSaving } = trpc.ideas.save.useMutation({
        onSuccess: (data) => {
            console.log("SUCCESS", data);
        },
        onError: (data) => {
            console.log("ERROR", data);
        },
    });

    const onNextClick = async () => {
        await save(
            {
                id: id as string,
                title: data?.description,
                description: description as string,
            },
            {
                onSuccess: () => {
                    router.push(`/patent/${id}/participants`);
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
        <div className="flex-1 flex items-center justify-center w-full -mt-20">
            <div className="flex-1">
                <div className="text-4xl mb-10">
                    Write a description of your idea:
                </div>

                <textarea
                    ref={textareaRef}
                    value={description ?? ""}
                    onChange={(e) => setDescription(e.target.value)}
                    onInput={handleInputChange}
                    className="text-custom-gray-25 bg-transparent w-full text-3xl resize-none overflow-hidden focus:outline-none"
                    rows={1}
                    placeholder="..."
                ></textarea>
                <div className="w-full bg-white h-0.5 rounded-full motion-scale-x-in-[0] motion"></div>

                <PrevNextButton
                    prevPath={`/patent/${id}/title`}
                    isLoading={isSaving}
                    onNextClick={onNextClick}
                />
            </div>
        </div>
    );
};

export default DescriptionClient;
