import { v as reactExports, w as jsxRuntimeExports, s as Users, a as BookOpen, Q as Button, T as TrendingUp } from "./index-2fslUrt3.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-jLqOLDAk.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CGcDfGlK.js";
import { U as UserCheck, B as Briefcase } from "./user-check-CCf0pwAc.js";
import { C as Clock } from "./clock-C3gewwYv.js";
import { C as CalendarCheck2 } from "./calendar-check-2-BBtZOhdp.js";
import { C as CircleCheck } from "./circle-check-DU2tcmt8.js";
import { C as CircleX } from "./circle-x-DjXURZ_d.js";
import { T as TrendingDown } from "./trending-down-BPGqoM6t.js";
function KPICard({
  label,
  value,
  sub,
  icon,
  trend,
  trendLabel,
  accent
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: `shadow-card border-border ${accent ? "border-l-4 border-l-accent" : ""}`,
      "data-ocid": "hr.kpi.card",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-5 pb-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold kpi-value text-foreground", children: value }),
          sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: sub }),
          trend && trendLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1.5", children: [
            trend === "up" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3 w-3 text-chart-5" }) : trend === "down" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-3 w-3 text-destructive" }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-xs font-medium ${trend === "up" ? "text-chart-5" : trend === "down" ? "text-destructive" : "text-muted-foreground"}`,
                children: trendLabel
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-primary/10 p-2.5 text-primary shrink-0", children: icon })
      ] }) })
    }
  );
}
const attendanceData = [
  { dept: "Production", total: 64, present: 60, absent: 2, onLeave: 2 },
  { dept: "Maintenance", total: 18, present: 16, absent: 1, onLeave: 1 },
  { dept: "Quality", total: 15, present: 14, absent: 0, onLeave: 1 },
  { dept: "Tool-Room", total: 14, present: 13, absent: 1, onLeave: 0 },
  { dept: "PPC", total: 10, present: 9, absent: 0, onLeave: 1 },
  { dept: "NPD", total: 12, present: 11, absent: 0, onLeave: 1 },
  { dept: "HR", total: 9, present: 8, absent: 0, onLeave: 1 },
  { dept: "IT", total: 7, present: 7, absent: 0, onLeave: 0 },
  { dept: "Accounts", total: 8, present: 7, absent: 1, onLeave: 0 },
  { dept: "Finance", total: 6, present: 6, absent: 0, onLeave: 0 },
  { dept: "Purchase", total: 8, present: 7, absent: 0, onLeave: 1 },
  { dept: "RM-Purchase", total: 6, present: 5, absent: 1, onLeave: 0 },
  { dept: "Stores", total: 11, present: 10, absent: 0, onLeave: 1 }
];
const initialLeaveRequests = [
  {
    id: "lr-001",
    employee: "Arun Selvam",
    dept: "Production",
    leaveType: "Casual Leave",
    from: "25 Apr",
    to: "26 Apr",
    status: "Pending"
  },
  {
    id: "lr-002",
    employee: "Lakshmi Priya",
    dept: "Quality",
    leaveType: "Medical Leave",
    from: "22 Apr",
    to: "24 Apr",
    status: "Approved"
  },
  {
    id: "lr-003",
    employee: "Ganesh Babu",
    dept: "Stores",
    leaveType: "Earned Leave",
    from: "28 Apr",
    to: "02 May",
    status: "Pending"
  },
  {
    id: "lr-004",
    employee: "Vikram Pillai",
    dept: "IT",
    leaveType: "Casual Leave",
    from: "21 Apr",
    to: "21 Apr",
    status: "Approved"
  },
  {
    id: "lr-005",
    employee: "Ravi Narayanan",
    dept: "RM-Purchase",
    leaveType: "Medical Leave",
    from: "23 Apr",
    to: "25 Apr",
    status: "Rejected"
  },
  {
    id: "lr-006",
    employee: "Mohan Krishnan",
    dept: "Maintenance",
    leaveType: "Earned Leave",
    from: "01 May",
    to: "03 May",
    status: "Pending"
  }
];
const trainingSessions = [
  {
    id: "tr-001",
    topic: "CNC Programming — Batch 3 (Skill India)",
    trainer: "Ext. Faculty",
    date: "05 May 2026",
    dept: "Tool-Room / Production",
    seats: "12 / 20"
  },
  {
    id: "tr-002",
    topic: "IATF 16949 Internal Auditor Refresher",
    trainer: "Kavitha Subramanian",
    date: "28 Apr 2026",
    dept: "Quality / NPD",
    seats: "8 / 15"
  },
  {
    id: "tr-003",
    topic: "Press Safety & Lockout-Tagout (LOTO)",
    trainer: "Safety Officer",
    date: "22 Apr 2026",
    dept: "All Dept",
    seats: "40 / 50"
  },
  {
    id: "tr-004",
    topic: "5S Workplace Organisation & Audit",
    trainer: "Deepa Nair",
    date: "30 Apr 2026",
    dept: "Production / Stores",
    seats: "20 / 30"
  },
  {
    id: "tr-005",
    topic: "Lean Manufacturing — Value Stream Mapping",
    trainer: "Ext. Consultant",
    date: "12 May 2026",
    dept: "PPC / Production",
    seats: "5 / 15"
  }
];
const openPositions = [
  {
    id: "pos-001",
    role: "Press Operator (Sr.)",
    dept: "Production",
    openings: 3,
    stage: "Screening",
    candidates: 11
  },
  {
    id: "pos-002",
    role: "Quality Engineer",
    dept: "Quality",
    openings: 1,
    stage: "Interview",
    candidates: 4
  },
  {
    id: "pos-003",
    role: "Die Maker — Apprentice",
    dept: "Tool-Room",
    openings: 2,
    stage: "Offer",
    candidates: 2
  },
  {
    id: "pos-004",
    role: "PPC Analyst",
    dept: "PPC",
    openings: 1,
    stage: "Screening",
    candidates: 7
  },
  {
    id: "pos-005",
    role: "ERP Support Engineer",
    dept: "IT",
    openings: 1,
    stage: "Final Interview",
    candidates: 3
  }
];
const statusColors = {
  Pending: "bg-accent/15 text-accent border-accent/30",
  Approved: "bg-chart-5/15 text-chart-5 border-chart-5/30",
  Rejected: "bg-destructive/15 text-destructive border-destructive/30"
};
const stageColors = {
  Screening: "bg-muted text-muted-foreground",
  Interview: "bg-primary/15 text-primary",
  "Final Interview": "bg-accent/15 text-accent",
  Offer: "bg-chart-5/15 text-chart-5"
};
function HRDashboard() {
  const [leaveRequests, setLeaveRequests] = reactExports.useState(initialLeaveRequests);
  const totalHeadcount = attendanceData.reduce((s, d) => s + d.total, 0);
  const totalPresent = attendanceData.reduce((s, d) => s + d.present, 0);
  const presentPct = Math.round(totalPresent / totalHeadcount * 100);
  const pendingLeaves = leaveRequests.filter(
    (r) => r.status === "Pending"
  ).length;
  const handleApprove = (id) => {
    setLeaveRequests(
      (prev) => prev.map((r) => r.id === id ? { ...r, status: "Approved" } : r)
    );
  };
  const handleReject = (id) => {
    setLeaveRequests(
      (prev) => prev.map((r) => r.id === id ? { ...r, status: "Rejected" } : r)
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6 max-w-[1400px] mx-auto", "data-ocid": "hr.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pb-2 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-chart-5/15 p-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-6 w-6 text-chart-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground", children: "HR Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Workforce management — Nexus Manufacturing, Hosur" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "20 April 2026" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
        "data-ocid": "hr.kpi.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            KPICard,
            {
              label: "Total Headcount",
              value: totalHeadcount,
              sub: "Active employees",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }),
              trend: "up",
              trendLabel: "+4 this month",
              accent: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            KPICard,
            {
              label: "Present Today",
              value: `${presentPct}%`,
              sub: `${totalPresent} of ${totalHeadcount}`,
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "h-5 w-5" }),
              trend: "stable",
              trendLabel: "On target"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            KPICard,
            {
              label: "Leave Requests",
              value: pendingLeaves,
              sub: "Pending approval",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5" }),
              trend: pendingLeaves > 3 ? "up" : "stable",
              trendLabel: `${pendingLeaves} action needed`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            KPICard,
            {
              label: "Trainings Scheduled",
              value: trainingSessions.length,
              sub: "In next 30 days",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5" }),
              trend: "up",
              trendLabel: "+2 new sessions"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "shadow-card border-border",
          "data-ocid": "hr.attendance.section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "h-4 w-4 text-chart-5" }),
              "Department-wise Attendance"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-auto max-h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "border-border hover:bg-transparent", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Department" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-right", children: "Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-right", children: "Present" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-right", children: "Absent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-right", children: "On Leave" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-right", children: "%" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: attendanceData.map((row, i) => {
                const pct = Math.round(row.present / row.total * 100);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  TableRow,
                  {
                    className: "border-border text-sm",
                    "data-ocid": `hr.attendance.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium py-2", children: row.dept }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right py-2 tabular-nums", children: row.total }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right py-2 tabular-nums text-chart-5", children: row.present }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right py-2 tabular-nums text-destructive", children: row.absent }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right py-2 tabular-nums text-accent", children: row.onLeave }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: `text-xs font-semibold ${pct >= 95 ? "text-chart-5" : pct >= 85 ? "text-accent" : "text-destructive"}`,
                          children: [
                            pct,
                            "%"
                          ]
                        }
                      ) })
                    ]
                  },
                  row.dept
                );
              }) })
            ] }) }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "shadow-card border-border",
          "data-ocid": "hr.leave.section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck2, { className: "h-4 w-4 text-accent" }),
              "Leave Requests"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-auto max-h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "border-border hover:bg-transparent", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Employee" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "From–To" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-right", children: "Action" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: leaveRequests.map((req, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TableRow,
                {
                  className: "border-border text-sm",
                  "data-ocid": `hr.leave.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "py-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground leading-tight", children: req.employee }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: req.dept })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2 text-xs text-muted-foreground", children: req.leaveType }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "py-2 text-xs tabular-nums", children: [
                      req.from,
                      " – ",
                      req.to
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${statusColors[req.status]}`,
                        children: req.status
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2 text-right", children: req.status === "Pending" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          variant: "ghost",
                          className: "h-6 w-6 p-0 text-chart-5 hover:text-chart-5 hover:bg-chart-5/10",
                          onClick: () => handleApprove(req.id),
                          "aria-label": "Approve",
                          "data-ocid": `hr.leave.approve.${i + 1}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          variant: "ghost",
                          className: "h-6 w-6 p-0 text-destructive hover:text-destructive hover:bg-destructive/10",
                          onClick: () => handleReject(req.id),
                          "aria-label": "Reject",
                          "data-ocid": `hr.leave.reject.${i + 1}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4" })
                        }
                      )
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "—" }) })
                  ]
                },
                req.id
              )) })
            ] }) }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "shadow-card border-border",
          "data-ocid": "hr.training.section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4 text-primary" }),
              "Training Calendar — Upcoming Sessions"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "border-border hover:bg-transparent", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Topic" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Trainer" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Dept" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-right", children: "Seats" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: trainingSessions.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TableRow,
                {
                  className: "border-border text-sm",
                  "data-ocid": `hr.training.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TableCell,
                      {
                        className: "py-2.5 font-medium max-w-[180px] truncate",
                        title: s.topic,
                        children: s.topic
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5 text-xs text-muted-foreground", children: s.trainer }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5 text-xs tabular-nums text-accent font-medium", children: s.date }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5 text-xs text-muted-foreground", children: s.dept }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5 text-xs text-right tabular-nums", children: s.seats })
                  ]
                },
                s.id
              )) })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "shadow-card border-border",
          "data-ocid": "hr.recruitment.section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4 text-accent" }),
                "Recruitment Tracker"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                openPositions.length,
                " open positions"
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "border-border hover:bg-transparent", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Role" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Dept" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-center", children: "Openings" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Stage" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-right", children: "Candidates" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: openPositions.map((pos, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TableRow,
                {
                  className: "border-border text-sm",
                  "data-ocid": `hr.recruitment.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5 font-medium", children: pos.role }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5 text-xs text-muted-foreground", children: pos.dept }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5 text-center tabular-nums font-semibold text-primary", children: pos.openings }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${stageColors[pos.stage] ?? "bg-muted text-muted-foreground"}`,
                        children: pos.stage
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5 text-right tabular-nums text-muted-foreground", children: pos.candidates })
                  ]
                },
                pos.id
              )) })
            ] }) })
          ]
        }
      )
    ] })
  ] });
}
export {
  HRDashboard as default
};
