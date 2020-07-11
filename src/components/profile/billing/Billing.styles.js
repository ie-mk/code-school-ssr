import styled from 'styled-components';
import media from '../../foundation/media';
export const Wrapper = styled.div``;

export const BillingWrapper = styled.div`
  padding: 0 90px 0 110px;
  ${media.belowTabletLarge`
    padding: 21px 10px;
  `}
`;

export const MembershipType = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const CardImage = styled.img`
  width: 168px;
  height: 75px;
  object-fit: cover;
  border-radius: 10px;
  ${media.belowTabletLarge`
  width: 84px;
  height: 38px;
`}
`;

export default {
  Wrapper,
  BillingWrapper,
  MembershipType,
  CardWrapper,
  CardImage,
};
