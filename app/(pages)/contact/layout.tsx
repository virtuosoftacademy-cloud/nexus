import React from 'react'

export const metadata = {
  title: "Nexus | Contact",
  description: "Created By Virtuosoft Limited",
};

export default function ContactLayout({
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

