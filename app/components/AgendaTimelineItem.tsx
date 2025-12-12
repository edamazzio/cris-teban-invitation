
interface AgendaTimelineItemProps {
    time: string;
    description: string | string[];
}

export default function AgendaTimelineItem({time, description}: AgendaTimelineItemProps) {
    const descriptions = Array.isArray(description) ? description : [description];

    return (
        <div>
            <p className={`pinyon-heading text-3xl text-[#626839] mb-1`}>
                {time}
            </p>
            {descriptions.map((desc, index) => (
                <p key={index} className="im-fell-text tracking-widest text-[#626839]">
                    {desc}
                </p>
            ))}
        </div>
    );
}
