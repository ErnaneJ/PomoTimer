var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Combobox: () => Combobox2,
  Dialog: () => Dialog2,
  Disclosure: () => Disclosure2,
  FocusTrap: () => FocusTrap,
  Listbox: () => Listbox2,
  Menu: () => Menu2,
  Popover: () => Popover2,
  Portal: () => Portal2,
  RadioGroup: () => RadioGroup2,
  Switch: () => Switch2,
  Tab: () => Tab2,
  Transition: () => Transition2
});
module.exports = __toCommonJS(src_exports);

// src/components/combobox/combobox.tsx
var import_react14 = __toESM(require("react"), 1);

// src/hooks/use-disposables.ts
var import_react = require("react");

// src/utils/disposables.ts
function disposables() {
  let disposables2 = [];
  let queue = [];
  let api = {
    enqueue(fn) {
      queue.push(fn);
    },
    addEventListener(element, name, listener, options) {
      element.addEventListener(name, listener, options);
      return api.add(() => element.removeEventListener(name, listener, options));
    },
    requestAnimationFrame(...args) {
      let raf = requestAnimationFrame(...args);
      return api.add(() => cancelAnimationFrame(raf));
    },
    nextFrame(...args) {
      return api.requestAnimationFrame(() => {
        return api.requestAnimationFrame(...args);
      });
    },
    setTimeout(...args) {
      let timer = setTimeout(...args);
      return api.add(() => clearTimeout(timer));
    },
    add(cb) {
      disposables2.push(cb);
      return () => {
        let idx = disposables2.indexOf(cb);
        if (idx >= 0) {
          let [dispose] = disposables2.splice(idx, 1);
          dispose();
        }
      };
    },
    dispose() {
      for (let dispose of disposables2.splice(0)) {
        dispose();
      }
    },
    async workQueue() {
      for (let handle of queue.splice(0)) {
        await handle();
      }
    }
  };
  return api;
}

// src/hooks/use-disposables.ts
function useDisposables() {
  let [d] = (0, import_react.useState)(disposables);
  (0, import_react.useEffect)(() => () => d.dispose(), [d]);
  return d;
}

// src/hooks/use-id.ts
var import_react4 = __toESM(require("react"), 1);

// src/hooks/use-iso-morphic-effect.ts
var import_react2 = require("react");
var useIsoMorphicEffect = typeof window !== "undefined" ? import_react2.useLayoutEffect : import_react2.useEffect;

// src/hooks/use-server-handoff-complete.ts
var import_react3 = require("react");
var state = { serverHandoffComplete: false };
function useServerHandoffComplete() {
  let [serverHandoffComplete, setServerHandoffComplete] = (0, import_react3.useState)(state.serverHandoffComplete);
  (0, import_react3.useEffect)(() => {
    if (serverHandoffComplete === true)
      return;
    setServerHandoffComplete(true);
  }, [serverHandoffComplete]);
  (0, import_react3.useEffect)(() => {
    if (state.serverHandoffComplete === false)
      state.serverHandoffComplete = true;
  }, []);
  return serverHandoffComplete;
}

// src/hooks/use-id.ts
var id = 0;
function generateId() {
  return ++id;
}
var _a;
var useId = (_a = import_react4.default.useId) != null ? _a : function useId2() {
  let ready = useServerHandoffComplete();
  let [id2, setId] = import_react4.default.useState(ready ? generateId : null);
  useIsoMorphicEffect(() => {
    if (id2 === null)
      setId(generateId());
  }, [id2]);
  return id2 != null ? "" + id2 : void 0;
};

// src/hooks/use-computed.ts
var import_react6 = require("react");

// src/hooks/use-latest-value.ts
var import_react5 = require("react");
function useLatestValue(value) {
  let cache = (0, import_react5.useRef)(value);
  useIsoMorphicEffect(() => {
    cache.current = value;
  }, [value]);
  return cache;
}

// src/hooks/use-computed.ts
function useComputed(cb, dependencies) {
  let [value, setValue] = (0, import_react6.useState)(cb);
  let cbRef = useLatestValue(cb);
  useIsoMorphicEffect(() => setValue(cbRef.current), [cbRef, setValue, ...dependencies]);
  return value;
}

// src/hooks/use-sync-refs.ts
var import_react7 = require("react");
var Optional = Symbol();
function optionalRef(cb, isOptional = true) {
  return Object.assign(cb, { [Optional]: isOptional });
}
function useSyncRefs(...refs) {
  let cache = (0, import_react7.useRef)(refs);
  (0, import_react7.useEffect)(() => {
    cache.current = refs;
  }, [refs]);
  let syncRefs = (0, import_react7.useCallback)((value) => {
    for (let ref of cache.current) {
      if (ref == null)
        continue;
      if (typeof ref === "function")
        ref(value);
      else
        ref.current = value;
    }
  }, [cache]);
  return refs.every((ref) => ref == null || (ref == null ? void 0 : ref[Optional])) ? void 0 : syncRefs;
}

// src/utils/render.ts
var import_react8 = require("react");

// src/utils/match.ts
function match(value, lookup, ...args) {
  if (value in lookup) {
    let returnValue = lookup[value];
    return typeof returnValue === "function" ? returnValue(...args) : returnValue;
  }
  let error = new Error(`Tried to handle "${value}" but there is no handler defined. Only defined handlers are: ${Object.keys(lookup).map((key) => `"${key}"`).join(", ")}.`);
  if (Error.captureStackTrace)
    Error.captureStackTrace(error, match);
  throw error;
}

// src/utils/render.ts
function render({
  ourProps,
  theirProps,
  slot,
  defaultTag,
  features,
  visible = true,
  name
}) {
  let props = mergeProps(theirProps, ourProps);
  if (visible)
    return _render(props, slot, defaultTag, name);
  let featureFlags = features != null ? features : 0 /* None */;
  if (featureFlags & 2 /* Static */) {
    let { static: isStatic = false, ...rest } = props;
    if (isStatic)
      return _render(rest, slot, defaultTag, name);
  }
  if (featureFlags & 1 /* RenderStrategy */) {
    let { unmount = true, ...rest } = props;
    let strategy = unmount ? 0 /* Unmount */ : 1 /* Hidden */;
    return match(strategy, {
      [0 /* Unmount */]() {
        return null;
      },
      [1 /* Hidden */]() {
        return _render({ ...rest, ...{ hidden: true, style: { display: "none" } } }, slot, defaultTag, name);
      }
    });
  }
  return _render(props, slot, defaultTag, name);
}
function _render(props, slot = {}, tag, name) {
  let {
    as: Component = tag,
    children,
    refName = "ref",
    ...rest
  } = omit(props, ["unmount", "static"]);
  let refRelatedProps = props.ref !== void 0 ? { [refName]: props.ref } : {};
  let resolvedChildren = typeof children === "function" ? children(slot) : children;
  if (rest.className && typeof rest.className === "function") {
    ;
    rest.className = rest.className(slot);
  }
  if (Component === import_react8.Fragment) {
    if (Object.keys(compact(rest)).length > 0) {
      if (!(0, import_react8.isValidElement)(resolvedChildren) || Array.isArray(resolvedChildren) && resolvedChildren.length > 1) {
        throw new Error([
          'Passing props on "Fragment"!',
          "",
          `The current component <${name} /> is rendering a "Fragment".`,
          `However we need to passthrough the following props:`,
          Object.keys(rest).map((line) => `  - ${line}`).join("\n"),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element."
          ].map((line) => `  - ${line}`).join("\n")
        ].join("\n"));
      }
      return (0, import_react8.cloneElement)(resolvedChildren, Object.assign({}, mergeProps(resolvedChildren.props, compact(omit(rest, ["ref"]))), refRelatedProps));
    }
  }
  return (0, import_react8.createElement)(Component, Object.assign({}, omit(rest, ["ref"]), Component !== import_react8.Fragment && refRelatedProps), resolvedChildren);
}
function mergeProps(...listOfProps) {
  var _a2;
  if (listOfProps.length === 0)
    return {};
  if (listOfProps.length === 1)
    return listOfProps[0];
  let target = {};
  let eventHandlers = {};
  for (let props of listOfProps) {
    for (let prop in props) {
      if (prop.startsWith("on") && typeof props[prop] === "function") {
        (_a2 = eventHandlers[prop]) != null ? _a2 : eventHandlers[prop] = [];
        eventHandlers[prop].push(props[prop]);
      } else {
        target[prop] = props[prop];
      }
    }
  }
  if (target.disabled || target["aria-disabled"]) {
    return Object.assign(target, Object.fromEntries(Object.keys(eventHandlers).map((eventName) => [eventName, void 0])));
  }
  for (let eventName in eventHandlers) {
    Object.assign(target, {
      [eventName](event) {
        let handlers = eventHandlers[eventName];
        for (let handler of handlers) {
          if (event.defaultPrevented)
            return;
          handler(event);
        }
      }
    });
  }
  return target;
}
function forwardRefWithAs(component) {
  var _a2;
  return Object.assign((0, import_react8.forwardRef)(component), {
    displayName: (_a2 = component.displayName) != null ? _a2 : component.name
  });
}
function compact(object) {
  let clone = Object.assign({}, object);
  for (let key in clone) {
    if (clone[key] === void 0)
      delete clone[key];
  }
  return clone;
}
function omit(object, keysToOmit = []) {
  let clone = Object.assign({}, object);
  for (let key of keysToOmit) {
    if (key in clone)
      delete clone[key];
  }
  return clone;
}

// src/utils/calculate-active-index.ts
function assertNever(x) {
  throw new Error("Unexpected object: " + x);
}
function calculateActiveIndex(action, resolvers) {
  let items = resolvers.resolveItems();
  if (items.length <= 0)
    return null;
  let currentActiveIndex = resolvers.resolveActiveIndex();
  let activeIndex = currentActiveIndex != null ? currentActiveIndex : -1;
  let nextActiveIndex = (() => {
    switch (action.focus) {
      case 0 /* First */:
        return items.findIndex((item) => !resolvers.resolveDisabled(item));
      case 1 /* Previous */: {
        let idx = items.slice().reverse().findIndex((item, idx2, all) => {
          if (activeIndex !== -1 && all.length - idx2 - 1 >= activeIndex)
            return false;
          return !resolvers.resolveDisabled(item);
        });
        if (idx === -1)
          return idx;
        return items.length - 1 - idx;
      }
      case 2 /* Next */:
        return items.findIndex((item, idx) => {
          if (idx <= activeIndex)
            return false;
          return !resolvers.resolveDisabled(item);
        });
      case 3 /* Last */: {
        let idx = items.slice().reverse().findIndex((item) => !resolvers.resolveDisabled(item));
        if (idx === -1)
          return idx;
        return items.length - 1 - idx;
      }
      case 4 /* Specific */:
        return items.findIndex((item) => resolvers.resolveId(item) === action.id);
      case 5 /* Nothing */:
        return null;
      default:
        assertNever(action);
    }
  })();
  return nextActiveIndex === -1 ? currentActiveIndex : nextActiveIndex;
}

// src/utils/bugs.ts
function isDisabledReactIssue7711(element) {
  let parent = element.parentElement;
  let legend = null;
  while (parent && !(parent instanceof HTMLFieldSetElement)) {
    if (parent instanceof HTMLLegendElement)
      legend = parent;
    parent = parent.parentElement;
  }
  let isParentDisabled = (parent == null ? void 0 : parent.getAttribute("disabled")) === "";
  if (isParentDisabled && isFirstLegend(legend))
    return false;
  return isParentDisabled;
}
function isFirstLegend(element) {
  if (!element)
    return false;
  let previous = element.previousElementSibling;
  while (previous !== null) {
    if (previous instanceof HTMLLegendElement)
      return false;
    previous = previous.previousElementSibling;
  }
  return true;
}

// src/hooks/use-outside-click.ts
var import_react10 = require("react");

// src/utils/micro-task.ts
function microTask(cb) {
  if (typeof queueMicrotask === "function") {
    queueMicrotask(cb);
  } else {
    Promise.resolve().then(cb).catch((e) => setTimeout(() => {
      throw e;
    }));
  }
}

// src/hooks/use-window-event.ts
var import_react9 = require("react");
function useWindowEvent(type, listener, options) {
  let listenerRef = useLatestValue(listener);
  (0, import_react9.useEffect)(() => {
    function handler(event) {
      listenerRef.current(event);
    }
    window.addEventListener(type, handler, options);
    return () => window.removeEventListener(type, handler, options);
  }, [type, options]);
}

// src/hooks/use-outside-click.ts
function useOutsideClick(containers, cb, features = 1 /* None */) {
  let called = (0, import_react10.useRef)(false);
  let handler = useLatestValue((event) => {
    if (called.current)
      return;
    called.current = true;
    microTask(() => {
      called.current = false;
    });
    let _containers = function resolve(containers2) {
      if (typeof containers2 === "function") {
        return resolve(containers2());
      }
      if (Array.isArray(containers2)) {
        return containers2;
      }
      if (containers2 instanceof Set) {
        return containers2;
      }
      return [containers2];
    }(containers);
    let target = event.target;
    if (!target.ownerDocument.documentElement.contains(target))
      return;
    if ((features & 2 /* IgnoreScrollbars */) === 2 /* IgnoreScrollbars */) {
      let scrollbarWidth = 20;
      let viewport = target.ownerDocument.documentElement;
      if (event.clientX > viewport.clientWidth - scrollbarWidth)
        return;
      if (event.clientX < scrollbarWidth)
        return;
      if (event.clientY > viewport.clientHeight - scrollbarWidth)
        return;
      if (event.clientY < scrollbarWidth)
        return;
    }
    for (let container of _containers) {
      if (container === null)
        continue;
      let domNode = container instanceof HTMLElement ? container : container.current;
      if (domNode == null ? void 0 : domNode.contains(target)) {
        return;
      }
    }
    return cb(event, target);
  });
  useWindowEvent("pointerdown", (...args) => handler.current(...args));
  useWindowEvent("mousedown", (...args) => handler.current(...args));
}

// src/internal/open-closed.tsx
var import_react11 = __toESM(require("react"), 1);
var Context = (0, import_react11.createContext)(null);
Context.displayName = "OpenClosedContext";
function useOpenClosed() {
  return (0, import_react11.useContext)(Context);
}
function OpenClosedProvider({ value, children }) {
  return /* @__PURE__ */ import_react11.default.createElement(Context.Provider, {
    value
  }, children);
}

// src/hooks/use-resolve-button-type.ts
var import_react12 = require("react");
function resolveType(props) {
  var _a2;
  if (props.type)
    return props.type;
  let tag = (_a2 = props.as) != null ? _a2 : "button";
  if (typeof tag === "string" && tag.toLowerCase() === "button")
    return "button";
  return void 0;
}
function useResolveButtonType(props, ref) {
  let [type, setType] = (0, import_react12.useState)(() => resolveType(props));
  useIsoMorphicEffect(() => {
    setType(resolveType(props));
  }, [props.type, props.as]);
  useIsoMorphicEffect(() => {
    if (type)
      return;
    if (!ref.current)
      return;
    if (ref.current instanceof HTMLButtonElement && !ref.current.hasAttribute("type")) {
      setType("button");
    }
  }, [type, ref]);
  return type;
}

// src/hooks/use-tree-walker.ts
var import_react13 = require("react");

// src/utils/owner.ts
function getOwnerDocument(element) {
  if (typeof window === "undefined")
    return null;
  if (element instanceof Node)
    return element.ownerDocument;
  if (element == null ? void 0 : element.hasOwnProperty("current")) {
    if (element.current instanceof Node)
      return element.current.ownerDocument;
  }
  return document;
}

// src/hooks/use-tree-walker.ts
function useTreeWalker({
  container,
  accept,
  walk,
  enabled = true
}) {
  let acceptRef = (0, import_react13.useRef)(accept);
  let walkRef = (0, import_react13.useRef)(walk);
  (0, import_react13.useEffect)(() => {
    acceptRef.current = accept;
    walkRef.current = walk;
  }, [accept, walk]);
  useIsoMorphicEffect(() => {
    if (!container)
      return;
    if (!enabled)
      return;
    let ownerDocument = getOwnerDocument(container);
    if (!ownerDocument)
      return;
    let accept2 = acceptRef.current;
    let walk2 = walkRef.current;
    let acceptNode = Object.assign((node) => accept2(node), { acceptNode: accept2 });
    let walker = ownerDocument.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, acceptNode, false);
    while (walker.nextNode())
      walk2(walker.currentNode);
  }, [container, enabled, acceptRef, walkRef]);
}

// src/utils/focus-management.ts
var focusableSelector = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])"
].map(false ? (selector) => `${selector}:not([tabindex='-1']):not([style*='display: none'])` : (selector) => `${selector}:not([tabindex='-1'])`).join(",");
function getFocusableElements(container = document.body) {
  if (container == null)
    return [];
  return Array.from(container.querySelectorAll(focusableSelector));
}
function isFocusableElement(element, mode = 0 /* Strict */) {
  var _a2;
  if (element === ((_a2 = getOwnerDocument(element)) == null ? void 0 : _a2.body))
    return false;
  return match(mode, {
    [0 /* Strict */]() {
      return element.matches(focusableSelector);
    },
    [1 /* Loose */]() {
      let next = element;
      while (next !== null) {
        if (next.matches(focusableSelector))
          return true;
        next = next.parentElement;
      }
      return false;
    }
  });
}
function focusElement(element) {
  element == null ? void 0 : element.focus({ preventScroll: true });
}
var selectableSelector = ["textarea", "input"].join(",");
function isSelectableElement(element) {
  var _a2, _b;
  return (_b = (_a2 = element == null ? void 0 : element.matches) == null ? void 0 : _a2.call(element, selectableSelector)) != null ? _b : false;
}
function sortByDomNode(nodes, resolveKey = (i) => i) {
  return nodes.slice().sort((aItem, zItem) => {
    let a = resolveKey(aItem);
    let z = resolveKey(zItem);
    if (a === null || z === null)
      return 0;
    let position = a.compareDocumentPosition(z);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING)
      return -1;
    if (position & Node.DOCUMENT_POSITION_PRECEDING)
      return 1;
    return 0;
  });
}
function focusIn(container, focus) {
  let ownerDocument = Array.isArray(container) ? container.length > 0 ? container[0].ownerDocument : document : container.ownerDocument;
  let elements = Array.isArray(container) ? sortByDomNode(container) : getFocusableElements(container);
  let active = ownerDocument.activeElement;
  let direction = (() => {
    if (focus & (1 /* First */ | 4 /* Next */))
      return 1 /* Next */;
    if (focus & (2 /* Previous */ | 8 /* Last */))
      return -1 /* Previous */;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })();
  let startIndex = (() => {
    if (focus & 1 /* First */)
      return 0;
    if (focus & 2 /* Previous */)
      return Math.max(0, elements.indexOf(active)) - 1;
    if (focus & 4 /* Next */)
      return Math.max(0, elements.indexOf(active)) + 1;
    if (focus & 8 /* Last */)
      return elements.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })();
  let focusOptions = focus & 32 /* NoScroll */ ? { preventScroll: true } : {};
  let offset = 0;
  let total = elements.length;
  let next = void 0;
  do {
    if (offset >= total || offset + total <= 0)
      return 0 /* Error */;
    let nextIdx = startIndex + offset;
    if (focus & 16 /* WrapAround */) {
      nextIdx = (nextIdx + total) % total;
    } else {
      if (nextIdx < 0)
        return 3 /* Underflow */;
      if (nextIdx >= total)
        return 1 /* Overflow */;
    }
    next = elements[nextIdx];
    next == null ? void 0 : next.focus(focusOptions);
    offset += direction;
  } while (next !== ownerDocument.activeElement);
  if (focus & (4 /* Next */ | 2 /* Previous */) && isSelectableElement(next)) {
    next.select();
  }
  if (!next.hasAttribute("tabindex"))
    next.setAttribute("tabindex", "0");
  return 2 /* Success */;
}

// src/internal/visually-hidden.tsx
var DEFAULT_VISUALLY_HIDDEN_TAG = "div";
var VisuallyHidden = forwardRefWithAs(function VisuallyHidden2(props, ref) {
  let theirProps = props;
  let ourProps = {
    ref,
    style: {
      position: "absolute",
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      borderWidth: "0",
      display: "none"
    }
  };
  return render({
    ourProps,
    theirProps,
    slot: {},
    defaultTag: DEFAULT_VISUALLY_HIDDEN_TAG,
    name: "VisuallyHidden"
  });
});

// src/utils/form.ts
function objectToFormEntries(source = {}, parentKey = null, entries = []) {
  for (let [key, value] of Object.entries(source)) {
    append(entries, composeKey(parentKey, key), value);
  }
  return entries;
}
function composeKey(parent, key) {
  return parent ? parent + "[" + key + "]" : key;
}
function append(entries, key, value) {
  if (Array.isArray(value)) {
    for (let [subkey, subvalue] of value.entries()) {
      append(entries, composeKey(key, subkey.toString()), subvalue);
    }
  } else if (value instanceof Date) {
    entries.push([key, value.toISOString()]);
  } else if (typeof value === "boolean") {
    entries.push([key, value ? "1" : "0"]);
  } else if (typeof value === "string") {
    entries.push([key, value]);
  } else if (typeof value === "number") {
    entries.push([key, `${value}`]);
  } else if (value === null || value === void 0) {
    entries.push([key, ""]);
  } else {
    objectToFormEntries(value, key, entries);
  }
}
function attemptSubmit(element) {
  var _a2;
  let form = (_a2 = element == null ? void 0 : element.form) != null ? _a2 : element.closest("form");
  if (!form)
    return;
  for (let element2 of form.elements) {
    if (element2.tagName === "INPUT" && element2.type === "submit" || element2.tagName === "BUTTON" && element2.type === "submit" || element2.nodeName === "INPUT" && element2.type === "image") {
      element2.click();
      return;
    }
  }
}

