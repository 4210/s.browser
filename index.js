
const S_NEW_REQUEST = n()
const S_NEW_DOM_ELEMENT = n()
const S_GET_DOM_ELEMENT = n()
const S_REMOVE_DOM_ELEMENT = n()
const S_SET_DOM_ATTR = n()
const S_REMOVE_DOM_ATTR = n()
const S_PREVENT_DEFAULT_EVENT_BEHAVIOR = n()
const S_STOP_EVENT_PROPAGATION = n()
const S_LISTEN_TO_EVENT = n()
const S_REPLACE_ELEMENT = n()
const S_FOCUS_ELEMENT = n()
const S_NEW_WEBSOCKET = n()
const S_GET_INNER_HEIGHT = n()
const S_GET_CLIENT_HEIGHT = n()
const S_GET_INNER_WIDTH = n()
const S_GET_CLIENT_WIDTH = n()
const S_GET_SCROLL_TOP = n()
const S_GET_HIDDEN = n()
const S_GET_READY_STATE = n()
const S_GET_RESPONSE_TEXT = n()
const S_GET_LENGTH_COMPUTABLE = n()
const S_GET_TOTAL = n()
const S_GET_LENGTH = n()
const S_GET_FULLSCREEN_ELEMENT = n()
const S_GET_CANCEL_FULL_SCREEN = n()
const S_GET_REQUEST_FULLSCREEN = n()
const S_GET_HISTORY = n()
const S_GET_FULL_SCREEN = n()
const S_GET_LOCAL_STORAGE = n()
const S_GET_SCROLL_X = n()
const S_GET_SCROLL_Y = n()
const S_GET_VALUE = n()
const S_GET_MATCHES = n()
const S_GET_PERFORMANCE = n()
const S_GET_MEMORY = n()
const S_GET_USED_JS_HEAP_SIZE = n()
const S_GET_SHEET = n()
const S_GET_TARGET = n()
const S_GET_WORKER_GLOBAL_SCOPE = n()
const S_GET_WHEEL_DELTA = n()
const S_GET_DETAIL = n()
const S_GET_TEXT = n()
const S_SET_ON_READY_STATE_CHANGE = n()
const S_SET_ONREADYSTATECHANGE = n()
const S_SET_RESPONSE_TYPE = n()
const S_SET_WITH_CREDENTIALS = n()
const S_SET_TITLE = n()
const S_SET_SRC = n()
const S_SET_MULTIPLE = n()
const S_SET_ACCEPT = n()
const S_SET_DIRECTORY = n()
const S_SET_ID = n()
const S_SET_REL = n()
const S_SET_HREF = n()
const S_SET_TYPE = n()
const S_SET_ASYNC = n()

s(S_NEW_REQUEST, function() {
  if (typeof XMLHttpRequest != 'undefined') return new XMLHttpRequest()
  try { return new ActiveXObject('msxml2.xmlhttp.6.0'); } catch(e){}
  try { return new ActiveXObject('msxml2.xmlhttp.3.0'); } catch(e){}
  try { return new ActiveXObject('msxml2.xmlhttp'); } catch(e){}
})

s(S_NEW_DOM_ELEMENT, function(type) {
  return document.createElement(type)
})

s(S_GET_DOM_ELEMENT, function(id) {
  return document.getElementById(id)
})

s(S_REMOVE_DOM_ELEMENT, function(p, el){
  p.removeChild(el)
})

s(S_SET_DOM_ATTR, function(el, attr, val) {
  el.setAttribute(attr, val)
})

s(S_REMOVE_DOM_ATTR, function(el, attr) {
  el.removeAttribute(attr)
})

s(S_PREVENT_DEFAULT_EVENT_BEHAVIOR, function(e){
  e.preventDefault()
})

s(S_STOP_EVENT_PROPAGATION, function(e){
  e.stopPropagation()
})

s(S_LISTEN_TO_EVENT, function(emitter, type, handler){
  emitter.addEventListener(type, handler)
})

