import { createAction } from 'redux-actions';

const createAsyncAction = prefix =>
  ['request', 'success', 'failure'].reduce((acc, str) => {
    const type = `${prefix}/${str.toUpperCase()}`;
    acc[str] = createAction(type);
    acc[str].type = type;
    return acc;
  }, {});

export const adminActions = {
  fetchAds: createAsyncAction('admin-load-ads'),
  fetchUsers: createAsyncAction('admin-fetch-users'),
  deleteUser: createAsyncAction('admin-delete-user'),
  fetchUserPermissions: createAsyncAction('admin-fetch-user-permissions'),
  addUserPermission: createAsyncAction('admin-add-user-permission'),
  createAdFromJson: createAsyncAction('admin-create-add-from-json'),
};
