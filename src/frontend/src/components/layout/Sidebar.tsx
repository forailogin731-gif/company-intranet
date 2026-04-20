import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  LayoutDashboard,
  Megaphone,
  Newspaper,
  Users,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    id: "nav-dashboard",
    label: "Dashboard",
    path: "/",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    id: "nav-news",
    label: "News & Updates",
    path: "/news",
    icon: <Newspaper className="h-5 w-5" />,
  },
  {
    id: "nav-directory",
    label: "Employee Directory",
    path: "/directory",
    icon: <Users className="h-5 w-5" />,
  },
  {
    id: "nav-announcements",
    label: "Announcements",
    path: "/announcements",
    icon: <Megaphone className="h-5 w-5" />,
  },
  {
    id: "nav-help",
    label: "Help",
    path: "/help",
    icon: <HelpCircle className="h-5 w-5" />,
  },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen: boolean;
}

export function Sidebar({ collapsed, onToggle, mobileOpen }: SidebarProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        data-ocid="sidebar.panel"
        className={cn(
          "fixed top-0 left-0 h-full bg-card border-r border-border flex flex-col transition-smooth",
          // Desktop: z-40, collapsible width
          "md:z-40",
          collapsed ? "md:w-16" : "md:w-64",
          // Mobile: z-40, always w-64, translate in/out
          "z-40 w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        {/* Logo */}
        <div
          className={cn(
            "h-16 flex items-center border-b border-border flex-shrink-0",
            collapsed ? "justify-center px-0" : "px-5 gap-3",
          )}
        >
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-primary-foreground fill-current"
              aria-label="Nexus logo"
            >
              <title>Nexus</title>
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
            <span className="font-display text-lg font-semibold text-foreground tracking-tight">
              Nexus
            </span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const active = isActive(item.path);
            const navEl = (
              <Link
                key={item.id}
                to={item.path}
                data-ocid={`sidebar.${item.id}_link`}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-smooth",
                  collapsed ? "justify-center px-0 w-10 mx-auto" : "",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <span
                  className={cn("flex-shrink-0", active ? "text-primary" : "")}
                >
                  {item.icon}
                </span>
                {!collapsed && <span className="truncate">{item.label}</span>}
                {!collapsed && active && (
                  <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider bg-primary/10 text-primary px-1.5 py-0.5 rounded">
                    Active
                  </span>
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
        </nav>

        {/* Collapse Toggle */}
        <div className="p-2 border-t border-border flex-shrink-0">
          <Button
            data-ocid="sidebar.collapse_toggle"
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className={cn(
              "w-full h-8 text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth",
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
