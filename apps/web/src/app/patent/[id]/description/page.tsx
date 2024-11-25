import DescriptionClient from "@/app/patent/[id]/description/_page";
import { trpcVanilla } from "@/trpc/server";
import { GetServerSidePropsContext } from "next";

type PropType = {
    params: { id: string };
};
const DescriptionServer = async ({ params }: PropType) => {
    const response = await trpcVanilla.ideas.get.query({
        id: (params?.id as string) ?? "",
    });

    return <DescriptionClient data={response.data} />;
};

export default DescriptionServer;
