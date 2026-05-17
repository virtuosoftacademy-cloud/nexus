import React from 'react'

export const metadata = {
  title: "Nexus | About Us",
//   description: "Created By Virtuosoft Limited",
};

export default function AboutLayout({
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

