import React from 'react';
import { useState } from 'react';
import { supabase } from '../services/supabase_api';
import AuthForm from './AuthForm';
import Navigation from './Navigation';

const UserRegistration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); //デフォルトの動作を抑制する
    let { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navigation title="アカウント作成" />

      <AuthForm
        onSubmit={handleSubmit}
        submitName="アカウント作成"
        authState={{ email, setEmail, password, setPassword }}
      />
    </>
  );
};

export default UserRegistration;
