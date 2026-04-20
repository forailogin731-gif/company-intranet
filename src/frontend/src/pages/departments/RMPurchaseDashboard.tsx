import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  ClipboardList,
  PackageSearch,
  TrendingDown,
  TrendingUp,
  Truck,
  XCircle,
} from "lucide-react";

interface RMIndent {
  id: string;
  material: string;
  spec: string;
  requiredBy: string;
  reqQty: string;
  approvedQty: string;
  status: "Approved" | "Pending" | "Partially Approved" | "Rejected";
}

interface RMReceipt {
  date: string;
  material: string;
  vendor: string;
  qty: string;
  grn: string;
  qualityStatus: "Accepted" | "Rejected" | "Pending";
}

interface CriticalAlert {
  id: string;
  material: string;
  sku: string;
  currentStock: string;
  safetyStock: string;
  coverage: string;
  severity: "critical" | "warning";
  action: string;
}

const rmIndents: RMIndent[] = [
  {
    id: "IND-2026-0214",
    material: "CRCA Sheet Coil 1.5mm IS513",
    spec: "IS 513 CR2/CR3, 1.5 × 1250mm",
    requiredBy: "22 Apr",
    reqQty: "40 Coils",
    approvedQty: "40 Coils",
    status: "Approved",
  },
  {
    id: "IND-2026-0213",
    material: "HSLA High Strength Steel 2.0mm",
    spec: "IS 11513 Grade E350, 2.0 × 1200mm",
    requiredBy: "25 Apr",
    reqQty: "15 Coils",
    approvedQty: "10 Coils",
    status: "Partially Approved",
  },
  {
    id: "IND-2026-0212",
    material: "HRCA Coil 3.0mm IS1079",
    spec: "IS 1079 Grade 1, 3.0 × 1500mm",
    requiredBy: "28 Apr",
    reqQty: "20 Coils",
    approvedQty: "—",
    status: "Pending",
  },
  {
    id: "IND-2026-0211",
    material: "Galvanized Sheet 0.8mm GP",
    spec: "IS 277 Grade 0, 0.8 × 1000mm",
    requiredBy: "30 Apr",
    reqQty: "8 Coils",
    approvedQty: "8 Coils",
    status: "Approved",
  },
  {
    id: "IND-2026-0210",
    material: "Stainless Steel 304 1.2mm",
    spec: "AISI 304, 2B Finish, 1.2 × 1000mm",
    requiredBy: "05 May",
    reqQty: "5 Coils",
    approvedQty: "—",
    status: "Rejected",
  },
  {
    id: "IND-2026-0209",
    material: "Hardened Tool Steel D2",
    spec: "AISI D2 Flat Bar 20 × 100mm",
    requiredBy: "15 Apr",
    reqQty: "80 Kg",
    approvedQty: "80 Kg",
    status: "Approved",
  },
];

const receipts: RMReceipt[] = [
  {
    date: "20 Apr",
    material: "CRCA 1.5mm Coil — IS513",
    vendor: "JSW Steel Ltd",
    qty: "12 Coils (14,400 Kg)",
    grn: "GRN-2026-0178",
    qualityStatus: "Accepted",
  },
  {
    date: "19 Apr",
    material: "HRCA 2.5mm Coil — IS1079",
    vendor: "TATA Steel Ltd",
    qty: "8 Coils (24,000 Kg)",
    grn: "GRN-2026-0177",
    qualityStatus: "Accepted",
  },
  {
    date: "18 Apr",
    material: "HSLA Steel 2.0mm E350",
    vendor: "Essar Steel India",
    qty: "5 Coils (12,000 Kg)",
    grn: "GRN-2026-0176",
    qualityStatus: "Rejected",
  },
  {
    date: "17 Apr",
    material: "Galvanized Sheet 0.8mm GP",
    vendor: "Sail Steel TISCO",
    qty: "4 Coils (3,200 Kg)",
    grn: "GRN-2026-0175",
    qualityStatus: "Pending",
  },
  {
    date: "16 Apr",
    material: "Tool Steel D2 Flat Bar",
    vendor: "Viraj Profiles Ltd",
    qty: "120 Kg",
    grn: "GRN-2026-0174",
    qualityStatus: "Accepted",
  },
  {
    date: "15 Apr",
    material: "CRCA 1.0mm Coil — IS513",
    vendor: "JSW Steel Ltd",
    qty: "10 Coils (9,500 Kg)",
    grn: "GRN-2026-0173",
    qualityStatus: "Accepted",
  },
];