// src/components/combobox/combobox.tsx
function adjustOrderedState(state2, adjustment = (i) => i) {
  let currentActiveOption = state2.activeOptionIndex !== null ? state2.options[state2.activeOptionIndex] : null;
  let sortedOptions = sortByDomNode(adjustment(state2.options.slice()), (option) => option.dataRef.current.domRef.current);
  let adjustedActiveOptionIndex = currentActiveOption ? sortedOptions.indexOf(currentActiveOption) : null;
  if (adjustedActiveOptionIndex === -1) {
    adjustedActiveOptionIndex = null;
  }
  return {
    options: sortedOptions,
    activeOptionIndex: adjustedActiveOptionIndex
  };
}
var reducers = {
  [1 /* CloseCombobox */](state2) {
    if (state2.disabled)
      return state2;
    if (state2.comboboxState === 1 /* Closed */)
      return state2;
    return { ...state2, activeOptionIndex: null, comboboxState: 1 /* Closed */ };
  },
  [0 /* OpenCombobox */](state2) {
    if (state2.disabled)
      return state2;
    if (state2.comboboxState === 0 /* Open */)
      return state2;
    let activeOptionIndex = state2.activeOptionIndex;
    let { value, mode } = state2.comboboxPropsRef.current;
    let optionIdx = state2.options.findIndex((option) => {
      let optionValue = option.dataRef.current.value;
      let selected = match(mode, {
        [1 /* Multi */]: () => value.includes(optionValue),
        [0 /* Single */]: () => value === optionValue
      });
      return selected;
    });
    if (optionIdx !== -1) {
      activeOptionIndex = optionIdx;
    }
    return { ...state2, comboboxState: 0 /* Open */, activeOptionIndex };
  },
  [2 /* SetDisabled */](state2, action) {
    if (state2.disabled === action.disabled)
      return state2;
    return { ...state2, disabled: action.disabled };
  },
  [3 /* GoToOption */](state2, action) {
    var _a2;
    if (state2.disabled)
      return state2;
    if (state2.optionsRef.current && !state2.optionsPropsRef.current.static && state2.comboboxState === 1 /* Closed */) {
      return state2;
    }
    let adjustedState = adjustOrderedState(state2);
    if (adjustedState.activeOptionIndex === null) {
      let localActiveOptionIndex = adjustedState.options.findIndex((option) => !option.dataRef.current.disabled);
      if (localActiveOptionIndex !== -1) {
        adjustedState.activeOptionIndex = localActiveOptionIndex;
      }
    }
    let activeOptionIndex = calculateActiveIndex(action, {
      resolveItems: () => adjustedState.options,
      resolveActiveIndex: () => adjustedState.activeOptionIndex,
      resolveId: (item) => item.id,
      resolveDisabled: (item) => item.dataRef.current.disabled
    });
    return {
      ...state2,
      ...adjustedState,
      activeOptionIndex,
      activationTrigger: (_a2 = action.trigger) != null ? _a2 : 1 /* Other */
    };
  },
  [4 /* RegisterOption */]: (state2, action) => {
    let option = { id: action.id, dataRef: action.dataRef };
    let adjustedState = adjustOrderedState(state2, (options) => [...options, option]);
    if (state2.activeOptionIndex === null) {
      let { value, mode } = state2.comboboxPropsRef.current;
      let optionValue = action.dataRef.current.value;
      let selected = match(mode, {
        [1 /* Multi */]: () => value.includes(optionValue),
        [0 /* Single */]: () => value === optionValue
      });
      if (selected) {
        adjustedState.activeOptionIndex = adjustedState.options.indexOf(option);
      }
    }
    let nextState = {
      ...state2,
      ...adjustedState,
      activationTrigger: 1 /* Other */
    };
    if (state2.comboboxPropsRef.current.__demoMode && state2.comboboxPropsRef.current.value === void 0) {
      nextState.activeOptionIndex = 0;
    }
    return nextState;
  },
  [5 /* UnregisterOption */]: (state2, action) => {
    let adjustedState = adjustOrderedState(state2, (options) => {
      let idx = options.findIndex((a) => a.id === action.id);
      if (idx !== -1)
        options.splice(idx, 1);
      return options;
    });
    return {
      ...state2,
      ...adjustedState,
      activationTrigger: 1 /* Other */
    };
  }
};
var ComboboxContext = (0, import_react14.createContext)(null);
ComboboxContext.displayName = "ComboboxContext";
function useComboboxContext(component) {
  let context = (0, import_react14.useContext)(ComboboxContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Combobox /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useComboboxContext);
    throw err;
  }
  return context;
}
var ComboboxActions = (0, import_react14.createContext)(null);
ComboboxActions.displayName = "ComboboxActions";
function useComboboxActions() {
  let context = (0, import_react14.useContext)(ComboboxActions);
  if (context === null) {
    let err = new Error(`ComboboxActions is missing a parent <Combobox /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useComboboxActions);
    throw err;
  }
  return context;
}
var ComboboxData = (0, import_react14.createContext)(null);
ComboboxData.displayName = "ComboboxData";
function useComboboxData() {
  let context = (0, import_react14.useContext)(ComboboxData);
  if (context === null) {
    let err = new Error(`ComboboxData is missing a parent <Combobox /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useComboboxData);
    throw err;
  }
  return context;
}
function stateReducer(state2, action) {
  return match(action.type, reducers, state2, action);
}
var DEFAULT_COMBOBOX_TAG = import_react14.Fragment;
var ComboboxRoot = forwardRefWithAs(function Combobox(props, ref) {
  let {
    name,
    value,
    onChange,
    disabled = false,
    __demoMode = false,
    nullable = false,
    multiple = false,
    ...theirProps
  } = props;
  let defaultToFirstOption = (0, import_react14.useRef)(false);
  let comboboxPropsRef = (0, import_react14.useRef)({
    value,
    mode: multiple ? 1 /* Multi */ : 0 /* Single */,
    onChange,
    nullable,
    __demoMode
  });
  comboboxPropsRef.current.value = value;
  comboboxPropsRef.current.mode = multiple ? 1 /* Multi */ : 0 /* Single */;
  comboboxPropsRef.current.nullable = nullable;
  let optionsPropsRef = (0, import_react14.useRef)({
    static: false,
    hold: false
  });
  let inputPropsRef = (0, import_react14.useRef)({
    displayValue: void 0
  });
  let reducerBag = (0, import_react14.useReducer)(stateReducer, {
    comboboxState: __demoMode ? 0 /* Open */ : 1 /* Closed */,
    comboboxPropsRef,
    optionsPropsRef,
    inputPropsRef,
    labelRef: (0, import_react14.createRef)(),
    inputRef: (0, import_react14.createRef)(),
    buttonRef: (0, import_react14.createRef)(),
    optionsRef: (0, import_react14.createRef)(),
    disabled,
    options: [],
    activeOptionIndex: null,
    activationTrigger: 1 /* Other */
  });
  let [
    {
      comboboxState,
      options,
      activeOptionIndex: _activeOptionIndex,
      optionsRef,
      inputRef,
      buttonRef
    },
    dispatch
  ] = reducerBag;
  let dataBag = (0, import_react14.useMemo)(() => ({
    value,
    mode: multiple ? 1 /* Multi */ : 0 /* Single */,
    get activeOptionIndex() {
      if (defaultToFirstOption.current && _activeOptionIndex === null && options.length > 0) {
        let localActiveOptionIndex = options.findIndex((option) => !option.dataRef.current.disabled);
        if (localActiveOptionIndex !== -1) {
          return localActiveOptionIndex;
        }
      }
      return _activeOptionIndex;
    }
  }), [value, _activeOptionIndex, options]);
  let activeOptionIndex = dataBag.activeOptionIndex;
  useIsoMorphicEffect(() => {
    comboboxPropsRef.current.onChange = (value2) => {
      return match(dataBag.mode, {
        [0 /* Single */]() {
          return onChange(value2);
        },
        [1 /* Multi */]() {
          let copy = dataBag.value.slice();
          let idx = copy.indexOf(value2);
          if (idx === -1) {
            copy.push(value2);
          } else {
            copy.splice(idx, 1);
          }
          return onChange(copy);
        }
      });
    };
  }, [dataBag, onChange, comboboxPropsRef, dataBag]);
  useIsoMorphicEffect(() => dispatch({ type: 2 /* SetDisabled */, disabled }), [disabled]);
  useOutsideClick([buttonRef, inputRef, optionsRef], () => {
    if (comboboxState !== 0 /* Open */)
      return;
    dispatch({ type: 1 /* CloseCombobox */ });
  });
  let activeOption = activeOptionIndex === null ? null : options[activeOptionIndex].dataRef.current.value;
  let slot = (0, import_react14.useMemo)(() => ({
    open: comboboxState === 0 /* Open */,
    disabled,
    activeIndex: activeOptionIndex,
    activeOption
  }), [comboboxState, disabled, options, activeOptionIndex]);
  let syncInputValue = (0, import_react14.useCallback)(() => {
    var _a2;
    if (!inputRef.current)
      return;
    let displayValue = inputPropsRef.current.displayValue;
    if (typeof displayValue === "function") {
      inputRef.current.value = (_a2 = displayValue(value)) != null ? _a2 : "";
    } else if (typeof value === "string") {
      inputRef.current.value = value;
    } else {
      inputRef.current.value = "";
    }
  }, [value, inputRef, inputPropsRef]);
  let selectOption = (0, import_react14.useCallback)((id2) => {
    let option = options.find((item) => item.id === id2);
    if (!option)
      return;
    let { dataRef } = option;
    comboboxPropsRef.current.onChange(dataRef.current.value);
    syncInputValue();
  }, [options, comboboxPropsRef, inputRef]);
  let selectActiveOption = (0, import_react14.useCallback)(() => {
    if (activeOptionIndex !== null) {
      let { dataRef, id: id2 } = options[activeOptionIndex];
      comboboxPropsRef.current.onChange(dataRef.current.value);
      syncInputValue();
      dispatch({ type: 3 /* GoToOption */, focus: 4 /* Specific */, id: id2 });
    }
  }, [activeOptionIndex, options, comboboxPropsRef, inputRef]);
  let actionsBag = (0, import_react14.useMemo)(() => ({
    selectOption,
    selectActiveOption,
    openCombobox() {
      dispatch({ type: 0 /* OpenCombobox */ });
      defaultToFirstOption.current = true;
    },
    closeCombobox() {
      dispatch({ type: 1 /* CloseCombobox */ });
      defaultToFirstOption.current = false;
    },
    goToOption(focus, id2, trigger) {
      defaultToFirstOption.current = false;
      if (focus === 4 /* Specific */) {
        return dispatch({ type: 3 /* GoToOption */, focus: 4 /* Specific */, id: id2, trigger });
      }
      return dispatch({ type: 3 /* GoToOption */, focus, trigger });
    },
    registerOption(id2, dataRef) {
      dispatch({ type: 4 /* RegisterOption */, id: id2, dataRef });
      return () => dispatch({ type: 5 /* UnregisterOption */, id: id2 });
    }
  }), [selectOption, selectActiveOption, dispatch]);
  useIsoMorphicEffect(() => {
    if (comboboxState !== 1 /* Closed */)
      return;
    syncInputValue();
  }, [syncInputValue, comboboxState]);
  useIsoMorphicEffect(syncInputValue, [syncInputValue]);
  let ourProps = ref === null ? {} : { ref };
  return /* @__PURE__ */ import_react14.default.createElement(ComboboxActions.Provider, {
    value: actionsBag
  }, /* @__PURE__ */ import_react14.default.createElement(ComboboxData.Provider, {
    value: dataBag
  }, /* @__PURE__ */ import_react14.default.createElement(ComboboxContext.Provider, {
    value: reducerBag
  }, /* @__PURE__ */ import_react14.default.createElement(OpenClosedProvider, {
    value: match(comboboxState, {
      [0 /* Open */]: 0 /* Open */,
      [1 /* Closed */]: 1 /* Closed */
    })
  }, name != null && value != null && objectToFormEntries({ [name]: value }).map(([name2, value2]) => /* @__PURE__ */ import_react14.default.createElement(VisuallyHidden, {
    ...compact({
      key: name2,
      as: "input",
      type: "hidden",
      hidden: true,
      readOnly: true,
      name: name2,
      value: value2
    })
  })), render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_COMBOBOX_TAG,
    name: "Combobox"
  })))));
});
var DEFAULT_INPUT_TAG = "input";
var Input = forwardRefWithAs(function Input2(props, ref) {
  var _a2, _b;
  let { value, onChange, displayValue, ...theirProps } = props;
  let [state2] = useComboboxContext("Combobox.Input");
  let data = useComboboxData();
  let actions = useComboboxActions();
  let inputRef = useSyncRefs(state2.inputRef, ref);
  let inputPropsRef = state2.inputPropsRef;
  let id2 = `headlessui-combobox-input-${useId()}`;
  let d = useDisposables();
  let onChangeRef = useLatestValue(onChange);
  useIsoMorphicEffect(() => {
    inputPropsRef.current.displayValue = displayValue;
  }, [displayValue, inputPropsRef]);
  let handleKeyDown = (0, import_react14.useCallback)((event) => {
    switch (event.key) {
      case "Backspace" /* Backspace */:
      case "Delete" /* Delete */:
        if (data.mode !== 0 /* Single */)
          return;
        if (!state2.comboboxPropsRef.current.nullable)
          return;
        let input = event.currentTarget;
        d.requestAnimationFrame(() => {
          if (input.value === "") {
            state2.comboboxPropsRef.current.onChange(null);
            if (state2.optionsRef.current) {
              state2.optionsRef.current.scrollTop = 0;
            }
            actions.goToOption(5 /* Nothing */);
          }
        });
        break;
      case "Enter" /* Enter */:
        if (state2.comboboxState !== 0 /* Open */)
          return;
        event.preventDefault();
        event.stopPropagation();
        if (data.activeOptionIndex === null) {
          actions.closeCombobox();
          return;
        }
        actions.selectActiveOption();
        if (data.mode === 0 /* Single */) {
          actions.closeCombobox();
        }
        break;
      case "ArrowDown" /* ArrowDown */:
        event.preventDefault();
        event.stopPropagation();
        return match(state2.comboboxState, {
          [0 /* Open */]: () => {
            actions.goToOption(2 /* Next */);
          },
          [1 /* Closed */]: () => {
            actions.openCombobox();
            d.nextFrame(() => {
              if (!data.value) {
                actions.goToOption(2 /* Next */);
              }
            });
          }
        });
      case "ArrowUp" /* ArrowUp */:
        event.preventDefault();
        event.stopPropagation();
        return match(state2.comboboxState, {
          [0 /* Open */]: () => {
            actions.goToOption(1 /* Previous */);
          },
          [1 /* Closed */]: () => {
            actions.openCombobox();
            d.nextFrame(() => {
              if (!data.value) {
                actions.goToOption(3 /* Last */);
              }
            });
          }
        });
      case "Home" /* Home */:
      case "PageUp" /* PageUp */:
        event.preventDefault();
        event.stopPropagation();
        return actions.goToOption(0 /* First */);
      case "End" /* End */:
      case "PageDown" /* PageDown */:
        event.preventDefault();
        event.stopPropagation();
        return actions.goToOption(3 /* Last */);
      case "Escape" /* Escape */:
        event.preventDefault();
        if (state2.optionsRef.current && !state2.optionsPropsRef.current.static) {
          event.stopPropagation();
        }
        return actions.closeCombobox();
      case "Tab" /* Tab */:
        actions.selectActiveOption();
        actions.closeCombobox();
        break;
    }
  }, [d, state2, actions, data]);
  let handleChange = (0, import_react14.useCallback)((event) => {
    var _a3;
    actions.openCombobox();
    (_a3 = onChangeRef.current) == null ? void 0 : _a3.call(onChangeRef, event);
  }, [actions, onChangeRef]);
  let labelledby = useComputed(() => {
    if (!state2.labelRef.current)
      return void 0;
    return [state2.labelRef.current.id].join(" ");
  }, [state2.labelRef.current]);
  let slot = (0, import_react14.useMemo)(() => ({ open: state2.comboboxState === 0 /* Open */, disabled: state2.disabled }), [state2]);
  let ourProps = {
    ref: inputRef,
    id: id2,
    role: "combobox",
    type: "text",
    "aria-controls": (_a2 = state2.optionsRef.current) == null ? void 0 : _a2.id,
    "aria-expanded": state2.disabled ? void 0 : state2.comboboxState === 0 /* Open */,
    "aria-activedescendant": data.activeOptionIndex === null ? void 0 : (_b = state2.options[data.activeOptionIndex]) == null ? void 0 : _b.id,
    "aria-multiselectable": data.mode === 1 /* Multi */ ? true : void 0,
    "aria-labelledby": labelledby,
    disabled: state2.disabled,
    onKeyDown: handleKeyDown,
    onChange: handleChange
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_INPUT_TAG,
    name: "Combobox.Input"
  });
});
var DEFAULT_BUTTON_TAG = "button";
var Button = forwardRefWithAs(function Button2(props, ref) {
  var _a2;
  let [state2] = useComboboxContext("Combobox.Button");
  let data = useComboboxData();
  let actions = useComboboxActions();
  let buttonRef = useSyncRefs(state2.buttonRef, ref);
  let id2 = `headlessui-combobox-button-${useId()}`;
  let d = useDisposables();
  let handleKeyDown = (0, import_react14.useCallback)((event) => {
    switch (event.key) {
      case "ArrowDown" /* ArrowDown */:
        event.preventDefault();
        event.stopPropagation();
        if (state2.comboboxState === 1 /* Closed */) {
          actions.openCombobox();
          d.nextFrame(() => {
            if (!data.value) {
              actions.goToOption(0 /* First */);
            }
          });
        }
        return d.nextFrame(() => {
          var _a3;
          return (_a3 = state2.inputRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
        });
      case "ArrowUp" /* ArrowUp */:
        event.preventDefault();
        event.stopPropagation();
        if (state2.comboboxState === 1 /* Closed */) {
          actions.openCombobox();
          d.nextFrame(() => {
            if (!data.value) {
              actions.goToOption(3 /* Last */);
            }
          });
        }
        return d.nextFrame(() => {
          var _a3;
          return (_a3 = state2.inputRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
        });
      case "Escape" /* Escape */:
        event.preventDefault();
        if (state2.optionsRef.current && !state2.optionsPropsRef.current.static) {
          event.stopPropagation();
        }
        actions.closeCombobox();
        return d.nextFrame(() => {
          var _a3;
          return (_a3 = state2.inputRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
        });
      default:
        return;
    }
  }, [d, state2, actions, data]);
  let handleClick = (0, import_react14.useCallback)((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    if (state2.comboboxState === 0 /* Open */) {
      actions.closeCombobox();
    } else {
      event.preventDefault();
      actions.openCombobox();
    }
    d.nextFrame(() => {
      var _a3;
      return (_a3 = state2.inputRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
    });
  }, [actions, d, state2]);
  let labelledby = useComputed(() => {
    if (!state2.labelRef.current)
      return void 0;
    return [state2.labelRef.current.id, id2].join(" ");
  }, [state2.labelRef.current, id2]);
  let slot = (0, import_react14.useMemo)(() => ({ open: state2.comboboxState === 0 /* Open */, disabled: state2.disabled }), [state2]);
  let theirProps = props;
  let ourProps = {
    ref: buttonRef,
    id: id2,
    type: useResolveButtonType(props, state2.buttonRef),
    tabIndex: -1,
    "aria-haspopup": true,
    "aria-controls": (_a2 = state2.optionsRef.current) == null ? void 0 : _a2.id,
    "aria-expanded": state2.disabled ? void 0 : state2.comboboxState === 0 /* Open */,
    "aria-labelledby": labelledby,
    disabled: state2.disabled,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_BUTTON_TAG,
    name: "Combobox.Button"
  });
});
var DEFAULT_LABEL_TAG = "label";
var Label = forwardRefWithAs(function Label2(props, ref) {
  let [state2] = useComboboxContext("Combobox.Label");
  let id2 = `headlessui-combobox-label-${useId()}`;
  let labelRef = useSyncRefs(state2.labelRef, ref);
  let handleClick = (0, import_react14.useCallback)(() => {
    var _a2;
    return (_a2 = state2.inputRef.current) == null ? void 0 : _a2.focus({ preventScroll: true });
  }, [state2.inputRef]);
  let slot = (0, import_react14.useMemo)(() => ({ open: state2.comboboxState === 0 /* Open */, disabled: state2.disabled }), [state2]);
  let theirProps = props;
  let ourProps = { ref: labelRef, id: id2, onClick: handleClick };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_LABEL_TAG,
    name: "Combobox.Label"
  });
});
var DEFAULT_OPTIONS_TAG = "ul";
var OptionsRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
var Options = forwardRefWithAs(function Options2(props, ref) {
  var _a2;
  let { hold = false, ...theirProps } = props;
  let [state2] = useComboboxContext("Combobox.Options");
  let data = useComboboxData();
  let { optionsPropsRef } = state2;
  let optionsRef = useSyncRefs(state2.optionsRef, ref);
  let id2 = `headlessui-combobox-options-${useId()}`;
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === 0 /* Open */;
    }
    return state2.comboboxState === 0 /* Open */;
  })();
  useIsoMorphicEffect(() => {
    var _a3;
    optionsPropsRef.current.static = (_a3 = props.static) != null ? _a3 : false;
  }, [optionsPropsRef, props.static]);
  useIsoMorphicEffect(() => {
    optionsPropsRef.current.hold = hold;
  }, [hold, optionsPropsRef]);
  useTreeWalker({
    container: state2.optionsRef.current,
    enabled: state2.comboboxState === 0 /* Open */,
    accept(node) {
      if (node.getAttribute("role") === "option")
        return NodeFilter.FILTER_REJECT;
      if (node.hasAttribute("role"))
        return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
    walk(node) {
      node.setAttribute("role", "none");
    }
  });
  let labelledby = useComputed(() => {
    var _a3, _b, _c;
    return (_c = (_a3 = state2.labelRef.current) == null ? void 0 : _a3.id) != null ? _c : (_b = state2.buttonRef.current) == null ? void 0 : _b.id;
  }, [state2.labelRef.current, state2.buttonRef.current]);
  let slot = (0, import_react14.useMemo)(() => ({ open: state2.comboboxState === 0 /* Open */ }), [state2]);
  let ourProps = {
    "aria-activedescendant": data.activeOptionIndex === null ? void 0 : (_a2 = state2.options[data.activeOptionIndex]) == null ? void 0 : _a2.id,
    "aria-labelledby": labelledby,
    role: "listbox",
    id: id2,
    ref: optionsRef
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OPTIONS_TAG,
    features: OptionsRenderFeatures,
    visible,
    name: "Combobox.Options"
  });
});
var DEFAULT_OPTION_TAG = "li";
var Option = forwardRefWithAs(function Option2(props, ref) {
  let { disabled = false, value, ...theirProps } = props;
  let [state2] = useComboboxContext("Combobox.Option");
  let data = useComboboxData();
  let actions = useComboboxActions();
  let id2 = `headlessui-combobox-option-${useId()}`;
  let active = data.activeOptionIndex !== null ? state2.options[data.activeOptionIndex].id === id2 : false;
  let selected = match(data.mode, {
    [1 /* Multi */]: () => data.value.includes(value),
    [0 /* Single */]: () => data.value === value
  });
  let internalOptionRef = (0, import_react14.useRef)(null);
  let bag = (0, import_react14.useRef)({ disabled, value, domRef: internalOptionRef });
  let optionRef = useSyncRefs(ref, internalOptionRef);
  useIsoMorphicEffect(() => {
    bag.current.disabled = disabled;
  }, [bag, disabled]);
  useIsoMorphicEffect(() => {
    bag.current.value = value;
  }, [bag, value]);
  useIsoMorphicEffect(() => {
    var _a2, _b;
    bag.current.textValue = (_b = (_a2 = internalOptionRef.current) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.toLowerCase();
  }, [bag, internalOptionRef]);
  let select = (0, import_react14.useCallback)(() => actions.selectOption(id2), [actions, id2]);
  useIsoMorphicEffect(() => actions.registerOption(id2, bag), [bag, id2]);
  let enableScrollIntoView = (0, import_react14.useRef)(state2.comboboxPropsRef.current.__demoMode ? false : true);
  useIsoMorphicEffect(() => {
    if (!state2.comboboxPropsRef.current.__demoMode)
      return;
    let d = disposables();
    d.requestAnimationFrame(() => {
      enableScrollIntoView.current = true;
    });
    return d.dispose;
  }, []);
  useIsoMorphicEffect(() => {
    if (state2.comboboxState !== 0 /* Open */)
      return;
    if (!active)
      return;
    if (!enableScrollIntoView.current)
      return;
    if (state2.activationTrigger === 0 /* Pointer */)
      return;
    let d = disposables();
    d.requestAnimationFrame(() => {
      var _a2, _b;
      (_b = (_a2 = internalOptionRef.current) == null ? void 0 : _a2.scrollIntoView) == null ? void 0 : _b.call(_a2, { block: "nearest" });
    });
    return d.dispose;
  }, [internalOptionRef, active, state2.comboboxState, state2.activationTrigger, data.activeOptionIndex]);
  let handleClick = (0, import_react14.useCallback)((event) => {
    if (disabled)
      return event.preventDefault();
    select();
    if (data.mode === 0 /* Single */) {
      actions.closeCombobox();
      disposables().nextFrame(() => {
        var _a2;
        return (_a2 = state2.inputRef.current) == null ? void 0 : _a2.focus({ preventScroll: true });
      });
    }
  }, [actions, state2.inputRef, disabled, select]);
  let handleFocus = (0, import_react14.useCallback)(() => {
    if (disabled)
      return actions.goToOption(5 /* Nothing */);
    actions.goToOption(4 /* Specific */, id2);
  }, [disabled, id2, actions]);
  let handleMove = (0, import_react14.useCallback)(() => {
    if (disabled)
      return;
    if (active)
      return;
    actions.goToOption(4 /* Specific */, id2, 0 /* Pointer */);
  }, [disabled, active, id2, actions]);
  let handleLeave = (0, import_react14.useCallback)(() => {
    if (disabled)
      return;
    if (!active)
      return;
    if (state2.optionsPropsRef.current.hold)
      return;
    actions.goToOption(5 /* Nothing */);
  }, [disabled, active, actions, state2.comboboxState, state2.comboboxPropsRef]);
  let slot = (0, import_react14.useMemo)(() => ({ active, selected, disabled }), [active, selected, disabled]);
  let ourProps = {
    id: id2,
    ref: optionRef,
    role: "option",
    tabIndex: disabled === true ? void 0 : -1,
    "aria-disabled": disabled === true ? true : void 0,
    "aria-selected": selected === true ? true : void 0,
    disabled: void 0,
    onClick: handleClick,
    onFocus: handleFocus,
    onPointerMove: handleMove,
    onMouseMove: handleMove,
    onPointerLeave: handleLeave,
    onMouseLeave: handleLeave
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OPTION_TAG,
    name: "Combobox.Option"
  });
});
var Combobox2 = Object.assign(ComboboxRoot, { Input, Button, Label, Options, Option });

