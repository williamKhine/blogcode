'use server';
import {redirect} from "next/navigation";
import {createClient} from "@/utils/supabase/server";

export default async function signUp(formData: FormData) {
    const passwords = {
        password: formData.get('password') as string,
        passwordConfirm: formData.get('passwordConfirm') as string
    }

    if (passwords.password !== passwords.passwordConfirm) {
        return redirect('/signup?error=Passwords do not match.')
    }

    const supabase = createClient();
    const {data, error} = await supabase.auth.signUp({
        email: formData.get('email') as string,
        password: passwords.password,
    });
    if (error) {
        return redirect('/signup?error=Something went wrong.')
    }
    return redirect('/login?success=Account created. Login to continue.')

}