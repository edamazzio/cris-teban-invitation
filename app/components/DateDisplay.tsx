interface DateDisplayProps {
    month?: string,
    day?: string,
    year?: string,
    dayOfWeek?: string,
    time?: string
}

export default function DateDisplay({
                                        month = "NOVIEMBRE",
                                        day = "14",
                                        year = "2025",
                                        dayOfWeek = "VIERNES",
                                        time = "10am"
                                    }: DateDisplayProps) {
    return (
        <div className="flex flex-col items-center justify-center py-8 mb-2 w-full">
            {/* Month - centered on top */}
            <p className="im-fell-text tracking-[0.4em] text-[#e8e4d8] mb-2">
                {month?.toUpperCase()}
            </p>

            {/* Day of week, Day, and Year in a row */}
            <div className="flex items-center justify-center gap-6">
                {/* Day of week with bar below */}
                <div className="flex flex-col w-40 h-20 justify-center items-center border-y-[1px] border-[#e8e4d8]">
                    <p className="im-fell-text tracking-[0.3em] text-[#e8e4d8]">
                        {dayOfWeek?.toUpperCase()}
                    </p>
                </div>

                {/* Day - big in center */}
                <p className="im-fell-text text-8xl! text-[#e8e4d8] mx-8 mb-4">
                    {day}
                </p>

                {/* Year with bar below */}
                <div className="flex flex-col w-40 h-20 justify-center items-center border-y-[1px] border-[#e8e4d8]">
                    <p className="im-fell-text text-3xl! tracking-[0.2em] text-[#e8e4d8]">
                        {year}
                    </p>
                </div>
            </div>
            <p className="im-fell-text text-4xl! tracking-[0.1em] text-[#e8e4d8] mt-2">
                {time}
            </p>
        </div>
    );
}
