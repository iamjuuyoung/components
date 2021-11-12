'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$2 = {
  name: 'KTable',
  props: {
    header: {
      type: Array
    },
    items: {
      type: Array,
      required: true
    }
  },
};

function normalizeComponent$1(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE$1 = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector$1(context) {
    return (id, style) => addStyle$1(id, style);
}
let HEAD$1;
const styles$1 = {};
function addStyle$1(id, css) {
    const group = isOldIE$1 ? css.media || 'default' : id;
    const style = styles$1[group] || (styles$1[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD$1 === undefined) {
                HEAD$1 = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD$1.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", [
    _c(
      "tr",
      _vm._l(_vm.header, function(label, index) {
        return _c("th", { key: index }, [
          _vm._v("\n      " + _vm._s(label) + "\n    ")
        ])
      }),
      0
    )
  ])
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-7d06516e_0", { source: "\nth {\n  text-align: left;\n  padding: 8px;\n  font-size: 13px;\n  color: #8d8d92;\n}\n", map: {"version":3,"sources":["/home/runner/work/components/components/src/KTable/KTable.vue"],"names":[],"mappings":";AA8BA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;EACA,cAAA;AACA","file":"KTable.vue","sourcesContent":["\n<template>\n  <table>\n    <tr>\n      <th\n        v-for=\"(label, index) in header\"\n        :key=\"index\"\n      >\n        {{ label }}\n      </th>\n    </tr>\n  </table>\n</template>\n\n<script>\nexport default {\n  name: 'KTable',\n  props: {\n    header: {\n      type: Array\n    },\n    items: {\n      type: Array,\n      required: true\n    }\n  },\n}\n</script>\n\n<style>\nth {\n  text-align: left;\n  padding: 8px;\n  font-size: 13px;\n  color: #8d8d92;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = /*#__PURE__*/normalizeComponent$1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    createInjector$1,
    undefined,
    undefined
  );

//

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `isWithinRange` to `isWithinInterval`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   isWithinRange(
 *     new Date(2014, 0, 3),
 *     new Date(2014, 0, 1), new Date(2014, 0, 7)
 *   )
 *
 *   // v2.0.0 onward
 *
 *   isWithinInterval(
 *     new Date(2014, 0, 3),
 *     { start: new Date(2014, 0, 1), end: new Date(2014, 0, 7) }
 *   )
 *   ```
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date }) // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end }) // => true
 */
function isWithinInterval(dirtyDate, interval) {
  requiredArgs(2, arguments);
  var time = toDate(dirtyDate).getTime();
  var startTime = toDate(interval.start).getTime();
  var endTime = toDate(interval.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  return time >= startTime && time <= endTime;
}

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : toInteger(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (isNaN(date) || !date) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time) || time === null) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: null
  };
  var year = captures[1] && parseInt(captures[1]);
  var century = captures[2] && parseInt(captures[2]);
  return {
    year: century == null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return null;
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return null;
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return null; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

//
const regex = /^[0-9]+$/; // 숫자가 아닌 문자열을 선택하는 정규식

var script$1 = {
  name: 'KInputTimer',
  props: {
    /**
     * 초기값입니다.
     */
    defaultValue: {
      type: String,
      default: '00:00',
    },
    /**
     * 입력가능한 최대값입니다.
     */
    max: {
      type: String,
      default: '24:00',
    },
    /**
     * 입력가능한 최소값입니다.
     */
    min: {
      type: String,
      default: '00:00',
    },
    /**
     * 커스텀할 클래스입니다.
     */
    className: String,
    /**
     * disabled 여부입니다.
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // 맨 처음 입력된 값
      initValue: this.defaultValue || '00:00',
      // 시간 배열 ['0', '0', ':', '0', '0']
      timeArr: this.splitArr(this.defaultValue),
      // input 드래그
      selectionStart: 0,
      selectionEnd: 5,
      // 현재 누른 키
      keyData: '',
    };
  },
  methods: {
    splitArr(inputValue) {
      if (!inputValue) {
        return ['0', '0', ':', '0', '0'];
      }

      const convertArr = inputValue.split('');
      return convertArr;
    },
    formatInput(value) {
      return value.join('');
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end);
    },
    /**
     * selectionStart, selectionEnd 범위내 reset
     */
    resetRange() {
      return this.timeArr.map((time, idx) => {
        // : 인 경우 제외
        if (idx === 2) {
          return time;
        }

        if (idx >= this.selectionStart && idx <= this.selectionEnd) {
          return '_';
        }
        return time;
      });
    },
    handleKeyDown(e) {
      const {
        key,
        target: { selectionStart, selectionEnd },
      } = e;
      this.keyData = key;

      if (selectionStart) {
        this.selectionStart = selectionStart;
      }

      if (selectionEnd) {
        this.selectionEnd = selectionEnd;
      }
    },
    handleInput(e) {
      // 커서 시작위치
      const selectionStart = e.target.selectionStart;

      // 백스페이스 입력한 경우
      if (this.keyData === 'Backspace') {
        // input 영역 드래그 한 경우
        if (this.selectionStart !== this.selectionEnd) {
          const newArr = this.resetRange();
          this.timeArr = newArr;

          this.$nextTick(() => {
            this.setSelectionRange(this.selectionStart, this.selectionStart);
          });
          return;
        }

        // 특수문자: 에 커서가 있는 경우
        const isSpecial = selectionStart === 2;
        const convertIndex = isSpecial ? 1 : selectionStart;
        this.timeArr.splice(convertIndex, 1, '_');
        this.selectionStart = convertIndex;
        // 커서 이동
        this.$nextTick(() => {
          this.setSelectionRange(this.selectionStart, this.selectionStart);
        });
        return;
      }

      // 5자리수 넘게 입력한 경우
      if (selectionStart > 5) {
        this.timeArr = this.timeArr.slice();
        return;
      }

      // 숫자 이외에 다른 문자 입력한 경우
      if (!regex.test(this.keyData)) {
        // 배열 그대로 유지해야함
        this.timeArr = this.timeArr.slice();
        // 커서 유지
        this.$nextTick(() => {
          this.setSelectionRange(this.selectionStart, this.selectionStart);
        });
        return;
      }

      const startIndex =
        selectionStart === 3 ? selectionStart : selectionStart - 1;
      this.timeArr.splice(startIndex, 1, this.keyData);
      this.selectionStart =
        selectionStart === 3 ? selectionStart + 1 : selectionStart;

      this.$nextTick(() => {
        // 커서 위치 변경
        this.setSelectionRange(this.selectionStart, this.selectionStart);
      });
    },
    handleFocus() {
      // 전체 영역 selection
      this.setSelectionRange(0, 5);
    },
    handleBlur() {
      const value = parseISO(`2020-01-01 ${this.$refs.input.value}`);
      const isWithin = isWithinInterval(value, {
        start: parseISO(`2020-01-01 ${this.min}`),
        end: parseISO(`2020-01-01 ${this.max}`),
      });

      // 지정한 범위를 벗어난 경우 initValue로 초기화
      if (!isWithin) {
        this.timeArr = this.splitArr(this.initValue);
      }

      // change 이벤트 emit
      this.$emit('change', this.formatInput(this.timeArr));
      // selection 초기화
      this.selectionStart = 0;
      this.selectionEnd = 5;
    },
  },
};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("input", {
    ref: "input",
    staticClass: "selected-time",
    class: _vm.className,
    domProps: { value: _vm.formatInput(_vm.timeArr) },
    on: {
      input: _vm.handleInput,
      keydown: _vm.handleKeyDown,
      focus: _vm.handleFocus,
      blur: _vm.handleBlur
    }
  })
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-956df62e_0", { source: "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml[data-v-956df62e] {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Remove default margin.\n */\nbody[data-v-956df62e] {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle[data-v-956df62e],\naside[data-v-956df62e],\ndetails[data-v-956df62e],\nfigcaption[data-v-956df62e],\nfigure[data-v-956df62e],\nfooter[data-v-956df62e],\nheader[data-v-956df62e],\nhgroup[data-v-956df62e],\nmain[data-v-956df62e],\nmenu[data-v-956df62e],\nnav[data-v-956df62e],\nsection[data-v-956df62e],\nsummary[data-v-956df62e] {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio[data-v-956df62e],\ncanvas[data-v-956df62e],\nprogress[data-v-956df62e],\nvideo[data-v-956df62e] {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio[data-v-956df62e]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden][data-v-956df62e],\ntemplate[data-v-956df62e] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na[data-v-956df62e] {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na[data-v-956df62e]:active,\na[data-v-956df62e]:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title][data-v-956df62e] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb[data-v-956df62e],\nstrong[data-v-956df62e] {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn[data-v-956df62e] {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1[data-v-956df62e] {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark[data-v-956df62e] {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall[data-v-956df62e] {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub[data-v-956df62e],\nsup[data-v-956df62e] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup[data-v-956df62e] {\n  top: -0.5em;\n}\nsub[data-v-956df62e] {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg[data-v-956df62e] {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg[data-v-956df62e]:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure[data-v-956df62e] {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr[data-v-956df62e] {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\npre[data-v-956df62e] {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode[data-v-956df62e],\nkbd[data-v-956df62e],\npre[data-v-956df62e],\nsamp[data-v-956df62e] {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton[data-v-956df62e],\ninput[data-v-956df62e],\noptgroup[data-v-956df62e],\nselect[data-v-956df62e],\ntextarea[data-v-956df62e] {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton[data-v-956df62e] {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton[data-v-956df62e],\nselect[data-v-956df62e] {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton[data-v-956df62e],\nhtml input[type=button][data-v-956df62e],\ninput[type=reset][data-v-956df62e],\ninput[type=submit][data-v-956df62e] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled][data-v-956df62e],\nhtml input[disabled][data-v-956df62e] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton[data-v-956df62e]::-moz-focus-inner,\ninput[data-v-956df62e]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput[data-v-956df62e] {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=checkbox][data-v-956df62e],\ninput[type=radio][data-v-956df62e] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=number][data-v-956df62e]::-webkit-inner-spin-button,\ninput[type=number][data-v-956df62e]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=search][data-v-956df62e] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=search][data-v-956df62e]::-webkit-search-cancel-button,\ninput[type=search][data-v-956df62e]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset[data-v-956df62e] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend[data-v-956df62e] {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea[data-v-956df62e] {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup[data-v-956df62e] {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable[data-v-956df62e] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd[data-v-956df62e],\nth[data-v-956df62e] {\n  padding: 0;\n}\ninput[data-v-956df62e]::-ms-clear {\n  display: none;\n}\ninput[data-v-956df62e]:focus {\n  outline: none;\n}\ninput[data-v-956df62e]:disabled {\n  background: #f9f9f9;\n  color: #b1b1b1;\n}\n.selected-time[data-v-956df62e] {\n  width: 92px;\n  text-align: center;\n  height: 32px;\n  line-height: 32px;\n  padding: 0;\n  border: 1px solid #e9e9e9;\n  font-size: 12px;\n  letter-spacing: 3px;\n}\n.selected-time[data-v-956df62e]:focus {\n  border: 1px solid #0ea2fd;\n}\n\n/*# sourceMappingURL=KInputTimer.vue.map */", map: {"version":3,"sources":["KInputTimer.vue","/Users/juuyoung/Documents/workspace/k-components/src/KInputTimer/KInputTimer.vue"],"names":[],"mappings":"AAAA,2DAA2D;AAC3D;;;;EAIE;AACF;EACE,uBAAuB;EACvB,MAAM;EACN,0BAA0B;EAC1B,MAAM;EACN,8BAA8B;EAC9B,MAAM;AACR;;AAEA;;EAEE;AACF;EACE,SAAS;AACX;;AAEA;+EAC+E;AAC/E;;;;;EAKE;AACF;;;;;;;;;;;;;EAaE,cAAc;AAChB;;AAEA;;;EAGE;AACF;;;;EAIE,qBAAqB;EACrB,MAAM;EACN,wBAAwB;EACxB,MAAM;AACR;;AAEA;;;EAGE;AACF;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;;EAGE;AACF;;EAEE,aAAa;AACf;;AAEA;+EAC+E;AAC/E;;EAEE;AACF;EACE,6BAA6B;AAC/B;;AAEA;;EAEE;AACF;;EAEE,UAAU;AACZ;;AAEA;+EAC+E;AAC/E;;EAEE;AACF;EACE,yBAAyB;AAC3B;;AAEA;;EAEE;AACF;;EAEE,iBAAiB;AACnB;;AAEA;;EAEE;AACF;EACE,kBAAkB;AACpB;;AAEA;;;EAGE;AACF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;;EAEE;AACF;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;;EAEE;AACF;EACE,cAAc;AAChB;;AAEA;;EAEE;AACF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;AAEA;EACE,WAAW;AACb;AAEA;EACE,eAAe;AACjB;;AAEA;+EAC+E;AAC/E;;EAEE;AACF;EACE,SAAS;AACX;;AAEA;;EAEE;AACF;EACE,gBAAgB;AAClB;;AAEA;+EAC+E;ACmB/E;;EAAA;AAIA;EACA,gBAAA;ADlBA;;ACqBA;;EAAA;AAIA;EACA,4BAAA;EACA,uBAAA;EACA,SAAA;ADnBA;;ACsBA;;EAAA;AAIA;EACA,cAAA;ADpBA;;AAEA;;EAEE;AACF;;;;EAIE,iCAAiC;EACjC,cAAc;AAChB;;AAEA;+EAC+E;AAC/E;;;EAGE;AACF;;;;;EAKE;AACF;;;;;EAKE,cAAc;EACd,MAAM;EACN,aAAa;EACb,MAAM;EACN,SAAS;EACT,MAAM;AACR;;AAEA;;EAEE;AACF;EACE,iBAAiB;AACnB;;AAEA;;;;;EAKE;AACF;;EAEE,oBAAoB;AACtB;;AAEA;;;;;;EAME;AACF;;;;EAIE,0BAA0B;EAC1B,MAAM;EACN,eAAe;EACf,MAAM;AACR;;AAEA;;EAEE;AACF;;EAEE,eAAe;AACjB;;AAEA;;EAEE;AACF;;EAEE,SAAS;EACT,UAAU;AACZ;;AAEA;;;EAGE;AACF;EACE,mBAAmB;AACrB;;AAEA;;;;;;EAME;AACF;;EAEE,sBAAsB;EACtB,MAAM;EACN,UAAU;EACV,MAAM;AACR;;AAEA;;;;EAIE;AACF;;EAEE,YAAY;AACd;;AAEA;;;;EAIE;AACF;EACE,6BAA6B;EAC7B,MAAM;EACN,4BAA4B;EAC5B,+BAA+B;EAC/B,MAAM;EACN,uBAAuB;AACzB;;AAEA;;;;EAIE;AACF;;EAEE,wBAAwB;AAC1B;;AAEA;;EAEE;AACF;EACE,yBAAyB;EACzB,aAAa;EACb,8BAA8B;AAChC;;AAEA;;;EAGE;AACF;EACE,SAAS;EACT,MAAM;EACN,UAAU;EACV,MAAM;AACR;;AAEA;;EAEE;AACF;EACE,cAAc;AAChB;;AAEA;;;EAGE;AACF;EACE,iBAAiB;AACnB;;AAEA;+EAC+E;AAC/E;;EAEE;AACF;EACE,yBAAyB;EACzB,iBAAiB;AACnB;AAEA;;EAEE,UAAU;AACZ;ACvMA;EACA,aAAA;AD0MA;ACvMA;EACA,aAAA;AD0MA;ACvMA;EACA,mBAAA;EACA,cAAA;AD0MA;ACvMA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,UAAA;EACA,yBAAA;EACA,eAAA;EACA,mBAAA;AD0MA;ACxMA;EACA,yBAAA;AD0MA;;AAEA,0CAA0C","file":"KInputTimer.vue","sourcesContent":["/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\ninput:focus {\n  outline: none;\n}\n\ninput:disabled {\n  background: #f9f9f9;\n  color: #b1b1b1;\n}\n\n.selected-time {\n  width: 92px;\n  text-align: center;\n  height: 32px;\n  line-height: 32px;\n  padding: 0;\n  border: 1px solid #e9e9e9;\n  font-size: 12px;\n  letter-spacing: 3px;\n}\n.selected-time:focus {\n  border: 1px solid #0ea2fd;\n}\n\n/*# sourceMappingURL=KInputTimer.vue.map */","<template>\n  <input\n    class=\"selected-time\"\n    :class=\"className\"\n    ref=\"input\"\n    :value=\"formatInput(timeArr)\"\n    @input=\"handleInput\"\n    @keydown=\"handleKeyDown\"\n    @focus=\"handleFocus\"\n    @blur=\"handleBlur\"\n  />\n</template>\n\n<script>\nimport { isWithinInterval, parseISO } from 'date-fns';\nconst regex = /^[0-9]+$/; // 숫자가 아닌 문자열을 선택하는 정규식\n\nexport default {\n  name: 'KInputTimer',\n  props: {\n    /**\n     * 초기값입니다.\n     */\n    defaultValue: {\n      type: String,\n      default: '00:00',\n    },\n    /**\n     * 입력가능한 최대값입니다.\n     */\n    max: {\n      type: String,\n      default: '24:00',\n    },\n    /**\n     * 입력가능한 최소값입니다.\n     */\n    min: {\n      type: String,\n      default: '00:00',\n    },\n    /**\n     * 커스텀할 클래스입니다.\n     */\n    className: String,\n    /**\n     * disabled 여부입니다.\n     */\n    disabled: {\n      type: Boolean,\n      default: false,\n    },\n  },\n  data() {\n    return {\n      // 맨 처음 입력된 값\n      initValue: this.defaultValue || '00:00',\n      // 시간 배열 ['0', '0', ':', '0', '0']\n      timeArr: this.splitArr(this.defaultValue),\n      // input 드래그\n      selectionStart: 0,\n      selectionEnd: 5,\n      // 현재 누른 키\n      keyData: '',\n    };\n  },\n  methods: {\n    splitArr(inputValue) {\n      if (!inputValue) {\n        return ['0', '0', ':', '0', '0'];\n      }\n\n      const convertArr = inputValue.split('');\n      return convertArr;\n    },\n    formatInput(value) {\n      return value.join('');\n    },\n    setSelectionRange(start, end) {\n      this.$refs.input.setSelectionRange(start, end);\n    },\n    /**\n     * selectionStart, selectionEnd 범위내 reset\n     */\n    resetRange() {\n      return this.timeArr.map((time, idx) => {\n        // : 인 경우 제외\n        if (idx === 2) {\n          return time;\n        }\n\n        if (idx >= this.selectionStart && idx <= this.selectionEnd) {\n          return '_';\n        }\n        return time;\n      });\n    },\n    handleKeyDown(e) {\n      const {\n        key,\n        target: { selectionStart, selectionEnd },\n      } = e;\n      this.keyData = key;\n\n      if (selectionStart) {\n        this.selectionStart = selectionStart;\n      }\n\n      if (selectionEnd) {\n        this.selectionEnd = selectionEnd;\n      }\n    },\n    handleInput(e) {\n      // 커서 시작위치\n      const selectionStart = e.target.selectionStart;\n\n      // 백스페이스 입력한 경우\n      if (this.keyData === 'Backspace') {\n        // input 영역 드래그 한 경우\n        if (this.selectionStart !== this.selectionEnd) {\n          const newArr = this.resetRange();\n          this.timeArr = newArr;\n\n          this.$nextTick(() => {\n            this.setSelectionRange(this.selectionStart, this.selectionStart);\n          });\n          return;\n        }\n\n        // 특수문자: 에 커서가 있는 경우\n        const isSpecial = selectionStart === 2;\n        const convertIndex = isSpecial ? 1 : selectionStart;\n        this.timeArr.splice(convertIndex, 1, '_');\n        this.selectionStart = convertIndex;\n        // 커서 이동\n        this.$nextTick(() => {\n          this.setSelectionRange(this.selectionStart, this.selectionStart);\n        });\n        return;\n      }\n\n      // 5자리수 넘게 입력한 경우\n      if (selectionStart > 5) {\n        this.timeArr = this.timeArr.slice();\n        return;\n      }\n\n      // 숫자 이외에 다른 문자 입력한 경우\n      if (!regex.test(this.keyData)) {\n        // 배열 그대로 유지해야함\n        this.timeArr = this.timeArr.slice();\n        // 커서 유지\n        this.$nextTick(() => {\n          this.setSelectionRange(this.selectionStart, this.selectionStart);\n        });\n        return;\n      }\n\n      const startIndex =\n        selectionStart === 3 ? selectionStart : selectionStart - 1;\n      this.timeArr.splice(startIndex, 1, this.keyData);\n      this.selectionStart =\n        selectionStart === 3 ? selectionStart + 1 : selectionStart;\n\n      this.$nextTick(() => {\n        // 커서 위치 변경\n        this.setSelectionRange(this.selectionStart, this.selectionStart);\n      });\n    },\n    handleFocus() {\n      // 전체 영역 selection\n      this.setSelectionRange(0, 5);\n    },\n    handleBlur() {\n      const value = parseISO(`2020-01-01 ${this.$refs.input.value}`);\n      const isWithin = isWithinInterval(value, {\n        start: parseISO(`2020-01-01 ${this.min}`),\n        end: parseISO(`2020-01-01 ${this.max}`),\n      });\n\n      // 지정한 범위를 벗어난 경우 initValue로 초기화\n      if (!isWithin) {\n        this.timeArr = this.splitArr(this.initValue);\n      }\n\n      // change 이벤트 emit\n      this.$emit('change', this.formatInput(this.timeArr));\n      // selection 초기화\n      this.selectionStart = 0;\n      this.selectionEnd = 5;\n    },\n  },\n};\n</script>\n\n<style scoped lang=\"scss\">\n@import '../style/normalize.scss';\ninput::-ms-clear {\n  display: none;\n}\n\ninput:focus {\n  outline: none;\n}\n\ninput:disabled {\n  background: #f9f9f9;\n  color: #b1b1b1;\n}\n\n.selected-time {\n  width: 92px;\n  text-align: center;\n  height: 32px;\n  line-height: 32px;\n  padding: 0;\n  border: 1px solid #e9e9e9;\n  font-size: 12px;\n  letter-spacing: 3px;\n\n  &:focus {\n    border: 1px solid #0ea2fd;\n  }\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-956df62e";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    createInjector,
    undefined,
    undefined
  );

//

  var script = {
    name: 'Task',
    components: {
      KInputTimer: __vue_component__$1,
    },
    props: {
      task: {
        type: Object,
        required: true,
        default: () => ({ id: '', state: '', title: '' }),
        validator: task => ['id', 'state', 'title'].every(key => key in task),
      },
    },
  };

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "list-item" },
    [
      _c("input", {
        attrs: { type: "text", readonly: "" },
        domProps: { value: _vm.task.title }
      }),
      _vm._v(" "),
      _c("KInputTimer")
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent$1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

exports.KTable = __vue_component__$2;
exports.Task = __vue_component__;
//# sourceMappingURL=index.js.map
