import ParticipantsClient from "@/app/patent/[id]/participants/_page";
import { trpcVanilla } from "@/trpc/server";
import { GetServerSidePropsContext } from "next";

const ParticipantsServer = async (context: GetServerSidePropsContext) => {
    const response = await trpcVanilla.ideas.get.query({
        id: (context.params?.id as string) ?? "",
    });

    return <ParticipantsClient data={response.data} />;
};

export default ParticipantsServer;
