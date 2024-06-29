'use server';
import {redirect} from "next/navigation";
import {createClient} from "@/utils/supabase/server";

export default async function signUp(formData: FormData) {
    const rawFormData = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const supabase = createClient();

    const {data, error} = await supabase.auth.signInWithPassword(rawFormData);
    if (error) {
        return redirect('/login?error=Something went wrong.')
    }
    return redirect('/')

}