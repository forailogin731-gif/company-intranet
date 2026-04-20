import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BadgeIndianRupee,
  BarChart3,
  PieChart as PieChartIcon,
  Target,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  type TooltipProps,
  XAxis,
  YAxis,
} from "recharts";

interface KPICardProps {
  label: string;
  value: string;
  sub?: string;
  icon: React.ReactNode;
  trend?: "up" | "down" | "stable";
  trendLabel?: string;
  highlight?: boolean;
}

function KPICard({
  label,
  value,
  sub,
  icon,
  trend,
  trendLabel,
  highlight,
}: KPICardProps) {
  return (
    <Card
      className={`shadow-card border-border ${highlight ? "border-l-4 border-l-primary" : ""}`}
      data-ocid="finance.kpi.card"
    >
      <CardContent className="pt-5 pb-4 px-5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
              {label}
            </p>
            <p className="text-2xl font-bold kpi-value text-foreground">
              {value}
            </p>
            {sub && (
              <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
            )}
            {trend && trendLabel && (
              <div className="flex items-center gap-1 mt-1.5">
                {trend === "up" && (
                  <TrendingUp className="h-3 w-3 text-chart-5" />
                )}
                {trend === "down" && (
                  <TrendingDown className="h-3 w-3 text-destructive" />
                )}
                <span
                  className={`text-xs font-medium ${trend === "up" ? "text-chart-5" : trend === "down" ? "text-destructive" : "text-muted-foreground"}`}
                >
                  {trendLabel}
                </span>
              </div>
            )}
          </div>
          <div className="rounded-lg bg-primary/10 p-2.5 text-primary shrink-0">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const revenueExpenseData = [
  { month: "Nov '25", revenue: 148, expenses: 121, ebitda: 27 },
  { month: "Dec '25", revenue: 156, expenses: 128, ebitda: 28 },
  { month: "Jan '26", revenue: 162, expenses: 131, ebitda: 31 },
  { month: "Feb '26", revenue: 170, expenses: 137, ebitda: 33 },
  { month: "Mar '26", revenue: 178, expenses: 142, ebitda: 36 },
  { month: "Apr '26", revenue: 184, expenses: 150, ebitda: 34 },
];

const budgetData = [
  { dept: "Production", allocated: 420, spent: 318, remaining: 102 },
  { dept: "Maintenance", allocated: 85, spent: 72, remaining: 13 },
  { dept: "Quality", allocated: 42, spent: 31, remaining: 11 },
  { dept: "Tool-Room", allocated: 68, spent: 54, remaining: 14 },
  { dept: "HR", allocated: 28, spent: 21, remaining: 7 },
  { dept: "IT", allocated: 36, spent: 29, remaining: 7 },
  { dept: "NPD", allocated: 55, spent: 38, remaining: 17 },
  { dept: "Purchase", allocated: 18, spent: 14, remaining: 4 },
  { dept: "RM-Purchase", allocated: 12, spent: 8, remaining: 4 },
  { dept: "Stores", allocated: 22, spent: 17, remaining: 5 },
  { dept: "Accounts", allocated: 14, spent: 11, remaining: 3 },
  { dept: "Finance", allocated: 16, spent: 12, remaining: 4 },
  { dept: "PPC", allocated: 20, spent: 15, remaining: 5 },
];

const costCenterData = [
  { name: "Raw Materials", value: 52, color: "var(--color-chart-1)" },
  { name: "Labour & Benefits", value: 18, color: "var(--color-chart-2)" },
  { name: "Tooling & Consumables", value: 11, color: "var(--color-chart-4)" },
  { name: "Energy & Utilities", value: 7, color: "var(--color-accent)" },
  { name: "Maintenance & Repairs", value: 6, color: "var(--color-chart-3)" },
  { name: "Admin & Overhead", value: 6, color: "var(--color-chart-5)" },
];

// Chart color helpers — use CSS variables resolved at paint time
const CHART_COLORS = [
  "oklch(0.78 0.14 240)", // primary
  "oklch(0.7 0.16 45)", // accent
  "oklch(0.72 0.14 85)", // chart-4
  "oklch(0.62 0.21 25)", // destructive
  "oklch(0.68 0.15 155)", // chart-5
  "oklch(0.65 0.15 85)", // chart-4 alt
];

function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-popover shadow-elevated px-3 py-2.5 text-xs text-popover-foreground">
      <p className="font-semibold mb-1.5 text-foreground">{label}</p>
      {payload.map((p) => (
        <div key={p.name} className="flex items-center gap-2 mb-0.5">
          <span
            className="inline-block h-2 w-2 rounded-full shrink-0"
            style={{ background: p.color }}
          />
          <span className="text-muted-foreground">{p.name}:</span>
          <span className="font-medium">₹{p.value}L</span>
        </div>
      ))}
    </div>
  );
}

