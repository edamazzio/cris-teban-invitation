"use client";

import Image from "next/image";

export default function Portada() {

    return (
        <section className="h-[55vh] w-full flex flex-col items-center justify-center relative bg-[#f8f2ee]">
            <Image
                src="/backgrounds/Portada/portada_.webp"
                alt="Portada background"
                fill
                className="w-auto h-full object-contain p-4"
                priority
                width={0}
                height={0}
                quality={100}
                unoptimized
            />
        </section>
    );
}
