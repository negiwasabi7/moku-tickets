import React, { useContext } from 'react';
import styled from 'styled-components';
import { supabase } from '../services/supabase_api';
import { SessionContext } from '../App.js';
import Button from './Button';

const SContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #372c5a;
    color: #e0b1cb;
    font-weight: bold;
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

      <div>{session && <Button onClick={handleLogout}>LOGOUT</Button>}</div>
    </SContainer>
  );
};

export default Navigation;
