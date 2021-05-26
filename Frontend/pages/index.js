import style from 'styles/css/Index.module.css';
import { Section, Body, Content } from 'components/Resources/Timoideas';
import fetch from 'node-fetch';
import { useRef, useState } from 'react';
export default function Index() {
  const [resId, setResId] = useState('');

  const refName = useRef();
  const refUsername = useRef();
  const Click = async () => {
    const user = {
      name: refName.current.value,
      username: refUsername.current.value,
    };
    const res = await fetch('http://localhost:4000/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    setResId(data.user._id);
  };
  return (
    <>
      <Body>
        <Section>
          <Content center>
            <h1 className={style.Title}>Crear Usuarios</h1>
            <div>
              <input type='text' ref={refName} placeholder='name' />
              <input type='text' ref={refUsername} placeholder='username' />
              <button onClick={Click}>Create</button>
            </div>
            <h3>{resId}</h3>
          </Content>
        </Section>
      </Body>
    </>
  );
}
