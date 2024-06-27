import SignUpForm from "@/components/signup/SignUpForm";
import {Suspense} from "react";

export default function SignUp() {
    return (
        <Suspense>
            <SignUpForm />
        </Suspense>
    );
}