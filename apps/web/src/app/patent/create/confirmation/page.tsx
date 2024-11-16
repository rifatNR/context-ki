"use client";

import PrevNextButton from "@/app/patent/create/PrevNextButton";
import Image from "next/image";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GiMedal, GiRibbonMedal } from "react-icons/gi";
import { LiaMedalSolid } from "react-icons/lia";
import { Checkbox } from "@/components/ui/checkbox";

const Confirmation = () => {
    return (
        <div className="flex-1 flex items-center justify-center w-full mt-10 mb-20">
            <div className="flex-1">
                <div className="text-4xl mb-12 font-bold">Confirmation:</div>

                <div className="text-2xl mt-5">
                    Once a patent is published, it becomes a permanent record
                    and cannot be updated or deleted. Please ensure that all
                    details are final before publication. However, any pending
                    invites will still be able to join and view the patent after
                    its publication. Additionally, please be aware that public
                    patents are openly accessible, meaning that anyone can view
                    and review the ideas you have disclosed. Consider the
                    visibility of your intellectual property before proceeding
                    with publication.
                </div>

                <label
                    htmlFor="terms"
                    className="flex items-center space-x-3 mt-5 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-2xl cursor-pointer"
                >
                    <Checkbox
                        id="terms"
                        className="h-6 w-6 rounded-none border-2 border-white data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    />
                    <div className="select-none">
                        I accept the Terms &amp; Conditions.
                    </div>
                </label>

                <PrevNextButton
                    prevPath="/patent/create/preview"
                    isShowConfirmBtn
                    isDisablePublish
                />
            </div>
        </div>
    );
};

export default Confirmation;
