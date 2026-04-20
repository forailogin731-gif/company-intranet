import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { departments, employees, workOrders } from "@/data/mock";
import { cn } from "@/lib/utils";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarClock,
  Cog,
  Factory,
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
} from "lucide-react";
import { Suspense, lazy } from "react";

const ProductionDashboard = lazy(
  () => import("./departments/ProductionDashboard"),
);
const QualityDashboard = lazy(() => import("./departments/QualityDashboard"));
const MaintenanceDashboard = lazy(
  () => import("./departments/MaintenanceDashboard"),
);
const PPCDashboard = lazy(() => import("./departments/PPCDashboard"));
const PurchaseDashboard = lazy(() => import("./departments/PurchaseDashboard"));
const RMPurchaseDashboard = lazy(
  () => import("./departments/RMPurchaseDashboard"),
);
const StoresDashboard = lazy(() => import("./departments/StoresDashboard"));
const ToolRoomDashboard = lazy(() => import("./departments/ToolRoomDashboard"));
const HRDashboard = lazy(() => import("./departments/HRDashboard"));
const AccountsDashboard = lazy(() => import("./departments/AccountsDashboard"));
const FinanceDashboard = lazy(() => import("./departments/FinanceDashboard"));
const ITDashboard = lazy(() => import("./departments/ITDashboard"));
const NPDDashboard = lazy(() => import("./departments/NPDDashboard"));

const deptDashboardMap: Record<string, React.ComponentType> = {
  production: ProductionDashboard,
  quality: QualityDashboard,
  maintenance: MaintenanceDashboard,
  ppc: PPCDashboard,
  purchase: PurchaseDashboard,
  "rm-purchase": RMPurchaseDashboard,
  stores: StoresDashboard,
  "tool-room": ToolRoomDashboard,
  hr: HRDashboard,
  accounts: AccountsDashboard,
  finance: FinanceDashboard,
  it: ITDashboard,
  npd: NPDDashboard,
};

