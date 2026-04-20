import { w as jsxRuntimeExports, h as Lightbulb, D as Badge, K as Separator, J as cn, s as Users, T as TrendingUp, e as ChevronRight } from "./index-2fslUrt3.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-jLqOLDAk.js";
import { C as Clock } from "./clock-C3gewwYv.js";
import { C as CalendarCheck2 } from "./calendar-check-2-BBtZOhdp.js";
import { F as FileText } from "./file-text-_pXBa694.js";
import { C as CircleCheck } from "./circle-check-DU2tcmt8.js";
import { P as Package } from "./package-DuT42JFD.js";
import { C as CircleDot } from "./circle-dot-C1xq8eNc.js";
import { T as TrendingDown } from "./trending-down-BPGqoM6t.js";
const npd_projects = [
  {
    id: "NPD-034",
    name: "Rear Axle Mounting Bracket",
    client: "TVS Motor Company",
    stage: "Prototype",
    dueDate: "2026-05-15",
    status: "On Track",
    lead: "Sanjay Iyer",
    partCount: 4
  },
  {
    id: "NPD-035",
    name: "Bearing Retainer Plate — Wheel Hub",
    client: "SKF Bearings India",
    stage: "Design",
    dueDate: "2026-06-01",
    status: "On Track",
    lead: "Kiran Desai",
    partCount: 2
  },
  {
    id: "NPD-036",
    name: "Engine Bracket — 3-Wheeler Platform",
    client: "TVS Motor Company",
    stage: "Validation",
    dueDate: "2026-04-30",
    status: "At Risk",
    lead: "Sanjay Iyer",
    partCount: 6
  },
  {
    id: "NPD-037",
    name: "Deep Draw Housing — Gearbox End",
    client: "SKF Bearings India",
    stage: "Concept",
    dueDate: "2026-07-20",
    status: "On Track",
    lead: "Meera Rajan",
    partCount: 1
  },
  {
    id: "NPD-038",
    name: "Chassis Side Rail — Commercial 3W",
    client: "TVS Motor Company",
    stage: "Design",
    dueDate: "2026-05-28",
    status: "Delayed",
    lead: "Kiran Desai",
    partCount: 3
  },
  {
    id: "NPD-039",
    name: "Inner Race Carrier Plate",
    client: "SKF Bearings India",
    stage: "Production",
    dueDate: "2026-04-22",
    status: "Completed",
    lead: "Sanjay Iyer",
    partCount: 2
  }
];
const designReviews = [
  {
    id: "DR-021",
    project: "NPD-036 — Engine Bracket",
    type: "Critical Design Review",
    date: "2026-04-22",
    attendees: ["Sanjay Iyer", "Kavitha Subramanian", "TVS Eng. Team"]
  },
  {
    id: "DR-022",
    project: "NPD-034 — Rear Axle Bracket",
    type: "Design Review Gate 2",
    date: "2026-04-25",
    attendees: ["Sanjay Iyer", "Mohan Krishnan", "Arjun Bose"]
  },
  {
    id: "DR-023",
    project: "NPD-035 — Bearing Retainer",
    type: "Preliminary Design Review",
    date: "2026-04-28",
    attendees: ["Kiran Desai", "SKF Tech. Team"]
  },
  {
    id: "DR-024",
    project: "NPD-038 — Chassis Rail",
    type: "Design Review Gate 1",
    date: "2026-05-02",
    attendees: ["Kiran Desai", "Balamurugan S.", "Arjun Bose"]
  },
  {
    id: "DR-025",
    project: "NPD-037 — Deep Draw Housing",
    type: "Concept Review",
    date: "2026-05-08",
    attendees: ["Meera Rajan", "SKF Eng. Team"]
  }
];
const bomRecords = [
  {
    partNo: "NPD-034-001",
    description: "Rear Axle Bracket — Main Body",
    bomVersion: "v1.3",
    status: "Under Review",
    updatedBy: "Sanjay Iyer"
  },
  {
    partNo: "NPD-034-002",
    description: "Gusset Plate — Left Hand",
    bomVersion: "v1.3",
    status: "Under Review",
    updatedBy: "Sanjay Iyer"
  },
  {
    partNo: "NPD-035-001",
    description: "Bearing Retainer Plate",
    bomVersion: "v2.0",
    status: "Released",
    updatedBy: "Kiran Desai"
  },
  {
    partNo: "NPD-036-001",
    description: "Engine Bracket — Base Plate",
    bomVersion: "v0.9",
    status: "Draft",
    updatedBy: "Sanjay Iyer"
  },
  {
    partNo: "NPD-039-001",
    description: "Inner Race Carrier Plate",
    bomVersion: "v3.1",
    status: "Released",
    updatedBy: "Sanjay Iyer"
  },
  {
    partNo: "NPD-038-001",
    description: "Chassis Rail — LH Section",
    bomVersion: "v0.7",
    status: "Draft",
    updatedBy: "Kiran Desai"
  }
];
const customerApprovals = [
  {
    id: "CA-2041",
    client: "TVS Motor Company",
    part: "Engine Bracket — NPD-036",
    stage: "PPAP Level 3",
    submittedOn: "2026-04-14",
    status: "Pending",
    daysOpen: 6
  },
  {
    id: "CA-2040",
    client: "SKF Bearings India",
    part: "Bearing Retainer Plate — NPD-035",
    stage: "First Article Approval",
    submittedOn: "2026-04-10",
    status: "Approved",
    daysOpen: 10
  },
  {
    id: "CA-2039",
    client: "TVS Motor Company",
    part: "Rear Axle Bracket — NPD-034",
    stage: "Sample Submission",
    submittedOn: "2026-04-18",
    status: "Awaiting Samples",
    daysOpen: 2
  },
  {
    id: "CA-2038",
    client: "SKF Bearings India",
    part: "Inner Race Carrier — NPD-039",
    stage: "Production Part Approval",
    submittedOn: "2026-04-08",
    status: "Approved",
    daysOpen: 12
  }
];
function KpiCard({
  label,
  value,
  sub,
  trend,
  icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4 pb-3 px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wider", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: icon })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold kpi-value text-foreground", children: value }),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "flex items-center gap-1 mt-0.5 text-xs",
          trend === "up" ? "text-chart-5" : trend === "down" ? "text-destructive" : "text-muted-foreground"
        ),
        children: [
          trend === "up" && /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3 w-3" }),
          trend === "down" && /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-3 w-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: sub })
        ]
      }
    )
  ] }) });
}
const stageConfig = {
  Concept: { color: "text-muted-foreground", bg: "bg-muted/60", order: 1 },
  Design: { color: "text-primary", bg: "bg-primary/10", order: 2 },
  Prototype: { color: "text-accent", bg: "bg-accent/10", order: 3 },
  Validation: { color: "text-chart-4", bg: "bg-chart-4/10", order: 4 },
  Production: { color: "text-chart-5", bg: "bg-chart-5/10", order: 5 }
};
const statusConfig = {
  "On Track": "border-chart-5/50 text-chart-5 bg-chart-5/5",
  "At Risk": "border-accent/50 text-accent bg-accent/5",
  Delayed: "border-destructive/50 text-destructive bg-destructive/5",
  Completed: "border-chart-5/30 text-chart-5/70 bg-chart-5/5"
};
const bomStatusConfig = {
  Draft: "border-muted-foreground/40 text-muted-foreground",
  "Under Review": "border-accent/50 text-accent bg-accent/5",
  Released: "border-chart-5/50 text-chart-5 bg-chart-5/5"
};
const approvalStatusConfig = {
  Pending: "border-accent/50 text-accent bg-accent/5",
  Approved: "border-chart-5/50 text-chart-5 bg-chart-5/5",
  "Awaiting Samples": "border-primary/50 text-primary bg-primary/5"
};
const clientColors = {
  "TVS Motor Company": "text-chart-2",
  "SKF Bearings India": "text-chart-1"
};
const STAGES = [
  "Concept",
  "Design",
  "Prototype",
  "Validation",
  "Production"
];
function StagePipeline({ current }) {
  const idx = STAGES.indexOf(current);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: STAGES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "h-1.5 w-4 rounded-full transition-colors",
          i < idx ? "bg-chart-5/70" : i === idx ? "bg-primary" : "bg-border"
        )
      }
    ),
    i < STAGES.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-2.5 w-2.5 text-border" })
  ] }, s)) });
}
function NPDDashboard() {
  const activeProjects = npd_projects.filter(
    (p) => p.status !== "Completed"
  ).length;
  const designReviewsDue = designReviews.filter((d) => {
    const days = Math.ceil(
      (new Date(d.date).getTime() - Date.now()) / 864e5
    );
    return days >= 0 && days <= 7;
  }).length;
  const bomReleased = bomRecords.filter((b) => b.status === "Released").length;
  const approvalsPending = customerApprovals.filter(
    (a) => a.status === "Pending" || a.status === "Awaiting Samples"
  ).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", "data-ocid": "npd.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg bg-chart-4/10 border border-chart-4/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-5 w-5 text-chart-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold text-foreground leading-tight", children: "New Product Development" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Design Engineering, Prototyping & Customer Approvals · Hosur Plant" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 border border-border rounded-md px-3 py-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Updated: Today, 09:15 AM" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
        "data-ocid": "npd.kpi_row",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            KpiCard,
            {
              label: "Active Projects",
              value: activeProjects,
              sub: "+2 this quarter",
              trend: "up",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            KpiCard,
            {
              label: "Design Reviews Due",
              value: designReviewsDue,
              sub: "within 7 days",
              trend: "stable",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck2, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            KpiCard,
            {
              label: "BOM Releases",
              value: bomReleased,
              sub: `${bomRecords.filter((b) => b.status === "Draft").length} drafts pending`,
              trend: "stable",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            KpiCard,
            {
              label: "Approvals Pending",
              value: approvalsPending,
              sub: "TVS + SKF combined",
              trend: "down",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "npd.projects_section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-4 w-4 text-chart-4" }),
        "NPD Projects",
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Badge,
          {
            variant: "outline",
            className: "ml-auto text-xs border-border text-muted-foreground",
            children: [
              npd_projects.length,
              " projects"
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-ocid": "npd.projects_table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Project #" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Product Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell", children: "Client" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Stage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell", children: "Pipeline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell", children: "Due Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: npd_projects.map((p, i) => {
          const sc = stageConfig[p.stage];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              "data-ocid": `npd.project.item.${i + 1}`,
              className: "border-b border-border/50 hover:bg-muted/30 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-xs text-primary font-medium", children: p.id }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 max-w-[200px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground line-clamp-1", children: p.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
                    p.partCount,
                    " parts · ",
                    p.lead
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden md:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "text-xs font-medium",
                      clientColors[p.client] ?? "text-foreground"
                    ),
                    children: p.client.replace(" Company", "").replace(" India", "")
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: cn(
                      "text-[10px] h-5 px-1.5",
                      sc.bg,
                      sc.color,
                      "border-transparent"
                    ),
                    children: p.stage
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden lg:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StagePipeline, { current: p.stage }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground tabular-nums hidden md:table-cell", children: p.dueDate }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: cn(
                      "text-[10px] h-5 px-1.5",
                      statusConfig[p.status]
                    ),
                    children: p.status
                  }
                ) })
              ]
            },
            p.id
          );
        }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "npd.design_reviews_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck2, { className: "h-4 w-4 text-primary" }),
          "Upcoming Design Reviews",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "outline",
              className: "ml-auto text-xs border-border text-muted-foreground",
              children: [
                designReviews.length,
                " scheduled"
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-3 space-y-2", children: designReviews.map((dr, i) => {
          const days = Math.ceil(
            (new Date(dr.date).getTime() - Date.now()) / 864e5
          );
          const urgency = days <= 3 ? "border-destructive/30 bg-destructive/5" : days <= 7 ? "border-accent/30 bg-accent/5" : "border-border/60 bg-background";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `npd.review.item.${i + 1}`,
              className: cn(
                "flex gap-3 p-3 rounded-lg border transition-colors",
                urgency
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 text-center min-w-[44px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase text-muted-foreground leading-none", children: new Date(dr.date).toLocaleDateString("en-IN", {
                    month: "short"
                  }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: cn(
                        "text-lg font-bold kpi-value leading-tight",
                        days <= 3 ? "text-destructive" : days <= 7 ? "text-accent" : "text-foreground"
                      ),
                      children: new Date(dr.date).getDate()
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: days === 0 ? "Today" : days === 1 ? "Tomorrow" : `${days}d` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground line-clamp-1", children: dr.type }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground line-clamp-1 mt-0.5", children: dr.project }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-2.5 w-2.5 text-muted-foreground" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground line-clamp-1", children: dr.attendees.join(", ") })
                  ] })
                ] })
              ]
            },
            dr.id
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "npd.bom_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 text-accent" }),
          "BOM Management",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "outline",
              className: "ml-auto text-xs border-border text-muted-foreground",
              children: [
                bomRecords.length,
                " records"
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-ocid": "npd.bom_table", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Part #" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell", children: "BOM Ver." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: bomRecords.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              "data-ocid": `npd.bom.item.${i + 1}`,
              className: "border-b border-border/50 hover:bg-muted/30 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-mono text-xs text-primary font-medium", children: b.partNo }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5 max-w-[180px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground line-clamp-1", children: b.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: b.updatedBy })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs font-mono text-muted-foreground hidden md:table-cell", children: b.bomVersion }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: cn(
                      "text-[10px] h-5 px-1.5",
                      bomStatusConfig[b.status]
                    ),
                    children: b.status
                  }
                ) })
              ]
            },
            b.partNo
          )) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "npd.approvals_section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-4 w-4 text-chart-5" }),
        "Customer Approval Tracker",
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Badge,
          {
            variant: "outline",
            className: "ml-auto text-xs border-border text-muted-foreground",
            children: [
              customerApprovals.length,
              " submissions"
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-ocid": "npd.approvals_table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Ref #" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell", children: "Client" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Part / Stage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell", children: "Submitted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell", children: "Days Open" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: customerApprovals.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            "data-ocid": `npd.approval.item.${i + 1}`,
            className: "border-b border-border/50 hover:bg-muted/30 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-xs text-primary font-medium", children: a.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden md:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CircleDot,
                  {
                    className: cn(
                      "h-2.5 w-2.5 flex-shrink-0",
                      clientColors[a.client] ?? "text-muted-foreground"
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "text-xs font-medium",
                      clientColors[a.client] ?? "text-foreground"
                    ),
                    children: a.client.replace(" Company", "").replace(" India", "")
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground line-clamp-1", children: a.part }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: a.stage })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground tabular-nums hidden lg:table-cell", children: a.submittedOn }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right text-xs tabular-nums font-medium hidden md:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: cn(
                    a.daysOpen > 7 ? "text-destructive" : a.daysOpen > 4 ? "text-accent" : "text-foreground"
                  ),
                  children: [
                    a.daysOpen,
                    "d"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: cn(
                    "text-[10px] h-5 px-1.5",
                    approvalStatusConfig[a.status]
                  ),
                  children: a.status
                }
              ) })
            ]
          },
          a.id
        )) })
      ] }) }) })
    ] })
  ] });
}
export {
  NPDDashboard as default
};
