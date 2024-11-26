import AddButton from "@/components/custom/AddButton";
import PatentCard from "@/components/custom/PatentCard";
import { trpcVanilla } from "@/trpc/server";
import Link from "next/link";

const PatentList = async () => {
    const response = await trpcVanilla.ideas.list.query({});

    return (
        <div>
            <div className="mb-10 flex items-center justify-between">
                <div className=" text-4xl">My Patents:</div>
                <AddButton />
            </div>

            <div className="space-y-5 mb-10">
                {response.data.map((item) => (
                    <Link
                        className="block"
                        key={item.id}
                        href={`/patent/${item.id}/title`}
                    >
                        <PatentCard title={item.title} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PatentList;
