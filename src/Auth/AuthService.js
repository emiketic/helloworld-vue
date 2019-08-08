import { EventEmitter } from '../common/events';

import { API_ENDPOINT } from '../common/config';
import * as FetchHelper from '../common/fetch.helper';

export const AuthServiceImpl = class AuthService {
  events = new EventEmitter();

  username = '';

  password = '';

  _access_token = null;

  getAccessToken() {
    return this._access_token;
  }

  async _loadSession() {
    this._access_token = localStorage.getItem('auth.access_token') || null;
  }

  async _saveSession(access_token) {
    this._access_token = access_token || null;
    localStorage.setItem('auth.access_token', this._access_token);
  }

  async _clearSession() {
    this._access_token = null;
    localStorage.removeItem('auth.access_token');
  }

  async initialize() {
    await this._loadSession();
  }

  isAuthenticated() {
    return !!this._access_token;
  }

  login(username, password) {
    return fetch(`${API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(FetchHelper.ResponseHandler, FetchHelper.ErrorHandler)
      .then(async ({ access_token, ...result }) => {
        await this._saveSession(access_token);
        await this.events.emitAsync('login');
        return result;
      });
  }

  async logout() {
    await this.events.emitAsync('logout');
    await this._clearSession();
  }

  signup(name, email, password) {
    const user = {
      name,
      email,
      password,
    };
    return fetch(`${API_ENDPOINT}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
        client: {},
      }),
    })
      .then(FetchHelper.ResponseHandler, FetchHelper.ErrorHandler)
      .then(({ access_token, ...result }) => {
        this._saveSession(access_token);
        return result;
      });
  }

  initiatePasswordReset(email) {
    return fetch(`${API_ENDPOINT}/auth/password-reset/initiate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    }).then(FetchHelper.ResponseHandler, FetchHelper.ErrorHandler);
  }
};

export const AuthService = new AuthServiceImpl();

if (process.env.NODE_ENV === 'development') {
  global.AuthService = AuthService;
}
