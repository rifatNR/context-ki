"use client";

import PrevNextButton from "@/app/patent/[id]/PrevNextButton";
import { trpc } from "@/utils/trpc";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Title = () => {
    const { id } = useParams();
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const [title, setTitle] = useState<string>();

    const { data, isLoading } = trpc.ideas.get.useQuery({ id: id as string });

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

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className="flex-1 flex items-center justify-center w-full -mt-20 z-100">
            <div className="flex-1">
                <div className="text-4xl mb-10">Enter a Title: </div>

                <textarea
                    ref={textareaRef}
                    value={title ?? data?.data?.title}
                    onInput={handleInputChange}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-custom-gray-25 bg-transparent w-full text-3xl resize-none overflow-hidden focus:outline-none"
                    rows={1}
                    placeholder="Enter the title of your idea..."
                ></textarea>
                <div className="w-full bg-white h-0.5 rounded-full motion-scale-x-in-[0] motion"></div>

                <PrevNextButton nextPath={`/patent/${id}/description`} />
            </div>
        </div>
    );
};

export default Title;
