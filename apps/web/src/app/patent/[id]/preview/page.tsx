import PreviewClient from "@/app/patent/[id]/preview/_page";
import { trpcVanilla } from "@/trpc/server";
import { GetServerSidePropsContext } from "next";

type PropType = {
    params: { id: string };
};
const PreviewServer = async ({ params }: PropType) => {
    const ideaResponse = await trpcVanilla.ideas.get.query({
        id: (params?.id as string) ?? "",
    });
    const participantsResponse = await trpcVanilla.ideas.getInvitations.query({
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
};

export default PreviewServer;
