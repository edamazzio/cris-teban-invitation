import AgendaTimelineItem from "./AgendaTimelineItem";
import {Pinyon_Script} from "next/font/google";

const pinyonScript = Pinyon_Script({
    weight: "400",
    subsets: ["latin"]
});

export default function Agenda() {
    return (
        <section
            className="min-h-[60vh] w-full flex items-center justify-center bg-[#f8f2ee] relative py-8"
        >
            <div
                className="w-11/12 max-w-md mx-6 py-6 sm:py-10 px-4 sm:px-6 border-2 border-[#9ca085] rounded-[2rem] sm:rounded-[3rem] bg-[#f5efe8] relative">

                {/* Agenda Title */}
                <h2 className={`${pinyonScript.className} text-5xl text-[#626839] text-center mb-12`}>
                    Agenda
                </h2>

                {/* Schedule Items */}
                <div className="space-y-8 text-center">
                    <AgendaTimelineItem time="10am" description="ceremonia"/>
                    <AgendaTimelineItem time="11am" description="Fotitos familiares"/>
                    <AgendaTimelineItem
                        time="12md - 3pm"
                        description={["Bienvenida, Almuerzo,", "tiempo familiar"]}
                    />
                    <AgendaTimelineItem time="3pm - 4pm" description="Cierre especial"/>
                </div>
            </div>
        </section>
    );
}
