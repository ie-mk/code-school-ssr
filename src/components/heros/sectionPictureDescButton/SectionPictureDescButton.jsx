import React from 'react';
import ContainerBase from '../../foundation/ContainerBase';
import Grid from '../../foundation/Grid';
import ResponsiveImage from '../../foundation/ResponsiveImage';
import SectionTitle from '../../foundation/typography/SectionTitle';
import BodyText from '../../foundation/typography/BodyText';
import Button from '../../foundation/button/Button';

const SectionPictureDescButton = () => {
  return (
    <ContainerBase
      marginTop="xxxl"
      mediaConfig={{
        belowDesktop: {
          padding: 0,
        },
      }}
    >
      <Grid
        mediaConfig={{
          aboveMobileLarge: {
            'grid-template-columns': 'minmax(0, 1fr) 1fr',
          },
        }}
        columns="1fr"
      >
        <ContainerBase position="relative">
          <ResponsiveImage
            src="/img/Online_Courses_Illustration.png"
            width="100%"
            padding="32%"
            backGroundSize="contain"
          />
        </ContainerBase>
        <ContainerBase
          display="flex"
          paddingLeft="xxl"
          flex="1"
          flexDirection="column"
        >
          <SectionTitle text="Online Courses" />
          <BodyText marginBottom="lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et
          </BodyText>
          <Button maxWidth="300px" type="primary" size="lg">
            VIEW COURSES
          </Button>
        </ContainerBase>
      </Grid>
    </ContainerBase>
  );
};

export default SectionPictureDescButton;
