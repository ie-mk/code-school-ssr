import {
  all,
  call,
  delay,
  select,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { adminActions, userActions } from './actions';
import api from '../api/api.min';
import moment from 'moment';
import { getUID, getEditingCourseId } from './selectors';
import { resourceActions } from './actions';

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

function* fetchUsers() {
  try {
    const users = yield api.user.fetchUsers();
    yield put(adminActions.fetchUsers.success(users));
  } catch (err) {
    yield put(adminActions.fetchUsers.failure(err));
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

function* fetchAllUsersPublicInfo() {
  try {
    const allUsersPublicInfo = yield api.resource.fetchResources(
      'usersPublicInfo',
    );
    yield put(userActions.fetchAllUsersPublicInfo.success(allUsersPublicInfo));
  } catch (err) {
    yield put(userActions.fetchAllUsersPublicInfo.failure(err));
  }
}

// ============================ COURSES =====================================

function* fetchCourses({ payload = {} }) {
  try {
    const courses = yield api.resource.fetchResources(
      'courses',
      payload.queries,
    );
    yield put(resourceActions.fetchCourses.success(courses));
  } catch (err) {
    yield put(resourceActions.fetchCourses.failure(err));
  }
}

function* fetchCourse({ payload: courseId }) {
  try {
    const course = yield api.resource.fetchResource(`courses/${courseId}`);
    yield put(resourceActions.fetchCourse.success({ [courseId]: course }));
  } catch (err) {
    yield put(resourceActions.fetchCourse.failure(err));
  }
}

function* createCourse({ payload = {} }) {
  const uid = yield select(getUID);

  const data = {
    ...payload.data,
    ownerId: uid,
    published: false,
    edited: moment().format(),
  };
  try {
    const courseId = yield api.resource.createResource('courses', data);
    yield put(resourceActions.createCourse.success());
    yield put(resourceActions.setEditableCourseId(courseId));
  } catch (err) {
    yield put(resourceActions.createCourse.failure(err));
  }
}

function* updateCourse({ payload }) {
  const courseId = yield select(getEditingCourseId);

  try {
    yield api.resource.updateResource(`courses/${courseId}`, {
      ...payload.data,
      edited: moment().format(),
    });
    yield put(resourceActions.updateCourse.success());
    yield fetchCourse({ payload: courseId });
  } catch (err) {
    yield put(resourceActions.updateCourse.failure(err));
  }
}

function* updateCourseEditedTime() {
  const courseId = yield select(getEditingCourseId);

  try {
    yield api.resource.updateResource(`courses/${courseId}`, {
      edited: moment().format(),
    });
    yield put(resourceActions.updateCourse.success());
    yield fetchCourse({ payload: courseId });
  } catch (err) {
    yield put(resourceActions.updateCourse.failure(err));
  }
}

function* deleteCourse({ payload: courseId }) {
  try {
    yield api.resource.deleteResource(`courses/${courseId}`);
    yield put(resourceActions.deleteCourse.success());
    yield put(resourceActions.deleteCourseFromState(courseId));
  } catch (err) {
    yield put(resourceActions.deleteCourse.failure(err));
  }
}

// ============================ COURSES =====================================

function* fetchTasks({ payload = {} }) {
  try {
    const tasks = yield api.resource.fetchResources('tasks', payload.queries);
    yield put(resourceActions.fetchTasks.success(tasks));
  } catch (err) {
    yield put(resourceActions.fetchTasks.failure(err));
  }
}

function* fetchTask({ payload: docId }) {
  try {
    const task = yield api.resource.fetchResource(`tasks/${docId}`);
    yield put(resourceActions.fetchTask.success({ [docId]: task }));
  } catch (err) {
    yield put(resourceActions.fetchTask.failure(err));
  }
}

function* createTask({ payload: { data } }) {
  try {
    yield api.resource.createResource('tasks', data);
    yield put(resourceActions.createTask.success());
  } catch (err) {
    yield put(resourceActions.createTask.failure(err));
  }
}

function* updateTask({ payload: { docId, data } }) {
  try {
    yield api.resource.updateResource(`tasks/${docId}`, data);
    yield put(resourceActions.updateTask.success());
  } catch (err) {
    yield put(resourceActions.updateTask.failure(err));
  }
}

function* deleteTask({ payload: docId }) {
  try {
    yield api.resource.deleteResource(`tasks/${docId}`);
    yield put(resourceActions.deleteTask.success());
  } catch (err) {
    yield put(resourceActions.deleteTask.failure(err));
  }
}

// ============================ CHAPTERS =====================================

function* fetchChapters() {
  const courseId = yield select(getEditingCourseId);
  try {
    const chapters = yield api.resource.fetchResources(
      `courses/${courseId}/chapters`,
    );

    yield put(
      resourceActions.fetchChapters.success({
        courseId,
        chapters,
      }),
    );
  } catch (err) {
    yield put(resourceActions.fetchChapters.failure(err));
  }
}

function* fetchChapter({ payload: chapterId }) {
  const courseId = yield select(getEditingCourseId);
  try {
    const result = yield api.resource.fetchResource(
      `courses/${courseId}/chapters/${chapterId}`,
    );
    yield put(
      resourceActions.fetchChapter.success({
        courseId,
        data: { [chapterId]: result },
      }),
    );
  } catch (err) {
    yield put(resourceActions.fetchChapter.failure(err));
  }
}

function* createChapter({ payload: { sequenceNr } }) {
  const uid = yield select(getUID);
  const courseId = yield select(getEditingCourseId);
  try {
    const createdChapterId = yield api.resource.createResource(
      `courses/${courseId}/chapters`,
      {
        created: moment().format(),
        parentId: courseId,
        ownerId: uid,
        sequenceNr,
      },
    );

    if (createdChapterId) {
      yield put(resourceActions.createChapter.success(createdChapterId));
      yield fetchChapter({ payload: createdChapterId });
    } else {
      throw 'create course chapter fail';
    }
  } catch (err) {
    yield put(resourceActions.createChapter.failure(err));
  }
}

function* updateChapter({ payload: { chapterId, data } }) {
  const courseId = yield select(getEditingCourseId);
  try {
    yield api.resource.updateResource(
      `courses/${courseId}/chapters/${chapterId}`,
      data,
    );
    yield put(resourceActions.updateChapter.success());
    yield fetchChapter({ payload: chapterId });
  } catch (err) {
    yield put(resourceActions.updateChapter.failure(err));
  }
}

function* deleteChapter({ payload: chapterId }) {
  const courseId = yield select(getEditingCourseId);
  try {
    yield api.resource.deleteResource(
      `courses/${courseId}/chapters/${chapterId}`,
    );
    yield put(resourceActions.deleteChapter.success());
    yield put(resourceActions.deleteChapterFromState({ courseId, chapterId }));
  } catch (err) {
    yield put(resourceActions.deleteChapter.failure(err));
  }
}

// ============================ LESSONS =====================================

function* fetchLessons({ payload: { courseId, chapterId } }) {
  try {
    const lessons = yield api.resource.fetchResources(
      `courses/${courseId}/chapters/${chapterId}/lessons`,
    );

    yield put(
      resourceActions.fetchLessons.success({
        courseId,
        chapterId,
        lessons,
      }),
    );
  } catch (err) {
    yield put(resourceActions.fetchLessons.failure(err));
  }
}

function* fetchLesson({ payload: { courseId, chapterId, lessonId } }) {
  try {
    const result = yield api.resource.fetchResource(
      `courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}`,
    );
    yield put(
      resourceActions.fetchLesson.success({
        courseId,
        chapterId,
        data: { [lessonId]: result },
      }),
    );
  } catch (err) {
    yield put(resourceActions.fetchLesson.failure(err));
  }
}

function* createLesson({ payload: { chapterId, sequenceNr } }) {
  const uid = yield select(getUID);
  const courseId = yield select(getEditingCourseId);
  try {
    const createdLessonId = yield api.resource.createResource(
      `courses/${courseId}/chapters/${chapterId}/lessons`,
      {
        created: moment().format(),
        parentId: chapterId,
        courseId: courseId,
        ownerId: uid,
        sequenceNr,
      },
    );
    if (createdLessonId) {
      yield put(resourceActions.createLesson.success(createdLessonId));
      // yield updateCourseEditedTime();
      // yield fetchCourse({ payload: courseId });
      yield fetchLesson({
        payload: { courseId, chapterId, lessonId: createdLessonId },
      });
    } else {
      console.error('Create lesson failure');
    }
  } catch (err) {
    yield put(resourceActions.createLesson.failure(err));
  }
}

function* updateLesson({ payload: { chapterId, lessonId, data } }) {
  const courseId = yield select(getEditingCourseId);
  try {
    yield api.resource.updateResource(
      `courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}`,
      data,
    );
    // yield updateCourseEditedTime();
    // yield fetchCourse({ payload: courseId });
    yield put(resourceActions.updateLesson.success());
    yield fetchLesson({ payload: { courseId, chapterId, lessonId } });
  } catch (err) {
    yield put(resourceActions.updateLesson.failure(err));
  }
}

function* deleteLesson({ payload: { courseId, chapterId, lessonId } }) {
  try {
    yield api.resource.deleteResource(
      `courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}`,
    );
    yield put(resourceActions.deleteLesson.success());
    // yield updateCourseEditedTime();
    // yield fetchCourse({ payload: courseId });
    yield put(
      resourceActions.deleteLessonFromState({ courseId, chapterId, lessonId }),
    );
  } catch (err) {
    yield put(resourceActions.deleteLesson.failure(err));
  }
}

// ============================ Messages =====================================

function* fetchMessages({ payload }) {
  try {
    const messages = yield api.resource.fetchResources(
      'messages',
      payload.queries,
    );
    yield put(resourceActions.fetchMessages.success(messages));
  } catch (err) {
    yield put(resourceActions.fetchMessages.failure(err));
  }
}

function* fetchMessage({ payload: docId }) {
  try {
    const result = yield api.resource.fetchResource(`messages/${docId}`);
    yield put(resourceActions.fetchMessage.success({ [docId]: result }));
  } catch (err) {
    yield put(resourceActions.fetchMessage.failure(err));
  }
}

function* createMessage({ payload }) {
  const uid = yield select(getUID);
  const data = {
    ...payload.data,
    senderId: uid,
    created: moment().format(),
  };
  try {
    yield api.resource.createResource('messages', data);
    yield put(resourceActions.createMessage.success());
  } catch (err) {
    yield put(resourceActions.createMessage.failure(err));
  }
}

function* updateMessage({ payload: { docId, data } }) {
  try {
    yield api.resource.updateResource(`messages/${docId}`, data);
    yield put(resourceActions.updateMessage.success());
  } catch (err) {
    yield put(resourceActions.updateMessage.failure(err));
  }
}

function* deleteMessage({ payload: docId }) {
  try {
    yield api.resource.deleteResource(`messages/${docId}`);
    yield put(resourceActions.deleteMessage.success());
  } catch (err) {
    yield put(resourceActions.deleteMessage.failure(err));
  }
}

// ============================ Learning Path =====================================

function* fetchLearningPaths({ payload = {} }) {
  try {
    const messages = yield api.resource.fetchResources(
      'learningPaths',
      payload.queries,
    );
    yield put(resourceActions.fetchLearningPaths.success(messages));
  } catch (err) {
    yield put(resourceActions.fetchLearningPaths.failure(err));
  }
}

function* fetchLearningPath({ payload: docId }) {
  try {
    const result = yield api.resource.fetchResource(`learningPaths/${docId}`);
    yield put(resourceActions.fetchLearningPath.success({ [docId]: result }));
  } catch (err) {
    yield put(resourceActions.fetchLearningPath.failure(err));
  }
}

function* createLearningPath({ payload: { data } }) {
  if (data.images) {
    data.imageSavePath = 'images/learningPaths';
  }
  try {
    const learningPathId = yield api.resource.createResource(
      'learningPaths',
      data,
    );

    yield put(resourceActions.createLearningPath.success());
    yield fetchLearningPath({ payload: learningPathId });
  } catch (err) {
    yield put(resourceActions.createLearningPath.failure(err));
  }
}

function* updateLearningPath({ payload: { docId, data } }) {
  if (data.imagesToUpload) {
    data.imageUploadPath = 'images/learningPaths';
  }
  debugger;
  try {
    yield api.resource.updateResource(`learningPaths/${docId}`, data);
    yield put(resourceActions.updateLearningPath.success());
    yield fetchLearningPath({
      payload: docId,
    });
  } catch (err) {
    yield put(resourceActions.updateLearningPath.failure(err));
  }
}

function* deleteLearningPath({ payload: id }) {
  try {
    yield api.resource.deleteResource(`learningPaths/${id}`);
    yield put(resourceActions.deleteLearningPath.success());
    yield put(resourceActions.deleteLearningPathFromState(id));
  } catch (err) {
    yield put(resourceActions.deleteLearningPath.failure(err));
  }
}

function* rootSaga() {
  // ========================== USER ===============================
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
  yield all([takeLatest(userActions.fetchUsers.request.type, fetchUsers)]);
  yield all([
    takeLatest(
      userActions.fetchAllUsersPublicInfo.request.type,
      fetchAllUsersPublicInfo,
    ),
  ]);

  // ========================== COURSES ===============================
  yield all([
    takeLatest(resourceActions.fetchCourses.request.type, fetchCourses),
  ]);
  yield all([
    takeLatest(resourceActions.fetchCourse.request.type, fetchCourse),
  ]);
  yield all([
    takeLatest(resourceActions.createCourse.request.type, createCourse),
  ]);
  yield all([
    takeLatest(resourceActions.updateCourse.request.type, updateCourse),
  ]);
  yield all([
    takeLatest(resourceActions.deleteCourse.request.type, deleteCourse),
  ]);
  // ========================== CHAPTERS ===============================
  yield all([
    takeEvery(resourceActions.fetchChapters.request.type, fetchChapters),
  ]);
  yield all([
    takeLatest(resourceActions.fetchChapter.request.type, fetchChapter),
  ]);
  yield all([
    takeLatest(resourceActions.createChapter.request.type, createChapter),
  ]);
  yield all([
    takeLatest(resourceActions.updateChapter.request.type, updateChapter),
  ]);
  yield all([
    takeLatest(resourceActions.deleteChapter.request.type, deleteChapter),
  ]);
  // ========================== LESSONS ===============================
  yield all([
    takeEvery(resourceActions.fetchLessons.request.type, fetchLessons),
  ]);
  yield all([
    takeLatest(resourceActions.fetchLesson.request.type, fetchLesson),
  ]);
  yield all([
    takeLatest(resourceActions.createLesson.request.type, createLesson),
  ]);
  yield all([
    takeLatest(resourceActions.updateLesson.request.type, updateLesson),
  ]);
  yield all([
    takeLatest(resourceActions.deleteLesson.request.type, deleteLesson),
  ]);
  // ========================== TASKS ===============================
  yield all([takeLatest(resourceActions.fetchTasks.request.type, fetchTasks)]);
  yield all([takeLatest(resourceActions.fetchTask.request.type, fetchTask)]);
  yield all([takeLatest(resourceActions.createTask.request.type, createTask)]);
  yield all([takeLatest(resourceActions.updateTask.request.type, updateTask)]);
  yield all([takeLatest(resourceActions.deleteTask.request.type, deleteTask)]);
  // ========================== MESSAGES ===============================
  yield all([
    takeLatest(resourceActions.fetchMessages.request.type, fetchMessages),
  ]);
  yield all([
    takeLatest(resourceActions.fetchMessage.request.type, fetchMessage),
  ]);
  yield all([
    takeLatest(resourceActions.createMessage.request.type, createMessage),
  ]);
  yield all([
    takeLatest(resourceActions.updateMessage.request.type, updateMessage),
  ]);
  yield all([
    takeLatest(resourceActions.deleteMessage.request.type, deleteMessage),
  ]);
  // ========================== LEARNING PATH ===============================
  yield all([
    takeLatest(
      resourceActions.fetchLearningPaths.request.type,
      fetchLearningPaths,
    ),
  ]);
  yield all([
    takeLatest(
      resourceActions.fetchLearningPath.request.type,
      fetchLearningPath,
    ),
  ]);
  yield all([
    takeLatest(
      resourceActions.createLearningPath.request.type,
      createLearningPath,
    ),
  ]);
  yield all([
    takeLatest(
      resourceActions.updateLearningPath.request.type,
      updateLearningPath,
    ),
  ]);
  yield all([
    takeLatest(
      resourceActions.deleteLearningPath.request.type,
      deleteLearningPath,
    ),
  ]);
  // ========================= ADMIN USERS =========================
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
}

export default rootSaga;
