import React from 'react';
import { useState } from 'react';
import { supabase } from '../services/supabase_api';
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
  const handleEmailChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //入力値（メールアドレス、パスワード）の検証
  const validate = () => {
    return validateEmail(email) && validatePassword(password);
  };

  //メールアドレス:trim()した後、空ではない事、正しいフォーマットであること
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    return regex.test(email.trim());
  }

  //パスワード：空ではないこと
  function validatePassword(password) {
    return password.length > 0;
  }

  return (
    <>
      <Navigation title="ログイン" />
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            メールアドレス:
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </label>
        </div>

        <div>
          <label>
            パスワード:
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </label>
        </div>

        <div>
          <button type="submit" disabled={!validate()}>
            ログイン
          </button>
        </div>
      </form>
    </>
  );
};

export default Auth;
