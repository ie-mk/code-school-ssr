import React from 'react';
//import { BrowserRouter, useHistory, useLocation } from 'react-router-dom';
import Split from 'react-split';
//import { useSearchParams } from './utils';
import { Desc } from './desc';
import { Stepnav } from './stepnav';
import { Sandpack } from './sandpack';
import './Task.manager.scss';
import { useRouter } from 'next/router';

function TaskManager(props) {
  //const history = useHistory();
  //const location = useLocation();
  // useSearchParams siulau perziuret, nes cia visiskai is mano lempos rasytas, gal kazka geresnio zinai ar sugalvosi pats :DD
  //const params = useSearchParams(location.search, defaultParams);
  //const stepParam = params.get('step');
  //const solutionParam = params.get('solution');

  const router = useRouter();
  const {
    query: { stepIndex, solutionIndex },
  } = router;

  const { task, onFileChange } = props;
  const { steps } = task;

  const step = steps[(stepIndex && Number(stepIndex)) || 0];
  const { solutions } = step;
  const solution = solutionIndex && solutions[Number(solutionIndex)];
  const $step = solution || step;

  //useEffect(pushParams, [params]);

  // console.log('----params: ', params);
  // console.log('------task: ', task);
  // console.log('------stepParam: ', stepParam);
  //
  // function pushParams() {
  //   history.push(params.toString());
  // }

  return (
    <Split className="task-manager" sizes={[20, 80]} gutterSize={5}>
      <div className="task-manager-left">
        <Stepnav task={task} />
        <Desc step={$step} />
      </div>
      <Sandpack step={$step} onFileChange={onFileChange} />
    </Split>
  );
}

// var defaultParams = {
//   step: 0,
// };

// function WithRouting(props) {
//   return (
//     <BrowserRouter>
//       <TaskManager {...props} />
//     </BrowserRouter>
//   );
// }

export default TaskManager;
