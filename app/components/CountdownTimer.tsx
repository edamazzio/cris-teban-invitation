'use client';

import {useEffect, useState} from 'react';

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
        <div className="flex flex-col items-center justify-center py-8 mb-2 w-full">
            {/* "FALTAN" text */}
            <p className="im-fell-text tracking-[0.249em] text-[#e8e4d8] mb-6">
                FALTAN
            </p>

            {/* Countdown numbers and labels */}
            <div className="flex items-end gap-3">
                {/* Days */}
                <div className="flex flex-col items-center">
                    <span className="im-fell-text text-6xl! font-light text-[#e8e4d8] tabular-nums mb-2">
                        {formatNumber(timeLeft.days)}
                    </span>
                    <span className="im-fell-text text-xl! tracking-wider text-[#e8e4d8] text-center mt-3">
                        {labels.days}
                    </span>
                </div>

                {/* Colon */}
                <div className="flex flex-col items-center">
                    <span className="text-4xl md:text-5xl font-light text-[#e8e4d8] mb-2">:</span>
                    <span className="im-fell-text text-3xl! tracking-wider text-[#e8e4d8] text-center opacity-0 mt-3">
                        :
                    </span>
                </div>

                {/* Hours */}
                <div className="flex flex-col items-center">
                    <span className="im-fell-text text-6xl! font-light text-[#e8e4d8] tabular-nums mb-2">
                        {formatNumber(timeLeft.hours)}
                    </span>
                    <span className="im-fell-text text-xl! tracking-wider text-[#e8e4d8] text-center mt-3">
                        {labels.hours}
                    </span>
                </div>

                {/* Colon */}
                <div className="flex flex-col items-center">
                    <span className="text-4xl md:text-5xl font-light text-[#e8e4d8] mb-2">:</span>
                    <span className="im-fell-text text-3xl! tracking-wider text-[#e8e4d8] text-center opacity-0 mt-3">
                        :
                    </span>
                </div>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                    <span className="im-fell-text text-6xl! font-light text-[#e8e4d8] tabular-nums mb-2">
                        {formatNumber(timeLeft.minutes)}
                    </span>
                    <span className="im-fell-text text-xl! tracking-wider text-[#e8e4d8] text-center mt-3">
                        {labels.minutes}
                    </span>
                </div>

                {/* Colon */}
                <div className="flex flex-col items-center">
                    <span className="text-4xl md:text-5xl font-light text-[#e8e4d8] mb-2">:</span>
                    <span className="im-fell-text text-3xl! tracking-wider text-[#e8e4d8] text-center opacity-0 mt-3">
                        :
                    </span>
                </div>

                {/* Seconds */}
                <div className="flex flex-col items-center">
                    <span className="im-fell-text text-6xl! font-light text-[#e8e4d8] tabular-nums mb-2">
                        {formatNumber(timeLeft.seconds)}
                    </span>
                    <span className="im-fell-text text-xl! tracking-wider text-[#e8e4d8] text-center mt-3">
                        {labels.seconds}
                    </span>
                </div>
            </div>
        </div>
    );
}
