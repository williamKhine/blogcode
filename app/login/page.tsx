'use client';
import {useEffect} from "react";
import {useToast} from "@/components/ui/use-toast";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import login from "@/server/login";
import GitHubSignIn from "@/components/GitHubSignIn";
import Link from "next/link";

export default function Login({searchParams}: { searchParams: { success?: string, error?: string } }) {
  const {toast} = useToast();
  useEffect(() => {
    searchParams?.success && (toast({variant: 'success', title: 'Success', description: searchParams.success}));
    searchParams?.error && (toast({variant: 'destructive', title: 'Error', description: searchParams.error}));
  }, [searchParams]);
  return (
      <Card className={'my-auto sm:w-[400px]'}>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Welcome back!</CardDescription>
        </CardHeader>
        <form id={'login'}>
          <CardContent>
            <div className={'grid gap-4'}>
              <div className={'flex flex-col space-y-1.5'}>
                <Label htmlFor={'email'}>Email</Label>
                <Input id={'email'} name={'email'} type={'email'} required={true}/>
              </div>
              <div className={'flex flex-col space-y-1.5'}>
                <Label htmlFor={'password'}>Password</Label>
                <Input id={'password'} name={'password'} type={'password'} placeholder={'••••••••'} required={true}/>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className={'w-full'} type={'submit'} form={'login'} formAction={login}>
              Sign Up
            </Button>
          </CardFooter>
        </form>
        <CardFooter>
          <CardDescription className={'w-full text-center'}>
            Don't have an account? <Link href={'/signup'} className={'text-blue-500'}>Sign Up</Link>
          </CardDescription>
        </CardFooter>
        <CardFooter>
          <GitHubSignIn/>
        </CardFooter>
      </Card>
  )
}