
import Hero from "./_components/Hero";
import Posts from "./_components/posts";

export const dynamic = "force-dynamic";

export default function Blogs() {
    return (
        <div>
            <div className="pb-10 px-8 sm:px-8 xl:px-16">
                <Hero />
                <Posts />
            </div>
        </div>
    );
}