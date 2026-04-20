import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowLeft,
  ArrowLeftRight,
  ArrowUp,
  Layers,
  Package,
  PackageMinus,
  PackagePlus,
  Trash2,
  TrendingDown,
  TrendingUp,
  Warehouse,
} from "lucide-react";

interface StoreItem {
  code: string;
  description: string;
  uom: string;
  stock: number;
  minLevel: number;
  maxLevel: number;
  bin: string;
  category: string;
}

interface Transaction {
  date: string;
  type: "Issue" | "Receipt" | "Return";
  material: string;
  department: string;
  qty: string;
  reference: string;
}

const storeItems: StoreItem[] = [
  {
    code: "RM-CRCA-1.5",
    description: "CRCA Sheet Coil 1.5mm IS513",
    uom: "Coils",
    stock: 18,
    minLevel: 25,
    maxLevel: 60,
    bin: "RM Bay A-01",
    category: "Raw Material",
  },
  {
    code: "RM-HRCA-2.5",
    description: "HRCA Coil 2.5mm IS1079",
    uom: "Coils",
    stock: 42,
    minLevel: 20,
    maxLevel: 50,
    bin: "RM Bay A-02",
    category: "Raw Material",
  },
  {
    code: "RM-HSLA-2.0",
    description: "HSLA Steel 2.0mm E350",
    uom: "Coils",
    stock: 5,
    minLevel: 8,
    maxLevel: 20,
    bin: "RM Bay A-03",
    category: "Raw Material",
  },
  {
    code: "CONS-OIL-HLP46",
    description: "Hydraulic Oil HLP 46 — 200L",
    uom: "Drums",
    stock: 3,
    minLevel: 5,
    maxLevel: 12,
    bin: "Stores C-03",
    category: "Consumable",
  },
  {
    code: "CONS-CF-WS",
    description: "Cutting Fluid Water Soluble 20L",
    uom: "Cans",
    stock: 12,
    minLevel: 8,
    maxLevel: 24,
    bin: "Stores C-01",
    category: "Consumable",
  },
  {
    code: "TR-PD-12MM",
    description: "Punch & Die Set Compound 12mm",
    uom: "Sets",
    stock: 6,
    minLevel: 4,
    maxLevel: 10,
    bin: "TR-Storage-B1",
    category: "Tooling",
  },
  {
    code: "FG-TVS-3847B",
    description: "Finished Bracket TVS-FP-3847-B",
    uom: "Pcs",
    stock: 1480,
    minLevel: 0,
    maxLevel: 3000,
    bin: "FG Dispatch D-01",
    category: "Finished Goods",
  },
  {
    code: "CONS-GLOVES-L",
    description: "Safety Gloves Leather — Size L",
    uom: "Pairs",
    stock: 22,
    minLevel: 30,
    maxLevel: 80,
    bin: "Safety Bay S-01",
    category: "Safety",
  },
  {
    code: "MRO-BEARING-6205",
    description: "Deep Groove Bearing 6205-2RS",
    uom: "Nos",
    stock: 48,
    minLevel: 20,
    maxLevel: 80,
    bin: "MRO Rack M-04",
    category: "MRO",
  },
  {
    code: "RM-GALV-0.8",
    description: "Galvanized Sheet 0.8mm GP IS277",
    uom: "Coils",
    stock: 14,
    minLevel: 10,
    maxLevel: 30,
    bin: "RM Bay A-04",
    category: "Raw Material",
  },
];

const transactions: Transaction[] = [
  {
    date: "20 Apr 10:45",
    type: "Issue",
    material: "CRCA Coil 1.5mm IS513",
    department: "Production",
    qty: "3 Coils",
    reference: "WO-001",
  },
  {
    date: "20 Apr 09:30",
    type: "Receipt",
    material: "HLP 46 Hydraulic Oil",
    department: "Maintenance",
    qty: "5 Drums",
    reference: "GRN-2026-0179",
  },
  {
    date: "19 Apr 16:15",
    type: "Issue",
    material: "Punch & Die Set 12mm",
    department: "Tool-Room",
    qty: "2 Sets",
    reference: "TR-DIE-014",
  },
  {
    date: "19 Apr 14:00",
    type: "Return",
    material: "Cutting Fluid 20L Cans",
    department: "Production",
    qty: "4 Cans",
    reference: "RTV-0041",
  },
  {
    date: "19 Apr 11:30",
    type: "Receipt",
    material: "HRCA Coil 2.5mm IS1079",
    department: "RM-Purchase",
    qty: "8 Coils",
    reference: "GRN-2026-0177",
  },
  {
    date: "18 Apr 15:00",
    type: "Issue",
    material: "Safety Gloves Leather L",
    department: "Production",
    qty: "10 Pairs",
    reference: "SAFETY-042",
  },
];

