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
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const [isOvertime, setIsOvertime] = useState(false);

    useEffect(() => {
        const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    setIsOvertime(difference <= 0);

    const start = difference > 0 ? now : targetDate;
    const end = difference > 0 ? targetDate : now;

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    let hours = end.getHours() - start.getHours();
    let minutes = end.getMinutes() - start.getMinutes();
    let seconds = end.getSeconds() - start.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }

    if (minutes < 0) {
        minutes += 60;
        hours--;
    }

    if (hours < 0) {
        hours += 24;
        days--;
    }

    if (days < 0) {
        months--;

        const previousMonth = new Date(
            end.getFullYear(),
            end.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    setTimeLeft({
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    });
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
                {isOvertime ? "TIEMPO CASADOS" : "FALTAN"}
            </p>

            {/* Countdown numbers and labels */}
            <div className="flex items-end gap-3">
                {/* Years */}
<div className="flex flex-col items-center">
    <span className="im-fell-text text-6xl! font-light text-[#e8e4d8] tabular-nums mb-2">
        {formatNumber(timeLeft.years)}
    </span>
    <span className="im-fell-text text-xl! tracking-wider text-[#e8e4d8] text-center mt-3">
        Años
    </span>
</div>

{/* Colon */}
<div className="flex flex-col items-center">
    <span className="text-4xl md:text-5xl font-light text-[#e8e4d8] mb-2">:</span>
    <span className="opacity-0 mt-3">:</span>
</div>

{/* Months */}
<div className="flex flex-col items-center">
    <span className="im-fell-text text-6xl! font-light text-[#e8e4d8] tabular-nums mb-2">
        {formatNumber(timeLeft.months)}
    </span>
    <span className="im-fell-text text-xl! tracking-wider text-[#e8e4d8] text-center mt-3">
        Meses
    </span>
</div>

{/* Colon */}
<div className="flex flex-col items-center">
    <span className="text-4xl md:text-5xl font-light text-[#e8e4d8] mb-2">:</span>
    <span className="opacity-0 mt-3">:</span>
</div>
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
