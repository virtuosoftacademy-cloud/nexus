import React from 'react'

export const metadata = {
  title: "Nexus | Case Studies"
}

export default function CaseStudiesPageLayout({
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

