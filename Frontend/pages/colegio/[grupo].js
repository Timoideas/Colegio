import style from 'styles/css/Grupo.module.css';
import Head_Main from 'heads/Header_Main';
import { Section, Body, Content } from 'components/Resources/Timoideas';
import fetch from 'node-fetch';
import Link from 'next/link';
export default function Grupo({ alumnos, name }) {
  console.log(alumnos);
  return (
    <>
      <Head_Main />
      <Body>
        <Section>
          <Content center>
            <h1 className={style.Title}>{name}</h1>
            <Link href='/colegio'>
              <a>Volver al colegio</a>
            </Link>
            <h2>Lista de alumnos funcionando</h2>
          </Content>
        </Section>
      </Body>
    </>
  );
}
export async function getStaticPaths() {
  const res = await fetch('http://localhost:4000/grupos');
  const { grupos } = await res.json();
  const paths = grupos.map((grupo) => ({
    params: { grupo: grupo.name },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:4000/grupo/${context.params.grupo}`
  );
  const { grupo } = await res.json();
  const { alumnos, name } = grupo;
  return {
    props: {
      alumnos,
      name,
    },
  };
}
