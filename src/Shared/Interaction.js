export const SUCCESS = 'success';
export const FAILURE = 'failure';
export const WARNING = 'warning';
export const INFO = 'info';

export const TEXT_OK = 'OK';
export const TEXT_CANCEL = 'Cancel';
export const TEXT_RETURN = 'Return';

const DIALOG_TYPE = {
  [SUCCESS]: '',
  [FAILURE]: '',
  [WARNING]: '',
  [INFO]: '',
  default: '',
};

export function toast(type, content, _options = {}) {
  // @TODO
}

export function status(type, content, _options = {}) {
  // @TODO
}

export function alert(title, content, _options = {}) {
  // @TODO
}

export function confirm(title, content, _options = {}) {
  // @TODO
}

export function confirmWithNeutral(title, content, _options = {}) {
  // @TODO
}
