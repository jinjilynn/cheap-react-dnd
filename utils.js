function isPointInPolygon(point, polygon) {
  if (!point || !polygon) return false;
  let [x, y] = point;
  let isInside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    let [xi, yi] = polygon[i];
    let [xj, yj] = polygon[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
      isInside = !isInside;
    }
  }

  return isInside;
}

const getClassNamesStartingWith = (element, prefix) =>
  [...element.classList].filter((dropClass) => dropClass.startsWith(prefix))[0];

const checkdom = (ref) => {
  if (!ref) {
    console.error("ref is required");
    return false;
  }
  const dom = ref.current;
  if (!(dom instanceof HTMLElement)) {
    console.error("ref.current is not a HTMLElement");
    return false;
  }
  return dom;
};

function debounce(func, wait, immediate) {
  let timeout;
  const debounced = (...args) => {
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };

  debounced.cancel = () => clearTimeout(timeout);

  return debounced;
}

function throttle(callback, delay) {
  let isThrottled = false;
  let argsToUse = null;

  function next() {
    isThrottled = false;
    if (argsToUse !== null) {
      wrapper(...argsToUse); // eslint-disable-line
      argsToUse = null;
    }
  }

  function wrapper(...args) {
    if (isThrottled) {
      argsToUse = args;
      return;
    }
    isThrottled = true;
    callback(...args);
    setTimeout(next, delay);
  }

  return wrapper;
}

export {
  isPointInPolygon,
  getClassNamesStartingWith,
  checkdom,
  debounce,
  throttle,
};
