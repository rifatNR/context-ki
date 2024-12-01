import ParticipantsClient from "@/app/patent/[id]/participants/_page";
import { isTRPCClientError, trpcVanilla } from "@/trpc/server";
import { handleSSRError } from "@/utils/errorHandler";
import { GetServerSidePropsContext } from "next";
import { redirect } from "next/navigation";

type PropType = {
    params: { id: string };
};
const ParticipantsServer = async ({ params }: PropType) => {
    try {
        const response = await trpcVanilla.ideas.getInvitations.query({
            id: (params?.id as string) ?? "",
        });

        return <ParticipantsClient data={response.data} />;
    } catch (error) {
        handleSSRError(error);
        return <div>Error Occurred!</div>;
    }
};

export default ParticipantsServer;
