"use client";

import Image from "next/image";
import {useState} from "react";

export default function Portada() {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <section className="h-[95vh] w-full flex flex-col items-center justify-center relative">
            {/* Blurred background - shown initially */}
            <Image
                src="/backgrounds/background_blurred.webp"
                alt="Portada background blurred"
                fill
                className={`object-cover object-[center_75%] transition-opacity duration-1500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}
                priority
                unoptimized
            />
            {/* Full resolution background - loads after */}
            <Image
                src="/backgrounds/background.webp"
                alt="Portada background"
                fill
                className={`object-cover object-[center_75%] transition-opacity duration-1500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                priority
                quality={100}
                unoptimized
                onLoad={() => setImageLoaded(true)}
            />
            <div
                className="text-center absolute top-[30%] md:top-[25%] left-1/2 -translate-x-1/2 z-10 transition-all duration-500 w-full">
                <p className="im-fell-text text-amber-50 mb-8 italic">
                    Wedding Day
                </p>
                <h1 className={`font-bold text-amber-50 mb-4 pinyon-heading flex flex-col`}>
                    <span className={`mb-0 leading-9`}>Cristel Leitón</span>
                    <span className={`my-1 leading-9`}>&</span>
                    <span className={`mb-0 leading-9`}>Esteban Damazio</span>
                </h1>
                <h2 className={`im-fell-heading text-amber-50 mt-6`}>
                    21 | 02 | 2026
                </h2>
                {/*<p className={`text-sm md:text-m text-amber-50 ${im_fell.className}`}>*/}
                {/*    21 | 02 | 2026*/}
                {/*    <br />*/}
                {/*    {"Finca La Lucía".toUpperCase()} <br />*/}
                {/*    {"Pico Blanco, Escazú".toUpperCase()}*/}
                {/*</p>*/}

            </div>
            {/*<div className="absolute bottom-8 text-center z-10">*/}
            {/*  <p className={`text-xl text-black ${italianno.className}`}>*/}
            {/*    21 de Febrero del 2026*/}
            {/*  </p>*/}
            {/*</div>*/}
        </section>
    );
}
