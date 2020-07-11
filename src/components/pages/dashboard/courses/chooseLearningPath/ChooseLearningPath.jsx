import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LearningPathCard from '../../../../foundation/learningPathCard/LearningPathCard';
import BodyText from '../../../../foundation/typography/BodyText';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';
import SectionTitle from '../../../../foundation/typography/SectionTitle';
import { background, spacing } from '../../../../../constants/styles';
import Grid from '../../../../foundation/Grid';
import { Router } from 'next/router';
import { connect } from 'react-redux';
import { resourceActions } from '../../../../../store/actions';
import { getLearningPaths } from '../../../../../store/selectors';
import { LEARNING_PATH } from '../../../../../constants';

const ChooseLearningPath = ({ dispatch, learningPaths }) => {
  useEffect(() => {
    dispatch(resourceActions.fetchLearningPaths.request());
  }, []);

  return (
    <CenteredFlexContainer marginTop="xxl">
      <SectionTitle text="Choose a Learning Path" />
      <BodyText>
        Learning paths guide you through exactly what you need to learn to build
        a solid foundation for a career or skillset
      </BodyText>
      <Grid
        columns="1fr"
        mediaConfig={{
          aboveTabletLarge: {
            'grid-template-columns': '1fr 1fr 1fr',
          },
          belowDesktop: {
            'grid-gap': spacing.xl,
          },
        }}
        gridGap={spacing.xxxxl}
      >
        {learningPaths &&
          Object.keys(learningPaths).map(key => {
            const data = learningPaths[key];
            return (
              <LearningPathCard
                key={key}
                imageSrc={data && data.images && data.images[0]}
                title={LEARNING_PATH[data.title]}
                learningPathId={key}
              />
            );
          })}
      </Grid>
    </CenteredFlexContainer>
  );
};

const mapStateToProps = state => ({
  learningPaths: getLearningPaths(state),
});

export default connect(mapStateToProps)(ChooseLearningPath);