// src/components/dialog/dialog.tsx
var import_react23 = __toESM(require("react"), 1);

// src/hooks/use-focus-trap.ts
var import_react18 = require("react");

// src/hooks/use-event-listener.ts
var import_react15 = require("react");
function useEventListener(element, type, listener, options) {
  let listenerRef = useLatestValue(listener);
  (0, import_react15.useEffect)(() => {
    element = element != null ? element : window;
    function handler(event) {
      listenerRef.current(event);
    }
    element.addEventListener(type, handler, options);
    return () => element.removeEventListener(type, handler, options);
  }, [element, type, options]);
}

// src/hooks/use-is-mounted.ts
var import_react16 = require("react");
function useIsMounted() {
  let mounted = (0, import_react16.useRef)(false);
  useIsoMorphicEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return mounted;
}

// src/hooks/use-owner.ts
var import_react17 = require("react");
function useOwnerDocument(...args) {
  return (0, import_react17.useMemo)(() => getOwnerDocument(...args), [...args]);
}

// src/hooks/use-focus-trap.ts
function useFocusTrap(container, features = 30 /* All */, {
  initialFocus,
  containers
} = {}) {
  let restoreElement = (0, import_react18.useRef)(null);
  let previousActiveElement = (0, import_react18.useRef)(null);
  let mounted = useIsMounted();
  let featuresRestoreFocus = Boolean(features & 16 /* RestoreFocus */);
  let featuresInitialFocus = Boolean(features & 2 /* InitialFocus */);
  let ownerDocument = useOwnerDocument(container);
  (0, import_react18.useEffect)(() => {
    if (!featuresRestoreFocus)
      return;
    if (!restoreElement.current) {
      restoreElement.current = ownerDocument == null ? void 0 : ownerDocument.activeElement;
    }
  }, [featuresRestoreFocus, ownerDocument]);
  (0, import_react18.useEffect)(() => {
    if (!featuresRestoreFocus)
      return;
    return () => {
      focusElement(restoreElement.current);
      restoreElement.current = null;
    };
  }, [featuresRestoreFocus]);
  (0, import_react18.useEffect)(() => {
    if (!featuresInitialFocus)
      return;
    let containerElement = container.current;
    if (!containerElement)
      return;
    let activeElement = ownerDocument == null ? void 0 : ownerDocument.activeElement;
    if (initialFocus == null ? void 0 : initialFocus.current) {
      if ((initialFocus == null ? void 0 : initialFocus.current) === activeElement) {
        previousActiveElement.current = activeElement;
        return;
      }
    } else if (containerElement.contains(activeElement)) {
      previousActiveElement.current = activeElement;
      return;
    }
    if (initialFocus == null ? void 0 : initialFocus.current) {
      focusElement(initialFocus.current);
    } else {
      if (focusIn(containerElement, 1 /* First */) === 0 /* Error */) {
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
    }
    previousActiveElement.current = ownerDocument == null ? void 0 : ownerDocument.activeElement;
  }, [container, initialFocus, featuresInitialFocus, ownerDocument]);
  useEventListener(ownerDocument == null ? void 0 : ownerDocument.defaultView, "keydown", (event) => {
    if (!(features & 4 /* TabLock */))
      return;
    if (!container.current)
      return;
    if (event.key !== "Tab" /* Tab */)
      return;
    event.preventDefault();
    if (focusIn(container.current, (event.shiftKey ? 2 /* Previous */ : 4 /* Next */) | 16 /* WrapAround */) === 2 /* Success */) {
      previousActiveElement.current = ownerDocument == null ? void 0 : ownerDocument.activeElement;
    }
  });
  useEventListener(ownerDocument == null ? void 0 : ownerDocument.defaultView, "focus", (event) => {
    if (!(features & 8 /* FocusLock */))
      return;
    let allContainers = new Set(containers == null ? void 0 : containers.current);
    allContainers.add(container);
    if (!allContainers.size)
      return;
    let previous = previousActiveElement.current;
    if (!previous)
      return;
    if (!mounted.current)
      return;
    let toElement = event.target;
    if (toElement && toElement instanceof HTMLElement) {
      if (!contains(allContainers, toElement)) {
        event.preventDefault();
        event.stopPropagation();
        focusElement(previous);
      } else {
        previousActiveElement.current = toElement;
        focusElement(toElement);
      }
    } else {
      focusElement(previousActiveElement.current);
    }
  }, true);
  return restoreElement;
}
function contains(containers, element) {
  var _a2;
  for (let container of containers) {
    if ((_a2 = container.current) == null ? void 0 : _a2.contains(element))
      return true;
  }
  return false;
}

// src/hooks/use-inert-others.ts
var interactables = /* @__PURE__ */ new Set();
var originals = /* @__PURE__ */ new Map();
function inert(element) {
  element.setAttribute("aria-hidden", "true");
  element.inert = true;
}
function restore(element) {
  let original = originals.get(element);
  if (!original)
    return;
  if (original["aria-hidden"] === null)
    element.removeAttribute("aria-hidden");
  else
    element.setAttribute("aria-hidden", original["aria-hidden"]);
  element.inert = original.inert;
}
function useInertOthers(container, enabled = true) {
  useIsoMorphicEffect(() => {
    if (!enabled)
      return;
    if (!container.current)
      return;
    let element = container.current;
    let ownerDocument = getOwnerDocument(element);
    if (!ownerDocument)
      return;
    interactables.add(element);
    for (let original of originals.keys()) {
      if (original.contains(element)) {
        restore(original);
        originals.delete(original);
      }
    }
    ownerDocument.querySelectorAll("body > *").forEach((child) => {
      if (!(child instanceof HTMLElement))
        return;
      for (let interactable of interactables) {
        if (child.contains(interactable))
          return;
      }
      if (interactables.size === 1) {
        originals.set(child, {
          "aria-hidden": child.getAttribute("aria-hidden"),
          inert: child.inert
        });
        inert(child);
      }
    });
    return () => {
      interactables.delete(element);
      if (interactables.size > 0) {
        ownerDocument.querySelectorAll("body > *").forEach((child) => {
          if (!(child instanceof HTMLElement))
            return;
          if (originals.has(child))
            return;
          for (let interactable of interactables) {
            if (child.contains(interactable))
              return;
          }
          originals.set(child, {
            "aria-hidden": child.getAttribute("aria-hidden"),
            inert: child.inert
          });
          inert(child);
        });
      } else {
        for (let element2 of originals.keys()) {
          restore(element2);
          originals.delete(element2);
        }
      }
    };
  }, [enabled]);
}

// src/components/portal/portal.tsx
var import_react20 = __toESM(require("react"), 1);
var import_react_dom = require("react-dom");

// src/internal/portal-force-root.tsx
var import_react19 = __toESM(require("react"), 1);
var ForcePortalRootContext = (0, import_react19.createContext)(false);
function usePortalRoot() {
  return (0, import_react19.useContext)(ForcePortalRootContext);
}
function ForcePortalRoot(props) {
  return /* @__PURE__ */ import_react19.default.createElement(ForcePortalRootContext.Provider, {
    value: props.force
  }, props.children);
}

// src/components/portal/portal.tsx
function usePortalTarget(ref) {
  let forceInRoot = usePortalRoot();
  let groupTarget = (0, import_react20.useContext)(PortalGroupContext);
  let ownerDocument = useOwnerDocument(ref);
  let [target, setTarget] = (0, import_react20.useState)(() => {
    if (!forceInRoot && groupTarget !== null)
      return null;
    if (typeof window === "undefined")
      return null;
    let existingRoot = ownerDocument == null ? void 0 : ownerDocument.getElementById("headlessui-portal-root");
    if (existingRoot)
      return existingRoot;
    if (ownerDocument === null)
      return null;
    let root = ownerDocument.createElement("div");
    root.setAttribute("id", "headlessui-portal-root");
    return ownerDocument.body.appendChild(root);
  });
  (0, import_react20.useEffect)(() => {
    if (target === null)
      return;
    if (!(ownerDocument == null ? void 0 : ownerDocument.body.contains(target))) {
      ownerDocument == null ? void 0 : ownerDocument.body.appendChild(target);
    }
  }, [target, ownerDocument]);
  (0, import_react20.useEffect)(() => {
    if (forceInRoot)
      return;
    if (groupTarget === null)
      return;
    setTarget(groupTarget.current);
  }, [groupTarget, setTarget, forceInRoot]);
  return target;
}
var DEFAULT_PORTAL_TAG = import_react20.Fragment;
var PortalRoot = forwardRefWithAs(function Portal(props, ref) {
  let theirProps = props;
  let internalPortalRootRef = (0, import_react20.useRef)(null);
  let portalRef = useSyncRefs(optionalRef((ref2) => {
    internalPortalRootRef.current = ref2;
  }), ref);
  let ownerDocument = useOwnerDocument(internalPortalRootRef);
  let target = usePortalTarget(internalPortalRootRef);
  let [element] = (0, import_react20.useState)(() => {
    var _a2;
    return typeof window === "undefined" ? null : (_a2 = ownerDocument == null ? void 0 : ownerDocument.createElement("div")) != null ? _a2 : null;
  });
  let ready = useServerHandoffComplete();
  useIsoMorphicEffect(() => {
    if (!target)
      return;
    if (!element)
      return;
    target.appendChild(element);
    return () => {
      var _a2;
      if (!target)
        return;
      if (!element)
        return;
      target.removeChild(element);
      if (target.childNodes.length <= 0) {
        (_a2 = target.parentElement) == null ? void 0 : _a2.removeChild(target);
      }
    };
  }, [target, element]);
  if (!ready)
    return null;
  let ourProps = { ref: portalRef };
  return !target || !element ? null : (0, import_react_dom.createPortal)(render({
    ourProps,
    theirProps,
    defaultTag: DEFAULT_PORTAL_TAG,
    name: "Portal"
  }), element);
});
var DEFAULT_GROUP_TAG = import_react20.Fragment;
var PortalGroupContext = (0, import_react20.createContext)(null);
var Group = forwardRefWithAs(function Group2(props, ref) {
  let { target, ...theirProps } = props;
  let groupRef = useSyncRefs(ref);
  let ourProps = { ref: groupRef };
  return /* @__PURE__ */ import_react20.default.createElement(PortalGroupContext.Provider, {
    value: target
  }, render({
    ourProps,
    theirProps,
    defaultTag: DEFAULT_GROUP_TAG,
    name: "Popover.Group"
  }));
});
var Portal2 = Object.assign(PortalRoot, { Group });

// src/components/description/description.tsx
var import_react21 = __toESM(require("react"), 1);
var DescriptionContext = (0, import_react21.createContext)(null);
function useDescriptionContext() {
  let context = (0, import_react21.useContext)(DescriptionContext);
  if (context === null) {
    let err = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDescriptionContext);
    throw err;
  }
  return context;
}
function useDescriptions() {
  let [descriptionIds, setDescriptionIds] = (0, import_react21.useState)([]);
  return [
    descriptionIds.length > 0 ? descriptionIds.join(" ") : void 0,
    (0, import_react21.useMemo)(() => {
      return function DescriptionProvider(props) {
        let register = (0, import_react21.useCallback)((value) => {
          setDescriptionIds((existing) => [...existing, value]);
          return () => setDescriptionIds((existing) => {
            let clone = existing.slice();
            let idx = clone.indexOf(value);
            if (idx !== -1)
              clone.splice(idx, 1);
            return clone;
          });
        }, []);
        let contextBag = (0, import_react21.useMemo)(() => ({ register, slot: props.slot, name: props.name, props: props.props }), [register, props.slot, props.name, props.props]);
        return /* @__PURE__ */ import_react21.default.createElement(DescriptionContext.Provider, {
          value: contextBag
        }, props.children);
      };
    }, [setDescriptionIds])
  ];
}
var DEFAULT_DESCRIPTION_TAG = "p";
var Description = forwardRefWithAs(function Description2(props, ref) {
  let context = useDescriptionContext();
  let id2 = `headlessui-description-${useId()}`;
  let descriptionRef = useSyncRefs(ref);
  useIsoMorphicEffect(() => context.register(id2), [id2, context.register]);
  let theirProps = props;
  let ourProps = { ref: descriptionRef, ...context.props, id: id2 };
  return render({
    ourProps,
    theirProps,
    slot: context.slot || {},
    defaultTag: DEFAULT_DESCRIPTION_TAG,
    name: context.name || "Description"
  });
});

// src/internal/stack-context.tsx
var import_react22 = __toESM(require("react"), 1);
var StackContext = (0, import_react22.createContext)(() => {
});
StackContext.displayName = "StackContext";
function useStackContext() {
  return (0, import_react22.useContext)(StackContext);
}
function StackProvider({
  children,
  onUpdate,
  type,
  element
}) {
  let parentUpdate = useStackContext();
  let notify = (0, import_react22.useCallback)((...args) => {
    onUpdate == null ? void 0 : onUpdate(...args);
    parentUpdate(...args);
  }, [parentUpdate, onUpdate]);
  useIsoMorphicEffect(() => {
    notify(0 /* Add */, type, element);
    return () => notify(1 /* Remove */, type, element);
  }, [notify, type, element]);
  return /* @__PURE__ */ import_react22.default.createElement(StackContext.Provider, {
    value: notify
  }, children);
}

// src/components/dialog/dialog.tsx
var reducers2 = {
  [0 /* SetTitleId */](state2, action) {
    if (state2.titleId === action.id)
      return state2;
    return { ...state2, titleId: action.id };
  }
};
var DialogContext = (0, import_react23.createContext)(null);
DialogContext.displayName = "DialogContext";
function useDialogContext(component) {
  let context = (0, import_react23.useContext)(DialogContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Dialog /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDialogContext);
    throw err;
  }
  return context;
}
function stateReducer2(state2, action) {
  return match(action.type, reducers2, state2, action);
}
var DEFAULT_DIALOG_TAG = "div";
var DialogRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
var DialogRoot = forwardRefWithAs(function Dialog(props, ref) {
  let { open, onClose, initialFocus, __demoMode = false, ...theirProps } = props;
  let [nestedDialogCount, setNestedDialogCount] = (0, import_react23.useState)(0);
  let usesOpenClosedState = useOpenClosed();
  if (open === void 0 && usesOpenClosedState !== null) {
    open = match(usesOpenClosedState, {
      [0 /* Open */]: true,
      [1 /* Closed */]: false
    });
  }
  let containers = (0, import_react23.useRef)(/* @__PURE__ */ new Set());
  let internalDialogRef = (0, import_react23.useRef)(null);
  let dialogRef = useSyncRefs(internalDialogRef, ref);
  let ownerDocument = useOwnerDocument(internalDialogRef);
  let hasOpen = props.hasOwnProperty("open") || usesOpenClosedState !== null;
  let hasOnClose = props.hasOwnProperty("onClose");
  if (!hasOpen && !hasOnClose) {
    throw new Error(`You have to provide an \`open\` and an \`onClose\` prop to the \`Dialog\` component.`);
  }
  if (!hasOpen) {
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but forgot an \`open\` prop.`);
  }
  if (!hasOnClose) {
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but forgot an \`onClose\` prop.`);
  }
  if (typeof open !== "boolean") {
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${open}`);
  }
  if (typeof onClose !== "function") {
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${onClose}`);
  }
  let dialogState = open ? 0 /* Open */ : 1 /* Closed */;
  let [state2, dispatch] = (0, import_react23.useReducer)(stateReducer2, {
    titleId: null,
    descriptionId: null,
    panelRef: (0, import_react23.createRef)()
  });
  let close = (0, import_react23.useCallback)(() => onClose(false), [onClose]);
  let setTitleId = (0, import_react23.useCallback)((id3) => dispatch({ type: 0 /* SetTitleId */, id: id3 }), [dispatch]);
  let ready = useServerHandoffComplete();
  let enabled = ready ? __demoMode ? false : dialogState === 0 /* Open */ : false;
  let hasNestedDialogs = nestedDialogCount > 1;
  let hasParentDialog = (0, import_react23.useContext)(DialogContext) !== null;
  let position = !hasNestedDialogs ? "leaf" : "parent";
  let previousElement = useFocusTrap(internalDialogRef, enabled ? match(position, {
    parent: 16 /* RestoreFocus */,
    leaf: 30 /* All */ & ~8 /* FocusLock */
  }) : 1 /* None */, { initialFocus, containers });
  useInertOthers(internalDialogRef, hasNestedDialogs ? enabled : false);
  useOutsideClick(() => {
    var _a2, _b;
    let rootContainers = Array.from((_a2 = ownerDocument == null ? void 0 : ownerDocument.querySelectorAll("body > *")) != null ? _a2 : []).filter((container) => {
      if (!(container instanceof HTMLElement))
        return false;
      if (container.contains(previousElement.current))
        return false;
      if (state2.panelRef.current && container.contains(state2.panelRef.current))
        return false;
      return true;
    });
    return [
      ...rootContainers,
      (_b = state2.panelRef.current) != null ? _b : internalDialogRef.current
    ];
  }, () => {
    if (dialogState !== 0 /* Open */)
      return;
    if (hasNestedDialogs)
      return;
    close();
  }, 2 /* IgnoreScrollbars */);
  useEventListener(ownerDocument == null ? void 0 : ownerDocument.defaultView, "keydown", (event) => {
    if (event.key !== "Escape" /* Escape */)
      return;
    if (dialogState !== 0 /* Open */)
      return;
    if (hasNestedDialogs)
      return;
    event.preventDefault();
    event.stopPropagation();
    close();
  });
  (0, import_react23.useEffect)(() => {
    var _a2;
    if (dialogState !== 0 /* Open */)
      return;
    if (hasParentDialog)
      return;
    let ownerDocument2 = getOwnerDocument(internalDialogRef);
    if (!ownerDocument2)
      return;
    let documentElement = ownerDocument2.documentElement;
    let ownerWindow = (_a2 = ownerDocument2.defaultView) != null ? _a2 : window;
    let overflow = documentElement.style.overflow;
    let paddingRight = documentElement.style.paddingRight;
    let scrollbarWidth = ownerWindow.innerWidth - documentElement.clientWidth;
    documentElement.style.overflow = "hidden";
    documentElement.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      documentElement.style.overflow = overflow;
      documentElement.style.paddingRight = paddingRight;
    };
  }, [dialogState, hasParentDialog]);
  (0, import_react23.useEffect)(() => {
    if (dialogState !== 0 /* Open */)
      return;
    if (!internalDialogRef.current)
      return;
    let observer = new IntersectionObserver((entries) => {
      for (let entry of entries) {
        if (entry.boundingClientRect.x === 0 && entry.boundingClientRect.y === 0 && entry.boundingClientRect.width === 0 && entry.boundingClientRect.height === 0) {
          close();
        }
      }
    });
    observer.observe(internalDialogRef.current);
    return () => observer.disconnect();
  }, [dialogState, internalDialogRef, close]);
  let [describedby, DescriptionProvider] = useDescriptions();
  let id2 = `headlessui-dialog-${useId()}`;
  let contextBag = (0, import_react23.useMemo)(() => [{ dialogState, close, setTitleId }, state2], [dialogState, state2, close, setTitleId]);
  let slot = (0, import_react23.useMemo)(() => ({ open: dialogState === 0 /* Open */ }), [dialogState]);
  let ourProps = {
    ref: dialogRef,
    id: id2,
    role: "dialog",
    "aria-modal": dialogState === 0 /* Open */ ? true : void 0,
    "aria-labelledby": state2.titleId,
    "aria-describedby": describedby,
    onClick(event) {
      event.stopPropagation();
    }
  };
  return /* @__PURE__ */ import_react23.default.createElement(StackProvider, {
    type: "Dialog",
    element: internalDialogRef,
    onUpdate: (0, import_react23.useCallback)((message, type, element) => {
      if (type !== "Dialog")
        return;
      match(message, {
        [0 /* Add */]() {
          containers.current.add(element);
          setNestedDialogCount((count) => count + 1);
        },
        [1 /* Remove */]() {
          containers.current.add(element);
          setNestedDialogCount((count) => count - 1);
        }
      });
    }, [])
  }, /* @__PURE__ */ import_react23.default.createElement(ForcePortalRoot, {
    force: true
  }, /* @__PURE__ */ import_react23.default.createElement(Portal2, null, /* @__PURE__ */ import_react23.default.createElement(DialogContext.Provider, {
    value: contextBag
  }, /* @__PURE__ */ import_react23.default.createElement(Portal2.Group, {
    target: internalDialogRef
  }, /* @__PURE__ */ import_react23.default.createElement(ForcePortalRoot, {
    force: false
  }, /* @__PURE__ */ import_react23.default.createElement(DescriptionProvider, {
    slot,
    name: "Dialog.Description"
  }, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_DIALOG_TAG,
    features: DialogRenderFeatures,
    visible: dialogState === 0 /* Open */,
    name: "Dialog"
  }))))))));
});
var DEFAULT_OVERLAY_TAG = "div";
var Overlay = forwardRefWithAs(function Overlay2(props, ref) {
  let [{ dialogState, close }] = useDialogContext("Dialog.Overlay");
  let overlayRef = useSyncRefs(ref);
  let id2 = `headlessui-dialog-overlay-${useId()}`;
  let handleClick = (0, import_react23.useCallback)((event) => {
    if (event.target !== event.currentTarget)
      return;
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    event.preventDefault();
    event.stopPropagation();
    close();
  }, [close]);
  let slot = (0, import_react23.useMemo)(() => ({ open: dialogState === 0 /* Open */ }), [dialogState]);
  let theirProps = props;
  let ourProps = {
    ref: overlayRef,
    id: id2,
    "aria-hidden": true,
    onClick: handleClick
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OVERLAY_TAG,
    name: "Dialog.Overlay"
  });
});
var DEFAULT_BACKDROP_TAG = "div";
var Backdrop = forwardRefWithAs(function Backdrop2(props, ref) {
  let [{ dialogState }, state2] = useDialogContext("Dialog.Backdrop");
  let backdropRef = useSyncRefs(ref);
  let id2 = `headlessui-dialog-backdrop-${useId()}`;
  (0, import_react23.useEffect)(() => {
    if (state2.panelRef.current === null) {
      throw new Error(`A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.`);
    }
  }, [state2.panelRef]);
  let slot = (0, import_react23.useMemo)(() => ({ open: dialogState === 0 /* Open */ }), [dialogState]);
  let theirProps = props;
  let ourProps = {
    ref: backdropRef,
    id: id2,
    "aria-hidden": true
  };
  return /* @__PURE__ */ import_react23.default.createElement(ForcePortalRoot, {
    force: true
  }, /* @__PURE__ */ import_react23.default.createElement(Portal2, null, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_BACKDROP_TAG,
    name: "Dialog.Backdrop"
  })));
});
var DEFAULT_PANEL_TAG = "div";
var Panel = forwardRefWithAs(function Panel2(props, ref) {
  let [{ dialogState }, state2] = useDialogContext("Dialog.Panel");
  let panelRef = useSyncRefs(ref, state2.panelRef);
  let id2 = `headlessui-dialog-panel-${useId()}`;
  let slot = (0, import_react23.useMemo)(() => ({ open: dialogState === 0 /* Open */ }), [dialogState]);
  let theirProps = props;
  let ourProps = {
    ref: panelRef,
    id: id2
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_PANEL_TAG,
    name: "Dialog.Panel"
  });
});
var DEFAULT_TITLE_TAG = "h2";
var Title = forwardRefWithAs(function Title2(props, ref) {
  let [{ dialogState, setTitleId }] = useDialogContext("Dialog.Title");
  let id2 = `headlessui-dialog-title-${useId()}`;
  let titleRef = useSyncRefs(ref);
  (0, import_react23.useEffect)(() => {
    setTitleId(id2);
    return () => setTitleId(null);
  }, [id2, setTitleId]);
  let slot = (0, import_react23.useMemo)(() => ({ open: dialogState === 0 /* Open */ }), [dialogState]);
  let theirProps = props;
  let ourProps = { ref: titleRef, id: id2 };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_TITLE_TAG,
    name: "Dialog.Title"
  });
});
var Dialog2 = Object.assign(DialogRoot, { Backdrop, Panel, Overlay, Title, Description });

