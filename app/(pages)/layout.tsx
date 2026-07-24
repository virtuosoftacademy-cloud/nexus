
import Footer from "@/components/common/Footer"
import Navbar from "@/components/common/Navbar";
import { Toaster } from "@/components/ui/sonner";
import ReactLenis from "lenis/react";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Nexus | Advisory and Services",
    description: "Advisory and Services",
};


function LayoutPages({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <ReactLenis root>
                <Navbar />
                {children}
                <Footer />
                <Toaster theme="light" position="top-right" closeButton />
            </ReactLenis>
        </div>
    )
}

export default LayoutPages
