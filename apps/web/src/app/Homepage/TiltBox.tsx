import React from "react";

const TiltBox = () => {
    return (
        <div className="pr-48 motion-preset-slide-down motion-preset-focus motion-duration-1000">
            <div
                className="tilt-box-container
                        relative hover:scale-110 transition-all duration-300 ease-out
                        rounded-lg h-[500px] w-[400px]"
            >
                <div className="t_over"></div>
                <div className="t_over"></div>
                <div className="t_over"></div>
                <div className="t_over"></div>
                <div className="t_over"></div>
                <div className="t_over"></div>
                <div className="t_over"></div>
                <div className="t_over"></div>
                <div className="t_over"></div>
                <div
                    className="tilt-box relative transition-all duration-300 ease-out h-full w-full rounded-lg
                                bg-gradient-to-tl from-gray-300 to-gray-800
                                flex items-center justify-center"
                >
                    <div
                        className="tilt-box-inside-tilt-box
                                h-[85%] w-[82%] rounded-md
                                transition-all duration-300 ease-out
                                bg-[#00000096] text-white
                                "
                    >
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl">
                            HI <br /> This is not working
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TiltBox;
