class FixedURL extends URL {
    constructor(url, base) {
      try {
        super(url, base)
      } catch {
        super(url, window.strapi.backendURL || window.location.origin)
      }
    }
  }
  
  window.URL = FixedURL