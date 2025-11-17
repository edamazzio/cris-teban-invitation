"use client";

import Image from "next/image";
import { useState } from "react";
import { Pinyon_Script, IM_Fell_Double_Pica } from "next/font/google";

const italianno = Pinyon_Script({
  weight: "400",
  subsets: ["latin"]
});

const im_fell = IM_Fell_Double_Pica({
  weight: "400",
    subsets: ["latin"]
})

export default function Portada() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="h-[98vh] w-full flex flex-col items-center justify-center relative">
      {/* Blurred background - shown initially */}
      <Image
        src="/backgrounds/Portada/background_blurred.webp"
        alt="Portada background blurred"
        fill
        className={`object-cover object-[center_75%] transition-opacity duration-1500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}
        priority
        unoptimized
      />
      {/* Full resolution background - loads after */}
      <Image
        src="/backgrounds/Portada/background.webp"
        alt="Portada background"
        fill
        className={`object-cover object-[center_75%] transition-opacity duration-1500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        priority
        quality={100}
        unoptimized
        onLoad={() => setImageLoaded(true)}
      />
      <div className="text-center absolute top-[30%] md:top-[25%] left-1/2 -translate-x-1/2 z-10 transition-all duration-500 w-full">
        <h1 className={`text-5xl md:text-6xl font-bold text-amber-50 mb-4 ${italianno.className}`}>
          Cristel & Esteban
        </h1>
        <p className={`text-xl md:text-2xl text-amber-50 ${italianno.className}`}>
          ¡Nos casamos!
        </p>
          <p className={`text-sm md:text-m text-amber-50 ${im_fell.className}`}>
          21 | 02 | 2026
              <br />
              {"Finca La Lucía".toUpperCase()} <br />
              {"Pico Blanco, Escazú".toUpperCase()}
        </p>

      </div>
      {/*<div className="absolute bottom-8 text-center z-10">*/}
      {/*  <p className={`text-xl text-black ${italianno.className}`}>*/}
      {/*    21 de Febrero del 2026*/}
      {/*  </p>*/}
      {/*</div>*/}
    </section>
  );
}
