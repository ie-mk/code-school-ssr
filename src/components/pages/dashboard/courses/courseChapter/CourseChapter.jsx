import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Styled from './CourseChapter.styles';
import CourseLessonHeader from '../courseLesson/CourseLessonHeader';
import { ContainerBase } from '../../../../foundation';
import AdminInput from '../../../../foundation/input/AdminInput';
import { Formik, ErrorMessage, Field } from 'formik';
import { resourceActions } from '../../../../../store/actions';
import Button from '../../../../foundation/button/Button';
import FlexContainer from '../../../../foundation/FlexContainer';
import CourseLessonsContainer from '../courseLesson/CourseLessonsContainer';

const CourseChapter = ({ dispatch, courseId, chapterId, data, idx }) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    dispatch(
      resourceActions.fetchLessons.request({
        courseId,
        chapterId,
      }),
    );
  }, []);

  const handleChapterDelete = () => {
    if (confirm('Are you sure you want to delete this chapter?')) {
      dispatch(resourceActions.deleteChapter.request(chapterId));
    }
  };

  const lessons = data.lessons;

  // console.log(`=========== chapter rendered id: ${chapterId}`);
  // console.log('+++++++++++ chapter data: ', data);

  return (
    <ContainerBase paddingLeft="xxxl" paddingRight="xxxl">
      <Styled.ChapterHeader>
        <Styled.ExpandButton onClick={() => setExpanded(!expanded)}>
          <i className={`fa fa-${expanded ? 'minus' : 'plus'}`} />{' '}
        </Styled.ExpandButton>
        Chapter {idx + 1}
        <Styled.DeleteChapterButton onClick={handleChapterDelete}>
          Delete <i className="fa fa-close" />
        </Styled.DeleteChapterButton>
      </Styled.ChapterHeader>
      <Styled.Content expanded={expanded}>
        <Formik
          initialValues={{ ...initialFormValues, ...data }}
          enableReinitialize={true}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            dispatch(
              resourceActions.updateChapter.request({
                chapterId,
                data: values,
              }),
            );
            setTimeout(() => setSubmitting(false), 1000);
          }}
        >
          {({ values, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Styled.InputRow>
                <AdminInput
                  name="title"
                  type="text"
                  label="Chapter title"
                  //placeholder="Enter chapter title"
                  width="28%"
                />
                <AdminInput
                  name="sequenceNr"
                  type="number"
                  label="Sequence Nr"
                  //placeholder="Enter chapter title"
                  width="28%"
                />
                <AdminInput
                  name="numberOfLessons"
                  type="text"
                  label="Number of Lessons"
                  width="28%"
                />
              </Styled.InputRow>
              <FlexContainer justifyContent="flex-end" marginTop="xxl">
                <Button type="button" size="sm" onClick={handleSubmit}>
                  Update Chapter
                </Button>
              </FlexContainer>
            </form>
          )}
        </Formik>
        {lessons && (
          <CourseLessonsContainer
            courseId={courseId}
            chapterId={chapterId}
            data={lessons}
          />
        )}
      </Styled.Content>
    </ContainerBase>
  );
};

const initialFormValues = {
  title: '',
  numberOfLessons: '',
  sequenceNr: '',
};

export default connect()(CourseChapter);
