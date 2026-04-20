import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  CalendarCheck2,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Clock,
  FileText,
  Lightbulb,
  Package,
  Pencil,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";

// ── NPD-specific mock data ─────────────────────────────────────────────────────

type ProjectStage =
  | "Concept"
  | "Design"
  | "Prototype"
  | "Validation"
  | "Production";
type ProjectStatus = "On Track" | "At Risk" | "Delayed" | "Completed";
type BOMStatus = "Draft" | "Released" | "Under Review";
type ApprovalStatus = "Pending" | "Approved" | "Awaiting Samples";

interface NPDProject {
  id: string;
  name: string;
  client: string;
  stage: ProjectStage;
  dueDate: string;
  status: ProjectStatus;
  lead: string;
  partCount: number;
}

interface DesignReview {
  id: string;
  project: string;
  type: string;
  date: string;
  attendees: string[];
}

interface BOMRecord {
  partNo: string;
  description: string;
  bomVersion: string;
  status: BOMStatus;
  updatedBy: string;
}

interface CustomerApproval {
  id: string;
  client: string;
  part: string;
  stage: string;
  submittedOn: string;
  status: ApprovalStatus;
  daysOpen: number;
}

const npd_projects: NPDProject[] = [
  {
    id: "NPD-034",
    name: "Rear Axle Mounting Bracket",
    client: "TVS Motor Company",
    stage: "Prototype",
    dueDate: "2026-05-15",
    status: "On Track",
    lead: "Sanjay Iyer",
    partCount: 4,
  },
  {
    id: "NPD-035",
    name: "Bearing Retainer Plate — Wheel Hub",
    client: "SKF Bearings India",
    stage: "Design",
    dueDate: "2026-06-01",
    status: "On Track",
    lead: "Kiran Desai",
    partCount: 2,
  },
  {
    id: "NPD-036",
    name: "Engine Bracket — 3-Wheeler Platform",
    client: "TVS Motor Company",
    stage: "Validation",
    dueDate: "2026-04-30",
    status: "At Risk",
    lead: "Sanjay Iyer",
    partCount: 6,
  },
  {
    id: "NPD-037",
    name: "Deep Draw Housing — Gearbox End",
    client: "SKF Bearings India",
    stage: "Concept",
    dueDate: "2026-07-20",
    status: "On Track",
    lead: "Meera Rajan",
    partCount: 1,
  },
  {
    id: "NPD-038",
    name: "Chassis Side Rail — Commercial 3W",
    client: "TVS Motor Company",
    stage: "Design",
    dueDate: "2026-05-28",
    status: "Delayed",
    lead: "Kiran Desai",
    partCount: 3,
  },
  {
    id: "NPD-039",
    name: "Inner Race Carrier Plate",
    client: "SKF Bearings India",
    stage: "Production",
    dueDate: "2026-04-22",
    status: "Completed",
    lead: "Sanjay Iyer",
    partCount: 2,
  },
];

const designReviews: DesignReview[] = [
  {
    id: "DR-021",
    project: "NPD-036 — Engine Bracket",
    type: "Critical Design Review",
    date: "2026-04-22",
    attendees: ["Sanjay Iyer", "Kavitha Subramanian", "TVS Eng. Team"],
  },
  {
    id: "DR-022",
    project: "NPD-034 — Rear Axle Bracket",
    type: "Design Review Gate 2",
    date: "2026-04-25",
    attendees: ["Sanjay Iyer", "Mohan Krishnan", "Arjun Bose"],
  },
  {
    id: "DR-023",
    project: "NPD-035 — Bearing Retainer",
    type: "Preliminary Design Review",
    date: "2026-04-28",
    attendees: ["Kiran Desai", "SKF Tech. Team"],
  },
  {
    id: "DR-024",
    project: "NPD-038 — Chassis Rail",
    type: "Design Review Gate 1",
    date: "2026-05-02",
    attendees: ["Kiran Desai", "Balamurugan S.", "Arjun Bose"],
  },
  {
    id: "DR-025",
    project: "NPD-037 — Deep Draw Housing",
    type: "Concept Review",
    date: "2026-05-08",
    attendees: ["Meera Rajan", "SKF Eng. Team"],
  },
];

