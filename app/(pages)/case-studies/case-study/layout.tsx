import React from 'react'

export const metadata = {
  title: "Nexus | Case Study",
//   description: "Created By Virtuosoft Limited",
};

export default function CaseStudyLayout({
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

