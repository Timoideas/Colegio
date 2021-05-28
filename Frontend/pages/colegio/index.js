// import style from 'styles/css/Colegio.module.css';
import Head_Main from 'heads/Header_Main';
import { Section, Body, Content } from 'components/Resources/Timoideas';
import Link from 'next/link';
export default function Colegio() {
  return (
    <>
      <Head_Main />
      <Body>
        <Section>
          <h1>Colegio</h1>
          <Link href='/colegio/primero'>
            <a>Primero</a>
          </Link>
          <Link href='/colegio/segundo'>
            <a>Segundo</a>
          </Link>
          <Link href='/colegio/tercero'>
            <a>Tercero</a>
          </Link>
          <Link href='/colegio/cuarto'>
            <a>Cuarto</a>
          </Link>
          <Link href='/colegio/quinto'>
            <a>Quinto</a>
          </Link>
        </Section>
      </Body>
    </>
  );
}
