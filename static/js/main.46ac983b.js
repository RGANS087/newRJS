/*! For license information please see main.46ac983b.js.LICENSE.txt */
(() => { "use strict"; var e = { 463: (e, t, n) => { var i = n(791),
                    r = n(296);

                function o(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." } var a = new Set,
                    s = {};

                function l(e, t) { u(e, t), u(e + "Capture", t) }

                function u(e, t) { for (s[e] = t, e = 0; e < t.length; e++) a.add(t[e]) } var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    d = Object.prototype.hasOwnProperty,
                    h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    f = {},
                    p = {};

                function v(e, t, n, i, r, o, a) { this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = i, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a } var m = {}; "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) { m[e] = new v(e, 0, !1, e, null, !1, !1) })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) { var t = e[0];
                    m[t] = new v(t, 1, !1, e[1], null, !1, !1) })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) { m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1) })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) { m[e] = new v(e, 2, !1, e, null, !1, !1) })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) { m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1) })), ["checked", "multiple", "muted", "selected"].forEach((function(e) { m[e] = new v(e, 3, !0, e, null, !1, !1) })), ["capture", "download"].forEach((function(e) { m[e] = new v(e, 4, !1, e, null, !1, !1) })), ["cols", "rows", "size", "span"].forEach((function(e) { m[e] = new v(e, 6, !1, e, null, !1, !1) })), ["rowSpan", "start"].forEach((function(e) { m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1) })); var g = /[\-:]([a-z])/g;

                function y(e) { return e[1].toUpperCase() }

                function b(e, t, n, i) { var r = m.hasOwnProperty(t) ? m[t] : null;
                    (null !== r ? 0 !== r.type : i || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, i) { if (null === t || "undefined" === typeof t || function(e, t, n, i) { if (null !== n && 0 === n.type) return !1; switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !i && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1 } }(e, t, n, i)) return !0; if (i) return !1; if (null !== n) switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t }
                        return !1 }(t, n, r, i) && (n = null), i || null === r ? function(e) { return !!d.call(p, e) || !d.call(f, e) && (h.test(e) ? p[e] = !0 : (f[e] = !0, !1)) }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : r.mustUseProperty ? e[r.propertyName] = null === n ? 3 !== r.type && "" : n : (t = r.attributeName, i = r.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (r = r.type) || 4 === r && !0 === n ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n)))) } "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) { var t = e.replace(g, y);
                    m[t] = new v(t, 1, !1, e, null, !1, !1) })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) { var t = e.replace(g, y);
                    m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1) })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) { var t = e.replace(g, y);
                    m[t] = new v(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1) })), ["tabIndex", "crossOrigin"].forEach((function(e) { m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1) })), m.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) { m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0) })); var w = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    _ = Symbol.for("react.element"),
                    k = Symbol.for("react.portal"),
                    x = Symbol.for("react.fragment"),
                    S = Symbol.for("react.strict_mode"),
                    z = Symbol.for("react.profiler"),
                    C = Symbol.for("react.provider"),
                    P = Symbol.for("react.context"),
                    E = Symbol.for("react.forward_ref"),
                    M = Symbol.for("react.suspense"),
                    T = Symbol.for("react.suspense_list"),
                    O = Symbol.for("react.memo"),
                    L = Symbol.for("react.lazy");
                Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode"); var R = Symbol.for("react.offscreen");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker"); var D = Symbol.iterator;

                function I(e) { return null === e || "object" !== typeof e ? null : "function" === typeof(e = D && e[D] || e["@@iterator"]) ? e : null } var N, F = Object.assign;

                function A(e) { if (void 0 === N) try { throw Error() } catch (n) { var t = n.stack.trim().match(/\n( *(at )?)/);
                        N = t && t[1] || "" }
                    return "\n" + N + e } var V = !1;

                function U(e, t) { if (!e || V) return "";
                    V = !0; var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0; try { if (t)
                            if (t = function() { throw Error() }, Object.defineProperty(t.prototype, "props", { set: function() { throw Error() } }), "object" === typeof Reflect && Reflect.construct) { try { Reflect.construct(t, []) } catch (u) { var i = u } Reflect.construct(e, [], t) } else { try { t.call() } catch (u) { i = u } e.call(t.prototype) } else { try { throw Error() } catch (u) { i = u } e() } } catch (u) { if (u && i && "string" === typeof u.stack) { for (var r = u.stack.split("\n"), o = i.stack.split("\n"), a = r.length - 1, s = o.length - 1; 1 <= a && 0 <= s && r[a] !== o[s];) s--; for (; 1 <= a && 0 <= s; a--, s--)
                                if (r[a] !== o[s]) { if (1 !== a || 1 !== s)
                                        do { if (a--, 0 > --s || r[a] !== o[s]) { var l = "\n" + r[a].replace(" at new ", " at "); return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l } } while (1 <= a && 0 <= s); break } } } finally { V = !1, Error.prepareStackTrace = n } return (e = e ? e.displayName || e.name : "") ? A(e) : "" }

                function B(e) { switch (e.tag) {
                        case 5:
                            return A(e.type);
                        case 16:
                            return A("Lazy");
                        case 13:
                            return A("Suspense");
                        case 19:
                            return A("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = U(e.type, !1);
                        case 11:
                            return e = U(e.type.render, !1);
                        case 1:
                            return e = U(e.type, !0);
                        default:
                            return "" } }

                function H(e) { if (null == e) return null; if ("function" === typeof e) return e.displayName || e.name || null; if ("string" === typeof e) return e; switch (e) {
                        case x:
                            return "Fragment";
                        case k:
                            return "Portal";
                        case z:
                            return "Profiler";
                        case S:
                            return "StrictMode";
                        case M:
                            return "Suspense";
                        case T:
                            return "SuspenseList" } if ("object" === typeof e) switch (e.$$typeof) {
                        case P:
                            return (e.displayName || "Context") + ".Consumer";
                        case C:
                            return (e._context.displayName || "Context") + ".Provider";
                        case E:
                            var t = e.render; return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case O:
                            return null !== (t = e.displayName || null) ? t : H(e.type) || "Memo";
                        case L:
                            t = e._payload, e = e._init; try { return H(e(t)) } catch (n) {} }
                    return null }

                function j(e) { var t = e.type; switch (e.tag) {
                        case 24:
                            return "Cache";
                        case 9:
                            return (t.displayName || "Context") + ".Consumer";
                        case 10:
                            return (t._context.displayName || "Context") + ".Provider";
                        case 18:
                            return "DehydratedFragment";
                        case 11:
                            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                        case 7:
                            return "Fragment";
                        case 5:
                            return t;
                        case 4:
                            return "Portal";
                        case 3:
                            return "Root";
                        case 6:
                            return "Text";
                        case 16:
                            return H(t);
                        case 8:
                            return t === S ? "StrictMode" : "Mode";
                        case 22:
                            return "Offscreen";
                        case 12:
                            return "Profiler";
                        case 21:
                            return "Scope";
                        case 13:
                            return "Suspense";
                        case 19:
                            return "SuspenseList";
                        case 25:
                            return "TracingMarker";
                        case 1:
                        case 0:
                        case 17:
                        case 2:
                        case 14:
                        case 15:
                            if ("function" === typeof t) return t.displayName || t.name || null; if ("string" === typeof t) return t } return null }

                function W(e) { switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return "" } }

                function $(e) { var t = e.type; return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t) }

                function Q(e) { e._valueTracker || (e._valueTracker = function(e) { var t = $(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            i = "" + e[t]; if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) { var r = n.get,
                                o = n.set; return Object.defineProperty(e, t, { configurable: !0, get: function() { return r.call(this) }, set: function(e) { i = "" + e, o.call(this, e) } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() { return i }, setValue: function(e) { i = "" + e }, stopTracking: function() { e._valueTracker = null, delete e[t] } } } }(e)) }

                function q(e) { if (!e) return !1; var t = e._valueTracker; if (!t) return !0; var n = t.getValue(),
                        i = ""; return e && (i = $(e) ? e.checked ? "true" : "false" : e.value), (e = i) !== n && (t.setValue(e), !0) }

                function Y(e) { if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null; try { return e.activeElement || e.body } catch (t) { return e.body } }

                function G(e, t) { var n = t.checked; return F({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked }) }

                function X(e, t) { var n = null == t.defaultValue ? "" : t.defaultValue,
                        i = null != t.checked ? t.checked : t.defaultChecked;
                    n = W(null != t.value ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value } }

                function K(e, t) { null != (t = t.checked) && b(e, "checked", t, !1) }

                function Z(e, t) { K(e, t); var n = W(t.value),
                        i = t.type; if (null != n) "number" === i ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === i || "reset" === i) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, W(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked) }

                function J(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) { var i = t.type; if (!("submit" !== i && "reset" !== i || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t } "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n) }

                function ee(e, t, n) { "number" === t && Y(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)) } var te = Array.isArray;

                function ne(e, t, n, i) { if (e = e.options, t) { t = {}; for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0; for (n = 0; n < e.length; n++) r = t.hasOwnProperty("$" + e[n].value), e[n].selected !== r && (e[n].selected = r), r && i && (e[n].defaultSelected = !0) } else { for (n = "" + W(n), t = null, r = 0; r < e.length; r++) { if (e[r].value === n) return e[r].selected = !0, void(i && (e[r].defaultSelected = !0));
                            null !== t || e[r].disabled || (t = e[r]) } null !== t && (t.selected = !0) } }

                function ie(e, t) { if (null != t.dangerouslySetInnerHTML) throw Error(o(91)); return F({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }) }

                function re(e, t) { var n = t.value; if (null == n) { if (n = t.children, t = t.defaultValue, null != n) { if (null != t) throw Error(o(92)); if (te(n)) { if (1 < n.length) throw Error(o(93));
                                n = n[0] } t = n } null == t && (t = ""), n = t } e._wrapperState = { initialValue: W(n) } }

                function oe(e, t) { var n = W(t.value),
                        i = W(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != i && (e.defaultValue = "" + i) }

                function ae(e) { var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t) }

                function se(e) { switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml" } }

                function le(e, t) { return null == e || "http://www.w3.org/1999/xhtml" === e ? se(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e } var ue, ce, de = (ce = function(e, t) { if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
                    else { for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ue.firstChild; e.firstChild;) e.removeChild(e.firstChild); for (; t.firstChild;) e.appendChild(t.firstChild) } }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, i) { MSApp.execUnsafeLocalFunction((function() { return ce(e, t) })) } : ce);

                function he(e, t) { if (t) { var n = e.firstChild; if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t) } e.textContent = t } var fe = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
                    pe = ["Webkit", "ms", "Moz", "O"];

                function ve(e, t, n) { return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || fe.hasOwnProperty(e) && fe[e] ? ("" + t).trim() : t + "px" }

                function me(e, t) { for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) { var i = 0 === n.indexOf("--"),
                                r = ve(n, t[n], i); "float" === n && (n = "cssFloat"), i ? e.setProperty(n, r) : e[n] = r } } Object.keys(fe).forEach((function(e) { pe.forEach((function(t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), fe[t] = fe[e] })) })); var ge = F({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });

                function ye(e, t) { if (t) { if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e)); if (null != t.dangerouslySetInnerHTML) { if (null != t.children) throw Error(o(60)); if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61)) } if (null != t.style && "object" !== typeof t.style) throw Error(o(62)) } }

                function be(e, t) { if (-1 === e.indexOf("-")) return "string" === typeof t.is; switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0 } } var we = null;

                function _e(e) { return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e } var ke = null,
                    xe = null,
                    Se = null;

                function ze(e) { if (e = br(e)) { if ("function" !== typeof ke) throw Error(o(280)); var t = e.stateNode;
                        t && (t = _r(t), ke(e.stateNode, e.type, t)) } }

                function Ce(e) { xe ? Se ? Se.push(e) : Se = [e] : xe = e }

                function Pe() { if (xe) { var e = xe,
                            t = Se; if (Se = xe = null, ze(e), t)
                            for (e = 0; e < t.length; e++) ze(t[e]) } }

                function Ee(e, t) { return e(t) }

                function Me() {} var Te = !1;

                function Oe(e, t, n) { if (Te) return e(t, n);
                    Te = !0; try { return Ee(e, t, n) } finally { Te = !1, (null !== xe || null !== Se) && (Me(), Pe()) } }

                function Le(e, t) { var n = e.stateNode; if (null === n) return null; var i = _r(n); if (null === i) return null;
                    n = i[t];
                    e: switch (t) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (i = !i.disabled) || (i = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !i; break e;
                        default:
                            e = !1 }
                    if (e) return null; if (n && "function" !== typeof n) throw Error(o(231, t, typeof n)); return n } var Re = !1; if (c) try { var De = {};
                    Object.defineProperty(De, "passive", { get: function() { Re = !0 } }), window.addEventListener("test", De, De), window.removeEventListener("test", De, De) } catch (ce) { Re = !1 }

                function Ie(e, t, n, i, r, o, a, s, l) { var u = Array.prototype.slice.call(arguments, 3); try { t.apply(n, u) } catch (c) { this.onError(c) } } var Ne = !1,
                    Fe = null,
                    Ae = !1,
                    Ve = null,
                    Ue = { onError: function(e) { Ne = !0, Fe = e } };

                function Be(e, t, n, i, r, o, a, s, l) { Ne = !1, Fe = null, Ie.apply(Ue, arguments) }

                function He(e) { var t = e,
                        n = e; if (e.alternate)
                        for (; t.return;) t = t.return;
                    else { e = t;
                        do { 0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return } while (e) } return 3 === t.tag ? n : null }

                function je(e) { if (13 === e.tag) { var t = e.memoizedState; if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated } return null }

                function We(e) { if (He(e) !== e) throw Error(o(188)) }

                function $e(e) { return null !== (e = function(e) { var t = e.alternate; if (!t) { if (null === (t = He(e))) throw Error(o(188)); return t !== e ? null : e } for (var n = e, i = t;;) { var r = n.return; if (null === r) break; var a = r.alternate; if (null === a) { if (null !== (i = r.return)) { n = i; continue } break } if (r.child === a.child) { for (a = r.child; a;) { if (a === n) return We(r), e; if (a === i) return We(r), t;
                                    a = a.sibling } throw Error(o(188)) } if (n.return !== i.return) n = r, i = a;
                            else { for (var s = !1, l = r.child; l;) { if (l === n) { s = !0, n = r, i = a; break } if (l === i) { s = !0, i = r, n = a; break } l = l.sibling } if (!s) { for (l = a.child; l;) { if (l === n) { s = !0, n = a, i = r; break } if (l === i) { s = !0, i = a, n = r; break } l = l.sibling } if (!s) throw Error(o(189)) } } if (n.alternate !== i) throw Error(o(190)) } if (3 !== n.tag) throw Error(o(188)); return n.stateNode.current === n ? e : t }(e)) ? Qe(e) : null }

                function Qe(e) { if (5 === e.tag || 6 === e.tag) return e; for (e = e.child; null !== e;) { var t = Qe(e); if (null !== t) return t;
                        e = e.sibling } return null } var qe = r.unstable_scheduleCallback,
                    Ye = r.unstable_cancelCallback,
                    Ge = r.unstable_shouldYield,
                    Xe = r.unstable_requestPaint,
                    Ke = r.unstable_now,
                    Ze = r.unstable_getCurrentPriorityLevel,
                    Je = r.unstable_ImmediatePriority,
                    et = r.unstable_UserBlockingPriority,
                    tt = r.unstable_NormalPriority,
                    nt = r.unstable_LowPriority,
                    it = r.unstable_IdlePriority,
                    rt = null,
                    ot = null; var at = Math.clz32 ? Math.clz32 : function(e) { return e >>>= 0, 0 === e ? 32 : 31 - (st(e) / lt | 0) | 0 },
                    st = Math.log,
                    lt = Math.LN2; var ut = 64,
                    ct = 4194304;

                function dt(e) { switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194240 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & e;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 1073741824;
                        default:
                            return e } }

                function ht(e, t) { var n = e.pendingLanes; if (0 === n) return 0; var i = 0,
                        r = e.suspendedLanes,
                        o = e.pingedLanes,
                        a = 268435455 & n; if (0 !== a) { var s = a & ~r;
                        0 !== s ? i = dt(s) : 0 !== (o &= a) && (i = dt(o)) } else 0 !== (a = n & ~r) ? i = dt(a) : 0 !== o && (i = dt(o)); if (0 === i) return 0; if (0 !== t && t !== i && 0 === (t & r) && ((r = i & -i) >= (o = t & -t) || 16 === r && 0 !== (4194240 & o))) return t; if (0 !== (4 & i) && (i |= 16 & n), 0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= i; 0 < t;) r = 1 << (n = 31 - at(t)), i |= e[n], t &= ~r; return i }

                function ft(e, t) { switch (e) {
                        case 1:
                        case 2:
                        case 4:
                            return t + 250;
                        case 8:
                        case 16:
                        case 32:
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return t + 5e3;
                        default:
                            return -1 } }

                function pt(e) { return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0 }

                function vt() { var e = ut; return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e }

                function mt(e) { for (var t = [], n = 0; 31 > n; n++) t.push(e); return t }

                function gt(e, t, n) { e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - at(t)] = n }

                function yt(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) { var i = 31 - at(n),
                            r = 1 << i;
                        r & t | e[i] & t && (e[i] |= t), n &= ~r } } var bt = 0;

                function wt(e) { return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1 } var _t, kt, xt, St, zt, Ct = !1,
                    Pt = [],
                    Et = null,
                    Mt = null,
                    Tt = null,
                    Ot = new Map,
                    Lt = new Map,
                    Rt = [],
                    Dt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function It(e, t) { switch (e) {
                        case "focusin":
                        case "focusout":
                            Et = null; break;
                        case "dragenter":
                        case "dragleave":
                            Mt = null; break;
                        case "mouseover":
                        case "mouseout":
                            Tt = null; break;
                        case "pointerover":
                        case "pointerout":
                            Ot.delete(t.pointerId); break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            Lt.delete(t.pointerId) } }

                function Nt(e, t, n, i, r, o) { return null === e || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: i, nativeEvent: o, targetContainers: [r] }, null !== t && (null !== (t = br(t)) && kt(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, null !== r && -1 === t.indexOf(r) && t.push(r), e) }

                function Ft(e) { var t = yr(e.target); if (null !== t) { var n = He(t); if (null !== n)
                            if (13 === (t = n.tag)) { if (null !== (t = je(n))) return e.blockedOn = t, void zt(e.priority, (function() { xt(n) })) } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null) } e.blockedOn = null }

                function At(e) { if (null !== e.blockedOn) return !1; for (var t = e.targetContainers; 0 < t.length;) { var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent); if (null !== n) return null !== (t = br(n)) && kt(t), e.blockedOn = n, !1; var i = new(n = e.nativeEvent).constructor(n.type, n);
                        we = i, n.target.dispatchEvent(i), we = null, t.shift() } return !0 }

                function Vt(e, t, n) { At(e) && n.delete(t) }

                function Ut() { Ct = !1, null !== Et && At(Et) && (Et = null), null !== Mt && At(Mt) && (Mt = null), null !== Tt && At(Tt) && (Tt = null), Ot.forEach(Vt), Lt.forEach(Vt) }

                function Bt(e, t) { e.blockedOn === t && (e.blockedOn = null, Ct || (Ct = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Ut))) }

                function Ht(e) {
                    function t(t) { return Bt(t, e) } if (0 < Pt.length) { Bt(Pt[0], e); for (var n = 1; n < Pt.length; n++) { var i = Pt[n];
                            i.blockedOn === e && (i.blockedOn = null) } } for (null !== Et && Bt(Et, e), null !== Mt && Bt(Mt, e), null !== Tt && Bt(Tt, e), Ot.forEach(t), Lt.forEach(t), n = 0; n < Rt.length; n++)(i = Rt[n]).blockedOn === e && (i.blockedOn = null); for (; 0 < Rt.length && null === (n = Rt[0]).blockedOn;) Ft(n), null === n.blockedOn && Rt.shift() } var jt = w.ReactCurrentBatchConfig,
                    Wt = !0;

                function $t(e, t, n, i) { var r = bt,
                        o = jt.transition;
                    jt.transition = null; try { bt = 1, qt(e, t, n, i) } finally { bt = r, jt.transition = o } }

                function Qt(e, t, n, i) { var r = bt,
                        o = jt.transition;
                    jt.transition = null; try { bt = 4, qt(e, t, n, i) } finally { bt = r, jt.transition = o } }

                function qt(e, t, n, i) { if (Wt) { var r = Gt(e, t, n, i); if (null === r) Wi(e, t, i, Yt, n), It(e, i);
                        else if (function(e, t, n, i, r) { switch (t) {
                                    case "focusin":
                                        return Et = Nt(Et, e, t, n, i, r), !0;
                                    case "dragenter":
                                        return Mt = Nt(Mt, e, t, n, i, r), !0;
                                    case "mouseover":
                                        return Tt = Nt(Tt, e, t, n, i, r), !0;
                                    case "pointerover":
                                        var o = r.pointerId; return Ot.set(o, Nt(Ot.get(o) || null, e, t, n, i, r)), !0;
                                    case "gotpointercapture":
                                        return o = r.pointerId, Lt.set(o, Nt(Lt.get(o) || null, e, t, n, i, r)), !0 } return !1 }(r, e, t, n, i)) i.stopPropagation();
                        else if (It(e, i), 4 & t && -1 < Dt.indexOf(e)) { for (; null !== r;) { var o = br(r); if (null !== o && _t(o), null === (o = Gt(e, t, n, i)) && Wi(e, t, i, Yt, n), o === r) break;
                                r = o } null !== r && i.stopPropagation() } else Wi(e, t, i, null, n) } } var Yt = null;

                function Gt(e, t, n, i) { if (Yt = null, null !== (e = yr(e = _e(i))))
                        if (null === (t = He(e))) e = null;
                        else if (13 === (n = t.tag)) { if (null !== (e = je(t))) return e;
                        e = null } else if (3 === n) { if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                        e = null } else t !== e && (e = null); return Yt = e, null }

                function Xt(e) { switch (e) {
                        case "cancel":
                        case "click":
                        case "close":
                        case "contextmenu":
                        case "copy":
                        case "cut":
                        case "auxclick":
                        case "dblclick":
                        case "dragend":
                        case "dragstart":
                        case "drop":
                        case "focusin":
                        case "focusout":
                        case "input":
                        case "invalid":
                        case "keydown":
                        case "keypress":
                        case "keyup":
                        case "mousedown":
                        case "mouseup":
                        case "paste":
                        case "pause":
                        case "play":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointerup":
                        case "ratechange":
                        case "reset":
                        case "resize":
                        case "seeked":
                        case "submit":
                        case "touchcancel":
                        case "touchend":
                        case "touchstart":
                        case "volumechange":
                        case "change":
                        case "selectionchange":
                        case "textInput":
                        case "compositionstart":
                        case "compositionend":
                        case "compositionupdate":
                        case "beforeblur":
                        case "afterblur":
                        case "beforeinput":
                        case "blur":
                        case "fullscreenchange":
                        case "focus":
                        case "hashchange":
                        case "popstate":
                        case "select":
                        case "selectstart":
                            return 1;
                        case "drag":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "mousemove":
                        case "mouseout":
                        case "mouseover":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "scroll":
                        case "toggle":
                        case "touchmove":
                        case "wheel":
                        case "mouseenter":
                        case "mouseleave":
                        case "pointerenter":
                        case "pointerleave":
                            return 4;
                        case "message":
                            switch (Ze()) {
                                case Je:
                                    return 1;
                                case et:
                                    return 4;
                                case tt:
                                case nt:
                                    return 16;
                                case it:
                                    return 536870912;
                                default:
                                    return 16 }
                        default:
                            return 16 } } var Kt = null,
                    Zt = null,
                    Jt = null;

                function en() { if (Jt) return Jt; var e, t, n = Zt,
                        i = n.length,
                        r = "value" in Kt ? Kt.value : Kt.textContent,
                        o = r.length; for (e = 0; e < i && n[e] === r[e]; e++); var a = i - e; for (t = 1; t <= a && n[i - t] === r[o - t]; t++); return Jt = r.slice(e, 1 < t ? 1 - t : void 0) }

                function tn(e) { var t = e.keyCode; return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0 }

                function nn() { return !0 }

                function rn() { return !1 }

                function on(e) {
                    function t(t, n, i, r, o) { for (var a in this._reactName = t, this._targetInst = i, this.type = n, this.nativeEvent = r, this.target = o, this.currentTarget = null, e) e.hasOwnProperty(a) && (t = e[a], this[a] = t ? t(r) : r[a]); return this.isDefaultPrevented = (null != r.defaultPrevented ? r.defaultPrevented : !1 === r.returnValue) ? nn : rn, this.isPropagationStopped = rn, this } return F(t.prototype, { preventDefault: function() { this.defaultPrevented = !0; var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn) }, stopPropagation: function() { var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn) }, persist: function() {}, isPersistent: nn }), t } var an, sn, ln, un = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) { return e.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 },
                    cn = on(un),
                    dn = F({}, un, { view: 0, detail: 0 }),
                    hn = on(dn),
                    fn = F({}, dn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zn, button: 0, buttons: 0, relatedTarget: function(e) { return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget }, movementX: function(e) { return "movementX" in e ? e.movementX : (e !== ln && (ln && "mousemove" === e.type ? (an = e.screenX - ln.screenX, sn = e.screenY - ln.screenY) : sn = an = 0, ln = e), an) }, movementY: function(e) { return "movementY" in e ? e.movementY : sn } }),
                    pn = on(fn),
                    vn = on(F({}, fn, { dataTransfer: 0 })),
                    mn = on(F({}, dn, { relatedTarget: 0 })),
                    gn = on(F({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
                    yn = F({}, un, { clipboardData: function(e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData } }),
                    bn = on(yn),
                    wn = on(F({}, un, { data: 0 })),
                    _n = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
                    kn = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
                    xn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

                function Sn(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : !!(e = xn[e]) && !!t[e] }

                function zn() { return Sn } var Cn = F({}, dn, { key: function(e) { if (e.key) { var t = _n[e.key] || e.key; if ("Unidentified" !== t) return t } return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? kn[e.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zn, charCode: function(e) { return "keypress" === e.type ? tn(e) : 0 }, keyCode: function(e) { return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0 }, which: function(e) { return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0 } }),
                    Pn = on(Cn),
                    En = on(F({}, fn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })),
                    Mn = on(F({}, dn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zn })),
                    Tn = on(F({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
                    On = F({}, fn, { deltaX: function(e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function(e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }),
                    Ln = on(On),
                    Rn = [9, 13, 27, 32],
                    Dn = c && "CompositionEvent" in window,
                    In = null;
                c && "documentMode" in document && (In = document.documentMode); var Nn = c && "TextEvent" in window && !In,
                    Fn = c && (!Dn || In && 8 < In && 11 >= In),
                    An = String.fromCharCode(32),
                    Vn = !1;

                function Un(e, t) { switch (e) {
                        case "keyup":
                            return -1 !== Rn.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1 } }

                function Bn(e) { return "object" === typeof(e = e.detail) && "data" in e ? e.data : null } var Hn = !1; var jn = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };

                function Wn(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return "input" === t ? !!jn[e.type] : "textarea" === t }

                function $n(e, t, n, i) { Ce(i), 0 < (t = Qi(t, "onChange")).length && (n = new cn("onChange", "change", null, n, i), e.push({ event: n, listeners: t })) } var Qn = null,
                    qn = null;

                function Yn(e) { Ai(e, 0) }

                function Gn(e) { if (q(wr(e))) return e }

                function Xn(e, t) { if ("change" === e) return t } var Kn = !1; if (c) { var Zn; if (c) { var Jn = "oninput" in document; if (!Jn) { var ei = document.createElement("div");
                            ei.setAttribute("oninput", "return;"), Jn = "function" === typeof ei.oninput } Zn = Jn } else Zn = !1;
                    Kn = Zn && (!document.documentMode || 9 < document.documentMode) }

                function ti() { Qn && (Qn.detachEvent("onpropertychange", ni), qn = Qn = null) }

                function ni(e) { if ("value" === e.propertyName && Gn(qn)) { var t = [];
                        $n(t, qn, e, _e(e)), Oe(Yn, t) } }

                function ii(e, t, n) { "focusin" === e ? (ti(), qn = n, (Qn = t).attachEvent("onpropertychange", ni)) : "focusout" === e && ti() }

                function ri(e) { if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Gn(qn) }

                function oi(e, t) { if ("click" === e) return Gn(t) }

                function ai(e, t) { if ("input" === e || "change" === e) return Gn(t) } var si = "function" === typeof Object.is ? Object.is : function(e, t) { return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t };

                function li(e, t) { if (si(e, t)) return !0; if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1; var n = Object.keys(e),
                        i = Object.keys(t); if (n.length !== i.length) return !1; for (i = 0; i < n.length; i++) { var r = n[i]; if (!d.call(t, r) || !si(e[r], t[r])) return !1 } return !0 }

                function ui(e) { for (; e && e.firstChild;) e = e.firstChild; return e }

                function ci(e, t) { var n, i = ui(e); for (e = 0; i;) { if (3 === i.nodeType) { if (n = e + i.textContent.length, e <= t && n >= t) return { node: i, offset: t - e };
                            e = n } e: { for (; i;) { if (i.nextSibling) { i = i.nextSibling; break e } i = i.parentNode } i = void 0 } i = ui(i) } }

                function di(e, t) { return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? di(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))) }

                function hi() { for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement;) { try { var n = "string" === typeof t.contentWindow.location.href } catch (i) { n = !1 } if (!n) break;
                        t = Y((e = t.contentWindow).document) } return t }

                function fi(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable) }

                function pi(e) { var t = hi(),
                        n = e.focusedElem,
                        i = e.selectionRange; if (t !== n && n && n.ownerDocument && di(n.ownerDocument.documentElement, n)) { if (null !== i && fi(n))
                            if (t = i.start, void 0 === (e = i.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) { e = e.getSelection(); var r = n.textContent.length,
                                o = Math.min(i.start, r);
                            i = void 0 === i.end ? o : Math.min(i.end, r), !e.extend && o > i && (r = i, i = o, o = r), r = ci(n, o); var a = ci(n, i);
                            r && a && (1 !== e.rangeCount || e.anchorNode !== r.node || e.anchorOffset !== r.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && ((t = t.createRange()).setStart(r.node, r.offset), e.removeAllRanges(), o > i ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t))) } for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop }); for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top } } var vi = c && "documentMode" in document && 11 >= document.documentMode,
                    mi = null,
                    gi = null,
                    yi = null,
                    bi = !1;

                function wi(e, t, n) { var i = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    bi || null == mi || mi !== Y(i) || ("selectionStart" in (i = mi) && fi(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : i = { anchorNode: (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }, yi && li(yi, i) || (yi = i, 0 < (i = Qi(gi, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = mi))) }

                function _i(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n } var ki = { animationend: _i("Animation", "AnimationEnd"), animationiteration: _i("Animation", "AnimationIteration"), animationstart: _i("Animation", "AnimationStart"), transitionend: _i("Transition", "TransitionEnd") },
                    xi = {},
                    Si = {};

                function zi(e) { if (xi[e]) return xi[e]; if (!ki[e]) return e; var t, n = ki[e]; for (t in n)
                        if (n.hasOwnProperty(t) && t in Si) return xi[e] = n[t]; return e } c && (Si = document.createElement("div").style, "AnimationEvent" in window || (delete ki.animationend.animation, delete ki.animationiteration.animation, delete ki.animationstart.animation), "TransitionEvent" in window || delete ki.transitionend.transition); var Ci = zi("animationend"),
                    Pi = zi("animationiteration"),
                    Ei = zi("animationstart"),
                    Mi = zi("transitionend"),
                    Ti = new Map,
                    Oi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

                function Li(e, t) { Ti.set(e, t), l(t, [e]) } for (var Ri = 0; Ri < Oi.length; Ri++) { var Di = Oi[Ri];
                    Li(Di.toLowerCase(), "on" + (Di[0].toUpperCase() + Di.slice(1))) } Li(Ci, "onAnimationEnd"), Li(Pi, "onAnimationIteration"), Li(Ei, "onAnimationStart"), Li("dblclick", "onDoubleClick"), Li("focusin", "onFocus"), Li("focusout", "onBlur"), Li(Mi, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var Ii = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Ni = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));

                function Fi(e, t, n) { var i = e.type || "unknown-event";
                    e.currentTarget = n,
                        function(e, t, n, i, r, a, s, l, u) { if (Be.apply(this, arguments), Ne) { if (!Ne) throw Error(o(198)); var c = Fe;
                                Ne = !1, Fe = null, Ae || (Ae = !0, Ve = c) } }(i, t, void 0, e), e.currentTarget = null }

                function Ai(e, t) { t = 0 !== (4 & t); for (var n = 0; n < e.length; n++) { var i = e[n],
                            r = i.event;
                        i = i.listeners;
                        e: { var o = void 0; if (t)
                                for (var a = i.length - 1; 0 <= a; a--) { var s = i[a],
                                        l = s.instance,
                                        u = s.currentTarget; if (s = s.listener, l !== o && r.isPropagationStopped()) break e;
                                    Fi(r, s, u), o = l } else
                                    for (a = 0; a < i.length; a++) { if (l = (s = i[a]).instance, u = s.currentTarget, s = s.listener, l !== o && r.isPropagationStopped()) break e;
                                        Fi(r, s, u), o = l } } } if (Ae) throw e = Ve, Ae = !1, Ve = null, e }

                function Vi(e, t) { var n = t[vr];
                    void 0 === n && (n = t[vr] = new Set); var i = e + "__bubble";
                    n.has(i) || (ji(t, e, 2, !1), n.add(i)) }

                function Ui(e, t, n) { var i = 0;
                    t && (i |= 4), ji(n, e, i, t) } var Bi = "_reactListening" + Math.random().toString(36).slice(2);

                function Hi(e) { if (!e[Bi]) { e[Bi] = !0, a.forEach((function(t) { "selectionchange" !== t && (Ni.has(t) || Ui(t, !1, e), Ui(t, !0, e)) })); var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[Bi] || (t[Bi] = !0, Ui("selectionchange", !1, t)) } }

                function ji(e, t, n, i) { switch (Xt(t)) {
                        case 1:
                            var r = $t; break;
                        case 4:
                            r = Qt; break;
                        default:
                            r = qt } n = r.bind(null, t, n, e), r = void 0, !Re || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (r = !0), i ? void 0 !== r ? e.addEventListener(t, n, { capture: !0, passive: r }) : e.addEventListener(t, n, !0) : void 0 !== r ? e.addEventListener(t, n, { passive: r }) : e.addEventListener(t, n, !1) }

                function Wi(e, t, n, i, r) { var o = i; if (0 === (1 & t) && 0 === (2 & t) && null !== i) e: for (;;) { if (null === i) return; var a = i.tag; if (3 === a || 4 === a) { var s = i.stateNode.containerInfo; if (s === r || 8 === s.nodeType && s.parentNode === r) break; if (4 === a)
                                for (a = i.return; null !== a;) { var l = a.tag; if ((3 === l || 4 === l) && ((l = a.stateNode.containerInfo) === r || 8 === l.nodeType && l.parentNode === r)) return;
                                    a = a.return }
                            for (; null !== s;) { if (null === (a = yr(s))) return; if (5 === (l = a.tag) || 6 === l) { i = o = a; continue e } s = s.parentNode } } i = i.return } Oe((function() { var i = o,
                            r = _e(n),
                            a = [];
                        e: { var s = Ti.get(e); if (void 0 !== s) { var l = cn,
                                    u = e; switch (e) {
                                    case "keypress":
                                        if (0 === tn(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        l = Pn; break;
                                    case "focusin":
                                        u = "focus", l = mn; break;
                                    case "focusout":
                                        u = "blur", l = mn; break;
                                    case "beforeblur":
                                    case "afterblur":
                                        l = mn; break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        l = pn; break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        l = vn; break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        l = Mn; break;
                                    case Ci:
                                    case Pi:
                                    case Ei:
                                        l = gn; break;
                                    case Mi:
                                        l = Tn; break;
                                    case "scroll":
                                        l = hn; break;
                                    case "wheel":
                                        l = Ln; break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        l = bn; break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        l = En } var c = 0 !== (4 & t),
                                    d = !c && "scroll" === e,
                                    h = c ? null !== s ? s + "Capture" : null : s;
                                c = []; for (var f, p = i; null !== p;) { var v = (f = p).stateNode; if (5 === f.tag && null !== v && (f = v, null !== h && (null != (v = Le(p, h)) && c.push($i(p, v, f)))), d) break;
                                    p = p.return } 0 < c.length && (s = new l(s, u, null, n, r), a.push({ event: s, listeners: c })) } }
                        if (0 === (7 & t)) { if (l = "mouseout" === e || "pointerout" === e, (!(s = "mouseover" === e || "pointerover" === e) || n === we || !(u = n.relatedTarget || n.fromElement) || !yr(u) && !u[pr]) && (l || s) && (s = r.window === r ? r : (s = r.ownerDocument) ? s.defaultView || s.parentWindow : window, l ? (l = i, null !== (u = (u = n.relatedTarget || n.toElement) ? yr(u) : null) && (u !== (d = He(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (l = null, u = i), l !== u)) { if (c = pn, v = "onMouseLeave", h = "onMouseEnter", p = "mouse", "pointerout" !== e && "pointerover" !== e || (c = En, v = "onPointerLeave", h = "onPointerEnter", p = "pointer"), d = null == l ? s : wr(l), f = null == u ? s : wr(u), (s = new c(v, p + "leave", l, n, r)).target = d, s.relatedTarget = f, v = null, yr(r) === i && ((c = new c(h, p + "enter", u, n, r)).target = f, c.relatedTarget = d, v = c), d = v, l && u) e: { for (h = u, p = 0, f = c = l; f; f = qi(f)) p++; for (f = 0, v = h; v; v = qi(v)) f++; for (; 0 < p - f;) c = qi(c), p--; for (; 0 < f - p;) h = qi(h), f--; for (; p--;) { if (c === h || null !== h && c === h.alternate) break e;
                                        c = qi(c), h = qi(h) } c = null }
                                else c = null;
                                null !== l && Yi(a, s, l, c, !1), null !== u && null !== d && Yi(a, d, u, c, !0) } if ("select" === (l = (s = i ? wr(i) : window).nodeName && s.nodeName.toLowerCase()) || "input" === l && "file" === s.type) var m = Xn;
                            else if (Wn(s))
                                if (Kn) m = ai;
                                else { m = ri; var g = ii } else(l = s.nodeName) && "input" === l.toLowerCase() && ("checkbox" === s.type || "radio" === s.type) && (m = oi); switch (m && (m = m(e, i)) ? $n(a, m, n, r) : (g && g(e, s, i), "focusout" === e && (g = s._wrapperState) && g.controlled && "number" === s.type && ee(s, "number", s.value)), g = i ? wr(i) : window, e) {
                                case "focusin":
                                    (Wn(g) || "true" === g.contentEditable) && (mi = g, gi = i, yi = null); break;
                                case "focusout":
                                    yi = gi = mi = null; break;
                                case "mousedown":
                                    bi = !0; break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    bi = !1, wi(a, n, r); break;
                                case "selectionchange":
                                    if (vi) break;
                                case "keydown":
                                case "keyup":
                                    wi(a, n, r) } var y; if (Dn) e: { switch (e) {
                                    case "compositionstart":
                                        var b = "onCompositionStart"; break e;
                                    case "compositionend":
                                        b = "onCompositionEnd"; break e;
                                    case "compositionupdate":
                                        b = "onCompositionUpdate"; break e } b = void 0 }
                            else Hn ? Un(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                            b && (Fn && "ko" !== n.locale && (Hn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Hn && (y = en()) : (Zt = "value" in (Kt = r) ? Kt.value : Kt.textContent, Hn = !0)), 0 < (g = Qi(i, b)).length && (b = new wn(b, e, null, n, r), a.push({ event: b, listeners: g }), y ? b.data = y : null !== (y = Bn(n)) && (b.data = y))), (y = Nn ? function(e, t) { switch (e) {
                                    case "compositionend":
                                        return Bn(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (Vn = !0, An);
                                    case "textInput":
                                        return (e = t.data) === An && Vn ? null : e;
                                    default:
                                        return null } }(e, n) : function(e, t) { if (Hn) return "compositionend" === e || !Dn && Un(e, t) ? (e = en(), Jt = Zt = Kt = null, Hn = !1, e) : null; switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) { if (t.char && 1 < t.char.length) return t.char; if (t.which) return String.fromCharCode(t.which) } return null;
                                    case "compositionend":
                                        return Fn && "ko" !== t.locale ? null : t.data } }(e, n)) && (0 < (i = Qi(i, "onBeforeInput")).length && (r = new wn("onBeforeInput", "beforeinput", null, n, r), a.push({ event: r, listeners: i }), r.data = y)) } Ai(a, t) })) }

                function $i(e, t, n) { return { instance: e, listener: t, currentTarget: n } }

                function Qi(e, t) { for (var n = t + "Capture", i = []; null !== e;) { var r = e,
                            o = r.stateNode;
                        5 === r.tag && null !== o && (r = o, null != (o = Le(e, n)) && i.unshift($i(e, o, r)), null != (o = Le(e, t)) && i.push($i(e, o, r))), e = e.return } return i }

                function qi(e) { if (null === e) return null;
                    do { e = e.return } while (e && 5 !== e.tag); return e || null }

                function Yi(e, t, n, i, r) { for (var o = t._reactName, a = []; null !== n && n !== i;) { var s = n,
                            l = s.alternate,
                            u = s.stateNode; if (null !== l && l === i) break;
                        5 === s.tag && null !== u && (s = u, r ? null != (l = Le(n, o)) && a.unshift($i(n, l, s)) : r || null != (l = Le(n, o)) && a.push($i(n, l, s))), n = n.return } 0 !== a.length && e.push({ event: t, listeners: a }) } var Gi = /\r\n?/g,
                    Xi = /\u0000|\uFFFD/g;

                function Ki(e) { return ("string" === typeof e ? e : "" + e).replace(Gi, "\n").replace(Xi, "") }

                function Zi(e, t, n) { if (t = Ki(t), Ki(e) !== t && n) throw Error(o(425)) }

                function Ji() {} var er = null,
                    tr = null;

                function nr(e, t) { return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html } var ir = "function" === typeof setTimeout ? setTimeout : void 0,
                    rr = "function" === typeof clearTimeout ? clearTimeout : void 0,
                    or = "function" === typeof Promise ? Promise : void 0,
                    ar = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof or ? function(e) { return or.resolve(null).then(e).catch(sr) } : ir;

                function sr(e) { setTimeout((function() { throw e })) }

                function lr(e, t) { var n = t,
                        i = 0;
                    do { var r = n.nextSibling; if (e.removeChild(n), r && 8 === r.nodeType)
                            if ("/$" === (n = r.data)) { if (0 === i) return e.removeChild(r), void Ht(t);
                                i-- } else "$" !== n && "$?" !== n && "$!" !== n || i++;
                        n = r } while (n);
                    Ht(t) }

                function ur(e) { for (; null != e; e = e.nextSibling) { var t = e.nodeType; if (1 === t || 3 === t) break; if (8 === t) { if ("$" === (t = e.data) || "$!" === t || "$?" === t) break; if ("/$" === t) return null } } return e }

                function cr(e) { e = e.previousSibling; for (var t = 0; e;) { if (8 === e.nodeType) { var n = e.data; if ("$" === n || "$!" === n || "$?" === n) { if (0 === t) return e;
                                t-- } else "/$" === n && t++ } e = e.previousSibling } return null } var dr = Math.random().toString(36).slice(2),
                    hr = "__reactFiber$" + dr,
                    fr = "__reactProps$" + dr,
                    pr = "__reactContainer$" + dr,
                    vr = "__reactEvents$" + dr,
                    mr = "__reactListeners$" + dr,
                    gr = "__reactHandles$" + dr;

                function yr(e) { var t = e[hr]; if (t) return t; for (var n = e.parentNode; n;) { if (t = n[pr] || n[hr]) { if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = cr(e); null !== e;) { if (n = e[hr]) return n;
                                    e = cr(e) }
                            return t } n = (e = n).parentNode } return null }

                function br(e) { return !(e = e[hr] || e[pr]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e }

                function wr(e) { if (5 === e.tag || 6 === e.tag) return e.stateNode; throw Error(o(33)) }

                function _r(e) { return e[fr] || null } var kr = [],
                    xr = -1;

                function Sr(e) { return { current: e } }

                function zr(e) { 0 > xr || (e.current = kr[xr], kr[xr] = null, xr--) }

                function Cr(e, t) { xr++, kr[xr] = e.current, e.current = t } var Pr = {},
                    Er = Sr(Pr),
                    Mr = Sr(!1),
                    Tr = Pr;

                function Or(e, t) { var n = e.type.contextTypes; if (!n) return Pr; var i = e.stateNode; if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext; var r, o = {}; for (r in n) o[r] = t[r]; return i && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o }

                function Lr(e) { return null !== (e = e.childContextTypes) && void 0 !== e }

                function Rr() { zr(Mr), zr(Er) }

                function Dr(e, t, n) { if (Er.current !== Pr) throw Error(o(168));
                    Cr(Er, t), Cr(Mr, n) }

                function Ir(e, t, n) { var i = e.stateNode; if (t = t.childContextTypes, "function" !== typeof i.getChildContext) return n; for (var r in i = i.getChildContext())
                        if (!(r in t)) throw Error(o(108, j(e) || "Unknown", r)); return F({}, n, i) }

                function Nr(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Pr, Tr = Er.current, Cr(Er, e), Cr(Mr, Mr.current), !0 }

                function Fr(e, t, n) { var i = e.stateNode; if (!i) throw Error(o(169));
                    n ? (e = Ir(e, t, Tr), i.__reactInternalMemoizedMergedChildContext = e, zr(Mr), zr(Er), Cr(Er, e)) : zr(Mr), Cr(Mr, n) } var Ar = null,
                    Vr = !1,
                    Ur = !1;

                function Br(e) { null === Ar ? Ar = [e] : Ar.push(e) }

                function Hr() { if (!Ur && null !== Ar) { Ur = !0; var e = 0,
                            t = bt; try { var n = Ar; for (bt = 1; e < n.length; e++) { var i = n[e];
                                do { i = i(!0) } while (null !== i) } Ar = null, Vr = !1 } catch (r) { throw null !== Ar && (Ar = Ar.slice(e + 1)), qe(Je, Hr), r } finally { bt = t, Ur = !1 } } return null } var jr = [],
                    Wr = 0,
                    $r = null,
                    Qr = 0,
                    qr = [],
                    Yr = 0,
                    Gr = null,
                    Xr = 1,
                    Kr = "";

                function Zr(e, t) { jr[Wr++] = Qr, jr[Wr++] = $r, $r = e, Qr = t }

                function Jr(e, t, n) { qr[Yr++] = Xr, qr[Yr++] = Kr, qr[Yr++] = Gr, Gr = e; var i = Xr;
                    e = Kr; var r = 32 - at(i) - 1;
                    i &= ~(1 << r), n += 1; var o = 32 - at(t) + r; if (30 < o) { var a = r - r % 5;
                        o = (i & (1 << a) - 1).toString(32), i >>= a, r -= a, Xr = 1 << 32 - at(t) + r | n << r | i, Kr = o + e } else Xr = 1 << o | n << r | i, Kr = e }

                function eo(e) { null !== e.return && (Zr(e, 1), Jr(e, 1, 0)) }

                function to(e) { for (; e === $r;) $r = jr[--Wr], jr[Wr] = null, Qr = jr[--Wr], jr[Wr] = null; for (; e === Gr;) Gr = qr[--Yr], qr[Yr] = null, Kr = qr[--Yr], qr[Yr] = null, Xr = qr[--Yr], qr[Yr] = null } var no = null,
                    io = null,
                    ro = !1,
                    oo = null;

                function ao(e, t) { var n = Lu(5, null, null, 0);
                    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n) }

                function so(e, t) { switch (e.tag) {
                        case 5:
                            var n = e.type; return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, no = e, io = ur(t.firstChild), !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, no = e, io = null, !0);
                        case 13:
                            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Gr ? { id: Xr, overflow: Kr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, (n = Lu(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, no = e, io = null, !0);
                        default:
                            return !1 } }

                function lo(e) { return 0 !== (1 & e.mode) && 0 === (128 & e.flags) }

                function uo(e) { if (ro) { var t = io; if (t) { var n = t; if (!so(e, t)) { if (lo(e)) throw Error(o(418));
                                t = ur(n.nextSibling); var i = no;
                                t && so(e, t) ? ao(i, n) : (e.flags = -4097 & e.flags | 2, ro = !1, no = e) } } else { if (lo(e)) throw Error(o(418));
                            e.flags = -4097 & e.flags | 2, ro = !1, no = e } } }

                function co(e) { for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    no = e }

                function ho(e) { if (e !== no) return !1; if (!ro) return co(e), ro = !0, !1; var t; if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !nr(e.type, e.memoizedProps)), t && (t = io)) { if (lo(e)) throw fo(), Error(o(418)); for (; t;) ao(e, t), t = ur(t.nextSibling) } if (co(e), 13 === e.tag) { if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
                        e: { for (e = e.nextSibling, t = 0; e;) { if (8 === e.nodeType) { var n = e.data; if ("/$" === n) { if (0 === t) { io = ur(e.nextSibling); break e } t-- } else "$" !== n && "$!" !== n && "$?" !== n || t++ } e = e.nextSibling } io = null } } else io = no ? ur(e.stateNode.nextSibling) : null; return !0 }

                function fo() { for (var e = io; e;) e = ur(e.nextSibling) }

                function po() { io = no = null, ro = !1 }

                function vo(e) { null === oo ? oo = [e] : oo.push(e) } var mo = w.ReactCurrentBatchConfig;

                function go(e, t) { if (e && e.defaultProps) { for (var n in t = F({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]); return t } return t } var yo = Sr(null),
                    bo = null,
                    wo = null,
                    _o = null;

                function ko() { _o = wo = bo = null }

                function xo(e) { var t = yo.current;
                    zr(yo), e._currentValue = t }

                function So(e, t, n) { for (; null !== e;) { var i = e.alternate; if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== i && (i.childLanes |= t)) : null !== i && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
                        e = e.return } }

                function zo(e, t) { bo = e, _o = wo = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (ws = !0), e.firstContext = null) }

                function Co(e) { var t = e._currentValue; if (_o !== e)
                        if (e = { context: e, memoizedValue: t, next: null }, null === wo) { if (null === bo) throw Error(o(308));
                            wo = e, bo.dependencies = { lanes: 0, firstContext: e } } else wo = wo.next = e; return t } var Po = null;

                function Eo(e) { null === Po ? Po = [e] : Po.push(e) }

                function Mo(e, t, n, i) { var r = t.interleaved; return null === r ? (n.next = n, Eo(t)) : (n.next = r.next, r.next = n), t.interleaved = n, To(e, i) }

                function To(e, t) { e.lanes |= t; var n = e.alternate; for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return; return 3 === n.tag ? n.stateNode : null } var Oo = !1;

                function Lo(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null } }

                function Ro(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }) }

                function Do(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null } }

                function Io(e, t, n) { var i = e.updateQueue; if (null === i) return null; if (i = i.shared, 0 !== (2 & Ml)) { var r = i.pending; return null === r ? t.next = t : (t.next = r.next, r.next = t), i.pending = t, To(e, n) } return null === (r = i.interleaved) ? (t.next = t, Eo(i)) : (t.next = r.next, r.next = t), i.interleaved = t, To(e, n) }

                function No(e, t, n) { if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) { var i = t.lanes;
                        n |= i &= e.pendingLanes, t.lanes = n, yt(e, n) } }

                function Fo(e, t) { var n = e.updateQueue,
                        i = e.alternate; if (null !== i && n === (i = i.updateQueue)) { var r = null,
                            o = null; if (null !== (n = n.firstBaseUpdate)) { do { var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                                null === o ? r = o = a : o = o.next = a, n = n.next } while (null !== n);
                            null === o ? r = o = t : o = o.next = t } else r = o = t; return n = { baseState: i.baseState, firstBaseUpdate: r, lastBaseUpdate: o, shared: i.shared, effects: i.effects }, void(e.updateQueue = n) } null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t }

                function Ao(e, t, n, i) { var r = e.updateQueue;
                    Oo = !1; var o = r.firstBaseUpdate,
                        a = r.lastBaseUpdate,
                        s = r.shared.pending; if (null !== s) { r.shared.pending = null; var l = s,
                            u = l.next;
                        l.next = null, null === a ? o = u : a.next = u, a = l; var c = e.alternate;
                        null !== c && ((s = (c = c.updateQueue).lastBaseUpdate) !== a && (null === s ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l)) } if (null !== o) { var d = r.baseState; for (a = 0, c = u = l = null, s = o;;) { var h = s.lane,
                                f = s.eventTime; if ((i & h) === h) { null !== c && (c = c.next = { eventTime: f, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
                                e: { var p = e,
                                        v = s; switch (h = t, f = n, v.tag) {
                                        case 1:
                                            if ("function" === typeof(p = v.payload)) { d = p.call(f, d, h); break e } d = p; break e;
                                        case 3:
                                            p.flags = -65537 & p.flags | 128;
                                        case 0:
                                            if (null === (h = "function" === typeof(p = v.payload) ? p.call(f, d, h) : p) || void 0 === h) break e;
                                            d = F({}, d, h); break e;
                                        case 2:
                                            Oo = !0 } } null !== s.callback && 0 !== s.lane && (e.flags |= 64, null === (h = r.effects) ? r.effects = [s] : h.push(s)) } else f = { eventTime: f, lane: h, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, null === c ? (u = c = f, l = d) : c = c.next = f, a |= h; if (null === (s = s.next)) { if (null === (s = r.shared.pending)) break;
                                s = (h = s).next, h.next = null, r.lastBaseUpdate = h, r.shared.pending = null } } if (null === c && (l = d), r.baseState = l, r.firstBaseUpdate = u, r.lastBaseUpdate = c, null !== (t = r.shared.interleaved)) { r = t;
                            do { a |= r.lane, r = r.next } while (r !== t) } else null === o && (r.shared.lanes = 0);
                        Fl |= a, e.lanes = a, e.memoizedState = d } }

                function Vo(e, t, n) { if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) { var i = e[t],
                                r = i.callback; if (null !== r) { if (i.callback = null, i = n, "function" !== typeof r) throw Error(o(191, r));
                                r.call(i) } } } var Uo = (new i.Component).refs;

                function Bo(e, t, n, i) { n = null === (n = n(i, t = e.memoizedState)) || void 0 === n ? t : F({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n) } var Ho = { isMounted: function(e) { return !!(e = e._reactInternals) && He(e) === e }, enqueueSetState: function(e, t, n) { e = e._reactInternals; var i = tu(),
                            r = nu(e),
                            o = Do(i, r);
                        o.payload = t, void 0 !== n && null !== n && (o.callback = n), null !== (t = Io(e, o, r)) && (iu(t, e, r, i), No(t, e, r)) }, enqueueReplaceState: function(e, t, n) { e = e._reactInternals; var i = tu(),
                            r = nu(e),
                            o = Do(i, r);
                        o.tag = 1, o.payload = t, void 0 !== n && null !== n && (o.callback = n), null !== (t = Io(e, o, r)) && (iu(t, e, r, i), No(t, e, r)) }, enqueueForceUpdate: function(e, t) { e = e._reactInternals; var n = tu(),
                            i = nu(e),
                            r = Do(n, i);
                        r.tag = 2, void 0 !== t && null !== t && (r.callback = t), null !== (t = Io(e, r, i)) && (iu(t, e, i, n), No(t, e, i)) } };

                function jo(e, t, n, i, r, o, a) { return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(i, o, a) : !t.prototype || !t.prototype.isPureReactComponent || (!li(n, i) || !li(r, o)) }

                function Wo(e, t, n) { var i = !1,
                        r = Pr,
                        o = t.contextType; return "object" === typeof o && null !== o ? o = Co(o) : (r = Lr(t) ? Tr : Er.current, o = (i = null !== (i = t.contextTypes) && void 0 !== i) ? Or(e, r) : Pr), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Ho, e.stateNode = t, t._reactInternals = e, i && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = r, e.__reactInternalMemoizedMaskedChildContext = o), t }

                function $o(e, t, n, i) { e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, i), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Ho.enqueueReplaceState(t, t.state, null) }

                function Qo(e, t, n, i) { var r = e.stateNode;
                    r.props = n, r.state = e.memoizedState, r.refs = Uo, Lo(e); var o = t.contextType; "object" === typeof o && null !== o ? r.context = Co(o) : (o = Lr(t) ? Tr : Er.current, r.context = Or(e, o)), r.state = e.memoizedState, "function" === typeof(o = t.getDerivedStateFromProps) && (Bo(e, t, o, n), r.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof r.getSnapshotBeforeUpdate || "function" !== typeof r.UNSAFE_componentWillMount && "function" !== typeof r.componentWillMount || (t = r.state, "function" === typeof r.componentWillMount && r.componentWillMount(), "function" === typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount(), t !== r.state && Ho.enqueueReplaceState(r, r.state, null), Ao(e, n, r, i), r.state = e.memoizedState), "function" === typeof r.componentDidMount && (e.flags |= 4194308) }

                function qo(e, t, n) { if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) { if (n._owner) { if (n = n._owner) { if (1 !== n.tag) throw Error(o(309)); var i = n.stateNode } if (!i) throw Error(o(147, e)); var r = i,
                                a = "" + e; return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === a ? t.ref : (t = function(e) { var t = r.refs;
                                t === Uo && (t = r.refs = {}), null === e ? delete t[a] : t[a] = e }, t._stringRef = a, t) } if ("string" !== typeof e) throw Error(o(284)); if (!n._owner) throw Error(o(290, e)) } return e }

                function Yo(e, t) { throw e = Object.prototype.toString.call(t), Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)) }

                function Go(e) { return (0, e._init)(e._payload) }

                function Xo(e) {
                    function t(t, n) { if (e) { var i = t.deletions;
                            null === i ? (t.deletions = [n], t.flags |= 16) : i.push(n) } }

                    function n(n, i) { if (!e) return null; for (; null !== i;) t(n, i), i = i.sibling; return null }

                    function i(e, t) { for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling; return e }

                    function r(e, t) { return (e = Du(e, t)).index = 0, e.sibling = null, e }

                    function a(t, n, i) { return t.index = i, e ? null !== (i = t.alternate) ? (i = i.index) < n ? (t.flags |= 2, n) : i : (t.flags |= 2, n) : (t.flags |= 1048576, n) }

                    function s(t) { return e && null === t.alternate && (t.flags |= 2), t }

                    function l(e, t, n, i) { return null === t || 6 !== t.tag ? ((t = Au(n, e.mode, i)).return = e, t) : ((t = r(t, n)).return = e, t) }

                    function u(e, t, n, i) { var o = n.type; return o === x ? d(e, t, n.props.children, i, n.key) : null !== t && (t.elementType === o || "object" === typeof o && null !== o && o.$$typeof === L && Go(o) === t.type) ? ((i = r(t, n.props)).ref = qo(e, t, n), i.return = e, i) : ((i = Iu(n.type, n.key, n.props, null, e.mode, i)).ref = qo(e, t, n), i.return = e, i) }

                    function c(e, t, n, i) { return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Vu(n, e.mode, i)).return = e, t) : ((t = r(t, n.children || [])).return = e, t) }

                    function d(e, t, n, i, o) { return null === t || 7 !== t.tag ? ((t = Nu(n, e.mode, i, o)).return = e, t) : ((t = r(t, n)).return = e, t) }

                    function h(e, t, n) { if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = Au("" + t, e.mode, n)).return = e, t; if ("object" === typeof t && null !== t) { switch (t.$$typeof) {
                                case _:
                                    return (n = Iu(t.type, t.key, t.props, null, e.mode, n)).ref = qo(e, null, t), n.return = e, n;
                                case k:
                                    return (t = Vu(t, e.mode, n)).return = e, t;
                                case L:
                                    return h(e, (0, t._init)(t._payload), n) } if (te(t) || I(t)) return (t = Nu(t, e.mode, n, null)).return = e, t;
                            Yo(e, t) } return null }

                    function f(e, t, n, i) { var r = null !== t ? t.key : null; if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== r ? null : l(e, t, "" + n, i); if ("object" === typeof n && null !== n) { switch (n.$$typeof) {
                                case _:
                                    return n.key === r ? u(e, t, n, i) : null;
                                case k:
                                    return n.key === r ? c(e, t, n, i) : null;
                                case L:
                                    return f(e, t, (r = n._init)(n._payload), i) } if (te(n) || I(n)) return null !== r ? null : d(e, t, n, i, null);
                            Yo(e, n) } return null }

                    function p(e, t, n, i, r) { if ("string" === typeof i && "" !== i || "number" === typeof i) return l(t, e = e.get(n) || null, "" + i, r); if ("object" === typeof i && null !== i) { switch (i.$$typeof) {
                                case _:
                                    return u(t, e = e.get(null === i.key ? n : i.key) || null, i, r);
                                case k:
                                    return c(t, e = e.get(null === i.key ? n : i.key) || null, i, r);
                                case L:
                                    return p(e, t, n, (0, i._init)(i._payload), r) } if (te(i) || I(i)) return d(t, e = e.get(n) || null, i, r, null);
                            Yo(t, i) } return null }

                    function v(r, o, s, l) { for (var u = null, c = null, d = o, v = o = 0, m = null; null !== d && v < s.length; v++) { d.index > v ? (m = d, d = null) : m = d.sibling; var g = f(r, d, s[v], l); if (null === g) { null === d && (d = m); break } e && d && null === g.alternate && t(r, d), o = a(g, o, v), null === c ? u = g : c.sibling = g, c = g, d = m } if (v === s.length) return n(r, d), ro && Zr(r, v), u; if (null === d) { for (; v < s.length; v++) null !== (d = h(r, s[v], l)) && (o = a(d, o, v), null === c ? u = d : c.sibling = d, c = d); return ro && Zr(r, v), u } for (d = i(r, d); v < s.length; v++) null !== (m = p(d, r, v, s[v], l)) && (e && null !== m.alternate && d.delete(null === m.key ? v : m.key), o = a(m, o, v), null === c ? u = m : c.sibling = m, c = m); return e && d.forEach((function(e) { return t(r, e) })), ro && Zr(r, v), u }

                    function m(r, s, l, u) { var c = I(l); if ("function" !== typeof c) throw Error(o(150)); if (null == (l = c.call(l))) throw Error(o(151)); for (var d = c = null, v = s, m = s = 0, g = null, y = l.next(); null !== v && !y.done; m++, y = l.next()) { v.index > m ? (g = v, v = null) : g = v.sibling; var b = f(r, v, y.value, u); if (null === b) { null === v && (v = g); break } e && v && null === b.alternate && t(r, v), s = a(b, s, m), null === d ? c = b : d.sibling = b, d = b, v = g } if (y.done) return n(r, v), ro && Zr(r, m), c; if (null === v) { for (; !y.done; m++, y = l.next()) null !== (y = h(r, y.value, u)) && (s = a(y, s, m), null === d ? c = y : d.sibling = y, d = y); return ro && Zr(r, m), c } for (v = i(r, v); !y.done; m++, y = l.next()) null !== (y = p(v, r, m, y.value, u)) && (e && null !== y.alternate && v.delete(null === y.key ? m : y.key), s = a(y, s, m), null === d ? c = y : d.sibling = y, d = y); return e && v.forEach((function(e) { return t(r, e) })), ro && Zr(r, m), c } return function e(i, o, a, l) { if ("object" === typeof a && null !== a && a.type === x && null === a.key && (a = a.props.children), "object" === typeof a && null !== a) { switch (a.$$typeof) {
                                case _:
                                    e: { for (var u = a.key, c = o; null !== c;) { if (c.key === u) { if ((u = a.type) === x) { if (7 === c.tag) { n(i, c.sibling), (o = r(c, a.props.children)).return = i, i = o; break e } } else if (c.elementType === u || "object" === typeof u && null !== u && u.$$typeof === L && Go(u) === c.type) { n(i, c.sibling), (o = r(c, a.props)).ref = qo(i, c, a), o.return = i, i = o; break e } n(i, c); break } t(i, c), c = c.sibling } a.type === x ? ((o = Nu(a.props.children, i.mode, l, a.key)).return = i, i = o) : ((l = Iu(a.type, a.key, a.props, null, i.mode, l)).ref = qo(i, o, a), l.return = i, i = l) }
                                    return s(i);
                                case k:
                                    e: { for (c = a.key; null !== o;) { if (o.key === c) { if (4 === o.tag && o.stateNode.containerInfo === a.containerInfo && o.stateNode.implementation === a.implementation) { n(i, o.sibling), (o = r(o, a.children || [])).return = i, i = o; break e } n(i, o); break } t(i, o), o = o.sibling }(o = Vu(a, i.mode, l)).return = i, i = o }
                                    return s(i);
                                case L:
                                    return e(i, o, (c = a._init)(a._payload), l) } if (te(a)) return v(i, o, a, l); if (I(a)) return m(i, o, a, l);
                            Yo(i, a) } return "string" === typeof a && "" !== a || "number" === typeof a ? (a = "" + a, null !== o && 6 === o.tag ? (n(i, o.sibling), (o = r(o, a)).return = i, i = o) : (n(i, o), (o = Au(a, i.mode, l)).return = i, i = o), s(i)) : n(i, o) } } var Ko = Xo(!0),
                    Zo = Xo(!1),
                    Jo = {},
                    ea = Sr(Jo),
                    ta = Sr(Jo),
                    na = Sr(Jo);

                function ia(e) { if (e === Jo) throw Error(o(174)); return e }

                function ra(e, t) { switch (Cr(na, t), Cr(ta, e), Cr(ea, Jo), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : le(null, ""); break;
                        default:
                            t = le(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName) } zr(ea), Cr(ea, t) }

                function oa() { zr(ea), zr(ta), zr(na) }

                function aa(e) { ia(na.current); var t = ia(ea.current),
                        n = le(t, e.type);
                    t !== n && (Cr(ta, e), Cr(ea, n)) }

                function sa(e) { ta.current === e && (zr(ea), zr(ta)) } var la = Sr(0);

                function ua(e) { for (var t = e; null !== t;) { if (13 === t.tag) { var n = t.memoizedState; if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) { if (0 !== (128 & t.flags)) return t } else if (null !== t.child) { t.child.return = t, t = t.child; continue } if (t === e) break; for (; null === t.sibling;) { if (null === t.return || t.return === e) return null;
                            t = t.return } t.sibling.return = t.return, t = t.sibling } return null } var ca = [];

                function da() { for (var e = 0; e < ca.length; e++) ca[e]._workInProgressVersionPrimary = null;
                    ca.length = 0 } var ha = w.ReactCurrentDispatcher,
                    fa = w.ReactCurrentBatchConfig,
                    pa = 0,
                    va = null,
                    ma = null,
                    ga = null,
                    ya = !1,
                    ba = !1,
                    wa = 0,
                    _a = 0;

                function ka() { throw Error(o(321)) }

                function xa(e, t) { if (null === t) return !1; for (var n = 0; n < t.length && n < e.length; n++)
                        if (!si(e[n], t[n])) return !1; return !0 }

                function Sa(e, t, n, i, r, a) { if (pa = a, va = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ha.current = null === e || null === e.memoizedState ? ss : ls, e = n(i, r), ba) { a = 0;
                        do { if (ba = !1, wa = 0, 25 <= a) throw Error(o(301));
                            a += 1, ga = ma = null, t.updateQueue = null, ha.current = us, e = n(i, r) } while (ba) } if (ha.current = as, t = null !== ma && null !== ma.next, pa = 0, ga = ma = va = null, ya = !1, t) throw Error(o(300)); return e }

                function za() { var e = 0 !== wa; return wa = 0, e }

                function Ca() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return null === ga ? va.memoizedState = ga = e : ga = ga.next = e, ga }

                function Pa() { if (null === ma) { var e = va.alternate;
                        e = null !== e ? e.memoizedState : null } else e = ma.next; var t = null === ga ? va.memoizedState : ga.next; if (null !== t) ga = t, ma = e;
                    else { if (null === e) throw Error(o(310));
                        e = { memoizedState: (ma = e).memoizedState, baseState: ma.baseState, baseQueue: ma.baseQueue, queue: ma.queue, next: null }, null === ga ? va.memoizedState = ga = e : ga = ga.next = e } return ga }

                function Ea(e, t) { return "function" === typeof t ? t(e) : t }

                function Ma(e) { var t = Pa(),
                        n = t.queue; if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = e; var i = ma,
                        r = i.baseQueue,
                        a = n.pending; if (null !== a) { if (null !== r) { var s = r.next;
                            r.next = a.next, a.next = s } i.baseQueue = r = a, n.pending = null } if (null !== r) { a = r.next, i = i.baseState; var l = s = null,
                            u = null,
                            c = a;
                        do { var d = c.lane; if ((pa & d) === d) null !== u && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), i = c.hasEagerState ? c.eagerState : e(i, c.action);
                            else { var h = { lane: d, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
                                null === u ? (l = u = h, s = i) : u = u.next = h, va.lanes |= d, Fl |= d } c = c.next } while (null !== c && c !== a);
                        null === u ? s = i : u.next = l, si(i, t.memoizedState) || (ws = !0), t.memoizedState = i, t.baseState = s, t.baseQueue = u, n.lastRenderedState = i } if (null !== (e = n.interleaved)) { r = e;
                        do { a = r.lane, va.lanes |= a, Fl |= a, r = r.next } while (r !== e) } else null === r && (n.lanes = 0); return [t.memoizedState, n.dispatch] }

                function Ta(e) { var t = Pa(),
                        n = t.queue; if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = e; var i = n.dispatch,
                        r = n.pending,
                        a = t.memoizedState; if (null !== r) { n.pending = null; var s = r = r.next;
                        do { a = e(a, s.action), s = s.next } while (s !== r);
                        si(a, t.memoizedState) || (ws = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a } return [a, i] }

                function Oa() {}

                function La(e, t) { var n = va,
                        i = Pa(),
                        r = t(),
                        a = !si(i.memoizedState, r); if (a && (i.memoizedState = r, ws = !0), i = i.queue, Wa(Ia.bind(null, n, i, e), [e]), i.getSnapshot !== t || a || null !== ga && 1 & ga.memoizedState.tag) { if (n.flags |= 2048, Va(9, Da.bind(null, n, i, r, t), void 0, null), null === Tl) throw Error(o(349));
                        0 !== (30 & pa) || Ra(n, t, r) } return r }

                function Ra(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, null === (t = va.updateQueue) ? (t = { lastEffect: null, stores: null }, va.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e) }

                function Da(e, t, n, i) { t.value = n, t.getSnapshot = i, Na(t) && Fa(e) }

                function Ia(e, t, n) { return n((function() { Na(t) && Fa(e) })) }

                function Na(e) { var t = e.getSnapshot;
                    e = e.value; try { var n = t(); return !si(e, n) } catch (i) { return !0 } }

                function Fa(e) { var t = To(e, 1);
                    null !== t && iu(t, e, 1, -1) }

                function Aa(e) { var t = Ca(); return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ea, lastRenderedState: e }, t.queue = e, e = e.dispatch = ns.bind(null, va, e), [t.memoizedState, e] }

                function Va(e, t, n, i) { return e = { tag: e, create: t, destroy: n, deps: i, next: null }, null === (t = va.updateQueue) ? (t = { lastEffect: null, stores: null }, va.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e), e }

                function Ua() { return Pa().memoizedState }

                function Ba(e, t, n, i) { var r = Ca();
                    va.flags |= e, r.memoizedState = Va(1 | t, n, void 0, void 0 === i ? null : i) }

                function Ha(e, t, n, i) { var r = Pa();
                    i = void 0 === i ? null : i; var o = void 0; if (null !== ma) { var a = ma.memoizedState; if (o = a.destroy, null !== i && xa(i, a.deps)) return void(r.memoizedState = Va(t, n, o, i)) } va.flags |= e, r.memoizedState = Va(1 | t, n, o, i) }

                function ja(e, t) { return Ba(8390656, 8, e, t) }

                function Wa(e, t) { return Ha(2048, 8, e, t) }

                function $a(e, t) { return Ha(4, 2, e, t) }

                function Qa(e, t) { return Ha(4, 4, e, t) }

                function qa(e, t) { return "function" === typeof t ? (e = e(), t(e), function() { t(null) }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() { t.current = null }) : void 0 }

                function Ya(e, t, n) { return n = null !== n && void 0 !== n ? n.concat([e]) : null, Ha(4, 4, qa.bind(null, t, e), n) }

                function Ga() {}

                function Xa(e, t) { var n = Pa();
                    t = void 0 === t ? null : t; var i = n.memoizedState; return null !== i && null !== t && xa(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e) }

                function Ka(e, t) { var n = Pa();
                    t = void 0 === t ? null : t; var i = n.memoizedState; return null !== i && null !== t && xa(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e) }

                function Za(e, t, n) { return 0 === (21 & pa) ? (e.baseState && (e.baseState = !1, ws = !0), e.memoizedState = n) : (si(n, t) || (n = vt(), va.lanes |= n, Fl |= n, e.baseState = !0), t) }

                function Ja(e, t) { var n = bt;
                    bt = 0 !== n && 4 > n ? n : 4, e(!0); var i = fa.transition;
                    fa.transition = {}; try { e(!1), t() } finally { bt = n, fa.transition = i } }

                function es() { return Pa().memoizedState }

                function ts(e, t, n) { var i = nu(e); if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, is(e)) rs(t, n);
                    else if (null !== (n = Mo(e, t, n, i))) { iu(n, e, i, tu()), os(n, t, i) } }

                function ns(e, t, n) { var i = nu(e),
                        r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }; if (is(e)) rs(t, r);
                    else { var o = e.alternate; if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer)) try { var a = t.lastRenderedState,
                                s = o(a, n); if (r.hasEagerState = !0, r.eagerState = s, si(s, a)) { var l = t.interleaved; return null === l ? (r.next = r, Eo(t)) : (r.next = l.next, l.next = r), void(t.interleaved = r) } } catch (u) {} null !== (n = Mo(e, t, r, i)) && (iu(n, e, i, r = tu()), os(n, t, i)) } }

                function is(e) { var t = e.alternate; return e === va || null !== t && t === va }

                function rs(e, t) { ba = ya = !0; var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t }

                function os(e, t, n) { if (0 !== (4194240 & n)) { var i = t.lanes;
                        n |= i &= e.pendingLanes, t.lanes = n, yt(e, n) } } var as = { readContext: Co, useCallback: ka, useContext: ka, useEffect: ka, useImperativeHandle: ka, useInsertionEffect: ka, useLayoutEffect: ka, useMemo: ka, useReducer: ka, useRef: ka, useState: ka, useDebugValue: ka, useDeferredValue: ka, useTransition: ka, useMutableSource: ka, useSyncExternalStore: ka, useId: ka, unstable_isNewReconciler: !1 },
                    ss = { readContext: Co, useCallback: function(e, t) { return Ca().memoizedState = [e, void 0 === t ? null : t], e }, useContext: Co, useEffect: ja, useImperativeHandle: function(e, t, n) { return n = null !== n && void 0 !== n ? n.concat([e]) : null, Ba(4194308, 4, qa.bind(null, t, e), n) }, useLayoutEffect: function(e, t) { return Ba(4194308, 4, e, t) }, useInsertionEffect: function(e, t) { return Ba(4, 2, e, t) }, useMemo: function(e, t) { var n = Ca(); return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e }, useReducer: function(e, t, n) { var i = Ca(); return t = void 0 !== n ? n(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = ts.bind(null, va, e), [i.memoizedState, e] }, useRef: function(e) { return e = { current: e }, Ca().memoizedState = e }, useState: Aa, useDebugValue: Ga, useDeferredValue: function(e) { return Ca().memoizedState = e }, useTransition: function() { var e = Aa(!1),
                                t = e[0]; return e = Ja.bind(null, e[1]), Ca().memoizedState = e, [t, e] }, useMutableSource: function() {}, useSyncExternalStore: function(e, t, n) { var i = va,
                                r = Ca(); if (ro) { if (void 0 === n) throw Error(o(407));
                                n = n() } else { if (n = t(), null === Tl) throw Error(o(349));
                                0 !== (30 & pa) || Ra(i, t, n) } r.memoizedState = n; var a = { value: n, getSnapshot: t }; return r.queue = a, ja(Ia.bind(null, i, a, e), [e]), i.flags |= 2048, Va(9, Da.bind(null, i, a, n, t), void 0, null), n }, useId: function() { var e = Ca(),
                                t = Tl.identifierPrefix; if (ro) { var n = Kr;
                                t = ":" + t + "R" + (n = (Xr & ~(1 << 32 - at(Xr) - 1)).toString(32) + n), 0 < (n = wa++) && (t += "H" + n.toString(32)), t += ":" } else t = ":" + t + "r" + (n = _a++).toString(32) + ":"; return e.memoizedState = t }, unstable_isNewReconciler: !1 },
                    ls = { readContext: Co, useCallback: Xa, useContext: Co, useEffect: Wa, useImperativeHandle: Ya, useInsertionEffect: $a, useLayoutEffect: Qa, useMemo: Ka, useReducer: Ma, useRef: Ua, useState: function() { return Ma(Ea) }, useDebugValue: Ga, useDeferredValue: function(e) { return Za(Pa(), ma.memoizedState, e) }, useTransition: function() { return [Ma(Ea)[0], Pa().memoizedState] }, useMutableSource: Oa, useSyncExternalStore: La, useId: es, unstable_isNewReconciler: !1 },
                    us = { readContext: Co, useCallback: Xa, useContext: Co, useEffect: Wa, useImperativeHandle: Ya, useInsertionEffect: $a, useLayoutEffect: Qa, useMemo: Ka, useReducer: Ta, useRef: Ua, useState: function() { return Ta(Ea) }, useDebugValue: Ga, useDeferredValue: function(e) { var t = Pa(); return null === ma ? t.memoizedState = e : Za(t, ma.memoizedState, e) }, useTransition: function() { return [Ta(Ea)[0], Pa().memoizedState] }, useMutableSource: Oa, useSyncExternalStore: La, useId: es, unstable_isNewReconciler: !1 };

                function cs(e, t) { try { var n = "",
                            i = t;
                        do { n += B(i), i = i.return } while (i); var r = n } catch (o) { r = "\nError generating stack: " + o.message + "\n" + o.stack } return { value: e, source: t, stack: r, digest: null } }

                function ds(e, t, n) { return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null } }

                function hs(e, t) { try { console.error(t.value) } catch (n) { setTimeout((function() { throw n })) } } var fs = "function" === typeof WeakMap ? WeakMap : Map;

                function ps(e, t, n) {
                    (n = Do(-1, n)).tag = 3, n.payload = { element: null }; var i = t.value; return n.callback = function() { $l || ($l = !0, Ql = i), hs(0, t) }, n }

                function vs(e, t, n) {
                    (n = Do(-1, n)).tag = 3; var i = e.type.getDerivedStateFromError; if ("function" === typeof i) { var r = t.value;
                        n.payload = function() { return i(r) }, n.callback = function() { hs(0, t) } } var o = e.stateNode; return null !== o && "function" === typeof o.componentDidCatch && (n.callback = function() { hs(0, t), "function" !== typeof i && (null === ql ? ql = new Set([this]) : ql.add(this)); var e = t.stack;
                        this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" }) }), n }

                function ms(e, t, n) { var i = e.pingCache; if (null === i) { i = e.pingCache = new fs; var r = new Set;
                        i.set(t, r) } else void 0 === (r = i.get(t)) && (r = new Set, i.set(t, r));
                    r.has(n) || (r.add(n), e = Cu.bind(null, e, t, n), t.then(e, e)) }

                function gs(e) { do { var t; if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                        e = e.return } while (null !== e); return null }

                function ys(e, t, n, i, r) { return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Do(-1, 1)).tag = 2, Io(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = r, e) } var bs = w.ReactCurrentOwner,
                    ws = !1;

                function _s(e, t, n, i) { t.child = null === e ? Zo(t, null, n, i) : Ko(t, e.child, n, i) }

                function ks(e, t, n, i, r) { n = n.render; var o = t.ref; return zo(t, r), i = Sa(e, t, n, i, o, r), n = za(), null === e || ws ? (ro && n && eo(t), t.flags |= 1, _s(e, t, i, r), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~r, $s(e, t, r)) }

                function xs(e, t, n, i, r) { if (null === e) { var o = n.type; return "function" !== typeof o || Ru(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Iu(n.type, null, i, t, t.mode, r)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, Ss(e, t, o, i, r)) } if (o = e.child, 0 === (e.lanes & r)) { var a = o.memoizedProps; if ((n = null !== (n = n.compare) ? n : li)(a, i) && e.ref === t.ref) return $s(e, t, r) } return t.flags |= 1, (e = Du(o, i)).ref = t.ref, e.return = t, t.child = e }

                function Ss(e, t, n, i, r) { if (null !== e) { var o = e.memoizedProps; if (li(o, i) && e.ref === t.ref) { if (ws = !1, t.pendingProps = i = o, 0 === (e.lanes & r)) return t.lanes = e.lanes, $s(e, t, r);
                            0 !== (131072 & e.flags) && (ws = !0) } } return Ps(e, t, n, i, r) }

                function zs(e, t, n) { var i = t.pendingProps,
                        r = i.children,
                        o = null !== e ? e.memoizedState : null; if ("hidden" === i.mode)
                        if (0 === (1 & t.mode)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Cr(Dl, Rl), Rl |= n;
                        else { if (0 === (1073741824 & n)) return e = null !== o ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Cr(Dl, Rl), Rl |= e, null;
                            t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = null !== o ? o.baseLanes : n, Cr(Dl, Rl), Rl |= i } else null !== o ? (i = o.baseLanes | n, t.memoizedState = null) : i = n, Cr(Dl, Rl), Rl |= i; return _s(e, t, r, n), t.child }

                function Cs(e, t) { var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152) }

                function Ps(e, t, n, i, r) { var o = Lr(n) ? Tr : Er.current; return o = Or(t, o), zo(t, r), n = Sa(e, t, n, i, o, r), i = za(), null === e || ws ? (ro && i && eo(t), t.flags |= 1, _s(e, t, n, r), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~r, $s(e, t, r)) }

                function Es(e, t, n, i, r) { if (Lr(n)) { var o = !0;
                        Nr(t) } else o = !1; if (zo(t, r), null === t.stateNode) Ws(e, t), Wo(t, n, i), Qo(t, n, i, r), i = !0;
                    else if (null === e) { var a = t.stateNode,
                            s = t.memoizedProps;
                        a.props = s; var l = a.context,
                            u = n.contextType; "object" === typeof u && null !== u ? u = Co(u) : u = Or(t, u = Lr(n) ? Tr : Er.current); var c = n.getDerivedStateFromProps,
                            d = "function" === typeof c || "function" === typeof a.getSnapshotBeforeUpdate;
                        d || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (s !== i || l !== u) && $o(t, a, i, u), Oo = !1; var h = t.memoizedState;
                        a.state = h, Ao(t, i, a, r), l = t.memoizedState, s !== i || h !== l || Mr.current || Oo ? ("function" === typeof c && (Bo(t, n, c, i), l = t.memoizedState), (s = Oo || jo(t, n, s, i, h, l, u)) ? (d || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || ("function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" === typeof a.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof a.componentDidMount && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = l), a.props = i, a.state = l, a.context = u, i = s) : ("function" === typeof a.componentDidMount && (t.flags |= 4194308), i = !1) } else { a = t.stateNode, Ro(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : go(t.type, s), a.props = u, d = t.pendingProps, h = a.context, "object" === typeof(l = n.contextType) && null !== l ? l = Co(l) : l = Or(t, l = Lr(n) ? Tr : Er.current); var f = n.getDerivedStateFromProps;
                        (c = "function" === typeof f || "function" === typeof a.getSnapshotBeforeUpdate) || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (s !== d || h !== l) && $o(t, a, i, l), Oo = !1, h = t.memoizedState, a.state = h, Ao(t, i, a, r); var p = t.memoizedState;
                        s !== d || h !== p || Mr.current || Oo ? ("function" === typeof f && (Bo(t, n, f, i), p = t.memoizedState), (u = Oo || jo(t, n, u, i, h, p, l) || !1) ? (c || "function" !== typeof a.UNSAFE_componentWillUpdate && "function" !== typeof a.componentWillUpdate || ("function" === typeof a.componentWillUpdate && a.componentWillUpdate(i, p, l), "function" === typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(i, p, l)), "function" === typeof a.componentDidUpdate && (t.flags |= 4), "function" === typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof a.componentDidUpdate || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = p), a.props = i, a.state = p, a.context = l, i = u) : ("function" !== typeof a.componentDidUpdate || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), i = !1) } return Ms(e, t, n, i, o, r) }

                function Ms(e, t, n, i, r, o) { Cs(e, t); var a = 0 !== (128 & t.flags); if (!i && !a) return r && Fr(t, n, !1), $s(e, t, o);
                    i = t.stateNode, bs.current = t; var s = a && "function" !== typeof n.getDerivedStateFromError ? null : i.render(); return t.flags |= 1, null !== e && a ? (t.child = Ko(t, e.child, null, o), t.child = Ko(t, null, s, o)) : _s(e, t, s, o), t.memoizedState = i.state, r && Fr(t, n, !0), t.child }

                function Ts(e) { var t = e.stateNode;
                    t.pendingContext ? Dr(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Dr(0, t.context, !1), ra(e, t.containerInfo) }

                function Os(e, t, n, i, r) { return po(), vo(r), t.flags |= 256, _s(e, t, n, i), t.child } var Ls, Rs, Ds, Is, Ns = { dehydrated: null, treeContext: null, retryLane: 0 };

                function Fs(e) { return { baseLanes: e, cachePool: null, transitions: null } }

                function As(e, t, n) { var i, r = t.pendingProps,
                        a = la.current,
                        s = !1,
                        l = 0 !== (128 & t.flags); if ((i = l) || (i = (null === e || null !== e.memoizedState) && 0 !== (2 & a)), i ? (s = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (a |= 1), Cr(la, 1 & a), null === e) return uo(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, l = { mode: "hidden", children: l }, 0 === (1 & r) && null !== s ? (s.childLanes = 0, s.pendingProps = l) : s = Fu(l, r, 0, null), e = Nu(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Fs(n), t.memoizedState = Ns, e) : Vs(t, l)); if (null !== (a = e.memoizedState) && null !== (i = a.dehydrated)) return function(e, t, n, i, r, a, s) { if (n) return 256 & t.flags ? (t.flags &= -257, Us(e, t, s, i = ds(Error(o(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (a = i.fallback, r = t.mode, i = Fu({ mode: "visible", children: i.children }, r, 0, null), (a = Nu(a, r, s, null)).flags |= 2, i.return = t, a.return = t, i.sibling = a, t.child = i, 0 !== (1 & t.mode) && Ko(t, e.child, null, s), t.child.memoizedState = Fs(s), t.memoizedState = Ns, a); if (0 === (1 & t.mode)) return Us(e, t, s, null); if ("$!" === r.data) { if (i = r.nextSibling && r.nextSibling.dataset) var l = i.dgst; return i = l, Us(e, t, s, i = ds(a = Error(o(419)), i, void 0)) } if (l = 0 !== (s & e.childLanes), ws || l) { if (null !== (i = Tl)) { switch (s & -s) {
                                    case 4:
                                        r = 2; break;
                                    case 16:
                                        r = 8; break;
                                    case 64:
                                    case 128:
                                    case 256:
                                    case 512:
                                    case 1024:
                                    case 2048:
                                    case 4096:
                                    case 8192:
                                    case 16384:
                                    case 32768:
                                    case 65536:
                                    case 131072:
                                    case 262144:
                                    case 524288:
                                    case 1048576:
                                    case 2097152:
                                    case 4194304:
                                    case 8388608:
                                    case 16777216:
                                    case 33554432:
                                    case 67108864:
                                        r = 32; break;
                                    case 536870912:
                                        r = 268435456; break;
                                    default:
                                        r = 0 } 0 !== (r = 0 !== (r & (i.suspendedLanes | s)) ? 0 : r) && r !== a.retryLane && (a.retryLane = r, To(e, r), iu(i, e, r, -1)) } return mu(), Us(e, t, s, i = ds(Error(o(421)))) } return "$?" === r.data ? (t.flags |= 128, t.child = e.child, t = Eu.bind(null, e), r._reactRetry = t, null) : (e = a.treeContext, io = ur(r.nextSibling), no = t, ro = !0, oo = null, null !== e && (qr[Yr++] = Xr, qr[Yr++] = Kr, qr[Yr++] = Gr, Xr = e.id, Kr = e.overflow, Gr = t), t = Vs(t, i.children), t.flags |= 4096, t) }(e, t, l, r, i, a, n); if (s) { s = r.fallback, l = t.mode, i = (a = e.child).sibling; var u = { mode: "hidden", children: r.children }; return 0 === (1 & l) && t.child !== a ? ((r = t.child).childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Du(a, u)).subtreeFlags = 14680064 & a.subtreeFlags, null !== i ? s = Du(i, s) : (s = Nu(s, l, n, null)).flags |= 2, s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, l = null === (l = e.child.memoizedState) ? Fs(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, s.memoizedState = l, s.childLanes = e.childLanes & ~n, t.memoizedState = Ns, r } return e = (s = e.child).sibling, r = Du(s, { mode: "visible", children: r.children }), 0 === (1 & t.mode) && (r.lanes = n), r.return = t, r.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r }

                function Vs(e, t) { return (t = Fu({ mode: "visible", children: t }, e.mode, 0, null)).return = e, e.child = t }

                function Us(e, t, n, i) { return null !== i && vo(i), Ko(t, e.child, null, n), (e = Vs(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e }

                function Bs(e, t, n) { e.lanes |= t; var i = e.alternate;
                    null !== i && (i.lanes |= t), So(e.return, t, n) }

                function Hs(e, t, n, i, r) { var o = e.memoizedState;
                    null === o ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: r } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = i, o.tail = n, o.tailMode = r) }

                function js(e, t, n) { var i = t.pendingProps,
                        r = i.revealOrder,
                        o = i.tail; if (_s(e, t, i.children, n), 0 !== (2 & (i = la.current))) i = 1 & i | 2, t.flags |= 128;
                    else { if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) { if (13 === e.tag) null !== e.memoizedState && Bs(e, n, t);
                            else if (19 === e.tag) Bs(e, n, t);
                            else if (null !== e.child) { e.child.return = e, e = e.child; continue } if (e === t) break e; for (; null === e.sibling;) { if (null === e.return || e.return === t) break e;
                                e = e.return } e.sibling.return = e.return, e = e.sibling } i &= 1 } if (Cr(la, i), 0 === (1 & t.mode)) t.memoizedState = null;
                    else switch (r) {
                        case "forwards":
                            for (n = t.child, r = null; null !== n;) null !== (e = n.alternate) && null === ua(e) && (r = n), n = n.sibling;
                            null === (n = r) ? (r = t.child, t.child = null) : (r = n.sibling, n.sibling = null), Hs(t, !1, r, n, o); break;
                        case "backwards":
                            for (n = null, r = t.child, t.child = null; null !== r;) { if (null !== (e = r.alternate) && null === ua(e)) { t.child = r; break } e = r.sibling, r.sibling = n, n = r, r = e } Hs(t, !0, n, null, o); break;
                        case "together":
                            Hs(t, !1, null, null, void 0); break;
                        default:
                            t.memoizedState = null }
                    return t.child }

                function Ws(e, t) { 0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2) }

                function $s(e, t, n) { if (null !== e && (t.dependencies = e.dependencies), Fl |= t.lanes, 0 === (n & t.childLanes)) return null; if (null !== e && t.child !== e.child) throw Error(o(153)); if (null !== t.child) { for (n = Du(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Du(e, e.pendingProps)).return = t;
                        n.sibling = null } return t.child }

                function Qs(e, t) { if (!ro) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail; for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null; break;
                        case "collapsed":
                            n = e.tail; for (var i = null; null !== n;) null !== n.alternate && (i = n), n = n.sibling;
                            null === i ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : i.sibling = null } }

                function qs(e) { var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        i = 0; if (t)
                        for (var r = e.child; null !== r;) n |= r.lanes | r.childLanes, i |= 14680064 & r.subtreeFlags, i |= 14680064 & r.flags, r.return = e, r = r.sibling;
                    else
                        for (r = e.child; null !== r;) n |= r.lanes | r.childLanes, i |= r.subtreeFlags, i |= r.flags, r.return = e, r = r.sibling; return e.subtreeFlags |= i, e.childLanes = n, t }

                function Ys(e, t, n) { var i = t.pendingProps; switch (to(t), t.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return qs(t), null;
                        case 1:
                        case 17:
                            return Lr(t.type) && Rr(), qs(t), null;
                        case 3:
                            return i = t.stateNode, oa(), zr(Mr), zr(Er), da(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), null !== e && null !== e.child || (ho(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== oo && (su(oo), oo = null))), Rs(e, t), qs(t), null;
                        case 5:
                            sa(t); var r = ia(na.current); if (n = t.type, null !== e && null != t.stateNode) Ds(e, t, n, i, r), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                            else { if (!i) { if (null === t.stateNode) throw Error(o(166)); return qs(t), null } if (e = ia(ea.current), ho(t)) { i = t.stateNode, n = t.type; var a = t.memoizedProps; switch (i[hr] = t, i[fr] = a, e = 0 !== (1 & t.mode), n) {
                                        case "dialog":
                                            Vi("cancel", i), Vi("close", i); break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Vi("load", i); break;
                                        case "video":
                                        case "audio":
                                            for (r = 0; r < Ii.length; r++) Vi(Ii[r], i); break;
                                        case "source":
                                            Vi("error", i); break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Vi("error", i), Vi("load", i); break;
                                        case "details":
                                            Vi("toggle", i); break;
                                        case "input":
                                            X(i, a), Vi("invalid", i); break;
                                        case "select":
                                            i._wrapperState = { wasMultiple: !!a.multiple }, Vi("invalid", i); break;
                                        case "textarea":
                                            re(i, a), Vi("invalid", i) } for (var l in ye(n, a), r = null, a)
                                        if (a.hasOwnProperty(l)) { var u = a[l]; "children" === l ? "string" === typeof u ? i.textContent !== u && (!0 !== a.suppressHydrationWarning && Zi(i.textContent, u, e), r = ["children", u]) : "number" === typeof u && i.textContent !== "" + u && (!0 !== a.suppressHydrationWarning && Zi(i.textContent, u, e), r = ["children", "" + u]) : s.hasOwnProperty(l) && null != u && "onScroll" === l && Vi("scroll", i) } switch (n) {
                                        case "input":
                                            Q(i), J(i, a, !0); break;
                                        case "textarea":
                                            Q(i), ae(i); break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof a.onClick && (i.onclick = Ji) } i = r, t.updateQueue = i, null !== i && (t.flags |= 4) } else { l = 9 === r.nodeType ? r : r.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = se(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof i.is ? e = l.createElement(n, { is: i.is }) : (e = l.createElement(n), "select" === n && (l = e, i.multiple ? l.multiple = !0 : i.size && (l.size = i.size))) : e = l.createElementNS(e, n), e[hr] = t, e[fr] = i, Ls(e, t, !1, !1), t.stateNode = e;
                                    e: { switch (l = be(n, i), n) {
                                            case "dialog":
                                                Vi("cancel", e), Vi("close", e), r = i; break;
                                            case "iframe":
                                            case "object":
                                            case "embed":
                                                Vi("load", e), r = i; break;
                                            case "video":
                                            case "audio":
                                                for (r = 0; r < Ii.length; r++) Vi(Ii[r], e);
                                                r = i; break;
                                            case "source":
                                                Vi("error", e), r = i; break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                Vi("error", e), Vi("load", e), r = i; break;
                                            case "details":
                                                Vi("toggle", e), r = i; break;
                                            case "input":
                                                X(e, i), r = G(e, i), Vi("invalid", e); break;
                                            case "option":
                                            default:
                                                r = i; break;
                                            case "select":
                                                e._wrapperState = { wasMultiple: !!i.multiple }, r = F({}, i, { value: void 0 }), Vi("invalid", e); break;
                                            case "textarea":
                                                re(e, i), r = ie(e, i), Vi("invalid", e) } for (a in ye(n, r), u = r)
                                            if (u.hasOwnProperty(a)) { var c = u[a]; "style" === a ? me(e, c) : "dangerouslySetInnerHTML" === a ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === a ? "string" === typeof c ? ("textarea" !== n || "" !== c) && he(e, c) : "number" === typeof c && he(e, "" + c) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (s.hasOwnProperty(a) ? null != c && "onScroll" === a && Vi("scroll", e) : null != c && b(e, a, c, l)) } switch (n) {
                                            case "input":
                                                Q(e), J(e, i, !1); break;
                                            case "textarea":
                                                Q(e), ae(e); break;
                                            case "option":
                                                null != i.value && e.setAttribute("value", "" + W(i.value)); break;
                                            case "select":
                                                e.multiple = !!i.multiple, null != (a = i.value) ? ne(e, !!i.multiple, a, !1) : null != i.defaultValue && ne(e, !!i.multiple, i.defaultValue, !0); break;
                                            default:
                                                "function" === typeof r.onClick && (e.onclick = Ji) } switch (n) {
                                            case "button":
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                i = !!i.autoFocus; break e;
                                            case "img":
                                                i = !0; break e;
                                            default:
                                                i = !1 } } i && (t.flags |= 4) } null !== t.ref && (t.flags |= 512, t.flags |= 2097152) } return qs(t), null;
                        case 6:
                            if (e && null != t.stateNode) Is(e, t, e.memoizedProps, i);
                            else { if ("string" !== typeof i && null === t.stateNode) throw Error(o(166)); if (n = ia(na.current), ia(ea.current), ho(t)) { if (i = t.stateNode, n = t.memoizedProps, i[hr] = t, (a = i.nodeValue !== n) && null !== (e = no)) switch (e.tag) {
                                        case 3:
                                            Zi(i.nodeValue, n, 0 !== (1 & e.mode)); break;
                                        case 5:
                                            !0 !== e.memoizedProps.suppressHydrationWarning && Zi(i.nodeValue, n, 0 !== (1 & e.mode)) } a && (t.flags |= 4) } else(i = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(i))[hr] = t, t.stateNode = i } return qs(t), null;
                        case 13:
                            if (zr(la), i = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) { if (ro && null !== io && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) fo(), po(), t.flags |= 98560, a = !1;
                                else if (a = ho(t), null !== i && null !== i.dehydrated) { if (null === e) { if (!a) throw Error(o(318)); if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(o(317));
                                        a[hr] = t } else po(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    qs(t), a = !1 } else null !== oo && (su(oo), oo = null), a = !0; if (!a) return 65536 & t.flags ? t : null } return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((i = null !== i) !== (null !== e && null !== e.memoizedState) && i && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & la.current) ? 0 === Il && (Il = 3) : mu())), null !== t.updateQueue && (t.flags |= 4), qs(t), null);
                        case 4:
                            return oa(), Rs(e, t), null === e && Hi(t.stateNode.containerInfo), qs(t), null;
                        case 10:
                            return xo(t.type._context), qs(t), null;
                        case 19:
                            if (zr(la), null === (a = t.memoizedState)) return qs(t), null; if (i = 0 !== (128 & t.flags), null === (l = a.rendering))
                                if (i) Qs(a, !1);
                                else { if (0 !== Il || null !== e && 0 !== (128 & e.flags))
                                        for (e = t.child; null !== e;) { if (null !== (l = ua(e))) { for (t.flags |= 128, Qs(a, !1), null !== (i = l.updateQueue) && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; null !== n;) e = i, (a = n).flags &= 14680066, null === (l = a.alternate) ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, a.type = l.type, e = l.dependencies, a.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling; return Cr(la, 1 & la.current | 2), t.child } e = e.sibling } null !== a.tail && Ke() > jl && (t.flags |= 128, i = !0, Qs(a, !1), t.lanes = 4194304) } else { if (!i)
                                    if (null !== (e = ua(l))) { if (t.flags |= 128, i = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Qs(a, !0), null === a.tail && "hidden" === a.tailMode && !l.alternate && !ro) return qs(t), null } else 2 * Ke() - a.renderingStartTime > jl && 1073741824 !== n && (t.flags |= 128, i = !0, Qs(a, !1), t.lanes = 4194304);
                                a.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = a.last) ? n.sibling = l : t.child = l, a.last = l) } return null !== a.tail ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ke(), t.sibling = null, n = la.current, Cr(la, i ? 1 & n | 2 : 1 & n), t) : (qs(t), null);
                        case 22:
                        case 23:
                            return hu(), i = null !== t.memoizedState, null !== e && null !== e.memoizedState !== i && (t.flags |= 8192), i && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Rl) && (qs(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : qs(t), null;
                        case 24:
                        case 25:
                            return null } throw Error(o(156, t.tag)) }

                function Gs(e, t) { switch (to(t), t.tag) {
                        case 1:
                            return Lr(t.type) && Rr(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 3:
                            return oa(), zr(Mr), zr(Er), da(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                        case 5:
                            return sa(t), null;
                        case 13:
                            if (zr(la), null !== (e = t.memoizedState) && null !== e.dehydrated) { if (null === t.alternate) throw Error(o(340));
                                po() } return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 19:
                            return zr(la), null;
                        case 4:
                            return oa(), null;
                        case 10:
                            return xo(t.type._context), null;
                        case 22:
                        case 23:
                            return hu(), null;
                        default:
                            return null } } Ls = function(e, t) { for (var n = t.child; null !== n;) { if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) { n.child.return = n, n = n.child; continue } if (n === t) break; for (; null === n.sibling;) { if (null === n.return || n.return === t) return;
                            n = n.return } n.sibling.return = n.return, n = n.sibling } }, Rs = function() {}, Ds = function(e, t, n, i) { var r = e.memoizedProps; if (r !== i) { e = t.stateNode, ia(ea.current); var o, a = null; switch (n) {
                            case "input":
                                r = G(e, r), i = G(e, i), a = []; break;
                            case "select":
                                r = F({}, r, { value: void 0 }), i = F({}, i, { value: void 0 }), a = []; break;
                            case "textarea":
                                r = ie(e, r), i = ie(e, i), a = []; break;
                            default:
                                "function" !== typeof r.onClick && "function" === typeof i.onClick && (e.onclick = Ji) } for (c in ye(n, i), n = null, r)
                            if (!i.hasOwnProperty(c) && r.hasOwnProperty(c) && null != r[c])
                                if ("style" === c) { var l = r[c]; for (o in l) l.hasOwnProperty(o) && (n || (n = {}), n[o] = "") } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (s.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null)); for (c in i) { var u = i[c]; if (l = null != r ? r[c] : void 0, i.hasOwnProperty(c) && u !== l && (null != u || null != l))
                                if ("style" === c)
                                    if (l) { for (o in l) !l.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}), n[o] = ""); for (o in u) u.hasOwnProperty(o) && l[o] !== u[o] && (n || (n = {}), n[o] = u[o]) } else n || (a || (a = []), a.push(c, n)), n = u;
                            else "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, null != u && l !== u && (a = a || []).push(c, u)) : "children" === c ? "string" !== typeof u && "number" !== typeof u || (a = a || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (s.hasOwnProperty(c) ? (null != u && "onScroll" === c && Vi("scroll", e), a || l === u || (a = [])) : (a = a || []).push(c, u)) } n && (a = a || []).push("style", n); var c = a;
                        (t.updateQueue = c) && (t.flags |= 4) } }, Is = function(e, t, n, i) { n !== i && (t.flags |= 4) }; var Xs = !1,
                    Ks = !1,
                    Zs = "function" === typeof WeakSet ? WeakSet : Set,
                    Js = null;

                function el(e, t) { var n = e.ref; if (null !== n)
                        if ("function" === typeof n) try { n(null) } catch (i) { zu(e, t, i) } else n.current = null }

                function tl(e, t, n) { try { n() } catch (i) { zu(e, t, i) } } var nl = !1;

                function il(e, t, n) { var i = t.updateQueue; if (null !== (i = null !== i ? i.lastEffect : null)) { var r = i = i.next;
                        do { if ((r.tag & e) === e) { var o = r.destroy;
                                r.destroy = void 0, void 0 !== o && tl(t, n, o) } r = r.next } while (r !== i) } }

                function rl(e, t) { if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) { var n = t = t.next;
                        do { if ((n.tag & e) === e) { var i = n.create;
                                n.destroy = i() } n = n.next } while (n !== t) } }

                function ol(e) { var t = e.ref; if (null !== t) { var n = e.stateNode;
                        e.tag, e = n, "function" === typeof t ? t(e) : t.current = e } }

                function al(e) { var t = e.alternate;
                    null !== t && (e.alternate = null, al(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[hr], delete t[fr], delete t[vr], delete t[mr], delete t[gr])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null }

                function sl(e) { return 5 === e.tag || 3 === e.tag || 4 === e.tag }

                function ll(e) { e: for (;;) { for (; null === e.sibling;) { if (null === e.return || sl(e.return)) return null;
                            e = e.return } for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) { if (2 & e.flags) continue e; if (null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child } if (!(2 & e.flags)) return e.stateNode } }

                function ul(e, t, n) { var i = e.tag; if (5 === i || 6 === i) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Ji));
                    else if (4 !== i && null !== (e = e.child))
                        for (ul(e, t, n), e = e.sibling; null !== e;) ul(e, t, n), e = e.sibling }

                function cl(e, t, n) { var i = e.tag; if (5 === i || 6 === i) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== i && null !== (e = e.child))
                        for (cl(e, t, n), e = e.sibling; null !== e;) cl(e, t, n), e = e.sibling } var dl = null,
                    hl = !1;

                function fl(e, t, n) { for (n = n.child; null !== n;) pl(e, t, n), n = n.sibling }

                function pl(e, t, n) { if (ot && "function" === typeof ot.onCommitFiberUnmount) try { ot.onCommitFiberUnmount(rt, n) } catch (s) {}
                    switch (n.tag) {
                        case 5:
                            Ks || el(n, t);
                        case 6:
                            var i = dl,
                                r = hl;
                            dl = null, fl(e, t, n), hl = r, null !== (dl = i) && (hl ? (e = dl, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : dl.removeChild(n.stateNode)); break;
                        case 18:
                            null !== dl && (hl ? (e = dl, n = n.stateNode, 8 === e.nodeType ? lr(e.parentNode, n) : 1 === e.nodeType && lr(e, n), Ht(e)) : lr(dl, n.stateNode)); break;
                        case 4:
                            i = dl, r = hl, dl = n.stateNode.containerInfo, hl = !0, fl(e, t, n), dl = i, hl = r; break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (!Ks && (null !== (i = n.updateQueue) && null !== (i = i.lastEffect))) { r = i = i.next;
                                do { var o = r,
                                        a = o.destroy;
                                    o = o.tag, void 0 !== a && (0 !== (2 & o) || 0 !== (4 & o)) && tl(n, t, a), r = r.next } while (r !== i) } fl(e, t, n); break;
                        case 1:
                            if (!Ks && (el(n, t), "function" === typeof(i = n.stateNode).componentWillUnmount)) try { i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount() } catch (s) { zu(n, t, s) } fl(e, t, n); break;
                        case 21:
                            fl(e, t, n); break;
                        case 22:
                            1 & n.mode ? (Ks = (i = Ks) || null !== n.memoizedState, fl(e, t, n), Ks = i) : fl(e, t, n); break;
                        default:
                            fl(e, t, n) } }

                function vl(e) { var t = e.updateQueue; if (null !== t) { e.updateQueue = null; var n = e.stateNode;
                        null === n && (n = e.stateNode = new Zs), t.forEach((function(t) { var i = Mu.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(i, i)) })) } }

                function ml(e, t) { var n = t.deletions; if (null !== n)
                        for (var i = 0; i < n.length; i++) { var r = n[i]; try { var a = e,
                                    s = t,
                                    l = s;
                                e: for (; null !== l;) { switch (l.tag) {
                                        case 5:
                                            dl = l.stateNode, hl = !1; break e;
                                        case 3:
                                        case 4:
                                            dl = l.stateNode.containerInfo, hl = !0; break e } l = l.return }
                                if (null === dl) throw Error(o(160));
                                pl(a, s, r), dl = null, hl = !1; var u = r.alternate;
                                null !== u && (u.return = null), r.return = null } catch (c) { zu(r, t, c) } }
                    if (12854 & t.subtreeFlags)
                        for (t = t.child; null !== t;) gl(t, e), t = t.sibling }

                function gl(e, t) { var n = e.alternate,
                        i = e.flags; switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (ml(t, e), yl(e), 4 & i) { try { il(3, e, e.return), rl(3, e) } catch (m) { zu(e, e.return, m) } try { il(5, e, e.return) } catch (m) { zu(e, e.return, m) } } break;
                        case 1:
                            ml(t, e), yl(e), 512 & i && null !== n && el(n, n.return); break;
                        case 5:
                            if (ml(t, e), yl(e), 512 & i && null !== n && el(n, n.return), 32 & e.flags) { var r = e.stateNode; try { he(r, "") } catch (m) { zu(e, e.return, m) } } if (4 & i && null != (r = e.stateNode)) { var a = e.memoizedProps,
                                    s = null !== n ? n.memoizedProps : a,
                                    l = e.type,
                                    u = e.updateQueue; if (e.updateQueue = null, null !== u) try { "input" === l && "radio" === a.type && null != a.name && K(r, a), be(l, s); var c = be(l, a); for (s = 0; s < u.length; s += 2) { var d = u[s],
                                            h = u[s + 1]; "style" === d ? me(r, h) : "dangerouslySetInnerHTML" === d ? de(r, h) : "children" === d ? he(r, h) : b(r, d, h, c) } switch (l) {
                                        case "input":
                                            Z(r, a); break;
                                        case "textarea":
                                            oe(r, a); break;
                                        case "select":
                                            var f = r._wrapperState.wasMultiple;
                                            r._wrapperState.wasMultiple = !!a.multiple; var p = a.value;
                                            null != p ? ne(r, !!a.multiple, p, !1) : f !== !!a.multiple && (null != a.defaultValue ? ne(r, !!a.multiple, a.defaultValue, !0) : ne(r, !!a.multiple, a.multiple ? [] : "", !1)) } r[fr] = a } catch (m) { zu(e, e.return, m) } } break;
                        case 6:
                            if (ml(t, e), yl(e), 4 & i) { if (null === e.stateNode) throw Error(o(162));
                                r = e.stateNode, a = e.memoizedProps; try { r.nodeValue = a } catch (m) { zu(e, e.return, m) } } break;
                        case 3:
                            if (ml(t, e), yl(e), 4 & i && null !== n && n.memoizedState.isDehydrated) try { Ht(t.containerInfo) } catch (m) { zu(e, e.return, m) }
                            break;
                        case 4:
                        default:
                            ml(t, e), yl(e); break;
                        case 13:
                            ml(t, e), yl(e), 8192 & (r = e.child).flags && (a = null !== r.memoizedState, r.stateNode.isHidden = a, !a || null !== r.alternate && null !== r.alternate.memoizedState || (Hl = Ke())), 4 & i && vl(e); break;
                        case 22:
                            if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Ks = (c = Ks) || d, ml(t, e), Ks = c) : ml(t, e), yl(e), 8192 & i) { if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                                    for (Js = e, d = e.child; null !== d;) { for (h = Js = d; null !== Js;) { switch (p = (f = Js).child, f.tag) {
                                                case 0:
                                                case 11:
                                                case 14:
                                                case 15:
                                                    il(4, f, f.return); break;
                                                case 1:
                                                    el(f, f.return); var v = f.stateNode; if ("function" === typeof v.componentWillUnmount) { i = f, n = f.return; try { t = i, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount() } catch (m) { zu(i, n, m) } } break;
                                                case 5:
                                                    el(f, f.return); break;
                                                case 22:
                                                    if (null !== f.memoizedState) { kl(h); continue } } null !== p ? (p.return = f, Js = p) : kl(h) } d = d.sibling } e: for (d = null, h = e;;) { if (5 === h.tag) { if (null === d) { d = h; try { r = h.stateNode, c ? "function" === typeof(a = r.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none" : (l = h.stateNode, s = void 0 !== (u = h.memoizedProps.style) && null !== u && u.hasOwnProperty("display") ? u.display : null, l.style.display = ve("display", s)) } catch (m) { zu(e, e.return, m) } } } else if (6 === h.tag) { if (null === d) try { h.stateNode.nodeValue = c ? "" : h.memoizedProps } catch (m) { zu(e, e.return, m) } } else if ((22 !== h.tag && 23 !== h.tag || null === h.memoizedState || h === e) && null !== h.child) { h.child.return = h, h = h.child; continue } if (h === e) break e; for (; null === h.sibling;) { if (null === h.return || h.return === e) break e;
                                            d === h && (d = null), h = h.return } d === h && (d = null), h.sibling.return = h.return, h = h.sibling } } break;
                        case 19:
                            ml(t, e), yl(e), 4 & i && vl(e);
                        case 21:
                    } }

                function yl(e) { var t = e.flags; if (2 & t) { try { e: { for (var n = e.return; null !== n;) { if (sl(n)) { var i = n; break e } n = n.return } throw Error(o(160)) } switch (i.tag) {
                                case 5:
                                    var r = i.stateNode;
                                    32 & i.flags && (he(r, ""), i.flags &= -33), cl(e, ll(e), r); break;
                                case 3:
                                case 4:
                                    var a = i.stateNode.containerInfo;
                                    ul(e, ll(e), a); break;
                                default:
                                    throw Error(o(161)) } } catch (s) { zu(e, e.return, s) } e.flags &= -3 } 4096 & t && (e.flags &= -4097) }

                function bl(e, t, n) { Js = e, wl(e, t, n) }

                function wl(e, t, n) { for (var i = 0 !== (1 & e.mode); null !== Js;) { var r = Js,
                            o = r.child; if (22 === r.tag && i) { var a = null !== r.memoizedState || Xs; if (!a) { var s = r.alternate,
                                    l = null !== s && null !== s.memoizedState || Ks;
                                s = Xs; var u = Ks; if (Xs = a, (Ks = l) && !u)
                                    for (Js = r; null !== Js;) l = (a = Js).child, 22 === a.tag && null !== a.memoizedState ? xl(r) : null !== l ? (l.return = a, Js = l) : xl(r); for (; null !== o;) Js = o, wl(o, t, n), o = o.sibling;
                                Js = r, Xs = s, Ks = u } _l(e) } else 0 !== (8772 & r.subtreeFlags) && null !== o ? (o.return = r, Js = o) : _l(e) } }

                function _l(e) { for (; null !== Js;) { var t = Js; if (0 !== (8772 & t.flags)) { var n = t.alternate; try { if (0 !== (8772 & t.flags)) switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ks || rl(5, t); break;
                                    case 1:
                                        var i = t.stateNode; if (4 & t.flags && !Ks)
                                            if (null === n) i.componentDidMount();
                                            else { var r = t.elementType === t.type ? n.memoizedProps : go(t.type, n.memoizedProps);
                                                i.componentDidUpdate(r, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate) } var a = t.updateQueue;
                                        null !== a && Vo(t, a, i); break;
                                    case 3:
                                        var s = t.updateQueue; if (null !== s) { if (n = null, null !== t.child) switch (t.child.tag) {
                                                case 5:
                                                case 1:
                                                    n = t.child.stateNode } Vo(t, s, n) } break;
                                    case 5:
                                        var l = t.stateNode; if (null === n && 4 & t.flags) { n = l; var u = t.memoizedProps; switch (t.type) {
                                                case "button":
                                                case "input":
                                                case "select":
                                                case "textarea":
                                                    u.autoFocus && n.focus(); break;
                                                case "img":
                                                    u.src && (n.src = u.src) } } break;
                                    case 6:
                                    case 4:
                                    case 12:
                                    case 19:
                                    case 17:
                                    case 21:
                                    case 22:
                                    case 23:
                                    case 25:
                                        break;
                                    case 13:
                                        if (null === t.memoizedState) { var c = t.alternate; if (null !== c) { var d = c.memoizedState; if (null !== d) { var h = d.dehydrated;
                                                    null !== h && Ht(h) } } } break;
                                    default:
                                        throw Error(o(163)) } Ks || 512 & t.flags && ol(t) } catch (f) { zu(t, t.return, f) } } if (t === e) { Js = null; break } if (null !== (n = t.sibling)) { n.return = t.return, Js = n; break } Js = t.return } }

                function kl(e) { for (; null !== Js;) { var t = Js; if (t === e) { Js = null; break } var n = t.sibling; if (null !== n) { n.return = t.return, Js = n; break } Js = t.return } }

                function xl(e) { for (; null !== Js;) { var t = Js; try { switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = t.return; try { rl(4, t) } catch (l) { zu(t, n, l) } break;
                                case 1:
                                    var i = t.stateNode; if ("function" === typeof i.componentDidMount) { var r = t.return; try { i.componentDidMount() } catch (l) { zu(t, r, l) } } var o = t.return; try { ol(t) } catch (l) { zu(t, o, l) } break;
                                case 5:
                                    var a = t.return; try { ol(t) } catch (l) { zu(t, a, l) } } } catch (l) { zu(t, t.return, l) } if (t === e) { Js = null; break } var s = t.sibling; if (null !== s) { s.return = t.return, Js = s; break } Js = t.return } } var Sl, zl = Math.ceil,
                    Cl = w.ReactCurrentDispatcher,
                    Pl = w.ReactCurrentOwner,
                    El = w.ReactCurrentBatchConfig,
                    Ml = 0,
                    Tl = null,
                    Ol = null,
                    Ll = 0,
                    Rl = 0,
                    Dl = Sr(0),
                    Il = 0,
                    Nl = null,
                    Fl = 0,
                    Al = 0,
                    Vl = 0,
                    Ul = null,
                    Bl = null,
                    Hl = 0,
                    jl = 1 / 0,
                    Wl = null,
                    $l = !1,
                    Ql = null,
                    ql = null,
                    Yl = !1,
                    Gl = null,
                    Xl = 0,
                    Kl = 0,
                    Zl = null,
                    Jl = -1,
                    eu = 0;

                function tu() { return 0 !== (6 & Ml) ? Ke() : -1 !== Jl ? Jl : Jl = Ke() }

                function nu(e) { return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Ml) && 0 !== Ll ? Ll & -Ll : null !== mo.transition ? (0 === eu && (eu = vt()), eu) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Xt(e.type) }

                function iu(e, t, n, i) { if (50 < Kl) throw Kl = 0, Zl = null, Error(o(185));
                    gt(e, n, i), 0 !== (2 & Ml) && e === Tl || (e === Tl && (0 === (2 & Ml) && (Al |= n), 4 === Il && lu(e, Ll)), ru(e, i), 1 === n && 0 === Ml && 0 === (1 & t.mode) && (jl = Ke() + 500, Vr && Hr())) }

                function ru(e, t) { var n = e.callbackNode;! function(e, t) { for (var n = e.suspendedLanes, i = e.pingedLanes, r = e.expirationTimes, o = e.pendingLanes; 0 < o;) { var a = 31 - at(o),
                                s = 1 << a,
                                l = r[a]; - 1 === l ? 0 !== (s & n) && 0 === (s & i) || (r[a] = ft(s, t)) : l <= t && (e.expiredLanes |= s), o &= ~s } }(e, t); var i = ht(e, e === Tl ? Ll : 0); if (0 === i) null !== n && Ye(n), e.callbackNode = null, e.callbackPriority = 0;
                    else if (t = i & -i, e.callbackPriority !== t) { if (null != n && Ye(n), 1 === t) 0 === e.tag ? function(e) { Vr = !0, Br(e) }(uu.bind(null, e)) : Br(uu.bind(null, e)), ar((function() { 0 === (6 & Ml) && Hr() })), n = null;
                        else { switch (wt(i)) {
                                case 1:
                                    n = Je; break;
                                case 4:
                                    n = et; break;
                                case 16:
                                default:
                                    n = tt; break;
                                case 536870912:
                                    n = it } n = Tu(n, ou.bind(null, e)) } e.callbackPriority = t, e.callbackNode = n } }

                function ou(e, t) { if (Jl = -1, eu = 0, 0 !== (6 & Ml)) throw Error(o(327)); var n = e.callbackNode; if (xu() && e.callbackNode !== n) return null; var i = ht(e, e === Tl ? Ll : 0); if (0 === i) return null; if (0 !== (30 & i) || 0 !== (i & e.expiredLanes) || t) t = gu(e, i);
                    else { t = i; var r = Ml;
                        Ml |= 2; var a = vu(); for (Tl === e && Ll === t || (Wl = null, jl = Ke() + 500, fu(e, t));;) try { bu(); break } catch (l) { pu(e, l) } ko(), Cl.current = a, Ml = r, null !== Ol ? t = 0 : (Tl = null, Ll = 0, t = Il) } if (0 !== t) { if (2 === t && (0 !== (r = pt(e)) && (i = r, t = au(e, r))), 1 === t) throw n = Nl, fu(e, 0), lu(e, i), ru(e, Ke()), n; if (6 === t) lu(e, i);
                        else { if (r = e.current.alternate, 0 === (30 & i) && ! function(e) { for (var t = e;;) { if (16384 & t.flags) { var n = t.updateQueue; if (null !== n && null !== (n = n.stores))
                                                for (var i = 0; i < n.length; i++) { var r = n[i],
                                                        o = r.getSnapshot;
                                                    r = r.value; try { if (!si(o(), r)) return !1 } catch (s) { return !1 } } } if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                                        else { if (t === e) break; for (; null === t.sibling;) { if (null === t.return || t.return === e) return !0;
                                                t = t.return } t.sibling.return = t.return, t = t.sibling } } return !0 }(r) && (2 === (t = gu(e, i)) && (0 !== (a = pt(e)) && (i = a, t = au(e, a))), 1 === t)) throw n = Nl, fu(e, 0), lu(e, i), ru(e, Ke()), n; switch (e.finishedWork = r, e.finishedLanes = i, t) {
                                case 0:
                                case 1:
                                    throw Error(o(345));
                                case 2:
                                case 5:
                                    ku(e, Bl, Wl); break;
                                case 3:
                                    if (lu(e, i), (130023424 & i) === i && 10 < (t = Hl + 500 - Ke())) { if (0 !== ht(e, 0)) break; if (((r = e.suspendedLanes) & i) !== i) { tu(), e.pingedLanes |= e.suspendedLanes & r; break } e.timeoutHandle = ir(ku.bind(null, e, Bl, Wl), t); break } ku(e, Bl, Wl); break;
                                case 4:
                                    if (lu(e, i), (4194240 & i) === i) break; for (t = e.eventTimes, r = -1; 0 < i;) { var s = 31 - at(i);
                                        a = 1 << s, (s = t[s]) > r && (r = s), i &= ~a } if (i = r, 10 < (i = (120 > (i = Ke() - i) ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * zl(i / 1960)) - i)) { e.timeoutHandle = ir(ku.bind(null, e, Bl, Wl), i); break } ku(e, Bl, Wl); break;
                                default:
                                    throw Error(o(329)) } } } return ru(e, Ke()), e.callbackNode === n ? ou.bind(null, e) : null }

                function au(e, t) { var n = Ul; return e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256), 2 !== (e = gu(e, t)) && (t = Bl, Bl = n, null !== t && su(t)), e }

                function su(e) { null === Bl ? Bl = e : Bl.push.apply(Bl, e) }

                function lu(e, t) { for (t &= ~Vl, t &= ~Al, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) { var n = 31 - at(t),
                            i = 1 << n;
                        e[n] = -1, t &= ~i } }

                function uu(e) { if (0 !== (6 & Ml)) throw Error(o(327));
                    xu(); var t = ht(e, 0); if (0 === (1 & t)) return ru(e, Ke()), null; var n = gu(e, t); if (0 !== e.tag && 2 === n) { var i = pt(e);
                        0 !== i && (t = i, n = au(e, i)) } if (1 === n) throw n = Nl, fu(e, 0), lu(e, t), ru(e, Ke()), n; if (6 === n) throw Error(o(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, ku(e, Bl, Wl), ru(e, Ke()), null }

                function cu(e, t) { var n = Ml;
                    Ml |= 1; try { return e(t) } finally { 0 === (Ml = n) && (jl = Ke() + 500, Vr && Hr()) } }

                function du(e) { null !== Gl && 0 === Gl.tag && 0 === (6 & Ml) && xu(); var t = Ml;
                    Ml |= 1; var n = El.transition,
                        i = bt; try { if (El.transition = null, bt = 1, e) return e() } finally { bt = i, El.transition = n, 0 === (6 & (Ml = t)) && Hr() } }

                function hu() { Rl = Dl.current, zr(Dl) }

                function fu(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (-1 !== n && (e.timeoutHandle = -1, rr(n)), null !== Ol)
                        for (n = Ol.return; null !== n;) { var i = n; switch (to(i), i.tag) {
                                case 1:
                                    null !== (i = i.type.childContextTypes) && void 0 !== i && Rr(); break;
                                case 3:
                                    oa(), zr(Mr), zr(Er), da(); break;
                                case 5:
                                    sa(i); break;
                                case 4:
                                    oa(); break;
                                case 13:
                                case 19:
                                    zr(la); break;
                                case 10:
                                    xo(i.type._context); break;
                                case 22:
                                case 23:
                                    hu() } n = n.return }
                    if (Tl = e, Ol = e = Du(e.current, null), Ll = Rl = t, Il = 0, Nl = null, Vl = Al = Fl = 0, Bl = Ul = null, null !== Po) { for (t = 0; t < Po.length; t++)
                            if (null !== (i = (n = Po[t]).interleaved)) { n.interleaved = null; var r = i.next,
                                    o = n.pending; if (null !== o) { var a = o.next;
                                    o.next = r, i.next = a } n.pending = i } Po = null } return e }

                function pu(e, t) { for (;;) { var n = Ol; try { if (ko(), ha.current = as, ya) { for (var i = va.memoizedState; null !== i;) { var r = i.queue;
                                    null !== r && (r.pending = null), i = i.next } ya = !1 } if (pa = 0, ga = ma = va = null, ba = !1, wa = 0, Pl.current = null, null === n || null === n.return) { Il = 1, Nl = t, Ol = null; break } e: { var a = e,
                                    s = n.return,
                                    l = n,
                                    u = t; if (t = Ll, l.flags |= 32768, null !== u && "object" === typeof u && "function" === typeof u.then) { var c = u,
                                        d = l,
                                        h = d.tag; if (0 === (1 & d.mode) && (0 === h || 11 === h || 15 === h)) { var f = d.alternate;
                                        f ? (d.updateQueue = f.updateQueue, d.memoizedState = f.memoizedState, d.lanes = f.lanes) : (d.updateQueue = null, d.memoizedState = null) } var p = gs(s); if (null !== p) { p.flags &= -257, ys(p, s, l, 0, t), 1 & p.mode && ms(a, c, t), u = c; var v = (t = p).updateQueue; if (null === v) { var m = new Set;
                                            m.add(u), t.updateQueue = m } else v.add(u); break e } if (0 === (1 & t)) { ms(a, c, t), mu(); break e } u = Error(o(426)) } else if (ro && 1 & l.mode) { var g = gs(s); if (null !== g) { 0 === (65536 & g.flags) && (g.flags |= 256), ys(g, s, l, 0, t), vo(cs(u, l)); break e } } a = u = cs(u, l), 4 !== Il && (Il = 2), null === Ul ? Ul = [a] : Ul.push(a), a = s;do { switch (a.tag) {
                                        case 3:
                                            a.flags |= 65536, t &= -t, a.lanes |= t, Fo(a, ps(0, u, t)); break e;
                                        case 1:
                                            l = u; var y = a.type,
                                                b = a.stateNode; if (0 === (128 & a.flags) && ("function" === typeof y.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === ql || !ql.has(b)))) { a.flags |= 65536, t &= -t, a.lanes |= t, Fo(a, vs(a, l, t)); break e } } a = a.return } while (null !== a) } _u(n) } catch (w) { t = w, Ol === n && null !== n && (Ol = n = n.return); continue } break } }

                function vu() { var e = Cl.current; return Cl.current = as, null === e ? as : e }

                function mu() { 0 !== Il && 3 !== Il && 2 !== Il || (Il = 4), null === Tl || 0 === (268435455 & Fl) && 0 === (268435455 & Al) || lu(Tl, Ll) }

                function gu(e, t) { var n = Ml;
                    Ml |= 2; var i = vu(); for (Tl === e && Ll === t || (Wl = null, fu(e, t));;) try { yu(); break } catch (r) { pu(e, r) }
                    if (ko(), Ml = n, Cl.current = i, null !== Ol) throw Error(o(261)); return Tl = null, Ll = 0, Il }

                function yu() { for (; null !== Ol;) wu(Ol) }

                function bu() { for (; null !== Ol && !Ge();) wu(Ol) }

                function wu(e) { var t = Sl(e.alternate, e, Rl);
                    e.memoizedProps = e.pendingProps, null === t ? _u(e) : Ol = t, Pl.current = null }

                function _u(e) { var t = e;
                    do { var n = t.alternate; if (e = t.return, 0 === (32768 & t.flags)) { if (null !== (n = Ys(n, t, Rl))) return void(Ol = n) } else { if (null !== (n = Gs(n, t))) return n.flags &= 32767, void(Ol = n); if (null === e) return Il = 6, void(Ol = null);
                            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null } if (null !== (t = t.sibling)) return void(Ol = t);
                        Ol = t = e } while (null !== t);
                    0 === Il && (Il = 5) }

                function ku(e, t, n) { var i = bt,
                        r = El.transition; try { El.transition = null, bt = 1,
                            function(e, t, n, i) { do { xu() } while (null !== Gl); if (0 !== (6 & Ml)) throw Error(o(327));
                                n = e.finishedWork; var r = e.finishedLanes; if (null === n) return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
                                e.callbackNode = null, e.callbackPriority = 0; var a = n.lanes | n.childLanes; if (function(e, t) { var n = e.pendingLanes & ~t;
                                        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var i = e.eventTimes; for (e = e.expirationTimes; 0 < n;) { var r = 31 - at(n),
                                                o = 1 << r;
                                            t[r] = 0, i[r] = -1, e[r] = -1, n &= ~o } }(e, a), e === Tl && (Ol = Tl = null, Ll = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Yl || (Yl = !0, Tu(tt, (function() { return xu(), null }))), a = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || a) { a = El.transition, El.transition = null; var s = bt;
                                    bt = 1; var l = Ml;
                                    Ml |= 4, Pl.current = null,
                                        function(e, t) { if (er = Wt, fi(e = hi())) { if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
                                                else e: { var i = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection(); if (i && 0 !== i.rangeCount) { n = i.anchorNode; var r = i.anchorOffset,
                                                            a = i.focusNode;
                                                        i = i.focusOffset; try { n.nodeType, a.nodeType } catch (_) { n = null; break e } var s = 0,
                                                            l = -1,
                                                            u = -1,
                                                            c = 0,
                                                            d = 0,
                                                            h = e,
                                                            f = null;
                                                        t: for (;;) { for (var p; h !== n || 0 !== r && 3 !== h.nodeType || (l = s + r), h !== a || 0 !== i && 3 !== h.nodeType || (u = s + i), 3 === h.nodeType && (s += h.nodeValue.length), null !== (p = h.firstChild);) f = h, h = p; for (;;) { if (h === e) break t; if (f === n && ++c === r && (l = s), f === a && ++d === i && (u = s), null !== (p = h.nextSibling)) break;
                                                                f = (h = f).parentNode } h = p } n = -1 === l || -1 === u ? null : { start: l, end: u } } else n = null } n = n || { start: 0, end: 0 } } else n = null; for (tr = { focusedElem: e, selectionRange: n }, Wt = !1, Js = t; null !== Js;)
                                                if (e = (t = Js).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Js = e;
                                                else
                                                    for (; null !== Js;) { t = Js; try { var v = t.alternate; if (0 !== (1024 & t.flags)) switch (t.tag) {
                                                                case 0:
                                                                case 11:
                                                                case 15:
                                                                case 5:
                                                                case 6:
                                                                case 4:
                                                                case 17:
                                                                    break;
                                                                case 1:
                                                                    if (null !== v) { var m = v.memoizedProps,
                                                                            g = v.memoizedState,
                                                                            y = t.stateNode,
                                                                            b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? m : go(t.type, m), g);
                                                                        y.__reactInternalSnapshotBeforeUpdate = b } break;
                                                                case 3:
                                                                    var w = t.stateNode.containerInfo;
                                                                    1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement); break;
                                                                default:
                                                                    throw Error(o(163)) } } catch (_) { zu(t, t.return, _) } if (null !== (e = t.sibling)) { e.return = t.return, Js = e; break } Js = t.return } v = nl, nl = !1 }(e, n), gl(n, e), pi(tr), Wt = !!er, tr = er = null, e.current = n, bl(n, e, r), Xe(), Ml = l, bt = s, El.transition = a } else e.current = n; if (Yl && (Yl = !1, Gl = e, Xl = r), a = e.pendingLanes, 0 === a && (ql = null), function(e) { if (ot && "function" === typeof ot.onCommitFiberRoot) try { ot.onCommitFiberRoot(rt, e, void 0, 128 === (128 & e.current.flags)) } catch (t) {} }(n.stateNode), ru(e, Ke()), null !== t)
                                    for (i = e.onRecoverableError, n = 0; n < t.length; n++) r = t[n], i(r.value, { componentStack: r.stack, digest: r.digest }); if ($l) throw $l = !1, e = Ql, Ql = null, e;
                                0 !== (1 & Xl) && 0 !== e.tag && xu(), a = e.pendingLanes, 0 !== (1 & a) ? e === Zl ? Kl++ : (Kl = 0, Zl = e) : Kl = 0, Hr() }(e, t, n, i) } finally { El.transition = r, bt = i } return null }

                function xu() { if (null !== Gl) { var e = wt(Xl),
                            t = El.transition,
                            n = bt; try { if (El.transition = null, bt = 16 > e ? 16 : e, null === Gl) var i = !1;
                            else { if (e = Gl, Gl = null, Xl = 0, 0 !== (6 & Ml)) throw Error(o(331)); var r = Ml; for (Ml |= 4, Js = e.current; null !== Js;) { var a = Js,
                                        s = a.child; if (0 !== (16 & Js.flags)) { var l = a.deletions; if (null !== l) { for (var u = 0; u < l.length; u++) { var c = l[u]; for (Js = c; null !== Js;) { var d = Js; switch (d.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            il(8, d, a) } var h = d.child; if (null !== h) h.return = d, Js = h;
                                                    else
                                                        for (; null !== Js;) { var f = (d = Js).sibling,
                                                                p = d.return; if (al(d), d === c) { Js = null; break } if (null !== f) { f.return = p, Js = f; break } Js = p } } } var v = a.alternate; if (null !== v) { var m = v.child; if (null !== m) { v.child = null;
                                                    do { var g = m.sibling;
                                                        m.sibling = null, m = g } while (null !== m) } } Js = a } } if (0 !== (2064 & a.subtreeFlags) && null !== s) s.return = a, Js = s;
                                    else e: for (; null !== Js;) { if (0 !== (2048 & (a = Js).flags)) switch (a.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                il(9, a, a.return) }
                                        var y = a.sibling; if (null !== y) { y.return = a.return, Js = y; break e } Js = a.return } } var b = e.current; for (Js = b; null !== Js;) { var w = (s = Js).child; if (0 !== (2064 & s.subtreeFlags) && null !== w) w.return = s, Js = w;
                                    else e: for (s = b; null !== Js;) { if (0 !== (2048 & (l = Js).flags)) try { switch (l.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    rl(9, l) } } catch (k) { zu(l, l.return, k) }
                                        if (l === s) { Js = null; break e } var _ = l.sibling; if (null !== _) { _.return = l.return, Js = _; break e } Js = l.return } } if (Ml = r, Hr(), ot && "function" === typeof ot.onPostCommitFiberRoot) try { ot.onPostCommitFiberRoot(rt, e) } catch (k) {} i = !0 } return i } finally { bt = n, El.transition = t } } return !1 }

                function Su(e, t, n) { e = Io(e, t = ps(0, t = cs(n, t), 1), 1), t = tu(), null !== e && (gt(e, 1, t), ru(e, t)) }

                function zu(e, t, n) { if (3 === e.tag) Su(e, e, n);
                    else
                        for (; null !== t;) { if (3 === t.tag) { Su(t, e, n); break } if (1 === t.tag) { var i = t.stateNode; if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof i.componentDidCatch && (null === ql || !ql.has(i))) { t = Io(t, e = vs(t, e = cs(n, e), 1), 1), e = tu(), null !== t && (gt(t, 1, e), ru(t, e)); break } } t = t.return } }

                function Cu(e, t, n) { var i = e.pingCache;
                    null !== i && i.delete(t), t = tu(), e.pingedLanes |= e.suspendedLanes & n, Tl === e && (Ll & n) === n && (4 === Il || 3 === Il && (130023424 & Ll) === Ll && 500 > Ke() - Hl ? fu(e, 0) : Vl |= n), ru(e, t) }

                function Pu(e, t) { 0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ct, 0 === (130023424 & (ct <<= 1)) && (ct = 4194304))); var n = tu();
                    null !== (e = To(e, t)) && (gt(e, t, n), ru(e, n)) }

                function Eu(e) { var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), Pu(e, n) }

                function Mu(e, t) { var n = 0; switch (e.tag) {
                        case 13:
                            var i = e.stateNode,
                                r = e.memoizedState;
                            null !== r && (n = r.retryLane); break;
                        case 19:
                            i = e.stateNode; break;
                        default:
                            throw Error(o(314)) } null !== i && i.delete(t), Pu(e, n) }

                function Tu(e, t) { return qe(e, t) }

                function Ou(e, t, n, i) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null }

                function Lu(e, t, n, i) { return new Ou(e, t, n, i) }

                function Ru(e) { return !(!(e = e.prototype) || !e.isReactComponent) }

                function Du(e, t) { var n = e.alternate; return null === n ? ((n = Lu(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n }

                function Iu(e, t, n, i, r, a) { var s = 2; if (i = e, "function" === typeof e) Ru(e) && (s = 1);
                    else if ("string" === typeof e) s = 5;
                    else e: switch (e) {
                        case x:
                            return Nu(n.children, r, a, t);
                        case S:
                            s = 8, r |= 8; break;
                        case z:
                            return (e = Lu(12, n, t, 2 | r)).elementType = z, e.lanes = a, e;
                        case M:
                            return (e = Lu(13, n, t, r)).elementType = M, e.lanes = a, e;
                        case T:
                            return (e = Lu(19, n, t, r)).elementType = T, e.lanes = a, e;
                        case R:
                            return Fu(n, r, a, t);
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case C:
                                    s = 10; break e;
                                case P:
                                    s = 9; break e;
                                case E:
                                    s = 11; break e;
                                case O:
                                    s = 14; break e;
                                case L:
                                    s = 16, i = null; break e }
                            throw Error(o(130, null == e ? e : typeof e, "")) }
                    return (t = Lu(s, n, t, r)).elementType = e, t.type = i, t.lanes = a, t }

                function Nu(e, t, n, i) { return (e = Lu(7, e, i, t)).lanes = n, e }

                function Fu(e, t, n, i) { return (e = Lu(22, e, i, t)).elementType = R, e.lanes = n, e.stateNode = { isHidden: !1 }, e }

                function Au(e, t, n) { return (e = Lu(6, e, null, t)).lanes = n, e }

                function Vu(e, t, n) { return (t = Lu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t }

                function Uu(e, t, n, i, r) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = mt(0), this.expirationTimes = mt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mt(0), this.identifierPrefix = i, this.onRecoverableError = r, this.mutableSourceEagerHydrationData = null }

                function Bu(e, t, n, i, r, o, a, s, l) { return e = new Uu(e, t, n, s, l), 1 === t ? (t = 1, !0 === o && (t |= 8)) : t = 0, o = Lu(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Lo(o), e }

                function Hu(e) { if (!e) return Pr;
                    e: { if (He(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(o(170)); var t = e;do { switch (t.tag) {
                                case 3:
                                    t = t.stateNode.context; break e;
                                case 1:
                                    if (Lr(t.type)) { t = t.stateNode.__reactInternalMemoizedMergedChildContext; break e } } t = t.return } while (null !== t); throw Error(o(171)) }
                    if (1 === e.tag) { var n = e.type; if (Lr(n)) return Ir(e, n, t) } return t }

                function ju(e, t, n, i, r, o, a, s, l) { return (e = Bu(n, i, !0, e, 0, o, 0, s, l)).context = Hu(null), n = e.current, (o = Do(i = tu(), r = nu(n))).callback = void 0 !== t && null !== t ? t : null, Io(n, o, r), e.current.lanes = r, gt(e, r, i), ru(e, i), e }

                function Wu(e, t, n, i) { var r = t.current,
                        o = tu(),
                        a = nu(r); return n = Hu(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Do(o, a)).payload = { element: e }, null !== (i = void 0 === i ? null : i) && (t.callback = i), null !== (e = Io(r, t, a)) && (iu(e, r, a, o), No(e, r, a)), a }

                function $u(e) { return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null }

                function Qu(e, t) { if (null !== (e = e.memoizedState) && null !== e.dehydrated) { var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t } }

                function qu(e, t) { Qu(e, t), (e = e.alternate) && Qu(e, t) } Sl = function(e, t, n) { if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || Mr.current) ws = !0;
                        else { if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return ws = !1,
                                function(e, t, n) { switch (t.tag) {
                                        case 3:
                                            Ts(t), po(); break;
                                        case 5:
                                            aa(t); break;
                                        case 1:
                                            Lr(t.type) && Nr(t); break;
                                        case 4:
                                            ra(t, t.stateNode.containerInfo); break;
                                        case 10:
                                            var i = t.type._context,
                                                r = t.memoizedProps.value;
                                            Cr(yo, i._currentValue), i._currentValue = r; break;
                                        case 13:
                                            if (null !== (i = t.memoizedState)) return null !== i.dehydrated ? (Cr(la, 1 & la.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? As(e, t, n) : (Cr(la, 1 & la.current), null !== (e = $s(e, t, n)) ? e.sibling : null);
                                            Cr(la, 1 & la.current); break;
                                        case 19:
                                            if (i = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) { if (i) return js(e, t, n);
                                                t.flags |= 128 } if (null !== (r = t.memoizedState) && (r.rendering = null, r.tail = null, r.lastEffect = null), Cr(la, la.current), i) break; return null;
                                        case 22:
                                        case 23:
                                            return t.lanes = 0, zs(e, t, n) } return $s(e, t, n) }(e, t, n);
                            ws = 0 !== (131072 & e.flags) } else ws = !1, ro && 0 !== (1048576 & t.flags) && Jr(t, Qr, t.index); switch (t.lanes = 0, t.tag) {
                        case 2:
                            var i = t.type;
                            Ws(e, t), e = t.pendingProps; var r = Or(t, Er.current);
                            zo(t, n), r = Sa(null, t, i, e, r, n); var a = za(); return t.flags |= 1, "object" === typeof r && null !== r && "function" === typeof r.render && void 0 === r.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Lr(i) ? (a = !0, Nr(t)) : a = !1, t.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null, Lo(t), r.updater = Ho, t.stateNode = r, r._reactInternals = t, Qo(t, i, e, n), t = Ms(null, t, i, !0, a, n)) : (t.tag = 0, ro && a && eo(t), _s(null, t, r, n), t = t.child), t;
                        case 16:
                            i = t.elementType;
                            e: { switch (Ws(e, t), e = t.pendingProps, i = (r = i._init)(i._payload), t.type = i, r = t.tag = function(e) { if ("function" === typeof e) return Ru(e) ? 1 : 0; if (void 0 !== e && null !== e) { if ((e = e.$$typeof) === E) return 11; if (e === O) return 14 } return 2 }(i), e = go(i, e), r) {
                                    case 0:
                                        t = Ps(null, t, i, e, n); break e;
                                    case 1:
                                        t = Es(null, t, i, e, n); break e;
                                    case 11:
                                        t = ks(null, t, i, e, n); break e;
                                    case 14:
                                        t = xs(null, t, i, go(i.type, e), n); break e } throw Error(o(306, i, "")) }
                            return t;
                        case 0:
                            return i = t.type, r = t.pendingProps, Ps(e, t, i, r = t.elementType === i ? r : go(i, r), n);
                        case 1:
                            return i = t.type, r = t.pendingProps, Es(e, t, i, r = t.elementType === i ? r : go(i, r), n);
                        case 3:
                            e: { if (Ts(t), null === e) throw Error(o(387));i = t.pendingProps, r = (a = t.memoizedState).element, Ro(e, t), Ao(t, i, null, n); var s = t.memoizedState; if (i = s.element, a.isDehydrated) { if (a = { element: i, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, 256 & t.flags) { t = Os(e, t, i, n, r = cs(Error(o(423)), t)); break e } if (i !== r) { t = Os(e, t, i, n, r = cs(Error(o(424)), t)); break e } for (io = ur(t.stateNode.containerInfo.firstChild), no = t, ro = !0, oo = null, n = Zo(t, null, i, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling } else { if (po(), i === r) { t = $s(e, t, n); break e } _s(e, t, i, n) } t = t.child }
                            return t;
                        case 5:
                            return aa(t), null === e && uo(t), i = t.type, r = t.pendingProps, a = null !== e ? e.memoizedProps : null, s = r.children, nr(i, r) ? s = null : null !== a && nr(i, a) && (t.flags |= 32), Cs(e, t), _s(e, t, s, n), t.child;
                        case 6:
                            return null === e && uo(t), null;
                        case 13:
                            return As(e, t, n);
                        case 4:
                            return ra(t, t.stateNode.containerInfo), i = t.pendingProps, null === e ? t.child = Ko(t, null, i, n) : _s(e, t, i, n), t.child;
                        case 11:
                            return i = t.type, r = t.pendingProps, ks(e, t, i, r = t.elementType === i ? r : go(i, r), n);
                        case 7:
                            return _s(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return _s(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: { if (i = t.type._context, r = t.pendingProps, a = t.memoizedProps, s = r.value, Cr(yo, i._currentValue), i._currentValue = s, null !== a)
                                    if (si(a.value, s)) { if (a.children === r.children && !Mr.current) { t = $s(e, t, n); break e } } else
                                        for (null !== (a = t.child) && (a.return = t); null !== a;) { var l = a.dependencies; if (null !== l) { s = a.child; for (var u = l.firstContext; null !== u;) { if (u.context === i) { if (1 === a.tag) {
                                                            (u = Do(-1, n & -n)).tag = 2; var c = a.updateQueue; if (null !== c) { var d = (c = c.shared).pending;
                                                                null === d ? u.next = u : (u.next = d.next, d.next = u), c.pending = u } } a.lanes |= n, null !== (u = a.alternate) && (u.lanes |= n), So(a.return, n, t), l.lanes |= n; break } u = u.next } } else if (10 === a.tag) s = a.type === t.type ? null : a.child;
                                            else if (18 === a.tag) { if (null === (s = a.return)) throw Error(o(341));
                                                s.lanes |= n, null !== (l = s.alternate) && (l.lanes |= n), So(s, n, t), s = a.sibling } else s = a.child; if (null !== s) s.return = a;
                                            else
                                                for (s = a; null !== s;) { if (s === t) { s = null; break } if (null !== (a = s.sibling)) { a.return = s.return, s = a; break } s = s.return } a = s } _s(e, t, r.children, n), t = t.child }
                            return t;
                        case 9:
                            return r = t.type, i = t.pendingProps.children, zo(t, n), i = i(r = Co(r)), t.flags |= 1, _s(e, t, i, n), t.child;
                        case 14:
                            return r = go(i = t.type, t.pendingProps), xs(e, t, i, r = go(i.type, r), n);
                        case 15:
                            return Ss(e, t, t.type, t.pendingProps, n);
                        case 17:
                            return i = t.type, r = t.pendingProps, r = t.elementType === i ? r : go(i, r), Ws(e, t), t.tag = 1, Lr(i) ? (e = !0, Nr(t)) : e = !1, zo(t, n), Wo(t, i, r), Qo(t, i, r, n), Ms(null, t, i, !0, e, n);
                        case 19:
                            return js(e, t, n);
                        case 22:
                            return zs(e, t, n) } throw Error(o(156, t.tag)) }; var Yu = "function" === typeof reportError ? reportError : function(e) { console.error(e) };

                function Gu(e) { this._internalRoot = e }

                function Xu(e) { this._internalRoot = e }

                function Ku(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType) }

                function Zu(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)) }

                function Ju() {}

                function ec(e, t, n, i, r) { var o = n._reactRootContainer; if (o) { var a = o; if ("function" === typeof r) { var s = r;
                            r = function() { var e = $u(a);
                                s.call(e) } } Wu(t, a, e, r) } else a = function(e, t, n, i, r) { if (r) { if ("function" === typeof i) { var o = i;
                                i = function() { var e = $u(a);
                                    o.call(e) } } var a = ju(t, i, e, 0, null, !1, 0, "", Ju); return e._reactRootContainer = a, e[pr] = a.current, Hi(8 === e.nodeType ? e.parentNode : e), du(), a } for (; r = e.lastChild;) e.removeChild(r); if ("function" === typeof i) { var s = i;
                            i = function() { var e = $u(l);
                                s.call(e) } } var l = Bu(e, 0, !1, null, 0, !1, 0, "", Ju); return e._reactRootContainer = l, e[pr] = l.current, Hi(8 === e.nodeType ? e.parentNode : e), du((function() { Wu(t, l, n, i) })), l }(n, t, e, r, i); return $u(a) } Xu.prototype.render = Gu.prototype.render = function(e) { var t = this._internalRoot; if (null === t) throw Error(o(409));
                    Wu(e, t, null, null) }, Xu.prototype.unmount = Gu.prototype.unmount = function() { var e = this._internalRoot; if (null !== e) { this._internalRoot = null; var t = e.containerInfo;
                        du((function() { Wu(null, e, null, null) })), t[pr] = null } }, Xu.prototype.unstable_scheduleHydration = function(e) { if (e) { var t = St();
                        e = { blockedOn: null, target: e, priority: t }; for (var n = 0; n < Rt.length && 0 !== t && t < Rt[n].priority; n++);
                        Rt.splice(n, 0, e), 0 === n && Ft(e) } }, _t = function(e) { switch (e.tag) {
                        case 3:
                            var t = e.stateNode; if (t.current.memoizedState.isDehydrated) { var n = dt(t.pendingLanes);
                                0 !== n && (yt(t, 1 | n), ru(t, Ke()), 0 === (6 & Ml) && (jl = Ke() + 500, Hr())) } break;
                        case 13:
                            du((function() { var t = To(e, 1); if (null !== t) { var n = tu();
                                    iu(t, e, 1, n) } })), qu(e, 1) } }, kt = function(e) { if (13 === e.tag) { var t = To(e, 134217728); if (null !== t) iu(t, e, 134217728, tu());
                        qu(e, 134217728) } }, xt = function(e) { if (13 === e.tag) { var t = nu(e),
                            n = To(e, t); if (null !== n) iu(n, e, t, tu());
                        qu(e, t) } }, St = function() { return bt }, zt = function(e, t) { var n = bt; try { return bt = e, t() } finally { bt = n } }, ke = function(e, t, n) { switch (t) {
                        case "input":
                            if (Z(e, n), t = n.name, "radio" === n.type && null != t) { for (n = e; n.parentNode;) n = n.parentNode; for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) { var i = n[t]; if (i !== e && i.form === e.form) { var r = _r(i); if (!r) throw Error(o(90));
                                        q(i), Z(i, r) } } } break;
                        case "textarea":
                            oe(e, n); break;
                        case "select":
                            null != (t = n.value) && ne(e, !!n.multiple, t, !1) } }, Ee = cu, Me = du; var tc = { usingClientEntryPoint: !1, Events: [br, wr, _r, Ce, Pe, cu] },
                    nc = { findFiberByHostInstance: yr, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
                    ic = { bundleType: nc.bundleType, version: nc.version, rendererPackageName: nc.rendererPackageName, rendererConfig: nc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: w.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) { return null === (e = $e(e)) ? null : e.stateNode }, findFiberByHostInstance: nc.findFiberByHostInstance || function() { return null }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" }; if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) { var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!rc.isDisabled && rc.supportsFiber) try { rt = rc.inject(ic), ot = rc } catch (ce) {} } t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function(e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; if (!Ku(t)) throw Error(o(200)); return function(e, t, n) { var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return { $$typeof: k, key: null == i ? null : "" + i, children: e, containerInfo: t, implementation: n } }(e, t, null, n) }, t.createRoot = function(e, t) { if (!Ku(e)) throw Error(o(299)); var n = !1,
                        i = "",
                        r = Yu; return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (i = t.identifierPrefix), void 0 !== t.onRecoverableError && (r = t.onRecoverableError)), t = Bu(e, 1, !1, null, 0, n, 0, i, r), e[pr] = t.current, Hi(8 === e.nodeType ? e.parentNode : e), new Gu(t) }, t.findDOMNode = function(e) { if (null == e) return null; if (1 === e.nodeType) return e; var t = e._reactInternals; if (void 0 === t) { if ("function" === typeof e.render) throw Error(o(188)); throw e = Object.keys(e).join(","), Error(o(268, e)) } return e = null === (e = $e(t)) ? null : e.stateNode }, t.flushSync = function(e) { return du(e) }, t.hydrate = function(e, t, n) { if (!Zu(t)) throw Error(o(200)); return ec(null, e, t, !0, n) }, t.hydrateRoot = function(e, t, n) { if (!Ku(e)) throw Error(o(405)); var i = null != n && n.hydratedSources || null,
                        r = !1,
                        a = "",
                        s = Yu; if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (r = !0), void 0 !== n.identifierPrefix && (a = n.identifierPrefix), void 0 !== n.onRecoverableError && (s = n.onRecoverableError)), t = ju(t, null, e, 1, null != n ? n : null, r, 0, a, s), e[pr] = t.current, Hi(e), i)
                        for (e = 0; e < i.length; e++) r = (r = (n = i[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, r] : t.mutableSourceEagerHydrationData.push(n, r); return new Xu(t) }, t.render = function(e, t, n) { if (!Zu(t)) throw Error(o(200)); return ec(null, e, t, !1, n) }, t.unmountComponentAtNode = function(e) { if (!Zu(e)) throw Error(o(40)); return !!e._reactRootContainer && (du((function() { ec(null, null, e, !1, (function() { e._reactRootContainer = null, e[pr] = null })) })), !0) }, t.unstable_batchedUpdates = cu, t.unstable_renderSubtreeIntoContainer = function(e, t, n, i) { if (!Zu(n)) throw Error(o(200)); if (null == e || void 0 === e._reactInternals) throw Error(o(38)); return ec(e, t, n, !1, i) }, t.version = "18.2.0-next-9e3b772b8-20220608" }, 250: (e, t, n) => { var i = n(164);
                t.createRoot = i.createRoot, t.hydrateRoot = i.hydrateRoot }, 164: (e, t, n) => {! function e() { if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e) } catch (t) { console.error(t) } }(), e.exports = n(463) }, 374: (e, t, n) => { var i = n(791),
                    r = Symbol.for("react.element"),
                    o = Symbol.for("react.fragment"),
                    a = Object.prototype.hasOwnProperty,
                    s = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    l = { key: !0, ref: !0, __self: !0, __source: !0 };

                function u(e, t, n) { var i, o = {},
                        u = null,
                        c = null; for (i in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (c = t.ref), t) a.call(t, i) && !l.hasOwnProperty(i) && (o[i] = t[i]); if (e && e.defaultProps)
                        for (i in t = e.defaultProps) void 0 === o[i] && (o[i] = t[i]); return { $$typeof: r, type: e, key: u, ref: c, props: o, _owner: s.current } } t.jsx = u }, 117: (e, t) => { var n = Symbol.for("react.element"),
                    i = Symbol.for("react.portal"),
                    r = Symbol.for("react.fragment"),
                    o = Symbol.for("react.strict_mode"),
                    a = Symbol.for("react.profiler"),
                    s = Symbol.for("react.provider"),
                    l = Symbol.for("react.context"),
                    u = Symbol.for("react.forward_ref"),
                    c = Symbol.for("react.suspense"),
                    d = Symbol.for("react.memo"),
                    h = Symbol.for("react.lazy"),
                    f = Symbol.iterator; var p = { isMounted: function() { return !1 }, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {} },
                    v = Object.assign,
                    m = {};

                function g(e, t, n) { this.props = e, this.context = t, this.refs = m, this.updater = n || p }

                function y() {}

                function b(e, t, n) { this.props = e, this.context = t, this.refs = m, this.updater = n || p } g.prototype.isReactComponent = {}, g.prototype.setState = function(e, t) { if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState") }, g.prototype.forceUpdate = function(e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate") }, y.prototype = g.prototype; var w = b.prototype = new y;
                w.constructor = b, v(w, g.prototype), w.isPureReactComponent = !0; var _ = Array.isArray,
                    k = Object.prototype.hasOwnProperty,
                    x = { current: null },
                    S = { key: !0, ref: !0, __self: !0, __source: !0 };

                function z(e, t, i) { var r, o = {},
                        a = null,
                        s = null; if (null != t)
                        for (r in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (a = "" + t.key), t) k.call(t, r) && !S.hasOwnProperty(r) && (o[r] = t[r]); var l = arguments.length - 2; if (1 === l) o.children = i;
                    else if (1 < l) { for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
                        o.children = u } if (e && e.defaultProps)
                        for (r in l = e.defaultProps) void 0 === o[r] && (o[r] = l[r]); return { $$typeof: n, type: e, key: a, ref: s, props: o, _owner: x.current } }

                function C(e) { return "object" === typeof e && null !== e && e.$$typeof === n } var P = /\/+/g;

                function E(e, t) { return "object" === typeof e && null !== e && null != e.key ? function(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, (function(e) { return t[e] })) }("" + e.key) : t.toString(36) }

                function M(e, t, r, o, a) { var s = typeof e; "undefined" !== s && "boolean" !== s || (e = null); var l = !1; if (null === e) l = !0;
                    else switch (s) {
                        case "string":
                        case "number":
                            l = !0; break;
                        case "object":
                            switch (e.$$typeof) {
                                case n:
                                case i:
                                    l = !0 } }
                    if (l) return a = a(l = e), e = "" === o ? "." + E(l, 0) : o, _(a) ? (r = "", null != e && (r = e.replace(P, "$&/") + "/"), M(a, t, r, "", (function(e) { return e }))) : null != a && (C(a) && (a = function(e, t) { return { $$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner } }(a, r + (!a.key || l && l.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + e)), t.push(a)), 1; if (l = 0, o = "" === o ? "." : o + ":", _(e))
                        for (var u = 0; u < e.length; u++) { var c = o + E(s = e[u], u);
                            l += M(s, t, r, c, a) } else if (c = function(e) { return null === e || "object" !== typeof e ? null : "function" === typeof(e = f && e[f] || e["@@iterator"]) ? e : null }(e), "function" === typeof c)
                            for (e = c.call(e), u = 0; !(s = e.next()).done;) l += M(s = s.value, t, r, c = o + E(s, u++), a);
                        else if ("object" === s) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return l }

                function T(e, t, n) { if (null == e) return e; var i = [],
                        r = 0; return M(e, i, "", "", (function(e) { return t.call(n, e, r++) })), i }

                function O(e) { if (-1 === e._status) { var t = e._result;
                        (t = t()).then((function(t) { 0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t) }), (function(t) { 0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t) })), -1 === e._status && (e._status = 0, e._result = t) } if (1 === e._status) return e._result.default; throw e._result } var L = { current: null },
                    R = { transition: null },
                    D = { ReactCurrentDispatcher: L, ReactCurrentBatchConfig: R, ReactCurrentOwner: x };
                t.Children = { map: T, forEach: function(e, t, n) { T(e, (function() { t.apply(this, arguments) }), n) }, count: function(e) { var t = 0; return T(e, (function() { t++ })), t }, toArray: function(e) { return T(e, (function(e) { return e })) || [] }, only: function(e) { if (!C(e)) throw Error("React.Children.only expected to receive a single React element child."); return e } }, t.Component = g, t.Fragment = r, t.Profiler = a, t.PureComponent = b, t.StrictMode = o, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D, t.cloneElement = function(e, t, i) { if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var r = v({}, e.props),
                        o = e.key,
                        a = e.ref,
                        s = e._owner; if (null != t) { if (void 0 !== t.ref && (a = t.ref, s = x.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps; for (u in t) k.call(t, u) && !S.hasOwnProperty(u) && (r[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]) } var u = arguments.length - 2; if (1 === u) r.children = i;
                    else if (1 < u) { l = Array(u); for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
                        r.children = l } return { $$typeof: n, type: e.type, key: o, ref: a, props: r, _owner: s } }, t.createContext = function(e) { return (e = { $$typeof: l, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: s, _context: e }, e.Consumer = e }, t.createElement = z, t.createFactory = function(e) { var t = z.bind(null, e); return t.type = e, t }, t.createRef = function() { return { current: null } }, t.forwardRef = function(e) { return { $$typeof: u, render: e } }, t.isValidElement = C, t.lazy = function(e) { return { $$typeof: h, _payload: { _status: -1, _result: e }, _init: O } }, t.memo = function(e, t) { return { $$typeof: d, type: e, compare: void 0 === t ? null : t } }, t.startTransition = function(e) { var t = R.transition;
                    R.transition = {}; try { e() } finally { R.transition = t } }, t.unstable_act = function() { throw Error("act(...) is not supported in production builds of React.") }, t.useCallback = function(e, t) { return L.current.useCallback(e, t) }, t.useContext = function(e) { return L.current.useContext(e) }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) { return L.current.useDeferredValue(e) }, t.useEffect = function(e, t) { return L.current.useEffect(e, t) }, t.useId = function() { return L.current.useId() }, t.useImperativeHandle = function(e, t, n) { return L.current.useImperativeHandle(e, t, n) }, t.useInsertionEffect = function(e, t) { return L.current.useInsertionEffect(e, t) }, t.useLayoutEffect = function(e, t) { return L.current.useLayoutEffect(e, t) }, t.useMemo = function(e, t) { return L.current.useMemo(e, t) }, t.useReducer = function(e, t, n) { return L.current.useReducer(e, t, n) }, t.useRef = function(e) { return L.current.useRef(e) }, t.useState = function(e) { return L.current.useState(e) }, t.useSyncExternalStore = function(e, t, n) { return L.current.useSyncExternalStore(e, t, n) }, t.useTransition = function() { return L.current.useTransition() }, t.version = "18.2.0" }, 791: (e, t, n) => { e.exports = n(117) }, 184: (e, t, n) => { e.exports = n(374) }, 813: (e, t) => {
                function n(e, t) { var n = e.length;
                    e.push(t);
                    e: for (; 0 < n;) { var i = n - 1 >>> 1,
                            r = e[i]; if (!(0 < o(r, t))) break e;
                        e[i] = t, e[n] = r, n = i } }

                function i(e) { return 0 === e.length ? null : e[0] }

                function r(e) { if (0 === e.length) return null; var t = e[0],
                        n = e.pop(); if (n !== t) { e[0] = n;
                        e: for (var i = 0, r = e.length, a = r >>> 1; i < a;) { var s = 2 * (i + 1) - 1,
                                l = e[s],
                                u = s + 1,
                                c = e[u]; if (0 > o(l, n)) u < r && 0 > o(c, l) ? (e[i] = c, e[u] = n, i = u) : (e[i] = l, e[s] = n, i = s);
                            else { if (!(u < r && 0 > o(c, n))) break e;
                                e[i] = c, e[u] = n, i = u } } } return t }

                function o(e, t) { var n = e.sortIndex - t.sortIndex; return 0 !== n ? n : e.id - t.id } if ("object" === typeof performance && "function" === typeof performance.now) { var a = performance;
                    t.unstable_now = function() { return a.now() } } else { var s = Date,
                        l = s.now();
                    t.unstable_now = function() { return s.now() - l } } var u = [],
                    c = [],
                    d = 1,
                    h = null,
                    f = 3,
                    p = !1,
                    v = !1,
                    m = !1,
                    g = "function" === typeof setTimeout ? setTimeout : null,
                    y = "function" === typeof clearTimeout ? clearTimeout : null,
                    b = "undefined" !== typeof setImmediate ? setImmediate : null;

                function w(e) { for (var t = i(c); null !== t;) { if (null === t.callback) r(c);
                        else { if (!(t.startTime <= e)) break;
                            r(c), t.sortIndex = t.expirationTime, n(u, t) } t = i(c) } }

                function _(e) { if (m = !1, w(e), !v)
                        if (null !== i(u)) v = !0, R(k);
                        else { var t = i(c);
                            null !== t && D(_, t.startTime - e) } }

                function k(e, n) { v = !1, m && (m = !1, y(C), C = -1), p = !0; var o = f; try { for (w(n), h = i(u); null !== h && (!(h.expirationTime > n) || e && !M());) { var a = h.callback; if ("function" === typeof a) { h.callback = null, f = h.priorityLevel; var s = a(h.expirationTime <= n);
                                n = t.unstable_now(), "function" === typeof s ? h.callback = s : h === i(u) && r(u), w(n) } else r(u);
                            h = i(u) } if (null !== h) var l = !0;
                        else { var d = i(c);
                            null !== d && D(_, d.startTime - n), l = !1 } return l } finally { h = null, f = o, p = !1 } } "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling); var x, S = !1,
                    z = null,
                    C = -1,
                    P = 5,
                    E = -1;

                function M() { return !(t.unstable_now() - E < P) }

                function T() { if (null !== z) { var e = t.unstable_now();
                        E = e; var n = !0; try { n = z(!0, e) } finally { n ? x() : (S = !1, z = null) } } else S = !1 } if ("function" === typeof b) x = function() { b(T) };
                else if ("undefined" !== typeof MessageChannel) { var O = new MessageChannel,
                        L = O.port2;
                    O.port1.onmessage = T, x = function() { L.postMessage(null) } } else x = function() { g(T, 0) };

                function R(e) { z = e, S || (S = !0, x()) }

                function D(e, n) { C = g((function() { e(t.unstable_now()) }), n) } t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) { e.callback = null }, t.unstable_continueExecution = function() { v || p || (v = !0, R(k)) }, t.unstable_forceFrameRate = function(e) { 0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < e ? Math.floor(1e3 / e) : 5 }, t.unstable_getCurrentPriorityLevel = function() { return f }, t.unstable_getFirstCallbackNode = function() { return i(u) }, t.unstable_next = function(e) { switch (f) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3; break;
                        default:
                            t = f } var n = f;
                    f = t; try { return e() } finally { f = n } }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) { switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3 } var n = f;
                    f = e; try { return t() } finally { f = n } }, t.unstable_scheduleCallback = function(e, r, o) { var a = t.unstable_now(); switch ("object" === typeof o && null !== o ? o = "number" === typeof(o = o.delay) && 0 < o ? a + o : a : o = a, e) {
                        case 1:
                            var s = -1; break;
                        case 2:
                            s = 250; break;
                        case 5:
                            s = 1073741823; break;
                        case 4:
                            s = 1e4; break;
                        default:
                            s = 5e3 } return e = { id: d++, callback: r, priorityLevel: e, startTime: o, expirationTime: s = o + s, sortIndex: -1 }, o > a ? (e.sortIndex = o, n(c, e), null === i(u) && e === i(c) && (m ? (y(C), C = -1) : m = !0, D(_, o - a))) : (e.sortIndex = s, n(u, e), v || p || (v = !0, R(k))), e }, t.unstable_shouldYield = M, t.unstable_wrapCallback = function(e) { var t = f; return function() { var n = f;
                        f = t; try { return e.apply(this, arguments) } finally { f = n } } } }, 296: (e, t, n) => { e.exports = n(813) } },
        t = {};

    function n(i) { var r = t[i]; if (void 0 !== r) return r.exports; var o = t[i] = { exports: {} }; return e[i](o, o.exports, n), o.exports } n.m = e, n.d = (e, t) => { for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] }) }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((t, i) => (n.f[i](e, t), t)), [])), n.u = e => "static/js/" + e + ".f03b6b51.chunk.js", n.miniCssF = e => {}, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => { var e = {},
            t = "belajarrjs:";
        n.l = (i, r, o, a) => { if (e[i]) e[i].push(r);
            else { var s, l; if (void 0 !== o)
                    for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) { var d = u[c]; if (d.getAttribute("src") == i || d.getAttribute("data-webpack") == t + o) { s = d; break } } s || (l = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, n.nc && s.setAttribute("nonce", n.nc), s.setAttribute("data-webpack", t + o), s.src = i), e[i] = [r]; var h = (t, n) => { s.onerror = s.onload = null, clearTimeout(f); var r = e[i]; if (delete e[i], s.parentNode && s.parentNode.removeChild(s), r && r.forEach((e => e(n))), t) return t(n) },
                    f = setTimeout(h.bind(null, void 0, { type: "timeout", target: s }), 12e4);
                s.onerror = h.bind(null, s.onerror), s.onload = h.bind(null, s.onload), l && document.head.appendChild(s) } } })(), n.r = e => { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.p = "/", (() => { var e = { 179: 0 };
        n.f.j = (t, i) => { var r = n.o(e, t) ? e[t] : void 0; if (0 !== r)
                if (r) i.push(r[2]);
                else { var o = new Promise(((n, i) => r = e[t] = [n, i]));
                    i.push(r[2] = o); var a = n.p + n.u(t),
                        s = new Error;
                    n.l(a, (i => { if (n.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) { var o = i && ("load" === i.type ? "missing" : i.type),
                                a = i && i.target && i.target.src;
                            s.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")", s.name = "ChunkLoadError", s.type = o, s.request = a, r[1](s) } }), "chunk-" + t, t) } }; var t = (t, i) => { var r, o, a = i[0],
                    s = i[1],
                    l = i[2],
                    u = 0; if (a.some((t => 0 !== e[t]))) { for (r in s) n.o(s, r) && (n.m[r] = s[r]); if (l) l(n) } for (t && t(i); u < a.length; u++) o = a[u], n.o(e, o) && e[o] && e[o][0](), e[o] = 0 },
            i = self.webpackChunkbelajarrjs = self.webpackChunkbelajarrjs || [];
        i.forEach(t.bind(null, 0)), i.push = t.bind(null, i.push.bind(i)) })(), (() => { var e = n(791),
            t = n(250); const i = "generated",
            r = "pointerleave",
            o = "pointermove",
            a = "touchend",
            s = "tsParticles - Error";
        class l { constructor(e, t, n) { if (this._updateFromAngle = (e, t) => { this.x = Math.cos(e) * t, this.y = Math.sin(e) * t }, !B(e) && e) { this.x = e.x, this.y = e.y; const t = e;
                    this.z = t.z ? t.z : 0 } else { if (void 0 === e || void 0 === t) throw new Error("".concat(s, " Vector3d not initialized correctly"));
                    this.x = e, this.y = t, this.z = null !== n && void 0 !== n ? n : 0 } } static get origin() { return l.create(0, 0, 0) } get angle() { return Math.atan2(this.y, this.x) } set angle(e) { this._updateFromAngle(e, this.length) } get length() { return Math.sqrt(this.getLengthSq()) } set length(e) { this._updateFromAngle(this.angle, e) } static clone(e) { return l.create(e.x, e.y, e.z) } static create(e, t, n) { return new l(e, t, n) } add(e) { return l.create(this.x + e.x, this.y + e.y, this.z + e.z) } addTo(e) { this.x += e.x, this.y += e.y, this.z += e.z } copy() { return l.clone(this) } distanceTo(e) { return this.sub(e).length } distanceToSq(e) { return this.sub(e).getLengthSq() } div(e) { return l.create(this.x / e, this.y / e, this.z / e) } divTo(e) { this.x /= e, this.y /= e, this.z /= e } getLengthSq() { return this.x ** 2 + this.y ** 2 } mult(e) { return l.create(this.x * e, this.y * e, this.z * e) } multTo(e) { this.x *= e, this.y *= e, this.z *= e } normalize() { const e = this.length;
                0 != e && this.multTo(1 / e) } rotate(e) { return l.create(this.x * Math.cos(e) - this.y * Math.sin(e), this.x * Math.sin(e) + this.y * Math.cos(e), 0) } setTo(e) { this.x = e.x, this.y = e.y; const t = e;
                this.z = t.z ? t.z : 0 } sub(e) { return l.create(this.x - e.x, this.y - e.y, this.z - e.z) } subFrom(e) { this.x -= e.x, this.y -= e.y, this.z -= e.z } } class u extends l { constructor(e, t) { super(e, t, 0) } static get origin() { return u.create(0, 0) } static clone(e) { return u.create(e.x, e.y) } static create(e, t) { return new u(e, t) } } let c = Math.random;
        new Map;

        function d() { return h(c(), 0, 1 - 1e-16) }

        function h(e, t, n) { return Math.min(Math.max(e, t), n) }

        function f(e) { const t = m(e); let n = v(e); return t === n && (n = 0), d() * (t - n) + n }

        function p(e) { return B(e) ? e : f(e) }

        function v(e) { return B(e) ? e : e.min }

        function m(e) { return B(e) ? e : e.max }

        function g(e, t) { if (e === t || void 0 === t && B(e)) return e; const n = v(e),
                i = m(e); return void 0 !== t ? { min: Math.min(n, t), max: Math.max(i, t) } : g(n, i) }

        function y(e) { const t = e.random,
                { enable: n, minimumValue: i } = V(t) ? { enable: t, minimumValue: 0 } : t; return p(n ? g(e.value, i) : e.value) }

        function b(e, t) { const n = e.x - t.x,
                i = e.y - t.y; return { dx: n, dy: i, distance: Math.sqrt(n ** 2 + i ** 2) } }

        function w(e, t) { return b(e, t).distance }

        function _(e) { var t, n; const i = { x: void 0 !== (null === (t = e.position) || void 0 === t ? void 0 : t.x) ? p(e.position.x) : void 0, y: void 0 !== (null === (n = e.position) || void 0 === n ? void 0 : n.y) ? p(e.position.y) : void 0 }; return function(e) { var t, n, i, r; return { x: (null !== (t = null === (n = e.position) || void 0 === n ? void 0 : n.x) && void 0 !== t ? t : 100 * d()) * e.size.width / 100, y: (null !== (i = null === (r = e.position) || void 0 === r ? void 0 : r.y) && void 0 !== i ? i : 100 * d()) * e.size.height / 100 } }({ size: e.size, position: i }) }

        function k(e) { var t, n, i, r; return { x: null !== (t = null === (n = e.position) || void 0 === n ? void 0 : n.x) && void 0 !== t ? t : d() * e.size.width, y: null !== (i = null === (r = e.position) || void 0 === r ? void 0 : r.y) && void 0 !== i ? i : d() * e.size.height } }

        function x(e) { return e ? e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e) : 1 } const S = { debug: console.debug, error: console.error, info: console.info, log: console.log, verbose: console.log, warning: console.warn };

        function z() { return S }

        function C() { return "undefined" === typeof window || !window || "undefined" === typeof window.document || !window.document }

        function P(e) { if (!C() && "undefined" !== typeof matchMedia) return matchMedia(e) }

        function E(e, t) { return e === t || W(t) && t.indexOf(e) > -1 }

        function M(e) { return Math.floor(d() * e.length) }

        function T(e, t) { return e[void 0 !== t && (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]) ? t % e.length : M(e)] }

        function O(e, t, n, i, r) { return function(e, t, n, i) { let r = !0;
                i && "bottom" !== i || (r = e.top < t.height + n.x);!r || i && "left" !== i || (r = e.right > n.x);!r || i && "right" !== i || (r = e.left < t.width + n.y);!r || i && "top" !== i || (r = e.bottom > n.y); return r }(L(e, null !== i && void 0 !== i ? i : 0), t, n, r) }

        function L(e, t) { return { bottom: e.y + t, left: e.x - t, right: e.x + t, top: e.y - t } }

        function R(e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i]; for (const r of n) { if (void 0 === r || null === r) continue; if (!j(r)) { e = r; continue } const t = Array.isArray(r);!t || !j(e) && e && Array.isArray(e) ? t || !j(e) && e && !Array.isArray(e) || (e = {}) : e = []; for (const n in r) { if ("__proto__" === n) continue; const t = r[n],
                        i = e;
                    i[n] = j(t) && Array.isArray(t) ? t.map((e => R(i[n], e))) : R(i[n], t) } } return e }

        function D(e, t) { return W(e) ? e.map(((e, n) => t(e, n))) : t(e, 0) }

        function I(e, t, n) { return W(e) ? T(e, t, n) : e }

        function N(e, t) { const n = e.value,
                i = e.animation,
                r = { delayTime: 1e3 * p(i.delay), enable: i.enable, value: p(e.value) * t, max: m(n) * t, min: v(n) * t, loops: 0, maxLoops: p(i.count), time: 0 }; if (i.enable) { switch (r.decay = 1 - p(i.decay), i.mode) {
                    case "increase":
                        r.status = "increasing"; break;
                    case "decrease":
                        r.status = "decreasing"; break;
                    case "random":
                        r.status = d() >= .5 ? "increasing" : "decreasing" } const e = "auto" === i.mode; switch (i.startValue) {
                    case "min":
                        r.value = r.min, e && (r.status = "increasing"); break;
                    case "max":
                        r.value = r.max, e && (r.status = "decreasing"); break;
                    default:
                        r.value = f(r), e && (r.status = d() >= .5 ? "increasing" : "decreasing") } } return r.initialValue = r.value, r }

        function F(e, t) { if (!("percent" === e.mode)) { const { mode: t, ...n } = e; return n } return "x" in e ? { x: e.x / 100 * t.width, y: e.y / 100 * t.height } : { width: e.width / 100 * t.width, height: e.height / 100 * t.height } }

        function A(e, t) { return F(e, t) }

        function V(e) { return "boolean" === typeof e }

        function U(e) { return "string" === typeof e }

        function B(e) { return "number" === typeof e }

        function H(e) { return "function" === typeof e }

        function j(e) { return "object" === typeof e && null !== e }

        function W(e) { return Array.isArray(e) } const $ = "random",
            Q = new Map;

        function q(e) { Q.set(e.key, e) }

        function Y(e, t, n) { return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e }

        function G(e) { for (const [, i] of Q)
                if (e.startsWith(i.stringPrefix)) return i.parseString(e); const t = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, ((e, t, n, i, r) => t + t + n + n + i + i + (void 0 !== r ? r + r : ""))),
                n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(t); return n ? { a: void 0 !== n[4] ? parseInt(n[4], 16) / 255 : 1, b: parseInt(n[3], 16), g: parseInt(n[2], 16), r: parseInt(n[1], 16) } : void 0 }

        function X(e, t) { let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]; if (!e) return; const i = U(e) ? { value: e } : e; if (U(i.value)) return K(i.value, t, n); if (W(i.value)) return X({ value: T(i.value, t, n) }); for (const [, r] of Q) { const e = r.handleRangeColor(i); if (e) return e } }

        function K(e, t) { let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]; if (!e) return; const i = U(e) ? { value: e } : e; if (U(i.value)) return i.value === $ ? te() : function(e) { return G(e) }(i.value); if (W(i.value)) return K({ value: T(i.value, t, n) }); for (const [, r] of Q) { const e = r.handleColor(i); if (e) return e } }

        function Z(e, t) { const n = X(e, t, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]); return n ? J(n) : void 0 }

        function J(e) { const t = e.r / 255,
                n = e.g / 255,
                i = e.b / 255,
                r = Math.max(t, n, i),
                o = Math.min(t, n, i),
                a = { h: 0, l: (r + o) / 2, s: 0 }; return r !== o && (a.s = a.l < .5 ? (r - o) / (r + o) : (r - o) / (2 - r - o), a.h = t === r ? (n - i) / (r - o) : a.h = n === r ? 2 + (i - t) / (r - o) : 4 + (t - n) / (r - o)), a.l *= 100, a.s *= 100, a.h *= 60, a.h < 0 && (a.h += 360), a.h >= 360 && (a.h -= 360), a }

        function ee(e) { const t = { b: 0, g: 0, r: 0 },
                n = { h: e.h / 360, l: e.l / 100, s: e.s / 100 }; if (n.s) { const e = n.l < .5 ? n.l * (1 + n.s) : n.l + n.s - n.l * n.s,
                    i = 2 * n.l - e;
                t.r = Y(i, e, n.h + 1 / 3), t.g = Y(i, e, n.h), t.b = Y(i, e, n.h - 1 / 3) } else t.r = t.g = t.b = n.l; return t.r = Math.floor(255 * t.r), t.g = Math.floor(255 * t.g), t.b = Math.floor(255 * t.b), t }

        function te(e) { const t = null !== e && void 0 !== e ? e : 0; return { b: Math.floor(f(g(t, 256))), g: Math.floor(f(g(t, 256))), r: Math.floor(f(g(t, 256))) } }

        function ne(e, t) { return "rgba(".concat(e.r, ", ").concat(e.g, ", ").concat(e.b, ", ").concat(null !== t && void 0 !== t ? t : 1, ")") }

        function ie(e, t) { return "hsla(".concat(e.h, ", ").concat(e.s, "%, ").concat(e.l, "%, ").concat(null !== t && void 0 !== t ? t : 1, ")") }

        function re(e) { return void 0 !== e ? { h: e.h.value, s: e.s.value, l: e.l.value } : void 0 }

        function oe(e, t, n) { e.enable = t.enable, e.enable ? (e.velocity = p(t.speed) / 100 * n, e.decay = 1 - p(t.decay), e.status = "increasing", e.loops = 0, e.maxLoops = p(t.count), e.time = 0, e.delayTime = 1e3 * p(t.delay), t.sync || (e.velocity *= d(), e.value *= d()), e.initialValue = e.value) : e.velocity = 0 }

        function ae(e, t) { e.clearRect(0, 0, t.width, t.height) }

        function se(e, t, n) { const i = t[n]; var r;
            void 0 !== i && (e[n] = (null !== (r = e[n]) && void 0 !== r ? r : 1) * i) } class le { constructor(e) { this.container = e, this._applyPostDrawUpdaters = e => { for (const t of this._postDrawUpdaters) t.afterDraw && t.afterDraw(e) }, this._applyPreDrawUpdaters = (e, t, n, i, r, o) => { for (const a of this._preDrawUpdaters) { if (a.getColorStyles) { const { fill: o, stroke: s } = a.getColorStyles(t, e, n, i);
                            o && (r.fill = o), s && (r.stroke = s) } if (a.getTransformValues) { const e = a.getTransformValues(t); for (const t in e) se(o, e, t) } a.beforeDraw && a.beforeDraw(t) } }, this._applyResizePlugins = () => { for (const e of this._resizePlugins) e.resize && e.resize() }, this._getPluginParticleColors = e => { let t, n; for (const i of this._colorPlugins)
                        if (!t && i.particleFillColor && (t = Z(i.particleFillColor(e))), !n && i.particleStrokeColor && (n = Z(i.particleStrokeColor(e))), t && n) break; return [t, n] }, this._initCover = () => { const e = this.container.actualOptions.backgroundMask.cover,
                        t = X(e.color); if (t) { const n = { ...t, a: e.opacity };
                        this._coverColorStyle = ne(n, n.a) } }, this._initStyle = () => { const e = this.element,
                        t = this.container.actualOptions; if (e) { this._fullScreen ? (this._originalStyle = R({}, e.style), this._setFullScreenStyle()) : this._resetOriginalStyle(); for (const n in t.style) { if (!n || !t.style) continue; const i = t.style[n];
                            i && e.style.setProperty(n, i, "important") } } }, this._initTrail = async () => { const e = this.container.actualOptions,
                        t = e.particles.move.trail,
                        n = t.fill; if (t.enable)
                        if (n.color) { const t = X(n.color); if (!t) return; const i = e.particles.move.trail;
                            this._trailFill = { color: { ...t }, opacity: 1 / i.length } } else await new Promise(((e, i) => { if (!n.image) return; const r = document.createElement("img");
                            r.addEventListener("load", (() => { this._trailFill = { image: r, opacity: 1 / t.length }, e() })), r.addEventListener("error", (e => { i(e.error) })), r.src = n.image })) }, this._paintBase = e => { this.draw((t => function(e, t, n) { e.fillStyle = null !== n && void 0 !== n ? n : "rgba(0,0,0,0)", e.fillRect(0, 0, t.width, t.height) }(t, this.size, e))) }, this._paintImage = (e, t) => { this.draw((n => function(e, t, n, i) { n && (e.globalAlpha = i, e.drawImage(n, 0, 0, t.width, t.height), e.globalAlpha = 1) }(n, this.size, e, t))) }, this._repairStyle = () => { const e = this.element;
                    e && (this._safeMutationObserver((e => e.disconnect())), this._initStyle(), this.initBackground(), this._safeMutationObserver((t => t.observe(e, { attributes: !0 })))) }, this._resetOriginalStyle = () => { const e = this.element,
                        t = this._originalStyle; if (!e || !t) return; const n = e.style;
                    n.position = t.position, n.zIndex = t.zIndex, n.top = t.top, n.left = t.left, n.width = t.width, n.height = t.height }, this._safeMutationObserver = e => { this._mutationObserver && e(this._mutationObserver) }, this._setFullScreenStyle = () => { const e = this.element; if (!e) return; const t = "important",
                        n = e.style;
                    n.setProperty("position", "fixed", t), n.setProperty("z-index", this.container.actualOptions.fullScreen.zIndex.toString(10), t), n.setProperty("top", "0", t), n.setProperty("left", "0", t), n.setProperty("width", "100%", t), n.setProperty("height", "100%", t) }, this.size = { height: 0, width: 0 }, this._context = null, this._generated = !1, this._preDrawUpdaters = [], this._postDrawUpdaters = [], this._resizePlugins = [], this._colorPlugins = [] } get _fullScreen() { return this.container.actualOptions.fullScreen.enable } clear() { const e = this.container.actualOptions,
                    t = e.particles.move.trail,
                    n = this._trailFill;
                e.backgroundMask.enable ? this.paint() : t.enable && t.length > 0 && n ? n.color ? this._paintBase(ne(n.color, n.opacity)) : n.image && this._paintImage(n.image, n.opacity) : this.draw((e => { ae(e, this.size) })) } destroy() { if (this.stop(), this._generated) { const e = this.element;
                    e && e.remove() } else this._resetOriginalStyle();
                this._preDrawUpdaters = [], this._postDrawUpdaters = [], this._resizePlugins = [], this._colorPlugins = [] } draw(e) { const t = this._context; if (t) return e(t) } drawParticle(e, t) { var n; if (e.spawning || e.destroyed) return; const i = e.getRadius(); if (i <= 0) return; const r = e.getFillColor(),
                    o = null !== (n = e.getStrokeColor()) && void 0 !== n ? n : r; let [a, s] = this._getPluginParticleColors(e);
                a || (a = r), s || (s = o), (a || s) && this.draw((n => { var r, o, l, u; const c = this.container,
                        d = c.actualOptions,
                        h = e.options.zIndex,
                        f = (1 - e.zIndexFactor) ** h.opacityRate,
                        p = null !== (r = null !== (o = e.bubble.opacity) && void 0 !== o ? o : null === (l = e.opacity) || void 0 === l ? void 0 : l.value) && void 0 !== r ? r : 1,
                        v = p * f,
                        m = (null !== (u = e.strokeOpacity) && void 0 !== u ? u : p) * f,
                        g = {},
                        y = { fill: a ? ie(a, v) : void 0 };
                    y.stroke = s ? ie(s, m) : y.fill, this._applyPreDrawUpdaters(n, e, i, v, y, g),
                        function(e) { var t, n, i, r, o; const { container: a, context: s, particle: l, delta: u, colorStyles: c, backgroundMask: d, composite: h, radius: f, opacity: p, shadow: v, transform: m } = e, g = l.getPosition(), y = l.rotation + (l.pathRotation ? l.velocity.angle : 0), b = Math.sin(y), w = Math.cos(y), _ = { a: w * (null !== (t = m.a) && void 0 !== t ? t : 1), b: b * (null !== (n = m.b) && void 0 !== n ? n : 1), c: -b * (null !== (i = m.c) && void 0 !== i ? i : 1), d: w * (null !== (r = m.d) && void 0 !== r ? r : 1) };
                            s.setTransform(_.a, _.b, _.c, _.d, g.x, g.y), s.beginPath(), d && (s.globalCompositeOperation = h); const k = l.shadowColor;
                            v.enable && k && (s.shadowBlur = v.blur, s.shadowColor = ne(k), s.shadowOffsetX = v.offset.x, s.shadowOffsetY = v.offset.y), c.fill && (s.fillStyle = c.fill); const x = null !== (o = l.strokeWidth) && void 0 !== o ? o : 0;
                            s.lineWidth = x, c.stroke && (s.strokeStyle = c.stroke),
                                function(e, t, n, i, r, o) { if (!n.shape) return; const a = e.drawers.get(n.shape);
                                    a && a.draw(t, n, i, r, o, e.retina.pixelRatio) }(a, s, l, f, p, u), x > 0 && s.stroke(), l.close && s.closePath(), l.fill && s.fill(),
                                function(e, t, n, i, r, o) { if (!n.shape) return; const a = e.drawers.get(n.shape);
                                    a && a.afterEffect && a.afterEffect(t, n, i, r, o, e.retina.pixelRatio) }(a, s, l, f, p, u), s.globalCompositeOperation = "source-over", s.setTransform(1, 0, 0, 1, 0, 0) }({ container: c, context: n, particle: e, delta: t, colorStyles: y, backgroundMask: d.backgroundMask.enable, composite: d.backgroundMask.composite, radius: i * (1 - e.zIndexFactor) ** h.sizeRate, opacity: v, shadow: e.options.shadow, transform: g }), this._applyPostDrawUpdaters(e) })) } drawParticlePlugin(e, t, n) { this.draw((i => function(e, t, n, i) { t.drawParticle && t.drawParticle(e, n, i) }(i, e, t, n))) } drawPlugin(e, t) { this.draw((n => function(e, t, n) { t.draw && t.draw(e, n) }(n, e, t))) } async init() { this._safeMutationObserver((e => e.disconnect())), this._mutationObserver = function(e) { if (!C() && "undefined" !== typeof MutationObserver) return new MutationObserver(e) }((e => { for (const t of e) "attributes" === t.type && "style" === t.attributeName && this._repairStyle() })), this.resize(), this._initStyle(), this._initCover(); try { await this._initTrail() } catch (e) { z().error(e) } this.initBackground(), this._safeMutationObserver((e => { this.element && e.observe(this.element, { attributes: !0 }) })), this.initUpdaters(), this.initPlugins(), this.paint() } initBackground() { const e = this.container.actualOptions.background,
                    t = this.element; if (!t) return; const n = t.style; if (n) { if (e.color) { const t = X(e.color);
                        n.backgroundColor = t ? ne(t, e.opacity) : "" } else n.backgroundColor = "";
                    n.backgroundImage = e.image || "", n.backgroundPosition = e.position || "", n.backgroundRepeat = e.repeat || "", n.backgroundSize = e.size || "" } } initPlugins() { this._resizePlugins = []; for (const [, e] of this.container.plugins) e.resize && this._resizePlugins.push(e), (e.particleFillColor || e.particleStrokeColor) && this._colorPlugins.push(e) } initUpdaters() { this._preDrawUpdaters = [], this._postDrawUpdaters = []; for (const e of this.container.particles.updaters) e.afterDraw && this._postDrawUpdaters.push(e), (e.getColorStyles || e.getTransformValues || e.beforeDraw) && this._preDrawUpdaters.push(e) } loadCanvas(e) { this._generated && this.element && this.element.remove(), this._generated = e.dataset && i in e.dataset ? "true" === e.dataset[i] : this._generated, this.element = e, this.element.ariaHidden = "true", this._originalStyle = R({}, this.element.style), this.size.height = e.offsetHeight, this.size.width = e.offsetWidth, this._context = this.element.getContext("2d"), this._safeMutationObserver((e => { this.element && e.observe(this.element, { attributes: !0 }) })), this.container.retina.init(), this.initBackground() } paint() { const e = this.container.actualOptions;
                this.draw((t => { e.backgroundMask.enable && e.backgroundMask.cover ? (ae(t, this.size), this._paintBase(this._coverColorStyle)) : this._paintBase() })) } resize() { if (!this.element) return !1; const e = this.container,
                    t = e.retina.pixelRatio,
                    n = e.canvas.size,
                    i = this.element.offsetWidth * t,
                    r = this.element.offsetHeight * t; if (r === n.height && i === n.width && r === this.element.height && i === this.element.width) return !1; const o = { ...n }; return this.element.width = n.width = this.element.offsetWidth * t, this.element.height = n.height = this.element.offsetHeight * t, this.container.started && (this.resizeFactor = { width: n.width / o.width, height: n.height / o.height }), !0 } stop() { this._safeMutationObserver((e => e.disconnect())), this._mutationObserver = void 0, this.draw((e => ae(e, this.size))) } async windowResize() { if (!this.element || !this.resize()) return; const e = this.container,
                    t = e.updateActualOptions();
                e.particles.setDensity(), this._applyResizePlugins(), t && await e.refresh() } }

        function ue(e, t, n, i, r) { if (i) { let i = { passive: !0 };
                V(r) ? i.capture = r : void 0 !== r && (i = r), e.addEventListener(t, n, i) } else { const i = r;
                e.removeEventListener(t, n, i) } } class ce { constructor(e) { this.container = e, this._doMouseTouchClick = e => { const t = this.container,
                        n = t.actualOptions; if (this._canPush) { const e = t.interactivity.mouse,
                            i = e.position; if (!i) return;
                        e.clickPosition = { ...i }, e.clickTime = (new Date).getTime();
                        D(n.interactivity.events.onClick.mode, (e => this.container.handleClickMode(e))) } "touchend" === e.type && setTimeout((() => this._mouseTouchFinish()), 500) }, this._handleThemeChange = e => { const t = e,
                        n = this.container,
                        i = n.options,
                        r = i.defaultThemes,
                        o = t.matches ? r.dark : r.light,
                        a = i.themes.find((e => e.name === o));
                    a && a.default.auto && n.loadTheme(o) }, this._handleVisibilityChange = () => { const e = this.container,
                        t = e.actualOptions;
                    this._mouseTouchFinish(), t.pauseOnBlur && (document && document.hidden ? (e.pageHidden = !0, e.pause()) : (e.pageHidden = !1, e.getAnimationStatus() ? e.play(!0) : e.draw(!0))) }, this._handleWindowResize = async () => { this._resizeTimeout && (clearTimeout(this._resizeTimeout), delete this._resizeTimeout), this._resizeTimeout = setTimeout((async () => { const e = this.container.canvas;
                        e && await e.windowResize() }), 1e3 * this.container.actualOptions.interactivity.events.resize.delay) }, this._manageInteractivityListeners = (e, t) => { const n = this._handlers,
                        i = this.container,
                        r = i.actualOptions,
                        s = i.interactivity.element; if (!s) return; const l = s,
                        u = i.canvas.element;
                    u && (u.style.pointerEvents = l === u ? "initial" : "none"), (r.interactivity.events.onHover.enable || r.interactivity.events.onClick.enable) && (ue(s, o, n.mouseMove, t), ue(s, "touchstart", n.touchStart, t), ue(s, "touchmove", n.touchMove, t), r.interactivity.events.onClick.enable ? (ue(s, a, n.touchEndClick, t), ue(s, "pointerup", n.mouseUp, t), ue(s, "pointerdown", n.mouseDown, t)) : ue(s, a, n.touchEnd, t), ue(s, e, n.mouseLeave, t), ue(s, "touchcancel", n.touchCancel, t)) }, this._manageListeners = e => { const t = this._handlers,
                        n = this.container,
                        i = n.actualOptions.interactivity.detectsOn,
                        o = n.canvas.element; let a = r; if ("window" === i) n.interactivity.element = window, a = "pointerout";
                    else if ("parent" === i && o) { var s;
                        n.interactivity.element = null !== (s = o.parentElement) && void 0 !== s ? s : o.parentNode } else n.interactivity.element = o;
                    this._manageMediaMatch(e), this._manageResize(e), this._manageInteractivityListeners(a, e), document && ue(document, "visibilitychange", t.visibilityChange, e, !1) }, this._manageMediaMatch = e => { const t = this._handlers,
                        n = P("(prefers-color-scheme: dark)");
                    n && (void 0 === n.addEventListener ? void 0 !== n.addListener && (e ? n.addListener(t.oldThemeChange) : n.removeListener(t.oldThemeChange)) : ue(n, "change", t.themeChange, e)) }, this._manageResize = e => { const t = this._handlers,
                        n = this.container; if (!n.actualOptions.interactivity.events.resize) return; if ("undefined" === typeof ResizeObserver) return void ue(window, "resize", t.resize, e); const i = n.canvas.element;
                    this._resizeObserver && !e ? (i && this._resizeObserver.unobserve(i), this._resizeObserver.disconnect(), delete this._resizeObserver) : !this._resizeObserver && e && i && (this._resizeObserver = new ResizeObserver((async e => { e.find((e => e.target === i)) && await this._handleWindowResize() })), this._resizeObserver.observe(i)) }, this._mouseDown = () => { const { interactivity: e } = this.container; if (!e) return; const { mouse: t } = e;
                    t.clicking = !0, t.downPosition = t.position }, this._mouseTouchClick = e => { const t = this.container,
                        n = t.actualOptions,
                        { mouse: i } = t.interactivity;
                    i.inside = !0; let r = !1; const o = i.position; if (o && n.interactivity.events.onClick.enable) { for (const [, e] of t.plugins)
                            if (e.clickPositionValid && (r = e.clickPositionValid(o), r)) break;
                        r || this._doMouseTouchClick(e), i.clicking = !1 } }, this._mouseTouchFinish = () => { const e = this.container.interactivity; if (!e) return; const t = e.mouse;
                    delete t.position, delete t.clickPosition, delete t.downPosition, e.status = r, t.inside = !1, t.clicking = !1 }, this._mouseTouchMove = e => { const t = this.container,
                        n = t.actualOptions,
                        i = t.interactivity,
                        r = t.canvas.element; if (!i || !i.element) return; let a; if (i.mouse.inside = !0, e.type.startsWith("pointer")) { this._canPush = !0; const t = e; if (i.element === window) { if (r) { const e = r.getBoundingClientRect();
                                a = { x: t.clientX - e.left, y: t.clientY - e.top } } } else if ("parent" === n.interactivity.detectsOn) { const e = t.target,
                                n = t.currentTarget; if (e && n && r) { const i = e.getBoundingClientRect(),
                                    o = n.getBoundingClientRect(),
                                    s = r.getBoundingClientRect();
                                a = { x: t.offsetX + 2 * i.left - (o.left + s.left), y: t.offsetY + 2 * i.top - (o.top + s.top) } } else { var s, l;
                                a = { x: null !== (s = t.offsetX) && void 0 !== s ? s : t.clientX, y: null !== (l = t.offsetY) && void 0 !== l ? l : t.clientY } } } else if (t.target === r) { var u, c;
                            a = { x: null !== (u = t.offsetX) && void 0 !== u ? u : t.clientX, y: null !== (c = t.offsetY) && void 0 !== c ? c : t.clientY } } } else if (this._canPush = "touchmove" !== e.type, r) { var d, h; const t = e,
                            n = t.touches[t.touches.length - 1],
                            i = r.getBoundingClientRect();
                        a = { x: n.clientX - (null !== (d = i.left) && void 0 !== d ? d : 0), y: n.clientY - (null !== (h = i.top) && void 0 !== h ? h : 0) } } const f = t.retina.pixelRatio;
                    a && (a.x *= f, a.y *= f), i.mouse.position = a, i.status = o }, this._touchEnd = e => { const t = e,
                        n = Array.from(t.changedTouches); for (const i of n) this._touches.delete(i.identifier);
                    this._mouseTouchFinish() }, this._touchEndClick = e => { const t = e,
                        n = Array.from(t.changedTouches); for (const i of n) this._touches.delete(i.identifier);
                    this._mouseTouchClick(e) }, this._touchStart = e => { const t = e,
                        n = Array.from(t.changedTouches); for (const i of n) this._touches.set(i.identifier, performance.now());
                    this._mouseTouchMove(e) }, this._canPush = !0, this._touches = new Map, this._handlers = { mouseDown: () => this._mouseDown(), mouseLeave: () => this._mouseTouchFinish(), mouseMove: e => this._mouseTouchMove(e), mouseUp: e => this._mouseTouchClick(e), touchStart: e => this._touchStart(e), touchMove: e => this._mouseTouchMove(e), touchEnd: e => this._touchEnd(e), touchCancel: e => this._touchEnd(e), touchEndClick: e => this._touchEndClick(e), visibilityChange: () => this._handleVisibilityChange(), themeChange: e => this._handleThemeChange(e), oldThemeChange: e => this._handleThemeChange(e), resize: () => { this._handleWindowResize() } } } addListeners() { this._manageListeners(!0) } removeListeners() { this._manageListeners(!1) } } class de { constructor() { this.value = "" } static create(e, t) { const n = new de; return n.load(e), void 0 !== t && (U(t) || W(t) ? n.load({ value: t }) : n.load(t)), n } load(e) { void 0 !== (null === e || void 0 === e ? void 0 : e.value) && (this.value = e.value) } } class he { constructor() { this.color = new de, this.color.value = "", this.image = "", this.position = "", this.repeat = "", this.size = "", this.opacity = 1 } load(e) { e && (void 0 !== e.color && (this.color = de.create(this.color, e.color)), void 0 !== e.image && (this.image = e.image), void 0 !== e.position && (this.position = e.position), void 0 !== e.repeat && (this.repeat = e.repeat), void 0 !== e.size && (this.size = e.size), void 0 !== e.opacity && (this.opacity = e.opacity)) } } class fe { constructor() { this.color = new de, this.color.value = "#fff", this.opacity = 1 } load(e) { e && (void 0 !== e.color && (this.color = de.create(this.color, e.color)), void 0 !== e.opacity && (this.opacity = e.opacity)) } } class pe { constructor() { this.composite = "destination-out", this.cover = new fe, this.enable = !1 } load(e) { if (e) { if (void 0 !== e.composite && (this.composite = e.composite), void 0 !== e.cover) { const t = e.cover,
                            n = U(e.cover) ? { color: e.cover } : e.cover;
                        this.cover.load(void 0 !== t.color ? t : { color: n }) } void 0 !== e.enable && (this.enable = e.enable) } } } class ve { constructor() { this.enable = !0, this.zIndex = 0 } load(e) { e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.zIndex && (this.zIndex = e.zIndex)) } } class me { constructor() { this.enable = !1, this.mode = [] } load(e) { e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.mode && (this.mode = e.mode)) } } class ge { constructor() { this.selectors = [], this.enable = !1, this.mode = [], this.type = "circle" } get el() { return this.elementId } set el(e) { this.elementId = e } get elementId() { return this.ids } set elementId(e) { this.ids = e } get ids() { return D(this.selectors, (e => e.replace("#", ""))) } set ids(e) { this.selectors = D(e, (e => "#".concat(e))) } load(e) { var t, n; if (!e) return; const i = null !== (t = null !== (n = e.ids) && void 0 !== n ? n : e.elementId) && void 0 !== t ? t : e.el;
                void 0 !== i && (this.ids = i), void 0 !== e.selectors && (this.selectors = e.selectors), void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.mode && (this.mode = e.mode), void 0 !== e.type && (this.type = e.type) } } class ye { constructor() { this.enable = !1, this.force = 2, this.smooth = 10 } load(e) { e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.force && (this.force = e.force), void 0 !== e.smooth && (this.smooth = e.smooth)) } } class be { constructor() { this.enable = !1, this.mode = [], this.parallax = new ye } load(e) { e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.mode && (this.mode = e.mode), this.parallax.load(e.parallax)) } } class we { constructor() { this.delay = .5, this.enable = !0 } load(e) { void 0 !== e && (void 0 !== e.delay && (this.delay = e.delay), void 0 !== e.enable && (this.enable = e.enable)) } } class _e { constructor() { this.onClick = new me, this.onDiv = new ge, this.onHover = new be, this.resize = new we } get onclick() { return this.onClick } set onclick(e) { this.onClick = e } get ondiv() { return this.onDiv } set ondiv(e) { this.onDiv = e } get onhover() { return this.onHover } set onhover(e) { this.onHover = e } load(e) { var t, n, i; if (!e) return;
                this.onClick.load(null !== (t = e.onClick) && void 0 !== t ? t : e.onclick); const r = null !== (n = e.onDiv) && void 0 !== n ? n : e.ondiv;
                void 0 !== r && (this.onDiv = D(r, (e => { const t = new ge; return t.load(e), t }))), this.onHover.load(null !== (i = e.onHover) && void 0 !== i ? i : e.onhover), V(e.resize) ? this.resize.enable = e.resize : this.resize.load(e.resize) } } class ke { constructor(e, t) { this._engine = e, this._container = t } load(e) { if (!e) return; if (!this._container) return; const t = this._engine.plugins.interactors.get(this._container); if (t)
                    for (const n of t) n.loadModeOptions && n.loadModeOptions(this, e) } } class xe { constructor(e, t) { this.detectsOn = "window", this.events = new _e, this.modes = new ke(e, t) } get detect_on() { return this.detectsOn } set detect_on(e) { this.detectsOn = e } load(e) { var t; if (!e) return; const n = null !== (t = e.detectsOn) && void 0 !== t ? t : e.detect_on;
                void 0 !== n && (this.detectsOn = n), this.events.load(e.events), this.modes.load(e.modes) } } class Se { load(e) { if (e) { var t, n, i; if (e.position) this.position = { x: null !== (t = e.position.x) && void 0 !== t ? t : 50, y: null !== (n = e.position.y) && void 0 !== n ? n : 50, mode: null !== (i = e.position.mode) && void 0 !== i ? i : "percent" };
                    e.options && (this.options = R({}, e.options)) } } } class ze { constructor() { this.maxWidth = 1 / 0, this.options = {}, this.mode = "canvas" } load(e) { e && (void 0 !== e.maxWidth && (this.maxWidth = e.maxWidth), void 0 !== e.mode && ("screen" === e.mode ? this.mode = "screen" : this.mode = "canvas"), void 0 !== e.options && (this.options = R({}, e.options))) } } class Ce { constructor() { this.auto = !1, this.mode = "any", this.value = !1 } load(e) { e && (void 0 !== e.auto && (this.auto = e.auto), void 0 !== e.mode && (this.mode = e.mode), void 0 !== e.value && (this.value = e.value)) } } class Pe { constructor() { this.name = "", this.default = new Ce } load(e) { e && (void 0 !== e.name && (this.name = e.name), this.default.load(e.default), void 0 !== e.options && (this.options = R({}, e.options))) } } class Ee { constructor() { this.count = 0, this.enable = !1, this.offset = 0, this.speed = 1, this.delay = 0, this.decay = 0, this.sync = !0 } load(e) { e && (void 0 !== e.count && (this.count = g(e.count)), void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.offset && (this.offset = g(e.offset)), void 0 !== e.speed && (this.speed = g(e.speed)), void 0 !== e.decay && (this.decay = g(e.decay)), void 0 !== e.delay && (this.delay = g(e.delay)), void 0 !== e.sync && (this.sync = e.sync)) } } class Me { constructor() { this.h = new Ee, this.s = new Ee, this.l = new Ee } load(e) { e && (this.h.load(e.h), this.s.load(e.s), this.l.load(e.l)) } } class Te extends de { constructor() { super(), this.animation = new Me } static create(e, t) { const n = new Te; return n.load(e), void 0 !== t && (U(t) || W(t) ? n.load({ value: t }) : n.load(t)), n } load(e) { if (super.load(e), !e) return; const t = e.animation;
                void 0 !== t && (void 0 !== t.enable ? this.animation.h.load(t) : this.animation.load(e.animation)) } } class Oe { constructor() { this.speed = 2 } load(e) { e && void 0 !== e.speed && (this.speed = e.speed) } } class Le { constructor() { this.enable = !0, this.retries = 0 } load(e) { e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.retries && (this.retries = e.retries)) } } class Re { constructor() { this.enable = !1, this.minimumValue = 0 } load(e) { e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.minimumValue && (this.minimumValue = e.minimumValue)) } } class De { constructor() { this.random = new Re, this.value = 0 } load(e) { e && (V(e.random) ? this.random.enable = e.random : this.random.load(e.random), void 0 !== e.value && (this.value = g(e.value, this.random.enable ? this.random.minimumValue : void 0))) } } class Ie extends De { constructor() { super(), this.random.minimumValue = .1, this.value = 1 } } class Ne { constructor() { this.horizontal = new Ie, this.vertical = new Ie } load(e) { e && (this.horizontal.load(e.horizontal), this.vertical.load(e.vertical)) } } class Fe { constructor() { this.absorb = new Oe, this.bounce = new Ne, this.enable = !1, this.maxSpeed = 50, this.mode = "bounce", this.overlap = new Le } load(e) { e && (this.absorb.load(e.absorb), this.bounce.load(e.bounce), void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.maxSpeed && (this.maxSpeed = g(e.maxSpeed)), void 0 !== e.mode && (this.mode = e.mode), this.overlap.load(e.overlap)) } } class Ae { constructor() { this.offset = 0, this.value = 90 } load(e) { e && (void 0 !== e.offset && (this.offset = g(e.offset)), void 0 !== e.value && (this.value = g(e.value))) } } class Ve { constructor() { this.distance = 200, this.enable = !1, this.rotate = { x: 3e3, y: 3e3 } } get rotateX() { return this.rotate.x } set rotateX(e) { this.rotate.x = e } get rotateY() { return this.rotate.y } set rotateY(e) { this.rotate.y = e } load(e) { var t, n, i, r; if (!e) return;
                void 0 !== e.distance && (this.distance = g(e.distance)), void 0 !== e.enable && (this.enable = e.enable); const o = null !== (t = null === (n = e.rotate) || void 0 === n ? void 0 : n.x) && void 0 !== t ? t : e.rotateX;
                void 0 !== o && (this.rotate.x = o); const a = null !== (i = null === (r = e.rotate) || void 0 === r ? void 0 : r.y) && void 0 !== i ? i : e.rotateY;
                void 0 !== a && (this.rotate.y = a) } } class Ue { constructor() { this.x = 50, this.y = 50, this.mode = "percent", this.radius = 0 } load(e) { e && (void 0 !== e.x && (this.x = e.x), void 0 !== e.y && (this.y = e.y), void 0 !== e.mode && (this.mode = e.mode), void 0 !== e.radius && (this.radius = e.radius)) } } class Be { constructor() { this.acceleration = 9.81, this.enable = !1, this.inverse = !1, this.maxSpeed = 50 } load(e) { e && (void 0 !== e.acceleration && (this.acceleration = g(e.acceleration)), void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.inverse && (this.inverse = e.inverse), void 0 !== e.maxSpeed && (this.maxSpeed = g(e.maxSpeed))) } } class He { constructor() { this.clamp = !0, this.delay = new De, this.enable = !1, this.options = {} } load(e) { e && (void 0 !== e.clamp && (this.clamp = e.clamp), this.delay.load(e.delay), void 0 !== e.enable && (this.enable = e.enable), this.generator = e.generator, e.options && (this.options = R(this.options, e.options))) } } class je { load(e) { e && (void 0 !== e.color && (this.color = de.create(this.color, e.color)), void 0 !== e.image && (this.image = e.image)) } } class We { constructor() { this.enable = !1, this.length = 10, this.fill = new je } get fillColor() { return this.fill.color } set fillColor(e) { this.fill.load({ color: e }) } load(e) { e && (void 0 !== e.enable && (this.enable = e.enable), void 0 === e.fill && void 0 === e.fillColor || this.fill.load(e.fill || { color: e.fillColor }), void 0 !== e.length && (this.length = e.length)) } } class $e { constructor() { this.default = "out" } load(e) { var t, n, i, r;
                e && (void 0 !== e.default && (this.default = e.default), this.bottom = null !== (t = e.bottom) && void 0 !== t ? t : e.default, this.left = null !== (n = e.left) && void 0 !== n ? n : e.default, this.right = null !== (i = e.right) && void 0 !== i ? i : e.default, this.top = null !== (r = e.top) && void 0 !== r ? r : e.default) } } class Qe { constructor() { this.acceleration = 0, this.enable = !1 } load(e) { e && (void 0 !== e.acceleration && (this.acceleration = g(e.acceleration)), void 0 !== e.enable && (this.enable = e.enable), e.position && (this.position = R({}, e.position))) } } class qe { constructor() { this.angle = new Ae, this.attract = new Ve, this.center = new Ue, this.decay = 0, this.distance = {}, this.direction = "none", this.drift = 0, this.enable = !1, this.gravity = new Be, this.path = new He, this.outModes = new $e, this.random = !1, this.size = !1, this.speed = 2, this.spin = new Qe, this.straight = !1, this.trail = new We, this.vibrate = !1, this.warp = !1 } get bounce() { return this.collisions } set bounce(e) { this.collisions = e } get collisions() { return !1 } set collisions(e) {} get noise() { return this.path } set noise(e) { this.path = e } get outMode() { return this.outModes.default } set outMode(e) { this.outModes.default = e } get out_mode() { return this.outMode } set out_mode(e) { this.outMode = e } load(e) { var t, n, i; if (!e) return;
                this.angle.load(B(e.angle) ? { value: e.angle } : e.angle), this.attract.load(e.attract), this.center.load(e.center), void 0 !== e.decay && (this.decay = g(e.decay)), void 0 !== e.direction && (this.direction = e.direction), void 0 !== e.distance && (this.distance = B(e.distance) ? { horizontal: e.distance, vertical: e.distance } : { ...e.distance }), void 0 !== e.drift && (this.drift = g(e.drift)), void 0 !== e.enable && (this.enable = e.enable), this.gravity.load(e.gravity); const r = null !== (t = null !== (n = e.outModes) && void 0 !== n ? n : e.outMode) && void 0 !== t ? t : e.out_mode;
                void 0 !== r && (j(r) ? this.outModes.load(r) : this.outModes.load({ default: r })), this.path.load(null !== (i = e.path) && void 0 !== i ? i : e.noise), void 0 !== e.random && (this.random = e.random), void 0 !== e.size && (this.size = e.size), void 0 !== e.speed && (this.speed = g(e.speed)), this.spin.load(e.spin), void 0 !== e.straight && (this.straight = e.straight), this.trail.load(e.trail), void 0 !== e.vibrate && (this.vibrate = e.vibrate), void 0 !== e.warp && (this.warp = e.warp) } } class Ye { constructor() { this.count = 0, this.enable = !1, this.speed = 1, this.decay = 0, this.delay = 0, this.sync = !1 } load(e) { e && (void 0 !== e.count && (this.count = g(e.count)), void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.speed && (this.speed = g(e.speed)), void 0 !== e.decay && (this.decay = g(e.decay)), void 0 !== e.delay && (this.delay = g(e.delay)), void 0 !== e.sync && (this.sync = e.sync)) } } class Ge extends Ye { constructor() { super(), this.mode = "auto", this.startValue = "random" } load(e) { super.load(e), e && (void 0 !== e.minimumValue && (this.minimumValue = e.minimumValue), void 0 !== e.mode && (this.mode = e.mode), void 0 !== e.startValue && (this.startValue = e.startValue)) } } class Xe extends Ge { constructor() { super(), this.destroy = "none", this.speed = 2 } get opacity_min() { return this.minimumValue } set opacity_min(e) { this.minimumValue = e } load(e) { void 0 !== (null === e || void 0 === e ? void 0 : e.opacity_min) && void 0 === e.minimumValue && (e.minimumValue = e.opacity_min), super.load(e), e && void 0 !== e.destroy && (this.destroy = e.destroy) } } class Ke extends De { constructor() { super(), this.animation = new Xe, this.random.minimumValue = .1, this.value = 1 } get anim() { return this.animation } set anim(e) { this.animation = e } load(e) { var t; if (!e) return;
                super.load(e); const n = null !== (t = e.animation) && void 0 !== t ? t : e.anim;
                void 0 !== n && (this.animation.load(n), this.value = g(this.value, this.animation.enable ? this.animation.minimumValue : void 0)) } } class Ze { constructor() { this.enable = !1, this.width = 1920, this.height = 1080 } get area() { return this.width } set area(e) { this.width = e } get factor() { return this.height } set factor(e) { this.height = e } get value_area() { return this.area } set value_area(e) { this.area = e } load(e) { var t, n, i; if (!e) return;
                void 0 !== e.enable && (this.enable = e.enable); const r = null !== (t = null !== (n = e.width) && void 0 !== n ? n : e.area) && void 0 !== t ? t : e.value_area;
                void 0 !== r && (this.width = r); const o = null !== (i = e.height) && void 0 !== i ? i : e.factor;
                void 0 !== o && (this.height = o) } } class Je { constructor() { this.density = new Ze, this.limit = 0, this.value = 0 } get max() { return this.limit } set max(e) { this.limit = e } load(e) { var t; if (!e) return;
                this.density.load(e.density); const n = null !== (t = e.limit) && void 0 !== t ? t : e.max;
                void 0 !== n && (this.limit = n), void 0 !== e.value && (this.value = e.value) } } class et { constructor() { this.blur = 0, this.color = new de, this.enable = !1, this.offset = { x: 0, y: 0 }, this.color.value = "#000" } load(e) { e && (void 0 !== e.blur && (this.blur = e.blur), this.color = de.create(this.color, e.color), void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.offset && (void 0 !== e.offset.x && (this.offset.x = e.offset.x), void 0 !== e.offset.y && (this.offset.y = e.offset.y))) } } const tt = "character",
            nt = "char",
            it = "image",
            rt = "images",
            ot = "polygon",
            at = "star";
        class st { constructor() { this.loadShape = (e, t, n, i) => { var r; if (!e) return; const o = W(e),
                        a = o ? [] : {},
                        s = o !== W(this.options[t]),
                        l = o !== W(this.options[n]); var u;
                    (s && (this.options[t] = a), l && i && (this.options[n] = a), this.options[t] = R(null !== (r = this.options[t]) && void 0 !== r ? r : a, e), !this.options[n] || i) && (this.options[n] = R(null !== (u = this.options[n]) && void 0 !== u ? u : a, e)) }, this.close = !0, this.fill = !0, this.options = {}, this.type = "circle" } get character() { var e; return null !== (e = this.options[tt]) && void 0 !== e ? e : this.options[nt] } set character(e) { this.options[nt] = this.options[tt] = e } get custom() { return this.options } set custom(e) { this.options = e } get image() { var e; return null !== (e = this.options[it]) && void 0 !== e ? e : this.options[rt] } set image(e) { this.options[rt] = this.options[it] = e } get images() { return this.image } set images(e) { this.image = e } get polygon() { var e; return null !== (e = this.options[ot]) && void 0 !== e ? e : this.options[at] } set polygon(e) { this.options[at] = this.options[ot] = e } get stroke() { return [] } set stroke(e) {} load(e) { var t, n; if (!e) return; const i = null !== (t = e.options) && void 0 !== t ? t : e.custom; if (void 0 !== i)
                    for (const o in i) { const e = i[o]; var r; if (e) this.options[o] = R(null !== (r = this.options[o]) && void 0 !== r ? r : {}, e) } this.loadShape(e.character, tt, nt, !0), this.loadShape(e.polygon, ot, at, !1), this.loadShape(null !== (n = e.image) && void 0 !== n ? n : e.images, it, rt, !0), void 0 !== e.close && (this.close = e.close), void 0 !== e.fill && (this.fill = e.fill), void 0 !== e.type && (this.type = e.type) } } class lt extends Ge { constructor() { super(), this.destroy = "none", this.speed = 5 } get size_min() { return this.minimumValue } set size_min(e) { this.minimumValue = e } load(e) { void 0 !== (null === e || void 0 === e ? void 0 : e.size_min) && void 0 === e.minimumValue && (e.minimumValue = e.size_min), super.load(e), e && void 0 !== e.destroy && (this.destroy = e.destroy) } } class ut extends De { constructor() { super(), this.animation = new lt, this.random.minimumValue = 1, this.value = 3 } get anim() { return this.animation } set anim(e) { this.animation = e } load(e) { var t; if (super.load(e), !e) return; const n = null !== (t = e.animation) && void 0 !== t ? t : e.anim;
                void 0 !== n && (this.animation.load(n), this.value = g(this.value, this.animation.enable ? this.animation.minimumValue : void 0)) } } class ct { constructor() { this.width = 0 } load(e) { e && (void 0 !== e.color && (this.color = Te.create(this.color, e.color)), void 0 !== e.width && (this.width = g(e.width)), void 0 !== e.opacity && (this.opacity = g(e.opacity))) } } class dt extends De { constructor() { super(), this.opacityRate = 1, this.sizeRate = 1, this.velocityRate = 1 } load(e) { super.load(e), e && (void 0 !== e.opacityRate && (this.opacityRate = e.opacityRate), void 0 !== e.sizeRate && (this.sizeRate = e.sizeRate), void 0 !== e.velocityRate && (this.velocityRate = e.velocityRate)) } } class ht { constructor(e, t) { this._engine = e, this._container = t, this.bounce = new Ne, this.collisions = new Fe, this.color = new Te, this.color.value = "#fff", this.groups = {}, this.move = new qe, this.number = new Je, this.opacity = new Ke, this.reduceDuplicates = !1, this.shadow = new et, this.shape = new st, this.size = new ut, this.stroke = new ct, this.zIndex = new dt } load(e) { var t, n, i, r, o; if (!e) return; if (this.bounce.load(e.bounce), this.color.load(Te.create(this.color, e.color)), void 0 !== e.groups)
                    for (const u in e.groups) { const t = e.groups[u]; var a; if (void 0 !== t) this.groups[u] = R(null !== (a = this.groups[u]) && void 0 !== a ? a : {}, t) } this.move.load(e.move), this.number.load(e.number), this.opacity.load(e.opacity), void 0 !== e.reduceDuplicates && (this.reduceDuplicates = e.reduceDuplicates), this.shape.load(e.shape), this.size.load(e.size), this.shadow.load(e.shadow), this.zIndex.load(e.zIndex); const s = null !== (t = null === (n = e.move) || void 0 === n ? void 0 : n.collisions) && void 0 !== t ? t : null === (i = e.move) || void 0 === i ? void 0 : i.bounce;
                void 0 !== s && (this.collisions.enable = s), this.collisions.load(e.collisions), void 0 !== e.interactivity && (this.interactivity = R({}, e.interactivity)); const l = null !== (r = e.stroke) && void 0 !== r ? r : null === (o = e.shape) || void 0 === o ? void 0 : o.stroke; if (l && (this.stroke = D(l, (e => { const t = new ct; return t.load(e), t }))), this._container) { const t = this._engine.plugins.updaters.get(this._container); if (t)
                        for (const i of t) i.loadOptions && i.loadOptions(this, e); const n = this._engine.plugins.interactors.get(this._container); if (n)
                        for (const i of n) i.loadParticlesOptions && i.loadParticlesOptions(this, e) } } }

        function ft(e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i]; for (const r of n) e.load(r) }

        function pt(e, t) { const n = new ht(e, t); for (var i = arguments.length, r = new Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++) r[o - 2] = arguments[o]; return ft(n, ...r), n } class vt { constructor(e, t) { this._findDefaultTheme = e => { var t; return null !== (t = this.themes.find((t => t.default.value && t.default.mode === e))) && void 0 !== t ? t : this.themes.find((e => e.default.value && "any" === e.default.mode)) }, this._importPreset = e => { this.load(this._engine.plugins.getPreset(e)) }, this._engine = e, this._container = t, this.autoPlay = !0, this.background = new he, this.backgroundMask = new pe, this.defaultThemes = {}, this.delay = 0, this.fullScreen = new ve, this.detectRetina = !0, this.duration = 0, this.fpsLimit = 120, this.interactivity = new xe(e, t), this.manualParticles = [], this.particles = pt(this._engine, this._container), this.pauseOnBlur = !0, this.pauseOnOutsideViewport = !0, this.responsive = [], this.smooth = !1, this.style = {}, this.themes = [], this.zLayers = 100 } get backgroundMode() { return this.fullScreen } set backgroundMode(e) { this.fullScreen.load(e) } get fps_limit() { return this.fpsLimit } set fps_limit(e) { this.fpsLimit = e } get retina_detect() { return this.detectRetina } set retina_detect(e) { this.detectRetina = e } load(e) { var t, n, i, r, o; if (!e) return;
                void 0 !== e.preset && D(e.preset, (e => this._importPreset(e))), void 0 !== e.autoPlay && (this.autoPlay = e.autoPlay), void 0 !== e.delay && (this.delay = g(e.delay)); const a = null !== (t = e.detectRetina) && void 0 !== t ? t : e.retina_detect;
                void 0 !== a && (this.detectRetina = a), void 0 !== e.duration && (this.duration = g(e.duration)); const s = null !== (n = e.fpsLimit) && void 0 !== n ? n : e.fps_limit;
                void 0 !== s && (this.fpsLimit = s), void 0 !== e.pauseOnBlur && (this.pauseOnBlur = e.pauseOnBlur), void 0 !== e.pauseOnOutsideViewport && (this.pauseOnOutsideViewport = e.pauseOnOutsideViewport), void 0 !== e.zLayers && (this.zLayers = e.zLayers), this.background.load(e.background); const l = null !== (i = e.fullScreen) && void 0 !== i ? i : e.backgroundMode;
                V(l) ? this.fullScreen.enable = l : this.fullScreen.load(l), this.backgroundMask.load(e.backgroundMask), this.interactivity.load(e.interactivity), e.manualParticles && (this.manualParticles = e.manualParticles.map((e => { const t = new Se; return t.load(e), t }))), this.particles.load(e.particles), this.style = R(this.style, e.style), this._engine.plugins.loadOptions(this, e), void 0 !== e.smooth && (this.smooth = e.smooth); const u = this._engine.plugins.interactors.get(this._container); if (u)
                    for (const c of u) c.loadOptions && c.loadOptions(this, e); if (void 0 !== e.responsive)
                    for (const c of e.responsive) { const e = new ze;
                        e.load(c), this.responsive.push(e) }
                if (this.responsive.sort(((e, t) => e.maxWidth - t.maxWidth)), void 0 !== e.themes)
                    for (const c of e.themes) { const e = this.themes.find((e => e.name === c.name)); if (e) e.load(c);
                        else { const e = new Pe;
                            e.load(c), this.themes.push(e) } } this.defaultThemes.dark = null === (r = this._findDefaultTheme("dark")) || void 0 === r ? void 0 : r.name, this.defaultThemes.light = null === (o = this._findDefaultTheme("light")) || void 0 === o ? void 0 : o.name } setResponsive(e, t, n) { this.load(n); const i = this.responsive.find((n => "screen" === n.mode && screen ? n.maxWidth > screen.availWidth : n.maxWidth * t > e)); return this.load(null === i || void 0 === i ? void 0 : i.options), null === i || void 0 === i ? void 0 : i.maxWidth } setTheme(e) { if (e) { const t = this.themes.find((t => t.name === e));
                    t && this.load(t.options) } else { const e = P("(prefers-color-scheme: dark)"),
                        t = e && e.matches,
                        n = this._findDefaultTheme(t ? "dark" : "light");
                    n && this.load(n.options) } } } class mt { constructor(e, t) { this.container = t, this._engine = e, this._interactors = e.plugins.getInteractors(this.container, !0), this._externalInteractors = [], this._particleInteractors = [] } async externalInteract(e) { for (const t of this._externalInteractors) t.isEnabled() && await t.interact(e) } handleClickMode(e) { for (const t of this._externalInteractors) t.handleClickMode && t.handleClickMode(e) } init() { this._externalInteractors = [], this._particleInteractors = []; for (const e of this._interactors) { switch (e.type) {
                        case "external":
                            this._externalInteractors.push(e); break;
                        case "particles":
                            this._particleInteractors.push(e) } e.init() } } async particlesInteract(e, t) { for (const n of this._externalInteractors) n.clear(e, t); for (const n of this._particleInteractors) n.isEnabled(e) && await n.interact(e, t) } async reset(e) { for (const t of this._externalInteractors) t.isEnabled() && t.reset(e); for (const t of this._particleInteractors) t.isEnabled(e) && t.reset(e) } } const gt = e => { if (!E(e.outMode, e.checkModes)) return; const t = 2 * e.radius;
            e.coord > e.maxCoord - t ? e.setCb(-e.radius) : e.coord < t && e.setCb(e.radius) };
        class yt { constructor(e, t, n, i, r, o) { var a = this;
                this.container = n, this._calcPosition = function(e, t, n) { var i, r, o, s; let u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0; for (const [, m] of e.plugins) { const e = void 0 !== m.particlePosition ? m.particlePosition(t, a) : void 0; if (e) return l.create(e.x, e.y, n) } const c = k({ size: e.canvas.size, position: t }),
                        d = l.create(c.x, c.y, n),
                        h = a.getRadius(),
                        f = a.options.move.outModes,
                        p = t => { gt({ outMode: t, checkModes: ["bounce", "bounce-horizontal"], coord: d.x, maxCoord: e.canvas.size.width, setCb: e => d.x += e, radius: h }) },
                        v = t => { gt({ outMode: t, checkModes: ["bounce", "bounce-vertical"], coord: d.y, maxCoord: e.canvas.size.height, setCb: e => d.y += e, radius: h }) }; return p(null !== (i = f.left) && void 0 !== i ? i : f.default), p(null !== (r = f.right) && void 0 !== r ? r : f.default), v(null !== (o = f.top) && void 0 !== o ? o : f.default), v(null !== (s = f.bottom) && void 0 !== s ? s : f.default), a._checkOverlap(d, u) ? a._calcPosition(e, void 0, n, u + 1) : d }, this._calculateVelocity = () => { const e = function(e) { const t = u.origin; return t.length = 1, t.angle = e, t }(this.direction).copy(),
                        t = this.options.move; if ("inside" === t.direction || "outside" === t.direction) return e; const n = Math.PI / 180 * p(t.angle.value),
                        i = Math.PI / 180 * p(t.angle.offset),
                        r = { left: i - n / 2, right: i + n / 2 }; return t.straight || (e.angle += f(g(r.left, r.right))), t.random && "number" === typeof t.speed && (e.length *= d()), e }, this._checkOverlap = function(e) { let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; const n = a.options.collisions,
                        i = a.getRadius(); if (!n.enable) return !1; const r = n.overlap; if (r.enable) return !1; const o = r.retries; if (o >= 0 && t > o) throw new Error("".concat(s, " particle is overlapping and can't be placed")); return !!a.container.particles.find((t => w(e, t.position) < i + t.getRadius())) }, this._getRollColor = e => { var t; if (!e || !this.roll || !this.backColor && !this.roll.alter) return e; const n = this.roll.horizontal && this.roll.vertical ? 2 : 1,
                        i = this.roll.horizontal ? Math.PI / 2 : 0; return Math.floor(((null !== (t = this.roll.angle) && void 0 !== t ? t : 0) + i) / (Math.PI / n)) % 2 ? this.backColor ? this.backColor : this.roll.alter ? function(e, t, n) { return { h: e.h, s: e.s, l: e.l + ("darken" === t ? -1 : 1) * n } }(e, this.roll.alter.type, this.roll.alter.value) : e : e }, this._initPosition = e => { var t, n; const i = this.container,
                        r = p(this.options.zIndex.value);
                    this.position = this._calcPosition(i, e, h(r, 0, i.zLayers)), this.initialPosition = this.position.copy(); const o = i.canvas.size; switch (this.moveCenter = { ...A(this.options.move.center, o), radius: null !== (t = this.options.move.center.radius) && void 0 !== t ? t : 0, mode: null !== (n = this.options.move.center.mode) && void 0 !== n ? n : "percent" }, this.direction = function(e, t, n) { if (B(e)) return e * Math.PI / 180; switch (e) {
                            case "top":
                                return -Math.PI / 2;
                            case "top-right":
                                return -Math.PI / 4;
                            case "right":
                                return 0;
                            case "bottom-right":
                                return Math.PI / 4;
                            case "bottom":
                                return Math.PI / 2;
                            case "bottom-left":
                                return 3 * Math.PI / 4;
                            case "left":
                                return Math.PI;
                            case "top-left":
                                return -3 * Math.PI / 4;
                            case "inside":
                                return Math.atan2(n.y - t.y, n.x - t.x);
                            case "outside":
                                return Math.atan2(t.y - n.y, t.x - n.x);
                            default:
                                return d() * Math.PI * 2 } }(this.options.move.direction, this.position, this.moveCenter), this.options.move.direction) {
                        case "inside":
                            this.outType = "inside"; break;
                        case "outside":
                            this.outType = "outside" } this.offset = u.origin }, this._loadShapeData = (e, t) => { const n = e.options[this.shape]; if (n) return R({ close: e.close, fill: e.fill }, I(n, this.id, t)) }, this._engine = e, this.init(t, i, r, o) } destroy(e) { if (this.unbreakable || this.destroyed) return;
                this.destroyed = !0, this.bubble.inRange = !1, this.slow.inRange = !1; const t = this.container,
                    n = this.pathGenerator; for (const [, i] of t.plugins) i.particleDestroyed && i.particleDestroyed(this, e); for (const i of t.particles.updaters) i.particleDestroyed && i.particleDestroyed(this, e);
                n && n.reset(this) } draw(e) { const t = this.container; for (const [, n] of t.plugins) t.canvas.drawParticlePlugin(n, this, e);
                t.canvas.drawParticle(this, e) } getFillColor() { var e; return this._getRollColor(null !== (e = this.bubble.color) && void 0 !== e ? e : re(this.color)) } getMass() { return this.getRadius() ** 2 * Math.PI / 2 } getPosition() { return { x: this.position.x + this.offset.x, y: this.position.y + this.offset.y, z: this.position.z } } getRadius() { var e; return null !== (e = this.bubble.radius) && void 0 !== e ? e : this.size.value } getStrokeColor() { var e; return this._getRollColor(null !== (e = this.bubble.color) && void 0 !== e ? e : re(this.strokeColor)) } init(e, t, n, i) { var r, o, a; const s = this.container,
                    l = this._engine;
                this.id = e, this.group = i, this.fill = !0, this.pathRotation = !1, this.close = !0, this.lastPathTime = 0, this.destroyed = !1, this.unbreakable = !1, this.rotation = 0, this.misplaced = !1, this.retina = { maxDistance: {} }, this.outType = "normal", this.ignoresResizeRatio = !0; const u = s.retina.pixelRatio,
                    c = s.actualOptions,
                    d = pt(this._engine, s, c.particles),
                    h = d.shape.type,
                    { reduceDuplicates: f } = d;
                this.shape = I(h, this.id, f); const v = d.shape; if (n && n.shape && n.shape.type) { const e = I(n.shape.type, this.id, f);
                    e && (this.shape = e, v.load(n.shape)) } this.shapeData = this._loadShapeData(v, f), d.load(n); const m = this.shapeData;
                m && d.load(m.particles); const g = new xe(l, s);
                g.load(s.actualOptions.interactivity), g.load(d.interactivity), this.interactivity = g, this.fill = null !== (r = null === m || void 0 === m ? void 0 : m.fill) && void 0 !== r ? r : d.shape.fill, this.close = null !== (o = null === m || void 0 === m ? void 0 : m.close) && void 0 !== o ? o : d.shape.close, this.options = d; const b = this.options.move.path;
                this.pathDelay = 1e3 * y(b.delay), b.generator && (this.pathGenerator = this._engine.plugins.getPathGenerator(b.generator), this.pathGenerator && s.addPath(b.generator, this.pathGenerator) && this.pathGenerator.init(s)), s.retina.initParticle(this), this.size = N(this.options.size, u), this.bubble = { inRange: !1 }, this.slow = { inRange: !1, factor: 1 }, this._initPosition(t), this.initialVelocity = this._calculateVelocity(), this.velocity = this.initialVelocity.copy(), this.moveDecay = 1 - p(this.options.move.decay); const w = s.particles;
                w.needsSort = w.needsSort || w.lastZIndex < this.position.z, w.lastZIndex = this.position.z, this.zIndexFactor = this.position.z / s.zLayers, this.sides = 24; let _ = s.drawers.get(this.shape);
                _ || (_ = this._engine.plugins.getShapeDrawer(this.shape), _ && s.drawers.set(this.shape, _)), _ && _.loadShape && _.loadShape(this); const k = null === (a = _) || void 0 === a ? void 0 : a.getSidesCount;
                k && (this.sides = k(this)), this.spawning = !1, this.shadowColor = X(this.options.shadow.color); for (const p of s.particles.updaters) p.init(this); for (const p of s.particles.movers) p.init && p.init(this);
                _ && _.particleInit && _.particleInit(s, this); for (const [, p] of s.plugins) p.particleCreated && p.particleCreated(this) } isInsideCanvas() { const e = this.getRadius(),
                    t = this.container.canvas.size,
                    n = this.position; return n.x >= -e && n.y >= -e && n.y <= t.height + e && n.x <= t.width + e } isVisible() { return !this.destroyed && !this.spawning && this.isInsideCanvas() } reset() { for (const e of this.container.particles.updaters) e.reset && e.reset(this) } } class bt { constructor(e, t) { this.position = e, this.particle = t } } class wt { constructor(e, t) { this.position = { x: e, y: t } } } class _t extends wt { constructor(e, t, n, i) { super(e, t), this.size = { height: i, width: n } } contains(e) { const t = this.size.width,
                    n = this.size.height,
                    i = this.position; return e.x >= i.x && e.x <= i.x + t && e.y >= i.y && e.y <= i.y + n } intersects(e) { e instanceof kt && e.intersects(this); const t = this.size.width,
                    n = this.size.height,
                    i = this.position,
                    r = e.position,
                    o = e instanceof _t ? e.size : { width: 0, height: 0 },
                    a = o.width,
                    s = o.height; return r.x < i.x + t && r.x + a > i.x && r.y < i.y + n && r.y + s > i.y } } class kt extends wt { constructor(e, t, n) { super(e, t), this.radius = n } contains(e) { return w(e, this.position) <= this.radius } intersects(e) { const t = this.position,
                    n = e.position,
                    i = Math.abs(n.x - t.x),
                    r = Math.abs(n.y - t.y),
                    o = this.radius; if (e instanceof kt) { return o + e.radius > Math.sqrt(i ** 2 + r ** 2) } if (e instanceof _t) { const { width: t, height: n } = e.size; return Math.pow(i - t, 2) + Math.pow(r - n, 2) <= o ** 2 || i <= o + t && r <= o + n || i <= t || r <= n } return !1 } } class xt { constructor(e, t) { this.rectangle = e, this.capacity = t, this._subdivide = () => { const { x: e, y: t } = this.rectangle.position, { width: n, height: i } = this.rectangle.size, { capacity: r } = this; for (let o = 0; o < 4; o++) this._subs.push(new xt(new _t(e + n / 2 * (o % 2), t + i / 2 * (Math.round(o / 2) - o % 2), n / 2, i / 2), r));
                    this._divided = !0 }, this._points = [], this._divided = !1, this._subs = [] } insert(e) { return !!this.rectangle.contains(e.position) && (this._points.length < this.capacity ? (this._points.push(e), !0) : (this._divided || this._subdivide(), this._subs.some((t => t.insert(e))))) } query(e, t, n) { const i = n || []; if (!e.intersects(this.rectangle)) return []; for (const r of this._points) !e.contains(r.position) && w(e.position, r.position) > r.particle.getRadius() && (!t || t(r.particle)) || i.push(r.particle); if (this._divided)
                    for (const r of this._subs) r.query(e, t, i); return i } queryCircle(e, t, n) { return this.query(new kt(e.x, e.y, t), n) } queryRectangle(e, t, n) { return this.query(new _t(e.x, e.y, t.width, t.height), n) } } const St = e => new _t(-e.width / 4, -e.height / 4, 3 * e.width / 2, 3 * e.height / 2);
        class zt { constructor(e, t) { this._applyDensity = (e, t, n) => { var i; if (null === (i = e.number.density) || void 0 === i || !i.enable) return; const r = e.number,
                        o = this._initDensityFactor(r.density),
                        a = r.value,
                        s = r.limit > 0 ? r.limit : a,
                        l = Math.min(a, s) * o + t,
                        u = Math.min(this.count, this.filter((e => e.group === n)).length);
                    this.limit = r.limit * o, u < l ? this.push(Math.abs(l - u), void 0, e, n) : u > l && this.removeQuantity(u - l, n) }, this._initDensityFactor = e => { const t = this._container; if (!t.canvas.element || !e.enable) return 1; const n = t.canvas.element,
                        i = t.retina.pixelRatio; return n.width * n.height / (e.factor * i ** 2 * e.area) }, this._pushParticle = (e, t, n, i) => { try { let r = this.pool.pop();
                        r ? r.init(this._nextId, e, t, n) : r = new yt(this._engine, this._nextId, this._container, e, t, n); let o = !0; if (i && (o = i(r)), !o) return; return this._array.push(r), this._zArray.push(r), this._nextId++, this._engine.dispatchEvent("particleAdded", { container: this._container, data: { particle: r } }), r } catch (r) { return void z().warning("".concat(s, " adding particle: ").concat(r)) } }, this._removeParticle = (e, t, n) => { const i = this._array[e]; if (!i || i.group !== t) return !1;
                    i.destroy(n); const r = this._zArray.indexOf(i); return this._array.splice(e, 1), this._zArray.splice(r, 1), this.pool.push(i), this._engine.dispatchEvent("particleRemoved", { container: this._container, data: { particle: i } }), !0 }, this._engine = e, this._container = t, this._nextId = 0, this._array = [], this._zArray = [], this.pool = [], this.limit = 0, this.needsSort = !1, this.lastZIndex = 0, this._interactionManager = new mt(e, t); const n = t.canvas.size;
                this.quadTree = new xt(St(n), 4), this.movers = this._engine.plugins.getMovers(t, !0), this.updaters = this._engine.plugins.getUpdaters(t, !0) } get count() { return this._array.length } addManualParticles() { const e = this._container,
                    t = e.actualOptions; for (const n of t.manualParticles) this.addParticle(n.position ? A(n.position, e.canvas.size) : void 0, n.options) } addParticle(e, t, n, i) { const r = this._container.actualOptions.particles.number.limit; if (r > 0) { const e = this.count + 1 - r;
                    e > 0 && this.removeQuantity(e) } return this._pushParticle(e, t, n, i) } clear() { this._array = [], this._zArray = [] } destroy() { this._array = [], this._zArray = [], this.movers = [], this.updaters = [] } async draw(e) { const t = this._container;
                t.canvas.clear(), await this.update(e); for (const [, n] of t.plugins) t.canvas.drawPlugin(n, e); for (const n of this._zArray) n.draw(e) } filter(e) { return this._array.filter(e) } find(e) { return this._array.find(e) } handleClickMode(e) { this._interactionManager.handleClickMode(e) } init() { const e = this._container,
                    t = e.actualOptions;
                this.lastZIndex = 0, this.needsSort = !1; let n = !1;
                this.updaters = this._engine.plugins.getUpdaters(e, !0), this._interactionManager.init(); for (const [, r] of e.plugins)
                    if (void 0 !== r.particlesInitialization && (n = r.particlesInitialization()), n) break;
                this._interactionManager.init(); for (const [, r] of e.pathGenerators) r.init(e); if (this.addManualParticles(), !n) { for (const e in t.particles.groups) { const n = t.particles.groups[e]; for (let r = this.count, o = 0; o < (null === (i = n.number) || void 0 === i ? void 0 : i.value) && r < t.particles.number.value; r++, o++) { var i;
                            this.addParticle(void 0, n, e) } } for (let e = this.count; e < t.particles.number.value; e++) this.addParticle() } } push(e, t, n, i) { this.pushing = !0; for (let r = 0; r < e; r++) this.addParticle(null === t || void 0 === t ? void 0 : t.position, n, i);
                this.pushing = !1 } async redraw() { this.clear(), this.init(), await this.draw({ value: 0, factor: 0 }) } remove(e, t, n) { this.removeAt(this._array.indexOf(e), void 0, t, n) } removeAt(e) { let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = arguments.length > 3 ? arguments[3] : void 0; if (e < 0 || e > this.count) return; let r = 0; for (let o = e; r < t && o < this.count; o++) this._removeParticle(o--, n, i) && r++ } removeQuantity(e, t) { this.removeAt(0, e, t) } setDensity() { const e = this._container.actualOptions,
                    t = e.particles.groups; for (const n in t) this._applyDensity(t[n], 0, n);
                this._applyDensity(e.particles, e.manualParticles.length) } async update(e) { const t = this._container,
                    n = new Set;
                this.quadTree = new xt(St(t.canvas.size), 4); for (const [, i] of t.pathGenerators) i.update(); for (const [, i] of t.plugins) i.update && i.update(e); for (const i of this._array) { const r = t.canvas.resizeFactor;
                    r && !i.ignoresResizeRatio && (i.position.x *= r.width, i.position.y *= r.height, i.initialPosition.x *= r.width, i.initialPosition.y *= r.height), i.ignoresResizeRatio = !1, await this._interactionManager.reset(i); for (const [, t] of this._container.plugins) { if (i.destroyed) break;
                        t.particleUpdate && t.particleUpdate(i, e) } for (const t of this.movers) t.isEnabled(i) && t.move(i, e);
                    i.destroyed ? n.add(i) : this.quadTree.insert(new bt(i.getPosition(), i)) } if (n.size) { const e = e => !n.has(e);
                    this._array = this.filter(e), this._zArray = this._zArray.filter(e), this.pool.push(...n) } await this._interactionManager.externalInteract(e); for (const i of this._array) { for (const t of this.updaters) t.update(i, e);
                    i.destroyed || i.spawning || await this._interactionManager.particlesInteract(i, e) } if (delete t.canvas.resizeFactor, this.needsSort) { const e = this._zArray;
                    e.sort(((e, t) => t.position.z - e.position.z || e.id - t.id)), this.lastZIndex = e[e.length - 1].position.z, this.needsSort = !1 } } } class Ct { constructor(e) { this.container = e, this.pixelRatio = 1, this.reduceFactor = 1 } init() { const e = this.container,
                    t = e.actualOptions;
                this.pixelRatio = !t.detectRetina || C() ? 1 : window.devicePixelRatio, this.reduceFactor = 1; const n = this.pixelRatio; if (e.canvas.element) { const t = e.canvas.element;
                    e.canvas.size.width = t.offsetWidth * n, e.canvas.size.height = t.offsetHeight * n } const i = t.particles,
                    r = i.move;
                this.attractDistance = p(r.attract.distance) * n, this.maxSpeed = p(r.gravity.maxSpeed) * n, this.sizeAnimationSpeed = p(i.size.animation.speed) * n } initParticle(e) { const t = e.options,
                    n = this.pixelRatio,
                    i = t.move,
                    r = i.distance,
                    o = e.retina;
                o.attractDistance = p(i.attract.distance) * n, o.moveDrift = p(i.drift) * n, o.moveSpeed = p(i.speed) * n, o.sizeAnimationSpeed = p(t.size.animation.speed) * n; const a = o.maxDistance;
                a.horizontal = void 0 !== r.horizontal ? r.horizontal * n : void 0, a.vertical = void 0 !== r.vertical ? r.vertical * n : void 0, o.maxSpeed = p(i.gravity.maxSpeed) * n } }

        function Pt(e) { return e && !e.destroyed }

        function Et(e, t) { const n = new vt(e, t); for (var i = arguments.length, r = new Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++) r[o - 2] = arguments[o]; return ft(n, ...r), n } const Mt = { generate: e => e.velocity, init: () => {}, update: () => {}, reset: () => {} };
        class Tt { constructor(e, t, n) { this.id = t, this._intersectionManager = e => { if (Pt(this) && this.actualOptions.pauseOnOutsideViewport)
                        for (const t of e) t.target === this.interactivity.element && (t.isIntersecting ? this.play : this.pause)() }, this._nextFrame = async e => { try { var t; if (!this.smooth && void 0 !== this.lastFrameTime && e < this.lastFrameTime + 1e3 / this.fpsLimit) return void this.draw(!1);
                        null !== (t = this.lastFrameTime) && void 0 !== t || (this.lastFrameTime = e); const n = function(e) { return { value: e, factor: arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? 60 / (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60) : 60 * e / 1e3 } }(e - this.lastFrameTime, this.fpsLimit, this.smooth); if (this.addLifeTime(n.value), this.lastFrameTime = e, n.value > 1e3) return void this.draw(!1); if (await this.particles.draw(n), !this.alive()) return void this.destroy();
                        this.getAnimationStatus() && this.draw(!1) } catch (n) { z().error("".concat(s, " in animation loop"), n) } }, this._engine = e, this.fpsLimit = 120, this.smooth = !1, this._delay = 0, this._duration = 0, this._lifeTime = 0, this._firstStart = !0, this.started = !1, this.destroyed = !1, this._paused = !0, this.lastFrameTime = 0, this.zLayers = 100, this.pageHidden = !1, this._sourceOptions = n, this._initialSourceOptions = n, this.retina = new Ct(this), this.canvas = new le(this), this.particles = new zt(this._engine, this), this.pathGenerators = new Map, this.interactivity = { mouse: { clicking: !1, inside: !1 } }, this.plugins = new Map, this.drawers = new Map, this._options = Et(this._engine, this), this.actualOptions = Et(this._engine, this), this._eventListeners = new ce(this), "undefined" !== typeof IntersectionObserver && IntersectionObserver && (this._intersectionObserver = new IntersectionObserver((e => this._intersectionManager(e)))), this._engine.dispatchEvent("containerBuilt", { container: this }) } get options() { return this._options } get sourceOptions() { return this._sourceOptions } addClickHandler(e) { if (!Pt(this)) return; const t = this.interactivity.element; if (!t) return; const n = (t, n, i) => { if (!Pt(this)) return; const r = this.retina.pixelRatio,
                        o = { x: n.x * r, y: n.y * r },
                        a = this.particles.quadTree.queryCircle(o, i * r);
                    e(t, a) }; let i = !1,
                    r = !1;
                t.addEventListener("click", (e => { if (!Pt(this)) return; const t = e,
                        i = { x: t.offsetX || t.clientX, y: t.offsetY || t.clientY };
                    n(e, i, 1) })), t.addEventListener("touchstart", (() => { Pt(this) && (i = !0, r = !1) })), t.addEventListener("touchmove", (() => { Pt(this) && (r = !0) })), t.addEventListener("touchend", (e => { if (Pt(this)) { if (i && !r) { const t = e; let i = t.touches[t.touches.length - 1]; if (!i && (i = t.changedTouches[t.changedTouches.length - 1], !i)) return; const r = this.canvas.element,
                                o = r ? r.getBoundingClientRect() : void 0,
                                a = { x: i.clientX - (o ? o.left : 0), y: i.clientY - (o ? o.top : 0) };
                            n(e, a, Math.max(i.radiusX, i.radiusY)) } i = !1, r = !1 } })), t.addEventListener("touchcancel", (() => { Pt(this) && (i = !1, r = !1) })) } addLifeTime(e) { this._lifeTime += e } addPath(e, t) { let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; return !(!Pt(this) || !n && this.pathGenerators.has(e)) && (this.pathGenerators.set(e, null !== t && void 0 !== t ? t : Mt), !0) } alive() { return !this._duration || this._lifeTime <= this._duration } destroy() { if (!Pt(this)) return;
                this.stop(), this.particles.destroy(), this.canvas.destroy(); for (const [, n] of this.drawers) n.destroy && n.destroy(this); for (const n of this.drawers.keys()) this.drawers.delete(n);
                this._engine.plugins.destroy(this), this.destroyed = !0; const e = this._engine.dom(),
                    t = e.findIndex((e => e === this));
                t >= 0 && e.splice(t, 1), this._engine.dispatchEvent("containerDestroyed", { container: this }) } draw(e) { if (!Pt(this)) return; let t = e;
                this._drawAnimationFrame = requestAnimationFrame((async e => { t && (this.lastFrameTime = void 0, t = !1), await this._nextFrame(e) })) } async export (e) { let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; for (const [, n] of this.plugins) { if (!n.export) continue; const i = await n.export(e, t); if (i.supported) return i.blob } z().error("".concat(s, " - Export plugin with type ").concat(e, " not found")) } getAnimationStatus() { return !this._paused && !this.pageHidden && Pt(this) } handleClickMode(e) { if (Pt(this)) { this.particles.handleClickMode(e); for (const [, t] of this.plugins) t.handleClickMode && t.handleClickMode(e) } } async init() { if (!Pt(this)) return; const e = this._engine.plugins.getSupportedShapes(); for (const n of e) { const e = this._engine.plugins.getShapeDrawer(n);
                    e && this.drawers.set(n, e) } this._options = Et(this._engine, this, this._initialSourceOptions, this.sourceOptions), this.actualOptions = Et(this._engine, this, this._options); const t = this._engine.plugins.getAvailablePlugins(this); for (const [n, i] of t) this.plugins.set(n, i);
                this.retina.init(), await this.canvas.init(), this.updateActualOptions(), this.canvas.initBackground(), this.canvas.resize(), this.zLayers = this.actualOptions.zLayers, this._duration = 1e3 * p(this.actualOptions.duration), this._delay = 1e3 * p(this.actualOptions.delay), this._lifeTime = 0, this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120, this.smooth = this.actualOptions.smooth; for (const [, n] of this.drawers) n.init && await n.init(this); for (const [, n] of this.plugins) n.init && await n.init();
                this._engine.dispatchEvent("containerInit", { container: this }), this.particles.init(), this.particles.setDensity(); for (const [, n] of this.plugins) n.particlesSetup && n.particlesSetup();
                this._engine.dispatchEvent("particlesSetup", { container: this }) } async loadTheme(e) { Pt(this) && (this._currentTheme = e, await this.refresh()) } pause() { if (Pt(this) && (void 0 !== this._drawAnimationFrame && (cancelAnimationFrame(this._drawAnimationFrame), delete this._drawAnimationFrame), !this._paused)) { for (const [, e] of this.plugins) e.pause && e.pause();
                    this.pageHidden || (this._paused = !0), this._engine.dispatchEvent("containerPaused", { container: this }) } } play(e) { if (!Pt(this)) return; const t = this._paused || e; if (!this._firstStart || this.actualOptions.autoPlay) { if (this._paused && (this._paused = !1), t)
                        for (const [, e] of this.plugins) e.play && e.play();
                    this._engine.dispatchEvent("containerPlay", { container: this }), this.draw(t || !1) } else this._firstStart = !1 } async refresh() { if (Pt(this)) return this.stop(), this.start() } async reset() { if (Pt(this)) return this._initialSourceOptions = void 0, this._options = Et(this._engine, this), this.actualOptions = Et(this._engine, this, this._options), this.refresh() } setNoise(e, t, n) { Pt(this) && this.setPath(e, t, n) } setPath(e, t, n) { if (!e || !Pt(this)) return; const i = { ...Mt }; if (H(e)) i.generate = e, t && (i.init = t), n && (i.update = n);
                else { const t = i;
                    i.generate = e.generate || t.generate, i.init = e.init || t.init, i.update = e.update || t.update } this.addPath("default", i, !0) } async start() { Pt(this) && !this.started && (await this.init(), this.started = !0, await new Promise((e => { this._delayTimeout = setTimeout((async () => { this._eventListeners.addListeners(), this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.observe(this.interactivity.element); for (const [, e] of this.plugins) e.start && await e.start();
                        this._engine.dispatchEvent("containerStarted", { container: this }), this.play(), e() }), this._delay) }))) } stop() { if (Pt(this) && this.started) { this._delayTimeout && (clearTimeout(this._delayTimeout), delete this._delayTimeout), this._firstStart = !0, this.started = !1, this._eventListeners.removeListeners(), this.pause(), this.particles.clear(), this.canvas.stop(), this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.unobserve(this.interactivity.element); for (const [, e] of this.plugins) e.stop && e.stop(); for (const e of this.plugins.keys()) this.plugins.delete(e);
                    this._sourceOptions = this._options, this._engine.dispatchEvent("containerStopped", { container: this }) } } updateActualOptions() { this.actualOptions.responsive = []; const e = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options); return this.actualOptions.setTheme(this._currentTheme), this.responsiveMaxWidth !== e && (this.responsiveMaxWidth = e, !0) } } class Ot { constructor() { this._listeners = new Map } addEventListener(e, t) { this.removeEventListener(e, t); let n = this._listeners.get(e);
                n || (n = [], this._listeners.set(e, n)), n.push(t) } dispatchEvent(e, t) { const n = this._listeners.get(e);
                n && n.forEach((e => e(t))) } hasEventListener(e) { return !!this._listeners.get(e) } removeAllEventListeners(e) { e ? this._listeners.delete(e) : this._listeners = new Map } removeEventListener(e, t) { const n = this._listeners.get(e); if (!n) return; const i = n.length,
                    r = n.indexOf(t);
                r < 0 || (1 === i ? this._listeners.delete(e) : n.splice(r, 1)) } }

        function Lt(e, t, n) { let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                r = t.get(e); return r && !i || (r = [...n.values()].map((t => t(e))), t.set(e, r)), r } class Rt { constructor(e) { this._engine = e, this.plugins = [], this._initializers = { interactors: new Map, movers: new Map, updaters: new Map }, this.interactors = new Map, this.movers = new Map, this.updaters = new Map, this.presets = new Map, this.drawers = new Map, this.pathGenerators = new Map } addInteractor(e, t) { this._initializers.interactors.set(e, t) } addParticleMover(e, t) { this._initializers.movers.set(e, t) } addParticleUpdater(e, t) { this._initializers.updaters.set(e, t) } addPathGenerator(e, t) {!this.getPathGenerator(e) && this.pathGenerators.set(e, t) } addPlugin(e) {!this.getPlugin(e.id) && this.plugins.push(e) } addPreset(e, t) {
                (arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || !this.getPreset(e)) && this.presets.set(e, t) } addShapeDrawer(e, t) { D(e, (e => {!this.getShapeDrawer(e) && this.drawers.set(e, t) })) } destroy(e) { this.updaters.delete(e), this.movers.delete(e), this.interactors.delete(e) } getAvailablePlugins(e) { const t = new Map; for (const n of this.plugins) n.needsPlugin(e.actualOptions) && t.set(n.id, n.getPlugin(e)); return t } getInteractors(e) { let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; return Lt(e, this.interactors, this._initializers.interactors, t) } getMovers(e) { let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; return Lt(e, this.movers, this._initializers.movers, t) } getPathGenerator(e) { return this.pathGenerators.get(e) } getPlugin(e) { return this.plugins.find((t => t.id === e)) } getPreset(e) { return this.presets.get(e) } getShapeDrawer(e) { return this.drawers.get(e) } getSupportedShapes() { return this.drawers.keys() } getUpdaters(e) { let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; return Lt(e, this.updaters, this._initializers.updaters, t) } loadOptions(e, t) { for (const n of this.plugins) n.loadOptions(e, t) } loadParticlesOptions(e, t) { const n = this.updaters.get(e); if (n) { for (var i = arguments.length, r = new Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++) r[o - 2] = arguments[o]; for (const e of n) e.loadOptions && e.loadOptions(t, ...r) } } } class Dt { constructor() { this._configs = new Map, this._domArray = [], this._eventDispatcher = new Ot, this._initialized = !1, this.plugins = new Rt(this) } get configs() { const e = {}; for (const [t, n] of this._configs) e[t] = n; return e } get version() { return "2.12.0" } addConfig(e, t) { var n;
                U(e) ? t && (t.name = e, this._configs.set(e, t)) : this._configs.set(null !== (n = e.name) && void 0 !== n ? n : "default", e) } addEventListener(e, t) { this._eventDispatcher.addEventListener(e, t) } async addInteractor(e, t) { let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                this.plugins.addInteractor(e, t), await this.refresh(n) } async addMover(e, t) { let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                this.plugins.addParticleMover(e, t), await this.refresh(n) } async addParticleUpdater(e, t) { let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                this.plugins.addParticleUpdater(e, t), await this.refresh(n) } async addPathGenerator(e, t) { let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                this.plugins.addPathGenerator(e, t), await this.refresh(n) } async addPlugin(e) { let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this.plugins.addPlugin(e), await this.refresh(t) } async addPreset(e, t) { let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                this.plugins.addPreset(e, t, n), await this.refresh(i) } async addShape(e, t, n, i, r) { let o, a, s, l, u = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                V(n) ? (u = n, a = void 0) : a = n, V(i) ? (u = i, s = void 0) : s = i, V(r) ? (u = r, l = void 0) : l = r, o = H(t) ? { afterEffect: s, destroy: l, draw: t, init: a } : t, this.plugins.addShapeDrawer(e, o), await this.refresh(u) } dispatchEvent(e, t) { this._eventDispatcher.dispatchEvent(e, t) } dom() { return this._domArray } domItem(e) { const t = this.dom(),
                    n = t[e]; if (n && !n.destroyed) return n;
                t.splice(e, 1) } init() { this._initialized || (this._initialized = !0) } async load(e, t) { return this.loadFromArray(e, t) } async loadFromArray(e, t, n) { let i; return ! function(e) { return !(!(t = e).id && !t.element && !t.url && !t.options); var t }(e) ? (i = {}, U(e) ? i.id = e : i.options = e, B(t) ? i.index = t : i.options = null !== t && void 0 !== t ? t : i.options, i.index = null !== n && void 0 !== n ? n : i.index) : i = e, this._loadParams(i) } async loadJSON(e, t, n) { let i, r; return B(t) || void 0 === t ? i = e : (r = e, i = t), this._loadParams({ id: r, url: i, index: n }) } async refresh() {
                (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && this.dom().forEach((e => e.refresh())) } removeEventListener(e, t) { this._eventDispatcher.removeEventListener(e, t) } async set(e, t, n, i) { const r = { index: i }; return U(e) ? r.id = e : r.element = e, t instanceof HTMLElement ? r.element = t : r.options = t, B(n) ? r.index = n : r.options = null !== n && void 0 !== n ? n : r.options, this._loadParams(r) } async setJSON(e, t, n, i) { const r = {}; return e instanceof HTMLElement ? (r.element = e, r.url = t, r.index = n) : (r.id = e, r.element = t, r.url = n, r.index = i), this._loadParams(r) } setOnClickHandler(e) { const t = this.dom(); if (!t.length) throw new Error("".concat(s, " can only set click handlers after calling tsParticles.load()")); for (const n of t) n.addClickHandler(e) } async _loadParams(e) { var t, n; const r = null !== (t = e.id) && void 0 !== t ? t : "tsparticles".concat(Math.floor(1e4 * d())),
                    { index: o, url: a } = e,
                    l = a ? await async function(e) { const t = I(e.url, e.index); if (!t) return e.fallback; const n = await fetch(t); return n.ok ? n.json() : (z().error("".concat(s, " ").concat(n.status, " while retrieving config file")), e.fallback) }({ fallback: e.options, url: a, index: o }): e.options; let u = null !== (n = e.element) && void 0 !== n ? n : document.getElementById(r);
                u || (u = document.createElement("div"), u.id = r, document.body.append(u)); const c = I(l, o),
                    h = this.dom(),
                    f = h.findIndex((e => e.id === r)); if (f >= 0) { const e = this.domItem(f);
                    e && !e.destroyed && (e.destroy(), h.splice(f, 1)) } let p; if ("canvas" === u.tagName.toLowerCase()) p = u, p.dataset[i] = "false";
                else { const e = u.getElementsByTagName("canvas");
                    e.length ? (p = e[0], p.dataset[i] = "false") : (p = document.createElement("canvas"), p.dataset[i] = "true", u.appendChild(p)) } p.style.width || (p.style.width = "100%"), p.style.height || (p.style.height = "100%"); const v = new Tt(this, r, c); return f >= 0 ? h.splice(f, 0, v) : h.push(v), v.canvas.loadCanvas(p), await v.start(), v } } class It { constructor() { this.key = "hsl", this.stringPrefix = "hsl" } handleColor(e) { var t; const n = null !== (t = e.value.hsl) && void 0 !== t ? t : e.value; if (void 0 !== n.h && void 0 !== n.s && void 0 !== n.l) return ee(n) } handleRangeColor(e) { var t; const n = null !== (t = e.value.hsl) && void 0 !== t ? t : e.value; if (void 0 !== n.h && void 0 !== n.l) return ee({ h: p(n.h), l: p(n.l), s: p(n.s) }) } parseString(e) { if (!e.startsWith("hsl")) return; const t = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i.exec(e); return t ? function(e) { const t = ee(e); return { a: e.a, b: t.b, g: t.g, r: t.r } }({ a: t.length > 4 ? x(t[5]) : 1, h: parseInt(t[1], 10), l: parseInt(t[3], 10), s: parseInt(t[2], 10) }) : void 0 } } class Nt { constructor() { this.key = "rgb", this.stringPrefix = "rgb" } handleColor(e) { var t; const n = null !== (t = e.value.rgb) && void 0 !== t ? t : e.value; if (void 0 !== n.r) return n } handleRangeColor(e) { var t; const n = null !== (t = e.value.rgb) && void 0 !== t ? t : e.value; if (void 0 !== n.r) return { r: p(n.r), g: p(n.g), b: p(n.b) } } parseString(e) { if (!e.startsWith(this.stringPrefix)) return; const t = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i.exec(e); return t ? { a: t.length > 4 ? x(t[5]) : 1, b: parseInt(t[3], 10), g: parseInt(t[2], 10), r: parseInt(t[1], 10) } : void 0 } } const Ft = function() { const e = new Nt,
                t = new It;
            q(e), q(t); const n = new Dt; return n.init(), n }();
        C() || (window.tsParticles = Ft); const At = e => "object" === typeof e && null !== e;

        function Vt(e, t) { let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !1; if (!At(e) || !At(t)) return e === t; const i = Object.keys(e).filter((e => !n(e))),
                r = Object.keys(t).filter((e => !n(e))); if (i.length !== r.length) return !1; for (const o of i) { const i = e[o],
                    r = t[o]; if (At(i) && At(r)) { if (i === t && r === e) continue; if (!Vt(i, r, n)) return !1 } else if (Array.isArray(i) && Array.isArray(r)) { if (!Ut(i, r, n)) return !1 } else if (i !== r) return !1 } return !0 }

        function Ut(e, t, n) { if (e.length !== t.length) return !1; for (let i = 0; i < e.length; i++) { const r = e[i],
                    o = t[i]; if (Array.isArray(r) && Array.isArray(o)) { if (!Ut(r, o, n)) return !1 } else if (At(r) && At(o)) { if (!Vt(r, o, n)) return !1 } else if (r !== o) return !1 } return !0 } const Bt = "tsparticles";
        class Ht extends e.Component { constructor(e) { super(e), this.state = { init: !1, library: void 0 } } destroy() { this.state.library && (this.state.library.destroy(), this.setState({ library: void 0 })) } shouldComponentUpdate(e) { var t, n; const i = null !== (t = e.options) && void 0 !== t ? t : e.params,
                    r = null !== (n = this.props.options) && void 0 !== n ? n : this.props.params; return e.url !== this.props.url || e.id !== this.props.id || e.canvasClassName !== this.props.canvasClassName || e.className !== this.props.className || e.height !== this.props.height || e.width !== this.props.width || !Vt(e.style, this.props.style) || e.init !== this.props.init || e.loaded !== this.props.loaded || !Vt(i, r, (e => e.startsWith("_"))) } componentDidUpdate() { this.refresh() } forceUpdate() { this.refresh().then((() => { super.forceUpdate() })) } componentDidMount() {
                (async () => { this.props.init && await this.props.init(Ft), this.setState({ init: !0 }, (async () => { await this.loadParticles() })) })() } componentWillUnmount() { this.destroy() } render() { const { width: t, height: n, className: i, canvasClassName: r, id: o } = this.props; return e.createElement("div", { className: i, id: o }, e.createElement("canvas", { className: r, style: { ...this.props.style, width: t, height: n } })) } async refresh() { this.destroy(), await this.loadParticles() } async loadParticles() { var e, t, n; if (!this.state.init) return; const i = null !== (e = null !== (t = this.props.id) && void 0 !== t ? t : Ht.defaultProps.id) && void 0 !== e ? e : Bt,
                    r = await Ft.load({ url: this.props.url, id: i, options: null !== (n = this.props.options) && void 0 !== n ? n : this.props.params });
                this.props.container && (this.props.container.current = r), this.setState({ library: r }), this.props.loaded && await this.props.loaded(r) } } Ht.defaultProps = { width: "100%", height: "100%", options: {}, style: {}, url: void 0, id: Bt }; const jt = Ht;
        class Wt { constructor() { this.options = { rndFunc: null, period: 100, nbHarmonics: 2, attenHarmonics: .8, lowValue: -.03, highValue: .03 } } generate(e) { if (!e.pathGen) { const t = this.options;
                    e.pathGen = function(e, t, n, i) { let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1; const a = [],
                            s = [],
                            l = [],
                            u = [],
                            c = [],
                            h = null !== e && void 0 !== e ? e : d; let f = 0;
                        n < 1 && (n = 1); for (let d = 1; d <= n; ++d) a[d] = h(), s[d] = h(), l[d] = 1 === d ? 1 : l[d - 1] * i, f += l[d], u[d] = d / t, c[d] = h(); return l.forEach(((e, t) => l[t] = e / f * (o - r))), () => { let e, t, i = 0; for (let r = n; r >= 1; --r) e = c[r] += u[r], c[r] >= 1 && (e = c[r] -= 1, a[r] = s[r], s[r] = h()), t = e ** 2 * (3 - 2 * e), i += (a[r] * (1 - t) + s[r] * t) * l[r]; return i + r } }(t.rndFunc, t.period, t.nbHarmonics, t.attenHarmonics, t.lowValue, t.highValue) } return e.curveVelocity ? (e.curveVelocity.length += .01, e.curveVelocity.angle = (e.curveVelocity.angle + e.pathGen()) % (2 * Math.PI)) : (e.curveVelocity = u.origin, e.curveVelocity.length = .6 * d() + .8, e.curveVelocity.angle = d() * Math.PI * 2), e.velocity.x = 0, e.velocity.y = 0, e.curveVelocity } init(e) { var t, n, i, r, o; const a = e.actualOptions.particles.move.path.options,
                    { options: s } = this;
                H(a.rndFunc) ? s.rndFunc = a.rndFunc : U(a.rndFunc) && (s.rndFunc = window[a.rndFunc] || this.options.rndFunc), s.period = null !== (t = a.period) && void 0 !== t ? t : s.period, s.nbHarmonics = null !== (n = a.nbHarmonics) && void 0 !== n ? n : s.nbHarmonics, s.attenHarmonics = null !== (i = a.attenHarmonics) && void 0 !== i ? i : s.attenHarmonics, s.lowValue = null !== (r = a.lowValue) && void 0 !== r ? r : s.lowValue, s.highValue = null !== (o = a.highValue) && void 0 !== o ? o : s.highValue } reset(e) { delete e.pathGen, delete e.curveVelocity } update() {} } const $t = "curvesPathGenerator"; const Qt = { fpsLimit: 120, particles: { color: { value: "#FF0000" }, move: { direction: "none", enable: !0, outModes: { default: "destroy" }, path: { clamp: !1, enable: !0, delay: { value: 0 }, generator: $t }, random: !1, speed: 2, straight: !1, trail: { fillColor: "#000", length: 30, enable: !0 } }, number: { value: 0, limit: 300 }, opacity: { value: 1 }, shape: { type: "circle" }, size: { value: { min: 1, max: 10 }, animation: { count: 1, startValue: "min", enable: !0, speed: 10, sync: !0 } } }, background: { color: "#000" }, detectRetina: !0, emitters: { direction: "none", rate: { quantity: 10, delay: .3 }, size: { width: 0, height: 0, mode: "precise" }, spawnColor: { value: "#ff0000", animation: { h: { enable: !0, offset: { min: -1.4, max: 1.4 }, speed: 5, sync: !1 }, l: { enable: !0, offset: { min: 20, max: 80 }, speed: 0, sync: !1 } } }, position: { x: 50, y: 50 } } };

        function qt(e, t, n, i, r, o) {! function(e, t) { var n; const i = e.options,
                    r = i.move.path; if (!r.enable) return; if (e.lastPathTime <= e.pathDelay) return void(e.lastPathTime += t.value); const o = null === (n = e.pathGenerator) || void 0 === n ? void 0 : n.generate(e, t);
                o && e.velocity.addTo(o);
                r.clamp && (e.velocity.x = h(e.velocity.x, -1, 1), e.velocity.y = h(e.velocity.y, -1, 1));
                e.lastPathTime -= e.pathDelay }(e, o); const a = e.gravity,
                s = null !== a && void 0 !== a && a.enable && a.inverse ? -1 : 1;
            r && n && (e.velocity.x += r * o.factor / (60 * n)), null !== a && void 0 !== a && a.enable && n && (e.velocity.y += s * (a.acceleration * o.factor) / (60 * n)); const l = e.moveDecay;
            e.velocity.multTo(l); const u = e.velocity.mult(n);
            null !== a && void 0 !== a && a.enable && i > 0 && (!a.inverse && u.y >= 0 && u.y >= i || a.inverse && u.y <= 0 && u.y <= -i) && (u.y = s * i, n && (e.velocity.y = u.y / n)); const c = e.options.zIndex,
                d = (1 - e.zIndexFactor) ** c.velocityRate;
            u.multTo(d); const { position: f } = e;
            f.addTo(u), t.vibrate && (f.x += Math.sin(f.x * Math.cos(f.y)), f.y += Math.cos(f.y * Math.sin(f.x))) } class Yt { constructor() { this._initSpin = e => { var t; const n = e.container,
                        i = e.options.move.spin; if (!i.enable) return; const r = null !== (t = i.position) && void 0 !== t ? t : { x: 50, y: 50 },
                        o = { x: r.x / 100 * n.canvas.size.width, y: r.y / 100 * n.canvas.size.height },
                        a = w(e.getPosition(), o),
                        s = p(i.acceleration);
                    e.retina.spinAcceleration = s * n.retina.pixelRatio, e.spin = { center: o, direction: e.velocity.x >= 0 ? "clockwise" : "counter-clockwise", angle: e.velocity.angle, radius: a, acceleration: e.retina.spinAcceleration } } } init(e) { const t = e.options.move.gravity;
                e.gravity = { enable: t.enable, acceleration: p(t.acceleration), inverse: t.inverse }, this._initSpin(e) } isEnabled(e) { return !e.destroyed && e.options.move.enable } move(e, t) { var n, i, r, o, a; const s = e.options,
                    l = s.move; if (!l.enable) return; const u = e.container,
                    c = u.retina.pixelRatio,
                    h = function(e) { return e.slow.inRange ? e.slow.factor : 1 }(e),
                    f = (null !== (i = (n = e.retina).moveSpeed) && void 0 !== i ? i : n.moveSpeed = p(l.speed) * c) * u.retina.reduceFactor,
                    v = null !== (o = (r = e.retina).moveDrift) && void 0 !== o ? o : r.moveDrift = p(e.options.move.drift) * c,
                    g = m(s.size.value) * c,
                    y = f * (l.size ? e.getRadius() / g : 1) * h * (t.factor || 1) / 2,
                    w = null !== (a = e.retina.maxSpeed) && void 0 !== a ? a : u.retina.maxSpeed;
                l.spin.enable ? function(e, t) { const n = e.container; if (!e.spin) return; const i = { x: "clockwise" === e.spin.direction ? Math.cos : Math.sin, y: "clockwise" === e.spin.direction ? Math.sin : Math.cos };
                        e.position.x = e.spin.center.x + e.spin.radius * i.x(e.spin.angle), e.position.y = e.spin.center.y + e.spin.radius * i.y(e.spin.angle), e.spin.radius += e.spin.acceleration; const r = Math.max(n.canvas.size.width, n.canvas.size.height);
                        e.spin.radius > r / 2 ? (e.spin.radius = r / 2, e.spin.acceleration *= -1) : e.spin.radius < 0 && (e.spin.radius = 0, e.spin.acceleration *= -1), e.spin.angle += t / 100 * (1 - e.spin.radius / r) }(e, y) : qt(e, l, y, w, v, t),
                    function(e) { const t = e.initialPosition,
                            { dx: n, dy: i } = b(t, e.position),
                            r = Math.abs(n),
                            o = Math.abs(i),
                            { maxDistance: a } = e.retina,
                            s = a.horizontal,
                            l = a.vertical; if (s || l)
                            if ((s && r >= s || l && o >= l) && !e.misplaced) e.misplaced = !!s && r > s || !!l && o > l, s && (e.velocity.x = e.velocity.y / 2 - e.velocity.x), l && (e.velocity.y = e.velocity.x / 2 - e.velocity.y);
                            else if ((!s || r < s) && (!l || o < l) && e.misplaced) e.misplaced = !1;
                        else if (e.misplaced) { const n = e.position,
                                i = e.velocity;
                            s && (n.x < t.x && i.x < 0 || n.x > t.x && i.x > 0) && (i.x *= -d()), l && (n.y < t.y && i.y < 0 || n.y > t.y && i.y > 0) && (i.y *= -d()) } }(e) } } class Gt { draw(e, t, n) { t.circleRange || (t.circleRange = { min: 0, max: 2 * Math.PI }); const i = t.circleRange;
                e.arc(0, 0, n, i.min, i.max, !1) } getSidesCount() { return 12 } particleInit(e, t) { var n; const i = t.shapeData,
                    r = null !== (n = null === i || void 0 === i ? void 0 : i.angle) && void 0 !== n ? n : { max: 360, min: 0 };
                t.circleRange = j(r) ? { min: r.min * Math.PI / 180, max: r.max * Math.PI / 180 } : { min: 0, max: r * Math.PI / 180 } } }

        function Xt(e, t, n, i, r) { var o, a, s, l, u, c, d, h, p; if (!t || !n.enable || (null !== (o = t.maxLoops) && void 0 !== o ? o : 0) > 0 && (null !== (a = t.loops) && void 0 !== a ? a : 0) > (null !== (s = t.maxLoops) && void 0 !== s ? s : 0)) return; if (t.time || (t.time = 0), (null !== (l = t.delayTime) && void 0 !== l ? l : 0) > 0 && t.time < (null !== (u = t.delayTime) && void 0 !== u ? u : 0) && (t.time += e.value), (null !== (c = t.delayTime) && void 0 !== c ? c : 0) > 0 && t.time < (null !== (d = t.delayTime) && void 0 !== d ? d : 0)) return; const v = f(n.offset),
                m = (null !== (h = t.velocity) && void 0 !== h ? h : 0) * e.factor + 3.6 * v,
                g = null !== (p = t.decay) && void 0 !== p ? p : 1;
            r && "increasing" !== t.status ? (t.value -= m, t.value < 0 && (t.loops || (t.loops = 0), t.loops++, t.status = "increasing", t.value += t.value)) : (t.value += m, t.value > i && (t.loops || (t.loops = 0), t.loops++, r && (t.status = "decreasing", t.value -= t.value % i))), t.velocity && 1 !== g && (t.velocity *= g), t.value > i && (t.value %= i) } class Kt { constructor(e) { this.container = e } init(e) { const t = Z(e.options.color, e.id, e.options.reduceDuplicates);
                t && (e.color = function(e, t, n) { const i = { h: { enable: !1, value: e.h }, s: { enable: !1, value: e.s }, l: { enable: !1, value: e.l } }; return t && (oe(i.h, t.h, n), oe(i.s, t.s, n), oe(i.l, t.l, n)), i }(t, e.options.color.animation, this.container.retina.reduceFactor)) } isEnabled(e) { const { h: t, s: n, l: i } = e.options.color.animation, { color: r } = e; return !e.destroyed && !e.spawning && (void 0 !== (null === r || void 0 === r ? void 0 : r.h.value) && t.enable || void 0 !== (null === r || void 0 === r ? void 0 : r.s.value) && n.enable || void 0 !== (null === r || void 0 === r ? void 0 : r.l.value) && i.enable) } update(e, t) {! function(e, t) { const { h: n, s: i, l: r } = e.options.color.animation, { color: o } = e; if (!o) return; const { h: a, s: s, l: l } = o;
                    a && Xt(t, a, n, 360, !1), s && Xt(t, s, i, 100, !0), l && Xt(t, l, r, 100, !0) }(e, t) } } class Zt { constructor(e) { this.container = e } init(e) { const t = e.options.opacity;
                e.opacity = N(t, 1); const n = t.animation;
                n.enable && (e.opacity.velocity = p(n.speed) / 100 * this.container.retina.reduceFactor, n.sync || (e.opacity.velocity *= d())) } isEnabled(e) { var t, n, i, r; return !e.destroyed && !e.spawning && !!e.opacity && e.opacity.enable && ((null !== (t = e.opacity.maxLoops) && void 0 !== t ? t : 0) <= 0 || (null !== (n = e.opacity.maxLoops) && void 0 !== n ? n : 0) > 0 && (null !== (i = e.opacity.loops) && void 0 !== i ? i : 0) < (null !== (r = e.opacity.maxLoops) && void 0 !== r ? r : 0)) } reset(e) { e.opacity && (e.opacity.time = 0, e.opacity.loops = 0) } update(e, t) { this.isEnabled(e) && function(e, t) { var n, i, r, o, a, s, l, u; const c = e.opacity; if (e.destroyed || null === c || void 0 === c || !c.enable || (null !== (n = c.maxLoops) && void 0 !== n ? n : 0) > 0 && (null !== (i = c.loops) && void 0 !== i ? i : 0) > (null !== (r = c.maxLoops) && void 0 !== r ? r : 0)) return; const d = c.min,
                        f = c.max,
                        p = null !== (o = c.decay) && void 0 !== o ? o : 1; if (c.time || (c.time = 0), (null !== (a = c.delayTime) && void 0 !== a ? a : 0) > 0 && c.time < (null !== (s = c.delayTime) && void 0 !== s ? s : 0) && (c.time += t.value), !((null !== (l = c.delayTime) && void 0 !== l ? l : 0) > 0 && c.time < (null !== (u = c.delayTime) && void 0 !== u ? u : 0))) { switch (c.status) {
                            case "increasing":
                                var v;
                                c.value >= f ? (c.status = "decreasing", c.loops || (c.loops = 0), c.loops++) : c.value += (null !== (v = c.velocity) && void 0 !== v ? v : 0) * t.factor; break;
                            case "decreasing":
                                var m;
                                c.value <= d ? (c.status = "increasing", c.loops || (c.loops = 0), c.loops++) : c.value -= (null !== (m = c.velocity) && void 0 !== m ? m : 0) * t.factor } c.velocity && 1 !== c.decay && (c.velocity *= p),
                            function(e, t, n, i) { switch (e.options.opacity.animation.destroy) {
                                    case "max":
                                        t >= i && e.destroy(); break;
                                    case "min":
                                        t <= n && e.destroy() } }(e, c.value, d, f), e.destroyed || (c.value = h(c.value, d, f)) } }(e, t) } } class Jt { constructor(e) { this.container = e, this.modes = ["bounce", "bounce-vertical", "bounce-horizontal", "bounceVertical", "bounceHorizontal", "split"] } update(e, t, n, i) { if (!this.modes.includes(i)) return; const r = this.container; let o = !1; for (const [, d] of r.plugins)
                    if (void 0 !== d.particleBounce && (o = d.particleBounce(e, n, t)), o) break; if (o) return; const a = e.getPosition(),
                    s = e.offset,
                    l = e.getRadius(),
                    u = L(a, l),
                    c = r.canvas.size;! function(e) { if ("bounce" !== e.outMode && "bounce-horizontal" !== e.outMode && "bounceHorizontal" !== e.outMode && "split" !== e.outMode || "left" !== e.direction && "right" !== e.direction) return;
                    e.bounds.right < 0 && "left" === e.direction ? e.particle.position.x = e.size + e.offset.x : e.bounds.left > e.canvasSize.width && "right" === e.direction && (e.particle.position.x = e.canvasSize.width - e.size - e.offset.x); const t = e.particle.velocity.x; let n = !1; if ("right" === e.direction && e.bounds.right >= e.canvasSize.width && t > 0 || "left" === e.direction && e.bounds.left <= 0 && t < 0) { const t = y(e.particle.options.bounce.horizontal);
                        e.particle.velocity.x *= -t, n = !0 } if (!n) return; const i = e.offset.x + e.size;
                    e.bounds.right >= e.canvasSize.width && "right" === e.direction ? e.particle.position.x = e.canvasSize.width - i : e.bounds.left <= 0 && "left" === e.direction && (e.particle.position.x = i), "split" === e.outMode && e.particle.destroy() }({ particle: e, outMode: i, direction: t, bounds: u, canvasSize: c, offset: s, size: l }),
                function(e) { if ("bounce" !== e.outMode && "bounce-vertical" !== e.outMode && "bounceVertical" !== e.outMode && "split" !== e.outMode || "bottom" !== e.direction && "top" !== e.direction) return;
                    e.bounds.bottom < 0 && "top" === e.direction ? e.particle.position.y = e.size + e.offset.y : e.bounds.top > e.canvasSize.height && "bottom" === e.direction && (e.particle.position.y = e.canvasSize.height - e.size - e.offset.y); const t = e.particle.velocity.y; let n = !1; if ("bottom" === e.direction && e.bounds.bottom >= e.canvasSize.height && t > 0 || "top" === e.direction && e.bounds.top <= 0 && t < 0) { const t = y(e.particle.options.bounce.vertical);
                        e.particle.velocity.y *= -t, n = !0 } if (!n) return; const i = e.offset.y + e.size;
                    e.bounds.bottom >= e.canvasSize.height && "bottom" === e.direction ? e.particle.position.y = e.canvasSize.height - i : e.bounds.top <= 0 && "top" === e.direction && (e.particle.position.y = i), "split" === e.outMode && e.particle.destroy() }({ particle: e, outMode: i, direction: t, bounds: u, canvasSize: c, offset: s, size: l }) } } class en { constructor(e) { this.container = e, this.modes = ["destroy"] } update(e, t, n, i) { if (!this.modes.includes(i)) return; const r = this.container; switch (e.outType) {
                    case "normal":
                    case "outside":
                        if (O(e.position, r.canvas.size, u.origin, e.getRadius(), t)) return; break;
                    case "inside":
                        { const { dx: t, dy: n } = b(e.position, e.moveCenter), { x: i, y: r } = e.velocity; if (i < 0 && t > e.moveCenter.radius || r < 0 && n > e.moveCenter.radius || i >= 0 && t < -e.moveCenter.radius || r >= 0 && n < -e.moveCenter.radius) return; break } } r.particles.remove(e, void 0, !0) } } class tn { constructor(e) { this.container = e, this.modes = ["none"] } update(e, t, n, i) { if (!this.modes.includes(i)) return; if (e.options.move.distance.horizontal && ("left" === t || "right" === t) || e.options.move.distance.vertical && ("top" === t || "bottom" === t)) return; const r = e.options.move.gravity,
                    o = this.container,
                    a = o.canvas.size,
                    s = e.getRadius(); if (r.enable) { const n = e.position;
                    (!r.inverse && n.y > a.height + s && "bottom" === t || r.inverse && n.y < -s && "top" === t) && o.particles.remove(e) } else { if (e.velocity.y > 0 && e.position.y <= a.height + s || e.velocity.y < 0 && e.position.y >= -s || e.velocity.x > 0 && e.position.x <= a.width + s || e.velocity.x < 0 && e.position.x >= -s) return;
                    O(e.position, o.canvas.size, u.origin, s, t) || o.particles.remove(e) } } } class nn { constructor(e) { this.container = e, this.modes = ["out"] } update(e, t, n, i) { if (!this.modes.includes(i)) return; const r = this.container; switch (e.outType) {
                    case "inside":
                        { const { x: t, y: n } = e.velocity, i = u.origin;i.length = e.moveCenter.radius, i.angle = e.velocity.angle + Math.PI, i.addTo(u.create(e.moveCenter)); const { dx: o, dy: a } = b(e.position, i); if (t <= 0 && o >= 0 || n <= 0 && a >= 0 || t >= 0 && o <= 0 || n >= 0 && a <= 0) return;e.position.x = Math.floor(f({ min: 0, max: r.canvas.size.width })), e.position.y = Math.floor(f({ min: 0, max: r.canvas.size.height })); const { dx: s, dy: l } = b(e.position, e.moveCenter);e.direction = Math.atan2(-l, -s), e.velocity.angle = e.direction; break }
                    default:
                        if (O(e.position, r.canvas.size, u.origin, e.getRadius(), t)) return; switch (e.outType) {
                            case "outside":
                                { e.position.x = Math.floor(f({ min: -e.moveCenter.radius, max: e.moveCenter.radius })) + e.moveCenter.x, e.position.y = Math.floor(f({ min: -e.moveCenter.radius, max: e.moveCenter.radius })) + e.moveCenter.y; const { dx: t, dy: n } = b(e.position, e.moveCenter);e.moveCenter.radius && (e.direction = Math.atan2(n, t), e.velocity.angle = e.direction); break }
                            case "normal":
                                { const n = e.options.move.warp,
                                        i = r.canvas.size,
                                        o = { bottom: i.height + e.getRadius() + e.offset.y, left: -e.getRadius() - e.offset.x, right: i.width + e.getRadius() + e.offset.x, top: -e.getRadius() - e.offset.y },
                                        a = e.getRadius(),
                                        s = L(e.position, a); "right" === t && s.left > i.width + e.offset.x ? (e.position.x = o.left, e.initialPosition.x = e.position.x, n || (e.position.y = d() * i.height, e.initialPosition.y = e.position.y)) : "left" === t && s.right < -e.offset.x && (e.position.x = o.right, e.initialPosition.x = e.position.x, n || (e.position.y = d() * i.height, e.initialPosition.y = e.position.y)), "bottom" === t && s.top > i.height + e.offset.y ? (n || (e.position.x = d() * i.width, e.initialPosition.x = e.position.x), e.position.y = o.top, e.initialPosition.y = e.position.y) : "top" === t && s.bottom < -e.offset.y && (n || (e.position.x = d() * i.width, e.initialPosition.x = e.position.x), e.position.y = o.bottom, e.initialPosition.y = e.position.y); break } } } } } class rn { constructor(e) { this.container = e, this._updateOutMode = (e, t, n, i) => { for (const r of this.updaters) r.update(e, i, t, n) }, this.updaters = [new Jt(e), new en(e), new nn(e), new tn(e)] } init() {} isEnabled(e) { return !e.destroyed && !e.spawning } update(e, t) { var n, i, r, o; const a = e.options.move.outModes;
                this._updateOutMode(e, t, null !== (n = a.bottom) && void 0 !== n ? n : a.default, "bottom"), this._updateOutMode(e, t, null !== (i = a.left) && void 0 !== i ? i : a.default, "left"), this._updateOutMode(e, t, null !== (r = a.right) && void 0 !== r ? r : a.default, "right"), this._updateOutMode(e, t, null !== (o = a.top) && void 0 !== o ? o : a.default, "top") } } class on { init(e) { const t = e.container,
                    n = e.options.size.animation; var i;
                n.enable && (e.size.velocity = (null !== (i = e.retina.sizeAnimationSpeed) && void 0 !== i ? i : t.retina.sizeAnimationSpeed) / 100 * t.retina.reduceFactor, n.sync || (e.size.velocity *= d())) } isEnabled(e) { var t, n, i, r; return !e.destroyed && !e.spawning && e.size.enable && ((null !== (t = e.size.maxLoops) && void 0 !== t ? t : 0) <= 0 || (null !== (n = e.size.maxLoops) && void 0 !== n ? n : 0) > 0 && (null !== (i = e.size.loops) && void 0 !== i ? i : 0) < (null !== (r = e.size.maxLoops) && void 0 !== r ? r : 0)) } reset(e) { e.size.loops = 0 } update(e, t) { this.isEnabled(e) && function(e, t) { var n, i, r, o, a, s, l, u, c; const d = e.size; if (e.destroyed || !d || !d.enable || (null !== (n = d.maxLoops) && void 0 !== n ? n : 0) > 0 && (null !== (i = d.loops) && void 0 !== i ? i : 0) > (null !== (r = d.maxLoops) && void 0 !== r ? r : 0)) return; const f = (null !== (o = d.velocity) && void 0 !== o ? o : 0) * t.factor,
                        p = d.min,
                        v = d.max,
                        m = null !== (a = d.decay) && void 0 !== a ? a : 1; if (d.time || (d.time = 0), (null !== (s = d.delayTime) && void 0 !== s ? s : 0) > 0 && d.time < (null !== (l = d.delayTime) && void 0 !== l ? l : 0) && (d.time += t.value), !((null !== (u = d.delayTime) && void 0 !== u ? u : 0) > 0 && d.time < (null !== (c = d.delayTime) && void 0 !== c ? c : 0))) { switch (d.status) {
                            case "increasing":
                                d.value >= v ? (d.status = "decreasing", d.loops || (d.loops = 0), d.loops++) : d.value += f; break;
                            case "decreasing":
                                d.value <= p ? (d.status = "increasing", d.loops || (d.loops = 0), d.loops++) : d.value -= f } d.velocity && 1 !== m && (d.velocity *= m),
                            function(e, t, n, i) { switch (e.options.size.animation.destroy) {
                                    case "max":
                                        t >= i && e.destroy(); break;
                                    case "min":
                                        t <= n && e.destroy() } }(e, d.value, p, v), e.destroyed || (d.value = h(d.value, p, v)) } }(e, t) } } async function an(e) { let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            await async function(e) { let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                await e.addMover("base", (() => new Yt), t) }(e, !1), await async function(e) { let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                await e.addShape("circle", new Gt, t) }(e, !1), await async function(e) { let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                await e.addParticleUpdater("color", (e => new Kt(e)), t) }(e, !1), await async function(e) { let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                await e.addParticleUpdater("opacity", (e => new Zt(e)), t) }(e, !1), await async function(e) { let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                await e.addParticleUpdater("outModes", (e => new rn(e)), t) }(e, !1), await async function(e) { let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                await e.addParticleUpdater("size", (() => new on), t) }(e, !1), await e.refresh(t) } class sn { randomPosition(e, t, n) { const [i, r] = [t.width / 2, t.height / 2], o = ((e, t) => { const n = d() / 4,
                        i = Math.atan(t / e * Math.tan(2 * Math.PI * n)),
                        r = d(); return r < .25 ? i : r < .5 ? Math.PI - i : r < .75 ? Math.PI + i : -i })(i, r), a = (c = o, (l = i) * (u = r) / Math.sqrt((u * Math.cos(c)) ** 2 + (l * Math.sin(c)) ** 2)), s = n ? a * Math.sqrt(d()) : a; var l, u, c; return { x: e.x + s * Math.cos(o), y: e.y + s * Math.sin(o) } } } class ln { constructor() { this.wait = !1 } load(e) { e && (void 0 !== e.count && (this.count = e.count), void 0 !== e.delay && (this.delay = g(e.delay)), void 0 !== e.duration && (this.duration = g(e.duration)), void 0 !== e.wait && (this.wait = e.wait)) } } class un { constructor() { this.quantity = 1, this.delay = .1 } load(e) { void 0 !== e && (void 0 !== e.quantity && (this.quantity = g(e.quantity)), void 0 !== e.delay && (this.delay = g(e.delay))) } } class cn { constructor() { this.mode = "percent", this.height = 0, this.width = 0 } load(e) { void 0 !== e && (void 0 !== e.mode && (this.mode = e.mode), void 0 !== e.height && (this.height = e.height), void 0 !== e.width && (this.width = e.width)) } } class dn { constructor() { this.autoPlay = !0, this.fill = !0, this.life = new ln, this.rate = new un, this.shape = "square", this.startCount = 0 } load(e) { e && (void 0 !== e.autoPlay && (this.autoPlay = e.autoPlay), void 0 !== e.size && (this.size || (this.size = new cn), this.size.load(e.size)), void 0 !== e.direction && (this.direction = e.direction), this.domId = e.domId, void 0 !== e.fill && (this.fill = e.fill), this.life.load(e.life), this.name = e.name, this.particles = D(e.particles, (e => R({}, e))), this.rate.load(e.rate), void 0 !== e.shape && (this.shape = e.shape), void 0 !== e.position && (this.position = {}, void 0 !== e.position.x && (this.position.x = g(e.position.x)), void 0 !== e.position.y && (this.position.y = g(e.position.y))), void 0 !== e.spawnColor && (void 0 === this.spawnColor && (this.spawnColor = new Te), this.spawnColor.load(e.spawnColor)), void 0 !== e.startCount && (this.startCount = e.startCount)) } } class hn { constructor(e, t, n, i, r) { var o, a, s, l, u, c, d, h, v, m;
                this.emitters = t, this.container = n, this._calcPosition = () => _({ size: this.container.canvas.size, position: this.options.position }), this._destroy = () => { this.emitters.removeEmitter(this), this._engine.dispatchEvent("emitterDestroyed", { container: this.container, data: { emitter: this } }) }, this._emit = () => { if (this._paused) return; const e = p(this.options.rate.quantity);
                    this._emitParticles(e) }, this._emitParticles = e => { const t = this.getPosition(),
                        n = this.getSize(),
                        i = I(this._particlesOptions); for (let s = 0; s < e; s++) { var r, o; const e = R({}, i); if (this.spawnColor) { var a; const t = null === (a = this.options.spawnColor) || void 0 === a ? void 0 : a.animation;
                            t && (this.spawnColor.h = this._setColorAnimation(t.h, this.spawnColor.h, 360), this.spawnColor.s = this._setColorAnimation(t.s, this.spawnColor.s, 100), this.spawnColor.l = this._setColorAnimation(t.l, this.spawnColor.l, 100)), e.color ? e.color.value = this.spawnColor : e.color = { value: this.spawnColor } } if (!t) return; const s = null !== (r = null === (o = this._shape) || void 0 === o ? void 0 : o.randomPosition(t, n, this.fill)) && void 0 !== r ? r : t;
                        this.container.particles.addParticle(s, e) } }, this._prepareToDie = () => { var e; if (this._paused) return; const t = void 0 !== (null === (e = this.options.life) || void 0 === e ? void 0 : e.duration) ? p(this.options.life.duration) : void 0;
                    this.container.retina.reduceFactor && (this._lifeCount > 0 || this._immortal) && void 0 !== t && t > 0 && (this._duration = 1e3 * t) }, this._setColorAnimation = (e, t, n) => { var i; const r = this.container; if (!e.enable) return t; const o = f(e.offset),
                        a = 1e3 * p(this.options.rate.delay) / r.retina.reduceFactor; return (t + p(null !== (i = e.speed) && void 0 !== i ? i : 0) * r.fpsLimit / a + 3.6 * o) % n }, this._engine = e, this._currentDuration = 0, this._currentEmitDelay = 0, this._currentSpawnDelay = 0, this._initialPosition = r, i instanceof dn ? this.options = i : (this.options = new dn, this.options.load(i)), this._spawnDelay = 1e3 * p(null !== (o = this.options.life.delay) && void 0 !== o ? o : 0) / this.container.retina.reduceFactor, this.position = null !== (a = this._initialPosition) && void 0 !== a ? a : this._calcPosition(), this.name = this.options.name, this._shape = null === (s = this._engine.emitterShapeManager) || void 0 === s ? void 0 : s.getShape(this.options.shape), this.fill = this.options.fill, this._firstSpawn = !this.options.life.wait, this._startParticlesAdded = !1; let g = R({}, this.options.particles);
                null !== (l = g) && void 0 !== l || (g = {}), null !== (c = (u = g).move) && void 0 !== c || (u.move = {}), null !== (h = (d = g.move).direction) && void 0 !== h || (d.direction = this.options.direction), this.options.spawnColor && (this.spawnColor = Z(this.options.spawnColor)), this._paused = !this.options.autoPlay, this._particlesOptions = g, this.size = null !== (v = this.options.size) && void 0 !== v ? v : (() => { const e = new cn; return e.load({ height: 0, mode: "percent", width: 0 }), e })(), this._lifeCount = null !== (m = this.options.life.count) && void 0 !== m ? m : -1, this._immortal = this._lifeCount <= 0, this._engine.dispatchEvent("emitterCreated", { container: n, data: { emitter: this } }), this.play() } externalPause() { this._paused = !0, this.pause() } externalPlay() { this._paused = !1, this.play() } getPosition() { if (this.options.domId) { const e = this.container,
                        t = document.getElementById(this.options.domId); if (t) { const n = t.getBoundingClientRect(); return { x: (n.x + n.width / 2) * e.retina.pixelRatio, y: (n.y + n.height / 2) * e.retina.pixelRatio } } } return this.position } getSize() { const e = this.container; if (this.options.domId) { const t = document.getElementById(this.options.domId); if (t) { const n = t.getBoundingClientRect(); return { width: n.width * e.retina.pixelRatio, height: n.height * e.retina.pixelRatio } } } return t = this.size, n = e.canvas.size, F(t, n); var t, n } pause() { this._paused || delete this._emitDelay } play() { var e; if (!this._paused && this.container.retina.reduceFactor && (this._lifeCount > 0 || this._immortal || !this.options.life.count) && (this._firstSpawn || this._currentSpawnDelay >= (null !== (e = this._spawnDelay) && void 0 !== e ? e : 0))) { if (void 0 === this._emitDelay) { const e = p(this.options.rate.delay);
                        this._emitDelay = 1e3 * e / this.container.retina.reduceFactor }(this._lifeCount > 0 || this._immortal) && this._prepareToDie() } } resize() { const e = this._initialPosition;
                this.position = e && O(e, this.container.canvas.size, u.origin) ? e : this._calcPosition() } update(e) { if (!this._paused) { var t, n; if (this._firstSpawn) this._firstSpawn = !1, this._currentSpawnDelay = null !== (t = this._spawnDelay) && void 0 !== t ? t : 0, this._currentEmitDelay = null !== (n = this._emitDelay) && void 0 !== n ? n : 0; if (this._startParticlesAdded || (this._startParticlesAdded = !0, this._emitParticles(this.options.startCount)), void 0 !== this._duration && (this._currentDuration += e.value, this._currentDuration >= this._duration)) { var i; if (this.pause(), void 0 !== this._spawnDelay && delete this._spawnDelay, this._immortal || this._lifeCount--, this._lifeCount > 0 || this._immortal) this.position = this._calcPosition(), this._spawnDelay = 1e3 * p(null !== (i = this.options.life.delay) && void 0 !== i ? i : 0) / this.container.retina.reduceFactor;
                        else this._destroy();
                        this._currentDuration -= this._duration, delete this._duration } void 0 !== this._spawnDelay && (this._currentSpawnDelay += e.value, this._currentSpawnDelay >= this._spawnDelay && (this._engine.dispatchEvent("emitterPlay", { container: this.container }), this.play(), this._currentSpawnDelay -= this._currentSpawnDelay, delete this._spawnDelay)), void 0 !== this._emitDelay && (this._currentEmitDelay += e.value, this._currentEmitDelay >= this._emitDelay && (this._emit(), this._currentEmitDelay -= this._emitDelay)) } } } class fn { constructor(e, t) { this.container = t, this._engine = e, this.array = [], this.emitters = [], this.interactivityEmitters = { random: { count: 1, enable: !1 }, value: [] }, t.getEmitter = e => void 0 === e || B(e) ? this.array[e || 0] : this.array.find((t => t.name === e)), t.addEmitter = (e, t) => this.addEmitter(e, t), t.removeEmitter = e => { const n = t.getEmitter(e);
                    n && this.removeEmitter(n) }, t.playEmitter = e => { const n = t.getEmitter(e);
                    n && n.externalPlay() }, t.pauseEmitter = e => { const n = t.getEmitter(e);
                    n && n.externalPause() } } addEmitter(e, t) { const n = new dn;
                n.load(e); const i = new hn(this._engine, this, this.container, n, t); return this.array.push(i), i } handleClickMode(e) { var t; const n = this.emitters,
                    i = this.interactivityEmitters; if ("emitter" !== e) return; let r; if (i && W(i.value))
                    if (i.value.length > 0 && i.random.enable) { r = []; const e = []; for (let t = 0; t < i.random.count; t++) { const n = M(i.value);
                            e.includes(n) && e.length < i.value.length ? t-- : (e.push(n), r.push(T(i.value, n))) } } else r = i.value;
                else r = null === i || void 0 === i ? void 0 : i.value; const o = null !== (t = r) && void 0 !== t ? t : n,
                    a = this.container.interactivity.mouse.clickPosition;
                D(o, (e => { this.addEmitter(e, a) })) } async init() { if (this.emitters = this.container.actualOptions.emitters, this.interactivityEmitters = this.container.actualOptions.interactivity.modes.emitters, this.emitters)
                    if (W(this.emitters))
                        for (const e of this.emitters) this.addEmitter(e);
                    else this.addEmitter(this.emitters) } pause() { for (const e of this.array) e.pause() } play() { for (const e of this.array) e.play() } removeEmitter(e) { const t = this.array.indexOf(e);
                t >= 0 && this.array.splice(t, 1) } resize() { for (const e of this.array) e.resize() } stop() { this.array = [] } update(e) { for (const t of this.array) t.update(e) } }
        const pn = new Map;
        class vn { constructor(e) { this._engine = e } addShape(e, t) { this.getShape(e) || pn.set(e, t) } getShape(e) { return pn.get(e) } getSupportedShapes() { return pn.keys() } }

        function mn(e, t) { return e + t * (d() - .5) } class gn { randomPosition(e, t, n) { if (n) return { x: mn(e.x, t.width), y: mn(e.y, t.height) }; { const n = t.width / 2,
                        i = t.height / 2,
                        r = Math.floor(4 * d()),
                        o = 2 * (d() - .5); switch (r) {
                        case 0:
                            return { x: e.x + o * n, y: e.y - i };
                        case 1:
                            return { x: e.x - n, y: e.y + o * i };
                        case 2:
                            return { x: e.x + o * n, y: e.y + i };
                        default:
                            return { x: e.x + n, y: e.y + o * i } } } } } class yn { constructor(e) { this._engine = e, this.id = "emitters" } getPlugin(e) { return new fn(this._engine, e) } loadOptions(e, t) { var n; if (!this.needsPlugin(e) && !this.needsPlugin(t)) return;
                null !== t && void 0 !== t && t.emitters && (e.emitters = D(t.emitters, (e => { const t = new dn; return t.load(e), t }))); const i = null === t || void 0 === t || null === (n = t.interactivity) || void 0 === n || null === (n = n.modes) || void 0 === n ? void 0 : n.emitters; if (i)
                    if (W(i)) e.interactivity.modes.emitters = { random: { count: 1, enable: !0 }, value: i.map((e => { const t = new dn; return t.load(e), t })) };
                    else { const t = i; if (void 0 !== t.value)
                            if (W(t.value)) { var r, o;
                                e.interactivity.modes.emitters = { random: { count: null !== (r = t.random.count) && void 0 !== r ? r : 1, enable: null !== (o = t.random.enable) && void 0 !== o && o }, value: t.value.map((e => { const t = new dn; return t.load(e), t })) } } else { var a, s; const n = new dn;
                                n.load(t.value), e.interactivity.modes.emitters = { random: { count: null !== (a = t.random.count) && void 0 !== a ? a : 1, enable: null !== (s = t.random.enable) && void 0 !== s && s }, value: n } } else {
                            (e.interactivity.modes.emitters = { random: { count: 1, enable: !1 }, value: new dn }).value.load(i) } } } needsPlugin(e) { var t; if (!e) return !1; const n = e.emitters; return W(n) && !!n.length || void 0 !== n || !(null === (t = e.interactivity) || void 0 === t || null === (t = t.events) || void 0 === t || null === (t = t.onClick) || void 0 === t || !t.mode) && E("emitter", e.interactivity.events.onClick.mode) } } async function bn(e) { let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            await an(e, !1), await async function(e) { let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                e.emitterShapeManager || (e.emitterShapeManager = new vn(e)), e.addEmitterShape || (e.addEmitterShape = (t, n) => { var i;
                    null === (i = e.emitterShapeManager) || void 0 === i || i.addShape(t, n) }); const n = new yn(e);
                await e.addPlugin(n, t), e.addEmitterShape("circle", new sn), e.addEmitterShape("square", new gn) }(e, !1), await async function(e) { let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                await e.addPathGenerator($t, new Wt, t) }(e, !1), await e.addPreset("seaAnemone", Qt, t) }
        var wn = n(184); const _n = () => (0, wn.jsx)(jt, { options: { preset: "seaAnemone" }, init: e => { bn(e) } }),
            kn = e => { e && e instanceof Function && n.e(787).then(n.bind(n, 787)).then((t => { let { getCLS: n, getFID: i, getFCP: r, getLCP: o, getTTFB: a } = t;
                    n(e), i(e), r(e), o(e), a(e) })) };
        t.createRoot(document.getElementById("root")).render((0, wn.jsx)(e.StrictMode, { children: (0, wn.jsx)(_n, {}) })), kn() })() })();
//# sourceMappingURL=main.46ac983b.js.map