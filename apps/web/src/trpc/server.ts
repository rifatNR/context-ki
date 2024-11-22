import type { AppRouter } from "@pi/core";
import { createTRPCReact } from "@trpc/react-query";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

export const trpcVanilla = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: "http://localhost:3333/trpc",
            async headers() {
                return {
                    // authorization: getAuthCookie(),
                };
            },
        }),
    ],
});
