'use client';

import {useEffect, useState} from 'react';
import {IM_Fell_Double_Pica} from "next/font/google";

const im_fell = IM_Fell_Double_Pica({
    weight: "400",
    subsets: ["latin"]
});

interface CountdownTimerProps {
    targetDate: Date;
    labels?: {
        days?: string;
        hours?: string;
        minutes?: string;
        seconds?: string;
    };
}

export default function CountdownTimer({
                                           targetDate,
                                           labels = {
                                               days: "Días",
                                               hours: "Horas",
                                               minutes: "Min",
                                               seconds: "Seg"
                                           }
                                       }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = targetDate.getTime() - new Date().getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0});
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (num: number) => String(num).padStart(2, '0');

    return (
        <div className="flex flex-col items-center justify-center py-8 px-4">
            {/* "FALTAN" text */}
            <p className={`${im_fell.className} text-sm tracking-[0.3em] text-[#e8e4d8] mb-6`}>
                FALTAN
            </p>

            {/* Countdown numbers */}
            <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl md:text-6xl font-light text-[#e8e4d8] tabular-nums">
                    {formatNumber(timeLeft.days)}
                </span>
                <span className="text-4xl md:text-5xl font-light text-[#e8e4d8]">:</span>
                <span className="text-5xl md:text-6xl font-light text-[#e8e4d8] tabular-nums">
                    {formatNumber(timeLeft.hours)}
                </span>
                <span className="text-4xl md:text-5xl font-light text-[#e8e4d8]">:</span>
                <span className="text-5xl md:text-6xl font-light text-[#e8e4d8] tabular-nums">
                    {formatNumber(timeLeft.minutes)}
                </span>
                <span className="text-4xl md:text-5xl font-light text-[#e8e4d8]">:</span>
                <span className="text-5xl md:text-6xl font-light text-[#e8e4d8] tabular-nums">
                    {formatNumber(timeLeft.seconds)}
                </span>
            </div>

            {/* Labels */}
            <div className="flex items-center gap-8 md:gap-12">
                <span className={`${im_fell.className} text-xs tracking-wider text-[#e8e4d8] w-12 text-center`}>
                    {labels.days}
                </span>
                <span className={`${im_fell.className} text-xs tracking-wider text-[#e8e4d8] w-12 text-center`}>
                    {labels.hours}
                </span>
                <span className={`${im_fell.className} text-xs tracking-wider text-[#e8e4d8] w-12 text-center`}>
                    {labels.minutes}
                </span>
                <span className={`${im_fell.className} text-xs tracking-wider text-[#e8e4d8] w-12 text-center`}>
                    {labels.seconds}
                </span>
            </div>
        </div>
    );
}
