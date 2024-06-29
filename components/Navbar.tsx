import {createClient} from "@/utils/supabase/server";
import {Button, buttonVariants} from "@/components/ui/button"
import Link from "next/link";
import BlogcodeLogo from "@/components/BlogcodeLogo";

export default async function Navbar() {
    const supabase = createClient();
    const {data: {user}} = await supabase.auth.getUser();

    return (
        <header className={'w-full border py-4'}>
            <nav className={'container flex justify-between items-center'}>
                <Link href={'/'} className={'text-2xl flex flex-row items-center'}>
                    <div className={'mr-4 rounded'}>
                        <BlogcodeLogo size={40}/>
                    </div>
                    blogco<span className={'text-blue-500'}>.</span>de
                </Link>
                <div className={'space-x-1'}>
                    {user ?
                        <Button variant={'outline'}>{user.email}</Button>
                        :
                        <Link className={buttonVariants({variant: "outline"})} href={'/signup'}>Sign up</Link>
                    }

                </div>
            </nav>
        </header>
    )
}