
function u_create_request() {
  if (typeof XMLHttpRequest != 'undefined') return new XMLHttpRequest()
  return new ActiveXObject('msxml2.xmlhttp.6.0')
}

function u_get_request_constructor() {
  return XMLHttpRequest
}

function u_get_request_constructor_ms() {
  return ActiveXObject
}

function u_get_request_param_ms() {
  return 'msxml2.xmlhttp.6.0'
}

function u_get_audio_constructor() {
  return Audio
}

function u_create_uint8array_constructor() {
  return new Uint8Array(x)
}

function u_get_uint16array_constructor() {
  return Uint16Array
}

function u_get_uint32array_constructor() {
  return Uint32Array
}

function u_get_audio_context_constructor() {
  return AudioContext
}

function u_get_web_socket_constructor() {
  return WebSocket
}


function u_get_sample_rate(o) {
  return o.sampleRate
}
