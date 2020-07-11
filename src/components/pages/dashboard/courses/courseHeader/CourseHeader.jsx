import React from 'react';
import Styled from './CourseHeader.styles';
import ResponsiveImage from '../../../../foundation/ResponsiveImage';
import Grid from '../../../../foundation/Grid';
import { fontSizeMap, spacing, colors } from '../../../../../constants/styles';
import ContainerBase from '../../../../foundation/ContainerBase';
import Button from '../../../../foundation/button/Button';
import GreenCheckBoxWithText from '../../../../foundation/greencheckboxwithtext/GreenCheckBoxWithText.jsx';
import StarRating from '../../../../foundation/starRating/StarRating';

const Label = ({ keyname, value }) => {
  return (
    <ContainerBase
      display="flex"
      flexDirection="row"
      paddingBottom="md"
      alignItems="center"
    >
      <Styled.Label color="bluelight" fontSize="h5">
        {keyname}:
      </Styled.Label>
      <Styled.Label fontSize="h4" fontWeight="500">
        {value}
      </Styled.Label>
    </ContainerBase>
  );
};

const CourseHeader = ({ title, course }) => {
  const Rating = <StarRating rating={course.studentRating} />;

  const whatyouwilllearn = course.whatWillLearn;
  const data = whatyouwilllearn.split(',');

  const prerequisites = course.prerequisites;
  const prerequisitesdata = prerequisites.split(',');
  return (
    <Styled.Wrapper>
      <ResponsiveImage
        src="/img/Background.png"
        height="100%"
        width="100%"
        position="absolute"
        mediaConfig={{
          belowTabletLarge: {
            backgroundImage: 'url("/img/mobile/Background.png")',
          },
        }}
      />
      <Styled.Content>
        <Styled.HeaderWrapper>
          <Styled.StyledHeader fontSize="h2" mobileFontSize="h4">
            {title}
          </Styled.StyledHeader>
        </Styled.HeaderWrapper>

        <Grid
          columns="1fr"
          mediaConfig={{
            aboveTabletLarge: {
              'grid-template-columns': '1fr 1fr 1fr',
            },
            belowDesktop: {
              'grid-gap': spacing.xl,
              'grid-template-columns': '1fr 1fr',
            },
          }}
          gridGap={spacing.xl}
        >
          <Label keyname="Author" value="Stephen Segmister" />
          <Label keyname="Student Rating" value={Rating} />
          <Label keyname="Level" value={course.level} />
          <Label keyname="Content" value={course.numberOfChapters} />
          <Label keyname="Duration" value={course.duration} />
          <Button
            type="primary"
            size="lg"
            padding="10px 30px"
            maxWidth="280px"
            margin="0"
          >
            START COURSE
          </Button>
        </Grid>
        <ContainerBase marginTop="xxl" marginBottom="xxl">
          <Grid
            columns="1fr"
            mediaConfig={{
              aboveTabletLarge: {
                'grid-template-columns': '1fr 1fr',
              },
              belowDesktop: {
                'grid-gap': spacing.xxl,
              },
            }}
            gridGap={spacing.xxxxl}
          >
            <Styled.ContentWrapper>
              <Styled.StyledHeader fontSize="h3" mobileFontSize="h5">
                What you will learn{' '}
              </Styled.StyledHeader>
              <Styled.ItemsWrapper>
                {data.map((item, i) => {
                  return (
                    <GreenCheckBoxWithText
                      key={i}
                      label={item}
                      color={colors.text.primary}
                      fontSize="text"
                      noMargin={true}
                    />
                  );
                })}
              </Styled.ItemsWrapper>
            </Styled.ContentWrapper>
            <Styled.ContentWrapper>
              <Styled.StyledHeader fontSize="h3" mobileFontSize="h5">
                Requirements{' '}
              </Styled.StyledHeader>
              <Styled.ItemsWrapper>
                {prerequisitesdata.map((item, i) => {
                  return (
                    <GreenCheckBoxWithText
                      key={i}
                      label={item}
                      color={colors.text.primary}
                      fontSize="text"
                      noMargin={true}
                      padding="sm"
                    />
                  );
                })}
              </Styled.ItemsWrapper>
            </Styled.ContentWrapper>
          </Grid>
        </ContainerBase>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default CourseHeader;
