import {createClient} from "@/utils/supabase/server";
import Link from "next/link";

import {Button} from "@/components/ui/button"
import BlogcodeLogo from "@/components/BlogcodeLogo";
import SignInSignOutButton from "@/components/navbar/SignInSignOutButton";

export default async function Navbar() {
    const supabase = createClient();
    const {data: {user}} = await supabase.auth.getUser();

    return (
        <header className={'w-full border-b py-4'}>
            <nav className={'container flex justify-between items-center'}>
                <Link href={'/'} className={'text-2xl flex flex-row items-center'}>
                    <div className={'mr-4 rounded'}>
                        <BlogcodeLogo size={40}/>
                    </div>
                    blogco<span className={'text-blue-500'}>.</span>de
                </Link>
                <div className={'space-x-1'}>
                    {user && <Button variant={'outline'}>
                        {user.email}
                    </Button>}
                    <SignInSignOutButton />
                </div>
            </nav>
        </header>
    )
}