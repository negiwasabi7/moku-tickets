import React from 'react';
import styled from 'styled-components';

const SListItem = styled.li`
    padding: 5px;
    margin: 0 25%;
    list-style-type: none;
    background-color: aqua;
    border-bottom: 1px gray dotted;
    cursor: pointer;
    
    :last-child {
        border-bottom: none;
    }
    `;

const MemberItem = ({ item, onClick }) => {
  return (
    <SListItem id={item.id} onClick={onClick}>
      {item.name}
    </SListItem>
  );
};

export default MemberItem;
