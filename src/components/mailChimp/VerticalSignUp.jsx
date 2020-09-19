import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../foundation/button/Button';

const Wrapper = styled.div`
  #mc_embed_signup_scroll {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    form {
      width: 100%;
    }
    .email {
      padding: 26px;
      border-radius: 4px;
      text-align: center;
      background-color: #f2f2f2;
      color: #9b9b9b;
      font-size: 24px;
      margin: 40px 0;
      height: 80px;
      width: 100%;
    }
  }
`;

const VerticalSignUp = () => {
  const [email, setEmail] = useState('');

  return (
    <Wrapper>
      <div id="mc_embed_signup">
        <form
          action="https://codewave.us17.list-manage.com/subscribe/post?u=20f6b0540990aef2bc7b95199&amp;id=f8a16fcd5a"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <input
              type="email"
              value={email}
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              placeholder="Please enter your email"
              required
              onChange={e => setEmail(e.target.value)}
            />
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_20f6b0540990aef2bc7b95199_f8a16fcd5a"
                tabIndex="-1"
                value=""
                readOnly
              />
            </div>
            <div className="clear">
              <Button
                type="primary"
                size="lg"
                submit={true}
                id="mc-embedded-subscribe"
                margin="0"
                padding="18px"
                minWidth="200px"
                width="70%"
                fontSize="36px"
              >
                SIGN UP
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default VerticalSignUp;
