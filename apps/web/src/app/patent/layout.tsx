import { Metadata } from "next";

const PatentLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-5xl mx-auto px-5 min-h-[calc(100vh-5rem)] flex flex-col">
            {children}
            {/* <div
                className="fixed transition-all ease-in duration-150"
                style={{
                    inset: "0px",
                    background: `radial-gradient(
                    50vw circle at 50vw 140vh,
                    #15ca8259, transparent)`,
                }}
            ></div> */}
        </div>
    );
};

export default PatentLayout;
