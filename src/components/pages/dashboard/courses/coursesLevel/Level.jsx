import React from 'react';
import Styled from './CoursesLevel.styles';
import BodyText from '../../../../foundation/typography/BodyText';
import SectionTitle from '../../../../foundation/typography/SectionTitle';
import Grid from '../../../../foundation/Grid';
import { fontSizeMap, spacing, colors } from '../../../../../constants/styles';
import ProfileLearning from '../../../../foundation/profileLearning/ProfileLearning';
import Router from 'next/router';

const Level = ({ courses, learningPathData, heading }) => {
  const toCourseStartPage = (courseId, title) => {
    Router.push(
      {
        pathname: '/courses/courseStart',
        query: {
          courseId,
        },
      },
      `/course/${title.replace(' ', '')}/start`,
      { shallow: true },
    );
  };

  return (
    <Styled.Wrapper>
      <SectionTitle text={heading} textAlign="center" />

      <Styled.TextWrapper>
        <BodyText>{learningPathData.descr}</BodyText>
      </Styled.TextWrapper>
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
        gridGap={spacing.xxxxl}
      >
        {courses &&
          Object.keys(courses).map((courseId, i) => {
            const course = courses[courseId];
            return (
              <ProfileLearning
                key={i}
                imageSrc={learningPathData.images[0]}
                title={course.title}
                subtitle={course.level}
                background={colors.background.violetprimary}
                onClick={() => toCourseStartPage(courseId, course.title)}
              />
            );
          })}
      </Grid>
    </Styled.Wrapper>
  );
};

export default Level;
