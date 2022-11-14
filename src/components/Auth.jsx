import React from 'react';
import { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); //デフォルトの動作を抑制する
    //ログイン処理
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
    return email.trim().length > 0;
  }

  //パスワード：空ではないこと
  function validatePassword(password) {
    return password.length > 0;
  }

  return (
    <>
      <div>
        <h1>ログイン</h1>
      </div>
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
