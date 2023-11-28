import Image, {ImageProps} from 'next/image';
import React, {useState} from 'react';
import {cn} from "@/utils/classname";


export function BlurImage({src, ...props}: ImageProps) {
    const [isLoading, setLoading] = useState(true);

    return (
        <Image
            {...props}
            src={src}
            width={100}
            height={100}
            loading={'lazy'}
            objectFit="cover"
            className={cn(
                'duration-700  w-full h-full ease-in-out',
                isLoading
                    ? 'grayscale blur-2xl scale-110'
                    : 'grayscale-0 blur-0 scale-100'
            )}
            onLoadingComplete={() => setLoading(false)}
        />
    );
}

