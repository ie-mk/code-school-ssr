import React, { useState } from 'react';
import { ContainerBase } from '../../../foundation';
import AddNewCourse from './editCourse/EditCourse';
import CenteredFlexContainer from '../../../foundation/CenteredFlexContainer';
import Styled from './DashboardCourses.styles';
import CoursesTable from './coursesTable/CoursesTable';
import { connect } from 'react-redux';
import SpinnerLarge from '../../../foundation/spinner/SpinnerLarge';
import { resourceActions } from '../../../../store/actions';
import { getEditingCourseId } from '../../../../store/selectors';

const DashboardCourses = ({ dispatch, loading, editableCourseId }) => {
  const [activeTab, setActiveTab] = useState('published');

  const showPublished = activeTab === 'published';
  const showUnpublished = activeTab === 'unpublished';
  const showNew = activeTab === 'addNew';

  const handleCreateNew = () => {
    dispatch(resourceActions.setEditableCourseId(null));
    dispatch(resourceActions.createCourse.request());
    setActiveTab('addNew');
  };

  return (
    <>
      {loading ? <SpinnerLarge /> : null}
      <CenteredFlexContainer paddingTop="xl" flexDirection="row">
        <Styled.Title
          onClick={() => setActiveTab('published')}
          active={showPublished}
        >
          Published(10)
        </Styled.Title>
        <Styled.Title
          onClick={() => setActiveTab('unpublished')}
          active={showUnpublished}
        >
          Unpublished(06)
        </Styled.Title>
        <Styled.Title onClick={handleCreateNew} active={showNew}>
          Add New
        </Styled.Title>
      </CenteredFlexContainer>
      {showPublished || showUnpublished ? (
        <CoursesTable
          showPublished={showPublished}
          setActiveTab={setActiveTab}
        />
      ) : null}
      {showNew && editableCourseId ? <AddNewCourse /> : null}
    </>
  );
};

const mapStateToProps = state => ({
  loading: state.courses.loading,
  editableCourseId: getEditingCourseId(state),
});

export default connect(mapStateToProps)(DashboardCourses);
