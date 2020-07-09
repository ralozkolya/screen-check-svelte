export function fullscreen(cb, el) {
  el = el || document.body;
  const func = (el.requestFullscreen
    || el.webkitRequestFullscreen
    || el.mozRequestFullScreen
    || el.msRequestFullscreen).bind(el);

  return thenIfAvailable(func(), cb);
}

export function isFullScreen() {
  return document.fullscreenElement
    || document.webkitFullscreenElement
    || document.mozFullScreenElement
    || document.msFullscreenElement;
}

export function exitFullscreen(cb) {
  const func = (document.exitFullscreen
  || document.webkitExitFullscreen
  || document.mozCancelFullScreen
  || document.msExitFullscreen).bind(document);

  return thenIfAvailable(func(), cb);
}

function thenIfAvailable(pr, cb) {
  return pr && pr.then ? pr.then(cb) : cb();
}