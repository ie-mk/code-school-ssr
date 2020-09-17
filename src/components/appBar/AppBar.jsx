import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import Styled from './AppBar.styles';
import api from '../../api/api.min';
import Button from '../foundation/button/Button';
import styled from 'styled-components';
import { userActions } from '../../store/actions';
import { colors, spacing } from '../../constants/styles';
import { useTranslation } from 'react-i18next';
import MenuLink from '../foundation/MenuLink';
import ContainerBase from '../foundation/ContainerBase';
import Logo from '../foundation/Logo';
import { isStaff } from '../../store/selectors';
import { useRouter } from 'next/router';
import media from '../foundation/media';

const LogoutButton = styled(Button)`
  margin-left: 10px;
  ${media.belowTabletLarge`
    margin: 0
  `}
`;

const AppBar = ({ user, dispatch, userLanguage, isStaff }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = () => {
    api.user.logout && api.user.logout();
    dispatch(userActions.resetUser());
  };

  const containerRef = useRef(null);

  const handleMenuClick = () => {
    // when the menu is clicked we want to collapse the menu
    // but only for the mobile view
    if (containerRef.current.offsetWidth < 1008) {
      setShowMobileMenu(!showMobileMenu);
    }
  };

  const { t } = useTranslation();

  const router = useRouter();

  return (
    <ContainerBase
      display="flex"
      justifyContent="center"
      position="fixed"
      top="0"
      width="100%"
      ref={containerRef}
      backgroundColor={colors.blue}
      zIndex="99"
    >
      <Styled.Wrapper id="appBar">
        <Logo
          imgSrc="/logo/logo_with_name.png"
          width="200px"
          height="58px"
          mediaConfig={{
            belowTabletLarge: {
              margin: '0 20px 0 10px',
            },
          }}
          zIndex="9"
          imageMediaConfig={{
            belowTabletLarge: {
              width: '100px',
              height: '29px',
            },
          }}
        />
        <Styled.LinkWrapper
          onClick={handleMenuClick}
          showMobileMenu={showMobileMenu}
        >
          <MenuLink noMargin={true} href="/">
            Home
          </MenuLink>
          <MenuLink
            noMargin={true}
            dataTest="go-to-courses-page"
            href="/courses"
          >
            Courses
          </MenuLink>
          {/*<MenuLink noMargin={true} href="/">*/}
          {/*  Community*/}
          {/*</MenuLink>*/}
          <MenuLink noMargin={true} href="/stories">
            Stories
          </MenuLink>
          <Styled.LoginWrapper dataTest="go-to-loginwrapper">
            {user && user.uid && isStaff && (
              <MenuLink dataTest="go-to-dashboard-page" href="/dashboard">
                <i className="fa fa-briefcase" />
              </MenuLink>
            )}
            {user && user.uid && (
              <MenuLink href="/profile">
                <i className="fa fa-user" />
              </MenuLink>
            )}
            {user && user.uid ? (
              <LogoutButton
                data-test="logout-button"
                type="secondary"
                onClick={handleLogout}
              >
                {t('Logout')}
              </LogoutButton>
            ) : (
              <>
                <MenuLink
                  dataTest="go-to-login-page"
                  href="/login"
                  text={t('LOGIN')}
                />
                <Button
                  onClick={() =>
                    router.push('/joinus', '/joinus', { shallow: true })
                  }
                  type="primary"
                  padding="17px 64px"
                  fontSize="lg"
                  margin="0"
                  mobileSameSize={true}
                >
                  JOIN
                </Button>
              </>
            )}
            {/*<select*/}
            {/*  value={userLanguage || 'en'}*/}
            {/*  onChange={e => {*/}
            {/*    dispatch(userActions.setLanguage(e.target.value));*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <option value="en">EN</option>*/}
            {/*  <option value="lt">LT</option>*/}
            {/*</select>*/}
          </Styled.LoginWrapper>
        </Styled.LinkWrapper>
        <Styled.MobileMenuWrapper
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? (
            <i className="fa fa-window-close-o" />
          ) : (
            <i className="fa fa-bars" />
          )}
        </Styled.MobileMenuWrapper>
      </Styled.Wrapper>
    </ContainerBase>
  );
};

const mapStateToProps = state => ({
  user: state.user && state.user.loginProviderData,
  userLanguage: state.user && state.user.userLanguage,
  isStaff: isStaff(state),
});

export default connect(mapStateToProps)(AppBar);
