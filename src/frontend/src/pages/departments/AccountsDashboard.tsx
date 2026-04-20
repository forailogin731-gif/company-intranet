import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  ArrowDownCircle,
  ArrowUpCircle,
  BadgeIndianRupee,
  CheckCircle2,
  Clock,
  FileText,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { useState } from "react";

interface KPICardProps {
  label: string;
  value: string;
  sub?: string;
  icon: React.ReactNode;
  trend?: "up" | "down" | "stable" | "alert";
  trendLabel?: string;
  accent?: boolean;
}

function KPICard({
  label,
  value,
  sub,
  icon,
  trend,
  trendLabel,
  accent,
}: KPICardProps) {
  const trendColor =
    trend === "up"
      ? "text-chart-5"
      : trend === "down"
        ? "text-destructive"
        : trend === "alert"
          ? "text-accent"
          : "text-muted-foreground";

  return (
    <Card
      className={`shadow-card border-border ${accent ? "border-l-4 border-l-accent" : ""}`}
      data-ocid="accounts.kpi.card"
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
                {trend === "alert" && (
                  <AlertTriangle className="h-3 w-3 text-accent" />
                )}
                <span className={`text-xs font-medium ${trendColor}`}>
                  {trendLabel}
                </span>
              </div>
            )}
          </div>
          <div className="rounded-lg bg-chart-2/10 p-2.5 text-chart-2 shrink-0">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

type InvoiceStatus = "Current" | "Overdue" | "Paid" | "Disputed";

interface ReceivableRow {
  id: string;
  client: string;
  invoice: string;
  amount: string;
  amountRaw: number;
  dueDate: string;
  daysOverdue: number;
  status: InvoiceStatus;
}

const receivables: ReceivableRow[] = [
  {
    id: "ar-001",
    client: "TVS Motor Company",
    invoice: "INV-2026-0421",
    amount: "₹4,82,500",
    amountRaw: 482500,
    dueDate: "18 Apr 2026",
    daysOverdue: 2,
    status: "Overdue",
  },
  {
    id: "ar-002",
    client: "SKF Bearings India",
    invoice: "INV-2026-0418",
    amount: "₹6,15,000",
    amountRaw: 615000,
    dueDate: "25 Apr 2026",
    daysOverdue: 0,
    status: "Current",
  },
  {
    id: "ar-003",
    client: "TVS Motor Company",
    invoice: "INV-2026-0412",
    amount: "₹3,20,000",
    amountRaw: 320000,
    dueDate: "12 Apr 2026",
    daysOverdue: 8,
    status: "Overdue",
  },
  {
    id: "ar-004",
    client: "SKF Bearings India",
    invoice: "INV-2026-0408",
    amount: "₹2,75,000",
    amountRaw: 275000,
    dueDate: "30 Apr 2026",
    daysOverdue: 0,
    status: "Current",
  },
  {
    id: "ar-005",
    client: "Sundram Fasteners",
    invoice: "INV-2026-0405",
    amount: "₹1,84,000",
    amountRaw: 184000,
    dueDate: "05 Apr 2026",
    daysOverdue: 15,
    status: "Disputed",
  },
  {
    id: "ar-006",
    client: "TVS Motor Company",
    invoice: "INV-2026-0398",
    amount: "₹5,40,000",
    amountRaw: 540000,
    dueDate: "28 Mar 2026",
    daysOverdue: 23,
    status: "Overdue",
  },
  {
    id: "ar-007",
    client: "Bosch India",
    invoice: "INV-2026-0395",
    amount: "₹2,20,000",
    amountRaw: 220000,
    dueDate: "20 May 2026",
    daysOverdue: 0,
    status: "Current",
  },
  {
    id: "ar-008",
    client: "SKF Bearings India",
    invoice: "INV-2026-0388",
    amount: "₹3,10,000",
    amountRaw: 310000,
    dueDate: "01 Apr 2026",
    daysOverdue: 19,
    status: "Paid",
  },
];

interface PayableRow {
  id: string;
  vendor: string;
  amount: string;
  dueDate: string;
  category: string;
  status: "Due Soon" | "Overdue" | "Scheduled";
}

const payables: PayableRow[] = [
  {
    id: "ap-001",
    vendor: "JSW Steel Ltd",
    amount: "₹14,20,000",
    dueDate: "22 Apr 2026",
    category: "Raw Material",
    status: "Due Soon",
  },
  {
    id: "ap-002",
    vendor: "Castrol India",
    amount: "₹68,000",
    dueDate: "25 Apr 2026",
    category: "Consumables",
    status: "Scheduled",
  },
  {
    id: "ap-003",
    vendor: "Aida Engineering",
    amount: "₹3,40,000",
    dueDate: "15 Apr 2026",
    category: "Capex EMI",
    status: "Overdue",
  },
  {
    id: "ap-004",
    vendor: "TATA Steel",
    amount: "₹9,80,000",
    dueDate: "30 Apr 2026",
    category: "Raw Material",
    status: "Scheduled",
  },
  {
    id: "ap-005",
    vendor: "Bharat Tools Pvt",
    amount: "₹1,12,000",
    dueDate: "28 Apr 2026",
    category: "Tooling",
    status: "Scheduled",
  },
];

