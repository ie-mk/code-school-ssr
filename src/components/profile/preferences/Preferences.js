import React from 'react';
import { useTranslation } from 'react-i18next';
import CardTitle from '../../foundation/typography/CardTitle';
import BodyHeader from '../../foundation/typography/BodyHeader';
import ContainerBase from '../../foundation/ContainerBase';
import Styled from './Preferences.styles';
import Grid from '../../foundation/Grid';

const CustomBodyHeader = props => (
  <BodyHeader
    mediaConfig={{
      belowTabletLarge: {
        margin: '0 0 7px 0',
      },
    }}
    {...props}
  />
);

const CustomBodyHeader1 = props => (
  <BodyHeader
    mediaConfig={{
      belowTabletLarge: {
        margin: '0 0 0 24px',
      },
    }}
    {...props}
  />
);

const CustomCardTitle1 = ({ customMargin, ...props }) => (
  <CardTitle
    margin={customMargin}
    fontWeight="500"
    mediaConfig={{
      belowTabletLarge: {
        margin: '0 0 22px 0',
      },
    }}
    {...props}
  />
);

const CustomCardTitle2 = ({ customMargin, ...props }) => (
  <CardTitle
    margin={customMargin}
    fontWeight="500"
    mediaConfig={{
      belowTabletLarge: {
        margin: '56px 0 15px 0',
      },
    }}
    {...props}
  />
);

const Preferences = () => {
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
      <Styled.BillingWrapper>
        <CustomCardTitle1 margin="0 0 44px 0" text="Your Account Details" />
        <Grid
          columns="1fr 1fr"
          marginBottom
          mediaConfig={{
            aboveTabletLarge: {
              'grid-template-columns': '1fr 1fr 1fr',
            },
            belowTabletLarge: {
              'grid-gap': spacing.xl,
            },
          }}
          gridGap={spacing.xxxxl}
        >
          <div>
            <CustomBodyHeader margin="0 0 14px 0" text="Email" />
            <CustomBodyHeader text="studentname@gmail.com" />
          </div>

          <Styled.DesktopView>
            <CustomBodyHeader margin="0 0 14px 0" text="Mobile" />
            <CustomBodyHeader text="+44 2573 34785" />
          </Styled.DesktopView>
          <div>
            <CustomBodyHeader margin="0 0 14px 0" text="Mobile" />
            <CustomBodyHeader text="+44 2573 34785" />
          </div>

          <div>
            <CustomBodyHeader margin="0 0 14px 0" text="Password" />
            <CustomBodyHeader text="**********" />
          </div>
        </Grid>
        <CustomCardTitle2
          margin="81px 0 37px 0"
          text="Notifications You will recieve"
        />

        <Styled.CheckBoxItemWrapper>
          <Styled.CheckBox type="checkbox" />
          <CustomBodyHeader1 margin="0 0 0 48px" text="Weekly newsletter" />
        </Styled.CheckBoxItemWrapper>
        <Styled.CheckBoxItemWrapper>
          <Styled.CheckBox type="checkbox" />
          <CustomBodyHeader1 margin="0 0 0 48px" text="Course Updates" />
        </Styled.CheckBoxItemWrapper>
        <Styled.CheckBoxItemWrapper>
          <Styled.CheckBox type="checkbox" />
          <CustomBodyHeader1
            margin="0 0 0 48px"
            text="Lesson progress notifications"
          />
        </Styled.CheckBoxItemWrapper>
        <Styled.CheckBoxItemWrapper>
          <Styled.CheckBox type="checkbox" />
          <CustomBodyHeader1
            margin="0 0 0 48px"
            text="Feedback from course authors"
          />
        </Styled.CheckBoxItemWrapper>
        <Styled.CheckBoxItemWrapper>
          <Styled.CheckBox type="checkbox" />
          <CustomBodyHeader1
            margin="0 0 0 48px"
            text=" Message notifications"
          />
        </Styled.CheckBoxItemWrapper>
      </Styled.BillingWrapper>
    </ContainerBase>
  );
};

export default Preferences;
