import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Activity,
  AlertTriangle,
  CalendarClock,
  CheckCircle2,
  Clock,
  Cpu,
  PackageX,
  Timer,
  TrendingDown,
  Wrench,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";

// ── Types ────────────────────────────────────────────────────────────────────

interface MachineStatus {
  id: string;
  name: string;
  type: string;
  status: "operational" | "maintenance" | "critical" | "idle";
  lastPM: string;
  nextPM: string;
  oee: number;
  line: string;
}

interface PMTask {
  id: string;
  date: string;
  machine: string;
  task: string;
  technician: string;
  duration: string;
}

interface SparePart {
  id: string;
  part: string;
  sku: string;
  stock: number;
  unit: string;
  minLevel: number;
  location: string;
}

interface WorkRequest {
  id: string;
  title: string;
  requester: string;
  department: string;
  priority: "critical" | "high" | "medium" | "low";
  status: "open" | "in-progress" | "completed" | "on-hold";
  raised: string;
}

// ── Static Data ───────────────────────────────────────────────────────────────

const machines: MachineStatus[] = [
  {
    id: "m1",
    name: "250T Hydraulic Press",
    type: "Hydraulic Press",
    status: "operational",
    lastPM: "15 Mar 2026",
    nextPM: "15 Jun 2026",
    oee: 91,
    line: "Line 1",
  },
  {
    id: "m2",
    name: "400T Transfer Press",
    type: "Mechanical Press",
    status: "maintenance",
    lastPM: "10 Apr 2026",
    nextPM: "28 Apr 2026",
    oee: 0,
    line: "Line 2",
  },
  {
    id: "m3",
    name: "160T Progressive Press",
    type: "Mechanical Press",
    status: "operational",
    lastPM: "20 Mar 2026",
    nextPM: "20 Jun 2026",
    oee: 88,
    line: "Line 3",
  },
  {
    id: "m4",
    name: "630T Deep Draw Press",
    type: "Hydraulic Press",
    status: "operational",
    lastPM: "02 Apr 2026",
    nextPM: "02 Jul 2026",
    oee: 84,
    line: "Line 4",
  },
  {
    id: "m5",
    name: "Wire-Cut EDM — TR-02",
    type: "EDM",
    status: "critical",
    lastPM: "10 Mar 2026",
    nextPM: "10 Jun 2026",
    oee: 0,
    line: "Tool-Room",
  },
  {
    id: "m6",
    name: "VMC Machining Center",
    type: "CNC Machining",
    status: "operational",
    lastPM: "01 Apr 2026",
    nextPM: "01 Jul 2026",
    oee: 76,
    line: "Tool-Room",
  },
  {
    id: "m7",
    name: "Material Handling Conveyor",
    type: "Conveyor",
    status: "operational",
    lastPM: "25 Mar 2026",
    nextPM: "25 Jun 2026",
    oee: 95,
    line: "Press Shop",
  },
  {
    id: "m8",
    name: "Air Compressor — 75 kW",
    type: "Utility",
    status: "idle",
    lastPM: "12 Apr 2026",
    nextPM: "12 Jul 2026",
    oee: 0,
    line: "Utility",
  },
];

const pmTasks: PMTask[] = [
  {
    id: "pm1",
    date: "22 Apr 2026",
    machine: "250T Hydraulic Press — L1",
    task: "Hydraulic filter replacement & oil sampling",
    technician: "Suresh T.",
    duration: "3 hrs",
  },
  {
    id: "pm2",
    date: "24 Apr 2026",
    machine: "160T Progressive Press — L3",
    task: "Slide lubrication & electrical panel check",
    technician: "Mohan K.",
    duration: "2 hrs",
  },
  {
    id: "pm3",
    date: "26 Apr 2026",
    machine: "Material Handling Conveyor",
    task: "Belt tensioning & roller bearing greasing",
    technician: "Ramesh P.",
    duration: "2.5 hrs",
  },
  {
    id: "pm4",
    date: "28 Apr 2026",
    machine: "400T Transfer Press — L2",
    task: "Full PM service post breakdown clearance",
    technician: "Mohan K.",
    duration: "6 hrs",
  },
  {
    id: "pm5",
    date: "01 May 2026",
    machine: "VMC Machining Center",
    task: "Spindle calibration & axis backlash check",
    technician: "Suresh T.",
    duration: "4 hrs",
  },
  {
    id: "pm6",
    date: "05 May 2026",
    machine: "630T Deep Draw Press — L4",
    task: "Die cushion seal replacement & tryout",
    technician: "Ramesh P.",
    duration: "5 hrs",
  },
];

