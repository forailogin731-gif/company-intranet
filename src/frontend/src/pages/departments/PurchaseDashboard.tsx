import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  Clock,
  PackageCheck,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
  Wallet,
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

interface PurchaseOrder {
  po: string;
  vendor: string;
  material: string;
  qty: string;
  poDate: string;
  dueDate: string;
  status: "Draft" | "Sent" | "Partial" | "Received";
  amount: string;
}

interface PendingApproval {
  id: string;
  requestor: string;
  department: string;
  item: string;
  amount: string;
  urgency: "High" | "Medium" | "Low";
  requestedOn: string;
}

interface VendorPerf {
  vendor: string;
  delivery: number;
  quality: number;
}

const purchaseOrders: PurchaseOrder[] = [
  {
    po: "PO-2026-0142",
    vendor: "Bharat Tools Pvt Ltd",
    material: "Carbide Punch Sets — 12mm",
    qty: "48 Sets",
    poDate: "15 Apr",
    dueDate: "22 Apr",
    status: "Sent",
    amount: "₹2,14,000",
  },
  {
    po: "PO-2026-0141",
    vendor: "Castrol India Ltd",
    material: "HLP 46 Hydraulic Oil",
    qty: "20 Drums",
    poDate: "14 Apr",
    dueDate: "18 Apr",
    status: "Partial",
    amount: "₹76,800",
  },
  {
    po: "PO-2026-0140",
    vendor: "SKF MRC Bearings",
    material: "Deep Groove Ball Bearing 6205",
    qty: "200 Nos",
    poDate: "12 Apr",
    dueDate: "20 Apr",
    status: "Received",
    amount: "₹58,400",
  },
  {
    po: "PO-2026-0139",
    vendor: "Blaser Swisslube India",
    material: "Blasocut 4000 CF — 20L",
    qty: "30 Cans",
    poDate: "11 Apr",
    dueDate: "17 Apr",
    status: "Received",
    amount: "₹44,700",
  },
  {
    po: "PO-2026-0138",
    vendor: "Ace Pneumatics",
    material: "Air Filter Regulator FRL Unit",
    qty: "12 Nos",
    poDate: "10 Apr",
    dueDate: "24 Apr",
    status: "Draft",
    amount: "₹32,100",
  },
  {
    po: "PO-2026-0137",
    vendor: "Vijay Electricals",
    material: "24V DC Solenoid Valve",
    qty: "6 Nos",
    poDate: "09 Apr",
    dueDate: "16 Apr",
    status: "Sent",
    amount: "₹18,600",
  },
  {
    po: "PO-2026-0136",
    vendor: "Tool House Chennai",
    material: "Drill Bit Set HSS M35",
    qty: "10 Sets",
    poDate: "08 Apr",
    dueDate: "13 Apr",
    status: "Received",
    amount: "₹9,250",
  },
];

const vendorPerformance: VendorPerf[] = [
  { vendor: "Bharat Tools", delivery: 94, quality: 97 },
  { vendor: "Castrol India", delivery: 88, quality: 95 },
  { vendor: "SKF MRC", delivery: 97, quality: 99 },
  { vendor: "Blaser Swiss", delivery: 91, quality: 96 },
  { vendor: "Ace Pneumatics", delivery: 82, quality: 91 },
];

const pendingApprovals: PendingApproval[] = [
  {
    id: "REQ-0089",
    requestor: "Mohan Krishnan",
    department: "Maintenance",
    item: "Servo Drive Unit — 7.5kW Siemens",
    amount: "₹1,84,000",
    urgency: "High",
    requestedOn: "20 Apr",
  },
  {
    id: "REQ-0088",
    requestor: "Balamurugan S.",
    department: "Tool-Room",
    item: "Wire EDM Copper Electrode — 2mm",
    amount: "₹38,500",
    urgency: "High",
    requestedOn: "19 Apr",
  },
  {
    id: "REQ-0087",
    requestor: "Rajesh Kumar",
    department: "Production",
    item: "Safety Interlock Switches (10 Nos)",
    amount: "₹22,400",
    urgency: "Medium",
    requestedOn: "18 Apr",
  },
  {
    id: "REQ-0086",
    requestor: "Vikram Pillai",
    department: "IT",
    item: "24-Port PoE Network Switch",
    amount: "₹67,200",
    urgency: "Low",
    requestedOn: "17 Apr",
  },
];

