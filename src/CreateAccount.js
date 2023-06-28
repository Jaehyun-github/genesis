import './CreateAccount.css';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const CreateAccount = () => {

  // const inputRef = useRef();

  // useEffect(() => {
  //     inputRef.current.focus(); // 페이지가 처음 렌더 됐을때 id input에 포커스를 줌 (깜빡임)
  // }, []) // 그냥 autoFocus로 대체함
  
  const { register, watch, formState : {errors} } = useForm();
    console.log(watch('email'))
    console.log(errors)
  return (
    <section>
      <div className='create_account_section1'>
      <img src={process.env.PUBLIC_URL + '/img/loginAndCreateAccount.jpg'} alt="CreateAccountImage" />
        <div className='create_account_section1_in'>
          <div className='create_account_section1_in_title'>
            <strong>회원가입</strong>
            <form>
              <label htmlFor='create_account_id'>이메일 주소</label>
              <input type="email" id='create_account_id' name='email' placeholder='이메일 주소' autoFocus 
                {...register('email', { required : true, pattern : /^\S+@\S+$/i })} />
                {/* {errors.email && <p>{errors.email.message}</p>} */}
              <label htmlFor='create_account_password'>비밀번호</label>
              <input type="password" id='create_account_password' placeholder='비밀번호' autoComplete='on' />
              <label htmlFor='create_account_password_confirm'>비밀번호 확인</label>
              <input type="password" id='create_account_password_confirm' placeholder='비밀번호 확인' autoComplete='on' />
              <Link to='/createAccountComplete'>
                <button type='button'> {/* submit 보류 */}
                  <span>가입하기</span>
                </button>
              </Link>
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