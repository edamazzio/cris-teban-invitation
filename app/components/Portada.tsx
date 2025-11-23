"use client";

import Image from "next/image";
import { useState } from "react";
import { Pinyon_Script, IM_Fell_Double_Pica } from "next/font/google";

const pinyonScript = Pinyon_Script({
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
      {/*<div className="text-center absolute top-[30%] md:top-[25%] left-1/2 -translate-x-1/2 z-10 transition-all duration-500 w-full">*/}
      {/*  <h1 className={`text-5xl md:text-6xl font-bold text-amber-50 mb-4 ${pinyonScript.className}`}>*/}
      {/*    Cristel & Esteban*/}
      {/*  </h1>*/}
      {/*  <p className={`text-2xl md:text-3xl text-amber-50 ${pinyonScript.className}`}>*/}
      {/*    ¡Nos casamos!*/}
      {/*  </p>*/}
      {/*    <p className={`text-base md:text-lg text-amber-50 ${im_fell.className}`}>*/}
      {/*    21 | 02 | 2026*/}
      {/*        /!*<br />*!/*/}
      {/*        /!*{"Finca La Lucía".toUpperCase()} <br />*!/*/}
      {/*        /!*{"Pico Blanco, Escazú".toUpperCase()}*!/*/}
      {/*  </p>*/}

      {/*</div>*/}
      {/*<div className="absolute bottom-8 text-center z-10">*/}
      {/*  <p className={`text-xl text-black ${pinyonScript.className}`}>*/}
      {/*    21 de Febrero del 2026*/}
      {/*  </p>*/}
      {/*</div>*/}
    </section>
  );
}
