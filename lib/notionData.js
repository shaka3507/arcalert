import{useState,useRef,useCallback,useEffect,useMemo}from"react";const E="cbi",t="cc",_="cm",A="dbi",T="ub",R="ubi",a="um",l="create",O="db-id",m="delete",u="delete-id",b="page",I="result",N="result-type",Y="update",p="update-page-id",B="BLOCKS",C="checkbox",f="date",x="email",Q="id",H="multi_select",j="number",v="phone_number",V="relation",X="rich_text",Z="select",q="status",w="title",z="url",J="formula.string",W="formula.boolean",$="formula.date",ee="DATABASE_ID",Ee="DATABASE_TITLE",te="END_DATE",Ae="METADATA",Te="PAGE_ID",ie="PRIMARY_DATABASE",ce="PROPERTIES",le="RELATION_DATABASES",de="RELATION_DATABASE_ID",re="RELATION_PAGE_ID",oe="START_DATE",me="TYPE",ue="VALUE",Pe="CURSOR_DATA",se="CURSOR_NEXT",be="PROTO_RESPONSE_KEY_SNAPSHOT_TIMESTAMP",Ne="i",Ye="c",Ue="s",Le="QUERY_RESPONSE_KEY_RESULT",Be="QUERY_RESPONSE_KEY_SUCCESS";/** Detect free variable `global` from Node.js. */var freeGlobal=typeof global=="object"&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=typeof self=="object"&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function("return this")();/** Built-in value references. */var Symbol$1=root.Symbol;/** Used for built-in method references. */var objectProto$c=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$9=objectProto$c.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString$1=objectProto$c.toString;/** Built-in value references. */var symToStringTag$1=Symbol$1?Symbol$1.toStringTag:undefined;/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function getRawTag(value){var isOwn=hasOwnProperty$9.call(value,symToStringTag$1),tag=value[symToStringTag$1];try{value[symToStringTag$1]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString$1.call(value);if(unmasked){if(isOwn){value[symToStringTag$1]=tag;}else{delete value[symToStringTag$1];}}return result;}/** Used for built-in method references. */var objectProto$b=Object.prototype;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto$b.toString;/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function objectToString(value){return nativeObjectToString.call(value);}/** `Object#toString` result references. */var nullTag="[object Null]",undefinedTag="[object Undefined]";/** Built-in value references. */var symToStringTag=Symbol$1?Symbol$1.toStringTag:undefined;/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(value){return value!=null&&typeof value=="object";}/** `Object#toString` result references. */var symbolTag$1="[object Symbol]";/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function isSymbol(value){return typeof value=="symbol"||isObjectLike(value)&&baseGetTag(value)==symbolTag$1;}/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */var isArray=Array.isArray;/** Used as references for various `Number` constants. */var INFINITY$1=1/0;/** Used to convert symbols to primitives and strings. */var symbolProto$1=Symbol$1?Symbol$1.prototype:undefined,symbolToString=symbolProto$1?symbolProto$1.toString:undefined;/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=="string"){return value;}if(isArray(value)){// Recursively convert values (susceptible to call stack limits).
return arrayMap(value,baseToString)+"";}if(isSymbol(value)){return symbolToString?symbolToString.call(value):"";}var result=value+"";return result=="0"&&1/value==-INFINITY$1?"-0":result;}/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject(value){var type=typeof value;return value!=null&&(type=="object"||type=="function");}/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */function identity(value){return value;}/** `Object#toString` result references. */var asyncTag="[object AsyncFunction]",funcTag$1="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]";/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function isFunction(value){if(!isObject(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag$1||tag==genTag||tag==asyncTag||tag==proxyTag;}/** Used to detect overreaching core-js shims. */var coreJsData=root["__core-js_shared__"];/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||"");return uid?"Symbol(src)_1."+uid:"";}();/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/** Used for built-in method references. */var funcProto$1=Function.prototype;/** Used to resolve the decompiled source of functions. */var funcToString$1=funcProto$1.toString;/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString$1.call(func);}catch(e){}try{return func+"";}catch(e){}}return"";}/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used for built-in method references. */var funcProto=Function.prototype,objectProto$a=Object.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty$8=objectProto$a.hasOwnProperty;/** Used to detect if a method is native. */var reIsNative=RegExp("^"+funcToString.call(hasOwnProperty$8).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/* Built-in method references that are verified to be native. */var WeakMap=getNative(root,"WeakMap");/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER$1=9007199254740991;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){var type=typeof value;length=length==null?MAX_SAFE_INTEGER$1:length;return!!length&&(type=="number"||type!="symbol"&&reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function eq(value,other){return value===other||value!==value&&other!==other;}/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function isLength(value){return typeof value=="number"&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/** Used for built-in method references. */var objectProto$9=Object.prototype;/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=="function"&&Ctor.prototype||objectProto$9;return value===proto;}/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/** `Object#toString` result references. */var argsTag$2="[object Arguments]";/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag$2;}/** Used for built-in method references. */var objectProto$8=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$7=objectProto$8.hasOwnProperty;/** Built-in value references. */var propertyIsEnumerable$1=objectProto$8.propertyIsEnumerable;/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty$7.call(value,"callee")&&!propertyIsEnumerable$1.call(value,"callee");};/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return false;}/** Detect free variable `exports`. */var freeExports$1=typeof exports=="object"&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule$1=freeExports$1&&typeof module=="object"&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports$1=freeModule$1&&freeModule$1.exports===freeExports$1;/** Built-in value references. */var Buffer=moduleExports$1?root.Buffer:undefined;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeIsBuffer=Buffer?Buffer.isBuffer:undefined;/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var isBuffer=nativeIsBuffer||stubFalse;/** `Object#toString` result references. */var argsTag$1="[object Arguments]",arrayTag$1="[object Array]",boolTag$1="[object Boolean]",dateTag$1="[object Date]",errorTag$1="[object Error]",funcTag="[object Function]",mapTag$3="[object Map]",numberTag$1="[object Number]",objectTag$2="[object Object]",regexpTag$1="[object RegExp]",setTag$3="[object Set]",stringTag$1="[object String]",weakMapTag$1="[object WeakMap]";var arrayBufferTag$1="[object ArrayBuffer]",dataViewTag$2="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]";/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag$1]=typedArrayTags[arrayTag$1]=typedArrayTags[arrayBufferTag$1]=typedArrayTags[boolTag$1]=typedArrayTags[dataViewTag$2]=typedArrayTags[dateTag$1]=typedArrayTags[errorTag$1]=typedArrayTags[funcTag]=typedArrayTags[mapTag$3]=typedArrayTags[numberTag$1]=typedArrayTags[objectTag$2]=typedArrayTags[regexpTag$1]=typedArrayTags[setTag$3]=typedArrayTags[stringTag$1]=typedArrayTags[weakMapTag$1]=false;/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function baseUnary(func){return function(value){return func(value);};}/** Detect free variable `exports`. */var freeExports=typeof exports=="object"&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&typeof module=="object"&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{// Use `util.types` for Node.js 10+.
var types=freeModule&&freeModule.require&&freeModule.require("util").types;if(types){return types;}// Legacy `process.binding('util')` for Node.js < 10.
return freeProcess&&freeProcess.binding&&freeProcess.binding("util");}catch(e){}}();/* Node.js helper references. */var nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;/** Used for built-in method references. */var objectProto$7=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$6=objectProto$7.hasOwnProperty;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if(hasOwnProperty$6.call(value,key)&&!(skipIndexes&&// Safari 9 has enumerable `arguments.length` in strict mode.
(key=="length"||// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=="offset"||key=="parent")||// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=="buffer"||key=="byteLength"||key=="byteOffset")||// Skip index properties.
isIndex(key,length)))){result.push(key);}}return result;}/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(func,transform){return function(arg){return func(transform(arg));};}/* Built-in method references for those with the same name as other `lodash` methods. */var nativeKeys=overArg(Object.keys,Object);/** Used for built-in method references. */var objectProto$6=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$5=objectProto$6.hasOwnProperty;/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty$5.call(object,key)&&key!="constructor"){result.push(key);}}return result;}/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */function isKey(value,object){if(isArray(value)){return false;}var type=typeof value;if(type=="number"||type=="symbol"||type=="boolean"||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}/* Built-in method references that are verified to be native. */var nativeCreate=getNative(Object,"create");/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED$2="__lodash_hash_undefined__";/** Used for built-in method references. */var objectProto$5=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$4=objectProto$5.hasOwnProperty;/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED$2?undefined:result;}return hasOwnProperty$4.call(data,key)?data[key]:undefined;}/** Used for built-in method references. */var objectProto$4=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$3=objectProto$4.hasOwnProperty;/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty$3.call(data,key);}/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED$1="__lodash_hash_undefined__";/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED$1:value;return this;}/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype["delete"]=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[];this.size=0;}/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/** Used for built-in method references. */var arrayProto$1=Array.prototype;/** Built-in value references. */var splice$1=arrayProto$1.splice;/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice$1.call(data,index,1);}--this.size;return true;}/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}return this;}/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype["delete"]=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/* Built-in method references that are verified to be native. */var Map$1=getNative(root,"Map");/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.size=0;this.__data__={hash:new Hash,map:new(Map$1||ListCache),string:new Hash};}/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(value){var type=typeof value;return type=="string"||type=="number"||type=="symbol"||type=="boolean"?value!=="__proto__":value===null;}/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=="string"?"string":"hash"]:data.map;}/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(key){var result=getMapData(this,key)["delete"](key);this.size-=result?1:0;return result;}/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype["delete"]=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/** Error message constants. */var FUNC_ERROR_TEXT="Expected a function";/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */function memoize(func,resolver){if(typeof func!="function"||resolver!=null&&typeof resolver!="function"){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result;};memoized.cache=new(memoize.Cache||MapCache);return memoized;}// Expose `MapCache`.
memoize.Cache=MapCache;/** Used as the maximum memoize cache size. */var MAX_MEMOIZE_SIZE=500;/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */function memoizeCapped(func){var result=memoize(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear();}return key;});var cache=result.cache;return result;}/** Used to match property names within property paths. */var rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */var stringToPath=memoizeCapped(function(string){var result=[];if(string.charCodeAt(0)===46/* . */){result.push("");}string.replace(rePropName,function(match,number,quote,subString){result.push(quote?subString.replace(reEscapeChar,"$1"):number||match);});return result;});/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */function toString(value){return value==null?"":baseToString(value);}/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */function castPath(value,object){if(isArray(value)){return value;}return isKey(value,object)?[value]:stringToPath(toString(value));}/** Used as references for various `Number` constants. */var INFINITY=1/0;/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */function toKey(value){if(typeof value=="string"||isSymbol(value)){return value;}var result=value+"";return result=="0"&&1/value==-INFINITY?"-0":result;}/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */function baseGet(object,path){path=castPath(path,object);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined;}/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */function baseSlice(array,start,end){var index=-1,length=array.length;if(start<0){start=-start>length?0:length+start;}end=end>length?length:end;if(end<0){end+=length;}length=start>end?0:end-start>>>0;start>>>=0;var result=Array(length);while(++index<length){result[index]=array[index+start];}return result;}/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function stackClear(){this.__data__=new ListCache;this.size=0;}/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(key){var data=this.__data__,result=data["delete"](key);this.size=data.size;return result;}/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(key){return this.__data__.get(key);}/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(key){return this.__data__.has(key);}/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map$1||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype["delete"]=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function stubArray(){return[];}/** Used for built-in method references. */var objectProto$3=Object.prototype;/** Built-in value references. */var propertyIsEnumerable=objectProto$3.propertyIsEnumerable;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols;/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbols=!nativeGetSymbols?stubArray:function(object){if(object==null){return[];}object=Object(object);return arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable.call(object,symbol);});};/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/* Built-in method references that are verified to be native. */var DataView=getNative(root,"DataView");/* Built-in method references that are verified to be native. */var Promise$1=getNative(root,"Promise");/* Built-in method references that are verified to be native. */var Set=getNative(root,"Set");/** `Object#toString` result references. */var mapTag$2="[object Map]",objectTag$1="[object Object]",promiseTag="[object Promise]",setTag$2="[object Set]",weakMapTag="[object WeakMap]";var dataViewTag$1="[object DataView]";/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map$1),promiseCtorString=toSource(Promise$1),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag$1||Map$1&&getTag(new Map$1)!=mapTag$2||Promise$1&&getTag(Promise$1.resolve())!=promiseTag||Set&&getTag(new Set)!=setTag$2||WeakMap&&getTag(new WeakMap)!=weakMapTag){getTag=function(value){var result=baseGetTag(value),Ctor=result==objectTag$1?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):"";if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag$1;case mapCtorString:return mapTag$2;case promiseCtorString:return promiseTag;case setCtorString:return setTag$2;case weakMapCtorString:return weakMapTag;}}return result;};}/** Built-in value references. */var Uint8Array$1=root.Uint8Array;/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED="__lodash_hash_undefined__";/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */function setCacheHas(value){return this.__data__.has(value);}/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache;while(++index<length){this.add(values[index]);}}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function cacheHas(cache,key){return cache.has(key);}/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG$5=1,COMPARE_UNORDERED_FLAG$3=2;/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG$5,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Check that cyclic values are equal.
var arrStacked=stack.get(array);var othStacked=stack.get(other);if(arrStacked&&othStacked){return arrStacked==other&&othStacked==array;}var index=-1,result=true,seen=bitmask&COMPARE_UNORDERED_FLAG$3?new SetCache:undefined;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break;}}stack["delete"](array);stack["delete"](other);return result;}/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG$4=1,COMPARE_UNORDERED_FLAG$2=2;/** `Object#toString` result references. */var boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",mapTag$1="[object Map]",numberTag="[object Number]",regexpTag="[object RegExp]",setTag$1="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]";var arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]";/** Used to convert symbols to primitives and strings. */var symbolProto=Symbol$1?Symbol$1.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array$1(object),new Uint8Array$1(other))){return false;}return true;case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return object==other+"";case mapTag$1:var convert=mapToArray;case setTag$1:var isPartial=bitmask&COMPARE_PARTIAL_FLAG$4;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=COMPARE_UNORDERED_FLAG$2;// Recursively compare objects (susceptible to call stack limits).
stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack["delete"](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG$3=1;/** Used for built-in method references. */var objectProto$2=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$2=objectProto$2.hasOwnProperty;/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG$3,objProps=getAllKeys(object),objLength=objProps.length,othProps=getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty$2.call(other,key))){return false;}}// Check that cyclic values are equal.
var objStacked=stack.get(object);var othStacked=stack.get(other);if(objStacked&&othStacked){return objStacked==other&&othStacked==object;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=="constructor");}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
if(objCtor!=othCtor&&"constructor"in object&&"constructor"in other&&!(typeof objCtor=="function"&&objCtor instanceof objCtor&&typeof othCtor=="function"&&othCtor instanceof othCtor)){result=false;}}stack["delete"](object);stack["delete"](other);return result;}/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG$2=1;/** `Object#toString` result references. */var argsTag="[object Arguments]",arrayTag="[object Array]",objectTag="[object Object]";/** Used for built-in method references. */var objectProto$1=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$1=objectProto$1.hasOwnProperty;/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=objIsArr?arrayTag:getTag(object),othTag=othIsArr?arrayTag:getTag(other);objTag=objTag==argsTag?objectTag:objTag;othTag=othTag==argsTag?objectTag:othTag;var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other)){return false;}objIsArr=true;objIsObj=false;}if(isSameTag&&!objIsObj){stack||(stack=new Stack);return objIsArr||isTypedArray(object)?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);}if(!(bitmask&COMPARE_PARTIAL_FLAG$2)){var objIsWrapped=objIsObj&&hasOwnProperty$1.call(object,"__wrapped__"),othIsWrapped=othIsObj&&hasOwnProperty$1.call(other,"__wrapped__");if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack);return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack);return equalObjects(object,other,bitmask,customizer,equalFunc,stack);}/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true;}if(value==null||other==null||!isObjectLike(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);}/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG$1=1,COMPARE_UNORDERED_FLAG$1=2;/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index;if(object==null){return!length;}object=Object(object);while(index--){var data=matchData[index];if(data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack;var result;if(!(result===undefined?baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG$1|COMPARE_UNORDERED_FLAG$1,customizer,stack):result)){return false;}}}return true;}/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */function isStrictComparable(value){return value===value&&!isObject(value);}/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object));};}/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */function baseHasIn(object,key){return object!=null&&key in Object(object);}/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */function hasPath(object,path,hasFunc){path=castPath(path,object);var index=-1,length=path.length,result=false;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result||++index!=length){return result;}length=object==null?0:object.length;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object));}/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG);};}/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
if(typeof value=="function"){return value;}if(value==null){return identity;}if(typeof value=="object"){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */function last(array){var length=array==null?0:array.length;return length?array[length-1]:undefined;}/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */function parent(object,path){return path.length<2?object:baseGet(object,baseSlice(path,0,-1));}/** `Object#toString` result references. */var mapTag="[object Map]",setTag="[object Set]";/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */function isEmpty(value){if(value==null){return true;}if(isArrayLike(value)&&(isArray(value)||typeof value=="string"||typeof value.splice=="function"||isBuffer(value)||isTypedArray(value)||isArguments(value))){return!value.length;}var tag=getTag(value);if(tag==mapTag||tag==setTag){return!value.size;}if(isPrototype(value)){return!baseKeys(value).length;}for(var key in value){if(hasOwnProperty.call(value,key)){return false;}}return true;}/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */function isNil(value){return value==null;}/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */function baseUnset(object,path){path=castPath(path,object);object=parent(object,path);return object==null||delete object[toKey(last(path))];}/** Used for built-in method references. */var arrayProto=Array.prototype;/** Built-in value references. */var splice=arrayProto.splice;/**
 * The base implementation of `_.pullAt` without support for individual
 * indexes or capturing the removed elements.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {number[]} indexes The indexes of elements to remove.
 * @returns {Array} Returns `array`.
 */function basePullAt(array,indexes){var length=array?indexes.length:0,lastIndex=length-1;while(length--){var index=indexes[length];if(length==lastIndex||index!==previous){var previous=index;if(isIndex(index)){splice.call(array,index,1);}else{baseUnset(array,index);}}}return array;}/**
 * Removes all elements from `array` that `predicate` returns truthy for
 * and returns an array of the removed elements. The predicate is invoked
 * with three arguments: (value, index, array).
 *
 * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
 * to pull elements from an array by value.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = [1, 2, 3, 4];
 * var evens = _.remove(array, function(n) {
 *   return n % 2 == 0;
 * });
 *
 * console.log(array);
 * // => [1, 3]
 *
 * console.log(evens);
 * // => [2, 4]
 */function remove(array,predicate){var result=[];if(!(array&&array.length)){return result;}var index=-1,indexes=[],length=array.length;predicate=baseIteratee(predicate);while(++index<length){var value=array[index];if(predicate(value,index,array)){result.push(value);indexes.push(index);}}basePullAt(array,indexes);return result;}const SEARCH_TYPE="SEARCH_TYPE";const SEARCH_TYPE_COMPLEX="SEARCH_TYPE_COMPLEX";const SEARCH_TYPE_SIMPLE="SEARCH_TYPE_SIMPLE";const SEARCH_INFO="SEARCH_INFO";const SEARCH_QUERY="SEARCH_QUERY";const SEARCH_DEPTH="SEARCH_DEPTH";//KEYS FOR OUR DATA OBJECTS
const IDGMD_FILTERED_DATA="IDGMD_FILTERED_DATA";const IDGMD_LIVE_DATA="IDGMD_LIVE_DATA";const IDGMD_DATA="IDGMD_DATA";const IDGMD_VALID_DATA="IDGMD_VALID_DATA";const IDGMD_PRIMARY_DBID="IDGMD_PRIMARY_DBID";const IDGMD_RELATION_DBIDS="IDGMD_RELATION_DBIDS";const isNotionDataLoaded=jsonObject=>{return!isNil(jsonObject);};const isNotionDataValid=jsonObject=>{if(isNotionDataLoaded(jsonObject)){return jsonObject[IDGMD_VALID_DATA];}return false;};const isNotionDataLive=jsonObject=>{return jsonObject[IDGMD_LIVE_DATA];};const isNotionDataFiltered=jsonObject=>{if(isNotionDataValid(jsonObject)){return jsonObject[IDGMD_FILTERED_DATA];}return false;};const getNotionDataPrimaryDbId=jsonObject=>{if(isNotionDataValid(jsonObject)){return jsonObject[IDGMD_PRIMARY_DBID];}return null;};const getNotionDataRelationDbIds=jsonObject=>{if(isNotionDataValid(jsonObject)){return jsonObject[IDGMD_RELATION_DBIDS];}return[];};const getNotionDataDb=(jsonObject,dbId)=>{if(isNotionDataValid(jsonObject)){const job=getData(jsonObject,dbId);if(!isNil(job)){const primary=job[ie];if(primary[ee]===dbId){return primary;}for(var i=0;i<job[le].length;i++){const db=job[le][i];if(db[ee]===dbId){return db;}}}}return null;};const getData=(jsonObject,dbId)=>{if(isNotionDataValid(jsonObject)){const filtered=isNotionDataFiltered(jsonObject);const src=jsonObject[IDGMD_DATA];const job=filtered?src[dbId]:src;return job;}return null;};const getDbIdByName=(jsonObject,name)=>{if(isNotionDataValid(jsonObject)){try{const primary=jsonObject[ie];if(primary[Ee]===name){return primary[ee];}const rels=jsonObject[le];for(var i=0;i<rels.length;i++){const db=rels[i];if(db[Ee]===name){return db[ee];}}return null;}catch(err){return null;}}return null;};const getNotionDataPage=(jsonObject,dbId,pageId)=>{const dbIds=isNil(dbId)?getNotionDataAllDbIds(jsonObject):[dbId];for(const xdbId of dbIds){const dbBlocks=getNotionDataPages(jsonObject,xdbId);const pageIdx=dbBlocks.findIndex(block=>{const blockIdMeta=block[Ae];const blockIdObj=blockIdMeta[Q];const blockId=blockIdObj[ue];return blockId===pageId;});if(pageIdx>=0){return dbBlocks[pageIdx];}}return null;};const getNotionDataPages=(jsonObject,dbId)=>{if(isNotionDataValid(jsonObject)){try{const db=getNotionDataDb(jsonObject,dbId);const dbBlocks=db[B];return dbBlocks;}catch(err){console.log(err);}}return[];};const getNotionDataAllDbIds=notionData=>{return[getNotionDataPrimaryDbId(notionData),...getNotionDataRelationDbIds(notionData)];};const spliceNotionPage=(notionData,pgId)=>{const x=structuredClone(notionData);const allDbIds=getNotionDataAllDbIds(x);for(const dbId of allDbIds){const db=getNotionDataDb(x,dbId);const dbPgs=db[B];const idx=dbPgs.findIndex(x=>x[Ae][Q][ue]===pgId);if(idx>=0){dbPgs.splice(idx,1);}for(const pg of dbPgs){const pgProps=pg[ce];for(const[key,value]of Object.entries(pgProps)){if(value[me]===V){const relValue=value[ue];const relIdx=relValue.findIndex(x=>x[re]===pgId);if(relIdx>=0){relValue.splice(relIdx,1);}}}}}return x;};const getNotionDataNextCursorObject=jsonObject=>{const primaryDbId=getNotionDataPrimaryDbId(jsonObject);const db=getNotionDataDb(jsonObject,primaryDbId);if(isNil(db)){return null;}const cursorData=db[Pe];return cursorData;};const hasNotionDataNextCursor=jsonObject=>{const nextCursorData=getNotionDataNextCursorObject(jsonObject);if(!isNil(nextCursorData)){return nextCursorData[se];}return false;};const getNotionDataNextCursor=jsonObject=>{if(hasNotionDataNextCursor(jsonObject)){const obj=getNotionDataNextCursorObject(jsonObject);if(!isNil(obj)){return obj[se];}}return null;};var commonjsGlobal=typeof globalThis!=="undefined"?globalThis:typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x["default"]:x;}function commonjsRequire(path){throw new Error('Could not dynamically require "'+path+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');}var moment$1={exports:{}};(function(module1,exports1){(function(global1,factory){module1.exports=factory();})(commonjsGlobal,function(){var hookCallback;function hooks(){return hookCallback.apply(null,arguments);}// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback(callback){hookCallback=callback;}function isArray(input){return input instanceof Array||Object.prototype.toString.call(input)==="[object Array]";}function isObject(input){// IE8 will treat undefined and null as object if it wasn't for
// input != null
return input!=null&&Object.prototype.toString.call(input)==="[object Object]";}function hasOwnProp(a,b){return Object.prototype.hasOwnProperty.call(a,b);}function isObjectEmpty(obj){if(Object.getOwnPropertyNames){return Object.getOwnPropertyNames(obj).length===0;}else{var k;for(k in obj){if(hasOwnProp(obj,k)){return false;}}return true;}}function isUndefined(input){return input===void 0;}function isNumber(input){return typeof input==="number"||Object.prototype.toString.call(input)==="[object Number]";}function isDate(input){return input instanceof Date||Object.prototype.toString.call(input)==="[object Date]";}function map(arr,fn){var res=[],i,arrLen=arr.length;for(i=0;i<arrLen;++i){res.push(fn(arr[i],i));}return res;}function extend(a,b){for(var i in b){if(hasOwnProp(b,i)){a[i]=b[i];}}if(hasOwnProp(b,"toString")){a.toString=b.toString;}if(hasOwnProp(b,"valueOf")){a.valueOf=b.valueOf;}return a;}function createUTC(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,true).utc();}function defaultParsingFlags(){// We need to deep clone this object.
return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidEra:null,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false,parsedDateParts:[],era:null,meridiem:null,rfc2822:false,weekdayMismatch:false};}function getParsingFlags(m){if(m._pf==null){m._pf=defaultParsingFlags();}return m._pf;}var some;if(Array.prototype.some){some=Array.prototype.some;}else{some=function(fun){var t=Object(this),len=t.length>>>0,i;for(i=0;i<len;i++){if(i in t&&fun.call(this,t[i],i,t)){return true;}}return false;};}function isValid(m){var flags=null,parsedParts=false,isNowValid=m._d&&!isNaN(m._d.getTime());if(isNowValid){flags=getParsingFlags(m);parsedParts=some.call(flags.parsedDateParts,function(i){return i!=null;});isNowValid=flags.overflow<0&&!flags.empty&&!flags.invalidEra&&!flags.invalidMonth&&!flags.invalidWeekday&&!flags.weekdayMismatch&&!flags.nullInput&&!flags.invalidFormat&&!flags.userInvalidated&&(!flags.meridiem||flags.meridiem&&parsedParts);if(m._strict){isNowValid=isNowValid&&flags.charsLeftOver===0&&flags.unusedTokens.length===0&&flags.bigHour===undefined;}}if(Object.isFrozen==null||!Object.isFrozen(m)){m._isValid=isNowValid;}else{return isNowValid;}return m._isValid;}function createInvalid(flags){var m=createUTC(NaN);if(flags!=null){extend(getParsingFlags(m),flags);}else{getParsingFlags(m).userInvalidated=true;}return m;}// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties=hooks.momentProperties=[],updateInProgress=false;function copyConfig(to,from){var i,prop,val,momentPropertiesLen=momentProperties.length;if(!isUndefined(from._isAMomentObject)){to._isAMomentObject=from._isAMomentObject;}if(!isUndefined(from._i)){to._i=from._i;}if(!isUndefined(from._f)){to._f=from._f;}if(!isUndefined(from._l)){to._l=from._l;}if(!isUndefined(from._strict)){to._strict=from._strict;}if(!isUndefined(from._tzm)){to._tzm=from._tzm;}if(!isUndefined(from._isUTC)){to._isUTC=from._isUTC;}if(!isUndefined(from._offset)){to._offset=from._offset;}if(!isUndefined(from._pf)){to._pf=getParsingFlags(from);}if(!isUndefined(from._locale)){to._locale=from._locale;}if(momentPropertiesLen>0){for(i=0;i<momentPropertiesLen;i++){prop=momentProperties[i];val=from[prop];if(!isUndefined(val)){to[prop]=val;}}}return to;}// Moment prototype object
function Moment(config){copyConfig(this,config);this._d=new Date(config._d!=null?config._d.getTime():NaN);if(!this.isValid()){this._d=new Date(NaN);}// Prevent infinite loop in case updateOffset creates new moment
// objects.
if(updateInProgress===false){updateInProgress=true;hooks.updateOffset(this);updateInProgress=false;}}function isMoment(obj){return obj instanceof Moment||obj!=null&&obj._isAMomentObject!=null;}function warn(msg){if(hooks.suppressDeprecationWarnings===false&&typeof console!=="undefined"&&console.warn){console.warn("Deprecation warning: "+msg);}}function deprecate(msg,fn){var firstTime=true;return extend(function(){if(hooks.deprecationHandler!=null){hooks.deprecationHandler(null,msg);}if(firstTime){var args=[],arg,i,key,argLen=arguments.length;for(i=0;i<argLen;i++){arg="";if(typeof arguments[i]==="object"){arg+="\n["+i+"] ";for(key in arguments[0]){if(hasOwnProp(arguments[0],key)){arg+=key+": "+arguments[0][key]+", ";}}arg=arg.slice(0,-2)// Remove trailing comma and space
;}else{arg=arguments[i];}args.push(arg);}warn(msg+"\nArguments: "+Array.prototype.slice.call(args).join("")+"\n"+new Error().stack);firstTime=false;}return fn.apply(this,arguments);},fn);}var deprecations={};function deprecateSimple(name,msg){if(hooks.deprecationHandler!=null){hooks.deprecationHandler(name,msg);}if(!deprecations[name]){warn(msg);deprecations[name]=true;}}hooks.suppressDeprecationWarnings=false;hooks.deprecationHandler=null;function isFunction(input){return typeof Function!=="undefined"&&input instanceof Function||Object.prototype.toString.call(input)==="[object Function]";}function set(config){var prop,i;for(i in config){if(hasOwnProp(config,i)){prop=config[i];if(isFunction(prop)){this[i]=prop;}else{this["_"+i]=prop;}}}this._config=config;// Lenient ordinal parsing accepts just a number in addition to
// number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
// TODO: Remove "ordinalParse" fallback in next major release.
this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source);}function mergeConfigs(parentConfig,childConfig){var res=extend({},parentConfig),prop;for(prop in childConfig){if(hasOwnProp(childConfig,prop)){if(isObject(parentConfig[prop])&&isObject(childConfig[prop])){res[prop]={};extend(res[prop],parentConfig[prop]);extend(res[prop],childConfig[prop]);}else if(childConfig[prop]!=null){res[prop]=childConfig[prop];}else{delete res[prop];}}}for(prop in parentConfig){if(hasOwnProp(parentConfig,prop)&&!hasOwnProp(childConfig,prop)&&isObject(parentConfig[prop])){// make sure changes to properties don't modify parent config
res[prop]=extend({},res[prop]);}}return res;}function Locale(config){if(config!=null){this.set(config);}}var keys;if(Object.keys){keys=Object.keys;}else{keys=function(obj){var i,res=[];for(i in obj){if(hasOwnProp(obj,i)){res.push(i);}}return res;};}var defaultCalendar={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function calendar(key,mom,now){var output=this._calendar[key]||this._calendar["sameElse"];return isFunction(output)?output.call(mom,now):output;}function zeroFill(number,targetLength,forceSign){var absNumber=""+Math.abs(number),zerosToFill=targetLength-absNumber.length,sign=number>=0;return(sign?forceSign?"+":"":"-")+Math.pow(10,Math.max(0,zerosToFill)).toString().substr(1)+absNumber;}var formattingTokens=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,localFormattingTokens=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,formatFunctions={},formatTokenFunctions={};// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken(token,padded,ordinal,callback){var func=callback;if(typeof callback==="string"){func=function(){return this[callback]();};}if(token){formatTokenFunctions[token]=func;}if(padded){formatTokenFunctions[padded[0]]=function(){return zeroFill(func.apply(this,arguments),padded[1],padded[2]);};}if(ordinal){formatTokenFunctions[ordinal]=function(){return this.localeData().ordinal(func.apply(this,arguments),token);};}}function removeFormattingTokens(input){if(input.match(/\[[\s\S]/)){return input.replace(/^\[|\]$/g,"");}return input.replace(/\\/g,"");}function makeFormatFunction(format){var array=format.match(formattingTokens),i,length;for(i=0,length=array.length;i<length;i++){if(formatTokenFunctions[array[i]]){array[i]=formatTokenFunctions[array[i]];}else{array[i]=removeFormattingTokens(array[i]);}}return function(mom){var output="",i;for(i=0;i<length;i++){output+=isFunction(array[i])?array[i].call(mom,format):array[i];}return output;};}// format date using native date object
function formatMoment(m,format){if(!m.isValid()){return m.localeData().invalidDate();}format=expandFormat(format,m.localeData());formatFunctions[format]=formatFunctions[format]||makeFormatFunction(format);return formatFunctions[format](m);}function expandFormat(format,locale){var i=5;function replaceLongDateFormatTokens(input){return locale.longDateFormat(input)||input;}localFormattingTokens.lastIndex=0;while(i>=0&&localFormattingTokens.test(format)){format=format.replace(localFormattingTokens,replaceLongDateFormatTokens);localFormattingTokens.lastIndex=0;i-=1;}return format;}var defaultLongDateFormat={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function longDateFormat(key){var format=this._longDateFormat[key],formatUpper=this._longDateFormat[key.toUpperCase()];if(format||!formatUpper){return format;}this._longDateFormat[key]=formatUpper.match(formattingTokens).map(function(tok){if(tok==="MMMM"||tok==="MM"||tok==="DD"||tok==="dddd"){return tok.slice(1);}return tok;}).join("");return this._longDateFormat[key];}var defaultInvalidDate="Invalid date";function invalidDate(){return this._invalidDate;}var defaultOrdinal="%d",defaultDayOfMonthOrdinalParse=/\d{1,2}/;function ordinal(number){return this._ordinal.replace("%d",number);}var defaultRelativeTime={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function relativeTime(number,withoutSuffix,string,isFuture){var output=this._relativeTime[string];return isFunction(output)?output(number,withoutSuffix,string,isFuture):output.replace(/%d/i,number);}function pastFuture(diff,output){var format=this._relativeTime[diff>0?"future":"past"];return isFunction(format)?format(output):format.replace(/%s/i,output);}var aliases={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function normalizeUnits(units){return typeof units==="string"?aliases[units]||aliases[units.toLowerCase()]:undefined;}function normalizeObjectUnits(inputObject){var normalizedInput={},normalizedProp,prop;for(prop in inputObject){if(hasOwnProp(inputObject,prop)){normalizedProp=normalizeUnits(prop);if(normalizedProp){normalizedInput[normalizedProp]=inputObject[prop];}}}return normalizedInput;}var priorities={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function getPrioritizedUnits(unitsObj){var units=[],u;for(u in unitsObj){if(hasOwnProp(unitsObj,u)){units.push({unit:u,priority:priorities[u]});}}units.sort(function(a,b){return a.priority-b.priority;});return units;}var match1=/\d/,match2=/\d\d/,match3=/\d{3}/,match4=/\d{4}/,match6=/[+-]?\d{6}/,match1to2=/\d\d?/,match3to4=/\d\d\d\d?/,match5to6=/\d\d\d\d\d\d?/,match1to3=/\d{1,3}/,match1to4=/\d{1,4}/,match1to6=/[+-]?\d{1,6}/,matchUnsigned=/\d+/,matchSigned=/[+-]?\d+/,matchOffset=/Z|[+-]\d\d:?\d\d/gi,matchShortOffset=/Z|[+-]\d\d(?::?\d\d)?/gi,matchTimestamp=/[+-]?\d+(\.\d{1,3})?/,// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
matchWord=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,match1to2NoLeadingZero=/^[1-9]\d?/,match1to2HasZero=/^([1-9]\d|\d)/,regexes;regexes={};function addRegexToken(token,regex,strictRegex){regexes[token]=isFunction(regex)?regex:function(isStrict,localeData){return isStrict&&strictRegex?strictRegex:regex;};}function getParseRegexForToken(token,config){if(!hasOwnProp(regexes,token)){return new RegExp(unescapeFormat(token));}return regexes[token](config._strict,config._locale);}// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s){return regexEscape(s.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(matched,p1,p2,p3,p4){return p1||p2||p3||p4;}));}function regexEscape(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");}function absFloor(number){if(number<0){// -0 -> 0
return Math.ceil(number)||0;}else{return Math.floor(number);}}function toInt(argumentForCoercion){var coercedNumber=+argumentForCoercion,value=0;if(coercedNumber!==0&&isFinite(coercedNumber)){value=absFloor(coercedNumber);}return value;}var tokens={};function addParseToken(token,callback){var i,func=callback,tokenLen;if(typeof token==="string"){token=[token];}if(isNumber(callback)){func=function(input,array){array[callback]=toInt(input);};}tokenLen=token.length;for(i=0;i<tokenLen;i++){tokens[token[i]]=func;}}function addWeekParseToken(token,callback){addParseToken(token,function(input,array,config,token){config._w=config._w||{};callback(input,config._w,config,token);});}function addTimeToArrayFromToken(token,input,config){if(input!=null&&hasOwnProp(tokens,token)){tokens[token](input,config._a,config,token);}}function isLeapYear(year){return year%4===0&&year%100!==0||year%400===0;}var YEAR=0,MONTH=1,DATE=2,HOUR=3,MINUTE=4,SECOND=5,MILLISECOND=6,WEEK=7,WEEKDAY=8;// FORMATTING
addFormatToken("Y",0,0,function(){var y=this.year();return y<=9999?zeroFill(y,4):"+"+y;});addFormatToken(0,["YY",2],0,function(){return this.year()%100;});addFormatToken(0,["YYYY",4],0,"year");addFormatToken(0,["YYYYY",5],0,"year");addFormatToken(0,["YYYYYY",6,true],0,"year");// PARSING
addRegexToken("Y",matchSigned);addRegexToken("YY",match1to2,match2);addRegexToken("YYYY",match1to4,match4);addRegexToken("YYYYY",match1to6,match6);addRegexToken("YYYYYY",match1to6,match6);addParseToken(["YYYYY","YYYYYY"],YEAR);addParseToken("YYYY",function(input,array){array[YEAR]=input.length===2?hooks.parseTwoDigitYear(input):toInt(input);});addParseToken("YY",function(input,array){array[YEAR]=hooks.parseTwoDigitYear(input);});addParseToken("Y",function(input,array){array[YEAR]=parseInt(input,10);});// HELPERS
function daysInYear(year){return isLeapYear(year)?366:365;}// HOOKS
hooks.parseTwoDigitYear=function(input){return toInt(input)+(toInt(input)>68?1900:2e3);};// MOMENTS
var getSetYear=makeGetSet("FullYear",true);function getIsLeapYear(){return isLeapYear(this.year());}function makeGetSet(unit,keepTime){return function(value){if(value!=null){set$1(this,unit,value);hooks.updateOffset(this,keepTime);return this;}else{return get(this,unit);}};}function get(mom,unit){if(!mom.isValid()){return NaN;}var d=mom._d,isUTC=mom._isUTC;switch(unit){case"Milliseconds":return isUTC?d.getUTCMilliseconds():d.getMilliseconds();case"Seconds":return isUTC?d.getUTCSeconds():d.getSeconds();case"Minutes":return isUTC?d.getUTCMinutes():d.getMinutes();case"Hours":return isUTC?d.getUTCHours():d.getHours();case"Date":return isUTC?d.getUTCDate():d.getDate();case"Day":return isUTC?d.getUTCDay():d.getDay();case"Month":return isUTC?d.getUTCMonth():d.getMonth();case"FullYear":return isUTC?d.getUTCFullYear():d.getFullYear();default:return NaN// Just in case
;}}function set$1(mom,unit,value){var d,isUTC,year,month,date1;if(!mom.isValid()||isNaN(value)){return;}d=mom._d;isUTC=mom._isUTC;switch(unit){case"Milliseconds":return void(isUTC?d.setUTCMilliseconds(value):d.setMilliseconds(value));case"Seconds":return void(isUTC?d.setUTCSeconds(value):d.setSeconds(value));case"Minutes":return void(isUTC?d.setUTCMinutes(value):d.setMinutes(value));case"Hours":return void(isUTC?d.setUTCHours(value):d.setHours(value));case"Date":return void(isUTC?d.setUTCDate(value):d.setDate(value));// case 'Day': // Not real
//    return void (isUTC ? d.setUTCDay(value) : d.setDay(value));
// case 'Month': // Not used because we need to pass two variables
//     return void (isUTC ? d.setUTCMonth(value) : d.setMonth(value));
case"FullYear":break;// See below ...
default:return;// Just in case
}year=value;month=mom.month();date1=mom.date();date1=date1===29&&month===1&&!isLeapYear(year)?28:date1;void(isUTC?d.setUTCFullYear(year,month,date1):d.setFullYear(year,month,date1));}// MOMENTS
function stringGet(units){units=normalizeUnits(units);if(isFunction(this[units])){return this[units]();}return this;}function stringSet(units,value){if(typeof units==="object"){units=normalizeObjectUnits(units);var prioritized=getPrioritizedUnits(units),i,prioritizedLen=prioritized.length;for(i=0;i<prioritizedLen;i++){this[prioritized[i].unit](units[prioritized[i].unit]);}}else{units=normalizeUnits(units);if(isFunction(this[units])){return this[units](value);}}return this;}function mod(n,x){return(n%x+x)%x;}var indexOf;if(Array.prototype.indexOf){indexOf=Array.prototype.indexOf;}else{indexOf=function(o){// I know
var i;for(i=0;i<this.length;++i){if(this[i]===o){return i;}}return-1;};}function daysInMonth(year,month){if(isNaN(year)||isNaN(month)){return NaN;}var modMonth=mod(month,12);year+=(month-modMonth)/12;return modMonth===1?isLeapYear(year)?29:28:31-modMonth%7%2;}// FORMATTING
addFormatToken("M",["MM",2],"Mo",function(){return this.month()+1;});addFormatToken("MMM",0,0,function(format){return this.localeData().monthsShort(this,format);});addFormatToken("MMMM",0,0,function(format){return this.localeData().months(this,format);});// PARSING
addRegexToken("M",match1to2,match1to2NoLeadingZero);addRegexToken("MM",match1to2,match2);addRegexToken("MMM",function(isStrict,locale){return locale.monthsShortRegex(isStrict);});addRegexToken("MMMM",function(isStrict,locale){return locale.monthsRegex(isStrict);});addParseToken(["M","MM"],function(input,array){array[MONTH]=toInt(input)-1;});addParseToken(["MMM","MMMM"],function(input,array,config,token){var month=config._locale.monthsParse(input,token,config._strict);// if we didn't find a month name, mark the date as invalid.
if(month!=null){array[MONTH]=month;}else{getParsingFlags(config).invalidMonth=input;}});// LOCALES
var defaultLocaleMonths="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),defaultLocaleMonthsShort="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),MONTHS_IN_FORMAT=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,defaultMonthsShortRegex=matchWord,defaultMonthsRegex=matchWord;function localeMonths(m,format){if(!m){return isArray(this._months)?this._months:this._months["standalone"];}return isArray(this._months)?this._months[m.month()]:this._months[(this._months.isFormat||MONTHS_IN_FORMAT).test(format)?"format":"standalone"][m.month()];}function localeMonthsShort(m,format){if(!m){return isArray(this._monthsShort)?this._monthsShort:this._monthsShort["standalone"];}return isArray(this._monthsShort)?this._monthsShort[m.month()]:this._monthsShort[MONTHS_IN_FORMAT.test(format)?"format":"standalone"][m.month()];}function handleStrictParse(monthName,format,strict){var i,ii,mom,llc=monthName.toLocaleLowerCase();if(!this._monthsParse){// this is not used
this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[];for(i=0;i<12;++i){mom=createUTC([2e3,i]);this._shortMonthsParse[i]=this.monthsShort(mom,"").toLocaleLowerCase();this._longMonthsParse[i]=this.months(mom,"").toLocaleLowerCase();}}if(strict){if(format==="MMM"){ii=indexOf.call(this._shortMonthsParse,llc);return ii!==-1?ii:null;}else{ii=indexOf.call(this._longMonthsParse,llc);return ii!==-1?ii:null;}}else{if(format==="MMM"){ii=indexOf.call(this._shortMonthsParse,llc);if(ii!==-1){return ii;}ii=indexOf.call(this._longMonthsParse,llc);return ii!==-1?ii:null;}else{ii=indexOf.call(this._longMonthsParse,llc);if(ii!==-1){return ii;}ii=indexOf.call(this._shortMonthsParse,llc);return ii!==-1?ii:null;}}}function localeMonthsParse(monthName,format,strict){var i,mom,regex;if(this._monthsParseExact){return handleStrictParse.call(this,monthName,format,strict);}if(!this._monthsParse){this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[];}// TODO: add sorting
// Sorting makes sure if one month (or abbr) is a prefix of another
// see sorting in computeMonthsParse
for(i=0;i<12;i++){// make the regex if we don't have it already
mom=createUTC([2e3,i]);if(strict&&!this._longMonthsParse[i]){this._longMonthsParse[i]=new RegExp("^"+this.months(mom,"").replace(".","")+"$","i");this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(mom,"").replace(".","")+"$","i");}if(!strict&&!this._monthsParse[i]){regex="^"+this.months(mom,"")+"|^"+this.monthsShort(mom,"");this._monthsParse[i]=new RegExp(regex.replace(".",""),"i");}// test the regex
if(strict&&format==="MMMM"&&this._longMonthsParse[i].test(monthName)){return i;}else if(strict&&format==="MMM"&&this._shortMonthsParse[i].test(monthName)){return i;}else if(!strict&&this._monthsParse[i].test(monthName)){return i;}}}// MOMENTS
function setMonth(mom,value){if(!mom.isValid()){// No op
return mom;}if(typeof value==="string"){if(/^\d+$/.test(value)){value=toInt(value);}else{value=mom.localeData().monthsParse(value);// TODO: Another silent failure?
if(!isNumber(value)){return mom;}}}var month=value,date1=mom.date();date1=date1<29?date1:Math.min(date1,daysInMonth(mom.year(),month));void(mom._isUTC?mom._d.setUTCMonth(month,date1):mom._d.setMonth(month,date1));return mom;}function getSetMonth(value){if(value!=null){setMonth(this,value);hooks.updateOffset(this,true);return this;}else{return get(this,"Month");}}function getDaysInMonth(){return daysInMonth(this.year(),this.month());}function monthsShortRegex(isStrict){if(this._monthsParseExact){if(!hasOwnProp(this,"_monthsRegex")){computeMonthsParse.call(this);}if(isStrict){return this._monthsShortStrictRegex;}else{return this._monthsShortRegex;}}else{if(!hasOwnProp(this,"_monthsShortRegex")){this._monthsShortRegex=defaultMonthsShortRegex;}return this._monthsShortStrictRegex&&isStrict?this._monthsShortStrictRegex:this._monthsShortRegex;}}function monthsRegex(isStrict){if(this._monthsParseExact){if(!hasOwnProp(this,"_monthsRegex")){computeMonthsParse.call(this);}if(isStrict){return this._monthsStrictRegex;}else{return this._monthsRegex;}}else{if(!hasOwnProp(this,"_monthsRegex")){this._monthsRegex=defaultMonthsRegex;}return this._monthsStrictRegex&&isStrict?this._monthsStrictRegex:this._monthsRegex;}}function computeMonthsParse(){function cmpLenRev(a,b){return b.length-a.length;}var shortPieces=[],longPieces=[],mixedPieces=[],i,mom,shortP,longP;for(i=0;i<12;i++){// make the regex if we don't have it already
mom=createUTC([2e3,i]);shortP=regexEscape(this.monthsShort(mom,""));longP=regexEscape(this.months(mom,""));shortPieces.push(shortP);longPieces.push(longP);mixedPieces.push(longP);mixedPieces.push(shortP);}// Sorting makes sure if one month (or abbr) is a prefix of another it
// will match the longer piece.
shortPieces.sort(cmpLenRev);longPieces.sort(cmpLenRev);mixedPieces.sort(cmpLenRev);this._monthsRegex=new RegExp("^("+mixedPieces.join("|")+")","i");this._monthsShortRegex=this._monthsRegex;this._monthsStrictRegex=new RegExp("^("+longPieces.join("|")+")","i");this._monthsShortStrictRegex=new RegExp("^("+shortPieces.join("|")+")","i");}function createDate(y,m,d,h,M,s,ms){// can't just apply() to create a date:
// https://stackoverflow.com/q/181348
var date1;// the date constructor remaps years 0-99 to 1900-1999
if(y<100&&y>=0){// preserve leap years using a full 400 year cycle, then reset
date1=new Date(y+400,m,d,h,M,s,ms);if(isFinite(date1.getFullYear())){date1.setFullYear(y);}}else{date1=new Date(y,m,d,h,M,s,ms);}return date1;}function createUTCDate(y){var date1,args;// the Date.UTC function remaps years 0-99 to 1900-1999
if(y<100&&y>=0){args=Array.prototype.slice.call(arguments);// preserve leap years using a full 400 year cycle, then reset
args[0]=y+400;date1=new Date(Date.UTC.apply(null,args));if(isFinite(date1.getUTCFullYear())){date1.setUTCFullYear(y);}}else{date1=new Date(Date.UTC.apply(null,arguments));}return date1;}// start-of-first-week - start-of-year
function firstWeekOffset(year,dow,doy){var fwd=7+dow-doy,// first-week day local weekday -- which local weekday is fwd
fwdlw=(7+createUTCDate(year,0,fwd).getUTCDay()-dow)%7;return-fwdlw+fwd-1;}// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year,week,weekday,dow,doy){var localWeekday=(7+weekday-dow)%7,weekOffset=firstWeekOffset(year,dow,doy),dayOfYear=1+7*(week-1)+localWeekday+weekOffset,resYear,resDayOfYear;if(dayOfYear<=0){resYear=year-1;resDayOfYear=daysInYear(resYear)+dayOfYear;}else if(dayOfYear>daysInYear(year)){resYear=year+1;resDayOfYear=dayOfYear-daysInYear(year);}else{resYear=year;resDayOfYear=dayOfYear;}return{year:resYear,dayOfYear:resDayOfYear};}function weekOfYear(mom,dow,doy){var weekOffset=firstWeekOffset(mom.year(),dow,doy),week=Math.floor((mom.dayOfYear()-weekOffset-1)/7)+1,resWeek,resYear;if(week<1){resYear=mom.year()-1;resWeek=week+weeksInYear(resYear,dow,doy);}else if(week>weeksInYear(mom.year(),dow,doy)){resWeek=week-weeksInYear(mom.year(),dow,doy);resYear=mom.year()+1;}else{resYear=mom.year();resWeek=week;}return{week:resWeek,year:resYear};}function weeksInYear(year,dow,doy){var weekOffset=firstWeekOffset(year,dow,doy),weekOffsetNext=firstWeekOffset(year+1,dow,doy);return(daysInYear(year)-weekOffset+weekOffsetNext)/7;}// FORMATTING
addFormatToken("w",["ww",2],"wo","week");addFormatToken("W",["WW",2],"Wo","isoWeek");// PARSING
addRegexToken("w",match1to2,match1to2NoLeadingZero);addRegexToken("ww",match1to2,match2);addRegexToken("W",match1to2,match1to2NoLeadingZero);addRegexToken("WW",match1to2,match2);addWeekParseToken(["w","ww","W","WW"],function(input,week,config,token){week[token.substr(0,1)]=toInt(input);});// HELPERS
// LOCALES
function localeWeek(mom){return weekOfYear(mom,this._week.dow,this._week.doy).week;}var defaultLocaleWeek={dow:0,doy:6};function localeFirstDayOfWeek(){return this._week.dow;}function localeFirstDayOfYear(){return this._week.doy;}// MOMENTS
function getSetWeek(input){var week=this.localeData().week(this);return input==null?week:this.add((input-week)*7,"d");}function getSetISOWeek(input){var week=weekOfYear(this,1,4).week;return input==null?week:this.add((input-week)*7,"d");}// FORMATTING
addFormatToken("d",0,"do","day");addFormatToken("dd",0,0,function(format){return this.localeData().weekdaysMin(this,format);});addFormatToken("ddd",0,0,function(format){return this.localeData().weekdaysShort(this,format);});addFormatToken("dddd",0,0,function(format){return this.localeData().weekdays(this,format);});addFormatToken("e",0,0,"weekday");addFormatToken("E",0,0,"isoWeekday");// PARSING
addRegexToken("d",match1to2);addRegexToken("e",match1to2);addRegexToken("E",match1to2);addRegexToken("dd",function(isStrict,locale){return locale.weekdaysMinRegex(isStrict);});addRegexToken("ddd",function(isStrict,locale){return locale.weekdaysShortRegex(isStrict);});addRegexToken("dddd",function(isStrict,locale){return locale.weekdaysRegex(isStrict);});addWeekParseToken(["dd","ddd","dddd"],function(input,week,config,token){var weekday=config._locale.weekdaysParse(input,token,config._strict);// if we didn't get a weekday name, mark the date as invalid
if(weekday!=null){week.d=weekday;}else{getParsingFlags(config).invalidWeekday=input;}});addWeekParseToken(["d","e","E"],function(input,week,config,token){week[token]=toInt(input);});// HELPERS
function parseWeekday(input,locale){if(typeof input!=="string"){return input;}if(!isNaN(input)){return parseInt(input,10);}input=locale.weekdaysParse(input);if(typeof input==="number"){return input;}return null;}function parseIsoWeekday(input,locale){if(typeof input==="string"){return locale.weekdaysParse(input)%7||7;}return isNaN(input)?null:input;}// LOCALES
function shiftWeekdays(ws,n){return ws.slice(n,7).concat(ws.slice(0,n));}var defaultLocaleWeekdays="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),defaultLocaleWeekdaysShort="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),defaultLocaleWeekdaysMin="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),defaultWeekdaysRegex=matchWord,defaultWeekdaysShortRegex=matchWord,defaultWeekdaysMinRegex=matchWord;function localeWeekdays(m,format){var weekdays=isArray(this._weekdays)?this._weekdays:this._weekdays[m&&m!==true&&this._weekdays.isFormat.test(format)?"format":"standalone"];return m===true?shiftWeekdays(weekdays,this._week.dow):m?weekdays[m.day()]:weekdays;}function localeWeekdaysShort(m){return m===true?shiftWeekdays(this._weekdaysShort,this._week.dow):m?this._weekdaysShort[m.day()]:this._weekdaysShort;}function localeWeekdaysMin(m){return m===true?shiftWeekdays(this._weekdaysMin,this._week.dow):m?this._weekdaysMin[m.day()]:this._weekdaysMin;}function handleStrictParse$1(weekdayName,format,strict){var i,ii,mom,llc=weekdayName.toLocaleLowerCase();if(!this._weekdaysParse){this._weekdaysParse=[];this._shortWeekdaysParse=[];this._minWeekdaysParse=[];for(i=0;i<7;++i){mom=createUTC([2e3,1]).day(i);this._minWeekdaysParse[i]=this.weekdaysMin(mom,"").toLocaleLowerCase();this._shortWeekdaysParse[i]=this.weekdaysShort(mom,"").toLocaleLowerCase();this._weekdaysParse[i]=this.weekdays(mom,"").toLocaleLowerCase();}}if(strict){if(format==="dddd"){ii=indexOf.call(this._weekdaysParse,llc);return ii!==-1?ii:null;}else if(format==="ddd"){ii=indexOf.call(this._shortWeekdaysParse,llc);return ii!==-1?ii:null;}else{ii=indexOf.call(this._minWeekdaysParse,llc);return ii!==-1?ii:null;}}else{if(format==="dddd"){ii=indexOf.call(this._weekdaysParse,llc);if(ii!==-1){return ii;}ii=indexOf.call(this._shortWeekdaysParse,llc);if(ii!==-1){return ii;}ii=indexOf.call(this._minWeekdaysParse,llc);return ii!==-1?ii:null;}else if(format==="ddd"){ii=indexOf.call(this._shortWeekdaysParse,llc);if(ii!==-1){return ii;}ii=indexOf.call(this._weekdaysParse,llc);if(ii!==-1){return ii;}ii=indexOf.call(this._minWeekdaysParse,llc);return ii!==-1?ii:null;}else{ii=indexOf.call(this._minWeekdaysParse,llc);if(ii!==-1){return ii;}ii=indexOf.call(this._weekdaysParse,llc);if(ii!==-1){return ii;}ii=indexOf.call(this._shortWeekdaysParse,llc);return ii!==-1?ii:null;}}}function localeWeekdaysParse(weekdayName,format,strict){var i,mom,regex;if(this._weekdaysParseExact){return handleStrictParse$1.call(this,weekdayName,format,strict);}if(!this._weekdaysParse){this._weekdaysParse=[];this._minWeekdaysParse=[];this._shortWeekdaysParse=[];this._fullWeekdaysParse=[];}for(i=0;i<7;i++){// make the regex if we don't have it already
mom=createUTC([2e3,1]).day(i);if(strict&&!this._fullWeekdaysParse[i]){this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(mom,"").replace(".","\\.?")+"$","i");this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(mom,"").replace(".","\\.?")+"$","i");this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(mom,"").replace(".","\\.?")+"$","i");}if(!this._weekdaysParse[i]){regex="^"+this.weekdays(mom,"")+"|^"+this.weekdaysShort(mom,"")+"|^"+this.weekdaysMin(mom,"");this._weekdaysParse[i]=new RegExp(regex.replace(".",""),"i");}// test the regex
if(strict&&format==="dddd"&&this._fullWeekdaysParse[i].test(weekdayName)){return i;}else if(strict&&format==="ddd"&&this._shortWeekdaysParse[i].test(weekdayName)){return i;}else if(strict&&format==="dd"&&this._minWeekdaysParse[i].test(weekdayName)){return i;}else if(!strict&&this._weekdaysParse[i].test(weekdayName)){return i;}}}// MOMENTS
function getSetDayOfWeek(input){if(!this.isValid()){return input!=null?this:NaN;}var day=get(this,"Day");if(input!=null){input=parseWeekday(input,this.localeData());return this.add(input-day,"d");}else{return day;}}function getSetLocaleDayOfWeek(input){if(!this.isValid()){return input!=null?this:NaN;}var weekday=(this.day()+7-this.localeData()._week.dow)%7;return input==null?weekday:this.add(input-weekday,"d");}function getSetISODayOfWeek(input){if(!this.isValid()){return input!=null?this:NaN;}// behaves the same as moment#day except
// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
// as a setter, sunday should belong to the previous week.
if(input!=null){var weekday=parseIsoWeekday(input,this.localeData());return this.day(this.day()%7?weekday:weekday-7);}else{return this.day()||7;}}function weekdaysRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,"_weekdaysRegex")){computeWeekdaysParse.call(this);}if(isStrict){return this._weekdaysStrictRegex;}else{return this._weekdaysRegex;}}else{if(!hasOwnProp(this,"_weekdaysRegex")){this._weekdaysRegex=defaultWeekdaysRegex;}return this._weekdaysStrictRegex&&isStrict?this._weekdaysStrictRegex:this._weekdaysRegex;}}function weekdaysShortRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,"_weekdaysRegex")){computeWeekdaysParse.call(this);}if(isStrict){return this._weekdaysShortStrictRegex;}else{return this._weekdaysShortRegex;}}else{if(!hasOwnProp(this,"_weekdaysShortRegex")){this._weekdaysShortRegex=defaultWeekdaysShortRegex;}return this._weekdaysShortStrictRegex&&isStrict?this._weekdaysShortStrictRegex:this._weekdaysShortRegex;}}function weekdaysMinRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,"_weekdaysRegex")){computeWeekdaysParse.call(this);}if(isStrict){return this._weekdaysMinStrictRegex;}else{return this._weekdaysMinRegex;}}else{if(!hasOwnProp(this,"_weekdaysMinRegex")){this._weekdaysMinRegex=defaultWeekdaysMinRegex;}return this._weekdaysMinStrictRegex&&isStrict?this._weekdaysMinStrictRegex:this._weekdaysMinRegex;}}function computeWeekdaysParse(){function cmpLenRev(a,b){return b.length-a.length;}var minPieces=[],shortPieces=[],longPieces=[],mixedPieces=[],i,mom,minp,shortp,longp;for(i=0;i<7;i++){// make the regex if we don't have it already
mom=createUTC([2e3,1]).day(i);minp=regexEscape(this.weekdaysMin(mom,""));shortp=regexEscape(this.weekdaysShort(mom,""));longp=regexEscape(this.weekdays(mom,""));minPieces.push(minp);shortPieces.push(shortp);longPieces.push(longp);mixedPieces.push(minp);mixedPieces.push(shortp);mixedPieces.push(longp);}// Sorting makes sure if one weekday (or abbr) is a prefix of another it
// will match the longer piece.
minPieces.sort(cmpLenRev);shortPieces.sort(cmpLenRev);longPieces.sort(cmpLenRev);mixedPieces.sort(cmpLenRev);this._weekdaysRegex=new RegExp("^("+mixedPieces.join("|")+")","i");this._weekdaysShortRegex=this._weekdaysRegex;this._weekdaysMinRegex=this._weekdaysRegex;this._weekdaysStrictRegex=new RegExp("^("+longPieces.join("|")+")","i");this._weekdaysShortStrictRegex=new RegExp("^("+shortPieces.join("|")+")","i");this._weekdaysMinStrictRegex=new RegExp("^("+minPieces.join("|")+")","i");}// FORMATTING
function hFormat(){return this.hours()%12||12;}function kFormat(){return this.hours()||24;}addFormatToken("H",["HH",2],0,"hour");addFormatToken("h",["hh",2],0,hFormat);addFormatToken("k",["kk",2],0,kFormat);addFormatToken("hmm",0,0,function(){return""+hFormat.apply(this)+zeroFill(this.minutes(),2);});addFormatToken("hmmss",0,0,function(){return""+hFormat.apply(this)+zeroFill(this.minutes(),2)+zeroFill(this.seconds(),2);});addFormatToken("Hmm",0,0,function(){return""+this.hours()+zeroFill(this.minutes(),2);});addFormatToken("Hmmss",0,0,function(){return""+this.hours()+zeroFill(this.minutes(),2)+zeroFill(this.seconds(),2);});function meridiem(token,lowercase){addFormatToken(token,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),lowercase);});}meridiem("a",true);meridiem("A",false);// PARSING
function matchMeridiem(isStrict,locale){return locale._meridiemParse;}addRegexToken("a",matchMeridiem);addRegexToken("A",matchMeridiem);addRegexToken("H",match1to2,match1to2HasZero);addRegexToken("h",match1to2,match1to2NoLeadingZero);addRegexToken("k",match1to2,match1to2NoLeadingZero);addRegexToken("HH",match1to2,match2);addRegexToken("hh",match1to2,match2);addRegexToken("kk",match1to2,match2);addRegexToken("hmm",match3to4);addRegexToken("hmmss",match5to6);addRegexToken("Hmm",match3to4);addRegexToken("Hmmss",match5to6);addParseToken(["H","HH"],HOUR);addParseToken(["k","kk"],function(input,array,config){var kInput=toInt(input);array[HOUR]=kInput===24?0:kInput;});addParseToken(["a","A"],function(input,array,config){config._isPm=config._locale.isPM(input);config._meridiem=input;});addParseToken(["h","hh"],function(input,array,config){array[HOUR]=toInt(input);getParsingFlags(config).bigHour=true;});addParseToken("hmm",function(input,array,config){var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos));array[MINUTE]=toInt(input.substr(pos));getParsingFlags(config).bigHour=true;});addParseToken("hmmss",function(input,array,config){var pos1=input.length-4,pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1));array[MINUTE]=toInt(input.substr(pos1,2));array[SECOND]=toInt(input.substr(pos2));getParsingFlags(config).bigHour=true;});addParseToken("Hmm",function(input,array,config){var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos));array[MINUTE]=toInt(input.substr(pos));});addParseToken("Hmmss",function(input,array,config){var pos1=input.length-4,pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1));array[MINUTE]=toInt(input.substr(pos1,2));array[SECOND]=toInt(input.substr(pos2));});// LOCALES
function localeIsPM(input){// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
// Using charAt should be more compatible.
return(input+"").toLowerCase().charAt(0)==="p";}var defaultLocaleMeridiemParse=/[ap]\.?m?\.?/i,// Setting the hour should keep the time, because the user explicitly
// specified which hour they want. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
getSetHour=makeGetSet("Hours",true);function localeMeridiem(hours,minutes,isLower){if(hours>11){return isLower?"pm":"PM";}else{return isLower?"am":"AM";}}var baseConfig={calendar:defaultCalendar,longDateFormat:defaultLongDateFormat,invalidDate:defaultInvalidDate,ordinal:defaultOrdinal,dayOfMonthOrdinalParse:defaultDayOfMonthOrdinalParse,relativeTime:defaultRelativeTime,months:defaultLocaleMonths,monthsShort:defaultLocaleMonthsShort,week:defaultLocaleWeek,weekdays:defaultLocaleWeekdays,weekdaysMin:defaultLocaleWeekdaysMin,weekdaysShort:defaultLocaleWeekdaysShort,meridiemParse:defaultLocaleMeridiemParse};// internal storage for locale config files
var locales={},localeFamilies={},globalLocale;function commonPrefix(arr1,arr2){var i,minl=Math.min(arr1.length,arr2.length);for(i=0;i<minl;i+=1){if(arr1[i]!==arr2[i]){return i;}}return minl;}function normalizeLocale(key){return key?key.toLowerCase().replace("_","-"):key;}// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names){var i=0,j,next,locale,split;while(i<names.length){split=normalizeLocale(names[i]).split("-");j=split.length;next=normalizeLocale(names[i+1]);next=next?next.split("-"):null;while(j>0){locale=loadLocale(split.slice(0,j).join("-"));if(locale){return locale;}if(next&&next.length>=j&&commonPrefix(split,next)>=j-1){break;}j--;}i++;}return globalLocale;}function isLocaleNameSane(name){// Prevent names that look like filesystem paths, i.e contain '/' or '\'
// Ensure name is available and function returns boolean
return!!(name&&name.match("^[^/\\\\]*$"));}function loadLocale(name){var oldLocale=null,aliasedRequire;// TODO: Find a better way to register and load all the locales in Node
if(locales[name]===undefined&&"object"!=="undefined"&&module1&&module1.exports&&isLocaleNameSane(name)){try{oldLocale=globalLocale._abbr;aliasedRequire=commonjsRequire;aliasedRequire("./locale/"+name);getSetGlobalLocale(oldLocale);}catch(e){// mark as not found to avoid repeating expensive file require call causing high CPU
// when trying to find en-US, en_US, en-us for every format call
locales[name]=null// null means not found
;}}return locales[name];}// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale(key,values){var data;if(key){if(isUndefined(values)){data=getLocale(key);}else{data=defineLocale(key,values);}if(data){// moment.duration._locale = moment._locale = data;
globalLocale=data;}else{if(typeof console!=="undefined"&&console.warn){//warn user if arguments are passed but the locale could not be set
console.warn("Locale "+key+" not found. Did you forget to load it?");}}}return globalLocale._abbr;}function defineLocale(name,config){if(config!==null){var locale,parentConfig=baseConfig;config.abbr=name;if(locales[name]!=null){deprecateSimple("defineLocaleOverride","use moment.updateLocale(localeName, config) to change "+"an existing locale. moment.defineLocale(localeName, "+"config) should only be used for creating a new locale "+"See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");parentConfig=locales[name]._config;}else if(config.parentLocale!=null){if(locales[config.parentLocale]!=null){parentConfig=locales[config.parentLocale]._config;}else{locale=loadLocale(config.parentLocale);if(locale!=null){parentConfig=locale._config;}else{if(!localeFamilies[config.parentLocale]){localeFamilies[config.parentLocale]=[];}localeFamilies[config.parentLocale].push({name:name,config:config});return null;}}}locales[name]=new Locale(mergeConfigs(parentConfig,config));if(localeFamilies[name]){localeFamilies[name].forEach(function(x){defineLocale(x.name,x.config);});}// backwards compat for now: also set the locale
// make sure we set the locale AFTER all child locales have been
// created, so we won't end up with the child locale set.
getSetGlobalLocale(name);return locales[name];}else{// useful for testing
delete locales[name];return null;}}function updateLocale(name,config){if(config!=null){var locale,tmpLocale,parentConfig=baseConfig;if(locales[name]!=null&&locales[name].parentLocale!=null){// Update existing child locale in-place to avoid memory-leaks
locales[name].set(mergeConfigs(locales[name]._config,config));}else{// MERGE
tmpLocale=loadLocale(name);if(tmpLocale!=null){parentConfig=tmpLocale._config;}config=mergeConfigs(parentConfig,config);if(tmpLocale==null){// updateLocale is called for creating a new locale
// Set abbr so it will have a name (getters return
// undefined otherwise).
config.abbr=name;}locale=new Locale(config);locale.parentLocale=locales[name];locales[name]=locale;}// backwards compat for now: also set the locale
getSetGlobalLocale(name);}else{// pass null for config to unupdate, useful for tests
if(locales[name]!=null){if(locales[name].parentLocale!=null){locales[name]=locales[name].parentLocale;if(name===getSetGlobalLocale()){getSetGlobalLocale(name);}}else if(locales[name]!=null){delete locales[name];}}}return locales[name];}// returns locale data
function getLocale(key){var locale;if(key&&key._locale&&key._locale._abbr){key=key._locale._abbr;}if(!key){return globalLocale;}if(!isArray(key)){//short-circuit everything else
locale=loadLocale(key);if(locale){return locale;}key=[key];}return chooseLocale(key);}function listLocales(){return keys(locales);}function checkOverflow(m){var overflow,a=m._a;if(a&&getParsingFlags(m).overflow===-2){overflow=a[MONTH]<0||a[MONTH]>11?MONTH:a[DATE]<1||a[DATE]>daysInMonth(a[YEAR],a[MONTH])?DATE:a[HOUR]<0||a[HOUR]>24||a[HOUR]===24&&(a[MINUTE]!==0||a[SECOND]!==0||a[MILLISECOND]!==0)?HOUR:a[MINUTE]<0||a[MINUTE]>59?MINUTE:a[SECOND]<0||a[SECOND]>59?SECOND:a[MILLISECOND]<0||a[MILLISECOND]>999?MILLISECOND:-1;if(getParsingFlags(m)._overflowDayOfYear&&(overflow<YEAR||overflow>DATE)){overflow=DATE;}if(getParsingFlags(m)._overflowWeeks&&overflow===-1){overflow=WEEK;}if(getParsingFlags(m)._overflowWeekday&&overflow===-1){overflow=WEEKDAY;}getParsingFlags(m).overflow=overflow;}return m;}// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,basicIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,tzRegex=/Z|[+-]\d\d(?::?\d\d)?/,isoDates=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,false],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,false],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,false],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,false],["YYYY",/\d{4}/,false]],// iso time formats and regexes
isoTimes=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],aspNetJsonRegex=/^\/?Date\((-?\d+)/i,// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
rfc2822=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,obsOffsets={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};// date from iso format
function configFromISO(config){var i,l,string=config._i,match=extendedIsoRegex.exec(string)||basicIsoRegex.exec(string),allowTime,dateFormat,timeFormat,tzFormat,isoDatesLen=isoDates.length,isoTimesLen=isoTimes.length;if(match){getParsingFlags(config).iso=true;for(i=0,l=isoDatesLen;i<l;i++){if(isoDates[i][1].exec(match[1])){dateFormat=isoDates[i][0];allowTime=isoDates[i][2]!==false;break;}}if(dateFormat==null){config._isValid=false;return;}if(match[3]){for(i=0,l=isoTimesLen;i<l;i++){if(isoTimes[i][1].exec(match[3])){// match[2] should be 'T' or space
timeFormat=(match[2]||" ")+isoTimes[i][0];break;}}if(timeFormat==null){config._isValid=false;return;}}if(!allowTime&&timeFormat!=null){config._isValid=false;return;}if(match[4]){if(tzRegex.exec(match[4])){tzFormat="Z";}else{config._isValid=false;return;}}config._f=dateFormat+(timeFormat||"")+(tzFormat||"");configFromStringAndFormat(config);}else{config._isValid=false;}}function extractFromRFC2822Strings(yearStr,monthStr,dayStr,hourStr,minuteStr,secondStr){var result=[untruncateYear(yearStr),defaultLocaleMonthsShort.indexOf(monthStr),parseInt(dayStr,10),parseInt(hourStr,10),parseInt(minuteStr,10)];if(secondStr){result.push(parseInt(secondStr,10));}return result;}function untruncateYear(yearStr){var year=parseInt(yearStr,10);if(year<=49){return 2e3+year;}else if(year<=999){return 1900+year;}return year;}function preprocessRFC2822(s){// Remove comments and folding whitespace and replace multiple-spaces with a single space
return s.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"");}function checkWeekday(weekdayStr,parsedInput,config){if(weekdayStr){// TODO: Replace the vanilla JS Date object with an independent day-of-week check.
var weekdayProvided=defaultLocaleWeekdaysShort.indexOf(weekdayStr),weekdayActual=new Date(parsedInput[0],parsedInput[1],parsedInput[2]).getDay();if(weekdayProvided!==weekdayActual){getParsingFlags(config).weekdayMismatch=true;config._isValid=false;return false;}}return true;}function calculateOffset(obsOffset,militaryOffset,numOffset){if(obsOffset){return obsOffsets[obsOffset];}else if(militaryOffset){// the only allowed military tz is Z
return 0;}else{var hm=parseInt(numOffset,10),m=hm%100,h=(hm-m)/100;return h*60+m;}}// date and time from ref 2822 format
function configFromRFC2822(config){var match=rfc2822.exec(preprocessRFC2822(config._i)),parsedArray;if(match){parsedArray=extractFromRFC2822Strings(match[4],match[3],match[2],match[5],match[6],match[7]);if(!checkWeekday(match[1],parsedArray,config)){return;}config._a=parsedArray;config._tzm=calculateOffset(match[8],match[9],match[10]);config._d=createUTCDate.apply(null,config._a);config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm);getParsingFlags(config).rfc2822=true;}else{config._isValid=false;}}// date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
function configFromString(config){var matched=aspNetJsonRegex.exec(config._i);if(matched!==null){config._d=new Date(+matched[1]);return;}configFromISO(config);if(config._isValid===false){delete config._isValid;}else{return;}configFromRFC2822(config);if(config._isValid===false){delete config._isValid;}else{return;}if(config._strict){config._isValid=false;}else{// Final attempt, use Input Fallback
hooks.createFromInputFallback(config);}}hooks.createFromInputFallback=deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), "+"which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are "+"discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(config){config._d=new Date(config._i+(config._useUTC?" UTC":""));});// Pick the first defined of two or three arguments.
function defaults(a,b,c){if(a!=null){return a;}if(b!=null){return b;}return c;}function currentDateArray(config){// hooks is actually the exported moment object
var nowValue=new Date(hooks.now());if(config._useUTC){return[nowValue.getUTCFullYear(),nowValue.getUTCMonth(),nowValue.getUTCDate()];}return[nowValue.getFullYear(),nowValue.getMonth(),nowValue.getDate()];}// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray(config){var i,date1,input=[],currentDate,expectedWeekday,yearToUse;if(config._d){return;}currentDate=currentDateArray(config);//compute day of the year from weeks and weekdays
if(config._w&&config._a[DATE]==null&&config._a[MONTH]==null){dayOfYearFromWeekInfo(config);}//if the day of the year is set, figure out what it is
if(config._dayOfYear!=null){yearToUse=defaults(config._a[YEAR],currentDate[YEAR]);if(config._dayOfYear>daysInYear(yearToUse)||config._dayOfYear===0){getParsingFlags(config)._overflowDayOfYear=true;}date1=createUTCDate(yearToUse,0,config._dayOfYear);config._a[MONTH]=date1.getUTCMonth();config._a[DATE]=date1.getUTCDate();}// Default to current date.
// * if no year, month, day of month are given, default to today
// * if day of month is given, default month and year
// * if month is given, default only year
// * if year is given, don't default anything
for(i=0;i<3&&config._a[i]==null;++i){config._a[i]=input[i]=currentDate[i];}// Zero out whatever was not defaulted, including time
for(;i<7;i++){config._a[i]=input[i]=config._a[i]==null?i===2?1:0:config._a[i];}// Check for 24:00:00.000
if(config._a[HOUR]===24&&config._a[MINUTE]===0&&config._a[SECOND]===0&&config._a[MILLISECOND]===0){config._nextDay=true;config._a[HOUR]=0;}config._d=(config._useUTC?createUTCDate:createDate).apply(null,input);expectedWeekday=config._useUTC?config._d.getUTCDay():config._d.getDay();// Apply timezone offset from input. The actual utcOffset can be changed
// with parseZone.
if(config._tzm!=null){config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm);}if(config._nextDay){config._a[HOUR]=24;}// check for mismatching day of week
if(config._w&&typeof config._w.d!=="undefined"&&config._w.d!==expectedWeekday){getParsingFlags(config).weekdayMismatch=true;}}function dayOfYearFromWeekInfo(config){var w,weekYear,week,weekday,dow,doy,temp,weekdayOverflow,curWeek;w=config._w;if(w.GG!=null||w.W!=null||w.E!=null){dow=1;doy=4;// TODO: We need to take the current isoWeekYear, but that depends on
// how we interpret now (local, utc, fixed offset). So create
// a now version of current config (take local/utc/offset flags, and
// create now).
weekYear=defaults(w.GG,config._a[YEAR],weekOfYear(createLocal(),1,4).year);week=defaults(w.W,1);weekday=defaults(w.E,1);if(weekday<1||weekday>7){weekdayOverflow=true;}}else{dow=config._locale._week.dow;doy=config._locale._week.doy;curWeek=weekOfYear(createLocal(),dow,doy);weekYear=defaults(w.gg,config._a[YEAR],curWeek.year);// Default to current week.
week=defaults(w.w,curWeek.week);if(w.d!=null){// weekday -- low day numbers are considered next week
weekday=w.d;if(weekday<0||weekday>6){weekdayOverflow=true;}}else if(w.e!=null){// local weekday -- counting starts from beginning of week
weekday=w.e+dow;if(w.e<0||w.e>6){weekdayOverflow=true;}}else{// default to beginning of week
weekday=dow;}}if(week<1||week>weeksInYear(weekYear,dow,doy)){getParsingFlags(config)._overflowWeeks=true;}else if(weekdayOverflow!=null){getParsingFlags(config)._overflowWeekday=true;}else{temp=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy);config._a[YEAR]=temp.year;config._dayOfYear=temp.dayOfYear;}}// constant that refers to the ISO standard
hooks.ISO_8601=function(){};// constant that refers to the RFC 2822 form
hooks.RFC_2822=function(){};// date from string and format string
function configFromStringAndFormat(config){// TODO: Move this to another part of the creation flow to prevent circular deps
if(config._f===hooks.ISO_8601){configFromISO(config);return;}if(config._f===hooks.RFC_2822){configFromRFC2822(config);return;}config._a=[];getParsingFlags(config).empty=true;// This array is used to make a Date, either with `new Date` or `Date.UTC`
var string=""+config._i,i,parsedInput,tokens,token,skipped,stringLength=string.length,totalParsedInputLength=0,era,tokenLen;tokens=expandFormat(config._f,config._locale).match(formattingTokens)||[];tokenLen=tokens.length;for(i=0;i<tokenLen;i++){token=tokens[i];parsedInput=(string.match(getParseRegexForToken(token,config))||[])[0];if(parsedInput){skipped=string.substr(0,string.indexOf(parsedInput));if(skipped.length>0){getParsingFlags(config).unusedInput.push(skipped);}string=string.slice(string.indexOf(parsedInput)+parsedInput.length);totalParsedInputLength+=parsedInput.length;}// don't parse if it's not a known token
if(formatTokenFunctions[token]){if(parsedInput){getParsingFlags(config).empty=false;}else{getParsingFlags(config).unusedTokens.push(token);}addTimeToArrayFromToken(token,parsedInput,config);}else if(config._strict&&!parsedInput){getParsingFlags(config).unusedTokens.push(token);}}// add remaining unparsed input length to the string
getParsingFlags(config).charsLeftOver=stringLength-totalParsedInputLength;if(string.length>0){getParsingFlags(config).unusedInput.push(string);}// clear _12h flag if hour is <= 12
if(config._a[HOUR]<=12&&getParsingFlags(config).bigHour===true&&config._a[HOUR]>0){getParsingFlags(config).bigHour=undefined;}getParsingFlags(config).parsedDateParts=config._a.slice(0);getParsingFlags(config).meridiem=config._meridiem;// handle meridiem
config._a[HOUR]=meridiemFixWrap(config._locale,config._a[HOUR],config._meridiem);// handle era
era=getParsingFlags(config).era;if(era!==null){config._a[YEAR]=config._locale.erasConvertYear(era,config._a[YEAR]);}configFromArray(config);checkOverflow(config);}function meridiemFixWrap(locale,hour,meridiem){var isPm;if(meridiem==null){// nothing to do
return hour;}if(locale.meridiemHour!=null){return locale.meridiemHour(hour,meridiem);}else if(locale.isPM!=null){// Fallback
isPm=locale.isPM(meridiem);if(isPm&&hour<12){hour+=12;}if(!isPm&&hour===12){hour=0;}return hour;}else{// this is not supposed to happen
return hour;}}// date from string and array of format strings
function configFromStringAndArray(config){var tempConfig,bestMoment,scoreToBeat,i,currentScore,validFormatFound,bestFormatIsValid=false,configfLen=config._f.length;if(configfLen===0){getParsingFlags(config).invalidFormat=true;config._d=new Date(NaN);return;}for(i=0;i<configfLen;i++){currentScore=0;validFormatFound=false;tempConfig=copyConfig({},config);if(config._useUTC!=null){tempConfig._useUTC=config._useUTC;}tempConfig._f=config._f[i];configFromStringAndFormat(tempConfig);if(isValid(tempConfig)){validFormatFound=true;}// if there is any input that was not parsed add a penalty for that format
currentScore+=getParsingFlags(tempConfig).charsLeftOver;//or tokens
currentScore+=getParsingFlags(tempConfig).unusedTokens.length*10;getParsingFlags(tempConfig).score=currentScore;if(!bestFormatIsValid){if(scoreToBeat==null||currentScore<scoreToBeat||validFormatFound){scoreToBeat=currentScore;bestMoment=tempConfig;if(validFormatFound){bestFormatIsValid=true;}}}else{if(currentScore<scoreToBeat){scoreToBeat=currentScore;bestMoment=tempConfig;}}}extend(config,bestMoment||tempConfig);}function configFromObject(config){if(config._d){return;}var i=normalizeObjectUnits(config._i),dayOrDate=i.day===undefined?i.date:i.day;config._a=map([i.year,i.month,dayOrDate,i.hour,i.minute,i.second,i.millisecond],function(obj){return obj&&parseInt(obj,10);});configFromArray(config);}function createFromConfig(config){var res=new Moment(checkOverflow(prepareConfig(config)));if(res._nextDay){// Adding is smart enough around DST
res.add(1,"d");res._nextDay=undefined;}return res;}function prepareConfig(config){var input=config._i,format=config._f;config._locale=config._locale||getLocale(config._l);if(input===null||format===undefined&&input===""){return createInvalid({nullInput:true});}if(typeof input==="string"){config._i=input=config._locale.preparse(input);}if(isMoment(input)){return new Moment(checkOverflow(input));}else if(isDate(input)){config._d=input;}else if(isArray(format)){configFromStringAndArray(config);}else if(format){configFromStringAndFormat(config);}else{configFromInput(config);}if(!isValid(config)){config._d=null;}return config;}function configFromInput(config){var input=config._i;if(isUndefined(input)){config._d=new Date(hooks.now());}else if(isDate(input)){config._d=new Date(input.valueOf());}else if(typeof input==="string"){configFromString(config);}else if(isArray(input)){config._a=map(input.slice(0),function(obj){return parseInt(obj,10);});configFromArray(config);}else if(isObject(input)){configFromObject(config);}else if(isNumber(input)){// from milliseconds
config._d=new Date(input);}else{hooks.createFromInputFallback(config);}}function createLocalOrUTC(input,format,locale,strict,isUTC){var c={};if(format===true||format===false){strict=format;format=undefined;}if(locale===true||locale===false){strict=locale;locale=undefined;}if(isObject(input)&&isObjectEmpty(input)||isArray(input)&&input.length===0){input=undefined;}// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
c._isAMomentObject=true;c._useUTC=c._isUTC=isUTC;c._l=locale;c._i=input;c._f=format;c._strict=strict;return createFromConfig(c);}function createLocal(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,false);}var prototypeMin=deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var other=createLocal.apply(null,arguments);if(this.isValid()&&other.isValid()){return other<this?this:other;}else{return createInvalid();}}),prototypeMax=deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var other=createLocal.apply(null,arguments);if(this.isValid()&&other.isValid()){return other>this?this:other;}else{return createInvalid();}});// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn,moments){var res,i;if(moments.length===1&&isArray(moments[0])){moments=moments[0];}if(!moments.length){return createLocal();}res=moments[0];for(i=1;i<moments.length;++i){if(!moments[i].isValid()||moments[i][fn](res)){res=moments[i];}}return res;}// TODO: Use [].sort instead?
function min(){var args=[].slice.call(arguments,0);return pickBy("isBefore",args);}function max(){var args=[].slice.call(arguments,0);return pickBy("isAfter",args);}var now=function(){return Date.now?Date.now():+new Date;};var ordering=["year","quarter","month","week","day","hour","minute","second","millisecond"];function isDurationValid(m){var key,unitHasDecimal=false,i,orderLen=ordering.length;for(key in m){if(hasOwnProp(m,key)&&!(indexOf.call(ordering,key)!==-1&&(m[key]==null||!isNaN(m[key])))){return false;}}for(i=0;i<orderLen;++i){if(m[ordering[i]]){if(unitHasDecimal){return false// only allow non-integers for smallest unit
;}if(parseFloat(m[ordering[i]])!==toInt(m[ordering[i]])){unitHasDecimal=true;}}}return true;}function isValid$1(){return this._isValid;}function createInvalid$1(){return createDuration(NaN);}function Duration(duration){var normalizedInput=normalizeObjectUnits(duration),years=normalizedInput.year||0,quarters=normalizedInput.quarter||0,months=normalizedInput.month||0,weeks=normalizedInput.week||normalizedInput.isoWeek||0,days=normalizedInput.day||0,hours=normalizedInput.hour||0,minutes=normalizedInput.minute||0,seconds=normalizedInput.second||0,milliseconds=normalizedInput.millisecond||0;this._isValid=isDurationValid(normalizedInput);// representation for dateAddRemove
this._milliseconds=+milliseconds+seconds*1e3+// 1000
minutes*6e4+// 1000 * 60
hours*1e3*60*60//using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
;// Because of dateAddRemove treats 24 hours as different from a
// day when working around DST, we need to store them separately
this._days=+days+weeks*7;// It is impossible to translate months into days without knowing
// which months you are are talking about, so we have to store
// it separately.
this._months=+months+quarters*3+years*12;this._data={};this._locale=getLocale();this._bubble();}function isDuration(obj){return obj instanceof Duration;}function absRound(number){if(number<0){return Math.round(-1*number)*-1;}else{return Math.round(number);}}// compare two arrays, return the number of differences
function compareArrays(array1,array2,dontConvert){var len=Math.min(array1.length,array2.length),lengthDiff=Math.abs(array1.length-array2.length),diffs=0,i;for(i=0;i<len;i++){if(toInt(array1[i])!==toInt(array2[i])){diffs++;}}return diffs+lengthDiff;}// FORMATTING
function offset(token,separator){addFormatToken(token,0,0,function(){var offset=this.utcOffset(),sign="+";if(offset<0){offset=-offset;sign="-";}return sign+zeroFill(~~(offset/60),2)+separator+zeroFill(~~offset%60,2);});}offset("Z",":");offset("ZZ","");// PARSING
addRegexToken("Z",matchShortOffset);addRegexToken("ZZ",matchShortOffset);addParseToken(["Z","ZZ"],function(input,array,config){config._useUTC=true;config._tzm=offsetFromString(matchShortOffset,input);});// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset=/([\+\-]|\d\d)/gi;function offsetFromString(matcher,string){var matches=(string||"").match(matcher),chunk,parts,minutes;if(matches===null){return null;}chunk=matches[matches.length-1]||[];parts=(chunk+"").match(chunkOffset)||["-",0,0];minutes=+(parts[1]*60)+toInt(parts[2]);return minutes===0?0:parts[0]==="+"?minutes:-minutes;}// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input,model){var res,diff;if(model._isUTC){res=model.clone();diff=(isMoment(input)||isDate(input)?input.valueOf():createLocal(input).valueOf())-res.valueOf();// Use low-level api, because this fn is low-level api.
res._d.setTime(res._d.valueOf()+diff);hooks.updateOffset(res,false);return res;}else{return createLocal(input).local();}}function getDateOffset(m){// On Firefox.24 Date#getTimezoneOffset returns a floating point.
// https://github.com/moment/moment/pull/1871
return-Math.round(m._d.getTimezoneOffset());}// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset=function(){};// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset(input,keepLocalTime,keepMinutes){var offset=this._offset||0,localAdjust;if(!this.isValid()){return input!=null?this:NaN;}if(input!=null){if(typeof input==="string"){input=offsetFromString(matchShortOffset,input);if(input===null){return this;}}else if(Math.abs(input)<16&&!keepMinutes){input=input*60;}if(!this._isUTC&&keepLocalTime){localAdjust=getDateOffset(this);}this._offset=input;this._isUTC=true;if(localAdjust!=null){this.add(localAdjust,"m");}if(offset!==input){if(!keepLocalTime||this._changeInProgress){addSubtract(this,createDuration(input-offset,"m"),1,false);}else if(!this._changeInProgress){this._changeInProgress=true;hooks.updateOffset(this,true);this._changeInProgress=null;}}return this;}else{return this._isUTC?offset:getDateOffset(this);}}function getSetZone(input,keepLocalTime){if(input!=null){if(typeof input!=="string"){input=-input;}this.utcOffset(input,keepLocalTime);return this;}else{return-this.utcOffset();}}function setOffsetToUTC(keepLocalTime){return this.utcOffset(0,keepLocalTime);}function setOffsetToLocal(keepLocalTime){if(this._isUTC){this.utcOffset(0,keepLocalTime);this._isUTC=false;if(keepLocalTime){this.subtract(getDateOffset(this),"m");}}return this;}function setOffsetToParsedOffset(){if(this._tzm!=null){this.utcOffset(this._tzm,false,true);}else if(typeof this._i==="string"){var tZone=offsetFromString(matchOffset,this._i);if(tZone!=null){this.utcOffset(tZone);}else{this.utcOffset(0,true);}}return this;}function hasAlignedHourOffset(input){if(!this.isValid()){return false;}input=input?createLocal(input).utcOffset():0;return(this.utcOffset()-input)%60===0;}function isDaylightSavingTime(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset();}function isDaylightSavingTimeShifted(){if(!isUndefined(this._isDSTShifted)){return this._isDSTShifted;}var c={},other;copyConfig(c,this);c=prepareConfig(c);if(c._a){other=c._isUTC?createUTC(c._a):createLocal(c._a);this._isDSTShifted=this.isValid()&&compareArrays(c._a,other.toArray())>0;}else{this._isDSTShifted=false;}return this._isDSTShifted;}function isLocal(){return this.isValid()?!this._isUTC:false;}function isUtcOffset(){return this.isValid()?this._isUTC:false;}function isUtc(){return this.isValid()?this._isUTC&&this._offset===0:false;}// ASP.NET json date format regex
var aspNetRegex=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
isoRegex=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function createDuration(input,key){var duration=input,// matching against regexp is expensive, do it on demand
match=null,sign,ret,diffRes;if(isDuration(input)){duration={ms:input._milliseconds,d:input._days,M:input._months};}else if(isNumber(input)||!isNaN(+input)){duration={};if(key){duration[key]=+input;}else{duration.milliseconds=+input;}}else if(match=aspNetRegex.exec(input)){sign=match[1]==="-"?-1:1;duration={y:0,d:toInt(match[DATE])*sign,h:toInt(match[HOUR])*sign,m:toInt(match[MINUTE])*sign,s:toInt(match[SECOND])*sign,ms:toInt(absRound(match[MILLISECOND]*1e3))*sign};}else if(match=isoRegex.exec(input)){sign=match[1]==="-"?-1:1;duration={y:parseIso(match[2],sign),M:parseIso(match[3],sign),w:parseIso(match[4],sign),d:parseIso(match[5],sign),h:parseIso(match[6],sign),m:parseIso(match[7],sign),s:parseIso(match[8],sign)};}else if(duration==null){// checks for null or undefined
duration={};}else if(typeof duration==="object"&&("from"in duration||"to"in duration)){diffRes=momentsDifference(createLocal(duration.from),createLocal(duration.to));duration={};duration.ms=diffRes.milliseconds;duration.M=diffRes.months;}ret=new Duration(duration);if(isDuration(input)&&hasOwnProp(input,"_locale")){ret._locale=input._locale;}if(isDuration(input)&&hasOwnProp(input,"_isValid")){ret._isValid=input._isValid;}return ret;}createDuration.fn=Duration.prototype;createDuration.invalid=createInvalid$1;function parseIso(inp,sign){// We'd normally use ~~inp for this, but unfortunately it also
// converts floats to ints.
// inp may be undefined, so careful calling replace on it.
var res=inp&&parseFloat(inp.replace(",","."));// apply sign while we're at it
return(isNaN(res)?0:res)*sign;}function positiveMomentsDifference(base,other){var res={};res.months=other.month()-base.month()+(other.year()-base.year())*12;if(base.clone().add(res.months,"M").isAfter(other)){--res.months;}res.milliseconds=+other-+base.clone().add(res.months,"M");return res;}function momentsDifference(base,other){var res;if(!(base.isValid()&&other.isValid())){return{milliseconds:0,months:0};}other=cloneWithOffset(other,base);if(base.isBefore(other)){res=positiveMomentsDifference(base,other);}else{res=positiveMomentsDifference(other,base);res.milliseconds=-res.milliseconds;res.months=-res.months;}return res;}// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction,name){return function(val,period){var dur,tmp;//invert the arguments, but complain about it
if(period!==null&&!isNaN(+period)){deprecateSimple(name,"moment()."+name+"(period, number) is deprecated. Please use moment()."+name+"(number, period). "+"See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");tmp=val;val=period;period=tmp;}dur=createDuration(val,period);addSubtract(this,dur,direction);return this;};}function addSubtract(mom,duration,isAdding,updateOffset){var milliseconds=duration._milliseconds,days=absRound(duration._days),months=absRound(duration._months);if(!mom.isValid()){// No op
return;}updateOffset=updateOffset==null?true:updateOffset;if(months){setMonth(mom,get(mom,"Month")+months*isAdding);}if(days){set$1(mom,"Date",get(mom,"Date")+days*isAdding);}if(milliseconds){mom._d.setTime(mom._d.valueOf()+milliseconds*isAdding);}if(updateOffset){hooks.updateOffset(mom,days||months);}}var add=createAdder(1,"add"),subtract=createAdder(-1,"subtract");function isString(input){return typeof input==="string"||input instanceof String;}// type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
function isMomentInput(input){return isMoment(input)||isDate(input)||isString(input)||isNumber(input)||isNumberOrStringArray(input)||isMomentInputObject(input)||input===null||input===undefined;}function isMomentInputObject(input){var objectTest=isObject(input)&&!isObjectEmpty(input),propertyTest=false,properties=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,property,propertyLen=properties.length;for(i=0;i<propertyLen;i+=1){property=properties[i];propertyTest=propertyTest||hasOwnProp(input,property);}return objectTest&&propertyTest;}function isNumberOrStringArray(input){var arrayTest=isArray(input),dataTypeTest=false;if(arrayTest){dataTypeTest=input.filter(function(item){return!isNumber(item)&&isString(input);}).length===0;}return arrayTest&&dataTypeTest;}function isCalendarSpec(input){var objectTest=isObject(input)&&!isObjectEmpty(input),propertyTest=false,properties=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,property;for(i=0;i<properties.length;i+=1){property=properties[i];propertyTest=propertyTest||hasOwnProp(input,property);}return objectTest&&propertyTest;}function getCalendarFormat(myMoment,now){var diff=myMoment.diff(now,"days",true);return diff<-6?"sameElse":diff<-1?"lastWeek":diff<0?"lastDay":diff<1?"sameDay":diff<2?"nextDay":diff<7?"nextWeek":"sameElse";}function calendar$1(time,formats){// Support for single parameter, formats only overload to the calendar function
if(arguments.length===1){if(!arguments[0]){time=undefined;formats=undefined;}else if(isMomentInput(arguments[0])){time=arguments[0];formats=undefined;}else if(isCalendarSpec(arguments[0])){formats=arguments[0];time=undefined;}}// We want to compare the start of today, vs this.
// Getting start-of-today depends on whether we're local/utc/offset or not.
var now=time||createLocal(),sod=cloneWithOffset(now,this).startOf("day"),format=hooks.calendarFormat(this,sod)||"sameElse",output=formats&&(isFunction(formats[format])?formats[format].call(this,now):formats[format]);return this.format(output||this.localeData().calendar(format,this,createLocal(now)));}function clone(){return new Moment(this);}function isAfter(input,units){var localInput=isMoment(input)?input:createLocal(input);if(!(this.isValid()&&localInput.isValid())){return false;}units=normalizeUnits(units)||"millisecond";if(units==="millisecond"){return this.valueOf()>localInput.valueOf();}else{return localInput.valueOf()<this.clone().startOf(units).valueOf();}}function isBefore(input,units){var localInput=isMoment(input)?input:createLocal(input);if(!(this.isValid()&&localInput.isValid())){return false;}units=normalizeUnits(units)||"millisecond";if(units==="millisecond"){return this.valueOf()<localInput.valueOf();}else{return this.clone().endOf(units).valueOf()<localInput.valueOf();}}function isBetween(from,to,units,inclusivity){var localFrom=isMoment(from)?from:createLocal(from),localTo=isMoment(to)?to:createLocal(to);if(!(this.isValid()&&localFrom.isValid()&&localTo.isValid())){return false;}inclusivity=inclusivity||"()";return(inclusivity[0]==="("?this.isAfter(localFrom,units):!this.isBefore(localFrom,units))&&(inclusivity[1]===")"?this.isBefore(localTo,units):!this.isAfter(localTo,units));}function isSame(input,units){var localInput=isMoment(input)?input:createLocal(input),inputMs;if(!(this.isValid()&&localInput.isValid())){return false;}units=normalizeUnits(units)||"millisecond";if(units==="millisecond"){return this.valueOf()===localInput.valueOf();}else{inputMs=localInput.valueOf();return this.clone().startOf(units).valueOf()<=inputMs&&inputMs<=this.clone().endOf(units).valueOf();}}function isSameOrAfter(input,units){return this.isSame(input,units)||this.isAfter(input,units);}function isSameOrBefore(input,units){return this.isSame(input,units)||this.isBefore(input,units);}function diff(input,units,asFloat){var that,zoneDelta,output;if(!this.isValid()){return NaN;}that=cloneWithOffset(input,this);if(!that.isValid()){return NaN;}zoneDelta=(that.utcOffset()-this.utcOffset())*6e4;units=normalizeUnits(units);switch(units){case"year":output=monthDiff(this,that)/12;break;case"month":output=monthDiff(this,that);break;case"quarter":output=monthDiff(this,that)/3;break;case"second":output=(this-that)/1e3;break;// 1000
case"minute":output=(this-that)/6e4;break;// 1000 * 60
case"hour":output=(this-that)/36e5;break;// 1000 * 60 * 60
case"day":output=(this-that-zoneDelta)/864e5;break;// 1000 * 60 * 60 * 24, negate dst
case"week":output=(this-that-zoneDelta)/6048e5;break;// 1000 * 60 * 60 * 24 * 7, negate dst
default:output=this-that;}return asFloat?output:absFloor(output);}function monthDiff(a,b){if(a.date()<b.date()){// end-of-month calculations work correct when the start month has more
// days than the end month.
return-monthDiff(b,a);}// difference in months
var wholeMonthDiff=(b.year()-a.year())*12+(b.month()-a.month()),// b is in (anchor - 1 month, anchor + 1 month)
anchor=a.clone().add(wholeMonthDiff,"months"),anchor2,adjust;if(b-anchor<0){anchor2=a.clone().add(wholeMonthDiff-1,"months");// linear across the month
adjust=(b-anchor)/(anchor-anchor2);}else{anchor2=a.clone().add(wholeMonthDiff+1,"months");// linear across the month
adjust=(b-anchor)/(anchor2-anchor);}//check for negative zero, return zero if negative zero
return-(wholeMonthDiff+adjust)||0;}hooks.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";hooks.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function toString(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");}function toISOString(keepOffset){if(!this.isValid()){return null;}var utc=keepOffset!==true,m=utc?this.clone().utc():this;if(m.year()<0||m.year()>9999){return formatMoment(m,utc?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");}if(isFunction(Date.prototype.toISOString)){// native implementation is ~50x faster, use it when we can
if(utc){return this.toDate().toISOString();}else{return new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",formatMoment(m,"Z"));}}return formatMoment(m,utc?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ");}/**
         * Return a human readable representation of a moment that can
         * also be evaluated to get a new moment which is the same
         *
         * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
         */function inspect(){if(!this.isValid()){return"moment.invalid(/* "+this._i+" */)";}var func="moment",zone="",prefix,year,datetime,suffix;if(!this.isLocal()){func=this.utcOffset()===0?"moment.utc":"moment.parseZone";zone="Z";}prefix="["+func+'("]';year=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY";datetime="-MM-DD[T]HH:mm:ss.SSS";suffix=zone+'[")]';return this.format(prefix+year+datetime+suffix);}function format(inputString){if(!inputString){inputString=this.isUtc()?hooks.defaultFormatUtc:hooks.defaultFormat;}var output=formatMoment(this,inputString);return this.localeData().postformat(output);}function from(time,withoutSuffix){if(this.isValid()&&(isMoment(time)&&time.isValid()||createLocal(time).isValid())){return createDuration({to:this,from:time}).locale(this.locale()).humanize(!withoutSuffix);}else{return this.localeData().invalidDate();}}function fromNow(withoutSuffix){return this.from(createLocal(),withoutSuffix);}function to(time,withoutSuffix){if(this.isValid()&&(isMoment(time)&&time.isValid()||createLocal(time).isValid())){return createDuration({from:this,to:time}).locale(this.locale()).humanize(!withoutSuffix);}else{return this.localeData().invalidDate();}}function toNow(withoutSuffix){return this.to(createLocal(),withoutSuffix);}// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale(key){var newLocaleData;if(key===undefined){return this._locale._abbr;}else{newLocaleData=getLocale(key);if(newLocaleData!=null){this._locale=newLocaleData;}return this;}}var lang=deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(key){if(key===undefined){return this.localeData();}else{return this.locale(key);}});function localeData(){return this._locale;}var MS_PER_SECOND=1e3,MS_PER_MINUTE=60*MS_PER_SECOND,MS_PER_HOUR=60*MS_PER_MINUTE,MS_PER_400_YEARS=(365*400+97)*24*MS_PER_HOUR;// actual modulo - handles negative numbers (for dates before 1970):
function mod$1(dividend,divisor){return(dividend%divisor+divisor)%divisor;}function localStartOfDate(y,m,d){// the date constructor remaps years 0-99 to 1900-1999
if(y<100&&y>=0){// preserve leap years using a full 400 year cycle, then reset
return new Date(y+400,m,d)-MS_PER_400_YEARS;}else{return new Date(y,m,d).valueOf();}}function utcStartOfDate(y,m,d){// Date.UTC remaps years 0-99 to 1900-1999
if(y<100&&y>=0){// preserve leap years using a full 400 year cycle, then reset
return Date.UTC(y+400,m,d)-MS_PER_400_YEARS;}else{return Date.UTC(y,m,d);}}function startOf(units){var time,startOfDate;units=normalizeUnits(units);if(units===undefined||units==="millisecond"||!this.isValid()){return this;}startOfDate=this._isUTC?utcStartOfDate:localStartOfDate;switch(units){case"year":time=startOfDate(this.year(),0,1);break;case"quarter":time=startOfDate(this.year(),this.month()-this.month()%3,1);break;case"month":time=startOfDate(this.year(),this.month(),1);break;case"week":time=startOfDate(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":time=startOfDate(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":time=startOfDate(this.year(),this.month(),this.date());break;case"hour":time=this._d.valueOf();time-=mod$1(time+(this._isUTC?0:this.utcOffset()*MS_PER_MINUTE),MS_PER_HOUR);break;case"minute":time=this._d.valueOf();time-=mod$1(time,MS_PER_MINUTE);break;case"second":time=this._d.valueOf();time-=mod$1(time,MS_PER_SECOND);break;}this._d.setTime(time);hooks.updateOffset(this,true);return this;}function endOf(units){var time,startOfDate;units=normalizeUnits(units);if(units===undefined||units==="millisecond"||!this.isValid()){return this;}startOfDate=this._isUTC?utcStartOfDate:localStartOfDate;switch(units){case"year":time=startOfDate(this.year()+1,0,1)-1;break;case"quarter":time=startOfDate(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":time=startOfDate(this.year(),this.month()+1,1)-1;break;case"week":time=startOfDate(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":time=startOfDate(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":time=startOfDate(this.year(),this.month(),this.date()+1)-1;break;case"hour":time=this._d.valueOf();time+=MS_PER_HOUR-mod$1(time+(this._isUTC?0:this.utcOffset()*MS_PER_MINUTE),MS_PER_HOUR)-1;break;case"minute":time=this._d.valueOf();time+=MS_PER_MINUTE-mod$1(time,MS_PER_MINUTE)-1;break;case"second":time=this._d.valueOf();time+=MS_PER_SECOND-mod$1(time,MS_PER_SECOND)-1;break;}this._d.setTime(time);hooks.updateOffset(this,true);return this;}function valueOf(){return this._d.valueOf()-(this._offset||0)*6e4;}function unix(){return Math.floor(this.valueOf()/1e3);}function toDate(){return new Date(this.valueOf());}function toArray(){var m=this;return[m.year(),m.month(),m.date(),m.hour(),m.minute(),m.second(),m.millisecond()];}function toObject(){var m=this;return{years:m.year(),months:m.month(),date:m.date(),hours:m.hours(),minutes:m.minutes(),seconds:m.seconds(),milliseconds:m.milliseconds()};}function toJSON(){// new Date(NaN).toJSON() === null
return this.isValid()?this.toISOString():null;}function isValid$2(){return isValid(this);}function parsingFlags(){return extend({},getParsingFlags(this));}function invalidAt(){return getParsingFlags(this).overflow;}function creationData(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict};}addFormatToken("N",0,0,"eraAbbr");addFormatToken("NN",0,0,"eraAbbr");addFormatToken("NNN",0,0,"eraAbbr");addFormatToken("NNNN",0,0,"eraName");addFormatToken("NNNNN",0,0,"eraNarrow");addFormatToken("y",["y",1],"yo","eraYear");addFormatToken("y",["yy",2],0,"eraYear");addFormatToken("y",["yyy",3],0,"eraYear");addFormatToken("y",["yyyy",4],0,"eraYear");addRegexToken("N",matchEraAbbr);addRegexToken("NN",matchEraAbbr);addRegexToken("NNN",matchEraAbbr);addRegexToken("NNNN",matchEraName);addRegexToken("NNNNN",matchEraNarrow);addParseToken(["N","NN","NNN","NNNN","NNNNN"],function(input,array,config,token){var era=config._locale.erasParse(input,token,config._strict);if(era){getParsingFlags(config).era=era;}else{getParsingFlags(config).invalidEra=input;}});addRegexToken("y",matchUnsigned);addRegexToken("yy",matchUnsigned);addRegexToken("yyy",matchUnsigned);addRegexToken("yyyy",matchUnsigned);addRegexToken("yo",matchEraYearOrdinal);addParseToken(["y","yy","yyy","yyyy"],YEAR);addParseToken(["yo"],function(input,array,config,token){var match;if(config._locale._eraYearOrdinalRegex){match=input.match(config._locale._eraYearOrdinalRegex);}if(config._locale.eraYearOrdinalParse){array[YEAR]=config._locale.eraYearOrdinalParse(input,match);}else{array[YEAR]=parseInt(input,10);}});function localeEras(m,format){var i,l,date1,eras=this._eras||getLocale("en")._eras;for(i=0,l=eras.length;i<l;++i){switch(typeof eras[i].since){case"string":// truncate time
date1=hooks(eras[i].since).startOf("day");eras[i].since=date1.valueOf();break;}switch(typeof eras[i].until){case"undefined":eras[i].until=+Infinity;break;case"string":// truncate time
date1=hooks(eras[i].until).startOf("day").valueOf();eras[i].until=date1.valueOf();break;}}return eras;}function localeErasParse(eraName,format,strict){var i,l,eras=this.eras(),name,abbr,narrow;eraName=eraName.toUpperCase();for(i=0,l=eras.length;i<l;++i){name=eras[i].name.toUpperCase();abbr=eras[i].abbr.toUpperCase();narrow=eras[i].narrow.toUpperCase();if(strict){switch(format){case"N":case"NN":case"NNN":if(abbr===eraName){return eras[i];}break;case"NNNN":if(name===eraName){return eras[i];}break;case"NNNNN":if(narrow===eraName){return eras[i];}break;}}else if([name,abbr,narrow].indexOf(eraName)>=0){return eras[i];}}}function localeErasConvertYear(era,year){var dir=era.since<=era.until?+1:-1;if(year===undefined){return hooks(era.since).year();}else{return hooks(era.since).year()+(year-era.offset)*dir;}}function getEraName(){var i,l,val,eras=this.localeData().eras();for(i=0,l=eras.length;i<l;++i){// truncate time
val=this.clone().startOf("day").valueOf();if(eras[i].since<=val&&val<=eras[i].until){return eras[i].name;}if(eras[i].until<=val&&val<=eras[i].since){return eras[i].name;}}return"";}function getEraNarrow(){var i,l,val,eras=this.localeData().eras();for(i=0,l=eras.length;i<l;++i){// truncate time
val=this.clone().startOf("day").valueOf();if(eras[i].since<=val&&val<=eras[i].until){return eras[i].narrow;}if(eras[i].until<=val&&val<=eras[i].since){return eras[i].narrow;}}return"";}function getEraAbbr(){var i,l,val,eras=this.localeData().eras();for(i=0,l=eras.length;i<l;++i){// truncate time
val=this.clone().startOf("day").valueOf();if(eras[i].since<=val&&val<=eras[i].until){return eras[i].abbr;}if(eras[i].until<=val&&val<=eras[i].since){return eras[i].abbr;}}return"";}function getEraYear(){var i,l,dir,val,eras=this.localeData().eras();for(i=0,l=eras.length;i<l;++i){dir=eras[i].since<=eras[i].until?+1:-1;// truncate time
val=this.clone().startOf("day").valueOf();if(eras[i].since<=val&&val<=eras[i].until||eras[i].until<=val&&val<=eras[i].since){return(this.year()-hooks(eras[i].since).year())*dir+eras[i].offset;}}return this.year();}function erasNameRegex(isStrict){if(!hasOwnProp(this,"_erasNameRegex")){computeErasParse.call(this);}return isStrict?this._erasNameRegex:this._erasRegex;}function erasAbbrRegex(isStrict){if(!hasOwnProp(this,"_erasAbbrRegex")){computeErasParse.call(this);}return isStrict?this._erasAbbrRegex:this._erasRegex;}function erasNarrowRegex(isStrict){if(!hasOwnProp(this,"_erasNarrowRegex")){computeErasParse.call(this);}return isStrict?this._erasNarrowRegex:this._erasRegex;}function matchEraAbbr(isStrict,locale){return locale.erasAbbrRegex(isStrict);}function matchEraName(isStrict,locale){return locale.erasNameRegex(isStrict);}function matchEraNarrow(isStrict,locale){return locale.erasNarrowRegex(isStrict);}function matchEraYearOrdinal(isStrict,locale){return locale._eraYearOrdinalRegex||matchUnsigned;}function computeErasParse(){var abbrPieces=[],namePieces=[],narrowPieces=[],mixedPieces=[],i,l,erasName,erasAbbr,erasNarrow,eras=this.eras();for(i=0,l=eras.length;i<l;++i){erasName=regexEscape(eras[i].name);erasAbbr=regexEscape(eras[i].abbr);erasNarrow=regexEscape(eras[i].narrow);namePieces.push(erasName);abbrPieces.push(erasAbbr);narrowPieces.push(erasNarrow);mixedPieces.push(erasName);mixedPieces.push(erasAbbr);mixedPieces.push(erasNarrow);}this._erasRegex=new RegExp("^("+mixedPieces.join("|")+")","i");this._erasNameRegex=new RegExp("^("+namePieces.join("|")+")","i");this._erasAbbrRegex=new RegExp("^("+abbrPieces.join("|")+")","i");this._erasNarrowRegex=new RegExp("^("+narrowPieces.join("|")+")","i");}// FORMATTING
addFormatToken(0,["gg",2],0,function(){return this.weekYear()%100;});addFormatToken(0,["GG",2],0,function(){return this.isoWeekYear()%100;});function addWeekYearFormatToken(token,getter){addFormatToken(0,[token,token.length],0,getter);}addWeekYearFormatToken("gggg","weekYear");addWeekYearFormatToken("ggggg","weekYear");addWeekYearFormatToken("GGGG","isoWeekYear");addWeekYearFormatToken("GGGGG","isoWeekYear");// ALIASES
// PARSING
addRegexToken("G",matchSigned);addRegexToken("g",matchSigned);addRegexToken("GG",match1to2,match2);addRegexToken("gg",match1to2,match2);addRegexToken("GGGG",match1to4,match4);addRegexToken("gggg",match1to4,match4);addRegexToken("GGGGG",match1to6,match6);addRegexToken("ggggg",match1to6,match6);addWeekParseToken(["gggg","ggggg","GGGG","GGGGG"],function(input,week,config,token){week[token.substr(0,2)]=toInt(input);});addWeekParseToken(["gg","GG"],function(input,week,config,token){week[token]=hooks.parseTwoDigitYear(input);});// MOMENTS
function getSetWeekYear(input){return getSetWeekYearHelper.call(this,input,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy);}function getSetISOWeekYear(input){return getSetWeekYearHelper.call(this,input,this.isoWeek(),this.isoWeekday(),1,4);}function getISOWeeksInYear(){return weeksInYear(this.year(),1,4);}function getISOWeeksInISOWeekYear(){return weeksInYear(this.isoWeekYear(),1,4);}function getWeeksInYear(){var weekInfo=this.localeData()._week;return weeksInYear(this.year(),weekInfo.dow,weekInfo.doy);}function getWeeksInWeekYear(){var weekInfo=this.localeData()._week;return weeksInYear(this.weekYear(),weekInfo.dow,weekInfo.doy);}function getSetWeekYearHelper(input,week,weekday,dow,doy){var weeksTarget;if(input==null){return weekOfYear(this,dow,doy).year;}else{weeksTarget=weeksInYear(input,dow,doy);if(week>weeksTarget){week=weeksTarget;}return setWeekAll.call(this,input,week,weekday,dow,doy);}}function setWeekAll(weekYear,week,weekday,dow,doy){var dayOfYearData=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy),date1=createUTCDate(dayOfYearData.year,0,dayOfYearData.dayOfYear);this.year(date1.getUTCFullYear());this.month(date1.getUTCMonth());this.date(date1.getUTCDate());return this;}// FORMATTING
addFormatToken("Q",0,"Qo","quarter");// PARSING
addRegexToken("Q",match1);addParseToken("Q",function(input,array){array[MONTH]=(toInt(input)-1)*3;});// MOMENTS
function getSetQuarter(input){return input==null?Math.ceil((this.month()+1)/3):this.month((input-1)*3+this.month()%3);}// FORMATTING
addFormatToken("D",["DD",2],"Do","date");// PARSING
addRegexToken("D",match1to2,match1to2NoLeadingZero);addRegexToken("DD",match1to2,match2);addRegexToken("Do",function(isStrict,locale){// TODO: Remove "ordinalParse" fallback in next major release.
return isStrict?locale._dayOfMonthOrdinalParse||locale._ordinalParse:locale._dayOfMonthOrdinalParseLenient;});addParseToken(["D","DD"],DATE);addParseToken("Do",function(input,array){array[DATE]=toInt(input.match(match1to2)[0]);});// MOMENTS
var getSetDayOfMonth=makeGetSet("Date",true);// FORMATTING
addFormatToken("DDD",["DDDD",3],"DDDo","dayOfYear");// PARSING
addRegexToken("DDD",match1to3);addRegexToken("DDDD",match3);addParseToken(["DDD","DDDD"],function(input,array,config){config._dayOfYear=toInt(input);});// HELPERS
// MOMENTS
function getSetDayOfYear(input){var dayOfYear=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return input==null?dayOfYear:this.add(input-dayOfYear,"d");}// FORMATTING
addFormatToken("m",["mm",2],0,"minute");// PARSING
addRegexToken("m",match1to2,match1to2HasZero);addRegexToken("mm",match1to2,match2);addParseToken(["m","mm"],MINUTE);// MOMENTS
var getSetMinute=makeGetSet("Minutes",false);// FORMATTING
addFormatToken("s",["ss",2],0,"second");// PARSING
addRegexToken("s",match1to2,match1to2HasZero);addRegexToken("ss",match1to2,match2);addParseToken(["s","ss"],SECOND);// MOMENTS
var getSetSecond=makeGetSet("Seconds",false);// FORMATTING
addFormatToken("S",0,0,function(){return~~(this.millisecond()/100);});addFormatToken(0,["SS",2],0,function(){return~~(this.millisecond()/10);});addFormatToken(0,["SSS",3],0,"millisecond");addFormatToken(0,["SSSS",4],0,function(){return this.millisecond()*10;});addFormatToken(0,["SSSSS",5],0,function(){return this.millisecond()*100;});addFormatToken(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3;});addFormatToken(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4;});addFormatToken(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5;});addFormatToken(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6;});// PARSING
addRegexToken("S",match1to3,match1);addRegexToken("SS",match1to3,match2);addRegexToken("SSS",match1to3,match3);var token,getSetMillisecond;for(token="SSSS";token.length<=9;token+="S"){addRegexToken(token,matchUnsigned);}function parseMs(input,array){array[MILLISECOND]=toInt(("0."+input)*1e3);}for(token="S";token.length<=9;token+="S"){addParseToken(token,parseMs);}getSetMillisecond=makeGetSet("Milliseconds",false);// FORMATTING
addFormatToken("z",0,0,"zoneAbbr");addFormatToken("zz",0,0,"zoneName");// MOMENTS
function getZoneAbbr(){return this._isUTC?"UTC":"";}function getZoneName(){return this._isUTC?"Coordinated Universal Time":"";}var proto=Moment.prototype;proto.add=add;proto.calendar=calendar$1;proto.clone=clone;proto.diff=diff;proto.endOf=endOf;proto.format=format;proto.from=from;proto.fromNow=fromNow;proto.to=to;proto.toNow=toNow;proto.get=stringGet;proto.invalidAt=invalidAt;proto.isAfter=isAfter;proto.isBefore=isBefore;proto.isBetween=isBetween;proto.isSame=isSame;proto.isSameOrAfter=isSameOrAfter;proto.isSameOrBefore=isSameOrBefore;proto.isValid=isValid$2;proto.lang=lang;proto.locale=locale;proto.localeData=localeData;proto.max=prototypeMax;proto.min=prototypeMin;proto.parsingFlags=parsingFlags;proto.set=stringSet;proto.startOf=startOf;proto.subtract=subtract;proto.toArray=toArray;proto.toObject=toObject;proto.toDate=toDate;proto.toISOString=toISOString;proto.inspect=inspect;if(typeof Symbol!=="undefined"&&Symbol.for!=null){proto[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">";};}proto.toJSON=toJSON;proto.toString=toString;proto.unix=unix;proto.valueOf=valueOf;proto.creationData=creationData;proto.eraName=getEraName;proto.eraNarrow=getEraNarrow;proto.eraAbbr=getEraAbbr;proto.eraYear=getEraYear;proto.year=getSetYear;proto.isLeapYear=getIsLeapYear;proto.weekYear=getSetWeekYear;proto.isoWeekYear=getSetISOWeekYear;proto.quarter=proto.quarters=getSetQuarter;proto.month=getSetMonth;proto.daysInMonth=getDaysInMonth;proto.week=proto.weeks=getSetWeek;proto.isoWeek=proto.isoWeeks=getSetISOWeek;proto.weeksInYear=getWeeksInYear;proto.weeksInWeekYear=getWeeksInWeekYear;proto.isoWeeksInYear=getISOWeeksInYear;proto.isoWeeksInISOWeekYear=getISOWeeksInISOWeekYear;proto.date=getSetDayOfMonth;proto.day=proto.days=getSetDayOfWeek;proto.weekday=getSetLocaleDayOfWeek;proto.isoWeekday=getSetISODayOfWeek;proto.dayOfYear=getSetDayOfYear;proto.hour=proto.hours=getSetHour;proto.minute=proto.minutes=getSetMinute;proto.second=proto.seconds=getSetSecond;proto.millisecond=proto.milliseconds=getSetMillisecond;proto.utcOffset=getSetOffset;proto.utc=setOffsetToUTC;proto.local=setOffsetToLocal;proto.parseZone=setOffsetToParsedOffset;proto.hasAlignedHourOffset=hasAlignedHourOffset;proto.isDST=isDaylightSavingTime;proto.isLocal=isLocal;proto.isUtcOffset=isUtcOffset;proto.isUtc=isUtc;proto.isUTC=isUtc;proto.zoneAbbr=getZoneAbbr;proto.zoneName=getZoneName;proto.dates=deprecate("dates accessor is deprecated. Use date instead.",getSetDayOfMonth);proto.months=deprecate("months accessor is deprecated. Use month instead",getSetMonth);proto.years=deprecate("years accessor is deprecated. Use year instead",getSetYear);proto.zone=deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",getSetZone);proto.isDSTShifted=deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",isDaylightSavingTimeShifted);function createUnix(input){return createLocal(input*1e3);}function createInZone(){return createLocal.apply(null,arguments).parseZone();}function preParsePostFormat(string){return string;}var proto$1=Locale.prototype;proto$1.calendar=calendar;proto$1.longDateFormat=longDateFormat;proto$1.invalidDate=invalidDate;proto$1.ordinal=ordinal;proto$1.preparse=preParsePostFormat;proto$1.postformat=preParsePostFormat;proto$1.relativeTime=relativeTime;proto$1.pastFuture=pastFuture;proto$1.set=set;proto$1.eras=localeEras;proto$1.erasParse=localeErasParse;proto$1.erasConvertYear=localeErasConvertYear;proto$1.erasAbbrRegex=erasAbbrRegex;proto$1.erasNameRegex=erasNameRegex;proto$1.erasNarrowRegex=erasNarrowRegex;proto$1.months=localeMonths;proto$1.monthsShort=localeMonthsShort;proto$1.monthsParse=localeMonthsParse;proto$1.monthsRegex=monthsRegex;proto$1.monthsShortRegex=monthsShortRegex;proto$1.week=localeWeek;proto$1.firstDayOfYear=localeFirstDayOfYear;proto$1.firstDayOfWeek=localeFirstDayOfWeek;proto$1.weekdays=localeWeekdays;proto$1.weekdaysMin=localeWeekdaysMin;proto$1.weekdaysShort=localeWeekdaysShort;proto$1.weekdaysParse=localeWeekdaysParse;proto$1.weekdaysRegex=weekdaysRegex;proto$1.weekdaysShortRegex=weekdaysShortRegex;proto$1.weekdaysMinRegex=weekdaysMinRegex;proto$1.isPM=localeIsPM;proto$1.meridiem=localeMeridiem;function get$1(format,index,field,setter){var locale=getLocale(),utc=createUTC().set(setter,index);return locale[field](utc,format);}function listMonthsImpl(format,index,field){if(isNumber(format)){index=format;format=undefined;}format=format||"";if(index!=null){return get$1(format,index,field,"month");}var i,out=[];for(i=0;i<12;i++){out[i]=get$1(format,i,field,"month");}return out;}// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl(localeSorted,format,index,field){if(typeof localeSorted==="boolean"){if(isNumber(format)){index=format;format=undefined;}format=format||"";}else{format=localeSorted;index=format;localeSorted=false;if(isNumber(format)){index=format;format=undefined;}format=format||"";}var locale=getLocale(),shift=localeSorted?locale._week.dow:0,i,out=[];if(index!=null){return get$1(format,(index+shift)%7,field,"day");}for(i=0;i<7;i++){out[i]=get$1(format,(i+shift)%7,field,"day");}return out;}function listMonths(format,index){return listMonthsImpl(format,index,"months");}function listMonthsShort(format,index){return listMonthsImpl(format,index,"monthsShort");}function listWeekdays(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,"weekdays");}function listWeekdaysShort(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,"weekdaysShort");}function listWeekdaysMin(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,"weekdaysMin");}getSetGlobalLocale("en",{eras:[{since:"0001-01-01",until:+Infinity,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-Infinity,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(number){var b=number%10,output=toInt(number%100/10)===1?"th":b===1?"st":b===2?"nd":b===3?"rd":"th";return number+output;}});// Side effect imports
hooks.lang=deprecate("moment.lang is deprecated. Use moment.locale instead.",getSetGlobalLocale);hooks.langData=deprecate("moment.langData is deprecated. Use moment.localeData instead.",getLocale);var mathAbs=Math.abs;function abs(){var data=this._data;this._milliseconds=mathAbs(this._milliseconds);this._days=mathAbs(this._days);this._months=mathAbs(this._months);data.milliseconds=mathAbs(data.milliseconds);data.seconds=mathAbs(data.seconds);data.minutes=mathAbs(data.minutes);data.hours=mathAbs(data.hours);data.months=mathAbs(data.months);data.years=mathAbs(data.years);return this;}function addSubtract$1(duration,input,value,direction){var other=createDuration(input,value);duration._milliseconds+=direction*other._milliseconds;duration._days+=direction*other._days;duration._months+=direction*other._months;return duration._bubble();}// supports only 2.0-style add(1, 's') or add(duration)
function add$1(input,value){return addSubtract$1(this,input,value,1);}// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1(input,value){return addSubtract$1(this,input,value,-1);}function absCeil(number){if(number<0){return Math.floor(number);}else{return Math.ceil(number);}}function bubble(){var milliseconds=this._milliseconds,days=this._days,months=this._months,data=this._data,seconds,minutes,hours,years,monthsFromDays;// if we have a mix of positive and negative values, bubble down first
// check: https://github.com/moment/moment/issues/2166
if(!(milliseconds>=0&&days>=0&&months>=0||milliseconds<=0&&days<=0&&months<=0)){milliseconds+=absCeil(monthsToDays(months)+days)*864e5;days=0;months=0;}// The following code bubbles up values, see the tests for
// examples of what that means.
data.milliseconds=milliseconds%1e3;seconds=absFloor(milliseconds/1e3);data.seconds=seconds%60;minutes=absFloor(seconds/60);data.minutes=minutes%60;hours=absFloor(minutes/60);data.hours=hours%24;days+=absFloor(hours/24);// convert days to months
monthsFromDays=absFloor(daysToMonths(days));months+=monthsFromDays;days-=absCeil(monthsToDays(monthsFromDays));// 12 months -> 1 year
years=absFloor(months/12);months%=12;data.days=days;data.months=months;data.years=years;return this;}function daysToMonths(days){// 400 years have 146097 days (taking into account leap year rules)
// 400 years have 12 months === 4800
return days*4800/146097;}function monthsToDays(months){// the reverse of daysToMonths
return months*146097/4800;}function as(units){if(!this.isValid()){return NaN;}var days,months,milliseconds=this._milliseconds;units=normalizeUnits(units);if(units==="month"||units==="quarter"||units==="year"){days=this._days+milliseconds/864e5;months=this._months+daysToMonths(days);switch(units){case"month":return months;case"quarter":return months/3;case"year":return months/12;}}else{// handle milliseconds separately because of floating point math errors (issue #1867)
days=this._days+Math.round(monthsToDays(this._months));switch(units){case"week":return days/7+milliseconds/6048e5;case"day":return days+milliseconds/864e5;case"hour":return days*24+milliseconds/36e5;case"minute":return days*1440+milliseconds/6e4;case"second":return days*86400+milliseconds/1e3;// Math.floor prevents floating point math errors here
case"millisecond":return Math.floor(days*864e5)+milliseconds;default:throw new Error("Unknown unit "+units);}}}function makeAs(alias){return function(){return this.as(alias);};}var asMilliseconds=makeAs("ms"),asSeconds=makeAs("s"),asMinutes=makeAs("m"),asHours=makeAs("h"),asDays=makeAs("d"),asWeeks=makeAs("w"),asMonths=makeAs("M"),asQuarters=makeAs("Q"),asYears=makeAs("y"),valueOf$1=asMilliseconds;function clone$1(){return createDuration(this);}function get$2(units){units=normalizeUnits(units);return this.isValid()?this[units+"s"]():NaN;}function makeGetter(name){return function(){return this.isValid()?this._data[name]:NaN;};}var milliseconds=makeGetter("milliseconds"),seconds=makeGetter("seconds"),minutes=makeGetter("minutes"),hours=makeGetter("hours"),days=makeGetter("days"),months=makeGetter("months"),years=makeGetter("years");function weeks(){return absFloor(this.days()/7);}var round=Math.round,thresholds={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string,number,withoutSuffix,isFuture,locale){return locale.relativeTime(number||1,!!withoutSuffix,string,isFuture);}function relativeTime$1(posNegDuration,withoutSuffix,thresholds,locale){var duration=createDuration(posNegDuration).abs(),seconds=round(duration.as("s")),minutes=round(duration.as("m")),hours=round(duration.as("h")),days=round(duration.as("d")),months=round(duration.as("M")),weeks=round(duration.as("w")),years=round(duration.as("y")),a=seconds<=thresholds.ss&&["s",seconds]||seconds<thresholds.s&&["ss",seconds]||minutes<=1&&["m"]||minutes<thresholds.m&&["mm",minutes]||hours<=1&&["h"]||hours<thresholds.h&&["hh",hours]||days<=1&&["d"]||days<thresholds.d&&["dd",days];if(thresholds.w!=null){a=a||weeks<=1&&["w"]||weeks<thresholds.w&&["ww",weeks];}a=a||months<=1&&["M"]||months<thresholds.M&&["MM",months]||years<=1&&["y"]||["yy",years];a[2]=withoutSuffix;a[3]=+posNegDuration>0;a[4]=locale;return substituteTimeAgo.apply(null,a);}// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding(roundingFunction){if(roundingFunction===undefined){return round;}if(typeof roundingFunction==="function"){round=roundingFunction;return true;}return false;}// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold(threshold,limit){if(thresholds[threshold]===undefined){return false;}if(limit===undefined){return thresholds[threshold];}thresholds[threshold]=limit;if(threshold==="s"){thresholds.ss=limit-1;}return true;}function humanize(argWithSuffix,argThresholds){if(!this.isValid()){return this.localeData().invalidDate();}var withSuffix=false,th=thresholds,locale,output;if(typeof argWithSuffix==="object"){argThresholds=argWithSuffix;argWithSuffix=false;}if(typeof argWithSuffix==="boolean"){withSuffix=argWithSuffix;}if(typeof argThresholds==="object"){th=Object.assign({},thresholds,argThresholds);if(argThresholds.s!=null&&argThresholds.ss==null){th.ss=argThresholds.s-1;}}locale=this.localeData();output=relativeTime$1(this,!withSuffix,th,locale);if(withSuffix){output=locale.pastFuture(+this,output);}return locale.postformat(output);}var abs$1=Math.abs;function sign(x){return(x>0)-(x<0)||+x;}function toISOString$1(){// for ISO strings we do not use the normal bubbling rules:
//  * milliseconds bubble up until they become hours
//  * days do not bubble at all
//  * months bubble up until they become years
// This is because there is no context-free conversion between hours and days
// (think of clock changes)
// and also not between days and months (28-31 days per month)
if(!this.isValid()){return this.localeData().invalidDate();}var seconds=abs$1(this._milliseconds)/1e3,days=abs$1(this._days),months=abs$1(this._months),minutes,hours,years,s,total=this.asSeconds(),totalSign,ymSign,daysSign,hmsSign;if(!total){// this is the same as C#'s (Noda) and python (isodate)...
// but not other JS (goog.date)
return"P0D";}// 3600 seconds -> 60 minutes -> 1 hour
minutes=absFloor(seconds/60);hours=absFloor(minutes/60);seconds%=60;minutes%=60;// 12 months -> 1 year
years=absFloor(months/12);months%=12;// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
s=seconds?seconds.toFixed(3).replace(/\.?0+$/,""):"";totalSign=total<0?"-":"";ymSign=sign(this._months)!==sign(total)?"-":"";daysSign=sign(this._days)!==sign(total)?"-":"";hmsSign=sign(this._milliseconds)!==sign(total)?"-":"";return totalSign+"P"+(years?ymSign+years+"Y":"")+(months?ymSign+months+"M":"")+(days?daysSign+days+"D":"")+(hours||minutes||seconds?"T":"")+(hours?hmsSign+hours+"H":"")+(minutes?hmsSign+minutes+"M":"")+(seconds?hmsSign+s+"S":"");}var proto$2=Duration.prototype;proto$2.isValid=isValid$1;proto$2.abs=abs;proto$2.add=add$1;proto$2.subtract=subtract$1;proto$2.as=as;proto$2.asMilliseconds=asMilliseconds;proto$2.asSeconds=asSeconds;proto$2.asMinutes=asMinutes;proto$2.asHours=asHours;proto$2.asDays=asDays;proto$2.asWeeks=asWeeks;proto$2.asMonths=asMonths;proto$2.asQuarters=asQuarters;proto$2.asYears=asYears;proto$2.valueOf=valueOf$1;proto$2._bubble=bubble;proto$2.clone=clone$1;proto$2.get=get$2;proto$2.milliseconds=milliseconds;proto$2.seconds=seconds;proto$2.minutes=minutes;proto$2.hours=hours;proto$2.days=days;proto$2.weeks=weeks;proto$2.months=months;proto$2.years=years;proto$2.humanize=humanize;proto$2.toISOString=toISOString$1;proto$2.toString=toISOString$1;proto$2.toJSON=toISOString$1;proto$2.locale=locale;proto$2.localeData=localeData;proto$2.toIsoString=deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",toISOString$1);proto$2.lang=lang;// FORMATTING
addFormatToken("X",0,0,"unix");addFormatToken("x",0,0,"valueOf");// PARSING
addRegexToken("x",matchSigned);addRegexToken("X",matchTimestamp);addParseToken("X",function(input,array,config){config._d=new Date(parseFloat(input)*1e3);});addParseToken("x",function(input,array,config){config._d=new Date(toInt(input));});//! moment.js
hooks.version="2.30.1";setHookCallback(createLocal);hooks.fn=proto;hooks.min=min;hooks.max=max;hooks.now=now;hooks.utc=createUTC;hooks.unix=createUnix;hooks.months=listMonths;hooks.isDate=isDate;hooks.locale=getSetGlobalLocale;hooks.invalid=createInvalid;hooks.duration=createDuration;hooks.isMoment=isMoment;hooks.weekdays=listWeekdays;hooks.parseZone=createInZone;hooks.localeData=getLocale;hooks.isDuration=isDuration;hooks.monthsShort=listMonthsShort;hooks.weekdaysMin=listWeekdaysMin;hooks.defineLocale=defineLocale;hooks.updateLocale=updateLocale;hooks.locales=listLocales;hooks.weekdaysShort=listWeekdaysShort;hooks.normalizeUnits=normalizeUnits;hooks.relativeTimeRounding=getSetRelativeTimeRounding;hooks.relativeTimeThreshold=getSetRelativeTimeThreshold;hooks.calendarFormat=getCalendarFormat;hooks.prototype=proto;// currently HTML5 input type only supports 24-hour formats
hooks.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};return hooks;});})(moment$1);var momentExports=moment$1.exports;var moment=/*@__PURE__*/getDefaultExportFromCjs(momentExports);// Define date formats
const DATE_PRETTY_SHORT_DATE="MMM D, YYYY";const DATE_PRETTY_SHORT_NUMERIC_DATE="M/D/YY";// Function to format Notion dates using Moment.js
const prettyPrintNotionDate=(dateString,format=DATE_PRETTY_SHORT_NUMERIC_DATE)=>{try{const dateObj=moment.utc(dateString)// Parse as UTC ISO string
;if(dateObj.isValid()){return dateObj.format(format)// Use Moment's format function
;}else{console.log("invalid date",date);}}catch(e){console.error("Error formatting date:",e);}return"";};const getPageMetadata=page=>{return page[Ae];};//todo - return keys, or keys & values
const getPageProperties=page=>{return page[ce];};//
// SORT UTIL
//
const sortPages=(pgs,fields,directions)=>{const fieldsLen=Array.isArray(fields)?fields.length:0;pgs.sort((a,b)=>{for(let i=0;i<fieldsLen;i++){try{const field=fields[i];const direction=directions[i]?1:-1;const aProps=getPageProperties(a);const bProps=getPageProperties(b);const aField=aProps[field];const bField=bProps[field];const aVal=aField[ue];const bVal=bField[ue];const aNil=isNil(aVal);const bNil=isNil(bVal);if(aNil&&bNil){continue;}if(aNil&&!bNil){return-1*direction;}if(!aNil&&bNil){return 1*direction;}const aType=aField[me];if(aType===f||aType===$){const aDateVal=moment.utc(aVal[oe]);const bDateVal=moment.utc(bVal[oe]);if(aDateVal.isBefore(bDateVal)){return-1*direction;}if(aDateVal.isAfter(bDateVal)){return 1*direction;}//aDateVal === bDateVal, so...
const aEndDateVal=moment.utc(aVal[te]);console.log();const bEndDateVal=moment.utc(bVal[te]);if(aEndDateVal.isBefore(bEndDateVal)){return-1*direction;}if(aEndDateVal.isAfter(bEndDateVal)){return 1*direction;}}if(aType===C){if(!aVal&&bVal){return-1*direction;}if(aVal&&!bVal){return 1*direction;}}if(aType===H){const maxLen=Math.max(aVal.length,bVal.length);for(let i=0;i<maxLen;i++){const aValI=aVal[i]||"";const bValI=bVal[i]||"";if(aValI<bValI){return-1*direction;}if(aValI>bValI){return 1*direction;}}}//anything else...
if(aVal<bVal){return-1*direction;}if(aVal>bVal){return 1*direction;}}catch(e){console.log(e);}}return 0;});};//
// SEARCH UTIL
//
const searchPages=(jsonObj,dbId,searchObj)=>{if(isNil(jsonObj)||isNil(dbId)||isNil(searchObj)){return;}const simpleSearchPage=(pg,searchObj,searchedPgsMap,searchTracker,depth)=>{const pgMetas=pg[Ae];const pgProps=pg[ce];const pgId=pgMetas[Q][ue];const searchInfo=searchObj[SEARCH_INFO];const searchDepth=searchInfo[SEARCH_DEPTH];if(depth>=searchDepth){return false;}const pgKeys=Object.keys(pgProps);const queryRaw=SEARCH_QUERY in searchInfo?String(searchInfo[SEARCH_QUERY]).trim():"";const query=queryRaw.toLowerCase();if(query.length===0){return true;}for(const pgKey of pgKeys){const pgProp=pgProps[pgKey];const pgVal=pgProp[ue];if(!isNil(pgVal)){const pgType=pgProp[me];//todo: handle date and formula date
if(pgType===C||pgType===w||pgType===X||pgType===j||pgType===x||pgType===v||pgType===z||pgType===Z||pgType===q||pgType===J||pgType===W){const pgValLower=pgVal.toString().toLowerCase();if(pgValLower.indexOf(query)>=0){searchedPgsMap.set(pgId,true);return true;}}else if(pgType===H){for(const msVal of pgVal){const msValLower=msVal.toString().toLowerCase();if(msValLower.indexOf(query)>=0){searchedPgsMap.set(pgId,true);return true;}}}else if(pgType===V);else{console.log("need to handle",pgType);}}}for(const pgKey of pgKeys){const pgProp=pgProps[pgKey];const pgVal=pgProp[ue];if(!isNil(pgVal)){const pgType=pgProp[me];if(pgType===V){for(const relPgObj of pgVal){const relPgId=relPgObj[re];if(!searchTracker.allSearched.includes(relPgId)){const relDbId=relPgObj[ee];const relPg=getNotionDataPage(jsonObj,relDbId,relPgId);if(simpleSearchPage(relPg,searchObj,searchedPgsMap,searchTracker,depth+1)){return true;}}}}}}return false;};const complexSearchPage=(pg,searchInfo,depth)=>{if(isEmpty(searchInfo)){return true;}const pgMetas=getPageMetadata(pg);const pgProps=getPageProperties(pg);const pgClears=[];const siRels=[];for(const si of searchInfo){const siProp=si[SEARCH_PROPERTY];const pgData=siProp?pgProps:pgMetas;const siField=si[SEARCH_FIELD];if(!(siField in pgData)){pgClears.push(false);break;}const siInclude=si[SEARCH_INCLUDE];const pgVal=pgData[siField][ue];const pgType=pgData[siField][me];const siQuery=si[SEARCH_QUERY];const nilSiQuery=isNil(siQuery);const nilPgVal=isNil(pgVal)||Array.isArray(pgVal)&&pgVal.length===0;if(nilPgVal||nilSiQuery){if(nilPgVal===nilSiQuery!==siInclude){pgClears.push(false);}break;}if(pgType===w||pgType===X||pgType===j||pgType===x||pgType===v||pgType===z||pgType===Z||pgType===q){const siQueryLower=siQuery.toLowerCase();const pgValLower=pgVal.toString().toLowerCase();const has=pgValLower.indexOf(siQueryLower)>=0;if(has!==siInclude){pgClears.push(false);break;}}else if(pgType===H){const siQuery=si[SEARCH_QUERY];const siQueryLower=siQuery.toLowerCase();let hasMulti=false;for(const msVal of pgVal){const msValLower=msVal.toString().toLowerCase();if(msValLower.indexOf(siQueryLower)>=0){hasMulti=true;}}if(hasMulti!==siInclude){pgClears.push(false);break;}}else if(pgType===V){siRels.push(si);}}if(pgClears.includes(false)){return false;}pgClears.length=0;for(const si of siRels){const siField=si[SEARCH_FIELD];const pgVal=pgProps[siField][ue];for(const relPgObj of pgVal){const relPgId=relPgObj[re];const relDbId=relPgObj[de];const relPg=getNotionDataPage(jsonObj,relDbId,relPgId);const s=complexSearchPage(relPg,si[SEARCH_QUERY]);if(s){pgClears.length=0;break;}else{pgClears.push(false);}}}const pgClear=!pgClears.includes(false);return pgClear;};const searchedPgs=new Map;const searchType=searchObj[SEARCH_TYPE];const simple=searchType===SEARCH_TYPE_SIMPLE;const complex=searchType===SEARCH_TYPE_COMPLEX;const pgs=getNotionDataPages(jsonObj,dbId);remove(pgs,pg=>{const searchTracker={allSearched:[]};if(simple){return!simpleSearchPage(pg,searchObj,searchedPgs,searchTracker,0);}if(complex){return!complexSearchPage(pg,searchObj[SEARCH_INFO]);}return false;});};const mergePageLists=(existingList,incomingList)=>{if(isNil(existingList)){return incomingList;}if(isNil(incomingList)){return existingList;}const getId=obj=>getPageMetadata(obj)[Q][ue];const mergedList=[...existingList,...incomingList.reduce((acc,obj)=>{const existingIndex=existingList.findIndex(item=>getId(item)===getId(obj));if(existingIndex!==-1){existingList[existingIndex]=obj// Replace existing object
;}else{acc.push(obj)// Add new object
;}return acc;},[])];return mergedList;};//
//  UTILS
//
const uniqueKey=()=>Array.from(crypto.getRandomValues(new Uint8Array(16))).map(b=>b.toString(16).padStart(2,"0")).join("");const KEY_UPDATE_ACTION="action";const KEY_UPDATE_URL="url";const VALUE_UPDATE_ACTION_CREATE="create";const VALUE_UPDATE_ACTION_DELETE="delete";const VALUE_UPDATE_ACTION_UPDATE="update";const useNotionData=url=>{const[urlObj,setUrlObj]=useState(x=>null);const[urlUpdateObj,setUrlUpdateObj]=useState(x=>null);const[urlCursorObj,setUrlCursorObj]=useState(x=>null);const[notionData,setNotionData]=useState(x=>null);const[filteredNotionData,setFilteredNotionData]=useState(x=>{return{[IDGMD_FILTERED_DATA]:false};});const rUpdating=useRef(false);const[searchObj,setSearchObj]=useState(x=>null);const rSearchObj=useRef(searchObj);const[sortObj,setSortObj]=useState(x=>null);const rSortObj=useRef(sortObj);const handleCreate=useCallback(update=>{if(rUpdating.current){return false;}if(!(ee in update)){return false;}const dbId=update[ee];const db=getNotionDataDb(notionData,dbId);if(isNil(db)){return false;}const pgUpdateMeta=update[Ae];const pgUpdateMetas=isObject(pgUpdateMeta)?pgUpdateMeta:{};const pgUpdateProp=update[ce];const pgUpdateProps=isObject(pgUpdateProp)?pgUpdateProp:{};if(isNotionDataLive(notionData)){rUpdating.current=true;setUrlUpdateObj(x=>{return{[KEY_UPDATE_ACTION]:VALUE_UPDATE_ACTION_CREATE,[KEY_UPDATE_URL]:new URL("/api/update",urlObj.origin),[E]:dbId,[_]:structuredClone(pgUpdateMetas),[t]:structuredClone(pgUpdateProps)};});}else{//todo: a basic prune of the props and metas
setNotionData(d=>{const x=structuredClone(notionData);const uId=uniqueKey();pgUpdateMetas[Q]={[me]:Q,[ue]:uId};const page={[ce]:pgUpdateProps,[Ae]:pgUpdateMetas};const xPgs=getNotionDataPages(x,dbId);xPgs.unshift(page);return x;});}return true;},[notionData,urlObj]);const handleUpdate=useCallback(update=>{if(rUpdating.current){return false;}if(!(ee in update)){return false;}const dbId=update[ee];const db=getNotionDataDb(notionData,dbId);if(isNil(db)){return false;}if(!(Te in update)){return false;}const pgId=update[Te];const pgUpdateMeta=update[Ae];const pgUpdateMetas=isObject(pgUpdateMeta)?pgUpdateMeta:{};const pgUpdateProp=update[ce];const pgUpdateProps=isObject(pgUpdateProp)?pgUpdateProp:{};if(isNotionDataLive(notionData)){rUpdating.current=true;setUrlUpdateObj(x=>{return{[KEY_UPDATE_ACTION]:VALUE_UPDATE_ACTION_UPDATE,[KEY_UPDATE_URL]:new URL("/api/update",urlObj.origin),[R]:pgId,[T]:structuredClone(pgUpdateProps),[a]:structuredClone(pgUpdateMetas)};});}else{const updatePage=d=>{const x=structuredClone(d);const xpg=getNotionDataPage(x,dbId,pgId);const xpgMetas=xpg[Ae];for(const[key,value]of Object.entries(pgUpdateMetas)){if(key in xpgMetas){xpgMetas[key]=value;}}const xpgProps=xpg[ce];for(const[key,value]of Object.entries(pgUpdateProps)){if(key in xpgProps){xpgProps[key]=value;}}return x;};setNotionData(updatePage);}return true;},[notionData,urlObj]);const handleDelete=useCallback((dbId,pgId)=>{if(rUpdating.current){return false;}const pg=getNotionDataPage(notionData,dbId,pgId);if(isNil(pg)){return false;}if(isNotionDataLive(notionData)){rUpdating.current=true;setUrlUpdateObj(x=>{return{[KEY_UPDATE_ACTION]:VALUE_UPDATE_ACTION_DELETE,[KEY_UPDATE_URL]:new URL("/api/update",urlObj.origin),[A]:pgId};});}else{setNotionData(x=>spliceNotionPage(x,pgId));}return true;},[notionData,urlObj]);const handleNextCursor=useCallback(()=>{const nextCursor=getNotionDataNextCursor(notionData);if(isNil(nextCursor)){return false;}const params=new URLSearchParams(urlObj.search);params.set(Ye,Ue);params.set(Ne,nextCursor);const modifiedUrl=new URL(urlObj.origin+urlObj.pathname);modifiedUrl.search=params.toString();rUpdating.current=true;setUrlCursorObj(x=>modifiedUrl.href);return true;},[notionData,urlObj]);//load notion data
useEffect(()=>{async function fetchData(){rUpdating.current=true;try{const response=await fetch(url,{method:"GET"});const parsedJsonObject=await response.json();const validStatus=parsedJsonObject[Be];if(isNil(validStatus)||!validStatus){throw new Error("invalid data");}const pdx=processQueryData(parsedJsonObject);setNotionData(d=>pdx);setFilteredNotionData(x=>searchAndSortData(pdx,rSearchObj.current,rSortObj.current));}catch(err){console.log(err);setNotionData(x=>{return{[IDGMD_VALID_DATA]:false};});}finally{rUpdating.current=false;}}if(url){setUrlObj(x=>new URL(url));fetchData();}},[url]);//update search and sort
useEffect(()=>{if(rUpdating.current){return;}setFilteredNotionData(x=>searchAndSortData(notionData,searchObj,sortObj));},[searchObj,sortObj,notionData]);//update live crud response
useEffect(()=>{async function fetchData(){try{//extract and strip off the action and url
const type=urlUpdateObj[KEY_UPDATE_ACTION];delete urlUpdateObj[KEY_UPDATE_ACTION];const fetchUrl=urlUpdateObj[KEY_UPDATE_URL];delete urlUpdateObj[KEY_UPDATE_URL];const fetchType={[VALUE_UPDATE_ACTION_CREATE]:"POST",[VALUE_UPDATE_ACTION_DELETE]:"DELETE",[VALUE_UPDATE_ACTION_UPDATE]:"PUT"}[type];const fetchParams={method:fetchType};if(type===VALUE_UPDATE_ACTION_CREATE||type===VALUE_UPDATE_ACTION_UPDATE){fetchParams.headers={"Content-Type":"application/json"};fetchParams.body=JSON.stringify(urlUpdateObj);}else{for(const key in urlUpdateObj){let value=urlUpdateObj[key];if(typeof value==="object"){value=JSON.stringify(value);}fetchUrl.searchParams.append(key,value);}}console.log("FETCH",fetchUrl.href,fetchType,fetchParams);const crudResponse=await fetch(fetchUrl.href,fetchParams);const crudJson=await crudResponse.json();console.log("RESPONSE",crudJson);if(I in crudJson){const result=crudJson[I];const resultType=crudJson[N];const success=result[resultType];if(success){if(resultType===m){const delId=result[u];setNotionData(x=>spliceNotionPage(x,delId));}else if(resultType===l){const pg=result[b];const dbId=result[O];const updateNotionData=x=>{const clone=structuredClone(x);const dbBlocks=getNotionDataPages(clone,dbId);dbBlocks.unshift(pg);return clone;};setNotionData(x=>updateNotionData(x));}else if(resultType===Y){const pg=result[b];const dbId=result[O];const pgId=result[p];const updateNotionData=x=>{const clone=structuredClone(x);const dbBlocks=getNotionDataPages(clone,dbId);const idx=dbBlocks.findIndex(x=>x[Ae][Q][ue]===pgId);if(idx>=0){dbBlocks.splice(idx,1,pg);}return clone;};setNotionData(x=>updateNotionData(x));}}}}catch(err){console.log(err);}finally{rUpdating.current=false;setUrlUpdateObj(x=>null);}}if(!isNil(urlUpdateObj)&&rUpdating.current){fetchData();}},[notionData,urlUpdateObj]);//load more cursors
useEffect(()=>{async function fetchData(){try{const cursorResponse=await fetch(urlCursorObj);const cursorJson=await cursorResponse.json();const y=structuredClone(cursorJson);console.log("CURSOR",JSON.parse(JSON.stringify(y)));const validStatus=y[Be];if(isNil(validStatus)||!validStatus){throw new Error("invalid data");}const updateNotionData=x=>{const x2=structuredClone(x);const z=processQueryData(y);const primaryDbId=getNotionDataPrimaryDbId(x2);const exsPrimaryPgs=getNotionDataPages(x2,primaryDbId);const newPrimaryPgs=getNotionDataPages(z,primaryDbId);const mergedPrimaryPgs=mergePageLists(exsPrimaryPgs,newPrimaryPgs);console.log("yy",JSON.parse(JSON.stringify(z)));z[IDGMD_DATA][ie][B]=mergedPrimaryPgs;const previewDbIds=getNotionDataRelationDbIds(x2);for(const previewDbId of previewDbIds){const exsPreviewPgs=getNotionDataPages(x2,previewDbId);const newPreviewPgs=getNotionDataPages(z,previewDbId);const mergedPreviewPgs=mergePageLists(exsPreviewPgs,newPreviewPgs);z[IDGMD_DATA][le].find(db=>db[ee]===previewDbId)[B]=mergedPreviewPgs;}return z;};setNotionData(x=>updateNotionData(x));}catch(err){console.log(err);}finally{setUrlCursorObj(x=>null);rUpdating.current=false;}}if(!isNil(urlCursorObj)&&rUpdating.current){fetchData();}},[urlCursorObj]);const setSearch=useCallback(searchObj=>{setSearchObj(x=>searchObj);rSearchObj.current=searchObj;});const setSort=useCallback(sortObj=>{setSortObj(x=>sortObj);rSortObj.current=sortObj;});const hasSearch=useMemo(x=>{return!isNil(searchObj);},[searchObj]);const hasSort=useMemo(x=>{return!isNil(sortObj);},[sortObj]);return{setSearch,hasSearch,setSort,hasSort,handleCreate,handleUpdate,handleDelete,handleNextCursor,notionData,filteredNotionData,updating:rUpdating.current};};const searchAndSortData=(jsonObject,search,sort)=>{const searchEntries=isNil(search)?[]:Object.entries(search);const sortEntries=isNil(sort)?[]:Object.entries(sort);const primaryDbId=getNotionDataPrimaryDbId(jsonObject);const relationDbIds=getNotionDataRelationDbIds(jsonObject);const allDbClones=[primaryDbId,...relationDbIds].reduce((acc,dbId)=>{if(!isNil(dbId)){const x=structuredClone(jsonObject);acc[dbId]=x[IDGMD_DATA];//search
for(const[searchDbId,searchObj]of searchEntries){searchPages(x,searchDbId,searchObj);}//sort
for(const[sortDbId,sortRules]of sortEntries){const spgs=getNotionDataPages(x,sortDbId);const fields=isArray(sortRules.fields)?sortRules.fields:[];const directions=isArray(sortRules.directions)?sortRules.directions:[];sortPages(spgs,fields,directions);}}return acc;},{});const y={[IDGMD_VALID_DATA]:jsonObject[IDGMD_VALID_DATA],[IDGMD_LIVE_DATA]:jsonObject[IDGMD_LIVE_DATA],[IDGMD_FILTERED_DATA]:true,[IDGMD_DATA]:allDbClones};Object.freeze(y);return y;};const processQueryData=ojsonObject=>{const parsePrimaryDbId=x=>{const job=x[IDGMD_DATA];return job[ie][ee];};const parseRelationDbIds=x=>{const job=x[IDGMD_DATA];const t=job[le].map(db=>db[ee]);return t;};const jsonObject=structuredClone(ojsonObject);delete jsonObject[Be];jsonObject[IDGMD_FILTERED_DATA]=false;jsonObject[IDGMD_LIVE_DATA]=!isNil(jsonObject[be])||true;delete jsonObject[be];jsonObject[IDGMD_DATA]=jsonObject[Le];delete jsonObject[Le];jsonObject[IDGMD_VALID_DATA]=true;jsonObject[IDGMD_PRIMARY_DBID]=parsePrimaryDbId(jsonObject);jsonObject[IDGMD_RELATION_DBIDS]=parseRelationDbIds(jsonObject);return jsonObject;};export{DATE_PRETTY_SHORT_DATE,DATE_PRETTY_SHORT_NUMERIC_DATE,getDbIdByName,getNotionDataDb,getNotionDataPage,getNotionDataPages,getNotionDataPrimaryDbId,getNotionDataRelationDbIds,hasNotionDataNextCursor,isNotionDataFiltered,isNotionDataLive,isNotionDataLoaded,isNotionDataValid,prettyPrintNotionDate,useNotionData,};//# sourceMappingURL=notionDataHook.js.map

