import { writable, readable } from 'svelte/store'

class MasterStore {
  constructor() {
    const { subscribe, set } = writable(null)
    this.subscribe = subscribe
    this._set = set
    this.set = set
    if (!chrome.storage) {
      this.remember = () => false
      this.init = () => Promise.resolve()
    }
    this.remember(false)
  }
  get savable() {
    return !!chrome.storage
  }

  async init () {
    return new Promise((resolve) => {
      chrome.storage.local.get(['key', 'remember'], ({key, remember}) => {
        this._remember
        if (!remember) return
        resolve(set(Buffer.from(key)))
      })
    })
  }

  remember(bool = this._remember) {
    if (!!bool === this._remember) return bool
    this._remember = !!bool
    if (this._remember) {
      this.set = async (data) => {
        this._set(data)
        await this.save(data)
      }
    } else {
      this.save(null)
      this.set = this._set
    }
    chrome.storage.local.set({remember: this._remember})
    return this._remember
  }

  async save(data) {
    data = {
      key: data ? [...data] : data,
    }
    return new Promise((resolve) => chrome.storage.local.set(data, resolve))
  }
}


class LoadingStore {
  constructor() {
    const {set, subscribe} = writable(false)
    this.subscribe = subscribe
    const lock = []
    this.set = (value) => {
      if (!value && lock.pop() && !lock.length) {
        return set(false)
      }
      if (value) {
        if (lock.push(true) === 1) {
          return set(true)
        }
      }
    }
  }
}

const hostname = readable(null, (set) => {
  if (!chrome.tabs) return set(location.hostname)
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    set(tabs[0].url);
  });
})
const loading = new LoadingStore()
const master = new MasterStore()

export {
  hostname,
  loading,
  master
}