interface ExpenseApproval {
  id: string;
  submittedBy: string;
  dept: string;
  description: string;
  amount: string;
  submittedOn: string;
}

const expenseApprovals: ExpenseApproval[] = [
  {
    id: "exp-001",
    submittedBy: "Mohan Krishnan",
    dept: "Maintenance",
    description: "EDM Servo Drive Replacement Parts",
    amount: "₹84,500",
    submittedOn: "20 Apr 2026",
  },
  {
    id: "exp-002",
    submittedBy: "Balamurugan S.",
    dept: "Tool-Room",
    description: "TiN PVD Coating — Batch 4 Punches",
    amount: "₹32,000",
    submittedOn: "19 Apr 2026",
  },
  {
    id: "exp-003",
    submittedBy: "Deepa Nair",
    dept: "HR",
    description: "Safety Awareness Week Materials & Banners",
    amount: "₹18,200",
    submittedOn: "18 Apr 2026",
  },
  {
    id: "exp-004",
    submittedBy: "Vikram Pillai",
    dept: "IT",
    description: "Annual Antivirus License Renewal (30 nodes)",
    amount: "₹42,000",
    submittedOn: "17 Apr 2026",
  },
  {
    id: "exp-005",
    submittedBy: "Sanjay Iyer",
    dept: "NPD",
    description: "Prototype Material — SKF-BR-2291-A Trial",
    amount: "₹26,800",
    submittedOn: "16 Apr 2026",
  },
];

const statusColors: Record<InvoiceStatus, string> = {
  Current: "bg-chart-5/15 text-chart-5 border-chart-5/30",
  Overdue: "bg-destructive/15 text-destructive border-destructive/30",
  Paid: "bg-muted text-muted-foreground border-border",
  Disputed: "bg-accent/15 text-accent border-accent/30",
};

const payableStatusColors: Record<string, string> = {
  "Due Soon": "bg-accent/15 text-accent border-accent/30",
  Overdue: "bg-destructive/15 text-destructive border-destructive/30",
  Scheduled: "bg-primary/15 text-primary border-primary/30",
};