function DeptDashboardLoader() {
  return (
    <div className="space-y-4 p-6">
      <Skeleton className="h-8 w-64" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Skeleton className="h-64" />
        <Skeleton className="h-64" />
      </div>
    </div>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="h-6 w-6" />,
  TrendingUp: <TrendingUp className="h-6 w-6" />,
  Users: <Users className="h-6 w-6" />,
  Monitor: <Monitor className="h-6 w-6" />,
  Wrench: <Wrench className="h-6 w-6" />,
  Lightbulb: <Lightbulb className="h-6 w-6" />,
  CalendarClock: <CalendarClock className="h-6 w-6" />,
  Factory: <Factory className="h-6 w-6" />,
  ShoppingCart: <ShoppingCart className="h-6 w-6" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6" />,
  PackageSearch: <PackageSearch className="h-6 w-6" />,
  Warehouse: <Warehouse className="h-6 w-6" />,
  Cog: <Cog className="h-6 w-6" />,
};

export default function DepartmentPage() {
  const { id } = useParams({ from: "/departments/$id" });
  const dept = departments.find((d) => d.slug === id);

  if (!dept) {
    return (
      <div className="p-8 text-center" data-ocid="department.not_found">
        <p className="text-muted-foreground">Department not found.</p>
        <Link to="/">
          <Button variant="outline" className="mt-4">
            Back to Dashboard
          </Button>
        </Link>
      </div>
    );
  }

  const deptEmployees = employees.filter((e) => e.department === dept.name);
  const deptWorkOrders = workOrders.filter((w) => w.department === dept.name);

  const SpecificDashboard = deptDashboardMap[dept.slug] ?? null;

  return (
    <div className="p-6 space-y-6 animate-fade-in" data-ocid="department.page">
      {/* Breadcrumb + Back */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors">
          Dashboard
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">{dept.name}</span>
      </div>

      {/* Hero Section */}
      <div
        className={cn(
          "rounded-xl border border-border p-6 flex flex-col sm:flex-row sm:items-center gap-4",
          dept.bgColor,
        )}
        data-ocid="department.hero"
      >
        <div
          className={cn(
            "h-14 w-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-card border border-border/30",
            dept.bgColor,
          )}
        >
          <span className={dept.color}>
            {iconMap[dept.icon] ?? <Cog className="h-6 w-6" />}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-1">
            <h1 className="text-2xl font-display font-semibold text-foreground">
              {dept.name} Department
            </h1>
            <Badge variant="outline" className={cn("text-xs", dept.color)}>
              {dept.headCount} employees
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl">
            {dept.description}
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-sm">
            <span className="text-muted-foreground">Department Head:</span>
            <span className="font-medium text-foreground">{dept.lead}</span>
          </div>
        </div>
        <Link to="/">
          <Button
            data-ocid="department.back_button"
            variant="outline"
            size="sm"
            className="flex-shrink-0 gap-1.5"
          >
            <ArrowLeft className="h-4 w-4" />
            Dashboard
          </Button>
        </Link>
      </div>

      {/* Department-specific dashboard OR generic KPI/team/work-order view */}
      {SpecificDashboard ? (
        <Suspense fallback={<DeptDashboardLoader />}>
          <SpecificDashboard />
        </Suspense>
      ) : (
        <>
          {/* KPI Grid */}
          <div>
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Key Performance Indicators
            </h2>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
              data-ocid="department.kpi_grid"
            >
              {dept.kpiSummary.map((kpi, i) => (
                <Card
                  key={kpi.label}
                  data-ocid={`department.kpi.${i + 1}`}
                  className="bg-card border-border shadow-card"
                >
                  <CardContent className="pt-4 pb-3 px-4">
                    <p className="text-xs text-muted-foreground mb-1">
                      {kpi.label}
                    </p>
                    <div className="flex items-end gap-1.5">
                      <span className="text-xl font-bold kpi-value text-foreground">
                        {kpi.value}
                      </span>
                      {kpi.unit && (
                        <span className="text-xs text-muted-foreground mb-0.5">
                          {kpi.unit}
                        </span>
                      )}
                    </div>
                    {kpi.trendValue && (
                      <div
                        className={cn(
                          "flex items-center gap-1 mt-1 text-xs font-medium",
                          kpi.trend === "up"
                            ? "text-chart-5"
                            : kpi.trend === "down"
                              ? "text-destructive"
                              : "text-muted-foreground",
                        )}
                      >
                        {kpi.trend === "up" ? (
                          <TrendingUp className="h-3 w-3" />
                        ) : kpi.trend === "down" ? (
                          <TrendingDown className="h-3 w-3" />
                        ) : null}
                        {kpi.trendValue}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Team Members */}
            <Card className="shadow-card" data-ocid="department.team_section">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  Team Members
                  <Badge variant="outline" className="ml-auto text-xs">
                    {deptEmployees.length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <Separator />
              <CardContent className="pt-3">
                {deptEmployees.length === 0 ? (
                  <p
                    className="text-sm text-muted-foreground py-4 text-center"
                    data-ocid="department.team.empty_state"
                  >
                    No employee records found for this department.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {deptEmployees.map((emp, i) => (
                      <div
                        key={emp.id}
                        data-ocid={`department.team.item.${i + 1}`}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="relative flex-shrink-0">
                          <img
                            src={emp.avatar}
                            alt={emp.name}
                            className="h-8 w-8 rounded-full border border-border"
                          />
                          <div
                            className={cn(
                              "absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-card",
                              emp.isOnline
                                ? "bg-chart-5"
                                : "bg-muted-foreground",
                            )}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-foreground truncate">
                            {emp.name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {emp.role}
                          </p>
                        </div>
                        <Link to="/directory/$id" params={{ id: emp.id }}>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-muted-foreground hover:text-foreground"
                            aria-label={`View ${emp.name} profile`}
                          >
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Work Orders */}
            <Card
              className="shadow-card"
              data-ocid="department.workorders_section"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <CalendarClock className="h-4 w-4 text-accent" />
                  Work Orders
                  <Badge variant="outline" className="ml-auto text-xs">
                    {deptWorkOrders.length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <Separator />
              <CardContent className="pt-3">
                {deptWorkOrders.length === 0 ? (
                  <p
                    className="text-sm text-muted-foreground py-4 text-center"
                    data-ocid="department.workorders.empty_state"
                  >
                    No active work orders for this department.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {deptWorkOrders.map((wo, i) => (
                      <div
                        key={wo.id}
                        data-ocid={`department.workorder.item.${i + 1}`}
                        className="p-3 rounded-lg border border-border hover:bg-muted/40 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <p className="text-sm font-medium text-foreground line-clamp-1 flex-1">
                            {wo.title}
                          </p>
                          <Badge
                            variant="outline"
                            className={cn(
                              "text-[10px] h-4 px-1.5 flex-shrink-0",
                              wo.priority === "critical"
                                ? "border-destructive/50 text-destructive"
                                : wo.priority === "high"
                                  ? "border-accent/50 text-accent"
                                  : "border-border text-muted-foreground",
                            )}
                          >
                            {wo.priority}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="truncate">{wo.client}</span>
                          <span>·</span>
                          <span className="font-mono">{wo.partNumber}</span>
                          <span>·</span>
                          <span
                            className={cn(
                              "font-medium",
                              wo.status === "completed"
                                ? "text-chart-5"
                                : wo.status === "in-progress"
                                  ? "text-primary"
                                  : "text-muted-foreground",
                            )}
                          >
                            {wo.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </>
      )}

      {/* Navigate to other departments */}
      <div data-ocid="department.other_depts">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Other Departments
        </h2>
        <div className="flex flex-wrap gap-2">
          {departments
            .filter((d) => d.id !== dept.id)
            .map((d) => (
              <Link key={d.id} to="/departments/$id" params={{ id: d.slug }}>
                <Badge
                  data-ocid={`department.other_dept.${d.slug}`}
                  variant="outline"
                  className={cn(
                    "cursor-pointer hover:bg-muted/60 transition-colors px-3 py-1 text-xs gap-1.5",
                    d.color,
                  )}
                >
                  {d.name}
                </Badge>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
