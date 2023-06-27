import './CreateAccountComplete.css';
import React from 'react';
import { Link } from 'react-router-dom';

const CreateAccountComplete = () => {
  return (
    <section>
      <div className='create_account_complete_section1'>
        <div className='create_account_complete_section1_in'>
          <div className='create_account_complete_section1_in_title'>
            <img src={process.env.PUBLIC_URL + '/img/completeLogo.png'} alt="CreateAccountComplete" />
            <p>회원가입이 완료 되었습니다.</p>
            <Link to='/'>
              <button type='submit' className='home'>
                <span>홈으로</span>
              </button>
            </Link>
            <Link to='/login'>
              <button type='submit' className='login'>  
                <span>로그인 하기</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccountComplete;