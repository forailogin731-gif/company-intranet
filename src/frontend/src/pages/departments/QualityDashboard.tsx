import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  ClipboardList,
  Minus,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// ── Inline sample data ────────────────────────────────────────────────────────

const kpis = [
  {
    label: "Inspection Pass Rate",
    value: 98.8,
    target: 99.0,
    unit: "%",
    trend: "up" as const,
    trendValue: "+0.4%",
    icon: ShieldCheck,
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
    goodWhenUp: true,
  },
  {
    label: "Defect Rate",
    value: 0.4,
    target: 0.5,
    unit: "%",
    trend: "down" as const,
    trendValue: "-0.2%",
    icon: AlertTriangle,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    goodWhenUp: false,
  },
  {
    label: "Customer Returns",
    value: 2,
    target: 0,
    unit: "this month",
    trend: "down" as const,
    trendValue: "-3 MoM",
    icon: RotateCcw,
    color: "text-accent",
    bgColor: "bg-accent/10",
    goodWhenUp: false,
  },
  {
    label: "Open NCRs",
    value: 4,
    target: 0,
    unit: "active",
    trend: "stable" as const,
    trendValue: "±0",
    icon: ClipboardList,
    color: "text-primary",
    bgColor: "bg-primary/10",
    goodWhenUp: false,
  },
];

interface DefectDataPoint {
  date: string;
  defects: number;
  avg: number;
}

const defectTrend: DefectDataPoint[] = [
  { date: "22 Mar", defects: 14, avg: 10 },
  { date: "25 Mar", defects: 9, avg: 10 },
  { date: "28 Mar", defects: 11, avg: 10 },
  { date: "31 Mar", defects: 16, avg: 10 },
  { date: "03 Apr", defects: 8, avg: 10 },
  { date: "06 Apr", defects: 7, avg: 10 },
  { date: "09 Apr", defects: 12, avg: 10 },
  { date: "12 Apr", defects: 5, avg: 10 },
  { date: "15 Apr", defects: 9, avg: 10 },
  { date: "18 Apr", defects: 6, avg: 10 },
  { date: "20 Apr", defects: 4, avg: 10 },
];

interface InspectionRow {
  id: string;
  part: string;
  partNumber: string;
  client: string;
  inspector: string;
  type: "Incoming" | "In-Process" | "Final";
  status: "Pass" | "Fail" | "Pending" | "On Hold";
  date: string;
  qty: number;
  rejected: number;
}

const inspections: InspectionRow[] = [
  {
    id: "INS-0084",
    part: "Front Suspension Bracket",
    partNumber: "TVS-FP-3847-B",
    client: "TVS",
    inspector: "Lakshmi Priya",
    type: "Final",
    status: "Pass",
    date: "20 Apr 2026",
    qty: 1480,
    rejected: 6,
  },
  {
    id: "INS-0083",
    part: "Inner Ring Retainer",
    partNumber: "SKF-BR-2291-A",
    client: "SKF",
    inspector: "Ramesh Pillai",
    type: "In-Process",
    status: "Pass",
    date: "20 Apr 2026",
    qty: 3200,
    rejected: 18,
  },
  {
    id: "INS-0082",
    part: "Seal Carrier Plate",
    partNumber: "SKF-SP-1104-C",
    client: "SKF",
    inspector: "Lakshmi Priya",
    type: "Incoming",
    status: "Pending",
    date: "20 Apr 2026",
    qty: 800,
    rejected: 0,
  },
  {
    id: "INS-0081",
    part: "CRCA Coil 1.5mm",
    partNumber: "RM-CRCA-1.5-IS513",
    client: "Internal",
    inspector: "Ramesh Pillai",
    type: "Incoming",
    status: "Pass",
    date: "19 Apr 2026",
    qty: 18,
    rejected: 1,
  },
  {
    id: "INS-0080",
    part: "Engine Bay Cover",
    partNumber: "TVS-EC-5512-D",
    client: "TVS",
    inspector: "Kavitha S.",
    type: "Final",
    status: "Fail",
    date: "19 Apr 2026",
    qty: 240,
    rejected: 14,
  },
  {
    id: "INS-0079",
    part: "Bracket Prototype — New Chassis",
    partNumber: "NPD-CB-0034",
    client: "SKF",
    inspector: "Kavitha S.",
    type: "In-Process",
    status: "On Hold",
    date: "18 Apr 2026",
    qty: 10,
    rejected: 3,
  },
];

interface QualityAlert {
  id: string;
  client: "TVS" | "SKF" | "Internal";
  description: string;
  severity: "Critical" | "Major" | "Minor";
  part: string;
  partNumber: string;
  raisedDate: string;
  action: string;
  owner: string;
  status: "Open" | "Under Review" | "Closed";
}

