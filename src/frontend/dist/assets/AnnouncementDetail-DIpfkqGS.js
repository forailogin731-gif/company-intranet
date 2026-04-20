import { a4 as useParams, k as announcements, l as jsxRuntimeExports, p as Link, n as Button, q as Badge, A as Avatar, r as AvatarImage, s as AvatarFallback } from "./index-6T0_xeqr.js";
import { m as motion, C as Card, a as CardContent } from "./proxy-C-7JP5f1.js";
import { A as ArrowLeft, C as Calendar, S as Separator } from "./separator-CbJYPsiJ.js";
import { I as Info, T as TriangleAlert } from "./triangle-alert-C5hTsYuf.js";
const priorityConfig = {
  high: {
    label: "High Priority",
    className: "bg-destructive/10 text-destructive border-destructive/20",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" })
  },
  medium: {
    label: "Medium Priority",
    className: "bg-primary/10 text-primary border-primary/20",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4" })
  },
  low: {
    label: "Low Priority",
    className: "bg-muted text-muted-foreground border-border",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4" })
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
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.05 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-subtle border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: `gap-1.5 border text-xs ${pConfig.className}`, children: [
              pConfig.icon,
              pConfig.label
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: ann.category })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl text-foreground leading-snug", children: ann.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-10 w-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: ann.authorAvatar }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-primary/10 text-primary text-sm", children: ann.author.split(" ").map((n) => n[0]).join("") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: ann.author }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: ann.authorRole })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5" }),
              new Date(ann.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-sm max-w-none text-foreground leading-relaxed", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", children: ann.content }) })
        ] }) })
      }
    ),
    related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.15 },
        className: "space-y-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Related Announcements" }),
          related.map((rel, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/announcements/$id", params: { id: rel.id }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              "data-ocid": `announcement_detail.related.item.${i + 1}`,
              className: "group hover:shadow-elevated transition-smooth cursor-pointer border-border bg-card",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-8 w-8 flex-shrink-0 mt-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: rel.authorAvatar }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-xs", children: rel.author.split(" ").map((n) => n[0]).join("") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1", children: rel.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                    rel.author,
                    " · ",
                    rel.category
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: `text-[11px] flex-shrink-0 border ${priorityConfig[rel.priority].className}`,
                    children: rel.priority
                  }
                )
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
