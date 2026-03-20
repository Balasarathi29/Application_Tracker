
import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
    baseURL : process.env.NEXT_PUBLIC_BETTER_AUTH_URI!,
})

export const {signIn, signUp, signOut, getSession} = authClient;