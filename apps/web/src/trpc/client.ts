import type { AppRouter } from "@pi/core";
import { createTRPCReact } from "@trpc/react-query";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";

export const trpc = createTRPCReact<AppRouter>();
// export const trpcClient = createTRPCProxyClient<AppRouter>({
//     links: [
//         httpBatchLink({
//             url: "http://localhost:3333/trpc",
//         }),
//     ],
// });

// export const trpcClient = trpc.createClient({
//     links: [
//       httpBatchLink({
//         url: 'http://localhost:3333/trpc',
//       }),
//     ]
// });

// export const trpc = createTRPCNext<AppRouter>({
//     config(opts: any) {
//         return {
//             links: [
//                 httpBatchLink({
//                     url: `http://localhost:3333/api/trpc`,
//                     async headers() {
//                         return {
//                             // authorization: getAuthCookie(),
//                         };
//                     },
//                 }),
//             ],
//         };
//     },
//     ssr: false,
// });
