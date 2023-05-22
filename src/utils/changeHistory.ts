import GLOBAL_CONSTANT from 'constants/globalConstant';
import { SET_SCREEN_CLASS } from 'slices';
import { store } from 'store';
import { ChangeHistoryProps } from 'types';
import history from 'utils/history';

const ChangeHistory = ({ action, path, routeState }: ChangeHistoryProps) => {
  document.body.className = 'disabled';
  switch (action) {
    case 'push':
      store.dispatch(SET_SCREEN_CLASS({ payload: 'fadeOutLeft' }));
      setTimeout(() => {
        store.dispatch(SET_SCREEN_CLASS({ payload: 'SET_SCREEN_CLASS' }));
      }, GLOBAL_CONSTANT.ROUTE_CHANGE_TRANSITION_TIME);
      break;

    case 'back':
      store.dispatch(SET_SCREEN_CLASS({ payload: 'fadeOutRight' }));
      setTimeout(() => {
        store.dispatch(SET_SCREEN_CLASS({ payload: '' }));
      }, GLOBAL_CONSTANT.ROUTE_CHANGE_TRANSITION_TIME);
      break;

    default:
      break;
  }
  setTimeout(() => {
    document.body.className = '';
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    path ? history.push(path, routeState) : history.back();
    if (action === 'back' && path) {
      store.dispatch(SET_SCREEN_CLASS({ payload: 'fadeInLeft' }));
    }
  }, GLOBAL_CONSTANT.ROUTE_CHANGE_TRANSITION_TIME);
};

export default ChangeHistory;
