import AgendaTimelineItem from "./AgendaTimelineItem";

const agendaItems = [
    {
        time: "10am",
        description: "Ceremonia",
        iconSrc: "/Agenda/Icons_SVG/Rings_Nr2.svg",
        iconAlt: "Iglesia",
    },
    {
        time: "11am",
        description: "Fotitos familiares",
        iconSrc: "/Agenda/Icons_SVG/Camera.svg",
        iconAlt: "Fotos",
    },
    {
        time: "12md - 3pm",
        description: ["Bienvenida, Almuerzo,", "tiempo familiar"],
        iconSrc: "/Agenda/Icons_SVG/Meal.svg",
        iconAlt: "Almuerzo",
    },
    {
        time: "3pm - 4pm",
        description: "Cierre especial",
        iconSrc: "/Agenda/Icons_SVG/Guitar.svg",
        iconAlt: "Cierre",
    },
];

export default function Agenda() {
    return (
        <section className="min-h-[60vh] w-full flex items-center justify-center bg-[#f8f2ee] relative pt-14">
            <div className="w-11/12 mx-6 sm:py-10 px-4 sm:px-6 bg-[#f8f2ee] relative">
                <h2 className="pinyon-heading text-5xl text-[#626839] text-center mb-10">
                    Itinerario
                </h2>

                <div className="space-y-2">
                    {agendaItems.map((item, idx) => (
                        <AgendaTimelineItem
                            key={`${item.time}-${idx}`}
                            time={item.time}
                            description={item.description}
                            iconSrc={item.iconSrc}
                            iconAlt={item.iconAlt}
                            iconSide={idx % 2 === 0 ? "left" : "right"}
                            isFirst={idx === 0}
                            isLast={idx === agendaItems.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
