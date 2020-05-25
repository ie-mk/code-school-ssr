import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects';
import { adminActions } from './actions';
import api from '../../api';

function* fetchUsers() {
  try {
    const res = yield api.user.fetchUsers();
    yield put(adminActions.fetchUsers.success(res));
  } catch (e) {
    yield put(adminActions.fetchUsers.failure(e));
  }
}

function* fetchUserPermissions({ payload }) {
  try {
    const res = yield api.user.fetchUserPermissions(payload);
    yield put(adminActions.fetchUserPermissions.success(res));
  } catch (e) {
    yield put(adminActions.fetchUserPermissions.failure(e));
  }
}

function* addUserPermission({ payload }) {
  try {
    yield api.user.addUserPermission(payload);
    yield put(adminActions.addUserPermission.success());
    yield fetchUserPermissions({ payload: payload.uid });
  } catch (e) {
    yield put(adminActions.addUserPermission.failure(e));
  }
}

function* createAddFromJson({ payload }) {
  try {
    yield api.ad.createAdFromJson(payload);
    yield put(adminActions.createAdFromJson.success());
    yield put(adminActions.fetchAds.request());
  } catch (e) {
    yield put(adminActions.createAdFromJson.failure(e));
  }
}

function* deleteUser({ payload }) {
  try {
    yield api.user.deleteUser(payload);
    yield put(adminActions.deleteUser.success(payload));
    yield fetchUsers();
  } catch (e) {
    yield put(adminActions.deleteUser.failure(e));
  }
}

function* rootSaga() {
  yield all([takeLatest(adminActions.fetchUsers.request.type, fetchUsers)]);
  yield all([takeLatest(adminActions.deleteUser.request.type, deleteUser)]);
  yield all([
    takeLatest(
      adminActions.fetchUserPermissions.request.type,
      fetchUserPermissions,
    ),
  ]);
  yield all([
    takeLatest(adminActions.addUserPermission.request.type, addUserPermission),
  ]);
  yield all([
    takeLatest(adminActions.createAdFromJson.request.type, createAddFromJson),
  ]);
}

export default rootSaga;
