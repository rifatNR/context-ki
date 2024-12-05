import { redirect, useRouter } from "next/navigation";
import { ReactNode, useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { CgSpinner } from "react-icons/cg";
import { LiaMedalSolid } from "react-icons/lia";

type PropType = {
    prevPath?: string;
    onNextClick?: () => void;
    isLoading?: boolean;
    children?: ReactNode;
    onPublishClick?: () => void;
};
const PrevNextButton = ({
    prevPath,
    onNextClick,
    isLoading,
    children,
}: PropType) => {
    const router = useRouter();

    const onPrevClick = () => {
        if (prevPath) {
            router.push(prevPath);
        }
    };

    return (
        <div className="flex items-center justify-between mt-20">
            <div>
                {prevPath && (
                    <button
                        onClick={onPrevClick}
                        className="h-14 flex items-center justify-center space-x-3 text-3xl"
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
                        className="w-40 h-14 flex items-center justify-center px-5 py-3 bg-white text-black text-3xl"
                    >
                        {isLoading ? (
                            <CgSpinner className="animate-spin" />
                        ) : (
                            <div className="flex items-center justify-center space-x-5">
                                <span>Next</span>
                                <FaArrowRightLong className="motion-preset-slide-right motion-delay-500" />
                            </div>
                        )}
                    </button>
                )}
            </div>
            {children && children}
        </div>
    );
};

export default PrevNextButton;
