import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { addMember } from '../services/members_table';
import Navigation from './Navigation';

const MemberRegistration = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('男性');

  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const handleGenderChange = (event) => {
    console.log(event.target.value);
    setGender(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); //デフォルトの動作を抑制する
    // console.log(`name: ${name} gender:${gender}`);
    const member = {
      name: name.trim(),
      tickets: 0,
    };
    // member_db.create_member(member);
    addMember({ name: member.name, tickets: member.tickets }).then(() => {
      navigate('/');
    });
  };

  //名前(name)が有効かをチェックし、有効な場合はtrueを返す
  const validateName = () => {
    return name.trim().length > 0;
  };

  const genderRadioOption = {
    man: '男性',
    woman: '女性',
  };

  return (
    <>
      <Navigation title="メンバー登録" />

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            名前:
            <input type="text" id="name" value={name} onChange={handleNameChange} />
          </label>
        </div>

        <div>
          性別:
          {Object.entries(genderRadioOption).map(([key, value]) => (
            <label key={key}>
              <input
                type="radio"
                id={key}
                name="gender"
                value={value}
                onChange={handleGenderChange}
                checked={gender === value}
              />
              {value}
            </label>
          ))}
        </div>

        <div>
          <button type="submit" disabled={!validateName()}>
            登録
          </button>
        </div>
      </form>

      <Link to="/">メンバー一覧へ</Link>
    </>
  );
};

export default MemberRegistration;
