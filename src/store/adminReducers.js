import { handleActions } from 'redux-actions';
import { adminActions } from './actions';

export const adminReducer = handleActions(
  {
    [adminActions.fetchUsers.request.type]: state => ({
      ...state,
      loading: true,
    }),
    [adminActions.fetchUsers.success.type]: (state, { payload }) => ({
      ...state,
      loading: false,
      users: payload,
    }),
    [adminActions.fetchUsers.failure.type]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),

    //=================================================================//

    [adminActions.fetchUserPermissions.request.type]: state => ({
      ...state,
      loading: true,
    }),
    [adminActions.fetchUserPermissions.success.type]: (state, { payload }) => ({
      ...state,
      loading: false,
      permissions: payload
        ? { ...state.permissions, ...{ [payload.uid]: payload.data } }
        : state.permissions,
    }),
    [adminActions.fetchUserPermissions.failure.type]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),

    //=================================================================//

    [adminActions.addUserPermission.request.type]: state => ({
      ...state,
      loading: true,
    }),
    [adminActions.addUserPermission.success.type]: state => ({
      ...state,
      loading: false,
    }),
    [adminActions.addUserPermission.failure.type]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),

    //=================================================================//

    [adminActions.deleteUser.request.type]: state => ({
      ...state,
      loading: true,
    }),
    [adminActions.deleteUser.success.type]: (state, payload) => {
      const users = { ...state.users };
      delete users[payload];

      return {
        ...state,
        users,
        loading: false,
      };
    },
    [adminActions.deleteUser.failure.type]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
  { users: {}, loading: null, error: null },
);
