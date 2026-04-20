import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { departments } from "@/data/mock";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import {
  BookOpen,
  CalendarClock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cog,
  Factory,
  HelpCircle,
  LayoutDashboard,
  Lightbulb,
  Megaphone,
  Monitor,
  Newspaper,
  PackageSearch,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Users,
  Warehouse,
  Wrench,
} from "lucide-react";
import { useState } from "react";

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="h-4 w-4" />,
  TrendingUp: <TrendingUp className="h-4 w-4" />,
  Users: <Users className="h-4 w-4" />,
  Monitor: <Monitor className="h-4 w-4" />,
  Wrench: <Wrench className="h-4 w-4" />,
  Lightbulb: <Lightbulb className="h-4 w-4" />,
  CalendarClock: <CalendarClock className="h-4 w-4" />,
  Factory: <Factory className="h-4 w-4" />,
  ShoppingCart: <ShoppingCart className="h-4 w-4" />,
  ShieldCheck: <ShieldCheck className="h-4 w-4" />,
  PackageSearch: <PackageSearch className="h-4 w-4" />,
  Warehouse: <Warehouse className="h-4 w-4" />,
  Cog: <Cog className="h-4 w-4" />,
};

interface MainNavItem {
  id: string;
  label: string;
  path: string;
  icon: React.ReactNode;
}

const mainNavItems: MainNavItem[] = [
  {
    id: "nav-dashboard",
    label: "Dashboard",
    path: "/",
    icon: <LayoutDashboard className="h-4.5 w-4.5" />,
  },
  {
    id: "nav-news",
    label: "News & Updates",
    path: "/news",
    icon: <Newspaper className="h-4.5 w-4.5" />,
  },
  {
    id: "nav-directory",
    label: "Employee Directory",
    path: "/directory",
    icon: <Users className="h-4.5 w-4.5" />,
  },
  {
    id: "nav-announcements",
    label: "Announcements",
    path: "/announcements",
    icon: <Megaphone className="h-4.5 w-4.5" />,
  },
  {
    id: "nav-help",
    label: "Help & Support",
    path: "/help",
    icon: <HelpCircle className="h-4.5 w-4.5" />,
  },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export function Sidebar({ collapsed, onToggle, mobileOpen }: SidebarProps) {
  const location = useLocation();
  const [deptsOpen, setDeptsOpen] = useState(true);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const isDeptActive = (slug: string) =>
    location.pathname === `/departments/${slug}`;

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        data-ocid="sidebar.panel"
        className={cn(
          "fixed top-0 left-0 h-full bg-card border-r border-border flex flex-col transition-smooth overflow-hidden",
          "md:z-40",
          collapsed ? "md:w-16" : "md:w-64",
          "z-40 w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        {/* Brand Header */}
        <div
          className={cn(
            "h-16 flex items-center border-b border-border flex-shrink-0 bg-gradient-to-r from-card to-card",
            collapsed ? "justify-center px-0" : "px-4 gap-3",
          )}
        >
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 shadow-card">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-primary-foreground"
              aria-label="Nexus MFG logo"
            >
              <title>Nexus MFG</title>
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {!collapsed && (
            <div className="min-w-0 flex-1">
              <div className="font-display text-base font-semibold text-foreground leading-tight tracking-tight">
                Nexus MFG
              </div>
              <div className="text-[10px] text-accent font-medium tracking-widest uppercase leading-tight">
                Intranet Portal
              </div>
            </div>
          )}
        </div>

        {/* Scrollable nav */}
        <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
          {/* Main nav section */}
          {!collapsed && (
            <div className="px-2 py-1.5 mb-1">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Main
              </span>
            </div>
          )}

          {mainNavItems.map((item) => {
            const active = isActive(item.path);
            const navEl = (
              <Link
                key={item.id}
                to={item.path}
                data-ocid={`sidebar.${item.id}_link`}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors-fast",
                  collapsed ? "justify-center px-0 w-10 mx-auto" : "",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                )}
              >
                <span
                  className={cn("flex-shrink-0", active ? "text-primary" : "")}
                >
                  {item.icon}
                </span>
                {!collapsed && (
                  <span className="truncate flex-1">{item.label}</span>
                )}
                {!collapsed && active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                )}
              </Link>
            );

            if (collapsed) {
              return (
                <Tooltip key={item.id}>
                  <TooltipTrigger asChild>{navEl}</TooltipTrigger>
                  <TooltipContent side="right" className="text-xs">
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              );
            }
            return navEl;
          })}

          {/* Departments Section */}
          {!collapsed ? (
            <>
              <div className="pt-3 pb-1">
                <Separator className="mb-2" />
              </div>
              <Collapsible open={deptsOpen} onOpenChange={setDeptsOpen}>
                <CollapsibleTrigger asChild>
                  <button
                    type="button"
                    data-ocid="sidebar.departments_toggle"
                    className="w-full flex items-center justify-between px-2 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors-fast rounded-md hover:bg-muted/40"
                  >
                    <div className="flex items-center gap-1.5">
                      <Settings2 className="h-3 w-3" />
                      <span>Departments</span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-3 w-3 transition-transform duration-200",
                        deptsOpen ? "rotate-0" : "-rotate-90",
                      )}
                    />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-0.5 mt-0.5">
                  {departments.map((dept) => {
                    const active = isDeptActive(dept.slug);
                    return (
                      <Link
                        key={dept.id}
                        to="/departments/$id"
                        params={{ id: dept.slug }}
                        data-ocid={`sidebar.dept_${dept.slug}_link`}
                        className={cn(
                          "flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-[13px] transition-colors-fast",
                          active
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                        )}
                      >
                        <span className={cn("flex-shrink-0", dept.color)}>
                          {iconMap[dept.icon] ?? <Cog className="h-4 w-4" />}
                        </span>
                        <span className="truncate flex-1 font-medium">
                          {dept.name}
                        </span>
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-[9px] h-4 px-1 flex-shrink-0 font-mono",
                            active ? "border-primary/40 text-primary" : "",
                          )}
                        >
                          {dept.headCount}
                        </Badge>
                      </Link>
                    );
                  })}
                </CollapsibleContent>
              </Collapsible>
            </>
          ) : (
            <>
              <div className="pt-3 pb-1">
                <Separator />
              </div>
              {departments.map((dept) => {
                const active = isDeptActive(dept.slug);
                return (
                  <Tooltip key={dept.id}>
                    <TooltipTrigger asChild>
                      <Link
                        to="/departments/$id"
                        params={{ id: dept.slug }}
                        data-ocid={`sidebar.dept_${dept.slug}_link`}
                        className={cn(
                          "flex items-center justify-center rounded-lg w-10 h-8 mx-auto transition-colors-fast",
                          active
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                        )}
                      >
                        <span className={cn("flex-shrink-0", dept.color)}>
                          {iconMap[dept.icon] ?? <Cog className="h-4 w-4" />}
                        </span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="text-xs">
                      {dept.name}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </>
          )}
        </nav>

        {/* Collapse Toggle */}
        <div className="p-2 border-t border-border flex-shrink-0">
          <Button
            data-ocid="sidebar.collapse_toggle"
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className={cn(
              "w-full h-8 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors-fast",
              collapsed ? "justify-center px-0" : "justify-end pr-2",
            )}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <>
                <span className="text-xs mr-1">Collapse</span>
                <ChevronLeft className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </aside>
    </TooltipProvider>
  );
}
