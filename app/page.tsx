import Portada from "./components/Portada";
import Agenda from "./components/Agenda";
import CodigoVestimenta from "./components/CodigoVestimenta";
import Invitacion from "./components/Invitacion";
import Logistica from "./components/Logistica";
import ScrollSection from "./components/ScrollSection";

export default function Home() {
    return (
        <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <ScrollSection>
                <Portada/>
            </ScrollSection>
            <ScrollSection>
                <Invitacion/>
            </ScrollSection>
            <ScrollSection>
                <Agenda/>
            </ScrollSection>
            <ScrollSection>
                <CodigoVestimenta/>
            </ScrollSection>
            <ScrollSection>
                <Logistica/>
            </ScrollSection>
        </div>
    );
}
