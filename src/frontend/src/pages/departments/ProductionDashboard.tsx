import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  Clock,
  Factory,
  Gauge,
  Minus,
  TrendingUp,
  Zap,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// ── Inline sample data ────────────────────────────────────────────────────────

const shiftSummary = {
  shift: "Shift A (Morning)",
  shiftTime: "06:00 – 14:00",
  date: "Mon, 20 Apr 2026",
  supervisor: "Rajesh Kumar",
  linesActive: 5,
  linesTotal: 6,
};

const kpis = [
  {
    label: "Daily Output",
    value: 4280,
    target: 4500,
    unit: "pcs",
    trend: "up" as const,
    trendValue: "+340",
    icon: Factory,
    color: "text-primary",
    bgColor: "bg-primary/10",
    isScrap: false,
  },
  {
    label: "OEE",
    value: 82.4,
    target: 85,
    unit: "%",
    trend: "up" as const,
    trendValue: "+1.8%",
    icon: Gauge,
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
    isScrap: false,
  },
  {
    label: "Shift Attainment",
    value: 91.6,
    target: 95,
    unit: "%",
    trend: "stable" as const,
    trendValue: "0.0%",
    icon: TrendingUp,
    color: "text-accent",
    bgColor: "bg-accent/10",
    isScrap: false,
  },
  {
    label: "Scrap Rate",
    value: 1.2,
    target: 1.0,
    unit: "%",
    trend: "down" as const,
    trendValue: "-0.4%",
    icon: AlertTriangle,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    isScrap: true,
  },
];

interface WorkOrderRow {
  wo: string;
  part: string;
  client: string;
  qty: number;
  done: number;
  status: "Running" | "Pending" | "Done" | "On Hold";
  machine: string;
  operator: string;
  priority: "critical" | "high" | "medium" | "low";
}

const workOrderRows: WorkOrderRow[] = [
  {
    wo: "WO-001",
    part: "TVS-FP-3847-B — Front Suspension Bracket",
    client: "TVS",
    qty: 2000,
    done: 1480,
    status: "Running",
    machine: "Line 1 — 250T Hyd.",
    operator: "Arun Selvam",
    priority: "critical",
  },
  {
    wo: "WO-002",
    part: "SKF-BR-2291-A — Inner Ring Retainer",
    client: "SKF",
    qty: 5000,
    done: 3200,
    status: "Running",
    machine: "Line 3 — 160T Prog.",
    operator: "Suresh K.",
    priority: "high",
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
    priority: "medium",
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
    priority: "medium",
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
    priority: "low",
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
    priority: "low",
  },
];

interface MachineStatus {
  id: string;
  name: string;
  type: string;
  status: "Running" | "Idle" | "Down" | "PM";
  oee: number;
  currentPart: string;
  cycleCount: number;
  lastDowntime: string;
}

const machines: MachineStatus[] = [
  {
    id: "M1",
    name: "Line 1 — 250T Hyd.",
    type: "Hydraulic Press",
    status: "Running",
    oee: 91,
    currentPart: "TVS-FP-3847-B",
    cycleCount: 1480,
    lastDowntime: "Apr 17, 02:30",
  },
  {
    id: "M2",
    name: "Line 2 — 400T Trans.",
    type: "Transfer Press",
    status: "PM",
    oee: 0,
    currentPart: "—",
    cycleCount: 0,
    lastDowntime: "Now (PM)",
  },
  {
    id: "M3",
    name: "Line 3 — 160T Prog.",
    type: "Mechanical Press",
    status: "Running",
    oee: 88,
    currentPart: "SKF-BR-2291-A",
    cycleCount: 3200,
    lastDowntime: "Apr 15, 08:10",
  },
  {
    id: "M4",
    name: "Line 4 — 400T Servo",
    type: "Servo Transfer Press",
    status: "Idle",
    oee: 0,
    currentPart: "—",
    cycleCount: 0,
    lastDowntime: "Apr 18, 14:20",
  },
  {
    id: "M5",
    name: "Line 5 — 315T Mech.",
    type: "Mechanical Press",
    status: "Running",
    oee: 79,
    currentPart: "TVS-EC-5512-D",
    cycleCount: 820,
    lastDowntime: "Apr 14, 09:45",
  },
  {
    id: "M6",
    name: "Line 6 — 200T Hyd.",
    type: "Hydraulic Press",
    status: "Running",
    oee: 84,
    currentPart: "SKF-SP-1104-C",
    cycleCount: 540,
    lastDowntime: "Apr 16, 11:00",
  },
];

