import './CreateAccount.css';
import React from 'react';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  return (
    <section>
      <div className='create_account_section1'>
      <img src={process.env.PUBLIC_URL + '/img/loginAndCreateAccount.jpg'} alt="CreateAccountImage" />
        <div className='create_account_section1_in'>
          <div className='create_account_section1_in_title'>
            <strong>회원가입</strong>
            <form>
              <label htmlFor='create_account_id'>이메일 주소</label>
              <input type="email" id='create_account_id' placeholder='이메일 주소' />
              <label htmlFor='create_account_password'>비밀번호</label>
              <input type="password" id='create_account_password' placeholder='비밀번호' autoComplete='on' />
              <label htmlFor='create_account_password_confirm'>비밀번호 확인</label>
              <input type="password" id='create_account_password_confirm' placeholder='비밀번호 확인' autoComplete='on' />
              <button type='button'> {/* submit 보류 */}
                <Link to='/createAccountComplete'>
                  <span>가입하기</span>
                </Link>
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