export const __FramerMetadata__ = {"exports":{"getNotionDataRelationDbIds":{"type":"variable","annotations":{"framerContractVersion":"1"}},"getNotionDataPage":{"type":"variable","annotations":{"framerContractVersion":"1"}},"isNotionDataLive":{"type":"variable","annotations":{"framerContractVersion":"1"}},"DATE_PRETTY_SHORT_DATE":{"type":"variable","annotations":{"framerContractVersion":"1"}},"DATE_PRETTY_SHORT_NUMERIC_DATE":{"type":"variable","annotations":{"framerContractVersion":"1"}},"getNotionDataPages":{"type":"variable","annotations":{"framerContractVersion":"1"}},"isNotionDataValid":{"type":"variable","annotations":{"framerContractVersion":"1"}},"hasNotionDataNextCursor":{"type":"variable","annotations":{"framerContractVersion":"1"}},"getNotionDataDb":{"type":"variable","annotations":{"framerContractVersion":"1"}},"getDbIdByName":{"type":"variable","annotations":{"framerContractVersion":"1"}},"prettyPrintNotionDate":{"type":"variable","annotations":{"framerContractVersion":"1"}},"getNotionDataPrimaryDbId":{"type":"variable","annotations":{"framerContractVersion":"1"}},"isNotionDataFiltered":{"type":"variable","annotations":{"framerContractVersion":"1"}},"isNotionDataLoaded":{"type":"variable","annotations":{"framerContractVersion":"1"}},"useNotionData":{"type":"variable","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./NotionDataHook.map