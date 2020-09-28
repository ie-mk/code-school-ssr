import React, { useState } from 'react';
import FlexContainer from '../../foundation/FlexContainer';
import Styled from '../Task.manager.styles';
import SolutionsControl from './SolutionsControl';
import { useRouter } from 'next/router';

const SolutionsMenu = ({
  solutions,
  solution,
  canEditTask,
  task,
  saveTask,
}) => {
  const router = useRouter();
  const {
    query: { solutionIndex },
  } = router;

  const [renderTime, forceRerender] = useState(new Date().getTime());

  function updateQuery(params) {
    const newQuery = { ...router.query, ...params };

    const url = `/editor?${new URLSearchParams(newQuery).toString()}`;
    router.push(url, url, { shallow: true });
  }

  return (
    <>
      <Styled.SolutionsMenu key={renderTime}>
        Choose solution stack:
        <FlexContainer justifyContent="flex-start">
          {solutions &&
            solutions.map(({ title }, idx) => (
              <Styled.SolutionButton
                key={idx}
                onClick={() =>
                  updateQuery({
                    solutionIndex: idx,
                  })
                }
                active={Number(solutionIndex) === idx}
              >
                {title ? title : `SOLUTION ${idx + 1}`}
              </Styled.SolutionButton>
            ))}
          {canEditTask ? (
            <SolutionsControl
              solutions={solutions}
              solution={solution}
              forceRerender={forceRerender}
              task={task}
              saveTask={saveTask}
            />
          ) : null}
        </FlexContainer>
      </Styled.SolutionsMenu>
    </>
  );
};

export default SolutionsMenu;
