import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { departments, employees } from "@/data/mock";
import { Link } from "@tanstack/react-router";
import { Mail, Phone, Search, Users } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const DEPT_COLORS: Record<string, string> = {
  Accounts: "bg-chart-2/15 text-chart-2 border-chart-2/25",
  Finance: "bg-chart-1/15 text-chart-1 border-chart-1/25",
  HR: "bg-chart-5/15 text-chart-5 border-chart-5/25",
  IT: "bg-primary/15 text-primary border-primary/25",
  Maintenance: "bg-destructive/15 text-destructive border-destructive/25",
  NPD: "bg-chart-4/15 text-chart-4 border-chart-4/25",
  PPC: "bg-accent/15 text-accent border-accent/25",
  Production: "bg-chart-1/15 text-chart-1 border-chart-1/25",
  Purchase: "bg-chart-2/15 text-chart-2 border-chart-2/25",
  Quality: "bg-chart-5/15 text-chart-5 border-chart-5/25",
  "RM-Purchase": "bg-accent/15 text-accent border-accent/25",
  Stores: "bg-chart-4/15 text-chart-4 border-chart-4/25",
  "Tool-Room": "bg-destructive/15 text-destructive border-destructive/25",
};

export default function Directory() {
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("all");

  const filtered = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.role.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase());
    const matchesDept = deptFilter === "all" || emp.department === deptFilter;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="p-6 max-w-[1400px] mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <h1 className="font-display text-3xl text-foreground">
              Employee Directory
            </h1>
          </div>
          <p className="text-muted-foreground text-sm">
            {employees.length} employees · {departments.length} departments ·
            Hosur Plant
          </p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            data-ocid="directory.search_input"
            placeholder="Search name, role, email..."
            className="pl-9 bg-card border-border"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </motion.div>

      {/* Department filter pills */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.07 }}
        className="flex flex-wrap gap-2"
      >
        <button
          type="button"
          data-ocid="directory.dept.tab.all"
          onClick={() => setDeptFilter("all")}
          className={`text-xs px-3.5 py-1.5 rounded-full border font-medium transition-smooth ${
            deptFilter === "all"
              ? "bg-primary text-primary-foreground border-primary shadow-sm"
              : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary bg-card"
          }`}
        >
          All <span className="opacity-70">({employees.length})</span>
        </button>
        {departments.map((d) => (
          <button
            type="button"
            key={d.id}
            data-ocid={`directory.dept.tab.${d.slug}`}
            onClick={() => setDeptFilter(d.name)}
            className={`text-xs px-3.5 py-1.5 rounded-full border font-medium transition-smooth ${
              deptFilter === d.name
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary bg-card"
            }`}
          >
            {d.name} <span className="opacity-60">({d.headCount})</span>
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div
          data-ocid="directory.empty_state"
          className="text-center py-24 text-muted-foreground"
        >
          <div className="h-16 w-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 opacity-30" />
          </div>
          <p className="font-semibold text-foreground">No employees found</p>
          <p className="text-sm mt-1">
            Try adjusting your search or department filter
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((emp, i) => {
            const deptColor =
              DEPT_COLORS[emp.department] ??
              "bg-muted text-muted-foreground border-border";
            return (
              <motion.div
                key={emp.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.035 }}
              >
                <Link to="/directory/$id" params={{ id: emp.id }}>
                  <Card
                    data-ocid={`directory.employee.item.${i + 1}`}
                    className="group hover:shadow-elevated hover:-translate-y-0.5 transition-smooth cursor-pointer border-border bg-card"
                  >
                    <CardContent className="p-5">
                      {/* Avatar row */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="relative flex-shrink-0">
                          <Avatar className="h-14 w-14 ring-2 ring-border group-hover:ring-primary/40 transition-smooth">
                            <AvatarImage src={emp.avatar} alt={emp.name} />
                            <AvatarFallback className="bg-primary/10 text-primary font-semibold text-base">
                              {emp.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          {emp.isOnline && (
                            <span className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full bg-accent border-2 border-card" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors truncate text-sm">
                            {emp.name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate mt-0.5">
                            {emp.role}
                          </p>
                        </div>
                      </div>

                      {/* Department badge */}
                      <Badge
                        className={`text-[11px] px-2.5 py-0.5 border font-medium mb-3 ${deptColor}`}
                      >
                        {emp.department}
                      </Badge>

                      {/* Contact details */}
                      <div className="space-y-1.5 border-t border-border pt-3">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Mail className="h-3.5 w-3.5 flex-shrink-0 text-primary/60" />
                          <span className="truncate">{emp.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Phone className="h-3.5 w-3.5 flex-shrink-0 text-primary/60" />
                          <span className="truncate">{emp.phone}</span>
                        </div>
                      </div>

                      {/* Online status */}
                      <div className="mt-3 pt-2.5 border-t border-border flex items-center justify-between">
                        <span
                          className={`text-[11px] font-medium flex items-center gap-1.5 ${emp.isOnline ? "text-accent" : "text-muted-foreground"}`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${emp.isOnline ? "bg-accent" : "bg-muted-foreground/40"}`}
                          />
                          {emp.isOnline ? "Online now" : "Offline"}
                        </span>
                        <span className="text-[11px] text-primary opacity-0 group-hover:opacity-100 transition-smooth font-medium">
                          View profile →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