// src/components/disclosure/disclosure.tsx
var import_react24 = __toESM(require("react"), 1);
var reducers3 = {
  [0 /* ToggleDisclosure */]: (state2) => ({
    ...state2,
    disclosureState: match(state2.disclosureState, {
      [0 /* Open */]: 1 /* Closed */,
      [1 /* Closed */]: 0 /* Open */
    })
  }),
  [1 /* CloseDisclosure */]: (state2) => {
    if (state2.disclosureState === 1 /* Closed */)
      return state2;
    return { ...state2, disclosureState: 1 /* Closed */ };
  },
  [4 /* LinkPanel */](state2) {
    if (state2.linkedPanel === true)
      return state2;
    return { ...state2, linkedPanel: true };
  },
  [5 /* UnlinkPanel */](state2) {
    if (state2.linkedPanel === false)
      return state2;
    return { ...state2, linkedPanel: false };
  },
  [2 /* SetButtonId */](state2, action) {
    if (state2.buttonId === action.buttonId)
      return state2;
    return { ...state2, buttonId: action.buttonId };
  },
  [3 /* SetPanelId */](state2, action) {
    if (state2.panelId === action.panelId)
      return state2;
    return { ...state2, panelId: action.panelId };
  }
};
var DisclosureContext = (0, import_react24.createContext)(null);
DisclosureContext.displayName = "DisclosureContext";
function useDisclosureContext(component) {
  let context = (0, import_react24.useContext)(DisclosureContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Disclosure /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDisclosureContext);
    throw err;
  }
  return context;
}
var DisclosureAPIContext = (0, import_react24.createContext)(null);
DisclosureAPIContext.displayName = "DisclosureAPIContext";
function useDisclosureAPIContext(component) {
  let context = (0, import_react24.useContext)(DisclosureAPIContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Disclosure /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDisclosureAPIContext);
    throw err;
  }
  return context;
}
var DisclosurePanelContext = (0, import_react24.createContext)(null);
DisclosurePanelContext.displayName = "DisclosurePanelContext";
function useDisclosurePanelContext() {
  return (0, import_react24.useContext)(DisclosurePanelContext);
}
function stateReducer3(state2, action) {
  return match(action.type, reducers3, state2, action);
}
var DEFAULT_DISCLOSURE_TAG = import_react24.Fragment;
var DisclosureRoot = forwardRefWithAs(function Disclosure(props, ref) {
  let { defaultOpen = false, ...theirProps } = props;
  let buttonId = `headlessui-disclosure-button-${useId()}`;
  let panelId = `headlessui-disclosure-panel-${useId()}`;
  let internalDisclosureRef = (0, import_react24.useRef)(null);
  let disclosureRef = useSyncRefs(ref, optionalRef((ref2) => {
    internalDisclosureRef.current = ref2;
  }, props.as === void 0 || props.as === import_react24.default.Fragment));
  let panelRef = (0, import_react24.useRef)(null);
  let buttonRef = (0, import_react24.useRef)(null);
  let reducerBag = (0, import_react24.useReducer)(stateReducer3, {
    disclosureState: defaultOpen ? 0 /* Open */ : 1 /* Closed */,
    linkedPanel: false,
    buttonRef,
    panelRef,
    buttonId,
    panelId
  });
  let [{ disclosureState }, dispatch] = reducerBag;
  (0, import_react24.useEffect)(() => dispatch({ type: 2 /* SetButtonId */, buttonId }), [buttonId, dispatch]);
  (0, import_react24.useEffect)(() => dispatch({ type: 3 /* SetPanelId */, panelId }), [panelId, dispatch]);
  let close = (0, import_react24.useCallback)((focusableElement) => {
    dispatch({ type: 1 /* CloseDisclosure */ });
    let ownerDocument = getOwnerDocument(internalDisclosureRef);
    if (!ownerDocument)
      return;
    let restoreElement = (() => {
      if (!focusableElement)
        return ownerDocument.getElementById(buttonId);
      if (focusableElement instanceof HTMLElement)
        return focusableElement;
      if (focusableElement.current instanceof HTMLElement)
        return focusableElement.current;
      return ownerDocument.getElementById(buttonId);
    })();
    restoreElement == null ? void 0 : restoreElement.focus();
  }, [dispatch, buttonId]);
  let api = (0, import_react24.useMemo)(() => ({ close }), [close]);
  let slot = (0, import_react24.useMemo)(() => ({ open: disclosureState === 0 /* Open */, close }), [disclosureState, close]);
  let ourProps = {
    ref: disclosureRef
  };
  return /* @__PURE__ */ import_react24.default.createElement(DisclosureContext.Provider, {
    value: reducerBag
  }, /* @__PURE__ */ import_react24.default.createElement(DisclosureAPIContext.Provider, {
    value: api
  }, /* @__PURE__ */ import_react24.default.createElement(OpenClosedProvider, {
    value: match(disclosureState, {
      [0 /* Open */]: 0 /* Open */,
      [1 /* Closed */]: 1 /* Closed */
    })
  }, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_DISCLOSURE_TAG,
    name: "Disclosure"
  }))));
});
var DEFAULT_BUTTON_TAG2 = "button";
var Button3 = forwardRefWithAs(function Button4(props, ref) {
  let [state2, dispatch] = useDisclosureContext("Disclosure.Button");
  let panelContext = useDisclosurePanelContext();
  let isWithinPanel = panelContext === null ? false : panelContext === state2.panelId;
  let internalButtonRef = (0, import_react24.useRef)(null);
  let buttonRef = useSyncRefs(internalButtonRef, ref, !isWithinPanel ? state2.buttonRef : null);
  let handleKeyDown = (0, import_react24.useCallback)((event) => {
    var _a2;
    if (isWithinPanel) {
      if (state2.disclosureState === 1 /* Closed */)
        return;
      switch (event.key) {
        case " " /* Space */:
        case "Enter" /* Enter */:
          event.preventDefault();
          event.stopPropagation();
          dispatch({ type: 0 /* ToggleDisclosure */ });
          (_a2 = state2.buttonRef.current) == null ? void 0 : _a2.focus();
          break;
      }
    } else {
      switch (event.key) {
        case " " /* Space */:
        case "Enter" /* Enter */:
          event.preventDefault();
          event.stopPropagation();
          dispatch({ type: 0 /* ToggleDisclosure */ });
          break;
      }
    }
  }, [dispatch, isWithinPanel, state2.disclosureState, state2.buttonRef]);
  let handleKeyUp = (0, import_react24.useCallback)((event) => {
    switch (event.key) {
      case " " /* Space */:
        event.preventDefault();
        break;
    }
  }, []);
  let handleClick = (0, import_react24.useCallback)((event) => {
    var _a2;
    if (isDisabledReactIssue7711(event.currentTarget))
      return;
    if (props.disabled)
      return;
    if (isWithinPanel) {
      dispatch({ type: 0 /* ToggleDisclosure */ });
      (_a2 = state2.buttonRef.current) == null ? void 0 : _a2.focus();
    } else {
      dispatch({ type: 0 /* ToggleDisclosure */ });
    }
  }, [dispatch, props.disabled, state2.buttonRef, isWithinPanel]);
  let slot = (0, import_react24.useMemo)(() => ({ open: state2.disclosureState === 0 /* Open */ }), [state2]);
  let type = useResolveButtonType(props, internalButtonRef);
  let theirProps = props;
  let ourProps = isWithinPanel ? { ref: buttonRef, type, onKeyDown: handleKeyDown, onClick: handleClick } : {
    ref: buttonRef,
    id: state2.buttonId,
    type,
    "aria-expanded": props.disabled ? void 0 : state2.disclosureState === 0 /* Open */,
    "aria-controls": state2.linkedPanel ? state2.panelId : void 0,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_BUTTON_TAG2,
    name: "Disclosure.Button"
  });
});
var DEFAULT_PANEL_TAG2 = "div";
var PanelRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
var Panel3 = forwardRefWithAs(function Panel4(props, ref) {
  let [state2, dispatch] = useDisclosureContext("Disclosure.Panel");
  let { close } = useDisclosureAPIContext("Disclosure.Panel");
  let panelRef = useSyncRefs(ref, state2.panelRef, () => {
    if (state2.linkedPanel)
      return;
    dispatch({ type: 4 /* LinkPanel */ });
  });
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === 0 /* Open */;
    }
    return state2.disclosureState === 0 /* Open */;
  })();
  (0, import_react24.useEffect)(() => () => dispatch({ type: 5 /* UnlinkPanel */ }), [dispatch]);
  (0, import_react24.useEffect)(() => {
    var _a2;
    if (state2.disclosureState === 1 /* Closed */ && ((_a2 = props.unmount) != null ? _a2 : true)) {
      dispatch({ type: 5 /* UnlinkPanel */ });
    }
  }, [state2.disclosureState, props.unmount, dispatch]);
  let slot = (0, import_react24.useMemo)(() => ({ open: state2.disclosureState === 0 /* Open */, close }), [state2, close]);
  let theirProps = props;
  let ourProps = {
    ref: panelRef,
    id: state2.panelId
  };
  return /* @__PURE__ */ import_react24.default.createElement(DisclosurePanelContext.Provider, {
    value: state2.panelId
  }, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_PANEL_TAG2,
    features: PanelRenderFeatures,
    visible,
    name: "Disclosure.Panel"
  }));
});
var Disclosure2 = Object.assign(DisclosureRoot, { Button: Button3, Panel: Panel3 });

// src/components/focus-trap/focus-trap.tsx
var import_react25 = require("react");
var DEFAULT_FOCUS_TRAP_TAG = "div";
var FocusTrap = forwardRefWithAs(function FocusTrap2(props, ref) {
  let container = (0, import_react25.useRef)(null);
  let focusTrapRef = useSyncRefs(container, ref);
  let { initialFocus, ...theirProps } = props;
  let ready = useServerHandoffComplete();
  useFocusTrap(container, ready ? 30 /* All */ : 1 /* None */, { initialFocus });
  let ourProps = {
    ref: focusTrapRef
  };
  return render({
    ourProps,
    theirProps,
    defaultTag: DEFAULT_FOCUS_TRAP_TAG,
    name: "FocusTrap"
  });
});