const trendData = [
  { day: "14 Apr", output: 3920, target: 4500 },
  { day: "15 Apr", output: 4180, target: 4500 },
  { day: "16 Apr", output: 4050, target: 4500 },
  { day: "17 Apr", output: 4410, target: 4500 },
  { day: "18 Apr", output: 4620, target: 4500 },
  { day: "19 Apr", output: 3980, target: 4500 },
  { day: "20 Apr", output: 4280, target: 4500 },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: WorkOrderRow["status"] }) {
  const map: Record<WorkOrderRow["status"], string> = {
    Running: "bg-chart-5/15 text-chart-5 border-chart-5/30",
    Pending: "bg-accent/15 text-accent border-accent/30",
    Done: "bg-primary/15 text-primary border-primary/30",
    "On Hold": "bg-muted text-muted-foreground border-border",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium border ${map[status]}`}
    >
      {status === "Running" && (
        <span className="w-1.5 h-1.5 rounded-full bg-chart-5 animate-pulse" />
      )}
      {status}
    </span>
  );
}

function PriorityBadge({ priority }: { priority: WorkOrderRow["priority"] }) {
  const map: Record<WorkOrderRow["priority"], string> = {
    critical: "bg-destructive/15 text-destructive border-destructive/30",
    high: "bg-accent/15 text-accent border-accent/30",
    medium: "bg-primary/15 text-primary border-primary/30",
    low: "bg-muted text-muted-foreground border-border",
  };
  return (
    <span
      className={`inline-flex px-1.5 py-0.5 rounded text-xs font-medium border capitalize ${map[priority]}`}
    >
      {priority}
    </span>
  );
}

function MachineStatusDot({ status }: { status: MachineStatus["status"] }) {
  const map: Record<
    MachineStatus["status"],
    { bg: string; ring: string; pulse: boolean }
  > = {
    Running: { bg: "bg-chart-5", ring: "ring-chart-5/30", pulse: true },
    Idle: { bg: "bg-accent", ring: "ring-accent/30", pulse: false },
    Down: { bg: "bg-destructive", ring: "ring-destructive/30", pulse: false },
    PM: { bg: "bg-primary", ring: "ring-primary/30", pulse: false },
  };
  const s = map[status];
  return (
    <span
      className={`inline-block w-2.5 h-2.5 rounded-full ${s.bg} ring-4 ${s.ring} ${s.pulse ? "animate-pulse" : ""}`}
    />
  );
}

function MachineStatusBadge({ status }: { status: MachineStatus["status"] }) {
  const map: Record<MachineStatus["status"], string> = {
    Running: "text-chart-5",
    Idle: "text-accent",
    Down: "text-destructive",
    PM: "text-primary",
  };
  return (
    <span
      className={`text-xs font-semibold uppercase tracking-wide ${map[status]}`}
    >
      {status}
    </span>
  );
}

function TrendIcon({
  trend,
  isScrap,
}: { trend: "up" | "down" | "stable"; isScrap?: boolean }) {
  if (trend === "up")
    return (
      <ArrowUp
        className={`w-3.5 h-3.5 ${isScrap ? "text-destructive" : "text-chart-5"}`}
      />
    );
  if (trend === "down")
    return (
      <ArrowDown
        className={`w-3.5 h-3.5 ${isScrap ? "text-chart-5" : "text-destructive"}`}
      />
    );
  return <Minus className="w-3.5 h-3.5 text-muted-foreground" />;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; dataKey: string }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-elevated text-xs">
      <p className="font-semibold text-foreground mb-1">{label}</p>
      {payload.map((p) => (
        <p
          key={p.dataKey}
          className={
            p.dataKey === "output" ? "text-primary" : "text-muted-foreground"
          }
        >
          {p.dataKey === "output" ? "Output" : "Target"}:{" "}
          <span className="font-bold">{p.value.toLocaleString()} pcs</span>
        </p>
      ))}
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ProductionDashboard() {
  return (
    <div className="min-h-screen bg-background" data-ocid="production.page">
      {/* ── Department Header ── */}
      <div className="bg-card border-b border-border px-6 py-5">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center">
              <Factory className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-display font-semibold text-foreground leading-tight">
                Production Department
              </h1>
              <p className="text-sm text-muted-foreground">
                Press Shop — Sheet-metal Stamping &amp; Assembly
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2 border border-border">
              <Clock className="w-4 h-4 text-accent" />
              <div>
                <p className="font-medium text-foreground">
                  {shiftSummary.shift}
                </p>
                <p className="text-xs text-muted-foreground">
                  {shiftSummary.shiftTime} · {shiftSummary.date}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-chart-5/10 border border-chart-5/25 rounded-lg px-3 py-2">
              <Zap className="w-4 h-4 text-chart-5" />
              <div>
                <p className="font-medium text-chart-5">
                  {shiftSummary.linesActive}/{shiftSummary.linesTotal} Lines
                  Active
                </p>
                <p className="text-xs text-muted-foreground">
                  Supervisor: {shiftSummary.supervisor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-6 space-y-6">
        {/* ── KPI Row ── */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          data-ocid="production.kpi.section"
        >
          {kpis.map((kpi, i) => {
            const Icon = kpi.icon;
            const pct =
              kpi.unit === "pcs"
                ? Math.round(((kpi.value as number) / kpi.target) * 100)
                : null;
            return (
              <Card
                key={kpi.label}
                className="border-border bg-card shadow-card"
                data-ocid={`production.kpi.item.${i + 1}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-lg ${kpi.bgColor} flex items-center justify-center`}
                    >
                      <Icon className={`w-4.5 h-4.5 ${kpi.color}`} size={18} />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <TrendIcon trend={kpi.trend} isScrap={kpi.isScrap} />
                      <span
                        className={
                          kpi.trend === "up" && !kpi.isScrap
                            ? "text-chart-5"
                            : kpi.trend === "down" && kpi.isScrap
                              ? "text-chart-5"
                              : kpi.trend === "down"
                                ? "text-destructive"
                                : "text-muted-foreground"
                        }
                      >
                        {kpi.trendValue}
                      </span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold kpi-value text-foreground">
                    {typeof kpi.value === "number" && kpi.unit !== "pcs"
                      ? kpi.value.toFixed(1)
                      : kpi.value.toLocaleString()}
                    <span className="text-sm font-normal text-muted-foreground ml-1">
                      {kpi.unit}
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {kpi.label}
                  </p>
                  {pct !== null && (
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>
                          {(kpi.value as number).toLocaleString()} /{" "}
                          {kpi.target.toLocaleString()} pcs
                        </span>
                        <span>{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-700"
                          style={{ width: `${Math.min(pct, 100)}%` }}
                        />
                      </div>
                    </div>
                  )}
                  {pct === null && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Target: {kpi.target}
                      {kpi.unit}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* ── Work Orders + Machine Grid ── */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Work Orders Table */}
          <div className="xl:col-span-2">
            <Card
              className="border-border bg-card shadow-card h-full"
              data-ocid="production.work_orders.section"
            >
              <CardHeader className="pb-3 border-b border-border">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Active Work Orders
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {workOrderRows.filter((w) => w.status === "Running").length}{" "}
                    Running
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table
                    className="w-full text-sm"
                    data-ocid="production.work_orders.table"
                  >
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          WO#
                        </th>
                        <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          Part
                        </th>
                        <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          Client
                        </th>
                        <th className="text-right px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          Qty
                        </th>
                        <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          Status
                        </th>
                        <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden md:table-cell">
                          Machine
                        </th>
                        <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden lg:table-cell">
                          Operator
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {workOrderRows.map((row, i) => (
                        <tr
                          key={row.wo}
                          className="border-b border-border/50 hover:bg-muted/20 transition-colors-fast"
                          data-ocid={`production.work_orders.row.${i + 1}`}
                        >
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1.5">
                              <span className="font-mono text-xs font-semibold text-primary">
                                {row.wo}
                              </span>
                              <PriorityBadge priority={row.priority} />
                            </div>
                          </td>
                          <td className="px-4 py-3 max-w-[220px]">
                            <p className="text-xs text-foreground font-medium truncate">
                              {row.part}
                            </p>
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`text-xs font-semibold ${
                                row.client === "TVS"
                                  ? "text-accent"
                                  : row.client === "SKF"
                                    ? "text-primary"
                                    : "text-muted-foreground"
                              }`}
                            >
                              {row.client}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <span className="font-mono text-xs text-foreground kpi-value">
                              {row.qty.toLocaleString()}
                            </span>
                            {row.done > 0 && (
                              <p className="text-xs text-muted-foreground">
                                {row.done.toLocaleString()} done
                              </p>
                            )}
                          </td>
                          <td className="px-4 py-3">
                            <StatusBadge status={row.status} />
                          </td>
                          <td className="px-4 py-3 hidden md:table-cell">
                            <span className="text-xs text-muted-foreground">
                              {row.machine}
                            </span>
                          </td>
                          <td className="px-4 py-3 hidden lg:table-cell">
                            <span className="text-xs text-foreground">
                              {row.operator}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Machine Status Grid */}
          <div>
            <Card
              className="border-border bg-card shadow-card h-full"
              data-ocid="production.machines.section"
            >
              <CardHeader className="pb-3 border-b border-border">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-accent" />
                    Machine Status
                  </CardTitle>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-chart-5 inline-block" />
                    Running
                    <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                    Idle
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                {machines.map((m, i) => (
                  <div
                    key={m.id}
                    className="bg-muted/30 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors-fast"
                    data-ocid={`production.machines.item.${i + 1}`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <MachineStatusDot status={m.status} />
                        <span className="text-xs font-semibold text-foreground truncate">
                          {m.name}
                        </span>
                      </div>
                      <MachineStatusBadge status={m.status} />
                    </div>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
                      <div>
                        <span className="text-muted-foreground">Part: </span>
                        <span className="font-mono text-foreground text-xs">
                          {m.currentPart}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Cycles: </span>
                        <span className="font-bold kpi-value text-foreground">
                          {m.cycleCount.toLocaleString()}
                        </span>
                      </div>
                      {m.oee > 0 && (
                        <div className="col-span-2">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-muted-foreground">OEE</span>
                            <span className="font-semibold kpi-value text-foreground">
                              {m.oee}%
                            </span>
                          </div>
                          <div className="h-1 bg-muted rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                m.oee >= 85
                                  ? "bg-chart-5"
                                  : m.oee >= 70
                                    ? "bg-accent"
                                    : "bg-destructive"
                              }`}
                              style={{ width: `${m.oee}%` }}
                            />
                          </div>
                        </div>
                      )}
                      <div className="col-span-2 text-muted-foreground">
                        Last downtime: {m.lastDowntime}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ── 7-Day Trend Chart ── */}
        <Card
          className="border-border bg-card shadow-card"
          data-ocid="production.trend.section"
        >
          <CardHeader className="pb-3 border-b border-border">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                7-Day Production Output Trend
              </CardTitle>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-primary inline-block rounded" />
                  Daily Output
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-muted-foreground/40 inline-block rounded" />
                  Target (4,500)
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-4 pb-2">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={trendData}
                margin={{ top: 0, right: 8, left: -10, bottom: 0 }}
              >
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="4 4"
                  stroke="oklch(var(--border))"
                />
                <XAxis
                  dataKey="day"
                  tick={{
                    fontSize: 11,
                    fill: "oklch(var(--muted-foreground))",
                  }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{
                    fontSize: 11,
                    fill: "oklch(var(--muted-foreground))",
                  }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v: number) => `${(v / 1000).toFixed(1)}k`}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "oklch(var(--muted) / 0.4)" }}
                />
                <Bar dataKey="output" radius={[4, 4, 0, 0]} maxBarSize={48}>
                  {trendData.map((entry) => (
                    <Cell
                      key={`cell-${entry.day}`}
                      fill={
                        entry.output >= entry.target
                          ? "oklch(var(--chart-5))"
                          : "oklch(var(--primary))"
                      }
                      opacity={0.85}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <Separator className="mt-2 mb-3" />
            <div className="grid grid-cols-7 gap-2">
              {trendData.map((d) => (
                <div key={d.day} className="text-center">
                  <p className="text-xs font-bold kpi-value text-foreground">
                    {(d.output / 1000).toFixed(1)}k
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {d.day.split(" ")[0]}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
