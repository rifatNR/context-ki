import PreviewClient from "@/app/patent/[id]/preview/_page";
import { trpcVanilla } from "@/trpc/server";
import { GetServerSidePropsContext } from "next";

const PreviewServer = async (context: GetServerSidePropsContext) => {
    const ideaResponse = await trpcVanilla.ideas.get.query({
        id: (context.params?.id as string) ?? "",
    });
    const participantsResponse = await trpcVanilla.ideas.getInvitations.query({
        id: (context.params?.id as string) ?? "",
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
