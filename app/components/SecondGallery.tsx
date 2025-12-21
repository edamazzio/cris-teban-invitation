'use client'

import {EmblaOptionsType} from "embla-carousel";
import EmblaCarousel from "./CarouselEmbra/EmblaCarousel";

export default function SecondGallery() {
    const OPTIONS: EmblaOptionsType = {loop: true}
    return (

        <section
            className="w-full min-h-[30vh] flex flex-col items-center justify-start relative bg-[#f8f2ee]">
            {/* Image at the top */}
            {/* Audio player */}
            <div className="w-full max-w-xl flex items-center justify-center mb-4 mt-10">
                <div className="relative w-full">
                    <EmblaCarousel imgSources={[
                        "/us/us10.webp",
                    ]} options={{...OPTIONS, hideDotButtons: true}}/>
                </div>
            </div>

            {/*/!* Content below the image *!/*/}
            {/*<div className="w-full flex flex-col items-center justify-center px-4 py-2 mb-4">*/}
            {/*    <p className={`pinyon-heading text-[#626839] text-[1.77rem]! w-8/12 sm:w-8/12 text-center leading-8`}>*/}
            {/*        A donde tú vayas, yo iré; dondequiera que tú vivas, yo viviré*/}
            {/*    </p>*/}
            {/*    <p className={`pinyon-heading text-[#626839] mt-3 text-[1.77rem]! w-11/12 sm:w-8/12 text-center`}>*/}
            {/*        Ruth 1:16*/}
            {/*    </p>*/}
            {/*</div>*/}


        </section>
    );
}
