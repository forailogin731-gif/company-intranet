import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowLeft,
  CalendarClock,
  CheckCircle2,
  Cog,
  PackageCheck,
  TrendingDown,
  TrendingUp,
  Wrench,
  XCircle,
} from "lucide-react";

interface ToolItem {
  id: string;
  name: string;
  category: string;
  status: "Available" | "Issued" | "Repair" | "Condemned";
  issuedTo?: string;
  lastUsed: string;
  condition: "Excellent" | "Good" | "Fair" | "Poor";
  location: string;
}

interface ToolLog {
  date: string;
  type: "Issue" | "Return";
  tool: string;
  toolId: string;
  person: string;
  department: string;
  purpose: string;
}

interface MaintenanceSchedule {
  id: string;
  tool: string;
  type: string;
  dueDate: string;
  lastDone: string;
  assignedTo: string;
  status: "Overdue" | "Due Soon" | "Scheduled" | "Completed";
}

const tools: ToolItem[] = [
  {
    id: "TR-DIE-014",
    name: "Progressive Die #14 — TVS FP-3847-B",
    category: "Press Die",
    status: "Repair",
    issuedTo: "Die Reconditioning Bay",
    lastUsed: "17 Apr",
    condition: "Fair",
    location: "Reconditioning Bay",
  },
  {
    id: "TR-DIE-019",
    name: "Compound Die #19 — SKF BR-2291-A",
    category: "Press Die",
    status: "Available",
    lastUsed: "14 Apr",
    condition: "Good",
    location: "Die Storage D-03",
  },
  {
    id: "TR-VMC-01",
    name: "VMC Machining Centre — Haas VF-2",
    category: "Machine",
    status: "Available",
    lastUsed: "20 Apr",
    condition: "Excellent",
    location: "Tool Room Bay 1",
  },
  {
    id: "TR-EDM-02",
    name: "Wire-Cut EDM — Sodick AQ327L",
    category: "Machine",
    status: "Repair",
    issuedTo: "External Service",
    lastUsed: "19 Apr",
    condition: "Poor",
    location: "Tool Room Bay 2",
  },
  {
    id: "TR-JIG-08",
    name: "Welding Jig — Chassis Bracket",
    category: "Jig & Fixture",
    status: "Issued",
    issuedTo: "NPD Lab",
    lastUsed: "18 Apr",
    condition: "Good",
    location: "NPD Lab",
  },
  {
    id: "TR-GRND-01",
    name: "Surface Grinding Machine",
    category: "Machine",
    status: "Available",
    lastUsed: "16 Apr",
    condition: "Good",
    location: "Tool Room Bay 3",
  },
  {
    id: "TR-MEAS-CMM",
    name: "CMM Fixture Set — Zeiss Contura",
    category: "Measurement",
    status: "Issued",
    issuedTo: "Quality Lab",
    lastUsed: "20 Apr",
    condition: "Excellent",
    location: "Quality Lab",
  },
  {
    id: "TR-DIE-007",
    name: "Progressive Die #07 — TVS EC-5512-D",
    category: "Press Die",
    status: "Available",
    lastUsed: "12 Apr",
    condition: "Good",
    location: "Die Storage D-01",
  },
  {
    id: "TR-LATHE-01",
    name: "CNC Turning Centre — Mazak QT-20",
    category: "Machine",
    status: "Available",
    lastUsed: "20 Apr",
    condition: "Excellent",
    location: "Tool Room Bay 4",
  },
  {
    id: "TR-JIG-12",
    name: "Inspection Fixture — TVS FP-3847-B",
    category: "Jig & Fixture",
    status: "Issued",
    issuedTo: "Quality Dept",
    lastUsed: "20 Apr",
    condition: "Good",
    location: "Quality Dept",
  },
];

