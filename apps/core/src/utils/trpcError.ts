import { TRPCError } from "@trpc/server";
import * as firebaseAdmin from "firebase-admin";

export const mapErrorToTRPCError = (error: unknown) => {
    console.error("Error saving idea:", error);

    // Firebase-specific error handling
    if (error && typeof error === "object" && "code" in error) {
        switch (error.code) {
            case "auth/invalid-credential":
                return new TRPCError({
                    code: "UNAUTHORIZED",
                    message: "Invalid Firebase token",
                    cause: error,
                });
            case "auth/id-token-expired":
                return new TRPCError({
                    code: "UNAUTHORIZED",
                    message: "Firebase token has expired",
                    cause: error,
                });
        }
    }

    // Database-specific error handling
    if (error instanceof Error && error.message.includes("duplicate key")) {
        return new TRPCError({
            code: "CONFLICT",
            message: "duplicate key",
            cause: error,
        });
    }

    // Network or connection errors
    if (error instanceof Error && error.message.includes("network")) {
        return new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Network error occurred",
            cause: error,
        });
    }

    // Generic error fallback
    if (error instanceof Error) {
        return new TRPCError({
            code: "BAD_REQUEST",
            message: error.message || "An unexpected error occurred",
            cause: error,
        });
    }

    // Completely unknown error type
    return new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "An unhandled error occurred",
        cause: error,
    });
};