const spareParts: SparePart[] = [
  {
    id: "sp1",
    part: "Hydraulic Oil Filter (HF-46)",
    sku: "SP-HF-46-10",
    stock: 4,
    unit: "Pcs",
    minLevel: 6,
    location: "Stores C-04",
  },
  {
    id: "sp2",
    part: "Press Clutch Friction Plate",
    sku: "SP-CF-250T-02",
    stock: 2,
    unit: "Sets",
    minLevel: 2,
    location: "Stores C-05",
  },
  {
    id: "sp3",
    part: "Conveyor Drive Belt (B-68)",
    sku: "SP-CB-B68-STD",
    stock: 8,
    unit: "Pcs",
    minLevel: 4,
    location: "Stores C-06",
  },
  {
    id: "sp4",
    part: "Servo Motor Coupling (EDM)",
    sku: "SP-SMC-EDM-02",
    stock: 1,
    unit: "Pcs",
    minLevel: 2,
    location: "Stores C-07",
  },
  {
    id: "sp5",
    part: "Slide Guide Liner (250T)",
    sku: "SP-SGL-250-A",
    stock: 6,
    unit: "Pcs",
    minLevel: 4,
    location: "Stores C-04",
  },
  {
    id: "sp6",
    part: "Air Compressor Unloader Valve",
    sku: "SP-UV-75KW-01",
    stock: 3,
    unit: "Pcs",
    minLevel: 3,
    location: "Stores C-08",
  },
];

