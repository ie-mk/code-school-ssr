import React from 'react';
import { useTranslation } from 'react-i18next';

import CardTitle from '../../foundation/typography/CardTitle';
import Text24 from '../../foundation/typography/Text24';
import BodyText from '../../foundation/typography/BodyText';
import PathTitle from '../../foundation/typography/PathTitle';
import ContainerBase from '../../foundation/ContainerBase';
import { fontSizeMap, spacing } from '../../../constants/styles';
import Styled from './Billing.styles';
import Grid from '../../foundation/Grid';
import Button from '../../foundation/button/Button';
import FlexContainer from '../../foundation/FlexContainer';
import CustomCardTitle from '../customCardTitles/CustomCardTitle';

const CustomButton = ({
  customMinWidth,
  customMargin,
  mobileMargin,
  customMobileMinWidth,
  ...props
}) => (
  <Button
    type="secondary"
    borderRadius="mobile"
    size="lg"
    margin={customMargin}
    padding="18px 27px"
    minWidth={customMinWidth}
    mediaConfig={{
      belowTabletLarge: {
        padding: '10px 15px',
        fontSize: fontSizeMap.buttonMobile,
        margin: mobileMargin ? mobileMargin : '0',
        minWidth: customMobileMinWidth ? customMobileMinWidth : '100px',
      },
    }}
    {...props}
  >
    {props.children}
  </Button>
);

const CustomText24 = props => (
  <Text24
    mediaConfig={{
      belowTabletLarge: {
        margin: '0  0 15px 0',
      },
    }}
    {...props}
  />
);

const CustomPathTitle = props => (
  <PathTitle
    mediaConfig={{
      belowTabletLarge: {
        margin: 0,
      },
    }}
    {...props}
  />
);

const CustomBodyText = props => (
  <BodyText color="#0EC9B0" fontWeight="400" {...props}>
    {props.text}
  </BodyText>
);

const Billig = () => {
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
        <CustomCardTitle
          margin="0 0 44px 0"
          mobileMargin="0 0 22px 0"
          text="Your Membership"
        />
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
            <CustomText24 margin="0 0 30px 0" text="MemberShip Type" />
            <Styled.MembershipType>
              <CustomBodyText text="Paid" />
              <CustomButton
                margin="0"
                customMobileMinWidth="auto"
                type="primary"
              >
                Change
              </CustomButton>
            </Styled.MembershipType>
          </div>

          <div>
            <CustomText24 margin="0 0 44px 0" text="MemberShip Fee" />
            <CustomBodyText
              text="€ 3999/ year"
              mediaConfig={{
                belowTabletLarge: {
                  margin: '24px 0 0',
                },
              }}
            />
          </div>
          <div>
            <CustomText24 margin="0 0 44px 0" text="Last Payment Date" />
            <CustomBodyText text="March 23, 2020" />
          </div>
        </Grid>
        <CustomCardTitle
          margin="113px 0 30px 0"
          mobileMargin="56px 0 15px 0"
          media
          text="Invoices"
        />
        <Grid
          columns="1fr 1fr 1fr"
          mediaConfig={{
            aboveTabletLarge: {
              'grid-template-columns': '1fr 1fr 1fr 1fr',
            },
            belowTabletLarge: {
              'grid-gap': spacing.xl,
            },
          }}
          gridGap={spacing.xxxxl}
        >
          <div>
            <CustomText24 margin="0 0 30px 0" text="Description" />
            <CustomPathTitle text="MemberShip Fee" />
          </div>

          <div>
            <CustomText24 margin="0 0 30px 0" text="Amount" />
            <CustomPathTitle text="€ 3999" />
          </div>
          <div>
            <CustomText24 margin="0 0 30px 0" text="Date" />
            <CustomPathTitle text="March 23,2020" />
          </div>
          <div>
            <CustomButton customMargin="42px 0 0 0" customMinWidth="200px">
              View Invoice
            </CustomButton>
          </div>
        </Grid>

        <CustomCardTitle
          margin="113px 0 40px 0"
          mobileMargin="56px 0 15px 0"
          text="Payment Methods"
        />

        <Grid
          columns="90px 1fr"
          alignItems="center"
          mediaConfig={{
            aboveTabletLarge: {
              'grid-template-columns': '140px 1fr 1fr',
            },
            belowTabletLarge: {
              'grid-gap': spacing.xl,
            },
          }}
          gridGap={spacing.xxxxl}
        >
          <Styled.CardImage src="img/visaImage.png" />
          <CardTitle fontWeight="200" text="xxxx xxxx xxxx 3267" />
          <FlexContainer justifyContent="flex-end">
            <CustomButton
              type="secondary"
              customMargin="0"
              customMobileMinWidth="90px"
              minWidth="180px"
            >
              Remove
            </CustomButton>
          </FlexContainer>
        </Grid>

        <CustomButton
          customMargin="50px 0 0 0"
          mobileMargin="20px 0 0 "
          type="primary"
        >
          Add Payment Method
        </CustomButton>
        <CustomCardTitle
          text="Cancel Membership"
          margin="100px 0 30px 0"
          mobileMargin="56px 0 15px 0"
        />
        <CustomPathTitle text="you will loss access to your courses and program" />
        <CustomButton
          type="secondary"
          margin="50px 0 100px"
          mobileMargin="20px 0 0 "
        >
          Cancel Membership
        </CustomButton>
      </Styled.BillingWrapper>
    </ContainerBase>
  );
};

export default Billig;
