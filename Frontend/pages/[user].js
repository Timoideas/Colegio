import style from 'styles/css/Index.module.css';
import { Header_Main } from 'heads/Header_Main';
import { Body, Section, Content } from 'components/Resources/Timoideas';
import fetch from 'node-fetch';

export default function Index({ data }) {
  const { _id, name, username } = data.user;
  return (
    <>
      <Header_Main />
      <Body>
        <Section size={1}>
          <Content center flex={0.5}>
            <h1 className={style.Title}>{_id || 'asd'}</h1>
            <h1 className={style.Title}>{name || 'asd'}</h1>
            <h1 className={style.Title}>{username || 'asd'}</h1>
          </Content>
        </Section>
      </Body>
    </>
  );
}
export async function getStaticPaths() {
  const res = await fetch('http://localhost:4000/user');
  const data = await res.json();
  const paths = data.users.map((user) => ({ params: { user: user.username } }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:4000/user/${context.params.user}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
