import { createSelector } from 'reselect';

export const getUserSelector = state => state.user;

export const getUserProfile = state => state.user.profile;

export const getUsers = state => state.admin.users;

export const getUID = state =>
  state.user &&
  state.user.loginProviderData &&
  state.user.loginProviderData.uid;

export const getAllUsersPublicInfo = state => state.user.allUsersPublicInfo;

export const getUserPublicInfo = createSelector(
  getUID,
  getAllUsersPublicInfo,
  (uid, publicInfo) => {
    return publicInfo[uid];
  },
);

export const getPermissions = state => state.user.permissions;

export const getUserProfileSelector = state => state.user && state.user.profile;

export const getCourses = state => state.courses.data;

export const getCoursesByLevel = createSelector(getCourses, courses => {
  const result = {
    beginner: {},
    intermediate: {},
    advanced: {},
  };

  Object.keys(courses).forEach(key => {
    const course = courses[key];
    if (result[course.level]) {
      result[course.level][key] = course;
    }
  });

  return result;
});

export const getEditingCourseId = state => state.courses.editableCourseId;

export const getEditableCourseData = createSelector(
  getCourses,
  getEditingCourseId,
  (courses, editableCourseId) => {
    return courses[editableCourseId] || {};
  },
);

export const getCourseChapters = state => state.courses.chapters;

export const isStaff = state =>
  state.user.permissions.data &&
  (state.user.permissions.data.admin || state.user.permissions.data.author);

export const getLearningPaths = state => state.learningPaths.data;

export const getSortedMessages = state =>
  state.messages &&
  state.messages.data &&
  Object.values(state.messages.data).sort(
    (a, b) => new Date(b.created) - new Date(a.created),
  );
