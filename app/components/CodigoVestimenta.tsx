'use client';

import Script from 'next/script'
import { useState } from 'react'


const paletteColors = [
    "#ece3d4",
    "#d8c29c",
    "#8a7144",
    "#dce1ce",
    "#c4cf9f",
    "#626839",
    "#e3e9ea",
    "#bacfd3",
    "#5b7b81",
    "#f3e3e0",
    "#d0a5b3"
];

export default function CodigoVestimenta() {
    const [showRecommendations, setShowRecommendations] = useState(false)
    const [showAvoid, setShowAvoid] = useState(false)


    return (
        <>
            <Script type="text/javascript" async defer src="//assets.pinterest.com/js/pinit.js" />
            <section className="w-full min-h-[65vh] flex items-center justify-center bg-[#f8f2ee] py-10">
                <div className="max-w-xl mx-auto text-[#626839]">
                    {/* Title */}
                    <h2
                        className={`pinyon-heading text-4xl text-center mb-2`}
                    >
                        Código de Vestimenta
                    </h2>
                    <p className="im-fell-text text-center mb-8">
                        Elegancia de Día
                    </p>
                    <div className="flex flex-col items-center gap-2">
                        {/* First row - 6 colors */}
                        <div className="flex justify-center gap-4">
                            {paletteColors.slice(0, 6).map((color) => (
                                <span
                                    key={color}
                                    className="w-18 h-18 rounded-full"
                                    style={{backgroundColor: color}}
                                />
                            ))}
                        </div>
                        {/* Second row - 5 colors */}
                        <div className="flex justify-center gap-4">
                            {paletteColors.slice(6, 11).map((color) => (
                                <span
                                    key={color}
                                    className="w-18 h-18 rounded-full"
                                    style={{backgroundColor: color}}
                                />
                            ))}
                        </div>
                    </div>
                    {/* Color palette */}
                    <div className="flex flex-col items-center mb-14">
                        {/*<h3 className={`pinyon-heading text-3xl mb-1`}>*/}
                        {/*    Paleta de Color*/}
                        {/*</h3>*/}
                        <p className="im-fell-text text-center mt-6">
                            Fresco, veraniego y sin corbata. <br/> tonos naturales y
                            pastel ténue
                        </p>

                    </div>

                    <a
                        data-pin-do="embedBoard"
                        data-pin-board-width="500"
                        data-pin-scale-height="500"
                        data-pin-scale-width="80"
                        href="https://www.pinterest.com/cleitn/boda-tebancris-c%C3%B3digo-de-vestimenta/"
                    />

                    {/* Recommendations & Avoid */}
                    <div className="flex flex-col gap-3 py-14">
                        {/* Recommendations */}
                        <div className="">
                            <button
                                type="button"
                                onClick={() => setShowRecommendations((prev) => !prev)}
                                className="w-full flex items-center justify-center border-1 border-[#626839] rounded-full shadow-sm hover:shadow-md px-5 py-2.5"
                            >
                                <span className="im-fell-text inline-flex items-center gap-1">
                                    Recomendaciones
                                    <span
                                        className={`inline-flex h-5 w-5 items-center justify-center text-[#626839] transition-transform duration-300 ${showRecommendations ? 'rotate-180' : 'rotate-0'}`}
                                        aria-hidden="true"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                                    showRecommendations ? 'max-h-[500px]' : 'max-h-0'
                                }`}
                            >
                                <ul className="im-fell-text leading-relaxed space-y-2 list-disc list-inside pt-10 pb-8">
                                    <li>
                                        <span className="italic">Mujeres:</span> vestidos ligeros, conjuntos elegantes
                                        de dos piezas.
                                    </li>
                                    <li>
                                        <span className="italic">Hombres:</span> camisas frescas, pantalones formales
                                        livianos.
                                    </li>
                                    <li>
                                        Zapatos cómodos para caminar sobre piedra suelta y césped.
                                    </li>
                                    <li>
                                        Abrigo ligero, saco ligero o blazer para abrigarse en caso de que el clima
                                        cambie.
                                    </li>
                                    <li>
                                        Accesorios opcionales: sombreros, lentes de sol.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Avoid section */}
                        <div className="">
                            <button
                                type="button"
                                onClick={() => setShowAvoid((prev) => !prev)}
                                className="w-full flex items-center justify-center mb-2 border-1 border-[#626839] rounded-full shadow-sm hover:shadow-md px-5 py-2.5"
                            >
                                <span className="im-fell-text inline-flex items-center gap-1">
                                    Por favor evitar
                                    <span
                                        className={`inline-flex h-5 w-5 items-center justify-center text-[#626839] transition-transform duration-300 ${showAvoid ? 'rotate-180' : 'rotate-0'}`}
                                        aria-hidden="true"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                                    showAvoid ? 'max-h-[500px]' : 'max-h-0'
                                }`}
                            >
                                <ul className="im-fell-text leading-relaxed space-y-2 list-disc list-inside pt-10 pb-8">
                                    <li>
                                        Mujeres vestir de blanco (es decir, no vestir de blanco. Solo la novia).
                                    </li>
                                    <li>
                                        Hombres vestir totalmente de beige (es decir, no vestir totalmente de beige).
                                    </li>
                                    <li>Colores brillantes en general.</li>
                                    <li>Tonos rojos, amarillos, naranjas, morados.</li>
                                    <li>Tacones finos y altos.</li>
                                    <li>Estampados y patrones grandes.</li>
                                    <li>Vestidos muy cortos y escotados.</li>
                                    <li>Cualquier tipo de prenda informal: tenis, gorras, etc.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Monogram */}
                    <div className="mt-8 flex justify-center">
                        <span className={`pinyon-heading text-3xl text-[#626839]`}>
                            E &amp; C
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
}
