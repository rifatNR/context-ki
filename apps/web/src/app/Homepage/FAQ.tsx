import FAQ_ITEM from "@/app/Homepage/FAQ_Item";
import { useCallback, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const faqs = [
    {
        question: "Is this a real patent service?",
        answer: "Nope! We’re not lawyers or patent agents. Patent Ideas is all about recording your thoughts for bragging rights, not legal protection. If you’re looking to file an actual patent, consult a real intellectual property lawyer.",
    },
    {
        question: "Will my ideas stay private?",
        answer: "Absolutely. By default, all ideas are private. You’re the only one who can see them unless you decide to share them publicly. We’re like your idea vault, but cooler. 🔒",
    },
    // {
    //     question: "Can someone steal my ideas if I make them public?",
    //     answer: "When you make your idea public, it’s viewable by others. While it’s timestamped and associated with your name, it doesn’t stop someone from using it. Think of it as bragging rights, not a copyright.",
    // },
    {
        question: "Can I edit my ideas later?",
        answer: "No, once an idea is saved and published, it’s locked. However, you can always add new ideas or build upon your previous ones with new entries.",
    },
    // {
    //     question: "Can I delete an idea I’ve saved?",
    //     answer: "You can delete your idea before publishing. After publishing, ideas cannot be deleted or edited, ensuring your timestamp and claim stay intact.",
    // },
    // {
    //     question: "Can I record a video instead of writing my idea?",
    //     answer: "Yes! If typing isn’t your thing or you feel like explaining your idea out loud, you can record a short video instead. It’s a great way to express your creativity visually or verbally! 🎥",
    // },
    // {
    //     question: "How long can my video be?",
    //     answer: "Currently, videos are limited to 2 minutes. Keep it short, sweet, and to the point.",
    // },
    // {
    //     question: "Is my video private too?",
    //     answer: "Yes! Like text-based ideas, your videos are private by default unless you decide to share them publicly.",
    // },
    // {
    //     question: "What formats do you support for videos?",
    //     answer: "We support common formats like MP4, WebM, and MOV. Don’t worry; your video will play in any modern browser!",
    // },
    // {
    //     question: "Can I add collaborators to my idea?",
    //     answer: "Absolutely! You can invite participants to your idea. Even after publishing, collaborators can join and be listed as part of your idea.",
    // },
    {
        question: "Can collaborators edit or delete my idea?",
        answer: "Nope! While invitees can join your idea anytime, only the original creator has control over the publishing and locking of the idea.",
    },
    {
        question: "What if someone else has the same idea as me?",
        answer: "Great minds think alike! If you saved your idea first, you have proof of when you thought of it. But we can’t stop others from having similar thoughts independently.",
    },
    {
        question: "Do you sell my data?",
        answer: "No way! Your ideas and data are sacred. We don’t sell, rent, or share your information. Your secrets are safe with us. 💡",
    },
    // {
    //     question: "Is there a limit to how many ideas I can save?",
    //     answer: "Nope, there’s no limit. Save as many ideas as you want. Whether they’re world-changing or just pizza recipes, we’ve got room for all your brilliance!",
    // },
    {
        question: "Why does this app exist?",
        answer: "Why not? Ideas are precious, and sometimes it’s just cool to say, “I thought of that before anyone else!” This app exists to celebrate your creativity and give you the bragging rights you deserve.",
    },
];

const FAQ = () => {
    const [barPosition, setBarPosition] = useState({ x: 0, y: 0 });
    const [barSize, setBarSize] = useState({ h: 0, w: 0 });
    const [openIndex, setOpenIndex] = useState<number | null>();

    const updateBar = useCallback(
        (isThisOpen: boolean, itemEl: HTMLDivElement | null) => {
            const BUTTON_HEIGHT = 80;
            const BUTTON_SPACE = 10;

            const offsetLeft = itemEl?.offsetLeft ?? 0;
            const offsetTop = itemEl?.offsetTop ?? 0;

            setBarPosition({
                x: offsetLeft,
                y: offsetTop + BUTTON_HEIGHT,
            });

            if (isThisOpen) {
                setBarSize({
                    h:
                        (itemEl?.offsetHeight ?? 0) -
                        BUTTON_HEIGHT -
                        BUTTON_SPACE,
                    w: 0.5,
                });
            } else {
                setBarSize({
                    h: 0.5,
                    w: itemEl?.offsetWidth ?? 0,
                });
            }
        },
        [openIndex]
    );

    const onClick = (index: number, itemEl: HTMLDivElement | null) => {
        const isAlreadyOpen = openIndex == index;

        if (isAlreadyOpen) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
        setTimeout(() => {
            updateBar(true, itemEl);
        }, 200);
    };
    const onHover = (index: number, itemEl: HTMLDivElement | null) => {
        updateBar(index == openIndex, itemEl);
    };

    return (
        <section className="w-9/12 mx-auto p-6 rounded-lg">
            <h1 className="text-7xl mb-10">
                Fa<span className="text-[100px]">Q</span>
            </h1>
            <div
                className="absolute transition-all ease-out bg-white rounded-full"
                style={{
                    height: barSize.h + "px",
                    width: barSize.w + "px",
                    left: barPosition.x + "px",
                    top: barPosition.y + "px",
                }}
            ></div>
            <div className="">
                {faqs.map((item, index) => (
                    <FAQ_ITEM
                        key={item.question}
                        item={item}
                        index={index}
                        isOpen={openIndex == index}
                        onClick={onClick}
                        onHover={onHover}
                    />
                ))}
            </div>
        </section>
    );
};

export default FAQ;
