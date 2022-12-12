import React, { useContext } from 'react';
import styled from 'styled-components';
import { SessionContext } from '../App.js';
import icon from '../images/icon.png';

const SContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #231942;
  padding: 2px 10px;
  color: #e0b1cb;
  font-weight: bold;
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
