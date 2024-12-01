import TitleClient from "@/app/patent/[id]/title/_page";
import { isTRPCClientError, trpcVanilla } from "@/trpc/server";
import { GetServerSidePropsContext } from "next";
import { redirect } from "next/navigation";

type PropType = {
    params: { id: string };
};
const TitleServer = async ({ params }: PropType) => {
    try {
        const response = await trpcVanilla.ideas.get.query({
            id: (params?.id as string) ?? "",
        });

        return <TitleClient data={response.data} />;
    } catch (error) {
        if (isTRPCClientError(error)) {
            if (error.data?.code == "UNAUTHORIZED") {
                redirect("/login");
            }
        }
        return <div>Error Occurred!</div>;
    }
};

export default TitleServer;
