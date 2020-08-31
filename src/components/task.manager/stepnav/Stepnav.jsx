import React from 'react';
import './Stepnav.scss';

export function Stepnav(props) {
  const { params, task } = props;
  const stepParam = params.get('step');
  const solutionParam = params.get('solution');
  const stepIndex = Number(stepParam);
  const solutionIndex = Number(solutionParam);
  const { steps } = task;
  const step = steps[stepIndex];
  const { solutions } = step;

  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === steps.length - 1;
  const isFirstSolution = solutionIndex === 0;
  const isLastSolution = solutionIndex === solutions.length - 1;

  function goPrevStep() {
    params.set('step', stepIndex - 1);
  }

  function goSolutions() {
    params.set('solution', 0);
  }

  function goNextStep() {
    params.set('step', stepIndex + 1);
  }

  function goPrevSolution() {
    params.set('solution', solutionIndex - 1);
  }

  function goTask() {
    params.delete('solution');
  }

  function goNextSolution() {
    params.set('solution', solutionIndex + 1);
  }

  if (solutionParam) {
    return (
      <div className="task-manager-stepnav">
        <button onClick={goPrevSolution} hidden={isFirstSolution}>
          Previous
        </button>
        <button onClick={goTask}>Task</button>
        <button onClick={goNextSolution} hidden={isLastSolution}>
          Next
        </button>
      </div>
    );
  }

  return (
    <div className="task-manager-stepnav">
      <button onClick={goPrevStep} hidden={isFirstStep}>
        Previous
      </button>
      <button onClick={goSolutions}>Solutions</button>
      <button onClick={goNextStep} hidden={isLastStep}>
        Next
      </button>
    </div>
  );
}
