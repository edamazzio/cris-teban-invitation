import {notFound} from 'next/navigation'

export default async function Page({params}: { params: Promise<{ invitado: string }> }) {
    const {invitado} = await params;
    const rawInvitados = process.env.INVITADOS as string;
    const invitados = invitado ? JSON.parse(rawInvitados) : {};
    const invitadosNames = Object.keys(invitados);
    if (!invitadosNames.includes(invitado.trim())) {
        notFound();
        return;
    }
    return <div>Hola: {invitado}<br/> {invitados[invitado].mensaje}</div>
}
