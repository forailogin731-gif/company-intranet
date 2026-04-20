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
  BookOpen,
  Briefcase,
  CalendarCheck2,
  CheckCircle2,
  Clock,
  TrendingDown,
  TrendingUp,
  UserCheck,
  Users,
  XCircle,
} from "lucide-react";
import { useState } from "react";

interface KPICardProps {
  label: string;
  value: string | number;
  sub?: string;
  icon: React.ReactNode;
  trend?: "up" | "down" | "stable";
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
  return (
    <Card
      className={`shadow-card border-border ${accent ? "border-l-4 border-l-accent" : ""}`}
      data-ocid="hr.kpi.card"
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
                {trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-chart-5" />
                ) : trend === "down" ? (
                  <TrendingDown className="h-3 w-3 text-destructive" />
                ) : null}
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

const attendanceData = [
  { dept: "Production", total: 64, present: 60, absent: 2, onLeave: 2 },
  { dept: "Maintenance", total: 18, present: 16, absent: 1, onLeave: 1 },
  { dept: "Quality", total: 15, present: 14, absent: 0, onLeave: 1 },
  { dept: "Tool-Room", total: 14, present: 13, absent: 1, onLeave: 0 },
  { dept: "PPC", total: 10, present: 9, absent: 0, onLeave: 1 },
  { dept: "NPD", total: 12, present: 11, absent: 0, onLeave: 1 },
  { dept: "HR", total: 9, present: 8, absent: 0, onLeave: 1 },
  { dept: "IT", total: 7, present: 7, absent: 0, onLeave: 0 },
  { dept: "Accounts", total: 8, present: 7, absent: 1, onLeave: 0 },
  { dept: "Finance", total: 6, present: 6, absent: 0, onLeave: 0 },
  { dept: "Purchase", total: 8, present: 7, absent: 0, onLeave: 1 },
  { dept: "RM-Purchase", total: 6, present: 5, absent: 1, onLeave: 0 },
  { dept: "Stores", total: 11, present: 10, absent: 0, onLeave: 1 },
];

type LeaveStatus = "Pending" | "Approved" | "Rejected";

interface LeaveRequest {
  id: string;
  employee: string;
  dept: string;
  leaveType: string;
  from: string;
  to: string;
  status: LeaveStatus;
}

const initialLeaveRequests: LeaveRequest[] = [
  {
    id: "lr-001",
    employee: "Arun Selvam",
    dept: "Production",
    leaveType: "Casual Leave",
    from: "25 Apr",
    to: "26 Apr",
    status: "Pending",
  },
  {
    id: "lr-002",
    employee: "Lakshmi Priya",
    dept: "Quality",
    leaveType: "Medical Leave",
    from: "22 Apr",
    to: "24 Apr",
    status: "Approved",
  },
  {
    id: "lr-003",
    employee: "Ganesh Babu",
    dept: "Stores",
    leaveType: "Earned Leave",
    from: "28 Apr",
    to: "02 May",
    status: "Pending",
  },
  {
    id: "lr-004",
    employee: "Vikram Pillai",
    dept: "IT",
    leaveType: "Casual Leave",
    from: "21 Apr",
    to: "21 Apr",
    status: "Approved",
  },
  {
    id: "lr-005",
    employee: "Ravi Narayanan",
    dept: "RM-Purchase",
    leaveType: "Medical Leave",
    from: "23 Apr",
    to: "25 Apr",
    status: "Rejected",
  },
  {
    id: "lr-006",
    employee: "Mohan Krishnan",
    dept: "Maintenance",
    leaveType: "Earned Leave",
    from: "01 May",
    to: "03 May",
    status: "Pending",
  },
];

const trainingSessions = [
  {
    id: "tr-001",
    topic: "CNC Programming — Batch 3 (Skill India)",
    trainer: "Ext. Faculty",
    date: "05 May 2026",
    dept: "Tool-Room / Production",
    seats: "12 / 20",
  },
  {
    id: "tr-002",
    topic: "IATF 16949 Internal Auditor Refresher",
    trainer: "Kavitha Subramanian",
    date: "28 Apr 2026",
    dept: "Quality / NPD",
    seats: "8 / 15",
  },
  {
    id: "tr-003",
    topic: "Press Safety & Lockout-Tagout (LOTO)",
    trainer: "Safety Officer",
    date: "22 Apr 2026",
    dept: "All Dept",
    seats: "40 / 50",
  },
  {
    id: "tr-004",
    topic: "5S Workplace Organisation & Audit",
    trainer: "Deepa Nair",
    date: "30 Apr 2026",
    dept: "Production / Stores",
    seats: "20 / 30",
  },
  {
    id: "tr-005",
    topic: "Lean Manufacturing — Value Stream Mapping",
    trainer: "Ext. Consultant",
    date: "12 May 2026",
    dept: "PPC / Production",
    seats: "5 / 15",
  },
];

const openPositions = [
  {
    id: "pos-001",
    role: "Press Operator (Sr.)",
    dept: "Production",
    openings: 3,
    stage: "Screening",
    candidates: 11,
  },
  {
    id: "pos-002",
    role: "Quality Engineer",
    dept: "Quality",
    openings: 1,
    stage: "Interview",
    candidates: 4,
  },
  {
    id: "pos-003",
    role: "Die Maker — Apprentice",
    dept: "Tool-Room",
    openings: 2,
    stage: "Offer",
    candidates: 2,
  },
  {
    id: "pos-004",
    role: "PPC Analyst",
    dept: "PPC",
    openings: 1,
    stage: "Screening",
    candidates: 7,
  },
  {
    id: "pos-005",
    role: "ERP Support Engineer",
    dept: "IT",
    openings: 1,
    stage: "Final Interview",
    candidates: 3,
  },
];

const statusColors: Record<LeaveStatus, string> = {
  Pending: "bg-accent/15 text-accent border-accent/30",
  Approved: "bg-chart-5/15 text-chart-5 border-chart-5/30",
  Rejected: "bg-destructive/15 text-destructive border-destructive/30",
};

const stageColors: Record<string, string> = {
  Screening: "bg-muted text-muted-foreground",
  Interview: "bg-primary/15 text-primary",
  "Final Interview": "bg-accent/15 text-accent",
  Offer: "bg-chart-5/15 text-chart-5",
};

export default function HRDashboard() {
  const [leaveRequests, setLeaveRequests] =
    useState<LeaveRequest[]>(initialLeaveRequests);

  const totalHeadcount = attendanceData.reduce((s, d) => s + d.total, 0);
  const totalPresent = attendanceData.reduce((s, d) => s + d.present, 0);
  const presentPct = Math.round((totalPresent / totalHeadcount) * 100);
  const pendingLeaves = leaveRequests.filter(
    (r) => r.status === "Pending",
  ).length;

  const handleApprove = (id: string) => {
    setLeaveRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "Approved" } : r)),
    );
  };
  const handleReject = (id: string) => {
    setLeaveRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "Rejected" } : r)),
    );
  };

  return (
    <div className="p-6 space-y-6 max-w-[1400px] mx-auto" data-ocid="hr.page">
      {/* Header */}
      <div className="flex items-center gap-3 pb-2 border-b border-border">
        <div className="rounded-xl bg-chart-5/15 p-2.5">
          <Users className="h-6 w-6 text-chart-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">HR Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Workforce management — Nexus Manufacturing, Hosur
          </p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-xs text-muted-foreground">Today</p>
          <p className="text-sm font-semibold text-foreground">20 April 2026</p>
        </div>
      </div>

      {/* KPI Row */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        data-ocid="hr.kpi.section"
      >
        <KPICard
          label="Total Headcount"
          value={totalHeadcount}
          sub="Active employees"
          icon={<Users className="h-5 w-5" />}
          trend="up"
          trendLabel="+4 this month"
          accent
        />
        <KPICard
          label="Present Today"
          value={`${presentPct}%`}
          sub={`${totalPresent} of ${totalHeadcount}`}
          icon={<UserCheck className="h-5 w-5" />}
          trend="stable"
          trendLabel="On target"
        />
        <KPICard
          label="Leave Requests"
          value={pendingLeaves}
          sub="Pending approval"
          icon={<Clock className="h-5 w-5" />}
          trend={pendingLeaves > 3 ? "up" : "stable"}
          trendLabel={`${pendingLeaves} action needed`}
        />
        <KPICard
          label="Trainings Scheduled"
          value={trainingSessions.length}
          sub="In next 30 days"
          icon={<BookOpen className="h-5 w-5" />}
          trend="up"
          trendLabel="+2 new sessions"
        />
      </div>

      {/* Attendance Summary + Leave Requests */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Attendance Table */}
        <Card
          className="shadow-card border-border"
          data-ocid="hr.attendance.section"
        >
          <CardHeader className="pb-3 border-b border-border">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <UserCheck className="h-4 w-4 text-chart-5" />
              Department-wise Attendance
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-auto max-h-72">
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="text-xs">Department</TableHead>
                    <TableHead className="text-xs text-right">Total</TableHead>
                    <TableHead className="text-xs text-right">
                      Present
                    </TableHead>
                    <TableHead className="text-xs text-right">Absent</TableHead>
                    <TableHead className="text-xs text-right">
                      On Leave
                    </TableHead>
                    <TableHead className="text-xs text-right">%</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attendanceData.map((row, i) => {
                    const pct = Math.round((row.present / row.total) * 100);
                    return (
                      <TableRow
                        key={row.dept}
                        className="border-border text-sm"
                        data-ocid={`hr.attendance.item.${i + 1}`}
                      >
                        <TableCell className="font-medium py-2">
                          {row.dept}
                        </TableCell>
                        <TableCell className="text-right py-2 tabular-nums">
                          {row.total}
                        </TableCell>
                        <TableCell className="text-right py-2 tabular-nums text-chart-5">
                          {row.present}
                        </TableCell>
                        <TableCell className="text-right py-2 tabular-nums text-destructive">
                          {row.absent}
                        </TableCell>
                        <TableCell className="text-right py-2 tabular-nums text-accent">
                          {row.onLeave}
                        </TableCell>
                        <TableCell className="text-right py-2">
                          <span
                            className={`text-xs font-semibold ${pct >= 95 ? "text-chart-5" : pct >= 85 ? "text-accent" : "text-destructive"}`}
                          >
                            {pct}%
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Leave Requests Table */}
        <Card
          className="shadow-card border-border"
          data-ocid="hr.leave.section"
        >
          <CardHeader className="pb-3 border-b border-border">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <CalendarCheck2 className="h-4 w-4 text-accent" />
              Leave Requests
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-auto max-h-72">
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="text-xs">Employee</TableHead>
                    <TableHead className="text-xs">Type</TableHead>
                    <TableHead className="text-xs">From–To</TableHead>
                    <TableHead className="text-xs">Status</TableHead>
                    <TableHead className="text-xs text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaveRequests.map((req, i) => (
                    <TableRow
                      key={req.id}
                      className="border-border text-sm"
                      data-ocid={`hr.leave.item.${i + 1}`}
                    >
                      <TableCell className="py-2">
                        <div className="font-medium text-foreground leading-tight">
                          {req.employee}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {req.dept}
                        </div>
                      </TableCell>
                      <TableCell className="py-2 text-xs text-muted-foreground">
                        {req.leaveType}
                      </TableCell>
                      <TableCell className="py-2 text-xs tabular-nums">
                        {req.from} – {req.to}
                      </TableCell>
                      <TableCell className="py-2">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${statusColors[req.status]}`}
                        >
                          {req.status}
                        </span>
                      </TableCell>
                      <TableCell className="py-2 text-right">
                        {req.status === "Pending" ? (
                          <div className="flex justify-end gap-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0 text-chart-5 hover:text-chart-5 hover:bg-chart-5/10"
                              onClick={() => handleApprove(req.id)}
                              aria-label="Approve"
                              data-ocid={`hr.leave.approve.${i + 1}`}
                            >
                              <CheckCircle2 className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                              onClick={() => handleReject(req.id)}
                              aria-label="Reject"
                              data-ocid={`hr.leave.reject.${i + 1}`}
                            >
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </div>
                        ) : (
                          <span className="text-xs text-muted-foreground">
                            —
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Training Calendar + Recruitment Tracker */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Training Calendar */}
        <Card
          className="shadow-card border-border"
          data-ocid="hr.training.section"
        >
          <CardHeader className="pb-3 border-b border-border">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              Training Calendar — Upcoming Sessions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-xs">Topic</TableHead>
                  <TableHead className="text-xs">Trainer</TableHead>
                  <TableHead className="text-xs">Date</TableHead>
                  <TableHead className="text-xs">Dept</TableHead>
                  <TableHead className="text-xs text-right">Seats</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trainingSessions.map((s, i) => (
                  <TableRow
                    key={s.id}
                    className="border-border text-sm"
                    data-ocid={`hr.training.item.${i + 1}`}
                  >
                    <TableCell
                      className="py-2.5 font-medium max-w-[180px] truncate"
                      title={s.topic}
                    >
                      {s.topic}
                    </TableCell>
                    <TableCell className="py-2.5 text-xs text-muted-foreground">
                      {s.trainer}
                    </TableCell>
                    <TableCell className="py-2.5 text-xs tabular-nums text-accent font-medium">
                      {s.date}
                    </TableCell>
                    <TableCell className="py-2.5 text-xs text-muted-foreground">
                      {s.dept}
                    </TableCell>
                    <TableCell className="py-2.5 text-xs text-right tabular-nums">
                      {s.seats}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recruitment Tracker */}
        <Card
          className="shadow-card border-border"
          data-ocid="hr.recruitment.section"
        >
          <CardHeader className="pb-3 border-b border-border">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-accent" />
                Recruitment Tracker
              </CardTitle>
              <span className="text-xs text-muted-foreground">
                {openPositions.length} open positions
              </span>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-xs">Role</TableHead>
                  <TableHead className="text-xs">Dept</TableHead>
                  <TableHead className="text-xs text-center">
                    Openings
                  </TableHead>
                  <TableHead className="text-xs">Stage</TableHead>
                  <TableHead className="text-xs text-right">
                    Candidates
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {openPositions.map((pos, i) => (
                  <TableRow
                    key={pos.id}
                    className="border-border text-sm"
                    data-ocid={`hr.recruitment.item.${i + 1}`}
                  >
                    <TableCell className="py-2.5 font-medium">
                      {pos.role}
                    </TableCell>
                    <TableCell className="py-2.5 text-xs text-muted-foreground">
                      {pos.dept}
                    </TableCell>
                    <TableCell className="py-2.5 text-center tabular-nums font-semibold text-primary">
                      {pos.openings}
                    </TableCell>
                    <TableCell className="py-2.5">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${stageColors[pos.stage] ?? "bg-muted text-muted-foreground"}`}
                      >
                        {pos.stage}
                      </span>
                    </TableCell>
                    <TableCell className="py-2.5 text-right tabular-nums text-muted-foreground">
                      {pos.candidates}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
