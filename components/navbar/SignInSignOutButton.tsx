'use client';

import {usePathname} from "next/navigation";
import {useState, useEffect} from "react";
import Link from "next/link";

import {buttonVariants} from "@/components/ui/button";

export default function SignInSignOutButton() {
    const pathname = usePathname();
    const [href, setHref] = useState<string>("");

    useEffect(() => {
        if (pathname === "/") {
            setHref("Sign Up");
        } else if (pathname === "/signup") {
            setHref("Login");
        } else {
            setHref("Sign Up");
        }
    }, [pathname]);

    return (
        <Link className={buttonVariants({variant: "outline"})} href={href.split(" ").join("").toLowerCase()}>{href}</Link>
    )
}