const txConfig: Record<
  Transaction["type"],
  { icon: React.ReactNode; className: string }
> = {
  Issue: {
    icon: <ArrowUp className="h-3.5 w-3.5" />,
    className: "text-destructive bg-destructive/10 border-destructive/20",
  },
  Receipt: {
    icon: <ArrowDown className="h-3.5 w-3.5" />,
    className: "text-chart-5 bg-chart-5/10 border-chart-5/20",
  },
  Return: {
    icon: <ArrowLeftRight className="h-3.5 w-3.5" />,
    className: "text-primary bg-primary/10 border-primary/20",
  },
};

function getStockStatus(item: StoreItem): {
  label: string;
  rowClass: string;
  badgeClass: string;
} {
  if (item.minLevel === 0)
    return {
      label: "Normal",
      rowClass: "",
      badgeClass: "text-chart-5 border-chart-5/40",
    };
  const ratio = item.stock / item.minLevel;
  if (ratio < 1)
    return {
      label: "Below Min",
      rowClass: "bg-destructive/5",
      badgeClass: "text-destructive border-destructive/40 bg-destructive/10",
    };
  if (ratio < 1.3)
    return {
      label: "Near Min",
      rowClass: "bg-accent/5",
      badgeClass: "text-accent border-accent/40 bg-accent/10",
    };
  return {
    label: "OK",
    rowClass: "",
    badgeClass: "text-chart-5 border-chart-5/40",
  };
}

type TrendDir = "up" | "down" | "stable";
const kpis: {
  label: string;
  value: string;
  icon: React.ElementType;
  color: string;
  trend: TrendDir;
}[] = [
  {
    label: "Total SKUs",
    value: "337",
    icon: Layers,
    color: "text-primary",
    trend: "stable",
  },
  {
    label: "Low Stock Items",
    value: "4",
    icon: Package,
    color: "text-destructive",
    trend: "up",
  },
  {
    label: "Issues Today",
    value: "18",
    icon: PackageMinus,
    color: "text-accent",
    trend: "stable",
  },
  {
    label: "Receipts Today",
    value: "7",
    icon: PackagePlus,
    color: "text-chart-5",
    trend: "down",
  },
];

const quickActions = [
  {
    label: "Issue Material",
    icon: PackageMinus,
    variant: "default" as const,
    ocid: "stores.issue_material_button",
    color: "",
  },
  {
    label: "Receive Stock",
    icon: PackagePlus,
    variant: "outline" as const,
    ocid: "stores.receive_stock_button",
    color: "",
  },
  {
    label: "Transfer",
    icon: ArrowLeftRight,
    variant: "outline" as const,
    ocid: "stores.transfer_button",
    color: "",
  },
  {
    label: "Scrap Entry",
    icon: Trash2,
    variant: "outline" as const,
    ocid: "stores.scrap_button",
    color: "text-destructive",
  },
];

