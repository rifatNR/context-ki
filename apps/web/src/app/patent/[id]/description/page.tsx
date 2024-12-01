import DescriptionClient from "@/app/patent/[id]/description/_page";
import { trpcVanilla } from "@/trpc/server";
import { handleSSRError } from "@/utils/errorHandler";

type PropType = {
    params: { id: string };
};
const DescriptionServer = async ({ params }: PropType) => {
    try {
        const response = await trpcVanilla.ideas.get.query({
            id: (params?.id as string) ?? "",
        });

        return <DescriptionClient data={response.data} />;
    } catch (error) {
        handleSSRError(error);
        return <div>Error Occurred!</div>;
    }
};

export default DescriptionServer;
