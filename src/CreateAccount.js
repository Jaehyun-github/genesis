/* eslint-disable no-useless-escape */
import './CreateAccount.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const CreateAccount = () => {
  
  const { register, handleSubmit, watch, formState : {errors} } = useForm({ mode : "onChange" }); 
                                                                  // {mode : "onChange"}는 실시간으로 유효성 검사를 해줌
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('data', data);
    navigate('/CreateAccountComplete'); // 유효성 검사가 성공적으로 끝나면 onSubmit 쪽을 거쳐 <CreateAccountComplete /> 컴포넌트로 이동
  }

  // useEffect(() => {
  //   const hasErrors = Object.keys(errors).length > 0 ||
  //   watch('email') === "" || 
  //   watch('password') === "" || 
  //   watch('password_confirm') === "";

  //   // setHasErrors(hasErrors);
  
  // }, [errors, watch])
  
  return (
    <section>
      <div className='create_account_section1'>
      <img src={process.env.PUBLIC_URL + '/img/loginAndCreateAccount.jpg'} alt="CreateAccountImage" />
        <div className='create_account_section1_in'>
          <div className='create_account_section1_in_title'>
            <strong>회원가입</strong>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor='email'>이메일 주소</label>
              <input type="email" id='email' name='email' placeholder='이메일 주소' autoFocus
                {...register('email', { required : true, pattern : /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/ })} />
                {errors.email && <p className='error_message'>이메일 형식이 올바르지 않습니다.</p>}
              <label htmlFor='password'>비밀번호</label>
              <input type="password" id='password' name='password' placeholder='비밀번호' autoComplete='on'
                {...register('password', { required : true, pattern : /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/, minLength : 8, maxLength : 16 })} />
                {errors.password && <p className='error_message'>비밀번호는 영문, 숫자, 특수기호를 조합하여 8~16자로 사용하세요.</p>} 
              <label htmlFor='password_confirm'>비밀번호 확인</label>
              <input type="password" id='password_confirm' name='password_confirm' placeholder='비밀번호 확인' autoComplete='on'
                {...register('password_confirm', { required : true, validate : (value) => value === watch('password')})} />
                {errors.password_confirm && <p className='error_message'>비밀번호가 일치하지 않습니다.</p>}
              <button type='submit'>
                <span>가입하기</span>
              </button>  
            </form>
            <div className='create_account_section1_menu'>
              <p>아이디 찾기</p>
              <Link to='/login'>
                <p>로그인 &gt;</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;