// src/components/listbox/listbox.tsx
var import_react26 = __toESM(require("react"), 1);
function adjustOrderedState2(state2, adjustment = (i) => i) {
  let currentActiveOption = state2.activeOptionIndex !== null ? state2.options[state2.activeOptionIndex] : null;
  let sortedOptions = sortByDomNode(adjustment(state2.options.slice()), (option) => option.dataRef.current.domRef.current);
  let adjustedActiveOptionIndex = currentActiveOption ? sortedOptions.indexOf(currentActiveOption) : null;
  if (adjustedActiveOptionIndex === -1) {
    adjustedActiveOptionIndex = null;
  }
  return {
    options: sortedOptions,
    activeOptionIndex: adjustedActiveOptionIndex
  };
}
var reducers4 = {
  [1 /* CloseListbox */](state2) {
    if (state2.disabled)
      return state2;
    if (state2.listboxState === 1 /* Closed */)
      return state2;
    return { ...state2, activeOptionIndex: null, listboxState: 1 /* Closed */ };
  },
  [0 /* OpenListbox */](state2) {
    if (state2.disabled)
      return state2;
    if (state2.listboxState === 0 /* Open */)
      return state2;
    let activeOptionIndex = state2.activeOptionIndex;
    let { value, mode } = state2.propsRef.current;
    let optionIdx = state2.options.findIndex((option) => {
      let optionValue = option.dataRef.current.value;
      let selected = match(mode, {
        [1 /* Multi */]: () => value.includes(optionValue),
        [0 /* Single */]: () => value === optionValue
      });
      return selected;
    });
    if (optionIdx !== -1) {
      activeOptionIndex = optionIdx;
    }
    return { ...state2, listboxState: 0 /* Open */, activeOptionIndex };
  },
  [2 /* SetDisabled */](state2, action) {
    if (state2.disabled === action.disabled)
      return state2;
    return { ...state2, disabled: action.disabled };
  },
  [3 /* SetOrientation */](state2, action) {
    if (state2.orientation === action.orientation)
      return state2;
    return { ...state2, orientation: action.orientation };
  },
  [4 /* GoToOption */](state2, action) {
    var _a2;
    if (state2.disabled)
      return state2;
    if (state2.listboxState === 1 /* Closed */)
      return state2;
    let adjustedState = adjustOrderedState2(state2);
    let activeOptionIndex = calculateActiveIndex(action, {
      resolveItems: () => adjustedState.options,
      resolveActiveIndex: () => adjustedState.activeOptionIndex,
      resolveId: (option) => option.id,
      resolveDisabled: (option) => option.dataRef.current.disabled
    });
    return {
      ...state2,
      ...adjustedState,
      searchQuery: "",
      activeOptionIndex,
      activationTrigger: (_a2 = action.trigger) != null ? _a2 : 1 /* Other */
    };
  },
  [5 /* Search */]: (state2, action) => {
    if (state2.disabled)
      return state2;
    if (state2.listboxState === 1 /* Closed */)
      return state2;
    let wasAlreadySearching = state2.searchQuery !== "";
    let offset = wasAlreadySearching ? 0 : 1;
    let searchQuery = state2.searchQuery + action.value.toLowerCase();
    let reOrderedOptions = state2.activeOptionIndex !== null ? state2.options.slice(state2.activeOptionIndex + offset).concat(state2.options.slice(0, state2.activeOptionIndex + offset)) : state2.options;
    let matchingOption = reOrderedOptions.find((option) => {
      var _a2;
      return !option.dataRef.current.disabled && ((_a2 = option.dataRef.current.textValue) == null ? void 0 : _a2.startsWith(searchQuery));
    });
    let matchIdx = matchingOption ? state2.options.indexOf(matchingOption) : -1;
    if (matchIdx === -1 || matchIdx === state2.activeOptionIndex)
      return { ...state2, searchQuery };
    return {
      ...state2,
      searchQuery,
      activeOptionIndex: matchIdx,
      activationTrigger: 1 /* Other */
    };
  },
  [6 /* ClearSearch */](state2) {
    if (state2.disabled)
      return state2;
    if (state2.listboxState === 1 /* Closed */)
      return state2;
    if (state2.searchQuery === "")
      return state2;
    return { ...state2, searchQuery: "" };
  },
  [7 /* RegisterOption */]: (state2, action) => {
    let option = { id: action.id, dataRef: action.dataRef };
    let adjustedState = adjustOrderedState2(state2, (options) => [...options, option]);
    if (state2.activeOptionIndex === null) {
      let { value, mode } = state2.propsRef.current;
      let optionValue = action.dataRef.current.value;
      let selected = match(mode, {
        [1 /* Multi */]: () => value.includes(optionValue),
        [0 /* Single */]: () => value === optionValue
      });
      if (selected) {
        adjustedState.activeOptionIndex = adjustedState.options.indexOf(option);
      }
    }
    return { ...state2, ...adjustedState };
  },
  [8 /* UnregisterOption */]: (state2, action) => {
    let adjustedState = adjustOrderedState2(state2, (options) => {
      let idx = options.findIndex((a) => a.id === action.id);
      if (idx !== -1)
        options.splice(idx, 1);
      return options;
    });
    return {
      ...state2,
      ...adjustedState,
      activationTrigger: 1 /* Other */
    };
  }
};
var ListboxContext = (0, import_react26.createContext)(null);
ListboxContext.displayName = "ListboxContext";
function useListboxContext(component) {
  let context = (0, import_react26.useContext)(ListboxContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Listbox /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useListboxContext);
    throw err;
  }
  return context;
}
function stateReducer4(state2, action) {
  return match(action.type, reducers4, state2, action);
}
var DEFAULT_LISTBOX_TAG = import_react26.Fragment;
var ListboxRoot = forwardRefWithAs(function Listbox(props, ref) {
  let {
    value,
    name,
    onChange,
    disabled = false,
    horizontal = false,
    multiple = false,
    ...theirProps
  } = props;
  const orientation = horizontal ? "horizontal" : "vertical";
  let listboxRef = useSyncRefs(ref);
  let reducerBag = (0, import_react26.useReducer)(stateReducer4, {
    listboxState: 1 /* Closed */,
    propsRef: {
      current: { value, onChange, mode: multiple ? 1 /* Multi */ : 0 /* Single */ }
    },
    labelRef: (0, import_react26.createRef)(),
    buttonRef: (0, import_react26.createRef)(),
    optionsRef: (0, import_react26.createRef)(),
    disabled,
    orientation,
    options: [],
    searchQuery: "",
    activeOptionIndex: null,
    activationTrigger: 1 /* Other */
  });
  let [{ listboxState, propsRef, optionsRef, buttonRef }, dispatch] = reducerBag;
  propsRef.current.value = value;
  propsRef.current.mode = multiple ? 1 /* Multi */ : 0 /* Single */;
  useIsoMorphicEffect(() => {
    propsRef.current.onChange = (value2) => {
      return match(propsRef.current.mode, {
        [0 /* Single */]() {
          return onChange(value2);
        },
        [1 /* Multi */]() {
          let copy = propsRef.current.value.slice();
          let idx = copy.indexOf(value2);
          if (idx === -1) {
            copy.push(value2);
          } else {
            copy.splice(idx, 1);
          }
          return onChange(copy);
        }
      });
    };
  }, [onChange, propsRef]);
  useIsoMorphicEffect(() => dispatch({ type: 2 /* SetDisabled */, disabled }), [disabled]);
  useIsoMorphicEffect(() => dispatch({ type: 3 /* SetOrientation */, orientation }), [orientation]);
  useOutsideClick([buttonRef, optionsRef], (event, target) => {
    var _a2;
    if (listboxState !== 0 /* Open */)
      return;
    dispatch({ type: 1 /* CloseListbox */ });
    if (!isFocusableElement(target, 1 /* Loose */)) {
      event.preventDefault();
      (_a2 = buttonRef.current) == null ? void 0 : _a2.focus();
    }
  });
  let slot = (0, import_react26.useMemo)(() => ({ open: listboxState === 0 /* Open */, disabled }), [listboxState, disabled]);
  let ourProps = { ref: listboxRef };
  return /* @__PURE__ */ import_react26.default.createElement(ListboxContext.Provider, {
    value: reducerBag
  }, /* @__PURE__ */ import_react26.default.createElement(OpenClosedProvider, {
    value: match(listboxState, {
      [0 /* Open */]: 0 /* Open */,
      [1 /* Closed */]: 1 /* Closed */
    })
  }, name != null && value != null && objectToFormEntries({ [name]: value }).map(([name2, value2]) => /* @__PURE__ */ import_react26.default.createElement(VisuallyHidden, {
    ...compact({
      key: name2,
      as: "input",
      type: "hidden",
      hidden: true,
      readOnly: true,
      name: name2,
      value: value2
    })
  })), render({ ourProps, theirProps, slot, defaultTag: DEFAULT_LISTBOX_TAG, name: "Listbox" })));
});
var DEFAULT_BUTTON_TAG3 = "button";
var Button5 = forwardRefWithAs(function Button6(props, ref) {
  var _a2;
  let [state2, dispatch] = useListboxContext("Listbox.Button");
  let buttonRef = useSyncRefs(state2.buttonRef, ref);
  let id2 = `headlessui-listbox-button-${useId()}`;
  let d = useDisposables();
  let handleKeyDown = (0, import_react26.useCallback)((event) => {
    switch (event.key) {
      case " " /* Space */:
      case "Enter" /* Enter */:
      case "ArrowDown" /* ArrowDown */:
        event.preventDefault();
        dispatch({ type: 0 /* OpenListbox */ });
        d.nextFrame(() => {
          if (!state2.propsRef.current.value)
            dispatch({ type: 4 /* GoToOption */, focus: 0 /* First */ });
        });
        break;
      case "ArrowUp" /* ArrowUp */:
        event.preventDefault();
        dispatch({ type: 0 /* OpenListbox */ });
        d.nextFrame(() => {
          if (!state2.propsRef.current.value)
            dispatch({ type: 4 /* GoToOption */, focus: 3 /* Last */ });
        });
        break;
    }
  }, [dispatch, state2, d]);
  let handleKeyUp = (0, import_react26.useCallback)((event) => {
    switch (event.key) {
      case " " /* Space */:
        event.preventDefault();
        break;
    }
  }, []);
  let handleClick = (0, import_react26.useCallback)((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    if (state2.listboxState === 0 /* Open */) {
      dispatch({ type: 1 /* CloseListbox */ });
      d.nextFrame(() => {
        var _a3;
        return (_a3 = state2.buttonRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
      });
    } else {
      event.preventDefault();
      dispatch({ type: 0 /* OpenListbox */ });
    }
  }, [dispatch, d, state2]);
  let labelledby = useComputed(() => {
    if (!state2.labelRef.current)
      return void 0;
    return [state2.labelRef.current.id, id2].join(" ");
  }, [state2.labelRef.current, id2]);
  let slot = (0, import_react26.useMemo)(() => ({ open: state2.listboxState === 0 /* Open */, disabled: state2.disabled }), [state2]);
  let theirProps = props;
  let ourProps = {
    ref: buttonRef,
    id: id2,
    type: useResolveButtonType(props, state2.buttonRef),
    "aria-haspopup": true,
    "aria-controls": (_a2 = state2.optionsRef.current) == null ? void 0 : _a2.id,
    "aria-expanded": state2.disabled ? void 0 : state2.listboxState === 0 /* Open */,
    "aria-labelledby": labelledby,
    disabled: state2.disabled,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_BUTTON_TAG3,
    name: "Listbox.Button"
  });
});
var DEFAULT_LABEL_TAG2 = "label";
var Label3 = forwardRefWithAs(function Label4(props, ref) {
  let [state2] = useListboxContext("Listbox.Label");
  let id2 = `headlessui-listbox-label-${useId()}`;
  let labelRef = useSyncRefs(state2.labelRef, ref);
  let handleClick = (0, import_react26.useCallback)(() => {
    var _a2;
    return (_a2 = state2.buttonRef.current) == null ? void 0 : _a2.focus({ preventScroll: true });
  }, [state2.buttonRef]);
  let slot = (0, import_react26.useMemo)(() => ({ open: state2.listboxState === 0 /* Open */, disabled: state2.disabled }), [state2]);
  let theirProps = props;
  let ourProps = { ref: labelRef, id: id2, onClick: handleClick };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_LABEL_TAG2,
    name: "Listbox.Label"
  });
});
var DEFAULT_OPTIONS_TAG2 = "ul";
var OptionsRenderFeatures2 = 1 /* RenderStrategy */ | 2 /* Static */;
var Options3 = forwardRefWithAs(function Options4(props, ref) {
  var _a2;
  let [state2, dispatch] = useListboxContext("Listbox.Options");
  let optionsRef = useSyncRefs(state2.optionsRef, ref);
  let id2 = `headlessui-listbox-options-${useId()}`;
  let d = useDisposables();
  let searchDisposables = useDisposables();
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === 0 /* Open */;
    }
    return state2.listboxState === 0 /* Open */;
  })();
  (0, import_react26.useEffect)(() => {
    var _a3;
    let container = state2.optionsRef.current;
    if (!container)
      return;
    if (state2.listboxState !== 0 /* Open */)
      return;
    if (container === ((_a3 = getOwnerDocument(container)) == null ? void 0 : _a3.activeElement))
      return;
    container.focus({ preventScroll: true });
  }, [state2.listboxState, state2.optionsRef]);
  let handleKeyDown = (0, import_react26.useCallback)((event) => {
    searchDisposables.dispose();
    switch (event.key) {
      case " " /* Space */:
        if (state2.searchQuery !== "") {
          event.preventDefault();
          event.stopPropagation();
          return dispatch({ type: 5 /* Search */, value: event.key });
        }
      case "Enter" /* Enter */:
        event.preventDefault();
        event.stopPropagation();
        if (state2.activeOptionIndex !== null) {
          let { dataRef } = state2.options[state2.activeOptionIndex];
          state2.propsRef.current.onChange(dataRef.current.value);
        }
        if (state2.propsRef.current.mode === 0 /* Single */) {
          dispatch({ type: 1 /* CloseListbox */ });
          disposables().nextFrame(() => {
            var _a3;
            return (_a3 = state2.buttonRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
          });
        }
        break;
      case match(state2.orientation, { vertical: "ArrowDown" /* ArrowDown */, horizontal: "ArrowRight" /* ArrowRight */ }):
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 4 /* GoToOption */, focus: 2 /* Next */ });
      case match(state2.orientation, { vertical: "ArrowUp" /* ArrowUp */, horizontal: "ArrowLeft" /* ArrowLeft */ }):
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 4 /* GoToOption */, focus: 1 /* Previous */ });
      case "Home" /* Home */:
      case "PageUp" /* PageUp */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 4 /* GoToOption */, focus: 0 /* First */ });
      case "End" /* End */:
      case "PageDown" /* PageDown */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 4 /* GoToOption */, focus: 3 /* Last */ });
      case "Escape" /* Escape */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 1 /* CloseListbox */ });
        return d.nextFrame(() => {
          var _a3;
          return (_a3 = state2.buttonRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
        });
      case "Tab" /* Tab */:
        event.preventDefault();
        event.stopPropagation();
        break;
      default:
        if (event.key.length === 1) {
          dispatch({ type: 5 /* Search */, value: event.key });
          searchDisposables.setTimeout(() => dispatch({ type: 6 /* ClearSearch */ }), 350);
        }
        break;
    }
  }, [d, dispatch, searchDisposables, state2]);
  let labelledby = useComputed(() => {
    var _a3, _b, _c;
    return (_c = (_a3 = state2.labelRef.current) == null ? void 0 : _a3.id) != null ? _c : (_b = state2.buttonRef.current) == null ? void 0 : _b.id;
  }, [state2.labelRef.current, state2.buttonRef.current]);
  let slot = (0, import_react26.useMemo)(() => ({ open: state2.listboxState === 0 /* Open */ }), [state2]);
  let theirProps = props;
  let ourProps = {
    "aria-activedescendant": state2.activeOptionIndex === null ? void 0 : (_a2 = state2.options[state2.activeOptionIndex]) == null ? void 0 : _a2.id,
    "aria-multiselectable": state2.propsRef.current.mode === 1 /* Multi */ ? true : void 0,
    "aria-labelledby": labelledby,
    "aria-orientation": state2.orientation,
    id: id2,
    onKeyDown: handleKeyDown,
    role: "listbox",
    tabIndex: 0,
    ref: optionsRef
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OPTIONS_TAG2,
    features: OptionsRenderFeatures2,
    visible,
    name: "Listbox.Options"
  });
});
var DEFAULT_OPTION_TAG2 = "li";
var Option3 = forwardRefWithAs(function Option4(props, ref) {
  let { disabled = false, value, ...theirProps } = props;
  let [state2, dispatch] = useListboxContext("Listbox.Option");
  let id2 = `headlessui-listbox-option-${useId()}`;
  let active = state2.activeOptionIndex !== null ? state2.options[state2.activeOptionIndex].id === id2 : false;
  let selected = match(state2.propsRef.current.mode, {
    [1 /* Multi */]: () => state2.propsRef.current.value.includes(value),
    [0 /* Single */]: () => state2.propsRef.current.value === value
  });
  let internalOptionRef = (0, import_react26.useRef)(null);
  let optionRef = useSyncRefs(ref, internalOptionRef);
  useIsoMorphicEffect(() => {
    if (state2.listboxState !== 0 /* Open */)
      return;
    if (!active)
      return;
    if (state2.activationTrigger === 0 /* Pointer */)
      return;
    let d = disposables();
    d.requestAnimationFrame(() => {
      var _a2, _b;
      (_b = (_a2 = internalOptionRef.current) == null ? void 0 : _a2.scrollIntoView) == null ? void 0 : _b.call(_a2, { block: "nearest" });
    });
    return d.dispose;
  }, [internalOptionRef, active, state2.listboxState, state2.activationTrigger, state2.activeOptionIndex]);
  let bag = (0, import_react26.useRef)({ disabled, value, domRef: internalOptionRef });
  useIsoMorphicEffect(() => {
    bag.current.disabled = disabled;
  }, [bag, disabled]);
  useIsoMorphicEffect(() => {
    bag.current.value = value;
  }, [bag, value]);
  useIsoMorphicEffect(() => {
    var _a2, _b;
    bag.current.textValue = (_b = (_a2 = internalOptionRef.current) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.toLowerCase();
  }, [bag, internalOptionRef]);
  let select = (0, import_react26.useCallback)(() => state2.propsRef.current.onChange(value), [state2.propsRef, value]);
  useIsoMorphicEffect(() => {
    dispatch({ type: 7 /* RegisterOption */, id: id2, dataRef: bag });
    return () => dispatch({ type: 8 /* UnregisterOption */, id: id2 });
  }, [bag, id2]);
  let handleClick = (0, import_react26.useCallback)((event) => {
    if (disabled)
      return event.preventDefault();
    select();
    if (state2.propsRef.current.mode === 0 /* Single */) {
      dispatch({ type: 1 /* CloseListbox */ });
      disposables().nextFrame(() => {
        var _a2;
        return (_a2 = state2.buttonRef.current) == null ? void 0 : _a2.focus({ preventScroll: true });
      });
    }
  }, [dispatch, state2.buttonRef, disabled, select]);
  let handleFocus = (0, import_react26.useCallback)(() => {
    if (disabled)
      return dispatch({ type: 4 /* GoToOption */, focus: 5 /* Nothing */ });
    dispatch({ type: 4 /* GoToOption */, focus: 4 /* Specific */, id: id2 });
  }, [disabled, id2, dispatch]);
  let handleMove = (0, import_react26.useCallback)(() => {
    if (disabled)
      return;
    if (active)
      return;
    dispatch({
      type: 4 /* GoToOption */,
      focus: 4 /* Specific */,
      id: id2,
      trigger: 0 /* Pointer */
    });
  }, [disabled, active, id2, dispatch]);
  let handleLeave = (0, import_react26.useCallback)(() => {
    if (disabled)
      return;
    if (!active)
      return;
    dispatch({ type: 4 /* GoToOption */, focus: 5 /* Nothing */ });
  }, [disabled, active, dispatch]);
  let slot = (0, import_react26.useMemo)(() => ({ active, selected, disabled }), [active, selected, disabled]);
  let ourProps = {
    id: id2,
    ref: optionRef,
    role: "option",
    tabIndex: disabled === true ? void 0 : -1,
    "aria-disabled": disabled === true ? true : void 0,
    "aria-selected": selected === true ? true : void 0,
    disabled: void 0,
    onClick: handleClick,
    onFocus: handleFocus,
    onPointerMove: handleMove,
    onMouseMove: handleMove,
    onPointerLeave: handleLeave,
    onMouseLeave: handleLeave
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OPTION_TAG2,
    name: "Listbox.Option"
  });
});
var Listbox2 = Object.assign(ListboxRoot, { Button: Button5, Label: Label3, Options: Options3, Option: Option3 });

// src/components/menu/menu.tsx
var import_react27 = __toESM(require("react"), 1);
function adjustOrderedState3(state2, adjustment = (i) => i) {
  let currentActiveItem = state2.activeItemIndex !== null ? state2.items[state2.activeItemIndex] : null;
  let sortedItems = sortByDomNode(adjustment(state2.items.slice()), (item) => item.dataRef.current.domRef.current);
  let adjustedActiveItemIndex = currentActiveItem ? sortedItems.indexOf(currentActiveItem) : null;
  if (adjustedActiveItemIndex === -1) {
    adjustedActiveItemIndex = null;
  }
  return {
    items: sortedItems,
    activeItemIndex: adjustedActiveItemIndex
  };
}
var reducers5 = {
  [1 /* CloseMenu */](state2) {
    if (state2.menuState === 1 /* Closed */)
      return state2;
    return { ...state2, activeItemIndex: null, menuState: 1 /* Closed */ };
  },
  [0 /* OpenMenu */](state2) {
    if (state2.menuState === 0 /* Open */)
      return state2;
    return { ...state2, menuState: 0 /* Open */ };
  },
  [2 /* GoToItem */]: (state2, action) => {
    var _a2;
    let adjustedState = adjustOrderedState3(state2);
    let activeItemIndex = calculateActiveIndex(action, {
      resolveItems: () => adjustedState.items,
      resolveActiveIndex: () => adjustedState.activeItemIndex,
      resolveId: (item) => item.id,
      resolveDisabled: (item) => item.dataRef.current.disabled
    });
    return {
      ...state2,
      ...adjustedState,
      searchQuery: "",
      activeItemIndex,
      activationTrigger: (_a2 = action.trigger) != null ? _a2 : 1 /* Other */
    };
  },
  [3 /* Search */]: (state2, action) => {
    let wasAlreadySearching = state2.searchQuery !== "";
    let offset = wasAlreadySearching ? 0 : 1;
    let searchQuery = state2.searchQuery + action.value.toLowerCase();
    let reOrderedItems = state2.activeItemIndex !== null ? state2.items.slice(state2.activeItemIndex + offset).concat(state2.items.slice(0, state2.activeItemIndex + offset)) : state2.items;
    let matchingItem = reOrderedItems.find((item) => {
      var _a2;
      return ((_a2 = item.dataRef.current.textValue) == null ? void 0 : _a2.startsWith(searchQuery)) && !item.dataRef.current.disabled;
    });
    let matchIdx = matchingItem ? state2.items.indexOf(matchingItem) : -1;
    if (matchIdx === -1 || matchIdx === state2.activeItemIndex)
      return { ...state2, searchQuery };
    return {
      ...state2,
      searchQuery,
      activeItemIndex: matchIdx,
      activationTrigger: 1 /* Other */
    };
  },
  [4 /* ClearSearch */](state2) {
    if (state2.searchQuery === "")
      return state2;
    return { ...state2, searchQuery: "", searchActiveItemIndex: null };
  },
  [5 /* RegisterItem */]: (state2, action) => {
    let adjustedState = adjustOrderedState3(state2, (items) => [
      ...items,
      { id: action.id, dataRef: action.dataRef }
    ]);
    return { ...state2, ...adjustedState };
  },
  [6 /* UnregisterItem */]: (state2, action) => {
    let adjustedState = adjustOrderedState3(state2, (items) => {
      let idx = items.findIndex((a) => a.id === action.id);
      if (idx !== -1)
        items.splice(idx, 1);
      return items;
    });
    return {
      ...state2,
      ...adjustedState,
      activationTrigger: 1 /* Other */
    };
  }
};
var MenuContext = (0, import_react27.createContext)(null);
MenuContext.displayName = "MenuContext";
function useMenuContext(component) {
  let context = (0, import_react27.useContext)(MenuContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Menu /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useMenuContext);
    throw err;
  }
  return context;
}
function stateReducer5(state2, action) {
  return match(action.type, reducers5, state2, action);
}
var DEFAULT_MENU_TAG = import_react27.Fragment;
var MenuRoot = forwardRefWithAs(function Menu(props, ref) {
  let reducerBag = (0, import_react27.useReducer)(stateReducer5, {
    menuState: 1 /* Closed */,
    buttonRef: (0, import_react27.createRef)(),
    itemsRef: (0, import_react27.createRef)(),
    items: [],
    searchQuery: "",
    activeItemIndex: null,
    activationTrigger: 1 /* Other */
  });
  let [{ menuState, itemsRef, buttonRef }, dispatch] = reducerBag;
  let menuRef = useSyncRefs(ref);
  useOutsideClick([buttonRef, itemsRef], (event, target) => {
    var _a2;
    if (menuState !== 0 /* Open */)
      return;
    dispatch({ type: 1 /* CloseMenu */ });
    if (!isFocusableElement(target, 1 /* Loose */)) {
      event.preventDefault();
      (_a2 = buttonRef.current) == null ? void 0 : _a2.focus();
    }
  });
  let slot = (0, import_react27.useMemo)(() => ({ open: menuState === 0 /* Open */ }), [menuState]);
  let theirProps = props;
  let ourProps = { ref: menuRef };
  return /* @__PURE__ */ import_react27.default.createElement(MenuContext.Provider, {
    value: reducerBag
  }, /* @__PURE__ */ import_react27.default.createElement(OpenClosedProvider, {
    value: match(menuState, {
      [0 /* Open */]: 0 /* Open */,
      [1 /* Closed */]: 1 /* Closed */
    })
  }, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_MENU_TAG,
    name: "Menu"
  })));
});
var DEFAULT_BUTTON_TAG4 = "button";
var Button7 = forwardRefWithAs(function Button8(props, ref) {
  var _a2;
  let [state2, dispatch] = useMenuContext("Menu.Button");
  let buttonRef = useSyncRefs(state2.buttonRef, ref);
  let id2 = `headlessui-menu-button-${useId()}`;
  let d = useDisposables();
  let handleKeyDown = (0, import_react27.useCallback)((event) => {
    switch (event.key) {
      case " " /* Space */:
      case "Enter" /* Enter */:
      case "ArrowDown" /* ArrowDown */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 0 /* OpenMenu */ });
        d.nextFrame(() => dispatch({ type: 2 /* GoToItem */, focus: 0 /* First */ }));
        break;
      case "ArrowUp" /* ArrowUp */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 0 /* OpenMenu */ });
        d.nextFrame(() => dispatch({ type: 2 /* GoToItem */, focus: 3 /* Last */ }));
        break;
    }
  }, [dispatch, d]);
  let handleKeyUp = (0, import_react27.useCallback)((event) => {
    switch (event.key) {
      case " " /* Space */:
        event.preventDefault();
        break;
    }
  }, []);
  let handleClick = (0, import_react27.useCallback)((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    if (props.disabled)
      return;
    if (state2.menuState === 0 /* Open */) {
      dispatch({ type: 1 /* CloseMenu */ });
      d.nextFrame(() => {
        var _a3;
        return (_a3 = state2.buttonRef.current) == null ? void 0 : _a3.focus({ preventScroll: true });
      });
    } else {
      event.preventDefault();
      event.stopPropagation();
      dispatch({ type: 0 /* OpenMenu */ });
    }
  }, [dispatch, d, state2, props.disabled]);
  let slot = (0, import_react27.useMemo)(() => ({ open: state2.menuState === 0 /* Open */ }), [state2]);
  let theirProps = props;
  let ourProps = {
    ref: buttonRef,
    id: id2,
    type: useResolveButtonType(props, state2.buttonRef),
    "aria-haspopup": true,
    "aria-controls": (_a2 = state2.itemsRef.current) == null ? void 0 : _a2.id,
    "aria-expanded": props.disabled ? void 0 : state2.menuState === 0 /* Open */,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_BUTTON_TAG4,
    name: "Menu.Button"
  });
});
var DEFAULT_ITEMS_TAG = "div";
var ItemsRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
var Items = forwardRefWithAs(function Items2(props, ref) {
  var _a2, _b;
  let [state2, dispatch] = useMenuContext("Menu.Items");
  let itemsRef = useSyncRefs(state2.itemsRef, ref);
  let ownerDocument = useOwnerDocument(state2.itemsRef);
  let id2 = `headlessui-menu-items-${useId()}`;
  let searchDisposables = useDisposables();
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === 0 /* Open */;
    }
    return state2.menuState === 0 /* Open */;
  })();
  (0, import_react27.useEffect)(() => {
    let container = state2.itemsRef.current;
    if (!container)
      return;
    if (state2.menuState !== 0 /* Open */)
      return;
    if (container === (ownerDocument == null ? void 0 : ownerDocument.activeElement))
      return;
    container.focus({ preventScroll: true });
  }, [state2.menuState, state2.itemsRef, ownerDocument]);
  useTreeWalker({
    container: state2.itemsRef.current,
    enabled: state2.menuState === 0 /* Open */,
    accept(node) {
      if (node.getAttribute("role") === "menuitem")
        return NodeFilter.FILTER_REJECT;
      if (node.hasAttribute("role"))
        return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
    walk(node) {
      node.setAttribute("role", "none");
    }
  });
  let handleKeyDown = (0, import_react27.useCallback)((event) => {
    var _a3, _b2;
    searchDisposables.dispose();
    switch (event.key) {
      case " " /* Space */:
        if (state2.searchQuery !== "") {
          event.preventDefault();
          event.stopPropagation();
          return dispatch({ type: 3 /* Search */, value: event.key });
        }
      case "Enter" /* Enter */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 1 /* CloseMenu */ });
        if (state2.activeItemIndex !== null) {
          let { dataRef } = state2.items[state2.activeItemIndex];
          (_b2 = (_a3 = dataRef.current) == null ? void 0 : _a3.domRef.current) == null ? void 0 : _b2.click();
        }
        disposables().nextFrame(() => {
          var _a4;
          return (_a4 = state2.buttonRef.current) == null ? void 0 : _a4.focus({ preventScroll: true });
        });
        break;
      case "ArrowDown" /* ArrowDown */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 2 /* GoToItem */, focus: 2 /* Next */ });
      case "ArrowUp" /* ArrowUp */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 2 /* GoToItem */, focus: 1 /* Previous */ });
      case "Home" /* Home */:
      case "PageUp" /* PageUp */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 2 /* GoToItem */, focus: 0 /* First */ });
      case "End" /* End */:
      case "PageDown" /* PageDown */:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({ type: 2 /* GoToItem */, focus: 3 /* Last */ });
      case "Escape" /* Escape */:
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 1 /* CloseMenu */ });
        disposables().nextFrame(() => {
          var _a4;
          return (_a4 = state2.buttonRef.current) == null ? void 0 : _a4.focus({ preventScroll: true });
        });
        break;
      case "Tab" /* Tab */:
        event.preventDefault();
        event.stopPropagation();
        break;
      default:
        if (event.key.length === 1) {
          dispatch({ type: 3 /* Search */, value: event.key });
          searchDisposables.setTimeout(() => dispatch({ type: 4 /* ClearSearch */ }), 350);
        }
        break;
    }
  }, [dispatch, searchDisposables, state2, ownerDocument]);
  let handleKeyUp = (0, import_react27.useCallback)((event) => {
    switch (event.key) {
      case " " /* Space */:
        event.preventDefault();
        break;
    }
  }, []);
  let slot = (0, import_react27.useMemo)(() => ({ open: state2.menuState === 0 /* Open */ }), [state2]);
  let theirProps = props;
  let ourProps = {
    "aria-activedescendant": state2.activeItemIndex === null ? void 0 : (_a2 = state2.items[state2.activeItemIndex]) == null ? void 0 : _a2.id,
    "aria-labelledby": (_b = state2.buttonRef.current) == null ? void 0 : _b.id,
    id: id2,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    role: "menu",
    tabIndex: 0,
    ref: itemsRef
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_ITEMS_TAG,
    features: ItemsRenderFeatures,
    visible,
    name: "Menu.Items"
  });
});
var DEFAULT_ITEM_TAG = import_react27.Fragment;
var Item = forwardRefWithAs(function Item2(props, ref) {
  let { disabled = false, ...theirProps } = props;
  let [state2, dispatch] = useMenuContext("Menu.Item");
  let id2 = `headlessui-menu-item-${useId()}`;
  let active = state2.activeItemIndex !== null ? state2.items[state2.activeItemIndex].id === id2 : false;
  let internalItemRef = (0, import_react27.useRef)(null);
  let itemRef = useSyncRefs(ref, internalItemRef);
  useIsoMorphicEffect(() => {
    if (state2.menuState !== 0 /* Open */)
      return;
    if (!active)
      return;
    if (state2.activationTrigger === 0 /* Pointer */)
      return;
    let d = disposables();
    d.requestAnimationFrame(() => {
      var _a2, _b;
      (_b = (_a2 = internalItemRef.current) == null ? void 0 : _a2.scrollIntoView) == null ? void 0 : _b.call(_a2, { block: "nearest" });
    });
    return d.dispose;
  }, [internalItemRef, active, state2.menuState, state2.activationTrigger, state2.activeItemIndex]);
  let bag = (0, import_react27.useRef)({ disabled, domRef: internalItemRef });
  useIsoMorphicEffect(() => {
    bag.current.disabled = disabled;
  }, [bag, disabled]);
  useIsoMorphicEffect(() => {
    var _a2, _b;
    bag.current.textValue = (_b = (_a2 = internalItemRef.current) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.toLowerCase();
  }, [bag, internalItemRef]);
  useIsoMorphicEffect(() => {
    dispatch({ type: 5 /* RegisterItem */, id: id2, dataRef: bag });
    return () => dispatch({ type: 6 /* UnregisterItem */, id: id2 });
  }, [bag, id2]);
  let handleClick = (0, import_react27.useCallback)((event) => {
    if (disabled)
      return event.preventDefault();
    dispatch({ type: 1 /* CloseMenu */ });
    disposables().nextFrame(() => {
      var _a2;
      return (_a2 = state2.buttonRef.current) == null ? void 0 : _a2.focus({ preventScroll: true });
    });
  }, [dispatch, state2.buttonRef, disabled]);
  let handleFocus = (0, import_react27.useCallback)(() => {
    if (disabled)
      return dispatch({ type: 2 /* GoToItem */, focus: 5 /* Nothing */ });
    dispatch({ type: 2 /* GoToItem */, focus: 4 /* Specific */, id: id2 });
  }, [disabled, id2, dispatch]);
  let handleMove = (0, import_react27.useCallback)(() => {
    if (disabled)
      return;
    if (active)
      return;
    dispatch({
      type: 2 /* GoToItem */,
      focus: 4 /* Specific */,
      id: id2,
      trigger: 0 /* Pointer */
    });
  }, [disabled, active, id2, dispatch]);
  let handleLeave = (0, import_react27.useCallback)(() => {
    if (disabled)
      return;
    if (!active)
      return;
    dispatch({ type: 2 /* GoToItem */, focus: 5 /* Nothing */ });
  }, [disabled, active, dispatch]);
  let slot = (0, import_react27.useMemo)(() => ({ active, disabled }), [active, disabled]);
  let ourProps = {
    id: id2,
    ref: itemRef,
    role: "menuitem",
    tabIndex: disabled === true ? void 0 : -1,
    "aria-disabled": disabled === true ? true : void 0,
    disabled: void 0,
    onClick: handleClick,
    onFocus: handleFocus,
    onPointerMove: handleMove,
    onMouseMove: handleMove,
    onPointerLeave: handleLeave,
    onMouseLeave: handleLeave
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_ITEM_TAG,
    name: "Menu.Item"
  });
});
var Menu2 = Object.assign(MenuRoot, { Button: Button7, Items, Item });