const criticalAlerts: CriticalAlert[] = [
  {
    id: "ca-01",
    material: "CRCA Sheet Coil 1.5mm",
    sku: "RM-CRCA-1.5-IS513",
    currentStock: "18 Coils",
    safetyStock: "25 Coils",
    coverage: "4 days",
    severity: "critical",
    action: "PO Raised — Pending Dispatch",
  },
  {
    id: "ca-02",
    material: "HSLA Steel 2.0mm E350",
    sku: "RM-HSLA-2.0-E350",
    currentStock: "5 Coils",
    safetyStock: "8 Coils",
    coverage: "2 days",
    severity: "critical",
    action: "Indent Raised — Partial Approval",
  },
  {
    id: "ca-03",
    material: "HLP 46 Hydraulic Oil",
    sku: "CONS-OIL-HLP46-200L",
    currentStock: "3 Drums",
    safetyStock: "5 Drums",
    coverage: "6 days",
    severity: "warning",
    action: "PO in Progress — Castrol",
  },
];

const indentStatusConfig: Record<RMIndent["status"], { className: string }> = {
  Approved: { className: "text-chart-5 border-chart-5/40 bg-chart-5/5" },
  Pending: { className: "text-accent border-accent/40 bg-accent/5" },
  "Partially Approved": {
    className: "text-primary border-primary/40 bg-primary/5",
  },
  Rejected: {
    className: "text-destructive border-destructive/40 bg-destructive/5",
  },
};

const qualityStatusConfig: Record<
  RMReceipt["qualityStatus"],
  { className: string; icon: React.ReactNode }
> = {
  Accepted: {
    className: "text-chart-5 border-chart-5/40",
    icon: <CheckCircle2 className="h-3 w-3" />,
  },
  Rejected: {
    className: "text-destructive border-destructive/40",
    icon: <XCircle className="h-3 w-3" />,
  },
  Pending: {
    className: "text-accent border-accent/40",
    icon: <AlertTriangle className="h-3 w-3" />,
  },
};

const kpis = [
  {
    label: "RM POs Pending",
    value: "14",
    icon: PackageSearch,
    color: "text-primary",
    trend: "stable" as const,
  },
  {
    label: "Critical Stock Items",
    value: "3",
    icon: AlertTriangle,
    color: "text-destructive",
    trend: "up" as const,
  },
  {
    label: "GRNs This Month",
    value: "42",
    icon: Truck,
    color: "text-chart-5",
    trend: "up" as const,
  },
  {
    label: "Rejections (MTD)",
    value: "2",
    icon: XCircle,
    color: "text-accent",
    trend: "down" as const,
  },
];

