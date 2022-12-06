import Button from './Button';

const AuthForm = ({ onSubmit, submitName, authState }) => {
  const { email, setEmail, password, setPassword } = authState;

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
    <form onSubmit={onSubmit}>
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
        <Button type="submit" disabled={!validate()}>
          {submitName}
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