// src/components/popover/popover.tsx
var import_react28 = __toESM(require("react"), 1);
var reducers6 = {
  [0 /* TogglePopover */]: (state2) => ({
    ...state2,
    popoverState: match(state2.popoverState, {
      [0 /* Open */]: 1 /* Closed */,
      [1 /* Closed */]: 0 /* Open */
    })
  }),
  [1 /* ClosePopover */](state2) {
    if (state2.popoverState === 1 /* Closed */)
      return state2;
    return { ...state2, popoverState: 1 /* Closed */ };
  },
  [2 /* SetButton */](state2, action) {
    if (state2.button === action.button)
      return state2;
    return { ...state2, button: action.button };
  },
  [3 /* SetButtonId */](state2, action) {
    if (state2.buttonId === action.buttonId)
      return state2;
    return { ...state2, buttonId: action.buttonId };
  },
  [4 /* SetPanel */](state2, action) {
    if (state2.panel === action.panel)
      return state2;
    return { ...state2, panel: action.panel };
  },
  [5 /* SetPanelId */](state2, action) {
    if (state2.panelId === action.panelId)
      return state2;
    return { ...state2, panelId: action.panelId };
  }
};
var PopoverContext = (0, import_react28.createContext)(null);
PopoverContext.displayName = "PopoverContext";
function usePopoverContext(component) {
  let context = (0, import_react28.useContext)(PopoverContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Popover /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, usePopoverContext);
    throw err;
  }
  return context;
}
var PopoverAPIContext = (0, import_react28.createContext)(null);
PopoverAPIContext.displayName = "PopoverAPIContext";
function usePopoverAPIContext(component) {
  let context = (0, import_react28.useContext)(PopoverAPIContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Popover /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, usePopoverAPIContext);
    throw err;
  }
  return context;
}
var PopoverGroupContext = (0, import_react28.createContext)(null);
PopoverGroupContext.displayName = "PopoverGroupContext";
function usePopoverGroupContext() {
  return (0, import_react28.useContext)(PopoverGroupContext);
}
var PopoverPanelContext = (0, import_react28.createContext)(null);
PopoverPanelContext.displayName = "PopoverPanelContext";
function usePopoverPanelContext() {
  return (0, import_react28.useContext)(PopoverPanelContext);
}
function stateReducer6(state2, action) {
  return match(action.type, reducers6, state2, action);
}
var DEFAULT_POPOVER_TAG = "div";
var PopoverRoot = forwardRefWithAs(function Popover(props, ref) {
  let buttonId = `headlessui-popover-button-${useId()}`;
  let panelId = `headlessui-popover-panel-${useId()}`;
  let internalPopoverRef = (0, import_react28.useRef)(null);
  let popoverRef = useSyncRefs(ref, internalPopoverRef);
  let ownerDocument = useOwnerDocument(internalPopoverRef);
  let reducerBag = (0, import_react28.useReducer)(stateReducer6, {
    popoverState: 1 /* Closed */,
    button: null,
    buttonId,
    panel: null,
    panelId
  });
  let [{ popoverState, button, panel }, dispatch] = reducerBag;
  (0, import_react28.useEffect)(() => dispatch({ type: 3 /* SetButtonId */, buttonId }), [buttonId, dispatch]);
  (0, import_react28.useEffect)(() => dispatch({ type: 5 /* SetPanelId */, panelId }), [panelId, dispatch]);
  let registerBag = (0, import_react28.useMemo)(() => ({ buttonId, panelId, close: () => dispatch({ type: 1 /* ClosePopover */ }) }), [buttonId, panelId, dispatch]);
  let groupContext = usePopoverGroupContext();
  let registerPopover = groupContext == null ? void 0 : groupContext.registerPopover;
  let isFocusWithinPopoverGroup = (0, import_react28.useCallback)(() => {
    var _a2;
    return (_a2 = groupContext == null ? void 0 : groupContext.isFocusWithinPopoverGroup()) != null ? _a2 : (ownerDocument == null ? void 0 : ownerDocument.activeElement) && ((button == null ? void 0 : button.contains(ownerDocument.activeElement)) || (panel == null ? void 0 : panel.contains(ownerDocument.activeElement)));
  }, [groupContext, button, panel]);
  (0, import_react28.useEffect)(() => registerPopover == null ? void 0 : registerPopover(registerBag), [registerPopover, registerBag]);
  useEventListener(ownerDocument == null ? void 0 : ownerDocument.defaultView, "focus", () => {
    if (popoverState !== 0 /* Open */)
      return;
    if (isFocusWithinPopoverGroup())
      return;
    if (!button)
      return;
    if (!panel)
      return;
    dispatch({ type: 1 /* ClosePopover */ });
  }, true);
  useOutsideClick([button, panel], (event, target) => {
    if (popoverState !== 0 /* Open */)
      return;
    dispatch({ type: 1 /* ClosePopover */ });
    if (!isFocusableElement(target, 1 /* Loose */)) {
      event.preventDefault();
      button == null ? void 0 : button.focus();
    }
  });
  let close = (0, import_react28.useCallback)((focusableElement) => {
    dispatch({ type: 1 /* ClosePopover */ });
    let restoreElement = (() => {
      if (!focusableElement)
        return button;
      if (focusableElement instanceof HTMLElement)
        return focusableElement;
      if (focusableElement.current instanceof HTMLElement)
        return focusableElement.current;
      return button;
    })();
    restoreElement == null ? void 0 : restoreElement.focus();
  }, [dispatch, button]);
  let api = (0, import_react28.useMemo)(() => ({ close }), [close]);
  let slot = (0, import_react28.useMemo)(() => ({ open: popoverState === 0 /* Open */, close }), [popoverState, close]);
  let theirProps = props;
  let ourProps = { ref: popoverRef };
  return /* @__PURE__ */ import_react28.default.createElement(PopoverContext.Provider, {
    value: reducerBag
  }, /* @__PURE__ */ import_react28.default.createElement(PopoverAPIContext.Provider, {
    value: api
  }, /* @__PURE__ */ import_react28.default.createElement(OpenClosedProvider, {
    value: match(popoverState, {
      [0 /* Open */]: 0 /* Open */,
      [1 /* Closed */]: 1 /* Closed */
    })
  }, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_POPOVER_TAG,
    name: "Popover"
  }))));
});
var DEFAULT_BUTTON_TAG5 = "button";
var Button9 = forwardRefWithAs(function Button10(props, ref) {
  let [state2, dispatch] = usePopoverContext("Popover.Button");
  let internalButtonRef = (0, import_react28.useRef)(null);
  let groupContext = usePopoverGroupContext();
  let closeOthers = groupContext == null ? void 0 : groupContext.closeOthers;
  let panelContext = usePopoverPanelContext();
  let isWithinPanel = panelContext === null ? false : panelContext === state2.panelId;
  let buttonRef = useSyncRefs(internalButtonRef, ref, isWithinPanel ? null : (button) => dispatch({ type: 2 /* SetButton */, button }));
  let withinPanelButtonRef = useSyncRefs(internalButtonRef, ref);
  let ownerDocument = useOwnerDocument(internalButtonRef);
  let activeElementRef = (0, import_react28.useRef)(null);
  let previousActiveElementRef = (0, import_react28.useRef)(null);
  useEventListener(ownerDocument == null ? void 0 : ownerDocument.defaultView, "focus", () => {
    previousActiveElementRef.current = activeElementRef.current;
    activeElementRef.current = ownerDocument == null ? void 0 : ownerDocument.activeElement;
  }, true);
  let handleKeyDown = (0, import_react28.useCallback)((event) => {
    var _a2, _b, _c, _d;
    if (isWithinPanel) {
      if (state2.popoverState === 1 /* Closed */)
        return;
      switch (event.key) {
        case " " /* Space */:
        case "Enter" /* Enter */:
          event.preventDefault();
          (_b = (_a2 = event.target).click) == null ? void 0 : _b.call(_a2);
          dispatch({ type: 1 /* ClosePopover */ });
          (_c = state2.button) == null ? void 0 : _c.focus();
          break;
      }
    } else {
      switch (event.key) {
        case " " /* Space */:
        case "Enter" /* Enter */:
          event.preventDefault();
          event.stopPropagation();
          if (state2.popoverState === 1 /* Closed */)
            closeOthers == null ? void 0 : closeOthers(state2.buttonId);
          dispatch({ type: 0 /* TogglePopover */ });
          break;
        case "Escape" /* Escape */:
          if (state2.popoverState !== 0 /* Open */)
            return closeOthers == null ? void 0 : closeOthers(state2.buttonId);
          if (!internalButtonRef.current)
            return;
          if ((ownerDocument == null ? void 0 : ownerDocument.activeElement) && !internalButtonRef.current.contains(ownerDocument.activeElement)) {
            return;
          }
          event.preventDefault();
          event.stopPropagation();
          dispatch({ type: 1 /* ClosePopover */ });
          break;
        case "Tab" /* Tab */:
          if (state2.popoverState !== 0 /* Open */)
            return;
          if (!state2.panel)
            return;
          if (!state2.button)
            return;
          if (event.shiftKey) {
            if (!previousActiveElementRef.current)
              return;
            if ((_d = state2.button) == null ? void 0 : _d.contains(previousActiveElementRef.current))
              return;
            if (state2.panel.contains(previousActiveElementRef.current))
              return;
            let focusableElements = getFocusableElements(ownerDocument == null ? void 0 : ownerDocument.body);
            let previousIdx = focusableElements.indexOf(previousActiveElementRef.current);
            let buttonIdx = focusableElements.indexOf(state2.button);
            if (buttonIdx > previousIdx)
              return;
            event.preventDefault();
            event.stopPropagation();
            focusIn(state2.panel, 8 /* Last */);
          } else {
            event.preventDefault();
            event.stopPropagation();
            focusIn(state2.panel, 1 /* First */);
          }
          break;
      }
    }
  }, [
    dispatch,
    state2.popoverState,
    state2.buttonId,
    state2.button,
    state2.panel,
    internalButtonRef,
    closeOthers,
    isWithinPanel
  ]);
  let handleKeyUp = (0, import_react28.useCallback)((event) => {
    var _a2;
    if (isWithinPanel)
      return;
    if (event.key === " " /* Space */) {
      event.preventDefault();
    }
    if (state2.popoverState !== 0 /* Open */)
      return;
    if (!state2.panel)
      return;
    if (!state2.button)
      return;
    switch (event.key) {
      case "Tab" /* Tab */:
        if (!previousActiveElementRef.current)
          return;
        if ((_a2 = state2.button) == null ? void 0 : _a2.contains(previousActiveElementRef.current))
          return;
        if (state2.panel.contains(previousActiveElementRef.current))
          return;
        let focusableElements = getFocusableElements(ownerDocument == null ? void 0 : ownerDocument.body);
        let previousIdx = focusableElements.indexOf(previousActiveElementRef.current);
        let buttonIdx = focusableElements.indexOf(state2.button);
        if (buttonIdx > previousIdx)
          return;
        event.preventDefault();
        event.stopPropagation();
        focusIn(state2.panel, 8 /* Last */);
        break;
    }
  }, [state2.popoverState, state2.panel, state2.button, isWithinPanel]);
  let handleClick = (0, import_react28.useCallback)((event) => {
    var _a2, _b;
    if (isDisabledReactIssue7711(event.currentTarget))
      return;
    if (props.disabled)
      return;
    if (isWithinPanel) {
      dispatch({ type: 1 /* ClosePopover */ });
      (_a2 = state2.button) == null ? void 0 : _a2.focus();
    } else {
      event.preventDefault();
      event.stopPropagation();
      if (state2.popoverState === 1 /* Closed */)
        closeOthers == null ? void 0 : closeOthers(state2.buttonId);
      (_b = state2.button) == null ? void 0 : _b.focus();
      dispatch({ type: 0 /* TogglePopover */ });
    }
  }, [
    dispatch,
    state2.button,
    state2.popoverState,
    state2.buttonId,
    props.disabled,
    closeOthers,
    isWithinPanel
  ]);
  let slot = (0, import_react28.useMemo)(() => ({ open: state2.popoverState === 0 /* Open */ }), [state2]);
  let type = useResolveButtonType(props, internalButtonRef);
  let theirProps = props;
  let ourProps = isWithinPanel ? {
    ref: withinPanelButtonRef,
    type,
    onKeyDown: handleKeyDown,
    onClick: handleClick
  } : {
    ref: buttonRef,
    id: state2.buttonId,
    type,
    "aria-expanded": props.disabled ? void 0 : state2.popoverState === 0 /* Open */,
    "aria-controls": state2.panel ? state2.panelId : void 0,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_BUTTON_TAG5,
    name: "Popover.Button"
  });
});
var DEFAULT_OVERLAY_TAG2 = "div";
var OverlayRenderFeatures = 1 /* RenderStrategy */ | 2 /* Static */;
var Overlay3 = forwardRefWithAs(function Overlay4(props, ref) {
  let [{ popoverState }, dispatch] = usePopoverContext("Popover.Overlay");
  let overlayRef = useSyncRefs(ref);
  let id2 = `headlessui-popover-overlay-${useId()}`;
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === 0 /* Open */;
    }
    return popoverState === 0 /* Open */;
  })();
  let handleClick = (0, import_react28.useCallback)((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    dispatch({ type: 1 /* ClosePopover */ });
  }, [dispatch]);
  let slot = (0, import_react28.useMemo)(() => ({ open: popoverState === 0 /* Open */ }), [popoverState]);
  let theirProps = props;
  let ourProps = {
    ref: overlayRef,
    id: id2,
    "aria-hidden": true,
    onClick: handleClick
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OVERLAY_TAG2,
    features: OverlayRenderFeatures,
    visible,
    name: "Popover.Overlay"
  });
});
var DEFAULT_PANEL_TAG3 = "div";
var PanelRenderFeatures2 = 1 /* RenderStrategy */ | 2 /* Static */;
var Panel5 = forwardRefWithAs(function Panel6(props, ref) {
  let { focus = false, ...theirProps } = props;
  let [state2, dispatch] = usePopoverContext("Popover.Panel");
  let { close } = usePopoverAPIContext("Popover.Panel");
  let internalPanelRef = (0, import_react28.useRef)(null);
  let panelRef = useSyncRefs(internalPanelRef, ref, (panel) => {
    dispatch({ type: 4 /* SetPanel */, panel });
  });
  let ownerDocument = useOwnerDocument(internalPanelRef);
  let usesOpenClosedState = useOpenClosed();
  let visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === 0 /* Open */;
    }
    return state2.popoverState === 0 /* Open */;
  })();
  let handleKeyDown = (0, import_react28.useCallback)((event) => {
    var _a2;
    switch (event.key) {
      case "Escape" /* Escape */:
        if (state2.popoverState !== 0 /* Open */)
          return;
        if (!internalPanelRef.current)
          return;
        if ((ownerDocument == null ? void 0 : ownerDocument.activeElement) && !internalPanelRef.current.contains(ownerDocument.activeElement)) {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: 1 /* ClosePopover */ });
        (_a2 = state2.button) == null ? void 0 : _a2.focus();
        break;
    }
  }, [state2, internalPanelRef, dispatch]);
  (0, import_react28.useEffect)(() => () => dispatch({ type: 4 /* SetPanel */, panel: null }), [dispatch]);
  (0, import_react28.useEffect)(() => {
    var _a2;
    if (props.static)
      return;
    if (state2.popoverState === 1 /* Closed */ && ((_a2 = props.unmount) != null ? _a2 : true)) {
      dispatch({ type: 4 /* SetPanel */, panel: null });
    }
  }, [state2.popoverState, props.unmount, props.static, dispatch]);
  (0, import_react28.useEffect)(() => {
    if (!focus)
      return;
    if (state2.popoverState !== 0 /* Open */)
      return;
    if (!internalPanelRef.current)
      return;
    let activeElement = ownerDocument == null ? void 0 : ownerDocument.activeElement;
    if (internalPanelRef.current.contains(activeElement))
      return;
    focusIn(internalPanelRef.current, 1 /* First */);
  }, [focus, internalPanelRef, state2.popoverState]);
  useEventListener(ownerDocument == null ? void 0 : ownerDocument.defaultView, "keydown", (event) => {
    var _a2;
    if (state2.popoverState !== 0 /* Open */)
      return;
    if (!internalPanelRef.current)
      return;
    if (event.key !== "Tab" /* Tab */)
      return;
    if (!(ownerDocument == null ? void 0 : ownerDocument.activeElement))
      return;
    if (!internalPanelRef.current)
      return;
    if (!internalPanelRef.current.contains(ownerDocument.activeElement))
      return;
    event.preventDefault();
    let result = focusIn(internalPanelRef.current, event.shiftKey ? 2 /* Previous */ : 4 /* Next */);
    if (result === 3 /* Underflow */) {
      return (_a2 = state2.button) == null ? void 0 : _a2.focus();
    } else if (result === 1 /* Overflow */) {
      if (!state2.button)
        return;
      let elements = getFocusableElements(ownerDocument.body);
      let buttonIdx = elements.indexOf(state2.button);
      let nextElements = elements.splice(buttonIdx + 1).filter((element) => {
        var _a3;
        return !((_a3 = internalPanelRef.current) == null ? void 0 : _a3.contains(element));
      });
      if (focusIn(nextElements, 1 /* First */) === 0 /* Error */) {
        focusIn(ownerDocument.body, 1 /* First */);
      }
    }
  });
  useEventListener(ownerDocument == null ? void 0 : ownerDocument.defaultView, "focus", () => {
    var _a2;
    if (!focus)
      return;
    if (state2.popoverState !== 0 /* Open */)
      return;
    if (!internalPanelRef.current)
      return;
    if ((ownerDocument == null ? void 0 : ownerDocument.activeElement) && ((_a2 = internalPanelRef.current) == null ? void 0 : _a2.contains(ownerDocument.activeElement))) {
      return;
    }
    dispatch({ type: 1 /* ClosePopover */ });
  }, true);
  let slot = (0, import_react28.useMemo)(() => ({ open: state2.popoverState === 0 /* Open */, close }), [state2, close]);
  let ourProps = {
    ref: panelRef,
    id: state2.panelId,
    onKeyDown: handleKeyDown
  };
  return /* @__PURE__ */ import_react28.default.createElement(PopoverPanelContext.Provider, {
    value: state2.panelId
  }, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_PANEL_TAG3,
    features: PanelRenderFeatures2,
    visible,
    name: "Popover.Panel"
  }));
});
var DEFAULT_GROUP_TAG2 = "div";
var Group3 = forwardRefWithAs(function Group4(props, ref) {
  let internalGroupRef = (0, import_react28.useRef)(null);
  let groupRef = useSyncRefs(internalGroupRef, ref);
  let [popovers, setPopovers] = (0, import_react28.useState)([]);
  let unregisterPopover = (0, import_react28.useCallback)((registerbag) => {
    setPopovers((existing) => {
      let idx = existing.indexOf(registerbag);
      if (idx !== -1) {
        let clone = existing.slice();
        clone.splice(idx, 1);
        return clone;
      }
      return existing;
    });
  }, [setPopovers]);
  let registerPopover = (0, import_react28.useCallback)((registerbag) => {
    setPopovers((existing) => [...existing, registerbag]);
    return () => unregisterPopover(registerbag);
  }, [setPopovers, unregisterPopover]);
  let isFocusWithinPopoverGroup = (0, import_react28.useCallback)(() => {
    var _a2;
    let ownerDocument = getOwnerDocument(internalGroupRef);
    if (!ownerDocument)
      return false;
    let element = ownerDocument.activeElement;
    if ((_a2 = internalGroupRef.current) == null ? void 0 : _a2.contains(element))
      return true;
    return popovers.some((bag) => {
      var _a3, _b;
      return ((_a3 = ownerDocument.getElementById(bag.buttonId)) == null ? void 0 : _a3.contains(element)) || ((_b = ownerDocument.getElementById(bag.panelId)) == null ? void 0 : _b.contains(element));
    });
  }, [internalGroupRef, popovers]);
  let closeOthers = (0, import_react28.useCallback)((buttonId) => {
    for (let popover of popovers) {
      if (popover.buttonId !== buttonId)
        popover.close();
    }
  }, [popovers]);
  let contextBag = (0, import_react28.useMemo)(() => ({
    registerPopover,
    unregisterPopover,
    isFocusWithinPopoverGroup,
    closeOthers
  }), [registerPopover, unregisterPopover, isFocusWithinPopoverGroup, closeOthers]);
  let slot = (0, import_react28.useMemo)(() => ({}), []);
  let theirProps = props;
  let ourProps = { ref: groupRef };
  return /* @__PURE__ */ import_react28.default.createElement(PopoverGroupContext.Provider, {
    value: contextBag
  }, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_GROUP_TAG2,
    name: "Popover.Group"
  }));
});
var Popover2 = Object.assign(PopoverRoot, { Button: Button9, Overlay: Overlay3, Panel: Panel5, Group: Group3 });