const qualityAlerts: QualityAlert[] = [
  {
    id: "QA-2026-041",
    client: "TVS",
    description:
      "Dimensional deviation on hole pitch — exceeds ±0.05mm tolerance on 3.2% of batch",
    severity: "Major",
    part: "Engine Bay Cover",
    partNumber: "TVS-EC-5512-D",
    raisedDate: "19 Apr 2026",
    action: "Tooling inspection & die adjustment on Line 1. CAPA due 22 Apr.",
    owner: "Kavitha Subramanian",
    status: "Open",
  },
  {
    id: "QA-2026-040",
    client: "SKF",
    description:
      "Surface roughness Rz > 6.3µm on bearing retainer OD — exceeds spec of 4.0µm",
    severity: "Critical",
    part: "Inner Ring Retainer",
    partNumber: "SKF-BR-2291-A",
    raisedDate: "18 Apr 2026",
    action:
      "SPC review on Line 3 tooling. Batch quarantined. 8D report raised with SKF.",
    owner: "Kavitha Subramanian",
    status: "Under Review",
  },
  {
    id: "QA-2026-038",
    client: "TVS",
    description:
      "Burr height >0.2mm detected on 4 pcs from WO-001 final lot during PDI",
    severity: "Minor",
    part: "Front Suspension Bracket",
    partNumber: "TVS-FP-3847-B",
    raisedDate: "17 Apr 2026",
    action:
      "Deburring rework completed. Additional in-process check added at Line 1 press exit.",
    owner: "Lakshmi Priya",
    status: "Closed",
  },
  {
    id: "QA-2026-035",
    client: "Internal",
    description:
      "PPAP documentation gap — missing MSA study for gauges on Line 3 fixture",
    severity: "Major",
    part: "All Line 3 Parts",
    partNumber: "GEN-LINE3",
    raisedDate: "14 Apr 2026",
    action: "MSA study scheduled for 24 Apr. Gauge R&R team assigned.",
    owner: "Kavitha Subramanian",
    status: "Open",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function InspStatusBadge({ status }: { status: InspectionRow["status"] }) {
  const map: Record<InspectionRow["status"], string> = {
    Pass: "bg-chart-5/15 text-chart-5 border-chart-5/30",
    Fail: "bg-destructive/15 text-destructive border-destructive/30",
    Pending: "bg-accent/15 text-accent border-accent/30",
    "On Hold": "bg-muted text-muted-foreground border-border",
  };
  const icons: Record<InspectionRow["status"], React.ReactNode> = {
    Pass: <CheckCircle2 className="w-3 h-3" />,
    Fail: <XCircle className="w-3 h-3" />,
    Pending: (
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
    ),
    "On Hold": null,
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium border ${map[status]}`}
    >
      {icons[status]}
      {status}
    </span>
  );
}

function InspTypeBadge({ type }: { type: InspectionRow["type"] }) {
  const map: Record<InspectionRow["type"], string> = {
    Incoming: "bg-primary/10 text-primary border-primary/20",
    "In-Process": "bg-accent/10 text-accent border-accent/20",
    Final: "bg-chart-5/10 text-chart-5 border-chart-5/20",
  };
  return (
    <span
      className={`inline-flex px-1.5 py-0.5 rounded text-xs font-medium border ${map[type]}`}
    >
      {type}
    </span>
  );
}

function SeverityBadge({ severity }: { severity: QualityAlert["severity"] }) {
  const map: Record<QualityAlert["severity"], string> = {
    Critical: "bg-destructive/15 text-destructive border-destructive/30",
    Major: "bg-accent/15 text-accent border-accent/30",
    Minor: "bg-muted text-muted-foreground border-border",
  };
  return (
    <span
      className={`inline-flex px-2 py-0.5 rounded text-xs font-semibold border ${map[severity]}`}
    >
      {severity}
    </span>
  );
}

function AlertStatusBadge({ status }: { status: QualityAlert["status"] }) {
  const map: Record<QualityAlert["status"], string> = {
    Open: "bg-destructive/12 text-destructive",
    "Under Review": "bg-accent/12 text-accent",
    Closed: "bg-chart-5/12 text-chart-5",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${map[status]}`}
    >
      {status === "Open" && (
        <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse" />
      )}
      {status}
    </span>
  );
}

function TrendIcon({
  trend,
  goodWhenUp,
}: { trend: "up" | "down" | "stable"; goodWhenUp: boolean }) {
  if (trend === "up") {
    return (
      <ArrowUp
        className={`w-3.5 h-3.5 ${goodWhenUp ? "text-chart-5" : "text-destructive"}`}
      />
    );
  }
  if (trend === "down") {
    return (
      <ArrowDown
        className={`w-3.5 h-3.5 ${goodWhenUp ? "text-destructive" : "text-chart-5"}`}
      />
    );
  }
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
            p.dataKey === "defects"
              ? "text-destructive"
              : "text-muted-foreground"
          }
        >
          {p.dataKey === "defects" ? "Defects" : "Avg (30d)"}:{" "}
          <span className="font-bold">{p.value}</span>
        </p>
      ))}
    </div>
  );
}

