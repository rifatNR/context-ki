import PreviewClient from "@/app/patent/[id]/preview/_page";
import { trpcVanilla } from "@/trpc/server";
import { handleSSRError } from "@/utils/errorHandler";

type PropType = {
    params: { id: string };
};
const PreviewServer = async ({ params }: PropType) => {
    try {
        const ideaResponse = await trpcVanilla.ideas.get.query({
            id: (params?.id as string) ?? "",
        });
        const participantsResponse =
            await trpcVanilla.ideas.getInvitations.query({
                id: (params?.id as string) ?? "",
            });

        return (
            <PreviewClient
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

export default PreviewServer;
