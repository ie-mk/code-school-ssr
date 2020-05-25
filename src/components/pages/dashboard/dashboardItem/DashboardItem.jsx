import React from 'react';
import Styled from './DashboardItem.styles';

const DashBoardItem = ({ data }) => {
  return (
    <Styled.ItemWrapper>
      <Styled.TitleContainer>{data.title}</Styled.TitleContainer>
      <Styled.CountContainer>{data.count}</Styled.CountContainer>

      <Styled.RowContainer renderEmpty={!(data.Active && data.New)}>
        {data.Active && data.New ? (
          <>
            <span>
              <Styled.grayContainer> New </Styled.grayContainer>
              <Styled.NewContainer>{data.New}</Styled.NewContainer>
            </span>
            <span>
              <Styled.grayContainer> Active </Styled.grayContainer>
              <Styled.NewContainer>{data.Active}</Styled.NewContainer>
            </span>
          </>
        ) : null}
      </Styled.RowContainer>
    </Styled.ItemWrapper>
  );
};

export default DashBoardItem;
