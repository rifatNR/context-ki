import useOnScreenVisible from "@/hooks/useOnScreenVisible";
import React from "react";

const WhyUse = () => {
    const [observableRef, isVisible] = useOnScreenVisible({
        threshold: 0.5,
    });

    return (
        <section ref={observableRef as any} className="relative py-32">
            <h2 className="text-7xl font-bold mb-4 text-primary">
                Why Patent Ideas?
            </h2>
            <p className="text-5xl mb-6 leading-snug">
                Because sometimes, it’s not about building the thing...
                <br />
                it’s about being the genius who
                <span className="relative ml-3">
                    <span className="text-primary-lite">
                        thought of it first
                    </span>
                    <span
                        className={`absolute -left-2 top-1/2 -translate-y-1/2 h-16 w-[calc(100%+20px)] bg-gradient-to-r from-primary/50 to-transparent ${
                            isVisible ? "motion-preset-blur-right" : "invisible"
                        }`}
                    ></span>
                    <span
                        className={`absolute -left-2 top-1/2 -translate-y-1/2 h-16 w-1.5 bg-primary ${
                            isVisible ? "motion-preset-blur-right" : "invisible"
                        }`}
                    ></span>
                </span>
                . 🌟
            </p>
        </section>
    );
};

export default WhyUse;
