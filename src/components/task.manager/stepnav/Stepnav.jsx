import React from 'react';
import './Stepnav.styles';
import { useRouter } from 'next/router';
import Styled from './Stepnav.styles';

export function Stepnav({ task }) {
  const router = useRouter();
  const { query } = router;
  const { stepIndex = 0 } = query;

  const { steps } = task;
  // const step = steps[Number(stepIndex)];
  // const { solutions } = step;

  const isFirstStep = Number(stepIndex) === 0;
  const isLastStep = Number(stepIndex) === steps.length - 1;
  // const isFirstSolution = Number(solutionIndex) === 0;
  // const isLastSolution = Number(solutionIndex) === solutions.length - 1;

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

  // function goSolutions() {
  //   query.solutionIndex = 0;
  //   updateQuery();
  // }
  //
  // function goPrevSolution() {
  //   query.solutionIndex = Number(solutionIndex) - 1;
  //   updateQuery();
  // }
  //
  // function goNextSolution() {
  //   query.solutionIndex = Number(solutionIndex) + 1;
  //   updateQuery();
  // }

  // function goTask() {
  //   delete query.solutionIndex;
  //   updateQuery();
  // }

  // if (solutionIndex) {
  //   return (
  //     <div className="task-manager-stepnav">
  //       <button onClick={goPrevSolution} hidden={isFirstSolution}>
  //         Previous
  //       </button>
  //       <button onClick={goTask}>Task</button>
  //       <button onClick={goNextSolution} hidden={isLastSolution}>
  //         Next
  //       </button>
  //     </div>
  //   );
  // }

  console.log('-----stepIndex: ', stepIndex);

  return (
    <Styled.Wrapper>
      <div>
        <Styled.Button onClick={goPrevStep} hidden={isFirstStep}>
          PREVIOUS
        </Styled.Button>
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
      </Styled.StepsWrapper>
      <div>
        <Styled.Button
          className="task-manager-stepnav-button"
          onClick={goNextStep}
          hidden={isLastStep}
        >
          NEXT
        </Styled.Button>
      </div>
    </Styled.Wrapper>
  );
}
