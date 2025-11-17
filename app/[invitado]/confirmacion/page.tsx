export default async function Page({params}: { params: Promise<{ invitado: string }> }) {
    const {invitado} = await params
    return <div>Confirmando: {invitado}</div>
}
