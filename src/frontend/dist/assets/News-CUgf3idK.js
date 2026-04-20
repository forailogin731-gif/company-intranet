import { u as reactExports, o as newsArticles, l as jsxRuntimeExports, S as Search, a3 as Input, q as Badge, A as Avatar, r as AvatarImage, s as AvatarFallback } from "./index-6T0_xeqr.js";
import { m as motion, C as Card, a as CardContent } from "./proxy-C-7JP5f1.js";
import { T as Tag, C as Clock } from "./tag-BJZpvwX8.js";
const ALL_TAGS = Array.from(new Set(newsArticles.flatMap((a) => a.tags)));
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}
function News() {
  const [search, setSearch] = reactExports.useState("");
  const [activeTag, setActiveTag] = reactExports.useState("All");
  const filtered = newsArticles.filter((a) => {
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.summary.toLowerCase().includes(search.toLowerCase());
    const matchTag = activeTag === "All" || a.tags.includes(activeTag);
    return matchSearch && matchTag;
  });
  const featured = filtered[0];
  const rest = filtered.slice(1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-[1400px] mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl text-foreground", children: "News & Updates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Internal news and company updates" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.05 },
        className: "space-y-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "news.search_input",
                placeholder: "Search news...",
                className: "pl-9",
                value: search,
                onChange: (e) => setSearch(e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-3.5 w-3.5 text-muted-foreground" }),
            ["All", ...ALL_TAGS].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `news.tag.${tag.toLowerCase().replace(/[^a-z0-9]/g, "_")}_tab`,
                onClick: () => setActiveTag(tag),
                className: `text-xs px-3 py-1.5 rounded-full border transition-smooth ${activeTag === tag ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`,
                children: tag
              },
              tag
            ))
          ] })
        ]
      }
    ),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "news.empty_state",
        className: "text-center py-20 text-muted-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-10 w-10 mx-auto mb-3 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "No articles found" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      featured && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              "data-ocid": "news.featured.card",
              className: "group overflow-hidden cursor-pointer shadow-subtle hover:shadow-elevated transition-smooth border-border",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden aspect-[4/3] md:aspect-auto", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: featured.imageUrl,
                      alt: featured.title,
                      className: "w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 flex gap-2", children: featured.tags.slice(0, 2).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: "bg-card/90 text-foreground text-xs backdrop-blur-sm border-0",
                      children: tag
                    },
                    tag
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 flex flex-col justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: featured.category }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground leading-snug group-hover:text-primary transition-colors", children: featured.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-4", children: featured.content })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-4 pt-4 border-t border-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-8 w-8", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: featured.authorAvatar }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-xs bg-primary/10 text-primary", children: featured.author.split(" ").map((n) => n[0]).join("") })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: featured.author }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: formatDate(featured.publishedAt) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-1 text-xs text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
                      featured.readTime,
                      " min"
                    ] })
                  ] })
                ] })
              ] })
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: rest.map((article, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: 0.1 + i * 0.05 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              "data-ocid": `news.article.item.${i + 1}`,
              className: "group overflow-hidden cursor-pointer shadow-subtle hover:shadow-elevated transition-smooth border-border h-full flex flex-col",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden aspect-[16/9]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: article.imageUrl,
                      alt: article.title,
                      className: "w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 left-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-card/90 text-foreground text-[11px] backdrop-blur-sm border-0", children: article.category }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex-1 flex flex-col gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatDate(article.publishedAt) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      article.readTime,
                      " min"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm flex-1", children: article.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2", children: article.summary }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-3 border-t border-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-6 w-6", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: article.authorAvatar }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-[10px]", children: article.author.split(" ").map((n) => n[0]).join("") })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground truncate", children: article.author })
                  ] })
                ] })
              ]
            }
          )
        },
        article.id
      )) })
    ] })
  ] });
}
export {
  News as default
};