const workRequests: WorkRequest[] = [
  {
    id: "wr1",
    title: "Wire-Cut EDM Servo Drive Fault — TR-02",
    requester: "Balamurugan S.",
    department: "Tool-Room",
    priority: "critical",
    status: "in-progress",
    raised: "20 Apr 2026",
  },
  {
    id: "wr2",
    title: "400T Press Clutch Noise During Cycle",
    requester: "Arun Selvam",
    department: "Production",
    priority: "high",
    status: "open",
    raised: "19 Apr 2026",
  },
  {
    id: "wr3",
    title: "Conveyor Belt Slipping on Roller 7",
    requester: "Rajesh Kumar",
    department: "Production",
    priority: "medium",
    status: "open",
    raised: "18 Apr 2026",
  },
  {
    id: "wr4",
    title: "VMC Coolant Pump Intermittent Failure",
    requester: "Balamurugan S.",
    department: "Tool-Room",
    priority: "high",
    status: "in-progress",
    raised: "17 Apr 2026",
  },
  {
    id: "wr5",
    title: "Hydraulic Press Oil Leak — Cylinder Seal",
    requester: "Arun Selvam",
    department: "Production",
    priority: "medium",
    status: "on-hold",
    raised: "16 Apr 2026",
  },
  {
    id: "wr6",
    title: "Compressor Pressure Drop at Peak Load",
    requester: "Mohan K.",
    department: "Maintenance",
    priority: "low",
    status: "completed",
    raised: "14 Apr 2026",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function statusConfig(s: MachineStatus["status"]) {
  switch (s) {
    case "operational":
      return {
        label: "Operational",
        color: "bg-chart-5/15 text-chart-5 border-chart-5/30",
        icon: <CheckCircle2 className="w-3 h-3" />,
      };
    case "maintenance":
      return {
        label: "Under PM",
        color: "bg-accent/15 text-accent border-accent/30",
        icon: <Wrench className="w-3 h-3" />,
      };
    case "critical":
      return {
        label: "Critical",
        color: "bg-destructive/15 text-destructive border-destructive/30",
        icon: <XCircle className="w-3 h-3" />,
      };
    case "idle":
      return {
        label: "Idle",
        color: "bg-muted text-muted-foreground border-border",
        icon: <Activity className="w-3 h-3" />,
      };
  }
}

function priorityConfig(p: WorkRequest["priority"]) {
  switch (p) {
    case "critical":
      return "bg-destructive/15 text-destructive border-destructive/30";
    case "high":
      return "bg-accent/15 text-accent border-accent/30";
    case "medium":
      return "bg-primary/15 text-primary border-primary/30";
    case "low":
      return "bg-muted text-muted-foreground border-border";
  }
}

function wrStatusConfig(s: WorkRequest["status"]) {
  switch (s) {
    case "in-progress":
      return "bg-primary/15 text-primary border-primary/30";
    case "open":
      return "bg-accent/15 text-accent border-accent/30";
    case "on-hold":
      return "bg-muted text-muted-foreground border-border";
    case "completed":
      return "bg-chart-5/15 text-chart-5 border-chart-5/30";
  }
}

function KPICard({
  label,
  value,
  sub,
  icon: Icon,
  trend,
}: {
  label: string;
  value: string;
  sub?: string;
  icon: React.ElementType;
  trend?: "up" | "down" | "good-down" | "good-up";
}) {
  const trendColor =
    trend === "good-up"
      ? "text-chart-5"
      : trend === "good-down"
        ? "text-chart-5"
        : trend === "up"
          ? "text-destructive"
          : "text-chart-5";
  return (
    <Card className="border-border bg-card shadow-card">
      <CardContent className="p-5 flex items-start gap-4">
        <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
            {label}
          </p>
          <p className="text-2xl font-bold kpi-value text-foreground mt-0.5">
            {value}
          </p>
          {sub && (
            <p className={`text-xs mt-0.5 font-medium ${trendColor}`}>{sub}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function MaintenanceDashboard() {
  const operationalCount = machines.filter(
    (m) => m.status === "operational",
  ).length;
  const overdueCount = 3;
  const mtbf = 142;
  const openRequests = workRequests.filter(
    (w) => w.status === "open" || w.status === "in-progress",
  ).length;
  const uptimePct = Math.round((operationalCount / machines.length) * 100);

  return (
    <div className="space-y-6" data-ocid="maintenance.page">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex items-center gap-3 mb-1">
          <div className="p-2 rounded-lg bg-destructive/10 border border-destructive/20">
            <Wrench className="w-5 h-5 text-destructive" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Maintenance</h1>
            <p className="text-sm text-muted-foreground">
              Preventive &amp; breakdown maintenance — press lines and plant
              infrastructure
            </p>
          </div>
        </div>
      </motion.div>

      {/* KPI Row */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        data-ocid="maintenance.kpi.section"
      >
        <KPICard
          label="Equipment Uptime"
          value={`${uptimePct}%`}
          sub="▲ +3% vs last month"
          icon={Activity}
          trend="good-up"
        />
        <KPICard
          label="Overdue PM Tasks"
          value={`${overdueCount}`}
          sub="▼ Action needed"
          icon={AlertTriangle}
          trend="up"
        />
        <KPICard
          label="MTBF (days)"
          value={`${mtbf}`}
          sub="▲ +12 days vs Q1"
          icon={Timer}
          trend="good-up"
        />
        <KPICard
          label="Open Work Requests"
          value={`${openRequests}`}
          sub={`${workRequests.filter((w) => w.priority === "critical").length} critical`}
          icon={TrendingDown}
          trend="up"
        />
      </motion.div>

      {/* Equipment Status Grid */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <Card
          className="border-border bg-card shadow-card"
          data-ocid="maintenance.equipment.section"
        >
          <CardHeader className="pb-3 border-b border-border">
            <CardTitle className="flex items-center gap-2 text-base font-semibold">
              <Cpu className="w-4 h-4 text-primary" />
              Equipment Status
              <span className="ml-auto text-xs font-normal text-muted-foreground">
                {operationalCount}/{machines.length} Operational
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
              {machines.map((m, i) => {
                const cfg = statusConfig(m.status);
                return (
                  <div
                    key={m.id}
                    className="p-4 hover:bg-muted/40 transition-colors-fast"
                    data-ocid={`maintenance.equipment.item.${i + 1}`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground truncate">
                          {m.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {m.type} · {m.line}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-[10px] px-1.5 py-0.5 shrink-0 flex items-center gap-1 ${cfg.color}`}
                      >
                        {cfg.icon}
                        {cfg.label}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs mt-3">
                      <span className="text-muted-foreground">Last PM</span>
                      <span className="text-foreground font-medium text-right">
                        {m.lastPM}
                      </span>
                      <span className="text-muted-foreground">Next PM</span>
                      <span className="text-foreground font-medium text-right">
                        {m.nextPM}
                      </span>
                      <span className="text-muted-foreground">OEE</span>
                      <span
                        className={`font-medium text-right ${m.oee >= 80 ? "text-chart-5" : m.oee > 0 ? "text-accent" : "text-muted-foreground"}`}
                      >
                        {m.oee > 0 ? `${m.oee}%` : "—"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* PM Calendar + Spare Parts */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        {/* PM Calendar */}
        <motion.div
          className="xl:col-span-3"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card
            className="border-border bg-card shadow-card h-full"
            data-ocid="maintenance.pm_calendar.section"
          >
            <CardHeader className="pb-3 border-b border-border">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <CalendarClock className="w-4 h-4 text-primary" />
                Upcoming Preventive Maintenance
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {pmTasks.map((t, i) => (
                  <div
                    key={t.id}
                    className="flex items-start gap-4 px-4 py-3.5 hover:bg-muted/30 transition-colors-fast"
                    data-ocid={`maintenance.pm_task.item.${i + 1}`}
                  >
                    <div className="shrink-0 text-center w-14 bg-primary/8 border border-primary/15 rounded-lg p-1.5">
                      <p className="text-[10px] text-primary font-medium uppercase">
                        {t.date.split(" ")[1]}
                      </p>
                      <p className="text-lg font-bold text-primary leading-tight">
                        {t.date.split(" ")[0]}
                      </p>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-foreground truncate">
                        {t.machine}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {t.task}
                      </p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="text-xs text-primary font-medium">
                          {t.technician}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {t.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Spare Parts Inventory */}
        <motion.div
          className="xl:col-span-2"
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.22 }}
        >
          <Card
            className="border-border bg-card shadow-card h-full"
            data-ocid="maintenance.spare_parts.section"
          >
            <CardHeader className="pb-3 border-b border-border">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <PackageX className="w-4 h-4 text-accent" />
                Spare Parts Inventory
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="text-xs text-muted-foreground px-4 py-2.5">
                      Part
                    </TableHead>
                    <TableHead className="text-xs text-muted-foreground px-3 py-2.5 text-right">
                      Stock
                    </TableHead>
                    <TableHead className="text-xs text-muted-foreground px-3 py-2.5 text-right">
                      Min
                    </TableHead>
                    <TableHead className="text-xs text-muted-foreground px-4 py-2.5 text-center">
                      Reorder
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {spareParts.map((sp, i) => {
                    const needsReorder = sp.stock <= sp.minLevel;
                    return (
                      <TableRow
                        key={sp.id}
                        className="border-border hover:bg-muted/30"
                        data-ocid={`maintenance.spare_part.item.${i + 1}`}
                      >
                        <TableCell className="px-4 py-3">
                          <p className="text-xs font-medium text-foreground">
                            {sp.part}
                          </p>
                          <p className="text-[10px] text-muted-foreground">
                            {sp.sku}
                          </p>
                        </TableCell>
                        <TableCell className="px-3 py-3 text-right text-sm font-semibold kpi-value text-foreground">
                          {sp.stock}
                          <span className="text-[10px] text-muted-foreground ml-1">
                            {sp.unit}
                          </span>
                        </TableCell>
                        <TableCell className="px-3 py-3 text-right text-xs text-muted-foreground">
                          {sp.minLevel}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-center">
                          {needsReorder ? (
                            <Badge
                              variant="outline"
                              className="text-[10px] px-1.5 bg-destructive/10 text-destructive border-destructive/30"
                            >
                              ⚠ Reorder
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="text-[10px] px-1.5 bg-chart-5/10 text-chart-5 border-chart-5/30"
                            >
                              OK
                            </Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Work Requests */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28 }}
      >
        <Card
          className="border-border bg-card shadow-card"
          data-ocid="maintenance.work_requests.section"
        >
          <CardHeader className="pb-3 border-b border-border">
            <CardTitle className="flex items-center gap-2 text-base font-semibold">
              <Wrench className="w-4 h-4 text-destructive" />
              Maintenance Work Requests
              <span className="ml-auto text-xs font-normal text-muted-foreground">
                {workRequests.length} total
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-xs text-muted-foreground px-4 py-2.5">
                    Request
                  </TableHead>
                  <TableHead className="text-xs text-muted-foreground px-4 py-2.5">
                    Requester
                  </TableHead>
                  <TableHead className="text-xs text-muted-foreground px-4 py-2.5">
                    Dept
                  </TableHead>
                  <TableHead className="text-xs text-muted-foreground px-4 py-2.5 text-center">
                    Priority
                  </TableHead>
                  <TableHead className="text-xs text-muted-foreground px-4 py-2.5 text-center">
                    Status
                  </TableHead>
                  <TableHead className="text-xs text-muted-foreground px-4 py-2.5 text-right">
                    Raised
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {workRequests.map((wr, i) => (
                  <TableRow
                    key={wr.id}
                    className="border-border hover:bg-muted/30 transition-colors-fast"
                    data-ocid={`maintenance.work_request.item.${i + 1}`}
                  >
                    <TableCell className="px-4 py-3 max-w-[280px]">
                      <p className="text-sm font-medium text-foreground truncate">
                        {wr.title}
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-0.5 font-mono">
                        {wr.id.toUpperCase()}
                      </p>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-sm text-foreground">
                      {wr.requester}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-sm text-muted-foreground">
                      {wr.department}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-center">
                      <Badge
                        variant="outline"
                        className={`text-[10px] px-2 capitalize ${priorityConfig(wr.priority)}`}
                      >
                        {wr.priority}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-center">
                      <Badge
                        variant="outline"
                        className={`text-[10px] px-2 capitalize ${wrStatusConfig(wr.status)}`}
                      >
                        {wr.status.replace("-", " ")}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-right text-xs text-muted-foreground">
                      {wr.raised}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
