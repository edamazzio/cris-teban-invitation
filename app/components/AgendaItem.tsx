import {Pinyon_Script, IM_Fell_Double_Pica} from "next/font/google";

const pinyonScript = Pinyon_Script({
    weight: "400",
    subsets: ["latin"]
});
const im_fell = IM_Fell_Double_Pica({
    weight: "400",
    subsets: ["latin"]
})

interface AgendaItemProps {
    time: string;
    description: string;
}

export default function AgendaItem({ time, description }: AgendaItemProps) {
    return (
        <div className={`mb-12`}>
            <h3 className={`text-[#626839] text-4xl font-bold ${pinyonScript.className}`}>{time} </h3>
            <span className={`text-[#626839] text-3xl tracking-wide ${im_fell.className}`}> {description} </span>
        </div>
    );
}
