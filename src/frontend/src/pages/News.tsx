import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { newsArticles } from "@/data/mock";
import { Clock, Search, Tag } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const ALL_TAGS = Array.from(new Set(newsArticles.flatMap((a) => a.tags)));

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function News() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filtered = newsArticles.filter((a) => {
    const matchSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.summary.toLowerCase().includes(search.toLowerCase());
    const matchTag = activeTag === "All" || a.tags.includes(activeTag);
    return matchSearch && matchTag;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="p-6 max-w-[1400px] mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <h1 className="font-display text-3xl text-foreground">
          News & Updates
        </h1>
        <p className="text-muted-foreground mt-1">
          Internal news and company updates
        </p>
      </motion.div>

      {/* Search & Tags */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="space-y-3"
      >
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            data-ocid="news.search_input"
            placeholder="Search news..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <Tag className="h-3.5 w-3.5 text-muted-foreground" />
          {["All", ...ALL_TAGS].map((tag) => (
            <button
              type="button"
              key={tag}
              data-ocid={`news.tag.${tag.toLowerCase().replace(/[^a-z0-9]/g, "_")}_tab`}
              onClick={() => setActiveTag(tag)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-smooth ${activeTag === tag ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>

      {filtered.length === 0 ? (
        <div
          data-ocid="news.empty_state"
          className="text-center py-20 text-muted-foreground"
        >
          <Search className="h-10 w-10 mx-auto mb-3 opacity-30" />
          <p className="font-medium">No articles found</p>
        </div>
      ) : (
        <>
          {/* Featured */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Card
                data-ocid="news.featured.card"
                className="group overflow-hidden cursor-pointer shadow-subtle hover:shadow-elevated transition-smooth border-border"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
                    <img
                      src={featured.imageUrl}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      {featured.tags.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-card/90 text-foreground text-xs backdrop-blur-sm border-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div className="space-y-3">
                      <Badge variant="secondary" className="text-xs">
                        {featured.category}
                      </Badge>
                      <h2 className="font-display text-2xl text-foreground leading-snug group-hover:text-primary transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                        {featured.content}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={featured.authorAvatar} />
                        <AvatarFallback className="text-xs bg-primary/10 text-primary">
                          {featured.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {featured.author}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(featured.publishedAt)}
                        </p>
                      </div>
                      <div className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {featured.readTime} min
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              >
                <Card
                  data-ocid={`news.article.item.${i + 1}`}
                  className="group overflow-hidden cursor-pointer shadow-subtle hover:shadow-elevated transition-smooth border-border h-full flex flex-col"
                >
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute bottom-2 left-2">
                      <Badge className="bg-card/90 text-foreground text-[11px] backdrop-blur-sm border-0">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4 flex-1 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{formatDate(article.publishedAt)}</span>
                      <span>·</span>
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime} min</span>
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm flex-1">
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {article.summary}
                    </p>
                    <div className="flex items-center gap-2 pt-3 border-t border-border">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={article.authorAvatar} />
                        <AvatarFallback className="text-[10px]">
                          {article.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground truncate">
                        {article.author}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
