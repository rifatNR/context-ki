import PreviewClient from "@/app/patent/[id]/preview/_page";
import { isTRPCClientError, trpcVanilla } from "@/trpc/server";
import { GetServerSidePropsContext } from "next";
import { redirect } from "next/navigation";

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
        if (isTRPCClientError(error)) {
            if (error.data?.code == "UNAUTHORIZED") {
                redirect("/login");
            }
        }
        return <div>Error Occurred!</div>;
    }
};

export default PreviewServer;
