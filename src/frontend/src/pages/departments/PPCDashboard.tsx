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
  AlertTriangle,
  BarChart3,
  CalendarClock,
  CheckCircle2,
  Clock,
  PackageCheck,
  PackageX,
  Target,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// ── Types ────────────────────────────────────────────────────────────────────

interface ProductionOrder {
  id: string;
  orderNo: string;
  partNo: string;
  client: "TVS Motor Company" | "SKF Bearings India" | "Internal";
  qtyRequired: number;
  qtyProduced: number;
  dueDate: string;
  status: "planned" | "released" | "in-progress" | "completed" | "overdue";
  machine: string;
}

interface CapacityWeek {
  week: string;
  planned: number;
  actual: number;
}

interface MaterialStatus {
  id: string;
  material: string;
  sku: string;
  required: number;
  available: number;
  unit: string;
  status: "available" | "low" | "critical";
  supplier: string;
  eta?: string;
}

// ── Static Data ───────────────────────────────────────────────────────────────

const productionOrders: ProductionOrder[] = [
  {
    id: "po1",
    orderNo: "PO-APR-001",
    partNo: "TVS-FP-3847-B",
    client: "TVS Motor Company",
    qtyRequired: 2000,
    qtyProduced: 1480,
    dueDate: "22 Apr 2026",
    status: "in-progress",
    machine: "250T Line 1",
  },
  {
    id: "po2",
    orderNo: "PO-APR-002",
    partNo: "SKF-BR-2291-A",
    client: "SKF Bearings India",
    qtyRequired: 5000,
    qtyProduced: 3200,
    dueDate: "24 Apr 2026",
    status: "in-progress",
    machine: "160T Line 3",
  },
  {
    id: "po3",
    orderNo: "PO-APR-003",
    partNo: "TVS-EC-5512-D",
    client: "TVS Motor Company",
    qtyRequired: 1500,
    qtyProduced: 1500,
    dueDate: "19 Apr 2026",
    status: "completed",
    machine: "250T Line 1",
  },
  {
    id: "po4",
    orderNo: "PO-APR-004",
    partNo: "TVS-CS-7714-F",
    client: "TVS Motor Company",
    qtyRequired: 3000,
    qtyProduced: 0,
    dueDate: "28 Apr 2026",
    status: "released",
    machine: "630T Line 4",
  },
  {
    id: "po5",
    orderNo: "PO-APR-005",
    partNo: "SKF-HB-4482-C",
    client: "SKF Bearings India",
    qtyRequired: 8000,
    qtyProduced: 0,
    dueDate: "30 Apr 2026",
    status: "planned",
    machine: "160T Line 3",
  },
  {
    id: "po6",
    orderNo: "PO-APR-006",
    partNo: "TVS-RM-1023-G",
    client: "TVS Motor Company",
    qtyRequired: 2500,
    qtyProduced: 600,
    dueDate: "18 Apr 2026",
    status: "overdue",
    machine: "400T Line 2",
  },
  {
    id: "po7",
    orderNo: "PO-APR-007",
    partNo: "SKF-PR-9901-B",
    client: "SKF Bearings India",
    qtyRequired: 12000,
    qtyProduced: 12000,
    dueDate: "15 Apr 2026",
    status: "completed",
    machine: "630T Line 4",
  },
  {
    id: "po8",
    orderNo: "PO-APR-008",
    partNo: "TVS-SB-2218-A",
    client: "TVS Motor Company",
    qtyRequired: 4000,
    qtyProduced: 0,
    dueDate: "05 May 2026",
    status: "planned",
    machine: "250T Line 1",
  },
];

const capacityData: CapacityWeek[] = [
  { week: "W14", planned: 85, actual: 82 },
  { week: "W15", planned: 88, actual: 91 },
  { week: "W16", planned: 90, actual: 87 },
  { week: "W17", planned: 86, actual: 84 },
  { week: "W18", planned: 92, actual: 78 },
];

