import React from 'react';
import ContainerBase from '../../../../foundation/ContainerBase';
import Grid from '../../../../foundation/Grid';
import ResponsiveImage from '../../../../foundation/ResponsiveImage';
import SectionTitle from '../../../../foundation/typography/SectionTitle';
import BodyText from '../../../../foundation/typography/BodyText';
import Button from '../../../../foundation/button/Button';
import Styled from './CourseFeatures.styles';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';
import CheckBoxWithText from '../../../../foundation/checkboxwithtext/CheckBoxWithText';

var data = [
  { Feature: 'Take all our courses online' },
  { Feature: 'Course available in On-site' },
  { Feature: 'Self-paced and interactive' },
];

const CourseFeatures = () => {
  return (
    <Styled.Wrapper>
      <ResponsiveImage
        src="/img/Background.png"
        height="100vh"
        width="100%"
        position="absolute"
        mediaConfig={{
          belowTabletLarge: {
            height: '176vh',
            backgroundImage: 'url("/img/mobile/Background.png")',
          },
        }}
      />
      <Styled.Content>
        <Grid
          mediaConfig={{
            aboveTabletLarge: {
              'grid-template-columns': '350px 1fr',
            },
          }}
          columns="1fr"
        >
          <ContainerBase
            display="flex"
            flexDirection="column"
            zIndex="1"
            mediaConfig={{
              belowTabletLarge: {
                order: '3',
                justifyContent: 'center',
                alignItems: 'center',
              },
            }}
          >
            <SectionTitle text="Course Features" />

            <Styled.ItemsWrapper>
              {data.map((s, i) => {
                return (
                  <CheckBoxWithText
                    key={i}
                    label={s.Feature}
                    color="white"
                    noMargin={true}
                    fontSize="text"
                  />
                );
              })}
            </Styled.ItemsWrapper>
            <Button
              type="primary"
              size="lg"
              padding="20px 50px"
              maxWidth="280px"
              margin="0"
            >
              START LEARNING
            </Button>
          </ContainerBase>
          <ContainerBase
            position="relative"
            mediaConfig={{
              belowTabletLarge: {
                order: '1',
              },
            }}
          >
            <ResponsiveImage
              src="/img/Learning_Path_Illustration.png"
              width="100%"
              padding="32%"
              backGroundSize="contain"
            />
          </ContainerBase>
          <ContainerBase
            width="100%"
            mediaConfig={{
              belowTabletLarge: {
                order: '2',
                marginBottom: '60px',
              },
              aboveTabletLarge: {
                gridColumn: '1/3',
                gridRow: 2,
              },
            }}
          >
            <Styled.FootWrapper>
              Learn new skills and grow your career
            </Styled.FootWrapper>
          </ContainerBase>
        </Grid>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default CourseFeatures;
