import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateTickets } from '../services/members_table';
import { addReturnedHistory } from '../services/returned_history_table';
import Navigation from './Navigation';

export const ReturnTickets = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const member = location.state;

  const returnTickets = () => {
    updateTickets({ id: member.id, tickets: 0 });

    const today = new Date(Date.now());
    addReturnedHistory({
      member_id: member.id,
      return_date: today,
      tickets: member.tickets,
      refund: (member.tickets - 2) * 100,
    }).then(() => {
      navigate(`/member/${member.id}`);
    });
  };

  const cancel = () => {
    navigate(`/member/${member.member_id}`);
  };

  return (
    <>
      <Navigation title="チケット返却" />
      <div>名前: {member.name}</div>
      <div>回数券残り枚数: {member.tickets}枚</div>
      <div>
        回数券{member.tickets}回分 {(member.tickets - 2) * 100} 円を返却します
      </div>
      <button onClick={returnTickets}>返却</button>
      <button onClick={cancel}>キャンセル</button>
      <div>
        <Link to="/">メンバー一覧へ</Link>
      </div>
    </>
  );
};
