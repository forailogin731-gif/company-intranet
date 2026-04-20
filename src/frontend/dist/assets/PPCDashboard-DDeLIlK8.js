import { w as jsxRuntimeExports, C as CalendarClock, T as TrendingUp, r as TriangleAlert, D as Badge } from "./index-2fslUrt3.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-jLqOLDAk.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CGcDfGlK.js";
import { m as motion } from "./proxy-EROLA0vA.js";
import { T as Target, C as ChartColumn } from "./target-Cy91wxSH.js";
import { C as Clock } from "./clock-C3gewwYv.js";
import { R as ResponsiveContainer, X as XAxis, Y as YAxis, T as Tooltip, B as Bar } from "./generateCategoricalChart-B7LSTHKo.js";
import { B as BarChart } from "./BarChart-oVI9OG01.js";
import { C as CartesianGrid } from "./CartesianGrid-stlWiZ02.js";
import { P as PackageCheck } from "./package-check-BygRfvnu.js";
import { P as PackageX } from "./package-x-C7NINCm8.js";
import { C as CircleCheck } from "./circle-check-DU2tcmt8.js";
const productionOrders = [
  {
    id: "po1",
    orderNo: "PO-APR-001",
    partNo: "TVS-FP-3847-B",
    client: "TVS Motor Company",
    qtyRequired: 2e3,
    qtyProduced: 1480,
    dueDate: "22 Apr 2026",
    status: "in-progress",
    machine: "250T Line 1"
  },
  {
    id: "po2",
    orderNo: "PO-APR-002",
    partNo: "SKF-BR-2291-A",
    client: "SKF Bearings India",
    qtyRequired: 5e3,
    qtyProduced: 3200,
    dueDate: "24 Apr 2026",
    status: "in-progress",
    machine: "160T Line 3"
  },
  {
    id: "po3",
    orderNo: "PO-APR-003",
    partNo: "TVS-EC-5512-D",
    client: "TVS Motor Company",
    qtyRequired: 1500,
    qtyProduced: 1500,
    dueDate: "19 Apr 2026",
    status: "completed",
    machine: "250T Line 1"
  },
  {
    id: "po4",
    orderNo: "PO-APR-004",
    partNo: "TVS-CS-7714-F",
    client: "TVS Motor Company",
    qtyRequired: 3e3,
    qtyProduced: 0,
    dueDate: "28 Apr 2026",
    status: "released",
    machine: "630T Line 4"
  },
  {
    id: "po5",
    orderNo: "PO-APR-005",
    partNo: "SKF-HB-4482-C",
    client: "SKF Bearings India",
    qtyRequired: 8e3,
    qtyProduced: 0,
    dueDate: "30 Apr 2026",
    status: "planned",
    machine: "160T Line 3"
  },
  {
    id: "po6",
    orderNo: "PO-APR-006",
    partNo: "TVS-RM-1023-G",
    client: "TVS Motor Company",
    qtyRequired: 2500,
    qtyProduced: 600,
    dueDate: "18 Apr 2026",
    status: "overdue",
    machine: "400T Line 2"
  },
  {
    id: "po7",
    orderNo: "PO-APR-007",
    partNo: "SKF-PR-9901-B",
    client: "SKF Bearings India",
    qtyRequired: 12e3,
    qtyProduced: 12e3,
    dueDate: "15 Apr 2026",
    status: "completed",
    machine: "630T Line 4"
  },
  {
    id: "po8",
    orderNo: "PO-APR-008",
    partNo: "TVS-SB-2218-A",
    client: "TVS Motor Company",
    qtyRequired: 4e3,
    qtyProduced: 0,
    dueDate: "05 May 2026",
    status: "planned",
    machine: "250T Line 1"
  }
];
const capacityData = [
  { week: "W14", planned: 85, actual: 82 },
  { week: "W15", planned: 88, actual: 91 },
  { week: "W16", planned: 90, actual: 87 },
  { week: "W17", planned: 86, actual: 84 },
  { week: "W18", planned: 92, actual: 78 }
];
const materials = [
  {
    id: "mat1",
    material: "CRCA Sheet Coil 1.5mm",
    sku: "RM-CRCA-1.5-IS513",
    required: 25,
    available: 18,
    unit: "Coils",
    status: "critical",
    supplier: "JSW Steel",
    eta: "26 Apr 2026"
  },
  {
    id: "mat2",
    material: "HRCA Coil 2.5mm",
    sku: "RM-HRCA-2.5-IS1079",
    required: 20,
    available: 42,
    unit: "Coils",
    status: "available",
    supplier: "TATA Steel"
  },
  {
    id: "mat3",
    material: "HSLA 650 Grade Coil 3mm",
    sku: "RM-HSLA-3.0-IS8500",
    required: 15,
    available: 12,
    unit: "Coils",
    status: "low",
    supplier: "Steel Authority India",
    eta: "28 Apr 2026"
  },
  {
    id: "mat4",
    material: "CR Coil 0.8mm (Skin Pass)",
    sku: "RM-CR-0.8-IS513SP",
    required: 8,
    available: 22,
    unit: "Coils",
    status: "available",
    supplier: "Bhushan Power"
  },
  {
    id: "mat5",
    material: "Cutting Fluid — Water Soluble",
    sku: "CONS-CF-WS-20L",
    required: 8,
    available: 12,
    unit: "Cans",
    status: "available",
    supplier: "Blaser Swisslube"
  }
];
function orderStatusConfig(s) {
  switch (s) {
    case "planned":
      return {
        label: "Planned",
        color: "bg-muted text-muted-foreground border-border"
      };
    case "released":
      return {
        label: "Released",
        color: "bg-primary/15 text-primary border-primary/30"
      };
    case "in-progress":
      return {
        label: "In Progress",
        color: "bg-accent/15 text-accent border-accent/30"
      };
    case "completed":
      return {
        label: "Completed",
        color: "bg-chart-5/15 text-chart-5 border-chart-5/30"
      };
    case "overdue":
      return {
        label: "Overdue",
        color: "bg-destructive/15 text-destructive border-destructive/30"
      };
  }
}
function materialStatusConfig(s) {
  switch (s) {
    case "available":
      return {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
        color: "text-chart-5",
        bg: "bg-chart-5/10 border-chart-5/25",
        label: "Available"
      };
    case "low":
      return {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5" }),
        color: "text-accent",
        bg: "bg-accent/10 border-accent/25",
        label: "Low Stock"
      };
    case "critical":
      return {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(PackageX, { className: "w-3.5 h-3.5" }),
        color: "text-destructive",
        bg: "bg-destructive/10 border-destructive/25",
        label: "Critical"
      };
  }
}
function clientBadge(client) {
  if (client === "TVS Motor Company")
    return "bg-chart-1/15 text-chart-1 border-chart-1/25";
  if (client === "SKF Bearings India")
    return "bg-chart-4/15 text-chart-4 border-chart-4/25";
  return "bg-muted text-muted-foreground border-border";
}
function ProgressBar({ value, max }) {
  const pct = max > 0 ? Math.min(100, Math.round(value / max * 100)) : 0;
  const color = pct === 100 ? "bg-chart-5" : pct > 50 ? "bg-primary" : "bg-accent";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `h-full rounded-full transition-all ${color}`,
        style: { width: `${pct}%` }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground kpi-value w-8 text-right", children: [
      pct,
      "%"
    ] })
  ] });
}
function KPICard({
  label,
  value,
  sub,
  icon: Icon,
  accent = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border bg-card shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex items-start gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `p-2.5 rounded-lg border shrink-0 ${accent ? "bg-accent/10 border-accent/20" : "bg-primary/10 border-primary/20"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Icon,
          {
            className: `w-5 h-5 ${accent ? "text-accent" : "text-primary"}`
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide font-medium", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold kpi-value text-foreground mt-0.5", children: value }),
      sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: sub })
    ] })
  ] }) });
}
function CustomTooltip({
  active,
  payload,
  label
}) {
  if (!active || !(payload == null ? void 0 : payload.length)) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg px-3 py-2 shadow-elevated text-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-1", children: label }),
    payload.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: p.color }, children: [
      p.name,
      ": ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", children: [
        p.value,
        "%"
      ] })
    ] }, p.name))
  ] });
}
function PPCDashboard() {
  const onSchedule = productionOrders.filter(
    (o) => o.status !== "overdue"
  ).length;
  const schedulePct = Math.round(onSchedule / productionOrders.length * 100);
  const currentCapacity = capacityData[capacityData.length - 1].actual;
  const pendingOrders = productionOrders.filter(
    (o) => o.status === "planned" || o.status === "released"
  ).length;
  const overdueOrders = productionOrders.filter(
    (o) => o.status === "overdue"
  ).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "ppc.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-accent/10 border border-accent/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "w-5 h-5 text-accent" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground", children: "PPC" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Production Planning & Control — scheduling, capacity, and dispatch coordination" })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.1 },
        "data-ocid": "ppc.kpi.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            KPICard,
            {
              label: "Orders on Schedule",
              value: `${schedulePct}%`,
              sub: `${onSchedule} of ${productionOrders.length} orders`,
              icon: Target
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            KPICard,
            {
              label: "Capacity Utilization",
              value: `${currentCapacity}%`,
              sub: "Week 18 — Apr 20–26",
              icon: TrendingUp
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            KPICard,
            {
              label: "Pending Orders",
              value: `${pendingOrders}`,
              sub: "Planned + Released",
              icon: Clock,
              accent: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            KPICard,
            {
              label: "Overdue Releases",
              value: `${overdueOrders}`,
              sub: "Immediate action needed",
              icon: TriangleAlert,
              accent: true
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.15 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: "border-border bg-card shadow-card",
            "data-ocid": "ppc.schedule.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4 text-primary" }),
                "Production Schedule",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs font-normal text-muted-foreground", children: "April 2026" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "border-border hover:bg-transparent", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-muted-foreground px-4 py-2.5", children: "Order #" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-muted-foreground px-4 py-2.5", children: "Part No." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-muted-foreground px-4 py-2.5", children: "Client" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-muted-foreground px-4 py-2.5 text-right", children: "Qty Required" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-muted-foreground px-4 py-2.5", children: "Progress" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-muted-foreground px-4 py-2.5", children: "Due Date" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-muted-foreground px-4 py-2.5", children: "Machine" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-muted-foreground px-4 py-2.5 text-center", children: "Status" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: productionOrders.map((o, i) => {
                  const cfg = orderStatusConfig(o.status);
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    TableRow,
                    {
                      className: "border-border hover:bg-muted/30 transition-colors-fast",
                      "data-ocid": `ppc.order.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 font-mono text-xs text-foreground", children: o.orderNo }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 font-mono text-xs text-foreground font-medium", children: o.partNo }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Badge,
                          {
                            variant: "outline",
                            className: `text-[10px] px-1.5 ${clientBadge(o.client)}`,
                            children: o.client === "TVS Motor Company" ? "TVS" : o.client === "SKF Bearings India" ? "SKF" : "Internal"
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-right text-sm font-semibold kpi-value text-foreground", children: o.qtyRequired.toLocaleString() }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 w-36", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ProgressBar,
                          {
                            value: o.qtyProduced,
                            max: o.qtyRequired
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-xs text-muted-foreground whitespace-nowrap", children: o.dueDate }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-xs text-muted-foreground", children: o.machine }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Badge,
                          {
                            variant: "outline",
                            className: `text-[10px] px-2 ${cfg.color}`,
                            children: cfg.label
                          }
                        ) })
                      ]
                    },
                    o.id
                  );
                }) })
              ] }) })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-5 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "xl:col-span-3",
          initial: { opacity: 0, x: -8 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: 0.22 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "border-border bg-card shadow-card h-full",
              "data-ocid": "ppc.capacity_chart.section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-primary" }),
                  "Capacity Utilization — Weekly",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs font-normal text-muted-foreground", children: "W14–W18" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-5 pb-3 px-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: capacityData, barGap: 4, barCategoryGap: "28%", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CartesianGrid,
                      {
                        vertical: false,
                        strokeDasharray: "3 3",
                        stroke: "oklch(var(--border))"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      XAxis,
                      {
                        dataKey: "week",
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
                        domain: [60, 100],
                        tickFormatter: (v) => `${v}%`,
                        tick: {
                          fontSize: 11,
                          fill: "oklch(var(--muted-foreground))"
                        },
                        axisLine: false,
                        tickLine: false,
                        width: 36
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Tooltip,
                      {
                        content: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTooltip, {}),
                        cursor: { fill: "oklch(var(--muted) / 0.4)" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bar,
                      {
                        dataKey: "planned",
                        name: "Planned",
                        fill: "oklch(var(--primary) / 0.35)",
                        radius: [3, 3, 0, 0]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bar,
                      {
                        dataKey: "actual",
                        name: "Actual",
                        fill: "oklch(var(--primary))",
                        radius: [3, 3, 0, 0]
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5 justify-center mt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-sm bg-primary/35" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Planned" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-sm bg-primary" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Actual" })
                    ] })
                  ] })
                ] })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "xl:col-span-2",
          initial: { opacity: 0, x: 8 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: 0.25 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "border-border bg-card shadow-card h-full",
              "data-ocid": "ppc.material.section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PackageCheck, { className: "w-4 h-4 text-accent" }),
                  "Material Availability"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: materials.map((m, i) => {
                  const cfg = materialStatusConfig(m.status);
                  const availPct = Math.min(
                    100,
                    Math.round(m.available / m.required * 100)
                  );
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "px-4 py-3.5 hover:bg-muted/30 transition-colors-fast",
                      "data-ocid": `ppc.material.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground truncate", children: m.material }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground font-mono", children: m.sku })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Badge,
                            {
                              variant: "outline",
                              className: `text-[10px] px-1.5 shrink-0 flex items-center gap-1 ${cfg.color} ${cfg.bg} border`,
                              children: [
                                cfg.icon,
                                cfg.label
                              ]
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: `h-full rounded-full ${availPct >= 100 ? "bg-chart-5" : availPct >= 75 ? "bg-primary" : availPct >= 50 ? "bg-accent" : "bg-destructive"}`,
                              style: { width: `${Math.min(availPct, 100)}%` }
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-foreground font-semibold kpi-value w-20 text-right", children: [
                            m.available,
                            "/",
                            m.required,
                            " ",
                            m.unit
                          ] })
                        ] }),
                        m.eta && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-1.5 flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                          "ETA: ",
                          m.eta,
                          " · ",
                          m.supplier
                        ] })
                      ]
                    },
                    m.id
                  );
                }) }) })
              ]
            }
          )
        }
      )
    ] })
  ] });
}
export {
  PPCDashboard as default
};
