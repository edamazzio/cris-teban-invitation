import Image from "next/image";

interface AgendaTimelineItemProps {
    time: string;
    description: string | string[];
    iconSrc: string;
    iconAlt: string;
    iconSide: "left" | "right";
    isFirst?: boolean;
    isLast?: boolean;
}

export default function AgendaTimelineItem({
    time,
    description,
    iconSrc,
    iconAlt,
    iconSide,
    isFirst = false,
    isLast = false,
}: AgendaTimelineItemProps) {
    const descriptions = Array.isArray(description) ? description : [description];

    const TextBlock = (
        <div className={iconSide === "left" ? "text-left" : "text-right"}>
            <p className="im-fell-text tracking-[0.25em] text-[#626839]">
                {time}
            </p>
            {descriptions.map((desc, index) => (
                <p
                    key={index}
                    className="im-fell-text tracking-[0.25em] text-[#626839]"
                >
                    {desc}
                </p>
            ))}
        </div>
    );

    const IconBlock = (
        <div className={iconSide === "left" ? "flex justify-end" : "flex justify-start"}>
            <Image
                src={iconSrc}
                alt={iconAlt}
                width={70}
                height={70}
                className="opacity-80 filter [filter:invert(41%)_sepia(18%)_saturate(813%)_hue-rotate(28deg)_brightness(90%)_contrast(97%)]!"
            />
        </div>
    );

    return (
        <div className="grid grid-cols-[1fr_24px_1fr] items-center gap-x-4 m-0">
            {/* Left */}
            <div className="py-2">
                {iconSide === "left" ? IconBlock : TextBlock}
            </div>

            {/* Center line + dot */}
            <div className="flex flex-col items-center h-full">
                <div
                    className={`w-0.5 h-7/12 bg-[#626839]/40 ${false ? "opacity-0" : ""}`}
                />

                <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    className="relative z-10"
                    aria-hidden="true"
                >
                    <circle cx="5" cy="5" r="5" fill="rgba(98, 104, 57, 0.7)" />
                </svg>

                <div
                    className={`w-0.5 h-7/12 bg-[#626839]/40 ${false ? "opacity-0" : ""}`}
                />
            </div>

            {/* Right */}
            <div className="py-2">
                {iconSide === "left" ? TextBlock : IconBlock}
            </div>
        </div>
    );
}
