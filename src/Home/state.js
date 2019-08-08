import { AuthService } from '../Auth/AuthService';

import { API_ENDPOINT } from '../common/config';

import * as FetchHelper from '../common/fetch.helper';

import * as Activity from '../Shared/Activity';

/* eslint no-param-reassign: ["error", { "props": false }] */

const MODULE = 'Home';

const state = {
  namespaced: true,

  state: {
    post: null,
  },

  mutations: {
    post: (state, value = null) => {
      state.post = value;
    },
  },

  actions: {
    'post.fetch': (context) => {
      Activity.processing(MODULE, 'operation');

      return fetch(`${API_ENDPOINT}/client/post`, {
        headers: {
          Authorization: `Bearer ${AuthService.getAccessToken()}`,
        },
      })
        .then(FetchHelper.ResponseHandler, FetchHelper.ErrorHandler)
        .then(async ({ ...result }) => {
          const { data } = result;
          context.commit('post', data);
          return data;
        })
        .finally(() => Activity.done(MODULE, 'operation'));
    },

    'post.create': (context, post) => {
      Activity.processing(MODULE, 'operation');

      return fetch(`${API_ENDPOINT}/ask/create`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AuthService.getAccessToken()}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          post,
        }),
      })
        .then(FetchHelper.ResponseHandler, FetchHelper.ErrorHandler)
        .then(async ({ ...result }) => result.post)
        .finally(() => Activity.done(MODULE, 'operation'));
    },

    'post.edit': (context, post) => {
      Activity.processing(MODULE, 'operation');

      return fetch(`${API_ENDPOINT}/client/post/${post.id}/edit`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AuthService.getAccessToken()}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          post,
        }),
      })
        .then(FetchHelper.ResponseHandler, FetchHelper.ErrorHandler)
        .then(async ({ ...result }) => result.post)
        .finally(() => Activity.done(MODULE, 'operation'));
    },

    'post.remove': (context, postId) => {
      Activity.processing(MODULE, 'operation');

      return fetch(`${API_ENDPOINT}/client/post/${postId}/delete`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AuthService.getAccessToken()}`,
        },
      })
        .then(FetchHelper.ResponseHandler, FetchHelper.ErrorHandler)
        .then(async ({ ...result }) => result.post)
        .finally(() => Activity.done(MODULE, 'operation'));
    },
  },

  getters: {},
};

export default state;
