import PatentCard from "@/components/custom/PatentCard";

const PatentList = () => {
    return (
        <div>
            <div className="mb-10 text-4xl">My Patents:</div>

            <div className="space-y-5">
                <PatentCard />
                <PatentCard />
                <PatentCard />
                <PatentCard />
                <PatentCard />
                <PatentCard />
                <PatentCard />
                <PatentCard />
                <PatentCard />
                <PatentCard />
                <PatentCard />
                <PatentCard />
            </div>
        </div>
    );
};

export default PatentList;
