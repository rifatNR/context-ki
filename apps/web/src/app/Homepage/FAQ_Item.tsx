import { useRef } from "react";
import { FaChevronDown } from "react-icons/fa6";

type PropType = {
    item: {
        question: string;
        answer: string;
    };
    isOpen: boolean;
    index: number;
    onClick: (index: number) => void;
    onHover: (index: number, itemEl: HTMLDivElement | null) => void;
};
const FAQ_ITEM = ({ item, isOpen, index, onClick, onHover }: PropType) => {
    const itemRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={itemRef} className="py-5">
            <button
                onClick={() => onClick(index)}
                onMouseEnter={() => {
                    onHover(index, itemRef?.current);
                }}
                className="w-full flex items-center justify-between cursor-pointer group hover:text-white"
            >
                <h2 className="text-4xl">{item.question}</h2>
                <FaChevronDown
                    className={`transition-all ease-out text-2xl opacity-0 group-hover:opacity-100 ${
                        isOpen ? "" : "-rotate-90"
                    }`}
                />
            </button>
            <div
                className={`text-2xl pl-5 transition-all overflow-hidden ${
                    isOpen ? "max-h-96 pb-10" : "max-h-0"
                }`}
            >
                {item.answer}
            </div>
        </div>
    );
};

export default FAQ_ITEM;
