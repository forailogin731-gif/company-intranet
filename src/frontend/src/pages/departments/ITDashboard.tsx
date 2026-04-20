import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock,
  HardDrive,
  Laptop,
  Mail,
  Monitor,
  Network,
  Printer,
  Server,
  Shield,
  TicketCheck,
  TrendingDown,
  Wifi,
  XCircle,
} from "lucide-react";

// ── IT-specific mock data ─────────────────────────────────────────────────────

interface SupportTicket {
  id: string;
  user: string;
  dept: string;
  issue: string;
  priority: "P1" | "P2" | "P3";
  status: "Open" | "In Progress" | "Resolved";
  ageHours: number;
}

interface SystemStatus {
  name: string;
  icon: React.ReactNode;
  status: "operational" | "degraded" | "down";
  lastChecked: string;
  detail: string;
}

interface AssetRecord {
  id: string;
  name: string;
  type: string;
  assignedTo: string;
  dept: string;
  purchaseDate: string;
  warrantyUntil: string;
}

const supportTickets: SupportTicket[] = [
  {
    id: "INC-2041",
    user: "Arjun Bose",
    dept: "PPC",
    issue: "ERP MES module unresponsive after login",
    priority: "P1",
    status: "In Progress",
    ageHours: 3,
  },
  {
    id: "INC-2040",
    user: "Arun Selvam",
    dept: "Production",
    issue: "Barcode scanner not reading QR on WO printout",
    priority: "P2",
    status: "Open",
    ageHours: 6,
  },
  {
    id: "INC-2039",
    user: "Lakshmi Priya",
    dept: "Quality",
    issue: "CMM data export to ERP failing intermittently",
    priority: "P1",
    status: "In Progress",
    ageHours: 8,
  },
  {
    id: "INC-2038",
    user: "Ganesh Babu",
    dept: "Stores",
    issue: "Tally inventory sync not reflecting today's GRNs",
    priority: "P2",
    status: "Open",
    ageHours: 11,
  },
  {
    id: "INC-2037",
    user: "Deepa Nair",
    dept: "HR",
    issue: "Email attachment size limit too low — needs increase",
    priority: "P3",
    status: "Open",
    ageHours: 24,
  },
  {
    id: "INC-2036",
    user: "Ravi Narayanan",
    dept: "RM-Purchase",
    issue: "Vendor portal login credentials expired",
    priority: "P2",
    status: "Resolved",
    ageHours: 18,
  },
  {
    id: "INC-2035",
    user: "Suresh Menon",
    dept: "Accounts",
    issue: "Tally GST report layout broken after update",
    priority: "P2",
    status: "Resolved",
    ageHours: 30,
  },
  {
    id: "INC-2034",
    user: "Kavitha Subramanian",
    dept: "Quality",
    issue: "SPC charting software license renewal pending",
    priority: "P3",
    status: "Resolved",
    ageHours: 36,
  },
];

const systemStatuses: SystemStatus[] = [
  {
    name: "ERP (Tally + MES)",
    icon: <Server className="h-4 w-4" />,
    status: "degraded",
    lastChecked: "2 min ago",
    detail: "MES module slow — investigation ongoing",
  },
  {
    name: "Email Server",
    icon: <Mail className="h-4 w-4" />,
    status: "operational",
    lastChecked: "1 min ago",
    detail: "All services nominal",
  },
  {
    name: "Network / LAN",
    icon: <Wifi className="h-4 w-4" />,
    status: "operational",
    lastChecked: "30 sec ago",
    detail: "Core switches at 38% utilization",
  },
  {
    name: "File Servers",
    icon: <HardDrive className="h-4 w-4" />,
    status: "operational",
    lastChecked: "1 min ago",
    detail: "Storage at 64% — healthy",
  },
  {
    name: "CCTV / Security",
    icon: <Shield className="h-4 w-4" />,
    status: "operational",
    lastChecked: "5 min ago",
    detail: "32 cameras active",
  },
  {
    name: "Shared Printers",
    icon: <Printer className="h-4 w-4" />,
    status: "degraded",
    lastChecked: "8 min ago",
    detail: "Shop floor Printer 3 offline",
  },
  {
    name: "Internet Gateway",
    icon: <Network className="h-4 w-4" />,
    status: "operational",
    lastChecked: "1 min ago",
    detail: "100 Mbps link — 22% utilization",
  },
  {
    name: "ERP Backup",
    icon: <Activity className="h-4 w-4" />,
    status: "operational",
    lastChecked: "6 hrs ago",
    detail: "Last backup completed successfully",
  },
];

