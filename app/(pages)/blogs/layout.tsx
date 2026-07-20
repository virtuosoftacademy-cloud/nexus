
import React from 'react'

export const metadata = {
  title: "Nexus | Insights",
//   description: "Created By Virtuosoft Limited",
};

export default function BlogsLayout({
    children,
}: Readonly < {
    children: React.ReactNode;
} >) {
    return (
        <div className='min-h-screen mx-auto'>
            {children}
        </div>
    )
}

