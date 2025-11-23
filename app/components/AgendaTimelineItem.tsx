import {IM_Fell_Double_Pica, Pinyon_Script} from "next/font/google";

const pinyonScript = Pinyon_Script({
    weight: "400",
    subsets: ["latin"]
});

const im_fell = IM_Fell_Double_Pica({
    weight: "400",
    subsets: ["latin"]
});

interface AgendaTimelineItemProps {
    time: string;
    description: string | string[];
}

export default function AgendaTimelineItem({time, description}: AgendaTimelineItemProps) {
    const descriptions = Array.isArray(description) ? description : [description];

    return (
        <div>
            <p className={`${pinyonScript.className} text-2xl text-[#626839] mb-1`}>
                {time}
            </p>
            {descriptions.map((desc, index) => (
                <p key={index} className={`${im_fell.className} text-sm tracking-widest text-[#626839]`}>
                    {desc}
                </p>
            ))}
        </div>
    );
}
