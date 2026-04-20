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
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";

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
    .slice(0, 4);

  const startYear = new Date(emp.startDate).getFullYear();
  const tenure = new Date().getFullYear() - startYear;

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

      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
      >
        <Card className="shadow-subtle border-border">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={emp.avatar} alt={emp.name} />
                  <AvatarFallback className="bg-primary/10 text-primary text-2xl font-semibold">
                    {emp.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {emp.isOnline && (
                  <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-accent border-2 border-card" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h1 className="font-display text-2xl text-foreground">
                    {emp.name}
                  </h1>
                  <Badge variant="secondary" className="text-xs">
                    {emp.department}
                  </Badge>
                  {emp.isOnline && (
                    <Badge className="text-xs bg-accent/10 text-accent border-accent/20">
                      Online
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground font-medium">{emp.role}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-lg">
                  {emp.bio}
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <a href={`mailto:${emp.email}`}>
                  <Button
                    data-ocid="directory_detail.email_button"
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <Mail className="h-4 w-4" /> Email
                  </Button>
                </a>
                <a href={`tel:${emp.phone}`}>
                  <Button
                    data-ocid="directory_detail.call_button"
                    size="sm"
                    className="gap-2"
                  >
                    <Phone className="h-4 w-4" /> Call
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          <Card className="shadow-subtle border-border h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-foreground">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-0">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: emp.email,
                  href: `mailto:${emp.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: emp.phone,
                  href: `tel:${emp.phone}`,
                },
                { icon: MapPin, label: "Location", value: emp.location },
              ].map((info) => (
                <div key={info.label} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">
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
                  label: "Start Date",
                  value: `${new Date(emp.startDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })} · ${tenure} ${tenure === 1 ? "year" : "years"}`,
                },
              ].map((info) => (
                <div key={info.label} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="text-sm text-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Colleagues */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
        >
          <Card className="shadow-subtle border-border h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-foreground">
                Team — {emp.department}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-0">
              {colleagues.length === 0 ? (
                <p className="text-sm text-muted-foreground">
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
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
                    >
                      <div className="relative">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={col.avatar} />
                          <AvatarFallback className="text-xs bg-primary/10 text-primary">
                            {col.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {col.isOnline && (
                          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-accent border border-card" />
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
                      <Mail className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-smooth" />
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
