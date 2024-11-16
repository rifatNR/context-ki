import PrevNextButton from "@/app/patent/create/PrevNextButton";

const Title = () => {
    return (
        <div className="flex-1 flex items-center justify-center w-full -mt-20">
            <div className="flex-1">
                <div className="text-4xl mb-10">Enter a Title:</div>

                <textarea
                    className="text-custom-gray-25 bg-transparent w-full text-3xl overflow-hidden resize-none focus:outline-none"
                    rows={1}
                    placeholder="Enter the title of your idea..."
                ></textarea>
                <div className="w-full bg-white h-0.5 rounded-full"></div>

                <PrevNextButton />
            </div>
        </div>
    );
};

export default Title;