const statusConfig: Record<
  PurchaseOrder["status"],
  { label: string; className: string }
> = {
  Draft: { label: "Draft", className: "text-muted-foreground border-border" },
  Sent: { label: "Sent", className: "text-primary border-primary/40" },
  Partial: { label: "Partial", className: "text-accent border-accent/50" },
  Received: { label: "Received", className: "text-chart-5 border-chart-5/50" },
};

const urgencyConfig: Record<PendingApproval["urgency"], { className: string }> =
  {
    High: {
      className: "text-destructive border-destructive/40 bg-destructive/5",
    },
    Medium: { className: "text-accent border-accent/40 bg-accent/5" },
    Low: { className: "text-muted-foreground border-border" },
  };

const kpis = [
  {
    label: "Open POs",
    value: "28",
    icon: ShoppingCart,
    color: "text-primary",
    trend: "stable",
  },
  {
    label: "POs Overdue",
    value: "4",
    icon: AlertCircle,
    color: "text-destructive",
    trend: "up",
  },
  {
    label: "Pending GRNs",
    value: "11",
    icon: PackageCheck,
    color: "text-accent",
    trend: "down",
  },
  {
    label: "Monthly Spend",
    value: "₹18.7L",
    icon: Wallet,
    color: "text-chart-5",
    trend: "up",
  },
];

