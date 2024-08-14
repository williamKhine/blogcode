'use client'
import {createClient} from "@/utils/supabase/client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button, buttonVariants} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function NavDrop({username}: { username: string }) {
    const supabase = createClient();
    const router = useRouter();
    const signOut = async () => {
        const {error} = await supabase.auth.signOut();
        if (error) {
            console.error(error)
        }
        return router.refresh();
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={buttonVariants({variant: "outline"})}>{username}</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
                <DropdownMenuItem className={`${buttonVariants({variant: "destructive"})}`} onClick={signOut}>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}