import React from 'react'


export const metadata = {
    title: "Nexus | Property Management",
    // description: "Created By Virtuosoft Limited",
};

function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>{children}</>
    )
}

export default LandingLayout