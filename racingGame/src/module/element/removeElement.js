import {$resultWrapper} from '../utils.js';

export const onRemoveResultElement = () => {
  const $restartButton = $resultWrapper.querySelector('#restart-btn');
  while ($resultWrapper.querySelector('div')) {
    $resultWrapper.removeChild($resultWrapper.querySelector('div'));
  }
  $resultWrapper.removeChild($restartButton);
};