export default function StoresDashboard() {
  return (
    <div className="p-6 space-y-6" data-ocid="stores.page">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <Link to="/" className="hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Stores</span>
          </div>
          <h1 className="text-2xl font-display font-semibold text-foreground flex items-center gap-2">
            <Warehouse className="h-6 w-6 text-chart-4" />
            Stores Department
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            RM, WIP & finished goods inventory management, dispatch to TVS & SKF
          </p>
        </div>
        <div className="flex items-center gap-2">
          {quickActions.map((qa) => (
            <Button
              key={qa.ocid}
              data-ocid={qa.ocid}
              variant={qa.variant}
              size="sm"
              className={cn("gap-1.5 hidden sm:flex", qa.color)}
            >
              <qa.icon className="h-3.5 w-3.5" />
              {qa.label}
            </Button>
          ))}
          <Link to="/">
            <Button
              data-ocid="stores.back_button"
              variant="outline"
              size="sm"
              className="gap-1.5"
            >
              <ArrowLeft className="h-4 w-4" /> Dashboard
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Quick Actions */}
      <div
        className="flex sm:hidden gap-2 flex-wrap"
        data-ocid="stores.quick_actions_mobile"
      >
        {quickActions.map((qa) => (
          <Button
            key={qa.ocid}
            data-ocid={`${qa.ocid}_mobile`}
            variant={qa.variant}
            size="sm"
            className={cn("gap-1.5", qa.color)}
          >
            <qa.icon className="h-3.5 w-3.5" />
            {qa.label}
          </Button>
        ))}
      </div>

      {/* KPI Row */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-3"
        data-ocid="stores.kpi_row"
      >
        {kpis.map((kpi, i) => (
          <Card
            key={kpi.label}
            data-ocid={`stores.kpi.${i + 1}`}
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
                  ? "Monitor required"
                  : kpi.trend === "down"
                    ? "Reducing"
                    : "Steady"}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Inventory Table */}
      <Card className="shadow-card" data-ocid="stores.inventory_table">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base flex items-center gap-2">
              <Warehouse className="h-4 w-4 text-chart-4" />
              Inventory Register
            </CardTitle>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-sm bg-destructive/40" />{" "}
                Below Min
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-sm bg-accent/40" />{" "}
                Near Min
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
                  "Material Code",
                  "Description",
                  "UOM",
                  "Stock Qty",
                  "Min",
                  "Max",
                  "Bin Location",
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
              {storeItems.map((item, i) => {
                const st = getStockStatus(item);
                return (
                  <tr
                    key={item.code}
                    data-ocid={`stores.inventory.item.${i + 1}`}
                    className={cn(
                      "border-b border-border/50 hover:bg-muted/40 transition-colors",
                      st.rowClass,
                    )}
                  >
                    <td className="py-2.5 px-3 font-mono text-xs text-primary whitespace-nowrap">
                      {item.code}
                    </td>
                    <td className="py-2.5 px-3 text-foreground font-medium max-w-[220px] truncate">
                      {item.description}
                    </td>
                    <td className="py-2.5 px-3 text-muted-foreground">
                      {item.uom}
                    </td>
                    <td
                      className={cn(
                        "py-2.5 px-3 font-bold kpi-value text-right",
                        item.minLevel > 0 && item.stock < item.minLevel
                          ? "text-destructive"
                          : item.minLevel > 0 &&
                              item.stock < item.minLevel * 1.3
                            ? "text-accent"
                            : "text-foreground",
                      )}
                    >
                      {item.stock.toLocaleString()}
                    </td>
                    <td className="py-2.5 px-3 text-muted-foreground text-right">
                      {item.minLevel}
                    </td>
                    <td className="py-2.5 px-3 text-muted-foreground text-right">
                      {item.maxLevel}
                    </td>
                    <td className="py-2.5 px-3 text-muted-foreground whitespace-nowrap text-xs">
                      {item.bin}
                    </td>
                    <td className="py-2.5 px-3">
                      <Badge
                        variant="outline"
                        className={cn("text-[10px] h-5 px-2", st.badgeClass)}
                      >
                        {st.label}
                      </Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card className="shadow-card" data-ocid="stores.transactions_section">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base flex items-center gap-2">
              <ArrowLeftRight className="h-4 w-4 text-primary" />
              Recent Transactions
            </CardTitle>
            <Badge variant="outline" className="text-xs">
              Today + Yesterday
            </Badge>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-3 space-y-1.5">
          {transactions.map((tx, i) => {
            const tc = txConfig[tx.type];
            return (
              <div
                key={tx.reference}
                data-ocid={`stores.transaction.item.${i + 1}`}
                className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/30 transition-colors border border-transparent hover:border-border/50"
              >
                <div
                  className={cn(
                    "flex items-center justify-center h-7 w-7 rounded-md border flex-shrink-0",
                    tc.className,
                  )}
                >
                  {tc.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-foreground truncate">
                      {tx.material}
                    </p>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-[10px] h-4 px-1.5 flex-shrink-0",
                        tc.className,
                      )}
                    >
                      {tx.type}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span>{tx.date}</span>
                    <span>·</span>
                    <span>
                      Dept:{" "}
                      <span className="text-foreground">{tx.department}</span>
                    </span>
                    <span>·</span>
                    <span className="font-mono text-primary">
                      {tx.reference}
                    </span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-bold text-foreground">{tx.qty}</p>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
