import AddButton from "@/components/custom/AddButton";
import PatentCard from "@/components/custom/PatentCard";
import Pagination from "@/components/misc/pagination";
import { trpcVanilla } from "@/trpc/server";
import { GetServerSideProps } from "next";
import { headers } from "next/headers";
import Link from "next/link";

type PropType = {
    searchParams: Record<string, string | string[]>;
};
const PatentList = async ({ searchParams }: PropType) => {
    const requestHeaders = headers();
    const currentUrl =
        requestHeaders.get("referer") || requestHeaders.get("host");

    const page = parseInt(
        Array.isArray(searchParams.page)
            ? searchParams.page[0]
            : searchParams.page || "1",
        10
    );
    const response = await trpcVanilla.ideas.list.query({ page });

    return (
        <div>
            <div className="mb-10 flex items-center justify-between">
                <div className=" text-4xl">My Patents:</div>
                <AddButton />
            </div>

            <div className="space-y-5 mb-10">
                {response.data.data.map((item) => (
                    <Link
                        className="block"
                        key={item.id}
                        href={`/patent/${item.id}/title`}
                    >
                        <PatentCard title={item.title} />
                    </Link>
                ))}
            </div>

            <Pagination
                url={currentUrl ?? ""}
                currPage={response.data.page}
                totalPage={response.data.totalPage}
            />
        </div>
    );
};

export default PatentList;