const bomRecords: BOMRecord[] = [
  {
    partNo: "NPD-034-001",
    description: "Rear Axle Bracket — Main Body",
    bomVersion: "v1.3",
    status: "Under Review",
    updatedBy: "Sanjay Iyer",
  },
  {
    partNo: "NPD-034-002",
    description: "Gusset Plate — Left Hand",
    bomVersion: "v1.3",
    status: "Under Review",
    updatedBy: "Sanjay Iyer",
  },
  {
    partNo: "NPD-035-001",
    description: "Bearing Retainer Plate",
    bomVersion: "v2.0",
    status: "Released",
    updatedBy: "Kiran Desai",
  },
  {
    partNo: "NPD-036-001",
    description: "Engine Bracket — Base Plate",
    bomVersion: "v0.9",
    status: "Draft",
    updatedBy: "Sanjay Iyer",
  },
  {
    partNo: "NPD-039-001",
    description: "Inner Race Carrier Plate",
    bomVersion: "v3.1",
    status: "Released",
    updatedBy: "Sanjay Iyer",
  },
  {
    partNo: "NPD-038-001",
    description: "Chassis Rail — LH Section",
    bomVersion: "v0.7",
    status: "Draft",
    updatedBy: "Kiran Desai",
  },
];

const customerApprovals: CustomerApproval[] = [
  {
    id: "CA-2041",
    client: "TVS Motor Company",
    part: "Engine Bracket — NPD-036",
    stage: "PPAP Level 3",
    submittedOn: "2026-04-14",
    status: "Pending",
    daysOpen: 6,
  },
  {
    id: "CA-2040",
    client: "SKF Bearings India",
    part: "Bearing Retainer Plate — NPD-035",
    stage: "First Article Approval",
    submittedOn: "2026-04-10",
    status: "Approved",
    daysOpen: 10,
  },
  {
    id: "CA-2039",
    client: "TVS Motor Company",
    part: "Rear Axle Bracket — NPD-034",
    stage: "Sample Submission",
    submittedOn: "2026-04-18",
    status: "Awaiting Samples",
    daysOpen: 2,
  },
  {
    id: "CA-2038",
    client: "SKF Bearings India",
    part: "Inner Race Carrier — NPD-039",
    stage: "Production Part Approval",
    submittedOn: "2026-04-08",
    status: "Approved",
    daysOpen: 12,
  },
];

// ── Helper components ─────────────────────────────────────────────────────────

