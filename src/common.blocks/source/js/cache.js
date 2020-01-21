const cache = (key, value) => {
    if (typeof value == 'undefined') {
        return cache[key];
    }
    cache[key] = value;
}

_io_q = (selector) => {
    if (!cache(selector)) {
        cache(selector, document.querySelector(selector));
    }
    return cache(selector);
}

_io_qall = (selector) => {
    if (!cache(selector)) {
        cache(selector, document.querySelectorAll(selector));
    }
    return cache(selector);
}