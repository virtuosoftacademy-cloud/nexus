
import Footer from "@/components/common/Footer"
import Navbar from "@/components/common/Navbar";
import ReactLenis from "lenis/react";

export const metadata = {
    title: "Nexus",
    description: "Created By Virtuosoft Limited",
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
            </ReactLenis>
        </div>
    )
}

export default LayoutPages
