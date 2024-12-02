import TiltBox from "@/app/Homepage/TiltBox";
import useOnScreenVisible from "@/hooks/useOnScreenVisible";
import Link from "next/link";

const Hero = () => {
    const [observableRef, isVisible] = useOnScreenVisible({
        threshold: 0.5,
    });

    return (
        <header
            ref={observableRef as any}
            className="max-w-[1600px] mx-auto h-[100vh] text-white p-10 flex items-center justify-between"
        >
            <div className="my-auto">
                <h1
                    className={`text-7xl font-bold gradient-hero-text pb-2
                                ${
                                    isVisible
                                        ? "motion-preset-slide-down motion-preset-focus motion-duration-1000"
                                        : "invisible"
                                }`}
                >
                    Patent Your <br /> Crazy Ideas (Kinda)
                </h1>
                <p
                    className={`text-4xl mt-10 ${
                        isVisible
                            ? "motion-preset-slide-right motion-preset-focus motion-duration-1000"
                            : "invisible"
                    }`}
                >
                    Because being first is all that matters. 🚀✨
                </p>
                <div
                    className={`mt-10 ${
                        isVisible
                            ? "motion-preset-slide-up motion-preset-focus motion-duration-1000"
                            : "invisible"
                    }`}
                >
                    <Link href={"/patent"}>
                        <button className="hover:scale-105 transition-all ease-linear gradient-button text-xl text-white rounded-lg font-bold">
                            <div className="gradient-button-content px-5 py-3">
                                Start Patenting Ideas
                            </div>
                        </button>
                    </Link>
                </div>
            </div>

            <div
                className={`pr-48 ${
                    isVisible
                        ? "motion-preset-slide-down motion-preset-focus motion-duration-1000"
                        : "invisible"
                }`}
            >
                <TiltBox />
            </div>
        </header>
    );
};

export default Hero;
