'use client';

import {IM_Fell_Double_Pica, Pinyon_Script} from "next/font/google";
import Image from "next/image";

const pinyonScript = Pinyon_Script({
    weight: "400",
    subsets: ["latin"]
});

const im_fell = IM_Fell_Double_Pica({
    weight: "400",
    subsets: ["latin"]
});

export default function FincaLaLucia() {
    // Coordinates for Finca La Lucía (Costa Rica)
    const lat = 9.882636;
    const lng = -84.135429;
    const googleMapsUrl = "https://maps.app.goo.gl/dkpq39AGyw5GJkMJ9";
    const wazeUrl = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;

    return (
        <section
            className="min-h-[55vh] w-full flex flex-col items-center justify-center bg-[#f8f2ee] relative py-12 px-4">
            <div className="w-11/12 max-w-md mx-">
                {/* Title */}
                <h2 className={`${pinyonScript.className} text-5xl text-[#626839] text-center mb-3`}>
                    Finca La Lucía
                </h2>

                {/* Subtitle */}
                <p className={`${im_fell.className} text-lg  text-[#626839] text-center mb-8`}>
                    Pico Blanco, Escazú, San José
                </p>

                {/* Map Image */}
                <div className="w-full bg-white 2xl shadow-lg overflow-hidden mb-6">
                    <div className="relative w-full aspect-[3/4]">
                        <Image
                            src="/pico_blanco.jpg"
                            alt="Finca La Lucía Location Map"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1200px"
                        />
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    {/* Google Maps Button */}
                    <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto group"
                    >
                        <button
                            className="w-full sm:w-auto px-5 py-2.5 bg-transparent border-1 border-[#626839] hover:bg-[#626839] text-[#626839] hover:text-[#f8f2ee] rounded-full transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group">
                            {/* Google Maps Icon */}
                            <Image
                                src="/maps.svg"
                                alt="Maps"
                                width={16}
                                height={16}
                                className="w-6 h-6 brightness-0 saturate-100 contrast-[0.6] opacity-70 group-hover:brightness-100 group-hover:opacity-100"
                                style={{
                                    filter: 'invert(37%) sepia(10%) saturate(1264%) hue-rotate(58deg) brightness(94%) contrast(89%)'
                                }}
                            />
                            <span className={`${im_fell.className} text-lg tracking-wider`}>
                                Abrir en Google Maps
                            </span>
                        </button>
                    </a>

                    {/* Waze Button */}
                    <a
                        href={wazeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto group"
                    >
                        <button
                            className="w-full sm:w-auto px-5 py-2.5 bg-transparent border-1 border-[#626839] hover:bg-[#626839] text-[#626839] hover:text-[#f8f2ee] rounded-full transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group">
                            {/* Waze Icon */}
                            <Image
                                src="/waze.svg"
                                alt="Waze"
                                width={16}
                                height={16}
                                className="w-6 h-6 brightness-0 saturate-100 group-hover:brightness-100"
                                style={{
                                    filter: 'invert(37%) sepia(10%) saturate(1264%) hue-rotate(58deg) brightness(94%) contrast(89%)'
                                }}
                            />
                            <span className={`${im_fell.className} text-lg tracking-wider`}>
                                Abrir en Waze
                            </span>
                        </button>
                    </a>
                </div>

            </div>
        </section>
    );
}
