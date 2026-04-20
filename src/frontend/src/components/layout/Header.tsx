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
import { currentUser } from "@/data/mock";
import { announcements } from "@/data/mock";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { Link } from "@tanstack/react-router";
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  Moon,
  Search,
  Settings,
  Sun,
  User,
} from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onMobileMenuToggle: () => void;
}

export function Header({ onMobileMenuToggle }: HeaderProps) {
  const { isDark, toggleTheme } = useDarkMode();
  const [searchQuery, setSearchQuery] = useState("");

  const recentNotifications = announcements.slice(0, currentUser.notifications);

  return (
    <header className="fixed top-0 right-0 left-0 z-30 h-16 bg-card border-b border-border shadow-subtle flex items-center gap-4 px-4 md:px-6">
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
      <div className="flex-1 max-w-xl relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          data-ocid="header.search_input"
          placeholder="Search for resources or people..."
          className="pl-9 bg-background border-input text-sm h-9 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2 ml-auto">
        {/* Notification Bell */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              data-ocid="header.notifications_button"
              variant="ghost"
              size="icon"
              className="relative h-9 w-9 text-foreground"
            >
              <Bell className="h-5 w-5" />
              {currentUser.notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-[10px] bg-primary text-primary-foreground rounded-full border-2 border-card">
                  {currentUser.notifications}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            data-ocid="header.notifications_popover"
            className="w-80 p-0"
            align="end"
          >
            <div className="px-4 py-3 border-b border-border flex items-center justify-between">
              <span className="font-semibold text-sm text-foreground">
                Notifications
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-primary h-7 px-2"
              >
                Mark all read
              </Button>
            </div>
            <div className="divide-y divide-border max-h-80 overflow-y-auto">
              {recentNotifications.map((notif, i) => (
                <div
                  key={notif.id}
                  data-ocid={`header.notification.item.${i + 1}`}
                  className="px-4 py-3 hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <p className="text-sm font-medium text-foreground line-clamp-1">
                    {notif.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {notif.category}
                  </p>
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
                  View all announcements
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
              <Avatar className="h-8 w-8">
                <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
                  {currentUser.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:flex flex-col items-start min-w-0">
                <span className="text-sm font-medium text-foreground truncate max-w-[120px]">
                  {currentUser.name}
                </span>
                <span className="text-xs text-muted-foreground truncate max-w-[120px]">
                  {currentUser.role}
                </span>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground hidden md:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            data-ocid="header.user_dropdown"
            className="w-52"
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
