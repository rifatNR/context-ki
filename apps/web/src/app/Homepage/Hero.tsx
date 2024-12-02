import TiltBox from "@/app/Homepage/TiltBox";
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

            <TiltBox />
        </header>
    );
};

export default Hero;
