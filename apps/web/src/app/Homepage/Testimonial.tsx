import QuoteSVG from "@/components/svg/QuoteSVG";
import React from "react";

const Testimonial = () => {
    return (
        <section className="mt-12 mb-96">
            <h2 className="text-4xl font-bold text-center mb-20">
                What People Are Saying
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
                <blockquote className="bg-[#1A1A1B] border border-[#2c2c2e] shadow-md p-6 rounded-lg text-2xl scale-90">
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
                <blockquote className="bg-[#1A1A1B] border border-[#2c2c2e] shadow-md p-6 rounded-lg text-2xl scale-110">
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
                <blockquote className="bg-[#1A1A1B] border border-[#2c2c2e] shadow-md p-6 rounded-lg text-2xl scale-90">
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
