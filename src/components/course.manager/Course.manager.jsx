import React, { useEffect, useState } from 'react';
import { TaskManager } from './task.manager';
import { Wrapper } from './Course.manager.styles';
import mock from './mock/mock.json';

export function CourseManager(props) {
  const [course, setCourse] = useState();
  const { courseId, taskIndex = 0 } = props;

  useEffect(() => {
    getCourse(courseId).then(course => setCourse(course));
  }, [courseId]);

  if (!course) return <Wrapper>Loading...</Wrapper>;

  const task = course.tasks[taskIndex];

  return (
    <Wrapper>
      <TaskManager task={task} />
    </Wrapper>
  );
}

async function getCourse() {
  await new Promise(resolve => setTimeout(resolve, 400));

  return mock;
}
