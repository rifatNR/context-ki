import { FaChevronDown } from "react-icons/fa6";

type PropType = {
    item: {
        question: string;
        answer: string;
    };
    isOpen: boolean;
    index: number;
    onClick: (index: number) => void;
};
const FAQ_ITEM = ({ item, isOpen, index, onClick }: PropType) => {
    return (
        <div className="">
            <button
                onClick={() => onClick(index)}
                className="w-full flex items-center justify-between cursor-pointer group hover:text-white "
            >
                <h2 className="text-4xl">{item.question}</h2>
                <FaChevronDown
                    className={`transition-all ease-out text-2xl opacity-0 group-hover:opacity-100 ${
                        isOpen ? "" : "-rotate-90"
                    }`}
                />
            </button>
            <div
                className={`text-2xl mt-5 transition-all overflow-hidden ${
                    isOpen ? "max-h-96" : "max-h-0"
                }`}
            >
                {item.answer}
            </div>
        </div>
    );
};

export default FAQ_ITEM;
