
"use client";

import { FALLBACK_POST_IMAGE } from "@/lib/blog-image";
import { useState } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & { src: string };

export default function FallbackImage({ src, alt, ...rest }: Props) {
    const [current, setCurrent] = useState(src || FALLBACK_POST_IMAGE);
    return (
        <img
            {...rest}
            src={current}
            alt={alt}
            onError={() => {
                if (current !== FALLBACK_POST_IMAGE) setCurrent(FALLBACK_POST_IMAGE);
            }}
        />
    );
}