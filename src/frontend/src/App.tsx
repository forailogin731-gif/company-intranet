import { Skeleton } from "@/components/ui/skeleton";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/layout/Layout";

const DashboardPage = lazy(() => import("./pages/Dashboard"));
const DirectoryPage = lazy(() => import("./pages/Directory"));
const DirectoryDetailPage = lazy(() => import("./pages/DirectoryDetail"));
const AnnouncementsPage = lazy(() => import("./pages/Announcements"));
const AnnouncementDetailPage = lazy(() => import("./pages/AnnouncementDetail"));
const NewsPage = lazy(() => import("./pages/News"));
const HelpPage = lazy(() => import("./pages/Help"));
const DepartmentPage = lazy(() => import("./pages/Department"));

function PageLoader() {
  return (
    <div className="p-6 space-y-4">
      <Skeleton className="h-10 w-64" />
      <Skeleton className="h-4 w-40" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <Skeleton className="h-40" />
        <Skeleton className="h-40" />
        <Skeleton className="h-40" />
      </div>
    </div>
  );
}

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <DashboardPage />
    </Suspense>
  ),
});

const directoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/directory",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <DirectoryPage />
    </Suspense>
  ),
});

const directoryDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/directory/$id",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <DirectoryDetailPage />
    </Suspense>
  ),
});

const announcementsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/announcements",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AnnouncementsPage />
    </Suspense>
  ),
});

const announcementDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/announcements/$id",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AnnouncementDetailPage />
    </Suspense>
  ),
});

const newsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/news",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <NewsPage />
    </Suspense>
  ),
});

const helpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/help",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <HelpPage />
    </Suspense>
  ),
});

const departmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/departments/$id",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <DepartmentPage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  directoryRoute,
  directoryDetailRoute,
  announcementsRoute,
  announcementDetailRoute,
  newsRoute,
  helpRoute,
  departmentRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
