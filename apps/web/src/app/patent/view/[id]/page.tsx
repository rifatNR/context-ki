import ViewClient from "@/app/patent/view/[id]/_page";
import { trpcVanilla } from "@/trpc/server";
import { GetServerSidePropsContext } from "next";

type PropType = {
    params: { id: string };
};
const ViewServer = async ({ params }: PropType) => {
    const ideaResponse = await trpcVanilla.ideas.get.query({
        id: (params?.id as string) ?? "",
    });
    const participantsResponse = await trpcVanilla.ideas.getInvitations.query({
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
};

export default ViewServer;
