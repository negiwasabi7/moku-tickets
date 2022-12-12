import React from 'react';
import styled from 'styled-components';

const SListItem = styled.li`
    list-style-type: none;
    padding: 10px 10px;
    margin: 0px 5%;
    background-color: aqua;
    cursor: pointer;
    border-bottom: 1px gray dotted;
    font-weight: bold;

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
