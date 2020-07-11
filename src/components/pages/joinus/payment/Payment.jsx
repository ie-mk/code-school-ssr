import React, { useState } from 'react';
import ContainerBase from '../../../foundation/ContainerBase';
import { connect } from 'react-redux';
import Button from '../../../foundation/button/Button';
import AdminInput from '../../../foundation/input/AdminInput';
import { Formik, ErrorMessage, Field } from 'formik';
import SectionTitle from '../../../foundation/typography/SectionTitle';
import Styled from './Payment.styles';
import CenteredFlexContainer from '../../../foundation/CenteredFlexContainer';

const YourDetails = () => {
  const [Paymentmethod, setPaymentmethod] = useState(1);

  return (
    <ContainerBase
      display="flex"
      //  justifyContent="center"
      alignItems="center"
      flexDirection="column"
      marginBottom="xxxl"
    >
      <SectionTitle text="Choose Your Payment Method" />
      <Formik
        initialValues={{ ...initialFormValues }}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => setSubmitting(false), 1000);
        }}
      >
        <form>
          <CenteredFlexContainer>
            <ContainerBase
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              //    marginTop="xxxls"
              mediaConfig={{
                belowTabletLarge: {
                  flexDirection: 'column',
                  width: '300px',
                  justifyContent: 'flex-start',
                },
              }}
            >
              <Styled.RowContainer>
                <input
                  name="paymentType"
                  type="radio"
                  id="paypal"
                  value="paypal"
                  onChange={setPaymentmethod}
                />
                <Styled.ImageWrapper>
                  <img src="/svg/paypal.svg" alt="icon" />
                </Styled.ImageWrapper>
              </Styled.RowContainer>

              <Styled.RowContainer>
                <input
                  name="paymentType"
                  type="radio"
                  id="credit/debitcard"
                  value="card"
                  onChange={setPaymentmethod}
                />
                <Styled.RadioButtonLabel>
                  Credit/Debit Card
                </Styled.RadioButtonLabel>
              </Styled.RowContainer>
            </ContainerBase>

            <Styled.Wrapper>
              <AdminInput
                name="name"
                type="text"
                label="Name on the card"
                backgroundColor="#293150"
                width="100%"
                fontSize="h4"
              />
              <AdminInput
                name="cardnumber"
                type="text"
                label="Card Number"
                backgroundColor="#293150"
                width="100%"
                fontSize="h4"
              />
            </Styled.Wrapper>

            <Styled.ExpiryDateCVVContainer>
              <Styled.InputWrapper>
                <AdminInput
                  name="expirydate"
                  type="text"
                  label="Expiry Date"
                  backgroundColor="#293150"
                  width="100%"
                  fontSize="h4"
                  placeholder="MM/YY"
                  noMargin={true}
                />
              </Styled.InputWrapper>
              <Styled.InputWrapper>
                <AdminInput
                  name="cvv"
                  type="text"
                  label="CVV"
                  backgroundColor="#293150"
                  width="100%"
                  fontSize="h4"
                  noMargin={true}
                />
              </Styled.InputWrapper>
            </Styled.ExpiryDateCVVContainer>
            <Styled.ButtonWrapper>
              <Button type="primary" size="sm" padding="lg">
                Pay $3999
              </Button>
            </Styled.ButtonWrapper>
          </CenteredFlexContainer>
        </form>
      </Formik>
    </ContainerBase>
  );
};

const initialFormValues = {
  name: '',
  cardnumber: '',
  expirydate: '',
  cvv: '',
};
export default YourDetails;
