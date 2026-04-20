import { w as jsxRuntimeExports, O as Link, g as Cog, Q as Button, r as TriangleAlert, t as Wrench, J as cn, T as TrendingUp, D as Badge, K as Separator, C as CalendarClock } from "./index-2fslUrt3.js";
import { C as Card, a as CardContent, b as CardHeader, c as CardTitle } from "./card-jLqOLDAk.js";
import { A as ArrowLeft } from "./arrow-left-DKH3CqTD.js";
import { P as PackageCheck } from "./package-check-BygRfvnu.js";
import { T as TrendingDown } from "./trending-down-BPGqoM6t.js";
import { C as CircleCheck } from "./circle-check-DU2tcmt8.js";
import { C as CircleX } from "./circle-x-DjXURZ_d.js";
const tools = [
  {
    id: "TR-DIE-014",
    name: "Progressive Die #14 — TVS FP-3847-B",
    category: "Press Die",
    status: "Repair",
    issuedTo: "Die Reconditioning Bay",
    lastUsed: "17 Apr",
    condition: "Fair",
    location: "Reconditioning Bay"
  },
  {
    id: "TR-DIE-019",
    name: "Compound Die #19 — SKF BR-2291-A",
    category: "Press Die",
    status: "Available",
    lastUsed: "14 Apr",
    condition: "Good",
    location: "Die Storage D-03"
  },
  {
    id: "TR-VMC-01",
    name: "VMC Machining Centre — Haas VF-2",
    category: "Machine",
    status: "Available",
    lastUsed: "20 Apr",
    condition: "Excellent",
    location: "Tool Room Bay 1"
  },
  {
    id: "TR-EDM-02",
    name: "Wire-Cut EDM — Sodick AQ327L",
    category: "Machine",
    status: "Repair",
    issuedTo: "External Service",
    lastUsed: "19 Apr",
    condition: "Poor",
    location: "Tool Room Bay 2"
  },
  {
    id: "TR-JIG-08",
    name: "Welding Jig — Chassis Bracket",
    category: "Jig & Fixture",
    status: "Issued",
    issuedTo: "NPD Lab",
    lastUsed: "18 Apr",
    condition: "Good",
    location: "NPD Lab"
  },
  {
    id: "TR-GRND-01",
    name: "Surface Grinding Machine",
    category: "Machine",
    status: "Available",
    lastUsed: "16 Apr",
    condition: "Good",
    location: "Tool Room Bay 3"
  },
  {
    id: "TR-MEAS-CMM",
    name: "CMM Fixture Set — Zeiss Contura",
    category: "Measurement",
    status: "Issued",
    issuedTo: "Quality Lab",
    lastUsed: "20 Apr",
    condition: "Excellent",
    location: "Quality Lab"
  },
  {
    id: "TR-DIE-007",
    name: "Progressive Die #07 — TVS EC-5512-D",
    category: "Press Die",
    status: "Available",
    lastUsed: "12 Apr",
    condition: "Good",
    location: "Die Storage D-01"
  },
  {
    id: "TR-LATHE-01",
    name: "CNC Turning Centre — Mazak QT-20",
    category: "Machine",
    status: "Available",
    lastUsed: "20 Apr",
    condition: "Excellent",
    location: "Tool Room Bay 4"
  },
  {
    id: "TR-JIG-12",
    name: "Inspection Fixture — TVS FP-3847-B",
    category: "Jig & Fixture",
    status: "Issued",
    issuedTo: "Quality Dept",
    lastUsed: "20 Apr",
    condition: "Good",
    location: "Quality Dept"
  }
];
const toolLog = [
  {
    date: "20 Apr 09:15",
    type: "Issue",
    tool: "Inspection Fixture TVS-FP-3847-B",
    toolId: "TR-JIG-12",
    person: "Lakshmi Priya",
    department: "Quality",
    purpose: "Final inspection — WO-001"
  },
  {
    date: "20 Apr 08:30",
    type: "Return",
    tool: "Compound Die #19 SKF-BR-2291-A",
    toolId: "TR-DIE-019",
    person: "Arun Selvam",
    department: "Production",
    purpose: "Production run complete — WO-002"
  },
  {
    date: "19 Apr 16:00",
    type: "Issue",
    tool: "Welding Jig Chassis Bracket",
    toolId: "TR-JIG-08",
    person: "Sanjay Iyer",
    department: "NPD",
    purpose: "Prototype validation — NPD-CB-0034"
  },
  {
    date: "19 Apr 14:30",
    type: "Issue",
    tool: "VMC Machining Centre",
    toolId: "TR-VMC-01",
    person: "Balamurugan S.",
    department: "Tool-Room",
    purpose: "Die component machining — TR-DIE-014"
  },
  {
    date: "19 Apr 11:00",
    type: "Return",
    tool: "Surface Grinding Machine",
    toolId: "TR-GRND-01",
    person: "Balamurugan S.",
    department: "Tool-Room",
    purpose: "Die punch grinding complete"
  }
];
const maintenanceSchedule = [
  {
    id: "MS-041",
    tool: "VMC Machining Centre — Haas VF-2",
    type: "Spindle Oil Change + Belt Check",
    dueDate: "21 Apr",
    lastDone: "21 Jan",
    assignedTo: "Balamurugan S.",
    status: "Due Soon"
  },
  {
    id: "MS-040",
    tool: "Wire-Cut EDM — Sodick AQ327L",
    type: "Servo Drive Replacement + Calibration",
    dueDate: "18 Apr",
    lastDone: "—",
    assignedTo: "External AMC",
    status: "Overdue"
  },
  {
    id: "MS-039",
    tool: "Surface Grinding Machine",
    type: "Table Lubrication + Dressing",
    dueDate: "28 Apr",
    lastDone: "28 Feb",
    assignedTo: "Ramu K.",
    status: "Scheduled"
  },
  {
    id: "MS-038",
    tool: "CNC Turning Centre — Mazak QT-20",
    type: "Quarterly PM — Hydraulics + Coolant",
    dueDate: "30 Apr",
    lastDone: "31 Jan",
    assignedTo: "Balamurugan S.",
    status: "Scheduled"
  },
  {
    id: "MS-037",
    tool: "CMM Fixture Set — Zeiss Contura",
    type: "Annual Recalibration NABL",
    dueDate: "05 Apr",
    lastDone: "05 Apr 2025",
    assignedTo: "Zeiss India",
    status: "Completed"
  }
];
const statusConfig = {
  Available: { className: "text-chart-5 border-chart-5/40 bg-chart-5/5" },
  Issued: { className: "text-primary border-primary/40 bg-primary/5" },
  Repair: {
    className: "text-destructive border-destructive/40 bg-destructive/5"
  },
  Condemned: { className: "text-muted-foreground border-border" }
};
const conditionConfig = {
  Excellent: "text-chart-5",
  Good: "text-primary",
  Fair: "text-accent",
  Poor: "text-destructive"
};
const maintStatusConfig = {
  Overdue: {
    className: "text-destructive border-destructive/40 bg-destructive/5",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-3.5 w-3.5" })
  },
  "Due Soon": {
    className: "text-accent border-accent/40 bg-accent/5",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5" })
  },
  Scheduled: {
    className: "text-primary border-primary/40 bg-primary/5",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "h-3.5 w-3.5" })
  },
  Completed: {
    className: "text-chart-5 border-chart-5/40 bg-chart-5/5",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" })
  }
};
const kpis = [
  {
    label: "Total Tools",
    value: "142",
    icon: Cog,
    color: "text-primary",
    trend: "stable"
  },
  {
    label: "Tools In Use",
    value: "23",
    icon: PackageCheck,
    color: "text-accent",
    trend: "up"
  },
  {
    label: "Overdue Returns",
    value: "3",
    icon: TriangleAlert,
    color: "text-destructive",
    trend: "stable"
  },
  {
    label: "Under Repair",
    value: "8",
    icon: Wrench,
    color: "text-chart-4",
    trend: "down"
  }
];
function ToolRoomDashboard() {
  const issueCount = tools.filter((t) => t.status === "Issued").length;
  const repairCount = tools.filter((t) => t.status === "Repair").length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", "data-ocid": "tool_room.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-3 justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Tool-Room" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-display font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cog, { className: "h-6 w-6 text-destructive" }),
          "Tool-Room Department"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Die design, fabrication, reconditioning & tooling management for press shop" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          "data-ocid": "tool_room.back_button",
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
        "data-ocid": "tool_room.kpi_row",
        children: kpis.map((kpi, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            "data-ocid": `tool_room.kpi.${i + 1}`,
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
                    kpi.trend === "up" ? "text-accent" : kpi.trend === "down" ? "text-chart-5" : "text-muted-foreground"
                  ),
                  children: [
                    kpi.trend === "up" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3 w-3" }) : kpi.trend === "down" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-3 w-3" }) : null,
                    kpi.trend === "up" ? "Active utilization" : kpi.trend === "down" ? "Recovering" : "On track"
                  ]
                }
              )
            ] })
          },
          kpi.label
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "tool_room.inventory_table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cog, { className: "h-4 w-4 text-destructive" }),
          "Tool Inventory"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "text-[10px] text-chart-5 border-chart-5/40 h-4 px-1.5",
                children: "Available"
              }
            ),
            tools.filter((t) => t.status === "Available").length
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "text-[10px] text-primary border-primary/40 h-4 px-1.5",
                children: "Issued"
              }
            ),
            issueCount
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "text-[10px] text-destructive border-destructive/40 h-4 px-1.5",
                children: "Repair"
              }
            ),
            repairCount
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-0 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border", children: [
          "Tool ID",
          "Name",
          "Category",
          "Status",
          "Issued To / Location",
          "Last Used",
          "Condition"
        ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "th",
          {
            className: "py-3 px-3 text-left text-xs font-semibold text-muted-foreground whitespace-nowrap",
            children: h
          },
          h
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: tools.map((tool, i) => {
          const sc = statusConfig[tool.status];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              "data-ocid": `tool_room.tool.item.${i + 1}`,
              className: "border-b border-border/50 hover:bg-muted/30 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 font-mono text-xs text-primary whitespace-nowrap", children: tool.id }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-foreground font-medium max-w-[220px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate", children: tool.name }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-muted-foreground whitespace-nowrap text-xs", children: tool.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: cn("text-[10px] h-5 px-2", sc.className),
                    children: tool.status
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-muted-foreground text-xs whitespace-nowrap", children: tool.issuedTo || tool.location }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-muted-foreground text-xs whitespace-nowrap", children: tool.lastUsed }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "td",
                  {
                    className: cn(
                      "py-2.5 px-3 text-xs font-semibold",
                      conditionConfig[tool.condition]
                    ),
                    children: tool.condition
                  }
                )
              ]
            },
            tool.id
          );
        }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "tool_room.log_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PackageCheck, { className: "h-4 w-4 text-primary" }),
            "Issue / Return Log"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: "Last 48 hrs" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-3 space-y-2", children: toolLog.map((log, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `tool_room.log.item.${i + 1}`,
            className: "flex items-start gap-3 p-2.5 rounded-lg border border-border hover:bg-muted/30 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: cn(
                    "flex items-center justify-center h-7 w-7 rounded-md border flex-shrink-0 text-xs font-bold",
                    log.type === "Issue" ? "text-destructive bg-destructive/10 border-destructive/20" : "text-chart-5 bg-chart-5/10 border-chart-5/20"
                  ),
                  children: log.type === "Issue" ? "OUT" : "IN"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: log.tool }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 text-xs text-muted-foreground mt-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-primary", children: log.toolId }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: log.person }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-brass", children: log.department })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 truncate", children: log.purpose })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground whitespace-nowrap flex-shrink-0 pt-0.5", children: log.date })
            ]
          },
          `${log.toolId}-${log.date}`
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "shadow-card",
          "data-ocid": "tool_room.maintenance_schedule",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "h-4 w-4 text-chart-4" }),
                "Tool Maintenance Schedule"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "outline",
                  className: "text-destructive border-destructive/40 text-xs",
                  children: [
                    maintenanceSchedule.filter((m) => m.status === "Overdue").length,
                    " ",
                    "Overdue"
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-3 space-y-2", children: maintenanceSchedule.map((item, i) => {
              const mc = maintStatusConfig[item.status];
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": `tool_room.maintenance.item.${i + 1}`,
                  className: cn(
                    "p-3 rounded-lg border transition-colors",
                    item.status === "Overdue" ? "border-destructive/25 bg-destructive/5" : item.status === "Due Soon" ? "border-accent/25 bg-accent/5" : "border-border hover:bg-muted/30"
                  ),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground line-clamp-1 flex-1", children: item.tool }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Badge,
                        {
                          variant: "outline",
                          className: cn(
                            "text-[10px] h-5 px-1.5 flex-shrink-0 flex items-center gap-1",
                            mc.className
                          ),
                          children: [
                            mc.icon,
                            item.status
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1.5", children: item.type }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 text-xs text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "Due:",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: cn(
                              "font-semibold",
                              item.status === "Overdue" ? "text-destructive" : item.status === "Due Soon" ? "text-accent" : "text-foreground"
                            ),
                            children: item.dueDate
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "Last Done:",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: item.lastDone })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "Assigned:",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: item.assignedTo })
                      ] })
                    ] })
                  ]
                },
                item.id
              );
            }) })
          ]
        }
      )
    ] })
  ] });
}
export {
  ToolRoomDashboard as default
};
