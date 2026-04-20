import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { departments, employees } from "@/data/mock";
import { Link } from "@tanstack/react-router";
import { ExternalLink, Mail, MapPin, Phone, Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

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
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <h1 className="font-display text-3xl text-foreground">
          Employee Directory
        </h1>
        <p className="text-muted-foreground mt-1">
          {employees.length} employees across {departments.length} departments
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="flex flex-col sm:flex-row gap-3"
      >
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            data-ocid="directory.search_input"
            placeholder="Search by name, role, or email..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Select value={deptFilter} onValueChange={setDeptFilter}>
          <SelectTrigger
            data-ocid="directory.dept_filter_select"
            className="w-full sm:w-52"
          >
            <SelectValue placeholder="All departments" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            {departments.map((d) => (
              <SelectItem key={d.id} value={d.name}>
                {d.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </motion.div>

      {/* Department pills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.1 }}
        className="flex flex-wrap gap-2"
      >
        <button
          type="button"
          data-ocid="directory.dept.tab.all"
          onClick={() => setDeptFilter("all")}
          className={`text-xs px-3 py-1.5 rounded-full border transition-smooth ${deptFilter === "all" ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`}
        >
          All
        </button>
        {departments.map((d) => (
          <button
            type="button"
            key={d.id}
            data-ocid={`directory.dept.tab.${d.name.toLowerCase().replace(/\s+/g, "_")}`}
            onClick={() => setDeptFilter(d.name)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-smooth ${deptFilter === d.name ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`}
          >
            {d.name} <span className="opacity-60">({d.headCount})</span>
          </button>
        ))}
      </motion.div>

      {/* Employee Grid */}
      {filtered.length === 0 ? (
        <div
          data-ocid="directory.empty_state"
          className="text-center py-20 text-muted-foreground"
        >
          <Search className="h-10 w-10 mx-auto mb-3 opacity-30" />
          <p className="font-medium">No employees found</p>
          <p className="text-sm mt-1">Try adjusting your search or filter</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((emp, i) => (
            <motion.div
              key={emp.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <Link to="/directory/$id" params={{ id: emp.id }}>
                <Card
                  data-ocid={`directory.employee.item.${i + 1}`}
                  className="group hover:shadow-elevated transition-smooth cursor-pointer border-border bg-card"
                >
                  <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                    <div className="relative">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={emp.avatar} alt={emp.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {emp.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {emp.isOnline && (
                        <span className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full bg-accent border-2 border-card" />
                      )}
                    </div>
                    <div className="min-w-0 w-full">
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {emp.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {emp.role}
                      </p>
                      <Badge variant="secondary" className="mt-2 text-[11px]">
                        {emp.department}
                      </Badge>
                    </div>
                    <div className="w-full space-y-1.5 pt-2 border-t border-border">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                        <span className="truncate">{emp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                        <span className="truncate">{emp.email}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-primary opacity-0 group-hover:opacity-100 transition-smooth">
                      <ExternalLink className="h-3 w-3" />
                      View profile
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
