import React from 'react'

export const metadata = {
  title: "Nexus | Case Studies",
//   description: "Created By Virtuosoft Limited",
};

export default function CaseStudiesLayout({
    children,
}: Readonly < {
    children: React.ReactNode;
} >) {
    return (
        <div>
            {children}
        </div>
    )
}

