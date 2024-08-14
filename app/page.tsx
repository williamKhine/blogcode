import {createClient} from "@/utils/supabase/server";

export default async function Index() {
    const supabase = createClient();
    const {data: {user}} = await supabase.auth.getUser();
    return (
        <>
            {user ?
                <div className={'my-auto container'}>
                    <h1 className={'text-4xl font-bold'}>Welcome back, {user.email}!</h1>
                    <p className={'text-md mt-4'}>Thank you for signing up!</p>
                    <p className={'text-md mt-2'}>We will keep you updated.</p>
                </div>
                :
                <div className={'my-auto container'}>
                    <h1 className={'text-4xl font-bold'}>Welcome to blogcode!</h1>
                    <p className={'text-md mt-4'}>The platform is still under construction.</p>
                    <p className={'text-md mt-2'}>Sign up now to receive updates.</p>
                </div>
            }
        </>
    )
}