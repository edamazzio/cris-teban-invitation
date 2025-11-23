import AgendaItem from "./AgendaItem";
import {Pinyon_Script} from "next/font/google";
const pinyonScript = Pinyon_Script({
    weight: "400",
    subsets: ["latin"]
});

export default function Agenda() {
    return (
        <section
            className="h-[60vh] w-full flex items-center justify-center bg-[#f8f2ee] relative"
            // style={{
            //     backgroundImage: 'url(/backgrounds/Agenda/agenda_bg.png)',
            //     backgroundSize: 'auto 100%',
            //     backgroundPosition: 'center',
            //     backgroundRepeat: 'repeat-x'
            // }}
        >
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url(/backgrounds/Agenda/agenda.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
        </section>
    );
}
