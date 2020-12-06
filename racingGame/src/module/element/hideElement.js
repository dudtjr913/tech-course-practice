import {$countWrapper, $resultWrapper} from '../utils.js';

export const hideCountElement = () => {
  $countWrapper.style.display = 'none';
};

export const hideResultElement = () => {
  $resultWrapper.style.display = 'none';
};
