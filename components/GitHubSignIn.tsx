import {Button} from "@/components/ui/button";
import {GitHubLogoIcon} from "@radix-ui/react-icons";
import {createClient} from "@/utils/supabase/client";

export default function GitHubSignIn() {
    const signInWithGitHub = async () => {
        const supabase = createClient();
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: `${origin}/auth/callback`,
            }
        })
    }
    return (
        <Button className={'w-full'} onClick={signInWithGitHub}>
            <GitHubLogoIcon className={'mr-2'}/>
            Continue with GitHub
        </Button>
    )
}