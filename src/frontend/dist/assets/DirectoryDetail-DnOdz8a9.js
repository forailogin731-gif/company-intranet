import { a4 as useParams, a1 as employees, l as jsxRuntimeExports, p as Link, n as Button, A as Avatar, r as AvatarImage, s as AvatarFallback, q as Badge } from "./index-6T0_xeqr.js";
import { m as motion, C as Card, a as CardContent, b as CardHeader, c as CardTitle } from "./proxy-C-7JP5f1.js";
import { A as ArrowLeft, S as Separator, C as Calendar } from "./separator-CbJYPsiJ.js";
import { M as Mail } from "./mail-BjL7nJ1j.js";
import { P as Phone, B as Building2 } from "./phone-DS1Gr3os.js";
import { M as MapPin } from "./map-pin-QcEAooO4.js";
function DirectoryDetail() {
  const { id } = useParams({ from: "/directory/$id" });
  const emp = employees.find((e) => e.id === id);
  if (!emp) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-center py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Employee not found." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/directory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "mt-4 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back to Directory"
      ] }) })
    ] });
  }
  const colleagues = employees.filter((e) => e.department === emp.department && e.id !== emp.id).slice(0, 4);
  const startYear = new Date(emp.startDate).getFullYear();
  const tenure = (/* @__PURE__ */ new Date()).getFullYear() - startYear;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-4xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/directory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            "data-ocid": "directory_detail.back_button",
            variant: "ghost",
            size: "sm",
            className: "gap-2 text-muted-foreground hover:text-foreground -ml-2 mb-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
              " Employee Directory"
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.05 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-subtle border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-24 w-24", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: emp.avatar, alt: emp.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-primary/10 text-primary text-2xl font-semibold", children: emp.name.split(" ").map((n) => n[0]).join("") })
            ] }),
            emp.isOnline && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-1 right-1 h-4 w-4 rounded-full bg-accent border-2 border-card" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl text-foreground", children: emp.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: emp.department }),
              emp.isOnline && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs bg-accent/10 text-accent border-accent/20", children: "Online" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-medium", children: emp.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2 leading-relaxed max-w-lg", children: emp.bio })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${emp.email}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                "data-ocid": "directory_detail.email_button",
                variant: "outline",
                size: "sm",
                className: "gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
                  " Email"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${emp.phone}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                "data-ocid": "directory_detail.call_button",
                size: "sm",
                className: "gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                  " Call"
                ]
              }
            ) })
          ] })
        ] }) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -12 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.35, delay: 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-subtle border-border h-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-foreground", children: "Contact Information" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 pt-0", children: [
              [
                {
                  icon: Mail,
                  label: "Email",
                  value: emp.email,
                  href: `mailto:${emp.email}`
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: emp.phone,
                  href: `tel:${emp.phone}`
                },
                { icon: MapPin, label: "Location", value: emp.location }
              ].map((info) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(info.icon, { className: "h-4 w-4 text-muted-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: info.label }),
                  info.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: info.href,
                      className: "text-sm text-primary hover:underline truncate block",
                      children: info.value
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: info.value })
                ] })
              ] }, info.label)),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              [
                { icon: Building2, label: "Department", value: emp.department },
                {
                  icon: Calendar,
                  label: "Start Date",
                  value: `${new Date(emp.startDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })} · ${tenure} ${tenure === 1 ? "year" : "years"}`
                }
              ].map((info) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(info.icon, { className: "h-4 w-4 text-muted-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: info.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: info.value })
                ] })
              ] }, info.label))
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 12 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.35, delay: 0.15 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-subtle border-border h-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold text-foreground", children: [
              "Team — ",
              emp.department
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3 pt-0", children: colleagues.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No other team members found." }) : colleagues.map((col, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/directory/$id",
                params: { id: col.id },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    "data-ocid": `directory_detail.colleague.item.${i + 1}`,
                    className: "flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-9 w-9", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: col.avatar }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-xs bg-primary/10 text-primary", children: col.name.split(" ").map((n) => n[0]).join("") })
                        ] }),
                        col.isOnline && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-accent border border-card" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate", children: col.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: col.role })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-smooth" })
                    ]
                  }
                )
              },
              col.id
            )) })
          ] })
        }
      )
    ] })
  ] });
}
export {
  DirectoryDetail as default
};
