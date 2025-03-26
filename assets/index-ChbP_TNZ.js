import { j as r } from "./index-DzVUwRe5.js";
import { M as s } from "./index-CWe_Gw8o.js";
import "./cz-Bg-pj02P.js";
const c = "collection-module__wrapper__l-",
  d = "collection-module__body__N-",
  _ = "collection-module__gradienTitle__rA",
  u = "collection-module__btn__Su",
  m = "collection-module__btnWhite__J1",
  i = { wrapper: c, body: d, gradienTitle: _, btn: u, btnWhite: m };
function a(e) {
  var n,
    o,
    t = "";
  if (typeof e == "string" || typeof e == "number") t += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var l = e.length;
      for (n = 0; n < l; n++)
        e[n] && (o = a(e[n])) && (t && (t += " "), (t += o));
    } else for (o in e) e[o] && (t && (t += " "), (t += o));
  return t;
}
function p() {
  for (var e, n, o = 0, t = "", l = arguments.length; o < l; o++)
    (e = arguments[o]) && (n = a(e)) && (t && (t += " "), (t += n));
  return t;
}
const y = () =>
  r.jsxs("div", {
    className: i.wrapper,
    children: [
      r.jsxs("div", {
        className: i.body,
        children: [
          r.jsx("h1", { className: i.gradienTitle, children: "Collections" }),
        ],
      }),
      r.jsx(s, {}),
      r.jsx(s, { isReverse: !0 }),
    ],
  });
export { y as default };