const toolLog: ToolLog[] = [
  {
    date: "20 Apr 09:15",
    type: "Issue",
    tool: "Inspection Fixture TVS-FP-3847-B",
    toolId: "TR-JIG-12",
    person: "Lakshmi Priya",
    department: "Quality",
    purpose: "Final inspection — WO-001",
  },
  {
    date: "20 Apr 08:30",
    type: "Return",
    tool: "Compound Die #19 SKF-BR-2291-A",
    toolId: "TR-DIE-019",
    person: "Arun Selvam",
    department: "Production",
    purpose: "Production run complete — WO-002",
  },
  {
    date: "19 Apr 16:00",
    type: "Issue",
    tool: "Welding Jig Chassis Bracket",
    toolId: "TR-JIG-08",
    person: "Sanjay Iyer",
    department: "NPD",
    purpose: "Prototype validation — NPD-CB-0034",
  },
  {
    date: "19 Apr 14:30",
    type: "Issue",
    tool: "VMC Machining Centre",
    toolId: "TR-VMC-01",
    person: "Balamurugan S.",
    department: "Tool-Room",
    purpose: "Die component machining — TR-DIE-014",
  },
  {
    date: "19 Apr 11:00",
    type: "Return",
    tool: "Surface Grinding Machine",
    toolId: "TR-GRND-01",
    person: "Balamurugan S.",
    department: "Tool-Room",
    purpose: "Die punch grinding complete",
  },
];

const maintenanceSchedule: MaintenanceSchedule[] = [
  {
    id: "MS-041",
    tool: "VMC Machining Centre — Haas VF-2",
    type: "Spindle Oil Change + Belt Check",
    dueDate: "21 Apr",
    lastDone: "21 Jan",
    assignedTo: "Balamurugan S.",
    status: "Due Soon",
  },
  {
    id: "MS-040",
    tool: "Wire-Cut EDM — Sodick AQ327L",
    type: "Servo Drive Replacement + Calibration",
    dueDate: "18 Apr",
    lastDone: "—",
    assignedTo: "External AMC",
    status: "Overdue",
  },
  {
    id: "MS-039",
    tool: "Surface Grinding Machine",
    type: "Table Lubrication + Dressing",
    dueDate: "28 Apr",
    lastDone: "28 Feb",
    assignedTo: "Ramu K.",
    status: "Scheduled",
  },
  {
    id: "MS-038",
    tool: "CNC Turning Centre — Mazak QT-20",
    type: "Quarterly PM — Hydraulics + Coolant",
    dueDate: "30 Apr",
    lastDone: "31 Jan",
    assignedTo: "Balamurugan S.",
    status: "Scheduled",
  },
  {
    id: "MS-037",
    tool: "CMM Fixture Set — Zeiss Contura",
    type: "Annual Recalibration NABL",
    dueDate: "05 Apr",
    lastDone: "05 Apr 2025",
    assignedTo: "Zeiss India",
    status: "Completed",
  },
];

const statusConfig: Record<ToolItem["status"], { className: string }> = {
  Available: { className: "text-chart-5 border-chart-5/40 bg-chart-5/5" },
  Issued: { className: "text-primary border-primary/40 bg-primary/5" },
  Repair: {
    className: "text-destructive border-destructive/40 bg-destructive/5",
  },
  Condemned: { className: "text-muted-foreground border-border" },
};

const conditionConfig: Record<ToolItem["condition"], string> = {
  Excellent: "text-chart-5",
  Good: "text-primary",
  Fair: "text-accent",
  Poor: "text-destructive",
};

const maintStatusConfig: Record<
  MaintenanceSchedule["status"],
  { className: string; icon: React.ReactNode }
> = {
  Overdue: {
    className: "text-destructive border-destructive/40 bg-destructive/5",
    icon: <XCircle className="h-3.5 w-3.5" />,
  },
  "Due Soon": {
    className: "text-accent border-accent/40 bg-accent/5",
    icon: <AlertTriangle className="h-3.5 w-3.5" />,
  },
  Scheduled: {
    className: "text-primary border-primary/40 bg-primary/5",
    icon: <CalendarClock className="h-3.5 w-3.5" />,
  },
  Completed: {
    className: "text-chart-5 border-chart-5/40 bg-chart-5/5",
    icon: <CheckCircle2 className="h-3.5 w-3.5" />,
  },
};

const kpis = [
  {
    label: "Total Tools",
    value: "142",
    icon: Cog,
    color: "text-primary",
    trend: "stable" as const,
  },
  {
    label: "Tools In Use",
    value: "23",
    icon: PackageCheck,
    color: "text-accent",
    trend: "up" as const,
  },
  {
    label: "Overdue Returns",
    value: "3",
    icon: AlertTriangle,
    color: "text-destructive",
    trend: "stable" as const,
  },
  {
    label: "Under Repair",
    value: "8",
    icon: Wrench,
    color: "text-chart-4",
    trend: "down" as const,
  },
];

