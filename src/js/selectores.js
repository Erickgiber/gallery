// Selectores
const $ = s => {
    return document.querySelector(s)
}
const $All = s => {
    return document.querySelector(s)
}

// LocalStorage
const ls = {
    set: (name, data)=> { return window.localStorage.setItem(name, data) },
    get: name=> { return window.localStorage.getItem(name) },
    remove: name=> { return window.localStorage.removeItem(name) }
  }