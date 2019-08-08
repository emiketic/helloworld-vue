import { AuthService } from './AuthService';

import * as Activity from '../Shared/Activity';

/* eslint no-param-reassign: ["error", { "props": false }] */

const MODULE = 'Auth';

const state = {
  namespaced: true,

  state: {
    authenticated: false,
    user: null,
  },

  mutations: {
    authenticate: (state, user = null) => {
      state.user = user;
      state.authenticated = true;
    },

    deauthenticate: (state) => {
      state.user = null;
      state.authenticated = false;
    },
  },

  actions: {
    login: (context, { username, password }) => {
      Activity.processing(MODULE, 'login');
      return AuthService.login(username, password)
        .then(({ user }) => {
          context.commit('authenticate', user);
          return user;
        })
        .finally(() => Activity.done(MODULE, 'login'));
    },

    signup: (context, { name, email, password }) => {
      Activity.processing(MODULE, 'signup');
      return AuthService.signup(name, email, password)
        .then(({ user }) => {
          context.commit('authenticate', user);
          return user;
        })
        .finally(() => Activity.done(MODULE, 'signup'));
    },

    initiatePasswordReset: (context, { email }) => {
      Activity.processing(MODULE, 'initiatePasswordReset');
      return AuthService.initiatePasswordReset(email).finally(() => Activity.done(MODULE, 'initiatePasswordReset'));
    },

    logout: (context) => {
      Activity.processing(MODULE, 'logout');
      return AuthService.logout()
        .then(() => {
          context.commit('deauthenticate');
          context.commit('resetDrawers');
        })
        .finally(() => Activity.done(MODULE, 'logout'));
    },
  },

  getters: {},
};

export default state;
