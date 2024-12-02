import BorderHoverEffectCard from "@/app/Homepage/BorderHoverEffectCard";
import BrainSVG from "@/components/svg/BrainSVG";
import LockSVG from "@/components/svg/LockSVG";
import PartnerSVG from "@/components/svg/PartnerSVG";
import ProveSVG from "@/components/svg/ProveSVG";
import SaveSVG from "@/components/svg/SaveSVG";
import VideoCameraSVG from "@/components/svg/VideoCameraSVG";
import useOnScreenVisible from "@/hooks/useOnScreenVisible";
import React from "react";

const CardsSection = () => {
    const [observableRef, isVisible] = useOnScreenVisible({
        threshold: 0.5,
    });

    return (
        <section className="text-center mb-12">
            <div className="relative h-0.5 w-full overflow-hidden flex items-center justify-center">
                <div
                    className={`
                                h-[50rem] w-[50rem] ${
                                    isVisible
                                        ? "motion-scale-x-in-[0]"
                                        : "motion-scale-x-out-[0]"
                                }
                                rounded-full bg-gray-600 blur-[200px]`}
                ></div>
            </div>

            <h2 className="text-5xl font-bold mb-4 mt-32">
                Got a wild idea but no time to build it?
            </h2>
            <p className="text-2xl mb-6">
                Let us save your brilliance so you can brag later. Here’s how:
            </p>

            <div
                ref={observableRef as any}
                className="grid md:grid-cols-3 gap-10 text-left mt-20"
            >
                <BorderHoverEffectCard
                    parentClass={
                        isVisible
                            ? "motion-preset-slide-up motion-preset-focus motion-duration-1000"
                            : "invisible"
                    }
                >
                    <div className="w-16 mb-5">
                        <BrainSVG />
                    </div>
                    <h3 className="font-bold text-3xl mb-2">
                        1. Share Your Idea
                    </h3>
                    <p className="text-lg text-[#89898D]">
                        Give it a cool title, add juicy details, and timestamp
                        it. 🧠
                    </p>
                </BorderHoverEffectCard>
                <BorderHoverEffectCard
                    parentClass={
                        isVisible
                            ? "motion-preset-slide-down motion-preset-focus motion-duration-1000"
                            : "invisible"
                    }
                >
                    <div className="w-16 mb-5">
                        <LockSVG />
                    </div>
                    <h3 className="font-bold text-3xl mb-2">
                        2. Secure Your Bragging Rights
                    </h3>
                    <p className="text-lg text-[#89898D]">
                        We’ll keep your idea safe in our vault for future glory.
                        🔒
                    </p>
                </BorderHoverEffectCard>
                <BorderHoverEffectCard
                    parentClass={
                        isVisible
                            ? "motion-preset-slide-up motion-preset-focus motion-duration-1000"
                            : "invisible"
                    }
                >
                    <div className="w-16 mb-5">
                        <ProveSVG />
                    </div>
                    <h3 className="font-bold text-3xl mb-2">
                        3. Show Off Later
                    </h3>
                    <p className="text-lg text-[#89898D]">
                        Prove you thought of it first when it goes viral. 🎤
                    </p>
                </BorderHoverEffectCard>
                <BorderHoverEffectCard
                    parentClass={
                        isVisible
                            ? "motion-preset-slide-right motion-preset-focus motion-duration-1000"
                            : "invisible"
                    }
                >
                    <div className="w-16 mb-5">
                        <VideoCameraSVG />
                    </div>
                    <h3 className="font-bold text-3xl mb-2">
                        4. Choose Your Input Style
                    </h3>
                    <p className="text-lg text-[#89898D]">
                        Record a video or type your idea—it’s your creativity,
                        your way. ✍️🎥
                    </p>
                </BorderHoverEffectCard>
                <BorderHoverEffectCard
                    parentClass={
                        isVisible
                            ? "motion-preset-slide-up motion-preset-focus motion-duration-1000"
                            : "invisible"
                    }
                >
                    <div className="w-16 mb-5">
                        <SaveSVG />
                    </div>
                    <h3 className="font-bold text-3xl mb-2">
                        5. Mark Your Claim
                    </h3>
                    <p className="text-lg text-[#89898D]">
                        Save your idea with current timestamp. No edits or
                        deletes, but it’s locked and official! (not really) 💾
                    </p>
                </BorderHoverEffectCard>
                <BorderHoverEffectCard
                    parentClass={
                        isVisible
                            ? "motion-preset-slide-left motion-preset-focus motion-duration-1000"
                            : "invisible"
                    }
                >
                    <div className="w-16 mb-5">
                        <PartnerSVG />
                    </div>
                    <h3 className="font-bold text-3xl mb-2">
                        6. Add Participants
                    </h3>
                    <p className="text-lg text-[#89898D]">
                        Got collaborators? Invite them to join your idea, even
                        after it’s published! 🤝
                    </p>
                </BorderHoverEffectCard>
            </div>
        </section>
    );
};

export default CardsSection;
