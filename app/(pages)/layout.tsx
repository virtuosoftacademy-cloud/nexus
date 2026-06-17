
import Footer from "@/components/common/Footer"
import Navbar from "@/components/common/Navbar";
import ReactLenis from "lenis/react";

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
