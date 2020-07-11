import styled, { css } from 'styled-components';

const Ratingbox = styled.div`
  position: relative;
  font-family: FontAwesome;
  display: inline-block;

  &:before {
    content: '\f006   \f006   \f006   \f006   \f006';
  }
`;

const Rating = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  white-space: nowrap;
  overflow: hidden;
  color: #d3b92e;
  width: ${({ width }) => (width ? width : 0)};
  &:before {
    content: '\f005   \f005   \f005   \f005   \f005';
  }
`;

export default {
  Ratingbox,
  Rating,
};
