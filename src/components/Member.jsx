import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { dateString, sameDate } from '../utils/date';
import { fetchMember, updateTickets } from '../services/members_table';
import { addUsedHistory, fetchUsedHistories } from '../services/used_history_table';
import { fetchReturnedHistories } from '../services/returned_history_table';
import Navigation from './Navigation';
import Button from './Button';

const Member = () => {
  const navigate = useNavigate();
  const { member_id } = useParams();

  const [member, setMember] = useState({});
  const [tickets, setTickets] = useState(0);
  const [usedHistories, setHistories] = useState([]);
  const [returnHistories, setReturnedHistories] = useState([]);

  const [enableBuying, setEnableBuying] = useState(true);
  const [enableConfirm, setEnableConfirm] = useState(false);
  const [enableUsing, setEnableUsing] = useState(true);

  useEffect(() => {
    fetchMember(member_id).then((member) => {
      setMember(member);
      setTickets(member.tickets);

      fetchUsedHistories(member.id).then((used_histories) => {
        setHistories(used_histories);

        const today = new Date(Date.now());
        if (used_histories.length > 0 && sameDate(used_histories[0].used_date, today)) {
          setEnableUsing(false);
        }
      });

      fetchReturnedHistories(member.id).then((return_histories) => {
        setReturnedHistories(return_histories);
      });
    });

    // const returnedHistories = returned_history_db.get_returned_histories(member.member_id);
    // setReturnedHistories(returnedHistories);
  }, []);

  const buy = () => {
    setTickets((prev) => prev + 12);
    setEnableBuying(false);
    setEnableConfirm(true);
  };

  const confirmBuying = () => {
    const newMember = { ...member, tickets };
    updateTickets({ id: member_id, tickets });
    setMember(newMember);
    setEnableConfirm(false);
  };

  const useTicket = () => {
    setTickets((prev) => prev - 1);
    setEnableUsing(false);
    const newMember = { ...member, tickets: tickets - 1 };
    updateTickets({ id: member_id, tickets: tickets - 1 });
    setMember(newMember);

    const today = new Date(Date.now());
    // used_history_db.create_used_history(member_id, today);
    addUsedHistory({ member_id: member.id, used_date: today }).then(() => {
      fetchUsedHistories(member.id).then((used_histories) => {
        setHistories(used_histories);
      });
    });
  };

  const returnTickets = () => {
    navigate(`/return_tickets`, { state: { ...member } });
  };

  return (
    <>
      <Navigation title="??????????????????" />
      <div>?????????{member.name}</div>
      <div>????????????????????????{tickets}</div>

      {member.tickets === 0 ? (
        <Button onClick={buy} disabled={!enableBuying}>
          ??????????????????
        </Button>
      ) : (
        <Button onClick={useTicket} disabled={!enableUsing}>
          ????????????
        </Button>
      )}

      {member.tickets > 2 && (
        <Button member={member} onClick={returnTickets}>
          ??????
        </Button>
      )}

      {<div>{enableConfirm && <Button onClick={confirmBuying}>??????</Button>}</div>}

      <div>
        <h2>????????????</h2>
      </div>

      <div>
        {usedHistories.map((history) => (
          <div key={history.id}>{`${dateString(history.used_date)}`}</div>
        ))}
      </div>
      <div>
        <h2>????????????</h2>
        <div>
          {returnHistories.map((history) => (
            <div key={history.id}>{`${dateString(history.return_date)}`}</div>
          ))}
        </div>
      </div>
      <div>
        <Link to="/">?????????????????????</Link>
      </div>
    </>
  );
};

export default Member;
