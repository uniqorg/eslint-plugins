"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [6097],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => u, kt: () => d });
      var r = n(2784);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var l = r.createContext({}),
        c = function (e) {
          var t = r.useContext(l),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
        },
        u = function (e) {
          var t = c(e.components);
          return r.createElement(l.Provider, { value: t }, e.children);
        },
        m = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        p = r.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            i = e.originalType,
            l = e.parentName,
            u = s(e, ["components", "mdxType", "originalType", "parentName"]),
            p = c(n),
            d = o,
            f = p["".concat(l, ".").concat(d)] || p[d] || m[d] || i;
          return n
            ? r.createElement(f, a(a({ ref: t }, u), {}, { components: n }))
            : r.createElement(f, a({ ref: t }, u));
        });
      function d(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var i = n.length,
            a = new Array(i);
          a[0] = p;
          var s = {};
          for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
          (s.originalType = e),
            (s.mdxType = "string" == typeof e ? e : o),
            (a[1] = s);
          for (var c = 2; c < i; c++) a[c] = n[c];
          return r.createElement.apply(null, a);
        }
        return r.createElement.apply(null, n);
      }
      p.displayName = "MDXCreateElement";
    },
    2852: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => u,
          contentTitle: () => l,
          default: () => d,
          frontMatter: () => s,
          metadata: () => c,
          toc: () => m,
        });
      var r = n(7896),
        o = n(1461),
        i = (n(2784), n(876)),
        a = ["components"],
        s = {
          id: "no-commonjs-dynamic-require",
          title: "no-commonjs-dynamic-require",
          tags: ["No CommonJS", "No Hard Maintenance"],
          sidebar_class_name: "red",
        },
        l = void 0,
        c = {
          unversionedId:
            "plugins/migrate-to-typescript/rules/no-commonjs-dynamic-require",
          id: "plugins/migrate-to-typescript/rules/no-commonjs-dynamic-require",
          title: "no-commonjs-dynamic-require",
          description: "Rule Details",
          source:
            "@site/docs/plugins/migrate-to-typescript/rules/no-commonjs-dynamic-require.md",
          sourceDirName: "plugins/migrate-to-typescript/rules",
          slug: "/plugins/migrate-to-typescript/rules/no-commonjs-dynamic-require",
          permalink:
            "/eslint-extensions/docs/plugins/migrate-to-typescript/rules/no-commonjs-dynamic-require",
          draft: !1,
          tags: [
            {
              label: "No CommonJS",
              permalink: "/eslint-extensions/docs/tags/no-common-js",
            },
            {
              label: "No Hard Maintenance",
              permalink: "/eslint-extensions/docs/tags/no-hard-maintenance",
            },
          ],
          version: "current",
          frontMatter: {
            id: "no-commonjs-dynamic-require",
            title: "no-commonjs-dynamic-require",
            tags: ["No CommonJS", "No Hard Maintenance"],
            sidebar_class_name: "red",
          },
          sidebar: "migrate2typescriptSidebar",
          previous: {
            title: "Introduction",
            permalink:
              "/eslint-extensions/docs/plugins/migrate-to-typescript/rules/",
          },
          next: {
            title: "no-commonjs-exports",
            permalink:
              "/eslint-extensions/docs/plugins/migrate-to-typescript/rules/no-commonjs-exports",
          },
        },
        u = {},
        m = [
          { value: "Rule Details", id: "rule-details", level: 2 },
          { value: "When to use it", id: "when-to-use-it", level: 3 },
          {
            value: "When <em>not</em> to use it",
            id: "when-not-to-use-it",
            level: 3,
          },
          { value: "Credit \ud83d\ude4f", id: "credit-", level: 4 },
        ],
        p = { toc: m };
      function d(e) {
        var t = e.components,
          n = (0, o.Z)(e, a);
        return (0, i.kt)(
          "wrapper",
          (0, r.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h2", { id: "rule-details" }, "Rule Details"),
          (0, i.kt)(
            "p",
            null,
            "The require method from ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "commonjs"),
            " is used to import modules from different files. Unlike the ES6 import syntax, it can be given expressions that will be resolved at runtime. While this is sometimes necessary and useful, in most cases it isn't. Using expressions (for instance, concatenating a path and variable) as the argument makes it harder for tools to do static code analysis, or to find where in the codebase a module is used."
          ),
          (0, i.kt)(
            "p",
            null,
            "This rule checks every call to require() that uses expressions for the module name argument."
          ),
          (0, i.kt)(
            "p",
            null,
            "Examples of ",
            (0, i.kt)("strong", { parentName: "p" }, "correct"),
            " code for this rule \u2705"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-typescript" },
              '// correct \u2705\nrequire("../name");\nrequire(`../name`);\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "Examples of ",
            (0, i.kt)("strong", { parentName: "p" }, "incorrect"),
            " code for this rule \u26d4\ufe0f"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-typescript" },
              '// incorrect \u26d4\ufe0f\nrequire(name);\nrequire("../" + name);\nrequire(`../${name}`);\nrequire(name());\n'
            )
          ),
          (0, i.kt)("h3", { id: "when-to-use-it" }, "When to use it"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "Use for every project that works with modules and consistently being develop and maintained."
            )
          ),
          (0, i.kt)(
            "h3",
            { id: "when-not-to-use-it" },
            "When ",
            (0, i.kt)("em", { parentName: "h3" }, "not"),
            " to use it"
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "When writing specific script that should not execute often."
            )
          ),
          (0, i.kt)("h4", { id: "credit-" }, "Credit \ud83d\ude4f"),
          (0, i.kt)(
            "sup",
            null,
            (0, i.kt)(
              "p",
              null,
              "Inspired with \ud83d\udc9c ",
              "\xa0",
              (0, i.kt)(
                "a",
                {
                  parentName: "p",
                  href: "https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md",
                },
                "from eslint-plugin-import"
              )
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);