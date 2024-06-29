import {GeistSans} from "geist/font/sans";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {Toaster} from "@/components/ui/toaster"

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: "blogcode",
    description: "The platform to blog your code.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${GeistSans.className} dark`}>
        <body className="bg-background text-foreground">
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            <main className="min-h-screen flex flex-col items-center">
                <Navbar/>
                {children}
                <Footer/>
            </main>
        </ThemeProvider>
        <Toaster/>
        </body>
        </html>
    );
}
