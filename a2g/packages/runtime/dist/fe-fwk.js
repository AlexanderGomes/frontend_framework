const { destroyDOM } = require("./destroy-dom");
const { mountDOM } = require("./mount-dom");
const { Dispatcher } = require("./dispatcher");
function createApp({ state, view, reducers = {} }) {
  let parentEl = null;
  let vdom = null;
  const dispatcher = new Dispatcher();
  const subscriptions = [dispatcher.afterEveryCommand(renderApp)];
  function emit(eventName, payload) {
    dispatcher.dispatch(eventName, payload);
  }
  for (const actionName in reducers) {
    const reducer = reducers[actionName];
    const subs = dispatcher.subscribe(actionName, (payload) => {
      console.log(payload);
      state = reducer(state, payload);
      console.log(state);
    });
    subscriptions.push(subs);
  }
  function renderApp() {
    if (vdom) {
      destroyDOM(vdom);
    }
    vdom = view(state, emit);
    mountDOM(vdom, parentEl);
  }
  return {
    mount(_parentEl) {
      parentEl = _parentEl;
      renderApp();
    },
    unmount() {
      destroyDOM(vdom);
      vdom = null;
      subscriptions.forEach((unsubscribe) => unsubscribe());
    },
  };
}

const { withoutNulls } = require("./utils/arrays");
const DOM_TYPES = {
  TEXT: "text",
  ELEMENT: "element",
  FRAGMENT: "fragment",
};
function h(tag, props = {}, children = []) {
  return {
    tag,
    props,
    children: mapTextNodes(withoutNulls(children)),
    type: DOM_TYPES.ELEMENT,
  };
}
function hString(str) {
  return { type: DOM_TYPES.TEXT, value: str };
}
function mapTextNodes(children) {
  return children.map((child) =>
    typeof child === "string" ? hString(child) : child
  );
}
function hFragment(vNodes) {
  return {
    type: DOM_TYPES.FRAGMENT,
    children: mapTextNodes(withoutNulls(vNodes)),
  };
}

export { DOM_TYPES, createApp, h, hFragment, hString };
