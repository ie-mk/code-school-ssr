import React from 'react';
import Styled from './StarRating.styles';

const StarRating = ({ rating }) => {
  const starTotal = 5;
  const starPercentage = (rating / starTotal) * 100;
  const starPercentageRounded = `${starPercentage}%`;
  return (
    <Styled.Ratingbox>
      <Styled.Rating width={starPercentageRounded} />
    </Styled.Ratingbox>
  );
};

export default StarRating;
