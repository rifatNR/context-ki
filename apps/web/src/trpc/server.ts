import type { AppRouter } from "@pi/core";
import { createTRPCReact } from "@trpc/react-query";
import {
    createTRPCProxyClient,
    httpBatchLink,
    TRPCClientError,
} from "@trpc/client";
import { cookies } from "next/headers";

const getAuthCookie = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    return token;
};

export const trpcVanilla = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: "http://localhost:3333/trpc",
            async headers() {
                return {
                    authorization: `Bearer ${await getAuthCookie()}`,
                };
            },
        }),
    ],
});

export function isTRPCClientError(
    cause: unknown
): cause is TRPCClientError<AppRouter> {
    return cause instanceof TRPCClientError;
}