export default function AccountsDashboard() {
  const [approvedExpenses, setApprovedExpenses] = useState<Set<string>>(
    new Set(),
  );

  const handleApproveExpense = (id: string) => {
    setApprovedExpenses((prev) => new Set([...prev, id]));
  };

  const overdueCount = receivables.filter((r) => r.status === "Overdue").length;
  const totalReceivables = receivables
    .filter((r) => r.status !== "Paid")
    .reduce((s, r) => s + r.amountRaw, 0);
  const totalPayables = payables.reduce(
    (s, p) => s + Number.parseInt(p.amount.replace(/[₹,]/g, ""), 10),
    0,
  );

  return (
    <div
      className="p-6 space-y-6 max-w-[1400px] mx-auto"
      data-ocid="accounts.page"
    >
      {/* Header */}
      <div className="flex items-center gap-3 pb-2 border-b border-border">
        <div className="rounded-xl bg-chart-2/15 p-2.5">
          <BadgeIndianRupee className="h-6 w-6 text-chart-2" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Accounts Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            Billing, receivables & payables — Nexus Manufacturing
          </p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-xs text-muted-foreground">As of</p>
          <p className="text-sm font-semibold text-foreground">20 April 2026</p>
        </div>
      </div>

      {/* KPI Row */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        data-ocid="accounts.kpi.section"
      >
        <KPICard
          label="Receivables"
          value={`₹${(totalReceivables / 100000).toFixed(1)}L`}
          sub="Outstanding from clients"
          icon={<ArrowUpCircle className="h-5 w-5" />}
          trend="up"
          trendLabel="+8% vs last month"
          accent
        />
        <KPICard
          label="Payables"
          value={`₹${(totalPayables / 100000).toFixed(1)}L`}
          sub="Due to vendors"
          icon={<ArrowDownCircle className="h-5 w-5" />}
          trend="stable"
          trendLabel="Within credit limits"
        />
        <KPICard
          label="Overdue Invoices"
          value={String(overdueCount)}
          sub="Require follow-up"
          icon={<AlertTriangle className="h-5 w-5" />}
          trend="alert"
          trendLabel={`${overdueCount} client invoices`}
        />
        <KPICard
          label="Cash on Hand"
          value="₹38.4L"
          sub="Current balance"
          icon={<Wallet className="h-5 w-5" />}
          trend="stable"
          trendLabel="Sufficient liquidity"
        />
      </div>

      {/* Receivables Aging */}
      <Card
        className="shadow-card border-border"
        data-ocid="accounts.receivables.section"
      >
        <CardHeader className="pb-3 border-b border-border">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <FileText className="h-4 w-4 text-chart-2" />
              Receivables Aging — Client Invoice Tracker
            </CardTitle>
            <Badge
              variant="outline"
              className="text-xs border-destructive/40 text-destructive"
            >
              {overdueCount} Overdue
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-xs">Client</TableHead>
                  <TableHead className="text-xs">Invoice #</TableHead>
                  <TableHead className="text-xs text-right">Amount</TableHead>
                  <TableHead className="text-xs">Due Date</TableHead>
                  <TableHead className="text-xs text-center">
                    Days Overdue
                  </TableHead>
                  <TableHead className="text-xs">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {receivables.map((row, i) => (
                  <TableRow
                    key={row.id}
                    className="border-border text-sm"
                    data-ocid={`accounts.receivable.item.${i + 1}`}
                  >
                    <TableCell className="py-2.5 font-medium">
                      {row.client}
                    </TableCell>
                    <TableCell className="py-2.5 text-xs font-mono text-muted-foreground">
                      {row.invoice}
                    </TableCell>
                    <TableCell className="py-2.5 text-right tabular-nums font-semibold">
                      {row.amount}
                    </TableCell>
                    <TableCell className="py-2.5 text-xs text-muted-foreground">
                      {row.dueDate}
                    </TableCell>
                    <TableCell className="py-2.5 text-center tabular-nums">
                      {row.daysOverdue > 0 ? (
                        <span
                          className={`text-xs font-bold ${row.daysOverdue > 14 ? "text-destructive" : "text-accent"}`}
                        >
                          +{row.daysOverdue}d
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground">—</span>
                      )}
                    </TableCell>
                    <TableCell className="py-2.5">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${statusColors[row.status]}`}
                      >
                        {row.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Payables + Expense Approvals */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Payables */}
        <Card
          className="shadow-card border-border"
          data-ocid="accounts.payables.section"
        >
          <CardHeader className="pb-3 border-b border-border">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <ArrowDownCircle className="h-4 w-4 text-primary" />
              Payables Summary — Vendor Dues
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-xs">Vendor</TableHead>
                  <TableHead className="text-xs">Category</TableHead>
                  <TableHead className="text-xs text-right">Amount</TableHead>
                  <TableHead className="text-xs">Due Date</TableHead>
                  <TableHead className="text-xs">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payables.map((row, i) => (
                  <TableRow
                    key={row.id}
                    className="border-border text-sm"
                    data-ocid={`accounts.payable.item.${i + 1}`}
                  >
                    <TableCell className="py-2.5 font-medium">
                      {row.vendor}
                    </TableCell>
                    <TableCell className="py-2.5 text-xs text-muted-foreground">
                      {row.category}
                    </TableCell>
                    <TableCell className="py-2.5 text-right tabular-nums font-semibold">
                      {row.amount}
                    </TableCell>
                    <TableCell className="py-2.5 text-xs text-muted-foreground">
                      {row.dueDate}
                    </TableCell>
                    <TableCell className="py-2.5">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${payableStatusColors[row.status]}`}
                      >
                        {row.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Expense Approvals */}
        <Card
          className="shadow-card border-border"
          data-ocid="accounts.expenses.section"
        >
          <CardHeader className="pb-3 border-b border-border">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                Expense Approvals Pending
              </CardTitle>
              <span className="text-xs text-muted-foreground">
                {expenseApprovals.length - approvedExpenses.size} pending
              </span>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {expenseApprovals.map((exp, i) => {
                const isApproved = approvedExpenses.has(exp.id);
                return (
                  <div
                    key={exp.id}
                    className="flex items-start gap-3 px-4 py-3"
                    data-ocid={`accounts.expense.item.${i + 1}`}
                  >
                    <div
                      className={`rounded-lg p-2 mt-0.5 shrink-0 ${isApproved ? "bg-chart-5/10" : "bg-muted"}`}
                    >
                      <FileText
                        className={`h-4 w-4 ${isApproved ? "text-chart-5" : "text-muted-foreground"}`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-medium text-foreground">
                          {exp.submittedBy}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          ({exp.dept})
                        </span>
                      </div>
                      <p
                        className="text-xs text-muted-foreground mt-0.5 truncate"
                        title={exp.description}
                      >
                        {exp.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Submitted: {exp.submittedOn}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-bold tabular-nums text-foreground">
                        {exp.amount}
                      </p>
                      {isApproved ? (
                        <span className="inline-flex items-center gap-1 text-[11px] text-chart-5 font-semibold mt-1">
                          <CheckCircle2 className="h-3 w-3" /> Approved
                        </span>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          className="mt-1.5 h-6 text-xs px-2.5 border-primary/40 text-primary hover:bg-primary/10"
                          onClick={() => handleApproveExpense(exp.id)}
                          data-ocid={`accounts.expense.approve.${i + 1}`}
                        >
                          Approve
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
