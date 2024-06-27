'use client';
import {redirect, useSearchParams} from "next/navigation";
import {useEffect} from "react";

import signUp from "@/server/signup";
import GitHubSignIn from "@/components/GitHubSignIn";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button";

import {useToast} from "@/components/ui/use-toast";

export default function SignUpForm() {

    const {toast} = useToast();
    const searchParams = useSearchParams();
    useEffect(() => {
        if (searchParams.has('message')) {
            toast({variant: 'destructive', title: searchParams.get('message') as string})
        }
        // TODO: Remove error message from URL once handled.
        // redirect('/signup')
    }, [searchParams]);

    return (
        <Card className={'my-auto sm:w-[400px]'}>
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>The open world of blogcode is waiting for you.</CardDescription>
            </CardHeader>
            <form id={'signup'}>
                <CardContent>
                    <div className={'grid gap-4'}>
                        <div className={'flex flex-col space-y-1.5'}>
                            <Label htmlFor={'email'}>Email</Label>
                            <Input id={'email'} name={'email'} type={'email'}/>
                        </div>
                        <div className={'flex flex-col space-y-1.5'}>
                            <Label htmlFor={'password'}>Password</Label>
                            <Input id={'password'} name={'password'} type={'password'} placeholder={'••••••••'}/>
                        </div>
                        <div className={'flex flex-col space-y-1.5'}>
                            <Label htmlFor={'passwordConfirm'}>Confirm Password</Label>
                            <Input id={'passwordConfirm'} name={'passwordConfirm'} type={'password'}
                                   placeholder={'••••••••'}/>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className={'w-full'} type={'submit'} form={'signup'} formAction={signUp}>Sign
                        Up</Button>
                </CardFooter>
            </form>
            <CardFooter>
                <CardDescription className={'w-full text-center'}>
                    Already have an account? <a href={'/sign-in'} className={'text-blue-500'}>Sign In</a>
                </CardDescription>
            </CardFooter>
            <CardFooter>
                <GitHubSignIn/>
            </CardFooter>
        </Card>
    )
}