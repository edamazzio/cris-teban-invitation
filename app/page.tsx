import Agenda from "./components/Agenda";
import CodigoVestimenta from "./components/CodigoVestimenta";
import Nosotros from "./components/Nosotros";
import DateCountdown from "./components/DateCountdown";
import Invitacion from "./components/Invitacion";
import FincaLaLucia from "./components/FincaLaLucia";


export default async function Home() {

    return (
        <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <Invitacion/>
            <Nosotros/>
            <DateCountdown/>
            <FincaLaLucia/>
            <Agenda/>
            <CodigoVestimenta/>
        </div>
    );
}
