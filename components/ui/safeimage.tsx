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
            loading="eager"
            src={failed ? FALLBACK_POST_IMAGE : src}
            onError={() => setFailed(true)}
        />
    );
}