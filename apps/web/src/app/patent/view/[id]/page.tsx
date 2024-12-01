import ViewClient from "@/app/patent/view/[id]/_page";
import { trpcVanilla } from "@/trpc/server";
import { handleSSRError } from "@/utils/errorHandler";

type PropType = {
    params: { id: string };
};
const ViewServer = async ({ params }: PropType) => {
    try {
        const ideaResponse = await trpcVanilla.ideas.get.query({
            id: (params?.id as string) ?? "",
        });
        const participantsResponse =
            await trpcVanilla.ideas.getInvitations.query({
                id: (params?.id as string) ?? "",
            });

        return (
            <ViewClient
                data={{
                    idea: ideaResponse.data,
                    participants: participantsResponse.data,
                }}
            />
        );
    } catch (error) {
        handleSSRError(error);
        return <div>Error Occurred!</div>;
    }
};

export default ViewServer;
