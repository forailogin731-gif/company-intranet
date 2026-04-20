import { v as reactExports, V as announcements, w as jsxRuntimeExports, B as Bell, O as Link, D as Badge, A as Avatar, x as AvatarImage, z as AvatarFallback, e as ChevronRight, r as TriangleAlert, Z as Zap } from "./index-2fslUrt3.js";
import { C as Card, a as CardContent } from "./card-jLqOLDAk.js";
import { m as motion } from "./proxy-EROLA0vA.js";
import { P as Pin, I as Info } from "./pin-B7oqdwmf.js";
import { S as ShieldAlert } from "./shield-alert-CfdE2KtQ.js";
const CATEGORIES = [
  "All",
  "Safety",
  "Production",
  "Quality",
  "HR",
  "IT",
  "Maintenance",
  "Operations",
  "Stores",
  "Training",
  "Achievement"
];
const priorityConfig = {
  high: {
    label: "High Priority",
    className: "bg-destructive/15 text-destructive border-destructive/30",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5" })
  },
  medium: {
    label: "Medium",
    className: "bg-primary/15 text-primary border-primary/30",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-3.5 w-3.5" })
  },
  low: {
    label: "Low",
    className: "bg-muted text-muted-foreground border-border",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-3.5 w-3.5" })
  }
};
const categoryIcons = {
  Safety: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-3.5 w-3.5" }),
  Production: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5" }),
  IT: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-3.5 w-3.5" }),
  HR: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-3.5 w-3.5" }),
  Quality: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-3.5 w-3.5" })
};
function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 864e5);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  return new Date(dateStr).toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric"
  });
}
function AnnouncementCard({
  ann,
  index,
  isPinned
}) {
  const pConfig = priorityConfig[ann.priority];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/announcements/$id", params: { id: ann.id }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      "data-ocid": `announcements.announcement.item.${index + 1}`,
      className: `group hover:shadow-elevated hover:-translate-y-0.5 transition-smooth cursor-pointer ${isPinned ? "border-primary/30 bg-primary/[0.025] shadow-sm" : "border-border bg-card"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
            isPinned && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-[11px] font-semibold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { className: "h-3 w-3" }),
              " Pinned"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                className: `text-[11px] px-2 py-0.5 border flex items-center gap-1 font-medium ${pConfig.className}`,
                children: [
                  pConfig.icon,
                  pConfig.label
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "secondary",
                className: "text-[11px] flex items-center gap-1",
                children: [
                  categoryIcons[ann.category],
                  ann.category
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground flex-shrink-0", children: timeAgo(ann.publishedAt) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-2", children: ann.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-4", children: ann.content }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 pt-3 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-7 w-7 flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: ann.authorAvatar }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-[10px] bg-primary/10 text-primary font-semibold", children: ann.author.split(" ").map((n) => n[0]).join("") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: ann.author }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              " ",
              "· ",
              ann.authorRole
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground flex-shrink-0 group-hover:text-primary group-hover:translate-x-0.5 transition-smooth" })
        ] })
      ] })
    }
  ) });
}
function Announcements() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const filtered = announcements.filter(
    (a) => activeCategory === "All" || a.category === activeCategory
  );
  const pinned = filtered.filter((a) => a.isPinned);
  const rest = filtered.filter((a) => !a.isPinned);
  const highCount = announcements.filter((a) => a.priority === "high").length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-4xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35 },
        className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-5 w-5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl text-foreground", children: "Announcements" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
            announcements.length,
            " total ·",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-destructive font-medium", children: [
              highCount,
              " high priority"
            ] }),
            " ",
            "· ",
            pinned.length,
            " pinned"
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.06 },
        className: "flex flex-wrap gap-2",
        "data-ocid": "announcements.category.tab",
        children: CATEGORIES.map((cat) => {
          const count = cat === "All" ? announcements.length : announcements.filter((a) => a.category === cat).length;
          if (count === 0 && cat !== "All") return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": `announcements.category.${cat.toLowerCase().replace(/\s+/g, "_")}_tab`,
              onClick: () => setActiveCategory(cat),
              className: `text-xs px-3.5 py-1.5 rounded-full border font-medium transition-smooth ${activeCategory === cat ? "bg-primary text-primary-foreground border-primary shadow-sm" : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary bg-card"}`,
              children: [
                cat,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "opacity-60", children: [
                  "(",
                  count,
                  ")"
                ] })
              ]
            },
            cat
          );
        })
      }
    ),
    pinned.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.1 },
        className: "space-y-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { className: "h-3.5 w-3.5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Pinned" })
          ] }),
          pinned.map((ann, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnnouncementCard, { ann, index: i, isPinned: true }, ann.id))
        ]
      }
    ),
    rest.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.14 },
        className: "space-y-3",
        children: [
          pinned.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-muted-foreground uppercase tracking-widest", children: "Recent" }),
          rest.map((ann, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            AnnouncementCard,
            {
              ann,
              index: pinned.length + i
            },
            ann.id
          ))
        ]
      }
    ),
    filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "announcements.empty_state",
        className: "text-center py-20 text-muted-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-7 w-7 opacity-30" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "No announcements" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "No announcements in this category yet" })
        ]
      }
    )
  ] });
}
export {
  Announcements as default
};
