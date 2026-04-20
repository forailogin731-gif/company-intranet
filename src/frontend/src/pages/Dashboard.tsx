import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  alerts,
  announcements,
  currentUser,
  departments,
  employees,
  equipment,
  newsArticles,
  workOrders,
} from "@/data/mock";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  Cog,
  Factory,
  Info,
  Lightbulb,
  Monitor,
  PackageSearch,
  ShieldCheck,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
  Users,
  Warehouse,
  Wrench,
  Zap,
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import { motion } from "motion/react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

/* ─── helpers ─────────────────────────────────────────── */
type LucideIconName = keyof typeof LucideIcons;

function DynamicIcon({
  name,
  className,
  style,
}: {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const Icon = LucideIcons[name as LucideIconName] as React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  if (!Icon) return null;
  return <Icon className={className} style={style} />;
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (mins < 60) return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days === 1) return "Yesterday";
  return `${days}d ago`;
}

const deptIconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="h-4 w-4" />,
  TrendingUp: <TrendingUp className="h-4 w-4" />,
  Users: <Users className="h-4 w-4" />,
  Monitor: <Monitor className="h-4 w-4" />,
  Wrench: <Wrench className="h-4 w-4" />,
  Lightbulb: <Lightbulb className="h-4 w-4" />,
  CalendarClock: <CalendarClock className="h-4 w-4" />,
  Factory: <Factory className="h-4 w-4" />,
  ShoppingCart: <ShoppingCart className="h-4 w-4" />,
  ShieldCheck: <ShieldCheck className="h-4 w-4" />,
  PackageSearch: <PackageSearch className="h-4 w-4" />,
  Warehouse: <Warehouse className="h-4 w-4" />,
  Cog: <Cog className="h-4 w-4" />,
};

/* ─── sparkline data per KPI ─────────────────────────── */
const sparklineData = {
  employees: [
    { v: 208 },
    { v: 210 },
    { v: 212 },
    { v: 211 },
    { v: 214 },
    { v: 215 },
    { v: 218 },
  ],
  workOrders: [
    { v: 5 },
    { v: 7 },
    { v: 6 },
    { v: 8 },
    { v: 7 },
    { v: 9 },
    { v: 8 },
  ],
  machines: [
    { v: 10 },
    { v: 11 },
    { v: 11 },
    { v: 12 },
    { v: 11 },
    { v: 12 },
    { v: 12 },
  ],
  quality: [
    { v: 96.2 },
    { v: 97.1 },
    { v: 97.8 },
    { v: 98.1 },
    { v: 97.9 },
    { v: 98.4 },
    { v: 98.8 },
  ],
  alerts: [
    { v: 8 },
    { v: 6 },
    { v: 7 },
    { v: 5 },
    { v: 6 },
    { v: 5 },
    { v: 4 },
  ],
  departments: [
    { v: 11 },
    { v: 12 },
    { v: 12 },
    { v: 13 },
    { v: 13 },
    { v: 13 },
    { v: 13 },
  ],
};

/* ─── derived data ─────────────────────────────────────── */
const totalHeadcount = departments.reduce((s, d) => s + d.headCount, 0);
const activeWOs = workOrders.filter((w) => w.status === "in-progress");
const openAlerts = alerts.filter((a) => !a.isResolved);
const criticalAlerts = openAlerts.filter((a) => a.severity === "critical");
const machinesOnline = equipment.filter(
  (e) => e.status === "operational",
).length;
const onlineEmployees = employees.filter((e) => e.isOnline).length;

type SparkColor =
  | "primary"
  | "accent"
  | "success"
  | "warning"
  | "danger"
  | "info";

interface KpiCard {
  label: string;
  value: string | number;
  delta: string;
  trend: "up" | "down" | "stable";
  icon: string;
  sparkKey: keyof typeof sparklineData;
  color: SparkColor;
}

