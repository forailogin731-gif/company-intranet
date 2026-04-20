import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { alerts, currentUser, departments } from "@/data/mock";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  AlertTriangle,
  Bell,
  ChevronDown,
  Factory,
  LogOut,
  Menu,
  Moon,
  Search,
  Settings,
  Sun,
  User,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onMobileMenuToggle: () => void;
}

const criticalAlerts = alerts.filter(
  (a) => !a.isResolved && a.severity === "critical",
);
const allActiveAlerts = alerts.filter((a) => !a.isResolved);

export function Header({ onMobileMenuToggle }: HeaderProps) {
  const { isDark, toggleTheme } = useDarkMode();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const alertCount = allActiveAlerts.length;

  return (
    <header className="fixed top-0 right-0 left-0 z-30 h-16 bg-card border-b border-border shadow-subtle flex items-center gap-3 px-4 md:px-6">
      {/* Mobile hamburger */}
      <Button
        data-ocid="header.mobile_menu_button"
        variant="ghost"
        size="icon"
        className="md:hidden h-9 w-9 text-foreground flex-shrink-0"
        onClick={onMobileMenuToggle}
        aria-label="Toggle mobile menu"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Search */}
      <div className="flex-1 max-w-md relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          data-ocid="header.search_input"
          placeholder="Search departments, employees..."
          className="pl-9 bg-background border-input text-sm h-9 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-1.5 ml-auto">
        {/* Quick Department Switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              data-ocid="header.dept_switcher_button"
              variant="ghost"
              size="sm"
              className="hidden md:flex items-center gap-1.5 h-9 px-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-border/60"
            >
              <Factory className="h-4 w-4 text-accent" />
              <span className="text-xs font-medium">Departments</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            data-ocid="header.dept_switcher_dropdown"
            className="w-56 max-h-80 overflow-y-auto"
            align="end"
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider">
              Quick Navigate
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {departments.map((dept) => (
              <DropdownMenuItem
                key={dept.id}
                data-ocid={`header.dept_link.${dept.slug}`}
                className="cursor-pointer gap-2"
                onClick={() =>
                  navigate({
                    to: "/departments/$id",
                    params: { id: dept.slug },
                  })
                }
              >
                <span
                  className={cn(
                    "text-xs font-mono font-semibold w-4",
                    dept.color,
                  )}
                >
                  {dept.name.charAt(0)}
                </span>
                <span className="text-sm">{dept.name}</span>
                <Badge
                  variant="outline"
                  className="ml-auto text-[10px] h-4 px-1"
                >
                  {dept.headCount}
                </Badge>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Critical Alert Indicator */}
        {criticalAlerts.length > 0 && (
          <div
            data-ocid="header.critical_alerts"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-destructive/10 border border-destructive/20 animate-pulse-subtle"
          >
            <Zap className="h-3.5 w-3.5 text-destructive" />
            <span className="text-xs font-semibold text-destructive">
              {criticalAlerts.length} Critical
            </span>
          </div>
        )}

        {/* Notification Bell */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              data-ocid="header.notifications_button"
              variant="ghost"
              size="icon"
              className="relative h-9 w-9 text-foreground hover:bg-muted/50"
            >
              <Bell className="h-4.5 w-4.5" />
              {alertCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-[10px] bg-destructive text-destructive-foreground rounded-full border-2 border-card font-bold">
                  {alertCount}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            data-ocid="header.notifications_popover"
            className="w-84 p-0"
            align="end"
          >
            <div className="px-4 py-3 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <span className="font-semibold text-sm text-foreground">
                  Plant Alerts
                </span>
              </div>
              <Badge variant="destructive" className="text-[10px] h-5">
                {alertCount} active
              </Badge>
            </div>
            <div className="divide-y divide-border max-h-80 overflow-y-auto">
              {allActiveAlerts.map((alert, i) => (
                <div
                  key={alert.id}
                  data-ocid={`header.alert.item.${i + 1}`}
                  className="px-4 py-3 hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-2">
                    <div
                      className={cn(
                        "mt-0.5 h-2 w-2 rounded-full flex-shrink-0",
                        alert.severity === "critical"
                          ? "bg-destructive"
                          : alert.severity === "warning"
                            ? "bg-accent"
                            : "bg-chart-5",
                      )}
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground line-clamp-1">
                        {alert.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {alert.department}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-4 py-2 border-t border-border">
              <Link to="/announcements">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-xs text-primary h-7"
                >
                  View all announcements →
                </Button>
              </Link>
            </div>
          </PopoverContent>
        </Popover>

        {/* User Avatar Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              data-ocid="header.user_menu_button"
              variant="ghost"
              className="flex items-center gap-2 h-9 px-2 text-foreground hover:bg-muted/50"
            >
              <Avatar className="h-8 w-8 ring-2 ring-primary/20">
                <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                <AvatarFallback className="bg-primary text-primary-foreground text-xs font-bold">
                  {currentUser.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:flex flex-col items-start min-w-0">
                <span className="text-sm font-semibold text-foreground truncate max-w-[120px]">
                  {currentUser.name}
                </span>
                <span className="text-[11px] text-muted-foreground truncate max-w-[120px]">
                  {currentUser.role}
                </span>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground hidden md:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            data-ocid="header.user_dropdown"
            className="w-56"
            align="end"
          >
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col">
                <span className="font-semibold text-foreground">
                  {currentUser.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {currentUser.department}
                </span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              data-ocid="header.profile_link"
              className="cursor-pointer gap-2"
            >
              <User className="h-4 w-4" />
              My Profile
            </DropdownMenuItem>
            <DropdownMenuItem
              data-ocid="header.settings_link"
              className="cursor-pointer gap-2"
            >
              <Settings className="h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              data-ocid="header.dark_mode_toggle"
              onClick={toggleTheme}
              className="cursor-pointer gap-2"
            >
              {isDark ? (
                <>
                  <Sun className="h-4 w-4" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4" />
                  Dark Mode
                </>
              )}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              data-ocid="header.logout_button"
              className="cursor-pointer gap-2 text-destructive focus:text-destructive"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
