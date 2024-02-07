function addEventListener(eventName, handler, el) {
  el.addEventListener(eventName, handler);

  return handler;
}

function addEventListeners(listeners = {}, el) {
  const addedListeners = {};
  Object.entries(listeners).forEach(([eventName, handler]) => {
    const listener = addEventListener(eventName, handler, el);
    addedListeners[eventName] = listener;
  });
  return addedListeners;
}

function removeEventListeners(listeners = {}, el) {
  Object.entries(listeners).forEach(([eventName, handler]) => {
    el.removeEventListener(eventName, handler);
  });
}

module.exports = {
  addEventListener,
  addEventListeners,
  removeEventListeners,
};