const kpiCards: KpiCard[] = [
  {
    label: "Total Employees",
    value: totalHeadcount,
    delta: "+4 this month",
    trend: "up",
    icon: "Users",
    sparkKey: "employees",
    color: "primary",
  },
  {
    label: "Active Work Orders",
    value: activeWOs.length,
    delta: `${workOrders.filter((w) => w.status === "open").length} pending start`,
    trend: "stable",
    icon: "ClipboardList",
    sparkKey: "workOrders",
    color: "accent",
  },
  {
    label: "Machines Online",
    value: `${machinesOnline}/${equipment.length}`,
    delta: `${equipment.filter((e) => e.status === "breakdown").length} in breakdown`,
    trend: "down",
    icon: "Cpu",
    sparkKey: "machines",
    color: "info",
  },
  {
    label: "Quality Pass Rate",
    value: "98.8%",
    delta: "+0.4% vs last week",
    trend: "up",
    icon: "ShieldCheck",
    sparkKey: "quality",
    color: "success",
  },
  {
    label: "Open Alerts",
    value: openAlerts.length,
    delta: `${criticalAlerts.length} critical`,
    trend: criticalAlerts.length > 0 ? "down" : "stable",
    icon: "AlertTriangle",
    sparkKey: "alerts",
    color: "danger",
  },
  {
    label: "Departments Active",
    value: departments.length,
    delta: `${onlineEmployees} members online`,
    trend: "stable",
    icon: "Building2",
    sparkKey: "departments",
    color: "primary",
  },
];

const sparkColorMap: Record<SparkColor, string> = {
  primary: "oklch(0.78 0.14 240)",
  accent: "oklch(0.7 0.16 45)",
  success: "oklch(0.68 0.15 155)",
  warning: "oklch(0.72 0.14 85)",
  danger: "oklch(0.62 0.21 25)",
  info: "oklch(0.68 0.15 200)",
};

const sparkBgMap: Record<SparkColor, string> = {
  primary: "oklch(0.78 0.14 240 / 0.12)",
  accent: "oklch(0.7 0.16 45 / 0.12)",
  success: "oklch(0.68 0.15 155 / 0.12)",
  warning: "oklch(0.72 0.14 85 / 0.12)",
  danger: "oklch(0.62 0.21 25 / 0.12)",
  info: "oklch(0.68 0.15 200 / 0.12)",
};