const assets: AssetRecord[] = [
  {
    id: "AST-1021",
    name: "Dell OptiPlex 7090",
    type: "Desktop",
    assignedTo: "Rajesh Kumar",
    dept: "Production",
    purchaseDate: "2022-03-10",
    warrantyUntil: "2025-03-10",
  },
  {
    id: "AST-1022",
    name: "HP LaserJet Pro M428",
    type: "Printer",
    assignedTo: "Shared — Admin Block",
    dept: "Admin",
    purchaseDate: "2023-01-15",
    warrantyUntil: "2026-01-15",
  },
  {
    id: "AST-1023",
    name: "Cisco Catalyst 2960 Switch",
    type: "Network Switch",
    assignedTo: "IT Infrastructure",
    dept: "IT",
    purchaseDate: "2021-11-20",
    warrantyUntil: "2026-11-20",
  },
  {
    id: "AST-1024",
    name: "Lenovo ThinkPad E15",
    type: "Laptop",
    assignedTo: "Vikram Pillai",
    dept: "IT",
    purchaseDate: "2023-06-01",
    warrantyUntil: "2026-06-01",
  },
  {
    id: "AST-1025",
    name: "Dell PowerEdge R740 Server",
    type: "Server",
    assignedTo: "ERP / Data Center",
    dept: "IT",
    purchaseDate: "2020-08-12",
    warrantyUntil: "2025-08-12",
  },
  {
    id: "AST-1026",
    name: "HP LaserJet M404n",
    type: "Printer",
    assignedTo: "Shop Floor — Line 1",
    dept: "Production",
    purchaseDate: "2022-07-05",
    warrantyUntil: "2024-07-05",
  },
  {
    id: "AST-1027",
    name: "Zebra ZT230 Barcode Printer",
    type: "Label Printer",
    assignedTo: "Stores Dispatch",
    dept: "Stores",
    purchaseDate: "2023-03-18",
    warrantyUntil: "2026-03-18",
  },
  {
    id: "AST-1028",
    name: "Dell OptiPlex 5090",
    type: "Desktop",
    assignedTo: "Kavitha Subramanian",
    dept: "Quality",
    purchaseDate: "2022-09-22",
    warrantyUntil: "2025-09-22",
  },
];

// ── Helper components ────────────────────────────────────────────────────────

function KpiCard({
  label,
  value,
  sub,
  icon,
  accent = false,
}: {
  label: string;
  value: string | number;
  sub?: string;
  icon: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <Card
      className={cn(
        "shadow-card border-border",
        accent && "border-accent/30 bg-accent/5",
      )}
    >
      <CardContent className="pt-4 pb-3 px-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {label}
          </p>
          <span
            className={cn("text-muted-foreground", accent && "text-accent")}
          >
            {icon}
          </span>
        </div>
        <p
          className={cn(
            "text-2xl font-bold kpi-value",
            accent ? "text-accent" : "text-foreground",
          )}
        >
          {value}
        </p>
        {sub && <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>}
      </CardContent>
    </Card>
  );
}

const priorityConfig = {
  P1: {
    label: "P1",
    class: "border-destructive/60 text-destructive bg-destructive/5",
  },
  P2: { label: "P2", class: "border-accent/60 text-accent bg-accent/5" },
  P3: { label: "P3", class: "border-border text-muted-foreground" },
};

const statusConfig = {
  Open: {
    class: "border-border text-muted-foreground",
    dot: "bg-muted-foreground",
  },
  "In Progress": {
    class: "border-primary/60 text-primary bg-primary/5",
    dot: "bg-primary",
  },
  Resolved: {
    class: "border-chart-5/60 text-chart-5 bg-chart-5/5",
    dot: "bg-chart-5",
  },
};

const systemStatusConfig = {
  operational: {
    dot: "bg-chart-5",
    label: "Operational",
    icon: <CheckCircle2 className="h-3.5 w-3.5 text-chart-5" />,
  },
  degraded: {
    dot: "bg-accent animate-pulse",
    label: "Degraded",
    icon: <AlertTriangle className="h-3.5 w-3.5 text-accent" />,
  },
  down: {
    dot: "bg-destructive animate-pulse",
    label: "Down",
    icon: <XCircle className="h-3.5 w-3.5 text-destructive" />,
  },
};

