import AddButton from "@/components/custom/AddButton";
import PatentCard from "@/components/custom/PatentCard";
import Pagination from "@/components/misc/pagination";
import { isTRPCClientError, trpcVanilla } from "@/trpc/server";
import { handleSSRError, test } from "@/utils/errorHandler";
import { GetServerSideProps } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

type PropType = {
    searchParams: Record<string, string | string[]>;
};
const PatentList = async ({ searchParams }: PropType) => {
    const headersList = headers();
    const currentUrl = headersList.get("x-url") || "";

    const page = parseInt(
        Array.isArray(searchParams.page)
            ? searchParams.page[0]
            : searchParams.page || "1",
        10
    );

    try {
        const response = await trpcVanilla.ideas.list.query({ page });

        return (
            <div>
                <div className="mb-10 flex items-center justify-between">
                    <div className=" text-4xl">My Patents:</div>
                    <AddButton />
                </div>

                <>{currentUrl}</>

                <div className="space-y-5 mb-10">
                    {response.data.data.map((item) => (
                        <Link
                            className="block"
                            key={item.id}
                            href={
                                item.publish_date
                                    ? `/patent/view/${item.id}`
                                    : `/patent/${item.id}/title`
                            }
                        >
                            <PatentCard
                                title={item.title}
                                publish_date={item.publish_date}
                                created_at={item.created_at}
                            />
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
    } catch (error) {
        handleSSRError(error);
        return <div>Error Occurred!</div>;
    }
};

export default PatentList;
