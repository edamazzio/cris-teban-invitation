
interface AgendaItemProps {
    time: string;
    description: string;
}

export default function AgendaItem({time, description}: AgendaItemProps) {
    return (
        <div className={`mb-12`}>
            <h3 className={`text-[#626839] text-4xl font-bold pinyon-heading`}>{time} </h3>
            <span className="im-fell-text text-[#626839] tracking-wide"> {description} </span>
        </div>
    );
}
