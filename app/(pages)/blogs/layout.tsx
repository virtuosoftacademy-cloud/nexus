import ReactLenis from 'lenis/react';
import React from 'react'

export const metadata = {
  title: "Nexus | Blogs",
//   description: "Created By Virtuosoft Limited",
};

export default function BlogsLayout({
    children,
}: Readonly < {
    children: React.ReactNode;
} >) {
    return (
        <div>
            <ReactLenis root>
            {children}
            </ReactLenis>
        </div>
    )
}

