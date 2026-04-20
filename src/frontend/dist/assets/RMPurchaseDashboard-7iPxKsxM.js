import { w as jsxRuntimeExports, O as Link, P as PackageSearch, Q as Button, r as TriangleAlert, J as cn, T as TrendingUp, D as Badge, K as Separator } from "./index-2fslUrt3.js";
import { C as Card, a as CardContent, b as CardHeader, c as CardTitle } from "./card-jLqOLDAk.js";
import { A as ArrowLeft } from "./arrow-left-DKH3CqTD.js";
import { T as Truck } from "./truck-C7W5K6Ny.js";
import { C as CircleX } from "./circle-x-DjXURZ_d.js";
import { T as TrendingDown } from "./trending-down-BPGqoM6t.js";
import { C as ClipboardList } from "./clipboard-list-BSb4x27U.js";
import { C as CircleCheck } from "./circle-check-DU2tcmt8.js";
const rmIndents = [
  {
    id: "IND-2026-0214",
    material: "CRCA Sheet Coil 1.5mm IS513",
    spec: "IS 513 CR2/CR3, 1.5 × 1250mm",
    requiredBy: "22 Apr",
    reqQty: "40 Coils",
    approvedQty: "40 Coils",
    status: "Approved"
  },
  {
    id: "IND-2026-0213",
    material: "HSLA High Strength Steel 2.0mm",
    spec: "IS 11513 Grade E350, 2.0 × 1200mm",
    requiredBy: "25 Apr",
    reqQty: "15 Coils",
    approvedQty: "10 Coils",
    status: "Partially Approved"
  },
  {
    id: "IND-2026-0212",
    material: "HRCA Coil 3.0mm IS1079",
    spec: "IS 1079 Grade 1, 3.0 × 1500mm",
    requiredBy: "28 Apr",
    reqQty: "20 Coils",
    approvedQty: "—",
    status: "Pending"
  },
  {
    id: "IND-2026-0211",
    material: "Galvanized Sheet 0.8mm GP",
    spec: "IS 277 Grade 0, 0.8 × 1000mm",
    requiredBy: "30 Apr",
    reqQty: "8 Coils",
    approvedQty: "8 Coils",
    status: "Approved"
  },
  {
    id: "IND-2026-0210",
    material: "Stainless Steel 304 1.2mm",
    spec: "AISI 304, 2B Finish, 1.2 × 1000mm",
    requiredBy: "05 May",
    reqQty: "5 Coils",
    approvedQty: "—",
    status: "Rejected"
  },
  {
    id: "IND-2026-0209",
    material: "Hardened Tool Steel D2",
    spec: "AISI D2 Flat Bar 20 × 100mm",
    requiredBy: "15 Apr",
    reqQty: "80 Kg",
    approvedQty: "80 Kg",
    status: "Approved"
  }
];
const receipts = [
  {
    date: "20 Apr",
    material: "CRCA 1.5mm Coil — IS513",
    vendor: "JSW Steel Ltd",
    qty: "12 Coils (14,400 Kg)",
    grn: "GRN-2026-0178",
    qualityStatus: "Accepted"
  },
  {
    date: "19 Apr",
    material: "HRCA 2.5mm Coil — IS1079",
    vendor: "TATA Steel Ltd",
    qty: "8 Coils (24,000 Kg)",
    grn: "GRN-2026-0177",
    qualityStatus: "Accepted"
  },
  {
    date: "18 Apr",
    material: "HSLA Steel 2.0mm E350",
    vendor: "Essar Steel India",
    qty: "5 Coils (12,000 Kg)",
    grn: "GRN-2026-0176",
    qualityStatus: "Rejected"
  },
  {
    date: "17 Apr",
    material: "Galvanized Sheet 0.8mm GP",
    vendor: "Sail Steel TISCO",
    qty: "4 Coils (3,200 Kg)",
    grn: "GRN-2026-0175",
    qualityStatus: "Pending"
  },
  {
    date: "16 Apr",
    material: "Tool Steel D2 Flat Bar",
    vendor: "Viraj Profiles Ltd",
    qty: "120 Kg",
    grn: "GRN-2026-0174",
    qualityStatus: "Accepted"
  },
  {
    date: "15 Apr",
    material: "CRCA 1.0mm Coil — IS513",
    vendor: "JSW Steel Ltd",
    qty: "10 Coils (9,500 Kg)",
    grn: "GRN-2026-0173",
    qualityStatus: "Accepted"
  }
];
const criticalAlerts = [
  {
    id: "ca-01",
    material: "CRCA Sheet Coil 1.5mm",
    sku: "RM-CRCA-1.5-IS513",
    currentStock: "18 Coils",
    safetyStock: "25 Coils",
    coverage: "4 days",
    severity: "critical",
    action: "PO Raised — Pending Dispatch"
  },
  {
    id: "ca-02",
    material: "HSLA Steel 2.0mm E350",
    sku: "RM-HSLA-2.0-E350",
    currentStock: "5 Coils",
    safetyStock: "8 Coils",
    coverage: "2 days",
    severity: "critical",
    action: "Indent Raised — Partial Approval"
  },
  {
    id: "ca-03",
    material: "HLP 46 Hydraulic Oil",
    sku: "CONS-OIL-HLP46-200L",
    currentStock: "3 Drums",
    safetyStock: "5 Drums",
    coverage: "6 days",
    severity: "warning",
    action: "PO in Progress — Castrol"
  }
];
const indentStatusConfig = {
  Approved: { className: "text-chart-5 border-chart-5/40 bg-chart-5/5" },
  Pending: { className: "text-accent border-accent/40 bg-accent/5" },
  "Partially Approved": {
    className: "text-primary border-primary/40 bg-primary/5"
  },
  Rejected: {
    className: "text-destructive border-destructive/40 bg-destructive/5"
  }
};
const qualityStatusConfig = {
  Accepted: {
    className: "text-chart-5 border-chart-5/40",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3" })
  },
  Rejected: {
    className: "text-destructive border-destructive/40",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-3 w-3" })
  },
  Pending: {
    className: "text-accent border-accent/40",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3 w-3" })
  }
};
const kpis = [
  {
    label: "RM POs Pending",
    value: "14",
    icon: PackageSearch,
    color: "text-primary",
    trend: "stable"
  },
  {
    label: "Critical Stock Items",
    value: "3",
    icon: TriangleAlert,
    color: "text-destructive",
    trend: "up"
  },
  {
    label: "GRNs This Month",
    value: "42",
    icon: Truck,
    color: "text-chart-5",
    trend: "up"
  },
  {
    label: "Rejections (MTD)",
    value: "2",
    icon: CircleX,
    color: "text-accent",
    trend: "down"
  }
];
function RMPurchaseDashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", "data-ocid": "rm_purchase.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-3 justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "RM-Purchase" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-display font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PackageSearch, { className: "h-6 w-6 text-accent" }),
          "Raw Material Purchase"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "CRCA, HRCA, HSLA steel coil procurement for press shop operations" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          "data-ocid": "rm_purchase.back_button",
          variant: "outline",
          size: "sm",
          className: "gap-1.5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
            " Dashboard"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
        "data-ocid": "rm_purchase.kpi_row",
        children: kpis.map((kpi, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            "data-ocid": `rm_purchase.kpi.${i + 1}`,
            className: "bg-card border-border shadow-card",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4 pb-3 px-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: kpi.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(kpi.icon, { className: cn("h-4 w-4", kpi.color) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("text-2xl font-bold kpi-value", kpi.color), children: kpi.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: cn(
                    "flex items-center gap-1 mt-1 text-xs",
                    kpi.trend === "up" ? "text-destructive" : kpi.trend === "down" ? "text-chart-5" : "text-muted-foreground"
                  ),
                  children: [
                    kpi.trend === "up" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3 w-3" }) : kpi.trend === "down" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-3 w-3" }) : null,
                    kpi.trend === "up" ? "Needs attention" : kpi.trend === "down" ? "Improving" : "On track"
                  ]
                }
              )
            ] })
          },
          kpi.label
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "shadow-card border-destructive/20",
        "data-ocid": "rm_purchase.critical_alerts",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-destructive" }),
              "Critical Stock Alerts"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "outline",
                className: "text-destructive border-destructive/40 text-xs",
                children: [
                  criticalAlerts.filter((a) => a.severity === "critical").length,
                  " ",
                  "Critical"
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-3 space-y-2", children: criticalAlerts.map((alert, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `rm_purchase.critical_alert.item.${i + 1}`,
              className: cn(
                "flex items-start gap-3 p-3 rounded-lg border transition-colors",
                alert.severity === "critical" ? "border-destructive/25 bg-destructive/5" : "border-accent/25 bg-accent/5"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TriangleAlert,
                  {
                    className: cn(
                      "h-4 w-4 mt-0.5 flex-shrink-0",
                      alert.severity === "critical" ? "text-destructive" : "text-accent"
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: alert.material }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: cn(
                          "text-[10px] h-4 px-1.5",
                          alert.severity === "critical" ? "text-destructive border-destructive/40" : "text-accent border-accent/40"
                        ),
                        children: alert.severity === "critical" ? "Critical" : "Warning"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 text-xs text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "SKU:",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground", children: alert.sku })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "Stock:",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-destructive", children: alert.currentStock })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "Safety:",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: alert.safetyStock })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "Coverage:",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-accent-brass", children: alert.coverage })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                    "Action: ",
                    alert.action
                  ] })
                ] })
              ]
            },
            alert.id
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "rm_purchase.indent_register", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "h-4 w-4 text-primary" }),
            "RM Indent Register"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-xs", children: [
            rmIndents.length,
            " indents"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-0 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border", children: [
            "Indent #",
            "Material",
            "Required By",
            "Req Qty",
            "Appr Qty",
            "Status"
          ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              className: "py-2.5 px-2 text-left font-semibold text-muted-foreground whitespace-nowrap",
              children: h
            },
            h
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rmIndents.map((indent, i) => {
            const sc = indentStatusConfig[indent.status];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                "data-ocid": `rm_purchase.indent.item.${i + 1}`,
                className: "border-b border-border/50 hover:bg-muted/30 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 font-mono text-primary whitespace-nowrap", children: indent.id.split("-").slice(-1)[0] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-2 text-foreground max-w-[160px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate font-medium", children: indent.material }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-muted-foreground truncate",
                        style: { fontSize: "10px" },
                        children: indent.spec
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-muted-foreground whitespace-nowrap", children: indent.requiredBy }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-foreground whitespace-nowrap", children: indent.reqQty }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-foreground whitespace-nowrap", children: indent.approvedQty }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: cn(
                        "text-[10px] h-4 px-1.5 whitespace-nowrap",
                        sc.className
                      ),
                      children: indent.status
                    }
                  ) })
                ]
              },
              indent.id
            );
          }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "rm_purchase.receipt_log", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-4 w-4 text-chart-5" }),
            "Raw Material Receipt Log"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: "Last 7 days" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-3 space-y-2", children: receipts.map((r, i) => {
          const qs = qualityStatusConfig[r.qualityStatus];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `rm_purchase.receipt.item.${i + 1}`,
              className: "flex items-start gap-3 p-2.5 rounded-lg border border-border hover:bg-muted/30 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 text-center pt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-primary", children: r.date }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: r.material }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 text-xs text-muted-foreground mt-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: r.vendor }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: r.qty }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-primary", children: r.grn })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: "outline",
                    className: cn(
                      "text-[10px] h-5 px-1.5 flex-shrink-0 flex items-center gap-1",
                      qs.className
                    ),
                    children: [
                      qs.icon,
                      r.qualityStatus
                    ]
                  }
                )
              ]
            },
            r.grn
          );
        }) })
      ] })
    ] })
  ] });
}
export {
  RMPurchaseDashboard as default
};
