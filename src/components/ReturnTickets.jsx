import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import member_db from '../services/member_db';
import returned_history_db from '../services/returned_history_db';

export const ReturnTickets = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const member = location.state;

  const returnTickets = () => {
    const newMember = { ...member, tickets: 0 };
    member_db.update_member(newMember);
    //書き換え　チケットを0にする async updateTickets({ id, tickets })

    const today = new Date(Date.now());
    returned_history_db.create_returned_history(member.member_id, today);
    //書き換え　返却履歴を記録する async addReturnedHistory({ member_id, return_date, tickets, refund })

    navigate(`/member/${member.member_id}`);
  };

  const cancel = () => {
    navigate(`/member/${member.member_id}`);
  };

  return (
    <>
      <div>
        <h1>チケット返却</h1>
      </div>
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