export default function ToolRoomDashboard() {
  const issueCount = tools.filter((t) => t.status === "Issued").length;
  const repairCount = tools.filter((t) => t.status === "Repair").length;

  return (
    <div className="p-6 space-y-6" data-ocid="tool_room.page">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <Link to="/" className="hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Tool-Room</span>
          </div>
          <h1 className="text-2xl font-display font-semibold text-foreground flex items-center gap-2">
            <Cog className="h-6 w-6 text-destructive" />
            Tool-Room Department
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Die design, fabrication, reconditioning & tooling management for
            press shop
          </p>
        </div>
        <Link to="/">
          <Button
            data-ocid="tool_room.back_button"
            variant="outline"
            size="sm"
            className="gap-1.5"
          >
            <ArrowLeft className="h-4 w-4" /> Dashboard
          </Button>
        </Link>
      </div>

      {/* KPI Row */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-3"
        data-ocid="tool_room.kpi_row"
      >
        {kpis.map((kpi, i) => (
          <Card
            key={kpi.label}
            data-ocid={`tool_room.kpi.${i + 1}`}
            className="bg-card border-border shadow-card"
          >
            <CardContent className="pt-4 pb-3 px-4">
              <div className="flex items-start justify-between mb-2">
                <p className="text-xs text-muted-foreground">{kpi.label}</p>
                <kpi.icon className={cn("h-4 w-4", kpi.color)} />
              </div>
              <p className={cn("text-2xl font-bold kpi-value", kpi.color)}>
                {kpi.value}
              </p>
              <div
                className={cn(
                  "flex items-center gap-1 mt-1 text-xs",
                  kpi.trend === "up"
                    ? "text-accent"
                    : kpi.trend === "down"
                      ? "text-chart-5"
                      : "text-muted-foreground",
                )}
              >
                {kpi.trend === "up" ? (
                  <TrendingUp className="h-3 w-3" />
                ) : kpi.trend === "down" ? (
                  <TrendingDown className="h-3 w-3" />
                ) : null}
                {kpi.trend === "up"
                  ? "Active utilization"
                  : kpi.trend === "down"
                    ? "Recovering"
                    : "On track"}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tool Inventory Table */}
      <Card className="shadow-card" data-ocid="tool_room.inventory_table">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Cog className="h-4 w-4 text-destructive" />
              Tool Inventory
            </CardTitle>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Badge
                  variant="outline"
                  className="text-[10px] text-chart-5 border-chart-5/40 h-4 px-1.5"
                >
                  Available
                </Badge>
                {tools.filter((t) => t.status === "Available").length}
              </span>
              <span className="flex items-center gap-1">
                <Badge
                  variant="outline"
                  className="text-[10px] text-primary border-primary/40 h-4 px-1.5"
                >
                  Issued
                </Badge>
                {issueCount}
              </span>
              <span className="flex items-center gap-1">
                <Badge
                  variant="outline"
                  className="text-[10px] text-destructive border-destructive/40 h-4 px-1.5"
                >
                  Repair
                </Badge>
                {repairCount}
              </span>
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-0 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                {[
                  "Tool ID",
                  "Name",
                  "Category",
                  "Status",
                  "Issued To / Location",
                  "Last Used",
                  "Condition",
                ].map((h) => (
                  <th
                    key={h}
                    className="py-3 px-3 text-left text-xs font-semibold text-muted-foreground whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tools.map((tool, i) => {
                const sc = statusConfig[tool.status];
                return (
                  <tr
                    key={tool.id}
                    data-ocid={`tool_room.tool.item.${i + 1}`}
                    className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                  >
                    <td className="py-2.5 px-3 font-mono text-xs text-primary whitespace-nowrap">
                      {tool.id}
                    </td>
                    <td className="py-2.5 px-3 text-foreground font-medium max-w-[220px]">
                      <p className="truncate">{tool.name}</p>
                    </td>
                    <td className="py-2.5 px-3 text-muted-foreground whitespace-nowrap text-xs">
                      {tool.category}
                    </td>
                    <td className="py-2.5 px-3">
                      <Badge
                        variant="outline"
                        className={cn("text-[10px] h-5 px-2", sc.className)}
                      >
                        {tool.status}
                      </Badge>
                    </td>
                    <td className="py-2.5 px-3 text-muted-foreground text-xs whitespace-nowrap">
                      {tool.issuedTo || tool.location}
                    </td>
                    <td className="py-2.5 px-3 text-muted-foreground text-xs whitespace-nowrap">
                      {tool.lastUsed}
                    </td>
                    <td
                      className={cn(
                        "py-2.5 px-3 text-xs font-semibold",
                        conditionConfig[tool.condition],
                      )}
                    >
                      {tool.condition}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tool Issue/Return Log */}
        <Card className="shadow-card" data-ocid="tool_room.log_section">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base flex items-center gap-2">
                <PackageCheck className="h-4 w-4 text-primary" />
                Issue / Return Log
              </CardTitle>
              <Badge variant="outline" className="text-xs">
                Last 48 hrs
              </Badge>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="pt-3 space-y-2">
            {toolLog.map((log, i) => (
              <div
                key={`${log.toolId}-${log.date}`}
                data-ocid={`tool_room.log.item.${i + 1}`}
                className="flex items-start gap-3 p-2.5 rounded-lg border border-border hover:bg-muted/30 transition-colors"
              >
                <div
                  className={cn(
                    "flex items-center justify-center h-7 w-7 rounded-md border flex-shrink-0 text-xs font-bold",
                    log.type === "Issue"
                      ? "text-destructive bg-destructive/10 border-destructive/20"
                      : "text-chart-5 bg-chart-5/10 border-chart-5/20",
                  )}
                >
                  {log.type === "Issue" ? "OUT" : "IN"}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {log.tool}
                  </p>
                  <div className="flex flex-wrap gap-1.5 text-xs text-muted-foreground mt-0.5">
                    <span className="font-mono text-primary">{log.toolId}</span>
                    <span>·</span>
                    <span>{log.person}</span>
                    <span>·</span>
                    <span className="text-accent-brass">{log.department}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">
                    {log.purpose}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0 pt-0.5">
                  {log.date}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Maintenance Schedule */}
        <Card
          className="shadow-card"
          data-ocid="tool_room.maintenance_schedule"
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base flex items-center gap-2">
                <Wrench className="h-4 w-4 text-chart-4" />
                Tool Maintenance Schedule
              </CardTitle>
              <Badge
                variant="outline"
                className="text-destructive border-destructive/40 text-xs"
              >
                {
                  maintenanceSchedule.filter((m) => m.status === "Overdue")
                    .length
                }{" "}
                Overdue
              </Badge>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="pt-3 space-y-2">
            {maintenanceSchedule.map((item, i) => {
              const mc = maintStatusConfig[item.status];
              return (
                <div
                  key={item.id}
                  data-ocid={`tool_room.maintenance.item.${i + 1}`}
                  className={cn(
                    "p-3 rounded-lg border transition-colors",
                    item.status === "Overdue"
                      ? "border-destructive/25 bg-destructive/5"
                      : item.status === "Due Soon"
                        ? "border-accent/25 bg-accent/5"
                        : "border-border hover:bg-muted/30",
                  )}
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <p className="text-sm font-medium text-foreground line-clamp-1 flex-1">
                      {item.tool}
                    </p>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-[10px] h-5 px-1.5 flex-shrink-0 flex items-center gap-1",
                        mc.className,
                      )}
                    >
                      {mc.icon}
                      {item.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1.5">
                    {item.type}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span>
                      Due:{" "}
                      <span
                        className={cn(
                          "font-semibold",
                          item.status === "Overdue"
                            ? "text-destructive"
                            : item.status === "Due Soon"
                              ? "text-accent"
                              : "text-foreground",
                        )}
                      >
                        {item.dueDate}
                      </span>
                    </span>
                    <span>
                      Last Done:{" "}
                      <span className="text-foreground">{item.lastDone}</span>
                    </span>
                    <span>
                      Assigned:{" "}
                      <span className="text-foreground">{item.assignedTo}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
