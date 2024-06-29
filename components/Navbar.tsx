import {Button} from "@/components/ui/button";
import Link from "next/link";
import BlogcodeLogo from "@/components/BlogcodeLogo";

export default function Navbar() {
    return (
        <header className={'w-full border py-4'}>
            <nav className={'container flex justify-between items-center'}>
                <div className={'flex flex-row items-center'}>
                    <div className={'mr-4 rounded'}>
                        <BlogcodeLogo size={40}/>
                    </div>
                    <Link href={'/'} className={'text-2xl'}>blogco<span className={'text-blue-500'}>.</span>de</Link>
                </div>
                <Button variant={'outline'}>Login</Button>
            </nav>
        </header>
    )
}