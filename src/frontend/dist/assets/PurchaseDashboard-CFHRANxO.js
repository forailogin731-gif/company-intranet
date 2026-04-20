import { w as jsxRuntimeExports, O as Link, p as ShoppingCart, Q as Button, J as cn, T as TrendingUp, D as Badge, K as Separator } from "./index-2fslUrt3.js";
import { C as Card, a as CardContent, b as CardHeader, c as CardTitle } from "./card-jLqOLDAk.js";
import { A as ArrowLeft } from "./arrow-left-DKH3CqTD.js";
import { C as CircleAlert } from "./circle-alert-ChN_ipqs.js";
import { P as PackageCheck } from "./package-check-BygRfvnu.js";
import { W as Wallet } from "./wallet-DeQViMNv.js";
import { T as TrendingDown } from "./trending-down-BPGqoM6t.js";
import { C as CircleCheck } from "./circle-check-DU2tcmt8.js";
import { R as ResponsiveContainer, X as XAxis, Y as YAxis, T as Tooltip, B as Bar, o as Cell } from "./generateCategoricalChart-B7LSTHKo.js";
import { B as BarChart } from "./BarChart-oVI9OG01.js";
import { C as CartesianGrid } from "./CartesianGrid-stlWiZ02.js";
import { C as Clock } from "./clock-C3gewwYv.js";
const purchaseOrders = [
  {
    po: "PO-2026-0142",
    vendor: "Bharat Tools Pvt Ltd",
    material: "Carbide Punch Sets — 12mm",
    qty: "48 Sets",
    poDate: "15 Apr",
    dueDate: "22 Apr",
    status: "Sent",
    amount: "₹2,14,000"
  },
  {
    po: "PO-2026-0141",
    vendor: "Castrol India Ltd",
    material: "HLP 46 Hydraulic Oil",
    qty: "20 Drums",
    poDate: "14 Apr",
    dueDate: "18 Apr",
    status: "Partial",
    amount: "₹76,800"
  },
  {
    po: "PO-2026-0140",
    vendor: "SKF MRC Bearings",
    material: "Deep Groove Ball Bearing 6205",
    qty: "200 Nos",
    poDate: "12 Apr",
    dueDate: "20 Apr",
    status: "Received",
    amount: "₹58,400"
  },
  {
    po: "PO-2026-0139",
    vendor: "Blaser Swisslube India",
    material: "Blasocut 4000 CF — 20L",
    qty: "30 Cans",
    poDate: "11 Apr",
    dueDate: "17 Apr",
    status: "Received",
    amount: "₹44,700"
  },
  {
    po: "PO-2026-0138",
    vendor: "Ace Pneumatics",
    material: "Air Filter Regulator FRL Unit",
    qty: "12 Nos",
    poDate: "10 Apr",
    dueDate: "24 Apr",
    status: "Draft",
    amount: "₹32,100"
  },
  {
    po: "PO-2026-0137",
    vendor: "Vijay Electricals",
    material: "24V DC Solenoid Valve",
    qty: "6 Nos",
    poDate: "09 Apr",
    dueDate: "16 Apr",
    status: "Sent",
    amount: "₹18,600"
  },
  {
    po: "PO-2026-0136",
    vendor: "Tool House Chennai",
    material: "Drill Bit Set HSS M35",
    qty: "10 Sets",
    poDate: "08 Apr",
    dueDate: "13 Apr",
    status: "Received",
    amount: "₹9,250"
  }
];
const vendorPerformance = [
  { vendor: "Bharat Tools", delivery: 94, quality: 97 },
  { vendor: "Castrol India", delivery: 88, quality: 95 },
  { vendor: "SKF MRC", delivery: 97, quality: 99 },
  { vendor: "Blaser Swiss", delivery: 91, quality: 96 },
  { vendor: "Ace Pneumatics", delivery: 82, quality: 91 }
];
const pendingApprovals = [
  {
    id: "REQ-0089",
    requestor: "Mohan Krishnan",
    department: "Maintenance",
    item: "Servo Drive Unit — 7.5kW Siemens",
    amount: "₹1,84,000",
    urgency: "High",
    requestedOn: "20 Apr"
  },
  {
    id: "REQ-0088",
    requestor: "Balamurugan S.",
    department: "Tool-Room",
    item: "Wire EDM Copper Electrode — 2mm",
    amount: "₹38,500",
    urgency: "High",
    requestedOn: "19 Apr"
  },
  {
    id: "REQ-0087",
    requestor: "Rajesh Kumar",
    department: "Production",
    item: "Safety Interlock Switches (10 Nos)",
    amount: "₹22,400",
    urgency: "Medium",
    requestedOn: "18 Apr"
  },
  {
    id: "REQ-0086",
    requestor: "Vikram Pillai",
    department: "IT",
    item: "24-Port PoE Network Switch",
    amount: "₹67,200",
    urgency: "Low",
    requestedOn: "17 Apr"
  }
];
const statusConfig = {
  Draft: { label: "Draft", className: "text-muted-foreground border-border" },
  Sent: { label: "Sent", className: "text-primary border-primary/40" },
  Partial: { label: "Partial", className: "text-accent border-accent/50" },
  Received: { label: "Received", className: "text-chart-5 border-chart-5/50" }
};
const urgencyConfig = {
  High: {
    className: "text-destructive border-destructive/40 bg-destructive/5"
  },
  Medium: { className: "text-accent border-accent/40 bg-accent/5" },
  Low: { className: "text-muted-foreground border-border" }
};
const kpis = [
  {
    label: "Open POs",
    value: "28",
    icon: ShoppingCart,
    color: "text-primary",
    trend: "stable"
  },
  {
    label: "POs Overdue",
    value: "4",
    icon: CircleAlert,
    color: "text-destructive",
    trend: "up"
  },
  {
    label: "Pending GRNs",
    value: "11",
    icon: PackageCheck,
    color: "text-accent",
    trend: "down"
  },
  {
    label: "Monthly Spend",
    value: "₹18.7L",
    icon: Wallet,
    color: "text-chart-5",
    trend: "up"
  }
];
function PurchaseDashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", "data-ocid": "purchase.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-3 justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Purchase" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-display font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "h-6 w-6 text-chart-2" }),
          "Purchase Department"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Procurement of tools, consumables, capital equipment & services" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          "data-ocid": "purchase.back_button",
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
        "data-ocid": "purchase.kpi_row",
        children: kpis.map((kpi, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            "data-ocid": `purchase.kpi.${i + 1}`,
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
                    kpi.trend === "up" ? "Above target" : kpi.trend === "down" ? "Improving" : "On target"
                  ]
                }
              )
            ] })
          },
          kpi.label
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "purchase.po_table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "h-4 w-4 text-chart-2" }),
          "Purchase Orders"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-xs", children: [
          purchaseOrders.length,
          " records"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-0 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border", children: [
          "PO #",
          "Vendor",
          "Material",
          "Qty",
          "PO Date",
          "Due Date",
          "Amount",
          "Status"
        ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "th",
          {
            className: "py-3 px-3 text-left text-xs font-semibold text-muted-foreground whitespace-nowrap",
            children: h
          },
          h
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: purchaseOrders.map((po, i) => {
          const s = statusConfig[po.status];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              "data-ocid": `purchase.po.item.${i + 1}`,
              className: "border-b border-border/50 hover:bg-muted/30 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 font-mono text-xs text-primary", children: po.po }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-foreground font-medium whitespace-nowrap", children: po.vendor }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-muted-foreground max-w-[220px] truncate", children: po.material }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-muted-foreground whitespace-nowrap", children: po.qty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-muted-foreground whitespace-nowrap", children: po.poDate }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-muted-foreground whitespace-nowrap", children: po.dueDate }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 font-medium text-foreground text-right whitespace-nowrap", children: po.amount }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: cn("text-[10px] h-5 px-2", s.className),
                    children: s.label
                  }
                ) })
              ]
            },
            po.po
          );
        }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "purchase.vendor_chart", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-chart-5" }),
          "Vendor Delivery Performance",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs text-muted-foreground font-normal", children: "Top 5 by OTD %" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            BarChart,
            {
              data: vendorPerformance,
              barSize: 28,
              margin: { top: 4, right: 8, left: -16, bottom: 4 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CartesianGrid,
                  {
                    strokeDasharray: "3 3",
                    stroke: "oklch(var(--border) / 0.4)",
                    vertical: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  XAxis,
                  {
                    dataKey: "vendor",
                    tick: {
                      fontSize: 11,
                      fill: "oklch(var(--muted-foreground))"
                    },
                    axisLine: false,
                    tickLine: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  YAxis,
                  {
                    domain: [75, 100],
                    tick: {
                      fontSize: 10,
                      fill: "oklch(var(--muted-foreground))"
                    },
                    axisLine: false,
                    tickLine: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tooltip,
                  {
                    contentStyle: {
                      background: "oklch(var(--card))",
                      border: "1px solid oklch(var(--border))",
                      borderRadius: 8,
                      fontSize: 12
                    },
                    formatter: (v) => [`${v}%`, "OTD"]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "delivery", radius: [4, 4, 0, 0], children: vendorPerformance.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Cell,
                  {
                    fill: entry.delivery >= 90 ? "oklch(var(--chart-5))" : entry.delivery >= 85 ? "oklch(var(--chart-2))" : "oklch(var(--destructive))"
                  },
                  entry.vendor
                )) })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-2 text-xs text-muted-foreground justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2.5 h-2.5 rounded-sm bg-chart-5/80" }),
              " ",
              "≥90% — Good"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2.5 h-2.5 rounded-sm bg-chart-2/80" }),
              " ",
              "85–89% — Acceptable"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2.5 h-2.5 rounded-sm bg-destructive/80" }),
              " ",
              "<85% — Review"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "purchase.approvals_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-accent" }),
            "Pending Approvals"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "outline",
              className: "text-xs text-destructive border-destructive/40",
              children: [
                pendingApprovals.filter((a) => a.urgency === "High").length,
                " ",
                "Urgent"
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-3 space-y-2", children: pendingApprovals.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `purchase.approval.item.${i + 1}`,
            className: "flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground line-clamp-1 flex-1", children: item.item }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: cn(
                        "text-[10px] h-5 px-1.5 flex-shrink-0",
                        urgencyConfig[item.urgency].className
                      ),
                      children: item.urgency
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-primary", children: item.id }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.requestor }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-brass", children: item.department }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.requestedOn })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: item.amount }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      "data-ocid": `purchase.approval.approve.${i + 1}`,
                      size: "sm",
                      className: "h-6 px-2 text-[10px]",
                      children: "Approve"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      "data-ocid": `purchase.approval.reject.${i + 1}`,
                      size: "sm",
                      variant: "outline",
                      className: "h-6 px-2 text-[10px]",
                      children: "Hold"
                    }
                  )
                ] })
              ] })
            ]
          },
          item.id
        )) })
      ] })
    ] })
  ] });
}
export {
  PurchaseDashboard as default
};
