import React from 'react';
import styled from 'styled-components';

const SButton = styled.button`
  background-color: #e0b1cb;
  border-color: #e0b1cb;
  padding: 5px;
`;

const Button = ({ onClick, disabled, children }) => {
  return (
    <SButton onClick={onClick} disabled={disabled}>
      {children}
    </SButton>
  );
};

export default Button;
