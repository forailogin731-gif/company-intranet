import { a0 as useParams, V as announcements, w as jsxRuntimeExports, O as Link, Q as Button, D as Badge, A as Avatar, x as AvatarImage, z as AvatarFallback, K as Separator, e as ChevronRight, B as Bell, r as TriangleAlert } from "./index-2fslUrt3.js";
import { C as Card, a as CardContent } from "./card-jLqOLDAk.js";
import { A as ArrowLeft } from "./arrow-left-DKH3CqTD.js";
import { m as motion } from "./proxy-EROLA0vA.js";
import { P as Pin, I as Info } from "./pin-B7oqdwmf.js";
import { C as Calendar } from "./calendar-D2ViM7be.js";
const priorityConfig = {
  high: {
    label: "High Priority",
    className: "bg-destructive/15 text-destructive border-destructive/30",
    bannerClass: "border-l-4 border-l-destructive bg-destructive/5",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" })
  },
  medium: {
    label: "Medium Priority",
    className: "bg-primary/15 text-primary border-primary/30",
    bannerClass: "border-l-4 border-l-primary bg-primary/5",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4" })
  },
  low: {
    label: "Low Priority",
    className: "bg-muted text-muted-foreground border-border",
    bannerClass: "",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" })
  }
};
function AnnouncementDetail() {
  const { id } = useParams({ from: "/announcements/$id" });
  const ann = announcements.find((a) => a.id === id);
  const related = announcements.filter((a) => a.id !== id && a.category === (ann == null ? void 0 : ann.category)).slice(0, 3);
  if (!ann) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-center py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Announcement not found." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/announcements", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "mt-4 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back to Announcements"
      ] }) })
    ] });
  }
  const pConfig = priorityConfig[ann.priority];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-3xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/announcements", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            "data-ocid": "announcement_detail.back_button",
            variant: "ghost",
            size: "sm",
            className: "gap-2 text-muted-foreground hover:text-foreground -ml-2 mb-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
              " All Announcements"
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, delay: 0.05 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: `shadow-card border-border overflow-hidden ${pConfig.bannerClass}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-7 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    className: `text-xs px-2.5 py-0.5 border flex items-center gap-1.5 font-medium ${pConfig.className}`,
                    children: [
                      pConfig.icon,
                      pConfig.label
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: ann.category }),
                ann.isPinned && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-xs bg-primary/10 text-primary border border-primary/20 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { className: "h-3 w-3" }),
                  " Pinned"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl text-foreground leading-snug", children: ann.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-11 w-11 ring-2 ring-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: ann.authorAvatar }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-primary/10 text-primary font-semibold", children: ann.author.split(" ").map((n) => n[0]).join("") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: ann.author }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: ann.authorRole })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5" }),
                  new Date(ann.publishedAt).toLocaleDateString("en-IN", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/30 rounded-xl p-5 border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-foreground leading-[1.8] whitespace-pre-line", children: ann.content }) })
            ] })
          }
        )
      }
    ),
    related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.18 },
        className: "space-y-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xs font-bold text-muted-foreground uppercase tracking-widest", children: [
            "Related in ",
            ann.category
          ] }),
          related.map((rel, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/announcements/$id", params: { id: rel.id }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              "data-ocid": `announcement_detail.related.item.${i + 1}`,
              className: "group hover:shadow-elevated hover:-translate-y-0.5 transition-smooth cursor-pointer border-border bg-card",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-8 w-8 flex-shrink-0 mt-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: rel.authorAvatar }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-xs bg-primary/10 text-primary font-semibold", children: rel.author.split(" ").map((n) => n[0]).join("") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1", children: rel.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                    rel.author,
                    " · ",
                    rel.category
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: `text-[11px] border ${priorityConfig[rel.priority].className}`,
                      children: rel.priority
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-smooth" })
                ] })
              ] })
            }
          ) }, rel.id))
        ]
      }
    )
  ] });
}
export {
  AnnouncementDetail as default
};