// src/components/radio-group/radio-group.tsx
var import_react31 = __toESM(require("react"), 1);

// src/hooks/use-flags.ts
var import_react29 = require("react");
function useFlags(initialFlags = 0) {
  let [flags, setFlags] = (0, import_react29.useState)(initialFlags);
  let addFlag = (0, import_react29.useCallback)((flag) => setFlags((flags2) => flags2 | flag), [setFlags]);
  let hasFlag = (0, import_react29.useCallback)((flag) => Boolean(flags & flag), [flags]);
  let removeFlag = (0, import_react29.useCallback)((flag) => setFlags((flags2) => flags2 & ~flag), [setFlags]);
  let toggleFlag = (0, import_react29.useCallback)((flag) => setFlags((flags2) => flags2 ^ flag), [setFlags]);
  return { addFlag, hasFlag, removeFlag, toggleFlag };
}

// src/components/label/label.tsx
var import_react30 = __toESM(require("react"), 1);
var LabelContext = (0, import_react30.createContext)(null);
function useLabelContext() {
  let context = (0, import_react30.useContext)(LabelContext);
  if (context === null) {
    let err = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useLabelContext);
    throw err;
  }
  return context;
}
function useLabels() {
  let [labelIds, setLabelIds] = (0, import_react30.useState)([]);
  return [
    labelIds.length > 0 ? labelIds.join(" ") : void 0,
    (0, import_react30.useMemo)(() => {
      return function LabelProvider(props) {
        let register = (0, import_react30.useCallback)((value) => {
          setLabelIds((existing) => [...existing, value]);
          return () => setLabelIds((existing) => {
            let clone = existing.slice();
            let idx = clone.indexOf(value);
            if (idx !== -1)
              clone.splice(idx, 1);
            return clone;
          });
        }, []);
        let contextBag = (0, import_react30.useMemo)(() => ({ register, slot: props.slot, name: props.name, props: props.props }), [register, props.slot, props.name, props.props]);
        return /* @__PURE__ */ import_react30.default.createElement(LabelContext.Provider, {
          value: contextBag
        }, props.children);
      };
    }, [setLabelIds])
  ];
}
var DEFAULT_LABEL_TAG3 = "label";
var Label5 = forwardRefWithAs(function Label6(props, ref) {
  let { passive = false, ...theirProps } = props;
  let context = useLabelContext();
  let id2 = `headlessui-label-${useId()}`;
  let labelRef = useSyncRefs(ref);
  useIsoMorphicEffect(() => context.register(id2), [id2, context.register]);
  let ourProps = { ref: labelRef, ...context.props, id: id2 };
  if (passive) {
    if ("onClick" in ourProps) {
      delete ourProps["onClick"];
    }
    if ("onClick" in theirProps) {
      delete theirProps["onClick"];
    }
  }
  return render({
    ourProps,
    theirProps,
    slot: context.slot || {},
    defaultTag: DEFAULT_LABEL_TAG3,
    name: context.name || "Label"
  });
});

// src/components/radio-group/radio-group.tsx
var reducers7 = {
  [0 /* RegisterOption */](state2, action) {
    let nextOptions = [
      ...state2.options,
      { id: action.id, element: action.element, propsRef: action.propsRef }
    ];
    return {
      ...state2,
      options: sortByDomNode(nextOptions, (option) => option.element.current)
    };
  },
  [1 /* UnregisterOption */](state2, action) {
    let options = state2.options.slice();
    let idx = state2.options.findIndex((radio) => radio.id === action.id);
    if (idx === -1)
      return state2;
    options.splice(idx, 1);
    return { ...state2, options };
  }
};
var RadioGroupContext = (0, import_react31.createContext)(null);
RadioGroupContext.displayName = "RadioGroupContext";
function useRadioGroupContext(component) {
  let context = (0, import_react31.useContext)(RadioGroupContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <RadioGroup /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useRadioGroupContext);
    throw err;
  }
  return context;
}
function stateReducer7(state2, action) {
  return match(action.type, reducers7, state2, action);
}
var DEFAULT_RADIO_GROUP_TAG = "div";
var RadioGroupRoot = forwardRefWithAs(function RadioGroup(props, ref) {
  let { value, name, onChange, disabled = false, ...theirProps } = props;
  let [{ options }, dispatch] = (0, import_react31.useReducer)(stateReducer7, {
    options: []
  });
  let [labelledby, LabelProvider] = useLabels();
  let [describedby, DescriptionProvider] = useDescriptions();
  let id2 = `headlessui-radiogroup-${useId()}`;
  let internalRadioGroupRef = (0, import_react31.useRef)(null);
  let radioGroupRef = useSyncRefs(internalRadioGroupRef, ref);
  let firstOption = (0, import_react31.useMemo)(() => options.find((option) => {
    if (option.propsRef.current.disabled)
      return false;
    return true;
  }), [options]);
  let containsCheckedOption = (0, import_react31.useMemo)(() => options.some((option) => option.propsRef.current.value === value), [options, value]);
  let triggerChange = (0, import_react31.useCallback)((nextValue) => {
    var _a2;
    if (disabled)
      return false;
    if (nextValue === value)
      return false;
    let nextOption = (_a2 = options.find((option) => option.propsRef.current.value === nextValue)) == null ? void 0 : _a2.propsRef.current;
    if (nextOption == null ? void 0 : nextOption.disabled)
      return false;
    onChange(nextValue);
    return true;
  }, [onChange, value, disabled, options]);
  useTreeWalker({
    container: internalRadioGroupRef.current,
    accept(node) {
      if (node.getAttribute("role") === "radio")
        return NodeFilter.FILTER_REJECT;
      if (node.hasAttribute("role"))
        return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
    walk(node) {
      node.setAttribute("role", "none");
    }
  });
  let handleKeyDown = (0, import_react31.useCallback)((event) => {
    let container = internalRadioGroupRef.current;
    if (!container)
      return;
    let ownerDocument = getOwnerDocument(container);
    let all = options.filter((option) => option.propsRef.current.disabled === false).map((radio) => radio.element.current);
    switch (event.key) {
      case "Enter" /* Enter */:
        attemptSubmit(event.currentTarget);
        break;
      case "ArrowLeft" /* ArrowLeft */:
      case "ArrowUp" /* ArrowUp */:
        {
          event.preventDefault();
          event.stopPropagation();
          let result = focusIn(all, 2 /* Previous */ | 16 /* WrapAround */);
          if (result === 2 /* Success */) {
            let activeOption = options.find((option) => option.element.current === (ownerDocument == null ? void 0 : ownerDocument.activeElement));
            if (activeOption)
              triggerChange(activeOption.propsRef.current.value);
          }
        }
        break;
      case "ArrowRight" /* ArrowRight */:
      case "ArrowDown" /* ArrowDown */:
        {
          event.preventDefault();
          event.stopPropagation();
          let result = focusIn(all, 4 /* Next */ | 16 /* WrapAround */);
          if (result === 2 /* Success */) {
            let activeOption = options.find((option) => option.element.current === (ownerDocument == null ? void 0 : ownerDocument.activeElement));
            if (activeOption)
              triggerChange(activeOption.propsRef.current.value);
          }
        }
        break;
      case " " /* Space */:
        {
          event.preventDefault();
          event.stopPropagation();
          let activeOption = options.find((option) => option.element.current === (ownerDocument == null ? void 0 : ownerDocument.activeElement));
          if (activeOption)
            triggerChange(activeOption.propsRef.current.value);
        }
        break;
    }
  }, [internalRadioGroupRef, options, triggerChange]);
  let registerOption = (0, import_react31.useCallback)((option) => {
    dispatch({ type: 0 /* RegisterOption */, ...option });
    return () => dispatch({ type: 1 /* UnregisterOption */, id: option.id });
  }, [dispatch]);
  let api = (0, import_react31.useMemo)(() => ({
    registerOption,
    firstOption,
    containsCheckedOption,
    change: triggerChange,
    disabled,
    value
  }), [registerOption, firstOption, containsCheckedOption, triggerChange, disabled, value]);
  let ourProps = {
    ref: radioGroupRef,
    id: id2,
    role: "radiogroup",
    "aria-labelledby": labelledby,
    "aria-describedby": describedby,
    onKeyDown: handleKeyDown
  };
  return /* @__PURE__ */ import_react31.default.createElement(DescriptionProvider, {
    name: "RadioGroup.Description"
  }, /* @__PURE__ */ import_react31.default.createElement(LabelProvider, {
    name: "RadioGroup.Label"
  }, /* @__PURE__ */ import_react31.default.createElement(RadioGroupContext.Provider, {
    value: api
  }, name != null && value != null && objectToFormEntries({ [name]: value }).map(([name2, value2]) => /* @__PURE__ */ import_react31.default.createElement(VisuallyHidden, {
    ...compact({
      key: name2,
      as: "input",
      type: "radio",
      checked: value2 != null,
      hidden: true,
      readOnly: true,
      name: name2,
      value: value2
    })
  })), render({
    ourProps,
    theirProps,
    defaultTag: DEFAULT_RADIO_GROUP_TAG,
    name: "RadioGroup"
  }))));
});
var DEFAULT_OPTION_TAG3 = "div";
var Option5 = forwardRefWithAs(function Option6(props, ref) {
  let internalOptionRef = (0, import_react31.useRef)(null);
  let optionRef = useSyncRefs(internalOptionRef, ref);
  let id2 = `headlessui-radiogroup-option-${useId()}`;
  let [labelledby, LabelProvider] = useLabels();
  let [describedby, DescriptionProvider] = useDescriptions();
  let { addFlag, removeFlag, hasFlag } = useFlags(1 /* Empty */);
  let { value, disabled = false, ...theirProps } = props;
  let propsRef = (0, import_react31.useRef)({ value, disabled });
  useIsoMorphicEffect(() => {
    propsRef.current.value = value;
  }, [value, propsRef]);
  useIsoMorphicEffect(() => {
    propsRef.current.disabled = disabled;
  }, [disabled, propsRef]);
  let {
    registerOption,
    disabled: radioGroupDisabled,
    change,
    firstOption,
    containsCheckedOption,
    value: radioGroupValue
  } = useRadioGroupContext("RadioGroup.Option");
  useIsoMorphicEffect(() => registerOption({ id: id2, element: internalOptionRef, propsRef }), [id2, registerOption, internalOptionRef, props]);
  let handleClick = (0, import_react31.useCallback)(() => {
    var _a2;
    if (!change(value))
      return;
    addFlag(2 /* Active */);
    (_a2 = internalOptionRef.current) == null ? void 0 : _a2.focus();
  }, [addFlag, change, value]);
  let handleFocus = (0, import_react31.useCallback)(() => addFlag(2 /* Active */), [addFlag]);
  let handleBlur = (0, import_react31.useCallback)(() => removeFlag(2 /* Active */), [removeFlag]);
  let isFirstOption = (firstOption == null ? void 0 : firstOption.id) === id2;
  let isDisabled = radioGroupDisabled || disabled;
  let checked = radioGroupValue === value;
  let ourProps = {
    ref: optionRef,
    id: id2,
    role: "radio",
    "aria-checked": checked ? "true" : "false",
    "aria-labelledby": labelledby,
    "aria-describedby": describedby,
    "aria-disabled": isDisabled ? true : void 0,
    tabIndex: (() => {
      if (isDisabled)
        return -1;
      if (checked)
        return 0;
      if (!containsCheckedOption && isFirstOption)
        return 0;
      return -1;
    })(),
    onClick: isDisabled ? void 0 : handleClick,
    onFocus: isDisabled ? void 0 : handleFocus,
    onBlur: isDisabled ? void 0 : handleBlur
  };
  let slot = (0, import_react31.useMemo)(() => ({ checked, disabled: isDisabled, active: hasFlag(2 /* Active */) }), [checked, isDisabled, hasFlag]);
  return /* @__PURE__ */ import_react31.default.createElement(DescriptionProvider, {
    name: "RadioGroup.Description"
  }, /* @__PURE__ */ import_react31.default.createElement(LabelProvider, {
    name: "RadioGroup.Label"
  }, render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_OPTION_TAG3,
    name: "RadioGroup.Option"
  })));
});
var RadioGroup2 = Object.assign(RadioGroupRoot, { Option: Option5, Label: Label5, Description });

// src/components/switch/switch.tsx
var import_react32 = __toESM(require("react"), 1);
var GroupContext = (0, import_react32.createContext)(null);
GroupContext.displayName = "GroupContext";
var DEFAULT_GROUP_TAG3 = import_react32.Fragment;
function Group5(props) {
  let [switchElement, setSwitchElement] = (0, import_react32.useState)(null);
  let [labelledby, LabelProvider] = useLabels();
  let [describedby, DescriptionProvider] = useDescriptions();
  let context = (0, import_react32.useMemo)(() => ({ switch: switchElement, setSwitch: setSwitchElement, labelledby, describedby }), [switchElement, setSwitchElement, labelledby, describedby]);
  let ourProps = {};
  let theirProps = props;
  return /* @__PURE__ */ import_react32.default.createElement(DescriptionProvider, {
    name: "Switch.Description"
  }, /* @__PURE__ */ import_react32.default.createElement(LabelProvider, {
    name: "Switch.Label",
    props: {
      onClick() {
        if (!switchElement)
          return;
        switchElement.click();
        switchElement.focus({ preventScroll: true });
      }
    }
  }, /* @__PURE__ */ import_react32.default.createElement(GroupContext.Provider, {
    value: context
  }, render({
    ourProps,
    theirProps,
    defaultTag: DEFAULT_GROUP_TAG3,
    name: "Switch.Group"
  }))));
}
var DEFAULT_SWITCH_TAG = "button";
var SwitchRoot = forwardRefWithAs(function Switch(props, ref) {
  let { checked, onChange, name, value, ...theirProps } = props;
  let id2 = `headlessui-switch-${useId()}`;
  let groupContext = (0, import_react32.useContext)(GroupContext);
  let internalSwitchRef = (0, import_react32.useRef)(null);
  let switchRef = useSyncRefs(internalSwitchRef, ref, groupContext === null ? null : groupContext.setSwitch);
  let toggle = (0, import_react32.useCallback)(() => onChange(!checked), [onChange, checked]);
  let handleClick = (0, import_react32.useCallback)((event) => {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    event.preventDefault();
    toggle();
  }, [toggle]);
  let handleKeyUp = (0, import_react32.useCallback)((event) => {
    if (event.key === " " /* Space */) {
      event.preventDefault();
      toggle();
    } else if (event.key === "Enter" /* Enter */) {
      attemptSubmit(event.currentTarget);
    }
  }, [toggle]);
  let handleKeyPress = (0, import_react32.useCallback)((event) => event.preventDefault(), []);
  let slot = (0, import_react32.useMemo)(() => ({ checked }), [checked]);
  let ourProps = {
    id: id2,
    ref: switchRef,
    role: "switch",
    type: useResolveButtonType(props, internalSwitchRef),
    tabIndex: 0,
    "aria-checked": checked,
    "aria-labelledby": groupContext == null ? void 0 : groupContext.labelledby,
    "aria-describedby": groupContext == null ? void 0 : groupContext.describedby,
    onClick: handleClick,
    onKeyUp: handleKeyUp,
    onKeyPress: handleKeyPress
  };
  return /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, name != null && checked && /* @__PURE__ */ import_react32.default.createElement(VisuallyHidden, {
    ...compact({
      as: "input",
      type: "checkbox",
      hidden: true,
      readOnly: true,
      checked,
      name,
      value
    })
  }), render({ ourProps, theirProps, slot, defaultTag: DEFAULT_SWITCH_TAG, name: "Switch" }));
});
var Switch2 = Object.assign(SwitchRoot, { Group: Group5, Label: Label5, Description });

// src/components/tabs/tabs.tsx
var import_react34 = __toESM(require("react"), 1);

// src/internal/focus-sentinel.tsx
var import_react33 = __toESM(require("react"), 1);
function FocusSentinel({ onFocus }) {
  let [enabled, setEnabled] = (0, import_react33.useState)(true);
  if (!enabled)
    return null;
  return /* @__PURE__ */ import_react33.default.createElement(VisuallyHidden, {
    as: "button",
    type: "button",
    onFocus: (event) => {
      event.preventDefault();
      let frame;
      let tries = 50;
      function forwardFocus() {
        if (tries-- <= 0) {
          if (frame)
            cancelAnimationFrame(frame);
          return;
        }
        if (onFocus()) {
          setEnabled(false);
          cancelAnimationFrame(frame);
          return;
        }
        frame = requestAnimationFrame(forwardFocus);
      }
      frame = requestAnimationFrame(forwardFocus);
    }
  });
}

