import { w as jsxRuntimeExports, O as Link, W as Warehouse, Q as Button, J as cn, T as TrendingUp, K as Separator, D as Badge } from "./index-2fslUrt3.js";
import { C as Card, a as CardContent, b as CardHeader, c as CardTitle } from "./card-jLqOLDAk.js";
import { P as PackageMinus, a as PackagePlus, A as ArrowLeftRight, T as Trash2, L as Layers } from "./trash-2-B8vlh55r.js";
import { A as ArrowLeft } from "./arrow-left-DKH3CqTD.js";
import { P as Package } from "./package-DuT42JFD.js";
import { T as TrendingDown } from "./trending-down-BPGqoM6t.js";
import { A as ArrowDown, a as ArrowUp } from "./arrow-up-Ci-IHTh3.js";
const storeItems = [
  {
    code: "RM-CRCA-1.5",
    description: "CRCA Sheet Coil 1.5mm IS513",
    uom: "Coils",
    stock: 18,
    minLevel: 25,
    maxLevel: 60,
    bin: "RM Bay A-01",
    category: "Raw Material"
  },
  {
    code: "RM-HRCA-2.5",
    description: "HRCA Coil 2.5mm IS1079",
    uom: "Coils",
    stock: 42,
    minLevel: 20,
    maxLevel: 50,
    bin: "RM Bay A-02",
    category: "Raw Material"
  },
  {
    code: "RM-HSLA-2.0",
    description: "HSLA Steel 2.0mm E350",
    uom: "Coils",
    stock: 5,
    minLevel: 8,
    maxLevel: 20,
    bin: "RM Bay A-03",
    category: "Raw Material"
  },
  {
    code: "CONS-OIL-HLP46",
    description: "Hydraulic Oil HLP 46 — 200L",
    uom: "Drums",
    stock: 3,
    minLevel: 5,
    maxLevel: 12,
    bin: "Stores C-03",
    category: "Consumable"
  },
  {
    code: "CONS-CF-WS",
    description: "Cutting Fluid Water Soluble 20L",
    uom: "Cans",
    stock: 12,
    minLevel: 8,
    maxLevel: 24,
    bin: "Stores C-01",
    category: "Consumable"
  },
  {
    code: "TR-PD-12MM",
    description: "Punch & Die Set Compound 12mm",
    uom: "Sets",
    stock: 6,
    minLevel: 4,
    maxLevel: 10,
    bin: "TR-Storage-B1",
    category: "Tooling"
  },
  {
    code: "FG-TVS-3847B",
    description: "Finished Bracket TVS-FP-3847-B",
    uom: "Pcs",
    stock: 1480,
    minLevel: 0,
    maxLevel: 3e3,
    bin: "FG Dispatch D-01",
    category: "Finished Goods"
  },
  {
    code: "CONS-GLOVES-L",
    description: "Safety Gloves Leather — Size L",
    uom: "Pairs",
    stock: 22,
    minLevel: 30,
    maxLevel: 80,
    bin: "Safety Bay S-01",
    category: "Safety"
  },
  {
    code: "MRO-BEARING-6205",
    description: "Deep Groove Bearing 6205-2RS",
    uom: "Nos",
    stock: 48,
    minLevel: 20,
    maxLevel: 80,
    bin: "MRO Rack M-04",
    category: "MRO"
  },
  {
    code: "RM-GALV-0.8",
    description: "Galvanized Sheet 0.8mm GP IS277",
    uom: "Coils",
    stock: 14,
    minLevel: 10,
    maxLevel: 30,
    bin: "RM Bay A-04",
    category: "Raw Material"
  }
];
const transactions = [
  {
    date: "20 Apr 10:45",
    type: "Issue",
    material: "CRCA Coil 1.5mm IS513",
    department: "Production",
    qty: "3 Coils",
    reference: "WO-001"
  },
  {
    date: "20 Apr 09:30",
    type: "Receipt",
    material: "HLP 46 Hydraulic Oil",
    department: "Maintenance",
    qty: "5 Drums",
    reference: "GRN-2026-0179"
  },
  {
    date: "19 Apr 16:15",
    type: "Issue",
    material: "Punch & Die Set 12mm",
    department: "Tool-Room",
    qty: "2 Sets",
    reference: "TR-DIE-014"
  },
  {
    date: "19 Apr 14:00",
    type: "Return",
    material: "Cutting Fluid 20L Cans",
    department: "Production",
    qty: "4 Cans",
    reference: "RTV-0041"
  },
  {
    date: "19 Apr 11:30",
    type: "Receipt",
    material: "HRCA Coil 2.5mm IS1079",
    department: "RM-Purchase",
    qty: "8 Coils",
    reference: "GRN-2026-0177"
  },
  {
    date: "18 Apr 15:00",
    type: "Issue",
    material: "Safety Gloves Leather L",
    department: "Production",
    qty: "10 Pairs",
    reference: "SAFETY-042"
  }
];
const txConfig = {
  Issue: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-3.5 w-3.5" }),
    className: "text-destructive bg-destructive/10 border-destructive/20"
  },
  Receipt: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-3.5 w-3.5" }),
    className: "text-chart-5 bg-chart-5/10 border-chart-5/20"
  },
  Return: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "h-3.5 w-3.5" }),
    className: "text-primary bg-primary/10 border-primary/20"
  }
};
function getStockStatus(item) {
  if (item.minLevel === 0)
    return {
      label: "Normal",
      rowClass: "",
      badgeClass: "text-chart-5 border-chart-5/40"
    };
  const ratio = item.stock / item.minLevel;
  if (ratio < 1)
    return {
      label: "Below Min",
      rowClass: "bg-destructive/5",
      badgeClass: "text-destructive border-destructive/40 bg-destructive/10"
    };
  if (ratio < 1.3)
    return {
      label: "Near Min",
      rowClass: "bg-accent/5",
      badgeClass: "text-accent border-accent/40 bg-accent/10"
    };
  return {
    label: "OK",
    rowClass: "",
    badgeClass: "text-chart-5 border-chart-5/40"
  };
}
const kpis = [
  {
    label: "Total SKUs",
    value: "337",
    icon: Layers,
    color: "text-primary",
    trend: "stable"
  },
  {
    label: "Low Stock Items",
    value: "4",
    icon: Package,
    color: "text-destructive",
    trend: "up"
  },
  {
    label: "Issues Today",
    value: "18",
    icon: PackageMinus,
    color: "text-accent",
    trend: "stable"
  },
  {
    label: "Receipts Today",
    value: "7",
    icon: PackagePlus,
    color: "text-chart-5",
    trend: "down"
  }
];
const quickActions = [
  {
    label: "Issue Material",
    icon: PackageMinus,
    variant: "default",
    ocid: "stores.issue_material_button",
    color: ""
  },
  {
    label: "Receive Stock",
    icon: PackagePlus,
    variant: "outline",
    ocid: "stores.receive_stock_button",
    color: ""
  },
  {
    label: "Transfer",
    icon: ArrowLeftRight,
    variant: "outline",
    ocid: "stores.transfer_button",
    color: ""
  },
  {
    label: "Scrap Entry",
    icon: Trash2,
    variant: "outline",
    ocid: "stores.scrap_button",
    color: "text-destructive"
  }
];
function StoresDashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", "data-ocid": "stores.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-3 justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Stores" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-display font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Warehouse, { className: "h-6 w-6 text-chart-4" }),
          "Stores Department"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "RM, WIP & finished goods inventory management, dispatch to TVS & SKF" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        quickActions.map((qa) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            "data-ocid": qa.ocid,
            variant: qa.variant,
            size: "sm",
            className: cn("gap-1.5 hidden sm:flex", qa.color),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(qa.icon, { className: "h-3.5 w-3.5" }),
              qa.label
            ]
          },
          qa.ocid
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            "data-ocid": "stores.back_button",
            variant: "outline",
            size: "sm",
            className: "gap-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
              " Dashboard"
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex sm:hidden gap-2 flex-wrap",
        "data-ocid": "stores.quick_actions_mobile",
        children: quickActions.map((qa) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            "data-ocid": `${qa.ocid}_mobile`,
            variant: qa.variant,
            size: "sm",
            className: cn("gap-1.5", qa.color),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(qa.icon, { className: "h-3.5 w-3.5" }),
              qa.label
            ]
          },
          qa.ocid
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
        "data-ocid": "stores.kpi_row",
        children: kpis.map((kpi, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            "data-ocid": `stores.kpi.${i + 1}`,
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
                    kpi.trend === "up" ? "Monitor required" : kpi.trend === "down" ? "Reducing" : "Steady"
                  ]
                }
              )
            ] })
          },
          kpi.label
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "stores.inventory_table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Warehouse, { className: "h-4 w-4 text-chart-4" }),
          "Inventory Register"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-2 rounded-sm bg-destructive/40" }),
            " ",
            "Below Min"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-2 rounded-sm bg-accent/40" }),
            " ",
            "Near Min"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-0 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border", children: [
          "Material Code",
          "Description",
          "UOM",
          "Stock Qty",
          "Min",
          "Max",
          "Bin Location",
          "Status"
        ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "th",
          {
            className: "py-3 px-3 text-left text-xs font-semibold text-muted-foreground whitespace-nowrap",
            children: h
          },
          h
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: storeItems.map((item, i) => {
          const st = getStockStatus(item);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              "data-ocid": `stores.inventory.item.${i + 1}`,
              className: cn(
                "border-b border-border/50 hover:bg-muted/40 transition-colors",
                st.rowClass
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 font-mono text-xs text-primary whitespace-nowrap", children: item.code }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-foreground font-medium max-w-[220px] truncate", children: item.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-muted-foreground", children: item.uom }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "td",
                  {
                    className: cn(
                      "py-2.5 px-3 font-bold kpi-value text-right",
                      item.minLevel > 0 && item.stock < item.minLevel ? "text-destructive" : item.minLevel > 0 && item.stock < item.minLevel * 1.3 ? "text-accent" : "text-foreground"
                    ),
                    children: item.stock.toLocaleString()
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-muted-foreground text-right", children: item.minLevel }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-muted-foreground text-right", children: item.maxLevel }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-muted-foreground whitespace-nowrap text-xs", children: item.bin }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: cn("text-[10px] h-5 px-2", st.badgeClass),
                    children: st.label
                  }
                ) })
              ]
            },
            item.code
          );
        }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "stores.transactions_section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "h-4 w-4 text-primary" }),
          "Recent Transactions"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: "Today + Yesterday" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-3 space-y-1.5", children: transactions.map((tx, i) => {
        const tc = txConfig[tx.type];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `stores.transaction.item.${i + 1}`,
            className: "flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/30 transition-colors border border-transparent hover:border-border/50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: cn(
                    "flex items-center justify-center h-7 w-7 rounded-md border flex-shrink-0",
                    tc.className
                  ),
                  children: tc.icon
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: tx.material }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: cn(
                        "text-[10px] h-4 px-1.5 flex-shrink-0",
                        tc.className
                      ),
                      children: tx.type
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tx.date }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Dept:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: tx.department })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-primary", children: tx.reference })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: tx.qty }) })
            ]
          },
          tx.reference
        );
      }) })
    ] })
  ] });
}
export {
  StoresDashboard as default
};
