import ParticipantsClient from "@/app/patent/[id]/participants/_page";
import { trpcVanilla } from "@/trpc/server";
import { GetServerSidePropsContext } from "next";

type PropType = {
    params: { id: string };
};
const ParticipantsServer = async ({ params }: PropType) => {
    const response = await trpcVanilla.ideas.getInvitations.query({
        id: (params?.id as string) ?? "",
    });

    return <ParticipantsClient data={response.data} />;
};

export default ParticipantsServer;