// React needed for JSX return in dot render prop
import type React from "react";

// ── Component ─────────────────────────────────────────────────────────────────

export default function QualityDashboard() {
  return (
    <div className="min-h-screen bg-background" data-ocid="quality.page">
      {/* ── Department Header ── */}
      <div className="bg-card border-b border-border px-6 py-5">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-chart-5/15 border border-chart-5/25 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-chart-5" />
            </div>
            <div>
              <h1 className="text-xl font-display font-semibold text-foreground leading-tight">
                Quality Department
              </h1>
              <p className="text-sm text-muted-foreground">
                Incoming · In-Process · Final Inspection — PPAP / APQP / MSA
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-2 bg-chart-5/10 border border-chart-5/25 rounded-lg px-3 py-2">
              <ShieldCheck className="w-4 h-4 text-chart-5" />
              <div>
                <p className="font-medium text-chart-5">
                  333 Inspections This Month
                </p>
                <p className="text-xs text-muted-foreground">
                  Lead: Kavitha Subramanian
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-destructive/10 border border-destructive/25 rounded-lg px-3 py-2">
              <ShieldAlert className="w-4 h-4 text-destructive" />
              <div>
                <p className="font-medium text-destructive">4 Open NCRs</p>
                <p className="text-xs text-muted-foreground">
                  Customer PPM: 18
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
          data-ocid="quality.kpi.section"
        >
          {kpis.map((kpi, i) => {
            const Icon = kpi.icon;
            return (
              <Card
                key={kpi.label}
                className="border-border bg-card shadow-card"
                data-ocid={`quality.kpi.item.${i + 1}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-lg ${kpi.bgColor} flex items-center justify-center`}
                    >
                      <Icon className={`${kpi.color}`} size={18} />
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <TrendIcon
                        trend={kpi.trend}
                        goodWhenUp={kpi.goodWhenUp}
                      />
                      <span
                        className={
                          kpi.trend === "stable"
                            ? "text-muted-foreground"
                            : (kpi.trend === "up") === kpi.goodWhenUp
                              ? "text-chart-5"
                              : "text-destructive"
                        }
                      >
                        {kpi.trendValue}
                      </span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold kpi-value text-foreground">
                    {kpi.value}
                    {kpi.unit === "%" && (
                      <span className="text-sm font-normal text-muted-foreground ml-0.5">
                        %
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {kpi.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {kpi.unit !== "%" ? kpi.unit : `Target: ${kpi.target}%`}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* ── Defect Trend + Inspection Table ── */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
          {/* Defect Trend Chart */}
          <div className="xl:col-span-2">
            <Card
              className="border-border bg-card shadow-card h-full"
              data-ocid="quality.defect_trend.section"
            >
              <CardHeader className="pb-3 border-b border-border">
                <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                  30-Day Defect Count Trend
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 pb-2">
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart
                    data={defectTrend}
                    margin={{ top: 4, right: 8, left: -14, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="4 4"
                      stroke="oklch(var(--border))"
                    />
                    <XAxis
                      dataKey="date"
                      tick={{
                        fontSize: 10,
                        fill: "oklch(var(--muted-foreground))",
                      }}
                      axisLine={false}
                      tickLine={false}
                      interval={2}
                    />
                    <YAxis
                      tick={{
                        fontSize: 11,
                        fill: "oklch(var(--muted-foreground))",
                      }}
                      axisLine={false}
                      tickLine={false}
                      domain={[0, 20]}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <ReferenceLine
                      y={10}
                      stroke="oklch(var(--accent))"
                      strokeDasharray="4 4"
                      strokeWidth={1.5}
                      label={{
                        value: "Avg",
                        fill: "oklch(var(--accent))",
                        fontSize: 10,
                        position: "right",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="defects"
                      stroke="oklch(var(--destructive))"
                      strokeWidth={2}
                      dot={(props) => {
                        const { cx, cy, value } = props as {
                          cx: number;
                          cy: number;
                          value: number;
                        };
                        return (
                          <circle
                            key={`dot-${cx}-${cy}`}
                            cx={cx}
                            cy={cy}
                            r={3.5}
                            fill={
                              value >= 10
                                ? "oklch(var(--destructive))"
                                : "oklch(var(--chart-5))"
                            }
                            stroke="oklch(var(--card))"
                            strokeWidth={1.5}
                          />
                        );
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <Separator className="mt-3 mb-3" />
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-xs font-bold kpi-value text-destructive">
                      16
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Peak (31 Mar)
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold kpi-value text-chart-5">
                      4
                    </p>
                    <p className="text-xs text-muted-foreground">Today</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold kpi-value text-foreground">
                      9.2
                    </p>
                    <p className="text-xs text-muted-foreground">30d Avg</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Inspection Checklist Table */}
          <div className="xl:col-span-3">
            <Card
              className="border-border bg-card shadow-card h-full"
              data-ocid="quality.inspections.section"
            >
              <CardHeader className="pb-3 border-b border-border">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
                    <ClipboardList className="w-4 h-4 text-primary" />
                    Inspection Checklist
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {inspections.filter((r) => r.status === "Pending").length}{" "}
                    Pending
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table
                    className="w-full text-sm"
                    data-ocid="quality.inspections.table"
                  >
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          ID
                        </th>
                        <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          Part
                        </th>
                        <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden sm:table-cell">
                          Type
                        </th>
                        <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          Inspector
                        </th>
                        <th className="text-right px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden md:table-cell">
                          Qty / Rej
                        </th>
                        <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          Status
                        </th>
                        <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden lg:table-cell">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {inspections.map((row, i) => (
                        <tr
                          key={row.id}
                          className="border-b border-border/50 hover:bg-muted/20 transition-colors-fast"
                          data-ocid={`quality.inspections.row.${i + 1}`}
                        >
                          <td className="px-4 py-3">
                            <span className="font-mono text-xs font-semibold text-primary">
                              {row.id}
                            </span>
                          </td>
                          <td className="px-4 py-3 max-w-[180px]">
                            <p className="text-xs font-medium text-foreground truncate">
                              {row.part}
                            </p>
                            <p className="text-xs text-muted-foreground font-mono">
                              {row.partNumber}
                            </p>
                          </td>
                          <td className="px-4 py-3 hidden sm:table-cell">
                            <InspTypeBadge type={row.type} />
                          </td>
                          <td className="px-4 py-3">
                            <span className="text-xs text-foreground">
                              {row.inspector}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right hidden md:table-cell">
                            <span className="font-mono text-xs text-foreground kpi-value">
                              {row.qty.toLocaleString()}
                            </span>
                            {row.rejected > 0 && (
                              <p className="text-xs text-destructive font-mono">
                                {row.rejected} rej.
                              </p>
                            )}
                          </td>
                          <td className="px-4 py-3">
                            <InspStatusBadge status={row.status} />
                          </td>
                          <td className="px-4 py-3 hidden lg:table-cell">
                            <span className="text-xs text-muted-foreground">
                              {row.date}
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
        </div>

        {/* ── Customer Quality Alerts ── */}
        <Card
          className="border-border bg-card shadow-card"
          data-ocid="quality.alerts.section"
        >
          <CardHeader className="pb-3 border-b border-border">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-destructive" />
                Customer Quality Alerts
              </CardTitle>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-destructive animate-pulse inline-block" />
                  Open
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                  Under Review
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-chart-5 inline-block" />
                  Closed
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 grid gap-3 md:grid-cols-2">
            {qualityAlerts.map((alert, i) => (
              <div
                key={alert.id}
                className={`rounded-lg border p-4 space-y-2.5 transition-colors-fast hover:bg-muted/20 ${
                  alert.status === "Closed"
                    ? "border-border bg-muted/20 opacity-70"
                    : alert.severity === "Critical"
                      ? "border-destructive/30 bg-destructive/5"
                      : "border-border bg-card"
                }`}
                data-ocid={`quality.alerts.item.${i + 1}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className={`text-xs font-bold ${
                        alert.client === "TVS"
                          ? "text-accent"
                          : alert.client === "SKF"
                            ? "text-primary"
                            : "text-muted-foreground"
                      }`}
                    >
                      {alert.client}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">
                      {alert.id}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <SeverityBadge severity={alert.severity} />
                    <AlertStatusBadge status={alert.status} />
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground leading-snug">
                    {alert.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 font-mono">
                    {alert.partNumber} — {alert.part}
                  </p>
                </div>

                <Separator className="opacity-50" />

                <div className="space-y-1">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-chart-5 mt-0.5 shrink-0" />
                    <p className="text-xs text-foreground">{alert.action}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Owner: {alert.owner}</span>
                    <span>Raised: {alert.raisedDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
