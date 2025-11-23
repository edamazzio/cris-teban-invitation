import {IM_Fell_Double_Pica, Pinyon_Script} from "next/font/google";

const pinyonScript = Pinyon_Script({
    weight: "400",
    subsets: ["latin"]
});

const imFell = IM_Fell_Double_Pica({
    weight: "400",
    subsets: ["latin"]
});

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
    return (
        <section className="w-full min-h-[65vh] flex items-center justify-center bg-[#f8f2ee] py-10">
            <div className="w-11/12 max-w-md mx-auto text-[#626839]">
                {/* Title */}
                <h2
                    className={`${pinyonScript.className} text-5xl text-center mb-2`}
                >
                    Código de Vestimenta
                </h2>
                <p
                    className={`${imFell.className} text-base text-center uppercase mb-8`}
                >
                    Elegancia de Día: fresco, veraniego y sin corbata.
                </p>

                {/* Color palette */}
                <div className="flex flex-col items-center mb-10">
                    <h3 className={`${pinyonScript.className} text-3xl mb-1`}>
                        Paleta de Color
                    </h3>
                    <p
                        className={`${imFell.className} text-lg text-center mb-4`}
                    >
                        natural, fresca, tonos
                        <br/>
                        pastel apagado
                    </p>
                    <div className="flex flex-col items-center gap-2">
                        {/* First row - 6 colors */}
                        <div className="flex justify-center gap-2">
                            {paletteColors.slice(0, 6).map((color) => (
                                <span
                                    key={color}
                                    className="w-7 h-7 rounded-full"
                                    style={{backgroundColor: color}}
                                />
                            ))}
                        </div>
                        {/* Second row - 5 colors */}
                        <div className="flex justify-center gap-2">
                            {paletteColors.slice(6, 11).map((color) => (
                                <span
                                    key={color}
                                    className="w-7 h-7 rounded-full"
                                    style={{backgroundColor: color}}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recommendations */}
                <div className="mb-8">
                    <h4
                        className={`${imFell.className} text-lg text-center uppercase mb-4`}
                    >
                        Recomendaciones
                    </h4>
                    <ul
                        className={`${imFell.className} text-lg leading-relaxed space-y-2 list-disc list-inside`}
                    >
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

                {/* Avoid section */}
                <div className="mb-6">
                    <h4
                        className={`${imFell.className} text-lg text-center uppercase mb-4`}
                    >
                        Por favor evitar
                    </h4>
                    <ul
                        className={`${imFell.className} text-lg leading-relaxed space-y-2 list-disc list-inside`}
                    >
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

                {/* Monogram */}
                <div className="mt-8 flex justify-center">
                    <span className={`${pinyonScript.className} text-3xl text-[#626839]`}>
                        E &amp; C
                    </span>
                </div>
            </div>
        </section>
    );
}
