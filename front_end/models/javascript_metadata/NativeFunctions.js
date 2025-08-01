// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Generated from javascript_natives/helpers.js

// clang-format off

export const NativeFunctions = [
  {
    name: "eval",
    signatures: [["x"]]
  },
  {
    name: "parseInt",
    signatures: [["string","?radix"]]
  },
  {
    name: "parseFloat",
    signatures: [["string"]]
  },
  {
    name: "isNaN",
    signatures: [["number"]]
  },
  {
    name: "isFinite",
    signatures: [["number"]]
  },
  {
    name: "decodeURI",
    signatures: [["encodedURI"]]
  },
  {
    name: "decodeURIComponent",
    signatures: [["encodedURIComponent"]]
  },
  {
    name: "encodeURI",
    signatures: [["uri"]]
  },
  {
    name: "encodeURIComponent",
    signatures: [["uriComponent"]]
  },
  {
    name: "escape",
    signatures: [["string"]],
    receivers: ["Window"]
  },
  {
    name: "escape",
    signatures: [["ident"]],
    receivers: ["CSS"]
  },
  {
    name: "unescape",
    signatures: [["string"]]
  },
  {
    name: "toString",
    signatures: [["?radix"]],
    receivers: ["Number","BigInt"]
  },
  {
    name: "get",
    signatures: [["?options"]],
    receivers: ["CredentialsContainer"]
  },
  {
    name: "get",
    signatures: [["name"]],
    receivers: ["CustomElementRegistry","FormData","URLSearchParams"]
  },
  {
    name: "get",
    signatures: [["name"],["key"]],
    receivers: ["Headers"]
  },
  {
    name: "get",
    signatures: [["query"],["key"]],
    receivers: ["IDBIndex","IDBObjectStore"]
  },
  {
    name: "get",
    signatures: [["keyId"]],
    receivers: ["MediaKeyStatusMap"]
  },
  {
    name: "get",
    signatures: [["property"]],
    receivers: ["StylePropertyMapReadOnly"]
  },
  {
    name: "get",
    signatures: [["target","p","receiver"]],
    receivers: ["ProxyHandler"]
  },
  {
    name: "get",
    signatures: [["key"]],
    receivers: ["Map","ReadonlyMap","WeakMap","XRHand"]
  },
  {
    name: "get",
    signatures: [["id"]],
    receivers: ["Clients","BackgroundFetchManager"]
  },
  {
    name: "get",
    signatures: [["name"],["?options"]],
    receivers: ["CookieStore"]
  },
  {
    name: "set",
    signatures: [["v"]],
    receivers: ["PropertyDescriptor"]
  },
  {
    name: "set",
    signatures: [["array","?offset"]],
    receivers: ["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","Float16Array","BigInt64Array","BigUint64Array"]
  },
  {
    name: "set",
    signatures: [["name","value","?filename"],["name","blobValue","?filename"]],
    receivers: ["FormData"]
  },
  {
    name: "set",
    signatures: [["name","value"],["key","value"]],
    receivers: ["Headers"]
  },
  {
    name: "set",
    signatures: [["property","...values"]],
    receivers: ["StylePropertyMap"]
  },
  {
    name: "set",
    signatures: [["name","value"]],
    receivers: ["URLSearchParams"]
  },
  {
    name: "set",
    signatures: [["target","p","newValue","receiver"]],
    receivers: ["ProxyHandler"]
  },
  {
    name: "set",
    signatures: [["value"]],
    receivers: ["ClassAccessorDecoratorTarget","ClassAccessorDecoratorResult"]
  },
  {
    name: "set",
    signatures: [["key","value"]],
    receivers: ["Map","WeakMap","CrashReportStorage"]
  },
  {
    name: "set",
    signatures: [["featureValueName","values"]],
    receivers: ["CSSFontFeatureValuesMap"]
  },
  {
    name: "set",
    signatures: [["cookieInit"],["name","value"]],
    receivers: ["CookieStore"]
  },
  {
    name: "toLocaleString",
    signatures: [["?locales","?options"]],
    receivers: ["Date","ReadonlyArray","Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","Number","Float16Array","BigInt","BigInt64Array","BigUint64Array"]
  },
  {
    name: "hasOwnProperty",
    signatures: [["v"]]
  },
  {
    name: "isPrototypeOf",
    signatures: [["v"]]
  },
  {
    name: "propertyIsEnumerable",
    signatures: [["v"]]
  },
  {
    name: "getPrototypeOf",
    signatures: [["o"]],
    receivers: ["ObjectConstructor"]
  },
  {
    name: "getPrototypeOf",
    signatures: [["target"]],
    receivers: ["ProxyHandler"]
  },
  {
    name: "getOwnPropertyDescriptor",
    signatures: [["o","p"]],
    receivers: ["ObjectConstructor"]
  },
  {
    name: "getOwnPropertyDescriptor",
    signatures: [["target","p"]],
    receivers: ["ProxyHandler"]
  },
  {
    name: "getOwnPropertyNames",
    signatures: [["o"]]
  },
  {
    name: "create",
    signatures: [["o","?properties"]],
    receivers: ["ObjectConstructor"]
  },
  {
    name: "create",
    signatures: [["?options"]],
    receivers: ["CredentialsContainer"]
  },
  {
    name: "defineProperty",
    signatures: [["o","p","attributes"]],
    receivers: ["ObjectConstructor"]
  },
  {
    name: "defineProperty",
    signatures: [["target","property","attributes"]],
    receivers: ["ProxyHandler"]
  },
  {
    name: "defineProperties",
    signatures: [["o","properties"]]
  },
  {
    name: "seal",
    signatures: [["o"]]
  },
  {
    name: "freeze",
    signatures: [["f"],["o"]]
  },
  {
    name: "preventExtensions",
    signatures: [["o"]],
    receivers: ["ObjectConstructor"]
  },
  {
    name: "preventExtensions",
    signatures: [["target"]],
    receivers: ["ProxyHandler"]
  },
  {
    name: "isSealed",
    signatures: [["o"]]
  },
  {
    name: "isFrozen",
    signatures: [["o"]]
  },
  {
    name: "isExtensible",
    signatures: [["o"]],
    receivers: ["ObjectConstructor"]
  },
  {
    name: "isExtensible",
    signatures: [["target"]],
    receivers: ["ProxyHandler"]
  },
  {
    name: "keys",
    signatures: [["o"]],
    receivers: ["ObjectConstructor"]
  },
  {
    name: "keys",
    signatures: [["?request","?options"]],
    receivers: ["Cache"]
  },
  {
    name: "apply",
    signatures: [["thisArg","?argArray"]],
    receivers: ["Function"]
  },
  {
    name: "apply",
    signatures: [["thisArg","?args"]],
    receivers: ["CallableFunction","NewableFunction"]
  },
  {
    name: "apply",
    signatures: [["target","thisArg","argArray"]],
    receivers: ["ProxyHandler"]
  },
  {
    name: "call",
    signatures: [["thisArg","...argArray"]],
    receivers: ["Function"]
  },
  {
    name: "call",
    signatures: [["thisArg","...args"]],
    receivers: ["CallableFunction","NewableFunction"]
  },
  {
    name: "bind",
    signatures: [["thisArg","...argArray"]],
    receivers: ["Function"]
  },
  {
    name: "bind",
    signatures: [["thisArg","...args"]],
    receivers: ["CallableFunction","NewableFunction"]
  },
  {
    name: "bind",
    signatures: [["innerFunction","?thisArg","...args"]],
    receivers: ["Performance"]
  },
  {
    name: "charAt",
    signatures: [["pos"]]
  },
  {
    name: "charCodeAt",
    signatures: [["index"]]
  },
  {
    name: "concat",
    signatures: [["...strings"]],
    receivers: ["String"]
  },
  {
    name: "concat",
    signatures: [["...items"]],
    receivers: ["ReadonlyArray","Array"]
  },
  {
    name: "concat",
    signatures: [["inputs","axis","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "indexOf",
    signatures: [["searchString","?position"]],
    receivers: ["String"]
  },
  {
    name: "indexOf",
    signatures: [["searchElement","?fromIndex"]],
    receivers: ["ReadonlyArray","Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","Float16Array","BigInt64Array","BigUint64Array"]
  },
  {
    name: "lastIndexOf",
    signatures: [["searchString","?position"]],
    receivers: ["String"]
  },
  {
    name: "lastIndexOf",
    signatures: [["searchElement","?fromIndex"]],
    receivers: ["ReadonlyArray","Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","Float16Array","BigInt64Array","BigUint64Array"]
  },
  {
    name: "localeCompare",
    signatures: [["that","?locales","?options"]]
  },
  {
    name: "match",
    signatures: [["regexp"],["matcher"]],
    receivers: ["String"]
  },
  {
    name: "match",
    signatures: [["request","?options"]],
    receivers: ["Cache","CacheStorage","BackgroundFetchRegistration"]
  },
  {
    name: "replace",
    signatures: [["searchValue","replaceValue"],["searchValue","replacer"]],
    receivers: ["String"]
  },
  {
    name: "replace",
    signatures: [["text"]],
    receivers: ["CSSStyleSheet"]
  },
  {
    name: "replace",
    signatures: [["token","newToken"]],
    receivers: ["DOMTokenList"]
  },
  {
    name: "replace",
    signatures: [["url"]],
    receivers: ["Location"]
  },
  {
    name: "search",
    signatures: [["regexp"],["searcher"]]
  },
  {
    name: "slice",
    signatures: [["?start","?end"]],
    receivers: ["String","ReadonlyArray","ConcatArray","Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","Float16Array","BigInt64Array","BigUint64Array"]
  },
  {
    name: "slice",
    signatures: [["?begin","?end"]],
    receivers: ["ArrayBuffer","SharedArrayBuffer"]
  },
  {
    name: "slice",
    signatures: [["?start","?end","?contentType"]],
    receivers: ["Blob"]
  },
  {
    name: "slice",
    signatures: [["input","starts","sizes","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "split",
    signatures: [["separator","?limit"],["splitter","?limit"]],
    receivers: ["String"]
  },
  {
    name: "split",
    signatures: [["input","splits","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "substring",
    signatures: [["start","?end"]]
  },
  {
    name: "toLocaleLowerCase",
    signatures: [["?locales"]]
  },
  {
    name: "toLocaleUpperCase",
    signatures: [["?locales"]]
  },
  {
    name: "substr",
    signatures: [["from","?length"]]
  },
  {
    name: "fromCharCode",
    signatures: [["...codes"]]
  },
  {
    name: "toFixed",
    signatures: [["?fractionDigits"]]
  },
  {
    name: "toExponential",
    signatures: [["?fractionDigits"]]
  },
  {
    name: "toPrecision",
    signatures: [["?precision"]]
  },
  {
    name: "abs",
    signatures: [["x"]],
    receivers: ["Math"]
  },
  {
    name: "abs",
    signatures: [["x","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "acos",
    signatures: [["x"]]
  },
  {
    name: "asin",
    signatures: [["x"]]
  },
  {
    name: "atan",
    signatures: [["x"]]
  },
  {
    name: "atan2",
    signatures: [["y","x"]]
  },
  {
    name: "ceil",
    signatures: [["x"]],
    receivers: ["Math"]
  },
  {
    name: "ceil",
    signatures: [["x","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "cos",
    signatures: [["x"]],
    receivers: ["Math"]
  },
  {
    name: "cos",
    signatures: [["x","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "exp",
    signatures: [["x"]],
    receivers: ["Math"]
  },
  {
    name: "exp",
    signatures: [["x","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "floor",
    signatures: [["x"]],
    receivers: ["Math"]
  },
  {
    name: "floor",
    signatures: [["x","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "log",
    signatures: [["x"]],
    receivers: ["Math"]
  },
  {
    name: "log",
    signatures: [["...data"]],
    receivers: ["Console","console"]
  },
  {
    name: "log",
    signatures: [["x","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "max",
    signatures: [["...values"]],
    receivers: ["Math","CSSNumericValue"]
  },
  {
    name: "max",
    signatures: [["a","b","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "min",
    signatures: [["...values"]],
    receivers: ["Math","CSSNumericValue"]
  },
  {
    name: "min",
    signatures: [["a","b","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "pow",
    signatures: [["x","y"]],
    receivers: ["Math"]
  },
  {
    name: "pow",
    signatures: [["a","b","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "round",
    signatures: [["x"]]
  },
  {
    name: "sin",
    signatures: [["x"]],
    receivers: ["Math"]
  },
  {
    name: "sin",
    signatures: [["x","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "sqrt",
    signatures: [["x"]],
    receivers: ["Math"]
  },
  {
    name: "sqrt",
    signatures: [["x","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "tan",
    signatures: [["x"]],
    receivers: ["Math"]
  },
  {
    name: "tan",
    signatures: [["x","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "toLocaleDateString",
    signatures: [["?locales","?options"]]
  },
  {
    name: "toLocaleTimeString",
    signatures: [["?locales","?options"]]
  },
  {
    name: "setTime",
    signatures: [["time"]]
  },
  {
    name: "setMilliseconds",
    signatures: [["ms"]]
  },
  {
    name: "setUTCMilliseconds",
    signatures: [["ms"]]
  },
  {
    name: "setSeconds",
    signatures: [["sec","?ms"]]
  },
  {
    name: "setUTCSeconds",
    signatures: [["sec","?ms"]]
  },
  {
    name: "setMinutes",
    signatures: [["min","?sec","?ms"]]
  },
  {
    name: "setUTCMinutes",
    signatures: [["min","?sec","?ms"]]
  },
  {
    name: "setHours",
    signatures: [["hours","?min","?sec","?ms"]]
  },
  {
    name: "setUTCHours",
    signatures: [["hours","?min","?sec","?ms"]]
  },
  {
    name: "setDate",
    signatures: [["date"]]
  },
  {
    name: "setUTCDate",
    signatures: [["date"]]
  },
  {
    name: "setMonth",
    signatures: [["month","?date"]]
  },
  {
    name: "setUTCMonth",
    signatures: [["month","?date"]]
  },
  {
    name: "setFullYear",
    signatures: [["year","?month","?date"]]
  },
  {
    name: "setUTCFullYear",
    signatures: [["year","?month","?date"]]
  },
  {
    name: "toJSON",
    signatures: [["?key"]],
    receivers: ["Date"]
  },
  {
    name: "parse",
    signatures: [["s"]],
    receivers: ["DateConstructor"]
  },
  {
    name: "parse",
    signatures: [["text","?reviver"]],
    receivers: ["JSON"]
  },
  {
    name: "parse",
    signatures: [["cssText"]],
    receivers: ["CSSColorValue","CSSNumericValue"]
  },
  {
    name: "parse",
    signatures: [["property","cssText"]],
    receivers: ["CSSStyleValue"]
  },
  {
    name: "parse",
    signatures: [["serializedOrigin"]],
    receivers: ["Origin"]
  },
  {
    name: "parse",
    signatures: [["url","?base"]],
    receivers: ["URL"]
  },
  {
    name: "UTC",
    signatures: [["year","?monthIndex","?date","?hours","?minutes","?seconds","?ms"]]
  },
  {
    name: "exec",
    signatures: [["string"]],
    receivers: ["RegExp"]
  },
  {
    name: "exec",
    signatures: [["?input","?baseURL"]],
    receivers: ["URLPattern"]
  },
  {
    name: "test",
    signatures: [["string"]],
    receivers: ["RegExp"]
  },
  {
    name: "test",
    signatures: [["?input","?baseURL"]],
    receivers: ["URLPattern"]
  },
  {
    name: "compile",
    signatures: [["pattern","?flags"]]
  },
  {
    name: "stringify",
    signatures: [["value","?replacer","?space"]]
  },
  {
    name: "join",
    signatures: [["?separator"]]
  },
  {
    name: "every",
    signatures: [["predicate","?thisArg"]],
    receivers: ["ReadonlyArray","Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","Float16Array","BigInt64Array","BigUint64Array"]
  },
  {
    name: "every",
    signatures: [["predicate","?options"]],
    receivers: ["Observable"]
  },
  {
    name: "some",
    signatures: [["predicate","?thisArg"]],
    receivers: ["ReadonlyArray","Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","Float16Array","BigInt64Array","BigUint64Array"]
  },
  {
    name: "some",
    signatures: [["predicate","?options"]],
    receivers: ["Observable"]
  },
  {
    name: "forEach",
    signatures: [["callbackfn","?thisArg"]],
    receivers: ["ReadonlyArray","Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","AudioParamMap","CSSNumericArray","CSSTransformValue","CSSUnparsedValue","CustomStateSet","DOMTokenList","EventCounts","FontFaceSet","FormData","Headers","Highlight","HighlightRegistry","MIDIInputMap","MIDIOutputMap","MediaKeyStatusMap","NodeList","NodeListOf","RTCStatsReport","StylePropertyMapReadOnly","URLSearchParams","ViewTransitionTypeSet","Float16Array","Map","ReadonlyMap","Set","ReadonlySet","BigInt64Array","BigUint64Array"]
  },
  {
    name: "forEach",
    signatures: [["callback","?options"]],
    receivers: ["Observable"]
  },
  {
    name: "map",
    signatures: [["callbackfn","?thisArg"]],
    receivers: ["ReadonlyArray","Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","Float16Array","BigInt64Array","BigUint64Array"]
  },
  {
    name: "map",
    signatures: [["mapper"]],
    receivers: ["Observable"]
  },
  {
    name: "filter",
    signatures: [["predicate","?thisArg"]],
    receivers: ["ReadonlyArray","Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","Float16Array","BigInt64Array","BigUint64Array"]
  },
  {
    name: "filter",
    signatures: [["predicate"]],
    receivers: ["Observable"]
  },
  {
    name: "reduce",
    signatures: [["callbackfn","?initialValue"]],
    receivers: ["ReadonlyArray","Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","Float16Array","BigInt64Array","BigUint64Array"]
  },
  {
    name: "reduce",
    signatures: [["reducer","?initialValue","?options"]],
    receivers: ["Observable"]
  },
  {
    name: "reduceRight",
    signatures: [["callbackfn","?initialValue"]]
  },
  {
    name: "push",
    signatures: [["...items"]]
  },
  {
    name: "reverse",
    signatures: [["input","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "sort",
    signatures: [["?compareFn"]],
    receivers: ["Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","Float16Array","BigInt64Array","BigUint64Array"]
  },
  {
    name: "splice",
    signatures: [["start","?deleteCount","...items"]]
  },
  {
    name: "unshift",
    signatures: [["...items"]]
  },
  {
    name: "isArray",
    signatures: [["arg"]]
  },
  {
    name: "then",
    signatures: [["?onfulfilled","?onrejected"]]
  },
  {
    name: "catch",
    signatures: [["?onrejected"]],
    receivers: ["Promise"]
  },
  {
    name: "catch",
    signatures: [["callback"]],
    receivers: ["Observable"]
  },
  {
    name: "isView",
    signatures: [["arg"]]
  },
  {
    name: "getFloat32",
    signatures: [["byteOffset","?littleEndian"]]
  },
  {
    name: "getFloat64",
    signatures: [["byteOffset","?littleEndian"]]
  },
  {
    name: "getInt8",
    signatures: [["byteOffset"]]
  },
  {
    name: "getInt16",
    signatures: [["byteOffset","?littleEndian"]]
  },
  {
    name: "getInt32",
    signatures: [["byteOffset","?littleEndian"]]
  },
  {
    name: "getUint8",
    signatures: [["byteOffset"]]
  },
  {
    name: "getUint16",
    signatures: [["byteOffset","?littleEndian"]]
  },
  {
    name: "getUint32",
    signatures: [["byteOffset","?littleEndian"]]
  },
  {
    name: "setFloat32",
    signatures: [["byteOffset","value","?littleEndian"]]
  },
  {
    name: "setFloat64",
    signatures: [["byteOffset","value","?littleEndian"]]
  },
  {
    name: "setInt8",
    signatures: [["byteOffset","value"]]
  },
  {
    name: "setInt16",
    signatures: [["byteOffset","value","?littleEndian"]]
  },
  {
    name: "setInt32",
    signatures: [["byteOffset","value","?littleEndian"]]
  },
  {
    name: "setUint8",
    signatures: [["byteOffset","value"]]
  },
  {
    name: "setUint16",
    signatures: [["byteOffset","value","?littleEndian"]]
  },
  {
    name: "setUint32",
    signatures: [["byteOffset","value","?littleEndian"]]
  },
  {
    name: "copyWithin",
    signatures: [["target","start","?end"]]
  },
  {
    name: "fill",
    signatures: [["value","?start","?end"]],
    receivers: ["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","Float16Array","Array","BigInt64Array","BigUint64Array"]
  },
  {
    name: "fill",
    signatures: [["?fillRule"],["path","?fillRule"]],
    receivers: ["CanvasDrawPath"]
  },
  {
    name: "fill",
    signatures: [["?winding"],["path","?winding"]],
    receivers: ["CanvasRenderingContext2D","OffscreenCanvasRenderingContext2D","PaintRenderingContext2D"]
  },
  {
    name: "find",
    signatures: [["predicate","?thisArg"]],
    receivers: ["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","Float16Array","Array","ReadonlyArray","BigInt64Array","BigUint64Array"]
  },
  {
    name: "find",
    signatures: [["predicate","?options"]],
    receivers: ["Observable"]
  },
  {
    name: "find",
    signatures: [["?string","?caseSensitive","?backwards","?wrap","?wholeWord","?searchInFrames","?showDialog"]],
    receivers: ["Window"]
  },
  {
    name: "findIndex",
    signatures: [["predicate","?thisArg"]]
  },
  {
    name: "subarray",
    signatures: [["?begin","?end"]]
  },
  {
    name: "of",
    signatures: [["...items"]]
  },
  {
    name: "from",
    signatures: [["arrayLike","?mapfn","?thisArg"],["elements","?mapfn","?thisArg"]],
    receivers: ["Int8ArrayConstructor","Uint8ArrayConstructor","Uint8ClampedArrayConstructor","Int16ArrayConstructor","Uint16ArrayConstructor","Int32ArrayConstructor","Uint32ArrayConstructor","Float32ArrayConstructor","Float64ArrayConstructor","Float16ArrayConstructor","BigInt64ArrayConstructor","BigUint64ArrayConstructor"]
  },
  {
    name: "from",
    signatures: [["iterable","?mapfn","?thisArg"],["arrayLike","?mapfn","?thisArg"]],
    receivers: ["ArrayConstructor"]
  },
  {
    name: "from",
    signatures: [["value"]],
    receivers: ["Observable"]
  },
  {
    name: "drawArraysInstancedANGLE",
    signatures: [["mode","first","count","primcount"]]
  },
  {
    name: "drawElementsInstancedANGLE",
    signatures: [["mode","count","type","offset","primcount"]]
  },
  {
    name: "vertexAttribDivisorANGLE",
    signatures: [["index","divisor"]]
  },
  {
    name: "abort",
    signatures: [["?reason"]],
    receivers: ["AbortController","WritableStream","WritableStreamDefaultWriter","AbortSignal"]
  },
  {
    name: "addEventListener",
    signatures: [["type","listener","?options"]],
    receivers: ["AbortSignal","SharedWorker","Worker","ServiceWorker","Animation","AudioBufferSourceNode","AudioContext","AudioDecoder","AudioEncoder","AudioScheduledSourceNode","AudioWorkletNode","BaseAudioContext","BroadcastChannel","CSSAnimation","CSSTransition","CanvasCaptureMediaStreamTrack","ConstantSourceNode","Document","Element","EventSource","FileReader","FontFaceSet","Window","HTMLElement","MathMLElement","SVGElement","HTMLAnchorElement","HTMLAreaElement","HTMLAudioElement","HTMLBRElement","HTMLBaseElement","HTMLBodyElement","HTMLButtonElement","HTMLCanvasElement","HTMLDListElement","HTMLDataElement","HTMLDataListElement","HTMLDetailsElement","HTMLDialogElement","HTMLDirectoryElement","HTMLDivElement","HTMLDocument","HTMLEmbedElement","HTMLFieldSetElement","HTMLFontElement","HTMLFormElement","HTMLFrameElement","HTMLFrameSetElement","HTMLHRElement","HTMLHeadElement","HTMLHeadingElement","HTMLHtmlElement","HTMLIFrameElement","HTMLImageElement","HTMLInputElement","HTMLLIElement","HTMLLabelElement","HTMLLegendElement","HTMLLinkElement","HTMLMapElement","HTMLMarqueeElement","HTMLMediaElement","HTMLMenuElement","HTMLMetaElement","HTMLMeterElement","HTMLModElement","HTMLOListElement","HTMLObjectElement","HTMLOptGroupElement","HTMLOptionElement","HTMLOutputElement","HTMLParagraphElement","HTMLParamElement","HTMLPictureElement","HTMLPreElement","HTMLProgressElement","HTMLQuoteElement","HTMLScriptElement","HTMLSelectElement","HTMLSlotElement","HTMLSourceElement","HTMLSpanElement","HTMLStyleElement","HTMLTableCaptionElement","HTMLTableCellElement","HTMLTableColElement","HTMLTableDataCellElement","HTMLTableElement","HTMLTableHeaderCellElement","HTMLTableRowElement","HTMLTableSectionElement","HTMLTemplateElement","HTMLTextAreaElement","HTMLTimeElement","HTMLTitleElement","HTMLTrackElement","HTMLUListElement","HTMLUnknownElement","HTMLVideoElement","IDBDatabase","IDBOpenDBRequest","IDBRequest","IDBTransaction","MIDIAccess","MIDIInput","MIDIOutput","MIDIPort","MediaDevices","MediaKeySession","MediaQueryList","MediaRecorder","MediaSource","MediaStream","MediaStreamTrack","MessageEventTarget","MessagePort","NavigationHistoryEntry","Notification","OfflineAudioContext","OffscreenCanvas","OscillatorNode","PaymentRequest","PaymentResponse","Performance","PermissionStatus","PictureInPictureWindow","RTCDTMFSender","RTCDataChannel","RTCDtlsTransport","RTCIceTransport","RTCPeerConnection","RTCSctpTransport","RemotePlayback","SVGAElement","SVGAnimateElement","SVGAnimateMotionElement","SVGAnimateTransformElement","SVGAnimationElement","SVGCircleElement","SVGClipPathElement","SVGComponentTransferFunctionElement","SVGDefsElement","SVGDescElement","SVGEllipseElement","SVGFEBlendElement","SVGFEColorMatrixElement","SVGFEComponentTransferElement","SVGFECompositeElement","SVGFEConvolveMatrixElement","SVGFEDiffuseLightingElement","SVGFEDisplacementMapElement","SVGFEDistantLightElement","SVGFEDropShadowElement","SVGFEFloodElement","SVGFEFuncAElement","SVGFEFuncBElement","SVGFEFuncGElement","SVGFEFuncRElement","SVGFEGaussianBlurElement","SVGFEImageElement","SVGFEMergeElement","SVGFEMergeNodeElement","SVGFEMorphologyElement","SVGFEOffsetElement","SVGFEPointLightElement","SVGFESpecularLightingElement","SVGFESpotLightElement","SVGFETileElement","SVGFETurbulenceElement","SVGFilterElement","SVGForeignObjectElement","SVGGElement","SVGGeometryElement","SVGGradientElement","SVGGraphicsElement","SVGImageElement","SVGLineElement","SVGLinearGradientElement","SVGMPathElement","SVGMarkerElement","SVGMaskElement","SVGMetadataElement","SVGPathElement","SVGPatternElement","SVGPolygonElement","SVGPolylineElement","SVGRadialGradientElement","SVGRectElement","SVGSVGElement","SVGScriptElement","SVGSetElement","SVGStopElement","SVGStyleElement","SVGSwitchElement","SVGSymbolElement","SVGTSpanElement","SVGTextContentElement","SVGTextElement","SVGTextPathElement","SVGTextPositioningElement","SVGTitleElement","SVGUseElement","SVGViewElement","ScreenOrientation","ScriptProcessorNode","ServiceWorkerContainer","ServiceWorkerRegistration","ShadowRoot","SourceBuffer","SourceBufferList","SpeechSynthesis","SpeechSynthesisUtterance","TextTrack","TextTrackCue","TextTrackList","VTTCue","VideoDecoder","VideoEncoder","VisualViewport","WakeLockSentinel","WebSocket","XMLDocument","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload","DedicatedWorkerGlobalScope","ServiceWorkerGlobalScope","SharedWorkerGlobalScope","WorkerGlobalScope","Highlight"]
  },
  {
    name: "addEventListener",
    signatures: [["type","callback","?options"],["type","listener","?options"]],
    receivers: ["EventTarget"]
  },
  {
    name: "removeEventListener",
    signatures: [["type","listener","?options"]],
    receivers: ["AbortSignal","SharedWorker","Worker","ServiceWorker","Animation","AudioBufferSourceNode","AudioContext","AudioDecoder","AudioEncoder","AudioScheduledSourceNode","AudioWorkletNode","BaseAudioContext","BroadcastChannel","CSSAnimation","CSSTransition","CanvasCaptureMediaStreamTrack","ConstantSourceNode","Document","Element","EventSource","FileReader","FontFaceSet","Window","HTMLElement","MathMLElement","SVGElement","HTMLAnchorElement","HTMLAreaElement","HTMLAudioElement","HTMLBRElement","HTMLBaseElement","HTMLBodyElement","HTMLButtonElement","HTMLCanvasElement","HTMLDListElement","HTMLDataElement","HTMLDataListElement","HTMLDetailsElement","HTMLDialogElement","HTMLDirectoryElement","HTMLDivElement","HTMLDocument","HTMLEmbedElement","HTMLFieldSetElement","HTMLFontElement","HTMLFormElement","HTMLFrameElement","HTMLFrameSetElement","HTMLHRElement","HTMLHeadElement","HTMLHeadingElement","HTMLHtmlElement","HTMLIFrameElement","HTMLImageElement","HTMLInputElement","HTMLLIElement","HTMLLabelElement","HTMLLegendElement","HTMLLinkElement","HTMLMapElement","HTMLMarqueeElement","HTMLMediaElement","HTMLMenuElement","HTMLMetaElement","HTMLMeterElement","HTMLModElement","HTMLOListElement","HTMLObjectElement","HTMLOptGroupElement","HTMLOptionElement","HTMLOutputElement","HTMLParagraphElement","HTMLParamElement","HTMLPictureElement","HTMLPreElement","HTMLProgressElement","HTMLQuoteElement","HTMLScriptElement","HTMLSelectElement","HTMLSlotElement","HTMLSourceElement","HTMLSpanElement","HTMLStyleElement","HTMLTableCaptionElement","HTMLTableCellElement","HTMLTableColElement","HTMLTableDataCellElement","HTMLTableElement","HTMLTableHeaderCellElement","HTMLTableRowElement","HTMLTableSectionElement","HTMLTemplateElement","HTMLTextAreaElement","HTMLTimeElement","HTMLTitleElement","HTMLTrackElement","HTMLUListElement","HTMLUnknownElement","HTMLVideoElement","IDBDatabase","IDBOpenDBRequest","IDBRequest","IDBTransaction","MIDIAccess","MIDIInput","MIDIOutput","MIDIPort","MediaDevices","MediaKeySession","MediaQueryList","MediaRecorder","MediaSource","MediaStream","MediaStreamTrack","MessageEventTarget","MessagePort","NavigationHistoryEntry","Notification","OfflineAudioContext","OffscreenCanvas","OscillatorNode","PaymentRequest","PaymentResponse","Performance","PermissionStatus","PictureInPictureWindow","RTCDTMFSender","RTCDataChannel","RTCDtlsTransport","RTCIceTransport","RTCPeerConnection","RTCSctpTransport","RemotePlayback","SVGAElement","SVGAnimateElement","SVGAnimateMotionElement","SVGAnimateTransformElement","SVGAnimationElement","SVGCircleElement","SVGClipPathElement","SVGComponentTransferFunctionElement","SVGDefsElement","SVGDescElement","SVGEllipseElement","SVGFEBlendElement","SVGFEColorMatrixElement","SVGFEComponentTransferElement","SVGFECompositeElement","SVGFEConvolveMatrixElement","SVGFEDiffuseLightingElement","SVGFEDisplacementMapElement","SVGFEDistantLightElement","SVGFEDropShadowElement","SVGFEFloodElement","SVGFEFuncAElement","SVGFEFuncBElement","SVGFEFuncGElement","SVGFEFuncRElement","SVGFEGaussianBlurElement","SVGFEImageElement","SVGFEMergeElement","SVGFEMergeNodeElement","SVGFEMorphologyElement","SVGFEOffsetElement","SVGFEPointLightElement","SVGFESpecularLightingElement","SVGFESpotLightElement","SVGFETileElement","SVGFETurbulenceElement","SVGFilterElement","SVGForeignObjectElement","SVGGElement","SVGGeometryElement","SVGGradientElement","SVGGraphicsElement","SVGImageElement","SVGLineElement","SVGLinearGradientElement","SVGMPathElement","SVGMarkerElement","SVGMaskElement","SVGMetadataElement","SVGPathElement","SVGPatternElement","SVGPolygonElement","SVGPolylineElement","SVGRadialGradientElement","SVGRectElement","SVGSVGElement","SVGScriptElement","SVGSetElement","SVGStopElement","SVGStyleElement","SVGSwitchElement","SVGSymbolElement","SVGTSpanElement","SVGTextContentElement","SVGTextElement","SVGTextPathElement","SVGTextPositioningElement","SVGTitleElement","SVGUseElement","SVGViewElement","ScreenOrientation","ScriptProcessorNode","ServiceWorkerContainer","ServiceWorkerRegistration","ShadowRoot","SourceBuffer","SourceBufferList","SpeechSynthesis","SpeechSynthesisUtterance","TextTrack","TextTrackCue","TextTrackList","VTTCue","VideoDecoder","VideoEncoder","VisualViewport","WakeLockSentinel","WebSocket","XMLDocument","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload","DedicatedWorkerGlobalScope","ServiceWorkerGlobalScope","SharedWorkerGlobalScope","WorkerGlobalScope","Highlight"]
  },
  {
    name: "removeEventListener",
    signatures: [["type","callback","?options"],["type","listener","?options"]],
    receivers: ["EventTarget"]
  },
  {
    name: "getByteFrequencyData",
    signatures: [["array"]]
  },
  {
    name: "getByteTimeDomainData",
    signatures: [["array"]]
  },
  {
    name: "getFloatFrequencyData",
    signatures: [["array"]]
  },
  {
    name: "getFloatTimeDomainData",
    signatures: [["array"]]
  },
  {
    name: "animate",
    signatures: [["keyframes","?options"]]
  },
  {
    name: "getAnimations",
    signatures: [["?options"]],
    receivers: ["Element"]
  },
  {
    name: "cancel",
    signatures: [["?reason"]],
    receivers: ["ReadableStream","ReadableStreamBYOBReader","ReadableStreamDefaultReader"]
  },
  {
    name: "finish",
    signatures: [["?descriptor"]],
    receivers: ["GPUCommandEncoder","GPURenderBundleEncoder"]
  },
  {
    name: "updatePlaybackRate",
    signatures: [["playbackRate"],["playback_rate"]]
  },
  {
    name: "updateTiming",
    signatures: [["?timing"]]
  },
  {
    name: "cancelAnimationFrame",
    signatures: [["handle"]]
  },
  {
    name: "requestAnimationFrame",
    signatures: [["callback"]]
  },
  {
    name: "copyFromChannel",
    signatures: [["destination","channelNumber","?bufferOffset"]]
  },
  {
    name: "copyToChannel",
    signatures: [["source","channelNumber","?bufferOffset"]]
  },
  {
    name: "getChannelData",
    signatures: [["channel"],["channelIndex"]]
  },
  {
    name: "start",
    signatures: [["?when","?offset","?duration"],["?when","?grainOffset","?grainDuration"]],
    receivers: ["AudioBufferSourceNode"]
  },
  {
    name: "start",
    signatures: [["?when"]],
    receivers: ["AudioScheduledSourceNode"]
  },
  {
    name: "start",
    signatures: [["?timeslice"]],
    receivers: ["MediaRecorder"]
  },
  {
    name: "start",
    signatures: [["index"]],
    receivers: ["TimeRanges"]
  },
  {
    name: "start",
    signatures: [["?options"]],
    receivers: ["IdleDetector"]
  },
  {
    name: "start",
    signatures: [["?track"]],
    receivers: ["SpeechRecognition"]
  },
  {
    name: "close",
    signatures: [["?returnValue"]],
    receivers: ["HTMLDialogElement"]
  },
  {
    name: "close",
    signatures: [["?code","?reason"]],
    receivers: ["WebSocket"]
  },
  {
    name: "close",
    signatures: [["?closeInfo"]],
    receivers: ["WebTransport","WebSocketStream"]
  },
  {
    name: "createMediaElementSource",
    signatures: [["mediaElement"]]
  },
  {
    name: "createMediaStreamSource",
    signatures: [["mediaStream"]]
  },
  {
    name: "suspend",
    signatures: [["suspendTime"]],
    receivers: ["OfflineAudioContext"]
  },
  {
    name: "allocationSize",
    signatures: [["options"]],
    receivers: ["AudioData"]
  },
  {
    name: "allocationSize",
    signatures: [["?options"]],
    receivers: ["VideoFrame"]
  },
  {
    name: "copyTo",
    signatures: [["destination","options"]],
    receivers: ["AudioData"]
  },
  {
    name: "copyTo",
    signatures: [["destination"]],
    receivers: ["EncodedAudioChunk","EncodedVideoChunk"]
  },
  {
    name: "copyTo",
    signatures: [["destination","?options"]],
    receivers: ["VideoFrame"]
  },
  {
    name: "copyTo",
    signatures: [["parent","name"]],
    receivers: ["EntrySync"]
  },
  {
    name: "copyTo",
    signatures: [["parent","?name","?successCallback","?errorCallback"]],
    receivers: ["Entry"]
  },
  {
    name: "configure",
    signatures: [["config"]],
    receivers: ["AudioDecoder","AudioEncoder","VideoDecoder","VideoEncoder"]
  },
  {
    name: "configure",
    signatures: [["descriptor"]],
    receivers: ["GPUCanvasContext"]
  },
  {
    name: "decode",
    signatures: [["chunk"]],
    receivers: ["AudioDecoder","VideoDecoder"]
  },
  {
    name: "decode",
    signatures: [["?options"]],
    receivers: ["ImageDecoder"]
  },
  {
    name: "decode",
    signatures: [["?input","?options"]],
    receivers: ["TextDecoder"]
  },
  {
    name: "encode",
    signatures: [["data"]],
    receivers: ["AudioEncoder"]
  },
  {
    name: "encode",
    signatures: [["?input"]],
    receivers: ["TextEncoder"]
  },
  {
    name: "encode",
    signatures: [["frame","?options"]],
    receivers: ["VideoEncoder"]
  },
  {
    name: "setOrientation",
    signatures: [["x","y","z","xUp","yUp","zUp"]],
    receivers: ["AudioListener"]
  },
  {
    name: "setOrientation",
    signatures: [["x","y","z"]],
    receivers: ["PannerNode"]
  },
  {
    name: "setPosition",
    signatures: [["x","y","z"]],
    receivers: ["AudioListener","PannerNode"]
  },
  {
    name: "setPosition",
    signatures: [["node","?offset"]],
    receivers: ["Selection"]
  },
  {
    name: "connect",
    signatures: [["destinationParam","?output"],["destination","?output","?input"],["destinationNode","?output","?input"]],
    receivers: ["AudioNode"]
  },
  {
    name: "connect",
    signatures: [["readerName","accessMode","?options"]],
    receivers: ["SmartCardContext"]
  },
  {
    name: "disconnect",
    signatures: [["?output"],["destinationNode","?output","?input"],["destinationParam","?output"],["destination","?output","?input"]],
    receivers: ["AudioNode"]
  },
  {
    name: "disconnect",
    signatures: [["options"]],
    receivers: ["IdentityCredential"]
  },
  {
    name: "disconnect",
    signatures: [["?disposition"]],
    receivers: ["SmartCardConnection"]
  },
  {
    name: "cancelAndHoldAtTime",
    signatures: [["cancelTime"],["startTime"]]
  },
  {
    name: "cancelScheduledValues",
    signatures: [["cancelTime"],["startTime"]]
  },
  {
    name: "exponentialRampToValueAtTime",
    signatures: [["value","endTime"],["value","time"]]
  },
  {
    name: "linearRampToValueAtTime",
    signatures: [["value","endTime"],["value","time"]]
  },
  {
    name: "setTargetAtTime",
    signatures: [["target","startTime","timeConstant"],["target","time","timeConstant"]]
  },
  {
    name: "setValueAtTime",
    signatures: [["value","startTime"],["value","time"]]
  },
  {
    name: "setValueCurveAtTime",
    signatures: [["values","startTime","duration"],["values","time","duration"]]
  },
  {
    name: "stop",
    signatures: [["?when"]],
    receivers: ["AudioScheduledSourceNode"]
  },
  {
    name: "createBuffer",
    signatures: [["numberOfChannels","length","sampleRate"],["numberOfChannels","numberOfFrames","sampleRate"]],
    receivers: ["BaseAudioContext"]
  },
  {
    name: "createBuffer",
    signatures: [["descriptor"]],
    receivers: ["GPUDevice"]
  },
  {
    name: "createChannelMerger",
    signatures: [["?numberOfInputs"]]
  },
  {
    name: "createChannelSplitter",
    signatures: [["?numberOfOutputs"]]
  },
  {
    name: "createDelay",
    signatures: [["?maxDelayTime"]]
  },
  {
    name: "createIIRFilter",
    signatures: [["feedforward","feedback"],["feedForward","feedBack"]]
  },
  {
    name: "createPeriodicWave",
    signatures: [["real","imag","?constraints"]]
  },
  {
    name: "createScriptProcessor",
    signatures: [["?bufferSize","?numberOfInputChannels","?numberOfOutputChannels"]]
  },
  {
    name: "decodeAudioData",
    signatures: [["audioData","?successCallback","?errorCallback"]]
  },
  {
    name: "getFrequencyResponse",
    signatures: [["frequencyHz","magResponse","phaseResponse"]]
  },
  {
    name: "json",
    signatures: [["data","?init"]],
    receivers: ["Response"]
  },
  {
    name: "postMessage",
    signatures: [["message"]],
    receivers: ["BroadcastChannel"]
  },
  {
    name: "postMessage",
    signatures: [["message","transfer"],["message","?options"]],
    receivers: ["MessagePort","ServiceWorker","Worker","Client","DedicatedWorkerGlobalScope"]
  },
  {
    name: "postMessage",
    signatures: [["message","?options"],["message","transfer"],["message","targetOrigin","?transfer"]],
    receivers: ["Window"]
  },
  {
    name: "deleteRule",
    signatures: [["index"]],
    receivers: ["CSSGroupingRule","CSSStyleSheet","CSSStyleRule"]
  },
  {
    name: "deleteRule",
    signatures: [["select"]],
    receivers: ["CSSKeyframesRule"]
  },
  {
    name: "insertRule",
    signatures: [["rule","?index"]]
  },
  {
    name: "appendRule",
    signatures: [["rule"]]
  },
  {
    name: "findRule",
    signatures: [["select"]]
  },
  {
    name: "add",
    signatures: [["...values"]],
    receivers: ["CSSNumericValue"]
  },
  {
    name: "add",
    signatures: [["request"]],
    receivers: ["Cache"]
  },
  {
    name: "add",
    signatures: [["...tokens"]],
    receivers: ["DOMTokenList"]
  },
  {
    name: "add",
    signatures: [["data","?type"],["file"]],
    receivers: ["DataTransferItemList"]
  },
  {
    name: "add",
    signatures: [["element","?before"]],
    receivers: ["HTMLOptionsCollection","HTMLSelectElement"]
  },
  {
    name: "add",
    signatures: [["value","?key"]],
    receivers: ["IDBObjectStore"]
  },
  {
    name: "add",
    signatures: [["typedArray","index","value"]],
    receivers: ["Atomics"]
  },
  {
    name: "add",
    signatures: [["value"]],
    receivers: ["Set","WeakSet"]
  },
  {
    name: "add",
    signatures: [["key"]],
    receivers: ["CustomStateSet","ViewTransitionTypeSet"]
  },
  {
    name: "add",
    signatures: [["description"]],
    receivers: ["ContentIndex"]
  },
  {
    name: "add",
    signatures: [["a","b","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "add",
    signatures: [["sub_apps_to_add"]],
    receivers: ["SubApps"]
  },
  {
    name: "div",
    signatures: [["...values"]],
    receivers: ["CSSNumericValue"]
  },
  {
    name: "div",
    signatures: [["a","b","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "equals",
    signatures: [["...value"],["...values"]]
  },
  {
    name: "mul",
    signatures: [["...values"]],
    receivers: ["CSSNumericValue"]
  },
  {
    name: "mul",
    signatures: [["a","b","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "sub",
    signatures: [["...values"]],
    receivers: ["CSSNumericValue"]
  },
  {
    name: "sub",
    signatures: [["typedArray","index","value"]],
    receivers: ["Atomics"]
  },
  {
    name: "sub",
    signatures: [["a","b","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "to",
    signatures: [["unit"]]
  },
  {
    name: "toSum",
    signatures: [["...units"]]
  },
  {
    name: "item",
    signatures: [["index"]],
    receivers: ["CSSRuleList","CSSStyleDeclaration","DOMRectList","DOMStringList","DOMTokenList","FileList","HTMLCollectionBase","HTMLCollectionOf","HTMLSelectElement","MediaList","MimeTypeArray","NamedNodeMap","NodeList","NodeListOf","Plugin","PluginArray","SpeechRecognitionResult","SpeechRecognitionResultList","StyleSheetList","TouchList","HTMLCollection","SpeechGrammarList"]
  },
  {
    name: "item",
    signatures: [["?nameOrIndex"]],
    receivers: ["HTMLAllCollection"]
  },
  {
    name: "getPropertyPriority",
    signatures: [["property"]]
  },
  {
    name: "getPropertyValue",
    signatures: [["property"]]
  },
  {
    name: "removeProperty",
    signatures: [["property"]]
  },
  {
    name: "setProperty",
    signatures: [["property","value","?priority"]]
  },
  {
    name: "addRule",
    signatures: [["?selector","?style","?index"]]
  },
  {
    name: "removeRule",
    signatures: [["?index"]]
  },
  {
    name: "replaceSync",
    signatures: [["text"]]
  },
  {
    name: "addAll",
    signatures: [["requests"]]
  },
  {
    name: "delete",
    signatures: [["request","?options"]],
    receivers: ["Cache"]
  },
  {
    name: "delete",
    signatures: [["cacheName"]],
    receivers: ["CacheStorage"]
  },
  {
    name: "delete",
    signatures: [["name"]],
    receivers: ["FormData","StorageBucketManager"]
  },
  {
    name: "delete",
    signatures: [["name"],["key"]],
    receivers: ["Headers"]
  },
  {
    name: "delete",
    signatures: [["query"],["key"]],
    receivers: ["IDBObjectStore"]
  },
  {
    name: "delete",
    signatures: [["property"]],
    receivers: ["StylePropertyMap"]
  },
  {
    name: "delete",
    signatures: [["name","?value"]],
    receivers: ["URLSearchParams"]
  },
  {
    name: "delete",
    signatures: [["key"]],
    receivers: ["Map","WeakMap"]
  },
  {
    name: "delete",
    signatures: [["value"]],
    receivers: ["Set","WeakSet"]
  },
  {
    name: "delete",
    signatures: [["id"]],
    receivers: ["ContentIndex"]
  },
  {
    name: "delete",
    signatures: [["name"],["options"]],
    receivers: ["CookieStore"]
  },
  {
    name: "matchAll",
    signatures: [["?request","?options"]],
    receivers: ["Cache","BackgroundFetchRegistration"]
  },
  {
    name: "matchAll",
    signatures: [["regexp"]],
    receivers: ["String"]
  },
  {
    name: "matchAll",
    signatures: [["?options"]],
    receivers: ["Clients"]
  },
  {
    name: "put",
    signatures: [["request","response"]],
    receivers: ["Cache"]
  },
  {
    name: "put",
    signatures: [["value","?key"]],
    receivers: ["IDBObjectStore"]
  },
  {
    name: "has",
    signatures: [["cacheName"]],
    receivers: ["CacheStorage"]
  },
  {
    name: "has",
    signatures: [["name"]],
    receivers: ["FormData"]
  },
  {
    name: "has",
    signatures: [["name"],["key"]],
    receivers: ["Headers"]
  },
  {
    name: "has",
    signatures: [["keyId"]],
    receivers: ["MediaKeyStatusMap"]
  },
  {
    name: "has",
    signatures: [["property"]],
    receivers: ["StylePropertyMapReadOnly"]
  },
  {
    name: "has",
    signatures: [["name","?value"]],
    receivers: ["URLSearchParams"]
  },
  {
    name: "has",
    signatures: [["target","p"]],
    receivers: ["ProxyHandler"]
  },
  {
    name: "has",
    signatures: [["key"]],
    receivers: ["Map","ReadonlyMap","WeakMap"]
  },
  {
    name: "has",
    signatures: [["value"]],
    receivers: ["Set","ReadonlySet","WeakSet","ReadonlySetLike"]
  },
  {
    name: "open",
    signatures: [["cacheName"]],
    receivers: ["CacheStorage"]
  },
  {
    name: "open",
    signatures: [["?unused1","?unused2"],["?type","?replace"],["url","name","features"]],
    receivers: ["Document"]
  },
  {
    name: "open",
    signatures: [["name","?version"]],
    receivers: ["IDBFactory"]
  },
  {
    name: "open",
    signatures: [["?url","?target","?features"]],
    receivers: ["Window"]
  },
  {
    name: "open",
    signatures: [["method","url","?async","?username","?password"]],
    receivers: ["XMLHttpRequest"]
  },
  {
    name: "open",
    signatures: [["name","?options"]],
    receivers: ["StorageBucketManager"]
  },
  {
    name: "open",
    signatures: [["?options"]],
    receivers: ["EyeDropper"]
  },
  {
    name: "drawImage",
    signatures: [["image","dx","dy","?dw","?dh"],["image","sx","sy","sw","sh","dx","dy","dw","dh"]],
    receivers: ["CanvasDrawImage"]
  },
  {
    name: "drawImage",
    signatures: [["image","x","y","?width","?height"],["image","sx","sy","sw","sh","dx","dy","dw","dh"]],
    receivers: ["CanvasRenderingContext2D","OffscreenCanvasRenderingContext2D","PaintRenderingContext2D"]
  },
  {
    name: "clip",
    signatures: [["?fillRule"],["path","?fillRule"]],
    receivers: ["CanvasDrawPath"]
  },
  {
    name: "clip",
    signatures: [["?winding"],["path","?winding"]],
    receivers: ["CanvasRenderingContext2D","OffscreenCanvasRenderingContext2D","PaintRenderingContext2D"]
  },
  {
    name: "isPointInPath",
    signatures: [["x","y","?fillRule"],["path","x","y","?fillRule"]],
    receivers: ["CanvasDrawPath"]
  },
  {
    name: "isPointInPath",
    signatures: [["x","y","?winding"],["path","x","y","?winding"]],
    receivers: ["CanvasRenderingContext2D","OffscreenCanvasRenderingContext2D","PaintRenderingContext2D"]
  },
  {
    name: "isPointInStroke",
    signatures: [["x","y"],["path","x","y"]],
    receivers: ["CanvasDrawPath","CanvasRenderingContext2D","OffscreenCanvasRenderingContext2D","PaintRenderingContext2D"]
  },
  {
    name: "isPointInStroke",
    signatures: [["?point"]],
    receivers: ["SVGGeometryElement"]
  },
  {
    name: "stroke",
    signatures: [["?path"]]
  },
  {
    name: "createConicGradient",
    signatures: [["startAngle","x","y"]],
    receivers: ["CanvasFillStrokeStyles"]
  },
  {
    name: "createConicGradient",
    signatures: [["startAngle","cx","cy"]],
    receivers: ["CanvasRenderingContext2D","OffscreenCanvasRenderingContext2D","PaintRenderingContext2D"]
  },
  {
    name: "createLinearGradient",
    signatures: [["x0","y0","x1","y1"]]
  },
  {
    name: "createPattern",
    signatures: [["image","repetition"]],
    receivers: ["CanvasFillStrokeStyles"]
  },
  {
    name: "createPattern",
    signatures: [["image","repetitionType"]],
    receivers: ["CanvasRenderingContext2D","OffscreenCanvasRenderingContext2D","PaintRenderingContext2D"]
  },
  {
    name: "createRadialGradient",
    signatures: [["x0","y0","r0","x1","y1","r1"]]
  },
  {
    name: "addColorStop",
    signatures: [["offset","color"]]
  },
  {
    name: "createImageData",
    signatures: [["imagedata"],["sw","sh","?settings"]],
    receivers: ["CanvasImageData"]
  },
  {
    name: "createImageData",
    signatures: [["imagedata"],["sw","sh","?imageDataSettings"]],
    receivers: ["CanvasRenderingContext2D","OffscreenCanvasRenderingContext2D"]
  },
  {
    name: "getImageData",
    signatures: [["sx","sy","sw","sh","?settings"]],
    receivers: ["CanvasImageData"]
  },
  {
    name: "getImageData",
    signatures: [["sx","sy","sw","sh","?imageDataSettings"]],
    receivers: ["CanvasRenderingContext2D","OffscreenCanvasRenderingContext2D"]
  },
  {
    name: "putImageData",
    signatures: [["imagedata","dx","dy","?dirtyX","?dirtyY","?dirtyWidth","?dirtyHeight"]]
  },
  {
    name: "arc",
    signatures: [["x","y","radius","startAngle","endAngle","?counterclockwise"],["x","y","radius","startAngle","endAngle","?anticlockwise"]]
  },
  {
    name: "arcTo",
    signatures: [["x1","y1","x2","y2","radius"]]
  },
  {
    name: "bezierCurveTo",
    signatures: [["cp1x","cp1y","cp2x","cp2y","x","y"]]
  },
  {
    name: "ellipse",
    signatures: [["x","y","radiusX","radiusY","rotation","startAngle","endAngle","?counterclockwise"],["x","y","radiusX","radiusY","rotation","startAngle","endAngle","?anticlockwise"]]
  },
  {
    name: "lineTo",
    signatures: [["x","y"]]
  },
  {
    name: "moveTo",
    signatures: [["x","y"]],
    receivers: ["CanvasRenderingContext2D","Path2D","OffscreenCanvasRenderingContext2D","PaintRenderingContext2D","Window"]
  },
  {
    name: "moveTo",
    signatures: [["parent","name"]],
    receivers: ["EntrySync"]
  },
  {
    name: "moveTo",
    signatures: [["parent","?name","?successCallback","?errorCallback"]],
    receivers: ["Entry"]
  },
  {
    name: "quadraticCurveTo",
    signatures: [["cpx","cpy","x","y"]]
  },
  {
    name: "rect",
    signatures: [["x","y","w","h"],["x","y","width","height"]]
  },
  {
    name: "roundRect",
    signatures: [["x","y","w","h","?radii"]]
  },
  {
    name: "setLineDash",
    signatures: [["segments"]],
    receivers: ["CanvasPathDrawingStyles"]
  },
  {
    name: "setLineDash",
    signatures: [["dash"]],
    receivers: ["CanvasRenderingContext2D","OffscreenCanvasRenderingContext2D","PaintRenderingContext2D"]
  },
  {
    name: "setTransform",
    signatures: [["?transform"]],
    receivers: ["CanvasPattern"]
  },
  {
    name: "setTransform",
    signatures: [["?transform"],["a","b","c","d","e","f"]],
    receivers: ["CanvasTransform","CanvasRenderingContext2D","OffscreenCanvasRenderingContext2D","PaintRenderingContext2D"]
  },
  {
    name: "clearRect",
    signatures: [["x","y","w","h"]],
    receivers: ["CanvasRect"]
  },
  {
    name: "clearRect",
    signatures: [["x","y","width","height"]],
    receivers: ["CanvasRenderingContext2D","OffscreenCanvasRenderingContext2D","PaintRenderingContext2D"]
  },
  {
    name: "fillRect",
    signatures: [["x","y","w","h"]],
    receivers: ["CanvasRect"]
  },
  {
    name: "fillRect",
    signatures: [["x","y","width","height"]],
    receivers: ["CanvasRenderingContext2D","OffscreenCanvasRenderingContext2D","PaintRenderingContext2D"]
  },
  {
    name: "strokeRect",
    signatures: [["x","y","w","h"]],
    receivers: ["CanvasRect"]
  },
  {
    name: "strokeRect",
    signatures: [["x","y","width","height"]],
    receivers: ["CanvasRenderingContext2D","OffscreenCanvasRenderingContext2D","PaintRenderingContext2D"]
  },
  {
    name: "fillText",
    signatures: [["text","x","y","?maxWidth"]]
  },
  {
    name: "measureText",
    signatures: [["text"]]
  },
  {
    name: "strokeText",
    signatures: [["text","x","y","?maxWidth"]]
  },
  {
    name: "rotate",
    signatures: [["angle"]],
    receivers: ["CanvasTransform","SVGMatrix","CanvasRenderingContext2D","OffscreenCanvasRenderingContext2D","PaintRenderingContext2D"]
  },
  {
    name: "rotate",
    signatures: [["?rotX","?rotY","?rotZ"]],
    receivers: ["DOMMatrixReadOnly"]
  },
  {
    name: "scale",
    signatures: [["x","y"]],
    receivers: ["CanvasTransform","CanvasRenderingContext2D","OffscreenCanvasRenderingContext2D","PaintRenderingContext2D"]
  },
  {
    name: "scale",
    signatures: [["?scaleX","?scaleY","?scaleZ","?originX","?originY","?originZ"]],
    receivers: ["DOMMatrixReadOnly"]
  },
  {
    name: "scale",
    signatures: [["scaleFactor"]],
    receivers: ["SVGMatrix"]
  },
  {
    name: "transform",
    signatures: [["a","b","c","d","e","f"]]
  },
  {
    name: "translate",
    signatures: [["x","y"]],
    receivers: ["CanvasTransform","SVGMatrix","CanvasRenderingContext2D","OffscreenCanvasRenderingContext2D","PaintRenderingContext2D"]
  },
  {
    name: "translate",
    signatures: [["?tx","?ty","?tz"]],
    receivers: ["DOMMatrixReadOnly"]
  },
  {
    name: "drawFocusIfNeeded",
    signatures: [["element"],["path","element"]]
  },
  {
    name: "appendData",
    signatures: [["data"]]
  },
  {
    name: "deleteData",
    signatures: [["offset","count"]]
  },
  {
    name: "insertData",
    signatures: [["offset","data"]]
  },
  {
    name: "replaceData",
    signatures: [["offset","count","data"]]
  },
  {
    name: "substringData",
    signatures: [["offset","count"]]
  },
  {
    name: "after",
    signatures: [["...nodes"]]
  },
  {
    name: "before",
    signatures: [["...nodes"]]
  },
  {
    name: "remove",
    signatures: [["...tokens"]],
    receivers: ["DOMTokenList"]
  },
  {
    name: "remove",
    signatures: [["index"]],
    receivers: ["DataTransferItemList","HTMLOptionsCollection"]
  },
  {
    name: "remove",
    signatures: [["?index"]],
    receivers: ["HTMLSelectElement"]
  },
  {
    name: "remove",
    signatures: [["start","end"]],
    receivers: ["SourceBuffer"]
  },
  {
    name: "remove",
    signatures: [["key"]],
    receivers: ["CrashReportStorage"]
  },
  {
    name: "remove",
    signatures: [["?options"]],
    receivers: ["FileSystemHandle"]
  },
  {
    name: "remove",
    signatures: [["successCallback","?errorCallback"]],
    receivers: ["Entry"]
  },
  {
    name: "remove",
    signatures: [["app_ids"]],
    receivers: ["SubApps"]
  },
  {
    name: "replaceWith",
    signatures: [["...nodes"]]
  },
  {
    name: "read",
    signatures: [["?formats"]],
    receivers: ["Clipboard"]
  },
  {
    name: "read",
    signatures: [["view","?options"]],
    receivers: ["ReadableStreamBYOBReader"]
  },
  {
    name: "read",
    signatures: [["buffer","?options"]],
    receivers: ["FileSystemSyncAccessHandle"]
  },
  {
    name: "write",
    signatures: [["data"]],
    receivers: ["Clipboard","FileSystemWritableFileStream","FileWriterSync","FileWriter"]
  },
  {
    name: "write",
    signatures: [["...text"],["text"],["text1","...text"]],
    receivers: ["Document"]
  },
  {
    name: "write",
    signatures: [["?chunk"]],
    receivers: ["WritableStreamDefaultWriter"]
  },
  {
    name: "write",
    signatures: [["buffer","?options"]],
    receivers: ["FileSystemSyncAccessHandle"]
  },
  {
    name: "write",
    signatures: [["message","?options"]],
    receivers: ["NDEFReader"]
  },
  {
    name: "writeText",
    signatures: [["data"]]
  },
  {
    name: "getType",
    signatures: [["type"]]
  },
  {
    name: "initCompositionEvent",
    signatures: [["typeArg","?bubblesArg","?cancelableArg","?viewArg","?dataArg"],["type","?bubbles","?cancelable","?view","?data"]]
  },
  {
    name: "store",
    signatures: [["credential"]],
    receivers: ["CredentialsContainer"]
  },
  {
    name: "store",
    signatures: [["typedArray","index","value"]],
    receivers: ["Atomics"]
  },
  {
    name: "getRandomValues",
    signatures: [["array"]]
  },
  {
    name: "define",
    signatures: [["name","constructor","?options"]]
  },
  {
    name: "getName",
    signatures: [["constructor"]]
  },
  {
    name: "upgrade",
    signatures: [["root"]]
  },
  {
    name: "whenDefined",
    signatures: [["name"]]
  },
  {
    name: "initCustomEvent",
    signatures: [["type","?bubbles","?cancelable","?detail"]]
  },
  {
    name: "createDocument",
    signatures: [["namespace","qualifiedName","?doctype"],["namespaceURI","qualifiedName","?doctype"]]
  },
  {
    name: "createDocumentType",
    signatures: [["qualifiedName","publicId","systemId"]]
  },
  {
    name: "createHTMLDocument",
    signatures: [["?title"]]
  },
  {
    name: "hasFeature",
    signatures: [["...args"]]
  },
  {
    name: "multiplySelf",
    signatures: [["?other"]]
  },
  {
    name: "preMultiplySelf",
    signatures: [["?other"]]
  },
  {
    name: "rotateAxisAngleSelf",
    signatures: [["?x","?y","?z","?angle"]]
  },
  {
    name: "rotateFromVectorSelf",
    signatures: [["?x","?y"]]
  },
  {
    name: "rotateSelf",
    signatures: [["?rotX","?rotY","?rotZ"]]
  },
  {
    name: "scale3dSelf",
    signatures: [["?scale","?originX","?originY","?originZ"]]
  },
  {
    name: "scaleSelf",
    signatures: [["?scaleX","?scaleY","?scaleZ","?originX","?originY","?originZ"]]
  },
  {
    name: "setMatrixValue",
    signatures: [["transformList"]]
  },
  {
    name: "skewXSelf",
    signatures: [["?sx"]]
  },
  {
    name: "skewYSelf",
    signatures: [["?sy"]]
  },
  {
    name: "translateSelf",
    signatures: [["?tx","?ty","?tz"]]
  },
  {
    name: "multiply",
    signatures: [["?other"]],
    receivers: ["DOMMatrixReadOnly"]
  },
  {
    name: "multiply",
    signatures: [["secondMatrix"]],
    receivers: ["SVGMatrix"]
  },
  {
    name: "rotateAxisAngle",
    signatures: [["?x","?y","?z","?angle"]]
  },
  {
    name: "rotateFromVector",
    signatures: [["?x","?y"]],
    receivers: ["DOMMatrixReadOnly"]
  },
  {
    name: "rotateFromVector",
    signatures: [["x","y"]],
    receivers: ["SVGMatrix"]
  },
  {
    name: "scale3d",
    signatures: [["?scale","?originX","?originY","?originZ"]]
  },
  {
    name: "scaleNonUniform",
    signatures: [["?scaleX","?scaleY"]],
    receivers: ["DOMMatrixReadOnly"]
  },
  {
    name: "scaleNonUniform",
    signatures: [["scaleFactorX","scaleFactorY"]],
    receivers: ["SVGMatrix"]
  },
  {
    name: "skewX",
    signatures: [["?sx"]],
    receivers: ["DOMMatrixReadOnly"]
  },
  {
    name: "skewX",
    signatures: [["angle"]],
    receivers: ["SVGMatrix"]
  },
  {
    name: "skewY",
    signatures: [["?sy"]],
    receivers: ["DOMMatrixReadOnly"]
  },
  {
    name: "skewY",
    signatures: [["angle"]],
    receivers: ["SVGMatrix"]
  },
  {
    name: "transformPoint",
    signatures: [["?point"]]
  },
  {
    name: "parseFromString",
    signatures: [["string","type"],["str","type"]]
  },
  {
    name: "matrixTransform",
    signatures: [["?matrix"]],
    receivers: ["DOMPointReadOnly"]
  },
  {
    name: "matrixTransform",
    signatures: [["matrix"]],
    receivers: ["SVGPoint"]
  },
  {
    name: "contains",
    signatures: [["string"]],
    receivers: ["DOMStringList"]
  },
  {
    name: "contains",
    signatures: [["token"]],
    receivers: ["DOMTokenList"]
  },
  {
    name: "contains",
    signatures: [["other"]],
    receivers: ["Node"]
  },
  {
    name: "supports",
    signatures: [["token"]],
    receivers: ["DOMTokenList"]
  },
  {
    name: "supports",
    signatures: [["conditionText"],["property","value"]],
    receivers: ["CSS"]
  },
  {
    name: "supports",
    signatures: [["type"]],
    receivers: ["HTMLScriptElement","ClipboardItem"]
  },
  {
    name: "toggle",
    signatures: [["token","?force"]]
  },
  {
    name: "clearData",
    signatures: [["?format"]]
  },
  {
    name: "getData",
    signatures: [["format"]]
  },
  {
    name: "setData",
    signatures: [["format","data"]]
  },
  {
    name: "setDragImage",
    signatures: [["image","x","y"]]
  },
  {
    name: "getAsString",
    signatures: [["callback"]]
  },
  {
    name: "clear",
    signatures: [["mask"]],
    receivers: ["WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "adoptNode",
    signatures: [["node"]]
  },
  {
    name: "caretPositionFromPoint",
    signatures: [["x","y","?options"]]
  },
  {
    name: "caretRangeFromPoint",
    signatures: [["?x","?y"]]
  },
  {
    name: "createAttribute",
    signatures: [["localName"]]
  },
  {
    name: "createAttributeNS",
    signatures: [["namespace","qualifiedName"],["namespaceURI","qualifiedName"]]
  },
  {
    name: "createCDATASection",
    signatures: [["data"]]
  },
  {
    name: "createComment",
    signatures: [["data"]]
  },
  {
    name: "createElement",
    signatures: [["localName","?options"],["tagName","?options"]]
  },
  {
    name: "createElementNS",
    signatures: [["namespaceURI","qualifiedName","?options"],["namespace","qualifiedName","?options"]]
  },
  {
    name: "createEvent",
    signatures: [["eventInterface"],["eventType"]]
  },
  {
    name: "createNodeIterator",
    signatures: [["root","?whatToShow","?filter"]]
  },
  {
    name: "createProcessingInstruction",
    signatures: [["target","data"]]
  },
  {
    name: "createTextNode",
    signatures: [["data"]]
  },
  {
    name: "createTreeWalker",
    signatures: [["root","?whatToShow","?filter"]]
  },
  {
    name: "execCommand",
    signatures: [["commandId","?showUI","?value"]]
  },
  {
    name: "getElementById",
    signatures: [["elementId"]]
  },
  {
    name: "getElementsByClassName",
    signatures: [["classNames"]]
  },
  {
    name: "getElementsByName",
    signatures: [["elementName"]]
  },
  {
    name: "getElementsByTagName",
    signatures: [["qualifiedName"],["localName"]]
  },
  {
    name: "getElementsByTagNameNS",
    signatures: [["namespaceURI","localName"],["namespace","localName"]]
  },
  {
    name: "importNode",
    signatures: [["node","?subtree"],["node","?deep"],["node","options"]]
  },
  {
    name: "queryCommandEnabled",
    signatures: [["commandId"]]
  },
  {
    name: "queryCommandIndeterm",
    signatures: [["commandId"]]
  },
  {
    name: "queryCommandState",
    signatures: [["commandId"]]
  },
  {
    name: "queryCommandSupported",
    signatures: [["commandId"]]
  },
  {
    name: "queryCommandValue",
    signatures: [["commandId"]]
  },
  {
    name: "requestStorageAccess",
    signatures: [["?types"]]
  },
  {
    name: "startViewTransition",
    signatures: [["?callbackOptions"],["update"],["opts"]],
    receivers: ["Document"]
  },
  {
    name: "startViewTransition",
    signatures: [["?update"],["opts"]],
    receivers: ["Element"]
  },
  {
    name: "writeln",
    signatures: [["...text"],["text"],["text1","...text"]]
  },
  {
    name: "elementFromPoint",
    signatures: [["x","y"]]
  },
  {
    name: "elementsFromPoint",
    signatures: [["x","y"]]
  },
  {
    name: "attachShadow",
    signatures: [["init"],["shadowRootInitDict"]]
  },
  {
    name: "checkVisibility",
    signatures: [["?options"]]
  },
  {
    name: "closest",
    signatures: [["selector"],["selectors"]]
  },
  {
    name: "getAttribute",
    signatures: [["qualifiedName"],["name"]],
    receivers: ["Element"]
  },
  {
    name: "getAttribute",
    signatures: [["tag"]],
    receivers: ["SmartCardConnection"]
  },
  {
    name: "getAttributeNS",
    signatures: [["namespace","localName"],["namespaceURI","localName"]]
  },
  {
    name: "getAttributeNode",
    signatures: [["qualifiedName"],["name"]]
  },
  {
    name: "getAttributeNodeNS",
    signatures: [["namespace","localName"],["namespaceURI","localName"]]
  },
  {
    name: "getHTML",
    signatures: [["?options"]]
  },
  {
    name: "hasAttribute",
    signatures: [["qualifiedName"],["name"]]
  },
  {
    name: "hasAttributeNS",
    signatures: [["namespace","localName"],["namespaceURI","localName"]]
  },
  {
    name: "hasPointerCapture",
    signatures: [["pointerId"]]
  },
  {
    name: "insertAdjacentElement",
    signatures: [["where","element"]]
  },
  {
    name: "insertAdjacentHTML",
    signatures: [["position","string"],["position","text"]]
  },
  {
    name: "insertAdjacentText",
    signatures: [["where","data"]]
  },
  {
    name: "matches",
    signatures: [["selectors"]]
  },
  {
    name: "releasePointerCapture",
    signatures: [["pointerId"]]
  },
  {
    name: "removeAttribute",
    signatures: [["qualifiedName"],["name"]],
    receivers: ["Element"]
  },
  {
    name: "removeAttribute",
    signatures: [["attribute"]],
    receivers: ["Sanitizer"]
  },
  {
    name: "removeAttributeNS",
    signatures: [["namespace","localName"],["namespaceURI","localName"]]
  },
  {
    name: "removeAttributeNode",
    signatures: [["attr"]]
  },
  {
    name: "requestFullscreen",
    signatures: [["?options"]]
  },
  {
    name: "requestPointerLock",
    signatures: [["?options"]]
  },
  {
    name: "scroll",
    signatures: [["?options"],["x","y"]],
    receivers: ["Element","Window"]
  },
  {
    name: "scrollBy",
    signatures: [["?options"],["x","y"]]
  },
  {
    name: "scrollIntoView",
    signatures: [["?arg"]]
  },
  {
    name: "scrollTo",
    signatures: [["?options"],["x","y"]]
  },
  {
    name: "setAttribute",
    signatures: [["qualifiedName","value"],["name","value"]],
    receivers: ["Element"]
  },
  {
    name: "setAttribute",
    signatures: [["tag","value"]],
    receivers: ["SmartCardConnection"]
  },
  {
    name: "setAttributeNS",
    signatures: [["namespace","qualifiedName","value"],["namespaceURI","name","value"]]
  },
  {
    name: "setAttributeNode",
    signatures: [["attr"]]
  },
  {
    name: "setAttributeNodeNS",
    signatures: [["attr"]]
  },
  {
    name: "setHTMLUnsafe",
    signatures: [["html","?options"]],
    receivers: ["Element"]
  },
  {
    name: "setHTMLUnsafe",
    signatures: [["html","?options"],["string"]],
    receivers: ["ShadowRoot"]
  },
  {
    name: "setPointerCapture",
    signatures: [["pointerId"]]
  },
  {
    name: "toggleAttribute",
    signatures: [["qualifiedName","?force"]]
  },
  {
    name: "webkitMatchesSelector",
    signatures: [["selectors"]]
  },
  {
    name: "setFormValue",
    signatures: [["value","?state"]]
  },
  {
    name: "setValidity",
    signatures: [["?flags","?message","?anchor"]]
  },
  {
    name: "initEvent",
    signatures: [["type","?bubbles","?cancelable"]]
  },
  {
    name: "handleEvent",
    signatures: [["object"]]
  },
  {
    name: "dispatchEvent",
    signatures: [["event"]]
  },
  {
    name: "readAsArrayBuffer",
    signatures: [["blob"]]
  },
  {
    name: "readAsBinaryString",
    signatures: [["blob"]]
  },
  {
    name: "readAsDataURL",
    signatures: [["blob"]]
  },
  {
    name: "readAsText",
    signatures: [["blob","?encoding"],["blob","?label"]]
  },
  {
    name: "getDirectory",
    signatures: [["?path","?options","?successCallback","?errorCallback"]],
    receivers: ["FileSystemDirectoryEntry"]
  },
  {
    name: "getDirectory",
    signatures: [["path","flags"]],
    receivers: ["DirectoryEntrySync"]
  },
  {
    name: "getDirectory",
    signatures: [["path","?options","?successCallback","?errorCallback"]],
    receivers: ["DirectoryEntry"]
  },
  {
    name: "getFile",
    signatures: [["?path","?options","?successCallback","?errorCallback"]],
    receivers: ["FileSystemDirectoryEntry"]
  },
  {
    name: "getFile",
    signatures: [["path","flags"]],
    receivers: ["DirectoryEntrySync"]
  },
  {
    name: "getFile",
    signatures: [["path","?options","?successCallback","?errorCallback"]],
    receivers: ["DirectoryEntry"]
  },
  {
    name: "getDirectoryHandle",
    signatures: [["name","?options"]]
  },
  {
    name: "getFileHandle",
    signatures: [["name","?options"]]
  },
  {
    name: "removeEntry",
    signatures: [["name","?options"]]
  },
  {
    name: "resolve",
    signatures: [["possibleDescendant"],["possibleChild"]],
    receivers: ["FileSystemDirectoryHandle"]
  },
  {
    name: "resolve",
    signatures: [["specifier"]],
    receivers: ["ImportMeta"]
  },
  {
    name: "resolve",
    signatures: [["?value"]],
    receivers: ["PromiseConstructor"]
  },
  {
    name: "resolve",
    signatures: [["token","?options"]],
    receivers: ["IdentityProvider"]
  },
  {
    name: "readEntries",
    signatures: [["successCallback","?errorCallback"]],
    receivers: ["FileSystemDirectoryReader","DirectoryReader"]
  },
  {
    name: "getParent",
    signatures: [["?successCallback","?errorCallback"]],
    receivers: ["FileSystemEntry","Entry"]
  },
  {
    name: "file",
    signatures: [["successCallback","?errorCallback"]],
    receivers: ["FileSystemFileEntry","FileEntry"]
  },
  {
    name: "createWritable",
    signatures: [["?options"]]
  },
  {
    name: "isSameEntry",
    signatures: [["other"]]
  },
  {
    name: "seek",
    signatures: [["position"],["offset"]],
    receivers: ["FileSystemWritableFileStream"]
  },
  {
    name: "seek",
    signatures: [["position"]],
    receivers: ["FileWriterSync","FileWriter"]
  },
  {
    name: "truncate",
    signatures: [["size"]],
    receivers: ["FileSystemWritableFileStream","FileWriterSync","FileWriter"]
  },
  {
    name: "truncate",
    signatures: [["newSize"],["size"]],
    receivers: ["FileSystemSyncAccessHandle"]
  },
  {
    name: "load",
    signatures: [["font","?text"]],
    receivers: ["FontFaceSet"]
  },
  {
    name: "load",
    signatures: [["sessionId"]],
    receivers: ["MediaKeySession"]
  },
  {
    name: "load",
    signatures: [["typedArray","index"]],
    receivers: ["Atomics"]
  },
  {
    name: "check",
    signatures: [["font","?text"]]
  },
  {
    name: "append",
    signatures: [["name","value","?filename"],["name","blobValue","?filename"]],
    receivers: ["FormData"]
  },
  {
    name: "append",
    signatures: [["name","value"]],
    receivers: ["Headers","URLSearchParams"]
  },
  {
    name: "append",
    signatures: [["...nodes"]],
    receivers: ["DocumentFragment","Document","Element"]
  },
  {
    name: "append",
    signatures: [["property","...values"]],
    receivers: ["StylePropertyMap"]
  },
  {
    name: "getAll",
    signatures: [["name"]],
    receivers: ["FormData","URLSearchParams"]
  },
  {
    name: "getAll",
    signatures: [["?query","?count"],["?query_or_options","?count"]],
    receivers: ["IDBIndex","IDBObjectStore"]
  },
  {
    name: "getAll",
    signatures: [["property"]],
    receivers: ["StylePropertyMapReadOnly"]
  },
  {
    name: "getAll",
    signatures: [["name"],["?options"]],
    receivers: ["CookieStore"]
  },
  {
    name: "playEffect",
    signatures: [["type","?params"]]
  },
  {
    name: "clearWatch",
    signatures: [["watchId"],["watchID"]]
  },
  {
    name: "getCurrentPosition",
    signatures: [["successCallback","?errorCallback","?options"]]
  },
  {
    name: "watchPosition",
    signatures: [["successCallback","?errorCallback","?options"]]
  },
  {
    name: "namedItem",
    signatures: [["name"]]
  },
  {
    name: "setCustomValidity",
    signatures: [["error"]]
  },
  {
    name: "captureStream",
    signatures: [["?frameRequestRate"],["?frameRate"]],
    receivers: ["HTMLCanvasElement"]
  },
  {
    name: "getContext",
    signatures: [["contextId","?options"],["contextId","?attributes"]],
    receivers: ["HTMLCanvasElement"]
  },
  {
    name: "getContext",
    signatures: [["contextId","?options"],["contextType","?attributes"]],
    receivers: ["OffscreenCanvas"]
  },
  {
    name: "toBlob",
    signatures: [["callback","?type","?quality"]]
  },
  {
    name: "toDataURL",
    signatures: [["?type","?quality"]]
  },
  {
    name: "show",
    signatures: [["?detailsPromise"]],
    receivers: ["PaymentRequest"]
  },
  {
    name: "showPopover",
    signatures: [["?options"]]
  },
  {
    name: "togglePopover",
    signatures: [["?options"]]
  },
  {
    name: "requestSubmit",
    signatures: [["?submitter"]]
  },
  {
    name: "submit",
    signatures: [["buffers"]],
    receivers: ["GPUQueue"]
  },
  {
    name: "select",
    signatures: [["properties","?options"]],
    receivers: ["ContactsManager"]
  },
  {
    name: "setRangeText",
    signatures: [["replacement","?start","?end","?selectionMode"]]
  },
  {
    name: "setSelectionRange",
    signatures: [["start","end","?direction"]]
  },
  {
    name: "stepDown",
    signatures: [["?n"]]
  },
  {
    name: "stepUp",
    signatures: [["?n"]]
  },
  {
    name: "addTextTrack",
    signatures: [["kind","?label","?language"]]
  },
  {
    name: "canPlayType",
    signatures: [["type"]]
  },
  {
    name: "fastSeek",
    signatures: [["time"]]
  },
  {
    name: "setMediaKeys",
    signatures: [["mediaKeys"]]
  },
  {
    name: "setSinkId",
    signatures: [["sinkId"]]
  },
  {
    name: "focus",
    signatures: [["?options"]],
    receivers: ["HTMLOrSVGElement","HTMLElement","MathMLElement","SVGElement"]
  },
  {
    name: "assign",
    signatures: [["...nodes"]],
    receivers: ["HTMLSlotElement"]
  },
  {
    name: "assign",
    signatures: [["url"]],
    receivers: ["Location"]
  },
  {
    name: "assign",
    signatures: [["target","source"],["target","...sources"],["target","source1","source2","?source3"]],
    receivers: ["ObjectConstructor"]
  },
  {
    name: "assignedElements",
    signatures: [["?options"]]
  },
  {
    name: "assignedNodes",
    signatures: [["?options"]]
  },
  {
    name: "deleteRow",
    signatures: [["index"]]
  },
  {
    name: "insertRow",
    signatures: [["?index"]]
  },
  {
    name: "deleteCell",
    signatures: [["index"]]
  },
  {
    name: "insertCell",
    signatures: [["?index"]]
  },
  {
    name: "cancelVideoFrameCallback",
    signatures: [["handle"]]
  },
  {
    name: "requestVideoFrameCallback",
    signatures: [["callback"]]
  },
  {
    name: "back",
    signatures: [["?options"]],
    receivers: ["Navigation"]
  },
  {
    name: "forward",
    signatures: [["?options"]],
    receivers: ["Navigation"]
  },
  {
    name: "go",
    signatures: [["?delta"]]
  },
  {
    name: "pushState",
    signatures: [["data","unused","?url"],["data","title","?url"]]
  },
  {
    name: "replaceState",
    signatures: [["data","unused","?url"],["data","title","?url"]]
  },
  {
    name: "advance",
    signatures: [["count"]]
  },
  {
    name: "continue",
    signatures: [["?key"]]
  },
  {
    name: "continuePrimaryKey",
    signatures: [["key","primaryKey"]]
  },
  {
    name: "update",
    signatures: [["value"]],
    receivers: ["IDBCursor"]
  },
  {
    name: "update",
    signatures: [["response"]],
    receivers: ["MediaKeySession"]
  },
  {
    name: "createObjectStore",
    signatures: [["name","?options"]]
  },
  {
    name: "deleteObjectStore",
    signatures: [["name"]]
  },
  {
    name: "transaction",
    signatures: [["storeNames","?mode","?options"]]
  },
  {
    name: "cmp",
    signatures: [["first","second"]]
  },
  {
    name: "deleteDatabase",
    signatures: [["name"]]
  },
  {
    name: "count",
    signatures: [["?query"],["?key"]],
    receivers: ["IDBIndex","IDBObjectStore"]
  },
  {
    name: "count",
    signatures: [["?label"]],
    receivers: ["Console","console"]
  },
  {
    name: "getAllKeys",
    signatures: [["?query","?count"],["?query_or_options","?count"]]
  },
  {
    name: "getKey",
    signatures: [["query"],["key"]],
    receivers: ["IDBIndex","IDBObjectStore"]
  },
  {
    name: "getKey",
    signatures: [["name"]],
    receivers: ["PushSubscription"]
  },
  {
    name: "openCursor",
    signatures: [["?query","?direction"],["?range","?direction"]]
  },
  {
    name: "openKeyCursor",
    signatures: [["?query","?direction"],["?range","?direction"]]
  },
  {
    name: "includes",
    signatures: [["key"]],
    receivers: ["IDBKeyRange"]
  },
  {
    name: "includes",
    signatures: [["searchElement","?fromIndex"]],
    receivers: ["Float16Array","Array","ReadonlyArray","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","BigInt64Array","BigUint64Array"]
  },
  {
    name: "includes",
    signatures: [["searchString","?position"]],
    receivers: ["String"]
  },
  {
    name: "createIndex",
    signatures: [["name","keyPath","?options"]]
  },
  {
    name: "deleteIndex",
    signatures: [["name"]]
  },
  {
    name: "index",
    signatures: [["name"]]
  },
  {
    name: "objectStore",
    signatures: [["name"]]
  },
  {
    name: "transferFromImageBitmap",
    signatures: [["bitmap"]]
  },
  {
    name: "observe",
    signatures: [["target"]],
    receivers: ["IntersectionObserver"]
  },
  {
    name: "observe",
    signatures: [["target","?options"]],
    receivers: ["MutationObserver","ResizeObserver"]
  },
  {
    name: "observe",
    signatures: [["?options"]],
    receivers: ["PerformanceObserver"]
  },
  {
    name: "observe",
    signatures: [["handle","?options"]],
    receivers: ["FileSystemObserver"]
  },
  {
    name: "unobserve",
    signatures: [["target"]],
    receivers: ["IntersectionObserver","ResizeObserver"]
  },
  {
    name: "unobserve",
    signatures: [["handle"]],
    receivers: ["FileSystemObserver"]
  },
  {
    name: "getModifierState",
    signatures: [["keyArg"]]
  },
  {
    name: "initKeyboardEvent",
    signatures: [["typeArg","?bubblesArg","?cancelableArg","?viewArg","?keyArg","?locationArg","?ctrlKey","?altKey","?shiftKey","?metaKey"],["type","?bubbles","?cancelable","?view","?keyIdentifier","?location","?ctrlKey","?altKey","?shiftKey","?metaKey"]]
  },
  {
    name: "setKeyframes",
    signatures: [["keyframes"]]
  },
  {
    name: "reload",
    signatures: [["?options"]],
    receivers: ["Navigation"]
  },
  {
    name: "query",
    signatures: [["permissionDesc"],["permission"]],
    receivers: ["Permissions"]
  },
  {
    name: "request",
    signatures: [["name","callback"],["name","options","callback"]],
    receivers: ["LockManager"]
  },
  {
    name: "request",
    signatures: [["?type"]],
    receivers: ["WakeLock"]
  },
  {
    name: "request",
    signatures: [["permissions"]],
    receivers: ["Permissions"]
  },
  {
    name: "send",
    signatures: [["data","?timestamp"]],
    receivers: ["MIDIOutput"]
  },
  {
    name: "send",
    signatures: [["data"]],
    receivers: ["RTCDataChannel","WebSocket"]
  },
  {
    name: "send",
    signatures: [["?body"]],
    receivers: ["XMLHttpRequest"]
  },
  {
    name: "send",
    signatures: [["command"]],
    receivers: ["InspectorOverlayHost"]
  },
  {
    name: "send",
    signatures: [["message"],["data"]],
    receivers: ["PresentationConnection"]
  },
  {
    name: "decodingInfo",
    signatures: [["configuration"]]
  },
  {
    name: "encodingInfo",
    signatures: [["configuration"]]
  },
  {
    name: "getDisplayMedia",
    signatures: [["?options"],["?constraints"]]
  },
  {
    name: "getUserMedia",
    signatures: [["?constraints"]],
    receivers: ["MediaDevices"]
  },
  {
    name: "getUserMedia",
    signatures: [["constraints","successCallback","errorCallback"]],
    receivers: ["Navigator"]
  },
  {
    name: "generateRequest",
    signatures: [["initDataType","initData"]]
  },
  {
    name: "createSession",
    signatures: [["?sessionType"]]
  },
  {
    name: "getStatusForPolicy",
    signatures: [["?policy"]]
  },
  {
    name: "setServerCertificate",
    signatures: [["serverCertificate"]]
  },
  {
    name: "appendMedium",
    signatures: [["medium"]]
  },
  {
    name: "deleteMedium",
    signatures: [["medium"]]
  },
  {
    name: "addListener",
    signatures: [["callback"],["listener"]]
  },
  {
    name: "removeListener",
    signatures: [["callback"],["listener"]]
  },
  {
    name: "setActionHandler",
    signatures: [["action","handler"]]
  },
  {
    name: "setPositionState",
    signatures: [["?state"]]
  },
  {
    name: "addSourceBuffer",
    signatures: [["type"]]
  },
  {
    name: "endOfStream",
    signatures: [["?error"]]
  },
  {
    name: "removeSourceBuffer",
    signatures: [["sourceBuffer"]]
  },
  {
    name: "setLiveSeekableRange",
    signatures: [["start","end"]]
  },
  {
    name: "addTrack",
    signatures: [["track"]],
    receivers: ["MediaStream"]
  },
  {
    name: "addTrack",
    signatures: [["track","...streams"]],
    receivers: ["RTCPeerConnection"]
  },
  {
    name: "getTrackById",
    signatures: [["trackId"]],
    receivers: ["MediaStream"]
  },
  {
    name: "getTrackById",
    signatures: [["id"]],
    receivers: ["TextTrackList","AudioTrackList","VideoTrackList"]
  },
  {
    name: "removeTrack",
    signatures: [["track"]],
    receivers: ["MediaStream"]
  },
  {
    name: "removeTrack",
    signatures: [["sender"]],
    receivers: ["RTCPeerConnection"]
  },
  {
    name: "applyConstraints",
    signatures: [["?constraints"]]
  },
  {
    name: "initMessageEvent",
    signatures: [["type","?bubbles","?cancelable","?data","?origin","?lastEventId","?source","?ports"]]
  },
  {
    name: "initMouseEvent",
    signatures: [["typeArg","canBubbleArg","cancelableArg","viewArg","detailArg","screenXArg","screenYArg","clientXArg","clientYArg","ctrlKeyArg","altKeyArg","shiftKeyArg","metaKeyArg","buttonArg","relatedTargetArg"],["type","?bubbles","?cancelable","?view","?detail","?screenX","?screenY","?clientX","?clientY","?ctrlKey","?altKey","?shiftKey","?metaKey","?button","?relatedTarget"]]
  },
  {
    name: "getNamedItem",
    signatures: [["qualifiedName"],["name"]]
  },
  {
    name: "getNamedItemNS",
    signatures: [["namespace","localName"],["namespaceURI","localName"]]
  },
  {
    name: "removeNamedItem",
    signatures: [["qualifiedName"],["name"]]
  },
  {
    name: "removeNamedItemNS",
    signatures: [["namespace","localName"],["namespaceURI","localName"]]
  },
  {
    name: "setNamedItem",
    signatures: [["attr"]]
  },
  {
    name: "setNamedItemNS",
    signatures: [["attr"]]
  },
  {
    name: "disable",
    signatures: [["cap"]],
    receivers: ["WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "enable",
    signatures: [["cap"]],
    receivers: ["WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "setHeaderValue",
    signatures: [["value"]]
  },
  {
    name: "canShare",
    signatures: [["?data"]]
  },
  {
    name: "requestMIDIAccess",
    signatures: [["?options"]]
  },
  {
    name: "requestMediaKeySystemAccess",
    signatures: [["keySystem","supportedConfigurations"]]
  },
  {
    name: "sendBeacon",
    signatures: [["url","?data"]]
  },
  {
    name: "share",
    signatures: [["?data"]]
  },
  {
    name: "vibrate",
    signatures: [["pattern"]]
  },
  {
    name: "setAppBadge",
    signatures: [["?contents"]]
  },
  {
    name: "registerProtocolHandler",
    signatures: [["scheme","url"]]
  },
  {
    name: "appendChild",
    signatures: [["node"]]
  },
  {
    name: "cloneNode",
    signatures: [["?subtree"],["?deep"]]
  },
  {
    name: "compareDocumentPosition",
    signatures: [["other"]]
  },
  {
    name: "getRootNode",
    signatures: [["?options"]]
  },
  {
    name: "insertBefore",
    signatures: [["node","child"]]
  },
  {
    name: "isDefaultNamespace",
    signatures: [["namespace"],["namespaceURI"]]
  },
  {
    name: "isEqualNode",
    signatures: [["otherNode"]]
  },
  {
    name: "isSameNode",
    signatures: [["otherNode"]]
  },
  {
    name: "lookupNamespaceURI",
    signatures: [["prefix"]]
  },
  {
    name: "lookupPrefix",
    signatures: [["namespace"],["namespaceURI"]]
  },
  {
    name: "normalize",
    signatures: [["?form"]],
    receivers: ["String"]
  },
  {
    name: "removeChild",
    signatures: [["child"]]
  },
  {
    name: "replaceChild",
    signatures: [["node","child"]]
  },
  {
    name: "blendEquationSeparateiOES",
    signatures: [["buf","modeRGB","modeAlpha"]]
  },
  {
    name: "blendEquationiOES",
    signatures: [["buf","mode"]]
  },
  {
    name: "blendFuncSeparateiOES",
    signatures: [["buf","srcRGB","dstRGB","srcAlpha","dstAlpha"]]
  },
  {
    name: "blendFunciOES",
    signatures: [["buf","src","dst"]]
  },
  {
    name: "colorMaskiOES",
    signatures: [["buf","r","g","b","a"]]
  },
  {
    name: "disableiOES",
    signatures: [["target","index"]]
  },
  {
    name: "enableiOES",
    signatures: [["target","index"]]
  },
  {
    name: "bindVertexArrayOES",
    signatures: [["arrayObject"]],
    receivers: ["OES_vertex_array_object"]
  },
  {
    name: "bindVertexArrayOES",
    signatures: [["?arrayObject"]],
    receivers: ["OESVertexArrayObject"]
  },
  {
    name: "deleteVertexArrayOES",
    signatures: [["arrayObject"]],
    receivers: ["OES_vertex_array_object"]
  },
  {
    name: "deleteVertexArrayOES",
    signatures: [["?arrayObject"]],
    receivers: ["OESVertexArrayObject"]
  },
  {
    name: "isVertexArrayOES",
    signatures: [["arrayObject"]],
    receivers: ["OES_vertex_array_object"]
  },
  {
    name: "isVertexArrayOES",
    signatures: [["?arrayObject"]],
    receivers: ["OESVertexArrayObject"]
  },
  {
    name: "framebufferTextureMultiviewOVR",
    signatures: [["target","attachment","texture","level","baseViewIndex","numViews"]]
  },
  {
    name: "convertToBlob",
    signatures: [["?options"]]
  },
  {
    name: "setPeriodicWave",
    signatures: [["periodicWave"]]
  },
  {
    name: "prepend",
    signatures: [["...nodes"]]
  },
  {
    name: "querySelector",
    signatures: [["selectors"]]
  },
  {
    name: "querySelectorAll",
    signatures: [["selectors"]]
  },
  {
    name: "replaceChildren",
    signatures: [["...nodes"]]
  },
  {
    name: "addPath",
    signatures: [["path","?transform"]]
  },
  {
    name: "updateWith",
    signatures: [["detailsPromise"]]
  },
  {
    name: "complete",
    signatures: [["?result"],["?paymentResult"]],
    receivers: ["PaymentResponse"]
  },
  {
    name: "retry",
    signatures: [["?errorFields"]]
  },
  {
    name: "clearMarks",
    signatures: [["?markName"]]
  },
  {
    name: "clearMeasures",
    signatures: [["?measureName"]]
  },
  {
    name: "getEntriesByName",
    signatures: [["name","?type"],["name","?entryType"]]
  },
  {
    name: "getEntriesByType",
    signatures: [["type"],["entryType"]]
  },
  {
    name: "mark",
    signatures: [["markName","?markOptions"]]
  },
  {
    name: "measure",
    signatures: [["measureName","?startOrMeasureOptions","?endMark"]]
  },
  {
    name: "setResourceTimingBufferSize",
    signatures: [["maxSize"]]
  },
  {
    name: "refresh",
    signatures: [["?reload"]]
  },
  {
    name: "permissionState",
    signatures: [["?options"]]
  },
  {
    name: "subscribe",
    signatures: [["?options"]],
    receivers: ["PushManager"]
  },
  {
    name: "subscribe",
    signatures: [["?observer","?options"]],
    receivers: ["Observable"]
  },
  {
    name: "subscribe",
    signatures: [["subscriptions"]],
    receivers: ["CookieStoreManager"]
  },
  {
    name: "unsubscribe",
    signatures: [["subscriptions"]],
    receivers: ["CookieStoreManager"]
  },
  {
    name: "insertDTMF",
    signatures: [["tones","?duration","?interToneGap"]]
  },
  {
    name: "getMetadata",
    signatures: [["successCallback","?errorCallback"]],
    receivers: ["Entry"]
  },
  {
    name: "addIceCandidate",
    signatures: [["?candidate","?successCallback","?failureCallback"]]
  },
  {
    name: "addTransceiver",
    signatures: [["trackOrKind","?init"]]
  },
  {
    name: "createAnswer",
    signatures: [["?options"],["successCallback","failureCallback"]]
  },
  {
    name: "createDataChannel",
    signatures: [["label","?dataChannelDict"]]
  },
  {
    name: "createOffer",
    signatures: [["?options"],["successCallback","failureCallback","?options"]]
  },
  {
    name: "getStats",
    signatures: [["?selector"]],
    receivers: ["RTCPeerConnection"]
  },
  {
    name: "setConfiguration",
    signatures: [["?configuration"]]
  },
  {
    name: "setLocalDescription",
    signatures: [["?description","?successCallback","?failureCallback"]]
  },
  {
    name: "setRemoteDescription",
    signatures: [["description","?successCallback","?failureCallback"]]
  },
  {
    name: "replaceTrack",
    signatures: [["withTrack"]]
  },
  {
    name: "setParameters",
    signatures: [["parameters","?setParameterOptions"]]
  },
  {
    name: "setStreams",
    signatures: [["...streams"]]
  },
  {
    name: "setCodecPreferences",
    signatures: [["codecs"]]
  },
  {
    name: "collapse",
    signatures: [["?toStart"]],
    receivers: ["Range"]
  },
  {
    name: "collapse",
    signatures: [["node","?offset"]],
    receivers: ["Selection"]
  },
  {
    name: "compareBoundaryPoints",
    signatures: [["how","sourceRange"]]
  },
  {
    name: "comparePoint",
    signatures: [["node","offset"]]
  },
  {
    name: "createContextualFragment",
    signatures: [["string"],["fragment"]]
  },
  {
    name: "insertNode",
    signatures: [["node"]]
  },
  {
    name: "intersectsNode",
    signatures: [["node"]]
  },
  {
    name: "isPointInRange",
    signatures: [["node","offset"]]
  },
  {
    name: "selectNode",
    signatures: [["node"]]
  },
  {
    name: "selectNodeContents",
    signatures: [["node"]]
  },
  {
    name: "setEnd",
    signatures: [["node","offset"]]
  },
  {
    name: "setEndAfter",
    signatures: [["node"]]
  },
  {
    name: "setEndBefore",
    signatures: [["node"]]
  },
  {
    name: "setStart",
    signatures: [["node","offset"]]
  },
  {
    name: "setStartAfter",
    signatures: [["node"]]
  },
  {
    name: "setStartBefore",
    signatures: [["node"]]
  },
  {
    name: "surroundContents",
    signatures: [["newParent"]]
  },
  {
    name: "enqueue",
    signatures: [["chunk"]],
    receivers: ["ReadableByteStreamController"]
  },
  {
    name: "enqueue",
    signatures: [["?chunk"]],
    receivers: ["ReadableStreamDefaultController","TransformStreamDefaultController"]
  },
  {
    name: "error",
    signatures: [["?e"]],
    receivers: ["ReadableByteStreamController","ReadableStreamDefaultController","WritableStreamDefaultController"]
  },
  {
    name: "error",
    signatures: [["?reason"]],
    receivers: ["TransformStreamDefaultController"]
  },
  {
    name: "error",
    signatures: [["...data"]],
    receivers: ["Console","console"]
  },
  {
    name: "error",
    signatures: [["error"]],
    receivers: ["Subscriber"]
  },
  {
    name: "getReader",
    signatures: [["?options"]]
  },
  {
    name: "pipeThrough",
    signatures: [["transform","?options"]]
  },
  {
    name: "pipeTo",
    signatures: [["destination","?options"]]
  },
  {
    name: "respond",
    signatures: [["bytesWritten"]]
  },
  {
    name: "respondWithNewView",
    signatures: [["view"]]
  },
  {
    name: "cancelWatchAvailability",
    signatures: [["?id"]]
  },
  {
    name: "prompt",
    signatures: [["?message","?_default"],["?message","?defaultValue"]],
    receivers: ["Window"]
  },
  {
    name: "watchAvailability",
    signatures: [["callback"]]
  },
  {
    name: "convertToSpecifiedUnits",
    signatures: [["unitType"]]
  },
  {
    name: "newValueSpecifiedUnits",
    signatures: [["unitType","valueInSpecifiedUnits"]]
  },
  {
    name: "beginElementAt",
    signatures: [["offset"]]
  },
  {
    name: "endElementAt",
    signatures: [["offset"]]
  },
  {
    name: "getCurrentTime",
    signatures: [["?rangeName"]],
    receivers: ["AnimationTimeline"]
  },
  {
    name: "setStdDeviation",
    signatures: [["stdDeviationX","stdDeviationY"]]
  },
  {
    name: "getPointAtLength",
    signatures: [["distance"]]
  },
  {
    name: "isPointInFill",
    signatures: [["?point"]]
  },
  {
    name: "getBBox",
    signatures: [["?options"]]
  },
  {
    name: "appendItem",
    signatures: [["newItem"]]
  },
  {
    name: "getItem",
    signatures: [["index"]],
    receivers: ["SVGLengthList","SVGNumberList","SVGPointList","SVGStringList","SVGTransformList"]
  },
  {
    name: "getItem",
    signatures: [["key"]],
    receivers: ["Storage"]
  },
  {
    name: "getItem",
    signatures: [["dimension1Index","...dimensionNIndexes"]],
    receivers: ["VBArray"]
  },
  {
    name: "initialize",
    signatures: [["newItem"]],
    receivers: ["SVGLengthList","SVGNumberList","SVGPointList","SVGStringList","SVGTransformList"]
  },
  {
    name: "initialize",
    signatures: [["root"]],
    receivers: ["CustomElementRegistry"]
  },
  {
    name: "insertItemBefore",
    signatures: [["newItem","index"]],
    receivers: ["SVGLengthList","SVGNumberList","SVGPointList","SVGTransformList"]
  },
  {
    name: "insertItemBefore",
    signatures: [["newItem","index"],["item","index"]],
    receivers: ["SVGStringList"]
  },
  {
    name: "removeItem",
    signatures: [["index"]],
    receivers: ["SVGLengthList","SVGNumberList","SVGPointList","SVGStringList","SVGTransformList"]
  },
  {
    name: "removeItem",
    signatures: [["key"]],
    receivers: ["Storage"]
  },
  {
    name: "replaceItem",
    signatures: [["newItem","index"]]
  },
  {
    name: "setOrientToAngle",
    signatures: [["angle"]]
  },
  {
    name: "checkEnclosure",
    signatures: [["element","rect"]]
  },
  {
    name: "checkIntersection",
    signatures: [["element","rect"]]
  },
  {
    name: "createSVGTransformFromMatrix",
    signatures: [["?matrix"]]
  },
  {
    name: "getEnclosureList",
    signatures: [["rect","referenceElement"]]
  },
  {
    name: "getIntersectionList",
    signatures: [["rect","referenceElement"]]
  },
  {
    name: "setCurrentTime",
    signatures: [["seconds"]]
  },
  {
    name: "suspendRedraw",
    signatures: [["maxWaitMilliseconds"]]
  },
  {
    name: "unsuspendRedraw",
    signatures: [["suspendHandleID"],["suspendHandleId"]]
  },
  {
    name: "getCharNumAtPosition",
    signatures: [["?point"]]
  },
  {
    name: "getEndPositionOfChar",
    signatures: [["charnum"]]
  },
  {
    name: "getExtentOfChar",
    signatures: [["charnum"]]
  },
  {
    name: "getRotationOfChar",
    signatures: [["charnum"]]
  },
  {
    name: "getStartPositionOfChar",
    signatures: [["charnum"]]
  },
  {
    name: "getSubStringLength",
    signatures: [["charnum","nchars"]]
  },
  {
    name: "selectSubString",
    signatures: [["charnum","nchars"]]
  },
  {
    name: "setMatrix",
    signatures: [["?matrix"]]
  },
  {
    name: "setRotate",
    signatures: [["angle","cx","cy"]]
  },
  {
    name: "setScale",
    signatures: [["sx","sy"]]
  },
  {
    name: "setSkewX",
    signatures: [["angle"]]
  },
  {
    name: "setSkewY",
    signatures: [["angle"]]
  },
  {
    name: "setTranslate",
    signatures: [["tx","ty"]]
  },
  {
    name: "addRange",
    signatures: [["range"]]
  },
  {
    name: "containsNode",
    signatures: [["node","?allowPartialContainment"]]
  },
  {
    name: "extend",
    signatures: [["node","?offset"]]
  },
  {
    name: "getRangeAt",
    signatures: [["index"]]
  },
  {
    name: "modify",
    signatures: [["?alter","?direction","?granularity"]]
  },
  {
    name: "removeRange",
    signatures: [["range"]]
  },
  {
    name: "selectAllChildren",
    signatures: [["node"]]
  },
  {
    name: "setBaseAndExtent",
    signatures: [["anchorNode","anchorOffset","focusNode","focusOffset"],["baseNode","baseOffset","extentNode","extentOffset"]]
  },
  {
    name: "getRegistration",
    signatures: [["?clientURL"],["?documentURL"]]
  },
  {
    name: "register",
    signatures: [["scriptURL","?options"],["url","?options"]],
    receivers: ["ServiceWorkerContainer"]
  },
  {
    name: "register",
    signatures: [["target","heldValue","?unregisterToken"]],
    receivers: ["FinalizationRegistry"]
  },
  {
    name: "register",
    signatures: [["tag","?options"]],
    receivers: ["PeriodicSyncManager"]
  },
  {
    name: "register",
    signatures: [["tag"]],
    receivers: ["SyncManager"]
  },
  {
    name: "register",
    signatures: [["configURL"]],
    receivers: ["IdentityProvider"]
  },
  {
    name: "getNotifications",
    signatures: [["?filter"]]
  },
  {
    name: "showNotification",
    signatures: [["title","?options"]]
  },
  {
    name: "unregister",
    signatures: [["unregisterToken"]],
    receivers: ["FinalizationRegistry"]
  },
  {
    name: "unregister",
    signatures: [["tag"]],
    receivers: ["PeriodicSyncManager"]
  },
  {
    name: "unregister",
    signatures: [["configURL"]],
    receivers: ["IdentityProvider"]
  },
  {
    name: "appendBuffer",
    signatures: [["data"]]
  },
  {
    name: "changeType",
    signatures: [["type"],["config"]]
  },
  {
    name: "speak",
    signatures: [["utterance"]]
  },
  {
    name: "key",
    signatures: [["index"]]
  },
  {
    name: "setItem",
    signatures: [["key","value"]]
  },
  {
    name: "initStorageEvent",
    signatures: [["type","?bubbles","?cancelable","?key","?oldValue","?newValue","?url","?storageArea"]]
  },
  {
    name: "matchMedium",
    signatures: [["?mediaquery"]]
  },
  {
    name: "decrypt",
    signatures: [["algorithm","key","data"]]
  },
  {
    name: "deriveBits",
    signatures: [["algorithm","baseKey","?length"]]
  },
  {
    name: "deriveKey",
    signatures: [["algorithm","baseKey","derivedKeyType","extractable","keyUsages"]]
  },
  {
    name: "digest",
    signatures: [["algorithm","data"]]
  },
  {
    name: "encrypt",
    signatures: [["algorithm","key","data"]]
  },
  {
    name: "exportKey",
    signatures: [["format","key"]]
  },
  {
    name: "generateKey",
    signatures: [["algorithm","extractable","keyUsages"]]
  },
  {
    name: "importKey",
    signatures: [["format","keyData","algorithm","extractable","keyUsages"]]
  },
  {
    name: "sign",
    signatures: [["algorithm","key","data"]],
    receivers: ["SubtleCrypto"]
  },
  {
    name: "sign",
    signatures: [["x"]],
    receivers: ["Math"]
  },
  {
    name: "sign",
    signatures: [["x","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "unwrapKey",
    signatures: [["format","wrappedKey","unwrappingKey","unwrapAlgorithm","unwrappedKeyAlgorithm","extractable","keyUsages"]]
  },
  {
    name: "verify",
    signatures: [["algorithm","key","signature","data"]]
  },
  {
    name: "wrapKey",
    signatures: [["format","key","wrappingKey","wrapAlgorithm"]]
  },
  {
    name: "splitText",
    signatures: [["offset"]]
  },
  {
    name: "encodeInto",
    signatures: [["source","destination"]]
  },
  {
    name: "initTextEvent",
    signatures: [["type","?bubbles","?cancelable","?view","?data"]]
  },
  {
    name: "addCue",
    signatures: [["cue"]]
  },
  {
    name: "removeCue",
    signatures: [["cue"]]
  },
  {
    name: "getCueById",
    signatures: [["id"]]
  },
  {
    name: "end",
    signatures: [["index"]],
    receivers: ["TimeRanges"]
  },
  {
    name: "initUIEvent",
    signatures: [["typeArg","?bubblesArg","?cancelableArg","?viewArg","?detailArg"],["type","?bubbles","?cancelable","?view","?detail"]]
  },
  {
    name: "getTranslatedShaderSource",
    signatures: [["shader"]]
  },
  {
    name: "drawBuffersWEBGL",
    signatures: [["buffers"]]
  },
  {
    name: "multiDrawArraysInstancedWEBGL",
    signatures: [["mode","firstsList","firstsOffset","countsList","countsOffset","instanceCountsList","instanceCountsOffset","drawcount"]]
  },
  {
    name: "multiDrawArraysWEBGL",
    signatures: [["mode","firstsList","firstsOffset","countsList","countsOffset","drawcount"]]
  },
  {
    name: "multiDrawElementsInstancedWEBGL",
    signatures: [["mode","countsList","countsOffset","type","offsetsList","offsetsOffset","instanceCountsList","instanceCountsOffset","drawcount"]]
  },
  {
    name: "multiDrawElementsWEBGL",
    signatures: [["mode","countsList","countsOffset","type","offsetsList","offsetsOffset","drawcount"]]
  },
  {
    name: "beginQuery",
    signatures: [["target","query"]]
  },
  {
    name: "beginTransformFeedback",
    signatures: [["primitiveMode"]]
  },
  {
    name: "bindBufferBase",
    signatures: [["target","index","buffer"]]
  },
  {
    name: "bindBufferRange",
    signatures: [["target","index","buffer","offset","size"]]
  },
  {
    name: "bindSampler",
    signatures: [["unit","sampler"]]
  },
  {
    name: "bindTransformFeedback",
    signatures: [["target","tf"],["target","feedback"]]
  },
  {
    name: "bindVertexArray",
    signatures: [["array"],["vertexArray"]]
  },
  {
    name: "blitFramebuffer",
    signatures: [["srcX0","srcY0","srcX1","srcY1","dstX0","dstY0","dstX1","dstY1","mask","filter"]]
  },
  {
    name: "clearBufferfi",
    signatures: [["buffer","drawbuffer","depth","stencil"]]
  },
  {
    name: "clearBufferfv",
    signatures: [["buffer","drawbuffer","values","?srcOffset"],["buffer","drawbuffer","value","?srcOffset"]]
  },
  {
    name: "clearBufferiv",
    signatures: [["buffer","drawbuffer","values","?srcOffset"],["buffer","drawbuffer","value","?srcOffset"]]
  },
  {
    name: "clearBufferuiv",
    signatures: [["buffer","drawbuffer","values","?srcOffset"],["buffer","drawbuffer","value","?srcOffset"]]
  },
  {
    name: "clientWaitSync",
    signatures: [["sync","flags","timeout"]]
  },
  {
    name: "compressedTexImage3D",
    signatures: [["target","level","internalformat","width","height","depth","border","imageSize","offset"],["target","level","internalformat","width","height","depth","border","srcData","?srcOffset","?srcLengthOverride"],["target","level","internalformat","width","height","depth","border","data","?srcOffset","?srcLengthOverride"]]
  },
  {
    name: "compressedTexSubImage3D",
    signatures: [["target","level","xoffset","yoffset","zoffset","width","height","depth","format","imageSize","offset"],["target","level","xoffset","yoffset","zoffset","width","height","depth","format","srcData","?srcOffset","?srcLengthOverride"],["target","level","xoffset","yoffset","zoffset","width","height","depth","format","data","?srcOffset","?srcLengthOverride"]]
  },
  {
    name: "copyBufferSubData",
    signatures: [["readTarget","writeTarget","readOffset","writeOffset","size"]]
  },
  {
    name: "copyTexSubImage3D",
    signatures: [["target","level","xoffset","yoffset","zoffset","x","y","width","height"]]
  },
  {
    name: "createSampler",
    signatures: [["?descriptor"]],
    receivers: ["GPUDevice"]
  },
  {
    name: "deleteQuery",
    signatures: [["query"]]
  },
  {
    name: "deleteSampler",
    signatures: [["sampler"]]
  },
  {
    name: "deleteSync",
    signatures: [["sync"]]
  },
  {
    name: "deleteTransformFeedback",
    signatures: [["tf"],["feedback"]]
  },
  {
    name: "deleteVertexArray",
    signatures: [["vertexArray"]]
  },
  {
    name: "drawArraysInstanced",
    signatures: [["mode","first","count","instanceCount"]]
  },
  {
    name: "drawBuffers",
    signatures: [["buffers"]]
  },
  {
    name: "drawElementsInstanced",
    signatures: [["mode","count","type","offset","instanceCount"]]
  },
  {
    name: "drawRangeElements",
    signatures: [["mode","start","end","count","type","offset"]]
  },
  {
    name: "endQuery",
    signatures: [["target"]]
  },
  {
    name: "fenceSync",
    signatures: [["condition","flags"]]
  },
  {
    name: "framebufferTextureLayer",
    signatures: [["target","attachment","texture","level","layer"]]
  },
  {
    name: "getActiveUniformBlockName",
    signatures: [["program","uniformBlockIndex"]]
  },
  {
    name: "getActiveUniformBlockParameter",
    signatures: [["program","uniformBlockIndex","pname"]]
  },
  {
    name: "getActiveUniforms",
    signatures: [["program","uniformIndices","pname"]]
  },
  {
    name: "getBufferSubData",
    signatures: [["target","srcByteOffset","dstBuffer","?dstOffset","?length"],["target","srcByteOffset","dstData","?dstOffset","?length"]]
  },
  {
    name: "getFragDataLocation",
    signatures: [["program","name"]]
  },
  {
    name: "getIndexedParameter",
    signatures: [["target","index"]]
  },
  {
    name: "getInternalformatParameter",
    signatures: [["target","internalformat","pname"]]
  },
  {
    name: "getQuery",
    signatures: [["target","pname"]]
  },
  {
    name: "getQueryParameter",
    signatures: [["query","pname"]]
  },
  {
    name: "getSamplerParameter",
    signatures: [["sampler","pname"]]
  },
  {
    name: "getSyncParameter",
    signatures: [["sync","pname"]]
  },
  {
    name: "getTransformFeedbackVarying",
    signatures: [["program","index"]]
  },
  {
    name: "getUniformBlockIndex",
    signatures: [["program","uniformBlockName"]]
  },
  {
    name: "getUniformIndices",
    signatures: [["program","uniformNames"]]
  },
  {
    name: "invalidateFramebuffer",
    signatures: [["target","attachments"]]
  },
  {
    name: "invalidateSubFramebuffer",
    signatures: [["target","attachments","x","y","width","height"]]
  },
  {
    name: "isQuery",
    signatures: [["query"]]
  },
  {
    name: "isSampler",
    signatures: [["sampler"]]
  },
  {
    name: "isSync",
    signatures: [["sync"]]
  },
  {
    name: "isTransformFeedback",
    signatures: [["tf"],["feedback"]]
  },
  {
    name: "isVertexArray",
    signatures: [["vertexArray"]]
  },
  {
    name: "readBuffer",
    signatures: [["src"],["mode"]]
  },
  {
    name: "renderbufferStorageMultisample",
    signatures: [["target","samples","internalformat","width","height"]]
  },
  {
    name: "samplerParameterf",
    signatures: [["sampler","pname","param"]]
  },
  {
    name: "samplerParameteri",
    signatures: [["sampler","pname","param"]]
  },
  {
    name: "texImage3D",
    signatures: [["target","level","internalformat","width","height","depth","border","format","type","pboOffset"],["target","level","internalformat","width","height","depth","border","format","type","source"],["target","level","internalformat","width","height","depth","border","format","type","srcData","?srcOffset"],["target","level","internalformat","width","height","depth","border","format","type","offset"],["target","level","internalformat","width","height","depth","border","format","type","data"],["target","level","internalformat","width","height","depth","border","format","type","image"],["target","level","internalformat","width","height","depth","border","format","type","canvas"],["target","level","internalformat","width","height","depth","border","format","type","offscreenCanvas"],["target","level","internalformat","width","height","depth","border","format","type","video"],["target","level","internalformat","width","height","depth","border","format","type","frame"],["target","level","internalformat","width","height","depth","border","format","type","bitmap"],["target","level","internalformat","width","height","depth","border","format","type","pixels","?srcOffset"]]
  },
  {
    name: "texStorage2D",
    signatures: [["target","levels","internalformat","width","height"]]
  },
  {
    name: "texStorage3D",
    signatures: [["target","levels","internalformat","width","height","depth"]]
  },
  {
    name: "texSubImage3D",
    signatures: [["target","level","xoffset","yoffset","zoffset","width","height","depth","format","type","pboOffset"],["target","level","xoffset","yoffset","zoffset","width","height","depth","format","type","source"],["target","level","xoffset","yoffset","zoffset","width","height","depth","format","type","offset"],["target","level","xoffset","yoffset","zoffset","width","height","depth","format","type","data"],["target","level","xoffset","yoffset","zoffset","width","height","depth","format","type","image"],["target","level","xoffset","yoffset","zoffset","width","height","depth","format","type","canvas"],["target","level","xoffset","yoffset","zoffset","width","height","depth","format","type","offscreenCanvas"],["target","level","xoffset","yoffset","zoffset","width","height","depth","format","type","video"],["target","level","xoffset","yoffset","zoffset","width","height","depth","format","type","frame"],["target","level","xoffset","yoffset","zoffset","width","height","depth","format","type","bitmap"],["target","level","xoffset","yoffset","zoffset","width","height","depth","format","type","srcData","?srcOffset"],["target","level","xoffset","yoffset","zoffset","width","height","depth","format","type","pixels","?srcOffset"]]
  },
  {
    name: "transformFeedbackVaryings",
    signatures: [["program","varyings","bufferMode"]]
  },
  {
    name: "uniform1ui",
    signatures: [["location","v0"]]
  },
  {
    name: "uniform1uiv",
    signatures: [["location","data","?srcOffset","?srcLength"],["location","v","?srcOffset","?srcLength"]]
  },
  {
    name: "uniform2ui",
    signatures: [["location","v0","v1"]]
  },
  {
    name: "uniform2uiv",
    signatures: [["location","data","?srcOffset","?srcLength"],["location","v","?srcOffset","?srcLength"]]
  },
  {
    name: "uniform3ui",
    signatures: [["location","v0","v1","v2"]]
  },
  {
    name: "uniform3uiv",
    signatures: [["location","data","?srcOffset","?srcLength"],["location","v","?srcOffset","?srcLength"]]
  },
  {
    name: "uniform4ui",
    signatures: [["location","v0","v1","v2","v3"]]
  },
  {
    name: "uniform4uiv",
    signatures: [["location","data","?srcOffset","?srcLength"],["location","v","?srcOffset","?srcLength"]]
  },
  {
    name: "uniformBlockBinding",
    signatures: [["program","uniformBlockIndex","uniformBlockBinding"]]
  },
  {
    name: "uniformMatrix2x3fv",
    signatures: [["location","transpose","data","?srcOffset","?srcLength"],["location","transpose","value","?srcOffset","?srcLength"]]
  },
  {
    name: "uniformMatrix2x4fv",
    signatures: [["location","transpose","data","?srcOffset","?srcLength"],["location","transpose","value","?srcOffset","?srcLength"]]
  },
  {
    name: "uniformMatrix3x2fv",
    signatures: [["location","transpose","data","?srcOffset","?srcLength"],["location","transpose","value","?srcOffset","?srcLength"]]
  },
  {
    name: "uniformMatrix3x4fv",
    signatures: [["location","transpose","data","?srcOffset","?srcLength"],["location","transpose","value","?srcOffset","?srcLength"]]
  },
  {
    name: "uniformMatrix4x2fv",
    signatures: [["location","transpose","data","?srcOffset","?srcLength"],["location","transpose","value","?srcOffset","?srcLength"]]
  },
  {
    name: "uniformMatrix4x3fv",
    signatures: [["location","transpose","data","?srcOffset","?srcLength"],["location","transpose","value","?srcOffset","?srcLength"]]
  },
  {
    name: "vertexAttribDivisor",
    signatures: [["index","divisor"]]
  },
  {
    name: "vertexAttribI4i",
    signatures: [["index","x","y","z","w"]]
  },
  {
    name: "vertexAttribI4iv",
    signatures: [["index","values"],["index","v"]]
  },
  {
    name: "vertexAttribI4ui",
    signatures: [["index","x","y","z","w"]]
  },
  {
    name: "vertexAttribI4uiv",
    signatures: [["index","values"],["index","v"]]
  },
  {
    name: "vertexAttribIPointer",
    signatures: [["index","size","type","stride","offset"]]
  },
  {
    name: "waitSync",
    signatures: [["sync","flags","timeout"]]
  },
  {
    name: "bufferData",
    signatures: [["target","size","usage"],["target","srcData","usage","?srcOffset","?length"]],
    receivers: ["WebGL2RenderingContextOverloads"]
  },
  {
    name: "bufferData",
    signatures: [["target","size","usage"],["target","data","usage"]],
    receivers: ["WebGLRenderingContextOverloads","WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "bufferData",
    signatures: [["target","srcData","usage","srcOffset","?length"]],
    receivers: ["WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "bufferSubData",
    signatures: [["target","dstByteOffset","srcData","?srcOffset","?length"]],
    receivers: ["WebGL2RenderingContextOverloads"]
  },
  {
    name: "bufferSubData",
    signatures: [["target","offset","data"]],
    receivers: ["WebGLRenderingContextOverloads","WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "bufferSubData",
    signatures: [["target","dstByteOffset","srcData","srcOffset","?length"]],
    receivers: ["WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "compressedTexImage2D",
    signatures: [["target","level","internalformat","width","height","border","imageSize","offset"],["target","level","internalformat","width","height","border","srcData","?srcOffset","?srcLengthOverride"]],
    receivers: ["WebGL2RenderingContextOverloads"]
  },
  {
    name: "compressedTexImage2D",
    signatures: [["target","level","internalformat","width","height","border","data"]],
    receivers: ["WebGLRenderingContextOverloads","WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "compressedTexImage2D",
    signatures: [["target","level","internalformat","width","height","border","imageSize","offset"],["target","level","internalformat","width","height","border","data","srcOffset","?srcLengthOverride"]],
    receivers: ["WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "compressedTexSubImage2D",
    signatures: [["target","level","xoffset","yoffset","width","height","format","imageSize","offset"],["target","level","xoffset","yoffset","width","height","format","srcData","?srcOffset","?srcLengthOverride"]],
    receivers: ["WebGL2RenderingContextOverloads"]
  },
  {
    name: "compressedTexSubImage2D",
    signatures: [["target","level","xoffset","yoffset","width","height","format","data"]],
    receivers: ["WebGLRenderingContextOverloads","WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "compressedTexSubImage2D",
    signatures: [["target","level","xoffset","yoffset","width","height","format","imageSize","offset"],["target","level","xoffset","yoffset","width","height","format","data","srcOffset","?srcLengthOverride"]],
    receivers: ["WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "readPixels",
    signatures: [["x","y","width","height","format","type","dstData","?dstOffset"],["x","y","width","height","format","type","offset"]],
    receivers: ["WebGL2RenderingContextOverloads"]
  },
  {
    name: "readPixels",
    signatures: [["x","y","width","height","format","type","pixels"]],
    receivers: ["WebGLRenderingContextOverloads","WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "readPixels",
    signatures: [["x","y","width","height","format","type","offset"],["x","y","width","height","format","type","dstData","offset"]],
    receivers: ["WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "texImage2D",
    signatures: [["target","level","internalformat","format","type","source"],["target","level","internalformat","width","height","border","format","type","pixels"],["target","level","internalformat","width","height","border","format","type","pboOffset"],["target","level","internalformat","width","height","border","format","type","source"],["target","level","internalformat","width","height","border","format","type","srcData","srcOffset"]],
    receivers: ["WebGL2RenderingContextOverloads"]
  },
  {
    name: "texImage2D",
    signatures: [["target","level","internalformat","format","type","source"],["target","level","internalformat","width","height","border","format","type","pixels"]],
    receivers: ["WebGLRenderingContextOverloads"]
  },
  {
    name: "texImage2D",
    signatures: [["target","level","internalformat","format","type","pixels"],["target","level","internalformat","format","type","image"],["target","level","internalformat","format","type","canvas"],["target","level","internalformat","format","type","offscreenCanvas"],["target","level","internalformat","format","type","video"],["target","level","internalformat","format","type","bitmap"],["target","level","internalformat","format","type","frame"],["target","level","internalformat","width","height","border","format","type","pixels"]],
    receivers: ["WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "texImage2D",
    signatures: [["target","level","internalformat","width","height","border","format","type","offset"],["target","level","internalformat","width","height","border","format","type","data"],["target","level","internalformat","width","height","border","format","type","image"],["target","level","internalformat","width","height","border","format","type","canvas"],["target","level","internalformat","width","height","border","format","type","offscreenCanvas"],["target","level","internalformat","width","height","border","format","type","video"],["target","level","internalformat","width","height","border","format","type","frame"],["target","level","internalformat","width","height","border","format","type","bitmap"],["target","level","internalformat","width","height","border","format","type","srcData","srcOffset"]],
    receivers: ["WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "texSubImage2D",
    signatures: [["target","level","xoffset","yoffset","format","type","source"],["target","level","xoffset","yoffset","width","height","format","type","pixels"],["target","level","xoffset","yoffset","width","height","format","type","pboOffset"],["target","level","xoffset","yoffset","width","height","format","type","source"],["target","level","xoffset","yoffset","width","height","format","type","srcData","srcOffset"]],
    receivers: ["WebGL2RenderingContextOverloads"]
  },
  {
    name: "texSubImage2D",
    signatures: [["target","level","xoffset","yoffset","format","type","source"],["target","level","xoffset","yoffset","width","height","format","type","pixels"]],
    receivers: ["WebGLRenderingContextOverloads"]
  },
  {
    name: "texSubImage2D",
    signatures: [["target","level","xoffset","yoffset","format","type","pixels"],["target","level","xoffset","yoffset","format","type","image"],["target","level","xoffset","yoffset","format","type","canvas"],["target","level","xoffset","yoffset","format","type","offscreenCanvas"],["target","level","xoffset","yoffset","format","type","video"],["target","level","xoffset","yoffset","format","type","bitmap"],["target","level","xoffset","yoffset","format","type","frame"],["target","level","xoffset","yoffset","width","height","format","type","pixels"]],
    receivers: ["WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "texSubImage2D",
    signatures: [["target","level","xoffset","yoffset","width","height","format","type","offset"],["target","level","xoffset","yoffset","width","height","format","type","data"],["target","level","xoffset","yoffset","width","height","format","type","image"],["target","level","xoffset","yoffset","width","height","format","type","canvas"],["target","level","xoffset","yoffset","width","height","format","type","offscreenCanvas"],["target","level","xoffset","yoffset","width","height","format","type","video"],["target","level","xoffset","yoffset","width","height","format","type","frame"],["target","level","xoffset","yoffset","width","height","format","type","bitmap"],["target","level","xoffset","yoffset","width","height","format","type","srcData","srcOffset"]],
    receivers: ["WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniform1fv",
    signatures: [["location","data","?srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextOverloads"]
  },
  {
    name: "uniform1fv",
    signatures: [["location","v"]],
    receivers: ["WebGLRenderingContextOverloads","WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniform1fv",
    signatures: [["location","v","srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniform1iv",
    signatures: [["location","data","?srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextOverloads"]
  },
  {
    name: "uniform1iv",
    signatures: [["location","v"]],
    receivers: ["WebGLRenderingContextOverloads","WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniform1iv",
    signatures: [["location","v","srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniform2fv",
    signatures: [["location","data","?srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextOverloads"]
  },
  {
    name: "uniform2fv",
    signatures: [["location","v"]],
    receivers: ["WebGLRenderingContextOverloads","WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniform2fv",
    signatures: [["location","v","srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniform2iv",
    signatures: [["location","data","?srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextOverloads"]
  },
  {
    name: "uniform2iv",
    signatures: [["location","v"]],
    receivers: ["WebGLRenderingContextOverloads","WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniform2iv",
    signatures: [["location","v","srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniform3fv",
    signatures: [["location","data","?srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextOverloads"]
  },
  {
    name: "uniform3fv",
    signatures: [["location","v"]],
    receivers: ["WebGLRenderingContextOverloads","WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniform3fv",
    signatures: [["location","v","srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniform3iv",
    signatures: [["location","data","?srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextOverloads"]
  },
  {
    name: "uniform3iv",
    signatures: [["location","v"]],
    receivers: ["WebGLRenderingContextOverloads","WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniform3iv",
    signatures: [["location","v","srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniform4fv",
    signatures: [["location","data","?srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextOverloads"]
  },
  {
    name: "uniform4fv",
    signatures: [["location","v"]],
    receivers: ["WebGLRenderingContextOverloads","WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniform4fv",
    signatures: [["location","v","srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniform4iv",
    signatures: [["location","data","?srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextOverloads"]
  },
  {
    name: "uniform4iv",
    signatures: [["location","v"]],
    receivers: ["WebGLRenderingContextOverloads","WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniform4iv",
    signatures: [["location","v","srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniformMatrix2fv",
    signatures: [["location","transpose","data","?srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextOverloads"]
  },
  {
    name: "uniformMatrix2fv",
    signatures: [["location","transpose","value"]],
    receivers: ["WebGLRenderingContextOverloads"]
  },
  {
    name: "uniformMatrix2fv",
    signatures: [["location","transpose","array"]],
    receivers: ["WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniformMatrix2fv",
    signatures: [["location","transpose","array","srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniformMatrix3fv",
    signatures: [["location","transpose","data","?srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextOverloads"]
  },
  {
    name: "uniformMatrix3fv",
    signatures: [["location","transpose","value"]],
    receivers: ["WebGLRenderingContextOverloads"]
  },
  {
    name: "uniformMatrix3fv",
    signatures: [["location","transpose","array"]],
    receivers: ["WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniformMatrix3fv",
    signatures: [["location","transpose","array","srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniformMatrix4fv",
    signatures: [["location","transpose","data","?srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextOverloads"]
  },
  {
    name: "uniformMatrix4fv",
    signatures: [["location","transpose","value"]],
    receivers: ["WebGLRenderingContextOverloads"]
  },
  {
    name: "uniformMatrix4fv",
    signatures: [["location","transpose","array"]],
    receivers: ["WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "uniformMatrix4fv",
    signatures: [["location","transpose","array","srcOffset","?srcLength"]],
    receivers: ["WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "activeTexture",
    signatures: [["texture"]]
  },
  {
    name: "attachShader",
    signatures: [["program","shader"]]
  },
  {
    name: "bindAttribLocation",
    signatures: [["program","index","name"]]
  },
  {
    name: "bindBuffer",
    signatures: [["target","buffer"]]
  },
  {
    name: "bindFramebuffer",
    signatures: [["target","framebuffer"]]
  },
  {
    name: "bindRenderbuffer",
    signatures: [["target","renderbuffer"]]
  },
  {
    name: "bindTexture",
    signatures: [["target","texture"]]
  },
  {
    name: "blendColor",
    signatures: [["red","green","blue","alpha"]]
  },
  {
    name: "blendEquation",
    signatures: [["mode"]]
  },
  {
    name: "blendEquationSeparate",
    signatures: [["modeRGB","modeAlpha"]]
  },
  {
    name: "blendFunc",
    signatures: [["sfactor","dfactor"]]
  },
  {
    name: "blendFuncSeparate",
    signatures: [["srcRGB","dstRGB","srcAlpha","dstAlpha"]]
  },
  {
    name: "checkFramebufferStatus",
    signatures: [["target"]]
  },
  {
    name: "clearColor",
    signatures: [["red","green","blue","alpha"]]
  },
  {
    name: "clearDepth",
    signatures: [["depth"]]
  },
  {
    name: "clearStencil",
    signatures: [["s"]]
  },
  {
    name: "colorMask",
    signatures: [["red","green","blue","alpha"]]
  },
  {
    name: "compileShader",
    signatures: [["shader"]]
  },
  {
    name: "copyTexImage2D",
    signatures: [["target","level","internalformat","x","y","width","height","border"]]
  },
  {
    name: "copyTexSubImage2D",
    signatures: [["target","level","xoffset","yoffset","x","y","width","height"]]
  },
  {
    name: "createShader",
    signatures: [["type"]]
  },
  {
    name: "createTexture",
    signatures: [["descriptor"]],
    receivers: ["GPUDevice"]
  },
  {
    name: "cullFace",
    signatures: [["mode"]]
  },
  {
    name: "deleteBuffer",
    signatures: [["buffer"]]
  },
  {
    name: "deleteFramebuffer",
    signatures: [["framebuffer"]]
  },
  {
    name: "deleteProgram",
    signatures: [["program"]]
  },
  {
    name: "deleteRenderbuffer",
    signatures: [["renderbuffer"]]
  },
  {
    name: "deleteShader",
    signatures: [["shader"]]
  },
  {
    name: "deleteTexture",
    signatures: [["texture"]]
  },
  {
    name: "depthFunc",
    signatures: [["func"]]
  },
  {
    name: "depthMask",
    signatures: [["flag"]]
  },
  {
    name: "depthRange",
    signatures: [["zNear","zFar"]]
  },
  {
    name: "detachShader",
    signatures: [["program","shader"]]
  },
  {
    name: "disableVertexAttribArray",
    signatures: [["index"]]
  },
  {
    name: "drawArrays",
    signatures: [["mode","first","count"]]
  },
  {
    name: "drawElements",
    signatures: [["mode","count","type","offset"]]
  },
  {
    name: "enableVertexAttribArray",
    signatures: [["index"]]
  },
  {
    name: "framebufferRenderbuffer",
    signatures: [["target","attachment","renderbuffertarget","renderbuffer"]]
  },
  {
    name: "framebufferTexture2D",
    signatures: [["target","attachment","textarget","texture","level"]]
  },
  {
    name: "frontFace",
    signatures: [["mode"]]
  },
  {
    name: "generateMipmap",
    signatures: [["target"]]
  },
  {
    name: "getActiveAttrib",
    signatures: [["program","index"]]
  },
  {
    name: "getActiveUniform",
    signatures: [["program","index"]]
  },
  {
    name: "getAttachedShaders",
    signatures: [["program"]]
  },
  {
    name: "getAttribLocation",
    signatures: [["program","name"]]
  },
  {
    name: "getBufferParameter",
    signatures: [["target","pname"]]
  },
  {
    name: "getExtension",
    signatures: [["extensionName"],["name"]]
  },
  {
    name: "getFramebufferAttachmentParameter",
    signatures: [["target","attachment","pname"]]
  },
  {
    name: "getParameter",
    signatures: [["pname"]],
    receivers: ["WebGLRenderingContextWebGPU","WebGLRenderingContext","WebGL2RenderingContextBase","WebGL2RenderingContextWebGPU","WebGL2RenderingContext"]
  },
  {
    name: "getParameter",
    signatures: [["namespaceURI","localName"]],
    receivers: ["XSLTProcessor"]
  },
  {
    name: "getProgramInfoLog",
    signatures: [["program"]]
  },
  {
    name: "getProgramParameter",
    signatures: [["program","pname"]]
  },
  {
    name: "getRenderbufferParameter",
    signatures: [["target","pname"]]
  },
  {
    name: "getShaderInfoLog",
    signatures: [["shader"]]
  },
  {
    name: "getShaderParameter",
    signatures: [["shader","pname"]]
  },
  {
    name: "getShaderPrecisionFormat",
    signatures: [["shadertype","precisiontype"]]
  },
  {
    name: "getShaderSource",
    signatures: [["shader"]]
  },
  {
    name: "getTexParameter",
    signatures: [["target","pname"]]
  },
  {
    name: "getUniform",
    signatures: [["program","location"]]
  },
  {
    name: "getUniformLocation",
    signatures: [["program","name"]]
  },
  {
    name: "getVertexAttrib",
    signatures: [["index","pname"]]
  },
  {
    name: "getVertexAttribOffset",
    signatures: [["index","pname"]]
  },
  {
    name: "hint",
    signatures: [["target","mode"]]
  },
  {
    name: "isBuffer",
    signatures: [["buffer"]]
  },
  {
    name: "isEnabled",
    signatures: [["cap"]]
  },
  {
    name: "isFramebuffer",
    signatures: [["framebuffer"]]
  },
  {
    name: "isProgram",
    signatures: [["program"]]
  },
  {
    name: "isRenderbuffer",
    signatures: [["renderbuffer"]]
  },
  {
    name: "isShader",
    signatures: [["shader"]]
  },
  {
    name: "isTexture",
    signatures: [["texture"]]
  },
  {
    name: "lineWidth",
    signatures: [["width"]]
  },
  {
    name: "linkProgram",
    signatures: [["program"]]
  },
  {
    name: "pixelStorei",
    signatures: [["pname","param"]]
  },
  {
    name: "polygonOffset",
    signatures: [["factor","units"]]
  },
  {
    name: "renderbufferStorage",
    signatures: [["target","internalformat","width","height"]]
  },
  {
    name: "sampleCoverage",
    signatures: [["value","invert"]]
  },
  {
    name: "scissor",
    signatures: [["x","y","width","height"]]
  },
  {
    name: "shaderSource",
    signatures: [["shader","source"],["shader","string"]]
  },
  {
    name: "stencilFunc",
    signatures: [["func","ref","mask"]]
  },
  {
    name: "stencilFuncSeparate",
    signatures: [["face","func","ref","mask"]]
  },
  {
    name: "stencilMask",
    signatures: [["mask"]]
  },
  {
    name: "stencilMaskSeparate",
    signatures: [["face","mask"]]
  },
  {
    name: "stencilOp",
    signatures: [["fail","zfail","zpass"]]
  },
  {
    name: "stencilOpSeparate",
    signatures: [["face","fail","zfail","zpass"]]
  },
  {
    name: "texParameterf",
    signatures: [["target","pname","param"]]
  },
  {
    name: "texParameteri",
    signatures: [["target","pname","param"]]
  },
  {
    name: "uniform1f",
    signatures: [["location","x"]]
  },
  {
    name: "uniform1i",
    signatures: [["location","x"]]
  },
  {
    name: "uniform2f",
    signatures: [["location","x","y"]]
  },
  {
    name: "uniform2i",
    signatures: [["location","x","y"]]
  },
  {
    name: "uniform3f",
    signatures: [["location","x","y","z"]]
  },
  {
    name: "uniform3i",
    signatures: [["location","x","y","z"]]
  },
  {
    name: "uniform4f",
    signatures: [["location","x","y","z","w"]]
  },
  {
    name: "uniform4i",
    signatures: [["location","x","y","z","w"]]
  },
  {
    name: "useProgram",
    signatures: [["program"]]
  },
  {
    name: "validateProgram",
    signatures: [["program"]]
  },
  {
    name: "vertexAttrib1f",
    signatures: [["index","x"],["indx","x"]]
  },
  {
    name: "vertexAttrib1fv",
    signatures: [["index","values"],["indx","values"]]
  },
  {
    name: "vertexAttrib2f",
    signatures: [["index","x","y"],["indx","x","y"]]
  },
  {
    name: "vertexAttrib2fv",
    signatures: [["index","values"],["indx","values"]]
  },
  {
    name: "vertexAttrib3f",
    signatures: [["index","x","y","z"],["indx","x","y","z"]]
  },
  {
    name: "vertexAttrib3fv",
    signatures: [["index","values"],["indx","values"]]
  },
  {
    name: "vertexAttrib4f",
    signatures: [["index","x","y","z","w"],["indx","x","y","z","w"]]
  },
  {
    name: "vertexAttrib4fv",
    signatures: [["index","values"],["indx","values"]]
  },
  {
    name: "vertexAttribPointer",
    signatures: [["index","size","type","normalized","stride","offset"],["indx","size","type","normalized","stride","offset"]]
  },
  {
    name: "viewport",
    signatures: [["x","y","width","height"]]
  },
  {
    name: "createBidirectionalStream",
    signatures: [["?options"]]
  },
  {
    name: "createUnidirectionalStream",
    signatures: [["?options"]]
  },
  {
    name: "alert",
    signatures: [["?message"]]
  },
  {
    name: "cancelIdleCallback",
    signatures: [["handle"]]
  },
  {
    name: "confirm",
    signatures: [["?message"]]
  },
  {
    name: "getComputedStyle",
    signatures: [["elt","?pseudoElt"]]
  },
  {
    name: "matchMedia",
    signatures: [["query"]]
  },
  {
    name: "moveBy",
    signatures: [["x","y"]]
  },
  {
    name: "requestIdleCallback",
    signatures: [["callback","?options"]]
  },
  {
    name: "resizeBy",
    signatures: [["x","y"]]
  },
  {
    name: "resizeTo",
    signatures: [["width","height"],["x","y"]]
  },
  {
    name: "atob",
    signatures: [["data"]],
    receivers: ["Window","WorkerGlobalScope"]
  },
  {
    name: "atob",
    signatures: [["atob"]],
    receivers: ["Window","ShadowRealmGlobalScope","WorkerGlobalScope"]
  },
  {
    name: "btoa",
    signatures: [["data"]],
    receivers: ["Window","WorkerGlobalScope"]
  },
  {
    name: "btoa",
    signatures: [["btoa"]],
    receivers: ["Window","ShadowRealmGlobalScope","WorkerGlobalScope"]
  },
  {
    name: "clearInterval",
    signatures: [["id"],["?handle"]],
    receivers: ["Window","WorkerGlobalScope"]
  },
  {
    name: "clearInterval",
    signatures: [["id"]],
    receivers: ["Window"]
  },
  {
    name: "clearTimeout",
    signatures: [["id"],["?handle"]],
    receivers: ["Window","WorkerGlobalScope"]
  },
  {
    name: "clearTimeout",
    signatures: [["id"]],
    receivers: ["Window"]
  },
  {
    name: "createImageBitmap",
    signatures: [["image","?options"],["image","sx","sy","sw","sh","?options"]],
    receivers: ["Window","WorkerGlobalScope"]
  },
  {
    name: "createImageBitmap",
    signatures: [["image","?options"],["imageBitmap","?options"],["image","sx","sy","sw","sh","?options"],["imageBitmap","sx","sy","sw","sh","?options"]],
    receivers: ["Window"]
  },
  {
    name: "createImageBitmap",
    signatures: [["imageBitmap","?options"],["imageBitmap","sx","sy","sw","sh","?options"]],
    receivers: ["WorkerGlobalScope"]
  },
  {
    name: "fetch",
    signatures: [["input","?init"]],
    receivers: ["Window","WorkerGlobalScope"]
  },
  {
    name: "fetch",
    signatures: [["id","requests","?options"]],
    receivers: ["BackgroundFetchManager"]
  },
  {
    name: "queueMicrotask",
    signatures: [["callback"]]
  },
  {
    name: "reportError",
    signatures: [["e"]]
  },
  {
    name: "setInterval",
    signatures: [["handler","?timeout","...arguments"]]
  },
  {
    name: "setTimeout",
    signatures: [["handler","?timeout","...arguments"]]
  },
  {
    name: "structuredClone",
    signatures: [["value","?options"]]
  },
  {
    name: "addModule",
    signatures: [["moduleURL","?options"]]
  },
  {
    name: "getResponseHeader",
    signatures: [["name"]]
  },
  {
    name: "overrideMimeType",
    signatures: [["mime"]]
  },
  {
    name: "setRequestHeader",
    signatures: [["name","value"]]
  },
  {
    name: "serializeToString",
    signatures: [["root"]]
  },
  {
    name: "createExpression",
    signatures: [["expression","?resolver"]]
  },
  {
    name: "createNSResolver",
    signatures: [["nodeResolver"]]
  },
  {
    name: "evaluate",
    signatures: [["expression","contextNode","?resolver","?type","?result"]],
    receivers: ["XPathEvaluatorBase"]
  },
  {
    name: "evaluate",
    signatures: [["contextNode","?type","?result"],["contextNode","?type","?inResult"]],
    receivers: ["XPathExpression"]
  },
  {
    name: "evaluate",
    signatures: [["expression","contextNode","?resolver","?type","?inResult"]],
    receivers: ["Document","XPathEvaluator"]
  },
  {
    name: "snapshotItem",
    signatures: [["index"]]
  },
  {
    name: "importStylesheet",
    signatures: [["style"]]
  },
  {
    name: "removeParameter",
    signatures: [["namespaceURI","localName"]]
  },
  {
    name: "setParameter",
    signatures: [["namespaceURI","localName","value"]]
  },
  {
    name: "transformToDocument",
    signatures: [["source"]]
  },
  {
    name: "transformToFragment",
    signatures: [["source","output"]]
  },
  {
    name: "assert",
    signatures: [["?condition","...data"]]
  },
  {
    name: "countReset",
    signatures: [["?label"]]
  },
  {
    name: "debug",
    signatures: [["...data"]]
  },
  {
    name: "dir",
    signatures: [["?item","?options"]]
  },
  {
    name: "dirxml",
    signatures: [["...data"]]
  },
  {
    name: "group",
    signatures: [["...data"]]
  },
  {
    name: "groupCollapsed",
    signatures: [["...data"]]
  },
  {
    name: "info",
    signatures: [["...data"]]
  },
  {
    name: "table",
    signatures: [["?tabularData","?properties"]]
  },
  {
    name: "time",
    signatures: [["?label"]]
  },
  {
    name: "timeEnd",
    signatures: [["?label"]]
  },
  {
    name: "timeLog",
    signatures: [["?label","...data"]]
  },
  {
    name: "timeStamp",
    signatures: [["?label"]]
  },
  {
    name: "trace",
    signatures: [["...data"]]
  },
  {
    name: "warn",
    signatures: [["...data"]]
  },
  {
    name: "importScripts",
    signatures: [["...urls"]]
  },
  {
    name: "Write",
    signatures: [["s"]]
  },
  {
    name: "WriteLine",
    signatures: [["s"]]
  },
  {
    name: "WriteBlankLines",
    signatures: [["intLines"]]
  },
  {
    name: "Read",
    signatures: [["characters"]]
  },
  {
    name: "Skip",
    signatures: [["characters"]]
  },
  {
    name: "lbound",
    signatures: [["?dimension"]]
  },
  {
    name: "ubound",
    signatures: [["?dimension"]]
  },
  {
    name: "toArray",
    signatures: [["?options"]],
    receivers: ["Observable"]
  },
  {
    name: "next",
    signatures: [["...undefined"]],
    receivers: ["Generator","Iterator","AsyncIterator","AsyncGenerator"]
  },
  {
    name: "next",
    signatures: [["result"]],
    receivers: ["Subscriber"]
  },
  {
    name: "return",
    signatures: [["value"]],
    receivers: ["Generator","AsyncGenerator"]
  },
  {
    name: "return",
    signatures: [["?value"]],
    receivers: ["Iterator","AsyncIterator"]
  },
  {
    name: "throw",
    signatures: [["e"]],
    receivers: ["Generator","AsyncGenerator"]
  },
  {
    name: "throw",
    signatures: [["?e"]],
    receivers: ["Iterator","AsyncIterator"]
  },
  {
    name: "entries",
    signatures: [["o"]],
    receivers: ["ObjectConstructor"]
  },
  {
    name: "values",
    signatures: [["o"]],
    receivers: ["ObjectConstructor"]
  },
  {
    name: "values",
    signatures: [["?options"]],
    receivers: ["ReadableStream"]
  },
  {
    name: "all",
    signatures: [["values"]]
  },
  {
    name: "race",
    signatures: [["values"]]
  },
  {
    name: "reject",
    signatures: [["?reason"]]
  },
  {
    name: "construct",
    signatures: [["target","argArray","newTarget"]]
  },
  {
    name: "deleteProperty",
    signatures: [["target","p"]]
  },
  {
    name: "ownKeys",
    signatures: [["target"]]
  },
  {
    name: "setPrototypeOf",
    signatures: [["target","v"]],
    receivers: ["ProxyHandler"]
  },
  {
    name: "setPrototypeOf",
    signatures: [["o","proto"]],
    receivers: ["ObjectConstructor"]
  },
  {
    name: "revocable",
    signatures: [["target","handler"]]
  },
  {
    name: "for",
    signatures: [["key"]]
  },
  {
    name: "keyFor",
    signatures: [["sym"]]
  },
  {
    name: "getOwnPropertyDescriptors",
    signatures: [["o"]]
  },
  {
    name: "and",
    signatures: [["typedArray","index","value"]]
  },
  {
    name: "compareExchange",
    signatures: [["typedArray","index","expectedValue","replacementValue"]]
  },
  {
    name: "exchange",
    signatures: [["typedArray","index","value"]]
  },
  {
    name: "isLockFree",
    signatures: [["size"]]
  },
  {
    name: "or",
    signatures: [["typedArray","index","value"]]
  },
  {
    name: "wait",
    signatures: [["typedArray","index","value","?timeout"]]
  },
  {
    name: "notify",
    signatures: [["typedArray","index","?count"]]
  },
  {
    name: "xor",
    signatures: [["typedArray","index","value"]]
  },
  {
    name: "padStart",
    signatures: [["maxLength","?fillString"]]
  },
  {
    name: "padEnd",
    signatures: [["maxLength","?fillString"]]
  },
  {
    name: "finally",
    signatures: [["?onfinally"]],
    receivers: ["Promise"]
  },
  {
    name: "finally",
    signatures: [["callback"]],
    receivers: ["Observable"]
  },
  {
    name: "fromEntries",
    signatures: [["entries"]]
  },
  {
    name: "allSettled",
    signatures: [["values"]]
  },
  {
    name: "any",
    signatures: [["values"]],
    receivers: ["PromiseConstructor"]
  },
  {
    name: "any",
    signatures: [["signals"]],
    receivers: ["AbortSignal"]
  },
  {
    name: "any",
    signatures: [["signals","?init"]],
    receivers: ["TaskSignal"]
  },
  {
    name: "replaceAll",
    signatures: [["searchValue","replaceValue"],["searchValue","replacer"]]
  },
  {
    name: "hasOwn",
    signatures: [["o","v"]]
  },
  {
    name: "at",
    signatures: [["index"]]
  },
  {
    name: "groupBy",
    signatures: [["items","keySelector"]]
  },
  {
    name: "waitAsync",
    signatures: [["typedArray","index","value","?timeout"]]
  },
  {
    name: "grow",
    signatures: [["?newByteLength"]]
  },
  {
    name: "use",
    signatures: [["value"]]
  },
  {
    name: "adopt",
    signatures: [["value","onDispose"]],
    receivers: ["DisposableStack"]
  },
  {
    name: "adopt",
    signatures: [["value","onDisposeAsync"]],
    receivers: ["AsyncDisposableStack"]
  },
  {
    name: "defer",
    signatures: [["onDispose"]],
    receivers: ["DisposableStack"]
  },
  {
    name: "defer",
    signatures: [["onDisposeAsync"]],
    receivers: ["AsyncDisposableStack"]
  },
  {
    name: "move",
    signatures: [["new_entry_name"],["destination_directory","?new_entry_name"]],
    receivers: ["FileSystemFileHandle","FileSystemHandle"]
  },
  {
    name: "try",
    signatures: [["callbackFn","...args"]]
  },
  {
    name: "findLast",
    signatures: [["predicate","?thisArg"]]
  },
  {
    name: "findLastIndex",
    signatures: [["predicate","?thisArg"]]
  },
  {
    name: "toSorted",
    signatures: [["?compareFn"]]
  },
  {
    name: "with",
    signatures: [["index","value"]]
  },
  {
    name: "f16round",
    signatures: [["x"]]
  },
  {
    name: "getFloat16",
    signatures: [["byteOffset","?littleEndian"]]
  },
  {
    name: "setFloat16",
    signatures: [["byteOffset","value","?littleEndian"]]
  },
  {
    name: "addInitializer",
    signatures: [["initializer"]]
  },
  {
    name: "init",
    signatures: [["value"]]
  },
  {
    name: "clz32",
    signatures: [["x"]]
  },
  {
    name: "imul",
    signatures: [["x","y"]]
  },
  {
    name: "log10",
    signatures: [["x"]]
  },
  {
    name: "log2",
    signatures: [["x"]]
  },
  {
    name: "log1p",
    signatures: [["x"]]
  },
  {
    name: "expm1",
    signatures: [["x"]]
  },
  {
    name: "cosh",
    signatures: [["x"]]
  },
  {
    name: "sinh",
    signatures: [["x"]]
  },
  {
    name: "tanh",
    signatures: [["x"]],
    receivers: ["Math"]
  },
  {
    name: "tanh",
    signatures: [["input","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "acosh",
    signatures: [["x"]]
  },
  {
    name: "asinh",
    signatures: [["x"]]
  },
  {
    name: "atanh",
    signatures: [["x"]]
  },
  {
    name: "hypot",
    signatures: [["...values"]]
  },
  {
    name: "trunc",
    signatures: [["x"]]
  },
  {
    name: "fround",
    signatures: [["x"]]
  },
  {
    name: "cbrt",
    signatures: [["x"]]
  },
  {
    name: "isInteger",
    signatures: [["number"]]
  },
  {
    name: "isSafeInteger",
    signatures: [["number"]]
  },
  {
    name: "getOwnPropertySymbols",
    signatures: [["o"]]
  },
  {
    name: "is",
    signatures: [["value1","value2"]]
  },
  {
    name: "codePointAt",
    signatures: [["pos"]]
  },
  {
    name: "endsWith",
    signatures: [["searchString","?endPosition"]]
  },
  {
    name: "repeat",
    signatures: [["count"]]
  },
  {
    name: "startsWith",
    signatures: [["searchString","?position"]]
  },
  {
    name: "anchor",
    signatures: [["name"]]
  },
  {
    name: "fontcolor",
    signatures: [["color"]]
  },
  {
    name: "fontsize",
    signatures: [["size"]]
  },
  {
    name: "link",
    signatures: [["url"]]
  },
  {
    name: "fromCodePoint",
    signatures: [["...codePoints"]]
  },
  {
    name: "raw",
    signatures: [["template","...substitutions"]]
  },
  {
    name: "flatMap",
    signatures: [["callback","?thisArg"]],
    receivers: ["ReadonlyArray","Array"]
  },
  {
    name: "flatMap",
    signatures: [["mapper"]],
    receivers: ["Observable"]
  },
  {
    name: "flat",
    signatures: [["?depth"]]
  },
  {
    name: "asIntN",
    signatures: [["bits","int"]]
  },
  {
    name: "asUintN",
    signatures: [["bits","int"]]
  },
  {
    name: "getBigInt64",
    signatures: [["byteOffset","?littleEndian"]]
  },
  {
    name: "getBigUint64",
    signatures: [["byteOffset","?littleEndian"]]
  },
  {
    name: "setBigInt64",
    signatures: [["byteOffset","value","?littleEndian"]]
  },
  {
    name: "setBigUint64",
    signatures: [["byteOffset","value","?littleEndian"]]
  },
  {
    name: "toSpliced",
    signatures: [["start","?deleteCount","...items"]]
  },
  {
    name: "resize",
    signatures: [["?newByteLength"]]
  },
  {
    name: "transfer",
    signatures: [["?newByteLength"]]
  },
  {
    name: "transferToFixedLength",
    signatures: [["?newByteLength"]]
  },
  {
    name: "fromAsync",
    signatures: [["iterableOrArrayLike","?mapFn","?thisArg"]]
  },
  {
    name: "union",
    signatures: [["other"]]
  },
  {
    name: "intersection",
    signatures: [["other"]]
  },
  {
    name: "difference",
    signatures: [["other"]]
  },
  {
    name: "symmetricDifference",
    signatures: [["other"]]
  },
  {
    name: "isSubsetOf",
    signatures: [["other"]]
  },
  {
    name: "isSupersetOf",
    signatures: [["other"]]
  },
  {
    name: "isDisjointFrom",
    signatures: [["other"]]
  },
  {
    name: "openWindow",
    signatures: [["url"]]
  },
  {
    name: "waitUntil",
    signatures: [["f"]]
  },
  {
    name: "respondWith",
    signatures: [["r"]],
    receivers: ["FetchEvent"]
  },
  {
    name: "respondWith",
    signatures: [["paymentAbortedResponse"]],
    receivers: ["AbortPaymentEvent"]
  },
  {
    name: "respondWith",
    signatures: [["canMakePaymentResponse"]],
    receivers: ["CanMakePaymentEvent"]
  },
  {
    name: "respondWith",
    signatures: [["response"]],
    receivers: ["PaymentRequestEvent"]
  },
  {
    name: "createSyncAccessHandle",
    signatures: [["?options"]]
  },
  {
    name: "generateKeyFrame",
    signatures: [["?rid"]]
  },
  {
    name: "navigate",
    signatures: [["url"]],
    receivers: ["WindowClient"]
  },
  {
    name: "navigate",
    signatures: [["url","?options"]],
    receivers: ["Navigation"]
  },
  {
    name: "AnimationTrigger",
    signatures: [["?options"]]
  },
  {
    name: "addAnimation",
    signatures: [["animation"]]
  },
  {
    name: "removeAnimation",
    signatures: [["animation"]]
  },
  {
    name: "Animation",
    signatures: [["?effect","?timeline"]]
  },
  {
    name: "DocumentTimeline",
    signatures: [["?options"]]
  },
  {
    name: "KeyframeEffect",
    signatures: [["source"],["target","keyframes","?options"]]
  },
  {
    name: "ScrollTimeline",
    signatures: [["?options"]]
  },
  {
    name: "ViewTimeline",
    signatures: [["?options"]]
  },
  {
    name: "",
    signatures: [["index"]],
    receivers: ["DataTransferItemList","CSSKeyframesRule","CSSNumericArray","Window","HTMLFormControlsCollection","RadioNodeList","HTMLAllCollection","AudioTrackList","TextTrackCueList","TextTrackList","VideoTrackList","SourceBufferList","TrackDefaultList","ImageTrackList","XRInputSourceArray"]
  },
  {
    name: "",
    signatures: [["name"],["property","?propertyValue"]],
    receivers: ["CSSStyleDeclaration"]
  },
  {
    name: "",
    signatures: [["index","?val"]],
    receivers: ["CSSTransformValue","CSSUnparsedValue"]
  },
  {
    name: "",
    signatures: [["name"]],
    receivers: ["StyleSheetList","WindowProperties"]
  },
  {
    name: "",
    signatures: [["name","?value"]],
    receivers: ["DOMStringMap","HTMLEmbedElement","HTMLObjectElement"]
  },
  {
    name: "",
    signatures: [["index"],["name"]],
    receivers: ["HTMLFormElement"]
  },
  {
    name: "",
    signatures: [["index","?option"],["name"]],
    receivers: ["HTMLOptionsCollection"]
  },
  {
    name: "",
    signatures: [["index","option"]],
    receivers: ["HTMLSelectElement"]
  },
  {
    name: "",
    signatures: [["index","newItem"]],
    receivers: ["SVGLengthList","SVGNumberList","SVGPointList","SVGStringList","SVGTransformList"]
  },
  {
    name: "CSSStyleSheet",
    signatures: [["?options"]]
  },
  {
    name: "CSSHSL",
    signatures: [["h","s","l","?alpha"]]
  },
  {
    name: "CSSHWB",
    signatures: [["h","w","b","?alpha"]]
  },
  {
    name: "CSSKeywordValue",
    signatures: [["keyword"]]
  },
  {
    name: "CSSMathClamp",
    signatures: [["lower","value","upper"]]
  },
  {
    name: "CSSMathInvert",
    signatures: [["arg"]]
  },
  {
    name: "CSSMathMax",
    signatures: [["...args"]]
  },
  {
    name: "CSSMathMin",
    signatures: [["...args"]]
  },
  {
    name: "CSSMathNegate",
    signatures: [["arg"]]
  },
  {
    name: "CSSMathProduct",
    signatures: [["...args"]]
  },
  {
    name: "CSSMathSum",
    signatures: [["...args"]]
  },
  {
    name: "CSSMatrixComponent",
    signatures: [["matrix","?options"]]
  },
  {
    name: "CSSPerspective",
    signatures: [["length"]]
  },
  {
    name: "CSSPositionValue",
    signatures: [["x","y"]]
  },
  {
    name: "CSSRGB",
    signatures: [["r","g","b","?alpha"]]
  },
  {
    name: "CSSRotate",
    signatures: [["angleValue"],["x","y","z","angle"]]
  },
  {
    name: "CSSScale",
    signatures: [["x","y","?z"]]
  },
  {
    name: "CSSSkewX",
    signatures: [["ax"]]
  },
  {
    name: "CSSSkewY",
    signatures: [["ay"]]
  },
  {
    name: "CSSSkew",
    signatures: [["ax","ay"]]
  },
  {
    name: "parseAll",
    signatures: [["property","cssText"]]
  },
  {
    name: "CSSTransformValue",
    signatures: [["transforms"]]
  },
  {
    name: "CSSTranslate",
    signatures: [["x","y","?z"]]
  },
  {
    name: "CSSUnitValue",
    signatures: [["value","unit"]]
  },
  {
    name: "number",
    signatures: [["value"]]
  },
  {
    name: "percent",
    signatures: [["value"]]
  },
  {
    name: "em",
    signatures: [["value"]]
  },
  {
    name: "rem",
    signatures: [["value"]]
  },
  {
    name: "ex",
    signatures: [["value"]]
  },
  {
    name: "rex",
    signatures: [["value"]]
  },
  {
    name: "ch",
    signatures: [["value"]]
  },
  {
    name: "rch",
    signatures: [["value"]]
  },
  {
    name: "ic",
    signatures: [["value"]]
  },
  {
    name: "ric",
    signatures: [["value"]]
  },
  {
    name: "lh",
    signatures: [["value"]]
  },
  {
    name: "rlh",
    signatures: [["value"]]
  },
  {
    name: "cap",
    signatures: [["value"]]
  },
  {
    name: "rcap",
    signatures: [["value"]]
  },
  {
    name: "vw",
    signatures: [["value"]]
  },
  {
    name: "vh",
    signatures: [["value"]]
  },
  {
    name: "vi",
    signatures: [["value"]]
  },
  {
    name: "vb",
    signatures: [["value"]]
  },
  {
    name: "vmin",
    signatures: [["value"]]
  },
  {
    name: "vmax",
    signatures: [["value"]]
  },
  {
    name: "svw",
    signatures: [["value"]]
  },
  {
    name: "svh",
    signatures: [["value"]]
  },
  {
    name: "svi",
    signatures: [["value"]]
  },
  {
    name: "svb",
    signatures: [["value"]]
  },
  {
    name: "svmin",
    signatures: [["value"]]
  },
  {
    name: "svmax",
    signatures: [["value"]]
  },
  {
    name: "lvw",
    signatures: [["value"]]
  },
  {
    name: "lvh",
    signatures: [["value"]]
  },
  {
    name: "lvi",
    signatures: [["value"]]
  },
  {
    name: "lvb",
    signatures: [["value"]]
  },
  {
    name: "lvmin",
    signatures: [["value"]]
  },
  {
    name: "lvmax",
    signatures: [["value"]]
  },
  {
    name: "dvw",
    signatures: [["value"]]
  },
  {
    name: "dvh",
    signatures: [["value"]]
  },
  {
    name: "dvi",
    signatures: [["value"]]
  },
  {
    name: "dvb",
    signatures: [["value"]]
  },
  {
    name: "dvmin",
    signatures: [["value"]]
  },
  {
    name: "dvmax",
    signatures: [["value"]]
  },
  {
    name: "cqw",
    signatures: [["value"]]
  },
  {
    name: "cqh",
    signatures: [["value"]]
  },
  {
    name: "cqi",
    signatures: [["value"]]
  },
  {
    name: "cqb",
    signatures: [["value"]]
  },
  {
    name: "cqmin",
    signatures: [["value"]]
  },
  {
    name: "cqmax",
    signatures: [["value"]]
  },
  {
    name: "cm",
    signatures: [["value"]]
  },
  {
    name: "mm",
    signatures: [["value"]]
  },
  {
    name: "in",
    signatures: [["value"]]
  },
  {
    name: "pt",
    signatures: [["value"]]
  },
  {
    name: "pc",
    signatures: [["value"]]
  },
  {
    name: "px",
    signatures: [["value"]]
  },
  {
    name: "Q",
    signatures: [["value"]]
  },
  {
    name: "deg",
    signatures: [["value"]]
  },
  {
    name: "grad",
    signatures: [["value"]]
  },
  {
    name: "rad",
    signatures: [["value"]]
  },
  {
    name: "turn",
    signatures: [["value"]]
  },
  {
    name: "s",
    signatures: [["value"]]
  },
  {
    name: "ms",
    signatures: [["value"]]
  },
  {
    name: "Hz",
    signatures: [["value"]]
  },
  {
    name: "kHz",
    signatures: [["value"]]
  },
  {
    name: "dpi",
    signatures: [["value"]]
  },
  {
    name: "dpcm",
    signatures: [["value"]]
  },
  {
    name: "dppx",
    signatures: [["value"]]
  },
  {
    name: "x",
    signatures: [["value"]]
  },
  {
    name: "fr",
    signatures: [["value"]]
  },
  {
    name: "CSSUnparsedValue",
    signatures: [["members"]]
  },
  {
    name: "CSSVariableReferenceValue",
    signatures: [["variable","?fallback"]]
  },
  {
    name: "FontFaceSetLoadEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "FontFace",
    signatures: [["family","source","?descriptors"]]
  },
  {
    name: "MediaQueryListEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "registerProperty",
    signatures: [["definition"]]
  },
  {
    name: "ContentVisibilityAutoStateChangeEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "timeout",
    signatures: [["milliseconds"]]
  },
  {
    name: "AttributePart",
    signatures: [["root","element","localName","?init"]]
  },
  {
    name: "ChildNodePart",
    signatures: [["root","previousSibling","nextSibling","?init"]]
  },
  {
    name: "Comment",
    signatures: [["?data"]]
  },
  {
    name: "pseudo",
    signatures: [["type"]]
  },
  {
    name: "parseHTMLUnsafe",
    signatures: [["html","?options"]]
  },
  {
    name: "parseHTML",
    signatures: [["html","?options"]]
  },
  {
    name: "hasPrivateToken",
    signatures: [["issuer"]]
  },
  {
    name: "hasRedemptionRecord",
    signatures: [["issuer"]]
  },
  {
    name: "ariaNotify",
    signatures: [["announcement","?options"]]
  },
  {
    name: "setSequentialFocusStartingPoint",
    signatures: [["element"]]
  },
  {
    name: "DOMException",
    signatures: [["?message","?name"]]
  },
  {
    name: "setHTML",
    signatures: [["html","?options"]]
  },
  {
    name: "scrollIntoViewIfNeeded",
    signatures: [["?centerIfNeeded"]]
  },
  {
    name: "CustomEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "when",
    signatures: [["type","?options"]]
  },
  {
    name: "Event",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "MutationObserver",
    signatures: [["callback"]]
  },
  {
    name: "NodePart",
    signatures: [["root","node","?init"]]
  },
  {
    name: "Observable",
    signatures: [["callback"]]
  },
  {
    name: "takeUntil",
    signatures: [["notifier"]]
  },
  {
    name: "take",
    signatures: [["number_to_take"]]
  },
  {
    name: "drop",
    signatures: [["number_to_drop"]]
  },
  {
    name: "switchMap",
    signatures: [["mapper"]]
  },
  {
    name: "inspect",
    signatures: [["?inspect_observer"]]
  },
  {
    name: "first",
    signatures: [["?options"]]
  },
  {
    name: "last",
    signatures: [["?options"]]
  },
  {
    name: "moveBefore",
    signatures: [["node","child"]]
  },
  {
    name: "QuotaExceededError",
    signatures: [["?message","?options"]]
  },
  {
    name: "expand",
    signatures: [["?unit"]],
    receivers: ["Range"]
  },
  {
    name: "expand",
    signatures: [["input","newShape","?options"]],
    receivers: ["MLGraphBuilder"]
  },
  {
    name: "StaticRange",
    signatures: [["init"]]
  },
  {
    name: "addTeardown",
    signatures: [["teardown"]]
  },
  {
    name: "Text",
    signatures: [["?data"]]
  },
  {
    name: "CharacterBoundsUpdateEvent",
    signatures: [["type","?options"]]
  },
  {
    name: "EditContext",
    signatures: [["?options"]]
  },
  {
    name: "updateSelection",
    signatures: [["start","end"]]
  },
  {
    name: "updateControlBounds",
    signatures: [["controlBounds"]]
  },
  {
    name: "updateSelectionBounds",
    signatures: [["selectionBounds"]]
  },
  {
    name: "updateCharacterBounds",
    signatures: [["rangeStart","characterBounds"]]
  },
  {
    name: "updateText",
    signatures: [["start","end","newText"]]
  },
  {
    name: "TextFormatUpdateEvent",
    signatures: [["type","?options"]]
  },
  {
    name: "TextFormat",
    signatures: [["?options"]]
  },
  {
    name: "TextUpdateEvent",
    signatures: [["type","?options"]]
  },
  {
    name: "getComposedRanges",
    signatures: [["?options"]]
  },
  {
    name: "AnimationEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "AnimationPlaybackEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "ClipboardEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "CommandEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "CompositionEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "DragEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "ErrorEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "FocusEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "HashChangeEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "InputEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "InterestEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "KeyboardEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "MessageEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "MouseEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "OverscrollEvent",
    signatures: [["type","bubbles","?eventInitDict"]]
  },
  {
    name: "PageTransitionEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "PointerEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "PopStateEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "ProgressEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "PromiseRejectionEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "SecurityPolicyViolationEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "ToggleEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "TouchEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "TransitionEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "UIEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "WheelEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "fetchLater",
    signatures: [["input","?init"]]
  },
  {
    name: "Headers",
    signatures: [["?init"]]
  },
  {
    name: "Request",
    signatures: [["input","?init"]]
  },
  {
    name: "Response",
    signatures: [["?body","?init"]]
  },
  {
    name: "redirect",
    signatures: [["url","?status"]],
    receivers: ["Response"]
  },
  {
    name: "redirect",
    signatures: [["url","?options"]],
    receivers: ["NavigationPrecommitController"]
  },
  {
    name: "Blob",
    signatures: [["?blobParts","?options"]]
  },
  {
    name: "File",
    signatures: [["fileBits","fileName","?options"]]
  },
  {
    name: "createObjectURL",
    signatures: [["blob"],["source"]],
    receivers: ["URL"]
  },
  {
    name: "createObjectURL",
    signatures: [["blob"]],
    receivers: ["StorageAccessHandle"]
  },
  {
    name: "revokeObjectURL",
    signatures: [["url"]]
  },
  {
    name: "createSelectorDirective",
    signatures: [["arg"]]
  },
  {
    name: "TextDirective",
    signatures: [["?options"]]
  },
  {
    name: "getHighEntropyValues",
    signatures: [["hints"]]
  },
  {
    name: "ReportingObserver",
    signatures: [["callback","?options"]]
  },
  {
    name: "isInputPending",
    signatures: [["?options"]]
  },
  {
    name: "webkitRequestAnimationFrame",
    signatures: [["callback"]]
  },
  {
    name: "webkitCancelAnimationFrame",
    signatures: [["id"]]
  },
  {
    name: "webkitRequestFullScreen",
    signatures: [["?options"]]
  },
  {
    name: "webkitRequestFullscreen",
    signatures: [["?options"]]
  },
  {
    name: "DOMMatrixReadOnly",
    signatures: [["?init"]]
  },
  {
    name: "fromMatrix",
    signatures: [["?other"]]
  },
  {
    name: "fromFloat32Array",
    signatures: [["array32"]]
  },
  {
    name: "fromFloat64Array",
    signatures: [["array64"]]
  },
  {
    name: "DOMMatrix",
    signatures: [["?init"]]
  },
  {
    name: "DOMPointReadOnly",
    signatures: [["?x","?y","?z","?w"]]
  },
  {
    name: "fromPoint",
    signatures: [["?other"]]
  },
  {
    name: "DOMPoint",
    signatures: [["?x","?y","?z","?w"]]
  },
  {
    name: "DOMQuad",
    signatures: [["?p1","?p2","?p3","?p4"]]
  },
  {
    name: "fromRect",
    signatures: [["?other"]]
  },
  {
    name: "fromQuad",
    signatures: [["?other"]]
  },
  {
    name: "DOMRectReadOnly",
    signatures: [["?x","?y","?width","?height"]]
  },
  {
    name: "DOMRect",
    signatures: [["?x","?y","?width","?height"]]
  },
  {
    name: "highlightsFromPoint",
    signatures: [["x","y","?options"]]
  },
  {
    name: "Highlight",
    signatures: [["...initRanges"]]
  },
  {
    name: "configureHighDynamicRange",
    signatures: [["options"]]
  },
  {
    name: "ImageData",
    signatures: [["sw","sh","?settings"],["data","sw","?sh","?settings"]]
  },
  {
    name: "getIndexFromOffset",
    signatures: [["x"]]
  },
  {
    name: "getSelectionRects",
    signatures: [["start","end"]]
  },
  {
    name: "getActualBoundingBox",
    signatures: [["start","end"]]
  },
  {
    name: "getTextClusters",
    signatures: [["?options"],["start","end","?options"]]
  },
  {
    name: "CloseWatcher",
    signatures: [["?options"]]
  },
  {
    name: "requestClose",
    signatures: [["?returnValue"]],
    receivers: ["HTMLDialogElement"]
  },
  {
    name: "reportEvent",
    signatures: [["event"]]
  },
  {
    name: "setReportEventDataForAutomaticBeacons",
    signatures: [["event"]]
  },
  {
    name: "notifyEvent",
    signatures: [["triggering_event"]]
  },
  {
    name: "FencedFrameConfig",
    signatures: [["url"]]
  },
  {
    name: "setSharedStorageContext",
    signatures: [["contextString"]]
  },
  {
    name: "FormDataEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "FormData",
    signatures: [["?form","?submitter"]]
  },
  {
    name: "SubmitEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "isTypeSupported",
    signatures: [["type"]]
  },
  {
    name: "TrackEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "VTTCue",
    signatures: [["startTime","endTime","text"]]
  },
  {
    name: "InputDeviceCapabilities",
    signatures: [["?deviceInitDict"]]
  },
  {
    name: "Touch",
    signatures: [["initDict"]]
  },
  {
    name: "copyText",
    signatures: [["text"]]
  },
  {
    name: "showContextMenuAtPoint",
    signatures: [["x","y","items","?document"]]
  },
  {
    name: "sendMessageToEmbedder",
    signatures: [["message"]]
  },
  {
    name: "layoutNextFragment",
    signatures: [["?options"]]
  },
  {
    name: "registerLayout",
    signatures: [["name","layoutCtor"]]
  },
  {
    name: "watch",
    signatures: [["signals","callback"]]
  },
  {
    name: "writeMessage",
    signatures: [["buffer","handles"]]
  },
  {
    name: "readMessage",
    signatures: [["?flags"]]
  },
  {
    name: "writeData",
    signatures: [["buffer","?options"]]
  },
  {
    name: "discardData",
    signatures: [["numBytes","?options"]]
  },
  {
    name: "readData",
    signatures: [["buffer","?options"]]
  },
  {
    name: "mapBuffer",
    signatures: [["offset","numBytes"]]
  },
  {
    name: "duplicateBufferHandle",
    signatures: [["?options"]]
  },
  {
    name: "createDataPipe",
    signatures: [["options"]]
  },
  {
    name: "createSharedBuffer",
    signatures: [["numBytes"]]
  },
  {
    name: "bindInterface",
    signatures: [["interfaceName","request_handle","?scope"]]
  },
  {
    name: "MojoInterfaceInterceptor",
    signatures: [["interfaceName","?scope"]]
  },
  {
    name: "MojoInterfaceRequestEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "NavigateEvent",
    signatures: [["type","eventInit"]]
  },
  {
    name: "intercept",
    signatures: [["?options"]]
  },
  {
    name: "NavigationCurrentEntryChangeEvent",
    signatures: [["type","eventInit"]]
  },
  {
    name: "updateCurrentEntry",
    signatures: [["options"]]
  },
  {
    name: "traverseTo",
    signatures: [["key","?options"]]
  },
  {
    name: "OffscreenCanvas",
    signatures: [["width","height"]]
  },
  {
    name: "setValueAndClosePopup",
    signatures: [["numberValue","stringValue","is_keyboard_event"]]
  },
  {
    name: "setValue",
    signatures: [["value"]]
  },
  {
    name: "localizeNumberString",
    signatures: [["numberString"]]
  },
  {
    name: "formatMonth",
    signatures: [["year","zeroBaseMonth"]]
  },
  {
    name: "formatShortMonth",
    signatures: [["year","zeroBaseMonth"]]
  },
  {
    name: "formatWeek",
    signatures: [["year","weekNumber","localizedStartDate"]]
  },
  {
    name: "setWindowRect",
    signatures: [["x","y","width","height"]]
  },
  {
    name: "setMenuListOptionsBoundsInAXTree",
    signatures: [["options_bounds","children_updated"]]
  },
  {
    name: "PatchEvent",
    signatures: [["type","init"]]
  },
  {
    name: "allowsFeature",
    signatures: [["feature","?origin"]]
  },
  {
    name: "getAllowlistForFeature",
    signatures: [["feature"]]
  },
  {
    name: "requestOverride",
    signatures: [["value"]]
  },
  {
    name: "ResizeObserver",
    signatures: [["callback"]]
  },
  {
    name: "Sanitizer",
    signatures: [["?configuration"]]
  },
  {
    name: "allowElement",
    signatures: [["element"]]
  },
  {
    name: "removeElement",
    signatures: [["element"]]
  },
  {
    name: "replaceElementWithChildren",
    signatures: [["element"]]
  },
  {
    name: "allowAttribute",
    signatures: [["attribute"]]
  },
  {
    name: "setComments",
    signatures: [["allow"]]
  },
  {
    name: "setDataAttributes",
    signatures: [["allow"]]
  },
  {
    name: "postTask",
    signatures: [["callback","?options"]]
  },
  {
    name: "TaskController",
    signatures: [["?init"]]
  },
  {
    name: "setPriority",
    signatures: [["priority"]]
  },
  {
    name: "TaskPriorityChangeEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "registerTool",
    signatures: [["params"]]
  },
  {
    name: "unregisterTool",
    signatures: [["tool_name"]]
  },
  {
    name: "SnapEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "ByteLengthQueuingStrategy",
    signatures: [["init"]]
  },
  {
    name: "CountQueuingStrategy",
    signatures: [["init"]]
  },
  {
    name: "ReadableStreamBYOBReader",
    signatures: [["stream"]]
  },
  {
    name: "ReadableStreamDefaultReader",
    signatures: [["stream"]]
  },
  {
    name: "ReadableStream",
    signatures: [["?underlyingSource","?strategy"]]
  },
  {
    name: "TransformStream",
    signatures: [["?transformer","?writableStrategy","?readableStrategy"]]
  },
  {
    name: "WritableStream",
    signatures: [["?underlyingSink","?strategy"]]
  },
  {
    name: "PerformanceMark",
    signatures: [["markName","?markOptions"]]
  },
  {
    name: "PerformanceObserver",
    signatures: [["callback"]]
  },
  {
    name: "Profiler",
    signatures: [["options"]]
  },
  {
    name: "fromLiteral",
    signatures: [["templateLiteral"]]
  },
  {
    name: "createPolicy",
    signatures: [["policyName","?policyOptions"]]
  },
  {
    name: "isHTML",
    signatures: [["checkedObject"]]
  },
  {
    name: "isScript",
    signatures: [["checkedObject"]]
  },
  {
    name: "isScriptURL",
    signatures: [["checkedObject"]]
  },
  {
    name: "getAttributeType",
    signatures: [["tagName","attribute","?elementNS","?attrNs"]]
  },
  {
    name: "getPropertyType",
    signatures: [["tagName","property","?elementNS"]]
  },
  {
    name: "getTypeMapping",
    signatures: [["?ns"]]
  },
  {
    name: "createHTML",
    signatures: [["input","...args"]]
  },
  {
    name: "createScript",
    signatures: [["input","...args"]]
  },
  {
    name: "createScriptURL",
    signatures: [["input","...args"]]
  },
  {
    name: "URLPattern",
    signatures: [["?input","?options"],["input","baseURL","?options"]]
  },
  {
    name: "generate",
    signatures: [["component","groups"]]
  },
  {
    name: "compareComponent",
    signatures: [["component","left","right"]]
  },
  {
    name: "Origin",
    signatures: [["?serializedOrigin"]]
  },
  {
    name: "isSameOrigin",
    signatures: [["other"]]
  },
  {
    name: "isSameSite",
    signatures: [["other"]]
  },
  {
    name: "URLSearchParams",
    signatures: [["?init"]]
  },
  {
    name: "URL",
    signatures: [["url","?base"]]
  },
  {
    name: "canParse",
    signatures: [["url","?base"]]
  },
  {
    name: "PageRevealEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "PageSwapEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "SharedWorker",
    signatures: [["scriptURL","?options"]]
  },
  {
    name: "Worker",
    signatures: [["scriptURL","?options"]]
  },
  {
    name: "setPrivateToken",
    signatures: [["privateToken"]]
  },
  {
    name: "setAttributionReporting",
    signatures: [["attributionReporting"]]
  },
  {
    name: "queryFeatureSupport",
    signatures: [["feature"]]
  },
  {
    name: "registerAnimator",
    signatures: [["name","animatorCtor"]]
  },
  {
    name: "WorkletAnimation",
    signatures: [["animatorName","effects","?timeline","?options"]]
  },
  {
    name: "BeforeInstallPromptEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "setResizable",
    signatures: [["resizable"]]
  },
  {
    name: "BackgroundFetchEvent",
    signatures: [["type","init"]]
  },
  {
    name: "BackgroundFetchUpdateUIEvent",
    signatures: [["type","init"]]
  },
  {
    name: "updateUI",
    signatures: [["?options"]]
  },
  {
    name: "PeriodicSyncEvent",
    signatures: [["type","init"]]
  },
  {
    name: "SyncEvent",
    signatures: [["type","init"]]
  },
  {
    name: "watchAdvertisements",
    signatures: [["?options"]]
  },
  {
    name: "getDescriptor",
    signatures: [["descriptor"]],
    receivers: ["BluetoothRemoteGATTCharacteristic"]
  },
  {
    name: "getDescriptor",
    signatures: [["name"]],
    receivers: ["BluetoothUUID"]
  },
  {
    name: "getDescriptors",
    signatures: [["?descriptor"]]
  },
  {
    name: "writeValue",
    signatures: [["value"]]
  },
  {
    name: "writeValueWithResponse",
    signatures: [["value"]]
  },
  {
    name: "writeValueWithoutResponse",
    signatures: [["value"]]
  },
  {
    name: "getPrimaryService",
    signatures: [["service"]]
  },
  {
    name: "getPrimaryServices",
    signatures: [["?service"]]
  },
  {
    name: "getCharacteristic",
    signatures: [["characteristic"]],
    receivers: ["BluetoothRemoteGATTService"]
  },
  {
    name: "getCharacteristic",
    signatures: [["name"]],
    receivers: ["BluetoothUUID"]
  },
  {
    name: "getCharacteristics",
    signatures: [["?characteristic"]]
  },
  {
    name: "getService",
    signatures: [["name"]]
  },
  {
    name: "canonicalUUID",
    signatures: [["alias"]]
  },
  {
    name: "requestDevice",
    signatures: [["?options"]],
    receivers: ["Bluetooth"]
  },
  {
    name: "requestDevice",
    signatures: [["options"]],
    receivers: ["HID","USB"]
  },
  {
    name: "requestDevice",
    signatures: [["?descriptor"]],
    receivers: ["GPUAdapter"]
  },
  {
    name: "requestLEScan",
    signatures: [["?options"]]
  },
  {
    name: "MediaStreamTrackGenerator",
    signatures: [["kind"],["init"]]
  },
  {
    name: "MediaStreamTrackProcessor",
    signatures: [["init"],["track","?bufferSize"]]
  },
  {
    name: "BroadcastChannel",
    signatures: [["name"]]
  },
  {
    name: "browsingTopics",
    signatures: [["?options"]]
  },
  {
    name: "setExpires",
    signatures: [["expires"]]
  },
  {
    name: "fillTextCluster",
    signatures: [["textCluster","x","y","?options"]]
  },
  {
    name: "strokeTextCluster",
    signatures: [["textCluster","x","y","?options"]]
  },
  {
    name: "transferToGPUTexture",
    signatures: [["options"]]
  },
  {
    name: "beginLayer",
    signatures: [["?options"]]
  },
  {
    name: "createMesh2DVertexBuffer",
    signatures: [["buffer"]]
  },
  {
    name: "createMesh2DUVBuffer",
    signatures: [["buffer"]]
  },
  {
    name: "createMesh2DIndexBuffer",
    signatures: [["buffer"]]
  },
  {
    name: "drawMesh",
    signatures: [["vertex_buffer","uv_buffer","index_buffer","image"]]
  },
  {
    name: "CanvasFilter",
    signatures: [["init"]]
  },
  {
    name: "drawElement",
    signatures: [["element","x","y","?options"],["element","x","y","dwidth","dheight","?options"]]
  },
  {
    name: "setHitTestRegions",
    signatures: [["hitTestRegions"]]
  },
  {
    name: "Path2D",
    signatures: [["?path"]]
  },
  {
    name: "ClipboardChangeEvent",
    signatures: [["?eventInitDict"]]
  },
  {
    name: "ClipboardItem",
    signatures: [["items"]]
  },
  {
    name: "CompressionStream",
    signatures: [["format"]]
  },
  {
    name: "DecompressionStream",
    signatures: [["format"]]
  },
  {
    name: "ContentIndexEvent",
    signatures: [["type","init"]]
  },
  {
    name: "userAgentAllowsProtocol",
    signatures: [["protocol"]]
  },
  {
    name: "FederatedCredential",
    signatures: [["data"]]
  },
  {
    name: "IdentityCredentialError",
    signatures: [["?message","?options"]]
  },
  {
    name: "getUserInfo",
    signatures: [["config"]]
  },
  {
    name: "setStatus",
    signatures: [["status","?options"]]
  },
  {
    name: "PasswordCredential",
    signatures: [["data"],["form"]]
  },
  {
    name: "parseCreationOptionsFromJSON",
    signatures: [["options"]]
  },
  {
    name: "parseRequestOptionsFromJSON",
    signatures: [["options"]]
  },
  {
    name: "signalUnknownCredential",
    signatures: [["options"]]
  },
  {
    name: "signalAllAcceptedCredentials",
    signatures: [["options"]]
  },
  {
    name: "signalCurrentUserDetails",
    signatures: [["options"]]
  },
  {
    name: "registerPaint",
    signatures: [["name","paintCtor"]]
  },
  {
    name: "updateInkTrailStartPoint",
    signatures: [["evt","style"]]
  },
  {
    name: "requestPresenter",
    signatures: [["?param"]]
  },
  {
    name: "DeviceMotionEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "requestPermission",
    signatures: [["?descriptor"]],
    receivers: ["FileSystemHandle"]
  },
  {
    name: "requestPermission",
    signatures: [["?deprecatedCallback"]],
    receivers: ["Notification"]
  },
  {
    name: "DeviceOrientationEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "DocumentPictureInPictureEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "requestWindow",
    signatures: [["?options"]]
  },
  {
    name: "TextDecoderStream",
    signatures: [["?label","?options"]]
  },
  {
    name: "TextDecoder",
    signatures: [["?label","?options"]]
  },
  {
    name: "MediaEncryptedEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "MediaKeyMessageEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "EventSource",
    signatures: [["url","?eventSourceInitDict"]]
  },
  {
    name: "queryPermission",
    signatures: [["?descriptor"]]
  },
  {
    name: "FileSystemObserver",
    signatures: [["callback"]]
  },
  {
    name: "showOpenFilePicker",
    signatures: [["?options"]]
  },
  {
    name: "showSaveFilePicker",
    signatures: [["?options"]]
  },
  {
    name: "showDirectoryPicker",
    signatures: [["?options"]]
  },
  {
    name: "webkitRequestFileSystem",
    signatures: [["type","size","?successCallback","?errorCallback"]],
    receivers: ["DedicatedWorkerGlobalScope","SharedWorkerGlobalScope"]
  },
  {
    name: "webkitRequestFileSystem",
    signatures: [["type","size","successCallback","?errorCallback"]],
    receivers: ["Window"]
  },
  {
    name: "webkitRequestFileSystemSync",
    signatures: [["type","size"]]
  },
  {
    name: "webkitResolveLocalFileSystemURL",
    signatures: [["url","successCallback","?errorCallback"]]
  },
  {
    name: "webkitResolveLocalFileSystemSyncURL",
    signatures: [["url"]]
  },
  {
    name: "isolatedFileSystem",
    signatures: [["fileSystemId","registeredName"]]
  },
  {
    name: "upgradeDraggedFileSystemPermissions",
    signatures: [["domFileSystem"]]
  },
  {
    name: "removeRecursively",
    signatures: [["successCallback","?errorCallback"]],
    receivers: ["DirectoryEntry"]
  },
  {
    name: "createWriter",
    signatures: [["successCallback","?errorCallback"]],
    receivers: ["FileEntry"]
  },
  {
    name: "queryLocalFonts",
    signatures: [["?options"]]
  },
  {
    name: "runFuzzer",
    signatures: [["fuzzer_id","fuzzer_data"]]
  },
  {
    name: "GamepadEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "addStroke",
    signatures: [["stroke"]]
  },
  {
    name: "removeStroke",
    signatures: [["stroke"]]
  },
  {
    name: "startDrawing",
    signatures: [["?hints"]]
  },
  {
    name: "addPoint",
    signatures: [["point"]]
  },
  {
    name: "createHandwritingRecognizer",
    signatures: [["constraint"]]
  },
  {
    name: "queryHandwritingRecognizer",
    signatures: [["constraint"]]
  },
  {
    name: "HIDConnectionEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "sendReport",
    signatures: [["reportId","data"]]
  },
  {
    name: "sendFeatureReport",
    signatures: [["reportId","data"]]
  },
  {
    name: "receiveFeatureReport",
    signatures: [["reportId"]]
  },
  {
    name: "ImageCapture",
    signatures: [["track"]]
  },
  {
    name: "takePhoto",
    signatures: [["?photoSettings"]]
  },
  {
    name: "getAllRecords",
    signatures: [["?options"]]
  },
  {
    name: "only",
    signatures: [["value"]]
  },
  {
    name: "lowerBound",
    signatures: [["bound","?open"]]
  },
  {
    name: "upperBound",
    signatures: [["bound","?open"]]
  },
  {
    name: "bound",
    signatures: [["lower","upper","?lowerOpen","?upperOpen"]]
  },
  {
    name: "IDBVersionChangeEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "lock",
    signatures: [["?keyCodes"]],
    receivers: ["Keyboard"]
  },
  {
    name: "lock",
    signatures: [["orientation"]],
    receivers: ["ScreenOrientation"]
  },
  {
    name: "setConsumer",
    signatures: [["consumer"]]
  },
  {
    name: "BlobEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "MediaRecorder",
    signatures: [["stream","?options"]]
  },
  {
    name: "MediaMetadata",
    signatures: [["?init"]]
  },
  {
    name: "setMicrophoneActive",
    signatures: [["active"]]
  },
  {
    name: "setCameraActive",
    signatures: [["active"]]
  },
  {
    name: "appendEncodedChunks",
    signatures: [["chunks"]]
  },
  {
    name: "TrackDefaultList",
    signatures: [["?trackDefaults"]]
  },
  {
    name: "TrackDefault",
    signatures: [["type","language","label","kinds","?byteStreamTrackID"]]
  },
  {
    name: "cropTo",
    signatures: [["crop_id"]]
  },
  {
    name: "restrictTo",
    signatures: [["target"]]
  },
  {
    name: "CapturedMouseEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "fromElement",
    signatures: [["element"]]
  },
  {
    name: "selectAudioOutput",
    signatures: [["?options"]]
  },
  {
    name: "setCaptureHandleConfig",
    signatures: [["?config"]]
  },
  {
    name: "setPreferredSinkId",
    signatures: [["sinkId"]]
  },
  {
    name: "MediaStreamEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "MediaStreamTrackEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "MediaStream",
    signatures: [["?stream"],["tracks"]]
  },
  {
    name: "webkitGetUserMedia",
    signatures: [["constraints","successCallback","errorCallback"]]
  },
  {
    name: "OverconstrainedError",
    signatures: [["constraint","?message"]]
  },
  {
    name: "createContext",
    signatures: [["?options"],["gpuDevice"]]
  },
  {
    name: "MLGraphBuilder",
    signatures: [["context"]]
  },
  {
    name: "input",
    signatures: [["name","desc"]]
  },
  {
    name: "constant",
    signatures: [["tensor"],["desc","buffer"]]
  },
  {
    name: "argMin",
    signatures: [["input","axis","?options"]]
  },
  {
    name: "argMax",
    signatures: [["input","axis","?options"]]
  },
  {
    name: "batchNormalization",
    signatures: [["input","mean","variance","?options"]]
  },
  {
    name: "clamp",
    signatures: [["input","?options"]]
  },
  {
    name: "conv2d",
    signatures: [["input","filter","?options"]]
  },
  {
    name: "convTranspose2d",
    signatures: [["input","filter","?options"]]
  },
  {
    name: "cumulativeSum",
    signatures: [["input","axis","?options"]]
  },
  {
    name: "equal",
    signatures: [["a","b","?options"]]
  },
  {
    name: "greater",
    signatures: [["a","b","?options"]]
  },
  {
    name: "greaterOrEqual",
    signatures: [["a","b","?options"]]
  },
  {
    name: "lesser",
    signatures: [["a","b","?options"]]
  },
  {
    name: "lesserOrEqual",
    signatures: [["a","b","?options"]]
  },
  {
    name: "notEqual",
    signatures: [["a","b","?options"]]
  },
  {
    name: "logicalAnd",
    signatures: [["a","b","?options"]]
  },
  {
    name: "logicalOr",
    signatures: [["a","b","?options"]]
  },
  {
    name: "logicalXor",
    signatures: [["a","b","?options"]]
  },
  {
    name: "neg",
    signatures: [["x","?options"]]
  },
  {
    name: "erf",
    signatures: [["x","?options"]]
  },
  {
    name: "identity",
    signatures: [["x","?options"]]
  },
  {
    name: "logicalNot",
    signatures: [["x","?options"]]
  },
  {
    name: "reciprocal",
    signatures: [["x","?options"]]
  },
  {
    name: "cast",
    signatures: [["input","outputDataType","?options"]]
  },
  {
    name: "dequantizeLinear",
    signatures: [["input","scale","zeroPoint","?options"]]
  },
  {
    name: "elu",
    signatures: [["x","?options"]]
  },
  {
    name: "gather",
    signatures: [["input","indices","?options"]]
  },
  {
    name: "gatherElements",
    signatures: [["input","indices","?options"]]
  },
  {
    name: "gatherND",
    signatures: [["input","indices","?options"]]
  },
  {
    name: "gelu",
    signatures: [["input","?options"]]
  },
  {
    name: "gemm",
    signatures: [["a","b","?options"]]
  },
  {
    name: "gru",
    signatures: [["input","weight","recurrentWeight","steps","hiddenSize","?options"]]
  },
  {
    name: "gruCell",
    signatures: [["input","weight","recurrentWeight","hiddenState","hiddenSize","?options"]]
  },
  {
    name: "hardSigmoid",
    signatures: [["x","?options"]]
  },
  {
    name: "hardSwish",
    signatures: [["x","?options"]]
  },
  {
    name: "instanceNormalization",
    signatures: [["input","?options"]]
  },
  {
    name: "matmul",
    signatures: [["a","b","?options"]]
  },
  {
    name: "layerNormalization",
    signatures: [["input","?options"]]
  },
  {
    name: "leakyRelu",
    signatures: [["x","?options"]]
  },
  {
    name: "linear",
    signatures: [["input","?options"]]
  },
  {
    name: "lstm",
    signatures: [["input","weight","recurrentWeight","steps","hiddenSize","?options"]]
  },
  {
    name: "lstmCell",
    signatures: [["input","weight","recurrentWeight","hiddenState","cellState","hiddenSize","?options"]]
  },
  {
    name: "pad",
    signatures: [["input","beginningPadding","endingPadding","?options"]]
  },
  {
    name: "averagePool2d",
    signatures: [["input","?options"]]
  },
  {
    name: "l2Pool2d",
    signatures: [["input","?options"]]
  },
  {
    name: "maxPool2d",
    signatures: [["input","?options"]]
  },
  {
    name: "prelu",
    signatures: [["x","slope","?options"]]
  },
  {
    name: "quantizeLinear",
    signatures: [["input","scale","zeroPoint","?options"]]
  },
  {
    name: "reduceL1",
    signatures: [["input","?options"]]
  },
  {
    name: "reduceL2",
    signatures: [["input","?options"]]
  },
  {
    name: "reduceLogSum",
    signatures: [["input","?options"]]
  },
  {
    name: "reduceLogSumExp",
    signatures: [["input","?options"]]
  },
  {
    name: "reduceMax",
    signatures: [["input","?options"]]
  },
  {
    name: "reduceMean",
    signatures: [["input","?options"]]
  },
  {
    name: "reduceMin",
    signatures: [["input","?options"]]
  },
  {
    name: "reduceProduct",
    signatures: [["input","?options"]]
  },
  {
    name: "reduceSum",
    signatures: [["input","?options"]]
  },
  {
    name: "reduceSumSquare",
    signatures: [["input","?options"]]
  },
  {
    name: "relu",
    signatures: [["input","?options"]]
  },
  {
    name: "reshape",
    signatures: [["input","newShape","?options"]]
  },
  {
    name: "resample2d",
    signatures: [["input","?options"]]
  },
  {
    name: "scatterElements",
    signatures: [["input","indices","updates","?options"]]
  },
  {
    name: "scatterND",
    signatures: [["input","indices","updates","?options"]]
  },
  {
    name: "sigmoid",
    signatures: [["input","?options"]]
  },
  {
    name: "softmax",
    signatures: [["input","?options"],["input","axis","?options"]]
  },
  {
    name: "softplus",
    signatures: [["input","?options"]]
  },
  {
    name: "softsign",
    signatures: [["input","?options"]]
  },
  {
    name: "tile",
    signatures: [["input","repetitions","?options"]]
  },
  {
    name: "transpose",
    signatures: [["input","?options"]]
  },
  {
    name: "triangular",
    signatures: [["input","?options"]]
  },
  {
    name: "where",
    signatures: [["condition","trueValue","falseValue","?options"]]
  },
  {
    name: "build",
    signatures: [["outputs"]]
  },
  {
    name: "getFileSystemAccessTransferToken",
    signatures: [["fileHandle"]]
  },
  {
    name: "unregisterProtocolHandler",
    signatures: [["scheme","url"]]
  },
  {
    name: "NDEFMessage",
    signatures: [["messageInit"]]
  },
  {
    name: "scan",
    signatures: [["?options"]]
  },
  {
    name: "makeReadOnly",
    signatures: [["?options"]]
  },
  {
    name: "NDEFReadingEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "NDEFRecord",
    signatures: [["recordInit"]]
  },
  {
    name: "NotificationEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "Notification",
    signatures: [["title","?options"]]
  },
  {
    name: "TimestampTrigger",
    signatures: [["timestamp"]]
  },
  {
    name: "AbortPaymentEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "CanMakePaymentEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "getDetails",
    signatures: [["itemIds"]]
  },
  {
    name: "consume",
    signatures: [["purchaseToken"]]
  },
  {
    name: "getDigitalGoodsService",
    signatures: [["paymentMethod"]]
  },
  {
    name: "enableDelegations",
    signatures: [["delegations"]]
  },
  {
    name: "PaymentMethodChangeEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "PaymentRequestEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "changePaymentMethod",
    signatures: [["methodName","?methodDetails"]]
  },
  {
    name: "changeShippingAddress",
    signatures: [["shippingAddress"]]
  },
  {
    name: "changeShippingOption",
    signatures: [["shippingOption"]]
  },
  {
    name: "PaymentRequestUpdateEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "PaymentRequest",
    signatures: [["methodData","?details","?options"]]
  },
  {
    name: "RTCDataChannelEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "RTCDTMFToneChangeEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "RTCEncodedAudioFrame",
    signatures: [["originalFrame","?options"]]
  },
  {
    name: "setMetadata",
    signatures: [["metadata"]]
  },
  {
    name: "RTCEncodedVideoFrame",
    signatures: [["originalFrame","?options"]]
  },
  {
    name: "RTCErrorEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "RTCError",
    signatures: [["init","?message"]]
  },
  {
    name: "RTCIceCandidate",
    signatures: [["?candidateInitDict"]]
  },
  {
    name: "RTCPeerConnectionIceErrorEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "RTCPeerConnectionIceEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "RTCPeerConnection",
    signatures: [["?configuration"]]
  },
  {
    name: "generateCertificate",
    signatures: [["keygenAlgorithm"]]
  },
  {
    name: "addStream",
    signatures: [["stream"]]
  },
  {
    name: "removeStream",
    signatures: [["stream"]]
  },
  {
    name: "createDTMFSender",
    signatures: [["track"]]
  },
  {
    name: "RTCRtpScriptTransform",
    signatures: [["worker","?options","?transfer"]]
  },
  {
    name: "sendRtp",
    signatures: [["packet","options"]]
  },
  {
    name: "setHeaderExtensionsToNegotiate",
    signatures: [["extensions"]]
  },
  {
    name: "createProcessor",
    signatures: [["worker","?options","?transfer"]]
  },
  {
    name: "readReceivedAcks",
    signatures: [["maxCount"]]
  },
  {
    name: "readSentRtp",
    signatures: [["maxCount"]]
  },
  {
    name: "RTCSessionDescription",
    signatures: [["?descriptionInitDict"]]
  },
  {
    name: "revoke",
    signatures: [["permission"]]
  },
  {
    name: "requestAll",
    signatures: [["permissions"]]
  },
  {
    name: "PictureInPictureEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "PresentationConnectionAvailableEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "PresentationConnectionCloseEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "PresentationRequest",
    signatures: [["url"],["urls"]]
  },
  {
    name: "reconnect",
    signatures: [["id"]]
  },
  {
    name: "printJob",
    signatures: [["job_name","document","attributes"]]
  },
  {
    name: "getEncryptedMatchKey",
    signatures: [["reportCollector","options"]]
  },
  {
    name: "PushEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "PushSubscriptionChangeEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "queryUsageAndQuota",
    signatures: [["usageCallback","?errorCallback"]]
  },
  {
    name: "requestQuota",
    signatures: [["newQuotaInBytes","?quotaCallback","?errorCallback"]]
  },
  {
    name: "DOMError",
    signatures: [["name","?message"]]
  },
  {
    name: "AbsoluteOrientationSensor",
    signatures: [["?sensorOptions"]]
  },
  {
    name: "Accelerometer",
    signatures: [["?sensorOptions"]]
  },
  {
    name: "AmbientLightSensor",
    signatures: [["?sensorOptions"]]
  },
  {
    name: "GravitySensor",
    signatures: [["?sensorOptions"]]
  },
  {
    name: "Gyroscope",
    signatures: [["?sensorOptions"]]
  },
  {
    name: "LinearAccelerationSensor",
    signatures: [["?sensorOptions"]]
  },
  {
    name: "Magnetometer",
    signatures: [["?sensorOptions"]]
  },
  {
    name: "populateMatrix",
    signatures: [["targetBuffer"]]
  },
  {
    name: "RelativeOrientationSensor",
    signatures: [["?sensorOptions"]]
  },
  {
    name: "SensorErrorEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "requestPort",
    signatures: [["?options"]]
  },
  {
    name: "ExtendableEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "ExtendableMessageEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "FetchEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "InstallEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "addRoutes",
    signatures: [["rules"]]
  },
  {
    name: "BarcodeDetector",
    signatures: [["?barcodeDetectorOptions"]]
  },
  {
    name: "detect",
    signatures: [["image"]]
  },
  {
    name: "FaceDetector",
    signatures: [["?faceDetectorOptions"]]
  },
  {
    name: "contributeToHistogram",
    signatures: [["contribution"]]
  },
  {
    name: "contributeToHistogramOnEvent",
    signatures: [["event","contribution"]]
  },
  {
    name: "enableDebugMode",
    signatures: [["?options"]]
  },
  {
    name: "SharedStorageAppendMethod",
    signatures: [["key","value","?options"]]
  },
  {
    name: "SharedStorageClearMethod",
    signatures: [["?options"]]
  },
  {
    name: "SharedStorageDeleteMethod",
    signatures: [["key","?options"]]
  },
  {
    name: "SharedStorageSetMethod",
    signatures: [["key","value","?options"]]
  },
  {
    name: "selectURL",
    signatures: [["name","urls","?options"]]
  },
  {
    name: "run",
    signatures: [["name","?options"]]
  },
  {
    name: "transmit",
    signatures: [["sendBuffer","?options"]]
  },
  {
    name: "control",
    signatures: [["controlCode","data"]]
  },
  {
    name: "startTransaction",
    signatures: [["transaction","?options"]]
  },
  {
    name: "getStatusChange",
    signatures: [["readerStates","?options"]]
  },
  {
    name: "SmartCardError",
    signatures: [["message","options"]]
  },
  {
    name: "addFromUri",
    signatures: [["src","?weight"]]
  },
  {
    name: "addFromString",
    signatures: [["string","?weight"]]
  },
  {
    name: "SpeechRecognitionErrorEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "SpeechRecognitionEvent",
    signatures: [["type","?initDict"]]
  },
  {
    name: "SpeechRecognitionPhrase",
    signatures: [["phrase","?boost"]]
  },
  {
    name: "available",
    signatures: [["options"]]
  },
  {
    name: "install",
    signatures: [["options"]],
    receivers: ["SpeechRecognition"]
  },
  {
    name: "install",
    signatures: [["?install_url","?manifest_id"]],
    receivers: ["Navigator"]
  },
  {
    name: "SpeechSynthesisErrorEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "SpeechSynthesisEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "SpeechSynthesisUtterance",
    signatures: [["?text"]]
  },
  {
    name: "requestStorageAccessFor",
    signatures: [["requestedOrigin"]]
  },
  {
    name: "StorageEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "VirtualKeyboardGeometryChangeEvent",
    signatures: [["type"]]
  },
  {
    name: "AnalyserNode",
    signatures: [["context","?options"]]
  },
  {
    name: "AudioBufferSourceNode",
    signatures: [["context","?options"]]
  },
  {
    name: "AudioBuffer",
    signatures: [["options"]]
  },
  {
    name: "AudioContext",
    signatures: [["?contextOptions"]]
  },
  {
    name: "AudioProcessingEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "registerProcessor",
    signatures: [["name","processorCtor"]]
  },
  {
    name: "AudioWorkletNode",
    signatures: [["context","name","?options"]]
  },
  {
    name: "BiquadFilterNode",
    signatures: [["context","?options"]]
  },
  {
    name: "ChannelMergerNode",
    signatures: [["context","?options"]]
  },
  {
    name: "ChannelSplitterNode",
    signatures: [["context","?options"]]
  },
  {
    name: "ConstantSourceNode",
    signatures: [["context","?options"]]
  },
  {
    name: "ConvolverNode",
    signatures: [["context","?options"]]
  },
  {
    name: "DelayNode",
    signatures: [["context","?options"]]
  },
  {
    name: "DynamicsCompressorNode",
    signatures: [["context","?options"]]
  },
  {
    name: "GainNode",
    signatures: [["context","?options"]]
  },
  {
    name: "IIRFilterNode",
    signatures: [["context","options"]]
  },
  {
    name: "MediaElementAudioSourceNode",
    signatures: [["context","options"]]
  },
  {
    name: "MediaStreamAudioDestinationNode",
    signatures: [["context","?options"]]
  },
  {
    name: "MediaStreamAudioSourceNode",
    signatures: [["context","options"]]
  },
  {
    name: "OfflineAudioCompletionEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "OfflineAudioContext",
    signatures: [["options"],["numberOfChannels","numberOfFrames","sampleRate"]]
  },
  {
    name: "OscillatorNode",
    signatures: [["context","?options"]]
  },
  {
    name: "PannerNode",
    signatures: [["context","?options"]]
  },
  {
    name: "PeriodicWave",
    signatures: [["context","?options"]]
  },
  {
    name: "StereoPannerNode",
    signatures: [["context","?options"]]
  },
  {
    name: "WaveShaperNode",
    signatures: [["context","?options"]]
  },
  {
    name: "AudioData",
    signatures: [["init"]]
  },
  {
    name: "AudioDecoder",
    signatures: [["init"]]
  },
  {
    name: "isConfigSupported",
    signatures: [["config"]]
  },
  {
    name: "AudioEncoder",
    signatures: [["init"]]
  },
  {
    name: "EncodedAudioChunk",
    signatures: [["init"]]
  },
  {
    name: "EncodedVideoChunk",
    signatures: [["init"]]
  },
  {
    name: "ImageDecoder",
    signatures: [["init"]]
  },
  {
    name: "VideoColorSpace",
    signatures: [["?init"]]
  },
  {
    name: "VideoDecoder",
    signatures: [["init"]]
  },
  {
    name: "VideoEncoder",
    signatures: [["init"]]
  },
  {
    name: "clipControlEXT",
    signatures: [["origin","depth"]]
  },
  {
    name: "queryCounterEXT",
    signatures: [["query","target"]]
  },
  {
    name: "deleteQueryEXT",
    signatures: [["query"]]
  },
  {
    name: "isQueryEXT",
    signatures: [["query"]]
  },
  {
    name: "beginQueryEXT",
    signatures: [["target","query"]]
  },
  {
    name: "endQueryEXT",
    signatures: [["target"]]
  },
  {
    name: "getQueryEXT",
    signatures: [["target","pname"]]
  },
  {
    name: "getQueryObjectEXT",
    signatures: [["query","pname"]]
  },
  {
    name: "polygonOffsetClampEXT",
    signatures: [["factor","units","clamp"]]
  },
  {
    name: "WebGLContextEvent",
    signatures: [["type","?eventInit"]]
  },
  {
    name: "drawArraysInstancedBaseInstanceWEBGL",
    signatures: [["mode","first","count","instance_count","baseinstance"]]
  },
  {
    name: "drawElementsInstancedBaseVertexBaseInstanceWEBGL",
    signatures: [["mode","count","type","offset","instance_count","basevertex","baseinstance"]]
  },
  {
    name: "multiDrawArraysInstancedBaseInstanceWEBGL",
    signatures: [["mode","firstsList","firstsOffset","countsList","countsOffset","instanceCountsList","instanceCountsOffset","baseInstancesList","baseInstancesOffset","drawcount"]]
  },
  {
    name: "multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL",
    signatures: [["mode","countsList","countsOffset","type","offsetsList","offsetsOffset","instanceCountsList","instanceCountsOffset","baseVerticesList","baseVerticesOffset","baseInstancesList","baseInstancesOffset","drawcount"]]
  },
  {
    name: "polygonModeWEBGL",
    signatures: [["face","mode"]]
  },
  {
    name: "provokingVertexWEBGL",
    signatures: [["provokeMode"]]
  },
  {
    name: "texElement2D",
    signatures: [["target","level","internalformat","format","type","element"]]
  },
  {
    name: "drawingBufferStorage",
    signatures: [["sizedformat","width","height"]]
  },
  {
    name: "framebufferTexturePixelLocalStorageWEBGL",
    signatures: [["plane","texture","level","layer"]]
  },
  {
    name: "framebufferPixelLocalClearValuefvWEBGL",
    signatures: [["plane","value","?srcOffset"]]
  },
  {
    name: "framebufferPixelLocalClearValueivWEBGL",
    signatures: [["plane","value","?srcOffset"]]
  },
  {
    name: "framebufferPixelLocalClearValueuivWEBGL",
    signatures: [["plane","value","?srcOffset"]]
  },
  {
    name: "beginPixelLocalStorageWEBGL",
    signatures: [["loadops"]]
  },
  {
    name: "endPixelLocalStorageWEBGL",
    signatures: [["storeops"]]
  },
  {
    name: "getFramebufferPixelLocalStorageParameterWEBGL",
    signatures: [["plane","pname"]]
  },
  {
    name: "mapAsync",
    signatures: [["mode","?offset","?size"]]
  },
  {
    name: "getMappedRange",
    signatures: [["?offset","?size"]]
  },
  {
    name: "beginRenderPass",
    signatures: [["descriptor"]]
  },
  {
    name: "beginComputePass",
    signatures: [["?descriptor"]]
  },
  {
    name: "copyBufferToBuffer",
    signatures: [["source","destination","?size"],["source","sourceOffset","destination","destinationOffset","?size"]]
  },
  {
    name: "copyBufferToTexture",
    signatures: [["source","destination","copySize"]]
  },
  {
    name: "copyTextureToBuffer",
    signatures: [["source","destination","copySize"]]
  },
  {
    name: "copyTextureToTexture",
    signatures: [["source","destination","copySize"]]
  },
  {
    name: "pushDebugGroup",
    signatures: [["groupLabel"]]
  },
  {
    name: "insertDebugMarker",
    signatures: [["markerLabel"]]
  },
  {
    name: "resolveQuerySet",
    signatures: [["querySet","firstQuery","queryCount","destination","destinationOffset"]]
  },
  {
    name: "writeTimestamp",
    signatures: [["querySet","queryIndex"]]
  },
  {
    name: "clearBuffer",
    signatures: [["buffer","?offset","?size"]]
  },
  {
    name: "setPipeline",
    signatures: [["pipeline"]]
  },
  {
    name: "dispatchWorkgroups",
    signatures: [["workgroupCountX","?workgroupCountY","?workgroupCountZ"]]
  },
  {
    name: "dispatchWorkgroupsIndirect",
    signatures: [["indirectBuffer","indirectOffset"]]
  },
  {
    name: "importExternalTexture",
    signatures: [["descriptor"]]
  },
  {
    name: "createBindGroup",
    signatures: [["descriptor"]]
  },
  {
    name: "createBindGroupLayout",
    signatures: [["descriptor"]]
  },
  {
    name: "createPipelineLayout",
    signatures: [["descriptor"]]
  },
  {
    name: "createShaderModule",
    signatures: [["descriptor"]]
  },
  {
    name: "createRenderPipeline",
    signatures: [["descriptor"]]
  },
  {
    name: "createComputePipeline",
    signatures: [["descriptor"]]
  },
  {
    name: "createRenderPipelineAsync",
    signatures: [["descriptor"]]
  },
  {
    name: "createComputePipelineAsync",
    signatures: [["descriptor"]]
  },
  {
    name: "createCommandEncoder",
    signatures: [["?descriptor"]]
  },
  {
    name: "createRenderBundleEncoder",
    signatures: [["descriptor"]]
  },
  {
    name: "createQuerySet",
    signatures: [["descriptor"]]
  },
  {
    name: "pushErrorScope",
    signatures: [["filter"]]
  },
  {
    name: "GPUInternalError",
    signatures: [["message"]]
  },
  {
    name: "GPUOutOfMemoryError",
    signatures: [["message"]]
  },
  {
    name: "getBindGroupLayout",
    signatures: [["index"]]
  },
  {
    name: "GPUPipelineError",
    signatures: [["?message","options"]]
  },
  {
    name: "setBindGroup",
    signatures: [["index","bindGroup","?dynamicOffsets"],["index","bindGroup","dynamicOffsetsData","dynamicOffsetsDataStart","dynamicOffsetsDataLength"]]
  },
  {
    name: "writeBuffer",
    signatures: [["buffer","bufferOffset","data","?dataElementOffset","?dataElementCount"],["buffer","bufferOffset","data","?dataByteOffset","?byteSize"]]
  },
  {
    name: "writeTexture",
    signatures: [["destination","data","dataLayout","size"]]
  },
  {
    name: "copyExternalImageToTexture",
    signatures: [["source","destination","copySize"]]
  },
  {
    name: "setIndexBuffer",
    signatures: [["buffer","format","?offset","?size"]]
  },
  {
    name: "setVertexBuffer",
    signatures: [["slot","buffer","?offset","?size"]]
  },
  {
    name: "draw",
    signatures: [["vertexCount","?instanceCount","?firstVertex","?firstInstance"]]
  },
  {
    name: "drawIndexed",
    signatures: [["indexCount","?instanceCount","?firstIndex","?baseVertex","?firstInstance"]]
  },
  {
    name: "drawIndirect",
    signatures: [["indirectBuffer","indirectOffset"]]
  },
  {
    name: "drawIndexedIndirect",
    signatures: [["indirectBuffer","indirectOffset"]]
  },
  {
    name: "setViewport",
    signatures: [["x","y","width","height","minDepth","maxDepth"]]
  },
  {
    name: "setScissorRect",
    signatures: [["x","y","width","height"]]
  },
  {
    name: "setBlendConstant",
    signatures: [["color"]]
  },
  {
    name: "setStencilReference",
    signatures: [["reference"]]
  },
  {
    name: "executeBundles",
    signatures: [["bundles"]]
  },
  {
    name: "beginOcclusionQuery",
    signatures: [["queryIndex"]]
  },
  {
    name: "multiDrawIndirect",
    signatures: [["indirectBuffer","indirectOffset","maxDrawCount","?drawCountBuffer","?drawCountBufferOffset"]]
  },
  {
    name: "multiDrawIndexedIndirect",
    signatures: [["indirectBuffer","indirectOffset","maxDrawCount","?drawCountBuffer","?drawCountBufferOffset"]]
  },
  {
    name: "createView",
    signatures: [["?descriptor"]]
  },
  {
    name: "GPUUncapturedErrorEvent",
    signatures: [["type","gpuUncapturedErrorEventInitDict"]]
  },
  {
    name: "GPUValidationError",
    signatures: [["message"]]
  },
  {
    name: "requestAdapter",
    signatures: [["?options"]]
  },
  {
    name: "MIDIConnectionEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "MIDIMessageEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "CloseEvent",
    signatures: [["type","?eventInitDict"]]
  },
  {
    name: "WebSocketError",
    signatures: [["?message","?init"]]
  },
  {
    name: "WebSocketStream",
    signatures: [["url","?options"]]
  },
  {
    name: "WebSocket",
    signatures: [["url","?protocols"]]
  },
  {
    name: "WebTransportError",
    signatures: [["?init"]]
  },
  {
    name: "WebTransport",
    signatures: [["url","?options"]]
  },
  {
    name: "USBAlternateInterface",
    signatures: [["deviceInterface","alternateSetting"]]
  },
  {
    name: "USBConfiguration",
    signatures: [["device","configurationValue"]]
  },
  {
    name: "USBConnectionEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "selectConfiguration",
    signatures: [["configurationValue"]]
  },
  {
    name: "claimInterface",
    signatures: [["interfaceNumber"]]
  },
  {
    name: "releaseInterface",
    signatures: [["interfaceNumber"]]
  },
  {
    name: "selectAlternateInterface",
    signatures: [["interfaceNumber","alternateSetting"]]
  },
  {
    name: "controlTransferIn",
    signatures: [["setup","length"]]
  },
  {
    name: "controlTransferOut",
    signatures: [["setup","?data"]]
  },
  {
    name: "clearHalt",
    signatures: [["direction","endpointNumber"]]
  },
  {
    name: "transferIn",
    signatures: [["endpointNumber","length"]]
  },
  {
    name: "transferOut",
    signatures: [["endpointNumber","data"]]
  },
  {
    name: "isochronousTransferIn",
    signatures: [["endpointNumber","packetLengths"]]
  },
  {
    name: "isochronousTransferOut",
    signatures: [["endpointNumber","data","packetLengths"]]
  },
  {
    name: "USBEndpoint",
    signatures: [["alternate","endpointNumber","direction"]]
  },
  {
    name: "USBInTransferResult",
    signatures: [["status","?data"]]
  },
  {
    name: "USBInterface",
    signatures: [["configuration","interfaceNumber"]]
  },
  {
    name: "USBIsochronousInTransferPacket",
    signatures: [["status","?data"]]
  },
  {
    name: "USBIsochronousInTransferResult",
    signatures: [["packets","?data"]]
  },
  {
    name: "USBIsochronousOutTransferPacket",
    signatures: [["status","?bytesWritten"]]
  },
  {
    name: "USBIsochronousOutTransferResult",
    signatures: [["packets"]]
  },
  {
    name: "USBOutTransferResult",
    signatures: [["status","?bytesWritten"]]
  },
  {
    name: "WindowControlsOverlayGeometryChangeEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "getPose",
    signatures: [["relative_to"]]
  },
  {
    name: "XRInputSourceEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "XRInputSourcesChangeEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "XRRay",
    signatures: [["transform"],["?origin","?direction"]]
  },
  {
    name: "XRReferenceSpaceEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "getOffsetReferenceSpace",
    signatures: [["originOffset"]]
  },
  {
    name: "XRRigidTransform",
    signatures: [["?position","?orientation"]]
  },
  {
    name: "XRSessionEvent",
    signatures: [["type","eventInitDict"]]
  },
  {
    name: "isSessionSupported",
    signatures: [["mode"]]
  },
  {
    name: "requestSession",
    signatures: [["mode","?options"]]
  },
  {
    name: "XRWebGLLayer",
    signatures: [["session","context","?layerInit"]]
  },
  {
    name: "getViewport",
    signatures: [["view"]]
  },
  {
    name: "getNativeFramebufferScaleFactor",
    signatures: [["session"]]
  }
];
