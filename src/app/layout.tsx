import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
    title: "Care.xyz - Trusted Care Services",
    description: "Book reliable babysitting and elderly care services",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased bg-gray-50 dark:bg-gray-900 flex flex-col min-h-screen">
                <AuthProvider>
                    <Navbar />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                    <Toaster position="top-center" />
                </AuthProvider>
            </body>
        </html>
    );
}
