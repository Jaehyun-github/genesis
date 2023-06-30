/* eslint-disable no-useless-escape */
import './Login.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {

  const { register, handleSubmit, formState : {errors} } = useForm({ mode : "onChange" });
                                                                  // {mode : "onChange"}는 실시간으로 유효성 검사를 해줌
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('data', data);
    navigate('/'); // 유효성 검사가 성공적으로 끝나면 onSubmit을 거쳐 <Container /> 컴포넌트로 이동
  }

  return (
    <section>
      <div className='login_section1'>
      <img src={process.env.PUBLIC_URL + '/img/loginAndCreateAccount.jpg'} alt="LoginImage" />
        <div className='login_section1_in'>
          <div className='login_section1_in_title'>
            <strong>이메일 로그인</strong>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor='email'></label>
              <input type="email" id='email' name='email' placeholder='이메일 주소' autoFocus 
                {...register('email', { required : true, pattern : /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/ })} />
                {errors.email && <p className='error_message'>이메일 형식이 올바르지 않습니다.</p>}
              <label htmlFor='password'></label>
              <input type="password" id='password' name='password' placeholder='비밀번호' autoComplete='on' 
                {...register('password', { required : true, pattern : /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/, minLength : 8, maxLength : 16 })} />
                {errors.password && <p className='error_message'>비밀번호를 정확히 입력해 주세요.</p>}
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