function warrantyBadge(until: string) {
  const days = Math.ceil((new Date(until).getTime() - Date.now()) / 86400000);
  if (days < 0)
    return (
      <Badge
        variant="outline"
        className="text-[10px] h-4 px-1.5 border-destructive/50 text-destructive"
      >
        Expired
      </Badge>
    );
  if (days < 180)
    return (
      <Badge
        variant="outline"
        className="text-[10px] h-4 px-1.5 border-accent/50 text-accent"
      >
        Expiring Soon
      </Badge>
    );
  return (
    <Badge
      variant="outline"
      className="text-[10px] h-4 px-1.5 border-chart-5/50 text-chart-5"
    >
      Active
    </Badge>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function ITDashboard() {
  const openTickets = supportTickets.filter(
    (t) => t.status !== "Resolved",
  ).length;
  const criticalIssues = supportTickets.filter(
    (t) => t.priority === "P1" && t.status !== "Resolved",
  ).length;
  const systemsDown = systemStatuses.filter(
    (s) => s.status !== "operational",
  ).length;

  return (
    <div className="p-6 space-y-6" data-ocid="it.page">
      {/* Page Header */}
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
          <Monitor className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-foreground leading-tight">
            IT Operations Dashboard
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Network, ERP, Helpdesk &amp; Asset Management · Hosur Plant
          </p>
        </div>
        <div className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 border border-border rounded-md px-3 py-1.5">
          <Clock className="h-3.5 w-3.5" />
          <span>Last refreshed: Today, 09:42 AM</span>
        </div>
      </div>

      {/* KPI Row */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-3"
        data-ocid="it.kpi_row"
      >
        <KpiCard
          data-ocid="it.kpi.1"
          label="Open Tickets"
          value={openTickets}
          sub="3 P1, 3 P2 unresolved"
          icon={<TicketCheck className="h-4 w-4" />}
        />
        <KpiCard
          data-ocid="it.kpi.2"
          label="Critical Issues (P1)"
          value={criticalIssues}
          sub="ERP + CMM integration"
          icon={<AlertTriangle className="h-4 w-4" />}
          accent
        />
        <KpiCard
          data-ocid="it.kpi.3"
          label="System Uptime"
          value="99.7%"
          sub="30-day rolling average"
          icon={<Activity className="h-4 w-4" />}
        />
        <KpiCard
          data-ocid="it.kpi.4"
          label="Assets Tracked"
          value={assets.length}
          sub={`${assets.filter((a) => new Date(a.warrantyUntil) < new Date()).length} warranty expired`}
          icon={<Laptop className="h-4 w-4" />}
        />
      </div>

      {/* Support Tickets + System Status */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Support Tickets Table */}
        <Card
          className="xl:col-span-2 shadow-card"
          data-ocid="it.tickets_section"
        >
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <TicketCheck className="h-4 w-4 text-primary" />
              Support Tickets
              <Badge
                variant="outline"
                className="ml-auto text-xs border-border text-muted-foreground"
              >
                {supportTickets.length} total
              </Badge>
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm" data-ocid="it.tickets_table">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Ticket #
                    </th>
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      User / Dept
                    </th>
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                      Issue
                    </th>
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Priority
                    </th>
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-right px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Age
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {supportTickets.map((t, i) => (
                    <tr
                      key={t.id}
                      data-ocid={`it.ticket.item.${i + 1}`}
                      className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-4 py-2.5 font-mono text-xs text-primary font-medium">
                        {t.id}
                      </td>
                      <td className="px-4 py-2.5">
                        <p className="font-medium text-foreground text-xs truncate max-w-[120px]">
                          {t.user}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          {t.dept}
                        </p>
                      </td>
                      <td className="px-4 py-2.5 hidden md:table-cell max-w-[220px]">
                        <p className="text-xs text-foreground/80 line-clamp-1">
                          {t.issue}
                        </p>
                      </td>
                      <td className="px-4 py-2.5">
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-[10px] h-5 px-1.5 font-semibold",
                            priorityConfig[t.priority].class,
                          )}
                        >
                          {t.priority}
                        </Badge>
                      </td>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-1.5">
                          <div
                            className={cn(
                              "h-1.5 w-1.5 rounded-full flex-shrink-0",
                              statusConfig[t.status].dot,
                            )}
                          />
                          <span
                            className={cn(
                              "text-xs font-medium",
                              statusConfig[t.status].class.includes("text-")
                                ? statusConfig[t.status].class
                                    .split(" ")
                                    .find((c) => c.startsWith("text-"))
                                : "text-foreground",
                            )}
                          >
                            {t.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-2.5 text-right text-xs text-muted-foreground tabular-nums">
                        {t.ageHours < 24
                          ? `${t.ageHours}h`
                          : `${Math.floor(t.ageHours / 24)}d ${t.ageHours % 24}h`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* System Status Grid */}
        <Card className="shadow-card" data-ocid="it.system_status_section">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Activity className="h-4 w-4 text-chart-5" />
              System Status
              {systemsDown > 0 && (
                <Badge
                  variant="outline"
                  className="ml-auto text-[10px] h-5 px-1.5 border-accent/50 text-accent"
                >
                  {systemsDown} degraded
                </Badge>
              )}
              {systemsDown === 0 && (
                <Badge
                  variant="outline"
                  className="ml-auto text-[10px] h-5 px-1.5 border-chart-5/50 text-chart-5"
                >
                  All clear
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="pt-3 px-3">
            <div className="space-y-1.5" data-ocid="it.system_status_list">
              {systemStatuses.map((sys, i) => {
                const cfg = systemStatusConfig[sys.status];
                return (
                  <div
                    key={sys.name}
                    data-ocid={`it.system.item.${i + 1}`}
                    className={cn(
                      "flex items-center gap-3 p-2.5 rounded-lg border transition-colors",
                      sys.status === "operational"
                        ? "border-border/60 bg-background"
                        : sys.status === "degraded"
                          ? "border-accent/25 bg-accent/5"
                          : "border-destructive/25 bg-destructive/5",
                    )}
                  >
                    <div
                      className={cn(
                        "h-2 w-2 rounded-full flex-shrink-0",
                        cfg.dot,
                      )}
                    />
                    <span className="text-muted-foreground flex-shrink-0">
                      {sys.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-foreground truncate">
                        {sys.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground truncate">
                        {sys.detail}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground flex-shrink-0">
                      <Clock className="h-2.5 w-2.5" />
                      <span>{sys.lastChecked}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Asset Inventory Table */}
      <Card className="shadow-card" data-ocid="it.assets_section">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <HardDrive className="h-4 w-4 text-accent" />
            Asset Inventory
            <Badge
              variant="outline"
              className="ml-auto text-xs border-border text-muted-foreground"
            >
              {assets.length} records
            </Badge>
          </CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm" data-ocid="it.assets_table">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Asset ID
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Name
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Type
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                    Assigned To
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell">
                    Dept
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell">
                    Purchased
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Warranty
                  </th>
                </tr>
              </thead>
              <tbody>
                {assets.map((a, i) => (
                  <tr
                    key={a.id}
                    data-ocid={`it.asset.item.${i + 1}`}
                    className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-4 py-2.5 font-mono text-xs text-primary font-medium">
                      {a.id}
                    </td>
                    <td className="px-4 py-2.5 text-xs font-medium text-foreground max-w-[180px] truncate">
                      {a.name}
                    </td>
                    <td className="px-4 py-2.5 text-xs text-muted-foreground">
                      {a.type}
                    </td>
                    <td className="px-4 py-2.5 text-xs text-foreground/80 hidden md:table-cell">
                      {a.assignedTo}
                    </td>
                    <td className="px-4 py-2.5 text-xs text-muted-foreground hidden lg:table-cell">
                      {a.dept}
                    </td>
                    <td className="px-4 py-2.5 text-xs text-muted-foreground tabular-nums hidden lg:table-cell">
                      {a.purchaseDate}
                    </td>
                    <td className="px-4 py-2.5">
                      <div className="flex flex-col gap-0.5">
                        {warrantyBadge(a.warrantyUntil)}
                        <span className="text-[10px] text-muted-foreground tabular-nums">
                          {a.warrantyUntil}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
