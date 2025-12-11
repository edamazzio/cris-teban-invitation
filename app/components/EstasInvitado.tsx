import AgendaTimelineItem from "./AgendaTimelineItem";
import {IM_Fell_Double_Pica, Pinyon_Script} from "next/font/google";
import Image from "next/image";

const pinyonScript = Pinyon_Script({
    weight: "400",
    subsets: ["latin"]
});
const imFell = IM_Fell_Double_Pica({
    weight: "400",
    subsets: ["latin"]
});

export default function EstasInvitado() {
    return (
        <section
            className="min-h-[7vh] w-full flex items-center justify-center bg-[#f8f2ee] relative py-8"
        >
            <div
                className="mx-6 py-6 sm:py-10 px-4 sm:px-6  bg-[#f8f2ee] relative">


                {/* Agenda Title */}
                <h2 className={`${pinyonScript.className} text-5xl text-[#626839] text-center mb-1`}>
                    ¡Nos casamos, y estás invitado!
                </h2>
                <p className={`${imFell.className} max-w-md mx-auto text-2xl text-[#626839] text-center mt-2`}>Nos llena de felicidad contar con tu compañía el día de nuestra boda</p>

            </div>
        </section>
    );
}
