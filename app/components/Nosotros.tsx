'use client'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


import {IM_Fell_Double_Pica, Pinyon_Script} from "next/font/google";
        import {EmblaOptionsType} from "embla-carousel";
import EmblaCarousel from "./CarouselEmbra/EmblaCarousel";

const pinyonScript = Pinyon_Script({
    weight: "400",
    subsets: ["latin"]
});

const im_fell = IM_Fell_Double_Pica({
    weight: "400",
    subsets: ["latin"]
});

export default function Nosotros() {
    const OPTIONS: EmblaOptionsType = { loop: true }
    return (
        <>
            <style jsx global>{`
                .rhap_main-controls-button {
                    color: #7a7d6b !important;
                }

                .rhap_current-time,
                .rhap_time,
                .rhap_total-time {
                    color: #7a7d6b !important;
                    font-family: 'IM Fell Double Pica', serif !important;
                }

                .rhap_progress-indicator,
                .rhap_progress-filled {
                    background: #7a7d6b !important;
                }
            `}</style>

            <section
                className="w-full min-h-[30vh] flex flex-col items-center justify-start relative bg-[#f8f2ee] py-4">
                {/* Image at the top */}
                <div className="w-full max-w-md flex items-center justify-center px-4 mb-4 mt-10">
                    <div className="relative w-full">
                        <EmblaCarousel imgSources={[
                            "/backgrounds/Invitacion/us2.jpg",
                            "/us/us1.jpg",
                            "/us/us2.jpg",
                            "/us/us3.jpg",
                            "/us/us4.jpg",
                        ]} options={OPTIONS} />

                        {/*<Image*/}
                        {/*    src="/backgrounds/Invitacion/us2.jpg"*/}
                        {/*    alt="Portada background"*/}
                        {/*    fill*/}
                        {/*    sizes="(max-width: 768px) 100vw, 50vw"*/}
                        {/*    className="object-contain"*/}
                        {/*    priority*/}
                        {/*    quality={100}*/}
                        {/*/>*/}
                    </div>
                </div>

                {/* Content below the image */}
                <div className="w-full flex flex-col items-center justify-center px-4 py-2">
                    <p className={`${pinyonScript.className} text-[#626839] text-xl w-8/12 sm:w-8/12 text-center`}>
                        A donde tú vayas, yo iré; dondequiera que tú vivas, yo viviré
                    </p>
                    <p className={`${pinyonScript.className} text-[#626839] mt-3 text-xl w-11/12 sm:w-8/12 text-center`}>
                        Ruth 1:16
                    </p>
                </div>

                {/* Audio player */}
                <div className="w-full flex justify-center px-4 py-4 mt-2">
                    <AudioPlayer
                        src="/audio/nuestra_cancion.mp3"
                        loop={false}
                        className="!bg-[#f8f2ee] !shadow-none w-full sm:!w-3/4 max-w-md"
                        header={
                            <span className={`text-[#626839] flex justify-center text-sm ${im_fell.className}`}>
                                Dale play a nuestra cancion
                            </span>
                        }
                        customAdditionalControls={[]}
                        customVolumeControls={[]}
                    />
                </div>
            </section>
        </>
    );
}
