import DateDisplay from "./DateDisplay";
import CountdownTimer from "./CountdownTimer";
import FincaLaLucia from "./FincaLaLucia";

export default function DateCountdown() {
    // Set your wedding date and time here
    const weddingDate = new Date('2026-02-21T10:00:00');

    return (
        <section className="min-h-[30vh] w-full flex flex-col items-center justify-center bg-[#626839] relative">
            <div className="w-full h-full max-w-xl  bg-[#626839] flex flex-col items-center justify-center py-8">
                {/* Date Display */}
                <DateDisplay
                    month="Febrero"
                    day="21"
                    year="2026"
                    dayOfWeek="Sábado"
                    time="10 am"
                />

                <CountdownTimer
                    targetDate={weddingDate}
                    labels={{
                        days: "Días",
                        hours: "Horas",
                        minutes: "Minutos",
                        seconds: "Segundos"
                    }}
                />
                <FincaLaLucia />

            </div>

        </section>
    );
}
