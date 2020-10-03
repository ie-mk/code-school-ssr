import React, { useState } from 'react';
import './Stepnav.styles';
import { useRouter } from 'next/router';
import Styled from './Stepnav.styles';

export function Stepnav({ task, canEditTask, saveTask }) {
  const [renderTime, forceRerender] = useState(new Date().getTime());

  const router = useRouter();
  const { query } = router;
  const { stepIndex = 0 } = query;

  const { steps } = task;

  const isFirstStep = Number(stepIndex) === 0;
  const isLastStep = Number(stepIndex) === steps.length - 1;

  function updateQuery() {
    const url = `/editor?${new URLSearchParams(query).toString()}`;
    router.push(url, url, { shallow: true });
  }

  function goPrevStep() {
    query.stepIndex = Number(stepIndex) - 1;
    updateQuery();
  }

  function goNextStep() {
    query.stepIndex = Number(stepIndex) + 1;
    updateQuery();
  }

  function goToStep(step) {
    query.stepIndex = Number(step);
    updateQuery();
  }

  const addNewStep = () => {
    if (confirm('This will create a copy of the existing step')) {
      task.steps.push(task.steps[stepIndex]);
      forceRerender(new Date().getTime());
      saveTask();
    }
  };

  const deleteStep = () => {
    if (confirm('Are you sure you want to delete this step?')) {
      if (Number(stepIndex) === task.steps.length - 1) {
        query.stepIndex = task.steps.length - 2;
        updateQuery();
      }

      task.steps.splice(stepIndex, 1);

      forceRerender(new Date().getTime());
      saveTask();
    }
  };

  return (
    <Styled.Wrapper key={renderTime}>
      <div>
        {!canEditTask ? (
          <Styled.Button onClick={goPrevStep} hidden={isFirstStep}>
            PREVIOUS
          </Styled.Button>
        ) : null}
      </div>
      <Styled.StepsWrapper>
        {steps &&
          steps.map((step, idx) => {
            return (
              <Styled.Step
                key={idx}
                onClick={() => goToStep(idx)}
                active={Number(stepIndex) === idx}
              >
                {idx + 1}
              </Styled.Step>
            );
          })}

        {canEditTask ? (
          <>
            <Styled.Step control={true} add={true} onClick={addNewStep}>
              +
            </Styled.Step>
            <Styled.Step control={true} onClick={deleteStep}>
              -
            </Styled.Step>
          </>
        ) : null}
      </Styled.StepsWrapper>
      <div>
        {!canEditTask ? (
          <Styled.Button
            className="task-manager-stepnav-button"
            onClick={goNextStep}
            hidden={isLastStep}
          >
            NEXT
          </Styled.Button>
        ) : null}
      </div>
    </Styled.Wrapper>
  );
}
