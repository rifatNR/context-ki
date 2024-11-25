"use client";

import { trpc } from "@/trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getFetch, httpBatchLink, loggerLink } from "@trpc/react-query";
import { useState } from "react";
import { useCookies } from "react-cookie";

const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 5 * 1000 } },
});

export default function TrpcProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const [queryClient] = useState(() => new QueryClient());

    const url = "http://localhost:3333/trpc/";
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    url,
                    async headers() {
                        return {
                            authorization: `Bearer ${cookies.token}`,
                        };
                    },
                }),
            ],
        })
    );

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </trpc.Provider>
    );
}
