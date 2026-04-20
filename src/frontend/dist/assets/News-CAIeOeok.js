import { v as reactExports, X as newsArticles, w as jsxRuntimeExports, N as Newspaper, S as Search, $ as Input, D as Badge, A as Avatar, x as AvatarImage, z as AvatarFallback } from "./index-2fslUrt3.js";
import { C as Card, a as CardContent } from "./card-jLqOLDAk.js";
import { m as motion } from "./proxy-EROLA0vA.js";
import { C as Clock } from "./clock-C3gewwYv.js";
const ALL_CATEGORIES = Array.from(new Set(newsArticles.map((a) => a.category)));
const CATEGORY_GRADIENTS = {
  Business: "from-primary/30 to-accent/20",
  Production: "from-chart-1/30 to-chart-4/20",
  Quality: "from-chart-5/30 to-primary/20",
  "Tool-Room": "from-destructive/25 to-chart-4/20",
  Finance: "from-chart-2/30 to-primary/20",
  HR: "from-chart-5/30 to-accent/20",
  Stores: "from-chart-4/30 to-chart-2/20",
  Default: "from-primary/20 to-muted/40"
};
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}
function ArticleImagePlaceholder({
  category,
  imageUrl,
  title
}) {
  const gradient = CATEGORY_GRADIENTS[category] ?? CATEGORY_GRADIENTS.Default;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: imageUrl,
        alt: title,
        className: "w-full h-full object-cover group-hover:scale-105 transition-smooth",
        onError: (e) => {
          e.target.style.display = "none";
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `absolute inset-0 bg-gradient-to-br ${gradient} industrial-grid -z-10`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" })
  ] });
}
function NewsCard({
  article,
  index,
  variant = "default"
}) {
  if (variant === "featured") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        "data-ocid": "news.featured.card",
        className: "group overflow-hidden cursor-pointer shadow-card hover:shadow-elevated transition-smooth border-border",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_1.1fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden aspect-[4/3] md:aspect-auto min-h-[260px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ArticleImagePlaceholder,
              {
                category: article.category,
                imageUrl: article.imageUrl,
                title: article.title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 flex gap-2 z-10", children: article.tags.slice(0, 2).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: "bg-card/90 text-foreground text-[11px] backdrop-blur-sm border-0 shadow-sm",
                children: tag
              },
              tag
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: article.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
                  " ",
                  article.readTime,
                  " min read"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground leading-snug group-hover:text-primary transition-colors", children: article.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-4", children: article.content })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-5 pt-4 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-8 w-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: article.authorAvatar }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-xs bg-primary/10 text-primary font-semibold", children: article.author.split(" ").map((n) => n[0]).join("") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: article.author }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: formatDate(article.publishedAt) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-smooth", children: "Read →" })
            ] })
          ] })
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      "data-ocid": `news.article.item.${index + 1}`,
      className: "group overflow-hidden cursor-pointer shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-smooth border-border h-full flex flex-col",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden aspect-[16/9]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ArticleImagePlaceholder,
            {
              category: article.category,
              imageUrl: article.imageUrl,
              title: article.title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2.5 left-2.5 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-card/90 text-foreground text-[11px] backdrop-blur-sm border-0 shadow-sm", children: article.category }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex-1 flex flex-col gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatDate(article.publishedAt) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              article.readTime,
              " min"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm flex-1 leading-snug", children: article.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2 leading-relaxed", children: article.summary }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: article.tags.slice(0, 3).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border",
              children: tag
            },
            tag
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-3 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-6 w-6 flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: article.authorAvatar }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-[10px] bg-primary/10 text-primary font-semibold", children: article.author.split(" ").map((n) => n[0]).join("") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground truncate flex-1", children: article.author }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-primary font-medium opacity-0 group-hover:opacity-100 transition-smooth", children: "Read →" })
          ] })
        ] })
      ]
    }
  );
}
function News() {
  const [search, setSearch] = reactExports.useState("");
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const filtered = newsArticles.filter((a) => {
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.summary.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    return matchSearch && matchCat;
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
        className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Newspaper, { className: "h-5 w-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl text-foreground", children: "News & Updates" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
              newsArticles.length,
              " articles · Internal news from Nexus MFG"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-72", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "news.search_input",
                placeholder: "Search news...",
                className: "pl-9 bg-card border-border",
                value: search,
                onChange: (e) => setSearch(e.target.value)
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.06 },
        className: "flex flex-wrap gap-2",
        children: ["All", ...ALL_CATEGORIES].map((cat) => {
          const count = cat === "All" ? newsArticles.length : newsArticles.filter((a) => a.category === cat).length;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": `news.category.${cat.toLowerCase().replace(/[^a-z0-9]/g, "_")}_tab`,
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
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "news.empty_state",
        className: "text-center py-24 text-muted-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-8 w-8 opacity-30" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "No articles found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Try different search terms or category" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      featured && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(NewsCard, { article: featured, index: 0, variant: "featured" })
        }
      ),
      rest.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: rest.map((article, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: 0.12 + i * 0.05 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(NewsCard, { article, index: i })
        },
        article.id
      )) })
    ] })
  ] });
}
export {
  News as default
};
