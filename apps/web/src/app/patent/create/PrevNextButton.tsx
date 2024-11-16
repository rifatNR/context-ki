import { redirect, useRouter } from "next/navigation";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

type PropType = {
    prevPath?: string;
    nextPath?: string;
};
const PrevNextButton = ({ prevPath, nextPath }: PropType) => {
    const router = useRouter();

    const onPrevClick = () => {
        if (prevPath) {
            router.push(prevPath);
        }
    };
    const onNextClick = () => {
        if (nextPath) {
            router.push(nextPath);
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
                {nextPath && (
                    <button
                        onClick={onNextClick}
                        className="flex items-center justify-center space-x-5 px-5 py-3 bg-white text-black text-3xl"
                    >
                        <span>Next</span>
                        <FaArrowRightLong className="motion-preset-slide-right motion-delay-1000" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default PrevNextButton;
