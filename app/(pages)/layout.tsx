
import Footer from "@/components/common/Footer"
import Navbar from "@/components/common/Navbar";
import BackToTop from "@/components/ui/backtotop"
export const metadata = {
    title: "Nexus | Home",
    description: "Created By Virtuosoft Limited",
};

function LayoutPages({
    children,
}: Readonly < {
    children: React.ReactNode;
} >){
    return (
        <div>
            <Navbar />
            {children}
            {/* <BackToTop /> */}
            <Footer />
        </div>
    )
}

export default LayoutPages
