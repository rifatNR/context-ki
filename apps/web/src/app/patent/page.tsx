import AddButton from "@/components/custom/AddButton";
import PatentCard from "@/components/custom/PatentCard";
import Pagination from "@/components/misc/pagination";
import { trpcVanilla } from "@/trpc/server";
import { GetServerSideProps } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { NextRequest } from "next/server";

export function getCurrentUrl(request: NextRequest): string {
    const protocol = request.nextUrl.protocol; // e.g., "https:"
    const host = request.headers.get("host"); // e.g., "example.com"
    const pathname = request.nextUrl.pathname; // e.g., "/about"

    return `${protocol}//${host}${pathname}`;
}

type PropType = {
    searchParams: Record<string, string | string[]>;
};
const PatentList = async ({ searchParams }: PropType) => {
    const requestHeaders = headers();
    const currentUrl =
        requestHeaders.get("referer") || requestHeaders.get("host");

    const headersList = headers();
    const referer = headersList.get("referer");

    if (referer) {
        const request = new NextRequest(referer);
        console.log("🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥", request.nextUrl);
    }

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
                <div className=" text-4xl">My Patents: {currentUrl}</div>
                <AddButton />
            </div>

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
};

export default PatentList;
