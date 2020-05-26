import React, { useRef } from 'react';
import { connect } from 'react-redux';
import Styled from './AppBar.styles';
import api from '../../api/api.min';
import Button from '../foundation/button/Button';
import styled from 'styled-components';
import { userActions } from '../../store/actions';
import { colors, spacing } from '../../constants/styles';
import { lightenDarkenColor } from '../../utils/colors';
import { useTranslation } from 'react-i18next';
import MenuLink from '../foundation/MenuLink';
import ContainerBase from '../foundation/ContainerBase';
import Logo from '../foundation/Logo';

const JoinButton = () => (
  <Button type="primary" size="lg">
    JOIN
  </Button>
);

const LogoutButton = styled(Button)`
  margin-left: 10px;
`;

const AppBar = ({ user, dispatch, userLanguage }) => {
  const handleLogout = () => {
    api.user.logout && api.user.logout();
    dispatch(userActions.resetUser());
  };

  const { t } = useTranslation();

  return (
    <ContainerBase
      display="flex"
      justifyContent="center"
      paddingTop="lg"
      position="absolute"
      top="0"
      width="100%"
    >
      <ContainerBase
        id="appBar"
        padding="md"
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        width="100%"
        boxSizing="border-box"
        height="65px"
        zIndex="99"
        paddingRight="xxxl"
        maxWidth="1400px"
      >
        <Logo
          imgSrc="/logo/logo_with_name.png"
          width="200px"
          marginRight={spacing.xxl}
        />
        <Styled.LinkWrapper>
          <MenuLink href="/">Home</MenuLink>
          <MenuLink href="/courses">Courses</MenuLink>
          <MenuLink href="/">Community</MenuLink>
          <MenuLink href="/stories">Stories</MenuLink>
        </Styled.LinkWrapper>

        <Styled.LoginWrapper>
          {user && user.uid && (
            <MenuLink href="/dashboard">
              <i className="fa fa-user" />
            </MenuLink>
          )}
          {user && user.uid ? (
            <LogoutButton type="secondary" onClick={handleLogout}>
              {t('Logout')}
            </LogoutButton>
          ) : (
            <MenuLink
              dataTest="go-to-login-page"
              href="/login"
              text={t('LOGIN')}
            />
          )}
          <Button type="primary" padding="17px 64px" fontSize="lg">
            JOIN
          </Button>
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
      </ContainerBase>
    </ContainerBase>
  );
};

const mapStateToProps = state => ({
  user: state.user && state.user.loginProviderData,
  userLanguage: state.user && state.user.userLanguage,
});

export default connect(mapStateToProps)(AppBar);
