!(function(A, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e(require("react"), require("react-dom")))
    : "function" == typeof define && define.amd
    ? define(["react", "react-dom"], e)
    : "object" == typeof exports
    ? (exports["react-viewer"] = e(require("react"), require("react-dom")))
    : (A["react-viewer"] = e(A.React, A.ReactDOM));
})(this, function(A, e) {
  if (typeof window == "undefined") {
    return;
  }
  return (function(A) {
    var e = {};
    function t(n) {
      if (e[n]) return e[n].exports;
      var i = (e[n] = { i: n, l: !1, exports: {} });
      return A[n].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
    }
    return (
      (t.m = A),
      (t.c = e),
      (t.d = function(A, e, n) {
        t.o(A, e) || Object.defineProperty(A, e, { enumerable: !0, get: n });
      }),
      (t.r = function(A) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(A, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(A, "__esModule", { value: !0 });
      }),
      (t.t = function(A, e) {
        if ((1 & e && (A = t(A)), 8 & e)) return A;
        if (4 & e && "object" == typeof A && A && A.__esModule) return A;
        var n = Object.create(null);
        if (
          (t.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: A }),
          2 & e && "string" != typeof A)
        )
          for (var i in A)
            t.d(
              n,
              i,
              function(e) {
                return A[e];
              }.bind(null, i)
            );
        return n;
      }),
      (t.n = function(A) {
        var e =
          A && A.__esModule
            ? function() {
                return A.default;
              }
            : function() {
                return A;
              };
        return t.d(e, "a", e), e;
      }),
      (t.o = function(A, e) {
        return Object.prototype.hasOwnProperty.call(A, e);
      }),
      (t.p = ""),
      t((t.s = 4))
    );
  })([
    function(e, t) {
      e.exports = A;
    },
    function(A, e, t) {
      var n;
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function() {
        "use strict";
        var t = {}.hasOwnProperty;
        function i() {
          for (var A = [], e = 0; e < arguments.length; e++) {
            var n = arguments[e];
            if (n) {
              var o = typeof n;
              if ("string" === o || "number" === o) A.push(n);
              else if (Array.isArray(n) && n.length) {
                var r = i.apply(null, n);
                r && A.push(r);
              } else if ("object" === o)
                for (var a in n) t.call(n, a) && n[a] && A.push(a);
            }
          }
          return A.join(" ");
        }
        A.exports
          ? ((i.default = i), (A.exports = i))
          : void 0 ===
              (n = function() {
                return i;
              }.apply(e, [])) || (A.exports = n);
      })();
    },
    function(A, e) {
      A.exports =
        "data:application/vnd.ms-fontobject;base64,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";
    },
    function(A, t) {
      A.exports = e;
    },
    function(A, e, t) {
      A.exports = t(13);
    },
    function(A, e, t) {
      var n = t(6);
      "string" == typeof n && (n = [[A.i, n, ""]]);
      var i = { insert: "head", singleton: !1 };
      t(12)(n, i);
      n.locals && (A.exports = n.locals);
    },
    function(A, e, t) {
      e = A.exports = t(7)(!1);
      var n = t(8),
        i = n(t(2)),
        o = n(t(2) + "?#iefix"),
        r = n(t(9)),
        a = n(t(10)),
        c = n(t(11));
      e.push([
        A.i,
        "@font-face {\n  font-family: 'icomoon';\n  src: url(" +
          i +
          ");\n  src: url(" +
          o +
          ") format('embedded-opentype'), url(" +
          r +
          ") format('truetype'), url(" +
          a +
          ") format('woff'), url(" +
          c +
          ") format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.react-viewer {\n  opacity: 0;\n}\n.react-viewer-inline {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 400px;\n}\n.react-viewer ul {\n  margin: 0;\n  padding: 0;\n}\n.react-viewer li {\n  list-style: none;\n}\n.react-viewer-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #373737;\n  background-color: rgba(55, 55, 55, 0.6);\n  height: 100%;\n  filter: alpha(opacity=50);\n  z-index: 1000;\n}\n.react-viewer-btn {\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n}\n.react-viewer-btn:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.react-viewer-close {\n  position: fixed;\n  top: 0px;\n  right: 0px;\n  overflow: hidden;\n  width: 40px;\n  height: 40px;\n  border-radius: 0 0 0 40px;\n  cursor: pointer;\n  z-index: 1010;\n}\n.react-viewer-close > i {\n  position: relative;\n  top: 4px;\n  left: 18px;\n}\n.react-viewer-canvas {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  overflow: hidden;\n  z-index: 1005;\n}\n.react-viewer-canvas > img {\n  display: block;\n  width: auto;\n  height: auto;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.react-viewer-canvas > img.drag {\n  cursor: move;\n}\n.react-viewer-footer {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  text-align: center;\n  z-index: 1005;\n}\n.react-viewer-inline > .react-viewer-mask,\n.react-viewer-inline > .react-viewer-close,\n.react-viewer-inline > .react-viewer-canvas,\n.react-viewer-inline > .react-viewer-footer {\n  position: absolute;\n}\n.react-viewer-attribute {\n  margin: 0 20px;\n  margin-bottom: 6px;\n  opacity: 0.8;\n  color: #ccc;\n  font-size: 15px;\n}\n.react-viewer-showTotal {\n  float: right;\n}\n.react-viewer-toolbar {\n  overflow: hidden;\n  height: 28px;\n  margin-bottom: 6px !important;\n}\n.react-viewer-toolbar li {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  border-radius: 28px;\n  margin-right: 3px;\n  cursor: pointer;\n  line-height: 28px;\n}\n.react-viewer-toolbar li:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.react-viewer li.empty {\n  background-color: transparent;\n  cursor: default;\n}\n.react-viewer-navbar {\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.react-viewer-list {\n  height: 50px;\n  padding: 1px;\n  text-align: left;\n}\n.react-viewer-list > li {\n  display: inline-block;\n  width: 30px;\n  height: 50px;\n  cursor: pointer;\n  overflow: hidden;\n  margin-right: 1px;\n}\n.react-viewer-list > li > img {\n  width: 60px;\n  height: 50px;\n  margin-left: -15px;\n  opacity: 0.5;\n}\n.react-viewer-list > li.active > img {\n  opacity: 1;\n}\n.react-viewer-transition {\n  -webkit-transition: opacity 0.3s ease-out;\n  -o-transition: opacity 0.3s ease-out;\n  transition: opacity 0.3s ease-out;\n}\n.react-viewer-image-transition {\n  -webkit-transition-property: width, height, margin, -webkit-transform;\n  transition-property: width, height, margin, -webkit-transform;\n  -o-transition-property: width, height, margin, transform;\n  transition-property: width, height, margin, transform;\n  transition-property: width, height, margin, transform, -webkit-transform;\n  -webkit-transition-duration: 0.3s;\n       -o-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n       -o-transition-timing-function: ease-out;\n          transition-timing-function: ease-out;\n}\n.react-viewer-list-transition {\n  -webkit-transition: margin 0.3s ease-out;\n  -o-transition: margin 0.3s ease-out;\n  transition: margin 0.3s ease-out;\n}\n.react-viewer-icon {\n  font-family: 'icomoon' !important;\n  display: inline-block;\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  text-rendering: auto;\n  line-height: 1;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: white;\n  font-size: 13px;\n}\n.react-viewer-icon-zoomIn:before {\n  content: '\\ea0a';\n}\n.react-viewer-icon-zoomOut:before {\n  content: '\\ea0b';\n}\n.react-viewer-icon-prev:before {\n  content: '\\ea38';\n}\n.react-viewer-icon-next:before {\n  content: '\\ea34';\n}\n.react-viewer-icon-close:before {\n  content: '\\ea0f';\n}\n.react-viewer-icon-rotateLeft:before {\n  content: '\\e967';\n}\n.react-viewer-icon-rotateRight:before {\n  content: '\\e968';\n}\n.react-viewer-icon-reset:before {\n  content: '\\e984';\n}\n.react-viewer-icon-scaleX:before {\n  content: '\\ea60';\n}\n.react-viewer-icon-scaleY:before {\n  content: '\\ea5f';\n}\n.react-viewer-icon-download:before {\n  content: '\\e9c7';\n}\n.circle-loading {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n  border: 10px solid rgba(255, 255, 255, 0.2);\n  border-top-color: #FFF;\n  -webkit-animation: spin 1s infinite linear;\n          animation: spin 1s infinite linear;\n}\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n",
        ""
      ]);
    },
    function(A, e, t) {
      "use strict";
      A.exports = function(A) {
        var e = [];
        return (
          (e.toString = function() {
            return this.map(function(e) {
              var t = (function(A, e) {
                var t = A[1] || "",
                  n = A[3];
                if (!n) return t;
                if (e && "function" == typeof btoa) {
                  var i =
                      ((r = n),
                      (a = btoa(
                        unescape(encodeURIComponent(JSON.stringify(r)))
                      )),
                      (c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        a
                      )),
                      "/*# ".concat(c, " */")),
                    o = n.sources.map(function(A) {
                      return "/*# sourceURL="
                        .concat(n.sourceRoot)
                        .concat(A, " */");
                    });
                  return [t]
                    .concat(o)
                    .concat([i])
                    .join("\n");
                }
                var r, a, c;
                return [t].join("\n");
              })(e, A);
              return e[2] ? "@media ".concat(e[2], "{").concat(t, "}") : t;
            }).join("");
          }),
          (e.i = function(A, t) {
            "string" == typeof A && (A = [[null, A, ""]]);
            for (var n = {}, i = 0; i < this.length; i++) {
              var o = this[i][0];
              null != o && (n[o] = !0);
            }
            for (var r = 0; r < A.length; r++) {
              var a = A[r];
              (null != a[0] && n[a[0]]) ||
                (t && !a[2]
                  ? (a[2] = t)
                  : t && (a[2] = "(".concat(a[2], ") and (").concat(t, ")")),
                e.push(a));
            }
          }),
          e
        );
      };
    },
    function(A, e, t) {
      "use strict";
      A.exports = function(A, e) {
        return "string" != typeof (A = A.__esModule ? A.default : A)
          ? A
          : (/^['"].*['"]$/.test(A) && (A = A.slice(1, -1)),
            /["'() \t\n]/.test(A) || e
              ? '"'.concat(A.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"')
              : A);
      };
    },
    function(A, e) {
      A.exports =
        "data:font/ttf;base64,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";
    },
    function(A, e) {
      A.exports =
        "data:font/woff;base64,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";
    },
    function(A, e) {
      A.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+R2VuZXJhdGVkIGJ5IEljb01vb248L21ldGFkYXRhPgo8ZGVmcz4KPGZvbnQgaWQ9Imljb21vb24iIGhvcml6LWFkdi14PSIxMDI0Ij4KPGZvbnQtZmFjZSB1bml0cy1wZXItZW09IjEwMjQiIGFzY2VudD0iOTYwIiBkZXNjZW50PSItNjQiIC8+CjxtaXNzaW5nLWdseXBoIGhvcml6LWFkdi14PSIxMDI0IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4MjA7IiBob3Jpei1hZHYteD0iNTEyIiBkPSIiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTY3OyIgZ2x5cGgtbmFtZT0icm90YXRlLWxlZnQiIGQ9Ik03NjEuODYyLTY0YzExMy43MjYgMjA2LjAzMiAxMzIuODg4IDUyMC4zMDYtMzEzLjg2MiA1MDkuODI0di0yNTMuODI0bC0zODQgMzg0IDM4NCAzODR2LTI0OC4zNzJjNTM0Ljk2MiAxMy45NDIgNTk0LjU3LTQ3Mi4yMTQgMzEzLjg2Mi03NzUuNjI4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5Njg7IiBnbHlwaC1uYW1lPSJyb3RhdGUtcmlnaHQiIGQ9Ik01NzYgNzExLjYyOHYyNDguMzcybDM4NC0zODQtMzg0LTM4NHYyNTMuODI0Yy00NDYuNzUgMTAuNDgyLTQyNy41ODgtMzAzLjc5Mi0zMTMuODYtNTA5LjgyNC0yODAuNzEyIDMwMy40MTQtMjIxLjEgNzg5LjU3IDMxMy44NiA3NzUuNjI4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5ODQ7IiBnbHlwaC1uYW1lPSJyZXNldCIgZD0iTTEwMjQgNTc2aC0zODRsMTQzLjUzIDE0My41M2MtNzIuNTMgNzIuNTI2LTE2OC45NiAxMTIuNDctMjcxLjUzIDExMi40N3MtMTk5LTM5Ljk0NC0yNzEuNTMtMTEyLjQ3Yy03Mi41MjYtNzIuNTMtMTEyLjQ3LTE2OC45Ni0xMTIuNDctMjcxLjUzczM5Ljk0NC0xOTkgMTEyLjQ3LTI3MS41M2M3Mi41My03Mi41MjYgMTY4Ljk2LTExMi40NyAyNzEuNTMtMTEyLjQ3czE5OSAzOS45NDQgMjcxLjUyOCAxMTIuNDcyYzYuMDU2IDYuMDU0IDExLjg2IDEyLjI5MiAxNy40NTYgMTguNjY4bDk2LjMyLTg0LjI4MmMtOTMuODQ2LTEwNy4xNjYtMjMxLjY2NC0xNzQuODU4LTM4NS4zMDQtMTc0Ljg1OC0yODIuNzcgMC01MTIgMjI5LjIzLTUxMiA1MTJzMjI5LjIzIDUxMiA1MTIgNTEyYzE0MS4zODYgMCAyNjkuMzY4LTU3LjMyNiAzNjIuMDE2LTE0OS45ODRsMTQ5Ljk4NCAxNDkuOTg0di0zODR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTljNzsiIGdseXBoLW5hbWU9ImRvd25sb2FkIiBkPSJNNzM2IDUxMmwtMjU2LTI1Ni0yNTYgMjU2aDE2MHYzODRoMTkydi0zODR6TTQ4MCAyNTZoLTQ4MHYtMjU2aDk2MHYyNTZoLTQ4MHpNODk2IDEyOGgtMTI4djY0aDEyOHYtNjR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZWEwYTsiIGdseXBoLW5hbWU9Inpvb20taW4iIGQ9Ik05OTIgNTc2aC0zNTJ2MzUyYzAgMTcuNjcyLTE0LjMyOCAzMi0zMiAzMmgtMTkyYy0xNy42NzIgMC0zMi0xNC4zMjgtMzItMzJ2LTM1MmgtMzUyYy0xNy42NzIgMC0zMi0xNC4zMjgtMzItMzJ2LTE5MmMwLTE3LjY3MiAxNC4zMjgtMzIgMzItMzJoMzUydi0zNTJjMC0xNy42NzIgMTQuMzI4LTMyIDMyLTMyaDE5MmMxNy42NzIgMCAzMiAxNC4zMjggMzIgMzJ2MzUyaDM1MmMxNy42NzIgMCAzMiAxNC4zMjggMzIgMzJ2MTkyYzAgMTcuNjcyLTE0LjMyOCAzMi0zMiAzMnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlYTBiOyIgZ2x5cGgtbmFtZT0iem9vbS1vdXQiIGQ9Ik0wIDU0NHYtMTkyYzAtMTcuNjcyIDE0LjMyOC0zMiAzMi0zMmg5NjBjMTcuNjcyIDAgMzIgMTQuMzI4IDMyIDMydjE5MmMwIDE3LjY3Mi0xNC4zMjggMzItMzIgMzJoLTk2MGMtMTcuNjcyIDAtMzItMTQuMzI4LTMyLTMyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGVhMGY7IiBnbHlwaC1uYW1lPSJjbG9zZSIgZD0iTTEwMTQuNjYyIDEzNy4zNGMtMC4wMDQgMC4wMDQtMC4wMDggMC4wMDgtMC4wMTIgMC4wMTBsLTMxMC42NDQgMzEwLjY1IDMxMC42NDQgMzEwLjY1YzAuMDA0IDAuMDA0IDAuMDA4IDAuMDA2IDAuMDEyIDAuMDEwIDMuMzQ0IDMuMzQ2IDUuNzYyIDcuMjU0IDcuMzEyIDExLjQxNiA0LjI0NiAxMS4zNzYgMS44MjQgMjQuNjgyLTcuMzI0IDMzLjgzbC0xNDYuNzQ2IDE0Ni43NDZjLTkuMTQ4IDkuMTQ2LTIyLjQ1IDExLjU2Ni0zMy44MjggNy4zMi00LjE2LTEuNTUtOC4wNzAtMy45NjgtMTEuNDE4LTcuMzEgMC0wLjAwNC0wLjAwNC0wLjAwNi0wLjAwOC0wLjAxMGwtMzEwLjY0OC0zMTAuNjUyLTMxMC42NDggMzEwLjY1Yy0wLjAwNCAwLjAwNC0wLjAwNiAwLjAwNi0wLjAxMCAwLjAxMC0zLjM0NiAzLjM0Mi03LjI1NCA1Ljc2LTExLjQxNCA3LjMxLTExLjM4IDQuMjQ4LTI0LjY4MiAxLjgyNi0zMy44My03LjMybC0xNDYuNzQ4LTE0Ni43NDhjLTkuMTQ4LTkuMTQ4LTExLjU2OC0yMi40NTItNy4zMjItMzMuODI4IDEuNTUyLTQuMTYgMy45Ny04LjA3MiA3LjMxMi0xMS40MTYgMC4wMDQtMC4wMDIgMC4wMDYtMC4wMDYgMC4wMTAtMC4wMTBsMzEwLjY1LTMxMC42NDgtMzEwLjY1LTMxMC42NTJjLTAuMDAyLTAuMDA0LTAuMDA2LTAuMDA2LTAuMDA4LTAuMDEwLTMuMzQyLTMuMzQ2LTUuNzYtNy4yNTQtNy4zMTQtMTEuNDE0LTQuMjQ4LTExLjM3Ni0xLjgyNi0yNC42ODIgNy4zMjItMzMuODNsMTQ2Ljc0OC0xNDYuNzQ2YzkuMTUtOS4xNDggMjIuNDUyLTExLjU2OCAzMy44My03LjMyMiA0LjE2IDEuNTUyIDguMDcwIDMuOTcgMTEuNDE2IDcuMzEyIDAuMDAyIDAuMDA0IDAuMDA2IDAuMDA2IDAuMDEwIDAuMDEwbDMxMC42NDggMzEwLjY1IDMxMC42NDgtMzEwLjY1YzAuMDA0LTAuMDAyIDAuMDA4LTAuMDA2IDAuMDEyLTAuMDA4IDMuMzQ4LTMuMzQ0IDcuMjU0LTUuNzYyIDExLjQxNC03LjMxNCAxMS4zNzgtNC4yNDYgMjQuNjg0LTEuODI2IDMzLjgyOCA3LjMyMmwxNDYuNzQ2IDE0Ni43NDhjOS4xNDggOS4xNDggMTEuNTcgMjIuNDU0IDcuMzI0IDMzLjgzLTEuNTUyIDQuMTYtMy45NyA4LjA2OC03LjMxNCAxMS40MTR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZWEzNDsiIGdseXBoLW5hbWU9Im5leHQiIGQ9Ik05OTIgNDQ4bC00ODAgNDgwdi0yODhoLTUxMnYtMzg0aDUxMnYtMjg4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGVhMzg7IiBnbHlwaC1uYW1lPSJwcmV2IiBkPSJNMzIgNDQ4bDQ4MC00ODB2Mjg4aDUxMnYzODRoLTUxMnYyODh6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZWE1ZjsiIGdseXBoLW5hbWU9InNjYWxlWSIgZD0iTTg5NiAxOTJoMTI4bC0xNjAtMTkyLTE2MCAxOTJoMTI4djUxMmgtMTI4bDE2MCAxOTIgMTYwLTE5MmgtMTI4ek02NDAgODk2di0yNTZsLTY0IDEyOGgtMTkydi03MDRoMTI4di02NGgtMzg0djY0aDEyOHY3MDRoLTE5MmwtNjQtMTI4djI1NnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlYTYwOyIgZ2x5cGgtbmFtZT0ic2NhbGVYIiBkPSJNMjU2IDY0di0xMjhsLTE5MiAxNjAgMTkyIDE2MHYtMTI4aDUxMnYxMjhsMTkyLTE2MC0xOTItMTYwdjEyOHpNODMyIDg5NnYtMjU2bC02NCAxMjhoLTE5MnYtNDQ4aDEyOHYtNjRoLTM4NHY2NGgxMjh2NDQ4aC0xOTJsLTY0LTEyOHYyNTZ6IiAvPgo8L2ZvbnQ+PC9kZWZzPjwvc3ZnPg==";
    },
    function(A, e, t) {
      "use strict";
      var n,
        i = {},
        o = function() {
          return (
            void 0 === n &&
              (n = Boolean(window && document && document.all && !window.atob)),
            n
          );
        },
        r = (function() {
          var A = {};
          return function(e) {
            if (void 0 === A[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (A) {
                  t = null;
                }
              A[e] = t;
            }
            return A[e];
          };
        })();
      function a(A, e) {
        for (var t = [], n = {}, i = 0; i < A.length; i++) {
          var o = A[i],
            r = e.base ? o[0] + e.base : o[0],
            a = { css: o[1], media: o[2], sourceMap: o[3] };
          n[r] ? n[r].parts.push(a) : t.push((n[r] = { id: r, parts: [a] }));
        }
        return t;
      }
      function c(A, e) {
        for (var t = 0; t < A.length; t++) {
          var n = A[t],
            o = i[n.id],
            r = 0;
          if (o) {
            for (o.refs++; r < o.parts.length; r++) o.parts[r](n.parts[r]);
            for (; r < n.parts.length; r++) o.parts.push(E(n.parts[r], e));
          } else {
            for (var a = []; r < n.parts.length; r++) a.push(E(n.parts[r], e));
            i[n.id] = { id: n.id, refs: 1, parts: a };
          }
        }
      }
      function g(A) {
        var e = document.createElement("style");
        if (void 0 === A.attributes.nonce) {
          var n = t.nc;
          n && (A.attributes.nonce = n);
        }
        if (
          (Object.keys(A.attributes).forEach(function(t) {
            e.setAttribute(t, A.attributes[t]);
          }),
          "function" == typeof A.insert)
        )
          A.insert(e);
        else {
          var i = r(A.insert || "head");
          if (!i)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          i.appendChild(e);
        }
        return e;
      }
      var l,
        u =
          ((l = []),
          function(A, e) {
            return (l[A] = e), l.filter(Boolean).join("\n");
          });
      function s(A, e, t, n) {
        var i = t ? "" : n.css;
        if (A.styleSheet) A.styleSheet.cssText = u(e, i);
        else {
          var o = document.createTextNode(i),
            r = A.childNodes;
          r[e] && A.removeChild(r[e]),
            r.length ? A.insertBefore(o, r[e]) : A.appendChild(o);
        }
      }
      function M(A, e, t) {
        var n = t.css,
          i = t.media,
          o = t.sourceMap;
        if (
          (i && A.setAttribute("media", i),
          o &&
            btoa &&
            (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
              " */"
            )),
          A.styleSheet)
        )
          A.styleSheet.cssText = n;
        else {
          for (; A.firstChild; ) A.removeChild(A.firstChild);
          A.appendChild(document.createTextNode(n));
        }
      }
      var d = null,
        w = 0;
      function E(A, e) {
        var t, n, i;
        if (e.singleton) {
          var o = w++;
          (t = d || (d = g(e))),
            (n = s.bind(null, t, o, !1)),
            (i = s.bind(null, t, o, !0));
        } else
          (t = g(e)),
            (n = M.bind(null, t, e)),
            (i = function() {
              !(function(A) {
                if (null === A.parentNode) return !1;
                A.parentNode.removeChild(A);
              })(t);
            });
        return (
          n(A),
          function(e) {
            if (e) {
              if (
                e.css === A.css &&
                e.media === A.media &&
                e.sourceMap === A.sourceMap
              )
                return;
              n((A = e));
            } else i();
          }
        );
      }
      A.exports = function(A, e) {
        ((e = e || {}).attributes =
          "object" == typeof e.attributes ? e.attributes : {}),
          e.singleton || "boolean" == typeof e.singleton || (e.singleton = o());
        var t = a(A, e);
        return (
          c(t, e),
          function(A) {
            for (var n = [], o = 0; o < t.length; o++) {
              var r = t[o],
                g = i[r.id];
              g && (g.refs--, n.push(g));
            }
            A && c(a(A, e), e);
            for (var l = 0; l < n.length; l++) {
              var u = n[l];
              if (0 === u.refs) {
                for (var s = 0; s < u.parts.length; s++) u.parts[s]();
                delete i[u.id];
              }
            }
          }
        );
      };
    },
    function(A, e, t) {
      "use strict";
      t.r(e);
      var n = t(0),
        i = t(3);
      t(5);
      function o(A) {
        return n.createElement(
          "div",
          { className: "loading-wrap", style: A.style },
          n.createElement("div", { className: "circle-loading" })
        );
      }
      var r,
        a = t(1),
        c = t.n(a);
      function g(A, e) {
        return (
          (function(A) {
            if (Array.isArray(A)) return A;
          })(A) ||
          (function(A, e) {
            if (
              !(
                Symbol.iterator in Object(A) ||
                "[object Arguments]" === Object.prototype.toString.call(A)
              )
            )
              return;
            var t = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var r, a = A[Symbol.iterator]();
                !(n = (r = a.next()).done) &&
                (t.push(r.value), !e || t.length !== e);
                n = !0
              );
            } catch (A) {
              (i = !0), (o = A);
            } finally {
              try {
                n || null == a.return || a.return();
              } finally {
                if (i) throw o;
              }
            }
            return t;
          })(A, e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      function l(A) {
        var e = n.useRef(!1),
          t = n.useRef({ x: 0, y: 0 }),
          i = g(n.useState({ x: 0, y: 0 }), 2),
          r = i[0],
          a = i[1];
        function l(e) {
          A.onResize();
        }
        function u(n) {
          0 === n.button &&
            A.visible &&
            A.drag &&
            (n.preventDefault(),
            n.stopPropagation(),
            (e.current = !0),
            (t.current = {
              x: n.nativeEvent.clientX,
              y: n.nativeEvent.clientY
            }));
        }
        n.useEffect(function() {
          return function() {
            w(!0), d(!0);
          };
        }, []),
          n.useEffect(function() {
            return (
              d(),
              function() {
                d(!0);
              }
            );
          }),
          n.useEffect(
            function() {
              return (
                A.visible && A.drag && w(),
                !A.visible && A.drag && M({}),
                function() {
                  w(!0);
                }
              );
            },
            [A.drag, A.visible]
          ),
          n.useEffect(
            function() {
              var e = r.x - t.current.x,
                n = r.y - t.current.y;
              (t.current = { x: r.x, y: r.y }),
                A.onChangeImgState(A.width, A.height, A.top + n, A.left + e);
            },
            [r]
          );
        var s = function(A) {
          e.current && a({ x: A.clientX, y: A.clientY });
        };
        function M(A) {
          e.current = !1;
        }
        function d(A) {
          var e = "addEventListener";
          A && (e = "removeEventListener"), window[e]("resize", l, !1);
        }
        function w(A) {
          var e = "addEventListener";
          A && (e = "removeEventListener"),
            document[e]("click", M, !1),
            document[e]("mousemove", s, !1);
        }
        var E,
          B,
          f,
          I = {
            width: "".concat(A.width, "px"),
            height: "".concat(A.height, "px"),
            transform: "\ntranslateX("
              .concat(null !== A.left ? A.left + "px" : "aoto", ") translateY(")
              .concat(A.top, "px)\n    rotate(")
              .concat(A.rotate, "deg) scaleX(")
              .concat(A.scaleX, ") scaleY(")
              .concat(A.scaleY, ")")
          },
          D = c()(
            "".concat(A.prefixCls, "-image"),
            ((E = { drag: A.drag }),
            (B = "".concat(A.prefixCls, "-image-transition")),
            (f = !e.current),
            B in E
              ? Object.defineProperty(E, B, {
                  value: f,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (E[B] = f),
            E)
          ),
          v = { zIndex: A.zIndex },
          y = null;
        return (
          "" !== A.imgSrc &&
            (y = n.createElement("img", {
              className: D,
              src: A.imgSrc,
              style: I,
              onMouseDown: u
            })),
          A.loading &&
            (y = n.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  height: "".concat(window.innerHeight - 84, "px"),
                  justifyContent: "center",
                  alignItems: "center"
                }
              },
              n.createElement(o, null)
            )),
          n.createElement(
            "div",
            {
              className: "".concat(A.prefixCls, "-canvas"),
              onMouseDown: function(e) {
                A.onCanvasMouseDown(e), u(e);
              },
              style: v
            },
            y
          )
        );
      }
      function u(A) {
        var e = A.activeIndex,
          t = void 0 === e ? 0 : e;
        var i = { marginLeft: "calc(50% - ".concat(t + 1, " * 31px)") };
        return n.createElement(
          "div",
          { className: "".concat(A.prefixCls, "-navbar") },
          n.createElement(
            "ul",
            {
              className: ""
                .concat(A.prefixCls, "-list ")
                .concat(A.prefixCls, "-list-transition"),
              style: i
            },
            A.images.map(function(e, i) {
              return n.createElement(
                "li",
                {
                  key: i,
                  className: i === t ? "active" : "",
                  onClick: function() {
                    var e;
                    t !== (e = i) && A.onChangeImg(e);
                  }
                },
                n.createElement("img", { src: e.src, alt: e.alt })
              );
            })
          )
        );
      }
      function s(A) {
        return n.createElement("i", {
          className: ""
            .concat("react-viewer-icon", " ")
            .concat("react-viewer-icon", "-")
            .concat(r[A.type])
        });
      }
      !(function(A) {
        (A[(A.zoomIn = 1)] = "zoomIn"),
          (A[(A.zoomOut = 2)] = "zoomOut"),
          (A[(A.prev = 3)] = "prev"),
          (A[(A.next = 4)] = "next"),
          (A[(A.rotateLeft = 5)] = "rotateLeft"),
          (A[(A.rotateRight = 6)] = "rotateRight"),
          (A[(A.reset = 7)] = "reset"),
          (A[(A.close = 8)] = "close"),
          (A[(A.scaleX = 9)] = "scaleX"),
          (A[(A.scaleY = 10)] = "scaleY"),
          (A[(A.download = 11)] = "download");
      })(r || (r = {}));
      var M = [
        { key: "zoomIn", actionType: r.zoomIn },
        { key: "zoomOut", actionType: r.zoomOut },
        { key: "prev", actionType: r.prev },
        { key: "reset", actionType: r.reset },
        { key: "next", actionType: r.next },
        { key: "rotateLeft", actionType: r.rotateLeft },
        { key: "rotateRight", actionType: r.rotateRight },
        { key: "scaleX", actionType: r.scaleX },
        { key: "scaleY", actionType: r.scaleY },
        { key: "download", actionType: r.download }
      ];
      function d(A, e) {
        return A.filter(function(A) {
          return e.indexOf(A.key) < 0;
        });
      }
      function w(A) {
        function e(e) {
          var t = null;
          return (
            void 0 !== r[e.actionType] &&
              (t = n.createElement(s, { type: e.actionType })),
            e.render && (t = e.render),
            n.createElement(
              "li",
              {
                key: e.key,
                className: "".concat(A.prefixCls, "-btn"),
                onClick: function() {
                  !(function(e) {
                    A.onAction(e);
                  })(e);
                },
                "data-key": e.key
              },
              t
            )
          );
        }
        var t = A.attribute
            ? n.createElement(
                "p",
                { className: "".concat(A.prefixCls, "-attribute") },
                A.alt && "".concat(A.alt),
                A.noImgDetails ||
                  n.createElement(
                    "span",
                    { className: "".concat(A.prefixCls, "-img-details") },
                    "(".concat(A.width, " x ").concat(A.height, ")")
                  ),
                A.showTotal &&
                  n.createElement(
                    "span",
                    { className: "".concat(A.prefixCls, "-showTotal") },
                    "".concat(A.activeIndex + 1, " of ").concat(A.count)
                  )
              )
            : null,
          i = A.toolbars;
        return (
          A.zoomable || (i = d(i, ["zoomIn", "zoomOut"])),
          A.changeable || (i = d(i, ["prev", "next"])),
          A.rotatable || (i = d(i, ["rotateLeft", "rotateRight"])),
          A.scalable || (i = d(i, ["scaleX", "scaleY"])),
          A.downloadable || (i = d(i, ["download"])),
          n.createElement(
            "div",
            null,
            t,
            n.createElement(
              "ul",
              { className: "".concat(A.prefixCls, "-toolbar") },
              i.map(function(A) {
                return e(A);
              })
            )
          )
        );
      }
      function E(A, e, t) {
        return (
          e in A
            ? Object.defineProperty(A, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (A[e] = t),
          A
        );
      }
      function B(A, e) {
        return (
          (function(A) {
            if (Array.isArray(A)) return A;
          })(A) ||
          (function(A, e) {
            if (
              !(
                Symbol.iterator in Object(A) ||
                "[object Arguments]" === Object.prototype.toString.call(A)
              )
            )
              return;
            var t = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var r, a = A[Symbol.iterator]();
                !(n = (r = a.next()).done) &&
                (t.push(r.value), !e || t.length !== e);
                n = !0
              );
            } catch (A) {
              (i = !0), (o = A);
            } finally {
              try {
                n || null == a.return || a.return();
              } finally {
                if (i) throw o;
              }
            }
            return t;
          })(A, e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      function f() {
        return (f =
          Object.assign ||
          function(A) {
            for (var e = 1; e < arguments.length; e++) {
              var t = arguments[e];
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (A[n] = t[n]);
            }
            return A;
          }).apply(this, arguments);
      }
      function I() {}
      var D = {
        setVisible: "setVisible",
        setActiveIndex: "setActiveIndex",
        update: "update",
        clear: "clear"
      };
      function v(A, e) {
        return { type: A, payload: e || {} };
      }
      var y = function(A) {
        var e,
          t = A.visible,
          i = void 0 !== t && t,
          o = A.onClose,
          a = void 0 === o ? I : o,
          g = A.images,
          d = void 0 === g ? [] : g,
          y = A.activeIndex,
          h = void 0 === y ? 0 : y,
          b = A.zIndex,
          N = void 0 === b ? 1e3 : b,
          p = A.drag,
          Q = void 0 === p || p,
          T = A.attribute,
          x = void 0 === T || T,
          m = A.zoomable,
          C = void 0 === m || m,
          j = A.rotatable,
          z = void 0 === j || j,
          Y = A.scalable,
          L = void 0 === Y || Y,
          k = A.onMaskClick,
          G = void 0 === k ? I : k,
          O = A.changeable,
          U = void 0 === O || O,
          R = A.customToolbar,
          S =
            void 0 === R
              ? function(A) {
                  return A;
                }
              : R,
          P = A.zoomSpeed,
          H = void 0 === P ? 0.05 : P,
          J = A.disableKeyboardSupport,
          F = void 0 !== J && J,
          W = A.noResetZoomAfterChange,
          Z = void 0 !== W && W,
          X = A.noLimitInitializationSize,
          V = void 0 !== X && X,
          K = A.defaultScale,
          q = void 0 === K ? 1 : K,
          _ = A.loop,
          $ = void 0 === _ || _,
          AA = A.disableMouseZoom,
          eA = void 0 !== AA && AA,
          tA = A.downloadable,
          nA = void 0 !== tA && tA,
          iA = A.noImgDetails,
          oA = void 0 !== iA && iA,
          rA = A.noToolbar,
          aA = void 0 !== rA && rA,
          cA = A.showTotal,
          gA = void 0 === cA || cA,
          lA = A.minScale,
          uA = void 0 === lA ? 0.1 : lA,
          sA = {
            visible: !1,
            visibleStart: !1,
            transitionEnd: !1,
            activeIndex: A.activeIndex,
            width: 0,
            height: 0,
            top: 15,
            left: null,
            rotate: 0,
            imageWidth: 0,
            imageHeight: 0,
            scaleX: q,
            scaleY: q,
            loading: !1,
            loadFailed: !1,
            startLoading: !1
          };
        function MA() {
          var e = window.innerWidth,
            t = window.innerHeight;
          return (
            A.container &&
              ((e = A.container.offsetWidth), (t = A.container.offsetHeight)),
            { width: e, height: t }
          );
        }
        var dA = n.useRef(MA()),
          wA = 84;
        var EA = n.useRef(null),
          BA = n.useRef(!1),
          fA = n.useRef(0),
          IA = B(
            n.useReducer(function(A, e) {
              switch (e.type) {
                case D.setVisible:
                  return f(f({}, A), { visible: e.payload.visible });
                case D.setActiveIndex:
                  return f(f({}, A), {
                    activeIndex: e.payload.index,
                    startLoading: !0
                  });
                case D.update:
                  return f(f({}, A), e.payload);
                case D.clear:
                  return f(f({}, A), {
                    width: 0,
                    height: 0,
                    scaleX: q,
                    scaleY: q,
                    rotate: 1,
                    imageWidth: 0,
                    imageHeight: 0,
                    loadFailed: !1,
                    top: 0,
                    left: 0,
                    loading: !1
                  });
              }
              return A;
            }, sA),
            2
          ),
          DA = IA[0],
          vA = IA[1];
        function yA(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          vA(v(D.update, { loading: !0, loadFailed: !1 }));
          var n = null;
          d.length > 0 && (n = d[e]);
          var i = !1,
            o = new Image();
          function r(i, o, r) {
            if (e === fA.current) {
              var a = i,
                c = o;
              A.defaultSize &&
                ((a = A.defaultSize.width), (c = A.defaultSize.height)),
                n.defaultSize &&
                  ((a = n.defaultSize.width), (c = n.defaultSize.height));
              var g = B(hA(a, c), 2),
                l = g[0],
                u = g[1],
                s = (dA.current.width - l) / 2,
                M = (dA.current.height - u - wA) / 2,
                d = q,
                w = q;
              Z && !t && ((d = DA.scaleX), (w = DA.scaleY)),
                vA(
                  v(D.update, {
                    width: l,
                    height: u,
                    left: s,
                    top: M,
                    imageWidth: i,
                    imageHeight: o,
                    loading: !1,
                    rotate: 0,
                    scaleX: d,
                    scaleY: w,
                    loadFailed: !r,
                    startLoading: !1
                  })
                );
            }
          }
          (o.onload = function() {
            BA.current && (i || r(o.width, o.height, !0));
          }),
            (o.onerror = function() {
              BA.current &&
                (A.defaultImg
                  ? (vA(
                      v(D.update, {
                        loading: !1,
                        loadFailed: !0,
                        startLoading: !1
                      })
                    ),
                    r(
                      A.defaultImg.width || 0.5 * dA.current.width,
                      A.defaultImg.height || 0.5 * dA.current.height,
                      !1
                    ))
                  : vA(
                      v(D.update, {
                        loading: !1,
                        loadFailed: !1,
                        startLoading: !1
                      })
                    ));
            }),
            (o.src = n.src),
            o.complete && ((i = !0), r(o.width, o.height, !0));
        }
        function hA(A, e) {
          var t = 0,
            n = 0,
            i = 0.8 * dA.current.width,
            o = 0.8 * (dA.current.height - wA);
          return (
            (n = ((t = Math.min(i, A)) / A) * e) > o && (t = ((n = o) / e) * A),
            V && ((t = A), (n = e)),
            [t, n]
          );
        }
        function bA(e) {
          if (
            ($ || !(e >= d.length || e < 0)) &&
            (e >= d.length && (e = 0),
            e < 0 && (e = d.length - 1),
            e !== DA.activeIndex)
          ) {
            if (A.onChange) {
              var t = NA(e);
              A.onChange(t, e);
            }
            vA(v(D.setActiveIndex, { index: e }));
          }
        }
        function NA() {
          var A =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : void 0,
            e = { src: "", alt: "", downloadUrl: "" },
            t = null;
          return (
            (t = void 0 !== A ? A : DA.activeIndex),
            d.length > 0 && t >= 0 && (e = d[t]),
            e
          );
        }
        function pA() {
          var A =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          vA(v(D.update, { rotate: DA.rotate + 90 * (A ? 1 : -1) }));
        }
        function QA(e) {
          switch (e) {
            case r.prev:
              bA(DA.activeIndex - 1);
              break;
            case r.next:
              bA(DA.activeIndex + 1);
              break;
            case r.zoomIn:
              var t = CA();
              jA(t.x, t.y, 1, H);
              break;
            case r.zoomOut:
              var n = CA();
              jA(n.x, n.y, -1, H);
              break;
            case r.rotateLeft:
              pA();
              break;
            case r.rotateRight:
              pA(!0);
              break;
            case r.reset:
              yA(DA.activeIndex, !0);
              break;
            case r.scaleX:
              (o = -1), vA(v(D.update, { scaleX: DA.scaleX * o }));
              break;
            case r.scaleY:
              !(function(A) {
                vA(v(D.update, { scaleY: DA.scaleY * A }));
              })(-1);
              break;
            case r.download:
              (i = NA()).downloadUrl &&
                (A.downloadInNewWindow
                  ? window.open(i.downloadUrl, "_blank")
                  : (location.href = i.downloadUrl));
          }
          var i, o;
        }
        function TA() {
          var A = "addEventListener";
          arguments.length > 0 &&
            void 0 !== arguments[0] &&
            arguments[0] &&
            (A = "removeEventListener"),
            F || document[A]("keydown", xA, !0),
            EA.current && EA.current[A]("wheel", mA, !1);
        }
        function xA(A) {
          var e = !1;
          switch (A.keyCode || A.which || A.charCode) {
            case 27:
              a(), (e = !0);
              break;
            case 37:
              A.ctrlKey ? QA(r.rotateLeft) : QA(r.prev), (e = !0);
              break;
            case 39:
              A.ctrlKey ? QA(r.rotateRight) : QA(r.next), (e = !0);
              break;
            case 38:
              QA(r.zoomIn), (e = !0);
              break;
            case 40:
              QA(r.zoomOut), (e = !0);
              break;
            case 49:
              A.ctrlKey && (yA(DA.activeIndex), (e = !0));
          }
          e && (A.preventDefault(), A.stopPropagation());
        }
        function mA(e) {
          if (!eA && !DA.loading) {
            e.preventDefault();
            var t = 0,
              n = e.deltaY;
            if (0 !== (t = 0 === n ? 0 : n > 0 ? -1 : 1)) {
              var i = e.clientX,
                o = e.clientY;
              if (A.container) {
                var r = A.container.getBoundingClientRect();
                (i -= r.left), (o -= r.top);
              }
              jA(i, o, t, H);
            }
          }
        }
        function CA() {
          return { x: DA.left + DA.width / 2, y: DA.top + DA.height / 2 };
        }
        function jA(e, t, n, i) {
          var o = CA(),
            r = e - o.x,
            a = t - o.y,
            c = 0,
            g = 0,
            l = 0,
            u = 0,
            s = 0,
            M = 0;
          if (0 === DA.width) {
            var d = B(hA(DA.imageWidth, DA.imageHeight), 2),
              w = d[0],
              E = d[1];
            (g = (dA.current.width - w) / 2),
              (c = (dA.current.height - wA - E) / 2),
              (l = DA.width + w),
              (u = DA.height + E),
              (s = M = 1);
          } else {
            var f = DA.scaleX > 0 ? 1 : -1,
              I = DA.scaleY > 0 ? 1 : -1;
            (s = DA.scaleX + i * n * f),
              (M = DA.scaleY + i * n * I),
              void 0 !== A.maxScale &&
                (Math.abs(s) > A.maxScale && (s = A.maxScale * f),
                Math.abs(M) > A.maxScale && (M = A.maxScale * I)),
              Math.abs(s) < uA && (s = uA * f),
              Math.abs(M) < uA && (M = uA * I),
              (c = DA.top + ((-n * a) / DA.scaleX) * i * f),
              (g = DA.left + ((-n * r) / DA.scaleY) * i * I),
              (l = DA.width),
              (u = DA.height);
          }
          vA(
            v(D.update, {
              width: l,
              scaleX: s,
              scaleY: M,
              height: u,
              top: c,
              left: g,
              loading: !1
            })
          );
        }
        n.useEffect(function() {
          return (
            (BA.current = !0),
            function() {
              BA.current = !1;
            }
          );
        }, []),
          n.useEffect(
            function() {
              dA.current = MA();
            },
            [A.container]
          ),
          n.useEffect(
            function() {
              i && BA.current && vA(v(D.setVisible, { visible: !0 }));
            },
            [i]
          ),
          n.useEffect(function() {
            return (
              TA(),
              function() {
                TA(!0);
              }
            );
          }),
          n.useEffect(
            function() {
              return (
                i
                  ? A.container ||
                    ((document.body.style.overflow = "hidden"),
                    document.body.scrollHeight > document.body.clientHeight &&
                      (document.body.style.paddingRight = "15px"))
                  : vA(v(D.clear, {})),
                function() {
                  (document.body.style.overflow = ""),
                    (document.body.style.paddingRight = "");
                }
              );
            },
            [DA.visible]
          ),
          n.useEffect(
            function() {
              i && vA(v(D.setActiveIndex, { index: h }));
            },
            [h, i]
          ),
          n.useEffect(
            function() {
              DA.startLoading &&
                ((fA.current = DA.activeIndex), yA(DA.activeIndex));
            },
            [DA.startLoading, DA.activeIndex]
          );
        var zA = "react-viewer",
          YA = c()(
            "".concat(zA),
            "".concat(zA, "-transition"),
            (E((e = {}), "".concat(zA, "-inline"), A.container),
            E(e, A.className, A.className),
            e)
          ),
          LA = {
            opacity: i && DA.visible ? 1 : 0,
            display: i || DA.visible ? "block" : "none"
          },
          kA = { src: "", alt: "" };
        return (
          i &&
            DA.visible &&
            !DA.loading &&
            null !== DA.activeIndex &&
            !DA.startLoading &&
            (kA = NA()),
          n.createElement(
            "div",
            {
              className: YA,
              style: LA,
              onTransitionEnd: function() {
                i || vA(v(D.setVisible, { visible: !1 }));
              },
              ref: EA
            },
            n.createElement("div", {
              className: "".concat(zA, "-mask"),
              style: { zIndex: N }
            }),
            A.noClose ||
              n.createElement(
                "div",
                {
                  className: "".concat(zA, "-close ").concat(zA, "-btn"),
                  onClick: function() {
                    a();
                  },
                  style: { zIndex: N + 10 }
                },
                n.createElement(s, { type: r.close })
              ),
            n.createElement(l, {
              prefixCls: zA,
              imgSrc: (DA.loadFailed && A.defaultImg.src) || kA.src,
              visible: i,
              width: DA.width,
              height: DA.height,
              top: DA.top,
              left: DA.left,
              rotate: DA.rotate,
              onChangeImgState: function(A, e, t, n) {
                vA(v(D.update, { width: A, height: e, top: t, left: n }));
              },
              onResize: function() {
                if (((dA.current = MA()), i)) {
                  var A = (dA.current.width - DA.width) / 2,
                    e = (dA.current.height - DA.height - wA) / 2;
                  vA(v(D.update, { left: A, top: e }));
                }
              },
              zIndex: N + 5,
              scaleX: DA.scaleX,
              scaleY: DA.scaleY,
              loading: DA.loading,
              drag: Q,
              container: A.container,
              onCanvasMouseDown: function(A) {
                G(A);
              }
            }),
            A.noFooter ||
              n.createElement(
                "div",
                {
                  className: "".concat(zA, "-footer"),
                  style: { zIndex: N + 5 }
                },
                aA ||
                  n.createElement(w, {
                    prefixCls: zA,
                    onAction: function(A) {
                      if ((QA(A.actionType), A.onClick)) {
                        var e = NA();
                        A.onClick(e);
                      }
                    },
                    alt: kA.alt,
                    width: DA.imageWidth,
                    height: DA.imageHeight,
                    attribute: x,
                    zoomable: C,
                    rotatable: z,
                    scalable: L,
                    changeable: U,
                    downloadable: nA,
                    noImgDetails: oA,
                    toolbars: S(M),
                    activeIndex: DA.activeIndex,
                    count: d.length,
                    showTotal: gA
                  }),
                A.noNavbar ||
                  n.createElement(u, {
                    prefixCls: zA,
                    images: A.images,
                    activeIndex: DA.activeIndex,
                    onChangeImg: bA
                  })
              )
          )
        );
      };
      function h(A, e) {
        return (
          (function(A) {
            if (Array.isArray(A)) return A;
          })(A) ||
          (function(A, e) {
            if (
              !(
                Symbol.iterator in Object(A) ||
                "[object Arguments]" === Object.prototype.toString.call(A)
              )
            )
              return;
            var t = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var r, a = A[Symbol.iterator]();
                !(n = (r = a.next()).done) &&
                (t.push(r.value), !e || t.length !== e);
                n = !0
              );
            } catch (A) {
              (i = !0), (o = A);
            } finally {
              try {
                n || null == a.return || a.return();
              } finally {
                if (i) throw o;
              }
            }
            return t;
          })(A, e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      e.default = function(A) {
        var e = n.useRef(
            "undefined" != typeof document
              ? document.createElement("div")
              : null
          ),
          t = h(n.useState(A.container), 2),
          o = t[0],
          r = t[1],
          a = h(n.useState(!1), 2),
          c = a[0],
          g = a[1];
        return (
          n.useEffect(function() {
            document.body.appendChild(e.current);
          }, []),
          n.useEffect(
            function() {
              A.visible && !c && g(!0);
            },
            [A.visible, c]
          ),
          n.useEffect(
            function() {
              A.container ? r(A.container) : r(e.current);
            },
            [A.container]
          ),
          c ? i.createPortal(n.createElement(y, A), o) : null
        );
      };
    }
  ]);
});