function KpiCard({
  label,
  value,
  sub,
  trend,
  icon,
}: {
  label: string;
  value: string | number;
  sub?: string;
  trend?: "up" | "down" | "stable";
  icon: React.ReactNode;
}) {
  return (
    <Card className="shadow-card border-border">
      <CardContent className="pt-4 pb-3 px-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {label}
          </p>
          <span className="text-muted-foreground">{icon}</span>
        </div>
        <p className="text-2xl font-bold kpi-value text-foreground">{value}</p>
        {sub && (
          <div
            className={cn(
              "flex items-center gap-1 mt-0.5 text-xs",
              trend === "up"
                ? "text-chart-5"
                : trend === "down"
                  ? "text-destructive"
                  : "text-muted-foreground",
            )}
          >
            {trend === "up" && <TrendingUp className="h-3 w-3" />}
            {trend === "down" && <TrendingDown className="h-3 w-3" />}
            <span>{sub}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

const stageConfig: Record<
  ProjectStage,
  { color: string; bg: string; order: number }
> = {
  Concept: { color: "text-muted-foreground", bg: "bg-muted/60", order: 1 },
  Design: { color: "text-primary", bg: "bg-primary/10", order: 2 },
  Prototype: { color: "text-accent", bg: "bg-accent/10", order: 3 },
  Validation: { color: "text-chart-4", bg: "bg-chart-4/10", order: 4 },
  Production: { color: "text-chart-5", bg: "bg-chart-5/10", order: 5 },
};

const statusConfig: Record<ProjectStatus, string> = {
  "On Track": "border-chart-5/50 text-chart-5 bg-chart-5/5",
  "At Risk": "border-accent/50 text-accent bg-accent/5",
  Delayed: "border-destructive/50 text-destructive bg-destructive/5",
  Completed: "border-chart-5/30 text-chart-5/70 bg-chart-5/5",
};

const bomStatusConfig: Record<BOMStatus, string> = {
  Draft: "border-muted-foreground/40 text-muted-foreground",
  "Under Review": "border-accent/50 text-accent bg-accent/5",
  Released: "border-chart-5/50 text-chart-5 bg-chart-5/5",
};

const approvalStatusConfig: Record<ApprovalStatus, string> = {
  Pending: "border-accent/50 text-accent bg-accent/5",
  Approved: "border-chart-5/50 text-chart-5 bg-chart-5/5",
  "Awaiting Samples": "border-primary/50 text-primary bg-primary/5",
};

const clientColors: Record<string, string> = {
  "TVS Motor Company": "text-chart-2",
  "SKF Bearings India": "text-chart-1",
};

// Stage pipeline stepper
const STAGES: ProjectStage[] = [
  "Concept",
  "Design",
  "Prototype",
  "Validation",
  "Production",
];

function StagePipeline({ current }: { current: ProjectStage }) {
  const idx = STAGES.indexOf(current);
  return (
    <div className="flex items-center gap-0.5">
      {STAGES.map((s, i) => (
        <div key={s} className="flex items-center gap-0.5">
          <div
            className={cn(
              "h-1.5 w-4 rounded-full transition-colors",
              i < idx
                ? "bg-chart-5/70"
                : i === idx
                  ? "bg-primary"
                  : "bg-border",
            )}
          />
          {i < STAGES.length - 1 && (
            <ChevronRight className="h-2.5 w-2.5 text-border" />
          )}
        </div>
      ))}
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function NPDDashboard() {
  const activeProjects = npd_projects.filter(
    (p) => p.status !== "Completed",
  ).length;
  const designReviewsDue = designReviews.filter((d) => {
    const days = Math.ceil(
      (new Date(d.date).getTime() - Date.now()) / 86400000,
    );
    return days >= 0 && days <= 7;
  }).length;
  const bomReleased = bomRecords.filter((b) => b.status === "Released").length;
  const approvalsPending = customerApprovals.filter(
    (a) => a.status === "Pending" || a.status === "Awaiting Samples",
  ).length;

  return (
    <div className="p-6 space-y-6" data-ocid="npd.page">
      {/* Page Header */}
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-lg bg-chart-4/10 border border-chart-4/20 flex items-center justify-center flex-shrink-0">
          <Lightbulb className="h-5 w-5 text-chart-4" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-foreground leading-tight">
            New Product Development
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Design Engineering, Prototyping &amp; Customer Approvals · Hosur
            Plant
          </p>
        </div>
        <div className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 border border-border rounded-md px-3 py-1.5">
          <Clock className="h-3.5 w-3.5" />
          <span>Updated: Today, 09:15 AM</span>
        </div>
      </div>

      {/* KPI Row */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-3"
        data-ocid="npd.kpi_row"
      >
        <KpiCard
          label="Active Projects"
          value={activeProjects}
          sub="+2 this quarter"
          trend="up"
          icon={<Lightbulb className="h-4 w-4" />}
        />
        <KpiCard
          label="Design Reviews Due"
          value={designReviewsDue}
          sub="within 7 days"
          trend="stable"
          icon={<CalendarCheck2 className="h-4 w-4" />}
        />
        <KpiCard
          label="BOM Releases"
          value={bomReleased}
          sub={`${bomRecords.filter((b) => b.status === "Draft").length} drafts pending`}
          trend="stable"
          icon={<FileText className="h-4 w-4" />}
        />
        <KpiCard
          label="Approvals Pending"
          value={approvalsPending}
          sub="TVS + SKF combined"
          trend="down"
          icon={<CheckCircle2 className="h-4 w-4" />}
        />
      </div>

      {/* NPD Projects Table */}
      <Card className="shadow-card" data-ocid="npd.projects_section">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-chart-4" />
            NPD Projects
            <Badge
              variant="outline"
              className="ml-auto text-xs border-border text-muted-foreground"
            >
              {npd_projects.length} projects
            </Badge>
          </CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm" data-ocid="npd.projects_table">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Project #
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Product Name
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                    Client
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Stage
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell">
                    Pipeline
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                    Due Date
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {npd_projects.map((p, i) => {
                  const sc = stageConfig[p.stage];
                  return (
                    <tr
                      key={p.id}
                      data-ocid={`npd.project.item.${i + 1}`}
                      className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-4 py-3 font-mono text-xs text-primary font-medium">
                        {p.id}
                      </td>
                      <td className="px-4 py-3 max-w-[200px]">
                        <p className="text-xs font-medium text-foreground line-clamp-1">
                          {p.name}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          {p.partCount} parts · {p.lead}
                        </p>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <span
                          className={cn(
                            "text-xs font-medium",
                            clientColors[p.client] ?? "text-foreground",
                          )}
                        >
                          {p.client
                            .replace(" Company", "")
                            .replace(" India", "")}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-[10px] h-5 px-1.5",
                            sc.bg,
                            sc.color,
                            "border-transparent",
                          )}
                        >
                          {p.stage}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell">
                        <StagePipeline current={p.stage} />
                      </td>
                      <td className="px-4 py-3 text-xs text-muted-foreground tabular-nums hidden md:table-cell">
                        {p.dueDate}
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-[10px] h-5 px-1.5",
                            statusConfig[p.status],
                          )}
                        >
                          {p.status}
                        </Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Design Review Calendar + BOM Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Design Review Calendar */}
        <Card className="shadow-card" data-ocid="npd.design_reviews_section">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <CalendarCheck2 className="h-4 w-4 text-primary" />
              Upcoming Design Reviews
              <Badge
                variant="outline"
                className="ml-auto text-xs border-border text-muted-foreground"
              >
                {designReviews.length} scheduled
              </Badge>
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="pt-3 space-y-2">
            {designReviews.map((dr, i) => {
              const days = Math.ceil(
                (new Date(dr.date).getTime() - Date.now()) / 86400000,
              );
              const urgency =
                days <= 3
                  ? "border-destructive/30 bg-destructive/5"
                  : days <= 7
                    ? "border-accent/30 bg-accent/5"
                    : "border-border/60 bg-background";
              return (
                <div
                  key={dr.id}
                  data-ocid={`npd.review.item.${i + 1}`}
                  className={cn(
                    "flex gap-3 p-3 rounded-lg border transition-colors",
                    urgency,
                  )}
                >
                  <div className="flex-shrink-0 text-center min-w-[44px]">
                    <p className="text-[10px] uppercase text-muted-foreground leading-none">
                      {new Date(dr.date).toLocaleDateString("en-IN", {
                        month: "short",
                      })}
                    </p>
                    <p
                      className={cn(
                        "text-lg font-bold kpi-value leading-tight",
                        days <= 3
                          ? "text-destructive"
                          : days <= 7
                            ? "text-accent"
                            : "text-foreground",
                      )}
                    >
                      {new Date(dr.date).getDate()}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {days === 0
                        ? "Today"
                        : days === 1
                          ? "Tomorrow"
                          : `${days}d`}
                    </p>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-foreground line-clamp-1">
                      {dr.type}
                    </p>
                    <p className="text-[10px] text-muted-foreground line-clamp-1 mt-0.5">
                      {dr.project}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Users className="h-2.5 w-2.5 text-muted-foreground" />
                      <p className="text-[10px] text-muted-foreground line-clamp-1">
                        {dr.attendees.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* BOM Management */}
        <Card className="shadow-card" data-ocid="npd.bom_section">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <FileText className="h-4 w-4 text-accent" />
              BOM Management
              <Badge
                variant="outline"
                className="ml-auto text-xs border-border text-muted-foreground"
              >
                {bomRecords.length} records
              </Badge>
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="p-0">
            <table className="w-full text-sm" data-ocid="npd.bom_table">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Part #
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Description
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                    BOM Ver.
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {bomRecords.map((b, i) => (
                  <tr
                    key={b.partNo}
                    data-ocid={`npd.bom.item.${i + 1}`}
                    className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-4 py-2.5 font-mono text-xs text-primary font-medium">
                      {b.partNo}
                    </td>
                    <td className="px-4 py-2.5 max-w-[180px]">
                      <p className="text-xs text-foreground line-clamp-1">
                        {b.description}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {b.updatedBy}
                      </p>
                    </td>
                    <td className="px-4 py-2.5 text-xs font-mono text-muted-foreground hidden md:table-cell">
                      {b.bomVersion}
                    </td>
                    <td className="px-4 py-2.5">
                      <Badge
                        variant="outline"
                        className={cn(
                          "text-[10px] h-5 px-1.5",
                          bomStatusConfig[b.status],
                        )}
                      >
                        {b.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      {/* Customer Approval Tracker */}
      <Card className="shadow-card" data-ocid="npd.approvals_section">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Package className="h-4 w-4 text-chart-5" />
            Customer Approval Tracker
            <Badge
              variant="outline"
              className="ml-auto text-xs border-border text-muted-foreground"
            >
              {customerApprovals.length} submissions
            </Badge>
          </CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm" data-ocid="npd.approvals_table">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Ref #
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                    Client
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Part / Stage
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell">
                    Submitted
                  </th>
                  <th className="text-right px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                    Days Open
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {customerApprovals.map((a, i) => (
                  <tr
                    key={a.id}
                    data-ocid={`npd.approval.item.${i + 1}`}
                    className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-4 py-3 font-mono text-xs text-primary font-medium">
                      {a.id}
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <div className="flex items-center gap-1.5">
                        <CircleDot
                          className={cn(
                            "h-2.5 w-2.5 flex-shrink-0",
                            clientColors[a.client] ?? "text-muted-foreground",
                          )}
                        />
                        <span
                          className={cn(
                            "text-xs font-medium",
                            clientColors[a.client] ?? "text-foreground",
                          )}
                        >
                          {a.client
                            .replace(" Company", "")
                            .replace(" India", "")}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-xs font-medium text-foreground line-clamp-1">
                        {a.part}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {a.stage}
                      </p>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground tabular-nums hidden lg:table-cell">
                      {a.submittedOn}
                    </td>
                    <td className="px-4 py-3 text-right text-xs tabular-nums font-medium hidden md:table-cell">
                      <span
                        className={cn(
                          a.daysOpen > 7
                            ? "text-destructive"
                            : a.daysOpen > 4
                              ? "text-accent"
                              : "text-foreground",
                        )}
                      >
                        {a.daysOpen}d
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant="outline"
                        className={cn(
                          "text-[10px] h-5 px-1.5",
                          approvalStatusConfig[a.status],
                        )}
                      >
                        {a.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
