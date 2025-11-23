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
        <div className="flex flex-col items-center justify-center py-4 sm:py-7 pt-2 px-4">
            {/* Month */}
            <p className={`${im_fell.className} text-xs sm:text-sm tracking-[0.3em] text-[#e8e4d8] mb-1`}>
                {month}
            </p>

            {/* Day with decorative lines */}
            <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-16 sm:w-24 h-[1px] bg-[#e8e4d8]"></div>
                <p className={`${pinyonScript.className} text-4xl sm:text-5xl md:text-6xl text-[#e8e4d8]`}>
                    {day}
                </p>
                <div className="w-16 sm:w-24 h-[1px] bg-[#e8e4d8]"></div>
            </div>

            {/* Day of week and Year */}
            <div className="flex items-center gap-4 sm:gap-8">
                <p className={`${im_fell.className} text-xs sm:text-sm tracking-[0.3em] text-[#e8e4d8]`}>
                    {dayOfWeek}
                </p>
                <p className={`${im_fell.className} text-xs sm:text-sm tracking-[0.3em] text-[#e8e4d8]`}>
                    {year}
                </p>
            </div>
        </div>
    );
}
