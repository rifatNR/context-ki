import DescriptionClient from "@/app/patent/[id]/description/_page";
import Title from "@/app/patent/[id]/title/_page";
import { trpcVanilla } from "@/trpc/server";
import { GetServerSidePropsContext } from "next";

const DescriptionServer = async (context: GetServerSidePropsContext) => {
    const response = await trpcVanilla.ideas.get.query({
        id: (context.params?.id as string) ?? "",
    });

    return <DescriptionClient data={response.data} />;
};

export default DescriptionServer;
