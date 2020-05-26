class Dom {
  constructor(selector) {
    // #app
    this.$el =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;
  }

  html(html) {
    if (typeof html === "string") {
      this.$el.innerHTML = html;
      // Для того, чтобы вернуть инстанс, на котором может выполнятся методы строки
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  clear() {
    this.html("");
    // Для того, чтобы вернуть инстанс, на котором может выполнятся методы строки
    return this;
  }
  // Елемент
  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
    return this;
  }
}

// event.target
export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = "") => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