const materials: MaterialStatus[] = [
  {
    id: "mat1",
    material: "CRCA Sheet Coil 1.5mm",
    sku: "RM-CRCA-1.5-IS513",
    required: 25,
    available: 18,
    unit: "Coils",
    status: "critical",
    supplier: "JSW Steel",
    eta: "26 Apr 2026",
  },
  {
    id: "mat2",
    material: "HRCA Coil 2.5mm",
    sku: "RM-HRCA-2.5-IS1079",
    required: 20,
    available: 42,
    unit: "Coils",
    status: "available",
    supplier: "TATA Steel",
  },
  {
    id: "mat3",
    material: "HSLA 650 Grade Coil 3mm",
    sku: "RM-HSLA-3.0-IS8500",
    required: 15,
    available: 12,
    unit: "Coils",
    status: "low",
    supplier: "Steel Authority India",
    eta: "28 Apr 2026",
  },
  {
    id: "mat4",
    material: "CR Coil 0.8mm (Skin Pass)",
    sku: "RM-CR-0.8-IS513SP",
    required: 8,
    available: 22,
    unit: "Coils",
    status: "available",
    supplier: "Bhushan Power",
  },
  {
    id: "mat5",
    material: "Cutting Fluid — Water Soluble",
    sku: "CONS-CF-WS-20L",
    required: 8,
    available: 12,
    unit: "Cans",
    status: "available",
    supplier: "Blaser Swisslube",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function orderStatusConfig(s: ProductionOrder["status"]) {
  switch (s) {
    case "planned":
      return {
        label: "Planned",
        color: "bg-muted text-muted-foreground border-border",
      };
    case "released":
      return {
        label: "Released",
        color: "bg-primary/15 text-primary border-primary/30",
      };
    case "in-progress":
      return {
        label: "In Progress",
        color: "bg-accent/15 text-accent border-accent/30",
      };
    case "completed":
      return {
        label: "Completed",
        color: "bg-chart-5/15 text-chart-5 border-chart-5/30",
      };
    case "overdue":
      return {
        label: "Overdue",
        color: "bg-destructive/15 text-destructive border-destructive/30",
      };
  }
}

function materialStatusConfig(s: MaterialStatus["status"]) {
  switch (s) {
    case "available":
      return {
        icon: <CheckCircle2 className="w-3.5 h-3.5" />,
        color: "text-chart-5",
        bg: "bg-chart-5/10 border-chart-5/25",
        label: "Available",
      };
    case "low":
      return {
        icon: <AlertTriangle className="w-3.5 h-3.5" />,
        color: "text-accent",
        bg: "bg-accent/10 border-accent/25",
        label: "Low Stock",
      };
    case "critical":
      return {
        icon: <PackageX className="w-3.5 h-3.5" />,
        color: "text-destructive",
        bg: "bg-destructive/10 border-destructive/25",
        label: "Critical",
      };
  }
}

function clientBadge(client: ProductionOrder["client"]) {
  if (client === "TVS Motor Company")
    return "bg-chart-1/15 text-chart-1 border-chart-1/25";
  if (client === "SKF Bearings India")
    return "bg-chart-4/15 text-chart-4 border-chart-4/25";
  return "bg-muted text-muted-foreground border-border";
}

function ProgressBar({ value, max }: { value: number; max: number }) {
  const pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;
  const color =
    pct === 100 ? "bg-chart-5" : pct > 50 ? "bg-primary" : "bg-accent";
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs text-muted-foreground kpi-value w-8 text-right">
        {pct}%
      </span>
    </div>
  );
}

function KPICard({
  label,
  value,
  sub,
  icon: Icon,
  accent = false,
}: {
  label: string;
  value: string;
  sub?: string;
  icon: React.ElementType;
  accent?: boolean;
}) {
  return (
    <Card className="border-border bg-card shadow-card">
      <CardContent className="p-5 flex items-start gap-4">
        <div
          className={`p-2.5 rounded-lg border shrink-0 ${accent ? "bg-accent/10 border-accent/20" : "bg-primary/10 border-primary/20"}`}
        >
          <Icon
            className={`w-5 h-5 ${accent ? "text-accent" : "text-primary"}`}
          />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
            {label}
          </p>
          <p className="text-2xl font-bold kpi-value text-foreground mt-0.5">
            {value}
          </p>
          {sub && <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>}
        </div>
      </CardContent>
    </Card>
  );
}

interface TooltipPayloadItem {
  color: string;
  name: string;
  value: number;
}

function CustomTooltip({
  active,
  payload,
  label,
}: { active?: boolean; payload?: TooltipPayloadItem[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-elevated text-xs">
      <p className="font-semibold text-foreground mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }}>
          {p.name}: <span className="font-bold">{p.value}%</span>
        </p>
      ))}
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function PPCDashboard() {
  const onSchedule = productionOrders.filter(
    (o) => o.status !== "overdue",
  ).length;
  const schedulePct = Math.round((onSchedule / productionOrders.length) * 100);
  const currentCapacity = capacityData[capacityData.length - 1].actual;
  const pendingOrders = productionOrders.filter(
    (o) => o.status === "planned" || o.status === "released",
  ).length;
  const overdueOrders = productionOrders.filter(
    (o) => o.status === "overdue",
  ).length;

  return (
    <div className="space-y-6" data-ocid="ppc.page">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex items-center gap-3 mb-1">
          <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
            <CalendarClock className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">PPC</h1>
            <p className="text-sm text-muted-foreground">
              Production Planning &amp; Control — scheduling, capacity, and
              dispatch coordination
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
        data-ocid="ppc.kpi.section"
      >
        <KPICard
          label="Orders on Schedule"
          value={`${schedulePct}%`}
          sub={`${onSchedule} of ${productionOrders.length} orders`}
          icon={Target}
        />
        <KPICard
          label="Capacity Utilization"
          value={`${currentCapacity}%`}
          sub="Week 18 — Apr 20–26"
          icon={TrendingUp}
        />
        <KPICard
          label="Pending Orders"
          value={`${pendingOrders}`}
          sub="Planned + Released"
          icon={Clock}
          accent
        />
        <KPICard
          label="Overdue Releases"
          value={`${overdueOrders}`}
          sub="Immediate action needed"
          icon={AlertTriangle}
          accent
        />
      </motion.div>

      {/* Production Schedule */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <Card
          className="border-border bg-card shadow-card"
          data-ocid="ppc.schedule.section"
        >
          <CardHeader className="pb-3 border-b border-border">
            <CardTitle className="flex items-center gap-2 text-base font-semibold">
              <BarChart3 className="w-4 h-4 text-primary" />
              Production Schedule
              <span className="ml-auto text-xs font-normal text-muted-foreground">
                April 2026
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-xs text-muted-foreground px-4 py-2.5">
                    Order #
                  </TableHead>
                  <TableHead className="text-xs text-muted-foreground px-4 py-2.5">
                    Part No.
                  </TableHead>
                  <TableHead className="text-xs text-muted-foreground px-4 py-2.5">
                    Client
                  </TableHead>
                  <TableHead className="text-xs text-muted-foreground px-4 py-2.5 text-right">
                    Qty Required
                  </TableHead>
                  <TableHead className="text-xs text-muted-foreground px-4 py-2.5">
                    Progress
                  </TableHead>
                  <TableHead className="text-xs text-muted-foreground px-4 py-2.5">
                    Due Date
                  </TableHead>
                  <TableHead className="text-xs text-muted-foreground px-4 py-2.5">
                    Machine
                  </TableHead>
                  <TableHead className="text-xs text-muted-foreground px-4 py-2.5 text-center">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productionOrders.map((o, i) => {
                  const cfg = orderStatusConfig(o.status);
                  return (
                    <TableRow
                      key={o.id}
                      className="border-border hover:bg-muted/30 transition-colors-fast"
                      data-ocid={`ppc.order.item.${i + 1}`}
                    >
                      <TableCell className="px-4 py-3 font-mono text-xs text-foreground">
                        {o.orderNo}
                      </TableCell>
                      <TableCell className="px-4 py-3 font-mono text-xs text-foreground font-medium">
                        {o.partNo}
                      </TableCell>
                      <TableCell className="px-4 py-3">
                        <Badge
                          variant="outline"
                          className={`text-[10px] px-1.5 ${clientBadge(o.client)}`}
                        >
                          {o.client === "TVS Motor Company"
                            ? "TVS"
                            : o.client === "SKF Bearings India"
                              ? "SKF"
                              : "Internal"}
                        </Badge>
                      </TableCell>
                      <TableCell className="px-4 py-3 text-right text-sm font-semibold kpi-value text-foreground">
                        {o.qtyRequired.toLocaleString()}
                      </TableCell>
                      <TableCell className="px-4 py-3 w-36">
                        <ProgressBar
                          value={o.qtyProduced}
                          max={o.qtyRequired}
                        />
                      </TableCell>
                      <TableCell className="px-4 py-3 text-xs text-muted-foreground whitespace-nowrap">
                        {o.dueDate}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-xs text-muted-foreground">
                        {o.machine}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-center">
                        <Badge
                          variant="outline"
                          className={`text-[10px] px-2 ${cfg.color}`}
                        >
                          {cfg.label}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Capacity Chart + Material Availability */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        {/* Capacity Utilization Chart */}
        <motion.div
          className="xl:col-span-3"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.22 }}
        >
          <Card
            className="border-border bg-card shadow-card h-full"
            data-ocid="ppc.capacity_chart.section"
          >
            <CardHeader className="pb-3 border-b border-border">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <TrendingUp className="w-4 h-4 text-primary" />
                Capacity Utilization — Weekly
                <span className="ml-auto text-xs font-normal text-muted-foreground">
                  W14–W18
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-5 pb-3 px-4">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={capacityData} barGap={4} barCategoryGap="28%">
                  <CartesianGrid
                    vertical={false}
                    strokeDasharray="3 3"
                    stroke="oklch(var(--border))"
                  />
                  <XAxis
                    dataKey="week"
                    tick={{
                      fontSize: 11,
                      fill: "oklch(var(--muted-foreground))",
                    }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[60, 100]}
                    tickFormatter={(v: number) => `${v}%`}
                    tick={{
                      fontSize: 11,
                      fill: "oklch(var(--muted-foreground))",
                    }}
                    axisLine={false}
                    tickLine={false}
                    width={36}
                  />
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{ fill: "oklch(var(--muted) / 0.4)" }}
                  />
                  <Bar
                    dataKey="planned"
                    name="Planned"
                    fill="oklch(var(--primary) / 0.35)"
                    radius={[3, 3, 0, 0]}
                  />
                  <Bar
                    dataKey="actual"
                    name="Actual"
                    fill="oklch(var(--primary))"
                    radius={[3, 3, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-5 justify-center mt-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-primary/35" />
                  <span className="text-xs text-muted-foreground">Planned</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-primary" />
                  <span className="text-xs text-muted-foreground">Actual</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Material Availability */}
        <motion.div
          className="xl:col-span-2"
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          <Card
            className="border-border bg-card shadow-card h-full"
            data-ocid="ppc.material.section"
          >
            <CardHeader className="pb-3 border-b border-border">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <PackageCheck className="w-4 h-4 text-accent" />
                Material Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {materials.map((m, i) => {
                  const cfg = materialStatusConfig(m.status);
                  const availPct = Math.min(
                    100,
                    Math.round((m.available / m.required) * 100),
                  );
                  return (
                    <div
                      key={m.id}
                      className="px-4 py-3.5 hover:bg-muted/30 transition-colors-fast"
                      data-ocid={`ppc.material.item.${i + 1}`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-foreground truncate">
                            {m.material}
                          </p>
                          <p className="text-[10px] text-muted-foreground font-mono">
                            {m.sku}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className={`text-[10px] px-1.5 shrink-0 flex items-center gap-1 ${cfg.color} ${cfg.bg} border`}
                        >
                          {cfg.icon}
                          {cfg.label}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${availPct >= 100 ? "bg-chart-5" : availPct >= 75 ? "bg-primary" : availPct >= 50 ? "bg-accent" : "bg-destructive"}`}
                            style={{ width: `${Math.min(availPct, 100)}%` }}
                          />
                        </div>
                        <span className="text-xs text-foreground font-semibold kpi-value w-20 text-right">
                          {m.available}/{m.required} {m.unit}
                        </span>
                      </div>
                      {m.eta && (
                        <p className="text-[10px] text-muted-foreground mt-1.5 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          ETA: {m.eta} · {m.supplier}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
