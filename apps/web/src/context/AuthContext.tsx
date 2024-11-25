"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    User as FirebaseUser,
    UserCredential,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/utils/firebase";
import { useCookies } from "react-cookie";

export interface User {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
}

export interface AuthContextType {
    user: User | null;
    loading: boolean;
    signInWithGoogle: () => Promise<UserCredential>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

const mapFirebaseUser = (user: FirebaseUser): User => ({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
});

export function AuthProvider({ children }: AuthProviderProps) {
    const [cookies, setCookie, removeCookie] = useCookies(["token", "user"]);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    const saveToken = async (user: FirebaseUser) => {
        const token = await user.getIdToken();
        setCookie("token", token);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const mappedUser = mapFirebaseUser(user);
                setUser(mappedUser);
                saveToken(user);
                setCookie("user", mappedUser);
            } else {
                setUser(null);
                removeCookie("token");
                removeCookie("user");
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signInWithGoogle = async (): Promise<UserCredential> => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            saveToken(result.user);
            return result;
        } catch (error) {
            console.error("Error signing in with Google:", error);
            throw error;
        }
    };

    const logout = async (): Promise<void> => {
        try {
            await signOut(auth);
            // router.push("/login");
        } catch (error) {
            console.error("Error signing out:", error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider
            value={{ user, signInWithGoogle, logout, loading }}
        >
            {children}
        </AuthContext.Provider>
    );
}
