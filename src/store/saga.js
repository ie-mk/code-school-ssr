import {
  all,
  call,
  delay,
  select,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { adActions, userActions } from './actions';
import api from '../api/api.min';
import moment from 'moment';
import { getUID } from './selectors';
import Router from 'next/router';

function* handleLoginFlow({ payload: user }) {
  const uid = user && user.uid;
  if (!uid) return;

  try {
    const profile = yield api.user.fetchUserProfile(uid);

    if (profile) {
      const profile = yield api.user.fetchUserProfile(uid);
      const permissions = yield api.user.fetchUserPermissions(uid);

      yield put(userActions.fetchUserProfile.success(profile));
      yield put(userActions.fetchUserPermissions.success(permissions));
      yield put(userActions.setIsFirstLogin(false));
    } else {
      yield put(userActions.setIsFirstLogin(true));
      const firstName = user.displayName.split(' ')[0];
      const lastName = user.displayName.split(' ')[1];
      // remove falsy values from object otherwise firebase will complain
      for (var k in user) {
        if (user.hasOwnProperty(k) && !user[k]) {
          delete user[k];
        }
      }

      yield api.user.createUserProfile({
        ...user,
        firstName,
        lastName,
        firstLogin: moment().format(),
        lastLogin: moment().format(),
      });
    }
  } catch (err) {
    yield put(userActions.fetchUserProfile.failure(err));
  }
}

function* fetchUserProfile({ payload: uid }) {
  try {
    const profile = yield api.user.fetchUserProfile(uid);
    yield put(userActions.fetchUserProfile.success(profile));
  } catch (err) {
    yield put(userActions.fetchUserProfile.failure(err));
  }
}

function* updateUserProfilePicture({ payload: { uid, image } }) {
  try {
    yield api.user.updateProfilePicture(uid, image);
    yield put(userActions.updateUserProfilePicture.success());
    yield fetchUserProfile({ payload: uid });
  } catch (err) {
    yield put(userActions.updateUserProfile.failure(err));
  }
}

// payload data should include uid
function* updateUserProfile({ payload }) {
  try {
    yield api.user.updateUserProfile(payload);
    yield fetchUserProfile({ payload: payload.uid });
  } catch (err) {
    yield put(userActions.updateUserProfile.failure(err));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(userActions.fetchUserProfile.request.type, fetchUserProfile),
  ]);
  yield all([
    takeLatest(userActions.updateUserProfile.request.type, updateUserProfile),
  ]);
  yield all([
    takeLatest(
      userActions.updateUserProfilePicture.request.type,
      updateUserProfilePicture,
    ),
  ]);
  yield all([
    takeLatest(userActions.saveUserInfoFromLoginProvider, handleLoginFlow),
  ]);
}

export default rootSaga;
