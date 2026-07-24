// ============================================================================
// File: components/ui/SafeImage.tsx
// Purpose: next/image wrapper that swaps to the fallback when the source
//          fails to LOAD (404, bad URL) — the case coverOf() can't catch,
//          since it only handles empty fields.
// Type: Client Component ("use client")
// ============================================================================
"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { FALLBACK_POST_IMAGE } from "@/lib/blog-image";

export default function SafeImage({ src, alt, ...rest }: ImageProps) {
    const [failed, setFailed] = useState(false);
    return (
        <Image
            {...rest}
            alt={alt}
            src={failed ? FALLBACK_POST_IMAGE : src}
            onError={() => setFailed(true)}
        />
    );
}