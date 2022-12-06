import React, { useState } from 'react';
import { supabase } from '../services/supabase_api';
import AuthForm from './AuthForm';
import Navigation from './Navigation';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); //デフォルトの動作を抑制する
    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.log(error.message);
    } //ログイン処理
  };

  return (
    <>
      <Navigation title="ログイン" />

      <AuthForm
        onSubmit={handleSubmit}
        submitName="ログイン"
        authState={{ email, setEmail, password, setPassword }}
      />
    </>
  );
};

export default Auth;
