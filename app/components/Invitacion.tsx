'use client'

import Image from "next/image";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


import {IM_Fell_Double_Pica, Pinyon_Script} from "next/font/google";

const pinyonScript = Pinyon_Script({
    weight: "400",
    subsets: ["latin"]
});

const im_fell = IM_Fell_Double_Pica({
    weight: "400",
    subsets: ["latin"]
})

export default function Invitacion() {
    const section = <>
        <section
            className="w-full h-[100vh] flex flex-col items-center justify-start relative bg-[#f8f2ee]"
            // className="w-full h-[100vh] flex flex-col items-center justify-start relative bg-[#000]"
        >
            {/* Image at the top */}
            <div className="w-11/12 h-11/12 mt-4 flex items-center justify-center">
                <Image
                    src="/backgrounds/Invitacion/us2.jpg"
                    alt="Portada background"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto h-full object-contain p-4"
                    priority
                    quality={100}
                />
            </div>

            {/* Audio player */}

            {/* Content below the image */}
            <div className="w-full flex flex-col items-center justify-center p-2">
                <p className={`${pinyonScript.className} text-[#626839] text-xl/6 w-8/12 text-center`}>
                    A donde tú vayas, yo iré; dondequiera que tú vivas, yo viviré <br/>
                </p>
                <p className={`${pinyonScript.className} text-[#626839] mt-4 text-xl/6 w-8/12 text-center`}>
                    Ruth 1:16
                </p>
            </div>
            <div className="w-full flex justify-center py-6 pb-10 mt-4">
                <AudioPlayer
                    src="/audio/nuestra_cancion.mp3"
                    loop={false}
                    className={`!bg-[#f8f2ee] !shadow-none !w-3/4`}
                    header={<span className={`text-[#626839] flex justify-center text-sm ${im_fell.className}`}> Dale play a nuestra cancion</span>}
                    customAdditionalControls={[]}
                    customVolumeControls={[]}
                    // other props here
                />
            </div>
        </section>


    </>;
    return section;
}
