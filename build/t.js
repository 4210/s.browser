(function(){


/**
 * Expose main function.
 */

this.t = t

/**
 * Data containers.
 */

const a = [] // list4
const e = [] // list1
const i = [] // index
const o = [] // list2
const u = [] // list3

/**
 * Call API 1.
 */

function h(q) {
  return e[q].apply(e, Array.prototype.slice.call(arguments, 1))
}

function h0(q) {
  return e[q]()
}

function h1(q, a) {
  return e[q](a)
}

function h2(q, a, b) {
  return e[q](a, b)
}

function h3(q, a, b, c) {
  return e[q](a, b, c)
}

function h4(q, a, b, c, d) {
  return e[q](a, b, c, d)
}

function h5(q, a, b, c, d, e) {
  return e[q](a, b, c, d, e)
}

function h6(q, a, b, c, d, e, f) {
  return e[q](a, b, c, d, e, f)
}

/**
 * Call API 2, the main function.
 */

function t(q) {
  return o[q].apply(o, Array.prototype.slice.call(arguments, 1))
}

function t0(q) {
  return o[q]()
}

function t1(q, a) {
  return o[q](a)
}

function t2(q, a, b) {
  return o[q](a, b)
}

function t3(q, a, b, c) {
  return o[q](a, b, c)
}

function t4(q, a, b, c, d) {
  return o[q](a, b, c, d)
}

function t5(q, a, b, c, d, e) {
  return o[q](a, b, c, d, e)
}

function t6(q, a, b, c, d, e, f) {
  return o[q](a, b, c, d, e, f)
}

/**
 * Define API 1.
 */

function n(x) {
  e.push(x)
}

/**
 * Define API 2.
 */

function r(x) {
  o.push(x)
}

/**
 * Define API 2.
 */

function s(x) {
  u.push(x)
}

/**
 * Set user data.
 */

s(function(p){
  const q = i.pop() || a.length - 1
  a[q] = p
  return q
})

/**
 * Get user data.
 */

s(function(q){
  return a[q]
})

/**
 * Delete user data.
 */

s(function(q){
  a[q] = undefined
  i.push(q)
})

/**
 * Get data.
 */

function d(x) {
  return u[1](x)
}

/**
 * HOLD
 */

n(function(a){
  return u[0](a)
})

/**
 * FREE
 */

n(function(a){
  u[2](a)
})

/**
 * PRINT
 */

n(function(a){
  console.log(a)
})

/**
 * GET_CHAR_CODE
 */

n(function(a){
  return a.charCodeAt(a)
})

/**
 * PARSE_FLOAT
 */

n(function(a){
  return parseFloat(a)
})

/**
 * DEBUG_FUNCTION
 */

n(function(a){
  debug(o[a])
})

/**
 * DEBUG
 */

n(function(){
  debugger
})

/**
 * PARSE_INT
 */

n(function(a){
  return parseInt(a)
})

/**
 * PARSE_NUMBER
 */

n(function(a){
  return Number(a)
})

/**
 * GET_MAX
 */

n(function(a, e){
  return Math.max(a, e)
})

/**
 * GET_MIN
 */

n(function(a, e){
  return Math.min(a, e)
})

/**
 * FLOOR
 */

n(function(a){
  return Math.floor(a)
})

/**
 * CEIL
 */

n(function(a){
  return Math.ceil(a)
})

/**
 * ROUND
 */

n(function(a){
  return Math.round(a)
})

/**
 * GET_ABS
 */

n(function(a){
  return Math.abs(a)
})

/**
 * GET_COS
 */

n(function(a){
  return Math.cos(a)
})

/**
 * GET_ACOS
 */

n(function(a){
  return Math.acos(a)
})

/**
 * GET_SIN
 */

n(function(a){
  return Math.sin(a)
})

/**
 * GET_ASIN
 */

n(function(a){
  return Math.asin(a)
})

/**
 * GET_TAN
 */

n(function(a){
  return Math.tan(a)
})

/**
 * GET_ATAN
 */

n(function(a){
  return Math.atan(a)
})

/**
 * GET_ATAN2
 */

n(function(a, e){
  return Math.atan2(a, e)
})

/**
 * GET_LOG
 */

n(function(a){
  return Math.log(a)
})

/**
 * GET_SQRT
 */

n(function(a){
  return Math.sqrt(a)
})

/**
 * SLEEP
 */

n(function(a, e){
  return setTimeout(e, a)
})

/**
 * CLEAR_TIMEOUT
 */

n(function(a){
  clearTimeout(a)
})

/**
 * GET_TIMESTAMP
 */

n(function(){
  return Date.now()
})

/**
 * QUEUE
 */

n(function(a){
  setImmediate(a)
})

/**
 * GET_CHAR_FROM_CODE
 */

n(function(a){
  return String.fromCharCode(a)
})

/**
 * GET_CHAR_FROM_CODE_POINT
 */

n(function(a){
  return String.fromCodePoint(a)
})

/**
 * CHECK_IF_MISSING
 */

n(function(a){
  return a == null
})

/**
 * CHECK_IF_NULL
 */

n(function(a){
  return a === null
})

/**
 * CHECK_IF_UNDEFINED
 */

n(function(a){
  return a === undefined
})

/**
 * CHECK_IF_PROMISE
 */

n(function(a){
  return !!a && typeof a.then === 'function'
})

/**
 * CHECK_IF_ARRAY
 */

n(function(a){
  return Array.isArray(a)
})

/**
 * CHECK_IF_NUMBER
 */

n(function(a){
  return typeof a === 'number'
})

/**
 * CHECK_IF_STRING
 */

n(function(a){
  return typeof a === 'string'
})

/**
 * CHECK_IF_FLOAT
 */

n(function(a){
  return a === +a && a !== (a|0)
})

/**
 * CHECK_IF_INTEGER
 */

n(function(a){
  return a === +a && a === (a|0)
})

/**
 * CHECK_IF_OBJECT
 */

n(function(a){
  return Object.prototype.toString.call(a) === '[object Object]'
})

/**
 * CALL
 */

n(function(a, e){
  return a[e].apply(a, Array.prototype.slice.call(arguments, 2))
})

/**
 * CREATE
 */

n(function(a){
  return new (Function.prototype.bind.apply(a, Array.prototype.slice.call(arguments)))
})

/**
 * GET_TYPEOF
 */

n(function(a){
  return typeof a
})

/**
 * CHECK_INSTANCEOF
 */

n(function(a, e){
  a instanceof e
})

/**
 * CREATE_STRING
 */

n(function(){
  return ''
})

/**
 * SET_ATTR
 */

n(function(a, e, f){
  a[e] = f
})

/**
 * GET_ATTR
 */

n(function(a, e){
  return a[e]
})

/**
 * REMOVE_ATTR
 */

n(function(a, e){
  delete a[e]
})

/**
 * BRANCH
 */

n(function(a, e){
  if (a) e()
})

/**
 * BRANCH_AND_RETURN
 */

n(function(a, e){
  if (a) return e()
})

/**
 * BRANCH_ELSE
 */

n(function(a, e, f){
  if (a) { e() } else { f() }
})

/**
 * SHIFT_LEFT
 */

n(function(a, e){
  return a << e
})

/**
 * SHIFT_RIGHT
 */

n(function(a, e){
  return a >> e
})

/**
 * SHIFT_RIGHT_UNSIGNED
 */

n(function(a, e){
  return a >>> e
})

/**
 * COMPUTE_BITWISE_OR
 */

n(function(a, e){
  return a | e
})

/**
 * COMPUTE_BITWISE_AND
 */

n(function(a, e){
  return a & e
})

/**
 * TRY_CATCH
 */

n(function(a, e){
  try { a() } catch (f) { e(f) }
})

/**
 * TRY_CATCH_AND_RETURN
 */

n(function(a, e){
  try { return a() } catch (f) { return e(f) }
})

/**
 * THROW
 */

n(function(a){
  throw a
})

/**
 * ADD
 */

n(function(a, e){
  return a + e
})

/**
 * SUBTRACT
 */

n(function(a, e){
  return a - e
})

/**
 * MULTIPLY
 */

n(function(a, e){
  return a * e
})

/**
 * DIVIDE
 */

n(function(a, e){
  return a / e
})

/**
 * CHECK_IF_TRUTHY
 */

n(function(a){
  return !!a
})

/**
 * CHECK_IF_TRUE
 */

n(function(a){
  a === true
})

/**
 * CHECK_IF_FALSE
 */

n(function(a){
  a === false
})

/**
 * CHECK_IF_BLANK
 */

n(function(a){
  return !a
})

/**
 * CHECK_IF_STRICT_EQUAL
 */

n(function(a, e){
  return a === e
})

/**
 * CHECK_GT
 */

n(function(a, e){
  return a > e
})

/**
 * CHECK_LT
 */

n(function(a, e){
  return a < e
})

/**
 * CHECK_GTE
 */

n(function(a, e){
  return a >= e
})

/**
 * CHECK_LTE
 */

n(function(a, e){
  return a <= e
})

/**
 * CHECK_AND
 */

n(function(a, e){
  return a && e
})

/**
 * CHECK_OR
 */

n(function(a, e){
  return a || e
})

/**
 * SET_TITLE
 */

n(function(a, e){
  a.title = e
})

/**
 * SET_SRC
 */

n(function(a, e){
  a.src = e
})

/**
 * SET_DISABLED
 */

n(function(a, e){
  a.disabled = e
})

/**
 * GET_TITLE
 */

n(function(a){
  return a.title
})

/**
 * GET_SRC
 */

n(function(a){
  return a.src
})

/**
 * GET_DISABLED
 */

n(function(a){
  return a.disabled
})

/**
 * GET_LENGTH
 */

n(function(a){
  return a.length
})

/**
 * POP
 */

n(function(a){
  return a.pop()
})

/**
 * PUSH
 */

n(function(a, e){
  a.push(e)
})

/**
 * CHECK_IF_OBJECT_HAS_PROPERTY
 */

n(function(a, e){
  return a.hasOwnProperty(e)
})

/**
 * MODULO
 */

n(function(a, e){
  return a % e
})

/**
 * STOP_EVENT_PROPAGATION
 */

n(function(a){
  a.stopPropagation()
})

/**
 * GET_INNER_HEIGHT
 */

n(function(a){
  return a.innerHeight
})

/**
 * GET_CLIENT_HEIGHT
 */

n(function(a){
  return a.clientHeight
})

/**
 * GET_INNER_WIDTH
 */

n(function(a){
  return a.innerWidth
})

/**
 * GET_CLIENT_WIDTH
 */

n(function(a){
  return a.clientWidth
})

/**
 * GET_SCROLL_TOP
 */

n(function(a){
  return a.scrollTop
})

/**
 * GET_HIDDEN
 */

n(function(a){
  return a.hidden
})

/**
 * GET_READY_STATE
 */

n(function(a){
  return a.readyState
})

/**
 * GET_RESPONSE_TEXT
 */

n(function(a){
  return a.responseText
})

/**
 * GET_LENGTH_COMPUTABLE
 */

n(function(a){
  return a.lengthComputable
})

/**
 * GET_TOTAL
 */

n(function(a){
  return a.total
})

/**
 * GET_FULLSCREEN_ELEMENT
 */

n(function(a){
  return a.fullscreenElement
})

/**
 * GET_CANCEL_FULL_SCREEN
 */

n(function(a){
  return a.cancelFullScreen()
})

/**
 * GET_REQUEST_FULLSCREEN
 */

n(function(a){
  return a.requestFullscreen()
})

/**
 * GET_HISTORY
 */

n(function(a){
  return a.history
})

/**
 * GET_NAVIGATOR
 */

n(function(a){
  return a.navigator
})

/**
 * GET_USER_AGENT
 */

n(function(a){
  return a.userAgent
})

/**
 * GET_FULL_SCREEN
 */

n(function(a){
  return a.fullScreen
})

/**
 * GET_LOCAL_STORAGE
 */

n(function(a){
  return a.localStorage
})

/**
 * GET_SESSION_STORAGE
 */

n(function(a){
  return a.localStorage
})

/**
 * GET_SCROLL_X
 */

n(function(a){
  return a.scrollX
})

/**
 * GET_SCROLL_Y
 */

n(function(a){
  return a.scrollY
})

/**
 * GET_VALUE
 */

n(function(a){
  return a.value
})

/**
 * GET_MATCHES
 */

n(function(a){
  return a.matches
})

/**
 * GET_PERFORMANCE
 */

n(function(a){
  return a.performance
})

/**
 * GET_MEMORY
 */

n(function(a){
  return a.memory
})

/**
 * GET_USED_JS_HEAP_SIZE
 */

n(function(a){
  return a.usedJSHeapSize
})

/**
 * GET_SHEET
 */

n(function(a){
  return a.sheet
})

/**
 * GET_TARGET
 */

n(function(a){
  return a.target
})

/**
 * GET_WHEEL_DELTA
 */

n(function(a){
  return a.wheelDelta
})

/**
 * GET_DETAIL
 */

n(function(a){
  return a.detail
})

/**
 * GET_TEXT
 */

n(function(a){
  return a.text
})

/**
 * STYLE
 */

n(function(a){
  return a.style
})

/**
 * CREATE_URL_FROM_BLOB
 */

n(function(a){
  return URL.createObjectURL(o)
})

/**
 * CREATE_NEW_BLOB_FROM_CHUNKS
 */

n(function(x, o){
  return new Blob(x, { type: o })
})

/**
 * GET_AUDIO_CONTEXT
 */

n(function(){
  return window.AudioContext || window.webkitAudioContext
})

/**
 * GET_WINDOW
 */

n(function(){
  return window
})

/**
 * GET_DOCUMENT
 */

n(function(){
  return document
})

/**
 * LISTEN
 */

n(function(a, e, f){
  a.addEventListener(e, i)
})

/**
 * CHECK_IF_VIDEO_CAN_PLAY_TYPE
 */

n(function(){
  return a.canPlayType(x)
})

/**
 * DRAW_CANVAS_IMAGE
 */

n(function(a, e, f, r){
  return undefined
})

/**
 * BEGIN_CANVAS_PATH
 */

n(function(a){
  return undefined
})

/**
 * MOVE_CANVAS_POINTER_TO
 */

n(function(a, e, f){
  return undefined
})

/**
 * DRAW_CANVAS_LINE_TO
 */

n(function(a, e, f){
  return undefined
})

/**
 * DRAW_CANVAS_STROKE
 */

n(function(a){
  return undefined
})

/**
 * SET_CANVAS_SMOOTHING
 */

n(function(a, e){
  o.mozImageSmoothingEnabled = a
  o.webkitImageSmoothingEnabled = a
  o.msImageSmoothingEnabled = a
  o.imageSmoothingEnabled = a
})

/**
 * GET_COOKIE_LIST
 */

n(function(){
  return document.cookie
})

/**
 * SET_RESPONSE_TYPE
 */

n(function(a, e){
  a.responseType = a
})

/**
 * SET_WITH_CREDENTIALS
 */

n(function(a, e){
  a.withCredentials = a
})

/**
 * SET_AUTOPLAY
 */

n(function(a, e){
  a.autoplay = true
})

/**
 * SET_MULTIPLE
 */

n(function(a, e){
  a.multiple = a
})

/**
 * SET_ACCEPT
 */

n(function(a, e){
  a.accept = a
})

/**
 * SET_DIRECTORY
 */

n(function(a, e){
  a.directory = a
})

/**
 * SET_TEXT_CONTENT
 */

n(function(a, e){
  a.textContent = a
})

/**
 * SET_INNER_HTML
 */

n(function(a, e){
  a.innerHTML = a
})

/**
 * SET_ID
 */

n(function(a, e){
  a.id = a
})

/**
 * SET_REL
 */

n(function(a, e){
  a.rel = a
})

/**
 * SET_HREF
 */

n(function(a, e){
  a.href = a
})

/**
 * SET_TYPE
 */

n(function(a, e){
  a.type = a
})

/**
 * SET_ASYNC
 */

n(function(a, e){
  a.async = a
})

/**
 * CREATE_DOM_ELEMENT
 */

n(function(a){
  return document.createElement(type)
})

/**
 * GET_DOM_ELEMENT
 */

n(function(a){
  return document.getElementById(x)
})

/**
 * REPLACE_DOM_ELEMENT
 */

n(function(a, e, f){
  a.replaceChild(x, i)
})

/**
 * FOCUS_DOM_ELEMENT
 */

n(function(a){
  n.focus()
})

/**
 * U_CREATE_DOM_ELEMENT_NS
 */

n(function(a, e, f){
  return a.createElementNS(x, i)
})

/**
 * U_SET_DOM_ELEMENT_ATTR_NS
 */

n(function(a, e, f, r){
  a.setAttributeNS(x, i, w)
})

/**
 * PREVENT_DEFAULT_EVENT_BEHAVIOR
 */

n(function(e){
  e.preventDefault()
})

/**
 * SET_DOM_ELEMENT_ATTR
 */

n(function(a, e, f){
  a.setAttribute(x, i)
})

/**
 * REMOVE_DOM_ELEMENT_ATTR
 */

n(function(a, e){
  a.removeAttribute(x)
})

/**
 * CREATE_UINT8ARRAY
 */

n(function(a){
  return new Uint8Array(x)
})

/**
 * CREATE_UINT16ARRAY
 */

n(function(a){
  return new Uint16Array(x)
})

/**
 * CREATE_UINT32ARRAY
 */

n(function(a){
  return new Uint32Array(x)
})

/**
 * CREATE_AUDIO
 */

n(function(){
  return new Audio
})

/**
 * CREATE_AUDIO_CONTEXT
 */

n(function(){
  return new AudioContext
})

/**
 * CREATE_WEB_SOCKET
 */

n(function(a){
  return new WebSocket(x)
})

/**
 * GET_CANVAS_CONTEXT
 */

n(function(a, e){
  return a.getContext(x)
})

/**
 * APPEND_DOM_ELEMENT
 */

n(function(a, e){
  a.appendChild(x)
})

/**
 * REMOVE_DOM_ELEMENT
 */

n(function(a, e){
  a.removeChild(x)
})

/**
 * GET_WORKER_GLOBAL_SCOPE_CONSTRUCTOR
 */

n(function(){
  return WorkerGlobalScope
})

/**
 * SET_ALIGN_CONTENT_STYLE
 */

n(function(a){
  style.alignContent = a
})

/**
 * SET_ALIGN_ITEMS_STYLE
 */

n(function(a){
  style.alignItems = a
})

/**
 * SET_ALIGN_SELF_STYLE
 */

n(function(a){
  style.alignSelf = a
})

/**
 * SET_ALIGNMENT_ADJUST_STYLE
 */

n(function(a){
  style.alignmentAdjust = a
})

/**
 * SET_ALIGNMENT_BASELINE_STYLE
 */

n(function(a){
  style.alignmentBaseline = a
})

/**
 * SET_ALL_STYLE
 */

n(function(a){
  style.all = a
})

/**
 * SET_ANIMATION_STYLE
 */

n(function(a){
  style.animation = a
})

/**
 * SET_ANIMATION_DELAY_STYLE
 */

n(function(a){
  style.animationDelay = a
})

/**
 * SET_ANIMATION_DIRECTION_STYLE
 */

n(function(a){
  style.animationDirection = a
})

/**
 * SET_ANIMATION_DURATION_STYLE
 */

n(function(a){
  style.animationDuration = a
})

/**
 * SET_ANIMATION_FILL_MODE_STYLE
 */

n(function(a){
  style.animationFillMode = a
})

/**
 * SET_ANIMATION_ITERATION_COUNT_STYLE
 */

n(function(a){
  style.animationIterationCount = a
})

/**
 * SET_ANIMATION_NAME_STYLE
 */

n(function(a){
  style.animationName = a
})

/**
 * SET_ANIMATION_PLAY_STATE_STYLE
 */

n(function(a){
  style.animationPlayState = a
})

/**
 * SET_ANIMATION_TIMING_FUNCTION_STYLE
 */

n(function(a){
  style.animationTimingFunction = a
})

/**
 * SET_APPEARANCE_STYLE
 */

n(function(a){
  style.appearance = a
})

/**
 * SET_AZIMUTH_STYLE
 */

n(function(a){
  style.azimuth = a
})

/**
 * SET_BACKFACE_VISIBILITY_STYLE
 */

n(function(a){
  style.backfaceVisibility = a
})

/**
 * SET_BACKGROUND_STYLE
 */

n(function(a){
  style.background = a
})

/**
 * SET_BACKGROUND_ATTACHMENT_STYLE
 */

n(function(a){
  style.backgroundAttachment = a
})

/**
 * SET_BACKGROUND_BLEND_MODE_STYLE
 */

n(function(a){
  style.backgroundBlendMode = a
})

/**
 * SET_BACKGROUND_CLIP_STYLE
 */

n(function(a){
  style.backgroundClip = a
})

/**
 * SET_BACKGROUND_COLOR_STYLE
 */

n(function(a){
  style.backgroundColor = a
})

/**
 * SET_BACKGROUND_IMAGE_STYLE
 */

n(function(a){
  style.backgroundImage = a
})

/**
 * SET_BACKGROUND_ORIGIN_STYLE
 */

n(function(a){
  style.backgroundOrigin = a
})

/**
 * SET_BACKGROUND_POSITION_STYLE
 */

n(function(a){
  style.backgroundPosition = a
})

/**
 * SET_BACKGROUND_REPEAT_STYLE
 */

n(function(a){
  style.backgroundRepeat = a
})

/**
 * SET_BACKGROUND_SIZE_STYLE
 */

n(function(a){
  style.backgroundSize = a
})

/**
 * SET_BASELINE_SHIFT_STYLE
 */

n(function(a){
  style.baselineShift = a
})

/**
 * SET_BASELINE_SOURCE_STYLE
 */

n(function(a){
  style.baselineSource = a
})

/**
 * SET_BLOCK_ELLIPSIS_STYLE
 */

n(function(a){
  style.blockEllipsis = a
})

/**
 * SET_BLOCK_OVERFLOW_STYLE
 */

n(function(a){
  style.blockOverflow = a
})

/**
 * SET_BLOCK_SIZE_STYLE
 */

n(function(a){
  style.blockSize = a
})

/**
 * SET_BLOCK_STEP_STYLE
 */

n(function(a){
  style.blockStep = a
})

/**
 * SET_BLOCK_STEP_ALIGN_STYLE
 */

n(function(a){
  style.blockStepAlign = a
})

/**
 * SET_BLOCK_STEP_INSERT_STYLE
 */

n(function(a){
  style.blockStepInsert = a
})

/**
 * SET_BLOCK_STEP_ROUND_STYLE
 */

n(function(a){
  style.blockStepRound = a
})

/**
 * SET_BLOCK_STEP_SIZE_STYLE
 */

n(function(a){
  style.blockStepSize = a
})

/**
 * SET_BOOKMARK_LABEL_STYLE
 */

n(function(a){
  style.bookmarkLabel = a
})

/**
 * SET_BOOKMARK_LEVEL_STYLE
 */

n(function(a){
  style.bookmarkLevel = a
})

/**
 * SET_BOOKMARK_STATE_STYLE
 */

n(function(a){
  style.bookmarkState = a
})

/**
 * SET_BORDER_STYLE
 */

n(function(a){
  style.border = a
})

/**
 * SET_BORDER_BLOCK_STYLE
 */

n(function(a){
  style.borderBlock = a
})

/**
 * SET_BORDER_BLOCK_COLOR_STYLE
 */

n(function(a){
  style.borderBlockColor = a
})

/**
 * SET_BORDER_BLOCK_END_STYLE
 */

n(function(a){
  style.borderBlockEnd = a
})

/**
 * SET_BORDER_BLOCK_END_COLOR_STYLE
 */

n(function(a){
  style.borderBlockEndColor = a
})

/**
 * SET_BORDER_BLOCK_END_STYLE_STYLE
 */

n(function(a){
  style.borderBlockEndStyle = a
})

/**
 * SET_BORDER_BLOCK_END_WIDTH_STYLE
 */

n(function(a){
  style.borderBlockEndWidth = a
})

/**
 * SET_BORDER_BLOCK_START_STYLE
 */

n(function(a){
  style.borderBlockStart = a
})

/**
 * SET_BORDER_BLOCK_START_COLOR_STYLE
 */

n(function(a){
  style.borderBlockStartColor = a
})

/**
 * SET_BORDER_BLOCK_START_STYLE_STYLE
 */

n(function(a){
  style.borderBlockStartStyle = a
})

/**
 * SET_BORDER_BLOCK_START_WIDTH_STYLE
 */

n(function(a){
  style.borderBlockStartWidth = a
})

/**
 * SET_BORDER_BLOCK_STYLE_STYLE
 */

n(function(a){
  style.borderBlockStyle = a
})

/**
 * SET_BORDER_BLOCK_WIDTH_STYLE
 */

n(function(a){
  style.borderBlockWidth = a
})

/**
 * SET_BORDER_BOTTOM_STYLE
 */

n(function(a){
  style.borderBottom = a
})

/**
 * SET_BORDER_BOTTOM_COLOR_STYLE
 */

n(function(a){
  style.borderBottomColor = a
})

/**
 * SET_BORDER_BOTTOM_FIT_LENGTH_STYLE
 */

n(function(a){
  style.borderBottomFitLength = a
})

/**
 * SET_BORDER_BOTTOM_FIT_WIDTH_STYLE
 */

n(function(a){
  style.borderBottomFitWidth = a
})

/**
 * SET_BORDER_BOTTOM_IMAGE_STYLE
 */

n(function(a){
  style.borderBottomImage = a
})

/**
 * SET_BORDER_BOTTOM_LEFT_FIT_WIDTH_STYLE
 */

n(function(a){
  style.borderBottomLeftFitWidth = a
})

/**
 * SET_BORDER_BOTTOM_LEFT_IMAGE_STYLE
 */

n(function(a){
  style.borderBottomLeftImage = a
})

/**
 * SET_BORDER_BOTTOM_LEFT_RADIUS_STYLE
 */

n(function(a){
  style.borderBottomLeftRadius = a
})

/**
 * SET_BORDER_BOTTOM_RIGHT_FIT_LENGTH_STYLE
 */

n(function(a){
  style.borderBottomRightFitLength = a
})

/**
 * SET_BORDER_BOTTOM_RIGHT_FIT_WIDTH_STYLE
 */

n(function(a){
  style.borderBottomRightFitWidth = a
})

/**
 * SET_BORDER_BOTTOM_RIGHT_IMAGE_STYLE
 */

n(function(a){
  style.borderBottomRightImage = a
})

/**
 * SET_BORDER_BOTTOM_RIGHT_RADIUS_STYLE
 */

n(function(a){
  style.borderBottomRightRadius = a
})

/**
 * SET_BORDER_BOTTOM_STYLE_STYLE
 */

n(function(a){
  style.borderBottomStyle = a
})

/**
 * SET_BORDER_BOTTOM_WIDTH_STYLE
 */

n(function(a){
  style.borderBottomWidth = a
})

/**
 * SET_BORDER_BOTTOML_EFT_FIT_LENGTH_STYLE
 */

n(function(a){
  style.borderBottomlEftFitLength = a
})

/**
 * SET_BORDER_BOUNDARY_STYLE
 */

n(function(a){
  style.borderBoundary = a
})

/**
 * SET_BORDER_BREAK_STYLE
 */

n(function(a){
  style.borderBreak = a
})

/**
 * SET_BORDER_COLLAPSE_STYLE
 */

n(function(a){
  style.borderCollapse = a
})

/**
 * SET_BORDER_COLOR_STYLE
 */

n(function(a){
  style.borderColor = a
})

/**
 * SET_BORDER_CORNER_FIT_STYLE
 */

n(function(a){
  style.borderCornerFit = a
})

/**
 * SET_BORDER_CORNER_IMAGE_STYLE
 */

n(function(a){
  style.borderCornerImage = a
})

/**
 * SET_BORDER_CORNER_IMAGE_TRANSFORM_STYLE
 */

n(function(a){
  style.borderCornerImageTransform = a
})

/**
 * SET_BORDER_END_END_RADIUS_STYLE
 */

n(function(a){
  style.borderEndEndRadius = a
})

/**
 * SET_BORDER_END_START_RADIUS_STYLE
 */

n(function(a){
  style.borderEndStartRadius = a
})

/**
 * SET_BORDER_FIT_STYLE
 */

n(function(a){
  style.borderFit = a
})

/**
 * SET_BORDER_FIT_LENGTH_STYLE
 */

n(function(a){
  style.borderFitLength = a
})

/**
 * SET_BORDER_FIT_WIDTH_STYLE
 */

n(function(a){
  style.borderFitWidth = a
})

/**
 * SET_BORDER_IMAGE_STYLE
 */

n(function(a){
  style.borderImage = a
})

/**
 * SET_BORDER_IMAGE_OUTSET_STYLE
 */

n(function(a){
  style.borderImageOutset = a
})

/**
 * SET_BORDER_IMAGE_REPEAT_STYLE
 */

n(function(a){
  style.borderImageRepeat = a
})

/**
 * SET_BORDER_IMAGE_SLICE_STYLE
 */

n(function(a){
  style.borderImageSlice = a
})

/**
 * SET_BORDER_IMAGE_SOURCE_STYLE
 */

n(function(a){
  style.borderImageSource = a
})

/**
 * SET_BORDER_IMAGE_TRANSFORM_STYLE
 */

n(function(a){
  style.borderImageTransform = a
})

/**
 * SET_BORDER_IMAGE_WIDTH_STYLE
 */

n(function(a){
  style.borderImageWidth = a
})

/**
 * SET_BORDER_INLINE_STYLE
 */

n(function(a){
  style.borderInline = a
})

/**
 * SET_BORDER_INLINE_COLOR_STYLE
 */

n(function(a){
  style.borderInlineColor = a
})

/**
 * SET_BORDER_INLINE_END_STYLE
 */

n(function(a){
  style.borderInlineEnd = a
})

/**
 * SET_BORDER_INLINE_END_COLOR_STYLE
 */

n(function(a){
  style.borderInlineEndColor = a
})

/**
 * SET_BORDER_INLINE_END_STYLE_STYLE
 */

n(function(a){
  style.borderInlineEndStyle = a
})

/**
 * SET_BORDER_INLINE_END_WIDTH_STYLE
 */

n(function(a){
  style.borderInlineEndWidth = a
})

/**
 * SET_BORDER_INLINE_START_STYLE
 */

n(function(a){
  style.borderInlineStart = a
})

/**
 * SET_BORDER_INLINE_START_COLOR_STYLE
 */

n(function(a){
  style.borderInlineStartColor = a
})

/**
 * SET_BORDER_INLINE_START_STYLE_STYLE
 */

n(function(a){
  style.borderInlineStartStyle = a
})

/**
 * SET_BORDER_INLINE_START_WIDTH_STYLE
 */

n(function(a){
  style.borderInlineStartWidth = a
})

/**
 * SET_BORDER_INLINE_STYLE_STYLE
 */

n(function(a){
  style.borderInlineStyle = a
})

/**
 * SET_BORDER_INLINE_WIDTH_STYLE
 */

n(function(a){
  style.borderInlineWidth = a
})

/**
 * SET_BORDER_LEFT_STYLE
 */

n(function(a){
  style.borderLeft = a
})

/**
 * SET_BORDER_LEFT_COLOR_STYLE
 */

n(function(a){
  style.borderLeftColor = a
})

/**
 * SET_BORDER_LEFT_FIT_LENGTH_STYLE
 */

n(function(a){
  style.borderLeftFitLength = a
})

/**
 * SET_BORDER_LEFT_FIT_WIDTH_STYLE
 */

n(function(a){
  style.borderLeftFitWidth = a
})

/**
 * SET_BORDER_LEFT_IMAGE_STYLE
 */

n(function(a){
  style.borderLeftImage = a
})

/**
 * SET_BORDER_LEFT_STYLE_STYLE
 */

n(function(a){
  style.borderLeftStyle = a
})

/**
 * SET_BORDER_LEFT_WIDTH_STYLE
 */

n(function(a){
  style.borderLeftWidth = a
})

/**
 * SET_BORDER_RADIUS_STYLE
 */

n(function(a){
  style.borderRadius = a
})

/**
 * SET_BORDER_RIGHT_STYLE
 */

n(function(a){
  style.borderRight = a
})

/**
 * SET_BORDER_RIGHT_COLOR_STYLE
 */

n(function(a){
  style.borderRightColor = a
})

/**
 * SET_BORDER_RIGHT_FIT_LENGTH_STYLE
 */

n(function(a){
  style.borderRightFitLength = a
})

/**
 * SET_BORDER_RIGHT_FIT_WIDTH_STYLE
 */

n(function(a){
  style.borderRightFitWidth = a
})

/**
 * SET_BORDER_RIGHT_IMAGE_STYLE
 */

n(function(a){
  style.borderRightImage = a
})

/**
 * SET_BORDER_RIGHT_STYLE_STYLE
 */

n(function(a){
  style.borderRightStyle = a
})

/**
 * SET_BORDER_RIGHT_WIDTH_STYLE
 */

n(function(a){
  style.borderRightWidth = a
})

/**
 * SET_BORDER_SPACING_STYLE
 */

n(function(a){
  style.borderSpacing = a
})

/**
 * SET_BORDER_START_END_RADIUS_STYLE
 */

n(function(a){
  style.borderStartEndRadius = a
})

/**
 * SET_BORDER_START_START_RADIUS_STYLE
 */

n(function(a){
  style.borderStartStartRadius = a
})

/**
 * SET_BORDER_STYLE_STYLE
 */

n(function(a){
  style.borderStyle = a
})

/**
 * SET_BORDER_TOP_STYLE
 */

n(function(a){
  style.borderTop = a
})

/**
 * SET_BORDER_TOP_COLOR_STYLE
 */

n(function(a){
  style.borderTopColor = a
})

/**
 * SET_BORDER_TOP_FIT_LENGTH_STYLE
 */

n(function(a){
  style.borderTopFitLength = a
})

/**
 * SET_BORDER_TOP_FIT_WIDTH_STYLE
 */

n(function(a){
  style.borderTopFitWidth = a
})

/**
 * SET_BORDER_TOP_IMAGE_STYLE
 */

n(function(a){
  style.borderTopImage = a
})

/**
 * SET_BORDER_TOP_LEFT_FIT_LENGTH_STYLE
 */

n(function(a){
  style.borderTopLeftFitLength = a
})

/**
 * SET_BORDER_TOP_LEFT_FIT_WIDTH_STYLE
 */

n(function(a){
  style.borderTopLeftFitWidth = a
})

/**
 * SET_BORDER_TOP_LEFT_IMAGE_STYLE
 */

n(function(a){
  style.borderTopLeftImage = a
})

/**
 * SET_BORDER_TOP_LEFT_RADIUS_STYLE
 */

n(function(a){
  style.borderTopLeftRadius = a
})

/**
 * SET_BORDER_TOP_RIGHT_FIT_LENGTH_STYLE
 */

n(function(a){
  style.borderTopRightFitLength = a
})

/**
 * SET_BORDER_TOP_RIGHT_FIT_WIDTH_STYLE
 */

n(function(a){
  style.borderTopRightFitWidth = a
})

/**
 * SET_BORDER_TOP_RIGHT_IMAGE_STYLE
 */

n(function(a){
  style.borderTopRightImage = a
})

/**
 * SET_BORDER_TOP_RIGHT_RADIUS_STYLE
 */

n(function(a){
  style.borderTopRightRadius = a
})

/**
 * SET_BORDER_TOP_STYLE_STYLE
 */

n(function(a){
  style.borderTopStyle = a
})

/**
 * SET_BORDER_TOP_WIDTH_STYLE
 */

n(function(a){
  style.borderTopWidth = a
})

/**
 * SET_BORDER_WIDTH_STYLE
 */

n(function(a){
  style.borderWidth = a
})

/**
 * SET_BOTTOM_STYLE
 */

n(function(a){
  style.bottom = a
})

/**
 * SET_BOX_DECORATION_BREAK_STYLE
 */

n(function(a){
  style.boxDecorationBreak = a
})

/**
 * SET_BOX_SHADOW_STYLE
 */

n(function(a){
  style.boxShadow = a
})

/**
 * SET_BOX_SIZING_STYLE
 */

n(function(a){
  style.boxSizing = a
})

/**
 * SET_BOX_SNAP_STYLE
 */

n(function(a){
  style.boxSnap = a
})

/**
 * SET_BREAK_AFTER_STYLE
 */

n(function(a){
  style.breakAfter = a
})

/**
 * SET_BREAK_BEFORE_STYLE
 */

n(function(a){
  style.breakBefore = a
})

/**
 * SET_BREAK_INSIDE_STYLE
 */

n(function(a){
  style.breakInside = a
})

/**
 * SET_CAPTION_SIDE_STYLE
 */

n(function(a){
  style.captionSide = a
})

/**
 * SET_CARET_STYLE
 */

n(function(a){
  style.caret = a
})

/**
 * SET_CARET_COLOR_STYLE
 */

n(function(a){
  style.caretColor = a
})

/**
 * SET_CARET_SHAPE_STYLE
 */

n(function(a){
  style.caretShape = a
})

/**
 * SET_CHAINS_STYLE
 */

n(function(a){
  style.chains = a
})

/**
 * SET_CLEAR_STYLE
 */

n(function(a){
  style.clear = a
})

/**
 * SET_CLIP_STYLE
 */

n(function(a){
  style.clip = a
})

/**
 * SET_CLIP_PATH_STYLE
 */

n(function(a){
  style.clipPath = a
})

/**
 * SET_CLIP_RULE_STYLE
 */

n(function(a){
  style.clipRule = a
})

/**
 * SET_COLOR_STYLE
 */

n(function(a){
  style.color = a
})

/**
 * SET_COLOR_ADJUST_STYLE
 */

n(function(a){
  style.colorAdjust = a
})

/**
 * SET_COLOR_INTERPOLATION_FILTERS_STYLE
 */

n(function(a){
  style.colorInterpolationFilters = a
})

/**
 * SET_COLOR_SCHEME_STYLE
 */

n(function(a){
  style.colorScheme = a
})

/**
 * SET_COLUMN_COUNT_STYLE
 */

n(function(a){
  style.columnCount = a
})

/**
 * SET_COLUMN_FILL_STYLE
 */

n(function(a){
  style.columnFill = a
})

/**
 * SET_COLUMN_GAP_STYLE
 */

n(function(a){
  style.columnGap = a
})

/**
 * SET_COLUMN_RULE_STYLE
 */

n(function(a){
  style.columnRule = a
})

/**
 * SET_COLUMN_RULE_COLOR_STYLE
 */

n(function(a){
  style.columnRuleColor = a
})

/**
 * SET_COLUMN_RULE_STYLE_STYLE
 */

n(function(a){
  style.columnRuleStyle = a
})

/**
 * SET_COLUMN_RULE_WIDTH_STYLE
 */

n(function(a){
  style.columnRuleWidth = a
})

/**
 * SET_COLUMN_SPAN_STYLE
 */

n(function(a){
  style.columnSpan = a
})

/**
 * SET_COLUMN_WIDTH_STYLE
 */

n(function(a){
  style.columnWidth = a
})

/**
 * SET_COLUMNS_STYLE
 */

n(function(a){
  style.columns = a
})

/**
 * SET_CONTAIN_STYLE
 */

n(function(a){
  style.contain = a
})

/**
 * SET_CONTENT_STYLE
 */

n(function(a){
  style.content = a
})

/**
 * SET_CONTINUE_STYLE
 */

n(function(a){
  style.continue = a
})

/**
 * SET_COUNTER_INCREMENT_STYLE
 */

n(function(a){
  style.counterIncrement = a
})

/**
 * SET_COUNTER_RESET_STYLE
 */

n(function(a){
  style.counterReset = a
})

/**
 * SET_COUNTER_SET_STYLE
 */

n(function(a){
  style.counterSet = a
})

/**
 * SET_CUE_STYLE
 */

n(function(a){
  style.cue = a
})

/**
 * SET_CUE_AFTER_STYLE
 */

n(function(a){
  style.cueAfter = a
})

/**
 * SET_CUE_BEFORE_STYLE
 */

n(function(a){
  style.cueBefore = a
})

/**
 * SET_CURSOR_STYLE
 */

n(function(a){
  style.cursor = a
})

/**
 * SET_DIRECTION_STYLE
 */

n(function(a){
  style.direction = a
})

/**
 * SET_DISPLAY_STYLE
 */

n(function(a){
  style.display = a
})

/**
 * SET_DOMINANT_BASELINE_STYLE
 */

n(function(a){
  style.dominantBaseline = a
})

/**
 * SET_DROP_INITIAL_AFTER_ADJUST_STYLE
 */

n(function(a){
  style.dropInitialAfterAdjust = a
})

/**
 * SET_DROP_INITIAL_AFTER_ALIGN_STYLE
 */

n(function(a){
  style.dropInitialAfterAlign = a
})

/**
 * SET_DROP_INITIAL_BEFORE_ADJUST_STYLE
 */

n(function(a){
  style.dropInitialBeforeAdjust = a
})

/**
 * SET_DROP_INITIAL_BEFORE_ALIGN_STYLE
 */

n(function(a){
  style.dropInitialBeforeAlign = a
})

/**
 * SET_DROP_INITIAL_SIZE_STYLE
 */

n(function(a){
  style.dropInitialSize = a
})

/**
 * SET_DROP_INITIAL_VALUE_STYLE
 */

n(function(a){
  style.dropInitialValue = a
})

/**
 * SET_ELEVATION_STYLE
 */

n(function(a){
  style.elevation = a
})

/**
 * SET_EMPTY_CELLS_STYLE
 */

n(function(a){
  style.emptyCells = a
})

/**
 * SET_FILL_STYLE
 */

n(function(a){
  style.fill = a
})

/**
 * SET_FILL_BREAK_STYLE
 */

n(function(a){
  style.fillBreak = a
})

/**
 * SET_FILL_COLOR_STYLE
 */

n(function(a){
  style.fillColor = a
})

/**
 * SET_FILL_IMAGE_STYLE
 */

n(function(a){
  style.fillImage = a
})

/**
 * SET_FILL_OPACITY_STYLE
 */

n(function(a){
  style.fillOpacity = a
})

/**
 * SET_FILL_ORIGIN_STYLE
 */

n(function(a){
  style.fillOrigin = a
})

/**
 * SET_FILL_POSITION_STYLE
 */

n(function(a){
  style.fillPosition = a
})

/**
 * SET_FILL_REPEAT_STYLE
 */

n(function(a){
  style.fillRepeat = a
})

/**
 * SET_FILL_RULE_STYLE
 */

n(function(a){
  style.fillRule = a
})

/**
 * SET_FILL_SIZE_STYLE
 */

n(function(a){
  style.fillSize = a
})

/**
 * SET_FILTER_STYLE
 */

n(function(a){
  style.filter = a
})

/**
 * SET_FLEX_STYLE
 */

n(function(a){
  style.flex = a
})

/**
 * SET_FLEX_BASIS_STYLE
 */

n(function(a){
  style.flexBasis = a
})

/**
 * SET_FLEX_DIRECTION_STYLE
 */

n(function(a){
  style.flexDirection = a
})

/**
 * SET_FLEX_FLOW_STYLE
 */

n(function(a){
  style.flexFlow = a
})

/**
 * SET_FLEX_GROW_STYLE
 */

n(function(a){
  style.flexGrow = a
})

/**
 * SET_FLEX_SHRINK_STYLE
 */

n(function(a){
  style.flexShrink = a
})

/**
 * SET_FLEX_WRAP_STYLE
 */

n(function(a){
  style.flexWrap = a
})

/**
 * SET_FLOAT_STYLE
 */

n(function(a){
  style.float = a
})

/**
 * SET_FLOAT_DEFER_STYLE
 */

n(function(a){
  style.floatDefer = a
})

/**
 * SET_FLOAT_OFFSET_STYLE
 */

n(function(a){
  style.floatOffset = a
})

/**
 * SET_FLOAT_REFERENCE_STYLE
 */

n(function(a){
  style.floatReference = a
})

/**
 * SET_FLOOD_COLOR_STYLE
 */

n(function(a){
  style.floodColor = a
})

/**
 * SET_FLOOD_OPACITY_STYLE
 */

n(function(a){
  style.floodOpacity = a
})

/**
 * SET_FLOW_STYLE
 */

n(function(a){
  style.flow = a
})

/**
 * SET_FLOW_FROM_STYLE
 */

n(function(a){
  style.flowFrom = a
})

/**
 * SET_FLOW_INTO_STYLE
 */

n(function(a){
  style.flowInto = a
})

/**
 * SET_FONT_STYLE
 */

n(function(a){
  style.font = a
})

/**
 * SET_FONT_FAMILY_STYLE
 */

n(function(a){
  style.fontFamily = a
})

/**
 * SET_FONT_FEATURE_SETTINGS_STYLE
 */

n(function(a){
  style.fontFeatureSettings = a
})

/**
 * SET_FONT_KERNING_STYLE
 */

n(function(a){
  style.fontKerning = a
})

/**
 * SET_FONT_LANGUAGE_OVERRIDE_STYLE
 */

n(function(a){
  style.fontLanguageOverride = a
})

/**
 * SET_FONT_MAX_SIZE_STYLE
 */

n(function(a){
  style.fontMaxSize = a
})

/**
 * SET_FONT_MIN_SIZE_STYLE
 */

n(function(a){
  style.fontMinSize = a
})

/**
 * SET_FONT_OPTICAL_SIZING_STYLE
 */

n(function(a){
  style.fontOpticalSizing = a
})

/**
 * SET_FONT_PALETTE_STYLE
 */

n(function(a){
  style.fontPalette = a
})

/**
 * SET_FONT_SIZE_STYLE
 */

n(function(a){
  style.fontSize = a
})

/**
 * SET_FONT_SIZE_ADJUST_STYLE
 */

n(function(a){
  style.fontSizeAdjust = a
})

/**
 * SET_FONT_STRETCH_STYLE
 */

n(function(a){
  style.fontStretch = a
})

/**
 * SET_FONT_STYLE_STYLE
 */

n(function(a){
  style.fontStyle = a
})

/**
 * SET_FONT_SYNTHESIS_STYLE
 */

n(function(a){
  style.fontSynthesis = a
})

/**
 * SET_FONT_SYNTHESIS_SMALL_CAPS_STYLE
 */

n(function(a){
  style.fontSynthesisSmallCaps = a
})

/**
 * SET_FONT_SYNTHESIS_STYLE_STYLE
 */

n(function(a){
  style.fontSynthesisStyle = a
})

/**
 * SET_FONT_SYNTHESIS_WEIGHT_STYLE
 */

n(function(a){
  style.fontSynthesisWeight = a
})

/**
 * SET_FONT_VARIANT_STYLE
 */

n(function(a){
  style.fontVariant = a
})

/**
 * SET_FONT_VARIANT_ALTERNATES_STYLE
 */

n(function(a){
  style.fontVariantAlternates = a
})

/**
 * SET_FONT_VARIANT_CAPS_STYLE
 */

n(function(a){
  style.fontVariantCaps = a
})

/**
 * SET_FONT_VARIANT_EAST_ASIAN_STYLE
 */

n(function(a){
  style.fontVariantEastAsian = a
})

/**
 * SET_FONT_VARIANT_EMOJI_STYLE
 */

n(function(a){
  style.fontVariantEmoji = a
})

/**
 * SET_FONT_VARIANT_LIGATURES_STYLE
 */

n(function(a){
  style.fontVariantLigatures = a
})

/**
 * SET_FONT_VARIANT_NUMERIC_STYLE
 */

n(function(a){
  style.fontVariantNumeric = a
})

/**
 * SET_FONT_VARIANT_POSITION_STYLE
 */

n(function(a){
  style.fontVariantPosition = a
})

/**
 * SET_FONT_VARIATION_SETTINGS_STYLE
 */

n(function(a){
  style.fontVariationSettings = a
})

/**
 * SET_FONT_WEIGHT_STYLE
 */

n(function(a){
  style.fontWeight = a
})

/**
 * SET_FOOTNOTE_DISPLAY_STYLE
 */

n(function(a){
  style.footnoteDisplay = a
})

/**
 * SET_FOOTNOTE_POLICY_STYLE
 */

n(function(a){
  style.footnotePolicy = a
})

/**
 * SET_FORCED_COLOR_ADJUST_STYLE
 */

n(function(a){
  style.forcedColorAdjust = a
})

/**
 * SET_GAP_STYLE
 */

n(function(a){
  style.gap = a
})

/**
 * SET_GLYPH_ORIENTATION_VERTICAL_STYLE
 */

n(function(a){
  style.glyphOrientationVertical = a
})

/**
 * SET_GRID_STYLE
 */

n(function(a){
  style.grid = a
})

/**
 * SET_GRID_AREA_STYLE
 */

n(function(a){
  style.gridArea = a
})

/**
 * SET_GRID_AUTO_COLUMNS_STYLE
 */

n(function(a){
  style.gridAutoColumns = a
})

/**
 * SET_GRID_AUTO_FLOW_STYLE
 */

n(function(a){
  style.gridAutoFlow = a
})

/**
 * SET_GRID_AUTO_ROWS_STYLE
 */

n(function(a){
  style.gridAutoRows = a
})

/**
 * SET_GRID_COLUMN_STYLE
 */

n(function(a){
  style.gridColumn = a
})

/**
 * SET_GRID_COLUMN_END_STYLE
 */

n(function(a){
  style.gridColumnEnd = a
})

/**
 * SET_GRID_COLUMN_START_STYLE
 */

n(function(a){
  style.gridColumnStart = a
})

/**
 * SET_GRID_ROW_STYLE
 */

n(function(a){
  style.gridRow = a
})

/**
 * SET_GRID_ROW_END_STYLE
 */

n(function(a){
  style.gridRowEnd = a
})

/**
 * SET_GRID_ROW_START_STYLE
 */

n(function(a){
  style.gridRowStart = a
})

/**
 * SET_GRID_TEMPLATE_STYLE
 */

n(function(a){
  style.gridTemplate = a
})

/**
 * SET_GRID_TEMPLATE_AREAS_STYLE
 */

n(function(a){
  style.gridTemplateAreas = a
})

/**
 * SET_GRID_TEMPLATE_COLUMNS_STYLE
 */

n(function(a){
  style.gridTemplateColumns = a
})

/**
 * SET_GRID_TEMPLATE_ROWS_STYLE
 */

n(function(a){
  style.gridTemplateRows = a
})

/**
 * SET_HANGING_PUNCTUATION_STYLE
 */

n(function(a){
  style.hangingPunctuation = a
})

/**
 * SET_HEIGHT_STYLE
 */

n(function(a){
  style.height = a
})

/**
 * SET_HYPHENATE_CHARACTER_STYLE
 */

n(function(a){
  style.hyphenateCharacter = a
})

/**
 * SET_HYPHENATE_LIMIT_CHARS_STYLE
 */

n(function(a){
  style.hyphenateLimitChars = a
})

/**
 * SET_HYPHENATE_LIMIT_LAST_STYLE
 */

n(function(a){
  style.hyphenateLimitLast = a
})

/**
 * SET_HYPHENATE_LIMIT_LINES_STYLE
 */

n(function(a){
  style.hyphenateLimitLines = a
})

/**
 * SET_HYPHENATE_LIMIT_ZONE_STYLE
 */

n(function(a){
  style.hyphenateLimitZone = a
})

/**
 * SET_HYPHENS_STYLE
 */

n(function(a){
  style.hyphens = a
})

/**
 * SET_IMAGE_ORIENTATION_STYLE
 */

n(function(a){
  style.imageOrientation = a
})

/**
 * SET_IMAGE_RENDERING_STYLE
 */

n(function(a){
  style.imageRendering = a
})

/**
 * SET_IMAGE_RESOLUTION_STYLE
 */

n(function(a){
  style.imageResolution = a
})

/**
 * SET_INITIAL_LETTERS_STYLE
 */

n(function(a){
  style.initialLetters = a
})

/**
 * SET_INITIAL_LETTERS_ALIGN_STYLE
 */

n(function(a){
  style.initialLettersAlign = a
})

/**
 * SET_INITIAL_LETTERS_WRAP_STYLE
 */

n(function(a){
  style.initialLettersWrap = a
})

/**
 * SET_INLINE_BOX_ALIGN_STYLE
 */

n(function(a){
  style.inlineBoxAlign = a
})

/**
 * SET_INLINE_SIZE_STYLE
 */

n(function(a){
  style.inlineSize = a
})

/**
 * SET_INLINE_SIZING_STYLE
 */

n(function(a){
  style.inlineSizing = a
})

/**
 * SET_INSET_STYLE
 */

n(function(a){
  style.inset = a
})

/**
 * SET_INSET_AFTER_STYLE
 */

n(function(a){
  style.insetAfter = a
})

/**
 * SET_INSET_BEFORE_STYLE
 */

n(function(a){
  style.insetBefore = a
})

/**
 * SET_INSET_BLOCK_STYLE
 */

n(function(a){
  style.insetBlock = a
})

/**
 * SET_INSET_BLOCK_END_STYLE
 */

n(function(a){
  style.insetBlockEnd = a
})

/**
 * SET_INSET_BLOCK_START_STYLE
 */

n(function(a){
  style.insetBlockStart = a
})

/**
 * SET_INSET_END_STYLE
 */

n(function(a){
  style.insetEnd = a
})

/**
 * SET_INSET_INLINE_STYLE
 */

n(function(a){
  style.insetInline = a
})

/**
 * SET_INSET_INLINE_END_STYLE
 */

n(function(a){
  style.insetInlineEnd = a
})

/**
 * SET_INSET_INLINE_START_STYLE
 */

n(function(a){
  style.insetInlineStart = a
})

/**
 * SET_INSET_START_STYLE
 */

n(function(a){
  style.insetStart = a
})

/**
 * SET_ISOLATION_STYLE
 */

n(function(a){
  style.isolation = a
})

/**
 * SET_JUSTIFY_CONTENT_STYLE
 */

n(function(a){
  style.justifyContent = a
})

/**
 * SET_JUSTIFY_ITEMS_STYLE
 */

n(function(a){
  style.justifyItems = a
})

/**
 * SET_JUSTIFY_SELF_STYLE
 */

n(function(a){
  style.justifySelf = a
})

/**
 * SET_LEADING_TRIM_STYLE
 */

n(function(a){
  style.leadingTrim = a
})

/**
 * SET_LEADING_TRIM_OVER_STYLE
 */

n(function(a){
  style.leadingTrimOver = a
})

/**
 * SET_LEADING_TRIM_UNDER_STYLE
 */

n(function(a){
  style.leadingTrimUnder = a
})

/**
 * SET_LEFT_STYLE
 */

n(function(a){
  style.left = a
})

/**
 * SET_LETTER_SPACING_STYLE
 */

n(function(a){
  style.letterSpacing = a
})

/**
 * SET_LIGHTING_COLOR_STYLE
 */

n(function(a){
  style.lightingColor = a
})

/**
 * SET_LINE_BREAK_STYLE
 */

n(function(a){
  style.lineBreak = a
})

/**
 * SET_LINE_CLAMP_STYLE
 */

n(function(a){
  style.lineClamp = a
})

/**
 * SET_LINE_GRID_STYLE
 */

n(function(a){
  style.lineGrid = a
})

/**
 * SET_LINE_HEIGHT_STYLE
 */

n(function(a){
  style.lineHeight = a
})

/**
 * SET_LINE_HEIGHT_STEP_STYLE
 */

n(function(a){
  style.lineHeightStep = a
})

/**
 * SET_LINE_PADDING_STYLE
 */

n(function(a){
  style.linePadding = a
})

/**
 * SET_LINE_SIZING_STYLE
 */

n(function(a){
  style.lineSizing = a
})

/**
 * SET_LINE_SNAP_STYLE
 */

n(function(a){
  style.lineSnap = a
})

/**
 * SET_LINE_STACKING_STYLE
 */

n(function(a){
  style.lineStacking = a
})

/**
 * SET_LINE_STACKING_RUBY_STYLE
 */

n(function(a){
  style.lineStackingRuby = a
})

/**
 * SET_LINE_STACKING_SHIFT_STYLE
 */

n(function(a){
  style.lineStackingShift = a
})

/**
 * SET_LINE_STACKING_STRATEGY_STYLE
 */

n(function(a){
  style.lineStackingStrategy = a
})

/**
 * SET_LIST_STYLE_STYLE
 */

n(function(a){
  style.listStyle = a
})

/**
 * SET_LIST_STYLE_IMAGE_STYLE
 */

n(function(a){
  style.listStyleImage = a
})

/**
 * SET_LIST_STYLE_POSITION_STYLE
 */

n(function(a){
  style.listStylePosition = a
})

/**
 * SET_LIST_STYLE_TYPE_STYLE
 */

n(function(a){
  style.listStyleType = a
})

/**
 * SET_MARGIN_STYLE
 */

n(function(a){
  style.margin = a
})

/**
 * SET_MARGIN_BLOCK_STYLE
 */

n(function(a){
  style.marginBlock = a
})

/**
 * SET_MARGIN_BLOCK_END_STYLE
 */

n(function(a){
  style.marginBlockEnd = a
})

/**
 * SET_MARGIN_BLOCK_START_STYLE
 */

n(function(a){
  style.marginBlockStart = a
})

/**
 * SET_MARGIN_BOTTOM_STYLE
 */

n(function(a){
  style.marginBottom = a
})

/**
 * SET_MARGIN_BREAK_STYLE
 */

n(function(a){
  style.marginBreak = a
})

/**
 * SET_MARGIN_INLINE_STYLE
 */

n(function(a){
  style.marginInline = a
})

/**
 * SET_MARGIN_INLINE_END_STYLE
 */

n(function(a){
  style.marginInlineEnd = a
})

/**
 * SET_MARGIN_INLINE_START_STYLE
 */

n(function(a){
  style.marginInlineStart = a
})

/**
 * SET_MARGIN_LEFT_STYLE
 */

n(function(a){
  style.marginLeft = a
})

/**
 * SET_MARGIN_RIGHT_STYLE
 */

n(function(a){
  style.marginRight = a
})

/**
 * SET_MARGIN_TOP_STYLE
 */

n(function(a){
  style.marginTop = a
})

/**
 * SET_MARGIN_TRIM_STYLE
 */

n(function(a){
  style.marginTrim = a
})

/**
 * SET_MARKER_STYLE
 */

n(function(a){
  style.marker = a
})

/**
 * SET_MARKER_END_STYLE
 */

n(function(a){
  style.markerEnd = a
})

/**
 * SET_MARKER_KNOCKOUT_LEFT_STYLE
 */

n(function(a){
  style.markerKnockoutLeft = a
})

/**
 * SET_MARKER_KNOCKOUT_RIGHT_STYLE
 */

n(function(a){
  style.markerKnockoutRight = a
})

/**
 * SET_MARKER_MID_STYLE
 */

n(function(a){
  style.markerMid = a
})

/**
 * SET_MARKER_PATTERN_STYLE
 */

n(function(a){
  style.markerPattern = a
})

/**
 * SET_MARKER_SEGMENT_STYLE
 */

n(function(a){
  style.markerSegment = a
})

/**
 * SET_MARKER_SIDE_STYLE
 */

n(function(a){
  style.markerSide = a
})

/**
 * SET_MARKER_START_STYLE
 */

n(function(a){
  style.markerStart = a
})

/**
 * SET_MASK_STYLE
 */

n(function(a){
  style.mask = a
})

/**
 * SET_MASK_BORDER_STYLE
 */

n(function(a){
  style.maskBorder = a
})

/**
 * SET_MASK_BORDER_MODE_STYLE
 */

n(function(a){
  style.maskBorderMode = a
})

/**
 * SET_MASK_BORDER_OUTSET_STYLE
 */

n(function(a){
  style.maskBorderOutset = a
})

/**
 * SET_MASK_BORDER_REPEAT_STYLE
 */

n(function(a){
  style.maskBorderRepeat = a
})

/**
 * SET_MASK_BORDER_SLICE_STYLE
 */

n(function(a){
  style.maskBorderSlice = a
})

/**
 * SET_MASK_BORDER_SOURCE_STYLE
 */

n(function(a){
  style.maskBorderSource = a
})

/**
 * SET_MASK_BORDER_WIDTH_STYLE
 */

n(function(a){
  style.maskBorderWidth = a
})

/**
 * SET_MASK_CLIP_STYLE
 */

n(function(a){
  style.maskClip = a
})

/**
 * SET_MASK_COMPOSITE_STYLE
 */

n(function(a){
  style.maskComposite = a
})

/**
 * SET_MASK_IMAGE_STYLE
 */

n(function(a){
  style.maskImage = a
})

/**
 * SET_MASK_MODE_STYLE
 */

n(function(a){
  style.maskMode = a
})

/**
 * SET_MASK_ORIGIN_STYLE
 */

n(function(a){
  style.maskOrigin = a
})

/**
 * SET_MASK_POSITION_STYLE
 */

n(function(a){
  style.maskPosition = a
})

/**
 * SET_MASK_REPEAT_STYLE
 */

n(function(a){
  style.maskRepeat = a
})

/**
 * SET_MASK_SIZE_STYLE
 */

n(function(a){
  style.maskSize = a
})

/**
 * SET_MASK_TYPE_STYLE
 */

n(function(a){
  style.maskType = a
})

/**
 * SET_MAX_BLOCK_SIZE_STYLE
 */

n(function(a){
  style.maxBlockSize = a
})

/**
 * SET_MAX_HEIGHT_STYLE
 */

n(function(a){
  style.maxHeight = a
})

/**
 * SET_MAX_INLINE_SIZE_STYLE
 */

n(function(a){
  style.maxInlineSize = a
})

/**
 * SET_MAX_LINES_STYLE
 */

n(function(a){
  style.maxLines = a
})

/**
 * SET_MAX_WIDTH_STYLE
 */

n(function(a){
  style.maxWidth = a
})

/**
 * SET_MIN_BLOCK_SIZE_STYLE
 */

n(function(a){
  style.minBlockSize = a
})

/**
 * SET_MIN_HEIGHT_STYLE
 */

n(function(a){
  style.minHeight = a
})

/**
 * SET_MIN_INLINE_SIZE_STYLE
 */

n(function(a){
  style.minInlineSize = a
})

/**
 * SET_MIN_WIDTH_STYLE
 */

n(function(a){
  style.minWidth = a
})

/**
 * SET_MIX_BLEND_MODE_STYLE
 */

n(function(a){
  style.mixBlendMode = a
})

/**
 * SET_NAV_DOWN_STYLE
 */

n(function(a){
  style.navDown = a
})

/**
 * SET_NAV_LEFT_STYLE
 */

n(function(a){
  style.navLeft = a
})

/**
 * SET_NAV_RIGHT_STYLE
 */

n(function(a){
  style.navRight = a
})

/**
 * SET_NAV_UP_STYLE
 */

n(function(a){
  style.navUp = a
})

/**
 * SET_OBJECT_FIT_STYLE
 */

n(function(a){
  style.objectFit = a
})

/**
 * SET_OBJECT_POSITION_STYLE
 */

n(function(a){
  style.objectPosition = a
})

/**
 * SET_OFFSET_STYLE
 */

n(function(a){
  style.offset = a
})

/**
 * SET_OFFSET_AFTER_STYLE
 */

n(function(a){
  style.offsetAfter = a
})

/**
 * SET_OFFSET_ANCHOR_STYLE
 */

n(function(a){
  style.offsetAnchor = a
})

/**
 * SET_OFFSET_BEFORE_STYLE
 */

n(function(a){
  style.offsetBefore = a
})

/**
 * SET_OFFSET_DISTANCE_STYLE
 */

n(function(a){
  style.offsetDistance = a
})

/**
 * SET_OFFSET_END_STYLE
 */

n(function(a){
  style.offsetEnd = a
})

/**
 * SET_OFFSET_PATH_STYLE
 */

n(function(a){
  style.offsetPath = a
})

/**
 * SET_OFFSET_POSITION_STYLE
 */

n(function(a){
  style.offsetPosition = a
})

/**
 * SET_OFFSET_ROTATE_STYLE
 */

n(function(a){
  style.offsetRotate = a
})

/**
 * SET_OFFSET_START_STYLE
 */

n(function(a){
  style.offsetStart = a
})

/**
 * SET_OPACITY_STYLE
 */

n(function(a){
  style.opacity = a
})

/**
 * SET_ORDER_STYLE
 */

n(function(a){
  style.order = a
})

/**
 * SET_ORPHANS_STYLE
 */

n(function(a){
  style.orphans = a
})

/**
 * SET_OUTLINE_STYLE
 */

n(function(a){
  style.outline = a
})

/**
 * SET_OUTLINE_COLOR_STYLE
 */

n(function(a){
  style.outlineColor = a
})

/**
 * SET_OUTLINE_OFFSET_STYLE
 */

n(function(a){
  style.outlineOffset = a
})

/**
 * SET_OUTLINE_STYLE_STYLE
 */

n(function(a){
  style.outlineStyle = a
})

/**
 * SET_OUTLINE_WIDTH_STYLE
 */

n(function(a){
  style.outlineWidth = a
})

/**
 * SET_OVERFLOW_STYLE
 */

n(function(a){
  style.overflow = a
})

/**
 * SET_OVERFLOW_BLOCK_STYLE
 */

n(function(a){
  style.overflowBlock = a
})

/**
 * SET_OVERFLOW_INLINE_STYLE
 */

n(function(a){
  style.overflowInline = a
})

/**
 * SET_OVERFLOW_WRAP_STYLE
 */

n(function(a){
  style.overflowWrap = a
})

/**
 * SET_OVERFLOW_X_STYLE
 */

n(function(a){
  style.overflowX = a
})

/**
 * SET_OVERFLOW_Y_STYLE
 */

n(function(a){
  style.overflowY = a
})

/**
 * SET_OVERSCROLL_BEHAVIOR_STYLE
 */

n(function(a){
  style.overscrollBehavior = a
})

/**
 * SET_OVERSCROLL_BEHAVIOR_BLOCK_STYLE
 */

n(function(a){
  style.overscrollBehaviorBlock = a
})

/**
 * SET_OVERSCROLL_BEHAVIOR_INLINE_STYLE
 */

n(function(a){
  style.overscrollBehaviorInline = a
})

/**
 * SET_OVERSCROLL_BEHAVIOR_X_STYLE
 */

n(function(a){
  style.overscrollBehaviorX = a
})

/**
 * SET_OVERSCROLL_BEHAVIOR_Y_STYLE
 */

n(function(a){
  style.overscrollBehaviorY = a
})

/**
 * SET_PADDING_STYLE
 */

n(function(a){
  style.padding = a
})

/**
 * SET_PADDING_BLOCK_STYLE
 */

n(function(a){
  style.paddingBlock = a
})

/**
 * SET_PADDING_BLOCK_END_STYLE
 */

n(function(a){
  style.paddingBlockEnd = a
})

/**
 * SET_PADDING_BLOCK_START_STYLE
 */

n(function(a){
  style.paddingBlockStart = a
})

/**
 * SET_PADDING_BOTTOM_STYLE
 */

n(function(a){
  style.paddingBottom = a
})

/**
 * SET_PADDING_INLINE_STYLE
 */

n(function(a){
  style.paddingInline = a
})

/**
 * SET_PADDING_INLINE_END_STYLE
 */

n(function(a){
  style.paddingInlineEnd = a
})

/**
 * SET_PADDING_INLINE_START_STYLE
 */

n(function(a){
  style.paddingInlineStart = a
})

/**
 * SET_PADDING_LEFT_STYLE
 */

n(function(a){
  style.paddingLeft = a
})

/**
 * SET_PADDING_RIGHT_STYLE
 */

n(function(a){
  style.paddingRight = a
})

/**
 * SET_PADDING_TOP_STYLE
 */

n(function(a){
  style.paddingTop = a
})

/**
 * SET_PAGE_STYLE
 */

n(function(a){
  style.page = a
})

/**
 * SET_PAGE_BREAK_AFTER_STYLE
 */

n(function(a){
  style.pageBreakAfter = a
})

/**
 * SET_PAGE_BREAK_BEFORE_STYLE
 */

n(function(a){
  style.pageBreakBefore = a
})

/**
 * SET_PAGE_BREAK_INSIDE_STYLE
 */

n(function(a){
  style.pageBreakInside = a
})

/**
 * SET_PAUSE_STYLE
 */

n(function(a){
  style.pause = a
})

/**
 * SET_PAUSE_AFTER_STYLE
 */

n(function(a){
  style.pauseAfter = a
})

/**
 * SET_PAUSE_BEFORE_STYLE
 */

n(function(a){
  style.pauseBefore = a
})

/**
 * SET_PERSPECTIVE_STYLE
 */

n(function(a){
  style.perspective = a
})

/**
 * SET_PERSPECTIVE_ORIGIN_STYLE
 */

n(function(a){
  style.perspectiveOrigin = a
})

/**
 * SET_PITCH_STYLE
 */

n(function(a){
  style.pitch = a
})

/**
 * SET_PITCH_RANGE_STYLE
 */

n(function(a){
  style.pitchRange = a
})

/**
 * SET_PLACE_CONTENT_STYLE
 */

n(function(a){
  style.placeContent = a
})

/**
 * SET_PLACE_ITEMS_STYLE
 */

n(function(a){
  style.placeItems = a
})

/**
 * SET_PLACE_SELF_STYLE
 */

n(function(a){
  style.placeSelf = a
})

/**
 * SET_PLAY_DURING_STYLE
 */

n(function(a){
  style.playDuring = a
})

/**
 * SET_POSITION_STYLE
 */

n(function(a){
  style.position = a
})

/**
 * SET_QUOTES_STYLE
 */

n(function(a){
  style.quotes = a
})

/**
 * SET_REGION_FRAGMENT_STYLE
 */

n(function(a){
  style.regionFragment = a
})

/**
 * SET_RESIZE_STYLE
 */

n(function(a){
  style.resize = a
})

/**
 * SET_RICHNESS_STYLE
 */

n(function(a){
  style.richness = a
})

/**
 * SET_RIGHT_STYLE
 */

n(function(a){
  style.right = a
})

/**
 * SET_ROW_GAP_STYLE
 */

n(function(a){
  style.rowGap = a
})

/**
 * SET_RUBY_ALIGN_STYLE
 */

n(function(a){
  style.rubyAlign = a
})

/**
 * SET_RUBY_MERGE_STYLE
 */

n(function(a){
  style.rubyMerge = a
})

/**
 * SET_RUBY_POSITION_STYLE
 */

n(function(a){
  style.rubyPosition = a
})

/**
 * SET_RUNNING_STYLE
 */

n(function(a){
  style.running = a
})

/**
 * SET_SCROLL_BEHAVIOR_STYLE
 */

n(function(a){
  style.scrollBehavior = a
})

/**
 * SET_SCROLL_MARGIN_STYLE
 */

n(function(a){
  style.scrollMargin = a
})

/**
 * SET_SCROLL_MARGIN_BLOCK_STYLE
 */

n(function(a){
  style.scrollMarginBlock = a
})

/**
 * SET_SCROLL_MARGIN_BLOCK_END_STYLE
 */

n(function(a){
  style.scrollMarginBlockEnd = a
})

/**
 * SET_SCROLL_MARGIN_BLOCK_START_STYLE
 */

n(function(a){
  style.scrollMarginBlockStart = a
})

/**
 * SET_SCROLL_MARGIN_BOTTOM_STYLE
 */

n(function(a){
  style.scrollMarginBottom = a
})

/**
 * SET_SCROLL_MARGIN_INLINE_STYLE
 */

n(function(a){
  style.scrollMarginInline = a
})

/**
 * SET_SCROLL_MARGIN_INLINE_END_STYLE
 */

n(function(a){
  style.scrollMarginInlineEnd = a
})

/**
 * SET_SCROLL_MARGIN_INLINE_START_STYLE
 */

n(function(a){
  style.scrollMarginInlineStart = a
})

/**
 * SET_SCROLL_MARGIN_LEFT_STYLE
 */

n(function(a){
  style.scrollMarginLeft = a
})

/**
 * SET_SCROLL_MARGIN_RIGHT_STYLE
 */

n(function(a){
  style.scrollMarginRight = a
})

/**
 * SET_SCROLL_MARGIN_TOP_STYLE
 */

n(function(a){
  style.scrollMarginTop = a
})

/**
 * SET_SCROLL_PADDING_STYLE
 */

n(function(a){
  style.scrollPadding = a
})

/**
 * SET_SCROLL_PADDING_BLOCK_STYLE
 */

n(function(a){
  style.scrollPaddingBlock = a
})

/**
 * SET_SCROLL_PADDING_BLOCK_END_STYLE
 */

n(function(a){
  style.scrollPaddingBlockEnd = a
})

/**
 * SET_SCROLL_PADDING_BLOCK_START_STYLE
 */

n(function(a){
  style.scrollPaddingBlockStart = a
})

/**
 * SET_SCROLL_PADDING_BOTTOM_STYLE
 */

n(function(a){
  style.scrollPaddingBottom = a
})

/**
 * SET_SCROLL_PADDING_INLINE_STYLE
 */

n(function(a){
  style.scrollPaddingInline = a
})

/**
 * SET_SCROLL_PADDING_INLINE_END_STYLE
 */

n(function(a){
  style.scrollPaddingInlineEnd = a
})

/**
 * SET_SCROLL_PADDING_INLINE_START_STYLE
 */

n(function(a){
  style.scrollPaddingInlineStart = a
})

/**
 * SET_SCROLL_PADDING_LEFT_STYLE
 */

n(function(a){
  style.scrollPaddingLeft = a
})

/**
 * SET_SCROLL_PADDING_RIGHT_STYLE
 */

n(function(a){
  style.scrollPaddingRight = a
})

/**
 * SET_SCROLL_PADDING_TOP_STYLE
 */

n(function(a){
  style.scrollPaddingTop = a
})

/**
 * SET_SCROLL_SNAP_ALIGN_STYLE
 */

n(function(a){
  style.scrollSnapAlign = a
})

/**
 * SET_SCROLL_SNAP_STOP_STYLE
 */

n(function(a){
  style.scrollSnapStop = a
})

/**
 * SET_SCROLL_SNAP_TYPE_STYLE
 */

n(function(a){
  style.scrollSnapType = a
})

/**
 * SET_SCROLLBAR_COLOR_STYLE
 */

n(function(a){
  style.scrollbarColor = a
})

/**
 * SET_SCROLLBAR_GUTTER_STYLE
 */

n(function(a){
  style.scrollbarGutter = a
})

/**
 * SET_SCROLLBAR_WIDTH_STYLE
 */

n(function(a){
  style.scrollbarWidth = a
})

/**
 * SET_SHAPE_IMAGE_THRESHOLD_STYLE
 */

n(function(a){
  style.shapeImageThreshold = a
})

/**
 * SET_SHAPE_INSIDE_STYLE
 */

n(function(a){
  style.shapeInside = a
})

/**
 * SET_SHAPE_MARGIN_STYLE
 */

n(function(a){
  style.shapeMargin = a
})

/**
 * SET_SHAPE_OUTSIDE_STYLE
 */

n(function(a){
  style.shapeOutside = a
})

/**
 * SET_SPATIAL_NAVIGATION_ACTION_STYLE
 */

n(function(a){
  style.spatialNavigationAction = a
})

/**
 * SET_SPATIAL_NAVIGATION_CONTAIN_STYLE
 */

n(function(a){
  style.spatialNavigationContain = a
})

/**
 * SET_SPATIAL_NAVIGATION_FUNCTION_STYLE
 */

n(function(a){
  style.spatialNavigationFunction = a
})

/**
 * SET_SPEAK_STYLE
 */

n(function(a){
  style.speak = a
})

/**
 * SET_SPEAK_HEADER_STYLE
 */

n(function(a){
  style.speakHeader = a
})

/**
 * SET_SPEAK_NUMERAL_STYLE
 */

n(function(a){
  style.speakNumeral = a
})

/**
 * SET_SPEAK_PUNCTUATION_STYLE
 */

n(function(a){
  style.speakPunctuation = a
})

/**
 * SET_SPEECH_RATE_STYLE
 */

n(function(a){
  style.speechRate = a
})

/**
 * SET_STRESS_STYLE
 */

n(function(a){
  style.stress = a
})

/**
 * SET_STRING_SET_STYLE
 */

n(function(a){
  style.stringSet = a
})

/**
 * SET_STROKE_STYLE
 */

n(function(a){
  style.stroke = a
})

/**
 * SET_STROKE_ALIGN_STYLE
 */

n(function(a){
  style.strokeAlign = a
})

/**
 * SET_STROKE_ALIGNMENT_STYLE
 */

n(function(a){
  style.strokeAlignment = a
})

/**
 * SET_STROKE_BREAK_STYLE
 */

n(function(a){
  style.strokeBreak = a
})

/**
 * SET_STROKE_COLOR_STYLE
 */

n(function(a){
  style.strokeColor = a
})

/**
 * SET_STROKE_DASH_CORNER_STYLE
 */

n(function(a){
  style.strokeDashCorner = a
})

/**
 * SET_STROKE_DASH_JUSTIFY_STYLE
 */

n(function(a){
  style.strokeDashJustify = a
})

/**
 * SET_STROKE_DASHADJUST_STYLE
 */

n(function(a){
  style.strokeDashadjust = a
})

/**
 * SET_STROKE_DASHARRAY_STYLE
 */

n(function(a){
  style.strokeDasharray = a
})

/**
 * SET_STROKE_DASHCORNER_STYLE
 */

n(function(a){
  style.strokeDashcorner = a
})

/**
 * SET_STROKE_DASHOFFSET_STYLE
 */

n(function(a){
  style.strokeDashoffset = a
})

/**
 * SET_STROKE_IMAGE_STYLE
 */

n(function(a){
  style.strokeImage = a
})

/**
 * SET_STROKE_LINECAP_STYLE
 */

n(function(a){
  style.strokeLinecap = a
})

/**
 * SET_STROKE_LINEJOIN_STYLE
 */

n(function(a){
  style.strokeLinejoin = a
})

/**
 * SET_STROKE_MITERLIMIT_STYLE
 */

n(function(a){
  style.strokeMiterlimit = a
})

/**
 * SET_STROKE_OPACITY_STYLE
 */

n(function(a){
  style.strokeOpacity = a
})

/**
 * SET_STROKE_ORIGIN_STYLE
 */

n(function(a){
  style.strokeOrigin = a
})

/**
 * SET_STROKE_POSITION_STYLE
 */

n(function(a){
  style.strokePosition = a
})

/**
 * SET_STROKE_REPEAT_STYLE
 */

n(function(a){
  style.strokeRepeat = a
})

/**
 * SET_STROKE_SIZE_STYLE
 */

n(function(a){
  style.strokeSize = a
})

/**
 * SET_STROKE_WIDTH_STYLE
 */

n(function(a){
  style.strokeWidth = a
})

/**
 * SET_TAB_SIZE_STYLE
 */

n(function(a){
  style.tabSize = a
})

/**
 * SET_TABLE_LAYOUT_STYLE
 */

n(function(a){
  style.tableLayout = a
})

/**
 * SET_TEXT_ALIGN_STYLE
 */

n(function(a){
  style.textAlign = a
})

/**
 * SET_TEXT_ALIGN_ALL_STYLE
 */

n(function(a){
  style.textAlignAll = a
})

/**
 * SET_TEXT_ALIGN_LAST_STYLE
 */

n(function(a){
  style.textAlignLast = a
})

/**
 * SET_TEXT_COMBINE_UPRIGHT_STYLE
 */

n(function(a){
  style.textCombineUpright = a
})

/**
 * SET_TEXT_DECORATION_STYLE
 */

n(function(a){
  style.textDecoration = a
})

/**
 * SET_TEXT_DECORATION_COLOR_STYLE
 */

n(function(a){
  style.textDecorationColor = a
})

/**
 * SET_TEXT_DECORATION_LINE_STYLE
 */

n(function(a){
  style.textDecorationLine = a
})

/**
 * SET_TEXT_DECORATION_SKIP_STYLE
 */

n(function(a){
  style.textDecorationSkip = a
})

/**
 * SET_TEXT_DECORATION_SKIP_INK_STYLE
 */

n(function(a){
  style.textDecorationSkipInk = a
})

/**
 * SET_TEXT_DECORATION_STYLE_STYLE
 */

n(function(a){
  style.textDecorationStyle = a
})

/**
 * SET_TEXT_DECORATION_THICKENSS_STYLE
 */

n(function(a){
  style.textDecorationThickenss = a
})

/**
 * SET_TEXT_DECORATION_WIDTH_STYLE
 */

n(function(a){
  style.textDecorationWidth = a
})

/**
 * SET_TEXT_EMPHASIS_STYLE
 */

n(function(a){
  style.textEmphasis = a
})

/**
 * SET_TEXT_EMPHASIS_COLOR_STYLE
 */

n(function(a){
  style.textEmphasisColor = a
})

/**
 * SET_TEXT_EMPHASIS_POSITION_STYLE
 */

n(function(a){
  style.textEmphasisPosition = a
})

/**
 * SET_TEXT_EMPHASIS_SKIP_STYLE
 */

n(function(a){
  style.textEmphasisSkip = a
})

/**
 * SET_TEXT_EMPHASIS_STYLE_STYLE
 */

n(function(a){
  style.textEmphasisStyle = a
})

/**
 * SET_TEXT_GROUP_ALIGN_STYLE
 */

n(function(a){
  style.textGroupAlign = a
})

/**
 * SET_TEXT_HEIGHT_STYLE
 */

n(function(a){
  style.textHeight = a
})

/**
 * SET_TEXT_INDENT_STYLE
 */

n(function(a){
  style.textIndent = a
})

/**
 * SET_TEXT_JUSTIFY_STYLE
 */

n(function(a){
  style.textJustify = a
})

/**
 * SET_TEXT_ORIENTATION_STYLE
 */

n(function(a){
  style.textOrientation = a
})

/**
 * SET_TEXT_OVERFLOW_STYLE
 */

n(function(a){
  style.textOverflow = a
})

/**
 * SET_TEXT_SHADOW_STYLE
 */

n(function(a){
  style.textShadow = a
})

/**
 * SET_TEXT_SPACE_COLLAPSE_STYLE
 */

n(function(a){
  style.textSpaceCollapse = a
})

/**
 * SET_TEXT_SPACE_TRIM_STYLE
 */

n(function(a){
  style.textSpaceTrim = a
})

/**
 * SET_TEXT_SPACING_STYLE
 */

n(function(a){
  style.textSpacing = a
})

/**
 * SET_TEXT_TRANSFORM_STYLE
 */

n(function(a){
  style.textTransform = a
})

/**
 * SET_TEXT_UNDERLINE_OFFSET_STYLE
 */

n(function(a){
  style.textUnderlineOffset = a
})

/**
 * SET_TEXT_UNDERLINE_POSITION_STYLE
 */

n(function(a){
  style.textUnderlinePosition = a
})

/**
 * SET_TEXT_WRAP_STYLE
 */

n(function(a){
  style.textWrap = a
})

/**
 * SET_TOP_STYLE
 */

n(function(a){
  style.top = a
})

/**
 * SET_TRANSFORM_STYLE
 */

n(function(a){
  style.transform = a
})

/**
 * SET_TRANSFORM_BOX_STYLE
 */

n(function(a){
  style.transformBox = a
})

/**
 * SET_TRANSFORM_ORIGIN_STYLE
 */

n(function(a){
  style.transformOrigin = a
})

/**
 * SET_TRANSFORM_STYLE_STYLE
 */

n(function(a){
  style.transformStyle = a
})

/**
 * SET_TRANSITION_STYLE
 */

n(function(a){
  style.transition = a
})

/**
 * SET_TRANSITION_DELAY_STYLE
 */

n(function(a){
  style.transitionDelay = a
})

/**
 * SET_TRANSITION_DURATION_STYLE
 */

n(function(a){
  style.transitionDuration = a
})

/**
 * SET_TRANSITION_PROPERTY_STYLE
 */

n(function(a){
  style.transitionProperty = a
})

/**
 * SET_TRANSITION_TIMING_FUNCTION_STYLE
 */

n(function(a){
  style.transitionTimingFunction = a
})

/**
 * SET_UNICODE_BIDI_STYLE
 */

n(function(a){
  style.unicodeBidi = a
})

/**
 * SET_USER_SELECT_STYLE
 */

n(function(a){
  style.userSelect = a
})

/**
 * SET_VERTICAL_ALIGN_STYLE
 */

n(function(a){
  style.verticalAlign = a
})

/**
 * SET_VISIBILITY_STYLE
 */

n(function(a){
  style.visibility = a
})

/**
 * SET_VOICE_FAMILY_STYLE
 */

n(function(a){
  style.voiceFamily = a
})

/**
 * SET_VOLUME_STYLE
 */

n(function(a){
  style.volume = a
})

/**
 * SET_WHITE_SPACE_STYLE
 */

n(function(a){
  style.whiteSpace = a
})

/**
 * SET_WIDOWS_STYLE
 */

n(function(a){
  style.widows = a
})

/**
 * SET_WIDTH_STYLE
 */

n(function(a){
  style.width = a
})

/**
 * SET_WILL_CHANGE_STYLE
 */

n(function(a){
  style.willChange = a
})

/**
 * SET_WORD_BREAK_STYLE
 */

n(function(a){
  style.wordBreak = a
})

/**
 * SET_WORD_SPACING_STYLE
 */

n(function(a){
  style.wordSpacing = a
})

/**
 * SET_WORD_WRAP_STYLE
 */

n(function(a){
  style.wordWrap = a
})

/**
 * SET_WRAP_AFTER_STYLE
 */

n(function(a){
  style.wrapAfter = a
})

/**
 * SET_WRAP_BEFORE_STYLE
 */

n(function(a){
  style.wrapBefore = a
})

/**
 * SET_WRAP_FLOW_STYLE
 */

n(function(a){
  style.wrapFlow = a
})

/**
 * SET_WRAP_INSIDE_STYLE
 */

n(function(a){
  style.wrapInside = a
})

/**
 * SET_WRAP_THROUGH_STYLE
 */

n(function(a){
  style.wrapThrough = a
})

/**
 * SET_WRITING_MODE_STYLE
 */

n(function(a){
  style.writingMode = a
})

/**
 * SET_Z_INDEX_STYLE
 */

n(function(a){
  style.zIndex = a
})

/**
 * LISTEN_TO_ABORT_EVENT
 */

n(function(a, e){
  a.addEventListener('abort', e)
})

/**
 * LISTEN_TO_AFTERPRINT_EVENT
 */

n(function(a, e){
  a.addEventListener('afterprint', e)
})

/**
 * LISTEN_TO_ANIMATIONCANCEL_EVENT
 */

n(function(a, e){
  a.addEventListener('animationcancel', e)
})

/**
 * LISTEN_TO_ANIMATIONEND_EVENT
 */

n(function(a, e){
  a.addEventListener('animationend', e)
})

/**
 * LISTEN_TO_ANIMATIONITERATION_EVENT
 */

n(function(a, e){
  a.addEventListener('animationiteration', e)
})

/**
 * LISTEN_TO_ANIMATIONSTART_EVENT
 */

n(function(a, e){
  a.addEventListener('animationstart', e)
})

/**
 * LISTEN_TO_APPINSTALLED_EVENT
 */

n(function(a, e){
  a.addEventListener('appinstalled', e)
})

/**
 * LISTEN_TO_AUDIOPROCESS_EVENT
 */

n(function(a, e){
  a.addEventListener('audioprocess', e)
})

/**
 * LISTEN_TO_AUDIOEND_EVENT
 */

n(function(a, e){
  a.addEventListener('audioend', e)
})

/**
 * LISTEN_TO_AUDIOSTART_EVENT
 */

n(function(a, e){
  a.addEventListener('audiostart', e)
})

/**
 * LISTEN_TO_BEFOREPRINT_EVENT
 */

n(function(a, e){
  a.addEventListener('beforeprint', e)
})

/**
 * LISTEN_TO_BEFOREUNLOAD_EVENT
 */

n(function(a, e){
  a.addEventListener('beforeunload', e)
})

/**
 * LISTEN_TO_BEGINEVENT_EVENT
 */

n(function(a, e){
  a.addEventListener('beginEvent', e)
})

/**
 * LISTEN_TO_BLOCKED_EVENT
 */

n(function(a, e){
  a.addEventListener('blocked', e)
})

/**
 * LISTEN_TO_BLUR_EVENT
 */

n(function(a, e){
  a.addEventListener('blur', e)
})

/**
 * LISTEN_TO_BOUNDARY_EVENT
 */

n(function(a, e){
  a.addEventListener('boundary', e)
})

/**
 * LISTEN_TO_CANPLAY_EVENT
 */

n(function(a, e){
  a.addEventListener('canplay', e)
})

/**
 * LISTEN_TO_CANPLAYTHROUGH_EVENT
 */

n(function(a, e){
  a.addEventListener('canplaythrough', e)
})

/**
 * LISTEN_TO_CHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('change', e)
})

/**
 * LISTEN_TO_CHARGINGCHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('chargingchange', e)
})

/**
 * LISTEN_TO_CHARGINGTIMECHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('chargingtimechange', e)
})

/**
 * LISTEN_TO_CLICK_EVENT
 */

n(function(a, e){
  a.addEventListener('click', e)
})

/**
 * LISTEN_TO_CLOSE_EVENT
 */

n(function(a, e){
  a.addEventListener('close', e)
})

/**
 * LISTEN_TO_COMPLETE_EVENT
 */

n(function(a, e){
  a.addEventListener('complete', e)
})

/**
 * LISTEN_TO_COMPOSITIONEND_EVENT
 */

n(function(a, e){
  a.addEventListener('compositionend', e)
})

/**
 * LISTEN_TO_COMPOSITIONSTART_EVENT
 */

n(function(a, e){
  a.addEventListener('compositionstart', e)
})

/**
 * LISTEN_TO_COMPOSITIONUPDATE_EVENT
 */

n(function(a, e){
  a.addEventListener('compositionupdate', e)
})

/**
 * LISTEN_TO_CONTEXTMENU_EVENT
 */

n(function(a, e){
  a.addEventListener('contextmenu', e)
})

/**
 * LISTEN_TO_COPY_EVENT
 */

n(function(a, e){
  a.addEventListener('copy', e)
})

/**
 * LISTEN_TO_CUT_EVENT
 */

n(function(a, e){
  a.addEventListener('cut', e)
})

/**
 * LISTEN_TO_DBLCLICK_EVENT
 */

n(function(a, e){
  a.addEventListener('dblclick', e)
})

/**
 * LISTEN_TO_DEVICECHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('devicechange', e)
})

/**
 * LISTEN_TO_DEVICEMOTION_EVENT
 */

n(function(a, e){
  a.addEventListener('devicemotion', e)
})

/**
 * LISTEN_TO_DEVICEORIENTATION_EVENT
 */

n(function(a, e){
  a.addEventListener('deviceorientation', e)
})

/**
 * LISTEN_TO_DISCHARGINGTIMECHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('dischargingtimechange', e)
})

/**
 * LISTEN_TO_DOM_ACTIVATE_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMActivate', e)
})

/**
 * LISTEN_TO_DOM_ATTRIBUTE_NAME_CHANGED_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMAttributeNameChanged', e)
})

/**
 * LISTEN_TO_DOM_ATTR_MODIFIED_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMAttrModified', e)
})

/**
 * LISTEN_TO_DOM_CHARACTER_DATA_MODIFIED_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMCharacterDataModified', e)
})

/**
 * LISTEN_TO_DOM_CONTENT_LOADED_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMContentLoaded', e)
})

/**
 * LISTEN_TO_DOM_ELEMENT_NAME_CHANGED_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMElementNameChanged', e)
})

/**
 * LISTEN_TO_DOM_FOCUS_IN_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMFocusIn', e)
})

/**
 * LISTEN_TO_DOM_FOCUS_OUT_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMFocusOut', e)
})

/**
 * LISTEN_TO_DOM_NODE_INSERTED_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMNodeInserted', e)
})

/**
 * LISTEN_TO_DOM_NODE_INSERTED_INTO_DOCUMENT_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMNodeInsertedIntoDocument', e)
})

/**
 * LISTEN_TO_DOM_NODE_REMOVED_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMNodeRemoved', e)
})

/**
 * LISTEN_TO_DOM_NODE_REMOVED_FROM_DOCUMENT_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMNodeRemovedFromDocument', e)
})

/**
 * LISTEN_TO_DOM_SUBTREE_MODIFIED_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMSubtreeModified', e)
})

/**
 * LISTEN_TO_DRAG_EVENT
 */

n(function(a, e){
  a.addEventListener('drag', e)
})

/**
 * LISTEN_TO_DRAGEND_EVENT
 */

n(function(a, e){
  a.addEventListener('dragend', e)
})

/**
 * LISTEN_TO_DRAGENTER_EVENT
 */

n(function(a, e){
  a.addEventListener('dragenter', e)
})

/**
 * LISTEN_TO_DRAGLEAVE_EVENT
 */

n(function(a, e){
  a.addEventListener('dragleave', e)
})

/**
 * LISTEN_TO_DRAGOVER_EVENT
 */

n(function(a, e){
  a.addEventListener('dragover', e)
})

/**
 * LISTEN_TO_DRAGSTART_EVENT
 */

n(function(a, e){
  a.addEventListener('dragstart', e)
})

/**
 * LISTEN_TO_DROP_EVENT
 */

n(function(a, e){
  a.addEventListener('drop', e)
})

/**
 * LISTEN_TO_DURATIONCHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('durationchange', e)
})

/**
 * LISTEN_TO_EMPTIED_EVENT
 */

n(function(a, e){
  a.addEventListener('emptied', e)
})

/**
 * LISTEN_TO_END_EVENT
 */

n(function(a, e){
  a.addEventListener('end', e)
})

/**
 * LISTEN_TO_ENDED_EVENT
 */

n(function(a, e){
  a.addEventListener('ended', e)
})

/**
 * LISTEN_TO_END_EVENT_EVENT
 */

n(function(a, e){
  a.addEventListener('endEvent', e)
})

/**
 * LISTEN_TO_ERROR_EVENT
 */

n(function(a, e){
  a.addEventListener('error', e)
})

/**
 * LISTEN_TO_FOCUS_EVENT
 */

n(function(a, e){
  a.addEventListener('focus', e)
})

/**
 * LISTEN_TO_FOCUSIN_EVENT
 */

n(function(a, e){
  a.addEventListener('focusin', e)
})

/**
 * LISTEN_TO_FOCUSOUT_EVENT
 */

n(function(a, e){
  a.addEventListener('focusout', e)
})

/**
 * LISTEN_TO_FULLSCREENCHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('fullscreenchange', e)
})

/**
 * LISTEN_TO_FULLSCREENERROR_EVENT
 */

n(function(a, e){
  a.addEventListener('fullscreenerror', e)
})

/**
 * LISTEN_TO_GAMEPADCONNECTED_EVENT
 */

n(function(a, e){
  a.addEventListener('gamepadconnected', e)
})

/**
 * LISTEN_TO_GAMEPADDISCONNECTED_EVENT
 */

n(function(a, e){
  a.addEventListener('gamepaddisconnected', e)
})

/**
 * LISTEN_TO_GOTPOINTERCAPTURE_EVENT
 */

n(function(a, e){
  a.addEventListener('gotpointercapture', e)
})

/**
 * LISTEN_TO_HASHCHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('hashchange', e)
})

/**
 * LISTEN_TO_LOSTPOINTERCAPTURE_EVENT
 */

n(function(a, e){
  a.addEventListener('lostpointercapture', e)
})

/**
 * LISTEN_TO_INPUT_EVENT
 */

n(function(a, e){
  a.addEventListener('input', e)
})

/**
 * LISTEN_TO_INVALID_EVENT
 */

n(function(a, e){
  a.addEventListener('invalid', e)
})

/**
 * LISTEN_TO_KEYDOWN_EVENT
 */

n(function(a, e){
  a.addEventListener('keydown', e)
})

/**
 * LISTEN_TO_KEYPRESS_EVENT
 */

n(function(a, e){
  a.addEventListener('keypress', e)
})

/**
 * LISTEN_TO_KEYUP_EVENT
 */

n(function(a, e){
  a.addEventListener('keyup', e)
})

/**
 * LISTEN_TO_LANGUAGECHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('languagechange', e)
})

/**
 * LISTEN_TO_LEVELCHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('levelchange', e)
})

/**
 * LISTEN_TO_LOAD_EVENT
 */

n(function(a, e){
  a.addEventListener('load', e)
})

/**
 * LISTEN_TO_LOADEDDATA_EVENT
 */

n(function(a, e){
  a.addEventListener('loadeddata', e)
})

/**
 * LISTEN_TO_LOADEDMETADATA_EVENT
 */

n(function(a, e){
  a.addEventListener('loadedmetadata', e)
})

/**
 * LISTEN_TO_LOADEND_EVENT
 */

n(function(a, e){
  a.addEventListener('loadend', e)
})

/**
 * LISTEN_TO_LOADSTART_EVENT
 */

n(function(a, e){
  a.addEventListener('loadstart', e)
})

/**
 * LISTEN_TO_MARK_EVENT
 */

n(function(a, e){
  a.addEventListener('mark', e)
})

/**
 * LISTEN_TO_MESSAGEERROR_EVENT
 */

n(function(a, e){
  a.addEventListener('messageerror', e)
})

/**
 * LISTEN_TO_MESSAGE_EVENT
 */

n(function(a, e){
  a.addEventListener('message', e)
})

/**
 * LISTEN_TO_MOUSEDOWN_EVENT
 */

n(function(a, e){
  a.addEventListener('mousedown', e)
})

/**
 * LISTEN_TO_MOUSEENTER_EVENT
 */

n(function(a, e){
  a.addEventListener('mouseenter', e)
})

/**
 * LISTEN_TO_MOUSELEAVE_EVENT
 */

n(function(a, e){
  a.addEventListener('mouseleave', e)
})

/**
 * LISTEN_TO_MOUSEMOVE_EVENT
 */

n(function(a, e){
  a.addEventListener('mousemove', e)
})

/**
 * LISTEN_TO_MOUSEOUT_EVENT
 */

n(function(a, e){
  a.addEventListener('mouseout', e)
})

/**
 * LISTEN_TO_MOUSEOVER_EVENT
 */

n(function(a, e){
  a.addEventListener('mouseover', e)
})

/**
 * LISTEN_TO_MOUSEUP_EVENT
 */

n(function(a, e){
  a.addEventListener('mouseup', e)
})

/**
 * LISTEN_TO_NOMATCH_EVENT
 */

n(function(a, e){
  a.addEventListener('nomatch', e)
})

/**
 * LISTEN_TO_NOTIFICATIONCLICK_EVENT
 */

n(function(a, e){
  a.addEventListener('notificationclick', e)
})

/**
 * LISTEN_TO_OFFLINE_EVENT
 */

n(function(a, e){
  a.addEventListener('offline', e)
})

/**
 * LISTEN_TO_ONLINE_EVENT
 */

n(function(a, e){
  a.addEventListener('online', e)
})

/**
 * LISTEN_TO_OPEN_EVENT
 */

n(function(a, e){
  a.addEventListener('open', e)
})

/**
 * LISTEN_TO_ORIENTATIONCHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('orientationchange', e)
})

/**
 * LISTEN_TO_PAGEHIDE_EVENT
 */

n(function(a, e){
  a.addEventListener('pagehide', e)
})

/**
 * LISTEN_TO_PAGESHOW_EVENT
 */

n(function(a, e){
  a.addEventListener('pageshow', e)
})

/**
 * LISTEN_TO_PASTE_EVENT
 */

n(function(a, e){
  a.addEventListener('paste', e)
})

/**
 * LISTEN_TO_PAUSE_EVENT
 */

n(function(a, e){
  a.addEventListener('pause', e)
})

/**
 * LISTEN_TO_POINTERCANCEL_EVENT
 */

n(function(a, e){
  a.addEventListener('pointercancel', e)
})

/**
 * LISTEN_TO_POINTERDOWN_EVENT
 */

n(function(a, e){
  a.addEventListener('pointerdown', e)
})

/**
 * LISTEN_TO_POINTERENTER_EVENT
 */

n(function(a, e){
  a.addEventListener('pointerenter', e)
})

/**
 * LISTEN_TO_POINTERLEAVE_EVENT
 */

n(function(a, e){
  a.addEventListener('pointerleave', e)
})

/**
 * LISTEN_TO_POINTERLOCKCHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('pointerlockchange', e)
})

/**
 * LISTEN_TO_POINTERLOCKERROR_EVENT
 */

n(function(a, e){
  a.addEventListener('pointerlockerror', e)
})

/**
 * LISTEN_TO_POINTERMOVE_EVENT
 */

n(function(a, e){
  a.addEventListener('pointermove', e)
})

/**
 * LISTEN_TO_POINTEROUT_EVENT
 */

n(function(a, e){
  a.addEventListener('pointerout', e)
})

/**
 * LISTEN_TO_POINTEROVER_EVENT
 */

n(function(a, e){
  a.addEventListener('pointerover', e)
})

/**
 * LISTEN_TO_POINTERUP_EVENT
 */

n(function(a, e){
  a.addEventListener('pointerup', e)
})

/**
 * LISTEN_TO_PLAY_EVENT
 */

n(function(a, e){
  a.addEventListener('play', e)
})

/**
 * LISTEN_TO_PLAYING_EVENT
 */

n(function(a, e){
  a.addEventListener('playing', e)
})

/**
 * LISTEN_TO_POPSTATE_EVENT
 */

n(function(a, e){
  a.addEventListener('popstate', e)
})

/**
 * LISTEN_TO_PROGRESS_EVENT
 */

n(function(a, e){
  a.addEventListener('progress', e)
})

/**
 * LISTEN_TO_PUSH_EVENT
 */

n(function(a, e){
  a.addEventListener('push', e)
})

/**
 * LISTEN_TO_PUSHSUBSCRIPTIONCHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('pushsubscriptionchange', e)
})

/**
 * LISTEN_TO_RATECHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('ratechange', e)
})

/**
 * LISTEN_TO_READYSTATECHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('readystatechange', e)
})

/**
 * LISTEN_TO_REPEATEVENT_EVENT
 */

n(function(a, e){
  a.addEventListener('repeatEvent', e)
})

/**
 * LISTEN_TO_RESET_EVENT
 */

n(function(a, e){
  a.addEventListener('reset', e)
})

/**
 * LISTEN_TO_RESIZE_EVENT
 */

n(function(a, e){
  a.addEventListener('resize', e)
})

/**
 * LISTEN_TO_RESOURCETIMINGBUFFERFULL_EVENT
 */

n(function(a, e){
  a.addEventListener('resourcetimingbufferfull', e)
})

/**
 * LISTEN_TO_RESULT_EVENT
 */

n(function(a, e){
  a.addEventListener('result', e)
})

/**
 * LISTEN_TO_RESUME_EVENT
 */

n(function(a, e){
  a.addEventListener('resume', e)
})

/**
 * LISTEN_TO_SCROLL_EVENT
 */

n(function(a, e){
  a.addEventListener('scroll', e)
})

/**
 * LISTEN_TO_SEEKED_EVENT
 */

n(function(a, e){
  a.addEventListener('seeked', e)
})

/**
 * LISTEN_TO_SEEKING_EVENT
 */

n(function(a, e){
  a.addEventListener('seeking', e)
})

/**
 * LISTEN_TO_SELECT_EVENT
 */

n(function(a, e){
  a.addEventListener('select', e)
})

/**
 * LISTEN_TO_SELECTSTART_EVENT
 */

n(function(a, e){
  a.addEventListener('selectstart', e)
})

/**
 * LISTEN_TO_SELECTIONCHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('selectionchange', e)
})

/**
 * LISTEN_TO_SHOW_EVENT
 */

n(function(a, e){
  a.addEventListener('show', e)
})

/**
 * LISTEN_TO_SLOTCHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('slotchange', e)
})

/**
 * LISTEN_TO_SOUNDEND_EVENT
 */

n(function(a, e){
  a.addEventListener('soundend', e)
})

/**
 * LISTEN_TO_SOUNDSTART_EVENT
 */

n(function(a, e){
  a.addEventListener('soundstart', e)
})

/**
 * LISTEN_TO_SPEECHEND_EVENT
 */

n(function(a, e){
  a.addEventListener('speechend', e)
})

/**
 * LISTEN_TO_SPEECHSTART_EVENT
 */

n(function(a, e){
  a.addEventListener('speechstart', e)
})

/**
 * LISTEN_TO_STALLED_EVENT
 */

n(function(a, e){
  a.addEventListener('stalled', e)
})

/**
 * LISTEN_TO_START_EVENT
 */

n(function(a, e){
  a.addEventListener('start', e)
})

/**
 * LISTEN_TO_STORAGE_EVENT
 */

n(function(a, e){
  a.addEventListener('storage', e)
})

/**
 * LISTEN_TO_SUBMIT_EVENT
 */

n(function(a, e){
  a.addEventListener('submit', e)
})

/**
 * LISTEN_TO_SUCCESS_EVENT
 */

n(function(a, e){
  a.addEventListener('success', e)
})

/**
 * LISTEN_TO_SUSPEND_EVENT
 */

n(function(a, e){
  a.addEventListener('suspend', e)
})

/**
 * LISTEN_TO_SVG_ABORT_EVENT
 */

n(function(a, e){
  a.addEventListener('SVGAbort', e)
})

/**
 * LISTEN_TO_SVG_ERROR_EVENT
 */

n(function(a, e){
  a.addEventListener('SVGError', e)
})

/**
 * LISTEN_TO_SVG_LOAD_EVENT
 */

n(function(a, e){
  a.addEventListener('SVGLoad', e)
})

/**
 * LISTEN_TO_SVG_RESIZE_EVENT
 */

n(function(a, e){
  a.addEventListener('SVGResize', e)
})

/**
 * LISTEN_TO_SVG_SCROLL_EVENT
 */

n(function(a, e){
  a.addEventListener('SVGScroll', e)
})

/**
 * LISTEN_TO_SVG_UNLOAD_EVENT
 */

n(function(a, e){
  a.addEventListener('SVGUnload', e)
})

/**
 * LISTEN_TO_SVG_ZOOM_EVENT
 */

n(function(a, e){
  a.addEventListener('SVGZoom', e)
})

/**
 * LISTEN_TO_TIMEOUT_EVENT
 */

n(function(a, e){
  a.addEventListener('timeout', e)
})

/**
 * LISTEN_TO_TIMEUPDATE_EVENT
 */

n(function(a, e){
  a.addEventListener('timeupdate', e)
})

/**
 * LISTEN_TO_TOUCHCANCEL_EVENT
 */

n(function(a, e){
  a.addEventListener('touchcancel', e)
})

/**
 * LISTEN_TO_TOUCHEND_EVENT
 */

n(function(a, e){
  a.addEventListener('touchend', e)
})

/**
 * LISTEN_TO_TOUCHMOVE_EVENT
 */

n(function(a, e){
  a.addEventListener('touchmove', e)
})

/**
 * LISTEN_TO_TOUCHSTART_EVENT
 */

n(function(a, e){
  a.addEventListener('touchstart', e)
})

/**
 * LISTEN_TO_TRANSITIONEND_EVENT
 */

n(function(a, e){
  a.addEventListener('transitionend', e)
})

/**
 * LISTEN_TO_UNLOAD_EVENT
 */

n(function(a, e){
  a.addEventListener('unload', e)
})

/**
 * LISTEN_TO_UPGRADENEEDED_EVENT
 */

n(function(a, e){
  a.addEventListener('upgradeneeded', e)
})

/**
 * LISTEN_TO_USERPROXIMITY_EVENT
 */

n(function(a, e){
  a.addEventListener('userproximity', e)
})

/**
 * LISTEN_TO_VOICESCHANGED_EVENT
 */

n(function(a, e){
  a.addEventListener('voiceschanged', e)
})

/**
 * LISTEN_TO_VERSIONCHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('versionchange', e)
})

/**
 * LISTEN_TO_VISIBILITYCHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('visibilitychange', e)
})

/**
 * LISTEN_TO_VOLUMECHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('volumechange', e)
})

/**
 * LISTEN_TO_WAITING_EVENT
 */

n(function(a, e){
  a.addEventListener('waiting', e)
})

/**
 * LISTEN_TO_WHEEL_EVENT
 */

n(function(a, e){
  a.addEventListener('wheel', e)
})

/**
 * LISTEN_TO_AFTERSCRIPTEXECUTE_EVENT
 */

n(function(a, e){
  a.addEventListener('afterscriptexecute', e)
})

/**
 * LISTEN_TO_BEFORESCRIPTEXECUTE_EVENT
 */

n(function(a, e){
  a.addEventListener('beforescriptexecute', e)
})

/**
 * LISTEN_TO_BEFOREINSTALLPROMPT_EVENT
 */

n(function(a, e){
  a.addEventListener('beforeinstallprompt', e)
})

/**
 * LISTEN_TO_CARDSTATECHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('cardstatechange', e)
})

/**
 * LISTEN_TO_CONNECTIONINFOUPDATE_EVENT
 */

n(function(a, e){
  a.addEventListener('connectionInfoUpdate', e)
})

/**
 * LISTEN_TO_CFSTATECHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('cfstatechange', e)
})

/**
 * LISTEN_TO_DATACHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('datachange', e)
})

/**
 * LISTEN_TO_DATAERROR_EVENT
 */

n(function(a, e){
  a.addEventListener('dataerror', e)
})

/**
 * LISTEN_TO_DOM_MOUSE_SCROLL_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMMouseScroll', e)
})

/**
 * LISTEN_TO_DRAGDROP_EVENT
 */

n(function(a, e){
  a.addEventListener('dragdrop', e)
})

/**
 * LISTEN_TO_DRAGEXIT_EVENT
 */

n(function(a, e){
  a.addEventListener('dragexit', e)
})

/**
 * LISTEN_TO_DRAGGESTURE_EVENT
 */

n(function(a, e){
  a.addEventListener('draggesture', e)
})

/**
 * LISTEN_TO_ICCCARDLOCKERROR_EVENT
 */

n(function(a, e){
  a.addEventListener('icccardlockerror', e)
})

/**
 * LISTEN_TO_ICCINFOCHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('iccinfochange', e)
})

/**
 * LISTEN_TO_LOCALIZED_EVENT
 */

n(function(a, e){
  a.addEventListener('localized', e)
})

/**
 * LISTEN_TO_MOUSEWHEEL_EVENT
 */

n(function(a, e){
  a.addEventListener('mousewheel', e)
})

/**
 * LISTEN_TO_ALERTING_EVENT
 */

n(function(a, e){
  a.addEventListener('alerting', e)
})

/**
 * LISTEN_TO_BUSY_EVENT
 */

n(function(a, e){
  a.addEventListener('busy', e)
})

/**
 * LISTEN_TO_CALLSCHANGED_EVENT
 */

n(function(a, e){
  a.addEventListener('callschanged', e)
})

/**
 * LISTEN_TO_CONNECTING_EVENT
 */

n(function(a, e){
  a.addEventListener('connecting', e)
})

/**
 * LISTEN_TO_DELIVERED_EVENT
 */

n(function(a, e){
  a.addEventListener('delivered', e)
})

/**
 * LISTEN_TO_DIALING_EVENT
 */

n(function(a, e){
  a.addEventListener('dialing', e)
})

/**
 * LISTEN_TO_DISABLED_EVENT
 */

n(function(a, e){
  a.addEventListener('disabled', e)
})

/**
 * LISTEN_TO_DISCONNECTED_EVENT
 */

n(function(a, e){
  a.addEventListener('disconnected', e)
})

/**
 * LISTEN_TO_DISCONNECTING_EVENT
 */

n(function(a, e){
  a.addEventListener('disconnecting', e)
})

/**
 * LISTEN_TO_ENABLED_EVENT
 */

n(function(a, e){
  a.addEventListener('enabled', e)
})

/**
 * LISTEN_TO_HELD_EVENT
 */

n(function(a, e){
  a.addEventListener('held', e)
})

/**
 * LISTEN_TO_HOLDING_EVENT
 */

n(function(a, e){
  a.addEventListener('holding', e)
})

/**
 * LISTEN_TO_INCOMING_EVENT
 */

n(function(a, e){
  a.addEventListener('incoming', e)
})

/**
 * LISTEN_TO_RECEIVED_EVENT
 */

n(function(a, e){
  a.addEventListener('received', e)
})

/**
 * LISTEN_TO_RESUMING_EVENT
 */

n(function(a, e){
  a.addEventListener('resuming', e)
})

/**
 * LISTEN_TO_SENT_EVENT
 */

n(function(a, e){
  a.addEventListener('sent', e)
})

/**
 * LISTEN_TO_STATECHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('statechange', e)
})

/**
 * LISTEN_TO_STATUSCHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('statuschange', e)
})

/**
 * LISTEN_TO_OVERFLOW_EVENT
 */

n(function(a, e){
  a.addEventListener('overflow', e)
})

/**
 * LISTEN_TO_STKCOMMAND_EVENT
 */

n(function(a, e){
  a.addEventListener('stkcommand', e)
})

/**
 * LISTEN_TO_STKSESSIONEND_EVENT
 */

n(function(a, e){
  a.addEventListener('stksessionend', e)
})

/**
 * LISTEN_TO_TOUCHENTER_EVENT
 */

n(function(a, e){
  a.addEventListener('touchenter', e)
})

/**
 * LISTEN_TO_TOUCHLEAVE_EVENT
 */

n(function(a, e){
  a.addEventListener('touchleave', e)
})

/**
 * LISTEN_TO_UNDERFLOW_EVENT
 */

n(function(a, e){
  a.addEventListener('underflow', e)
})

/**
 * LISTEN_TO_UPLOADPROGRESS_EVENT
 */

n(function(a, e){
  a.addEventListener('uploadprogress', e)
})

/**
 * LISTEN_TO_USSDRECEIVED_EVENT
 */

n(function(a, e){
  a.addEventListener('ussdreceived', e)
})

/**
 * LISTEN_TO_VOICECHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('voicechange', e)
})

/**
 * LISTEN_TO_MSCONTENTZOOM_EVENT
 */

n(function(a, e){
  a.addEventListener('msContentZoom', e)
})

/**
 * LISTEN_TO_MS_MANIPULATION_STATE_CHANGED_EVENT
 */

n(function(a, e){
  a.addEventListener('MSManipulationStateChanged', e)
})

/**
 * LISTEN_TO_MS_POINTER_HOVER_EVENT
 */

n(function(a, e){
  a.addEventListener('MSPointerHover', e)
})

/**
 * LISTEN_TO_BROADCAST_EVENT
 */

n(function(a, e){
  a.addEventListener('broadcast', e)
})

/**
 * LISTEN_TO_CHECKBOX_STATE_CHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('CheckboxStateChange', e)
})

/**
 * LISTEN_TO_COMMAND_EVENT
 */

n(function(a, e){
  a.addEventListener('command', e)
})

/**
 * LISTEN_TO_COMMANDUPDATE_EVENT
 */

n(function(a, e){
  a.addEventListener('commandupdate', e)
})

/**
 * LISTEN_TO_DOM_MENU_ITEM_ACTIVE_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMMenuItemActive', e)
})

/**
 * LISTEN_TO_DOM_MENU_ITEM_INACTIVE_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMMenuItemInactive', e)
})

/**
 * LISTEN_TO_POPUPHIDDEN_EVENT
 */

n(function(a, e){
  a.addEventListener('popuphidden', e)
})

/**
 * LISTEN_TO_POPUPHIDING_EVENT
 */

n(function(a, e){
  a.addEventListener('popuphiding', e)
})

/**
 * LISTEN_TO_POPUPSHOWING_EVENT
 */

n(function(a, e){
  a.addEventListener('popupshowing', e)
})

/**
 * LISTEN_TO_POPUPSHOWN_EVENT
 */

n(function(a, e){
  a.addEventListener('popupshown', e)
})

/**
 * LISTEN_TO_RADIO_STATE_CHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('RadioStateChange', e)
})

/**
 * LISTEN_TO_VALUE_CHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('ValueChange', e)
})

/**
 * LISTEN_TO_DOM_POPUP_BLOCKED_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMPopupBlocked', e)
})

/**
 * LISTEN_TO_DOM_WINDOW_CREATED_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMWindowCreated', e)
})

/**
 * LISTEN_TO_DOM_WINDOW_CLOSE_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMWindowClose', e)
})

/**
 * LISTEN_TO_DOM_TITLE_CHANGED_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMTitleChanged', e)
})

/**
 * LISTEN_TO_DOM_LINK_ADDED_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMLinkAdded', e)
})

/**
 * LISTEN_TO_DOM_LINK_REMOVED_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMLinkRemoved', e)
})

/**
 * LISTEN_TO_DOM_META_ADDED_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMMetaAdded', e)
})

/**
 * LISTEN_TO_DOM_META_REMOVED_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMMetaRemoved', e)
})

/**
 * LISTEN_TO_DOM_WILL_OPEN_MODAL_DIALOG_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMWillOpenModalDialog', e)
})

/**
 * LISTEN_TO_DOM_MODAL_DIALOG_CLOSED_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMModalDialogClosed', e)
})

/**
 * LISTEN_TO_DOM_AUTO_COMPLETE_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMAutoComplete', e)
})

/**
 * LISTEN_TO_DOM_FRAME_CONTENT_LOADED_EVENT
 */

n(function(a, e){
  a.addEventListener('DOMFrameContentLoaded', e)
})

/**
 * LISTEN_TO_ALERT_ACTIVE_EVENT
 */

n(function(a, e){
  a.addEventListener('AlertActive', e)
})

/**
 * LISTEN_TO_ALERT_CLOSE_EVENT
 */

n(function(a, e){
  a.addEventListener('AlertClose', e)
})

/**
 * LISTEN_TO_FULLSCREEN_EVENT
 */

n(function(a, e){
  a.addEventListener('fullscreen', e)
})

/**
 * LISTEN_TO_SIZEMODECHANGE_EVENT
 */

n(function(a, e){
  a.addEventListener('sizemodechange', e)
})

/**
 * LISTEN_TO_SS_WINDOW_CLOSING_EVENT
 */

n(function(a, e){
  a.addEventListener('SSWindowClosing', e)
})

/**
 * LISTEN_TO_SS_TAB_CLOSING_EVENT
 */

n(function(a, e){
  a.addEventListener('SSTabClosing', e)
})

/**
 * LISTEN_TO_SS_TAB_RESTORING_EVENT
 */

n(function(a, e){
  a.addEventListener('SSTabRestoring', e)
})

/**
 * LISTEN_TO_SS_TAB_RESTORED_EVENT
 */

n(function(a, e){
  a.addEventListener('SSTabRestored', e)
})

/**
 * LISTEN_TO_SS_WINDOW_STATE_READY_EVENT
 */

n(function(a, e){
  a.addEventListener('SSWindowStateReady', e)
})

/**
 * LISTEN_TO_SS_WINDOW_STATE_BUSY_EVENT
 */

n(function(a, e){
  a.addEventListener('SSWindowStateBusy', e)
})

/**
 * LISTEN_TO_TAB_OPEN_EVENT
 */

n(function(a, e){
  a.addEventListener('TabOpen', e)
})

/**
 * LISTEN_TO_TAB_CLOSE_EVENT
 */

n(function(a, e){
  a.addEventListener('TabClose', e)
})

/**
 * LISTEN_TO_TAB_SELECT_EVENT
 */

n(function(a, e){
  a.addEventListener('TabSelect', e)
})

/**
 * LISTEN_TO_TAB_SHOW_EVENT
 */

n(function(a, e){
  a.addEventListener('TabShow', e)
})

/**
 * LISTEN_TO_TAB_HIDE_EVENT
 */

n(function(a, e){
  a.addEventListener('TabHide', e)
})

/**
 * LISTEN_TO_TAB_PINNED_EVENT
 */

n(function(a, e){
  a.addEventListener('TabPinned', e)
})

/**
 * LISTEN_TO_TAB_UNPINNED_EVENT
 */

n(function(a, e){
  a.addEventListener('TabUnpinned', e)
})

/**
 * LISTEN_TO_CSS_RULE_VIEW_REFRESHED_EVENT
 */

n(function(a, e){
  a.addEventListener('CssRuleViewRefreshed', e)
})

/**
 * LISTEN_TO_CSS_RULE_VIEW_CHANGED_EVENT
 */

n(function(a, e){
  a.addEventListener('CssRuleViewChanged', e)
})

/**
 * LISTEN_TO_CSS_RULE_VIEW_CSS_LINK_CLICKED_EVENT
 */

n(function(a, e){
  a.addEventListener('CssRuleViewCSSLinkClicked', e)
})

/**
 * SET_DOM_ELEMENT_ACCEPT
 */

n(function(a, e){
  a.setAttribute('accept', e)
})

/**
 * SET_DOM_ELEMENT_ACCEPT_CHARSET
 */

n(function(a, e){
  a.setAttribute('accept-charset', e)
})

/**
 * SET_DOM_ELEMENT_ACCESSKEY
 */

n(function(a, e){
  a.setAttribute('accesskey', e)
})

/**
 * SET_DOM_ELEMENT_ACTION
 */

n(function(a, e){
  a.setAttribute('action', e)
})

/**
 * SET_DOM_ELEMENT_ALIGN
 */

n(function(a, e){
  a.setAttribute('align', e)
})

/**
 * SET_DOM_ELEMENT_ALLOW
 */

n(function(a, e){
  a.setAttribute('allow', e)
})

/**
 * SET_DOM_ELEMENT_ALT
 */

n(function(a, e){
  a.setAttribute('alt', e)
})

/**
 * SET_DOM_ELEMENT_ASYNC
 */

n(function(a, e){
  a.setAttribute('async', e)
})

/**
 * SET_DOM_ELEMENT_AUTOCAPITALIZE
 */

n(function(a, e){
  a.setAttribute('autocapitalize', e)
})

/**
 * SET_DOM_ELEMENT_AUTOCOMPLETE
 */

n(function(a, e){
  a.setAttribute('autocomplete', e)
})

/**
 * SET_DOM_ELEMENT_AUTOFOCUS
 */

n(function(a, e){
  a.setAttribute('autofocus', e)
})

/**
 * SET_DOM_ELEMENT_AUTOPLAY
 */

n(function(a, e){
  a.setAttribute('autoplay', e)
})

/**
 * SET_DOM_ELEMENT_BACKGROUND
 */

n(function(a, e){
  a.setAttribute('background', e)
})

/**
 * SET_DOM_ELEMENT_BGCOLOR
 */

n(function(a, e){
  a.setAttribute('bgcolor', e)
})

/**
 * SET_DOM_ELEMENT_BORDER
 */

n(function(a, e){
  a.setAttribute('border', e)
})

/**
 * SET_DOM_ELEMENT_BUFFERED
 */

n(function(a, e){
  a.setAttribute('buffered', e)
})

/**
 * SET_DOM_ELEMENT_CHALLENGE
 */

n(function(a, e){
  a.setAttribute('challenge', e)
})

/**
 * SET_DOM_ELEMENT_CHARSET
 */

n(function(a, e){
  a.setAttribute('charset', e)
})

/**
 * SET_DOM_ELEMENT_CHECKED
 */

n(function(a, e){
  a.setAttribute('checked', e)
})

/**
 * SET_DOM_ELEMENT_CITE
 */

n(function(a, e){
  a.setAttribute('cite', e)
})

/**
 * SET_DOM_ELEMENT_CLASS
 */

n(function(a, e){
  a.setAttribute('class', e)
})

/**
 * SET_DOM_ELEMENT_CODE
 */

n(function(a, e){
  a.setAttribute('code', e)
})

/**
 * SET_DOM_ELEMENT_CODEBASE
 */

n(function(a, e){
  a.setAttribute('codebase', e)
})

/**
 * SET_DOM_ELEMENT_COLOR
 */

n(function(a, e){
  a.setAttribute('color', e)
})

/**
 * SET_DOM_ELEMENT_COLS
 */

n(function(a, e){
  a.setAttribute('cols', e)
})

/**
 * SET_DOM_ELEMENT_COLSPAN
 */

n(function(a, e){
  a.setAttribute('colspan', e)
})

/**
 * SET_DOM_ELEMENT_CONTENT
 */

n(function(a, e){
  a.setAttribute('content', e)
})

/**
 * SET_DOM_ELEMENT_CONTENTEDITABLE
 */

n(function(a, e){
  a.setAttribute('contenteditable', e)
})

/**
 * SET_DOM_ELEMENT_CONTEXTMENU
 */

n(function(a, e){
  a.setAttribute('contextmenu', e)
})

/**
 * SET_DOM_ELEMENT_CONTROLS
 */

n(function(a, e){
  a.setAttribute('controls', e)
})

/**
 * SET_DOM_ELEMENT_COORDS
 */

n(function(a, e){
  a.setAttribute('coords', e)
})

/**
 * SET_DOM_ELEMENT_CROSSORIGIN
 */

n(function(a, e){
  a.setAttribute('crossorigin', e)
})

/**
 * SET_DOM_ELEMENT_CSP
 */

n(function(a, e){
  a.setAttribute('csp', e)
})

/**
 * SET_DOM_ELEMENT_DATA
 */

n(function(a, e){
  a.setAttribute('data', e)
})

/**
 * SET_DOM_ELEMENT_DATETIME
 */

n(function(a, e){
  a.setAttribute('datetime', e)
})

/**
 * SET_DOM_ELEMENT_DECODING
 */

n(function(a, e){
  a.setAttribute('decoding', e)
})

/**
 * SET_DOM_ELEMENT_DEFAULT
 */

n(function(a, e){
  a.setAttribute('default', e)
})

/**
 * SET_DOM_ELEMENT_DEFER
 */

n(function(a, e){
  a.setAttribute('defer', e)
})

/**
 * SET_DOM_ELEMENT_DIR
 */

n(function(a, e){
  a.setAttribute('dir', e)
})

/**
 * SET_DOM_ELEMENT_DIRNAME
 */

n(function(a, e){
  a.setAttribute('dirname', e)
})

/**
 * SET_DOM_ELEMENT_DISABLED
 */

n(function(a, e){
  a.setAttribute('disabled', e)
})

/**
 * SET_DOM_ELEMENT_DOWNLOAD
 */

n(function(a, e){
  a.setAttribute('download', e)
})

/**
 * SET_DOM_ELEMENT_DRAGGABLE
 */

n(function(a, e){
  a.setAttribute('draggable', e)
})

/**
 * SET_DOM_ELEMENT_DROPZONE
 */

n(function(a, e){
  a.setAttribute('dropzone', e)
})

/**
 * SET_DOM_ELEMENT_ENCTYPE
 */

n(function(a, e){
  a.setAttribute('enctype', e)
})

/**
 * SET_DOM_ELEMENT_ENTERKEYHINT
 */

n(function(a, e){
  a.setAttribute('enterkeyhint', e)
})

/**
 * SET_DOM_ELEMENT_FOR
 */

n(function(a, e){
  a.setAttribute('for', e)
})

/**
 * SET_DOM_ELEMENT_FORM
 */

n(function(a, e){
  a.setAttribute('form', e)
})

/**
 * SET_DOM_ELEMENT_FORMACTION
 */

n(function(a, e){
  a.setAttribute('formaction', e)
})

/**
 * SET_DOM_ELEMENT_FORMENCTYPE
 */

n(function(a, e){
  a.setAttribute('formenctype', e)
})

/**
 * SET_DOM_ELEMENT_FORMMETHOD
 */

n(function(a, e){
  a.setAttribute('formmethod', e)
})

/**
 * SET_DOM_ELEMENT_FORMNOVALIDATE
 */

n(function(a, e){
  a.setAttribute('formnovalidate', e)
})

/**
 * SET_DOM_ELEMENT_FORMTARGET
 */

n(function(a, e){
  a.setAttribute('formtarget', e)
})

/**
 * SET_DOM_ELEMENT_HEADERS
 */

n(function(a, e){
  a.setAttribute('headers', e)
})

/**
 * SET_DOM_ELEMENT_HEIGHT
 */

n(function(a, e){
  a.setAttribute('height', e)
})

/**
 * SET_DOM_ELEMENT_HIDDEN
 */

n(function(a, e){
  a.setAttribute('hidden', e)
})

/**
 * SET_DOM_ELEMENT_HIGH
 */

n(function(a, e){
  a.setAttribute('high', e)
})

/**
 * SET_DOM_ELEMENT_HREF
 */

n(function(a, e){
  a.setAttribute('href', e)
})

/**
 * SET_DOM_ELEMENT_HREFLANG
 */

n(function(a, e){
  a.setAttribute('hreflang', e)
})

/**
 * SET_DOM_ELEMENT_HTTP_EQUIV
 */

n(function(a, e){
  a.setAttribute('http-equiv', e)
})

/**
 * SET_DOM_ELEMENT_ICON
 */

n(function(a, e){
  a.setAttribute('icon', e)
})

/**
 * SET_DOM_ELEMENT_ID
 */

n(function(a, e){
  a.setAttribute('id', e)
})

/**
 * SET_DOM_ELEMENT_IMPORTANCE
 */

n(function(a, e){
  a.setAttribute('importance', e)
})

/**
 * SET_DOM_ELEMENT_INTEGRITY
 */

n(function(a, e){
  a.setAttribute('integrity', e)
})

/**
 * SET_DOM_ELEMENT_INTRINSICSIZE
 */

n(function(a, e){
  a.setAttribute('intrinsicsize', e)
})

/**
 * SET_DOM_ELEMENT_INPUTMODE
 */

n(function(a, e){
  a.setAttribute('inputmode', e)
})

/**
 * SET_DOM_ELEMENT_ISMAP
 */

n(function(a, e){
  a.setAttribute('ismap', e)
})

/**
 * SET_DOM_ELEMENT_ITEMPROP
 */

n(function(a, e){
  a.setAttribute('itemprop', e)
})

/**
 * SET_DOM_ELEMENT_KEYTYPE
 */

n(function(a, e){
  a.setAttribute('keytype', e)
})

/**
 * SET_DOM_ELEMENT_KIND
 */

n(function(a, e){
  a.setAttribute('kind', e)
})

/**
 * SET_DOM_ELEMENT_LABEL
 */

n(function(a, e){
  a.setAttribute('label', e)
})

/**
 * SET_DOM_ELEMENT_LANG
 */

n(function(a, e){
  a.setAttribute('lang', e)
})

/**
 * SET_DOM_ELEMENT_LANGUAGE
 */

n(function(a, e){
  a.setAttribute('language', e)
})

/**
 * SET_DOM_ELEMENT_LOADING
 */

n(function(a, e){
  a.setAttribute('loading', e)
})

/**
 * SET_DOM_ELEMENT_LIST
 */

n(function(a, e){
  a.setAttribute('list', e)
})

/**
 * SET_DOM_ELEMENT_LOOP
 */

n(function(a, e){
  a.setAttribute('loop', e)
})

/**
 * SET_DOM_ELEMENT_LOW
 */

n(function(a, e){
  a.setAttribute('low', e)
})

/**
 * SET_DOM_ELEMENT_MANIFEST
 */

n(function(a, e){
  a.setAttribute('manifest', e)
})

/**
 * SET_DOM_ELEMENT_MAX
 */

n(function(a, e){
  a.setAttribute('max', e)
})

/**
 * SET_DOM_ELEMENT_MAXLENGTH
 */

n(function(a, e){
  a.setAttribute('maxlength', e)
})

/**
 * SET_DOM_ELEMENT_MINLENGTH
 */

n(function(a, e){
  a.setAttribute('minlength', e)
})

/**
 * SET_DOM_ELEMENT_MEDIA
 */

n(function(a, e){
  a.setAttribute('media', e)
})

/**
 * SET_DOM_ELEMENT_METHOD
 */

n(function(a, e){
  a.setAttribute('method', e)
})

/**
 * SET_DOM_ELEMENT_MIN
 */

n(function(a, e){
  a.setAttribute('min', e)
})

/**
 * SET_DOM_ELEMENT_MULTIPLE
 */

n(function(a, e){
  a.setAttribute('multiple', e)
})

/**
 * SET_DOM_ELEMENT_MUTED
 */

n(function(a, e){
  a.setAttribute('muted', e)
})

/**
 * SET_DOM_ELEMENT_NAME
 */

n(function(a, e){
  a.setAttribute('name', e)
})

/**
 * SET_DOM_ELEMENT_NOVALIDATE
 */

n(function(a, e){
  a.setAttribute('novalidate', e)
})

/**
 * SET_DOM_ELEMENT_OPEN
 */

n(function(a, e){
  a.setAttribute('open', e)
})

/**
 * SET_DOM_ELEMENT_OPTIMUM
 */

n(function(a, e){
  a.setAttribute('optimum', e)
})

/**
 * SET_DOM_ELEMENT_PATTERN
 */

n(function(a, e){
  a.setAttribute('pattern', e)
})

/**
 * SET_DOM_ELEMENT_PING
 */

n(function(a, e){
  a.setAttribute('ping', e)
})

/**
 * SET_DOM_ELEMENT_PLACEHOLDER
 */

n(function(a, e){
  a.setAttribute('placeholder', e)
})

/**
 * SET_DOM_ELEMENT_POSTER
 */

n(function(a, e){
  a.setAttribute('poster', e)
})

/**
 * SET_DOM_ELEMENT_PRELOAD
 */

n(function(a, e){
  a.setAttribute('preload', e)
})

/**
 * SET_DOM_ELEMENT_RADIOGROUP
 */

n(function(a, e){
  a.setAttribute('radiogroup', e)
})

/**
 * SET_DOM_ELEMENT_READONLY
 */

n(function(a, e){
  a.setAttribute('readonly', e)
})

/**
 * SET_DOM_ELEMENT_REFERRERPOLICY
 */

n(function(a, e){
  a.setAttribute('referrerpolicy', e)
})

/**
 * SET_DOM_ELEMENT_REL
 */

n(function(a, e){
  a.setAttribute('rel', e)
})

/**
 * SET_DOM_ELEMENT_REQUIRED
 */

n(function(a, e){
  a.setAttribute('required', e)
})

/**
 * SET_DOM_ELEMENT_REVERSED
 */

n(function(a, e){
  a.setAttribute('reversed', e)
})

/**
 * SET_DOM_ELEMENT_ROWS
 */

n(function(a, e){
  a.setAttribute('rows', e)
})

/**
 * SET_DOM_ELEMENT_ROWSPAN
 */

n(function(a, e){
  a.setAttribute('rowspan', e)
})

/**
 * SET_DOM_ELEMENT_SANDBOX
 */

n(function(a, e){
  a.setAttribute('sandbox', e)
})

/**
 * SET_DOM_ELEMENT_SCOPE
 */

n(function(a, e){
  a.setAttribute('scope', e)
})

/**
 * SET_DOM_ELEMENT_SCOPED
 */

n(function(a, e){
  a.setAttribute('scoped', e)
})

/**
 * SET_DOM_ELEMENT_SELECTED
 */

n(function(a, e){
  a.setAttribute('selected', e)
})

/**
 * SET_DOM_ELEMENT_SHAPE
 */

n(function(a, e){
  a.setAttribute('shape', e)
})

/**
 * SET_DOM_ELEMENT_SIZE
 */

n(function(a, e){
  a.setAttribute('size', e)
})

/**
 * SET_DOM_ELEMENT_SIZES
 */

n(function(a, e){
  a.setAttribute('sizes', e)
})

/**
 * SET_DOM_ELEMENT_SLOT
 */

n(function(a, e){
  a.setAttribute('slot', e)
})

/**
 * SET_DOM_ELEMENT_SPAN
 */

n(function(a, e){
  a.setAttribute('span', e)
})

/**
 * SET_DOM_ELEMENT_SPELLCHECK
 */

n(function(a, e){
  a.setAttribute('spellcheck', e)
})

/**
 * SET_DOM_ELEMENT_SRC
 */

n(function(a, e){
  a.setAttribute('src', e)
})

/**
 * SET_DOM_ELEMENT_SRCDOC
 */

n(function(a, e){
  a.setAttribute('srcdoc', e)
})

/**
 * SET_DOM_ELEMENT_SRCLANG
 */

n(function(a, e){
  a.setAttribute('srclang', e)
})

/**
 * SET_DOM_ELEMENT_SRCSET
 */

n(function(a, e){
  a.setAttribute('srcset', e)
})

/**
 * SET_DOM_ELEMENT_START
 */

n(function(a, e){
  a.setAttribute('start', e)
})

/**
 * SET_DOM_ELEMENT_STEP
 */

n(function(a, e){
  a.setAttribute('step', e)
})

/**
 * SET_DOM_ELEMENT_STYLE
 */

n(function(a, e){
  a.setAttribute('style', e)
})

/**
 * SET_DOM_ELEMENT_SUMMARY
 */

n(function(a, e){
  a.setAttribute('summary', e)
})

/**
 * SET_DOM_ELEMENT_TABINDEX
 */

n(function(a, e){
  a.setAttribute('tabindex', e)
})

/**
 * SET_DOM_ELEMENT_TARGET
 */

n(function(a, e){
  a.setAttribute('target', e)
})

/**
 * SET_DOM_ELEMENT_TITLE
 */

n(function(a, e){
  a.setAttribute('title', e)
})

/**
 * SET_DOM_ELEMENT_TRANSLATE
 */

n(function(a, e){
  a.setAttribute('translate', e)
})

/**
 * SET_DOM_ELEMENT_TYPE
 */

n(function(a, e){
  a.setAttribute('type', e)
})

/**
 * SET_DOM_ELEMENT_USEMAP
 */

n(function(a, e){
  a.setAttribute('usemap', e)
})

/**
 * SET_DOM_ELEMENT_VALUE
 */

n(function(a, e){
  a.setAttribute('value', e)
})

/**
 * SET_DOM_ELEMENT_WIDTH
 */

n(function(a, e){
  a.setAttribute('width', e)
})

/**
 * SET_DOM_ELEMENT_WRAP
 */

n(function(a, e){
  a.setAttribute('wrap', e)
})

/**
 * REMOVE_DOM_ELEMENT_ACCEPT_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('accept')
})

/**
 * REMOVE_DOM_ELEMENT_ACCESSKEY_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('accesskey')
})

/**
 * REMOVE_DOM_ELEMENT_ACTION_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('action')
})

/**
 * REMOVE_DOM_ELEMENT_ALIGN_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('align')
})

/**
 * REMOVE_DOM_ELEMENT_ALLOW_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('allow')
})

/**
 * REMOVE_DOM_ELEMENT_ALT_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('alt')
})

/**
 * REMOVE_DOM_ELEMENT_ASYNC_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('async')
})

/**
 * REMOVE_DOM_ELEMENT_AUTOCAPITALIZE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('autocapitalize')
})

/**
 * REMOVE_DOM_ELEMENT_AUTOCOMPLETE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('autocomplete')
})

/**
 * REMOVE_DOM_ELEMENT_AUTOFOCUS_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('autofocus')
})

/**
 * REMOVE_DOM_ELEMENT_AUTOPLAY_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('autoplay')
})

/**
 * REMOVE_DOM_ELEMENT_BACKGROUND_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('background')
})

/**
 * REMOVE_DOM_ELEMENT_BGCOLOR_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('bgcolor')
})

/**
 * REMOVE_DOM_ELEMENT_BORDER_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('border')
})

/**
 * REMOVE_DOM_ELEMENT_BUFFERED_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('buffered')
})

/**
 * REMOVE_DOM_ELEMENT_CHALLENGE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('challenge')
})

/**
 * REMOVE_DOM_ELEMENT_CHARSET_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('charset')
})

/**
 * REMOVE_DOM_ELEMENT_CHECKED_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('checked')
})

/**
 * REMOVE_DOM_ELEMENT_CITE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('cite')
})

/**
 * REMOVE_DOM_ELEMENT_CLASS_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('class')
})

/**
 * REMOVE_DOM_ELEMENT_CODE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('code')
})

/**
 * REMOVE_DOM_ELEMENT_CODEBASE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('codebase')
})

/**
 * REMOVE_DOM_ELEMENT_COLOR_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('color')
})

/**
 * REMOVE_DOM_ELEMENT_COLS_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('cols')
})

/**
 * REMOVE_DOM_ELEMENT_COLSPAN_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('colspan')
})

/**
 * REMOVE_DOM_ELEMENT_CONTENT_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('content')
})

/**
 * REMOVE_DOM_ELEMENT_CONTENTEDITABLE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('contenteditable')
})

/**
 * REMOVE_DOM_ELEMENT_CONTEXTMENU_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('contextmenu')
})

/**
 * REMOVE_DOM_ELEMENT_CONTROLS_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('controls')
})

/**
 * REMOVE_DOM_ELEMENT_COORDS_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('coords')
})

/**
 * REMOVE_DOM_ELEMENT_CROSSORIGIN_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('crossorigin')
})

/**
 * REMOVE_DOM_ELEMENT_CSP_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('csp')
})

/**
 * REMOVE_DOM_ELEMENT_DATA_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('data')
})

/**
 * REMOVE_DOM_ELEMENT_DATETIME_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('datetime')
})

/**
 * REMOVE_DOM_ELEMENT_DECODING_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('decoding')
})

/**
 * REMOVE_DOM_ELEMENT_DEFAULT_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('default')
})

/**
 * REMOVE_DOM_ELEMENT_DEFER_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('defer')
})

/**
 * REMOVE_DOM_ELEMENT_DIR_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('dir')
})

/**
 * REMOVE_DOM_ELEMENT_DIRNAME_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('dirname')
})

/**
 * REMOVE_DOM_ELEMENT_DISABLED_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('disabled')
})

/**
 * REMOVE_DOM_ELEMENT_DOWNLOAD_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('download')
})

/**
 * REMOVE_DOM_ELEMENT_DRAGGABLE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('draggable')
})

/**
 * REMOVE_DOM_ELEMENT_DROPZONE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('dropzone')
})

/**
 * REMOVE_DOM_ELEMENT_ENCTYPE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('enctype')
})

/**
 * REMOVE_DOM_ELEMENT_ENTERKEYHINT_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('enterkeyhint')
})

/**
 * REMOVE_DOM_ELEMENT_FOR_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('for')
})

/**
 * REMOVE_DOM_ELEMENT_FORM_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('form')
})

/**
 * REMOVE_DOM_ELEMENT_FORMACTION_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('formaction')
})

/**
 * REMOVE_DOM_ELEMENT_FORMENCTYPE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('formenctype')
})

/**
 * REMOVE_DOM_ELEMENT_FORMMETHOD_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('formmethod')
})

/**
 * REMOVE_DOM_ELEMENT_FORMNOVALIDATE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('formnovalidate')
})

/**
 * REMOVE_DOM_ELEMENT_FORMTARGET_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('formtarget')
})

/**
 * REMOVE_DOM_ELEMENT_HEADERS_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('headers')
})

/**
 * REMOVE_DOM_ELEMENT_HEIGHT_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('height')
})

/**
 * REMOVE_DOM_ELEMENT_HIDDEN_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('hidden')
})

/**
 * REMOVE_DOM_ELEMENT_HIGH_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('high')
})

/**
 * REMOVE_DOM_ELEMENT_HREF_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('href')
})

/**
 * REMOVE_DOM_ELEMENT_HREFLANG_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('hreflang')
})

/**
 * REMOVE_DOM_ELEMENT_ICON_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('icon')
})

/**
 * REMOVE_DOM_ELEMENT_ID_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('id')
})

/**
 * REMOVE_DOM_ELEMENT_IMPORTANCE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('importance')
})

/**
 * REMOVE_DOM_ELEMENT_INTEGRITY_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('integrity')
})

/**
 * REMOVE_DOM_ELEMENT_INTRINSICSIZE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('intrinsicsize')
})

/**
 * REMOVE_DOM_ELEMENT_INPUTMODE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('inputmode')
})

/**
 * REMOVE_DOM_ELEMENT_ISMAP_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('ismap')
})

/**
 * REMOVE_DOM_ELEMENT_ITEMPROP_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('itemprop')
})

/**
 * REMOVE_DOM_ELEMENT_KEYTYPE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('keytype')
})

/**
 * REMOVE_DOM_ELEMENT_KIND_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('kind')
})

/**
 * REMOVE_DOM_ELEMENT_LABEL_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('label')
})

/**
 * REMOVE_DOM_ELEMENT_LANG_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('lang')
})

/**
 * REMOVE_DOM_ELEMENT_LANGUAGE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('language')
})

/**
 * REMOVE_DOM_ELEMENT_LOADING_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('loading')
})

/**
 * REMOVE_DOM_ELEMENT_LIST_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('list')
})

/**
 * REMOVE_DOM_ELEMENT_LOOP_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('loop')
})

/**
 * REMOVE_DOM_ELEMENT_LOW_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('low')
})

/**
 * REMOVE_DOM_ELEMENT_MANIFEST_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('manifest')
})

/**
 * REMOVE_DOM_ELEMENT_MAX_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('max')
})

/**
 * REMOVE_DOM_ELEMENT_MAXLENGTH_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('maxlength')
})

/**
 * REMOVE_DOM_ELEMENT_MINLENGTH_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('minlength')
})

/**
 * REMOVE_DOM_ELEMENT_MEDIA_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('media')
})

/**
 * REMOVE_DOM_ELEMENT_METHOD_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('method')
})

/**
 * REMOVE_DOM_ELEMENT_MIN_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('min')
})

/**
 * REMOVE_DOM_ELEMENT_MULTIPLE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('multiple')
})

/**
 * REMOVE_DOM_ELEMENT_MUTED_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('muted')
})

/**
 * REMOVE_DOM_ELEMENT_NAME_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('name')
})

/**
 * REMOVE_DOM_ELEMENT_NOVALIDATE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('novalidate')
})

/**
 * REMOVE_DOM_ELEMENT_OPEN_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('open')
})

/**
 * REMOVE_DOM_ELEMENT_OPTIMUM_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('optimum')
})

/**
 * REMOVE_DOM_ELEMENT_PATTERN_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('pattern')
})

/**
 * REMOVE_DOM_ELEMENT_PING_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('ping')
})

/**
 * REMOVE_DOM_ELEMENT_PLACEHOLDER_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('placeholder')
})

/**
 * REMOVE_DOM_ELEMENT_POSTER_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('poster')
})

/**
 * REMOVE_DOM_ELEMENT_PRELOAD_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('preload')
})

/**
 * REMOVE_DOM_ELEMENT_RADIOGROUP_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('radiogroup')
})

/**
 * REMOVE_DOM_ELEMENT_READONLY_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('readonly')
})

/**
 * REMOVE_DOM_ELEMENT_REFERRERPOLICY_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('referrerpolicy')
})

/**
 * REMOVE_DOM_ELEMENT_REL_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('rel')
})

/**
 * REMOVE_DOM_ELEMENT_REQUIRED_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('required')
})

/**
 * REMOVE_DOM_ELEMENT_REVERSED_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('reversed')
})

/**
 * REMOVE_DOM_ELEMENT_ROWS_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('rows')
})

/**
 * REMOVE_DOM_ELEMENT_ROWSPAN_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('rowspan')
})

/**
 * REMOVE_DOM_ELEMENT_SANDBOX_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('sandbox')
})

/**
 * REMOVE_DOM_ELEMENT_SCOPE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('scope')
})

/**
 * REMOVE_DOM_ELEMENT_SCOPED_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('scoped')
})

/**
 * REMOVE_DOM_ELEMENT_SELECTED_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('selected')
})

/**
 * REMOVE_DOM_ELEMENT_SHAPE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('shape')
})

/**
 * REMOVE_DOM_ELEMENT_SIZE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('size')
})

/**
 * REMOVE_DOM_ELEMENT_SIZES_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('sizes')
})

/**
 * REMOVE_DOM_ELEMENT_SLOT_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('slot')
})

/**
 * REMOVE_DOM_ELEMENT_SPAN_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('span')
})

/**
 * REMOVE_DOM_ELEMENT_SPELLCHECK_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('spellcheck')
})

/**
 * REMOVE_DOM_ELEMENT_SRC_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('src')
})

/**
 * REMOVE_DOM_ELEMENT_SRCDOC_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('srcdoc')
})

/**
 * REMOVE_DOM_ELEMENT_SRCLANG_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('srclang')
})

/**
 * REMOVE_DOM_ELEMENT_SRCSET_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('srcset')
})

/**
 * REMOVE_DOM_ELEMENT_START_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('start')
})

/**
 * REMOVE_DOM_ELEMENT_STEP_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('step')
})

/**
 * REMOVE_DOM_ELEMENT_STYLE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('style')
})

/**
 * REMOVE_DOM_ELEMENT_SUMMARY_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('summary')
})

/**
 * REMOVE_DOM_ELEMENT_TABINDEX_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('tabindex')
})

/**
 * REMOVE_DOM_ELEMENT_TARGET_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('target')
})

/**
 * REMOVE_DOM_ELEMENT_TITLE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('title')
})

/**
 * REMOVE_DOM_ELEMENT_TRANSLATE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('translate')
})

/**
 * REMOVE_DOM_ELEMENT_TYPE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('type')
})

/**
 * REMOVE_DOM_ELEMENT_USEMAP_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('usemap')
})

/**
 * REMOVE_DOM_ELEMENT_VALUE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('value')
})

/**
 * REMOVE_DOM_ELEMENT_WIDTH_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('width')
})

/**
 * REMOVE_DOM_ELEMENT_WRAP_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('wrap')
})

/**
 * GET_DOM_ELEMENT_ACCEPT_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('accept')
})

/**
 * GET_DOM_ELEMENT_ACCESSKEY_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('accesskey')
})

/**
 * GET_DOM_ELEMENT_ACTION_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('action')
})

/**
 * GET_DOM_ELEMENT_ALIGN_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('align')
})

/**
 * GET_DOM_ELEMENT_ALLOW_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('allow')
})

/**
 * GET_DOM_ELEMENT_ALT_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('alt')
})

/**
 * GET_DOM_ELEMENT_ASYNC_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('async')
})

/**
 * GET_DOM_ELEMENT_AUTOCAPITALIZE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('autocapitalize')
})

/**
 * GET_DOM_ELEMENT_AUTOCOMPLETE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('autocomplete')
})

/**
 * GET_DOM_ELEMENT_AUTOFOCUS_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('autofocus')
})

/**
 * GET_DOM_ELEMENT_AUTOPLAY_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('autoplay')
})

/**
 * GET_DOM_ELEMENT_BACKGROUND_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('background')
})

/**
 * GET_DOM_ELEMENT_BGCOLOR_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('bgcolor')
})

/**
 * GET_DOM_ELEMENT_BORDER_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('border')
})

/**
 * GET_DOM_ELEMENT_BUFFERED_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('buffered')
})

/**
 * GET_DOM_ELEMENT_CHALLENGE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('challenge')
})

/**
 * GET_DOM_ELEMENT_CHARSET_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('charset')
})

/**
 * GET_DOM_ELEMENT_CHECKED_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('checked')
})

/**
 * GET_DOM_ELEMENT_CITE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('cite')
})

/**
 * GET_DOM_ELEMENT_CLASS_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('class')
})

/**
 * GET_DOM_ELEMENT_CODE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('code')
})

/**
 * GET_DOM_ELEMENT_CODEBASE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('codebase')
})

/**
 * GET_DOM_ELEMENT_COLOR_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('color')
})

/**
 * GET_DOM_ELEMENT_COLS_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('cols')
})

/**
 * GET_DOM_ELEMENT_COLSPAN_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('colspan')
})

/**
 * GET_DOM_ELEMENT_CONTENT_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('content')
})

/**
 * GET_DOM_ELEMENT_CONTENTEDITABLE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('contenteditable')
})

/**
 * GET_DOM_ELEMENT_CONTEXTMENU_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('contextmenu')
})

/**
 * GET_DOM_ELEMENT_CONTROLS_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('controls')
})

/**
 * GET_DOM_ELEMENT_COORDS_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('coords')
})

/**
 * GET_DOM_ELEMENT_CROSSORIGIN_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('crossorigin')
})

/**
 * GET_DOM_ELEMENT_CSP_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('csp')
})

/**
 * GET_DOM_ELEMENT_DATA_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('data')
})

/**
 * GET_DOM_ELEMENT_DATETIME_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('datetime')
})

/**
 * GET_DOM_ELEMENT_DECODING_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('decoding')
})

/**
 * GET_DOM_ELEMENT_DEFAULT_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('default')
})

/**
 * GET_DOM_ELEMENT_DEFER_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('defer')
})

/**
 * GET_DOM_ELEMENT_DIR_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('dir')
})

/**
 * GET_DOM_ELEMENT_DIRNAME_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('dirname')
})

/**
 * GET_DOM_ELEMENT_DISABLED_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('disabled')
})

/**
 * GET_DOM_ELEMENT_DOWNLOAD_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('download')
})

/**
 * GET_DOM_ELEMENT_DRAGGABLE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('draggable')
})

/**
 * GET_DOM_ELEMENT_DROPZONE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('dropzone')
})

/**
 * GET_DOM_ELEMENT_ENCTYPE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('enctype')
})

/**
 * GET_DOM_ELEMENT_ENTERKEYHINT_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('enterkeyhint')
})

/**
 * GET_DOM_ELEMENT_FOR_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('for')
})

/**
 * GET_DOM_ELEMENT_FORM_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('form')
})

/**
 * GET_DOM_ELEMENT_FORMACTION_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('formaction')
})

/**
 * GET_DOM_ELEMENT_FORMENCTYPE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('formenctype')
})

/**
 * GET_DOM_ELEMENT_FORMMETHOD_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('formmethod')
})

/**
 * GET_DOM_ELEMENT_FORMNOVALIDATE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('formnovalidate')
})

/**
 * GET_DOM_ELEMENT_FORMTARGET_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('formtarget')
})

/**
 * GET_DOM_ELEMENT_HEADERS_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('headers')
})

/**
 * GET_DOM_ELEMENT_HEIGHT_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('height')
})

/**
 * GET_DOM_ELEMENT_HIDDEN_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('hidden')
})

/**
 * GET_DOM_ELEMENT_HIGH_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('high')
})

/**
 * GET_DOM_ELEMENT_HREF_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('href')
})

/**
 * GET_DOM_ELEMENT_HREFLANG_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('hreflang')
})

/**
 * GET_DOM_ELEMENT_ICON_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('icon')
})

/**
 * GET_DOM_ELEMENT_ID_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('id')
})

/**
 * GET_DOM_ELEMENT_IMPORTANCE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('importance')
})

/**
 * GET_DOM_ELEMENT_INTEGRITY_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('integrity')
})

/**
 * GET_DOM_ELEMENT_INTRINSICSIZE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('intrinsicsize')
})

/**
 * GET_DOM_ELEMENT_INPUTMODE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('inputmode')
})

/**
 * GET_DOM_ELEMENT_ISMAP_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('ismap')
})

/**
 * GET_DOM_ELEMENT_ITEMPROP_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('itemprop')
})

/**
 * GET_DOM_ELEMENT_KEYTYPE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('keytype')
})

/**
 * GET_DOM_ELEMENT_KIND_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('kind')
})

/**
 * GET_DOM_ELEMENT_LABEL_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('label')
})

/**
 * GET_DOM_ELEMENT_LANG_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('lang')
})

/**
 * GET_DOM_ELEMENT_LANGUAGE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('language')
})

/**
 * GET_DOM_ELEMENT_LOADING_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('loading')
})

/**
 * GET_DOM_ELEMENT_LIST_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('list')
})

/**
 * GET_DOM_ELEMENT_LOOP_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('loop')
})

/**
 * GET_DOM_ELEMENT_LOW_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('low')
})

/**
 * GET_DOM_ELEMENT_MANIFEST_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('manifest')
})

/**
 * GET_DOM_ELEMENT_MAX_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('max')
})

/**
 * GET_DOM_ELEMENT_MAXLENGTH_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('maxlength')
})

/**
 * GET_DOM_ELEMENT_MINLENGTH_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('minlength')
})

/**
 * GET_DOM_ELEMENT_MEDIA_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('media')
})

/**
 * GET_DOM_ELEMENT_METHOD_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('method')
})

/**
 * GET_DOM_ELEMENT_MIN_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('min')
})

/**
 * GET_DOM_ELEMENT_MULTIPLE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('multiple')
})

/**
 * GET_DOM_ELEMENT_MUTED_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('muted')
})

/**
 * GET_DOM_ELEMENT_NAME_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('name')
})

/**
 * GET_DOM_ELEMENT_NOVALIDATE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('novalidate')
})

/**
 * GET_DOM_ELEMENT_OPEN_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('open')
})

/**
 * GET_DOM_ELEMENT_OPTIMUM_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('optimum')
})

/**
 * GET_DOM_ELEMENT_PATTERN_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('pattern')
})

/**
 * GET_DOM_ELEMENT_PING_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('ping')
})

/**
 * GET_DOM_ELEMENT_PLACEHOLDER_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('placeholder')
})

/**
 * GET_DOM_ELEMENT_POSTER_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('poster')
})

/**
 * GET_DOM_ELEMENT_PRELOAD_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('preload')
})

/**
 * GET_DOM_ELEMENT_RADIOGROUP_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('radiogroup')
})

/**
 * GET_DOM_ELEMENT_READONLY_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('readonly')
})

/**
 * GET_DOM_ELEMENT_REFERRERPOLICY_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('referrerpolicy')
})

/**
 * GET_DOM_ELEMENT_REL_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('rel')
})

/**
 * GET_DOM_ELEMENT_REQUIRED_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('required')
})

/**
 * GET_DOM_ELEMENT_REVERSED_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('reversed')
})

/**
 * GET_DOM_ELEMENT_ROWS_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('rows')
})

/**
 * GET_DOM_ELEMENT_ROWSPAN_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('rowspan')
})

/**
 * GET_DOM_ELEMENT_SANDBOX_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('sandbox')
})

/**
 * GET_DOM_ELEMENT_SCOPE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('scope')
})

/**
 * GET_DOM_ELEMENT_SCOPED_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('scoped')
})

/**
 * GET_DOM_ELEMENT_SELECTED_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('selected')
})

/**
 * GET_DOM_ELEMENT_SHAPE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('shape')
})

/**
 * GET_DOM_ELEMENT_SIZE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('size')
})

/**
 * GET_DOM_ELEMENT_SIZES_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('sizes')
})

/**
 * GET_DOM_ELEMENT_SLOT_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('slot')
})

/**
 * GET_DOM_ELEMENT_SPAN_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('span')
})

/**
 * GET_DOM_ELEMENT_SPELLCHECK_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('spellcheck')
})

/**
 * GET_DOM_ELEMENT_SRC_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('src')
})

/**
 * GET_DOM_ELEMENT_SRCDOC_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('srcdoc')
})

/**
 * GET_DOM_ELEMENT_SRCLANG_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('srclang')
})

/**
 * GET_DOM_ELEMENT_SRCSET_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('srcset')
})

/**
 * GET_DOM_ELEMENT_START_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('start')
})

/**
 * GET_DOM_ELEMENT_STEP_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('step')
})

/**
 * GET_DOM_ELEMENT_STYLE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('style')
})

/**
 * GET_DOM_ELEMENT_SUMMARY_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('summary')
})

/**
 * GET_DOM_ELEMENT_TABINDEX_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('tabindex')
})

/**
 * GET_DOM_ELEMENT_TARGET_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('target')
})

/**
 * GET_DOM_ELEMENT_TITLE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('title')
})

/**
 * GET_DOM_ELEMENT_TRANSLATE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('translate')
})

/**
 * GET_DOM_ELEMENT_TYPE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('type')
})

/**
 * GET_DOM_ELEMENT_USEMAP_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('usemap')
})

/**
 * GET_DOM_ELEMENT_VALUE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('value')
})

/**
 * GET_DOM_ELEMENT_WIDTH_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('width')
})

/**
 * GET_DOM_ELEMENT_WRAP_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('wrap')
})

/**
 * CREATE_A_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('a')
})

/**
 * CREATE_ABBR_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('abbr')
})

/**
 * CREATE_ACRONYM_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('acronym')
})

/**
 * CREATE_ADDRESS_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('address')
})

/**
 * CREATE_APPLET_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('applet')
})

/**
 * CREATE_AREA_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('area')
})

/**
 * CREATE_ARTICLE_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('article')
})

/**
 * CREATE_ASIDE_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('aside')
})

/**
 * CREATE_AUDIO_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('audio')
})

/**
 * CREATE_B_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('b')
})

/**
 * CREATE_BASE_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('base')
})

/**
 * CREATE_BASEFONT_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('basefont')
})

/**
 * CREATE_BDI_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('bdi')
})

/**
 * CREATE_BDO_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('bdo')
})

/**
 * CREATE_BGSOUND_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('bgsound')
})

/**
 * CREATE_BIG_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('big')
})

/**
 * CREATE_BLINK_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('blink')
})

/**
 * CREATE_BLOCKQUOTE_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('blockquote')
})

/**
 * CREATE_BODY_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('body')
})

/**
 * CREATE_BR_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('br')
})

/**
 * CREATE_BUTTON_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('button')
})

/**
 * CREATE_CANVAS_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('canvas')
})

/**
 * CREATE_CAPTION_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('caption')
})

/**
 * CREATE_CENTER_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('center')
})

/**
 * CREATE_CITE_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('cite')
})

/**
 * CREATE_CODE_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('code')
})

/**
 * CREATE_COL_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('col')
})

/**
 * CREATE_COLGROUP_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('colgroup')
})

/**
 * CREATE_COMMAND_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('command')
})

/**
 * CREATE_CONTENT_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('content')
})

/**
 * CREATE_DATA_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('data')
})

/**
 * CREATE_DATALIST_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('datalist')
})

/**
 * CREATE_DD_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('dd')
})

/**
 * CREATE_DEL_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('del')
})

/**
 * CREATE_DETAILS_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('details')
})

/**
 * CREATE_DFN_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('dfn')
})

/**
 * CREATE_DIALOG_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('dialog')
})

/**
 * CREATE_DIR_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('dir')
})

/**
 * CREATE_DIV_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('div')
})

/**
 * CREATE_DL_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('dl')
})

/**
 * CREATE_DT_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('dt')
})

/**
 * CREATE_ELEMENT_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('element')
})

/**
 * CREATE_EM_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('em')
})

/**
 * CREATE_EMBED_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('embed')
})

/**
 * CREATE_FIELDSET_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('fieldset')
})

/**
 * CREATE_FIGCAPTION_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('figcaption')
})

/**
 * CREATE_FIGURE_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('figure')
})

/**
 * CREATE_FONT_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('font')
})

/**
 * CREATE_FOOTER_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('footer')
})

/**
 * CREATE_FORM_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('form')
})

/**
 * CREATE_FRAME_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('frame')
})

/**
 * CREATE_FRAMESET_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('frameset')
})

/**
 * CREATE_H1_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('h1')
})

/**
 * CREATE_HEAD_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('head')
})

/**
 * CREATE_HEADER_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('header')
})

/**
 * CREATE_HGROUP_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('hgroup')
})

/**
 * CREATE_HR_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('hr')
})

/**
 * CREATE_HTML_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('html')
})

/**
 * CREATE_I_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('i')
})

/**
 * CREATE_IFRAME_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('iframe')
})

/**
 * CREATE_IMAGE_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('image')
})

/**
 * CREATE_IMG_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('img')
})

/**
 * CREATE_INPUT_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('input')
})

/**
 * CREATE_INS_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('ins')
})

/**
 * CREATE_ISINDEX_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('isindex')
})

/**
 * CREATE_KBD_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('kbd')
})

/**
 * CREATE_KEYGEN_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('keygen')
})

/**
 * CREATE_LABEL_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('label')
})

/**
 * CREATE_LEGEND_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('legend')
})

/**
 * CREATE_LI_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('li')
})

/**
 * CREATE_LINK_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('link')
})

/**
 * CREATE_LISTING_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('listing')
})

/**
 * CREATE_MAIN_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('main')
})

/**
 * CREATE_MAP_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('map')
})

/**
 * CREATE_MARK_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('mark')
})

/**
 * CREATE_MARQUEE_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('marquee')
})

/**
 * CREATE_MENU_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('menu')
})

/**
 * CREATE_MENUITEM_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('menuitem')
})

/**
 * CREATE_META_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('meta')
})

/**
 * CREATE_METER_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('meter')
})

/**
 * CREATE_MULTICOL_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('multicol')
})

/**
 * CREATE_NAV_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('nav')
})

/**
 * CREATE_NEXTID_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('nextid')
})

/**
 * CREATE_NOBR_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('nobr')
})

/**
 * CREATE_NOEMBED_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('noembed')
})

/**
 * CREATE_NOFRAMES_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('noframes')
})

/**
 * CREATE_NOSCRIPT_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('noscript')
})

/**
 * CREATE_OBJECT_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('object')
})

/**
 * CREATE_OL_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('ol')
})

/**
 * CREATE_OPTGROUP_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('optgroup')
})

/**
 * CREATE_OPTION_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('option')
})

/**
 * CREATE_OUTPUT_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('output')
})

/**
 * CREATE_P_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('p')
})

/**
 * CREATE_PARAM_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('param')
})

/**
 * CREATE_PICTURE_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('picture')
})

/**
 * CREATE_PLAINTEXT_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('plaintext')
})

/**
 * CREATE_PRE_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('pre')
})

/**
 * CREATE_PROGRESS_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('progress')
})

/**
 * CREATE_Q_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('q')
})

/**
 * CREATE_RB_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('rb')
})

/**
 * CREATE_RP_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('rp')
})

/**
 * CREATE_RT_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('rt')
})

/**
 * CREATE_RTC_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('rtc')
})

/**
 * CREATE_RUBY_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('ruby')
})

/**
 * CREATE_S_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('s')
})

/**
 * CREATE_SAMP_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('samp')
})

/**
 * CREATE_SCRIPT_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('script')
})

/**
 * CREATE_SECTION_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('section')
})

/**
 * CREATE_SELECT_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('select')
})

/**
 * CREATE_SHADOW_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('shadow')
})

/**
 * CREATE_SLOT_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('slot')
})

/**
 * CREATE_SMALL_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('small')
})

/**
 * CREATE_SOURCE_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('source')
})

/**
 * CREATE_SPACER_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('spacer')
})

/**
 * CREATE_SPAN_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('span')
})

/**
 * CREATE_STRIKE_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('strike')
})

/**
 * CREATE_STRONG_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('strong')
})

/**
 * CREATE_STYLE_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('style')
})

/**
 * CREATE_SUB_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('sub')
})

/**
 * CREATE_SUMMARY_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('summary')
})

/**
 * CREATE_SUP_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('sup')
})

/**
 * CREATE_TABLE_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('table')
})

/**
 * CREATE_TBODY_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('tbody')
})

/**
 * CREATE_TD_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('td')
})

/**
 * CREATE_TEMPLATE_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('template')
})

/**
 * CREATE_TEXTAREA_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('textarea')
})

/**
 * CREATE_TFOOT_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('tfoot')
})

/**
 * CREATE_TH_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('th')
})

/**
 * CREATE_THEAD_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('thead')
})

/**
 * CREATE_TIME_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('time')
})

/**
 * CREATE_TITLE_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('title')
})

/**
 * CREATE_TR_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('tr')
})

/**
 * CREATE_TRACK_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('track')
})

/**
 * CREATE_TT_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('tt')
})

/**
 * CREATE_U_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('u')
})

/**
 * CREATE_UL_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('ul')
})

/**
 * CREATE_VAR_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('var')
})

/**
 * CREATE_VIDEO_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('video')
})

/**
 * CREATE_WBR_DOM_ELEMENT
 */

n(function(a){
  return a.createElement('wbr')
})

/**
 * SET_ARIA_ACTIVEDESCENDANT
 */

n(function(a, e){
  a.setAttribute('aria-activedescendant', e)
})

/**
 * SET_ARIA_ATOMIC
 */

n(function(a, e){
  a.setAttribute('aria-atomic', e)
})

/**
 * SET_ARIA_AUTOCOMPLETE
 */

n(function(a, e){
  a.setAttribute('aria-autocomplete', e)
})

/**
 * SET_ARIA_BUSY
 */

n(function(a, e){
  a.setAttribute('aria-busy', e)
})

/**
 * SET_ARIA_CHECKED
 */

n(function(a, e){
  a.setAttribute('aria-checked', e)
})

/**
 * SET_ARIA_COLCOUNT
 */

n(function(a, e){
  a.setAttribute('aria-colcount', e)
})

/**
 * SET_ARIA_COLINDEX
 */

n(function(a, e){
  a.setAttribute('aria-colindex', e)
})

/**
 * SET_ARIA_COLSPAN
 */

n(function(a, e){
  a.setAttribute('aria-colspan', e)
})

/**
 * SET_ARIA_CONTROLS
 */

n(function(a, e){
  a.setAttribute('aria-controls', e)
})

/**
 * SET_ARIA_CURRENT
 */

n(function(a, e){
  a.setAttribute('aria-current', e)
})

/**
 * SET_ARIA_DESCRIBEDBY
 */

n(function(a, e){
  a.setAttribute('aria-describedby', e)
})

/**
 * SET_ARIA_DETAILS
 */

n(function(a, e){
  a.setAttribute('aria-details', e)
})

/**
 * SET_ARIA_DISABLED
 */

n(function(a, e){
  a.setAttribute('aria-disabled', e)
})

/**
 * SET_ARIA_DROPEFFECT
 */

n(function(a, e){
  a.setAttribute('aria-dropeffect', e)
})

/**
 * SET_ARIA_ERRORMESSAGE
 */

n(function(a, e){
  a.setAttribute('aria-errormessage', e)
})

/**
 * SET_ARIA_EXPANDED
 */

n(function(a, e){
  a.setAttribute('aria-expanded', e)
})

/**
 * SET_ARIA_FLOWTO
 */

n(function(a, e){
  a.setAttribute('aria-flowto', e)
})

/**
 * SET_ARIA_GRABBED
 */

n(function(a, e){
  a.setAttribute('aria-grabbed', e)
})

/**
 * SET_ARIA_HASPOPUP
 */

n(function(a, e){
  a.setAttribute('aria-haspopup', e)
})

/**
 * SET_ARIA_HIDDEN
 */

n(function(a, e){
  a.setAttribute('aria-hidden', e)
})

/**
 * SET_ARIA_INVALID
 */

n(function(a, e){
  a.setAttribute('aria-invalid', e)
})

/**
 * SET_ARIA_KEYSHORTCUTS
 */

n(function(a, e){
  a.setAttribute('aria-keyshortcuts', e)
})

/**
 * SET_ARIA_LABEL
 */

n(function(a, e){
  a.setAttribute('aria-label', e)
})

/**
 * SET_ARIA_LABELLEDBY
 */

n(function(a, e){
  a.setAttribute('aria-labelledby', e)
})

/**
 * SET_ARIA_LEVEL
 */

n(function(a, e){
  a.setAttribute('aria-level', e)
})

/**
 * SET_ARIA_LIVE
 */

n(function(a, e){
  a.setAttribute('aria-live', e)
})

/**
 * SET_ARIA_MODAL
 */

n(function(a, e){
  a.setAttribute('aria-modal', e)
})

/**
 * SET_ARIA_MULTILINE
 */

n(function(a, e){
  a.setAttribute('aria-multiline', e)
})

/**
 * SET_ARIA_MULTISELECTABLE
 */

n(function(a, e){
  a.setAttribute('aria-multiselectable', e)
})

/**
 * SET_ARIA_ORIENTATION
 */

n(function(a, e){
  a.setAttribute('aria-orientation', e)
})

/**
 * SET_ARIA_OWNS
 */

n(function(a, e){
  a.setAttribute('aria-owns', e)
})

/**
 * SET_ARIA_PLACEHOLDER
 */

n(function(a, e){
  a.setAttribute('aria-placeholder', e)
})

/**
 * SET_ARIA_POSINSET
 */

n(function(a, e){
  a.setAttribute('aria-posinset', e)
})

/**
 * SET_ARIA_PRESSED
 */

n(function(a, e){
  a.setAttribute('aria-pressed', e)
})

/**
 * SET_ARIA_READONLY
 */

n(function(a, e){
  a.setAttribute('aria-readonly', e)
})

/**
 * SET_ARIA_RELEVANT
 */

n(function(a, e){
  a.setAttribute('aria-relevant', e)
})

/**
 * SET_ARIA_REQUIRED
 */

n(function(a, e){
  a.setAttribute('aria-required', e)
})

/**
 * SET_ARIA_ROLEDESCRIPTION
 */

n(function(a, e){
  a.setAttribute('aria-roledescription', e)
})

/**
 * SET_ARIA_ROWCOUNT
 */

n(function(a, e){
  a.setAttribute('aria-rowcount', e)
})

/**
 * SET_ARIA_ROWINDEX
 */

n(function(a, e){
  a.setAttribute('aria-rowindex', e)
})

/**
 * SET_ARIA_ROWSPAN
 */

n(function(a, e){
  a.setAttribute('aria-rowspan', e)
})

/**
 * SET_ARIA_SELECTED
 */

n(function(a, e){
  a.setAttribute('aria-selected', e)
})

/**
 * SET_ARIA_SETSIZE
 */

n(function(a, e){
  a.setAttribute('aria-setsize', e)
})

/**
 * SET_ARIA_SORT
 */

n(function(a, e){
  a.setAttribute('aria-sort', e)
})

/**
 * SET_ARIA_VALUEMAX
 */

n(function(a, e){
  a.setAttribute('aria-valuemax', e)
})

/**
 * SET_ARIA_VALUEMIN
 */

n(function(a, e){
  a.setAttribute('aria-valuemin', e)
})

/**
 * SET_ARIA_VALUENOW
 */

n(function(a, e){
  a.setAttribute('aria-valuenow', e)
})

/**
 * SET_ARIA_VALUETEXT
 */

n(function(a, e){
  a.setAttribute('aria-valuetext', e)
})

/**
 * SET_ROLE
 */

n(function(a, e){
  a.setAttribute('role', e)
})

/**
 * GET_ARIA_ACTIVEDESCENDANT_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-activedescendant')
})

/**
 * GET_ARIA_ATOMIC_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-atomic')
})

/**
 * GET_ARIA_AUTOCOMPLETE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-autocomplete')
})

/**
 * GET_ARIA_BUSY_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-busy')
})

/**
 * GET_ARIA_CHECKED_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-checked')
})

/**
 * GET_ARIA_COLCOUNT_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-colcount')
})

/**
 * GET_ARIA_COLINDEX_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-colindex')
})

/**
 * GET_ARIA_COLSPAN_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-colspan')
})

/**
 * GET_ARIA_CONTROLS_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-controls')
})

/**
 * GET_ARIA_CURRENT_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-current')
})

/**
 * GET_ARIA_DESCRIBEDBY_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-describedby')
})

/**
 * GET_ARIA_DETAILS_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-details')
})

/**
 * GET_ARIA_DISABLED_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-disabled')
})

/**
 * GET_ARIA_DROPEFFECT_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-dropeffect')
})

/**
 * GET_ARIA_ERRORMESSAGE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-errormessage')
})

/**
 * GET_ARIA_EXPANDED_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-expanded')
})

/**
 * GET_ARIA_FLOWTO_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-flowto')
})

/**
 * GET_ARIA_GRABBED_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-grabbed')
})

/**
 * GET_ARIA_HASPOPUP_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-haspopup')
})

/**
 * GET_ARIA_HIDDEN_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-hidden')
})

/**
 * GET_ARIA_INVALID_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-invalid')
})

/**
 * GET_ARIA_KEYSHORTCUTS_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-keyshortcuts')
})

/**
 * GET_ARIA_LABEL_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-label')
})

/**
 * GET_ARIA_LABELLEDBY_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-labelledby')
})

/**
 * GET_ARIA_LEVEL_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-level')
})

/**
 * GET_ARIA_LIVE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-live')
})

/**
 * GET_ARIA_MODAL_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-modal')
})

/**
 * GET_ARIA_MULTILINE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-multiline')
})

/**
 * GET_ARIA_MULTISELECTABLE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-multiselectable')
})

/**
 * GET_ARIA_ORIENTATION_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-orientation')
})

/**
 * GET_ARIA_OWNS_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-owns')
})

/**
 * GET_ARIA_PLACEHOLDER_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-placeholder')
})

/**
 * GET_ARIA_POSINSET_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-posinset')
})

/**
 * GET_ARIA_PRESSED_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-pressed')
})

/**
 * GET_ARIA_READONLY_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-readonly')
})

/**
 * GET_ARIA_RELEVANT_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-relevant')
})

/**
 * GET_ARIA_REQUIRED_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-required')
})

/**
 * GET_ARIA_ROLEDESCRIPTION_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-roledescription')
})

/**
 * GET_ARIA_ROWCOUNT_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-rowcount')
})

/**
 * GET_ARIA_ROWINDEX_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-rowindex')
})

/**
 * GET_ARIA_ROWSPAN_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-rowspan')
})

/**
 * GET_ARIA_SELECTED_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-selected')
})

/**
 * GET_ARIA_SETSIZE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-setsize')
})

/**
 * GET_ARIA_SORT_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-sort')
})

/**
 * GET_ARIA_VALUEMAX_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-valuemax')
})

/**
 * GET_ARIA_VALUEMIN_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-valuemin')
})

/**
 * GET_ARIA_VALUENOW_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-valuenow')
})

/**
 * GET_ARIA_VALUETEXT_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('aria-valuetext')
})

/**
 * GET_ROLE_ATTRIBUTE
 */

n(function(a){
  return a.getAttribute('role')
})

/**
 * REMOVE_ARIA_ACTIVEDESCENDANT_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-activedescendant')
})

/**
 * REMOVE_ARIA_ATOMIC_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-atomic')
})

/**
 * REMOVE_ARIA_AUTOCOMPLETE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-autocomplete')
})

/**
 * REMOVE_ARIA_BUSY_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-busy')
})

/**
 * REMOVE_ARIA_CHECKED_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-checked')
})

/**
 * REMOVE_ARIA_COLCOUNT_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-colcount')
})

/**
 * REMOVE_ARIA_COLINDEX_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-colindex')
})

/**
 * REMOVE_ARIA_COLSPAN_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-colspan')
})

/**
 * REMOVE_ARIA_CONTROLS_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-controls')
})

/**
 * REMOVE_ARIA_CURRENT_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-current')
})

/**
 * REMOVE_ARIA_DESCRIBEDBY_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-describedby')
})

/**
 * REMOVE_ARIA_DETAILS_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-details')
})

/**
 * REMOVE_ARIA_DISABLED_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-disabled')
})

/**
 * REMOVE_ARIA_DROPEFFECT_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-dropeffect')
})

/**
 * REMOVE_ARIA_ERRORMESSAGE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-errormessage')
})

/**
 * REMOVE_ARIA_EXPANDED_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-expanded')
})

/**
 * REMOVE_ARIA_FLOWTO_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-flowto')
})

/**
 * REMOVE_ARIA_GRABBED_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-grabbed')
})

/**
 * REMOVE_ARIA_HASPOPUP_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-haspopup')
})

/**
 * REMOVE_ARIA_HIDDEN_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-hidden')
})

/**
 * REMOVE_ARIA_INVALID_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-invalid')
})

/**
 * REMOVE_ARIA_KEYSHORTCUTS_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-keyshortcuts')
})

/**
 * REMOVE_ARIA_LABEL_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-label')
})

/**
 * REMOVE_ARIA_LABELLEDBY_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-labelledby')
})

/**
 * REMOVE_ARIA_LEVEL_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-level')
})

/**
 * REMOVE_ARIA_LIVE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-live')
})

/**
 * REMOVE_ARIA_MODAL_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-modal')
})

/**
 * REMOVE_ARIA_MULTILINE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-multiline')
})

/**
 * REMOVE_ARIA_MULTISELECTABLE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-multiselectable')
})

/**
 * REMOVE_ARIA_ORIENTATION_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-orientation')
})

/**
 * REMOVE_ARIA_OWNS_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-owns')
})

/**
 * REMOVE_ARIA_PLACEHOLDER_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-placeholder')
})

/**
 * REMOVE_ARIA_POSINSET_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-posinset')
})

/**
 * REMOVE_ARIA_PRESSED_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-pressed')
})

/**
 * REMOVE_ARIA_READONLY_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-readonly')
})

/**
 * REMOVE_ARIA_RELEVANT_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-relevant')
})

/**
 * REMOVE_ARIA_REQUIRED_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-required')
})

/**
 * REMOVE_ARIA_ROLEDESCRIPTION_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-roledescription')
})

/**
 * REMOVE_ARIA_ROWCOUNT_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-rowcount')
})

/**
 * REMOVE_ARIA_ROWINDEX_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-rowindex')
})

/**
 * REMOVE_ARIA_ROWSPAN_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-rowspan')
})

/**
 * REMOVE_ARIA_SELECTED_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-selected')
})

/**
 * REMOVE_ARIA_SETSIZE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-setsize')
})

/**
 * REMOVE_ARIA_SORT_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-sort')
})

/**
 * REMOVE_ARIA_VALUEMAX_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-valuemax')
})

/**
 * REMOVE_ARIA_VALUEMIN_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-valuemin')
})

/**
 * REMOVE_ARIA_VALUENOW_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-valuenow')
})

/**
 * REMOVE_ARIA_VALUETEXT_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('aria-valuetext')
})

/**
 * REMOVE_ROLE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('role')
})

/**
 * CREATE_AUDIO_CONTEXT_BUFFER
 */

n(function(a, e, f, r){
  a.createBuffer(x, i, w)
})

/**
 * FILL_CANVAS_RECTANGLE
 */

n(function(o, x, y, w, h){
  a.fillRect(x, y, w, h)
})

/**
 * CLEAR_CANVAS_RECTANGLE
 */

n(function(o, x, y, w, h){
  a.clearRect(x, y, w, h)
})

/**
 * GET_GLOBAL
 */

n(function(a){
  return a.global
})

/**
 * GET_IGNORE_CASE
 */

n(function(a){
  return a.ignoreCase
})

/**
 * GET_SOURCE
 */

n(function(a){
  return a.source
})

/**
 * REPLACE_SUBSTRING
 */

n(function(a, e, f){
  a.replace(x, i)
})

/**
 * GET_COMPLETE
 */

n(function(a){
  return a.complete
})

/**
 * GET_NATURAL_WIDTH
 */

n(function(a){
  return a.naturalWidth
})

/**
 * GET_ORIGINAL_EVENT
 */

n(function(a){
  return a.originalEvent
})

/**
 * GET_SCALE
 */

n(function(a){
  return a.scale
})

/**
 * CHECK_IF_HAS_GEOLOCATION
 */

n(function(){
  return !!navigator.geolocation
})

/**
 * GET_GEOLOCATION
 */

n(function(a){
  navigator.geolocation.getCurrentPosition(x)
})

/**
 * GET_COORDS
 */

n(function(a){
  return a.coords
})

/**
 * GET_LATITUDE
 */

n(function(a){
  return a.latitude
})

/**
 * GET_LONGITUDE
 */

n(function(a){
  return a.longitude
})

/**
 * CREATE_DOM_EVENT
 */

n(function(a, e){
  return a.createEvent(x)
})

/**
 * SET_DOM_EVENT_TYPE
 */

n(function(a, e){
  a.initEvent(x, true, true)
})

/**
 * DISPATCH_DOM_EVENT
 */

n(function(a, e){
  a.dispatchEvent(x, true)
})

/**
 * CREATE_WEBGL_PROGRAM
 */

n(function(a){
  return a.createProgram()
})

/**
 * CREATE_VERTEX_SHADER
 */

n(function(a){
  return a.createShader(o.VERTEX_SHADER)
})

/**
 * CREATE_FRAGMENT_SHADER
 */

n(function(a){
  return a.createShader(o.FRAGMENT_SHADER)
})

/**
 * ATTACH_WEBGL_SHADER
 */

n(function(a, e, f){
  o.attachShader(x, i)
})

/**
 * SET_ACCENT_HEIGHT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('accent-height', e)
})

/**
 * SET_ACCUMULATE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('accumulate', e)
})

/**
 * SET_ADDITIVE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('additive', e)
})

/**
 * SET_ALIGNMENT_BASELINE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('alignment-baseline', e)
})

/**
 * SET_ALLOW_REORDER_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('allowReorder', e)
})

/**
 * SET_ALPHABETIC_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('alphabetic', e)
})

/**
 * SET_AMPLITUDE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('amplitude', e)
})

/**
 * SET_ARABIC_FORM_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('arabic-form', e)
})

/**
 * SET_ASCENT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('ascent', e)
})

/**
 * SET_ATTRIBUTE_NAME_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('attributeName', e)
})

/**
 * SET_ATTRIBUTE_TYPE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('attributeType', e)
})

/**
 * SET_AUTO_REVERSE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('autoReverse', e)
})

/**
 * SET_AZIMUTH_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('azimuth', e)
})

/**
 * SET_BASE_FREQUENCY_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('baseFrequency', e)
})

/**
 * SET_BASELINE_SHIFT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('baseline-shift', e)
})

/**
 * SET_BASE_PROFILE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('baseProfile', e)
})

/**
 * SET_BBOX_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('bbox', e)
})

/**
 * SET_BEGIN_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('begin', e)
})

/**
 * SET_BIAS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('bias', e)
})

/**
 * SET_BY_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('by', e)
})

/**
 * SET_CALC_MODE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('calcMode', e)
})

/**
 * SET_CAP_HEIGHT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('cap-height', e)
})

/**
 * SET_CLASS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('class', e)
})

/**
 * SET_CLIP_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('clip', e)
})

/**
 * SET_CLIP_PATH_UNITS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('clipPathUnits', e)
})

/**
 * SET_CLIP_PATH_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('clip-path', e)
})

/**
 * SET_CLIP_RULE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('clip-rule', e)
})

/**
 * SET_COLOR_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('color', e)
})

/**
 * SET_COLOR_INTERPOLATION_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('color-interpolation', e)
})

/**
 * SET_COLOR_INTERPOLATION_FILTERS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('color-interpolation-filters', e)
})

/**
 * SET_COLOR_PROFILE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('color-profile', e)
})

/**
 * SET_COLOR_RENDERING_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('color-rendering', e)
})

/**
 * SET_CONTENT_SCRIPT_TYPE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('contentScriptType', e)
})

/**
 * SET_CONTENT_STYLE_TYPE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('contentStyleType', e)
})

/**
 * SET_CURSOR_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('cursor', e)
})

/**
 * SET_CX_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('cx', e)
})

/**
 * SET_CY_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('cy', e)
})

/**
 * SET_D_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('d', e)
})

/**
 * SET_DECELERATE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('decelerate', e)
})

/**
 * SET_DESCENT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('descent', e)
})

/**
 * SET_DIFFUSE_CONSTANT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('diffuseConstant', e)
})

/**
 * SET_DIRECTION_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('direction', e)
})

/**
 * SET_DISPLAY_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('display', e)
})

/**
 * SET_DIVISOR_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('divisor', e)
})

/**
 * SET_DOMINANT_BASELINE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('dominant-baseline', e)
})

/**
 * SET_DUR_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('dur', e)
})

/**
 * SET_DX_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('dx', e)
})

/**
 * SET_DY_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('dy', e)
})

/**
 * SET_EDGE_MODE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('edgeMode', e)
})

/**
 * SET_ELEVATION_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('elevation', e)
})

/**
 * SET_ENABLE_BACKGROUND_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('enable-background', e)
})

/**
 * SET_END_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('end', e)
})

/**
 * SET_EXPONENT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('exponent', e)
})

/**
 * SET_EXTERNAL_RESOURCES_REQUIRED_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('externalResourcesRequired', e)
})

/**
 * SET_FILL_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('fill', e)
})

/**
 * SET_FILL_OPACITY_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('fill-opacity', e)
})

/**
 * SET_FILL_RULE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('fill-rule', e)
})

/**
 * SET_FILTER_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('filter', e)
})

/**
 * SET_FILTER_RES_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('filterRes', e)
})

/**
 * SET_FILTER_UNITS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('filterUnits', e)
})

/**
 * SET_FLOOD_COLOR_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('flood-color', e)
})

/**
 * SET_FLOOD_OPACITY_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('flood-opacity', e)
})

/**
 * SET_FONT_FAMILY_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('font-family', e)
})

/**
 * SET_FONT_SIZE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('font-size', e)
})

/**
 * SET_FONT_SIZE_ADJUST_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('font-size-adjust', e)
})

/**
 * SET_FONT_STRETCH_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('font-stretch', e)
})

/**
 * SET_FONT_STYLE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('font-style', e)
})

/**
 * SET_FONT_VARIANT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('font-variant', e)
})

/**
 * SET_FONT_WEIGHT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('font-weight', e)
})

/**
 * SET_FORMAT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('format', e)
})

/**
 * SET_FROM_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('from', e)
})

/**
 * SET_FR_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('fr', e)
})

/**
 * SET_FX_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('fx', e)
})

/**
 * SET_FY_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('fy', e)
})

/**
 * SET_G1_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('g1', e)
})

/**
 * SET_G2_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('g2', e)
})

/**
 * SET_GLYPH_NAME_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('glyph-name', e)
})

/**
 * SET_GLYPH_ORIENTATION_HORIZONTAL_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('glyph-orientation-horizontal', e)
})

/**
 * SET_GLYPH_ORIENTATION_VERTICAL_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('glyph-orientation-vertical', e)
})

/**
 * SET_GLYPH_REF_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('glyphRef', e)
})

/**
 * SET_GRADIENT_TRANSFORM_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('gradientTransform', e)
})

/**
 * SET_GRADIENT_UNITS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('gradientUnits', e)
})

/**
 * SET_HANGING_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('hanging', e)
})

/**
 * SET_HEIGHT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('height', e)
})

/**
 * SET_HREF_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('href', e)
})

/**
 * SET_HREFLANG_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('hreflang', e)
})

/**
 * SET_HORIZ_ADV_X_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('horiz-adv-x', e)
})

/**
 * SET_HORIZ_ORIGIN_X_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('horiz-origin-x', e)
})

/**
 * SET_ID_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('id', e)
})

/**
 * SET_IDEOGRAPHIC_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('ideographic', e)
})

/**
 * SET_IMAGE_RENDERING_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('image-rendering', e)
})

/**
 * SET_IN_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('in', e)
})

/**
 * SET_IN2_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('in2', e)
})

/**
 * SET_INTERCEPT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('intercept', e)
})

/**
 * SET_K_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('k', e)
})

/**
 * SET_K1_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('k1', e)
})

/**
 * SET_K2_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('k2', e)
})

/**
 * SET_K3_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('k3', e)
})

/**
 * SET_K4_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('k4', e)
})

/**
 * SET_KERNEL_MATRIX_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('kernelMatrix', e)
})

/**
 * SET_KERNEL_UNIT_LENGTH_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('kernelUnitLength', e)
})

/**
 * SET_KERNING_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('kerning', e)
})

/**
 * SET_KEY_POINTS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('keyPoints', e)
})

/**
 * SET_KEY_SPLINES_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('keySplines', e)
})

/**
 * SET_KEY_TIMES_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('keyTimes', e)
})

/**
 * SET_LANG_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('lang', e)
})

/**
 * SET_LENGTH_ADJUST_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('lengthAdjust', e)
})

/**
 * SET_LETTER_SPACING_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('letter-spacing', e)
})

/**
 * SET_LIGHTING_COLOR_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('lighting-color', e)
})

/**
 * SET_LIMITING_CONE_ANGLE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('limitingConeAngle', e)
})

/**
 * SET_LOCAL_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('local', e)
})

/**
 * SET_MARKER_END_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('marker-end', e)
})

/**
 * SET_MARKER_MID_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('marker-mid', e)
})

/**
 * SET_MARKER_START_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('marker-start', e)
})

/**
 * SET_MARKER_HEIGHT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('markerHeight', e)
})

/**
 * SET_MARKER_UNITS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('markerUnits', e)
})

/**
 * SET_MARKER_WIDTH_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('markerWidth', e)
})

/**
 * SET_MASK_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('mask', e)
})

/**
 * SET_MASK_CONTENT_UNITS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('maskContentUnits', e)
})

/**
 * SET_MASK_UNITS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('maskUnits', e)
})

/**
 * SET_MATHEMATICAL_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('mathematical', e)
})

/**
 * SET_MAX_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('max', e)
})

/**
 * SET_MEDIA_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('media', e)
})

/**
 * SET_METHOD_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('method', e)
})

/**
 * SET_MIN_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('min', e)
})

/**
 * SET_MODE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('mode', e)
})

/**
 * SET_NAME_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('name', e)
})

/**
 * SET_NUM_OCTAVES_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('numOctaves', e)
})

/**
 * SET_OFFSET_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('offset', e)
})

/**
 * SET_OPACITY_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('opacity', e)
})

/**
 * SET_OPERATOR_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('operator', e)
})

/**
 * SET_ORDER_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('order', e)
})

/**
 * SET_ORIENT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('orient', e)
})

/**
 * SET_ORIENTATION_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('orientation', e)
})

/**
 * SET_ORIGIN_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('origin', e)
})

/**
 * SET_OVERFLOW_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('overflow', e)
})

/**
 * SET_OVERLINE_POSITION_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('overline-position', e)
})

/**
 * SET_OVERLINE_THICKNESS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('overline-thickness', e)
})

/**
 * SET_PANOSE_1_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('panose-1', e)
})

/**
 * SET_PAINT_ORDER_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('paint-order', e)
})

/**
 * SET_PATH_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('path', e)
})

/**
 * SET_PATH_LENGTH_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('pathLength', e)
})

/**
 * SET_PATTERN_CONTENT_UNITS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('patternContentUnits', e)
})

/**
 * SET_PATTERN_TRANSFORM_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('patternTransform', e)
})

/**
 * SET_PATTERN_UNITS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('patternUnits', e)
})

/**
 * SET_PING_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('ping', e)
})

/**
 * SET_POINTER_EVENTS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('pointer-events', e)
})

/**
 * SET_POINTS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('points', e)
})

/**
 * SET_POINTS_AT_X_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('pointsAtX', e)
})

/**
 * SET_POINTS_AT_Y_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('pointsAtY', e)
})

/**
 * SET_POINTS_AT_Z_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('pointsAtZ', e)
})

/**
 * SET_PRESERVE_ALPHA_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('preserveAlpha', e)
})

/**
 * SET_PRESERVE_ASPECT_RATIO_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('preserveAspectRatio', e)
})

/**
 * SET_PRIMITIVE_UNITS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('primitiveUnits', e)
})

/**
 * SET_R_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('r', e)
})

/**
 * SET_RADIUS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('radius', e)
})

/**
 * SET_REFERRER_POLICY_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('referrerPolicy', e)
})

/**
 * SET_REF_X_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('refX', e)
})

/**
 * SET_REF_Y_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('refY', e)
})

/**
 * SET_REL_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('rel', e)
})

/**
 * SET_RENDERING_INTENT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('rendering-intent', e)
})

/**
 * SET_REPEAT_COUNT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('repeatCount', e)
})

/**
 * SET_REPEAT_DUR_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('repeatDur', e)
})

/**
 * SET_REQUIRED_EXTENSIONS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('requiredExtensions', e)
})

/**
 * SET_REQUIRED_FEATURES_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('requiredFeatures', e)
})

/**
 * SET_RESTART_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('restart', e)
})

/**
 * SET_RESULT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('result', e)
})

/**
 * SET_ROTATE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('rotate', e)
})

/**
 * SET_RX_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('rx', e)
})

/**
 * SET_RY_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('ry', e)
})

/**
 * SET_SCALE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('scale', e)
})

/**
 * SET_SEED_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('seed', e)
})

/**
 * SET_SHAPE_RENDERING_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('shape-rendering', e)
})

/**
 * SET_SLOPE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('slope', e)
})

/**
 * SET_SPACING_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('spacing', e)
})

/**
 * SET_SPECULAR_CONSTANT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('specularConstant', e)
})

/**
 * SET_SPECULAR_EXPONENT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('specularExponent', e)
})

/**
 * SET_SPEED_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('speed', e)
})

/**
 * SET_SPREAD_METHOD_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('spreadMethod', e)
})

/**
 * SET_START_OFFSET_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('startOffset', e)
})

/**
 * SET_STD_DEVIATION_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('stdDeviation', e)
})

/**
 * SET_STEMH_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('stemh', e)
})

/**
 * SET_STEMV_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('stemv', e)
})

/**
 * SET_STITCH_TILES_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('stitchTiles', e)
})

/**
 * SET_STOP_COLOR_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('stop-color', e)
})

/**
 * SET_STOP_OPACITY_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('stop-opacity', e)
})

/**
 * SET_STRIKETHROUGH_POSITION_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('strikethrough-position', e)
})

/**
 * SET_STRIKETHROUGH_THICKNESS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('strikethrough-thickness', e)
})

/**
 * SET_STRING_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('string', e)
})

/**
 * SET_STROKE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('stroke', e)
})

/**
 * SET_STROKE_DASHARRAY_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('stroke-dasharray', e)
})

/**
 * SET_STROKE_DASHOFFSET_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('stroke-dashoffset', e)
})

/**
 * SET_STROKE_LINECAP_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('stroke-linecap', e)
})

/**
 * SET_STROKE_LINEJOIN_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('stroke-linejoin', e)
})

/**
 * SET_STROKE_MITERLIMIT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('stroke-miterlimit', e)
})

/**
 * SET_STROKE_OPACITY_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('stroke-opacity', e)
})

/**
 * SET_STROKE_WIDTH_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('stroke-width', e)
})

/**
 * SET_STYLE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('style', e)
})

/**
 * SET_SURFACE_SCALE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('surfaceScale', e)
})

/**
 * SET_SYSTEM_LANGUAGE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('systemLanguage', e)
})

/**
 * SET_TABINDEX_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('tabindex', e)
})

/**
 * SET_TABLE_VALUES_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('tableValues', e)
})

/**
 * SET_TARGET_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('target', e)
})

/**
 * SET_TARGET_X_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('targetX', e)
})

/**
 * SET_TARGET_Y_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('targetY', e)
})

/**
 * SET_TEXT_ANCHOR_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('text-anchor', e)
})

/**
 * SET_TEXT_DECORATION_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('text-decoration', e)
})

/**
 * SET_TEXT_RENDERING_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('text-rendering', e)
})

/**
 * SET_TEXT_LENGTH_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('textLength', e)
})

/**
 * SET_TO_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('to', e)
})

/**
 * SET_TRANSFORM_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('transform', e)
})

/**
 * SET_TYPE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('type', e)
})

/**
 * SET_U1_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('u1', e)
})

/**
 * SET_U2_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('u2', e)
})

/**
 * SET_UNDERLINE_POSITION_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('underline-position', e)
})

/**
 * SET_UNDERLINE_THICKNESS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('underline-thickness', e)
})

/**
 * SET_UNICODE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('unicode', e)
})

/**
 * SET_UNICODE_BIDI_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('unicode-bidi', e)
})

/**
 * SET_UNICODE_RANGE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('unicode-range', e)
})

/**
 * SET_UNITS_PER_EM_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('units-per-em', e)
})

/**
 * SET_V_ALPHABETIC_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('v-alphabetic', e)
})

/**
 * SET_V_HANGING_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('v-hanging', e)
})

/**
 * SET_V_IDEOGRAPHIC_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('v-ideographic', e)
})

/**
 * SET_V_MATHEMATICAL_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('v-mathematical', e)
})

/**
 * SET_VALUES_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('values', e)
})

/**
 * SET_VECTOR_EFFECT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('vector-effect', e)
})

/**
 * SET_VERSION_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('version', e)
})

/**
 * SET_VERT_ADV_Y_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('vert-adv-y', e)
})

/**
 * SET_VERT_ORIGIN_X_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('vert-origin-x', e)
})

/**
 * SET_VERT_ORIGIN_Y_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('vert-origin-y', e)
})

/**
 * SET_VIEW_BOX_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('viewBox', e)
})

/**
 * SET_VIEW_TARGET_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('viewTarget', e)
})

/**
 * SET_VISIBILITY_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('visibility', e)
})

/**
 * SET_WIDTH_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('width', e)
})

/**
 * SET_WIDTHS_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('widths', e)
})

/**
 * SET_WORD_SPACING_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('word-spacing', e)
})

/**
 * SET_WRITING_MODE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('writing-mode', e)
})

/**
 * SET_X_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('x', e)
})

/**
 * SET_X_HEIGHT_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('x-height', e)
})

/**
 * SET_X1_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('x1', e)
})

/**
 * SET_X2_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('x2', e)
})

/**
 * SET_X_CHANNEL_SELECTOR_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('xChannelSelector', e)
})

/**
 * SET_XLINK_ACTUATE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('xlink:actuate', x)
})

/**
 * SET_XLINK_ARCROLE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('xlink:arcrole', x)
})

/**
 * SET_XLINK_HREF_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('xlink:href', x)
})

/**
 * SET_XLINK_ROLE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('xlink:role', x)
})

/**
 * SET_XLINK_SHOW_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('xlink:show', x)
})

/**
 * SET_XLINK_TITLE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('xlink:title', x)
})

/**
 * SET_XLINK_TYPE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('xlink:type', x)
})

/**
 * SET_XML_BASE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('xml:base', x)
})

/**
 * SET_XML_LANG_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('xml:lang', x)
})

/**
 * SET_XML_SPACE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('xml:space', x)
})

/**
 * SET_Y_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('y', e)
})

/**
 * SET_Y1_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('y1', e)
})

/**
 * SET_Y2_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('y2', e)
})

/**
 * SET_Y_CHANNEL_SELECTOR_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('yChannelSelector', e)
})

/**
 * SET_Z_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('z', e)
})

/**
 * SET_ZOOM_AND_PAN_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('zoomAndPan', e)
})

/**
 * CREATE_REGEX
 */

n(function(a, e){
  return new RegExp(a, e)
})

/**
 * GET_INDEX_OF
 */

n(function(a, e){
  return a.indexOf(e)
})

/**
 * MATCH_REGEX
 */

n(function(a, e){
  return a.match(e)
})

/**
 * CREATE_DATETIME
 */

n(function(a){
  return new Date(a)
})

/**
 * PARSE_DATE
 */

n(function(a){
  return Date.parse(a)
})

/**
 * GET_MICROSECOND_TIMESTAMP
 */

n(function(){
  return window.performance.now()
})

/**
 * GET_COMPUTED_STYLE
 */

n(function(a, e){
  return window.getComputedStyle(a, e)
})

/**
 * GET_HEAD
 */

n(function(a){
  return a.head
})

/**
 * GET_STYLESHEETS
 */

n(function(a){
  return a.styleSheets
})

/**
 * LISTEN_TO_WEBGLCONTEXTLOST_EVENT
 */

n(function(a, e){
  a.addEventListener('webglcontextlost', e)
})

/**
 * LISTEN_TO_WEBGLCONTEXTRESTORED_EVENT
 */

n(function(a, e){
  a.addEventListener('webglcontextrestored', e)
})

/**
 * GET_WEBGL2_CONTEXT
 */

n(function(a){
  return a.getContext('webgl2', { antialias: true })
})

/**
 * CREATE_FLOAT32ARRAY
 */

n(function(a){
  return new Float32Array(a)
})

/**
 * CREATE_FUNCTION
 */

n(function(a){
  return new Function(a)
})

/**
 * INSERT_STYLESHEET_RULE
 */

n(function(a, e, f){
  a.insertRule(e, f)
})

/**
 * DELETE_STYLESHEET_RULE
 */

n(function(a, e){
  a.deleteRule(e)
})

/**
 * TRIM_STRING
 */

n(function(a){
  return x.trim()
})

/**
 * SEND_REQUEST
 */

n(function(a, e){
  a.send(e)
})

/**
 * SET_REQUEST_HEADER
 */

n(function(a, e, f){
  a.setRequestHeader(e, f)
})

/**
 * GET_MESSAGE
 */

n(function(a){
  return a.message
})

/**
 * GET_STACK
 */

n(function(a){
  return a.stack
})

/**
 * POST_MESSAGE
 */

n(function(a, e){
  a.postMessage(e)
})

/**
 * SET_ITEMREF_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('itemref', e)
})

/**
 * SET_ITEMSCOPE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('itemscope', e)
})

/**
 * SET_ITEMTYPE_ATTRIBUTE
 */

n(function(a, e){
  a.setAttribute('itemtype', e)
})

/**
 * REMOVE_ITEMREF_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('itemref')
})

/**
 * REMOVE_ITEMSCOPE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('itemscope')
})

/**
 * REMOVE_ITEMTYPE_ATTRIBUTE
 */

n(function(a){
  a.removeAttribute('itemtype')
})

/**
 * CREATE_BROWSER_WORKER
 */

n(function(a){
  return new Worker(a)
})

/**
 * OPEN_REQUEST
 */

n(function(a, e, f){
  a.open(e, f)
})

/**
 * CREATE_IMAGE
 */

n(function(){
  return new Image()
})

/**
 * ADD_DOM_ELEMENT_CLASS
 */

n(function(a, e){
  a.classList.add(e)
})

/**
 * REMOVE_DOM_ELEMENT_CLASS
 */

n(function(a, e){
  a.classList.remove(e)
})

/**
 * GET_DOM_ELEMENT_PARENT
 */

n(function(a){
  return a.parentNode
})

/**
 * GET_DOM_ELEMENT_CHILDREN
 */

n(function(a){
  return a.childNodes
})

/**
 * MEASURE_TEXT_WIDTH
 */

n(function(a, e){
  a.measureText(e)
})

/**
 * GET_FIRST_CHILD
 */

n(function(a){
  return a.firstChild
})

/**
 * GET_LAST_CHILD
 */

n(function(a){
  return a.lastChild
})

/**
 * GET_NEXT_SIBLING
 */

n(function(a){
  return a.nextSibling
})

/**
 * GET_NEXT_SIBLING_ELEMENT
 */

n(function(a){
  return a.nextSiblingElement
})

/**
 * GET_PREVIOUS_SIBLING
 */

n(function(a){
  return a.previousSibling
})

/**
 * GET_PREVIOUS_SIBLING_ELEMENT
 */

n(function(a){
  return a.previousSiblingElement
})

/**
 * CHECK_IF_WINDOW_SUPPORTS_TEXT_SELECTION
 */

n(function(){
  return !!window.getSelection
})

/**
 * CHECK_IF_DOCUMENT_SUPPORTS_TEXT_SELECTION
 */

n(function(){
  return document.selection && document.selection.type != 'Control'
})

/**
 * GET_SELECTED_TEXT_FROM_DOCUMENT
 */

n(function(){
  return document.selection.createRange().text
})

/**
 * GET_SELECTED_TEXT_FROM_WINDOW
 */

n(function(){
  return window.getSelection().toString()
})

/**
 * CREATE_TEXT_RANGE_SELECTOR
 */

n(function(){
  return document.createRange()
})

/**
 * SELECT_DOM_ELEMENT_CONTENTS
 */

n(function(a, e){
  a.selectNodeContents(e)
})

/**
 * REMOVE_ALL_TEXT_SELECTION
 */

n(function(a){
  a.removeAllRanges()
})

/**
 * ADD_TEXT_SELECTION_RANGE
 */

n(function(a, e){
  a.addRange(e)
})

/**
 * SET_WEBGL_SHADER_SOURCE
 */

n(function(a, e, f){
  a.shaderSource(e, f)
})

/**
 * COMPILE_WEBGL_SHADER
 */

n(function(a, e){
  a.compileShader(e)
})

/**
 * CREATE_WEBGL_BUFFER
 */

n(function(a){
  return a.createBuffer()
})

/**
 * GET_WEBGL_ATTRIBUTE_LOCATION
 */

n(function(a, e, f){
  return a.getAttribLocation(e, f)
})

/**
 * GET_WEBGL_UNIFORM_LOCATION
 */

n(function(a, e, f){
  return a.getUniformLocation(e, f)
})

/**
 * SET_WEBGL_UNIFORM1F
 */

n(function(a, e, f){
  a.uniform1f(e, f)
})

/**
 * SET_WEBGL_UNIFORM1FV
 */

n(function(a, e, f){
  a.uniform1fv(e, f)
})

/**
 * SET_WEBGL_UNIFORM2F
 */

n(function(a, e, f, r){
  a.uniform2f(e, f, r)
})

/**
 * SET_WEBGL_UNIFORM2FV
 */

n(function(a, e, f, r){
  a.uniform2fv(e, [ f, r ])
})

/**
 * SET_WEBGL_UNIFORM3F
 */

n(function(a, e, f, r, s){
  a.uniform3f(e, f, r, s)
})

/**
 * SET_WEBGL_UNIFORM3FV
 */

n(function(a, e, f, r, s){
  a.uniform3fv(e, [ f, r, s ])
})

/**
 * SET_WEBGL_UNIFORM4F
 */

n(function(a, e, f, r, s, u){
  a.uniform4f(e, f, r, s, u)
})

/**
 * SET_WEBGL_UNIFORM4FV
 */

n(function(a, e, f, r, s, u){
  a.uniform4fv(e, [ f, r, s, u ])
})

/**
 * HOLD
 */

r(function(a){
  const b = d(a)
  h1(0, b)
})

/**
 * FREE
 */

r(function(a){
  const b = d(a)
  h1(1, b)
})

/**
 * PRINT
 */

r(function(a){
  const b = d(a)
  h1(2, b)
})

/**
 * GET_CHAR_CODE
 */

r(function(a){
  const b = d(a)
  const i = h1(3, b)
  const k = h1(0, i)
  return k
})

/**
 * PARSE_FLOAT
 */

r(function(a){
  const b = d(a)
  const i = h1(4, b)
  const k = h1(0, i)
  return k
})

/**
 * DEBUG_FUNCTION
 */

r(function(a){
  const b = d(a)
  h1(5, b)
})

/**
 * DEBUG
 */

r(function(){
  h0(6)
})

/**
 * PARSE_INT
 */

r(function(a){
  const b = d(a)
  const i = h1(7, b)
  const k = h1(0, i)
  return k
})

/**
 * PARSE_NUMBER
 */

r(function(a){
  const b = d(a)
  const i = h1(8, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_MAX
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(9, b, i)
  const m = h1(0, k)
  return m
})

/**
 * GET_MIN
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(10, b, i)
  const m = h1(0, k)
  return m
})

/**
 * FLOOR
 */

r(function(a){
  const b = d(a)
  const i = h1(11, b)
  const k = h1(0, i)
  return k
})

/**
 * CEIL
 */

r(function(a){
  const b = d(a)
  const i = h1(12, b)
  const k = h1(0, i)
  return k
})

/**
 * ROUND
 */

r(function(a){
  const b = d(a)
  const i = h1(13, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ABS
 */

r(function(a){
  const b = d(a)
  const i = h1(14, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_COS
 */

r(function(a){
  const b = d(a)
  const i = h1(15, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ACOS
 */

r(function(a){
  const b = d(a)
  const i = h1(16, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_SIN
 */

r(function(a){
  const b = d(a)
  const i = h1(17, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ASIN
 */

r(function(a){
  const b = d(a)
  const i = h1(18, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_TAN
 */

r(function(a){
  const b = d(a)
  const i = h1(19, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ATAN
 */

r(function(a){
  const b = d(a)
  const i = h1(20, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ATAN2
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(21, b, i)
  const m = h1(0, k)
  return m
})

/**
 * GET_LOG
 */

r(function(a){
  const b = d(a)
  const i = h1(22, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_SQRT
 */

r(function(a){
  const b = d(a)
  const i = h1(23, b)
  const k = h1(0, i)
  return k
})

/**
 * SLEEP
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(24, b, i)
  const m = h1(0, k)
  return m
})

/**
 * CLEAR_TIMEOUT
 */

r(function(a){
  const b = d(a)
  h1(25, b)
})

/**
 * GET_TIMESTAMP
 */

r(function(){
  const b = h0(26)
  const i = h1(0, b)
  return i
})

/**
 * QUEUE
 */

r(function(a){
  const b = d(a)
  h1(27, b)
})

/**
 * GET_CHAR_FROM_CODE
 */

r(function(a){
  const b = d(a)
  const i = h1(28, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_CHAR_FROM_CODE_POINT
 */

r(function(a){
  const b = d(a)
  const i = h1(29, b)
  const k = h1(0, i)
  return k
})

/**
 * CHECK_IF_MISSING
 */

r(function(a){
  const b = d(a)
  const i = h1(30, b)
  const k = h1(0, i)
  return k
})

/**
 * CHECK_IF_NULL
 */

r(function(a){
  const b = d(a)
  const i = h1(31, b)
  const k = h1(0, i)
  return k
})

/**
 * CHECK_IF_UNDEFINED
 */

r(function(a){
  const b = d(a)
  const i = h1(32, b)
  const k = h1(0, i)
  return k
})

/**
 * CHECK_IF_PROMISE
 */

r(function(a){
  const b = d(a)
  const i = h1(33, b)
  const k = h1(0, i)
  return k
})

/**
 * CHECK_IF_ARRAY
 */

r(function(a){
  const b = d(a)
  const i = h1(34, b)
  const k = h1(0, i)
  return k
})

/**
 * CHECK_IF_NUMBER
 */

r(function(a){
  const b = d(a)
  const i = h1(35, b)
  const k = h1(0, i)
  return k
})

/**
 * CHECK_IF_STRING
 */

r(function(a){
  const b = d(a)
  const i = h1(36, b)
  const k = h1(0, i)
  return k
})

/**
 * CHECK_IF_FLOAT
 */

r(function(a){
  const b = d(a)
  const i = h1(37, b)
  const k = h1(0, i)
  return k
})

/**
 * CHECK_IF_INTEGER
 */

r(function(a){
  const b = d(a)
  const i = h1(38, b)
  const k = h1(0, i)
  return k
})

/**
 * CHECK_IF_OBJECT
 */

r(function(a){
  const b = d(a)
  const i = h1(39, b)
  const k = h1(0, i)
  return k
})

/**
 * CALL
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(40, b, i)
  const m = h1(0, k)
  return m
})

/**
 * CREATE
 */

r(function(a){
  const b = d(a)
  const i = h1(41, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_TYPEOF
 */

r(function(a){
  const b = d(a)
  const i = h1(42, b)
  const k = h1(0, i)
  return k
})

/**
 * CHECK_INSTANCEOF
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(43, b, i)
})

/**
 * CREATE_STRING
 */

r(function(){
  const b = h0(44)
  const i = h1(0, b)
  return i
})

/**
 * SET_ATTR
 */

r(function(a, e, f){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  h3(45, b, i, k)
})

/**
 * GET_ATTR
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(46, b, i)
  const m = h1(0, k)
  return m
})

/**
 * REMOVE_ATTR
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(47, b, i)
})

/**
 * BRANCH
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(48, b, i)
})

/**
 * BRANCH_AND_RETURN
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(49, b, i)
})

/**
 * BRANCH_ELSE
 */

r(function(a, e, f){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  h3(50, b, i, k)
})

/**
 * SHIFT_LEFT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(51, b, i)
  const m = h1(0, k)
  return m
})

/**
 * SHIFT_RIGHT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(52, b, i)
  const m = h1(0, k)
  return m
})

/**
 * SHIFT_RIGHT_UNSIGNED
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(53, b, i)
  const m = h1(0, k)
  return m
})

/**
 * COMPUTE_BITWISE_OR
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(54, b, i)
  const m = h1(0, k)
  return m
})

/**
 * COMPUTE_BITWISE_AND
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(55, b, i)
  const m = h1(0, k)
  return m
})

/**
 * TRY_CATCH
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(56, b, i)
})

/**
 * TRY_CATCH_AND_RETURN
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(57, b, i)
})

/**
 * THROW
 */

r(function(a){
  const b = d(a)
  h1(58, b)
})

/**
 * ADD
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(59, b, i)
  const m = h1(0, k)
  return m
})

/**
 * SUBTRACT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(60, b, i)
  const m = h1(0, k)
  return m
})

/**
 * MULTIPLY
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(61, b, i)
  const m = h1(0, k)
  return m
})

/**
 * DIVIDE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(62, b, i)
  const m = h1(0, k)
  return m
})

/**
 * CHECK_IF_TRUTHY
 */

r(function(a){
  const b = d(a)
  const i = h1(63, b)
  const k = h1(0, i)
  return k
})

/**
 * CHECK_IF_TRUE
 */

r(function(a){
  const b = d(a)
  h1(64, b)
})

/**
 * CHECK_IF_FALSE
 */

r(function(a){
  const b = d(a)
  h1(65, b)
})

/**
 * CHECK_IF_BLANK
 */

r(function(a){
  const b = d(a)
  const i = h1(66, b)
  const k = h1(0, i)
  return k
})

/**
 * CHECK_IF_STRICT_EQUAL
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(67, b, i)
  const m = h1(0, k)
  return m
})

/**
 * CHECK_GT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(68, b, i)
  const m = h1(0, k)
  return m
})

/**
 * CHECK_LT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(69, b, i)
  const m = h1(0, k)
  return m
})

/**
 * CHECK_GTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(70, b, i)
  const m = h1(0, k)
  return m
})

/**
 * CHECK_LTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(71, b, i)
  const m = h1(0, k)
  return m
})

/**
 * CHECK_AND
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(72, b, i)
  const m = h1(0, k)
  return m
})

/**
 * CHECK_OR
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(73, b, i)
  const m = h1(0, k)
  return m
})

/**
 * SET_TITLE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(74, b, i)
})

/**
 * SET_SRC
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(75, b, i)
})

/**
 * SET_DISABLED
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(76, b, i)
})

/**
 * GET_TITLE
 */

r(function(a){
  const b = d(a)
  const i = h1(77, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_SRC
 */

r(function(a){
  const b = d(a)
  const i = h1(78, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DISABLED
 */

r(function(a){
  const b = d(a)
  const i = h1(79, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_LENGTH
 */

r(function(a){
  const b = d(a)
  const i = h1(80, b)
  const k = h1(0, i)
  return k
})

/**
 * POP
 */

r(function(a){
  const b = d(a)
  const i = h1(81, b)
  const k = h1(0, i)
  return k
})

/**
 * PUSH
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(82, b, i)
})

/**
 * CHECK_IF_OBJECT_HAS_PROPERTY
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(83, b, i)
  const m = h1(0, k)
  return m
})

/**
 * MODULO
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(84, b, i)
  const m = h1(0, k)
  return m
})

/**
 * STOP_EVENT_PROPAGATION
 */

r(function(a){
  const b = d(a)
  h1(85, b)
})

/**
 * GET_INNER_HEIGHT
 */

r(function(a){
  const b = d(a)
  const i = h1(86, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_CLIENT_HEIGHT
 */

r(function(a){
  const b = d(a)
  const i = h1(87, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_INNER_WIDTH
 */

r(function(a){
  const b = d(a)
  const i = h1(88, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_CLIENT_WIDTH
 */

r(function(a){
  const b = d(a)
  const i = h1(89, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_SCROLL_TOP
 */

r(function(a){
  const b = d(a)
  const i = h1(90, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_HIDDEN
 */

r(function(a){
  const b = d(a)
  const i = h1(91, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_READY_STATE
 */

r(function(a){
  const b = d(a)
  const i = h1(92, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_RESPONSE_TEXT
 */

r(function(a){
  const b = d(a)
  const i = h1(93, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_LENGTH_COMPUTABLE
 */

r(function(a){
  const b = d(a)
  const i = h1(94, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_TOTAL
 */

r(function(a){
  const b = d(a)
  const i = h1(95, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_FULLSCREEN_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(96, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_CANCEL_FULL_SCREEN
 */

r(function(a){
  const b = d(a)
  const i = h1(97, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_REQUEST_FULLSCREEN
 */

r(function(a){
  const b = d(a)
  const i = h1(98, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_HISTORY
 */

r(function(a){
  const b = d(a)
  const i = h1(99, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_NAVIGATOR
 */

r(function(a){
  const b = d(a)
  const i = h1(100, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_USER_AGENT
 */

r(function(a){
  const b = d(a)
  const i = h1(101, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_FULL_SCREEN
 */

r(function(a){
  const b = d(a)
  const i = h1(102, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_LOCAL_STORAGE
 */

r(function(a){
  const b = d(a)
  const i = h1(103, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_SESSION_STORAGE
 */

r(function(a){
  const b = d(a)
  const i = h1(104, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_SCROLL_X
 */

r(function(a){
  const b = d(a)
  const i = h1(105, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_SCROLL_Y
 */

r(function(a){
  const b = d(a)
  const i = h1(106, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_VALUE
 */

r(function(a){
  const b = d(a)
  const i = h1(107, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_MATCHES
 */

r(function(a){
  const b = d(a)
  const i = h1(108, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_PERFORMANCE
 */

r(function(a){
  const b = d(a)
  const i = h1(109, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_MEMORY
 */

r(function(a){
  const b = d(a)
  const i = h1(110, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_USED_JS_HEAP_SIZE
 */

r(function(a){
  const b = d(a)
  const i = h1(111, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_SHEET
 */

r(function(a){
  const b = d(a)
  const i = h1(112, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_TARGET
 */

r(function(a){
  const b = d(a)
  const i = h1(113, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_WHEEL_DELTA
 */

r(function(a){
  const b = d(a)
  const i = h1(114, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DETAIL
 */

r(function(a){
  const b = d(a)
  const i = h1(115, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_TEXT
 */

r(function(a){
  const b = d(a)
  const i = h1(116, b)
  const k = h1(0, i)
  return k
})

/**
 * STYLE
 */

r(function(a){
  const b = d(a)
  const i = h1(117, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_URL_FROM_BLOB
 */

r(function(a){
  const b = d(a)
  const i = h1(118, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_NEW_BLOB_FROM_CHUNKS
 */

r(function(x, o){
  const b = d(x)
  const i = d(o)
  const k = h2(119, b, i)
  const m = h1(0, k)
  return m
})

/**
 * GET_AUDIO_CONTEXT
 */

r(function(){
  const b = h0(120)
  const i = h1(0, b)
  return i
})

/**
 * GET_WINDOW
 */

r(function(){
  const b = h0(121)
  const i = h1(0, b)
  return i
})

/**
 * GET_DOCUMENT
 */

r(function(){
  const b = h0(122)
  const i = h1(0, b)
  return i
})

/**
 * LISTEN
 */

r(function(a, e, f){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  h3(123, b, i, k)
})

/**
 * CHECK_IF_VIDEO_CAN_PLAY_TYPE
 */

r(function(){
  const b = h0(124)
  const i = h1(0, b)
  return i
})

/**
 * DRAW_CANVAS_IMAGE
 */

r(function(a, e, f, r){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  const m = d(r)
  const n = h4(125, b, i, k, m)
  const o = h1(0, n)
  return o
})

/**
 * BEGIN_CANVAS_PATH
 */

r(function(a){
  const b = d(a)
  const i = h1(126, b)
  const k = h1(0, i)
  return k
})

/**
 * MOVE_CANVAS_POINTER_TO
 */

r(function(a, e, f){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  const m = h3(127, b, i, k)
  const n = h1(0, m)
  return n
})

/**
 * DRAW_CANVAS_LINE_TO
 */

r(function(a, e, f){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  const m = h3(128, b, i, k)
  const n = h1(0, m)
  return n
})

/**
 * DRAW_CANVAS_STROKE
 */

r(function(a){
  const b = d(a)
  const i = h1(129, b)
  const k = h1(0, i)
  return k
})

/**
 * SET_CANVAS_SMOOTHING
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(130, b, i)
})

/**
 * GET_COOKIE_LIST
 */

r(function(){
  const b = h0(131)
  const i = h1(0, b)
  return i
})

/**
 * SET_RESPONSE_TYPE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(132, b, i)
})

/**
 * SET_WITH_CREDENTIALS
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(133, b, i)
})

/**
 * SET_AUTOPLAY
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(134, b, i)
})

/**
 * SET_MULTIPLE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(135, b, i)
})

/**
 * SET_ACCEPT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(136, b, i)
})

/**
 * SET_DIRECTORY
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(137, b, i)
})

/**
 * SET_TEXT_CONTENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(138, b, i)
})

/**
 * SET_INNER_HTML
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(139, b, i)
})

/**
 * SET_ID
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(140, b, i)
})

/**
 * SET_REL
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(141, b, i)
})

/**
 * SET_HREF
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(142, b, i)
})

/**
 * SET_TYPE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(143, b, i)
})

/**
 * SET_ASYNC
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(144, b, i)
})

/**
 * CREATE_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(145, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(146, b)
  const k = h1(0, i)
  return k
})

/**
 * REPLACE_DOM_ELEMENT
 */

r(function(a, e, f){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  h3(147, b, i, k)
})

/**
 * FOCUS_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  h1(148, b)
})

/**
 * U_CREATE_DOM_ELEMENT_NS
 */

r(function(a, e, f){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  const m = h3(149, b, i, k)
  const n = h1(0, m)
  return n
})

/**
 * U_SET_DOM_ELEMENT_ATTR_NS
 */

r(function(a, e, f, r){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  const m = d(r)
  h4(150, b, i, k, m)
})

/**
 * PREVENT_DEFAULT_EVENT_BEHAVIOR
 */

r(function(e){
  const b = d(e)
  h1(151, b)
})

/**
 * SET_DOM_ELEMENT_ATTR
 */

r(function(a, e, f){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  h3(152, b, i, k)
})

/**
 * REMOVE_DOM_ELEMENT_ATTR
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(153, b, i)
})

/**
 * CREATE_UINT8ARRAY
 */

r(function(a){
  const b = d(a)
  const i = h1(154, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_UINT16ARRAY
 */

r(function(a){
  const b = d(a)
  const i = h1(155, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_UINT32ARRAY
 */

r(function(a){
  const b = d(a)
  const i = h1(156, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_AUDIO
 */

r(function(){
  const b = h0(157)
  const i = h1(0, b)
  return i
})

/**
 * CREATE_AUDIO_CONTEXT
 */

r(function(){
  const b = h0(158)
  const i = h1(0, b)
  return i
})

/**
 * CREATE_WEB_SOCKET
 */

r(function(a){
  const b = d(a)
  const i = h1(159, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_CANVAS_CONTEXT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(160, b, i)
  const m = h1(0, k)
  return m
})

/**
 * APPEND_DOM_ELEMENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(161, b, i)
})

/**
 * REMOVE_DOM_ELEMENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(162, b, i)
})

/**
 * GET_WORKER_GLOBAL_SCOPE_CONSTRUCTOR
 */

r(function(){
  const b = h0(163)
  const i = h1(0, b)
  return i
})

/**
 * SET_ALIGN_CONTENT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(164, b)
})

/**
 * SET_ALIGN_ITEMS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(165, b)
})

/**
 * SET_ALIGN_SELF_STYLE
 */

r(function(a){
  const b = d(a)
  h1(166, b)
})

/**
 * SET_ALIGNMENT_ADJUST_STYLE
 */

r(function(a){
  const b = d(a)
  h1(167, b)
})

/**
 * SET_ALIGNMENT_BASELINE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(168, b)
})

/**
 * SET_ALL_STYLE
 */

r(function(a){
  const b = d(a)
  h1(169, b)
})

/**
 * SET_ANIMATION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(170, b)
})

/**
 * SET_ANIMATION_DELAY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(171, b)
})

/**
 * SET_ANIMATION_DIRECTION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(172, b)
})

/**
 * SET_ANIMATION_DURATION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(173, b)
})

/**
 * SET_ANIMATION_FILL_MODE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(174, b)
})

/**
 * SET_ANIMATION_ITERATION_COUNT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(175, b)
})

/**
 * SET_ANIMATION_NAME_STYLE
 */

r(function(a){
  const b = d(a)
  h1(176, b)
})

/**
 * SET_ANIMATION_PLAY_STATE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(177, b)
})

/**
 * SET_ANIMATION_TIMING_FUNCTION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(178, b)
})

/**
 * SET_APPEARANCE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(179, b)
})

/**
 * SET_AZIMUTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(180, b)
})

/**
 * SET_BACKFACE_VISIBILITY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(181, b)
})

/**
 * SET_BACKGROUND_STYLE
 */

r(function(a){
  const b = d(a)
  h1(182, b)
})

/**
 * SET_BACKGROUND_ATTACHMENT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(183, b)
})

/**
 * SET_BACKGROUND_BLEND_MODE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(184, b)
})

/**
 * SET_BACKGROUND_CLIP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(185, b)
})

/**
 * SET_BACKGROUND_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(186, b)
})

/**
 * SET_BACKGROUND_IMAGE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(187, b)
})

/**
 * SET_BACKGROUND_ORIGIN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(188, b)
})

/**
 * SET_BACKGROUND_POSITION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(189, b)
})

/**
 * SET_BACKGROUND_REPEAT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(190, b)
})

/**
 * SET_BACKGROUND_SIZE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(191, b)
})

/**
 * SET_BASELINE_SHIFT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(192, b)
})

/**
 * SET_BASELINE_SOURCE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(193, b)
})

/**
 * SET_BLOCK_ELLIPSIS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(194, b)
})

/**
 * SET_BLOCK_OVERFLOW_STYLE
 */

r(function(a){
  const b = d(a)
  h1(195, b)
})

/**
 * SET_BLOCK_SIZE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(196, b)
})

/**
 * SET_BLOCK_STEP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(197, b)
})

/**
 * SET_BLOCK_STEP_ALIGN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(198, b)
})

/**
 * SET_BLOCK_STEP_INSERT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(199, b)
})

/**
 * SET_BLOCK_STEP_ROUND_STYLE
 */

r(function(a){
  const b = d(a)
  h1(200, b)
})

/**
 * SET_BLOCK_STEP_SIZE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(201, b)
})

/**
 * SET_BOOKMARK_LABEL_STYLE
 */

r(function(a){
  const b = d(a)
  h1(202, b)
})

/**
 * SET_BOOKMARK_LEVEL_STYLE
 */

r(function(a){
  const b = d(a)
  h1(203, b)
})

/**
 * SET_BOOKMARK_STATE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(204, b)
})

/**
 * SET_BORDER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(205, b)
})

/**
 * SET_BORDER_BLOCK_STYLE
 */

r(function(a){
  const b = d(a)
  h1(206, b)
})

/**
 * SET_BORDER_BLOCK_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(207, b)
})

/**
 * SET_BORDER_BLOCK_END_STYLE
 */

r(function(a){
  const b = d(a)
  h1(208, b)
})

/**
 * SET_BORDER_BLOCK_END_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(209, b)
})

/**
 * SET_BORDER_BLOCK_END_STYLE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(210, b)
})

/**
 * SET_BORDER_BLOCK_END_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(211, b)
})

/**
 * SET_BORDER_BLOCK_START_STYLE
 */

r(function(a){
  const b = d(a)
  h1(212, b)
})

/**
 * SET_BORDER_BLOCK_START_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(213, b)
})

/**
 * SET_BORDER_BLOCK_START_STYLE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(214, b)
})

/**
 * SET_BORDER_BLOCK_START_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(215, b)
})

/**
 * SET_BORDER_BLOCK_STYLE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(216, b)
})

/**
 * SET_BORDER_BLOCK_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(217, b)
})

/**
 * SET_BORDER_BOTTOM_STYLE
 */

r(function(a){
  const b = d(a)
  h1(218, b)
})

/**
 * SET_BORDER_BOTTOM_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(219, b)
})

/**
 * SET_BORDER_BOTTOM_FIT_LENGTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(220, b)
})

/**
 * SET_BORDER_BOTTOM_FIT_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(221, b)
})

/**
 * SET_BORDER_BOTTOM_IMAGE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(222, b)
})

/**
 * SET_BORDER_BOTTOM_LEFT_FIT_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(223, b)
})

/**
 * SET_BORDER_BOTTOM_LEFT_IMAGE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(224, b)
})

/**
 * SET_BORDER_BOTTOM_LEFT_RADIUS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(225, b)
})

/**
 * SET_BORDER_BOTTOM_RIGHT_FIT_LENGTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(226, b)
})

/**
 * SET_BORDER_BOTTOM_RIGHT_FIT_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(227, b)
})

/**
 * SET_BORDER_BOTTOM_RIGHT_IMAGE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(228, b)
})

/**
 * SET_BORDER_BOTTOM_RIGHT_RADIUS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(229, b)
})

/**
 * SET_BORDER_BOTTOM_STYLE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(230, b)
})

/**
 * SET_BORDER_BOTTOM_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(231, b)
})

/**
 * SET_BORDER_BOTTOML_EFT_FIT_LENGTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(232, b)
})

/**
 * SET_BORDER_BOUNDARY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(233, b)
})

/**
 * SET_BORDER_BREAK_STYLE
 */

r(function(a){
  const b = d(a)
  h1(234, b)
})

/**
 * SET_BORDER_COLLAPSE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(235, b)
})

/**
 * SET_BORDER_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(236, b)
})

/**
 * SET_BORDER_CORNER_FIT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(237, b)
})

/**
 * SET_BORDER_CORNER_IMAGE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(238, b)
})

/**
 * SET_BORDER_CORNER_IMAGE_TRANSFORM_STYLE
 */

r(function(a){
  const b = d(a)
  h1(239, b)
})

/**
 * SET_BORDER_END_END_RADIUS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(240, b)
})

/**
 * SET_BORDER_END_START_RADIUS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(241, b)
})

/**
 * SET_BORDER_FIT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(242, b)
})

/**
 * SET_BORDER_FIT_LENGTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(243, b)
})

/**
 * SET_BORDER_FIT_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(244, b)
})

/**
 * SET_BORDER_IMAGE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(245, b)
})

/**
 * SET_BORDER_IMAGE_OUTSET_STYLE
 */

r(function(a){
  const b = d(a)
  h1(246, b)
})

/**
 * SET_BORDER_IMAGE_REPEAT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(247, b)
})

/**
 * SET_BORDER_IMAGE_SLICE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(248, b)
})

/**
 * SET_BORDER_IMAGE_SOURCE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(249, b)
})

/**
 * SET_BORDER_IMAGE_TRANSFORM_STYLE
 */

r(function(a){
  const b = d(a)
  h1(250, b)
})

/**
 * SET_BORDER_IMAGE_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(251, b)
})

/**
 * SET_BORDER_INLINE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(252, b)
})

/**
 * SET_BORDER_INLINE_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(253, b)
})

/**
 * SET_BORDER_INLINE_END_STYLE
 */

r(function(a){
  const b = d(a)
  h1(254, b)
})

/**
 * SET_BORDER_INLINE_END_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(255, b)
})

/**
 * SET_BORDER_INLINE_END_STYLE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(256, b)
})

/**
 * SET_BORDER_INLINE_END_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(257, b)
})

/**
 * SET_BORDER_INLINE_START_STYLE
 */

r(function(a){
  const b = d(a)
  h1(258, b)
})

/**
 * SET_BORDER_INLINE_START_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(259, b)
})

/**
 * SET_BORDER_INLINE_START_STYLE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(260, b)
})

/**
 * SET_BORDER_INLINE_START_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(261, b)
})

/**
 * SET_BORDER_INLINE_STYLE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(262, b)
})

/**
 * SET_BORDER_INLINE_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(263, b)
})

/**
 * SET_BORDER_LEFT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(264, b)
})

/**
 * SET_BORDER_LEFT_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(265, b)
})

/**
 * SET_BORDER_LEFT_FIT_LENGTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(266, b)
})

/**
 * SET_BORDER_LEFT_FIT_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(267, b)
})

/**
 * SET_BORDER_LEFT_IMAGE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(268, b)
})

/**
 * SET_BORDER_LEFT_STYLE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(269, b)
})

/**
 * SET_BORDER_LEFT_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(270, b)
})

/**
 * SET_BORDER_RADIUS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(271, b)
})

/**
 * SET_BORDER_RIGHT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(272, b)
})

/**
 * SET_BORDER_RIGHT_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(273, b)
})

/**
 * SET_BORDER_RIGHT_FIT_LENGTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(274, b)
})

/**
 * SET_BORDER_RIGHT_FIT_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(275, b)
})

/**
 * SET_BORDER_RIGHT_IMAGE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(276, b)
})

/**
 * SET_BORDER_RIGHT_STYLE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(277, b)
})

/**
 * SET_BORDER_RIGHT_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(278, b)
})

/**
 * SET_BORDER_SPACING_STYLE
 */

r(function(a){
  const b = d(a)
  h1(279, b)
})

/**
 * SET_BORDER_START_END_RADIUS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(280, b)
})

/**
 * SET_BORDER_START_START_RADIUS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(281, b)
})

/**
 * SET_BORDER_STYLE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(282, b)
})

/**
 * SET_BORDER_TOP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(283, b)
})

/**
 * SET_BORDER_TOP_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(284, b)
})

/**
 * SET_BORDER_TOP_FIT_LENGTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(285, b)
})

/**
 * SET_BORDER_TOP_FIT_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(286, b)
})

/**
 * SET_BORDER_TOP_IMAGE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(287, b)
})

/**
 * SET_BORDER_TOP_LEFT_FIT_LENGTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(288, b)
})

/**
 * SET_BORDER_TOP_LEFT_FIT_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(289, b)
})

/**
 * SET_BORDER_TOP_LEFT_IMAGE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(290, b)
})

/**
 * SET_BORDER_TOP_LEFT_RADIUS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(291, b)
})

/**
 * SET_BORDER_TOP_RIGHT_FIT_LENGTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(292, b)
})

/**
 * SET_BORDER_TOP_RIGHT_FIT_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(293, b)
})

/**
 * SET_BORDER_TOP_RIGHT_IMAGE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(294, b)
})

/**
 * SET_BORDER_TOP_RIGHT_RADIUS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(295, b)
})

/**
 * SET_BORDER_TOP_STYLE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(296, b)
})

/**
 * SET_BORDER_TOP_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(297, b)
})

/**
 * SET_BORDER_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(298, b)
})

/**
 * SET_BOTTOM_STYLE
 */

r(function(a){
  const b = d(a)
  h1(299, b)
})

/**
 * SET_BOX_DECORATION_BREAK_STYLE
 */

r(function(a){
  const b = d(a)
  h1(300, b)
})

/**
 * SET_BOX_SHADOW_STYLE
 */

r(function(a){
  const b = d(a)
  h1(301, b)
})

/**
 * SET_BOX_SIZING_STYLE
 */

r(function(a){
  const b = d(a)
  h1(302, b)
})

/**
 * SET_BOX_SNAP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(303, b)
})

/**
 * SET_BREAK_AFTER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(304, b)
})

/**
 * SET_BREAK_BEFORE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(305, b)
})

/**
 * SET_BREAK_INSIDE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(306, b)
})

/**
 * SET_CAPTION_SIDE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(307, b)
})

/**
 * SET_CARET_STYLE
 */

r(function(a){
  const b = d(a)
  h1(308, b)
})

/**
 * SET_CARET_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(309, b)
})

/**
 * SET_CARET_SHAPE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(310, b)
})

/**
 * SET_CHAINS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(311, b)
})

/**
 * SET_CLEAR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(312, b)
})

/**
 * SET_CLIP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(313, b)
})

/**
 * SET_CLIP_PATH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(314, b)
})

/**
 * SET_CLIP_RULE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(315, b)
})

/**
 * SET_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(316, b)
})

/**
 * SET_COLOR_ADJUST_STYLE
 */

r(function(a){
  const b = d(a)
  h1(317, b)
})

/**
 * SET_COLOR_INTERPOLATION_FILTERS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(318, b)
})

/**
 * SET_COLOR_SCHEME_STYLE
 */

r(function(a){
  const b = d(a)
  h1(319, b)
})

/**
 * SET_COLUMN_COUNT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(320, b)
})

/**
 * SET_COLUMN_FILL_STYLE
 */

r(function(a){
  const b = d(a)
  h1(321, b)
})

/**
 * SET_COLUMN_GAP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(322, b)
})

/**
 * SET_COLUMN_RULE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(323, b)
})

/**
 * SET_COLUMN_RULE_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(324, b)
})

/**
 * SET_COLUMN_RULE_STYLE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(325, b)
})

/**
 * SET_COLUMN_RULE_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(326, b)
})

/**
 * SET_COLUMN_SPAN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(327, b)
})

/**
 * SET_COLUMN_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(328, b)
})

/**
 * SET_COLUMNS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(329, b)
})

/**
 * SET_CONTAIN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(330, b)
})

/**
 * SET_CONTENT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(331, b)
})

/**
 * SET_CONTINUE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(332, b)
})

/**
 * SET_COUNTER_INCREMENT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(333, b)
})

/**
 * SET_COUNTER_RESET_STYLE
 */

r(function(a){
  const b = d(a)
  h1(334, b)
})

/**
 * SET_COUNTER_SET_STYLE
 */

r(function(a){
  const b = d(a)
  h1(335, b)
})

/**
 * SET_CUE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(336, b)
})

/**
 * SET_CUE_AFTER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(337, b)
})

/**
 * SET_CUE_BEFORE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(338, b)
})

/**
 * SET_CURSOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(339, b)
})

/**
 * SET_DIRECTION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(340, b)
})

/**
 * SET_DISPLAY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(341, b)
})

/**
 * SET_DOMINANT_BASELINE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(342, b)
})

/**
 * SET_DROP_INITIAL_AFTER_ADJUST_STYLE
 */

r(function(a){
  const b = d(a)
  h1(343, b)
})

/**
 * SET_DROP_INITIAL_AFTER_ALIGN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(344, b)
})

/**
 * SET_DROP_INITIAL_BEFORE_ADJUST_STYLE
 */

r(function(a){
  const b = d(a)
  h1(345, b)
})

/**
 * SET_DROP_INITIAL_BEFORE_ALIGN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(346, b)
})

/**
 * SET_DROP_INITIAL_SIZE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(347, b)
})

/**
 * SET_DROP_INITIAL_VALUE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(348, b)
})

/**
 * SET_ELEVATION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(349, b)
})

/**
 * SET_EMPTY_CELLS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(350, b)
})

/**
 * SET_FILL_STYLE
 */

r(function(a){
  const b = d(a)
  h1(351, b)
})

/**
 * SET_FILL_BREAK_STYLE
 */

r(function(a){
  const b = d(a)
  h1(352, b)
})

/**
 * SET_FILL_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(353, b)
})

/**
 * SET_FILL_IMAGE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(354, b)
})

/**
 * SET_FILL_OPACITY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(355, b)
})

/**
 * SET_FILL_ORIGIN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(356, b)
})

/**
 * SET_FILL_POSITION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(357, b)
})

/**
 * SET_FILL_REPEAT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(358, b)
})

/**
 * SET_FILL_RULE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(359, b)
})

/**
 * SET_FILL_SIZE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(360, b)
})

/**
 * SET_FILTER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(361, b)
})

/**
 * SET_FLEX_STYLE
 */

r(function(a){
  const b = d(a)
  h1(362, b)
})

/**
 * SET_FLEX_BASIS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(363, b)
})

/**
 * SET_FLEX_DIRECTION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(364, b)
})

/**
 * SET_FLEX_FLOW_STYLE
 */

r(function(a){
  const b = d(a)
  h1(365, b)
})

/**
 * SET_FLEX_GROW_STYLE
 */

r(function(a){
  const b = d(a)
  h1(366, b)
})

/**
 * SET_FLEX_SHRINK_STYLE
 */

r(function(a){
  const b = d(a)
  h1(367, b)
})

/**
 * SET_FLEX_WRAP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(368, b)
})

/**
 * SET_FLOAT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(369, b)
})

/**
 * SET_FLOAT_DEFER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(370, b)
})

/**
 * SET_FLOAT_OFFSET_STYLE
 */

r(function(a){
  const b = d(a)
  h1(371, b)
})

/**
 * SET_FLOAT_REFERENCE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(372, b)
})

/**
 * SET_FLOOD_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(373, b)
})

/**
 * SET_FLOOD_OPACITY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(374, b)
})

/**
 * SET_FLOW_STYLE
 */

r(function(a){
  const b = d(a)
  h1(375, b)
})

/**
 * SET_FLOW_FROM_STYLE
 */

r(function(a){
  const b = d(a)
  h1(376, b)
})

/**
 * SET_FLOW_INTO_STYLE
 */

r(function(a){
  const b = d(a)
  h1(377, b)
})

/**
 * SET_FONT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(378, b)
})

/**
 * SET_FONT_FAMILY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(379, b)
})

/**
 * SET_FONT_FEATURE_SETTINGS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(380, b)
})

/**
 * SET_FONT_KERNING_STYLE
 */

r(function(a){
  const b = d(a)
  h1(381, b)
})

/**
 * SET_FONT_LANGUAGE_OVERRIDE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(382, b)
})

/**
 * SET_FONT_MAX_SIZE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(383, b)
})

/**
 * SET_FONT_MIN_SIZE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(384, b)
})

/**
 * SET_FONT_OPTICAL_SIZING_STYLE
 */

r(function(a){
  const b = d(a)
  h1(385, b)
})

/**
 * SET_FONT_PALETTE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(386, b)
})

/**
 * SET_FONT_SIZE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(387, b)
})

/**
 * SET_FONT_SIZE_ADJUST_STYLE
 */

r(function(a){
  const b = d(a)
  h1(388, b)
})

/**
 * SET_FONT_STRETCH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(389, b)
})

/**
 * SET_FONT_STYLE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(390, b)
})

/**
 * SET_FONT_SYNTHESIS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(391, b)
})

/**
 * SET_FONT_SYNTHESIS_SMALL_CAPS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(392, b)
})

/**
 * SET_FONT_SYNTHESIS_STYLE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(393, b)
})

/**
 * SET_FONT_SYNTHESIS_WEIGHT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(394, b)
})

/**
 * SET_FONT_VARIANT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(395, b)
})

/**
 * SET_FONT_VARIANT_ALTERNATES_STYLE
 */

r(function(a){
  const b = d(a)
  h1(396, b)
})

/**
 * SET_FONT_VARIANT_CAPS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(397, b)
})

/**
 * SET_FONT_VARIANT_EAST_ASIAN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(398, b)
})

/**
 * SET_FONT_VARIANT_EMOJI_STYLE
 */

r(function(a){
  const b = d(a)
  h1(399, b)
})

/**
 * SET_FONT_VARIANT_LIGATURES_STYLE
 */

r(function(a){
  const b = d(a)
  h1(400, b)
})

/**
 * SET_FONT_VARIANT_NUMERIC_STYLE
 */

r(function(a){
  const b = d(a)
  h1(401, b)
})

/**
 * SET_FONT_VARIANT_POSITION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(402, b)
})

/**
 * SET_FONT_VARIATION_SETTINGS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(403, b)
})

/**
 * SET_FONT_WEIGHT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(404, b)
})

/**
 * SET_FOOTNOTE_DISPLAY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(405, b)
})

/**
 * SET_FOOTNOTE_POLICY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(406, b)
})

/**
 * SET_FORCED_COLOR_ADJUST_STYLE
 */

r(function(a){
  const b = d(a)
  h1(407, b)
})

/**
 * SET_GAP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(408, b)
})

/**
 * SET_GLYPH_ORIENTATION_VERTICAL_STYLE
 */

r(function(a){
  const b = d(a)
  h1(409, b)
})

/**
 * SET_GRID_STYLE
 */

r(function(a){
  const b = d(a)
  h1(410, b)
})

/**
 * SET_GRID_AREA_STYLE
 */

r(function(a){
  const b = d(a)
  h1(411, b)
})

/**
 * SET_GRID_AUTO_COLUMNS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(412, b)
})

/**
 * SET_GRID_AUTO_FLOW_STYLE
 */

r(function(a){
  const b = d(a)
  h1(413, b)
})

/**
 * SET_GRID_AUTO_ROWS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(414, b)
})

/**
 * SET_GRID_COLUMN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(415, b)
})

/**
 * SET_GRID_COLUMN_END_STYLE
 */

r(function(a){
  const b = d(a)
  h1(416, b)
})

/**
 * SET_GRID_COLUMN_START_STYLE
 */

r(function(a){
  const b = d(a)
  h1(417, b)
})

/**
 * SET_GRID_ROW_STYLE
 */

r(function(a){
  const b = d(a)
  h1(418, b)
})

/**
 * SET_GRID_ROW_END_STYLE
 */

r(function(a){
  const b = d(a)
  h1(419, b)
})

/**
 * SET_GRID_ROW_START_STYLE
 */

r(function(a){
  const b = d(a)
  h1(420, b)
})

/**
 * SET_GRID_TEMPLATE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(421, b)
})

/**
 * SET_GRID_TEMPLATE_AREAS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(422, b)
})

/**
 * SET_GRID_TEMPLATE_COLUMNS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(423, b)
})

/**
 * SET_GRID_TEMPLATE_ROWS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(424, b)
})

/**
 * SET_HANGING_PUNCTUATION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(425, b)
})

/**
 * SET_HEIGHT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(426, b)
})

/**
 * SET_HYPHENATE_CHARACTER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(427, b)
})

/**
 * SET_HYPHENATE_LIMIT_CHARS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(428, b)
})

/**
 * SET_HYPHENATE_LIMIT_LAST_STYLE
 */

r(function(a){
  const b = d(a)
  h1(429, b)
})

/**
 * SET_HYPHENATE_LIMIT_LINES_STYLE
 */

r(function(a){
  const b = d(a)
  h1(430, b)
})

/**
 * SET_HYPHENATE_LIMIT_ZONE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(431, b)
})

/**
 * SET_HYPHENS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(432, b)
})

/**
 * SET_IMAGE_ORIENTATION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(433, b)
})

/**
 * SET_IMAGE_RENDERING_STYLE
 */

r(function(a){
  const b = d(a)
  h1(434, b)
})

/**
 * SET_IMAGE_RESOLUTION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(435, b)
})

/**
 * SET_INITIAL_LETTERS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(436, b)
})

/**
 * SET_INITIAL_LETTERS_ALIGN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(437, b)
})

/**
 * SET_INITIAL_LETTERS_WRAP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(438, b)
})

/**
 * SET_INLINE_BOX_ALIGN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(439, b)
})

/**
 * SET_INLINE_SIZE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(440, b)
})

/**
 * SET_INLINE_SIZING_STYLE
 */

r(function(a){
  const b = d(a)
  h1(441, b)
})

/**
 * SET_INSET_STYLE
 */

r(function(a){
  const b = d(a)
  h1(442, b)
})

/**
 * SET_INSET_AFTER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(443, b)
})

/**
 * SET_INSET_BEFORE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(444, b)
})

/**
 * SET_INSET_BLOCK_STYLE
 */

r(function(a){
  const b = d(a)
  h1(445, b)
})

/**
 * SET_INSET_BLOCK_END_STYLE
 */

r(function(a){
  const b = d(a)
  h1(446, b)
})

/**
 * SET_INSET_BLOCK_START_STYLE
 */

r(function(a){
  const b = d(a)
  h1(447, b)
})

/**
 * SET_INSET_END_STYLE
 */

r(function(a){
  const b = d(a)
  h1(448, b)
})

/**
 * SET_INSET_INLINE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(449, b)
})

/**
 * SET_INSET_INLINE_END_STYLE
 */

r(function(a){
  const b = d(a)
  h1(450, b)
})

/**
 * SET_INSET_INLINE_START_STYLE
 */

r(function(a){
  const b = d(a)
  h1(451, b)
})

/**
 * SET_INSET_START_STYLE
 */

r(function(a){
  const b = d(a)
  h1(452, b)
})

/**
 * SET_ISOLATION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(453, b)
})

/**
 * SET_JUSTIFY_CONTENT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(454, b)
})

/**
 * SET_JUSTIFY_ITEMS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(455, b)
})

/**
 * SET_JUSTIFY_SELF_STYLE
 */

r(function(a){
  const b = d(a)
  h1(456, b)
})

/**
 * SET_LEADING_TRIM_STYLE
 */

r(function(a){
  const b = d(a)
  h1(457, b)
})

/**
 * SET_LEADING_TRIM_OVER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(458, b)
})

/**
 * SET_LEADING_TRIM_UNDER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(459, b)
})

/**
 * SET_LEFT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(460, b)
})

/**
 * SET_LETTER_SPACING_STYLE
 */

r(function(a){
  const b = d(a)
  h1(461, b)
})

/**
 * SET_LIGHTING_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(462, b)
})

/**
 * SET_LINE_BREAK_STYLE
 */

r(function(a){
  const b = d(a)
  h1(463, b)
})

/**
 * SET_LINE_CLAMP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(464, b)
})

/**
 * SET_LINE_GRID_STYLE
 */

r(function(a){
  const b = d(a)
  h1(465, b)
})

/**
 * SET_LINE_HEIGHT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(466, b)
})

/**
 * SET_LINE_HEIGHT_STEP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(467, b)
})

/**
 * SET_LINE_PADDING_STYLE
 */

r(function(a){
  const b = d(a)
  h1(468, b)
})

/**
 * SET_LINE_SIZING_STYLE
 */

r(function(a){
  const b = d(a)
  h1(469, b)
})

/**
 * SET_LINE_SNAP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(470, b)
})

/**
 * SET_LINE_STACKING_STYLE
 */

r(function(a){
  const b = d(a)
  h1(471, b)
})

/**
 * SET_LINE_STACKING_RUBY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(472, b)
})

/**
 * SET_LINE_STACKING_SHIFT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(473, b)
})

/**
 * SET_LINE_STACKING_STRATEGY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(474, b)
})

/**
 * SET_LIST_STYLE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(475, b)
})

/**
 * SET_LIST_STYLE_IMAGE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(476, b)
})

/**
 * SET_LIST_STYLE_POSITION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(477, b)
})

/**
 * SET_LIST_STYLE_TYPE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(478, b)
})

/**
 * SET_MARGIN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(479, b)
})

/**
 * SET_MARGIN_BLOCK_STYLE
 */

r(function(a){
  const b = d(a)
  h1(480, b)
})

/**
 * SET_MARGIN_BLOCK_END_STYLE
 */

r(function(a){
  const b = d(a)
  h1(481, b)
})

/**
 * SET_MARGIN_BLOCK_START_STYLE
 */

r(function(a){
  const b = d(a)
  h1(482, b)
})

/**
 * SET_MARGIN_BOTTOM_STYLE
 */

r(function(a){
  const b = d(a)
  h1(483, b)
})

/**
 * SET_MARGIN_BREAK_STYLE
 */

r(function(a){
  const b = d(a)
  h1(484, b)
})

/**
 * SET_MARGIN_INLINE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(485, b)
})

/**
 * SET_MARGIN_INLINE_END_STYLE
 */

r(function(a){
  const b = d(a)
  h1(486, b)
})

/**
 * SET_MARGIN_INLINE_START_STYLE
 */

r(function(a){
  const b = d(a)
  h1(487, b)
})

/**
 * SET_MARGIN_LEFT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(488, b)
})

/**
 * SET_MARGIN_RIGHT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(489, b)
})

/**
 * SET_MARGIN_TOP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(490, b)
})

/**
 * SET_MARGIN_TRIM_STYLE
 */

r(function(a){
  const b = d(a)
  h1(491, b)
})

/**
 * SET_MARKER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(492, b)
})

/**
 * SET_MARKER_END_STYLE
 */

r(function(a){
  const b = d(a)
  h1(493, b)
})

/**
 * SET_MARKER_KNOCKOUT_LEFT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(494, b)
})

/**
 * SET_MARKER_KNOCKOUT_RIGHT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(495, b)
})

/**
 * SET_MARKER_MID_STYLE
 */

r(function(a){
  const b = d(a)
  h1(496, b)
})

/**
 * SET_MARKER_PATTERN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(497, b)
})

/**
 * SET_MARKER_SEGMENT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(498, b)
})

/**
 * SET_MARKER_SIDE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(499, b)
})

/**
 * SET_MARKER_START_STYLE
 */

r(function(a){
  const b = d(a)
  h1(500, b)
})

/**
 * SET_MASK_STYLE
 */

r(function(a){
  const b = d(a)
  h1(501, b)
})

/**
 * SET_MASK_BORDER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(502, b)
})

/**
 * SET_MASK_BORDER_MODE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(503, b)
})

/**
 * SET_MASK_BORDER_OUTSET_STYLE
 */

r(function(a){
  const b = d(a)
  h1(504, b)
})

/**
 * SET_MASK_BORDER_REPEAT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(505, b)
})

/**
 * SET_MASK_BORDER_SLICE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(506, b)
})

/**
 * SET_MASK_BORDER_SOURCE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(507, b)
})

/**
 * SET_MASK_BORDER_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(508, b)
})

/**
 * SET_MASK_CLIP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(509, b)
})

/**
 * SET_MASK_COMPOSITE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(510, b)
})

/**
 * SET_MASK_IMAGE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(511, b)
})

/**
 * SET_MASK_MODE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(512, b)
})

/**
 * SET_MASK_ORIGIN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(513, b)
})

/**
 * SET_MASK_POSITION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(514, b)
})

/**
 * SET_MASK_REPEAT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(515, b)
})

/**
 * SET_MASK_SIZE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(516, b)
})

/**
 * SET_MASK_TYPE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(517, b)
})

/**
 * SET_MAX_BLOCK_SIZE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(518, b)
})

/**
 * SET_MAX_HEIGHT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(519, b)
})

/**
 * SET_MAX_INLINE_SIZE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(520, b)
})

/**
 * SET_MAX_LINES_STYLE
 */

r(function(a){
  const b = d(a)
  h1(521, b)
})

/**
 * SET_MAX_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(522, b)
})

/**
 * SET_MIN_BLOCK_SIZE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(523, b)
})

/**
 * SET_MIN_HEIGHT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(524, b)
})

/**
 * SET_MIN_INLINE_SIZE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(525, b)
})

/**
 * SET_MIN_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(526, b)
})

/**
 * SET_MIX_BLEND_MODE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(527, b)
})

/**
 * SET_NAV_DOWN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(528, b)
})

/**
 * SET_NAV_LEFT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(529, b)
})

/**
 * SET_NAV_RIGHT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(530, b)
})

/**
 * SET_NAV_UP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(531, b)
})

/**
 * SET_OBJECT_FIT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(532, b)
})

/**
 * SET_OBJECT_POSITION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(533, b)
})

/**
 * SET_OFFSET_STYLE
 */

r(function(a){
  const b = d(a)
  h1(534, b)
})

/**
 * SET_OFFSET_AFTER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(535, b)
})

/**
 * SET_OFFSET_ANCHOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(536, b)
})

/**
 * SET_OFFSET_BEFORE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(537, b)
})

/**
 * SET_OFFSET_DISTANCE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(538, b)
})

/**
 * SET_OFFSET_END_STYLE
 */

r(function(a){
  const b = d(a)
  h1(539, b)
})

/**
 * SET_OFFSET_PATH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(540, b)
})

/**
 * SET_OFFSET_POSITION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(541, b)
})

/**
 * SET_OFFSET_ROTATE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(542, b)
})

/**
 * SET_OFFSET_START_STYLE
 */

r(function(a){
  const b = d(a)
  h1(543, b)
})

/**
 * SET_OPACITY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(544, b)
})

/**
 * SET_ORDER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(545, b)
})

/**
 * SET_ORPHANS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(546, b)
})

/**
 * SET_OUTLINE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(547, b)
})

/**
 * SET_OUTLINE_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(548, b)
})

/**
 * SET_OUTLINE_OFFSET_STYLE
 */

r(function(a){
  const b = d(a)
  h1(549, b)
})

/**
 * SET_OUTLINE_STYLE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(550, b)
})

/**
 * SET_OUTLINE_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(551, b)
})

/**
 * SET_OVERFLOW_STYLE
 */

r(function(a){
  const b = d(a)
  h1(552, b)
})

/**
 * SET_OVERFLOW_BLOCK_STYLE
 */

r(function(a){
  const b = d(a)
  h1(553, b)
})

/**
 * SET_OVERFLOW_INLINE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(554, b)
})

/**
 * SET_OVERFLOW_WRAP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(555, b)
})

/**
 * SET_OVERFLOW_X_STYLE
 */

r(function(a){
  const b = d(a)
  h1(556, b)
})

/**
 * SET_OVERFLOW_Y_STYLE
 */

r(function(a){
  const b = d(a)
  h1(557, b)
})

/**
 * SET_OVERSCROLL_BEHAVIOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(558, b)
})

/**
 * SET_OVERSCROLL_BEHAVIOR_BLOCK_STYLE
 */

r(function(a){
  const b = d(a)
  h1(559, b)
})

/**
 * SET_OVERSCROLL_BEHAVIOR_INLINE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(560, b)
})

/**
 * SET_OVERSCROLL_BEHAVIOR_X_STYLE
 */

r(function(a){
  const b = d(a)
  h1(561, b)
})

/**
 * SET_OVERSCROLL_BEHAVIOR_Y_STYLE
 */

r(function(a){
  const b = d(a)
  h1(562, b)
})

/**
 * SET_PADDING_STYLE
 */

r(function(a){
  const b = d(a)
  h1(563, b)
})

/**
 * SET_PADDING_BLOCK_STYLE
 */

r(function(a){
  const b = d(a)
  h1(564, b)
})

/**
 * SET_PADDING_BLOCK_END_STYLE
 */

r(function(a){
  const b = d(a)
  h1(565, b)
})

/**
 * SET_PADDING_BLOCK_START_STYLE
 */

r(function(a){
  const b = d(a)
  h1(566, b)
})

/**
 * SET_PADDING_BOTTOM_STYLE
 */

r(function(a){
  const b = d(a)
  h1(567, b)
})

/**
 * SET_PADDING_INLINE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(568, b)
})

/**
 * SET_PADDING_INLINE_END_STYLE
 */

r(function(a){
  const b = d(a)
  h1(569, b)
})

/**
 * SET_PADDING_INLINE_START_STYLE
 */

r(function(a){
  const b = d(a)
  h1(570, b)
})

/**
 * SET_PADDING_LEFT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(571, b)
})

/**
 * SET_PADDING_RIGHT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(572, b)
})

/**
 * SET_PADDING_TOP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(573, b)
})

/**
 * SET_PAGE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(574, b)
})

/**
 * SET_PAGE_BREAK_AFTER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(575, b)
})

/**
 * SET_PAGE_BREAK_BEFORE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(576, b)
})

/**
 * SET_PAGE_BREAK_INSIDE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(577, b)
})

/**
 * SET_PAUSE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(578, b)
})

/**
 * SET_PAUSE_AFTER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(579, b)
})

/**
 * SET_PAUSE_BEFORE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(580, b)
})

/**
 * SET_PERSPECTIVE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(581, b)
})

/**
 * SET_PERSPECTIVE_ORIGIN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(582, b)
})

/**
 * SET_PITCH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(583, b)
})

/**
 * SET_PITCH_RANGE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(584, b)
})

/**
 * SET_PLACE_CONTENT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(585, b)
})

/**
 * SET_PLACE_ITEMS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(586, b)
})

/**
 * SET_PLACE_SELF_STYLE
 */

r(function(a){
  const b = d(a)
  h1(587, b)
})

/**
 * SET_PLAY_DURING_STYLE
 */

r(function(a){
  const b = d(a)
  h1(588, b)
})

/**
 * SET_POSITION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(589, b)
})

/**
 * SET_QUOTES_STYLE
 */

r(function(a){
  const b = d(a)
  h1(590, b)
})

/**
 * SET_REGION_FRAGMENT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(591, b)
})

/**
 * SET_RESIZE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(592, b)
})

/**
 * SET_RICHNESS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(593, b)
})

/**
 * SET_RIGHT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(594, b)
})

/**
 * SET_ROW_GAP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(595, b)
})

/**
 * SET_RUBY_ALIGN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(596, b)
})

/**
 * SET_RUBY_MERGE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(597, b)
})

/**
 * SET_RUBY_POSITION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(598, b)
})

/**
 * SET_RUNNING_STYLE
 */

r(function(a){
  const b = d(a)
  h1(599, b)
})

/**
 * SET_SCROLL_BEHAVIOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(600, b)
})

/**
 * SET_SCROLL_MARGIN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(601, b)
})

/**
 * SET_SCROLL_MARGIN_BLOCK_STYLE
 */

r(function(a){
  const b = d(a)
  h1(602, b)
})

/**
 * SET_SCROLL_MARGIN_BLOCK_END_STYLE
 */

r(function(a){
  const b = d(a)
  h1(603, b)
})

/**
 * SET_SCROLL_MARGIN_BLOCK_START_STYLE
 */

r(function(a){
  const b = d(a)
  h1(604, b)
})

/**
 * SET_SCROLL_MARGIN_BOTTOM_STYLE
 */

r(function(a){
  const b = d(a)
  h1(605, b)
})

/**
 * SET_SCROLL_MARGIN_INLINE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(606, b)
})

/**
 * SET_SCROLL_MARGIN_INLINE_END_STYLE
 */

r(function(a){
  const b = d(a)
  h1(607, b)
})

/**
 * SET_SCROLL_MARGIN_INLINE_START_STYLE
 */

r(function(a){
  const b = d(a)
  h1(608, b)
})

/**
 * SET_SCROLL_MARGIN_LEFT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(609, b)
})

/**
 * SET_SCROLL_MARGIN_RIGHT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(610, b)
})

/**
 * SET_SCROLL_MARGIN_TOP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(611, b)
})

/**
 * SET_SCROLL_PADDING_STYLE
 */

r(function(a){
  const b = d(a)
  h1(612, b)
})

/**
 * SET_SCROLL_PADDING_BLOCK_STYLE
 */

r(function(a){
  const b = d(a)
  h1(613, b)
})

/**
 * SET_SCROLL_PADDING_BLOCK_END_STYLE
 */

r(function(a){
  const b = d(a)
  h1(614, b)
})

/**
 * SET_SCROLL_PADDING_BLOCK_START_STYLE
 */

r(function(a){
  const b = d(a)
  h1(615, b)
})

/**
 * SET_SCROLL_PADDING_BOTTOM_STYLE
 */

r(function(a){
  const b = d(a)
  h1(616, b)
})

/**
 * SET_SCROLL_PADDING_INLINE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(617, b)
})

/**
 * SET_SCROLL_PADDING_INLINE_END_STYLE
 */

r(function(a){
  const b = d(a)
  h1(618, b)
})

/**
 * SET_SCROLL_PADDING_INLINE_START_STYLE
 */

r(function(a){
  const b = d(a)
  h1(619, b)
})

/**
 * SET_SCROLL_PADDING_LEFT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(620, b)
})

/**
 * SET_SCROLL_PADDING_RIGHT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(621, b)
})

/**
 * SET_SCROLL_PADDING_TOP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(622, b)
})

/**
 * SET_SCROLL_SNAP_ALIGN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(623, b)
})

/**
 * SET_SCROLL_SNAP_STOP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(624, b)
})

/**
 * SET_SCROLL_SNAP_TYPE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(625, b)
})

/**
 * SET_SCROLLBAR_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(626, b)
})

/**
 * SET_SCROLLBAR_GUTTER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(627, b)
})

/**
 * SET_SCROLLBAR_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(628, b)
})

/**
 * SET_SHAPE_IMAGE_THRESHOLD_STYLE
 */

r(function(a){
  const b = d(a)
  h1(629, b)
})

/**
 * SET_SHAPE_INSIDE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(630, b)
})

/**
 * SET_SHAPE_MARGIN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(631, b)
})

/**
 * SET_SHAPE_OUTSIDE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(632, b)
})

/**
 * SET_SPATIAL_NAVIGATION_ACTION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(633, b)
})

/**
 * SET_SPATIAL_NAVIGATION_CONTAIN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(634, b)
})

/**
 * SET_SPATIAL_NAVIGATION_FUNCTION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(635, b)
})

/**
 * SET_SPEAK_STYLE
 */

r(function(a){
  const b = d(a)
  h1(636, b)
})

/**
 * SET_SPEAK_HEADER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(637, b)
})

/**
 * SET_SPEAK_NUMERAL_STYLE
 */

r(function(a){
  const b = d(a)
  h1(638, b)
})

/**
 * SET_SPEAK_PUNCTUATION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(639, b)
})

/**
 * SET_SPEECH_RATE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(640, b)
})

/**
 * SET_STRESS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(641, b)
})

/**
 * SET_STRING_SET_STYLE
 */

r(function(a){
  const b = d(a)
  h1(642, b)
})

/**
 * SET_STROKE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(643, b)
})

/**
 * SET_STROKE_ALIGN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(644, b)
})

/**
 * SET_STROKE_ALIGNMENT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(645, b)
})

/**
 * SET_STROKE_BREAK_STYLE
 */

r(function(a){
  const b = d(a)
  h1(646, b)
})

/**
 * SET_STROKE_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(647, b)
})

/**
 * SET_STROKE_DASH_CORNER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(648, b)
})

/**
 * SET_STROKE_DASH_JUSTIFY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(649, b)
})

/**
 * SET_STROKE_DASHADJUST_STYLE
 */

r(function(a){
  const b = d(a)
  h1(650, b)
})

/**
 * SET_STROKE_DASHARRAY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(651, b)
})

/**
 * SET_STROKE_DASHCORNER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(652, b)
})

/**
 * SET_STROKE_DASHOFFSET_STYLE
 */

r(function(a){
  const b = d(a)
  h1(653, b)
})

/**
 * SET_STROKE_IMAGE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(654, b)
})

/**
 * SET_STROKE_LINECAP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(655, b)
})

/**
 * SET_STROKE_LINEJOIN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(656, b)
})

/**
 * SET_STROKE_MITERLIMIT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(657, b)
})

/**
 * SET_STROKE_OPACITY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(658, b)
})

/**
 * SET_STROKE_ORIGIN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(659, b)
})

/**
 * SET_STROKE_POSITION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(660, b)
})

/**
 * SET_STROKE_REPEAT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(661, b)
})

/**
 * SET_STROKE_SIZE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(662, b)
})

/**
 * SET_STROKE_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(663, b)
})

/**
 * SET_TAB_SIZE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(664, b)
})

/**
 * SET_TABLE_LAYOUT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(665, b)
})

/**
 * SET_TEXT_ALIGN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(666, b)
})

/**
 * SET_TEXT_ALIGN_ALL_STYLE
 */

r(function(a){
  const b = d(a)
  h1(667, b)
})

/**
 * SET_TEXT_ALIGN_LAST_STYLE
 */

r(function(a){
  const b = d(a)
  h1(668, b)
})

/**
 * SET_TEXT_COMBINE_UPRIGHT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(669, b)
})

/**
 * SET_TEXT_DECORATION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(670, b)
})

/**
 * SET_TEXT_DECORATION_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(671, b)
})

/**
 * SET_TEXT_DECORATION_LINE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(672, b)
})

/**
 * SET_TEXT_DECORATION_SKIP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(673, b)
})

/**
 * SET_TEXT_DECORATION_SKIP_INK_STYLE
 */

r(function(a){
  const b = d(a)
  h1(674, b)
})

/**
 * SET_TEXT_DECORATION_STYLE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(675, b)
})

/**
 * SET_TEXT_DECORATION_THICKENSS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(676, b)
})

/**
 * SET_TEXT_DECORATION_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(677, b)
})

/**
 * SET_TEXT_EMPHASIS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(678, b)
})

/**
 * SET_TEXT_EMPHASIS_COLOR_STYLE
 */

r(function(a){
  const b = d(a)
  h1(679, b)
})

/**
 * SET_TEXT_EMPHASIS_POSITION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(680, b)
})

/**
 * SET_TEXT_EMPHASIS_SKIP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(681, b)
})

/**
 * SET_TEXT_EMPHASIS_STYLE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(682, b)
})

/**
 * SET_TEXT_GROUP_ALIGN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(683, b)
})

/**
 * SET_TEXT_HEIGHT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(684, b)
})

/**
 * SET_TEXT_INDENT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(685, b)
})

/**
 * SET_TEXT_JUSTIFY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(686, b)
})

/**
 * SET_TEXT_ORIENTATION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(687, b)
})

/**
 * SET_TEXT_OVERFLOW_STYLE
 */

r(function(a){
  const b = d(a)
  h1(688, b)
})

/**
 * SET_TEXT_SHADOW_STYLE
 */

r(function(a){
  const b = d(a)
  h1(689, b)
})

/**
 * SET_TEXT_SPACE_COLLAPSE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(690, b)
})

/**
 * SET_TEXT_SPACE_TRIM_STYLE
 */

r(function(a){
  const b = d(a)
  h1(691, b)
})

/**
 * SET_TEXT_SPACING_STYLE
 */

r(function(a){
  const b = d(a)
  h1(692, b)
})

/**
 * SET_TEXT_TRANSFORM_STYLE
 */

r(function(a){
  const b = d(a)
  h1(693, b)
})

/**
 * SET_TEXT_UNDERLINE_OFFSET_STYLE
 */

r(function(a){
  const b = d(a)
  h1(694, b)
})

/**
 * SET_TEXT_UNDERLINE_POSITION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(695, b)
})

/**
 * SET_TEXT_WRAP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(696, b)
})

/**
 * SET_TOP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(697, b)
})

/**
 * SET_TRANSFORM_STYLE
 */

r(function(a){
  const b = d(a)
  h1(698, b)
})

/**
 * SET_TRANSFORM_BOX_STYLE
 */

r(function(a){
  const b = d(a)
  h1(699, b)
})

/**
 * SET_TRANSFORM_ORIGIN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(700, b)
})

/**
 * SET_TRANSFORM_STYLE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(701, b)
})

/**
 * SET_TRANSITION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(702, b)
})

/**
 * SET_TRANSITION_DELAY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(703, b)
})

/**
 * SET_TRANSITION_DURATION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(704, b)
})

/**
 * SET_TRANSITION_PROPERTY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(705, b)
})

/**
 * SET_TRANSITION_TIMING_FUNCTION_STYLE
 */

r(function(a){
  const b = d(a)
  h1(706, b)
})

/**
 * SET_UNICODE_BIDI_STYLE
 */

r(function(a){
  const b = d(a)
  h1(707, b)
})

/**
 * SET_USER_SELECT_STYLE
 */

r(function(a){
  const b = d(a)
  h1(708, b)
})

/**
 * SET_VERTICAL_ALIGN_STYLE
 */

r(function(a){
  const b = d(a)
  h1(709, b)
})

/**
 * SET_VISIBILITY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(710, b)
})

/**
 * SET_VOICE_FAMILY_STYLE
 */

r(function(a){
  const b = d(a)
  h1(711, b)
})

/**
 * SET_VOLUME_STYLE
 */

r(function(a){
  const b = d(a)
  h1(712, b)
})

/**
 * SET_WHITE_SPACE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(713, b)
})

/**
 * SET_WIDOWS_STYLE
 */

r(function(a){
  const b = d(a)
  h1(714, b)
})

/**
 * SET_WIDTH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(715, b)
})

/**
 * SET_WILL_CHANGE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(716, b)
})

/**
 * SET_WORD_BREAK_STYLE
 */

r(function(a){
  const b = d(a)
  h1(717, b)
})

/**
 * SET_WORD_SPACING_STYLE
 */

r(function(a){
  const b = d(a)
  h1(718, b)
})

/**
 * SET_WORD_WRAP_STYLE
 */

r(function(a){
  const b = d(a)
  h1(719, b)
})

/**
 * SET_WRAP_AFTER_STYLE
 */

r(function(a){
  const b = d(a)
  h1(720, b)
})

/**
 * SET_WRAP_BEFORE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(721, b)
})

/**
 * SET_WRAP_FLOW_STYLE
 */

r(function(a){
  const b = d(a)
  h1(722, b)
})

/**
 * SET_WRAP_INSIDE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(723, b)
})

/**
 * SET_WRAP_THROUGH_STYLE
 */

r(function(a){
  const b = d(a)
  h1(724, b)
})

/**
 * SET_WRITING_MODE_STYLE
 */

r(function(a){
  const b = d(a)
  h1(725, b)
})

/**
 * SET_Z_INDEX_STYLE
 */

r(function(a){
  const b = d(a)
  h1(726, b)
})

/**
 * LISTEN_TO_ABORT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(727, b, i)
})

/**
 * LISTEN_TO_AFTERPRINT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(728, b, i)
})

/**
 * LISTEN_TO_ANIMATIONCANCEL_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(729, b, i)
})

/**
 * LISTEN_TO_ANIMATIONEND_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(730, b, i)
})

/**
 * LISTEN_TO_ANIMATIONITERATION_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(731, b, i)
})

/**
 * LISTEN_TO_ANIMATIONSTART_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(732, b, i)
})

/**
 * LISTEN_TO_APPINSTALLED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(733, b, i)
})

/**
 * LISTEN_TO_AUDIOPROCESS_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(734, b, i)
})

/**
 * LISTEN_TO_AUDIOEND_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(735, b, i)
})

/**
 * LISTEN_TO_AUDIOSTART_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(736, b, i)
})

/**
 * LISTEN_TO_BEFOREPRINT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(737, b, i)
})

/**
 * LISTEN_TO_BEFOREUNLOAD_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(738, b, i)
})

/**
 * LISTEN_TO_BEGINEVENT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(739, b, i)
})

/**
 * LISTEN_TO_BLOCKED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(740, b, i)
})

/**
 * LISTEN_TO_BLUR_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(741, b, i)
})

/**
 * LISTEN_TO_BOUNDARY_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(742, b, i)
})

/**
 * LISTEN_TO_CANPLAY_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(743, b, i)
})

/**
 * LISTEN_TO_CANPLAYTHROUGH_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(744, b, i)
})

/**
 * LISTEN_TO_CHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(745, b, i)
})

/**
 * LISTEN_TO_CHARGINGCHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(746, b, i)
})

/**
 * LISTEN_TO_CHARGINGTIMECHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(747, b, i)
})

/**
 * LISTEN_TO_CLICK_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(748, b, i)
})

/**
 * LISTEN_TO_CLOSE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(749, b, i)
})

/**
 * LISTEN_TO_COMPLETE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(750, b, i)
})

/**
 * LISTEN_TO_COMPOSITIONEND_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(751, b, i)
})

/**
 * LISTEN_TO_COMPOSITIONSTART_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(752, b, i)
})

/**
 * LISTEN_TO_COMPOSITIONUPDATE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(753, b, i)
})

/**
 * LISTEN_TO_CONTEXTMENU_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(754, b, i)
})

/**
 * LISTEN_TO_COPY_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(755, b, i)
})

/**
 * LISTEN_TO_CUT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(756, b, i)
})

/**
 * LISTEN_TO_DBLCLICK_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(757, b, i)
})

/**
 * LISTEN_TO_DEVICECHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(758, b, i)
})

/**
 * LISTEN_TO_DEVICEMOTION_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(759, b, i)
})

/**
 * LISTEN_TO_DEVICEORIENTATION_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(760, b, i)
})

/**
 * LISTEN_TO_DISCHARGINGTIMECHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(761, b, i)
})

/**
 * LISTEN_TO_DOM_ACTIVATE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(762, b, i)
})

/**
 * LISTEN_TO_DOM_ATTRIBUTE_NAME_CHANGED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(763, b, i)
})

/**
 * LISTEN_TO_DOM_ATTR_MODIFIED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(764, b, i)
})

/**
 * LISTEN_TO_DOM_CHARACTER_DATA_MODIFIED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(765, b, i)
})

/**
 * LISTEN_TO_DOM_CONTENT_LOADED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(766, b, i)
})

/**
 * LISTEN_TO_DOM_ELEMENT_NAME_CHANGED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(767, b, i)
})

/**
 * LISTEN_TO_DOM_FOCUS_IN_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(768, b, i)
})

/**
 * LISTEN_TO_DOM_FOCUS_OUT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(769, b, i)
})

/**
 * LISTEN_TO_DOM_NODE_INSERTED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(770, b, i)
})

/**
 * LISTEN_TO_DOM_NODE_INSERTED_INTO_DOCUMENT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(771, b, i)
})

/**
 * LISTEN_TO_DOM_NODE_REMOVED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(772, b, i)
})

/**
 * LISTEN_TO_DOM_NODE_REMOVED_FROM_DOCUMENT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(773, b, i)
})

/**
 * LISTEN_TO_DOM_SUBTREE_MODIFIED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(774, b, i)
})

/**
 * LISTEN_TO_DRAG_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(775, b, i)
})

/**
 * LISTEN_TO_DRAGEND_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(776, b, i)
})

/**
 * LISTEN_TO_DRAGENTER_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(777, b, i)
})

/**
 * LISTEN_TO_DRAGLEAVE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(778, b, i)
})

/**
 * LISTEN_TO_DRAGOVER_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(779, b, i)
})

/**
 * LISTEN_TO_DRAGSTART_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(780, b, i)
})

/**
 * LISTEN_TO_DROP_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(781, b, i)
})

/**
 * LISTEN_TO_DURATIONCHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(782, b, i)
})

/**
 * LISTEN_TO_EMPTIED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(783, b, i)
})

/**
 * LISTEN_TO_END_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(784, b, i)
})

/**
 * LISTEN_TO_ENDED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(785, b, i)
})

/**
 * LISTEN_TO_END_EVENT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(786, b, i)
})

/**
 * LISTEN_TO_ERROR_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(787, b, i)
})

/**
 * LISTEN_TO_FOCUS_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(788, b, i)
})

/**
 * LISTEN_TO_FOCUSIN_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(789, b, i)
})

/**
 * LISTEN_TO_FOCUSOUT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(790, b, i)
})

/**
 * LISTEN_TO_FULLSCREENCHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(791, b, i)
})

/**
 * LISTEN_TO_FULLSCREENERROR_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(792, b, i)
})

/**
 * LISTEN_TO_GAMEPADCONNECTED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(793, b, i)
})

/**
 * LISTEN_TO_GAMEPADDISCONNECTED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(794, b, i)
})

/**
 * LISTEN_TO_GOTPOINTERCAPTURE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(795, b, i)
})

/**
 * LISTEN_TO_HASHCHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(796, b, i)
})

/**
 * LISTEN_TO_LOSTPOINTERCAPTURE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(797, b, i)
})

/**
 * LISTEN_TO_INPUT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(798, b, i)
})

/**
 * LISTEN_TO_INVALID_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(799, b, i)
})

/**
 * LISTEN_TO_KEYDOWN_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(800, b, i)
})

/**
 * LISTEN_TO_KEYPRESS_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(801, b, i)
})

/**
 * LISTEN_TO_KEYUP_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(802, b, i)
})

/**
 * LISTEN_TO_LANGUAGECHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(803, b, i)
})

/**
 * LISTEN_TO_LEVELCHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(804, b, i)
})

/**
 * LISTEN_TO_LOAD_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(805, b, i)
})

/**
 * LISTEN_TO_LOADEDDATA_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(806, b, i)
})

/**
 * LISTEN_TO_LOADEDMETADATA_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(807, b, i)
})

/**
 * LISTEN_TO_LOADEND_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(808, b, i)
})

/**
 * LISTEN_TO_LOADSTART_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(809, b, i)
})

/**
 * LISTEN_TO_MARK_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(810, b, i)
})

/**
 * LISTEN_TO_MESSAGEERROR_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(811, b, i)
})

/**
 * LISTEN_TO_MESSAGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(812, b, i)
})

/**
 * LISTEN_TO_MOUSEDOWN_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(813, b, i)
})

/**
 * LISTEN_TO_MOUSEENTER_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(814, b, i)
})

/**
 * LISTEN_TO_MOUSELEAVE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(815, b, i)
})

/**
 * LISTEN_TO_MOUSEMOVE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(816, b, i)
})

/**
 * LISTEN_TO_MOUSEOUT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(817, b, i)
})

/**
 * LISTEN_TO_MOUSEOVER_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(818, b, i)
})

/**
 * LISTEN_TO_MOUSEUP_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(819, b, i)
})

/**
 * LISTEN_TO_NOMATCH_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(820, b, i)
})

/**
 * LISTEN_TO_NOTIFICATIONCLICK_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(821, b, i)
})

/**
 * LISTEN_TO_OFFLINE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(822, b, i)
})

/**
 * LISTEN_TO_ONLINE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(823, b, i)
})

/**
 * LISTEN_TO_OPEN_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(824, b, i)
})

/**
 * LISTEN_TO_ORIENTATIONCHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(825, b, i)
})

/**
 * LISTEN_TO_PAGEHIDE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(826, b, i)
})

/**
 * LISTEN_TO_PAGESHOW_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(827, b, i)
})

/**
 * LISTEN_TO_PASTE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(828, b, i)
})

/**
 * LISTEN_TO_PAUSE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(829, b, i)
})

/**
 * LISTEN_TO_POINTERCANCEL_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(830, b, i)
})

/**
 * LISTEN_TO_POINTERDOWN_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(831, b, i)
})

/**
 * LISTEN_TO_POINTERENTER_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(832, b, i)
})

/**
 * LISTEN_TO_POINTERLEAVE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(833, b, i)
})

/**
 * LISTEN_TO_POINTERLOCKCHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(834, b, i)
})

/**
 * LISTEN_TO_POINTERLOCKERROR_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(835, b, i)
})

/**
 * LISTEN_TO_POINTERMOVE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(836, b, i)
})

/**
 * LISTEN_TO_POINTEROUT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(837, b, i)
})

/**
 * LISTEN_TO_POINTEROVER_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(838, b, i)
})

/**
 * LISTEN_TO_POINTERUP_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(839, b, i)
})

/**
 * LISTEN_TO_PLAY_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(840, b, i)
})

/**
 * LISTEN_TO_PLAYING_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(841, b, i)
})

/**
 * LISTEN_TO_POPSTATE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(842, b, i)
})

/**
 * LISTEN_TO_PROGRESS_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(843, b, i)
})

/**
 * LISTEN_TO_PUSH_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(844, b, i)
})

/**
 * LISTEN_TO_PUSHSUBSCRIPTIONCHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(845, b, i)
})

/**
 * LISTEN_TO_RATECHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(846, b, i)
})

/**
 * LISTEN_TO_READYSTATECHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(847, b, i)
})

/**
 * LISTEN_TO_REPEATEVENT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(848, b, i)
})

/**
 * LISTEN_TO_RESET_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(849, b, i)
})

/**
 * LISTEN_TO_RESIZE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(850, b, i)
})

/**
 * LISTEN_TO_RESOURCETIMINGBUFFERFULL_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(851, b, i)
})

/**
 * LISTEN_TO_RESULT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(852, b, i)
})

/**
 * LISTEN_TO_RESUME_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(853, b, i)
})

/**
 * LISTEN_TO_SCROLL_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(854, b, i)
})

/**
 * LISTEN_TO_SEEKED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(855, b, i)
})

/**
 * LISTEN_TO_SEEKING_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(856, b, i)
})

/**
 * LISTEN_TO_SELECT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(857, b, i)
})

/**
 * LISTEN_TO_SELECTSTART_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(858, b, i)
})

/**
 * LISTEN_TO_SELECTIONCHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(859, b, i)
})

/**
 * LISTEN_TO_SHOW_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(860, b, i)
})

/**
 * LISTEN_TO_SLOTCHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(861, b, i)
})

/**
 * LISTEN_TO_SOUNDEND_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(862, b, i)
})

/**
 * LISTEN_TO_SOUNDSTART_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(863, b, i)
})

/**
 * LISTEN_TO_SPEECHEND_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(864, b, i)
})

/**
 * LISTEN_TO_SPEECHSTART_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(865, b, i)
})

/**
 * LISTEN_TO_STALLED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(866, b, i)
})

/**
 * LISTEN_TO_START_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(867, b, i)
})

/**
 * LISTEN_TO_STORAGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(868, b, i)
})

/**
 * LISTEN_TO_SUBMIT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(869, b, i)
})

/**
 * LISTEN_TO_SUCCESS_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(870, b, i)
})

/**
 * LISTEN_TO_SUSPEND_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(871, b, i)
})

/**
 * LISTEN_TO_SVG_ABORT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(872, b, i)
})

/**
 * LISTEN_TO_SVG_ERROR_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(873, b, i)
})

/**
 * LISTEN_TO_SVG_LOAD_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(874, b, i)
})

/**
 * LISTEN_TO_SVG_RESIZE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(875, b, i)
})

/**
 * LISTEN_TO_SVG_SCROLL_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(876, b, i)
})

/**
 * LISTEN_TO_SVG_UNLOAD_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(877, b, i)
})

/**
 * LISTEN_TO_SVG_ZOOM_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(878, b, i)
})

/**
 * LISTEN_TO_TIMEOUT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(879, b, i)
})

/**
 * LISTEN_TO_TIMEUPDATE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(880, b, i)
})

/**
 * LISTEN_TO_TOUCHCANCEL_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(881, b, i)
})

/**
 * LISTEN_TO_TOUCHEND_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(882, b, i)
})

/**
 * LISTEN_TO_TOUCHMOVE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(883, b, i)
})

/**
 * LISTEN_TO_TOUCHSTART_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(884, b, i)
})

/**
 * LISTEN_TO_TRANSITIONEND_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(885, b, i)
})

/**
 * LISTEN_TO_UNLOAD_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(886, b, i)
})

/**
 * LISTEN_TO_UPGRADENEEDED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(887, b, i)
})

/**
 * LISTEN_TO_USERPROXIMITY_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(888, b, i)
})

/**
 * LISTEN_TO_VOICESCHANGED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(889, b, i)
})

/**
 * LISTEN_TO_VERSIONCHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(890, b, i)
})

/**
 * LISTEN_TO_VISIBILITYCHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(891, b, i)
})

/**
 * LISTEN_TO_VOLUMECHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(892, b, i)
})

/**
 * LISTEN_TO_WAITING_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(893, b, i)
})

/**
 * LISTEN_TO_WHEEL_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(894, b, i)
})

/**
 * LISTEN_TO_AFTERSCRIPTEXECUTE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(895, b, i)
})

/**
 * LISTEN_TO_BEFORESCRIPTEXECUTE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(896, b, i)
})

/**
 * LISTEN_TO_BEFOREINSTALLPROMPT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(897, b, i)
})

/**
 * LISTEN_TO_CARDSTATECHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(898, b, i)
})

/**
 * LISTEN_TO_CONNECTIONINFOUPDATE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(899, b, i)
})

/**
 * LISTEN_TO_CFSTATECHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(900, b, i)
})

/**
 * LISTEN_TO_DATACHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(901, b, i)
})

/**
 * LISTEN_TO_DATAERROR_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(902, b, i)
})

/**
 * LISTEN_TO_DOM_MOUSE_SCROLL_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(903, b, i)
})

/**
 * LISTEN_TO_DRAGDROP_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(904, b, i)
})

/**
 * LISTEN_TO_DRAGEXIT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(905, b, i)
})

/**
 * LISTEN_TO_DRAGGESTURE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(906, b, i)
})

/**
 * LISTEN_TO_ICCCARDLOCKERROR_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(907, b, i)
})

/**
 * LISTEN_TO_ICCINFOCHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(908, b, i)
})

/**
 * LISTEN_TO_LOCALIZED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(909, b, i)
})

/**
 * LISTEN_TO_MOUSEWHEEL_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(910, b, i)
})

/**
 * LISTEN_TO_ALERTING_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(911, b, i)
})

/**
 * LISTEN_TO_BUSY_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(912, b, i)
})

/**
 * LISTEN_TO_CALLSCHANGED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(913, b, i)
})

/**
 * LISTEN_TO_CONNECTING_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(914, b, i)
})

/**
 * LISTEN_TO_DELIVERED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(915, b, i)
})

/**
 * LISTEN_TO_DIALING_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(916, b, i)
})

/**
 * LISTEN_TO_DISABLED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(917, b, i)
})

/**
 * LISTEN_TO_DISCONNECTED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(918, b, i)
})

/**
 * LISTEN_TO_DISCONNECTING_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(919, b, i)
})

/**
 * LISTEN_TO_ENABLED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(920, b, i)
})

/**
 * LISTEN_TO_HELD_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(921, b, i)
})

/**
 * LISTEN_TO_HOLDING_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(922, b, i)
})

/**
 * LISTEN_TO_INCOMING_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(923, b, i)
})

/**
 * LISTEN_TO_RECEIVED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(924, b, i)
})

/**
 * LISTEN_TO_RESUMING_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(925, b, i)
})

/**
 * LISTEN_TO_SENT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(926, b, i)
})

/**
 * LISTEN_TO_STATECHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(927, b, i)
})

/**
 * LISTEN_TO_STATUSCHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(928, b, i)
})

/**
 * LISTEN_TO_OVERFLOW_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(929, b, i)
})

/**
 * LISTEN_TO_STKCOMMAND_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(930, b, i)
})

/**
 * LISTEN_TO_STKSESSIONEND_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(931, b, i)
})

/**
 * LISTEN_TO_TOUCHENTER_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(932, b, i)
})

/**
 * LISTEN_TO_TOUCHLEAVE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(933, b, i)
})

/**
 * LISTEN_TO_UNDERFLOW_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(934, b, i)
})

/**
 * LISTEN_TO_UPLOADPROGRESS_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(935, b, i)
})

/**
 * LISTEN_TO_USSDRECEIVED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(936, b, i)
})

/**
 * LISTEN_TO_VOICECHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(937, b, i)
})

/**
 * LISTEN_TO_MSCONTENTZOOM_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(938, b, i)
})

/**
 * LISTEN_TO_MS_MANIPULATION_STATE_CHANGED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(939, b, i)
})

/**
 * LISTEN_TO_MS_POINTER_HOVER_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(940, b, i)
})

/**
 * LISTEN_TO_BROADCAST_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(941, b, i)
})

/**
 * LISTEN_TO_CHECKBOX_STATE_CHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(942, b, i)
})

/**
 * LISTEN_TO_COMMAND_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(943, b, i)
})

/**
 * LISTEN_TO_COMMANDUPDATE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(944, b, i)
})

/**
 * LISTEN_TO_DOM_MENU_ITEM_ACTIVE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(945, b, i)
})

/**
 * LISTEN_TO_DOM_MENU_ITEM_INACTIVE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(946, b, i)
})

/**
 * LISTEN_TO_POPUPHIDDEN_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(947, b, i)
})

/**
 * LISTEN_TO_POPUPHIDING_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(948, b, i)
})

/**
 * LISTEN_TO_POPUPSHOWING_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(949, b, i)
})

/**
 * LISTEN_TO_POPUPSHOWN_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(950, b, i)
})

/**
 * LISTEN_TO_RADIO_STATE_CHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(951, b, i)
})

/**
 * LISTEN_TO_VALUE_CHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(952, b, i)
})

/**
 * LISTEN_TO_DOM_POPUP_BLOCKED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(953, b, i)
})

/**
 * LISTEN_TO_DOM_WINDOW_CREATED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(954, b, i)
})

/**
 * LISTEN_TO_DOM_WINDOW_CLOSE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(955, b, i)
})

/**
 * LISTEN_TO_DOM_TITLE_CHANGED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(956, b, i)
})

/**
 * LISTEN_TO_DOM_LINK_ADDED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(957, b, i)
})

/**
 * LISTEN_TO_DOM_LINK_REMOVED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(958, b, i)
})

/**
 * LISTEN_TO_DOM_META_ADDED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(959, b, i)
})

/**
 * LISTEN_TO_DOM_META_REMOVED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(960, b, i)
})

/**
 * LISTEN_TO_DOM_WILL_OPEN_MODAL_DIALOG_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(961, b, i)
})

/**
 * LISTEN_TO_DOM_MODAL_DIALOG_CLOSED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(962, b, i)
})

/**
 * LISTEN_TO_DOM_AUTO_COMPLETE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(963, b, i)
})

/**
 * LISTEN_TO_DOM_FRAME_CONTENT_LOADED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(964, b, i)
})

/**
 * LISTEN_TO_ALERT_ACTIVE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(965, b, i)
})

/**
 * LISTEN_TO_ALERT_CLOSE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(966, b, i)
})

/**
 * LISTEN_TO_FULLSCREEN_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(967, b, i)
})

/**
 * LISTEN_TO_SIZEMODECHANGE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(968, b, i)
})

/**
 * LISTEN_TO_SS_WINDOW_CLOSING_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(969, b, i)
})

/**
 * LISTEN_TO_SS_TAB_CLOSING_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(970, b, i)
})

/**
 * LISTEN_TO_SS_TAB_RESTORING_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(971, b, i)
})

/**
 * LISTEN_TO_SS_TAB_RESTORED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(972, b, i)
})

/**
 * LISTEN_TO_SS_WINDOW_STATE_READY_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(973, b, i)
})

/**
 * LISTEN_TO_SS_WINDOW_STATE_BUSY_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(974, b, i)
})

/**
 * LISTEN_TO_TAB_OPEN_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(975, b, i)
})

/**
 * LISTEN_TO_TAB_CLOSE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(976, b, i)
})

/**
 * LISTEN_TO_TAB_SELECT_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(977, b, i)
})

/**
 * LISTEN_TO_TAB_SHOW_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(978, b, i)
})

/**
 * LISTEN_TO_TAB_HIDE_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(979, b, i)
})

/**
 * LISTEN_TO_TAB_PINNED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(980, b, i)
})

/**
 * LISTEN_TO_TAB_UNPINNED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(981, b, i)
})

/**
 * LISTEN_TO_CSS_RULE_VIEW_REFRESHED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(982, b, i)
})

/**
 * LISTEN_TO_CSS_RULE_VIEW_CHANGED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(983, b, i)
})

/**
 * LISTEN_TO_CSS_RULE_VIEW_CSS_LINK_CLICKED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(984, b, i)
})

/**
 * SET_DOM_ELEMENT_ACCEPT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(985, b, i)
})

/**
 * SET_DOM_ELEMENT_ACCEPT_CHARSET
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(986, b, i)
})

/**
 * SET_DOM_ELEMENT_ACCESSKEY
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(987, b, i)
})

/**
 * SET_DOM_ELEMENT_ACTION
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(988, b, i)
})

/**
 * SET_DOM_ELEMENT_ALIGN
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(989, b, i)
})

/**
 * SET_DOM_ELEMENT_ALLOW
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(990, b, i)
})

/**
 * SET_DOM_ELEMENT_ALT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(991, b, i)
})

/**
 * SET_DOM_ELEMENT_ASYNC
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(992, b, i)
})

/**
 * SET_DOM_ELEMENT_AUTOCAPITALIZE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(993, b, i)
})

/**
 * SET_DOM_ELEMENT_AUTOCOMPLETE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(994, b, i)
})

/**
 * SET_DOM_ELEMENT_AUTOFOCUS
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(995, b, i)
})

/**
 * SET_DOM_ELEMENT_AUTOPLAY
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(996, b, i)
})

/**
 * SET_DOM_ELEMENT_BACKGROUND
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(997, b, i)
})

/**
 * SET_DOM_ELEMENT_BGCOLOR
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(998, b, i)
})

/**
 * SET_DOM_ELEMENT_BORDER
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(999, b, i)
})

/**
 * SET_DOM_ELEMENT_BUFFERED
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1000, b, i)
})

/**
 * SET_DOM_ELEMENT_CHALLENGE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1001, b, i)
})

/**
 * SET_DOM_ELEMENT_CHARSET
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1002, b, i)
})

/**
 * SET_DOM_ELEMENT_CHECKED
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1003, b, i)
})

/**
 * SET_DOM_ELEMENT_CITE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1004, b, i)
})

/**
 * SET_DOM_ELEMENT_CLASS
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1005, b, i)
})

/**
 * SET_DOM_ELEMENT_CODE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1006, b, i)
})

/**
 * SET_DOM_ELEMENT_CODEBASE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1007, b, i)
})

/**
 * SET_DOM_ELEMENT_COLOR
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1008, b, i)
})

/**
 * SET_DOM_ELEMENT_COLS
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1009, b, i)
})

/**
 * SET_DOM_ELEMENT_COLSPAN
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1010, b, i)
})

/**
 * SET_DOM_ELEMENT_CONTENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1011, b, i)
})

/**
 * SET_DOM_ELEMENT_CONTENTEDITABLE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1012, b, i)
})

/**
 * SET_DOM_ELEMENT_CONTEXTMENU
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1013, b, i)
})

/**
 * SET_DOM_ELEMENT_CONTROLS
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1014, b, i)
})

/**
 * SET_DOM_ELEMENT_COORDS
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1015, b, i)
})

/**
 * SET_DOM_ELEMENT_CROSSORIGIN
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1016, b, i)
})

/**
 * SET_DOM_ELEMENT_CSP
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1017, b, i)
})

/**
 * SET_DOM_ELEMENT_DATA
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1018, b, i)
})

/**
 * SET_DOM_ELEMENT_DATETIME
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1019, b, i)
})

/**
 * SET_DOM_ELEMENT_DECODING
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1020, b, i)
})

/**
 * SET_DOM_ELEMENT_DEFAULT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1021, b, i)
})

/**
 * SET_DOM_ELEMENT_DEFER
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1022, b, i)
})

/**
 * SET_DOM_ELEMENT_DIR
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1023, b, i)
})

/**
 * SET_DOM_ELEMENT_DIRNAME
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1024, b, i)
})

/**
 * SET_DOM_ELEMENT_DISABLED
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1025, b, i)
})

/**
 * SET_DOM_ELEMENT_DOWNLOAD
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1026, b, i)
})

/**
 * SET_DOM_ELEMENT_DRAGGABLE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1027, b, i)
})

/**
 * SET_DOM_ELEMENT_DROPZONE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1028, b, i)
})

/**
 * SET_DOM_ELEMENT_ENCTYPE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1029, b, i)
})

/**
 * SET_DOM_ELEMENT_ENTERKEYHINT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1030, b, i)
})

/**
 * SET_DOM_ELEMENT_FOR
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1031, b, i)
})

/**
 * SET_DOM_ELEMENT_FORM
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1032, b, i)
})

/**
 * SET_DOM_ELEMENT_FORMACTION
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1033, b, i)
})

/**
 * SET_DOM_ELEMENT_FORMENCTYPE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1034, b, i)
})

/**
 * SET_DOM_ELEMENT_FORMMETHOD
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1035, b, i)
})

/**
 * SET_DOM_ELEMENT_FORMNOVALIDATE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1036, b, i)
})

/**
 * SET_DOM_ELEMENT_FORMTARGET
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1037, b, i)
})

/**
 * SET_DOM_ELEMENT_HEADERS
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1038, b, i)
})

/**
 * SET_DOM_ELEMENT_HEIGHT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1039, b, i)
})

/**
 * SET_DOM_ELEMENT_HIDDEN
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1040, b, i)
})

/**
 * SET_DOM_ELEMENT_HIGH
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1041, b, i)
})

/**
 * SET_DOM_ELEMENT_HREF
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1042, b, i)
})

/**
 * SET_DOM_ELEMENT_HREFLANG
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1043, b, i)
})

/**
 * SET_DOM_ELEMENT_HTTP_EQUIV
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1044, b, i)
})

/**
 * SET_DOM_ELEMENT_ICON
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1045, b, i)
})

/**
 * SET_DOM_ELEMENT_ID
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1046, b, i)
})

/**
 * SET_DOM_ELEMENT_IMPORTANCE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1047, b, i)
})

/**
 * SET_DOM_ELEMENT_INTEGRITY
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1048, b, i)
})

/**
 * SET_DOM_ELEMENT_INTRINSICSIZE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1049, b, i)
})

/**
 * SET_DOM_ELEMENT_INPUTMODE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1050, b, i)
})

/**
 * SET_DOM_ELEMENT_ISMAP
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1051, b, i)
})

/**
 * SET_DOM_ELEMENT_ITEMPROP
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1052, b, i)
})

/**
 * SET_DOM_ELEMENT_KEYTYPE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1053, b, i)
})

/**
 * SET_DOM_ELEMENT_KIND
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1054, b, i)
})

/**
 * SET_DOM_ELEMENT_LABEL
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1055, b, i)
})

/**
 * SET_DOM_ELEMENT_LANG
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1056, b, i)
})

/**
 * SET_DOM_ELEMENT_LANGUAGE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1057, b, i)
})

/**
 * SET_DOM_ELEMENT_LOADING
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1058, b, i)
})

/**
 * SET_DOM_ELEMENT_LIST
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1059, b, i)
})

/**
 * SET_DOM_ELEMENT_LOOP
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1060, b, i)
})

/**
 * SET_DOM_ELEMENT_LOW
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1061, b, i)
})

/**
 * SET_DOM_ELEMENT_MANIFEST
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1062, b, i)
})

/**
 * SET_DOM_ELEMENT_MAX
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1063, b, i)
})

/**
 * SET_DOM_ELEMENT_MAXLENGTH
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1064, b, i)
})

/**
 * SET_DOM_ELEMENT_MINLENGTH
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1065, b, i)
})

/**
 * SET_DOM_ELEMENT_MEDIA
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1066, b, i)
})

/**
 * SET_DOM_ELEMENT_METHOD
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1067, b, i)
})

/**
 * SET_DOM_ELEMENT_MIN
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1068, b, i)
})

/**
 * SET_DOM_ELEMENT_MULTIPLE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1069, b, i)
})

/**
 * SET_DOM_ELEMENT_MUTED
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1070, b, i)
})

/**
 * SET_DOM_ELEMENT_NAME
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1071, b, i)
})

/**
 * SET_DOM_ELEMENT_NOVALIDATE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1072, b, i)
})

/**
 * SET_DOM_ELEMENT_OPEN
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1073, b, i)
})

/**
 * SET_DOM_ELEMENT_OPTIMUM
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1074, b, i)
})

/**
 * SET_DOM_ELEMENT_PATTERN
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1075, b, i)
})

/**
 * SET_DOM_ELEMENT_PING
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1076, b, i)
})

/**
 * SET_DOM_ELEMENT_PLACEHOLDER
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1077, b, i)
})

/**
 * SET_DOM_ELEMENT_POSTER
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1078, b, i)
})

/**
 * SET_DOM_ELEMENT_PRELOAD
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1079, b, i)
})

/**
 * SET_DOM_ELEMENT_RADIOGROUP
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1080, b, i)
})

/**
 * SET_DOM_ELEMENT_READONLY
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1081, b, i)
})

/**
 * SET_DOM_ELEMENT_REFERRERPOLICY
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1082, b, i)
})

/**
 * SET_DOM_ELEMENT_REL
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1083, b, i)
})

/**
 * SET_DOM_ELEMENT_REQUIRED
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1084, b, i)
})

/**
 * SET_DOM_ELEMENT_REVERSED
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1085, b, i)
})

/**
 * SET_DOM_ELEMENT_ROWS
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1086, b, i)
})

/**
 * SET_DOM_ELEMENT_ROWSPAN
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1087, b, i)
})

/**
 * SET_DOM_ELEMENT_SANDBOX
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1088, b, i)
})

/**
 * SET_DOM_ELEMENT_SCOPE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1089, b, i)
})

/**
 * SET_DOM_ELEMENT_SCOPED
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1090, b, i)
})

/**
 * SET_DOM_ELEMENT_SELECTED
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1091, b, i)
})

/**
 * SET_DOM_ELEMENT_SHAPE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1092, b, i)
})

/**
 * SET_DOM_ELEMENT_SIZE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1093, b, i)
})

/**
 * SET_DOM_ELEMENT_SIZES
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1094, b, i)
})

/**
 * SET_DOM_ELEMENT_SLOT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1095, b, i)
})

/**
 * SET_DOM_ELEMENT_SPAN
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1096, b, i)
})

/**
 * SET_DOM_ELEMENT_SPELLCHECK
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1097, b, i)
})

/**
 * SET_DOM_ELEMENT_SRC
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1098, b, i)
})

/**
 * SET_DOM_ELEMENT_SRCDOC
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1099, b, i)
})

/**
 * SET_DOM_ELEMENT_SRCLANG
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1100, b, i)
})

/**
 * SET_DOM_ELEMENT_SRCSET
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1101, b, i)
})

/**
 * SET_DOM_ELEMENT_START
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1102, b, i)
})

/**
 * SET_DOM_ELEMENT_STEP
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1103, b, i)
})

/**
 * SET_DOM_ELEMENT_STYLE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1104, b, i)
})

/**
 * SET_DOM_ELEMENT_SUMMARY
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1105, b, i)
})

/**
 * SET_DOM_ELEMENT_TABINDEX
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1106, b, i)
})

/**
 * SET_DOM_ELEMENT_TARGET
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1107, b, i)
})

/**
 * SET_DOM_ELEMENT_TITLE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1108, b, i)
})

/**
 * SET_DOM_ELEMENT_TRANSLATE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1109, b, i)
})

/**
 * SET_DOM_ELEMENT_TYPE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1110, b, i)
})

/**
 * SET_DOM_ELEMENT_USEMAP
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1111, b, i)
})

/**
 * SET_DOM_ELEMENT_VALUE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1112, b, i)
})

/**
 * SET_DOM_ELEMENT_WIDTH
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1113, b, i)
})

/**
 * SET_DOM_ELEMENT_WRAP
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1114, b, i)
})

/**
 * REMOVE_DOM_ELEMENT_ACCEPT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1115, b)
})

/**
 * REMOVE_DOM_ELEMENT_ACCESSKEY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1116, b)
})

/**
 * REMOVE_DOM_ELEMENT_ACTION_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1117, b)
})

/**
 * REMOVE_DOM_ELEMENT_ALIGN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1118, b)
})

/**
 * REMOVE_DOM_ELEMENT_ALLOW_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1119, b)
})

/**
 * REMOVE_DOM_ELEMENT_ALT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1120, b)
})

/**
 * REMOVE_DOM_ELEMENT_ASYNC_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1121, b)
})

/**
 * REMOVE_DOM_ELEMENT_AUTOCAPITALIZE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1122, b)
})

/**
 * REMOVE_DOM_ELEMENT_AUTOCOMPLETE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1123, b)
})

/**
 * REMOVE_DOM_ELEMENT_AUTOFOCUS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1124, b)
})

/**
 * REMOVE_DOM_ELEMENT_AUTOPLAY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1125, b)
})

/**
 * REMOVE_DOM_ELEMENT_BACKGROUND_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1126, b)
})

/**
 * REMOVE_DOM_ELEMENT_BGCOLOR_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1127, b)
})

/**
 * REMOVE_DOM_ELEMENT_BORDER_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1128, b)
})

/**
 * REMOVE_DOM_ELEMENT_BUFFERED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1129, b)
})

/**
 * REMOVE_DOM_ELEMENT_CHALLENGE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1130, b)
})

/**
 * REMOVE_DOM_ELEMENT_CHARSET_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1131, b)
})

/**
 * REMOVE_DOM_ELEMENT_CHECKED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1132, b)
})

/**
 * REMOVE_DOM_ELEMENT_CITE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1133, b)
})

/**
 * REMOVE_DOM_ELEMENT_CLASS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1134, b)
})

/**
 * REMOVE_DOM_ELEMENT_CODE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1135, b)
})

/**
 * REMOVE_DOM_ELEMENT_CODEBASE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1136, b)
})

/**
 * REMOVE_DOM_ELEMENT_COLOR_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1137, b)
})

/**
 * REMOVE_DOM_ELEMENT_COLS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1138, b)
})

/**
 * REMOVE_DOM_ELEMENT_COLSPAN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1139, b)
})

/**
 * REMOVE_DOM_ELEMENT_CONTENT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1140, b)
})

/**
 * REMOVE_DOM_ELEMENT_CONTENTEDITABLE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1141, b)
})

/**
 * REMOVE_DOM_ELEMENT_CONTEXTMENU_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1142, b)
})

/**
 * REMOVE_DOM_ELEMENT_CONTROLS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1143, b)
})

/**
 * REMOVE_DOM_ELEMENT_COORDS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1144, b)
})

/**
 * REMOVE_DOM_ELEMENT_CROSSORIGIN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1145, b)
})

/**
 * REMOVE_DOM_ELEMENT_CSP_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1146, b)
})

/**
 * REMOVE_DOM_ELEMENT_DATA_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1147, b)
})

/**
 * REMOVE_DOM_ELEMENT_DATETIME_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1148, b)
})

/**
 * REMOVE_DOM_ELEMENT_DECODING_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1149, b)
})

/**
 * REMOVE_DOM_ELEMENT_DEFAULT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1150, b)
})

/**
 * REMOVE_DOM_ELEMENT_DEFER_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1151, b)
})

/**
 * REMOVE_DOM_ELEMENT_DIR_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1152, b)
})

/**
 * REMOVE_DOM_ELEMENT_DIRNAME_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1153, b)
})

/**
 * REMOVE_DOM_ELEMENT_DISABLED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1154, b)
})

/**
 * REMOVE_DOM_ELEMENT_DOWNLOAD_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1155, b)
})

/**
 * REMOVE_DOM_ELEMENT_DRAGGABLE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1156, b)
})

/**
 * REMOVE_DOM_ELEMENT_DROPZONE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1157, b)
})

/**
 * REMOVE_DOM_ELEMENT_ENCTYPE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1158, b)
})

/**
 * REMOVE_DOM_ELEMENT_ENTERKEYHINT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1159, b)
})

/**
 * REMOVE_DOM_ELEMENT_FOR_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1160, b)
})

/**
 * REMOVE_DOM_ELEMENT_FORM_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1161, b)
})

/**
 * REMOVE_DOM_ELEMENT_FORMACTION_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1162, b)
})

/**
 * REMOVE_DOM_ELEMENT_FORMENCTYPE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1163, b)
})

/**
 * REMOVE_DOM_ELEMENT_FORMMETHOD_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1164, b)
})

/**
 * REMOVE_DOM_ELEMENT_FORMNOVALIDATE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1165, b)
})

/**
 * REMOVE_DOM_ELEMENT_FORMTARGET_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1166, b)
})

/**
 * REMOVE_DOM_ELEMENT_HEADERS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1167, b)
})

/**
 * REMOVE_DOM_ELEMENT_HEIGHT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1168, b)
})

/**
 * REMOVE_DOM_ELEMENT_HIDDEN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1169, b)
})

/**
 * REMOVE_DOM_ELEMENT_HIGH_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1170, b)
})

/**
 * REMOVE_DOM_ELEMENT_HREF_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1171, b)
})

/**
 * REMOVE_DOM_ELEMENT_HREFLANG_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1172, b)
})

/**
 * REMOVE_DOM_ELEMENT_ICON_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1173, b)
})

/**
 * REMOVE_DOM_ELEMENT_ID_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1174, b)
})

/**
 * REMOVE_DOM_ELEMENT_IMPORTANCE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1175, b)
})

/**
 * REMOVE_DOM_ELEMENT_INTEGRITY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1176, b)
})

/**
 * REMOVE_DOM_ELEMENT_INTRINSICSIZE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1177, b)
})

/**
 * REMOVE_DOM_ELEMENT_INPUTMODE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1178, b)
})

/**
 * REMOVE_DOM_ELEMENT_ISMAP_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1179, b)
})

/**
 * REMOVE_DOM_ELEMENT_ITEMPROP_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1180, b)
})

/**
 * REMOVE_DOM_ELEMENT_KEYTYPE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1181, b)
})

/**
 * REMOVE_DOM_ELEMENT_KIND_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1182, b)
})

/**
 * REMOVE_DOM_ELEMENT_LABEL_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1183, b)
})

/**
 * REMOVE_DOM_ELEMENT_LANG_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1184, b)
})

/**
 * REMOVE_DOM_ELEMENT_LANGUAGE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1185, b)
})

/**
 * REMOVE_DOM_ELEMENT_LOADING_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1186, b)
})

/**
 * REMOVE_DOM_ELEMENT_LIST_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1187, b)
})

/**
 * REMOVE_DOM_ELEMENT_LOOP_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1188, b)
})

/**
 * REMOVE_DOM_ELEMENT_LOW_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1189, b)
})

/**
 * REMOVE_DOM_ELEMENT_MANIFEST_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1190, b)
})

/**
 * REMOVE_DOM_ELEMENT_MAX_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1191, b)
})

/**
 * REMOVE_DOM_ELEMENT_MAXLENGTH_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1192, b)
})

/**
 * REMOVE_DOM_ELEMENT_MINLENGTH_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1193, b)
})

/**
 * REMOVE_DOM_ELEMENT_MEDIA_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1194, b)
})

/**
 * REMOVE_DOM_ELEMENT_METHOD_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1195, b)
})

/**
 * REMOVE_DOM_ELEMENT_MIN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1196, b)
})

/**
 * REMOVE_DOM_ELEMENT_MULTIPLE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1197, b)
})

/**
 * REMOVE_DOM_ELEMENT_MUTED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1198, b)
})

/**
 * REMOVE_DOM_ELEMENT_NAME_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1199, b)
})

/**
 * REMOVE_DOM_ELEMENT_NOVALIDATE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1200, b)
})

/**
 * REMOVE_DOM_ELEMENT_OPEN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1201, b)
})

/**
 * REMOVE_DOM_ELEMENT_OPTIMUM_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1202, b)
})

/**
 * REMOVE_DOM_ELEMENT_PATTERN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1203, b)
})

/**
 * REMOVE_DOM_ELEMENT_PING_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1204, b)
})

/**
 * REMOVE_DOM_ELEMENT_PLACEHOLDER_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1205, b)
})

/**
 * REMOVE_DOM_ELEMENT_POSTER_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1206, b)
})

/**
 * REMOVE_DOM_ELEMENT_PRELOAD_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1207, b)
})

/**
 * REMOVE_DOM_ELEMENT_RADIOGROUP_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1208, b)
})

/**
 * REMOVE_DOM_ELEMENT_READONLY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1209, b)
})

/**
 * REMOVE_DOM_ELEMENT_REFERRERPOLICY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1210, b)
})

/**
 * REMOVE_DOM_ELEMENT_REL_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1211, b)
})

/**
 * REMOVE_DOM_ELEMENT_REQUIRED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1212, b)
})

/**
 * REMOVE_DOM_ELEMENT_REVERSED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1213, b)
})

/**
 * REMOVE_DOM_ELEMENT_ROWS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1214, b)
})

/**
 * REMOVE_DOM_ELEMENT_ROWSPAN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1215, b)
})

/**
 * REMOVE_DOM_ELEMENT_SANDBOX_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1216, b)
})

/**
 * REMOVE_DOM_ELEMENT_SCOPE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1217, b)
})

/**
 * REMOVE_DOM_ELEMENT_SCOPED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1218, b)
})

/**
 * REMOVE_DOM_ELEMENT_SELECTED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1219, b)
})

/**
 * REMOVE_DOM_ELEMENT_SHAPE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1220, b)
})

/**
 * REMOVE_DOM_ELEMENT_SIZE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1221, b)
})

/**
 * REMOVE_DOM_ELEMENT_SIZES_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1222, b)
})

/**
 * REMOVE_DOM_ELEMENT_SLOT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1223, b)
})

/**
 * REMOVE_DOM_ELEMENT_SPAN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1224, b)
})

/**
 * REMOVE_DOM_ELEMENT_SPELLCHECK_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1225, b)
})

/**
 * REMOVE_DOM_ELEMENT_SRC_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1226, b)
})

/**
 * REMOVE_DOM_ELEMENT_SRCDOC_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1227, b)
})

/**
 * REMOVE_DOM_ELEMENT_SRCLANG_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1228, b)
})

/**
 * REMOVE_DOM_ELEMENT_SRCSET_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1229, b)
})

/**
 * REMOVE_DOM_ELEMENT_START_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1230, b)
})

/**
 * REMOVE_DOM_ELEMENT_STEP_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1231, b)
})

/**
 * REMOVE_DOM_ELEMENT_STYLE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1232, b)
})

/**
 * REMOVE_DOM_ELEMENT_SUMMARY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1233, b)
})

/**
 * REMOVE_DOM_ELEMENT_TABINDEX_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1234, b)
})

/**
 * REMOVE_DOM_ELEMENT_TARGET_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1235, b)
})

/**
 * REMOVE_DOM_ELEMENT_TITLE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1236, b)
})

/**
 * REMOVE_DOM_ELEMENT_TRANSLATE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1237, b)
})

/**
 * REMOVE_DOM_ELEMENT_TYPE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1238, b)
})

/**
 * REMOVE_DOM_ELEMENT_USEMAP_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1239, b)
})

/**
 * REMOVE_DOM_ELEMENT_VALUE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1240, b)
})

/**
 * REMOVE_DOM_ELEMENT_WIDTH_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1241, b)
})

/**
 * REMOVE_DOM_ELEMENT_WRAP_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1242, b)
})

/**
 * GET_DOM_ELEMENT_ACCEPT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1243, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_ACCESSKEY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1244, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_ACTION_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1245, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_ALIGN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1246, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_ALLOW_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1247, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_ALT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1248, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_ASYNC_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1249, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_AUTOCAPITALIZE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1250, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_AUTOCOMPLETE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1251, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_AUTOFOCUS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1252, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_AUTOPLAY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1253, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_BACKGROUND_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1254, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_BGCOLOR_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1255, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_BORDER_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1256, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_BUFFERED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1257, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_CHALLENGE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1258, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_CHARSET_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1259, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_CHECKED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1260, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_CITE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1261, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_CLASS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1262, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_CODE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1263, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_CODEBASE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1264, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_COLOR_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1265, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_COLS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1266, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_COLSPAN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1267, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_CONTENT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1268, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_CONTENTEDITABLE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1269, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_CONTEXTMENU_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1270, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_CONTROLS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1271, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_COORDS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1272, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_CROSSORIGIN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1273, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_CSP_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1274, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_DATA_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1275, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_DATETIME_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1276, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_DECODING_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1277, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_DEFAULT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1278, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_DEFER_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1279, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_DIR_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1280, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_DIRNAME_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1281, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_DISABLED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1282, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_DOWNLOAD_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1283, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_DRAGGABLE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1284, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_DROPZONE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1285, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_ENCTYPE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1286, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_ENTERKEYHINT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1287, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_FOR_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1288, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_FORM_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1289, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_FORMACTION_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1290, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_FORMENCTYPE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1291, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_FORMMETHOD_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1292, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_FORMNOVALIDATE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1293, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_FORMTARGET_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1294, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_HEADERS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1295, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_HEIGHT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1296, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_HIDDEN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1297, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_HIGH_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1298, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_HREF_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1299, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_HREFLANG_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1300, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_ICON_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1301, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_ID_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1302, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_IMPORTANCE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1303, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_INTEGRITY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1304, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_INTRINSICSIZE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1305, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_INPUTMODE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1306, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_ISMAP_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1307, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_ITEMPROP_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1308, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_KEYTYPE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1309, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_KIND_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1310, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_LABEL_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1311, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_LANG_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1312, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_LANGUAGE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1313, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_LOADING_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1314, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_LIST_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1315, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_LOOP_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1316, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_LOW_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1317, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_MANIFEST_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1318, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_MAX_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1319, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_MAXLENGTH_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1320, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_MINLENGTH_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1321, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_MEDIA_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1322, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_METHOD_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1323, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_MIN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1324, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_MULTIPLE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1325, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_MUTED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1326, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_NAME_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1327, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_NOVALIDATE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1328, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_OPEN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1329, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_OPTIMUM_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1330, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_PATTERN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1331, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_PING_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1332, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_PLACEHOLDER_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1333, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_POSTER_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1334, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_PRELOAD_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1335, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_RADIOGROUP_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1336, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_READONLY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1337, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_REFERRERPOLICY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1338, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_REL_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1339, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_REQUIRED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1340, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_REVERSED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1341, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_ROWS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1342, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_ROWSPAN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1343, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_SANDBOX_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1344, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_SCOPE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1345, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_SCOPED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1346, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_SELECTED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1347, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_SHAPE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1348, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_SIZE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1349, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_SIZES_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1350, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_SLOT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1351, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_SPAN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1352, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_SPELLCHECK_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1353, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_SRC_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1354, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_SRCDOC_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1355, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_SRCLANG_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1356, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_SRCSET_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1357, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_START_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1358, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_STEP_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1359, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_STYLE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1360, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_SUMMARY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1361, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_TABINDEX_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1362, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_TARGET_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1363, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_TITLE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1364, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_TRANSLATE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1365, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_TYPE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1366, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_USEMAP_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1367, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_VALUE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1368, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_WIDTH_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1369, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_WRAP_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1370, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_A_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1371, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_ABBR_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1372, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_ACRONYM_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1373, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_ADDRESS_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1374, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_APPLET_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1375, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_AREA_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1376, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_ARTICLE_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1377, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_ASIDE_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1378, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_AUDIO_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1379, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_B_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1380, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_BASE_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1381, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_BASEFONT_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1382, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_BDI_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1383, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_BDO_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1384, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_BGSOUND_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1385, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_BIG_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1386, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_BLINK_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1387, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_BLOCKQUOTE_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1388, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_BODY_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1389, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_BR_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1390, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_BUTTON_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1391, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_CANVAS_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1392, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_CAPTION_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1393, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_CENTER_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1394, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_CITE_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1395, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_CODE_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1396, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_COL_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1397, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_COLGROUP_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1398, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_COMMAND_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1399, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_CONTENT_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1400, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_DATA_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1401, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_DATALIST_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1402, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_DD_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1403, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_DEL_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1404, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_DETAILS_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1405, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_DFN_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1406, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_DIALOG_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1407, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_DIR_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1408, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_DIV_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1409, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_DL_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1410, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_DT_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1411, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_ELEMENT_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1412, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_EM_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1413, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_EMBED_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1414, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_FIELDSET_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1415, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_FIGCAPTION_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1416, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_FIGURE_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1417, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_FONT_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1418, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_FOOTER_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1419, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_FORM_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1420, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_FRAME_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1421, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_FRAMESET_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1422, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_H1_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1423, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_HEAD_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1424, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_HEADER_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1425, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_HGROUP_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1426, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_HR_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1427, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_HTML_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1428, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_I_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1429, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_IFRAME_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1430, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_IMAGE_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1431, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_IMG_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1432, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_INPUT_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1433, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_INS_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1434, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_ISINDEX_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1435, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_KBD_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1436, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_KEYGEN_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1437, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_LABEL_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1438, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_LEGEND_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1439, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_LI_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1440, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_LINK_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1441, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_LISTING_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1442, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_MAIN_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1443, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_MAP_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1444, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_MARK_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1445, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_MARQUEE_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1446, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_MENU_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1447, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_MENUITEM_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1448, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_META_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1449, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_METER_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1450, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_MULTICOL_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1451, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_NAV_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1452, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_NEXTID_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1453, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_NOBR_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1454, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_NOEMBED_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1455, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_NOFRAMES_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1456, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_NOSCRIPT_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1457, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_OBJECT_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1458, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_OL_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1459, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_OPTGROUP_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1460, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_OPTION_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1461, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_OUTPUT_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1462, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_P_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1463, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_PARAM_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1464, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_PICTURE_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1465, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_PLAINTEXT_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1466, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_PRE_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1467, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_PROGRESS_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1468, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_Q_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1469, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_RB_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1470, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_RP_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1471, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_RT_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1472, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_RTC_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1473, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_RUBY_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1474, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_S_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1475, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_SAMP_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1476, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_SCRIPT_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1477, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_SECTION_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1478, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_SELECT_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1479, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_SHADOW_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1480, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_SLOT_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1481, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_SMALL_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1482, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_SOURCE_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1483, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_SPACER_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1484, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_SPAN_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1485, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_STRIKE_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1486, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_STRONG_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1487, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_STYLE_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1488, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_SUB_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1489, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_SUMMARY_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1490, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_SUP_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1491, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_TABLE_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1492, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_TBODY_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1493, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_TD_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1494, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_TEMPLATE_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1495, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_TEXTAREA_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1496, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_TFOOT_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1497, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_TH_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1498, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_THEAD_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1499, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_TIME_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1500, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_TITLE_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1501, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_TR_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1502, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_TRACK_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1503, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_TT_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1504, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_U_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1505, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_UL_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1506, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_VAR_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1507, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_VIDEO_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1508, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_WBR_DOM_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1509, b)
  const k = h1(0, i)
  return k
})

/**
 * SET_ARIA_ACTIVEDESCENDANT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1510, b, i)
})

/**
 * SET_ARIA_ATOMIC
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1511, b, i)
})

/**
 * SET_ARIA_AUTOCOMPLETE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1512, b, i)
})

/**
 * SET_ARIA_BUSY
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1513, b, i)
})

/**
 * SET_ARIA_CHECKED
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1514, b, i)
})

/**
 * SET_ARIA_COLCOUNT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1515, b, i)
})

/**
 * SET_ARIA_COLINDEX
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1516, b, i)
})

/**
 * SET_ARIA_COLSPAN
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1517, b, i)
})

/**
 * SET_ARIA_CONTROLS
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1518, b, i)
})

/**
 * SET_ARIA_CURRENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1519, b, i)
})

/**
 * SET_ARIA_DESCRIBEDBY
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1520, b, i)
})

/**
 * SET_ARIA_DETAILS
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1521, b, i)
})

/**
 * SET_ARIA_DISABLED
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1522, b, i)
})

/**
 * SET_ARIA_DROPEFFECT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1523, b, i)
})

/**
 * SET_ARIA_ERRORMESSAGE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1524, b, i)
})

/**
 * SET_ARIA_EXPANDED
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1525, b, i)
})

/**
 * SET_ARIA_FLOWTO
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1526, b, i)
})

/**
 * SET_ARIA_GRABBED
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1527, b, i)
})

/**
 * SET_ARIA_HASPOPUP
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1528, b, i)
})

/**
 * SET_ARIA_HIDDEN
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1529, b, i)
})

/**
 * SET_ARIA_INVALID
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1530, b, i)
})

/**
 * SET_ARIA_KEYSHORTCUTS
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1531, b, i)
})

/**
 * SET_ARIA_LABEL
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1532, b, i)
})

/**
 * SET_ARIA_LABELLEDBY
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1533, b, i)
})

/**
 * SET_ARIA_LEVEL
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1534, b, i)
})

/**
 * SET_ARIA_LIVE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1535, b, i)
})

/**
 * SET_ARIA_MODAL
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1536, b, i)
})

/**
 * SET_ARIA_MULTILINE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1537, b, i)
})

/**
 * SET_ARIA_MULTISELECTABLE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1538, b, i)
})

/**
 * SET_ARIA_ORIENTATION
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1539, b, i)
})

/**
 * SET_ARIA_OWNS
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1540, b, i)
})

/**
 * SET_ARIA_PLACEHOLDER
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1541, b, i)
})

/**
 * SET_ARIA_POSINSET
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1542, b, i)
})

/**
 * SET_ARIA_PRESSED
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1543, b, i)
})

/**
 * SET_ARIA_READONLY
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1544, b, i)
})

/**
 * SET_ARIA_RELEVANT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1545, b, i)
})

/**
 * SET_ARIA_REQUIRED
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1546, b, i)
})

/**
 * SET_ARIA_ROLEDESCRIPTION
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1547, b, i)
})

/**
 * SET_ARIA_ROWCOUNT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1548, b, i)
})

/**
 * SET_ARIA_ROWINDEX
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1549, b, i)
})

/**
 * SET_ARIA_ROWSPAN
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1550, b, i)
})

/**
 * SET_ARIA_SELECTED
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1551, b, i)
})

/**
 * SET_ARIA_SETSIZE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1552, b, i)
})

/**
 * SET_ARIA_SORT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1553, b, i)
})

/**
 * SET_ARIA_VALUEMAX
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1554, b, i)
})

/**
 * SET_ARIA_VALUEMIN
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1555, b, i)
})

/**
 * SET_ARIA_VALUENOW
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1556, b, i)
})

/**
 * SET_ARIA_VALUETEXT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1557, b, i)
})

/**
 * SET_ROLE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1558, b, i)
})

/**
 * GET_ARIA_ACTIVEDESCENDANT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1559, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_ATOMIC_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1560, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_AUTOCOMPLETE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1561, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_BUSY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1562, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_CHECKED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1563, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_COLCOUNT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1564, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_COLINDEX_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1565, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_COLSPAN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1566, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_CONTROLS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1567, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_CURRENT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1568, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_DESCRIBEDBY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1569, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_DETAILS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1570, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_DISABLED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1571, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_DROPEFFECT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1572, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_ERRORMESSAGE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1573, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_EXPANDED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1574, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_FLOWTO_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1575, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_GRABBED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1576, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_HASPOPUP_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1577, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_HIDDEN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1578, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_INVALID_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1579, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_KEYSHORTCUTS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1580, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_LABEL_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1581, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_LABELLEDBY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1582, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_LEVEL_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1583, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_LIVE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1584, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_MODAL_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1585, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_MULTILINE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1586, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_MULTISELECTABLE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1587, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_ORIENTATION_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1588, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_OWNS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1589, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_PLACEHOLDER_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1590, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_POSINSET_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1591, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_PRESSED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1592, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_READONLY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1593, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_RELEVANT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1594, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_REQUIRED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1595, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_ROLEDESCRIPTION_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1596, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_ROWCOUNT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1597, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_ROWINDEX_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1598, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_ROWSPAN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1599, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_SELECTED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1600, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_SETSIZE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1601, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_SORT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1602, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_VALUEMAX_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1603, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_VALUEMIN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1604, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_VALUENOW_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1605, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ARIA_VALUETEXT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1606, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ROLE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  const i = h1(1607, b)
  const k = h1(0, i)
  return k
})

/**
 * REMOVE_ARIA_ACTIVEDESCENDANT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1608, b)
})

/**
 * REMOVE_ARIA_ATOMIC_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1609, b)
})

/**
 * REMOVE_ARIA_AUTOCOMPLETE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1610, b)
})

/**
 * REMOVE_ARIA_BUSY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1611, b)
})

/**
 * REMOVE_ARIA_CHECKED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1612, b)
})

/**
 * REMOVE_ARIA_COLCOUNT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1613, b)
})

/**
 * REMOVE_ARIA_COLINDEX_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1614, b)
})

/**
 * REMOVE_ARIA_COLSPAN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1615, b)
})

/**
 * REMOVE_ARIA_CONTROLS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1616, b)
})

/**
 * REMOVE_ARIA_CURRENT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1617, b)
})

/**
 * REMOVE_ARIA_DESCRIBEDBY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1618, b)
})

/**
 * REMOVE_ARIA_DETAILS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1619, b)
})

/**
 * REMOVE_ARIA_DISABLED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1620, b)
})

/**
 * REMOVE_ARIA_DROPEFFECT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1621, b)
})

/**
 * REMOVE_ARIA_ERRORMESSAGE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1622, b)
})

/**
 * REMOVE_ARIA_EXPANDED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1623, b)
})

/**
 * REMOVE_ARIA_FLOWTO_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1624, b)
})

/**
 * REMOVE_ARIA_GRABBED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1625, b)
})

/**
 * REMOVE_ARIA_HASPOPUP_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1626, b)
})

/**
 * REMOVE_ARIA_HIDDEN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1627, b)
})

/**
 * REMOVE_ARIA_INVALID_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1628, b)
})

/**
 * REMOVE_ARIA_KEYSHORTCUTS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1629, b)
})

/**
 * REMOVE_ARIA_LABEL_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1630, b)
})

/**
 * REMOVE_ARIA_LABELLEDBY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1631, b)
})

/**
 * REMOVE_ARIA_LEVEL_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1632, b)
})

/**
 * REMOVE_ARIA_LIVE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1633, b)
})

/**
 * REMOVE_ARIA_MODAL_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1634, b)
})

/**
 * REMOVE_ARIA_MULTILINE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1635, b)
})

/**
 * REMOVE_ARIA_MULTISELECTABLE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1636, b)
})

/**
 * REMOVE_ARIA_ORIENTATION_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1637, b)
})

/**
 * REMOVE_ARIA_OWNS_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1638, b)
})

/**
 * REMOVE_ARIA_PLACEHOLDER_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1639, b)
})

/**
 * REMOVE_ARIA_POSINSET_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1640, b)
})

/**
 * REMOVE_ARIA_PRESSED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1641, b)
})

/**
 * REMOVE_ARIA_READONLY_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1642, b)
})

/**
 * REMOVE_ARIA_RELEVANT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1643, b)
})

/**
 * REMOVE_ARIA_REQUIRED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1644, b)
})

/**
 * REMOVE_ARIA_ROLEDESCRIPTION_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1645, b)
})

/**
 * REMOVE_ARIA_ROWCOUNT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1646, b)
})

/**
 * REMOVE_ARIA_ROWINDEX_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1647, b)
})

/**
 * REMOVE_ARIA_ROWSPAN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1648, b)
})

/**
 * REMOVE_ARIA_SELECTED_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1649, b)
})

/**
 * REMOVE_ARIA_SETSIZE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1650, b)
})

/**
 * REMOVE_ARIA_SORT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1651, b)
})

/**
 * REMOVE_ARIA_VALUEMAX_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1652, b)
})

/**
 * REMOVE_ARIA_VALUEMIN_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1653, b)
})

/**
 * REMOVE_ARIA_VALUENOW_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1654, b)
})

/**
 * REMOVE_ARIA_VALUETEXT_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1655, b)
})

/**
 * REMOVE_ROLE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1656, b)
})

/**
 * CREATE_AUDIO_CONTEXT_BUFFER
 */

r(function(a, e, f, r){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  const m = d(r)
  h4(1657, b, i, k, m)
})

/**
 * FILL_CANVAS_RECTANGLE
 */

r(function(o, x, y, w, h){
  const b = d(o)
  const i = d(x)
  const k = d(y)
  const m = d(w)
  const n = d(h)
  h5(1658, b, i, k, m, n)
})

/**
 * CLEAR_CANVAS_RECTANGLE
 */

r(function(o, x, y, w, h){
  const b = d(o)
  const i = d(x)
  const k = d(y)
  const m = d(w)
  const n = d(h)
  h5(1659, b, i, k, m, n)
})

/**
 * GET_GLOBAL
 */

r(function(a){
  const b = d(a)
  const i = h1(1660, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_IGNORE_CASE
 */

r(function(a){
  const b = d(a)
  const i = h1(1661, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_SOURCE
 */

r(function(a){
  const b = d(a)
  const i = h1(1662, b)
  const k = h1(0, i)
  return k
})

/**
 * REPLACE_SUBSTRING
 */

r(function(a, e, f){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  h3(1663, b, i, k)
})

/**
 * GET_COMPLETE
 */

r(function(a){
  const b = d(a)
  const i = h1(1664, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_NATURAL_WIDTH
 */

r(function(a){
  const b = d(a)
  const i = h1(1665, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_ORIGINAL_EVENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1666, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_SCALE
 */

r(function(a){
  const b = d(a)
  const i = h1(1667, b)
  const k = h1(0, i)
  return k
})

/**
 * CHECK_IF_HAS_GEOLOCATION
 */

r(function(){
  const b = h0(1668)
  const i = h1(0, b)
  return i
})

/**
 * GET_GEOLOCATION
 */

r(function(a){
  const b = d(a)
  h1(1669, b)
})

/**
 * GET_COORDS
 */

r(function(a){
  const b = d(a)
  const i = h1(1670, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_LATITUDE
 */

r(function(a){
  const b = d(a)
  const i = h1(1671, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_LONGITUDE
 */

r(function(a){
  const b = d(a)
  const i = h1(1672, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_DOM_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(1673, b, i)
  const m = h1(0, k)
  return m
})

/**
 * SET_DOM_EVENT_TYPE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1674, b, i)
})

/**
 * DISPATCH_DOM_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1675, b, i)
})

/**
 * CREATE_WEBGL_PROGRAM
 */

r(function(a){
  const b = d(a)
  const i = h1(1676, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_VERTEX_SHADER
 */

r(function(a){
  const b = d(a)
  const i = h1(1677, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_FRAGMENT_SHADER
 */

r(function(a){
  const b = d(a)
  const i = h1(1678, b)
  const k = h1(0, i)
  return k
})

/**
 * ATTACH_WEBGL_SHADER
 */

r(function(a, e, f){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  h3(1679, b, i, k)
})

/**
 * SET_ACCENT_HEIGHT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1680, b, i)
})

/**
 * SET_ACCUMULATE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1681, b, i)
})

/**
 * SET_ADDITIVE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1682, b, i)
})

/**
 * SET_ALIGNMENT_BASELINE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1683, b, i)
})

/**
 * SET_ALLOW_REORDER_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1684, b, i)
})

/**
 * SET_ALPHABETIC_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1685, b, i)
})

/**
 * SET_AMPLITUDE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1686, b, i)
})

/**
 * SET_ARABIC_FORM_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1687, b, i)
})

/**
 * SET_ASCENT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1688, b, i)
})

/**
 * SET_ATTRIBUTE_NAME_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1689, b, i)
})

/**
 * SET_ATTRIBUTE_TYPE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1690, b, i)
})

/**
 * SET_AUTO_REVERSE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1691, b, i)
})

/**
 * SET_AZIMUTH_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1692, b, i)
})

/**
 * SET_BASE_FREQUENCY_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1693, b, i)
})

/**
 * SET_BASELINE_SHIFT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1694, b, i)
})

/**
 * SET_BASE_PROFILE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1695, b, i)
})

/**
 * SET_BBOX_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1696, b, i)
})

/**
 * SET_BEGIN_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1697, b, i)
})

/**
 * SET_BIAS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1698, b, i)
})

/**
 * SET_BY_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1699, b, i)
})

/**
 * SET_CALC_MODE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1700, b, i)
})

/**
 * SET_CAP_HEIGHT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1701, b, i)
})

/**
 * SET_CLASS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1702, b, i)
})

/**
 * SET_CLIP_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1703, b, i)
})

/**
 * SET_CLIP_PATH_UNITS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1704, b, i)
})

/**
 * SET_CLIP_PATH_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1705, b, i)
})

/**
 * SET_CLIP_RULE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1706, b, i)
})

/**
 * SET_COLOR_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1707, b, i)
})

/**
 * SET_COLOR_INTERPOLATION_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1708, b, i)
})

/**
 * SET_COLOR_INTERPOLATION_FILTERS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1709, b, i)
})

/**
 * SET_COLOR_PROFILE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1710, b, i)
})

/**
 * SET_COLOR_RENDERING_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1711, b, i)
})

/**
 * SET_CONTENT_SCRIPT_TYPE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1712, b, i)
})

/**
 * SET_CONTENT_STYLE_TYPE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1713, b, i)
})

/**
 * SET_CURSOR_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1714, b, i)
})

/**
 * SET_CX_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1715, b, i)
})

/**
 * SET_CY_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1716, b, i)
})

/**
 * SET_D_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1717, b, i)
})

/**
 * SET_DECELERATE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1718, b, i)
})

/**
 * SET_DESCENT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1719, b, i)
})

/**
 * SET_DIFFUSE_CONSTANT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1720, b, i)
})

/**
 * SET_DIRECTION_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1721, b, i)
})

/**
 * SET_DISPLAY_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1722, b, i)
})

/**
 * SET_DIVISOR_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1723, b, i)
})

/**
 * SET_DOMINANT_BASELINE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1724, b, i)
})

/**
 * SET_DUR_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1725, b, i)
})

/**
 * SET_DX_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1726, b, i)
})

/**
 * SET_DY_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1727, b, i)
})

/**
 * SET_EDGE_MODE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1728, b, i)
})

/**
 * SET_ELEVATION_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1729, b, i)
})

/**
 * SET_ENABLE_BACKGROUND_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1730, b, i)
})

/**
 * SET_END_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1731, b, i)
})

/**
 * SET_EXPONENT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1732, b, i)
})

/**
 * SET_EXTERNAL_RESOURCES_REQUIRED_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1733, b, i)
})

/**
 * SET_FILL_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1734, b, i)
})

/**
 * SET_FILL_OPACITY_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1735, b, i)
})

/**
 * SET_FILL_RULE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1736, b, i)
})

/**
 * SET_FILTER_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1737, b, i)
})

/**
 * SET_FILTER_RES_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1738, b, i)
})

/**
 * SET_FILTER_UNITS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1739, b, i)
})

/**
 * SET_FLOOD_COLOR_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1740, b, i)
})

/**
 * SET_FLOOD_OPACITY_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1741, b, i)
})

/**
 * SET_FONT_FAMILY_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1742, b, i)
})

/**
 * SET_FONT_SIZE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1743, b, i)
})

/**
 * SET_FONT_SIZE_ADJUST_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1744, b, i)
})

/**
 * SET_FONT_STRETCH_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1745, b, i)
})

/**
 * SET_FONT_STYLE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1746, b, i)
})

/**
 * SET_FONT_VARIANT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1747, b, i)
})

/**
 * SET_FONT_WEIGHT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1748, b, i)
})

/**
 * SET_FORMAT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1749, b, i)
})

/**
 * SET_FROM_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1750, b, i)
})

/**
 * SET_FR_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1751, b, i)
})

/**
 * SET_FX_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1752, b, i)
})

/**
 * SET_FY_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1753, b, i)
})

/**
 * SET_G1_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1754, b, i)
})

/**
 * SET_G2_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1755, b, i)
})

/**
 * SET_GLYPH_NAME_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1756, b, i)
})

/**
 * SET_GLYPH_ORIENTATION_HORIZONTAL_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1757, b, i)
})

/**
 * SET_GLYPH_ORIENTATION_VERTICAL_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1758, b, i)
})

/**
 * SET_GLYPH_REF_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1759, b, i)
})

/**
 * SET_GRADIENT_TRANSFORM_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1760, b, i)
})

/**
 * SET_GRADIENT_UNITS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1761, b, i)
})

/**
 * SET_HANGING_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1762, b, i)
})

/**
 * SET_HEIGHT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1763, b, i)
})

/**
 * SET_HREF_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1764, b, i)
})

/**
 * SET_HREFLANG_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1765, b, i)
})

/**
 * SET_HORIZ_ADV_X_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1766, b, i)
})

/**
 * SET_HORIZ_ORIGIN_X_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1767, b, i)
})

/**
 * SET_ID_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1768, b, i)
})

/**
 * SET_IDEOGRAPHIC_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1769, b, i)
})

/**
 * SET_IMAGE_RENDERING_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1770, b, i)
})

/**
 * SET_IN_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1771, b, i)
})

/**
 * SET_IN2_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1772, b, i)
})

/**
 * SET_INTERCEPT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1773, b, i)
})

/**
 * SET_K_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1774, b, i)
})

/**
 * SET_K1_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1775, b, i)
})

/**
 * SET_K2_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1776, b, i)
})

/**
 * SET_K3_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1777, b, i)
})

/**
 * SET_K4_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1778, b, i)
})

/**
 * SET_KERNEL_MATRIX_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1779, b, i)
})

/**
 * SET_KERNEL_UNIT_LENGTH_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1780, b, i)
})

/**
 * SET_KERNING_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1781, b, i)
})

/**
 * SET_KEY_POINTS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1782, b, i)
})

/**
 * SET_KEY_SPLINES_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1783, b, i)
})

/**
 * SET_KEY_TIMES_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1784, b, i)
})

/**
 * SET_LANG_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1785, b, i)
})

/**
 * SET_LENGTH_ADJUST_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1786, b, i)
})

/**
 * SET_LETTER_SPACING_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1787, b, i)
})

/**
 * SET_LIGHTING_COLOR_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1788, b, i)
})

/**
 * SET_LIMITING_CONE_ANGLE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1789, b, i)
})

/**
 * SET_LOCAL_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1790, b, i)
})

/**
 * SET_MARKER_END_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1791, b, i)
})

/**
 * SET_MARKER_MID_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1792, b, i)
})

/**
 * SET_MARKER_START_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1793, b, i)
})

/**
 * SET_MARKER_HEIGHT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1794, b, i)
})

/**
 * SET_MARKER_UNITS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1795, b, i)
})

/**
 * SET_MARKER_WIDTH_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1796, b, i)
})

/**
 * SET_MASK_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1797, b, i)
})

/**
 * SET_MASK_CONTENT_UNITS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1798, b, i)
})

/**
 * SET_MASK_UNITS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1799, b, i)
})

/**
 * SET_MATHEMATICAL_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1800, b, i)
})

/**
 * SET_MAX_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1801, b, i)
})

/**
 * SET_MEDIA_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1802, b, i)
})

/**
 * SET_METHOD_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1803, b, i)
})

/**
 * SET_MIN_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1804, b, i)
})

/**
 * SET_MODE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1805, b, i)
})

/**
 * SET_NAME_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1806, b, i)
})

/**
 * SET_NUM_OCTAVES_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1807, b, i)
})

/**
 * SET_OFFSET_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1808, b, i)
})

/**
 * SET_OPACITY_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1809, b, i)
})

/**
 * SET_OPERATOR_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1810, b, i)
})

/**
 * SET_ORDER_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1811, b, i)
})

/**
 * SET_ORIENT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1812, b, i)
})

/**
 * SET_ORIENTATION_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1813, b, i)
})

/**
 * SET_ORIGIN_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1814, b, i)
})

/**
 * SET_OVERFLOW_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1815, b, i)
})

/**
 * SET_OVERLINE_POSITION_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1816, b, i)
})

/**
 * SET_OVERLINE_THICKNESS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1817, b, i)
})

/**
 * SET_PANOSE_1_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1818, b, i)
})

/**
 * SET_PAINT_ORDER_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1819, b, i)
})

/**
 * SET_PATH_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1820, b, i)
})

/**
 * SET_PATH_LENGTH_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1821, b, i)
})

/**
 * SET_PATTERN_CONTENT_UNITS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1822, b, i)
})

/**
 * SET_PATTERN_TRANSFORM_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1823, b, i)
})

/**
 * SET_PATTERN_UNITS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1824, b, i)
})

/**
 * SET_PING_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1825, b, i)
})

/**
 * SET_POINTER_EVENTS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1826, b, i)
})

/**
 * SET_POINTS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1827, b, i)
})

/**
 * SET_POINTS_AT_X_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1828, b, i)
})

/**
 * SET_POINTS_AT_Y_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1829, b, i)
})

/**
 * SET_POINTS_AT_Z_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1830, b, i)
})

/**
 * SET_PRESERVE_ALPHA_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1831, b, i)
})

/**
 * SET_PRESERVE_ASPECT_RATIO_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1832, b, i)
})

/**
 * SET_PRIMITIVE_UNITS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1833, b, i)
})

/**
 * SET_R_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1834, b, i)
})

/**
 * SET_RADIUS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1835, b, i)
})

/**
 * SET_REFERRER_POLICY_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1836, b, i)
})

/**
 * SET_REF_X_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1837, b, i)
})

/**
 * SET_REF_Y_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1838, b, i)
})

/**
 * SET_REL_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1839, b, i)
})

/**
 * SET_RENDERING_INTENT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1840, b, i)
})

/**
 * SET_REPEAT_COUNT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1841, b, i)
})

/**
 * SET_REPEAT_DUR_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1842, b, i)
})

/**
 * SET_REQUIRED_EXTENSIONS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1843, b, i)
})

/**
 * SET_REQUIRED_FEATURES_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1844, b, i)
})

/**
 * SET_RESTART_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1845, b, i)
})

/**
 * SET_RESULT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1846, b, i)
})

/**
 * SET_ROTATE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1847, b, i)
})

/**
 * SET_RX_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1848, b, i)
})

/**
 * SET_RY_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1849, b, i)
})

/**
 * SET_SCALE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1850, b, i)
})

/**
 * SET_SEED_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1851, b, i)
})

/**
 * SET_SHAPE_RENDERING_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1852, b, i)
})

/**
 * SET_SLOPE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1853, b, i)
})

/**
 * SET_SPACING_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1854, b, i)
})

/**
 * SET_SPECULAR_CONSTANT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1855, b, i)
})

/**
 * SET_SPECULAR_EXPONENT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1856, b, i)
})

/**
 * SET_SPEED_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1857, b, i)
})

/**
 * SET_SPREAD_METHOD_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1858, b, i)
})

/**
 * SET_START_OFFSET_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1859, b, i)
})

/**
 * SET_STD_DEVIATION_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1860, b, i)
})

/**
 * SET_STEMH_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1861, b, i)
})

/**
 * SET_STEMV_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1862, b, i)
})

/**
 * SET_STITCH_TILES_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1863, b, i)
})

/**
 * SET_STOP_COLOR_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1864, b, i)
})

/**
 * SET_STOP_OPACITY_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1865, b, i)
})

/**
 * SET_STRIKETHROUGH_POSITION_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1866, b, i)
})

/**
 * SET_STRIKETHROUGH_THICKNESS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1867, b, i)
})

/**
 * SET_STRING_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1868, b, i)
})

/**
 * SET_STROKE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1869, b, i)
})

/**
 * SET_STROKE_DASHARRAY_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1870, b, i)
})

/**
 * SET_STROKE_DASHOFFSET_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1871, b, i)
})

/**
 * SET_STROKE_LINECAP_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1872, b, i)
})

/**
 * SET_STROKE_LINEJOIN_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1873, b, i)
})

/**
 * SET_STROKE_MITERLIMIT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1874, b, i)
})

/**
 * SET_STROKE_OPACITY_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1875, b, i)
})

/**
 * SET_STROKE_WIDTH_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1876, b, i)
})

/**
 * SET_STYLE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1877, b, i)
})

/**
 * SET_SURFACE_SCALE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1878, b, i)
})

/**
 * SET_SYSTEM_LANGUAGE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1879, b, i)
})

/**
 * SET_TABINDEX_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1880, b, i)
})

/**
 * SET_TABLE_VALUES_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1881, b, i)
})

/**
 * SET_TARGET_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1882, b, i)
})

/**
 * SET_TARGET_X_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1883, b, i)
})

/**
 * SET_TARGET_Y_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1884, b, i)
})

/**
 * SET_TEXT_ANCHOR_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1885, b, i)
})

/**
 * SET_TEXT_DECORATION_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1886, b, i)
})

/**
 * SET_TEXT_RENDERING_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1887, b, i)
})

/**
 * SET_TEXT_LENGTH_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1888, b, i)
})

/**
 * SET_TO_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1889, b, i)
})

/**
 * SET_TRANSFORM_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1890, b, i)
})

/**
 * SET_TYPE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1891, b, i)
})

/**
 * SET_U1_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1892, b, i)
})

/**
 * SET_U2_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1893, b, i)
})

/**
 * SET_UNDERLINE_POSITION_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1894, b, i)
})

/**
 * SET_UNDERLINE_THICKNESS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1895, b, i)
})

/**
 * SET_UNICODE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1896, b, i)
})

/**
 * SET_UNICODE_BIDI_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1897, b, i)
})

/**
 * SET_UNICODE_RANGE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1898, b, i)
})

/**
 * SET_UNITS_PER_EM_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1899, b, i)
})

/**
 * SET_V_ALPHABETIC_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1900, b, i)
})

/**
 * SET_V_HANGING_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1901, b, i)
})

/**
 * SET_V_IDEOGRAPHIC_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1902, b, i)
})

/**
 * SET_V_MATHEMATICAL_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1903, b, i)
})

/**
 * SET_VALUES_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1904, b, i)
})

/**
 * SET_VECTOR_EFFECT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1905, b, i)
})

/**
 * SET_VERSION_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1906, b, i)
})

/**
 * SET_VERT_ADV_Y_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1907, b, i)
})

/**
 * SET_VERT_ORIGIN_X_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1908, b, i)
})

/**
 * SET_VERT_ORIGIN_Y_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1909, b, i)
})

/**
 * SET_VIEW_BOX_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1910, b, i)
})

/**
 * SET_VIEW_TARGET_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1911, b, i)
})

/**
 * SET_VISIBILITY_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1912, b, i)
})

/**
 * SET_WIDTH_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1913, b, i)
})

/**
 * SET_WIDTHS_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1914, b, i)
})

/**
 * SET_WORD_SPACING_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1915, b, i)
})

/**
 * SET_WRITING_MODE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1916, b, i)
})

/**
 * SET_X_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1917, b, i)
})

/**
 * SET_X_HEIGHT_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1918, b, i)
})

/**
 * SET_X1_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1919, b, i)
})

/**
 * SET_X2_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1920, b, i)
})

/**
 * SET_X_CHANNEL_SELECTOR_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1921, b, i)
})

/**
 * SET_XLINK_ACTUATE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1922, b, i)
})

/**
 * SET_XLINK_ARCROLE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1923, b, i)
})

/**
 * SET_XLINK_HREF_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1924, b, i)
})

/**
 * SET_XLINK_ROLE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1925, b, i)
})

/**
 * SET_XLINK_SHOW_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1926, b, i)
})

/**
 * SET_XLINK_TITLE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1927, b, i)
})

/**
 * SET_XLINK_TYPE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1928, b, i)
})

/**
 * SET_XML_BASE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1929, b, i)
})

/**
 * SET_XML_LANG_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1930, b, i)
})

/**
 * SET_XML_SPACE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1931, b, i)
})

/**
 * SET_Y_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1932, b, i)
})

/**
 * SET_Y1_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1933, b, i)
})

/**
 * SET_Y2_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1934, b, i)
})

/**
 * SET_Y_CHANNEL_SELECTOR_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1935, b, i)
})

/**
 * SET_Z_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1936, b, i)
})

/**
 * SET_ZOOM_AND_PAN_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1937, b, i)
})

/**
 * CREATE_REGEX
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(1938, b, i)
  const m = h1(0, k)
  return m
})

/**
 * GET_INDEX_OF
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(1939, b, i)
  const m = h1(0, k)
  return m
})

/**
 * MATCH_REGEX
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(1940, b, i)
  const m = h1(0, k)
  return m
})

/**
 * CREATE_DATETIME
 */

r(function(a){
  const b = d(a)
  const i = h1(1941, b)
  const k = h1(0, i)
  return k
})

/**
 * PARSE_DATE
 */

r(function(a){
  const b = d(a)
  const i = h1(1942, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_MICROSECOND_TIMESTAMP
 */

r(function(){
  const b = h0(1943)
  const i = h1(0, b)
  return i
})

/**
 * GET_COMPUTED_STYLE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  const k = h2(1944, b, i)
  const m = h1(0, k)
  return m
})

/**
 * GET_HEAD
 */

r(function(a){
  const b = d(a)
  const i = h1(1945, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_STYLESHEETS
 */

r(function(a){
  const b = d(a)
  const i = h1(1946, b)
  const k = h1(0, i)
  return k
})

/**
 * LISTEN_TO_WEBGLCONTEXTLOST_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1947, b, i)
})

/**
 * LISTEN_TO_WEBGLCONTEXTRESTORED_EVENT
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1948, b, i)
})

/**
 * GET_WEBGL2_CONTEXT
 */

r(function(a){
  const b = d(a)
  const i = h1(1949, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_FLOAT32ARRAY
 */

r(function(a){
  const b = d(a)
  const i = h1(1950, b)
  const k = h1(0, i)
  return k
})

/**
 * CREATE_FUNCTION
 */

r(function(a){
  const b = d(a)
  const i = h1(1951, b)
  const k = h1(0, i)
  return k
})

/**
 * INSERT_STYLESHEET_RULE
 */

r(function(a, e, f){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  h3(1952, b, i, k)
})

/**
 * DELETE_STYLESHEET_RULE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1953, b, i)
})

/**
 * TRIM_STRING
 */

r(function(a){
  const b = d(a)
  const i = h1(1954, b)
  const k = h1(0, i)
  return k
})

/**
 * SEND_REQUEST
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1955, b, i)
})

/**
 * SET_REQUEST_HEADER
 */

r(function(a, e, f){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  h3(1956, b, i, k)
})

/**
 * GET_MESSAGE
 */

r(function(a){
  const b = d(a)
  const i = h1(1957, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_STACK
 */

r(function(a){
  const b = d(a)
  const i = h1(1958, b)
  const k = h1(0, i)
  return k
})

/**
 * POST_MESSAGE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1959, b, i)
})

/**
 * SET_ITEMREF_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1960, b, i)
})

/**
 * SET_ITEMSCOPE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1961, b, i)
})

/**
 * SET_ITEMTYPE_ATTRIBUTE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1962, b, i)
})

/**
 * REMOVE_ITEMREF_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1963, b)
})

/**
 * REMOVE_ITEMSCOPE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1964, b)
})

/**
 * REMOVE_ITEMTYPE_ATTRIBUTE
 */

r(function(a){
  const b = d(a)
  h1(1965, b)
})

/**
 * CREATE_BROWSER_WORKER
 */

r(function(a){
  const b = d(a)
  const i = h1(1966, b)
  const k = h1(0, i)
  return k
})

/**
 * OPEN_REQUEST
 */

r(function(a, e, f){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  h3(1967, b, i, k)
})

/**
 * CREATE_IMAGE
 */

r(function(){
  const b = h0(1968)
  const i = h1(0, b)
  return i
})

/**
 * ADD_DOM_ELEMENT_CLASS
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1969, b, i)
})

/**
 * REMOVE_DOM_ELEMENT_CLASS
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1970, b, i)
})

/**
 * GET_DOM_ELEMENT_PARENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1971, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_DOM_ELEMENT_CHILDREN
 */

r(function(a){
  const b = d(a)
  const i = h1(1972, b)
  const k = h1(0, i)
  return k
})

/**
 * MEASURE_TEXT_WIDTH
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1973, b, i)
})

/**
 * GET_FIRST_CHILD
 */

r(function(a){
  const b = d(a)
  const i = h1(1974, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_LAST_CHILD
 */

r(function(a){
  const b = d(a)
  const i = h1(1975, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_NEXT_SIBLING
 */

r(function(a){
  const b = d(a)
  const i = h1(1976, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_NEXT_SIBLING_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1977, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_PREVIOUS_SIBLING
 */

r(function(a){
  const b = d(a)
  const i = h1(1978, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_PREVIOUS_SIBLING_ELEMENT
 */

r(function(a){
  const b = d(a)
  const i = h1(1979, b)
  const k = h1(0, i)
  return k
})

/**
 * CHECK_IF_WINDOW_SUPPORTS_TEXT_SELECTION
 */

r(function(){
  const b = h0(1980)
  const i = h1(0, b)
  return i
})

/**
 * CHECK_IF_DOCUMENT_SUPPORTS_TEXT_SELECTION
 */

r(function(){
  const b = h0(1981)
  const i = h1(0, b)
  return i
})

/**
 * GET_SELECTED_TEXT_FROM_DOCUMENT
 */

r(function(){
  const b = h0(1982)
  const i = h1(0, b)
  return i
})

/**
 * GET_SELECTED_TEXT_FROM_WINDOW
 */

r(function(){
  const b = h0(1983)
  const i = h1(0, b)
  return i
})

/**
 * CREATE_TEXT_RANGE_SELECTOR
 */

r(function(){
  const b = h0(1984)
  const i = h1(0, b)
  return i
})

/**
 * SELECT_DOM_ELEMENT_CONTENTS
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1985, b, i)
})

/**
 * REMOVE_ALL_TEXT_SELECTION
 */

r(function(a){
  const b = d(a)
  h1(1986, b)
})

/**
 * ADD_TEXT_SELECTION_RANGE
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1987, b, i)
})

/**
 * SET_WEBGL_SHADER_SOURCE
 */

r(function(a, e, f){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  h3(1988, b, i, k)
})

/**
 * COMPILE_WEBGL_SHADER
 */

r(function(a, e){
  const b = d(a)
  const i = d(e)
  h2(1989, b, i)
})

/**
 * CREATE_WEBGL_BUFFER
 */

r(function(a){
  const b = d(a)
  const i = h1(1990, b)
  const k = h1(0, i)
  return k
})

/**
 * GET_WEBGL_ATTRIBUTE_LOCATION
 */

r(function(a, e, f){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  const m = h3(1991, b, i, k)
  const n = h1(0, m)
  return n
})

/**
 * GET_WEBGL_UNIFORM_LOCATION
 */

r(function(a, e, f){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  const m = h3(1992, b, i, k)
  const n = h1(0, m)
  return n
})

/**
 * SET_WEBGL_UNIFORM1F
 */

r(function(a, e, f){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  h3(1993, b, i, k)
})

/**
 * SET_WEBGL_UNIFORM1FV
 */

r(function(a, e, f){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  h3(1994, b, i, k)
})

/**
 * SET_WEBGL_UNIFORM2F
 */

r(function(a, e, f, r){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  const m = d(r)
  h4(1995, b, i, k, m)
})

/**
 * SET_WEBGL_UNIFORM2FV
 */

r(function(a, e, f, r){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  const m = d(r)
  h4(1996, b, i, k, m)
})

/**
 * SET_WEBGL_UNIFORM3F
 */

r(function(a, e, f, r, s){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  const m = d(r)
  const n = d(s)
  h5(1997, b, i, k, m, n)
})

/**
 * SET_WEBGL_UNIFORM3FV
 */

r(function(a, e, f, r, s){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  const m = d(r)
  const n = d(s)
  h5(1998, b, i, k, m, n)
})

/**
 * SET_WEBGL_UNIFORM4F
 */

r(function(a, e, f, r, s, u){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  const m = d(r)
  const n = d(s)
  const o = d(u)
  h6(1999, b, i, k, m, n, o)
})

/**
 * SET_WEBGL_UNIFORM4FV
 */

r(function(a, e, f, r, s, u){
  const b = d(a)
  const i = d(e)
  const k = d(f)
  const m = d(r)
  const n = d(s)
  const o = d(u)
  h6(2000, b, i, k, m, n, o)
})


})()