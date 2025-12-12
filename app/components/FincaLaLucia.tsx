'use client';

import Image from "next/image";

export default function FincaLaLucia() {
    // Coordinates for Finca La Lucía (Costa Rica)
    const lat = 9.882636;
    const lng = -84.135429;
    const googleMapsUrl = "https://maps.app.goo.gl/dkpq39AGyw5GJkMJ9";
    const wazeUrl = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;

    return (
        <section
            className="min-h-[15vh] w-full flex flex-col items-center justify-center bg-[#626839] relative pb-15 px-4">
            <div className="w-11/12 max-w-md mx-">
                {/* Title */}
                <h2 className={`im-fell-text text-5xl! text-[#e8e4d8] text-center mb-3`}>
                    Finca La Lucía
                </h2>

                {/* Subtitle */}
                <p className="im-fell-text text-[#e8e4d8] text-center mb-8">
                    Pico Blanco, Escazú, San José
                </p>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    {/* Google Maps Button */}
                    <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                    >
                        <button
                            className="w-full sm:w-auto px-5 py-2.5 bg-transparent border-1 border-[#e8e4d8] hover:bg-[#e8e4d8] text-[#e8e4d8] hover:text-[#626839] rounded-full transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group">
                            {/* Google Maps Icon */}
                            <span className="w-6 h-6 flex items-center justify-center [filter:brightness(0)_saturate(100%)_invert(93%)_sepia(9%)_saturate(295%)_hue-rotate(350deg)_brightness(95%)_contrast(88%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(37%)_sepia(10%)_saturate(1264%)_hue-rotate(58deg)_brightness(94%)_contrast(89%)] transition-all duration-300">
                                <Image
                                    src="/maps.svg"
                                    alt="Maps"
                                    width={24}
                                    height={24}
                                    className="w-full h-full"
                                />
                            </span>
                            <span className="im-fell-text tracking-wider">
                                Abrir en Google Maps
                            </span>
                        </button>
                    </a>

                    {/* Waze Button */}
                    <a
                        href={wazeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                    >
                        <button
                            className="w-full sm:w-auto px-5 py-2.5 bg-transparent border-1 border-[#e8e4d8] hover:bg-[#e8e4d8] text-[#e8e4d8] hover:text-[#626839] rounded-full transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group">
                            {/* Waze Icon */}
                            <span className="w-6 h-6 flex items-center justify-center [filter:brightness(0)_saturate(100%)_invert(93%)_sepia(9%)_saturate(295%)_hue-rotate(350deg)_brightness(95%)_contrast(88%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(37%)_sepia(10%)_saturate(1264%)_hue-rotate(58deg)_brightness(94%)_contrast(89%)] transition-all duration-300">
                                <Image
                                    src="/waze.svg"
                                    alt="Waze"
                                    width={24}
                                    height={24}
                                    className="w-full h-full"
                                />
                            </span>
                            <span className="im-fell-text tracking-wider">
                                Abrir en Waze
                            </span>
                        </button>
                    </a>
                </div>

            </div>
        </section>
    );
}
