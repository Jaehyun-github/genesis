import './Login.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section>
      <div className='login_section1'>
      <img src={process.env.PUBLIC_URL + '/img/loginAndCreateAccount.jpg'} alt="LoginImage" />
        <div className='login_section1_in'>
          <div className='login_section1_in_title'>
            <strong>이메일 로그인</strong>
            <form>
              <input type="email" placeholder='이메일 주소'/>
              <input type="password" placeholder='비밀번호'/>
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