export default function RMPurchaseDashboard() {
  return (
    <div className="p-6 space-y-6" data-ocid="rm_purchase.page">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <Link to="/" className="hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">RM-Purchase</span>
          </div>
          <h1 className="text-2xl font-display font-semibold text-foreground flex items-center gap-2">
            <PackageSearch className="h-6 w-6 text-accent" />
            Raw Material Purchase
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            CRCA, HRCA, HSLA steel coil procurement for press shop operations
          </p>
        </div>
        <Link to="/">
          <Button
            data-ocid="rm_purchase.back_button"
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
        data-ocid="rm_purchase.kpi_row"
      >
        {kpis.map((kpi, i) => (
          <Card
            key={kpi.label}
            data-ocid={`rm_purchase.kpi.${i + 1}`}
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
                  ? "Needs attention"
                  : kpi.trend === "down"
                    ? "Improving"
                    : "On track"}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Critical Stock Alerts */}
      <Card
        className="shadow-card border-destructive/20"
        data-ocid="rm_purchase.critical_alerts"
      >
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              Critical Stock Alerts
            </CardTitle>
            <Badge
              variant="outline"
              className="text-destructive border-destructive/40 text-xs"
            >
              {criticalAlerts.filter((a) => a.severity === "critical").length}{" "}
              Critical
            </Badge>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-3 space-y-2">
          {criticalAlerts.map((alert, i) => (
            <div
              key={alert.id}
              data-ocid={`rm_purchase.critical_alert.item.${i + 1}`}
              className={cn(
                "flex items-start gap-3 p-3 rounded-lg border transition-colors",
                alert.severity === "critical"
                  ? "border-destructive/25 bg-destructive/5"
                  : "border-accent/25 bg-accent/5",
              )}
            >
              <AlertTriangle
                className={cn(
                  "h-4 w-4 mt-0.5 flex-shrink-0",
                  alert.severity === "critical"
                    ? "text-destructive"
                    : "text-accent",
                )}
              />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <p className="text-sm font-semibold text-foreground">
                    {alert.material}
                  </p>
                  <Badge
                    variant="outline"
                    className={cn(
                      "text-[10px] h-4 px-1.5",
                      alert.severity === "critical"
                        ? "text-destructive border-destructive/40"
                        : "text-accent border-accent/40",
                    )}
                  >
                    {alert.severity === "critical" ? "Critical" : "Warning"}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span>
                    SKU:{" "}
                    <span className="font-mono text-foreground">
                      {alert.sku}
                    </span>
                  </span>
                  <span>
                    Stock:{" "}
                    <span className="font-semibold text-destructive">
                      {alert.currentStock}
                    </span>
                  </span>
                  <span>
                    Safety:{" "}
                    <span className="text-foreground">{alert.safetyStock}</span>
                  </span>
                  <span>
                    Coverage:{" "}
                    <span className="font-semibold text-accent-brass">
                      {alert.coverage}
                    </span>
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Action: {alert.action}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* RM Indent Register */}
        <Card className="shadow-card" data-ocid="rm_purchase.indent_register">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base flex items-center gap-2">
                <ClipboardList className="h-4 w-4 text-primary" />
                RM Indent Register
              </CardTitle>
              <Badge variant="outline" className="text-xs">
                {rmIndents.length} indents
              </Badge>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="pt-0 overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  {[
                    "Indent #",
                    "Material",
                    "Required By",
                    "Req Qty",
                    "Appr Qty",
                    "Status",
                  ].map((h) => (
                    <th
                      key={h}
                      className="py-2.5 px-2 text-left font-semibold text-muted-foreground whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rmIndents.map((indent, i) => {
                  const sc = indentStatusConfig[indent.status];
                  return (
                    <tr
                      key={indent.id}
                      data-ocid={`rm_purchase.indent.item.${i + 1}`}
                      className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                    >
                      <td className="py-2 px-2 font-mono text-primary whitespace-nowrap">
                        {indent.id.split("-").slice(-1)[0]}
                      </td>
                      <td className="py-2 px-2 text-foreground max-w-[160px]">
                        <p className="truncate font-medium">
                          {indent.material}
                        </p>
                        <p
                          className="text-muted-foreground truncate"
                          style={{ fontSize: "10px" }}
                        >
                          {indent.spec}
                        </p>
                      </td>
                      <td className="py-2 px-2 text-muted-foreground whitespace-nowrap">
                        {indent.requiredBy}
                      </td>
                      <td className="py-2 px-2 text-foreground whitespace-nowrap">
                        {indent.reqQty}
                      </td>
                      <td className="py-2 px-2 text-foreground whitespace-nowrap">
                        {indent.approvedQty}
                      </td>
                      <td className="py-2 px-2">
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-[10px] h-4 px-1.5 whitespace-nowrap",
                            sc.className,
                          )}
                        >
                          {indent.status}
                        </Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* RM Receipt Log */}
        <Card className="shadow-card" data-ocid="rm_purchase.receipt_log">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base flex items-center gap-2">
                <Truck className="h-4 w-4 text-chart-5" />
                Raw Material Receipt Log
              </CardTitle>
              <Badge variant="outline" className="text-xs">
                Last 7 days
              </Badge>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="pt-3 space-y-2">
            {receipts.map((r, i) => {
              const qs = qualityStatusConfig[r.qualityStatus];
              return (
                <div
                  key={r.grn}
                  data-ocid={`rm_purchase.receipt.item.${i + 1}`}
                  className="flex items-start gap-3 p-2.5 rounded-lg border border-border hover:bg-muted/30 transition-colors"
                >
                  <div className="flex-shrink-0 text-center pt-0.5">
                    <p className="text-xs font-bold text-primary">{r.date}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {r.material}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mt-0.5">
                      <span>{r.vendor}</span>
                      <span>·</span>
                      <span className="text-foreground">{r.qty}</span>
                      <span>·</span>
                      <span className="font-mono text-primary">{r.grn}</span>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={cn(
                      "text-[10px] h-5 px-1.5 flex-shrink-0 flex items-center gap-1",
                      qs.className,
                    )}
                  >
                    {qs.icon}
                    {r.qualityStatus}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
