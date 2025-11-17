import Portada from "./components/Portada";
import Boda from "./components/Boda";
import CodigoVestimenta from "./components/CodigoVestimenta";
import Logistica from "./components/Logistica";

export default function Home() {
  return (
    <div className="w-full">
      <Portada />
      <Boda />
      <CodigoVestimenta />
      <Logistica />
    </div>
  );
}
