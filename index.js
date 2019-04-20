
const S_NEW_REQUEST = n()
const S_NEW_DOM_ELEMENT = n()
const S_GET_DOM_ELEMENT = n()
const S_REMOVE_DOM_ELEMENT = n()
const S_SET_DOM_ATTR = n()
const S_REMOVE_DOM_ATTR = n()
const S_PREVENT_DEFAULT_EVENT_BEHAVIOR = n()
const S_LISTEN_TO_EVENT = n()
const S_GET_WINDOW_HEIGHT = n()
const S_GET_WINDOW_WIDTH = n()
const S_GET_WINDOW_Y = n()
const S_IS_DOCUMENT_HIDDEN = n()
const S_SET_BROWSER_TITLE = n()
const S_REPLACE_ELEMENT = n()
const S_FOCUS_ELEMENT = n()

s(S_NEW_REQUEST, function() {
  if (typeof XMLHttpRequest != 'undefined') return new XMLHttpRequest()
  try{ return new ActiveXObject('msxml2.xmlhttp.6.0'); } catch(e){}
  try{ return new ActiveXObject('msxml2.xmlhttp.3.0'); } catch(e){}
  try{ return new ActiveXObject('msxml2.xmlhttp'); } catch(e){}
})

s(S_NEW_DOM_ELEMENT, function(type) {
  return document.createElement(type)
})

s(S_GET_DOM_ELEMENT, function(id) {
  return document.getElementById(id)
})

s(S_REMOVE_DOM_ELEMENT, function(el){
  el.parentNode.removeChild(el)
})

s(S_SET_DOM_ATTR, function(el, attr, val) {
  el.setAttribute(attr, val)
})

s(S_REMOVE_DOM_ATTR, function(el, attr) {
  el.removeAttribute(attr)
})

s(S_PREVENT_DEFAULT_EVENT_BEHAVIOR, function(e){
  e.preventDefault()
  e.stopPropagation()
})

s(S_LISTEN_TO_EVENT, function(emitter, type, handler){
  emitter.addEventListener(type, handler)
})

s(S_GET_WINDOW_HEIGHT, function() {
  return window.innerHeight || document.documentElement.clientHeight
})

s(S_GET_WINDOW_WIDTH, function() {
  return window.innerWidth || document.documentElement.clientWidth
})

s(S_GET_WINDOW_Y, function() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
})

s(S_IS_DOCUMENT_HIDDEN, function(){
  return document.hidden || document.msHidden || document.webkitHidden || document.mozHidden
})

s(S_SET_BROWSER_TITLE, function(title){
  document.title = title
})

s(S_REPLACE_ELEMENT, function(old, next) {
  return old.parentNode.replaceChild(next, old)
})

s(S_FOCUS_ELEMENT, function(el){
  if (el.ownerDocument.activeElement !== el) {
    el.focus()
  }
})