s(S_REPLACE_ELEMENT, function(p, old, next) {
  p.replaceChild(next, old)
})

s(S_FOCUS_ELEMENT, function(el){
  el.focus()
})

s(S_NEW_WEBSOCKET, function(location){
  return new WebSocket(location)
})

s(S_GET_INNER_HEIGHT, function(o) {
  return o.innerHeight
})

s(S_GET_CLIENT_HEIGHT, function(o) {
  return o.clientHeight
})

s(S_GET_INNER_WIDTH, function(o) {
  return o.innerWidth
})

s(S_GET_CLIENT_WIDTH, function(o) {
  return o.clientWidth
})

s(S_GET_SCROLL_TOP, function(o) {
  return o.scrollTop
})

s(S_GET_HIDDEN, function(o) {
  return o.hidden
})

s(S_GET_READY_STATE, function(o){
  return o.readyState
})

s(S_GET_RESPONSE_TEXT, function(o){
  return o.responseText
})

s(S_GET_LENGTH_COMPUTABLE, function(o){
  return o.lengthComputable
})

s(S_GET_TOTAL, function(o){
  return o.total
})

s(S_GET_LENGTH, function(o){
  return o.length
})

s(S_GET_FULLSCREEN_ELEMENT, function(o){
  return o.fullscreenElement
})

s(S_GET_CANCEL_FULL_SCREEN, function(o){
  return o.cancelFullScreen
})

s(S_GET_REQUEST_FULLSCREEN, function(o){
  return o.requestFullscreen
})

s(S_GET_HISTORY, function(o){
  return o.history
})

s(S_GET_FULL_SCREEN, function(o){
  return o.fullScreen
})

s(S_GET_LOCAL_STORAGE, function(o){
  return o.localStorage
})

s(S_GET_SCROLL_X, function(o){
  return o.scrollX
})

s(S_GET_SCROLL_Y, function(o){
  return o.scrollY
})

s(S_GET_VALUE, function(o){
  return o.value
})

s(S_GET_MATCHES, function(o){
  return o.matches
})

s(S_GET_PERFORMANCE, function(o){
  return o.performance
})

s(S_GET_MEMORY, function(o){
  return o.memory
})

s(S_GET_USED_JS_HEAP_SIZE, function(o){
  return o.usedJSHeapSize
})

s(S_GET_SHEET, function(o){
  return o.sheet
})

s(S_GET_TARGET, function(o){
  return o.target
})

s(S_GET_WORKER_GLOBAL_SCOPE, function(){
  return WorkerGlobalScope
})

s(S_GET_WHEEL_DELTA, function(o){
  return o.wheelDelta
})

s(S_GET_DETAIL, function(o){
  return o.detail
})

s(S_GET_TEXT, function(o){
  return o.text
})

s(S_SET_ON_READY_STATE_CHANGE, function(o, x){
  o.onreadystatechange = x
})

s(S_SET_ONREADYSTATECHANGE, function(o, x){
  o.onreadystatechange = x
})

s(S_SET_RESPONSE_TYPE, function(o, x){
  o.responseType = x
})

s(S_SET_WITH_CREDENTIALS, function(o, x){
  o.withCredentials = x
})

s(S_SET_TITLE, function(o, x){
  o.title = x
})

s(S_SET_SRC, function(o, x){
  o.src = x
})

s(S_SET_MULTIPLE, function(o, x){
  o.multiple = x
})

s(S_SET_ACCEPT, function(o, x){
  o.accept = x
})

s(S_SET_DIRECTORY, function(o, x){
  o.directory = x
})

s(S_SET_ID, function(o, x){
  o.id = x
})

s(S_SET_REL, function(o, x){
  o.rel = x
})

s(S_SET_HREF, function(o, x){
  o.href = x
})

s(S_SET_TYPE, function(o, x){
  o.type = x
})

s(S_SET_ASYNC, function(o, x){
  o.async = x
})
