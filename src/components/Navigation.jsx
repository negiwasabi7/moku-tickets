import React, { useContext } from 'react';
import styled from 'styled-components';
import { supabase } from '../services/supabase_api';
import { SessionContext } from '../App.js';

const SContainer = styled.div`
    background-color: pink;
    display: flex;
    justify-content: space-between;
    `;

const Navigation = (props) => {
  const handleLogout = async (event) => {
    event.preventDefault(); //デフォルトの動作を抑制する
    let { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error.message);
    }
  };

  const session = useContext(SessionContext);

  return (
    <SContainer>
      <div>{props.title}</div>

      <div>{session && <button onClick={handleLogout}>LOGOUT</button>}</div>
    </SContainer>
  );
};

export default Navigation;
