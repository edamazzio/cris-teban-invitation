import Agenda from "./components/Agenda";
import EstasInvitado from "./components/EstasInvitado";
import CodigoVestimenta from "./components/CodigoVestimenta";
import Nosotros from "./components/Nosotros";
import DateCountdown from "./components/DateCountdown";
import Invitacion from "./components/Invitacion";
import FincaLaLucia from "./components/FincaLaLucia";
import Portada from "./components/Portada";


export default async function Home() {

    return (
        <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <Portada/>
            <EstasInvitado/>
            <Invitacion/>
            <Nosotros/>
            <DateCountdown/>
            <FincaLaLucia/>
            <Agenda/>
            <CodigoVestimenta/>
        </div>
    );
}
