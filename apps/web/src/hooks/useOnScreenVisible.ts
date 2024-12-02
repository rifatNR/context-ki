import { useState, useEffect, useRef } from "react";

const useOnScreenVisible = (options: any) => {
    const observableRef = useRef<any>();
    const [isIntersecting, setIntersecting] = useState(false);
    const [visibleStatus, setVisibleStatus] = useState<
        "VISIBLE" | "NOT-VISIBLE" | "LOADING"
    >("LOADING");

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
            setVisibleStatus(entry.isIntersecting ? "VISIBLE" : "NOT-VISIBLE");
        }, options);

        if (observableRef.current) {
            observer.observe(observableRef.current);
        }

        return () => {
            if (observableRef.current) {
                observer.unobserve(observableRef.current);
            }
        };
    }, [observableRef, options]);

    return [observableRef, isIntersecting, visibleStatus];
};

export default useOnScreenVisible;
