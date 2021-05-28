// import styleDashboard from 'styles/css/Dashboard.module.css';
import { Header_Main } from 'heads/Header_Main';
import { Section, Body, Content } from 'components/Resources/Timoideas';
import fetch from 'node-fetch';
export default function Dashboard() {
  const CrearComunicado = async () => {
    // Hacer que automáticamente se sume uno al comunicado
    const body = {
      name: '002 - 2021',
      title: 'Por una sociedad mejor',
      body: 'Este es el body xd',
    };
    const res = await fetch('http://localhost:4000/comunicados', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <>
      <Header_Main />
      <Body>
        <Section size={1}>
          <h1>Dashboard</h1>
          <button onClick={CrearComunicado}>Crear Comunicado</button>
        </Section>
      </Body>
    </>
  );
}
