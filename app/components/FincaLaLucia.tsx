'use client';

import { Pinyon_Script, IM_Fell_Double_Pica } from "next/font/google";
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
        <section className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-[#f8f2ee] relative py-12 px-4">
            <div className="w-full max-w-4xl mx-auto">
                {/* Title */}
                <h2 className={`${pinyonScript.className} text-5xl sm:text-6xl md:text-7xl text-[#626839] text-center mb-3`}>
                    Finca La Lucía
                </h2>

                {/* Subtitle */}
                <p className={`${im_fell.className} text-sm tracking-widest text-[#626839] text-center mb-8`}>
                    LUGAR DE CELEBRACIÓN
                </p>

                {/* Map Image */}
                <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                    <div className="relative w-full h-[300px] sm:h-[400px]">
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
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {/* Google Maps Button */}
                    <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto group"
                    >
                        <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#626839] hover:bg-[#626839] text-[#626839] hover:text-[#f8f2ee] rounded-full transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-3">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            <span className={`${im_fell.className} text-sm tracking-wider`}>
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
                        <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#33ccff] hover:bg-[#33ccff] text-[#626839] hover:text-white rounded-full transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-3">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.26-1.5c.36-.81.7-1.51 1.17-2.26.96-1.54 2.21-2.86 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.75c-1.52 0-2.75-1.23-2.75-2.75S10.48 6.25 12 6.25s2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75z"/>
                            </svg>
                            <span className={`${im_fell.className} text-sm tracking-wider`}>
                                Abrir en Waze
                            </span>
                        </button>
                    </a>
                </div>

                {/* Address */}
                <div className="mt-8 text-center">
                    <p className={`${im_fell.className} text-[#626839] text-sm leading-relaxed`}>
                        Pico Blanco, San José, Escazú
                    </p>
                </div>
            </div>
        </section>
    );
}
