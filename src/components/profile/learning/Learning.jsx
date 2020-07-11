import React from 'react';
import { useTranslation } from 'react-i18next';
import ProfileLearning from '../../foundation/profileLearning/ProfileLearning';
import ContainerBase from '../../foundation/ContainerBase';
import { spacing } from '../../../constants/styles';
import Grid from '../../foundation/Grid';
import Styled from './Learning.styles';
import CustomCardTitle from '../customCardTitles/CustomCardTitle';

const compCourses = {
  '124jq23j234': {
    image: '/svg/frontend.svg',
    title: 'Course Name',
    subtitle: 'category',
  },
  '124jq23j2345': {
    image: '/svg/backend.svg',
    title: 'Course Name',
    subtitle: 'category',
  },
  '124jq23ddj234': {
    image: '/svg/design.svg',
    title: 'Course Name',
    subtitle: 'category',
  },
};

const takingCourses = {
  '124jq23j234': {
    image: '/svg/frontend.svg',
    title: 'Course Name',
    subtitle: 'category',
  },
  '124jq23j2345': {
    image: '/svg/backend.svg',
    title: 'Course Name',
    subtitle: 'category',
  },
  '124jq23ddj234': {
    image: '/svg/design.svg',
    title: 'Course Name',
    subtitle: 'category',
  },
  '124jq23ddj236': {
    image: '/svg/frontend.svg',
    title: 'Course Name',
    subtitle: 'category',
  },
};

const ChooseLearningPath = () => {
  const { t } = useTranslation();

  return (
    <ContainerBase
      marginTop="xxxl"
      mediaConfig={{
        belowTabletLarge: {
          margin: '30px 0 0 0',
        },
      }}
    >
      <Styled.LearningWrapper>
        <CustomCardTitle
          margin="0 0 44px 0"
          mobileMargin="0 0 22px 0"
          text="Completed Courses"
        />
        <Grid
          columns="1fr"
          mediaConfig={{
            aboveTabletLarge: {
              'grid-template-columns': '1fr 1fr 1fr',
            },
            belowDesktop: {
              'grid-gap': spacing.xl,
            },
          }}
          gridGap={spacing.xl}
        >
          {Object.keys(compCourses).map((id, idx) => {
            const Data = compCourses[id];

            return (
              <ProfileLearning
                key={id}
                imageSrc={Data.image}
                title={Data.title}
                subtitle={Data.subtitle}
                background="transparent linear-gradient(180deg, #293150 0%, #1E2540 100%) 0% 0% no-repeat padding-box"
              />
            );
          })}
        </Grid>
        <CustomCardTitle
          margin="106px 0 44px 0"
          mobileMargin="51px 0 22px 0"
          text="Courses you are taking"
        />
        <Grid
          columns="1fr"
          mediaConfig={{
            aboveTabletLarge: {
              'grid-template-columns': '1fr 1fr 1fr',
            },
            belowDesktop: {
              'grid-gap': spacing.xl,
            },
          }}
          gridGap={spacing.xl}
        >
          {Object.keys(takingCourses).map((id, idx) => {
            const Data = takingCourses[id];

            return (
              <ProfileLearning
                key={id}
                imageSrc={Data.image}
                title={Data.title}
                subtitle={Data.subtitle}
                background="transparent linear-gradient(180deg, #293150 0%, #1E2540 100%) 0% 0% no-repeat padding-box"
              />
            );
          })}
        </Grid>
        <CustomCardTitle
          margin="106px 0 53px 0"
          mobileMargin="51px 0 22px 0"
          text="Your skillset"
        />
        <Styled.SkillWrapper>
          <Styled.SkillSetItemWrapper>HTML</Styled.SkillSetItemWrapper>
          <Styled.SkillSetItemWrapper>CSS</Styled.SkillSetItemWrapper>
          <Styled.SkillSetItemWrapper>JAVA</Styled.SkillSetItemWrapper>
          <Styled.SkillSetItemWrapper
            padding="18px 30px"
            mobilePadding="9px 23px"
          >
            Responsive Design
          </Styled.SkillSetItemWrapper>
        </Styled.SkillWrapper>
        <Styled.SkillSetItemWrapper
          padding="18px 45px"
          mobilePadding="9px 23px"
          width="500px"
          mobileWidth="250px"
        >
          Frontend Development
        </Styled.SkillSetItemWrapper>
      </Styled.LearningWrapper>
    </ContainerBase>
  );
};

export default ChooseLearningPath;
