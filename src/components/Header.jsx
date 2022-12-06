import React, { useContext } from 'react';
import styled from 'styled-components';
import { SessionContext } from '../App.js';
import icon from '../images/icon.png';

const SContainer = styled.div`
    background-color: pink;
    display: flex;
    justify-content: space-between;
    `;

const Header = () => {
  const session = useContext(SessionContext);

  return (
    <SContainer>
      <div>
        <img src={icon} />
      </div>

      <div>{session?.user?.email}</div>
    </SContainer>
  );
};

export default Header;
