import Agenda from "./components/Agenda";
import CodigoVestimenta from "./components/CodigoVestimenta";
import Nosotros from "./components/Nosotros";
import Logistica from "./components/Logistica";
import DateCountdown from "./components/DateCountdown";
import Invitacion from "./components/Invitacion";

interface HomeProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({searchParams}: HomeProps) {
    const params = await searchParams;
    const showContent = params.ver === 'si';

    if (!showContent) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-light text-gray-600">Site build in progress</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <Invitacion/>
            <Nosotros/>
            <DateCountdown/>
            <Agenda/>
            <CodigoVestimenta/>
            <Logistica/>
        </div>
    );
}
