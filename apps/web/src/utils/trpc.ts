import type { AppRouter } from "@pi/core/src/index.mjs";
import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";

export const trpc = createTRPCReact<AppRouter>();

// export const trpcClient = trpc.createClient({
//     links: [
//       httpBatchLink({
//         url: 'http://localhost:3333/trpc',
//       }),
//     ]
// });

// export const trpc = createTRPCNext<AppRouter>({
//     config(opts) {
//         return {
//             links: [
//                 httpBatchLink({
//                     url: `http://localhost:3333/trpc`,
//                     // You can pass any HTTP headers you wish here
//                     async headers() {
//                         return {
//                             // authorization: getAuthCookie(),
//                         };
//                     },
//                 }),
//             ],
//         };
//     },
//     /**
//      * @see https://trpc.io/docs/v11/ssr
//      **/
//     ssr: false,
// });
