import { actions as notifActions } from 'redux-notifications';
import { getOrCreateStore } from '../store/store';

const store = getOrCreateStore();

const { notifSend } = notifActions;
const { dispatch } = store;

export const logIsServer = compName => {
  console.log(`--SERVER-rendered-${compName}: `, typeof window === 'undefined');
};

export function messageOK(message) {
  console.log('messageOK called');
  notifSend({
    message,
    kind: 'success',
    dismissAfter: 3000,
  })(dispatch);
}

export function messageInfo(message) {
  notifSend({
    message,
    kind: 'info',
    dismissAfter: 3000,
  })(dispatch);
}

export function messageWarning(message) {
  notifSend({
    message,
    kind: 'warning',
    dismissAfter: 3000,
  })(dispatch);
}

export function messageDanger(message) {
  notifSend({
    message,
    kind: 'danger',
    dismissAfter: 3000,
  })(dispatch);
}