// src/components/tabs/tabs.tsx
var reducers8 = {
  [0 /* SetSelectedIndex */](state2, action) {
    let focusableTabs = state2.tabs.filter((tab) => {
      var _a2;
      return !((_a2 = tab.current) == null ? void 0 : _a2.hasAttribute("disabled"));
    });
    if (action.index < 0) {
      return { ...state2, selectedIndex: state2.tabs.indexOf(focusableTabs[0]) };
    } else if (action.index > state2.tabs.length) {
      return {
        ...state2,
        selectedIndex: state2.tabs.indexOf(focusableTabs[focusableTabs.length - 1])
      };
    }
    let before = state2.tabs.slice(0, action.index);
    let after = state2.tabs.slice(action.index);
    let next = [...after, ...before].find((tab) => focusableTabs.includes(tab));
    if (!next)
      return state2;
    return { ...state2, selectedIndex: state2.tabs.indexOf(next) };
  },
  [1 /* SetOrientation */](state2, action) {
    if (state2.orientation === action.orientation)
      return state2;
    return { ...state2, orientation: action.orientation };
  },
  [2 /* SetActivation */](state2, action) {
    if (state2.activation === action.activation)
      return state2;
    return { ...state2, activation: action.activation };
  },
  [3 /* RegisterTab */](state2, action) {
    if (state2.tabs.includes(action.tab))
      return state2;
    return { ...state2, tabs: sortByDomNode([...state2.tabs, action.tab], (tab) => tab.current) };
  },
  [4 /* UnregisterTab */](state2, action) {
    return {
      ...state2,
      tabs: sortByDomNode(state2.tabs.filter((tab) => tab !== action.tab), (tab) => tab.current)
    };
  },
  [5 /* RegisterPanel */](state2, action) {
    if (state2.panels.includes(action.panel))
      return state2;
    return { ...state2, panels: [...state2.panels, action.panel] };
  },
  [6 /* UnregisterPanel */](state2, action) {
    return { ...state2, panels: state2.panels.filter((panel) => panel !== action.panel) };
  },
  [7 /* ForceRerender */](state2) {
    return { ...state2 };
  }
};
var TabsContext = (0, import_react34.createContext)(null);
TabsContext.displayName = "TabsContext";
var TabsSSRContext = (0, import_react34.createContext)(null);
TabsSSRContext.displayName = "TabsSSRContext";
function useSSRTabsCounter(component) {
  let context = (0, import_react34.useContext)(TabsSSRContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Tab.Group /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useSSRTabsCounter);
    throw err;
  }
  return context;
}
function useTabsContext(component) {
  let context = (0, import_react34.useContext)(TabsContext);
  if (context === null) {
    let err = new Error(`<${component} /> is missing a parent <Tab.Group /> component.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useTabsContext);
    throw err;
  }
  return context;
}
function stateReducer8(state2, action) {
  return match(action.type, reducers8, state2, action);
}
var DEFAULT_TABS_TAG = import_react34.Fragment;
var Tabs = forwardRefWithAs(function Tabs2(props, ref) {
  let {
    defaultIndex = 0,
    vertical = false,
    manual = false,
    onChange,
    selectedIndex = null,
    ...theirProps
  } = props;
  const orientation = vertical ? "vertical" : "horizontal";
  const activation = manual ? "manual" : "auto";
  let tabsRef = useSyncRefs(ref);
  let [state2, dispatch] = (0, import_react34.useReducer)(stateReducer8, {
    selectedIndex: selectedIndex != null ? selectedIndex : defaultIndex,
    tabs: [],
    panels: [],
    orientation,
    activation
  });
  let slot = (0, import_react34.useMemo)(() => ({ selectedIndex: state2.selectedIndex }), [state2.selectedIndex]);
  let onChangeRef = useLatestValue(onChange || (() => {
  }));
  let stableTabsRef = useLatestValue(state2.tabs);
  (0, import_react34.useEffect)(() => {
    dispatch({ type: 1 /* SetOrientation */, orientation });
  }, [orientation]);
  (0, import_react34.useEffect)(() => {
    dispatch({ type: 2 /* SetActivation */, activation });
  }, [activation]);
  useIsoMorphicEffect(() => {
    let indexToSet = selectedIndex != null ? selectedIndex : defaultIndex;
    dispatch({ type: 0 /* SetSelectedIndex */, index: indexToSet });
  }, [selectedIndex]);
  let lastChangedIndex = (0, import_react34.useRef)(state2.selectedIndex);
  (0, import_react34.useEffect)(() => {
    lastChangedIndex.current = state2.selectedIndex;
  }, [state2.selectedIndex]);
  let providerBag = (0, import_react34.useMemo)(() => [
    state2,
    {
      dispatch,
      change(index) {
        if (lastChangedIndex.current !== index)
          onChangeRef.current(index);
        lastChangedIndex.current = index;
        dispatch({ type: 0 /* SetSelectedIndex */, index });
      }
    }
  ], [state2, dispatch]);
  let SSRCounter = (0, import_react34.useRef)({
    tabs: [],
    panels: []
  });
  let ourProps = {
    ref: tabsRef
  };
  return /* @__PURE__ */ import_react34.default.createElement(TabsSSRContext.Provider, {
    value: SSRCounter
  }, /* @__PURE__ */ import_react34.default.createElement(TabsContext.Provider, {
    value: providerBag
  }, /* @__PURE__ */ import_react34.default.createElement(FocusSentinel, {
    onFocus: () => {
      var _a2, _b;
      for (let tab of stableTabsRef.current) {
        if (((_a2 = tab.current) == null ? void 0 : _a2.tabIndex) === 0) {
          (_b = tab.current) == null ? void 0 : _b.focus();
          return true;
        }
      }
      return false;
    }
  }), render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_TABS_TAG,
    name: "Tabs"
  })));
});
var DEFAULT_LIST_TAG = "div";
var List = forwardRefWithAs(function List2(props, ref) {
  let [{ selectedIndex, orientation }] = useTabsContext("Tab.List");
  let listRef = useSyncRefs(ref);
  let slot = { selectedIndex };
  let theirProps = props;
  let ourProps = {
    ref: listRef,
    role: "tablist",
    "aria-orientation": orientation
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_LIST_TAG,
    name: "Tabs.List"
  });
});
var DEFAULT_TAB_TAG = "button";
var TabRoot = forwardRefWithAs(function Tab(props, ref) {
  var _a2, _b;
  let id2 = `headlessui-tabs-tab-${useId()}`;
  let [{ selectedIndex, tabs, panels, orientation, activation }, { dispatch, change }] = useTabsContext("Tab");
  let SSRContext = useSSRTabsCounter("Tab");
  let internalTabRef = (0, import_react34.useRef)(null);
  let tabRef = useSyncRefs(internalTabRef, ref, (element) => {
    if (!element)
      return;
    dispatch({ type: 7 /* ForceRerender */ });
  });
  useIsoMorphicEffect(() => {
    dispatch({ type: 3 /* RegisterTab */, tab: internalTabRef });
    return () => dispatch({ type: 4 /* UnregisterTab */, tab: internalTabRef });
  }, [dispatch, internalTabRef]);
  let mySSRIndex = SSRContext.current.tabs.indexOf(id2);
  if (mySSRIndex === -1)
    mySSRIndex = SSRContext.current.tabs.push(id2) - 1;
  let myIndex = tabs.indexOf(internalTabRef);
  if (myIndex === -1)
    myIndex = mySSRIndex;
  let selected = myIndex === selectedIndex;
  let handleKeyDown = (0, import_react34.useCallback)((event) => {
    let list = tabs.map((tab) => tab.current).filter(Boolean);
    if (event.key === " " /* Space */ || event.key === "Enter" /* Enter */) {
      event.preventDefault();
      event.stopPropagation();
      change(myIndex);
      return;
    }
    switch (event.key) {
      case "Home" /* Home */:
      case "PageUp" /* PageUp */:
        event.preventDefault();
        event.stopPropagation();
        return focusIn(list, 1 /* First */);
      case "End" /* End */:
      case "PageDown" /* PageDown */:
        event.preventDefault();
        event.stopPropagation();
        return focusIn(list, 8 /* Last */);
    }
    return match(orientation, {
      vertical() {
        if (event.key === "ArrowUp" /* ArrowUp */)
          return focusIn(list, 2 /* Previous */ | 16 /* WrapAround */);
        if (event.key === "ArrowDown" /* ArrowDown */)
          return focusIn(list, 4 /* Next */ | 16 /* WrapAround */);
        return;
      },
      horizontal() {
        if (event.key === "ArrowLeft" /* ArrowLeft */)
          return focusIn(list, 2 /* Previous */ | 16 /* WrapAround */);
        if (event.key === "ArrowRight" /* ArrowRight */)
          return focusIn(list, 4 /* Next */ | 16 /* WrapAround */);
        return;
      }
    });
  }, [tabs, orientation, myIndex, change]);
  let handleFocus = (0, import_react34.useCallback)(() => {
    var _a3;
    (_a3 = internalTabRef.current) == null ? void 0 : _a3.focus();
  }, [internalTabRef]);
  let handleSelection = (0, import_react34.useCallback)(() => {
    var _a3;
    (_a3 = internalTabRef.current) == null ? void 0 : _a3.focus();
    change(myIndex);
  }, [change, myIndex, internalTabRef]);
  let handleMouseDown = (0, import_react34.useCallback)((event) => {
    event.preventDefault();
  }, []);
  let slot = (0, import_react34.useMemo)(() => ({ selected }), [selected]);
  let theirProps = props;
  let ourProps = {
    ref: tabRef,
    onKeyDown: handleKeyDown,
    onFocus: activation === "manual" ? handleFocus : handleSelection,
    onMouseDown: handleMouseDown,
    onClick: handleSelection,
    id: id2,
    role: "tab",
    type: useResolveButtonType(props, internalTabRef),
    "aria-controls": (_b = (_a2 = panels[myIndex]) == null ? void 0 : _a2.current) == null ? void 0 : _b.id,
    "aria-selected": selected,
    tabIndex: selected ? 0 : -1
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_TAB_TAG,
    name: "Tabs.Tab"
  });
});
var DEFAULT_PANELS_TAG = "div";
var Panels = forwardRefWithAs(function Panels2(props, ref) {
  let [{ selectedIndex }] = useTabsContext("Tab.Panels");
  let panelsRef = useSyncRefs(ref);
  let slot = (0, import_react34.useMemo)(() => ({ selectedIndex }), [selectedIndex]);
  let theirProps = props;
  let ourProps = { ref: panelsRef };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_PANELS_TAG,
    name: "Tabs.Panels"
  });
});
var DEFAULT_PANEL_TAG4 = "div";
var PanelRenderFeatures3 = 1 /* RenderStrategy */ | 2 /* Static */;
var Panel7 = forwardRefWithAs(function Panel8(props, ref) {
  var _a2, _b;
  let [{ selectedIndex, tabs, panels }, { dispatch }] = useTabsContext("Tab.Panel");
  let SSRContext = useSSRTabsCounter("Tab.Panel");
  let id2 = `headlessui-tabs-panel-${useId()}`;
  let internalPanelRef = (0, import_react34.useRef)(null);
  let panelRef = useSyncRefs(internalPanelRef, ref, (element) => {
    if (!element)
      return;
    dispatch({ type: 7 /* ForceRerender */ });
  });
  useIsoMorphicEffect(() => {
    dispatch({ type: 5 /* RegisterPanel */, panel: internalPanelRef });
    return () => dispatch({ type: 6 /* UnregisterPanel */, panel: internalPanelRef });
  }, [dispatch, internalPanelRef]);
  let mySSRIndex = SSRContext.current.panels.indexOf(id2);
  if (mySSRIndex === -1)
    mySSRIndex = SSRContext.current.panels.push(id2) - 1;
  let myIndex = panels.indexOf(internalPanelRef);
  if (myIndex === -1)
    myIndex = mySSRIndex;
  let selected = myIndex === selectedIndex;
  let slot = (0, import_react34.useMemo)(() => ({ selected }), [selected]);
  let theirProps = props;
  let ourProps = {
    ref: panelRef,
    id: id2,
    role: "tabpanel",
    "aria-labelledby": (_b = (_a2 = tabs[myIndex]) == null ? void 0 : _a2.current) == null ? void 0 : _b.id,
    tabIndex: selected ? 0 : -1
  };
  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_PANEL_TAG4,
    features: PanelRenderFeatures3,
    visible: selected,
    name: "Tabs.Panel"
  });
});
var Tab2 = Object.assign(TabRoot, { Group: Tabs, List, Panels, Panel: Panel7 });

// src/components/transitions/transition.tsx
var import_react35 = __toESM(require("react"), 1);

// src/utils/once.ts
function once(cb) {
  let state2 = { called: false };
  return (...args) => {
    if (state2.called)
      return;
    state2.called = true;
    return cb(...args);
  };
}

// src/components/transitions/utils/transition.ts
function addClasses(node, ...classes) {
  node && classes.length > 0 && node.classList.add(...classes);
}
function removeClasses(node, ...classes) {
  node && classes.length > 0 && node.classList.remove(...classes);
}
function waitForTransition(node, done) {
  let d = disposables();
  if (!node)
    return d.dispose;
  let { transitionDuration, transitionDelay } = getComputedStyle(node);
  let [durationMs, delayMs] = [transitionDuration, transitionDelay].map((value) => {
    let [resolvedValue = 0] = value.split(",").filter(Boolean).map((v) => v.includes("ms") ? parseFloat(v) : parseFloat(v) * 1e3).sort((a, z) => z - a);
    return resolvedValue;
  });
  let totalDuration = durationMs + delayMs;
  if (totalDuration !== 0) {
    let listeners = [];
    if (false) {
      listeners.push(d.setTimeout(() => {
        done("ended" /* Ended */);
        listeners.splice(0).forEach((dispose) => dispose());
      }, totalDuration));
    } else {
      listeners.push(d.addEventListener(node, "transitionrun", () => {
        listeners.splice(0).forEach((dispose) => dispose());
        listeners.push(d.addEventListener(node, "transitionend", () => {
          done("ended" /* Ended */);
          listeners.splice(0).forEach((dispose) => dispose());
        }, { once: true }), d.addEventListener(node, "transitioncancel", () => {
          done("cancelled" /* Cancelled */);
          listeners.splice(0).forEach((dispose) => dispose());
        }, { once: true }));
      }, { once: true }));
    }
  } else {
    done("ended" /* Ended */);
  }
  d.add(() => done("cancelled" /* Cancelled */));
  return d.dispose;
}
function transition(node, classes, show, done) {
  let direction = show ? "enter" : "leave";
  let d = disposables();
  let _done = done !== void 0 ? once(done) : () => {
  };
  let base = match(direction, {
    enter: () => classes.enter,
    leave: () => classes.leave
  });
  let to = match(direction, {
    enter: () => classes.enterTo,
    leave: () => classes.leaveTo
  });
  let from = match(direction, {
    enter: () => classes.enterFrom,
    leave: () => classes.leaveFrom
  });
  removeClasses(node, ...classes.enter, ...classes.enterTo, ...classes.enterFrom, ...classes.leave, ...classes.leaveFrom, ...classes.leaveTo, ...classes.entered);
  addClasses(node, ...base, ...from);
  d.nextFrame(() => {
    removeClasses(node, ...from);
    addClasses(node, ...to);
    waitForTransition(node, (reason) => {
      if (reason === "ended" /* Ended */) {
        removeClasses(node, ...base);
        addClasses(node, ...classes.entered);
      }
      return _done(reason);
    });
  });
  return d.dispose;
}

// src/hooks/use-transition.ts
function useTransition({
  container,
  direction,
  classes,
  events,
  onStart,
  onStop
}) {
  let mounted = useIsMounted();
  let d = useDisposables();
  let latestDirection = useLatestValue(direction);
  let beforeEvent = useLatestValue(() => {
    return match(latestDirection.current, {
      enter: () => events.current.beforeEnter(),
      leave: () => events.current.beforeLeave(),
      idle: () => {
      }
    });
  });
  let afterEvent = useLatestValue(() => {
    return match(latestDirection.current, {
      enter: () => events.current.afterEnter(),
      leave: () => events.current.afterLeave(),
      idle: () => {
      }
    });
  });
  useIsoMorphicEffect(() => {
    let dd = disposables();
    d.add(dd.dispose);
    let node = container.current;
    if (!node)
      return;
    if (latestDirection.current === "idle")
      return;
    if (!mounted.current)
      return;
    dd.dispose();
    beforeEvent.current();
    onStart.current(latestDirection.current);
    dd.add(transition(node, classes.current, latestDirection.current === "enter", (reason) => {
      dd.dispose();
      match(reason, {
        ["ended" /* Ended */]() {
          afterEvent.current();
          onStop.current(latestDirection.current);
        },
        ["cancelled" /* Cancelled */]: () => {
        }
      });
    }));
    return dd.dispose;
  }, [direction]);
}

// src/components/transitions/transition.tsx
function splitClasses(classes = "") {
  return classes.split(" ").filter((className) => className.trim().length > 1);
}
var TransitionContext = (0, import_react35.createContext)(null);
TransitionContext.displayName = "TransitionContext";
function useTransitionContext() {
  let context = (0, import_react35.useContext)(TransitionContext);
  if (context === null) {
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  }
  return context;
}
function useParentNesting() {
  let context = (0, import_react35.useContext)(NestingContext);
  if (context === null) {
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  }
  return context;
}
var NestingContext = (0, import_react35.createContext)(null);
NestingContext.displayName = "NestingContext";
function hasChildren(bag) {
  if ("children" in bag)
    return hasChildren(bag.children);
  return bag.current.filter(({ state: state2 }) => state2 === "visible" /* Visible */).length > 0;
}
function useNesting(done) {
  let doneRef = useLatestValue(done);
  let transitionableChildren = (0, import_react35.useRef)([]);
  let mounted = useIsMounted();
  let unregister = useLatestValue((childId, strategy = 1 /* Hidden */) => {
    let idx = transitionableChildren.current.findIndex(({ id: id2 }) => id2 === childId);
    if (idx === -1)
      return;
    match(strategy, {
      [0 /* Unmount */]() {
        transitionableChildren.current.splice(idx, 1);
      },
      [1 /* Hidden */]() {
        transitionableChildren.current[idx].state = "hidden" /* Hidden */;
      }
    });
    microTask(() => {
      var _a2;
      if (!hasChildren(transitionableChildren) && mounted.current) {
        (_a2 = doneRef.current) == null ? void 0 : _a2.call(doneRef);
      }
    });
  });
  let register = useLatestValue((childId) => {
    let child = transitionableChildren.current.find(({ id: id2 }) => id2 === childId);
    if (!child) {
      transitionableChildren.current.push({ id: childId, state: "visible" /* Visible */ });
    } else if (child.state !== "visible" /* Visible */) {
      child.state = "visible" /* Visible */;
    }
    return () => unregister.current(childId, 0 /* Unmount */);
  });
  return (0, import_react35.useMemo)(() => ({
    children: transitionableChildren,
    register,
    unregister
  }), [register, unregister, transitionableChildren]);
}
function noop() {
}
var eventNames = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ensureEventHooksExist(events) {
  var _a2;
  let result = {};
  for (let name of eventNames) {
    result[name] = (_a2 = events[name]) != null ? _a2 : noop;
  }
  return result;
}
function useEvents(events) {
  let eventsRef = (0, import_react35.useRef)(ensureEventHooksExist(events));
  (0, import_react35.useEffect)(() => {
    eventsRef.current = ensureEventHooksExist(events);
  }, [events]);
  return eventsRef;
}
var DEFAULT_TRANSITION_CHILD_TAG = "div";
var TransitionChildRenderFeatures = 1 /* RenderStrategy */;
var TransitionChild = forwardRefWithAs(function TransitionChild2(props, ref) {
  let {
    beforeEnter,
    afterEnter,
    beforeLeave,
    afterLeave,
    enter,
    enterFrom,
    enterTo,
    entered,
    leave,
    leaveFrom,
    leaveTo,
    ...rest
  } = props;
  let container = (0, import_react35.useRef)(null);
  let transitionRef = useSyncRefs(container, ref);
  let [state2, setState] = (0, import_react35.useState)("visible" /* Visible */);
  let strategy = rest.unmount ? 0 /* Unmount */ : 1 /* Hidden */;
  let { show, appear, initial } = useTransitionContext();
  let { register, unregister } = useParentNesting();
  let prevShow = (0, import_react35.useRef)(null);
  let id2 = useId();
  let transitionInFlight = (0, import_react35.useRef)(false);
  let nesting = useNesting(() => {
    if (!transitionInFlight.current) {
      setState("hidden" /* Hidden */);
      unregister.current(id2);
    }
  });
  (0, import_react35.useEffect)(() => {
    if (!id2)
      return;
    return register.current(id2);
  }, [register, id2]);
  (0, import_react35.useEffect)(() => {
    if (strategy !== 1 /* Hidden */)
      return;
    if (!id2)
      return;
    if (show && state2 !== "visible" /* Visible */) {
      setState("visible" /* Visible */);
      return;
    }
    match(state2, {
      ["hidden" /* Hidden */]: () => unregister.current(id2),
      ["visible" /* Visible */]: () => register.current(id2)
    });
  }, [state2, id2, register, unregister, show, strategy]);
  let classes = useLatestValue({
    enter: splitClasses(enter),
    enterFrom: splitClasses(enterFrom),
    enterTo: splitClasses(enterTo),
    entered: splitClasses(entered),
    leave: splitClasses(leave),
    leaveFrom: splitClasses(leaveFrom),
    leaveTo: splitClasses(leaveTo)
  });
  let events = useEvents({ beforeEnter, afterEnter, beforeLeave, afterLeave });
  let ready = useServerHandoffComplete();
  (0, import_react35.useEffect)(() => {
    if (ready && state2 === "visible" /* Visible */ && container.current === null) {
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
    }
  }, [container, state2, ready]);
  let skip = initial && !appear;
  let transitionDirection = (() => {
    if (!ready)
      return "idle";
    if (skip)
      return "idle";
    if (prevShow.current === show)
      return "idle";
    return show ? "enter" : "leave";
  })();
  useTransition({
    container,
    classes,
    events,
    direction: transitionDirection,
    onStart: useLatestValue(() => {
    }),
    onStop: useLatestValue((direction) => {
      if (direction === "leave" && !hasChildren(nesting)) {
        setState("hidden" /* Hidden */);
        unregister.current(id2);
      }
    })
  });
  (0, import_react35.useEffect)(() => {
    if (!skip)
      return;
    if (strategy === 1 /* Hidden */) {
      prevShow.current = null;
    } else {
      prevShow.current = show;
    }
  }, [show, skip, state2]);
  let theirProps = rest;
  let ourProps = { ref: transitionRef };
  return /* @__PURE__ */ import_react35.default.createElement(NestingContext.Provider, {
    value: nesting
  }, /* @__PURE__ */ import_react35.default.createElement(OpenClosedProvider, {
    value: match(state2, {
      ["visible" /* Visible */]: 0 /* Open */,
      ["hidden" /* Hidden */]: 1 /* Closed */
    })
  }, render({
    ourProps,
    theirProps,
    defaultTag: DEFAULT_TRANSITION_CHILD_TAG,
    features: TransitionChildRenderFeatures,
    visible: state2 === "visible" /* Visible */,
    name: "Transition.Child"
  })));
});
var TransitionRoot = forwardRefWithAs(function Transition(props, ref) {
  let { show, appear = false, unmount, ...theirProps } = props;
  let transitionRef = useSyncRefs(ref);
  useServerHandoffComplete();
  let usesOpenClosedState = useOpenClosed();
  if (show === void 0 && usesOpenClosedState !== null) {
    show = match(usesOpenClosedState, {
      [0 /* Open */]: true,
      [1 /* Closed */]: false
    });
  }
  if (![true, false].includes(show)) {
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  }
  let [state2, setState] = (0, import_react35.useState)(show ? "visible" /* Visible */ : "hidden" /* Hidden */);
  let nestingBag = useNesting(() => {
    setState("hidden" /* Hidden */);
  });
  let [initial, setInitial] = (0, import_react35.useState)(true);
  let changes = (0, import_react35.useRef)([show]);
  useIsoMorphicEffect(() => {
    if (initial === false) {
      return;
    }
    if (changes.current[changes.current.length - 1] !== show) {
      changes.current.push(show);
      setInitial(false);
    }
  }, [changes, show]);
  let transitionBag = (0, import_react35.useMemo)(() => ({ show, appear, initial }), [show, appear, initial]);
  (0, import_react35.useEffect)(() => {
    if (show) {
      setState("visible" /* Visible */);
    } else if (!hasChildren(nestingBag)) {
      setState("hidden" /* Hidden */);
    }
  }, [show, nestingBag]);
  let sharedProps = { unmount };
  return /* @__PURE__ */ import_react35.default.createElement(NestingContext.Provider, {
    value: nestingBag
  }, /* @__PURE__ */ import_react35.default.createElement(TransitionContext.Provider, {
    value: transitionBag
  }, render({
    ourProps: {
      ...sharedProps,
      as: import_react35.Fragment,
      children: /* @__PURE__ */ import_react35.default.createElement(TransitionChild, {
        ref: transitionRef,
        ...sharedProps,
        ...theirProps
      })
    },
    theirProps: {},
    defaultTag: import_react35.Fragment,
    features: TransitionChildRenderFeatures,
    visible: state2 === "visible" /* Visible */,
    name: "Transition"
  })));
});
function Child(props) {
  let hasTransitionContext = (0, import_react35.useContext)(TransitionContext) !== null;
  let hasOpenClosedContext = useOpenClosed() !== null;
  return /* @__PURE__ */ import_react35.default.createElement(import_react35.default.Fragment, null, !hasTransitionContext && hasOpenClosedContext ? /* @__PURE__ */ import_react35.default.createElement(TransitionRoot, {
    ...props
  }) : /* @__PURE__ */ import_react35.default.createElement(TransitionChild, {
    ...props
  }));
}
var Transition2 = Object.assign(TransitionRoot, { Child, Root: TransitionRoot });
