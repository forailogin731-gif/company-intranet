import { w as jsxRuntimeExports, k as Monitor, r as TriangleAlert, D as Badge, K as Separator, J as cn } from "./index-2fslUrt3.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-jLqOLDAk.js";
import { C as Clock } from "./clock-C3gewwYv.js";
import { T as TicketCheck, L as Laptop, H as HardDrive, S as Server, W as Wifi, a as Shield, P as Printer, N as Network } from "./wifi-BYW0NTSG.js";
import { A as Activity } from "./activity-BOngCUjB.js";
import { M as Mail } from "./mail-RuSS9iFt.js";
import { C as CircleX } from "./circle-x-DjXURZ_d.js";
import { C as CircleCheck } from "./circle-check-DU2tcmt8.js";
const supportTickets = [
  {
    id: "INC-2041",
    user: "Arjun Bose",
    dept: "PPC",
    issue: "ERP MES module unresponsive after login",
    priority: "P1",
    status: "In Progress",
    ageHours: 3
  },
  {
    id: "INC-2040",
    user: "Arun Selvam",
    dept: "Production",
    issue: "Barcode scanner not reading QR on WO printout",
    priority: "P2",
    status: "Open",
    ageHours: 6
  },
  {
    id: "INC-2039",
    user: "Lakshmi Priya",
    dept: "Quality",
    issue: "CMM data export to ERP failing intermittently",
    priority: "P1",
    status: "In Progress",
    ageHours: 8
  },
  {
    id: "INC-2038",
    user: "Ganesh Babu",
    dept: "Stores",
    issue: "Tally inventory sync not reflecting today's GRNs",
    priority: "P2",
    status: "Open",
    ageHours: 11
  },
  {
    id: "INC-2037",
    user: "Deepa Nair",
    dept: "HR",
    issue: "Email attachment size limit too low — needs increase",
    priority: "P3",
    status: "Open",
    ageHours: 24
  },
  {
    id: "INC-2036",
    user: "Ravi Narayanan",
    dept: "RM-Purchase",
    issue: "Vendor portal login credentials expired",
    priority: "P2",
    status: "Resolved",
    ageHours: 18
  },
  {
    id: "INC-2035",
    user: "Suresh Menon",
    dept: "Accounts",
    issue: "Tally GST report layout broken after update",
    priority: "P2",
    status: "Resolved",
    ageHours: 30
  },
  {
    id: "INC-2034",
    user: "Kavitha Subramanian",
    dept: "Quality",
    issue: "SPC charting software license renewal pending",
    priority: "P3",
    status: "Resolved",
    ageHours: 36
  }
];
const systemStatuses = [
  {
    name: "ERP (Tally + MES)",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { className: "h-4 w-4" }),
    status: "degraded",
    lastChecked: "2 min ago",
    detail: "MES module slow — investigation ongoing"
  },
  {
    name: "Email Server",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
    status: "operational",
    lastChecked: "1 min ago",
    detail: "All services nominal"
  },
  {
    name: "Network / LAN",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "h-4 w-4" }),
    status: "operational",
    lastChecked: "30 sec ago",
    detail: "Core switches at 38% utilization"
  },
  {
    name: "File Servers",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HardDrive, { className: "h-4 w-4" }),
    status: "operational",
    lastChecked: "1 min ago",
    detail: "Storage at 64% — healthy"
  },
  {
    name: "CCTV / Security",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4" }),
    status: "operational",
    lastChecked: "5 min ago",
    detail: "32 cameras active"
  },
  {
    name: "Shared Printers",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "h-4 w-4" }),
    status: "degraded",
    lastChecked: "8 min ago",
    detail: "Shop floor Printer 3 offline"
  },
  {
    name: "Internet Gateway",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Network, { className: "h-4 w-4" }),
    status: "operational",
    lastChecked: "1 min ago",
    detail: "100 Mbps link — 22% utilization"
  },
  {
    name: "ERP Backup",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4" }),
    status: "operational",
    lastChecked: "6 hrs ago",
    detail: "Last backup completed successfully"
  }
];
const assets = [
  {
    id: "AST-1021",
    name: "Dell OptiPlex 7090",
    type: "Desktop",
    assignedTo: "Rajesh Kumar",
    dept: "Production",
    purchaseDate: "2022-03-10",
    warrantyUntil: "2025-03-10"
  },
  {
    id: "AST-1022",
    name: "HP LaserJet Pro M428",
    type: "Printer",
    assignedTo: "Shared — Admin Block",
    dept: "Admin",
    purchaseDate: "2023-01-15",
    warrantyUntil: "2026-01-15"
  },
  {
    id: "AST-1023",
    name: "Cisco Catalyst 2960 Switch",
    type: "Network Switch",
    assignedTo: "IT Infrastructure",
    dept: "IT",
    purchaseDate: "2021-11-20",
    warrantyUntil: "2026-11-20"
  },
  {
    id: "AST-1024",
    name: "Lenovo ThinkPad E15",
    type: "Laptop",
    assignedTo: "Vikram Pillai",
    dept: "IT",
    purchaseDate: "2023-06-01",
    warrantyUntil: "2026-06-01"
  },
  {
    id: "AST-1025",
    name: "Dell PowerEdge R740 Server",
    type: "Server",
    assignedTo: "ERP / Data Center",
    dept: "IT",
    purchaseDate: "2020-08-12",
    warrantyUntil: "2025-08-12"
  },
  {
    id: "AST-1026",
    name: "HP LaserJet M404n",
    type: "Printer",
    assignedTo: "Shop Floor — Line 1",
    dept: "Production",
    purchaseDate: "2022-07-05",
    warrantyUntil: "2024-07-05"
  },
  {
    id: "AST-1027",
    name: "Zebra ZT230 Barcode Printer",
    type: "Label Printer",
    assignedTo: "Stores Dispatch",
    dept: "Stores",
    purchaseDate: "2023-03-18",
    warrantyUntil: "2026-03-18"
  },
  {
    id: "AST-1028",
    name: "Dell OptiPlex 5090",
    type: "Desktop",
    assignedTo: "Kavitha Subramanian",
    dept: "Quality",
    purchaseDate: "2022-09-22",
    warrantyUntil: "2025-09-22"
  }
];
function KpiCard({
  label,
  value,
  sub,
  icon,
  accent = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: cn(
        "shadow-card border-border",
        accent && "border-accent/30 bg-accent/5"
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4 pb-3 px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wider", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn("text-muted-foreground", accent && "text-accent"),
              children: icon
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: cn(
              "text-2xl font-bold kpi-value",
              accent ? "text-accent" : "text-foreground"
            ),
            children: value
          }
        ),
        sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: sub })
      ] })
    }
  );
}
const priorityConfig = {
  P1: {
    label: "P1",
    class: "border-destructive/60 text-destructive bg-destructive/5"
  },
  P2: { label: "P2", class: "border-accent/60 text-accent bg-accent/5" },
  P3: { label: "P3", class: "border-border text-muted-foreground" }
};
const statusConfig = {
  Open: {
    class: "border-border text-muted-foreground",
    dot: "bg-muted-foreground"
  },
  "In Progress": {
    class: "border-primary/60 text-primary bg-primary/5",
    dot: "bg-primary"
  },
  Resolved: {
    class: "border-chart-5/60 text-chart-5 bg-chart-5/5",
    dot: "bg-chart-5"
  }
};
const systemStatusConfig = {
  operational: {
    dot: "bg-chart-5",
    label: "Operational",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-chart-5" })
  },
  degraded: {
    dot: "bg-accent animate-pulse",
    label: "Degraded",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5 text-accent" })
  },
  down: {
    dot: "bg-destructive animate-pulse",
    label: "Down",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-3.5 w-3.5 text-destructive" })
  }
};
function warrantyBadge(until) {
  const days = Math.ceil((new Date(until).getTime() - Date.now()) / 864e5);
  if (days < 0)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Badge,
      {
        variant: "outline",
        className: "text-[10px] h-4 px-1.5 border-destructive/50 text-destructive",
        children: "Expired"
      }
    );
  if (days < 180)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Badge,
      {
        variant: "outline",
        className: "text-[10px] h-4 px-1.5 border-accent/50 text-accent",
        children: "Expiring Soon"
      }
    );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Badge,
    {
      variant: "outline",
      className: "text-[10px] h-4 px-1.5 border-chart-5/50 text-chart-5",
      children: "Active"
    }
  );
}
function ITDashboard() {
  const openTickets = supportTickets.filter(
    (t) => t.status !== "Resolved"
  ).length;
  const criticalIssues = supportTickets.filter(
    (t) => t.priority === "P1" && t.status !== "Resolved"
  ).length;
  const systemsDown = systemStatuses.filter(
    (s) => s.status !== "operational"
  ).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", "data-ocid": "it.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "h-5 w-5 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold text-foreground leading-tight", children: "IT Operations Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Network, ERP, Helpdesk & Asset Management · Hosur Plant" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 border border-border rounded-md px-3 py-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Last refreshed: Today, 09:42 AM" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
        "data-ocid": "it.kpi_row",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            KpiCard,
            {
              "data-ocid": "it.kpi.1",
              label: "Open Tickets",
              value: openTickets,
              sub: "3 P1, 3 P2 unresolved",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TicketCheck, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            KpiCard,
            {
              "data-ocid": "it.kpi.2",
              label: "Critical Issues (P1)",
              value: criticalIssues,
              sub: "ERP + CMM integration",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
              accent: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            KpiCard,
            {
              "data-ocid": "it.kpi.3",
              label: "System Uptime",
              value: "99.7%",
              sub: "30-day rolling average",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            KpiCard,
            {
              "data-ocid": "it.kpi.4",
              label: "Assets Tracked",
              value: assets.length,
              sub: `${assets.filter((a) => new Date(a.warrantyUntil) < /* @__PURE__ */ new Date()).length} warranty expired`,
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Laptop, { className: "h-4 w-4" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "xl:col-span-2 shadow-card",
          "data-ocid": "it.tickets_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TicketCheck, { className: "h-4 w-4 text-primary" }),
              "Support Tickets",
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "outline",
                  className: "ml-auto text-xs border-border text-muted-foreground",
                  children: [
                    supportTickets.length,
                    " total"
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-ocid": "it.tickets_table", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Ticket #" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "User / Dept" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell", children: "Issue" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Priority" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Age" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: supportTickets.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  "data-ocid": `it.ticket.item.${i + 1}`,
                  className: "border-b border-border/50 hover:bg-muted/30 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-mono text-xs text-primary font-medium", children: t.id }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-xs truncate max-w-[120px]", children: t.user }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: t.dept })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 hidden md:table-cell max-w-[220px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/80 line-clamp-1", children: t.issue }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: cn(
                          "text-[10px] h-5 px-1.5 font-semibold",
                          priorityConfig[t.priority].class
                        ),
                        children: t.priority
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: cn(
                            "h-1.5 w-1.5 rounded-full flex-shrink-0",
                            statusConfig[t.status].dot
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: cn(
                            "text-xs font-medium",
                            statusConfig[t.status].class.includes("text-") ? statusConfig[t.status].class.split(" ").find((c) => c.startsWith("text-")) : "text-foreground"
                          ),
                          children: t.status
                        }
                      )
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-right text-xs text-muted-foreground tabular-nums", children: t.ageHours < 24 ? `${t.ageHours}h` : `${Math.floor(t.ageHours / 24)}d ${t.ageHours % 24}h` })
                  ]
                },
                t.id
              )) })
            ] }) }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "it.system_status_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4 text-chart-5" }),
          "System Status",
          systemsDown > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "outline",
              className: "ml-auto text-[10px] h-5 px-1.5 border-accent/50 text-accent",
              children: [
                systemsDown,
                " degraded"
              ]
            }
          ),
          systemsDown === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "ml-auto text-[10px] h-5 px-1.5 border-chart-5/50 text-chart-5",
              children: "All clear"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-3 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", "data-ocid": "it.system_status_list", children: systemStatuses.map((sys, i) => {
          const cfg = systemStatusConfig[sys.status];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `it.system.item.${i + 1}`,
              className: cn(
                "flex items-center gap-3 p-2.5 rounded-lg border transition-colors",
                sys.status === "operational" ? "border-border/60 bg-background" : sys.status === "degraded" ? "border-accent/25 bg-accent/5" : "border-destructive/25 bg-destructive/5"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: cn(
                      "h-2 w-2 rounded-full flex-shrink-0",
                      cfg.dot
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground flex-shrink-0", children: sys.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground truncate", children: sys.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: sys.detail })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[10px] text-muted-foreground flex-shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-2.5 w-2.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: sys.lastChecked })
                ] })
              ]
            },
            sys.name
          );
        }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "it.assets_section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(HardDrive, { className: "h-4 w-4 text-accent" }),
        "Asset Inventory",
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Badge,
          {
            variant: "outline",
            className: "ml-auto text-xs border-border text-muted-foreground",
            children: [
              assets.length,
              " records"
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-ocid": "it.assets_table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Asset ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell", children: "Assigned To" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell", children: "Dept" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell", children: "Purchased" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Warranty" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: assets.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            "data-ocid": `it.asset.item.${i + 1}`,
            className: "border-b border-border/50 hover:bg-muted/30 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-mono text-xs text-primary font-medium", children: a.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs font-medium text-foreground max-w-[180px] truncate", children: a.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs text-muted-foreground", children: a.type }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs text-foreground/80 hidden md:table-cell", children: a.assignedTo }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs text-muted-foreground hidden lg:table-cell", children: a.dept }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs text-muted-foreground tabular-nums hidden lg:table-cell", children: a.purchaseDate }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
                warrantyBadge(a.warrantyUntil),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground tabular-nums", children: a.warrantyUntil })
              ] }) })
            ]
          },
          a.id
        )) })
      ] }) }) })
    ] })
  ] });
}
export {
  ITDashboard as default
};