function Sparkline({
  data,
  color,
}: { data: { v: number }[]; color: SparkColor }) {
  return (
    <ResponsiveContainer width="100%" height={40}>
      <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={`spark-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor={sparkColorMap[color]}
              stopOpacity={0.35}
            />
            <stop
              offset="100%"
              stopColor={sparkColorMap[color]}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <Tooltip contentStyle={{ display: "none" }} cursor={false} />
        <Area
          type="monotone"
          dataKey="v"
          stroke={sparkColorMap[color]}
          strokeWidth={2}
          fill={`url(#spark-${color})`}
          dot={false}
          animationDuration={800}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

/* ─── extra quick links beyond mock data ─────────────── */
const extraQuickLinks = [
  {
    id: "eql-1",
    label: "Log Defect",
    url: "#",
    icon: "ClipboardX",
    color: "text-destructive",
  },
  {
    id: "eql-2",
    label: "Create PO",
    url: "#",
    icon: "FilePlus",
    color: "text-chart-2",
  },
  {
    id: "eql-3",
    label: "Request Leave",
    url: "#",
    icon: "CalendarOff",
    color: "text-chart-5",
  },
  {
    id: "eql-4",
    label: "Submit IT Ticket",
    url: "#",
    icon: "LifeBuoy",
    color: "text-primary",
  },
  {
    id: "eql-5",
    label: "Check Inventory",
    url: "#",
    icon: "PackageCheck",
    color: "text-chart-4",
  },
  {
    id: "eql-6",
    label: "Raise NCR",
    url: "#",
    icon: "AlertOctagon",
    color: "text-accent",
  },
];

/* ─── severity helpers ────────────────────────────────── */
function SeverityBadge({
  severity,
}: { severity: "critical" | "warning" | "info" }) {
  if (severity === "critical")
    return (
      <Badge className="text-[9px] h-4 px-1.5 bg-destructive/15 text-destructive border-destructive/30 hover:bg-destructive/15 font-semibold tracking-wide">
        CRITICAL
      </Badge>
    );
  if (severity === "warning")
    return (
      <Badge className="text-[9px] h-4 px-1.5 bg-accent/15 text-accent border-accent/30 hover:bg-accent/15 font-semibold tracking-wide">
        WARNING
      </Badge>
    );
  return (
    <Badge className="text-[9px] h-4 px-1.5 bg-chart-5/15 text-chart-5 border-chart-5/30 hover:bg-chart-5/15 font-semibold tracking-wide">
      INFO
    </Badge>
  );
}

function SeverityDot({
  severity,
}: { severity: "critical" | "warning" | "info" }) {
  return (
    <div
      className={cn(
        "h-2 w-2 rounded-full flex-shrink-0 mt-1.5",
        severity === "critical" && "bg-destructive animate-pulse",
        severity === "warning" && "bg-accent",
        severity === "info" && "bg-chart-5",
      )}
    />
  );
}

function AlertIcon({
  severity,
}: { severity: "critical" | "warning" | "info" }) {
  if (severity === "critical")
    return <Zap className="h-3.5 w-3.5 text-destructive" />;
  if (severity === "warning")
    return <AlertTriangle className="h-3.5 w-3.5 text-accent" />;
  return <Info className="h-3.5 w-3.5 text-chart-5" />;
}

/* ─── shift status ─────────────────────────────────────── */
const now = new Date();
const hour = now.getHours();
const shiftInfo =
  hour >= 6 && hour < 14
    ? {
        label: "Morning Shift",
        sub: "06:00 – 14:00",
        status: "Active",
        ok: true,
      }
    : hour >= 14 && hour < 22
      ? {
          label: "Afternoon Shift",
          sub: "14:00 – 22:00",
          status: "Active",
          ok: true,
        }
      : {
          label: "Night Shift",
          sub: "22:00 – 06:00",
          status: "Active",
          ok: true,
        };

/* ═══════════════════════════════════════════════════════ */
export default function Dashboard() {
  const recentNews = newsArticles.slice(0, 3);

  return (
    <div className="p-5 md:p-6 max-w-[1680px] mx-auto space-y-6">
      {/* ── HERO WELCOME ───────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-card"
        data-ocid="dashboard.hero.section"
      >
        {/* industrial grid overlay */}
        <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />
        {/* gradient accent */}
        <div className="absolute inset-0 bg-gradient-brand pointer-events-none" />

        <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-14 w-14 ring-2 ring-primary/30 ring-offset-2 ring-offset-card">
                <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                <AvatarFallback className="bg-primary/20 text-primary font-semibold text-lg">
                  {currentUser.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-chart-5 border-2 border-card" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-0.5">
                Good{" "}
                {hour < 12 ? "morning" : hour < 17 ? "afternoon" : "evening"}
              </p>
              <h1 className="font-display text-2xl md:text-3xl text-foreground leading-tight">
                {currentUser.name.split(" ")[0]}&nbsp;
                <span className="text-muted-foreground font-body font-normal text-xl">
                  — {currentUser.role}
                </span>
              </h1>
              <p className="text-xs text-muted-foreground mt-1">
                {now.toLocaleDateString("en-IN", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                <span className="text-accent font-medium">·</span>{" "}
                {now.toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Shift chip */}
            <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-muted/60 border border-border">
              <div className="relative">
                <div className="h-2.5 w-2.5 rounded-full bg-chart-5" />
                <div className="absolute inset-0 rounded-full bg-chart-5 animate-ping opacity-40" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-foreground leading-none">
                  {shiftInfo.label}
                </p>
                <p className="text-[10px] text-muted-foreground mt-0.5">
                  {shiftInfo.sub}
                </p>
              </div>
              <Badge className="ml-1 text-[9px] h-4 px-1.5 bg-chart-5/15 text-chart-5 border-chart-5/30">
                {shiftInfo.status}
              </Badge>
            </div>

            {/* Critical alert chip */}
            {criticalAlerts.length > 0 && (
              <div
                data-ocid="dashboard.critical_alert.banner"
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-destructive/10 border border-destructive/30"
              >
                <Zap className="h-3.5 w-3.5 text-destructive animate-pulse flex-shrink-0" />
                <span className="text-xs font-semibold text-destructive">
                  {criticalAlerts.length} Critical Alert
                  {criticalAlerts.length > 1 ? "s" : ""}
                </span>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* ── 6 KPI CARDS ────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
        {kpiCards.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: 0.06 + i * 0.07,
              ease: "easeOut",
            }}
          >
            <Card
              data-ocid={`dashboard.kpi.item.${i + 1}`}
              className="relative overflow-hidden border-border shadow-card hover:shadow-elevated transition-all duration-200 group"
            >
              {/* colored top stripe */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: sparkColorMap[kpi.color] }}
              />
              <CardContent className="p-4 pt-5">
                <div className="flex items-start justify-between mb-2">
                  <div
                    className="p-1.5 rounded-lg"
                    style={{ background: sparkBgMap[kpi.color] }}
                  >
                    <DynamicIcon
                      name={kpi.icon}
                      className="h-3.5 w-3.5"
                      style={
                        {
                          color: sparkColorMap[kpi.color],
                        } as React.CSSProperties
                      }
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    {kpi.trend === "up" && (
                      <TrendingUp className="h-3 w-3 text-chart-5" />
                    )}
                    {kpi.trend === "down" && kpi.color === "danger" && (
                      <TrendingDown className="h-3 w-3 text-destructive" />
                    )}
                    {kpi.trend === "down" && kpi.color !== "danger" && (
                      <TrendingDown className="h-3 w-3 text-chart-5" />
                    )}
                  </div>
                </div>
                <p className="text-[22px] font-bold kpi-value text-foreground leading-none mt-1">
                  {kpi.value}
                </p>
                <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide mt-1 line-clamp-1">
                  {kpi.label}
                </p>
                <p className="text-[10px] text-muted-foreground mt-0.5 line-clamp-1">
                  {kpi.delta}
                </p>
                <div className="-mx-1 mt-2">
                  <Sparkline
                    data={sparklineData[kpi.sparkKey]}
                    color={kpi.color}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* ── 2-COL: ALERTS + QUICK LINKS ────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Critical Alerts Panel */}
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        >
          <Card
            data-ocid="dashboard.alerts.card"
            className="h-full shadow-card"
          >
            <CardHeader className="pb-3 border-b border-border">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-destructive/10">
                    <AlertTriangle className="h-3.5 w-3.5 text-destructive" />
                  </div>
                  Plant Alerts
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Badge className="text-[10px] h-5 px-1.5 bg-destructive/15 text-destructive border-destructive/30">
                    {openAlerts.length} open
                  </Badge>
                  {criticalAlerts.length > 0 && (
                    <Badge className="text-[10px] h-5 px-1.5 bg-destructive text-destructive-foreground border-0 animate-pulse">
                      {criticalAlerts.length} critical
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-3 space-y-2">
              {alerts.slice(0, 5).map((alert, i) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.35 + i * 0.06 }}
                  data-ocid={`dashboard.alert.item.${i + 1}`}
                  className={cn(
                    "flex gap-3 p-3 rounded-xl border transition-colors cursor-default",
                    alert.isResolved
                      ? "border-border bg-muted/20 opacity-60"
                      : alert.severity === "critical"
                        ? "border-destructive/25 bg-destructive/5"
                        : alert.severity === "warning"
                          ? "border-accent/25 bg-accent/5"
                          : "border-chart-5/20 bg-chart-5/5",
                  )}
                >
                  <div className="flex items-start gap-2 flex-shrink-0 mt-0.5">
                    <AlertIcon severity={alert.severity} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <SeverityBadge severity={alert.severity} />
                      {alert.isResolved && (
                        <Badge className="text-[9px] h-4 px-1.5 bg-chart-5/15 text-chart-5 border-chart-5/30 font-medium">
                          <CheckCircle2 className="h-2.5 w-2.5 mr-0.5" />{" "}
                          RESOLVED
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-foreground line-clamp-1">
                      {alert.title}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">
                      {alert.description}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge
                        variant="outline"
                        className="text-[9px] h-4 px-1.5 font-normal"
                      >
                        {alert.department}
                      </Badge>
                      <span className="text-[10px] text-muted-foreground">
                        {timeAgo(alert.timestamp)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Links Grid */}
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        >
          <Card
            data-ocid="dashboard.quick_links.card"
            className="h-full shadow-card"
          >
            <CardHeader className="pb-3 border-b border-border">
              <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-primary/10">
                  <DynamicIcon
                    name="Grid3X3"
                    className="h-3.5 w-3.5 text-primary"
                  />
                </div>
                Quick Access
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              {/* Row 1: from mock data */}
              <div className="grid grid-cols-3 gap-2 mb-2">
                {[
                  {
                    id: "ql-1",
                    label: "Work Orders",
                    url: "#",
                    icon: "ClipboardList",
                    color: "text-primary",
                  },
                  {
                    id: "ql-2",
                    label: "Quality Reports",
                    url: "#",
                    icon: "ShieldCheck",
                    color: "text-chart-5",
                  },
                  {
                    id: "ql-3",
                    label: "IT Helpdesk",
                    url: "#",
                    icon: "Monitor",
                    color: "text-accent",
                  },
                  {
                    id: "ql-4",
                    label: "Maintenance Log",
                    url: "#",
                    icon: "Wrench",
                    color: "text-destructive",
                  },
                  {
                    id: "ql-5",
                    label: "Press Schedule",
                    url: "#",
                    icon: "CalendarClock",
                    color: "text-chart-4",
                  },
                  {
                    id: "ql-6",
                    label: "Stores Inventory",
                    url: "#",
                    icon: "Warehouse",
                    color: "text-chart-2",
                  },
                ].map((link, i) => (
                  <a
                    key={link.id}
                    href={link.url}
                    data-ocid={`dashboard.quick_link.item.${i + 1}`}
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-background hover:bg-muted/50 hover:border-primary/20 transition-all duration-150 p-3 text-center group cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-muted/60 group-hover:bg-card transition-colors">
                      <DynamicIcon
                        name={link.icon}
                        className={cn("h-4 w-4", link.color)}
                      />
                    </div>
                    <span className="text-[10px] font-medium text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
              <Separator className="my-3" />
              {/* Row 2: extra department shortcuts */}
              <div className="grid grid-cols-3 gap-2">
                {extraQuickLinks.map((link, i) => (
                  <a
                    key={link.id}
                    href={link.url}
                    data-ocid={`dashboard.quick_link.item.${i + 7}`}
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-background hover:bg-muted/50 hover:border-accent/20 transition-all duration-150 p-3 text-center group cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-muted/60 group-hover:bg-card transition-colors">
                      <DynamicIcon
                        name={link.icon}
                        className={cn("h-4 w-4", link.color)}
                      />
                    </div>
                    <span className="text-[10px] font-medium text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>

              {/* Dept shortcuts strip */}
              <div className="mt-4 pt-3 border-t border-border">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Departments
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {departments.map((dept) => (
                    <Link
                      key={dept.id}
                      to="/departments/$id"
                      params={{ id: dept.slug }}
                      data-ocid={`dashboard.dept_link.${dept.slug}`}
                    >
                      <Badge
                        variant="outline"
                        className={cn(
                          "text-[10px] h-5 px-2 cursor-pointer hover:bg-muted/60 transition-colors",
                          dept.color,
                        )}
                      >
                        <span className="mr-1">
                          {deptIconMap[dept.icon] ? dept.icon.charAt(0) : "·"}
                        </span>
                        {dept.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* ── ANNOUNCEMENTS STRIP ────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.45 }}
      >
        <Card data-ocid="dashboard.announcements.card" className="shadow-card">
          <CardHeader className="pb-3 border-b border-border">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-accent/10">
                  <DynamicIcon
                    name="Megaphone"
                    className="h-3.5 w-3.5 text-accent"
                  />
                </div>
                Latest Announcements
              </CardTitle>
              <Link to="/announcements">
                <Button
                  data-ocid="dashboard.announcements.view_all_button"
                  variant="ghost"
                  size="sm"
                  className="text-xs text-primary h-7 gap-1 px-2"
                >
                  View All <ArrowRight className="h-3 w-3" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {announcements.slice(0, 3).map((ann, i) => (
                <Link
                  key={ann.id}
                  to="/announcements/$id"
                  params={{ id: ann.id }}
                  data-ocid={`dashboard.announcement.item.${i + 1}`}
                >
                  <div
                    className={cn(
                      "group h-full flex flex-col gap-2 rounded-xl border p-3.5 cursor-pointer transition-all duration-150 hover:shadow-elevated",
                      ann.priority === "high"
                        ? "border-destructive/20 bg-destructive/5 hover:bg-destructive/8"
                        : ann.priority === "medium"
                          ? "border-accent/20 bg-accent/5 hover:bg-accent/8"
                          : "border-border bg-muted/20 hover:bg-muted/40",
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <SeverityDot
                          severity={
                            ann.priority === "high"
                              ? "critical"
                              : ann.priority === "medium"
                                ? "warning"
                                : "info"
                          }
                        />
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-[9px] h-4 px-1.5 font-semibold tracking-wide",
                            ann.priority === "high"
                              ? "border-destructive/30 text-destructive"
                              : ann.priority === "medium"
                                ? "border-accent/30 text-accent"
                                : "text-muted-foreground",
                          )}
                        >
                          {ann.priority.toUpperCase()}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="text-[9px] h-4 px-1.5 text-muted-foreground font-normal"
                        >
                          {ann.category}
                        </Badge>
                      </div>
                      <span className="text-[10px] text-muted-foreground flex-shrink-0">
                        {timeAgo(ann.publishedAt)}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                      {ann.title}
                    </p>
                    <div className="flex items-center gap-2 mt-auto pt-1">
                      <Avatar className="h-5 w-5 flex-shrink-0">
                        <AvatarImage src={ann.authorAvatar} />
                        <AvatarFallback className="text-[7px]">
                          {ann.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-[10px] text-muted-foreground truncate">
                        {ann.authorRole}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* ── NEWS STRIP ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.55 }}
      >
        <Card data-ocid="dashboard.news_feed.card" className="shadow-card">
          <CardHeader className="pb-3 border-b border-border">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-chart-4/10">
                  <DynamicIcon
                    name="Newspaper"
                    className="h-3.5 w-3.5 text-chart-4"
                  />
                </div>
                Company News
              </CardTitle>
              <Link to="/news">
                <Button
                  data-ocid="dashboard.news.view_all_button"
                  variant="ghost"
                  size="sm"
                  className="text-xs text-primary h-7 gap-1 px-2"
                >
                  All News <ArrowRight className="h-3 w-3" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recentNews.map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.55 + i * 0.08 }}
                  data-ocid={`dashboard.news.item.${i + 1}`}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/20 transition-all duration-200 hover:shadow-elevated">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-28 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="text-[9px] h-4 px-1.5 bg-card/90 text-foreground border-border backdrop-blur-sm font-medium">
                        {article.category}
                      </Badge>
                    </div>
                    <div className="p-3">
                      <p className="text-[11px] font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                        {article.title}
                      </p>
                      <div className="flex items-center justify-between mt-1.5">
                        <span className="text-[10px] text-muted-foreground">
                          {article.author}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          {timeAgo(article.publishedAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
