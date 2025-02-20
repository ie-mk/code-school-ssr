import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../foundation/button/Button';
import { aboveMobileLarge, aboveTabletLarge } from '../foundation/media';

const Wrapper = styled.div`
  width: 100%;
  #mc_embed_signup_scroll {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;

    ${aboveTabletLarge`
      flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')}
    `}

    form {
      width: 100%;
    }
    .email {
      padding: 16px;
      border-radius: 4px;
      text-align: center;
      background-color: #f2f2f2;
      color: #9b9b9b;
      font-size: 16px;
      height: 50px;
      border: 1px solid #707070;
      width: 100%;
      ::placeholder,
      ::-webkit-input-placeholder {
        color: #9b9b9b;
      }
      ${aboveTabletLarge`
         margin: 40px 40px;
         height: 80px;
         font-size: 24px;
         padding: 26px;
      `}
    }
  }
`;

const VerticalSignUp = ({ horizontal }) => {
  const [email, setEmail] = useState('');

  return (
    <Wrapper horizontal={horizontal}>
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
                margin="30px 0 0"
                padding="10px"
                minWidth="200px"
                width="70%"
                fontSize="24px"
                mediaConfig={{
                  aboveTabletLarge: {
                    fontSize: '36px',
                    padding: '10px',
                    height: '80px',
                    marginTop: 0,
                  },
                }}
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
