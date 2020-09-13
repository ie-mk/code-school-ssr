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

export const getPermissions = state => state.user.permissions.data;

export const canEditTask = createSelector(getPermissions, perm => {
  return perm.author || perm.admin;
});

export const isRegistered = createSelector(getPermissions, perm => {
  return perm.registered;
});

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

export const getChapters = state => state.courses.chapters;

export const getChaptersByCourseId = createSelector(getChapters, chapters => {
  const result = {};
  Object.keys(chapters)
    .sort((a, b) => chapters[a].sequenceNr - chapters[b].sequenceNr)
    .map(id => {
      const chapter = chapters[id];
      const courseId = chapter.parentId;

      if (!result[courseId]) {
        result[courseId] = {};
      }

      result[courseId][id] = {
        id,
        ...chapter,
      };
    });

  return result;
});

export const getLessons = state => state.courses.lessons;

export const getLessonsByChapterId = createSelector(getLessons, lessons => {
  const result = {};
  Object.keys(lessons)
    .sort((a, b) => lessons[a].sequenceNr - lessons[b].sequenceNr)
    .map(id => {
      const lesson = lessons[id];
      const chapterId = lesson.parentId;

      if (!result[chapterId]) {
        result[chapterId] = {};
      }

      result[chapterId][id] = {
        id,
        ...lesson,
      };
    });

  return result;
});

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