function PieTooltip({ active, payload }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;
  const d = payload[0];
  return (
    <div className="rounded-lg border border-border bg-popover shadow-elevated px-3 py-2 text-xs text-popover-foreground">
      <p className="font-semibold text-foreground">{d.name}</p>
      <p className="text-muted-foreground mt-0.5">
        Share: <span className="font-medium text-foreground">{d.value}%</span>
      </p>
    </div>
  );
}

export default function FinanceDashboard() {
  const totalAllocated = budgetData.reduce((s, d) => s + d.allocated, 0);
  const totalSpent = budgetData.reduce((s, d) => s + d.spent, 0);
  const utilizationPct = Math.round((totalSpent / totalAllocated) * 100);

  return (
    <div
      className="p-6 space-y-6 max-w-[1400px] mx-auto"
      data-ocid="finance.page"
    >
      {/* Header */}
      <div className="flex items-center gap-3 pb-2 border-b border-border">
        <div className="rounded-xl bg-primary/15 p-2.5">
          <BadgeIndianRupee className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Finance Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            P&L, budgeting & cost analytics — Nexus Manufacturing
          </p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-xs text-muted-foreground">FY 2025–26</p>
          <p className="text-sm font-semibold text-foreground">April 2026</p>
        </div>
      </div>

      {/* KPI Row */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        data-ocid="finance.kpi.section"
      >
        <KPICard
          label="Monthly Revenue"
          value="₹1.84 Cr"
          sub="April 2026"
          icon={<TrendingUp className="h-5 w-5" />}
          trend="up"
          trendLabel="+12% vs Mar"
          highlight
        />
        <KPICard
          label="Monthly Expenses"
          value="₹1.50 Cr"
          sub="April 2026"
          icon={<TrendingDown className="h-5 w-5" />}
          trend="stable"
          trendLabel="+5.6% vs Mar"
        />
        <KPICard
          label="EBITDA"
          value="18.4%"
          sub="₹33.9L this month"
          icon={<BarChart3 className="h-5 w-5" />}
          trend="up"
          trendLabel="+2.1% YoY"
        />
        <KPICard
          label="Budget Utilization"
          value={`${utilizationPct}%`}
          sub={`₹${totalSpent}L of ₹${totalAllocated}L`}
          icon={<Target className="h-5 w-5" />}
          trend={utilizationPct > 90 ? "down" : "stable"}
          trendLabel={utilizationPct > 90 ? "Near cap" : "On track"}
        />
      </div>

      {/* Revenue vs Expense Chart */}
      <Card
        className="shadow-card border-border"
        data-ocid="finance.revenue.chart"
      >
        <CardHeader className="pb-3 border-b border-border">
          <CardTitle className="text-base font-semibold flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-primary" />
            Revenue vs Expenses — 6-Month Trend (₹ Lakhs)
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-5 pb-2">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={revenueExpenseData} barGap={4} barCategoryGap="28%">
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="oklch(var(--border))"
                vertical={false}
              />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 11, fill: "oklch(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "oklch(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v: number) => `₹${v}L`}
                width={54}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "oklch(var(--muted) / 0.4)" }}
              />
              <Legend
                wrapperStyle={{
                  fontSize: "12px",
                  paddingTop: "12px",
                  color: "oklch(var(--muted-foreground))",
                }}
              />
              <Bar
                dataKey="revenue"
                name="Revenue"
                fill={CHART_COLORS[0]}
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="expenses"
                name="Expenses"
                fill={CHART_COLORS[1]}
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="ebitda"
                name="EBITDA"
                fill={CHART_COLORS[2]}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Budget Tracker + Cost Center */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        {/* Budget Tracker Table */}
        <Card
          className="xl:col-span-3 shadow-card border-border"
          data-ocid="finance.budget.section"
        >
          <CardHeader className="pb-3 border-b border-border">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Target className="h-4 w-4 text-accent" />
                Budget Tracker — Dept-wise (₹ Lakhs, FY Apr)
              </CardTitle>
              <span className="text-xs text-muted-foreground">
                Total: {utilizationPct}% utilised
              </span>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-auto max-h-80">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left px-4 py-2.5 text-xs font-medium text-muted-foreground">
                      Department
                    </th>
                    <th className="text-right px-3 py-2.5 text-xs font-medium text-muted-foreground">
                      Allocated
                    </th>
                    <th className="text-right px-3 py-2.5 text-xs font-medium text-muted-foreground">
                      Spent
                    </th>
                    <th className="text-right px-3 py-2.5 text-xs font-medium text-muted-foreground">
                      Remaining
                    </th>
                    <th className="px-4 py-2.5 text-xs font-medium text-muted-foreground">
                      Utilization
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {budgetData.map((row, i) => {
                    const pct = Math.round((row.spent / row.allocated) * 100);
                    const barColor =
                      pct >= 90
                        ? "bg-destructive"
                        : pct >= 75
                          ? "bg-accent"
                          : "bg-primary";
                    return (
                      <tr
                        key={row.dept}
                        className="border-b border-border last:border-0 hover:bg-muted/40 transition-colors-fast"
                        data-ocid={`finance.budget.item.${i + 1}`}
                      >
                        <td className="px-4 py-2.5 font-medium">{row.dept}</td>
                        <td className="px-3 py-2.5 text-right tabular-nums text-muted-foreground">
                          ₹{row.allocated}L
                        </td>
                        <td className="px-3 py-2.5 text-right tabular-nums font-medium">
                          ₹{row.spent}L
                        </td>
                        <td className="px-3 py-2.5 text-right tabular-nums text-chart-5">
                          ₹{row.remaining}L
                        </td>
                        <td className="px-4 py-2.5">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden min-w-[60px]">
                              <div
                                className={`h-full rounded-full ${barColor} transition-smooth`}
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                            <span
                              className={`text-xs font-semibold tabular-nums w-8 text-right ${pct >= 90 ? "text-destructive" : pct >= 75 ? "text-accent" : "text-muted-foreground"}`}
                            >
                              {pct}%
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Cost Center Pie */}
        <Card
          className="xl:col-span-2 shadow-card border-border"
          data-ocid="finance.costcenter.chart"
        >
          <CardHeader className="pb-3 border-b border-border">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <PieChartIcon className="h-4 w-4 text-chart-5" />
              Cost Center Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 pb-3">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={costCenterData}
                  cx="50%"
                  cy="50%"
                  innerRadius={52}
                  outerRadius={84}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {costCenterData.map((entry) => (
                    <Cell
                      key={entry.name}
                      fill={
                        CHART_COLORS[
                          costCenterData.indexOf(entry) % CHART_COLORS.length
                        ]
                      }
                      strokeWidth={0}
                    />
                  ))}
                </Pie>
                <Tooltip content={<PieTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            {/* Legend */}
            <div className="mt-2 space-y-1.5">
              {costCenterData.map((item, i) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block h-2.5 w-2.5 rounded-sm shrink-0"
                      style={{
                        background: CHART_COLORS[i % CHART_COLORS.length],
                      }}
                    />
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                  <span className="font-semibold tabular-nums text-foreground">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
