import React from 'react';
import styled from 'styled-components';

const SButton = styled.button`
  background-color: pink;
`;

const Button = ({ onClick, disabled, children }) => {
  return (
    <SButton onClick={onClick} disabled={disabled}>
      {children}
    </SButton>
  );
};

export default Button;
