import store from '../store';

/**
 * Processing
 */

export function processing(module = 'App', operation = 'default') {
  store.dispatch('Activity/processing', `${module}.${operation}`); // `${module}.${operation}`
}

export function done(module = 'App', operation = 'default') {
  store.dispatch('Activity/done', `${module}.${operation}`); // `${module}.${operation}`
}

/**
 * Notification and Alerts
 */

const NOTIFICATION_TYPE = {
  success: '',
  failure: '',
  warning: '',
  info: '',
  default: '',
};

export function toast(type, title) {
  // @TODO
}

export function status(type, label) {
  // @TODO
}

export function alert(type, title, content) {
  // @TODO
}

export function confirm(title, content, options = {}) {
  // @TODO
}
