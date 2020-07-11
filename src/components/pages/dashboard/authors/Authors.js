import React, { useState } from 'react';
import { ContainerBase } from '../../../foundation';
import Styled from './Authors.styles';
import AuthorsData from './authorsData/authorsData';
import LearningPaths from './learningPathData/LearningPathData';

const Authors = () => {
  const [activeTab, setActiveTab] = useState('authors');

  const isActiveAuthors = activeTab === 'authors';
  const isActiveLearningPaths = activeTab === 'learningPath';

  return (
    <ContainerBase paddingLeft="xl" paddingRight="xl">
      <Styled.RowContainer>
        <Styled.Title
          isStrong={isActiveAuthors}
          textDecor={isActiveAuthors}
          onClick={() => setActiveTab('authors')}
        >
          Authors
        </Styled.Title>
        <Styled.Title
          isStrong={isActiveLearningPaths}
          textDecor={isActiveLearningPaths}
          onClick={() => setActiveTab('learningPath')}
        >
          Learning Paths
        </Styled.Title>
      </Styled.RowContainer>
      <Styled.Wrapper>
        {isActiveAuthors && <AuthorsData />}
        {isActiveLearningPaths && <LearningPaths />}
      </Styled.Wrapper>
    </ContainerBase>
  );
};

export default Authors;
