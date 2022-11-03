import { supabase } from './supabase_api';

export const fetchMembers = async () => {
  let {
    data: members,
    status,
    statusText,
    error,
  } = await supabase.from('members').select('*').order('id', { ascending: false });

  console.log(`status:${status} statusText:${statusText}`);
  if (error) {
    console.log('error', error);
    return null;
  } else {
    return members;
  }
};

export const fetchMember = async (id) => {
  let {
    data: member,
    status,
    statusText,
    error,
  } = await supabase.from('members').select('*').eq('id', id).single();

  console.log(`status:${status} statusText:${statusText}`);
  if (error) {
    console.log('error', error);
    return null;
  } else {
    return member;
  }
};

export const addMember = async ({ name, tickets }) => {
  let { status, statusText, error } = await supabase.from('members').insert({ name, tickets });

  //   console.log(`status:${status} statusText:${statusText}`);
  if (error) {
    return null;
  }
  return status;
};

export const updateTickets = async ({ id, tickets }) => {
  let { status, statusText, error } = await supabase
    .from('members')
    .update({ tickets })
    .eq('id', id);

  //   console.log(`status:${status} statusText:${statusText}`);
  if (error) {
    return null;
  }
  return status;
};
