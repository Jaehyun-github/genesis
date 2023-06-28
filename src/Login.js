import './Login.css';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus(); // 페이지가 처음 렌더 됐을때 id input에 포커스를 줌 (깜빡임)
  }, [])

  return (
    <section>
      <div className='login_section1'>
      <img src={process.env.PUBLIC_URL + '/img/loginAndCreateAccount.jpg'} alt="LoginImage" />
        <div className='login_section1_in'>
          <div className='login_section1_in_title'>
            <strong>이메일 로그인</strong>
            <form>
              <label htmlFor='login_id'></label>
              <input type="email" id='login_id' placeholder='이메일 주소' ref={inputRef} />
              <label htmlFor='login_password'></label>
              <input type="password" id='login_password' placeholder='비밀번호' autoComplete='on' />
              <button type='submit'>
                <span>로그인</span>
              </button>
            </form>
            <div className='login_section1_menu'>
              <p>아이디 찾기</p>
              <Link to='/createAccount'>
                <p>회원가입 &gt;</p>
              </Link>
            </div>
            <p>비밀번호 초기화</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;