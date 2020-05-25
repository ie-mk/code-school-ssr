import { handleActions } from 'redux-actions';
import { userActions, layoutActions } from './actions';

export const userReducer = handleActions(
  {
    [userActions.saveUserInfoFromLoginProvider]: (state, action) => ({
      ...state,
      loginProviderData: action.payload,
    }),
    [userActions.setLanguage]: (state, action) => ({
      ...state,
      userLanguage: action.payload,
    }),

    /*===============================================================*/
    [userActions.fetchUserPermissions.success.type]: state => ({
      ...state,
      loading: true,
    }),
    [userActions.fetchUserPermissions.success.type]: (state, action) => ({
      ...state,
      loading: false,
      permissions: action.payload,
    }),
    [userActions.fetchUserPermissions.failure.typ]: (state, action) => ({
      ...state,
      loading: false,
      fetchPermissionsError: action.payload,
    }),

    /*===============================================================*/

    [userActions.fetchUserProfile.request.type]: state => ({
      ...state,
      loading: true,
    }),
    [userActions.fetchUserProfile.success.type]: (state, action) => ({
      ...state,
      loading: false,
      profile: action.payload,
    }),
    [userActions.fetchUserProfile.failure.type]: (state, action) => ({
      ...state,
      loading: false,
      fetchProfileError: action.payload,
    }),

    /*===============================================================*/

    [userActions.updateUserProfile.request]: state => ({
      ...state,
      loading: true,
    }),
    [userActions.updateUserProfile.success]: (state, action) => ({
      ...state,
      loading: false,
      profile: action.payload,
    }),
    [userActions.updateUserProfile.failure]: (state, action) => ({
      ...state,
      loading: false,
      saveProfileError: action.payload,
    }),

    /*===============================================================*/

    [userActions.updateUserProfilePicture.request]: state => ({
      ...state,
      loadingPicture: true,
    }),
    [userActions.updateUserProfilePicture.success]: state => ({
      ...state,
      loadingPicture: false,
    }),
    [userActions.updateUserProfilePicture.failure]: (state, action) => ({
      ...state,
      loadingPicture: false,
      saveProfilePictureError: action.payload,
    }),

    /*===============================================================*/

    [userActions.adToFavourites]: (state, action) => ({
      ...state,
      favourites: {
        ...state.favourites,
        ...action.payload,
      },
    }),

    /*===============================================================*/

    [userActions.resetUser]: state => ({
      ...state,
      loginProviderData: {},
      profile: {},
      permissions: {},
    }),
    [userActions.setIsFirstLogin]: (state, action) => ({
      ...state,
      isFirstLogin: action.payload,
    }),
  },
  {
    loginProviderData: {},
    profile: {},
    permissions: {},
    loading: false,
    loadingPicture: false,
    error: null,
    isFirstLogin: null,
  },
);

export const layoutReducer = handleActions(
  {
    [layoutActions.setScrollFromTop]: (state, action) => ({
      ...state,
      scrollFromTop: action.payload,
    }),
  },
  {
    scrollFromTop: 0,
  },
);
