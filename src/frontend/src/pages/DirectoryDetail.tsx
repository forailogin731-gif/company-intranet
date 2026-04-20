import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { employees } from "@/data/mock";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Building2,
  Calendar,
  CalendarPlus,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";

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

export default function DirectoryDetail() {
  const { id } = useParams({ from: "/directory/$id" });
  const emp = employees.find((e) => e.id === id);

  if (!emp) {
    return (
      <div className="p-6 text-center py-20">
        <p className="text-muted-foreground">Employee not found.</p>
        <Link to="/directory">
          <Button variant="outline" className="mt-4 gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Directory
          </Button>
        </Link>
      </div>
    );
  }

  const colleagues = employees
    .filter((e) => e.department === emp.department && e.id !== emp.id)
    .slice(0, 5);

  const startDate = new Date(emp.startDate);
  const tenure = new Date().getFullYear() - startDate.getFullYear();
  const deptColor =
    DEPT_COLORS[emp.department] ??
    "bg-muted text-muted-foreground border-border";

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/directory">
          <Button
            data-ocid="directory_detail.back_button"
            variant="ghost"
            size="sm"
            className="gap-2 text-muted-foreground hover:text-foreground -ml-2 mb-4"
          >
            <ArrowLeft className="h-4 w-4" /> Employee Directory
          </Button>
        </Link>
      </motion.div>

      {/* Hero profile card */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        <Card className="shadow-card border-border overflow-hidden">
          {/* Gradient banner */}
          <div className="h-24 bg-gradient-brand industrial-grid relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/10" />
          </div>
          <CardContent className="p-6 pt-0 -mt-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">
              {/* Large avatar */}
              <div className="relative flex-shrink-0">
                <Avatar className="h-24 w-24 ring-4 ring-card shadow-elevated">
                  <AvatarImage src={emp.avatar} alt={emp.name} />
                  <AvatarFallback className="bg-primary/15 text-primary text-2xl font-bold">
                    {emp.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {emp.isOnline && (
                  <span className="absolute bottom-1.5 right-1.5 h-4.5 w-4.5 rounded-full bg-accent border-[3px] border-card" />
                )}
              </div>

              {/* Name / role */}
              <div className="flex-1 min-w-0 pb-1">
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                  <h1 className="font-display text-2xl text-foreground">
                    {emp.name}
                  </h1>
                  {emp.isOnline && (
                    <Badge className="text-[11px] bg-accent/15 text-accent border border-accent/25 gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Online
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground font-medium">{emp.role}</p>
                <Badge
                  className={`mt-2 text-xs border font-medium ${deptColor}`}
                >
                  {emp.department}
                </Badge>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 flex-wrap flex-shrink-0">
                <a href={`mailto:${emp.email}`}>
                  <Button
                    data-ocid="directory_detail.email_button"
                    variant="outline"
                    size="sm"
                    className="gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary text-primary"
                  >
                    <MessageSquare className="h-4 w-4" /> Send Message
                  </Button>
                </a>
                <Button
                  data-ocid="directory_detail.schedule_button"
                  size="sm"
                  className="gap-2"
                >
                  <CalendarPlus className="h-4 w-4" /> Schedule Meeting
                </Button>
              </div>
            </div>

            {/* Bio */}
            {emp.bio && (
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-5 max-w-2xl">
                {emp.bio}
              </p>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.12 }}
        >
          <Card className="shadow-card border-border h-full">
            <CardHeader className="pb-3 border-b border-border">
              <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2">
                <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center">
                  <Phone className="h-3.5 w-3.5 text-primary" />
                </div>
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              {[
                {
                  icon: Mail,
                  label: "Work Email",
                  value: emp.email,
                  href: `mailto:${emp.email}`,
                },
                {
                  icon: Phone,
                  label: "Mobile",
                  value: emp.phone,
                  href: `tel:${emp.phone}`,
                },
                { icon: MapPin, label: "Location", value: emp.location },
              ].map((info) => (
                <div key={info.label} className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wide font-medium">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-primary hover:underline truncate block"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <Separator />

              {[
                { icon: Building2, label: "Department", value: emp.department },
                {
                  icon: Calendar,
                  label: "Joined",
                  value: `${startDate.toLocaleDateString("en-IN", { month: "long", year: "numeric" })} · ${tenure} ${tenure === 1 ? "year" : "years"}`,
                },
              ].map((info) => (
                <div key={info.label} className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wide font-medium">
                      {info.label}
                    </p>
                    <p className="text-sm text-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.17 }}
        >
          <Card className="shadow-card border-border h-full">
            <CardHeader className="pb-3 border-b border-border">
              <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2">
                <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-3.5 w-3.5 text-primary" />
                </div>
                {emp.department} Team
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-1">
              {colleagues.length === 0 ? (
                <p className="text-sm text-muted-foreground py-4 text-center">
                  No other team members found.
                </p>
              ) : (
                colleagues.map((col, i) => (
                  <Link
                    key={col.id}
                    to="/directory/$id"
                    params={{ id: col.id }}
                  >
                    <div
                      data-ocid={`directory_detail.colleague.item.${i + 1}`}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer group"
                    >
                      <div className="relative flex-shrink-0">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={col.avatar} />
                          <AvatarFallback className="text-xs bg-primary/10 text-primary font-semibold">
                            {col.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {col.isOnline && (
                          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-accent border-2 border-card" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                          {col.name}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {col.role}
                        </p>
                      </div>
                      <a
                        href={`mailto:${col.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="opacity-0 group-hover:opacity-100 transition-smooth"
                      >
                        <Mail className="h-4 w-4 text-primary" />
                      </a>
                    </div>
                  </Link>
                ))
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
