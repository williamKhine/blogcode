import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className={'w-full border py-4'}>
            <nav className={'container flex justify-between'}>
                <Link href={'/'} className={'text-2xl'}>blogco<span className={'text-blue-500'}>.</span>de</Link>
                <Button variant={'outline'}>Login</Button>
            </nav>
        </header>
    )
}