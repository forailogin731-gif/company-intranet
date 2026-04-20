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
        onMobileClose={() => setMobileOpen(false)}
      />

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-30 md:hidden"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setMobileOpen(false)}
        />
      )}

      {/* Main area offset by sidebar */}
      <div
        className={cn(
          "flex flex-col min-h-screen transition-smooth",
          collapsed ? "md:ml-16" : "md:ml-64",
        )}
      >
        <Header onMobileMenuToggle={() => setMobileOpen((prev) => !prev)} />

        <main className="flex-1 pt-16">
          <Outlet />
        </main>

        <footer className="bg-card border-t border-border py-4 px-6 mt-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded bg-primary/20 flex items-center justify-center">
                <svg
                  viewBox="0 0 16 16"
                  className="h-3 w-3 text-primary fill-current"
                  aria-hidden="true"
                >
                  <path
                    d="M8 1L1 4.5l7 3.5 7-3.5L8 1zM1 11l7 3.5L15 11M1 7.75L8 11.25l7-3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-foreground">
                Nexus MFG Intranet
              </span>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              © {new Date().getFullYear()} Nexus Manufacturing. Built with{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
