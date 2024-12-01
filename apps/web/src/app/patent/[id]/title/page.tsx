import TitleClient from "@/app/patent/[id]/title/_page";
import { trpcVanilla } from "@/trpc/server";
import { handleSSRError } from "@/utils/errorHandler";

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
        handleSSRError(error);
        return <div>Error Occurred!</div>;
    }
};

export default TitleServer;
