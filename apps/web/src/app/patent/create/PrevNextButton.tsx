import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const PrevNextButton = () => {
    return (
        <div className="flex items-center justify-between mt-20">
            <button className="flex items-center justify-center space-x-3 text-white text-3xl">
                <FaArrowLeftLong />
                <span>Back</span>
            </button>
            <button className="flex items-center justify-center space-x-5 px-5 py-3 bg-white text-black text-3xl">
                <span>Next</span>
                <div>
                    <FaArrowRightLong className="motion-preset-slide-right motion-delay-1000" />
                </div>
            </button>
        </div>
    );
};

export default PrevNextButton;
