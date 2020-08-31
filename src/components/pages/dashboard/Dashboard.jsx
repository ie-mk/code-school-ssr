import React, { useState, useEffect } from 'react';
import { ContainerBase, Grid, Container } from '../../foundation';
import DashboardMenu from './dashboardMenu/DashboardMenu';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { userActions } from '../../../store/actions';
import Styled from './Dashboard.styles';
import Logo from '../../foundation/Logo';
import DashboardTab from './dashboard/DashBoard';
import DashboardHeader from './dashboardHeader/DashboardHeader';
import Inbox from './inbox/Inbox';
import DashboardCourses from './courses/DashboardCourses';
import PracticalTasks from './practicalTasks/PracticalTasks';
import Students from './students/Students';
import AuthorsAndLearningPath from './authors/AuthorsAndLearningPath';
import Staff from './staff/Staff';
import Users from './users/Users';
import AuthorProfile from './authors/authorProfile/AuthorProfile';

const Dashboard = ({ dispatch, user }) => {
  const router = useRouter();

  useEffect(() => {
    if (!user) return;
    if (!user.uid) {
      router.push('/login');
    }
    dispatch(userActions.fetchUserProfile.request(user.uid));
  }, user && user.uid);

  const { query } = useRouter();

  const makeActive = activeTab => {
    const url = `/dashboard?activeTab=${activeTab}`;
    router.push(url, url, { shallow: true });
  };

  const activeTab = query && query.activeTab;

  const dashboard = activeTab === 'dashboard' || !activeTab;
  const inbox = activeTab === 'inbox';
  const courses = activeTab === 'courses';
  const practicalTasks = activeTab === 'practicalTasks';
  const students = activeTab === 'students';
  const authors = activeTab === 'authors';
  const staff = activeTab === 'staff';
  const users = activeTab === 'users';
  const authorProfile = activeTab === 'myAuthorProfile';

  return (
    <Styled.Wrapper>
      <Grid
        columns="0.5fr 2.5fr"
        mediaColConfig={{
          belowTablet: '1fr',
        }}
      >
        <Styled.MenuWrapper>
          <Logo
            imgSrc="/logo/logo_with_name.png"
            width="150px"
            height="50px"
            padding="30px 50px 50px"
          />
          <DashboardMenu active={activeTab} setActiveComponent={makeActive} />
        </Styled.MenuWrapper>

        <div>
          <DashboardHeader user={user} />
          <Styled.Wrapper>
            {dashboard && <DashboardTab />}
            {inbox && <Inbox />}
            {courses && <DashboardCourses />}
            {practicalTasks && <PracticalTasks />}
            {students && <Students />}
            {authors && <AuthorsAndLearningPath />}
            {staff && <Staff />}
            {users && <Users />}
            {authorProfile && <AuthorProfile />}
          </Styled.Wrapper>
        </div>
      </Grid>
    </Styled.Wrapper>
  );
};

const mapStateToProps = state => ({
  user: state.user.loginProviderData,
});

export default connect(mapStateToProps)(Dashboard);
