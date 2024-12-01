import { isTRPCClientError } from "@/trpc/server";
import { redirect } from "next/navigation";

export const handleSSRError = (error: unknown) => {
    console.log("🟥Error:🟥", error);
    if (isTRPCClientError(error)) {
        if (error.data?.code == "UNAUTHORIZED") {
            redirect("/login");
        }

        return error.data?.code;
    }
};
export const test = () => {
    setTimeout(() => {
        redirect("/login");
    }, 2000);
};
