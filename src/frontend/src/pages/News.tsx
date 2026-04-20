import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { newsArticles } from "@/data/mock";
import type { NewsArticle } from "@/types";
import { Clock, Newspaper, Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const ALL_CATEGORIES = Array.from(new Set(newsArticles.map((a) => a.category)));

const CATEGORY_GRADIENTS: Record<string, string> = {
  Business: "from-primary/30 to-accent/20",
  Production: "from-chart-1/30 to-chart-4/20",
  Quality: "from-chart-5/30 to-primary/20",
  "Tool-Room": "from-destructive/25 to-chart-4/20",
  Finance: "from-chart-2/30 to-primary/20",
  HR: "from-chart-5/30 to-accent/20",
  Stores: "from-chart-4/30 to-chart-2/20",
  Default: "from-primary/20 to-muted/40",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function ArticleImagePlaceholder({
  category,
  imageUrl,
  title,
}: { category: string; imageUrl: string; title: string }) {
  const gradient = CATEGORY_GRADIENTS[category] ?? CATEGORY_GRADIENTS.Default;
  return (
    <div className="w-full h-full relative overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      {/* Gradient fallback layer always behind image */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} industrial-grid -z-10`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </div>
  );
}

function NewsCard({
  article,
  index,
  variant = "default",
}: { article: NewsArticle; index: number; variant?: "featured" | "default" }) {
  if (variant === "featured") {
    return (
      <Card
        data-ocid="news.featured.card"
        className="group overflow-hidden cursor-pointer shadow-card hover:shadow-elevated transition-smooth border-border"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr]">
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto min-h-[260px]">
            <ArticleImagePlaceholder
              category={article.category}
              imageUrl={article.imageUrl}
              title={article.title}
            />
            <div className="absolute bottom-4 left-4 flex gap-2 z-10">
              {article.tags.slice(0, 2).map((tag) => (
                <Badge
                  key={tag}
                  className="bg-card/90 text-foreground text-[11px] backdrop-blur-sm border-0 shadow-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <CardContent className="p-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  {article.category}
                </Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {article.readTime} min read
                </span>
              </div>
              <h2 className="font-display text-2xl text-foreground leading-snug group-hover:text-primary transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                {article.content}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border">
              <Avatar className="h-8 w-8">
                <AvatarImage src={article.authorAvatar} />
                <AvatarFallback className="text-xs bg-primary/10 text-primary font-semibold">
                  {article.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">
                  {article.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatDate(article.publishedAt)}
                </p>
              </div>
              <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-smooth">
                Read →
              </span>
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }

  return (
    <Card
      data-ocid={`news.article.item.${index + 1}`}
      className="group overflow-hidden cursor-pointer shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-smooth border-border h-full flex flex-col"
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <ArticleImagePlaceholder
          category={article.category}
          imageUrl={article.imageUrl}
          title={article.title}
        />
        <div className="absolute bottom-2.5 left-2.5 z-10">
          <Badge className="bg-card/90 text-foreground text-[11px] backdrop-blur-sm border-0 shadow-sm">
            {article.category}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4 flex-1 flex flex-col gap-2.5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{formatDate(article.publishedAt)}</span>
          <span>·</span>
          <Clock className="h-3 w-3" />
          <span>{article.readTime} min</span>
        </div>
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm flex-1 leading-snug">
          {article.title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {article.summary}
        </p>
        <div className="flex flex-wrap gap-1 mt-1">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 pt-3 border-t border-border">
          <Avatar className="h-6 w-6 flex-shrink-0">
            <AvatarImage src={article.authorAvatar} />
            <AvatarFallback className="text-[10px] bg-primary/10 text-primary font-semibold">
              {article.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground truncate flex-1">
            {article.author}
          </span>
          <span className="text-[11px] text-primary font-medium opacity-0 group-hover:opacity-100 transition-smooth">
            Read →
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function News() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = newsArticles.filter((a) => {
    const matchSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.summary.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    return matchSearch && matchCat;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="p-6 max-w-[1400px] mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <Newspaper className="h-5 w-5 text-primary" />
            </div>
            <h1 className="font-display text-3xl text-foreground">
              News & Updates
            </h1>
          </div>
          <p className="text-muted-foreground text-sm">
            {newsArticles.length} articles · Internal news from Nexus MFG
          </p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            data-ocid="news.search_input"
            placeholder="Search news..."
            className="pl-9 bg-card border-border"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </motion.div>

      {/* Category filter pills */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.06 }}
        className="flex flex-wrap gap-2"
      >
        {["All", ...ALL_CATEGORIES].map((cat) => {
          const count =
            cat === "All"
              ? newsArticles.length
              : newsArticles.filter((a) => a.category === cat).length;
          return (
            <button
              type="button"
              key={cat}
              data-ocid={`news.category.${cat.toLowerCase().replace(/[^a-z0-9]/g, "_")}_tab`}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-3.5 py-1.5 rounded-full border font-medium transition-smooth ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary bg-card"
              }`}
            >
              {cat} <span className="opacity-60">({count})</span>
            </button>
          );
        })}
      </motion.div>

      {/* Content */}
      {filtered.length === 0 ? (
        <div
          data-ocid="news.empty_state"
          className="text-center py-24 text-muted-foreground"
        >
          <div className="h-16 w-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 opacity-30" />
          </div>
          <p className="font-semibold text-foreground">No articles found</p>
          <p className="text-sm mt-1">Try different search terms or category</p>
        </div>
      ) : (
        <>
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <NewsCard article={featured} index={0} variant="featured" />
            </motion.div>
          )}

          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.12 + i * 0.05 }}
                >
                  <NewsCard article={article} index={i} />
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
