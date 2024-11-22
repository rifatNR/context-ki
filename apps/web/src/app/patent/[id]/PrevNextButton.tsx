import { redirect, useRouter } from "next/navigation";
import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { LiaMedalSolid } from "react-icons/lia";

type PropType = {
    prevPath?: string;
    onNextClick?: () => void;
    isShowConfirmBtn?: boolean;
    isDisablePublish?: boolean;
};
const PrevNextButton = ({
    prevPath,
    onNextClick,
    isShowConfirmBtn,
    isDisablePublish,
}: PropType) => {
    const router = useRouter();
    const publishButtonRef = useRef<HTMLButtonElement>(null);

    const onPrevClick = () => {
        if (prevPath) {
            router.push(prevPath);
        }
    };

    const onPublishClick = () => {
        if (publishButtonRef.current) {
            publishButtonRef.current.classList.add("motion-preset-confetti");
        }
    };

    return (
        <div className="flex items-center justify-between mt-20">
            <div>
                {prevPath && (
                    <button
                        onClick={onPrevClick}
                        className="flex items-center justify-center space-x-3 text-white text-3xl"
                    >
                        <FaArrowLeftLong />
                        <span>Back</span>
                    </button>
                )}
            </div>
            <div>
                {typeof onNextClick == "function" && (
                    <button
                        onClick={onNextClick}
                        className="flex items-center justify-center space-x-5 px-5 py-3 bg-white text-black text-3xl"
                    >
                        <span>Next</span>
                        <FaArrowRightLong className="motion-preset-slide-right motion-delay-1000" />
                    </button>
                )}
            </div>
            {isShowConfirmBtn && (
                <button
                    ref={publishButtonRef}
                    onClick={onPublishClick}
                    className="flex items-center justify-center space-x-3 px-5 py-3 bg-white text-black text-3xl"
                >
                    <LiaMedalSolid className="motion-preset-bounce " />
                    <span>Publish Your Patent</span>
                </button>
            )}
        </div>
    );
};

export default PrevNextButton;
