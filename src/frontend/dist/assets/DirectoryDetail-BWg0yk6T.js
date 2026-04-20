import { a0 as useParams, _ as employees, w as jsxRuntimeExports, O as Link, Q as Button, A as Avatar, x as AvatarImage, z as AvatarFallback, D as Badge, K as Separator } from "./index-2fslUrt3.js";
import { C as Card, a as CardContent, b as CardHeader, c as CardTitle } from "./card-jLqOLDAk.js";
import { A as ArrowLeft } from "./arrow-left-DKH3CqTD.js";
import { m as motion } from "./proxy-EROLA0vA.js";
import { a as MessageSquare, C as CalendarPlus, M as MapPin, B as Building2 } from "./message-square-lOOubwut.js";
import { P as Phone } from "./phone-BZJHlren.js";
import { M as Mail } from "./mail-RuSS9iFt.js";
import { C as Calendar } from "./calendar-D2ViM7be.js";
const DEPT_COLORS = {
  Accounts: "bg-chart-2/15 text-chart-2 border-chart-2/25",
  Finance: "bg-chart-1/15 text-chart-1 border-chart-1/25",
  HR: "bg-chart-5/15 text-chart-5 border-chart-5/25",
  IT: "bg-primary/15 text-primary border-primary/25",
  Maintenance: "bg-destructive/15 text-destructive border-destructive/25",
  NPD: "bg-chart-4/15 text-chart-4 border-chart-4/25",
  PPC: "bg-accent/15 text-accent border-accent/25",
  Production: "bg-chart-1/15 text-chart-1 border-chart-1/25",
  Purchase: "bg-chart-2/15 text-chart-2 border-chart-2/25",
  Quality: "bg-chart-5/15 text-chart-5 border-chart-5/25",
  "RM-Purchase": "bg-accent/15 text-accent border-accent/25",
  Stores: "bg-chart-4/15 text-chart-4 border-chart-4/25",
  "Tool-Room": "bg-destructive/15 text-destructive border-destructive/25"
};
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
  const colleagues = employees.filter((e) => e.department === emp.department && e.id !== emp.id).slice(0, 5);
  const startDate = new Date(emp.startDate);
  const tenure = (/* @__PURE__ */ new Date()).getFullYear() - startDate.getFullYear();
  const deptColor = DEPT_COLORS[emp.department] ?? "bg-muted text-muted-foreground border-border";
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
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, delay: 0.05 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card border-border overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 bg-gradient-brand industrial-grid relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/10" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 pt-0 -mt-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-end gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-24 w-24 ring-4 ring-card shadow-elevated", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: emp.avatar, alt: emp.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-primary/15 text-primary text-2xl font-bold", children: emp.name.split(" ").map((n) => n[0]).join("") })
                ] }),
                emp.isOnline && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-1.5 right-1.5 h-4.5 w-4.5 rounded-full bg-accent border-[3px] border-card" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 pb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl text-foreground", children: emp.name }),
                  emp.isOnline && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-[11px] bg-accent/15 text-accent border border-accent/25 gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }),
                    "Online"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-medium", children: emp.role }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: `mt-2 text-xs border font-medium ${deptColor}`,
                    children: emp.department
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${emp.email}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    "data-ocid": "directory_detail.email_button",
                    variant: "outline",
                    size: "sm",
                    className: "gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary text-primary",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4" }),
                      " Send Message"
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    "data-ocid": "directory_detail.schedule_button",
                    size: "sm",
                    className: "gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarPlus, { className: "h-4 w-4" }),
                      " Schedule Meeting"
                    ]
                  }
                )
              ] })
            ] }),
            emp.bio && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-5 max-w-2xl", children: emp.bio })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -14 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.35, delay: 0.12 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card border-border h-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold text-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5 text-primary" }) }),
              "Contact Information"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 pt-4", children: [
              [
                {
                  icon: Mail,
                  label: "Work Email",
                  value: emp.email,
                  href: `mailto:${emp.email}`
                },
                {
                  icon: Phone,
                  label: "Mobile",
                  value: emp.phone,
                  href: `tel:${emp.phone}`
                },
                { icon: MapPin, label: "Location", value: emp.location }
              ].map((info) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl bg-muted flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(info.icon, { className: "h-4 w-4 text-muted-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground uppercase tracking-wide font-medium", children: info.label }),
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
                  label: "Joined",
                  value: `${startDate.toLocaleDateString("en-IN", { month: "long", year: "numeric" })} · ${tenure} ${tenure === 1 ? "year" : "years"}`
                }
              ].map((info) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl bg-muted flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(info.icon, { className: "h-4 w-4 text-muted-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground uppercase tracking-wide font-medium", children: info.label }),
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
          initial: { opacity: 0, x: 14 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.35, delay: 0.17 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card border-border h-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold text-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5 text-primary" }) }),
              emp.department,
              " Team"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-4 space-y-1", children: colleagues.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground py-4 text-center", children: "No other team members found." }) : colleagues.map((col, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/directory/$id",
                params: { id: col.id },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    "data-ocid": `directory_detail.colleague.item.${i + 1}`,
                    className: "flex items-center gap-3 p-2.5 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer group",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-9 w-9", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: col.avatar }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-xs bg-primary/10 text-primary font-semibold", children: col.name.split(" ").map((n) => n[0]).join("") })
                        ] }),
                        col.isOnline && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-accent border-2 border-card" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate", children: col.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: col.role })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: `mailto:${col.email}`,
                          onClick: (e) => e.stopPropagation(),
                          className: "opacity-0 group-hover:opacity-100 transition-smooth",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-primary" })
                        }
                      )
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
