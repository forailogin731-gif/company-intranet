import { v as reactExports, _ as employees, w as jsxRuntimeExports, s as Users, G as departments, S as Search, $ as Input, O as Link, A as Avatar, x as AvatarImage, z as AvatarFallback, D as Badge } from "./index-2fslUrt3.js";
import { C as Card, a as CardContent } from "./card-jLqOLDAk.js";
import { m as motion } from "./proxy-EROLA0vA.js";
import { M as Mail } from "./mail-RuSS9iFt.js";
import { P as Phone } from "./phone-BZJHlren.js";
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
function Directory() {
  const [search, setSearch] = reactExports.useState("");
  const [deptFilter, setDeptFilter] = reactExports.useState("all");
  const filtered = employees.filter((emp) => {
    const matchesSearch = emp.name.toLowerCase().includes(search.toLowerCase()) || emp.role.toLowerCase().includes(search.toLowerCase()) || emp.email.toLowerCase().includes(search.toLowerCase());
    const matchesDept = deptFilter === "all" || emp.department === deptFilter;
    return matchesSearch && matchesDept;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-[1400px] mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35 },
        className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl text-foreground", children: "Employee Directory" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
              employees.length,
              " employees · ",
              departments.length,
              " departments · Hosur Plant"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-72", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "directory.search_input",
                placeholder: "Search name, role, email...",
                className: "pl-9 bg-card border-border",
                value: search,
                onChange: (e) => setSearch(e.target.value)
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.07 },
        className: "flex flex-wrap gap-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "directory.dept.tab.all",
              onClick: () => setDeptFilter("all"),
              className: `text-xs px-3.5 py-1.5 rounded-full border font-medium transition-smooth ${deptFilter === "all" ? "bg-primary text-primary-foreground border-primary shadow-sm" : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary bg-card"}`,
              children: [
                "All ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "opacity-70", children: [
                  "(",
                  employees.length,
                  ")"
                ] })
              ]
            }
          ),
          departments.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": `directory.dept.tab.${d.slug}`,
              onClick: () => setDeptFilter(d.name),
              className: `text-xs px-3.5 py-1.5 rounded-full border font-medium transition-smooth ${deptFilter === d.name ? "bg-primary text-primary-foreground border-primary shadow-sm" : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary bg-card"}`,
              children: [
                d.name,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "opacity-60", children: [
                  "(",
                  d.headCount,
                  ")"
                ] })
              ]
            },
            d.id
          ))
        ]
      }
    ),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "directory.empty_state",
        className: "text-center py-24 text-muted-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-8 w-8 opacity-30" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "No employees found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Try adjusting your search or department filter" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: filtered.map((emp, i) => {
      const deptColor = DEPT_COLORS[emp.department] ?? "bg-muted text-muted-foreground border-border";
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: i * 0.035 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/directory/$id", params: { id: emp.id }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              "data-ocid": `directory.employee.item.${i + 1}`,
              className: "group hover:shadow-elevated hover:-translate-y-0.5 transition-smooth cursor-pointer border-border bg-card",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-14 w-14 ring-2 ring-border group-hover:ring-primary/40 transition-smooth", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: emp.avatar, alt: emp.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-primary/10 text-primary font-semibold text-base", children: emp.name.split(" ").map((n) => n[0]).join("") })
                    ] }),
                    emp.isOnline && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full bg-accent border-2 border-card" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground group-hover:text-primary transition-colors truncate text-sm", children: emp.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate mt-0.5", children: emp.role })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: `text-[11px] px-2.5 py-0.5 border font-medium mb-3 ${deptColor}`,
                    children: emp.department
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 border-t border-border pt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5 flex-shrink-0 text-primary/60" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: emp.email })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5 flex-shrink-0 text-primary/60" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: emp.phone })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-2.5 border-t border-border flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `text-[11px] font-medium flex items-center gap-1.5 ${emp.isOnline ? "text-accent" : "text-muted-foreground"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `h-1.5 w-1.5 rounded-full ${emp.isOnline ? "bg-accent" : "bg-muted-foreground/40"}`
                          }
                        ),
                        emp.isOnline ? "Online now" : "Offline"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-primary opacity-0 group-hover:opacity-100 transition-smooth font-medium", children: "View profile →" })
                ] })
              ] })
            }
          ) })
        },
        emp.id
      );
    }) })
  ] });
}
export {
  Directory as default
};
