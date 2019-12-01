if (!String.prototype.startsWith) {
  Object.defineProperty(String.prototype, "startsWith", {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function(searchString, position) {
      position = position || 0;
      return this.indexOf(searchString, position) === position;
    }
  });
}

function createElement(tag, props, ...children) {
  const element = document.createElement(tag);

  Object.keys(props).forEach(key => {
    if (key.startsWith("data-")) {
      element.setAttribute(key, props[key]);
    } else {
      element[key] = props[key];
    }
  });

  children.forEach(child => {
    if (typeof child === "string") {
      child = document.createTextNode(child);
    }

    element.appendChild(child);
  });

  return element;
}

export { createElement };
