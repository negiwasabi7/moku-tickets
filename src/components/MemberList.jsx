import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { fetchMembers } from '../services/members_table';

const SName = styled.div`
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

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     const execute = async () => {
  //       const members = await fetchMembers();
  //       setMembers(members);
  //     };
  //     execute();
  //   }, []);

  useEffect(() => {
    fetchMembers().then((members) => {
      setMembers(members);
    });
  }, []);

  const listClickHandler = (e) => {
    let target_id = e.target.id;
    navigate(`/member/${target_id}`);
  };

  return (
    <>
      <div>
        <h1>メンバー一覧</h1>
      </div>
      <hr />
      <Link to="/member_registration">メンバー登録</Link>
      <hr />

      {members.map((member) => (
        <SName id={member.id} key={member.id} onClick={listClickHandler}>
          {`${member.name}`}
        </SName>
      ))}
    </>
  );
};

export default MemberList;
