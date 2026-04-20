import { w as jsxRuntimeExports, F as Factory, Z as Zap, T as TrendingUp, r as TriangleAlert, D as Badge, K as Separator } from "./index-2fslUrt3.js";
import { C as Card, a as CardContent, b as CardHeader, c as CardTitle } from "./card-jLqOLDAk.js";
import { C as Clock } from "./clock-C3gewwYv.js";
import { G as Gauge } from "./gauge-DPNDGypP.js";
import { C as CircleCheck } from "./circle-check-DU2tcmt8.js";
import { R as ResponsiveContainer, X as XAxis, Y as YAxis, T as Tooltip, B as Bar, o as Cell } from "./generateCategoricalChart-B7LSTHKo.js";
import { B as BarChart } from "./BarChart-oVI9OG01.js";
import { C as CartesianGrid } from "./CartesianGrid-stlWiZ02.js";
import { a as ArrowUp, A as ArrowDown } from "./arrow-up-Ci-IHTh3.js";
import { M as Minus } from "./minus-CvtiO5km.js";
const shiftSummary = {
  shift: "Shift A (Morning)",
  shiftTime: "06:00 – 14:00",
  date: "Mon, 20 Apr 2026",
  supervisor: "Rajesh Kumar",
  linesActive: 5,
  linesTotal: 6
};
const kpis = [
  {
    label: "Daily Output",
    value: 4280,
    target: 4500,
    unit: "pcs",
    trend: "up",
    trendValue: "+340",
    icon: Factory,
    color: "text-primary",
    bgColor: "bg-primary/10",
    isScrap: false
  },
  {
    label: "OEE",
    value: 82.4,
    target: 85,
    unit: "%",
    trend: "up",
    trendValue: "+1.8%",
    icon: Gauge,
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
    isScrap: false
  },
  {
    label: "Shift Attainment",
    value: 91.6,
    target: 95,
    unit: "%",
    trend: "stable",
    trendValue: "0.0%",
    icon: TrendingUp,
    color: "text-accent",
    bgColor: "bg-accent/10",
    isScrap: false
  },
  {
    label: "Scrap Rate",
    value: 1.2,
    target: 1,
    unit: "%",
    trend: "down",
    trendValue: "-0.4%",
    icon: TriangleAlert,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    isScrap: true
  }
];
const workOrderRows = [
  {
    wo: "WO-001",
    part: "TVS-FP-3847-B — Front Suspension Bracket",
    client: "TVS",
    qty: 2e3,
    done: 1480,
    status: "Running",
    machine: "Line 1 — 250T Hyd.",
    operator: "Arun Selvam",
    priority: "critical"
  },
  {
    wo: "WO-002",
    part: "SKF-BR-2291-A — Inner Ring Retainer",
    client: "SKF",
    qty: 5e3,
    done: 3200,
    status: "Running",
    machine: "Line 3 — 160T Prog.",
    operator: "Suresh K.",
    priority: "high"
  },
  {
    wo: "WO-007",
    part: "TVS-EC-5512-D — Engine Bay Cover",
    client: "TVS",
    qty: 1500,
    done: 0,
    status: "Pending",
    machine: "Line 5 — 315T Mech.",
    operator: "Murugan R.",
    priority: "medium"
  },
  {
    wo: "WO-008",
    part: "SKF-SP-1104-C — Seal Carrier Plate",
    client: "SKF",
    qty: 800,
    done: 0,
    status: "Pending",
    machine: "Line 6 — 200T Hyd.",
    operator: "Karthik V.",
    priority: "medium"
  },
  {
    wo: "WO-005",
    part: "TVS-EC-5512-D — Engine Bay Cover (Prev. Batch)",
    client: "TVS",
    qty: 1500,
    done: 1500,
    status: "Done",
    machine: "Line 1 — 250T Hyd.",
    operator: "Arun Selvam",
    priority: "low"
  },
  {
    wo: "WO-009",
    part: "INT-BKT-2210 — Internal Bracket Assy",
    client: "Internal",
    qty: 600,
    done: 180,
    status: "On Hold",
    machine: "Line 2 — 400T Trans.",
    operator: "—",
    priority: "low"
  }
];
const machines = [
  {
    id: "M1",
    name: "Line 1 — 250T Hyd.",
    type: "Hydraulic Press",
    status: "Running",
    oee: 91,
    currentPart: "TVS-FP-3847-B",
    cycleCount: 1480,
    lastDowntime: "Apr 17, 02:30"
  },
  {
    id: "M2",
    name: "Line 2 — 400T Trans.",
    type: "Transfer Press",
    status: "PM",
    oee: 0,
    currentPart: "—",
    cycleCount: 0,
    lastDowntime: "Now (PM)"
  },
  {
    id: "M3",
    name: "Line 3 — 160T Prog.",
    type: "Mechanical Press",
    status: "Running",
    oee: 88,
    currentPart: "SKF-BR-2291-A",
    cycleCount: 3200,
    lastDowntime: "Apr 15, 08:10"
  },
  {
    id: "M4",
    name: "Line 4 — 400T Servo",
    type: "Servo Transfer Press",
    status: "Idle",
    oee: 0,
    currentPart: "—",
    cycleCount: 0,
    lastDowntime: "Apr 18, 14:20"
  },
  {
    id: "M5",
    name: "Line 5 — 315T Mech.",
    type: "Mechanical Press",
    status: "Running",
    oee: 79,
    currentPart: "TVS-EC-5512-D",
    cycleCount: 820,
    lastDowntime: "Apr 14, 09:45"
  },
  {
    id: "M6",
    name: "Line 6 — 200T Hyd.",
    type: "Hydraulic Press",
    status: "Running",
    oee: 84,
    currentPart: "SKF-SP-1104-C",
    cycleCount: 540,
    lastDowntime: "Apr 16, 11:00"
  }
];
const trendData = [
  { day: "14 Apr", output: 3920, target: 4500 },
  { day: "15 Apr", output: 4180, target: 4500 },
  { day: "16 Apr", output: 4050, target: 4500 },
  { day: "17 Apr", output: 4410, target: 4500 },
  { day: "18 Apr", output: 4620, target: 4500 },
  { day: "19 Apr", output: 3980, target: 4500 },
  { day: "20 Apr", output: 4280, target: 4500 }
];
function StatusBadge({ status }) {
  const map = {
    Running: "bg-chart-5/15 text-chart-5 border-chart-5/30",
    Pending: "bg-accent/15 text-accent border-accent/30",
    Done: "bg-primary/15 text-primary border-primary/30",
    "On Hold": "bg-muted text-muted-foreground border-border"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium border ${map[status]}`,
      children: [
        status === "Running" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-chart-5 animate-pulse" }),
        status
      ]
    }
  );
}
function PriorityBadge({ priority }) {
  const map = {
    critical: "bg-destructive/15 text-destructive border-destructive/30",
    high: "bg-accent/15 text-accent border-accent/30",
    medium: "bg-primary/15 text-primary border-primary/30",
    low: "bg-muted text-muted-foreground border-border"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex px-1.5 py-0.5 rounded text-xs font-medium border capitalize ${map[priority]}`,
      children: priority
    }
  );
}
function MachineStatusDot({ status }) {
  const map = {
    Running: { bg: "bg-chart-5", ring: "ring-chart-5/30", pulse: true },
    Idle: { bg: "bg-accent", ring: "ring-accent/30", pulse: false },
    Down: { bg: "bg-destructive", ring: "ring-destructive/30", pulse: false },
    PM: { bg: "bg-primary", ring: "ring-primary/30", pulse: false }
  };
  const s = map[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-block w-2.5 h-2.5 rounded-full ${s.bg} ring-4 ${s.ring} ${s.pulse ? "animate-pulse" : ""}`
    }
  );
}
function MachineStatusBadge({ status }) {
  const map = {
    Running: "text-chart-5",
    Idle: "text-accent",
    Down: "text-destructive",
    PM: "text-primary"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `text-xs font-semibold uppercase tracking-wide ${map[status]}`,
      children: status
    }
  );
}
function TrendIcon({
  trend,
  isScrap
}) {
  if (trend === "up")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ArrowUp,
      {
        className: `w-3.5 h-3.5 ${isScrap ? "text-destructive" : "text-chart-5"}`
      }
    );
  if (trend === "down")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ArrowDown,
      {
        className: `w-3.5 h-3.5 ${isScrap ? "text-chart-5" : "text-destructive"}`
      }
    );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3.5 h-3.5 text-muted-foreground" });
}
function CustomTooltip({ active, payload, label }) {
  if (!active || !(payload == null ? void 0 : payload.length)) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg px-3 py-2 shadow-elevated text-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-1", children: label }),
    payload.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "p",
      {
        className: p.dataKey === "output" ? "text-primary" : "text-muted-foreground",
        children: [
          p.dataKey === "output" ? "Output" : "Target",
          ":",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", children: [
            p.value.toLocaleString(),
            " pcs"
          ] })
        ]
      },
      p.dataKey
    ))
  ] });
}
function ProductionDashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "production.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border px-6 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Factory, { className: "w-5 h-5 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-semibold text-foreground leading-tight", children: "Production Department" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Press Shop — Sheet-metal Stamping & Assembly" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2 border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: shiftSummary.shift }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              shiftSummary.shiftTime,
              " · ",
              shiftSummary.date
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-chart-5/10 border border-chart-5/25 rounded-lg px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-chart-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-chart-5", children: [
              shiftSummary.linesActive,
              "/",
              shiftSummary.linesTotal,
              " Lines Active"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "Supervisor: ",
              shiftSummary.supervisor
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-screen-xl mx-auto px-6 py-6 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
          "data-ocid": "production.kpi.section",
          children: kpis.map((kpi, i) => {
            const Icon = kpi.icon;
            const pct = kpi.unit === "pcs" ? Math.round(kpi.value / kpi.target * 100) : null;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Card,
              {
                className: "border-border bg-card shadow-card",
                "data-ocid": `production.kpi.item.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `w-9 h-9 rounded-lg ${kpi.bgColor} flex items-center justify-center`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-4.5 h-4.5 ${kpi.color}`, size: 18 })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TrendIcon, { trend: kpi.trend, isScrap: kpi.isScrap }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: kpi.trend === "up" && !kpi.isScrap ? "text-chart-5" : kpi.trend === "down" && kpi.isScrap ? "text-chart-5" : kpi.trend === "down" ? "text-destructive" : "text-muted-foreground",
                          children: kpi.trendValue
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold kpi-value text-foreground", children: [
                    typeof kpi.value === "number" && kpi.unit !== "pcs" ? kpi.value.toFixed(1) : kpi.value.toLocaleString(),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-muted-foreground ml-1", children: kpi.unit })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: kpi.label }),
                  pct !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        kpi.value.toLocaleString(),
                        " /",
                        " ",
                        kpi.target.toLocaleString(),
                        " pcs"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        pct,
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-full bg-primary rounded-full transition-all duration-700",
                        style: { width: `${Math.min(pct, 100)}%` }
                      }
                    ) })
                  ] }),
                  pct === null && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                    "Target: ",
                    kpi.target,
                    kpi.unit
                  ] })
                ] })
              },
              kpi.label
            );
          })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "xl:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: "border-border bg-card shadow-card h-full",
            "data-ocid": "production.work_orders.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold text-foreground flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary" }),
                  "Active Work Orders"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs", children: [
                  workOrderRows.filter((w) => w.status === "Running").length,
                  " ",
                  "Running"
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "table",
                {
                  className: "w-full text-sm",
                  "data-ocid": "production.work_orders.table",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "WO#" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Part" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Client" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Qty" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Status" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden md:table-cell", children: "Machine" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden lg:table-cell", children: "Operator" })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: workOrderRows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "tr",
                      {
                        className: "border-b border-border/50 hover:bg-muted/20 transition-colors-fast",
                        "data-ocid": `production.work_orders.row.${i + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs font-semibold text-primary", children: row.wo }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: row.priority })
                          ] }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 max-w-[220px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground font-medium truncate", children: row.part }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: `text-xs font-semibold ${row.client === "TVS" ? "text-accent" : row.client === "SKF" ? "text-primary" : "text-muted-foreground"}`,
                              children: row.client
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-foreground kpi-value", children: row.qty.toLocaleString() }),
                            row.done > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                              row.done.toLocaleString(),
                              " done"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: row.status }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden md:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: row.machine }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden lg:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground", children: row.operator }) })
                        ]
                      },
                      row.wo
                    )) })
                  ]
                }
              ) }) })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: "border-border bg-card shadow-card h-full",
            "data-ocid": "production.machines.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold text-foreground flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "w-4 h-4 text-accent" }),
                  "Machine Status"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-chart-5 inline-block" }),
                  "Running",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-accent inline-block" }),
                  "Idle"
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4 space-y-3", children: machines.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-muted/30 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors-fast",
                  "data-ocid": `production.machines.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MachineStatusDot, { status: m.status }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground truncate", children: m.name })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MachineStatusBadge, { status: m.status })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-3 gap-y-1 text-xs", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Part: " }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground text-xs", children: m.currentPart })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Cycles: " }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold kpi-value text-foreground", children: m.cycleCount.toLocaleString() })
                      ] }),
                      m.oee > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-0.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "OEE" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold kpi-value text-foreground", children: [
                            m.oee,
                            "%"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `h-full rounded-full ${m.oee >= 85 ? "bg-chart-5" : m.oee >= 70 ? "bg-accent" : "bg-destructive"}`,
                            style: { width: `${m.oee}%` }
                          }
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 text-muted-foreground", children: [
                        "Last downtime: ",
                        m.lastDowntime
                      ] })
                    ] })
                  ]
                },
                m.id
              )) })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "border-border bg-card shadow-card",
          "data-ocid": "production.trend.section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold text-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-primary" }),
                "7-Day Production Output Trend"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-0.5 bg-primary inline-block rounded" }),
                  "Daily Output"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-0.5 bg-muted-foreground/40 inline-block rounded" }),
                  "Target (4,500)"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                BarChart,
                {
                  data: trendData,
                  margin: { top: 0, right: 8, left: -10, bottom: 0 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CartesianGrid,
                      {
                        vertical: false,
                        strokeDasharray: "4 4",
                        stroke: "oklch(var(--border))"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      XAxis,
                      {
                        dataKey: "day",
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
                        tick: {
                          fontSize: 11,
                          fill: "oklch(var(--muted-foreground))"
                        },
                        axisLine: false,
                        tickLine: false,
                        tickFormatter: (v) => `${(v / 1e3).toFixed(1)}k`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Tooltip,
                      {
                        content: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTooltip, {}),
                        cursor: { fill: "oklch(var(--muted) / 0.4)" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "output", radius: [4, 4, 0, 0], maxBarSize: 48, children: trendData.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Cell,
                      {
                        fill: entry.output >= entry.target ? "oklch(var(--chart-5))" : "oklch(var(--primary))",
                        opacity: 0.85
                      },
                      `cell-${entry.day}`
                    )) })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mt-2 mb-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-2", children: trendData.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold kpi-value text-foreground", children: [
                  (d.output / 1e3).toFixed(1),
                  "k"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: d.day.split(" ")[0] })
              ] }, d.day)) })
            ] })
          ]
        }
      )
    ] })
  ] });
}
export {
  ProductionDashboard as default
};
