import QuoteSVG from "@/components/svg/QuoteSVG";
import useOnScreenVisible from "@/hooks/useOnScreenVisible";
import React from "react";

const Testimonial = () => {
    const [observableRef, isVisible] = useOnScreenVisible({
        threshold: 0.5,
    });

    return (
        <section ref={observableRef as any} className="mt-12 mb-96">
            <h2 className="text-4xl font-bold text-center mb-20">
                What People Are Saying
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
                <blockquote
                    className={`testimonial-gradient-l border border-[#2c2c2e] shadow-md p-6 rounded-lg text-2xl scale-90
                                        ${
                                            isVisible
                                                ? "motion-preset-slide-right motion-preset-focus motion-duration-1000"
                                                : "invisible"
                                        }`}
                >
                    <div className="w-12 mb-5">
                        <QuoteSVG />
                    </div>
                    <p className="italic">
                        &quot;I knew I was ahead of my time, but now I have
                        proof!&quot;
                    </p>
                    <footer className="mt-4 font-bold">
                        - Future Innovator 🧠
                    </footer>
                </blockquote>
                <blockquote
                    className={`testimonial-gradient-m border border-[#2c2c2e] shadow-md p-6 rounded-lg text-2xl scale-105
                                        ${
                                            isVisible
                                                ? "motion-preset-expand motion-preset-focus motion-duration-1000"
                                                : "invisible"
                                        }`}
                >
                    <div className="w-16 mb-5">
                        <QuoteSVG />
                    </div>
                    <p className="italic">
                        &quot;Patent Ideas helped me show off at every dinner
                        party. Worth it!&quot;
                    </p>
                    <footer className="mt-4 font-bold">
                        - Idea Hoarder 🎉
                    </footer>
                </blockquote>
                <blockquote
                    className={`testimonial-gradient-r border border-[#2c2c2e] shadow-md p-6 rounded-lg text-2xl scale-90
                                        ${
                                            isVisible
                                                ? "motion-preset-slide-left motion-preset-focus motion-duration-1000"
                                                : "invisible"
                                        }`}
                >
                    <div className="w-12 mb-5">
                        <QuoteSVG />
                    </div>
                    <p className="italic">
                        &quot;Honestly, it’s just fun to see my old ideas. Also,
                        I now have blackmail material.&quot;
                    </p>
                    <footer className="mt-4 font-bold">
                        - Savvy Thinker 🤓
                    </footer>
                </blockquote>
            </div>
        </section>
    );
};

export default Testimonial;
