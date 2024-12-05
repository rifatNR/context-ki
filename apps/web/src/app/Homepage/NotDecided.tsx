import useOnScreenVisible from "@/hooks/useOnScreenVisible";
import React from "react";

const NotDecided = () => {
    const [observableRef, isVisible] = useOnScreenVisible({
        threshold: 0.5,
    });

    return (
        <section ref={observableRef as any} className="relative py-32">
            <div
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                            h-[30rem] w-[30rem]
                            ${isVisible ? "motion-preset-expand" : "invisible"}
                            rounded-full bg-gray-600 blur-[200px] z-decoration`}
            ></div>
            <div className=" bg-black mx-auto w-[700px] h-[400px] p-6 rounded-lg grid place-items-center"></div>
        </section>
    );
};

export default NotDecided;
