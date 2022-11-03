import { supabase } from './supabase_api';

// 指定したメンバーのチケット使用履歴を取得する
// fetchUsedHistories
//    fetchMembers()を参考にする
export const fetchUsedHistories = async (member_id) => {
  let {
    data: used_histories,
    status,
    statusText,
    error,
  } = await supabase
    .from('used_history')
    .select('*')
    .eq('member_id', member_id)
    .order('used_date', { ascending: false });

  console.log(`status:${status} statusText:${statusText}`);
  if (error) {
    console.log('error', error);
    return null;
  } else {
    used_histories.forEach((used_history) => {
      used_history.used_date = new Date(used_history.used_date);
    });
    return used_histories;
  }
};

// 使用履歴を追加する
// addUsedHistory
//    addMember()を参考にする

export const addUsedHistory = async ({ member_id, used_date }) => {
  let { status, statusText, error } = await supabase
    .from('used_history')
    .insert({ member_id, used_date });

  //   console.log(`status:${status} statusText:${statusText}`);
  if (error) {
    return null;
  }
  return status;
};
