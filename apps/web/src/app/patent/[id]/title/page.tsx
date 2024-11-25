import TitleClient from "@/app/patent/[id]/title/_page";
import { trpcVanilla } from "@/trpc/server";
import { GetServerSidePropsContext } from "next";

type PropType = {
    params: { id: string };
};
const TitleServer = async ({ params }: PropType) => {
    const response = await trpcVanilla.ideas.get.query({
        id: (params?.id as string) ?? "",
    });

    return <TitleClient data={response.data} />;
};

export default TitleServer;
