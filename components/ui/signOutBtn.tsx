"use client"

import { useRouter } from "next/navigation"
import { DropdownMenuItem } from "./dropdown-menu";
import { signOut } from "@/lib/auth/auth-client";

export default function SignOutBtn() {
    const router = useRouter();

    return (
        <DropdownMenuItem onClick={async () => {
            const result = await signOut();
            if(!result.error){
                router.push("/sign-in")
            } else {
                alert(result.error.message || "Failed to sign out. Please try again.")
            }   
        }}>
            Log Out
        </DropdownMenuItem>
    )
}