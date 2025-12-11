import {IM_Fell_Double_Pica, Pinyon_Script} from "next/font/google";

const im_fell = IM_Fell_Double_Pica({
    weight: "400",
    subsets: ["latin"]
});

const pinyonScript = Pinyon_Script({
    weight: "400",
    subsets: ["latin"]
});

interface DateDisplayProps {
    month?: string;
    day?: string;
    year?: string;
    dayOfWeek?: string;
}

export default function DateDisplay({
                                        month = "NOVIEMBRE",
                                        day = "14",
                                        year = "2025",
                                        dayOfWeek = "VIERNES"
                                    }: DateDisplayProps) {
    return (
        <div className="flex flex-col items-center justify-center py-8 px-4">
            {/* Month */}
            <p className={`${im_fell.className} text-lg tracking-[0.249em] text-[#e8e4d8] mb-4`}>
                {month?.toUpperCase()}
            </p>

            {/* Day with decorative lines */}
            <div className="flex items-center gap-4 mb-4">
                <div className="w-24 h-[1px] bg-[#e8e4d8]"></div>
                <p className={`${im_fell.className} text-6xl text-[#e8e4d8]`}>
                    {day}
                </p>
                <div className="w-24 h-[1px] bg-[#e8e4d8]"></div>
            </div>

            {/* Day of week and Year */}
            <div className="flex items-center gap-2">
                <p className={`${im_fell.className} text-lg tracking-[0.249em] text-[#e8e4d8]`}>
                    {dayOfWeek?.toUpperCase()}
                </p>
                <p className={`${im_fell.className} text-2xl tracking-[0.2em] text-[#e8e4d8] mb-1`}>
                    {year?.toUpperCase()}
                </p>
            </div>
        </div>
    );
}
