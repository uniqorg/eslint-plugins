"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [6103],
  {
    4736: (e, t, a) => {
      a.d(t, { Z: () => Z });
      var n = a(1461),
        r = a(2784),
        l = a(6277),
        i = a(3982),
        o = a(7963),
        s = a(9817),
        c = a(1077);
      const m = "sidebar_RYHo",
        u = "sidebarItemTitle_sRjx",
        d = "sidebarItemList_uMtB",
        g = "sidebarItem_rygH",
        v = "sidebarItemLink_EKgd",
        p = "sidebarItemLinkActive_hRXJ";
      function f(e) {
        var t = e.sidebar;
        return r.createElement(
          "aside",
          { className: "col col--3" },
          r.createElement(
            "nav",
            {
              className: (0, l.Z)(m, "thin-scrollbar"),
              "aria-label": (0, c.I)({
                id: "theme.blog.sidebar.navAriaLabel",
                message: "Blog recent posts navigation",
                description:
                  "The ARIA label for recent posts in the blog sidebar",
              }),
            },
            r.createElement(
              "div",
              { className: (0, l.Z)(u, "margin-bottom--md") },
              t.title
            ),
            r.createElement(
              "ul",
              { className: (0, l.Z)(d, "clean-list") },
              t.items.map(function (e) {
                return r.createElement(
                  "li",
                  { key: e.permalink, className: g },
                  r.createElement(
                    s.Z,
                    {
                      isNavLink: !0,
                      to: e.permalink,
                      className: v,
                      activeClassName: p,
                    },
                    e.title
                  )
                );
              })
            )
          )
        );
      }
      var h = a(7548);
      function E(e) {
        var t = e.sidebar;
        return r.createElement(
          "ul",
          { className: "menu__list" },
          t.items.map(function (e) {
            return r.createElement(
              "li",
              { key: e.permalink, className: "menu__list-item" },
              r.createElement(
                s.Z,
                {
                  isNavLink: !0,
                  to: e.permalink,
                  className: "menu__link",
                  activeClassName: "menu__link--active",
                },
                e.title
              )
            );
          })
        );
      }
      function b(e) {
        return r.createElement(h.Zo, { component: E, props: e });
      }
      function N(e) {
        var t = e.sidebar,
          a = (0, o.i)();
        return null != t && t.items.length
          ? "mobile" === a
            ? r.createElement(b, { sidebar: t })
            : r.createElement(f, { sidebar: t })
          : null;
      }
      var _ = ["sidebar", "toc", "children"];
      function Z(e) {
        var t = e.sidebar,
          a = e.toc,
          o = e.children,
          s = (0, n.Z)(e, _),
          c = t && t.items.length > 0;
        return r.createElement(
          i.Z,
          s,
          r.createElement(
            "div",
            { className: "container margin-vert--lg" },
            r.createElement(
              "div",
              { className: "row" },
              r.createElement(N, { sidebar: t }),
              r.createElement(
                "main",
                {
                  className: (0, l.Z)("col", {
                    "col--7": c,
                    "col--9 col--offset-1": !c,
                  }),
                  itemScope: !0,
                  itemType: "http://schema.org/Blog",
                },
                o
              ),
              a && r.createElement("div", { className: "col col--2" }, a)
            )
          )
        );
      }
    },
    2727: (e, t, a) => {
      a.d(t, { Z: () => Z });
      var n = a(2784),
        r = a(6277),
        l = a(1077),
        i = a(9817),
        o = a(77),
        s = a(7239),
        c = a(958),
        m = a(5742),
        u = a(5893),
        d = a(6643);
      function g(e) {
        return e.href
          ? n.createElement(i.Z, e)
          : n.createElement(n.Fragment, null, e.children);
      }
      function v(e) {
        var t = e.author,
          a = t.name,
          r = t.title,
          l = t.url,
          i = t.imageURL,
          o = t.email,
          s = l || (o && "mailto:" + o) || void 0;
        return n.createElement(
          "div",
          { className: "avatar margin-bottom--sm" },
          i &&
            n.createElement(
              g,
              { href: s, className: "avatar__photo-link" },
              n.createElement("img", {
                className: "avatar__photo",
                src: i,
                alt: a,
              })
            ),
          a &&
            n.createElement(
              "div",
              {
                className: "avatar__intro",
                itemProp: "author",
                itemScope: !0,
                itemType: "https://schema.org/Person",
              },
              n.createElement(
                "div",
                { className: "avatar__name" },
                n.createElement(
                  g,
                  { href: s, itemProp: "url" },
                  n.createElement("span", { itemProp: "name" }, a)
                )
              ),
              r &&
                n.createElement(
                  "small",
                  { className: "avatar__subtitle", itemProp: "description" },
                  r
                )
            )
        );
      }
      const p = "authorCol_ljC9",
        f = "imageOnlyAuthorRow_t0d_",
        h = "imageOnlyAuthorCol_Dzki";
      function E(e) {
        var t = e.authors,
          a = e.assets;
        if (0 === t.length) return null;
        var l = t.every(function (e) {
          return !e.name;
        });
        return n.createElement(
          "div",
          {
            className: (0, r.Z)(
              "margin-top--md margin-bottom--sm",
              l ? f : "row"
            ),
          },
          t.map(function (e, t) {
            var i;
            return n.createElement(
              "div",
              { className: (0, r.Z)(!l && "col col--6", l ? h : p), key: t },
              n.createElement(v, {
                author: Object.assign({}, e, {
                  imageURL:
                    null != (i = a.authorsImageUrls[t]) ? i : e.imageURL,
                }),
              })
            );
          })
        );
      }
      const b = "blogPostTitle_tV5U",
        N = "blogPostData_KwLJ",
        _ = "blogPostDetailsFull_loWg";
      function Z(e) {
        var t,
          a,
          g =
            ((a = (0, s.c)().selectMessage),
            function (e) {
              var t = Math.ceil(e);
              return a(
                t,
                (0, l.I)(
                  {
                    id: "theme.blog.post.readingTime.plurals",
                    description:
                      'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
                    message: "One min read|{readingTime} min read",
                  },
                  { readingTime: t }
                )
              );
            }),
          v = (0, o.C)().withBaseUrl,
          p = e.children,
          f = e.frontMatter,
          h = e.assets,
          Z = e.metadata,
          k = e.truncated,
          L = e.isBlogPostPage,
          x = void 0 !== L && L,
          C = Z.date,
          P = Z.formattedDate,
          H = Z.permalink,
          y = Z.tags,
          I = Z.readingTime,
          w = Z.title,
          T = Z.editUrl,
          A = Z.authors,
          M = null != (t = h.image) ? t : f.image,
          R = !x && k,
          O = y.length > 0,
          B = x ? "h1" : "h2";
        return n.createElement(
          "article",
          {
            className: x ? void 0 : "margin-bottom--xl",
            itemProp: "blogPost",
            itemScope: !0,
            itemType: "http://schema.org/BlogPosting",
          },
          n.createElement(
            "header",
            null,
            n.createElement(
              B,
              { className: b, itemProp: "headline" },
              x ? w : n.createElement(i.Z, { itemProp: "url", to: H }, w)
            ),
            n.createElement(
              "div",
              { className: (0, r.Z)(N, "margin-vert--md") },
              n.createElement(
                "time",
                { dateTime: C, itemProp: "datePublished" },
                P
              ),
              void 0 !== I && n.createElement(n.Fragment, null, " \xb7 ", g(I))
            ),
            n.createElement(E, { authors: A, assets: h })
          ),
          M &&
            n.createElement("meta", {
              itemProp: "image",
              content: v(M, { absolute: !0 }),
            }),
          n.createElement(
            "div",
            {
              id: x ? c.blogPostContainerID : void 0,
              className: "markdown",
              itemProp: "articleBody",
            },
            n.createElement(m.Z, null, p)
          ),
          (O || k) &&
            n.createElement(
              "footer",
              { className: (0, r.Z)("row docusaurus-mt-lg", x && _) },
              O &&
                n.createElement(
                  "div",
                  { className: (0, r.Z)("col", { "col--9": R }) },
                  n.createElement(d.Z, { tags: y })
                ),
              x &&
                T &&
                n.createElement(
                  "div",
                  { className: "col margin-top--sm" },
                  n.createElement(u.Z, { editUrl: T })
                ),
              R &&
                n.createElement(
                  "div",
                  { className: (0, r.Z)("col text--right", { "col--3": O }) },
                  n.createElement(
                    i.Z,
                    {
                      to: Z.permalink,
                      "aria-label": (0, l.I)(
                        {
                          message: "Read more about {title}",
                          id: "theme.blog.post.readMoreLabel",
                          description:
                            "The ARIA label for the link to full blog posts from excerpts",
                        },
                        { title: w }
                      ),
                    },
                    n.createElement(
                      "b",
                      null,
                      n.createElement(
                        l.Z,
                        {
                          id: "theme.blog.post.readMore",
                          description:
                            "The label used in blog post item excerpts to link to full blog posts",
                        },
                        "Read More"
                      )
                    )
                  )
                )
            )
        );
      }
    },
    3048: (e, t, a) => {
      a.r(t), a.d(t, { default: () => f });
      var n = a(2784),
        r = a(6277),
        l = a(328),
        i = a(211),
        o = a(4736),
        s = a(2727),
        c = a(7896),
        m = a(1077),
        u = a(7066);
      function d(e) {
        var t = e.nextItem,
          a = e.prevItem;
        return n.createElement(
          "nav",
          {
            className: "pagination-nav docusaurus-mt-lg",
            "aria-label": (0, m.I)({
              id: "theme.blog.post.paginator.navAriaLabel",
              message: "Blog post page navigation",
              description: "The ARIA label for the blog posts pagination",
            }),
          },
          a &&
            n.createElement(
              u.Z,
              (0, c.Z)({}, a, {
                subLabel: n.createElement(
                  m.Z,
                  {
                    id: "theme.blog.post.paginator.newerPost",
                    description:
                      "The blog post button label to navigate to the newer/previous post",
                  },
                  "Newer Post"
                ),
              })
            ),
          t &&
            n.createElement(
              u.Z,
              (0, c.Z)({}, t, {
                subLabel: n.createElement(
                  m.Z,
                  {
                    id: "theme.blog.post.paginator.olderPost",
                    description:
                      "The blog post button label to navigate to the older/next post",
                  },
                  "Older Post"
                ),
                isNext: !0,
              })
            )
        );
      }
      var g = a(9589);
      function v(e) {
        var t,
          a = e.content,
          r = a.assets,
          i = a.metadata,
          o = i.title,
          s = i.description,
          c = i.date,
          m = i.tags,
          u = i.authors,
          d = i.frontMatter,
          g = d.keywords,
          v = null != (t = r.image) ? t : d.image;
        return n.createElement(
          l.d,
          { title: o, description: s, keywords: g, image: v },
          n.createElement("meta", { property: "og:type", content: "article" }),
          n.createElement("meta", {
            property: "article:published_time",
            content: c,
          }),
          u.some(function (e) {
            return e.url;
          }) &&
            n.createElement("meta", {
              property: "article:author",
              content: u
                .map(function (e) {
                  return e.url;
                })
                .filter(Boolean)
                .join(","),
            }),
          m.length > 0 &&
            n.createElement("meta", {
              property: "article:tag",
              content: m
                .map(function (e) {
                  return e.label;
                })
                .join(","),
            })
        );
      }
      function p(e) {
        var t = e.content,
          a = e.sidebar,
          r = t.assets,
          l = t.metadata,
          i = l.nextItem,
          c = l.prevItem,
          m = l.frontMatter,
          u = m.hide_table_of_contents,
          v = m.toc_min_heading_level,
          p = m.toc_max_heading_level;
        return n.createElement(
          o.Z,
          {
            sidebar: a,
            toc:
              !u && t.toc && t.toc.length > 0
                ? n.createElement(g.Z, {
                    toc: t.toc,
                    minHeadingLevel: v,
                    maxHeadingLevel: p,
                  })
                : void 0,
          },
          n.createElement(
            s.Z,
            { frontMatter: m, assets: r, metadata: l, isBlogPostPage: !0 },
            n.createElement(t, null)
          ),
          (i || c) && n.createElement(d, { nextItem: i, prevItem: c })
        );
      }
      function f(e) {
        return n.createElement(
          l.FG,
          { className: (0, r.Z)(i.k.wrapper.blogPages, i.k.page.blogPostPage) },
          n.createElement(v, e),
          n.createElement(p, e)
        );
      }
    },
    5893: (e, t, a) => {
      a.d(t, { Z: () => d });
      var n = a(2784),
        r = a(1077),
        l = a(211),
        i = a(7896),
        o = a(1461),
        s = a(6277);
      const c = "iconEdit_taBP";
      var m = ["className"];
      function u(e) {
        var t = e.className,
          a = (0, o.Z)(e, m);
        return n.createElement(
          "svg",
          (0, i.Z)(
            {
              fill: "currentColor",
              height: "20",
              width: "20",
              viewBox: "0 0 40 40",
              className: (0, s.Z)(c, t),
              "aria-hidden": "true",
            },
            a
          ),
          n.createElement(
            "g",
            null,
            n.createElement("path", {
              d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z",
            })
          )
        );
      }
      function d(e) {
        var t = e.editUrl;
        return n.createElement(
          "a",
          {
            href: t,
            target: "_blank",
            rel: "noreferrer noopener",
            className: l.k.common.editThisPage,
          },
          n.createElement(u, null),
          n.createElement(
            r.Z,
            {
              id: "theme.common.editThisPage",
              description: "The link label to edit the current page",
            },
            "Edit this page"
          )
        );
      }
    },
    7066: (e, t, a) => {
      a.d(t, { Z: () => i });
      var n = a(2784),
        r = a(6277),
        l = a(9817);
      function i(e) {
        var t = e.permalink,
          a = e.title,
          i = e.subLabel,
          o = e.isNext;
        return n.createElement(
          l.Z,
          {
            className: (0, r.Z)(
              "pagination-nav__link",
              o ? "pagination-nav__link--next" : "pagination-nav__link--prev"
            ),
            to: t,
          },
          i &&
            n.createElement(
              "div",
              { className: "pagination-nav__sublabel" },
              i
            ),
          n.createElement("div", { className: "pagination-nav__label" }, a)
        );
      }
    },
    9589: (e, t, a) => {
      a.d(t, { Z: () => m });
      var n = a(7896),
        r = a(1461),
        l = a(2784),
        i = a(6277),
        o = a(6986);
      const s = "tableOfContents_TN1Q";
      var c = ["className"];
      function m(e) {
        var t = e.className,
          a = (0, r.Z)(e, c);
        return l.createElement(
          "div",
          { className: (0, i.Z)(s, "thin-scrollbar", t) },
          l.createElement(
            o.Z,
            (0, n.Z)({}, a, {
              linkClassName: "table-of-contents__link toc-highlight",
              linkActiveClassName: "table-of-contents__link--active",
            })
          )
        );
      }
    },
    6986: (e, t, a) => {
      a.d(t, { Z: () => h });
      var n = a(7896),
        r = a(1461),
        l = a(2784),
        i = ["parentIndex"];
      function o(e) {
        var t = e.map(function (e) {
            return Object.assign({}, e, { parentIndex: -1, children: [] });
          }),
          a = Array(7).fill(-1);
        t.forEach(function (e, t) {
          var n = a.slice(2, e.level);
          (e.parentIndex = Math.max.apply(Math, n)), (a[e.level] = t);
        });
        var n = [];
        return (
          t.forEach(function (e) {
            var a = e.parentIndex,
              l = (0, r.Z)(e, i);
            a >= 0 ? t[a].children.push(l) : n.push(l);
          }),
          n
        );
      }
      function s(e) {
        var t = e.toc,
          a = e.minHeadingLevel,
          n = e.maxHeadingLevel;
        return t.flatMap(function (e) {
          var t = s({
            toc: e.children,
            minHeadingLevel: a,
            maxHeadingLevel: n,
          });
          return (function (e) {
            return e.level >= a && e.level <= n;
          })(e)
            ? [Object.assign({}, e, { children: t })]
            : t;
        });
      }
      var c = a(7683);
      function m(e) {
        var t = e.getBoundingClientRect();
        return t.top === t.bottom ? m(e.parentNode) : t;
      }
      function u(e, t) {
        var a,
          n,
          r = t.anchorTopOffset,
          l = e.find(function (e) {
            return m(e).top >= r;
          });
        return l
          ? (function (e) {
              return e.top > 0 && e.bottom < window.innerHeight / 2;
            })(m(l))
            ? l
            : null != (n = e[e.indexOf(l) - 1])
            ? n
            : null
          : null != (a = e[e.length - 1])
          ? a
          : null;
      }
      function d() {
        var e = (0, l.useRef)(0),
          t = (0, c.L)().navbar.hideOnScroll;
        return (
          (0, l.useEffect)(
            function () {
              e.current = t
                ? 0
                : document.querySelector(".navbar").clientHeight;
            },
            [t]
          ),
          e
        );
      }
      function g(e) {
        var t = (0, l.useRef)(void 0),
          a = d();
        (0, l.useEffect)(
          function () {
            if (!e) return function () {};
            var n = e.linkClassName,
              r = e.linkActiveClassName,
              l = e.minHeadingLevel,
              i = e.maxHeadingLevel;
            function o() {
              var e = (function (e) {
                  return Array.from(document.getElementsByClassName(e));
                })(n),
                o = (function (e) {
                  for (
                    var t = e.minHeadingLevel,
                      a = e.maxHeadingLevel,
                      n = [],
                      r = t;
                    r <= a;
                    r += 1
                  )
                    n.push("h" + r + ".anchor");
                  return Array.from(document.querySelectorAll(n.join()));
                })({ minHeadingLevel: l, maxHeadingLevel: i }),
                s = u(o, { anchorTopOffset: a.current }),
                c = e.find(function (e) {
                  return (
                    s &&
                    s.id ===
                      (function (e) {
                        return decodeURIComponent(
                          e.href.substring(e.href.indexOf("#") + 1)
                        );
                      })(e)
                  );
                });
              e.forEach(function (e) {
                !(function (e, a) {
                  a
                    ? (t.current &&
                        t.current !== e &&
                        t.current.classList.remove(r),
                      e.classList.add(r),
                      (t.current = e))
                    : e.classList.remove(r);
                })(e, e === c);
              });
            }
            return (
              document.addEventListener("scroll", o),
              document.addEventListener("resize", o),
              o(),
              function () {
                document.removeEventListener("scroll", o),
                  document.removeEventListener("resize", o);
              }
            );
          },
          [e, a]
        );
      }
      function v(e) {
        var t = e.toc,
          a = e.className,
          n = e.linkClassName,
          r = e.isChild;
        return t.length
          ? l.createElement(
              "ul",
              { className: r ? void 0 : a },
              t.map(function (e) {
                return l.createElement(
                  "li",
                  { key: e.id },
                  l.createElement("a", {
                    href: "#" + e.id,
                    className: null != n ? n : void 0,
                    dangerouslySetInnerHTML: { __html: e.value },
                  }),
                  l.createElement(v, {
                    isChild: !0,
                    toc: e.children,
                    className: a,
                    linkClassName: n,
                  })
                );
              })
            )
          : null;
      }
      const p = l.memo(v);
      var f = [
        "toc",
        "className",
        "linkClassName",
        "linkActiveClassName",
        "minHeadingLevel",
        "maxHeadingLevel",
      ];
      function h(e) {
        var t = e.toc,
          a = e.className,
          i =
            void 0 === a
              ? "table-of-contents table-of-contents__left-border"
              : a,
          m = e.linkClassName,
          u = void 0 === m ? "table-of-contents__link" : m,
          d = e.linkActiveClassName,
          v = void 0 === d ? void 0 : d,
          h = e.minHeadingLevel,
          E = e.maxHeadingLevel,
          b = (0, r.Z)(e, f),
          N = (0, c.L)(),
          _ = null != h ? h : N.tableOfContents.minHeadingLevel,
          Z = null != E ? E : N.tableOfContents.maxHeadingLevel,
          k = (function (e) {
            var t = e.toc,
              a = e.minHeadingLevel,
              n = e.maxHeadingLevel;
            return (0, l.useMemo)(
              function () {
                return s({ toc: o(t), minHeadingLevel: a, maxHeadingLevel: n });
              },
              [t, a, n]
            );
          })({ toc: t, minHeadingLevel: _, maxHeadingLevel: Z });
        return (
          g(
            (0, l.useMemo)(
              function () {
                if (u && v)
                  return {
                    linkClassName: u,
                    linkActiveClassName: v,
                    minHeadingLevel: _,
                    maxHeadingLevel: Z,
                  };
              },
              [u, v, _, Z]
            )
          ),
          l.createElement(
            p,
            (0, n.Z)({ toc: k, className: i, linkClassName: u }, b)
          )
        );
      }
    },
    2321: (e, t, a) => {
      a.d(t, { Z: () => c });
      var n = a(2784),
        r = a(6277),
        l = a(9817);
      const i = "tag_qE9H",
        o = "tagRegular_aHXt",
        s = "tagWithCount_UC8q";
      function c(e) {
        var t = e.permalink,
          a = e.label,
          c = e.count;
        return n.createElement(
          l.Z,
          { href: t, className: (0, r.Z)(i, c ? s : o) },
          a,
          c && n.createElement("span", null, c)
        );
      }
    },
    6643: (e, t, a) => {
      a.d(t, { Z: () => c });
      var n = a(2784),
        r = a(6277),
        l = a(1077),
        i = a(2321);
      const o = "tags_q74f",
        s = "tag_lSC7";
      function c(e) {
        var t = e.tags;
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            "b",
            null,
            n.createElement(
              l.Z,
              {
                id: "theme.tags.tagsListLabel",
                description: "The label alongside a tag list",
              },
              "Tags:"
            )
          ),
          n.createElement(
            "ul",
            { className: (0, r.Z)(o, "padding--none", "margin-left--sm") },
            t.map(function (e) {
              var t = e.label,
                a = e.permalink;
              return n.createElement(
                "li",
                { key: a, className: s },
                n.createElement(i.Z, { label: t, permalink: a })
              );
            })
          )
        );
      }
    },
    7239: (e, t, a) => {
      a.d(t, { c: () => c });
      var n = a(2784),
        r = a(7614),
        l = ["zero", "one", "two", "few", "many", "other"];
      function i(e) {
        return l.filter(function (t) {
          return e.includes(t);
        });
      }
      var o = {
        locale: "en",
        pluralForms: i(["one", "other"]),
        select: function (e) {
          return 1 === e ? "one" : "other";
        },
      };
      function s() {
        var e = (0, r.Z)().i18n.currentLocale;
        return (0, n.useMemo)(
          function () {
            try {
              return (
                (t = e),
                (a = new Intl.PluralRules(t)),
                {
                  locale: t,
                  pluralForms: i(a.resolvedOptions().pluralCategories),
                  select: function (e) {
                    return a.select(e);
                  },
                }
              );
            } catch (n) {
              return (
                console.error(
                  'Failed to use Intl.PluralRules for locale "' +
                    e +
                    '".\nDocusaurus will fallback to the default (English) implementation.\nError: ' +
                    n.message +
                    "\n"
                ),
                o
              );
            }
            var t, a;
          },
          [e]
        );
      }
      function c() {
        var e = s();
        return {
          selectMessage: function (t, a) {
            return (function (e, t, a) {
              var n = e.split("|");
              if (1 === n.length) return n[0];
              n.length > a.pluralForms.length &&
                console.error(
                  "For locale=" +
                    a.locale +
                    ", a maximum of " +
                    a.pluralForms.length +
                    " plural forms are expected (" +
                    a.pluralForms.join(",") +
                    "), but the message contains " +
                    n.length +
                    ": " +
                    e
                );
              var r = a.select(t),
                l = a.pluralForms.indexOf(r);
              return n[Math.min(l, n.length - 1)];
            })(a, t, e);
          },
        };
      }
    },
  },
]);