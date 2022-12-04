import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMembers } from '../services/members_table';
import Navigation from './Navigation';
import MemberItem from './MemberItem';

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
      <Navigation title="メンバー一覧" />
      <hr />
      <Link to="/member_registration">メンバー登録</Link>
      <hr />
      <ul>
        {members.map((member) => (
          <MemberItem key={member.id} item={member} onClick={listClickHandler} />
        ))}
      </ul>
    </>
  );
};

export default MemberList;
