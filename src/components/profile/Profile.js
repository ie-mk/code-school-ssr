import React, { useEffect, useState } from 'react';
import Styled from './Profile.styles';
import ContainerBase from '../foundation/ContainerBase';
import { connect } from 'react-redux';
import Button from '../foundation/button/Button';
import HeroTitle from '../foundation/typography/HeroTitle';
import CardTitle from '../foundation/typography/CardTitle';
import BodyText from '../foundation/typography/BodyText';
import FlexContainer from '../foundation/FlexContainer';
import Billing from './billing/Billing';
import Preferences from './preferences/Preferences';
import Learning from './learning/Learning';
import Router from 'next/router';
import { userActions } from '../../store/actions';

const Profile = ({ dispatch, profile }) => {
  const [activeTab, setActiveTab] = useState('learning');

  const uid = profile && profile.uid;
  useEffect(() => {
    dispatch(userActions.fetchUserProfile.request(uid));
  }, [uid]);

  const isActiveLearning = activeTab === 'learning';
  const isActiveInbox = activeTab === 'inbox';
  const isActiveBilling = activeTab === 'billing';
  const isActivePreferences = activeTab === 'preferences';

  const toEditPage = () =>
    Router.push('/editProfile', '/editProfile', {
      shallow: true,
    });

  return (
    <ContainerBase>
      <Styled.ProfileWrapper>
        <Styled.ImageWrapper>
          <Styled.Image src={profile.profileImage || profile.photoURL} />
          <Button
            className="mobileView"
            type="primary"
            width="100px"
            borderRadius="sm"
            height="45px"
            size="sm"
            margin="34px 0 0"
            mobileSameSize={true}
            onClick={toEditPage}
          >
            Edit
          </Button>
        </Styled.ImageWrapper>
        <Styled.ProfileDetails>
          <Styled.DetailsWrapper>
            <HeroTitle margin="0 0 16px 0" text={profile.fullName} />
            <CardTitle
              margin="0 0 16px 0"
              fontWeight="400"
              text={profile.profileTitle}
            />
            <FlexContainer margin="0 0 8px 0" alignItems="center">
              <i className="fa fa-map-marker" aria-hidden="true" />
              <BodyText>{profile.city}</BodyText>
            </FlexContainer>

            <FlexContainer margin="0 0 16px 0" alignItems="center">
              <i className="fa fa-globe" aria-hidden="true" />{' '}
              <BodyText>{profile.website}</BodyText>
            </FlexContainer>
            <Styled.ShowMobileOnly>
              <ContainerBase maxWidth="140px" margin="0 auto 0">
                {profile.facebookProfile && (
                  <Styled.SocialImage src="img/fb_image.png" />
                )}
                {profile.instagramProfile && (
                  <Styled.SocialImage src="img/instagram_image.png" />
                )}
                {profile.twitterProfile && (
                  <Styled.SocialImage src="img/twitter_image.png" />
                )}
                {profile.linkdinProfile && (
                  <Styled.SocialImage src="img/linkdin_image.png" />
                )}
              </ContainerBase>
            </Styled.ShowMobileOnly>
          </Styled.DetailsWrapper>

          <Styled.ShowDesktopOnly>
            <Button
              type="primary"
              width="100px"
              borderRadius="sm"
              height="45px"
              size="sm"
              margin="0"
              onClick={toEditPage}
            >
              Edit
            </Button>
            <div>
              {profile.facebookProfile && (
                <Styled.SocialImage src="img/fb_image.png" />
              )}
              {profile.instagramProfile && (
                <Styled.SocialImage src="img/instagram_image.png" />
              )}
              {profile.twitterProfile && (
                <Styled.SocialImage src="img/twitter_image.png" />
              )}
              {profile.linkdinProfile && (
                <Styled.SocialImage src="img/linkdin_image.png" />
              )}
            </div>
          </Styled.ShowDesktopOnly>
        </Styled.ProfileDetails>
      </Styled.ProfileWrapper>

      <Styled.ProfileInfoPageWrapper>
        <Styled.Tab
          activeTab={activeTab === 'learning'}
          onClick={() => setActiveTab('learning')}
        >
          Learning
        </Styled.Tab>
        <Styled.Tab
          activeTab={activeTab === 'inbox'}
          onClick={() => setActiveTab('inbox')}
        >
          Inbox
        </Styled.Tab>
        <Styled.Tab
          activeTab={activeTab === 'billing'}
          onClick={() => setActiveTab('billing')}
        >
          Billing
        </Styled.Tab>
        <Styled.Tab
          activeTab={activeTab === 'preferences'}
          onClick={() => setActiveTab('preferences')}
        >
          Preferences
        </Styled.Tab>
      </Styled.ProfileInfoPageWrapper>
      {isActiveBilling && <Billing />}
      {isActivePreferences && <Preferences profile={profile} />}
      {isActiveLearning && <Learning />}
    </ContainerBase>
  );
};

const mapStateToProps = state => ({
  profile: state.user.profile,
});

export default connect(mapStateToProps)(Profile);
