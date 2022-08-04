// https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
export function debounce(func, wait, immediate) {
  let timeout;
  return function _debounce() {
    const context = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export const isSlashCommand = (message) => {
  return (message.indexOf("/") > -1);
}

export const parseSlashCommand = (message) => {
  const splitMessage = message.split(" ");
  const command = splitMessage[0].substring(1);
  const params = message.split(`${splitMessage[0]} `)[1];
  return [command, { commandInput: params }];
}

export default debounce;
