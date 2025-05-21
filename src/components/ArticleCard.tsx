import React from "react";
import type { Article } from "../types";

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <div className="bg-white  overflow-hidden">
    <a href={`/articles/${article.slug}`}>
      <img
        src={article.image_urls[0]}
        alt={article.title}
        className="w-full h-52 object-cover"
      />
    </a>
    <div className="py-4">
      <a
        className="text-xl font-semibold text-gray-800 line-clamp-3 hover:underline"
        href={`/articles/${article.slug}`}
      >
        {article.title}
      </a>
      <p className="mt-2 text-gray-600 line-clamp-4">{article.preview}</p>
      <div className="mt-2 flex flex-col gap-y-2">
        {/* Categories */}
        {article.categories?.length > 0 && (
          <div className="text-sm text-gray-800 font-semibold">
            {article.categories.join(" / ")}
          </div>
        )}

        {/* Tags */}
        {article.tags?.length > 0 && (
          <div className="text-xs text-gray-800 ">
            {article.tags.join(" * ")}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default ArticleCard;
