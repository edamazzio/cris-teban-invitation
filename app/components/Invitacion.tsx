import Image from "next/image";

export default function Invitacion() {
    return (
        <section
            className="w-full h-screen flex flex-col items-center justify-center relative"
            style={{
                aspectRatio: '1 / 1'
            }}
        >
            <Image
                src="/backgrounds/Invitacion/invitacion_bg.webp"
                alt="Portada background"
                fill
                className={`object-cover`}
                priority
                quality={100}
                unoptimized
            />
        </section>
    );
}
