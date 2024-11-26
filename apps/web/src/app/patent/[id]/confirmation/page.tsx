"use client";

import PrevNextButton from "@/app/patent/[id]/PrevNextButton";
import Image from "next/image";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GiMedal, GiRibbonMedal } from "react-icons/gi";
import { LiaMedalSolid } from "react-icons/lia";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useRef, useState } from "react";

const Confirmation = () => {
    const { id } = useParams();
    const publishButtonRef = useRef<HTMLButtonElement>(null);
    const router = useRouter();

    const [isAgree, setIsAgree] = useState<boolean>(false);

    const onPublishClick = () => {
        if (publishButtonRef.current) {
            publishButtonRef.current.classList.add("motion-preset-confetti");
        }
    };

    return (
        <div className="flex-1 flex items-center justify-center w-full mt-10 mb-20">
            <div className="flex-1">
                <div className="text-4xl mb-12 font-bold">Confirmation:</div>

                <div className="text-2xl mt-5 mb-5">
                    Once a patent is published, it becomes a permanent record
                    and{" "}
                    <span className="text-red-400">
                        cannot be updated or deleted
                    </span>
                    . Please ensure that all details are final before
                    publication. However, any pending invites will still be able
                    to join and view the patent after its publication.
                    Additionally, please be aware that public patents are openly
                    accessible, meaning that anyone can view and review the
                    ideas you have disclosed. Consider the visibility of your
                    intellectual property before proceeding with publication.
                </div>

                <div className="flex items-center space-x-3 text-custom-gray-25">
                    <Link href={"/terms"} target="_blank">
                        <div className="underline">Terms &amp; Conditions</div>
                    </Link>
                    <Link href={"/privacy"} target="_blank">
                        <div className="underline">Privacy Policy</div>
                    </Link>
                </div>
                <label
                    htmlFor="terms"
                    className="flex items-center mt-4 space-x-3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-2xl cursor-pointer"
                >
                    <Checkbox
                        id="terms"
                        onCheckedChange={(checked) =>
                            setIsAgree(checked === true)
                        }
                        className="h-6 w-6 rounded-none border-2 border-white data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    />
                    <div className="select-none">
                        I accept the Terms &amp; Conditions.
                    </div>
                </label>

                <PrevNextButton prevPath={`/patent/${id}/preview`}>
                    <button
                        ref={publishButtonRef}
                        onClick={onPublishClick}
                        disabled={!isAgree}
                        className="flex items-center justify-center space-x-3 px-5 py-3
                                bg-white text-black text-3xl
                                    disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <LiaMedalSolid className="motion-preset-bounce " />
                        <span>Confirm Patent</span>
                    </button>
                </PrevNextButton>
            </div>
        </div>
    );
};

export default Confirmation;
