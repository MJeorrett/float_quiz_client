export default {
  setItem( key, item ) {
    localStorage.setItem( key, JSON.stringify(item) )
  },
  getItem( key ) {
    const item = localStorage.getItem(key)
    if ( item !== undefined ) {
      return JSON.parse( item )
    }
    else {
      return undefined
    }
  }
}
