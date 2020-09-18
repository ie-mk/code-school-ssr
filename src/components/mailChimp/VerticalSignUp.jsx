import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  #mc_embed_signup {
    background: #fff;
    clear: left;
    font: 14px Helvetica, Arial, sans-serif;
    width: 100%;
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
              placeholder="email address"
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
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default VerticalSignUp;
