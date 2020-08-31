import React from 'react';
import Styled from './AdminMyPage.styles';
import AdminAds from '../components/adminAds/AdminAds';
import Grid from '../../app/components/foundation/Grid';
import Users from '../components/users/Users';
import { useRouter } from 'next/router';

const AdminPage = () => {
  const router = useRouter();
  const { query, pathname } = router;

  const makeActive = activeTab => {
    const url = `${pathname}?activeTab=${activeTab}`;
    router.push(url, url, { shallow: true });
  };

  const activeTab = query && query.activeTab;

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <h1>Admin</h1>
      </Styled.Header>
      <Grid columns="1fr 4fr">
        <Styled.Menu>
          <Styled.MenuItem
            active={activeTab === 'ads' || !activeTab}
            onClick={() => makeActive('ads')}
          >
            Ads
          </Styled.MenuItem>
          <Styled.MenuItem
            active={activeTab === 'users'}
            onClick={() => makeActive('users')}
          >
            Users
          </Styled.MenuItem>
          {/*<Styled.MenuItem*/}
          {/*  active={activeTab === 'permissions'}*/}
          {/*  onClick={() => makeActive('permissions')}*/}
          {/*>*/}
          {/*  Permissions*/}
          {/*</Styled.MenuItem>*/}
        </Styled.Menu>
        <div>
          <Styled.Content>
            {(activeTab === 'ads' || !activeTab) && <AdminAds />}
            {activeTab === 'users' && <Users />}
          </Styled.Content>
        </div>
      </Grid>
    </Styled.Wrapper>
  );
};

export default AdminPage;
