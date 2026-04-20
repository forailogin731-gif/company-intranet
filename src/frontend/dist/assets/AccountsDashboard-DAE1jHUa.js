import { v as reactExports, w as jsxRuntimeExports, r as TriangleAlert, D as Badge, Q as Button, T as TrendingUp } from "./index-2fslUrt3.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-jLqOLDAk.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CGcDfGlK.js";
import { B as BadgeIndianRupee } from "./badge-indian-rupee-KTNmhQWE.js";
import { a as CircleArrowUp, C as CircleArrowDown } from "./circle-arrow-up-bC9CfESX.js";
import { W as Wallet } from "./wallet-DeQViMNv.js";
import { F as FileText } from "./file-text-_pXBa694.js";
import { C as Clock } from "./clock-C3gewwYv.js";
import { C as CircleCheck } from "./circle-check-DU2tcmt8.js";
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
  const trendColor = trend === "up" ? "text-chart-5" : trend === "down" ? "text-destructive" : trend === "alert" ? "text-accent" : "text-muted-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: `shadow-card border-border ${accent ? "border-l-4 border-l-accent" : ""}`,
      "data-ocid": "accounts.kpi.card",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-5 pb-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold kpi-value text-foreground", children: value }),
          sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: sub }),
          trend && trendLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1.5", children: [
            trend === "up" && /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3 w-3 text-chart-5" }),
            trend === "down" && /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-3 w-3 text-destructive" }),
            trend === "alert" && /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3 w-3 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-medium ${trendColor}`, children: trendLabel })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-chart-2/10 p-2.5 text-chart-2 shrink-0", children: icon })
      ] }) })
    }
  );
}
const receivables = [
  {
    id: "ar-001",
    client: "TVS Motor Company",
    invoice: "INV-2026-0421",
    amount: "₹4,82,500",
    amountRaw: 482500,
    dueDate: "18 Apr 2026",
    daysOverdue: 2,
    status: "Overdue"
  },
  {
    id: "ar-002",
    client: "SKF Bearings India",
    invoice: "INV-2026-0418",
    amount: "₹6,15,000",
    amountRaw: 615e3,
    dueDate: "25 Apr 2026",
    daysOverdue: 0,
    status: "Current"
  },
  {
    id: "ar-003",
    client: "TVS Motor Company",
    invoice: "INV-2026-0412",
    amount: "₹3,20,000",
    amountRaw: 32e4,
    dueDate: "12 Apr 2026",
    daysOverdue: 8,
    status: "Overdue"
  },
  {
    id: "ar-004",
    client: "SKF Bearings India",
    invoice: "INV-2026-0408",
    amount: "₹2,75,000",
    amountRaw: 275e3,
    dueDate: "30 Apr 2026",
    daysOverdue: 0,
    status: "Current"
  },
  {
    id: "ar-005",
    client: "Sundram Fasteners",
    invoice: "INV-2026-0405",
    amount: "₹1,84,000",
    amountRaw: 184e3,
    dueDate: "05 Apr 2026",
    daysOverdue: 15,
    status: "Disputed"
  },
  {
    id: "ar-006",
    client: "TVS Motor Company",
    invoice: "INV-2026-0398",
    amount: "₹5,40,000",
    amountRaw: 54e4,
    dueDate: "28 Mar 2026",
    daysOverdue: 23,
    status: "Overdue"
  },
  {
    id: "ar-007",
    client: "Bosch India",
    invoice: "INV-2026-0395",
    amount: "₹2,20,000",
    amountRaw: 22e4,
    dueDate: "20 May 2026",
    daysOverdue: 0,
    status: "Current"
  },
  {
    id: "ar-008",
    client: "SKF Bearings India",
    invoice: "INV-2026-0388",
    amount: "₹3,10,000",
    amountRaw: 31e4,
    dueDate: "01 Apr 2026",
    daysOverdue: 19,
    status: "Paid"
  }
];
const payables = [
  {
    id: "ap-001",
    vendor: "JSW Steel Ltd",
    amount: "₹14,20,000",
    dueDate: "22 Apr 2026",
    category: "Raw Material",
    status: "Due Soon"
  },
  {
    id: "ap-002",
    vendor: "Castrol India",
    amount: "₹68,000",
    dueDate: "25 Apr 2026",
    category: "Consumables",
    status: "Scheduled"
  },
  {
    id: "ap-003",
    vendor: "Aida Engineering",
    amount: "₹3,40,000",
    dueDate: "15 Apr 2026",
    category: "Capex EMI",
    status: "Overdue"
  },
  {
    id: "ap-004",
    vendor: "TATA Steel",
    amount: "₹9,80,000",
    dueDate: "30 Apr 2026",
    category: "Raw Material",
    status: "Scheduled"
  },
  {
    id: "ap-005",
    vendor: "Bharat Tools Pvt",
    amount: "₹1,12,000",
    dueDate: "28 Apr 2026",
    category: "Tooling",
    status: "Scheduled"
  }
];
const expenseApprovals = [
  {
    id: "exp-001",
    submittedBy: "Mohan Krishnan",
    dept: "Maintenance",
    description: "EDM Servo Drive Replacement Parts",
    amount: "₹84,500",
    submittedOn: "20 Apr 2026"
  },
  {
    id: "exp-002",
    submittedBy: "Balamurugan S.",
    dept: "Tool-Room",
    description: "TiN PVD Coating — Batch 4 Punches",
    amount: "₹32,000",
    submittedOn: "19 Apr 2026"
  },
  {
    id: "exp-003",
    submittedBy: "Deepa Nair",
    dept: "HR",
    description: "Safety Awareness Week Materials & Banners",
    amount: "₹18,200",
    submittedOn: "18 Apr 2026"
  },
  {
    id: "exp-004",
    submittedBy: "Vikram Pillai",
    dept: "IT",
    description: "Annual Antivirus License Renewal (30 nodes)",
    amount: "₹42,000",
    submittedOn: "17 Apr 2026"
  },
  {
    id: "exp-005",
    submittedBy: "Sanjay Iyer",
    dept: "NPD",
    description: "Prototype Material — SKF-BR-2291-A Trial",
    amount: "₹26,800",
    submittedOn: "16 Apr 2026"
  }
];
const statusColors = {
  Current: "bg-chart-5/15 text-chart-5 border-chart-5/30",
  Overdue: "bg-destructive/15 text-destructive border-destructive/30",
  Paid: "bg-muted text-muted-foreground border-border",
  Disputed: "bg-accent/15 text-accent border-accent/30"
};
const payableStatusColors = {
  "Due Soon": "bg-accent/15 text-accent border-accent/30",
  Overdue: "bg-destructive/15 text-destructive border-destructive/30",
  Scheduled: "bg-primary/15 text-primary border-primary/30"
};
function AccountsDashboard() {
  const [approvedExpenses, setApprovedExpenses] = reactExports.useState(
    /* @__PURE__ */ new Set()
  );
  const handleApproveExpense = (id) => {
    setApprovedExpenses((prev) => /* @__PURE__ */ new Set([...prev, id]));
  };
  const overdueCount = receivables.filter((r) => r.status === "Overdue").length;
  const totalReceivables = receivables.filter((r) => r.status !== "Paid").reduce((s, r) => s + r.amountRaw, 0);
  const totalPayables = payables.reduce(
    (s, p) => s + Number.parseInt(p.amount.replace(/[₹,]/g, ""), 10),
    0
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "p-6 space-y-6 max-w-[1400px] mx-auto",
      "data-ocid": "accounts.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pb-2 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-chart-2/15 p-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeIndianRupee, { className: "h-6 w-6 text-chart-2" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground", children: "Accounts Dashboard" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Billing, receivables & payables — Nexus Manufacturing" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "As of" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "20 April 2026" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
            "data-ocid": "accounts.kpi.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                KPICard,
                {
                  label: "Receivables",
                  value: `₹${(totalReceivables / 1e5).toFixed(1)}L`,
                  sub: "Outstanding from clients",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleArrowUp, { className: "h-5 w-5" }),
                  trend: "up",
                  trendLabel: "+8% vs last month",
                  accent: true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                KPICard,
                {
                  label: "Payables",
                  value: `₹${(totalPayables / 1e5).toFixed(1)}L`,
                  sub: "Due to vendors",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleArrowDown, { className: "h-5 w-5" }),
                  trend: "stable",
                  trendLabel: "Within credit limits"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                KPICard,
                {
                  label: "Overdue Invoices",
                  value: String(overdueCount),
                  sub: "Require follow-up",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5" }),
                  trend: "alert",
                  trendLabel: `${overdueCount} client invoices`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                KPICard,
                {
                  label: "Cash on Hand",
                  value: "₹38.4L",
                  sub: "Current balance",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-5 w-5" }),
                  trend: "stable",
                  trendLabel: "Sufficient liquidity"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: "shadow-card border-border",
            "data-ocid": "accounts.receivables.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 text-chart-2" }),
                  "Receivables Aging — Client Invoice Tracker"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: "outline",
                    className: "text-xs border-destructive/40 text-destructive",
                    children: [
                      overdueCount,
                      " Overdue"
                    ]
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "border-border hover:bg-transparent", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Client" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Invoice #" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-right", children: "Amount" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Due Date" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-center", children: "Days Overdue" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Status" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: receivables.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  TableRow,
                  {
                    className: "border-border text-sm",
                    "data-ocid": `accounts.receivable.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5 font-medium", children: row.client }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5 text-xs font-mono text-muted-foreground", children: row.invoice }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5 text-right tabular-nums font-semibold", children: row.amount }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5 text-xs text-muted-foreground", children: row.dueDate }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5 text-center tabular-nums", children: row.daysOverdue > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: `text-xs font-bold ${row.daysOverdue > 14 ? "text-destructive" : "text-accent"}`,
                          children: [
                            "+",
                            row.daysOverdue,
                            "d"
                          ]
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "—" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${statusColors[row.status]}`,
                          children: row.status
                        }
                      ) })
                    ]
                  },
                  row.id
                )) })
              ] }) }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "shadow-card border-border",
              "data-ocid": "accounts.payables.section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleArrowDown, { className: "h-4 w-4 text-primary" }),
                  "Payables Summary — Vendor Dues"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "border-border hover:bg-transparent", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Vendor" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Category" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-right", children: "Amount" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Due Date" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Status" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: payables.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    TableRow,
                    {
                      className: "border-border text-sm",
                      "data-ocid": `accounts.payable.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5 font-medium", children: row.vendor }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5 text-xs text-muted-foreground", children: row.category }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5 text-right tabular-nums font-semibold", children: row.amount }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5 text-xs text-muted-foreground", children: row.dueDate }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${payableStatusColors[row.status]}`,
                            children: row.status
                          }
                        ) })
                      ]
                    },
                    row.id
                  )) })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "shadow-card border-border",
              "data-ocid": "accounts.expenses.section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-accent" }),
                    "Expense Approvals Pending"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                    expenseApprovals.length - approvedExpenses.size,
                    " pending"
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: expenseApprovals.map((exp, i) => {
                  const isApproved = approvedExpenses.has(exp.id);
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-start gap-3 px-4 py-3",
                      "data-ocid": `accounts.expense.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `rounded-lg p-2 mt-0.5 shrink-0 ${isApproved ? "bg-chart-5/10" : "bg-muted"}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              FileText,
                              {
                                className: `h-4 w-4 ${isApproved ? "text-chart-5" : "text-muted-foreground"}`
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: exp.submittedBy }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                              "(",
                              exp.dept,
                              ")"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-xs text-muted-foreground mt-0.5 truncate",
                              title: exp.description,
                              children: exp.description
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                            "Submitted: ",
                            exp.submittedOn
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold tabular-nums text-foreground", children: exp.amount }),
                          isApproved ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[11px] text-chart-5 font-semibold mt-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3" }),
                            " Approved"
                          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              size: "sm",
                              variant: "outline",
                              className: "mt-1.5 h-6 text-xs px-2.5 border-primary/40 text-primary hover:bg-primary/10",
                              onClick: () => handleApproveExpense(exp.id),
                              "data-ocid": `accounts.expense.approve.${i + 1}`,
                              children: "Approve"
                            }
                          )
                        ] })
                      ]
                    },
                    exp.id
                  );
                }) }) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  AccountsDashboard as default
};
