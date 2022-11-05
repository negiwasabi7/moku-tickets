import { supabase } from './supabase_api';

// 指定したメンバーのチケット返却履歴を取得する

export const fetchReturnedHistories = async (member_id) => {
  let {
    data: returned_histories,
    status,
    statusText,
    error,
  } = await supabase
    .from('returned_history')
    .select('*')
    .eq('member_id', member_id)
    .order('return_date', { ascending: false });

  console.log(`status:${status} statusText:${statusText}`);
  if (error) {
    console.log('error', error);
    return null;
  } else {
    returned_histories.forEach((returned_history) => {
      returned_history.return_date = new Date(returned_history.return_date);
    });
    return returned_histories;
  }
};

// 返却履歴を追加する

export const addReturnedHistory = async ({ member_id, return_date, tickets, refund }) => {
  let { status, statusText, error } = await supabase
    .from('returned_history')
    .insert({ member_id, return_date, tickets, refund });

  if (error) {
    return null;
  }
  return status;
};
