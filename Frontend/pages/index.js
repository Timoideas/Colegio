import style from 'styles/css/Index.module.css';
import { Section, Body, Content } from 'components/Resources/Timoideas';
import fetch from 'node-fetch';
import { useRef, useState } from 'react';
import Link from 'next/link';
export default function Index({ comunicados, publicaciones, actividades }) {
  const SolicitarVacante = async () => {
    const solicitante = {
      name: 'Fernando',
      username: 'Timoideas',
      telefono: '966682190',
      dni: '51478952',
    };
    const res = await fetch('http://localhost:4000/vacantes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(solicitante),
    });
    const data = await res.json();
  };
  return (
    <>
      <Body>
        <Section>
          <Content center>
            <h1 className={style.Title}>Crear Usuarios</h1>
            <div>
              <button onClick={SolicitarVacante}>Solicitar Vacante</button>
            </div>
            <p>comunicados listos</p>
            <p>publicaciones listas</p>
            <p>actividades listas</p>
            <Link href='/colegio'>
              <a>Ingresar al colegio</a>
            </Link>
          </Content>
        </Section>
      </Body>
    </>
  );
}
export async function getServerSideProps(context) {
  const resC = await fetch('http://localhost:4000/comunicados');
  const comunicados = await resC.json();
  const resP = await fetch('http://localhost:4000/publicaciones');
  const publicaciones = await resP.json();
  const resA = await fetch('http://localhost:4000/actividades');
  const actividades = await resA.json();
  return {
    props: {
      comunicados,
      publicaciones,
      actividades,
    },
  };
}
