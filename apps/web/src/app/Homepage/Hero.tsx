import Link from "next/link";

const Hero = () => {
    return (
        <header className="max-w-[1600px] mx-auto h-[100vh] text-white p-10 flex items-center justify-between">
            <div className="my-auto">
                <h1
                    className="text-7xl font-bold gradient-hero-text pb-2
                                        motion-preset-slide-down motion-preset-focus motion-duration-1000"
                >
                    Patent Your <br /> Crazy Ideas (Kinda)
                </h1>
                <p className="text-4xl mt-10 motion-preset-slide-right motion-preset-focus motion-duration-1000">
                    Because being first is all that matters. 🚀✨
                </p>
                <div className="mt-10 motion-preset-slide-up motion-preset-focus motion-duration-1000">
                    <Link href={"/patent"}>
                        <button className="hover:scale-105 transition-all ease-linear gradient-button text-xl text-white rounded-lg font-bold">
                            <div className="gradient-button-content px-5 py-3">
                                Start Patenting Ideas
                            </div>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="pr-48 motion-preset-slide-down motion-preset-focus motion-duration-1000">
                <div
                    className="tilt-box-container
                                    relative hover:scale-110 transition-all duration-300 ease-out
                                    rounded-lg h-[400px] w-[300px] text-black"
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
                    <div className="tilt-box relative transition-all duration-300 ease-out h-full w-full bg-white">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl">
                            HI <br /> This is not working
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
