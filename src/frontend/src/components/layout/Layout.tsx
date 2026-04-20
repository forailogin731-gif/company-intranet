import { cn } from "@/lib/utils";
import { Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((prev) => !prev)}
        mobileOpen={mobileOpen}
      />

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-foreground/20 backdrop-blur-sm z-30 md:hidden transition-smooth",
          mobileOpen ? "block" : "hidden",
        )}
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
        onKeyDown={(e) => e.key === "Escape" && setMobileOpen(false)}
      />

      {/* Main area offset by sidebar width */}
      <div
        className={cn(
          "flex flex-col min-h-screen transition-smooth",
          collapsed ? "md:ml-16" : "md:ml-64",
        )}
      >
        <Header onMobileMenuToggle={() => setMobileOpen((prev) => !prev)} />

        {/* Page content */}
        <main className="flex-1 pt-16">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-4 px-6 mt-auto">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
