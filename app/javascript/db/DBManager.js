const globalScope = self
const databaseName = 'test_db'
const dbVersion = 1

class DBManager {
  constructor() {
    this.initializeDatabase = this.initializeDatabase.bind(this)
    this.saveToRequests = this.saveToRequests.bind(this)
    this.getFromRequests = this.getFromRequests.bind(this)
    this.db = null
    this.initializeDatabase()
  }

  initializeDatabase() {
    if(!this.isBrowserCompatible()) {
      return
    }
    const req = indexedDB.open(databaseName, dbVersion);
    req.onupgradeneeded = (e) => {
      console.log('onupgradeNeeded')
      let db = e.target.result
      db.createObjectStore("requestData", { keyPath: "url" });
    }
    req.onsuccess = (_e) => {
      this.db = req.result
      console.log('success')
    }
    req.onerror = function(_e) {
      console.log('error')
    }
  }

  isBrowserCompatible() {
    if (!('indexedDB' in globalScope)) {
      console.log('This browser doesn\'t support IndexedDB')
      return false
    }
    return true
  }

  saveToRequests(data, url) {
    if(!this.isBrowserCompatible()) {
      return false
    }
    data['url'] = url

    console.log('saving data', data);

    var tx = this.db.transaction('requestData', "readwrite")
    var store = tx.objectStore('requestData')
    store.put(data)
    return tx.complete
  }

  getFromRequests(url) {
    return new Promise((resolve, reject) => {
      if(!this.isBrowserCompatible()) {
        reject()
      }
      var tx = this.db.transaction('requestData', 'readonly')
      var store = tx.objectStore('requestData')
      var request = store.get(url)
      request.onsuccess = (event) => {
        resolve(event.target.result)
      }
      request.onerror = () => {
        reject()
      }
    })
  }
}

export default DBManager