export default function PurchaseDashboard() {
  return (
    <div className="p-6 space-y-6" data-ocid="purchase.page">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <Link to="/" className="hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Purchase</span>
          </div>
          <h1 className="text-2xl font-display font-semibold text-foreground flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-chart-2" />
            Purchase Department
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Procurement of tools, consumables, capital equipment & services
          </p>
        </div>
        <Link to="/">
          <Button
            data-ocid="purchase.back_button"
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
        data-ocid="purchase.kpi_row"
      >
        {kpis.map((kpi, i) => (
          <Card
            key={kpi.label}
            data-ocid={`purchase.kpi.${i + 1}`}
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
                    ? "text-destructive"
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
                  ? "Above target"
                  : kpi.trend === "down"
                    ? "Improving"
                    : "On target"}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Purchase Orders Table */}
      <Card className="shadow-card" data-ocid="purchase.po_table">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base flex items-center gap-2">
              <ShoppingCart className="h-4 w-4 text-chart-2" />
              Purchase Orders
            </CardTitle>
            <Badge variant="outline" className="text-xs">
              {purchaseOrders.length} records
            </Badge>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-0 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                {[
                  "PO #",
                  "Vendor",
                  "Material",
                  "Qty",
                  "PO Date",
                  "Due Date",
                  "Amount",
                  "Status",
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
              {purchaseOrders.map((po, i) => {
                const s = statusConfig[po.status];
                return (
                  <tr
                    key={po.po}
                    data-ocid={`purchase.po.item.${i + 1}`}
                    className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                  >
                    <td className="py-2.5 px-3 font-mono text-xs text-primary">
                      {po.po}
                    </td>
                    <td className="py-2.5 px-3 text-foreground font-medium whitespace-nowrap">
                      {po.vendor}
                    </td>
                    <td className="py-2.5 px-3 text-muted-foreground max-w-[220px] truncate">
                      {po.material}
                    </td>
                    <td className="py-2.5 px-3 text-muted-foreground whitespace-nowrap">
                      {po.qty}
                    </td>
                    <td className="py-2.5 px-3 text-muted-foreground whitespace-nowrap">
                      {po.poDate}
                    </td>
                    <td className="py-2.5 px-3 text-muted-foreground whitespace-nowrap">
                      {po.dueDate}
                    </td>
                    <td className="py-2.5 px-3 font-medium text-foreground text-right whitespace-nowrap">
                      {po.amount}
                    </td>
                    <td className="py-2.5 px-3">
                      <Badge
                        variant="outline"
                        className={cn("text-[10px] h-5 px-2", s.className)}
                      >
                        {s.label}
                      </Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vendor Performance Chart */}
        <Card className="shadow-card" data-ocid="purchase.vendor_chart">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-chart-5" />
              Vendor Delivery Performance
              <span className="ml-auto text-xs text-muted-foreground font-normal">
                Top 5 by OTD %
              </span>
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="pt-4">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={vendorPerformance}
                barSize={28}
                margin={{ top: 4, right: 8, left: -16, bottom: 4 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="oklch(var(--border) / 0.4)"
                  vertical={false}
                />
                <XAxis
                  dataKey="vendor"
                  tick={{
                    fontSize: 11,
                    fill: "oklch(var(--muted-foreground))",
                  }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  domain={[75, 100]}
                  tick={{
                    fontSize: 10,
                    fill: "oklch(var(--muted-foreground))",
                  }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "oklch(var(--card))",
                    border: "1px solid oklch(var(--border))",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  formatter={(v: number) => [`${v}%`, "OTD"]}
                />
                <Bar dataKey="delivery" radius={[4, 4, 0, 0]}>
                  {vendorPerformance.map((entry) => (
                    <Cell
                      key={entry.vendor}
                      fill={
                        entry.delivery >= 90
                          ? "oklch(var(--chart-5))"
                          : entry.delivery >= 85
                            ? "oklch(var(--chart-2))"
                            : "oklch(var(--destructive))"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground justify-center">
              <span className="flex items-center gap-1">
                <span className="inline-block w-2.5 h-2.5 rounded-sm bg-chart-5/80" />{" "}
                ≥90% — Good
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block w-2.5 h-2.5 rounded-sm bg-chart-2/80" />{" "}
                85–89% — Acceptable
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block w-2.5 h-2.5 rounded-sm bg-destructive/80" />{" "}
                &lt;85% — Review
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Pending Approvals */}
        <Card className="shadow-card" data-ocid="purchase.approvals_section">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                Pending Approvals
              </CardTitle>
              <Badge
                variant="outline"
                className="text-xs text-destructive border-destructive/40"
              >
                {pendingApprovals.filter((a) => a.urgency === "High").length}{" "}
                Urgent
              </Badge>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="pt-3 space-y-2">
            {pendingApprovals.map((item, i) => (
              <div
                key={item.id}
                data-ocid={`purchase.approval.item.${i + 1}`}
                className="flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-sm font-medium text-foreground line-clamp-1 flex-1">
                      {item.item}
                    </p>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-[10px] h-5 px-1.5 flex-shrink-0",
                        urgencyConfig[item.urgency].className,
                      )}
                    >
                      {item.urgency}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-mono text-primary">{item.id}</span>
                    <span>·</span>
                    <span>{item.requestor}</span>
                    <span>·</span>
                    <span className="text-accent-brass">{item.department}</span>
                    <span>·</span>
                    <span>{item.requestedOn}</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-bold text-foreground">
                    {item.amount}
                  </p>
                  <div className="flex items-center gap-1 mt-1.5">
                    <Button
                      data-ocid={`purchase.approval.approve.${i + 1}`}
                      size="sm"
                      className="h-6 px-2 text-[10px]"
                    >
                      Approve
                    </Button>
                    <Button
                      data-ocid={`purchase.approval.reject.${i + 1}`}
                      size="sm"
                      variant="outline"
                      className="h-6 px-2 text-[10px]"
                    >
                      Hold
                    </Button>
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
