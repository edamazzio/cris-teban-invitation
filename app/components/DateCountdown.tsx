import DateDisplay from "./DateDisplay";
import CountdownTimer from "./CountdownTimer";

export default function DateCountdown() {
    // Set your wedding date and time here
    const weddingDate = new Date('2026-02-21T10:00:00');

    return (
        <section className="min-h-[30vh] w-full flex flex-col items-center justify-center bg-[#f8f2ee] relative">
            <div className="w-full h-full bg-[#626839] flex flex-col items-center justify-center py-8">
                {/* Date Display */}
                <DateDisplay
                    month="Febrero"
                    day="21"
                    year="2026"
                    dayOfWeek="Sábado"
                    time="10 am"
                />

                {/* Countdown Timer */}
                <div className="w-full">
                    <CountdownTimer
                        targetDate={weddingDate}
                        labels={{
                            days: "Días",
                            hours: "Horas",
                            minutes: "Minutos",
                            seconds: "Segundos"
                        }}
                    />
                </div>
            </div>

        </section>
    );
}
