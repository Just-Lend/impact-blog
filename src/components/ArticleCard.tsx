import React from "react";
import type { Article } from "../types";
import { Link } from "react-router-dom";

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  const getCategoryNames = (article: any) => {
    const categories = article.external_campaign?.campaign_category_infos?.map(
      (c: any) => {
        return {
          id: c.campaign_category?.id,
          name: c.campaign_category?.new_description,
        };
      }
    );
    return categories;
  };
  const getUNSDGs = (article: any) => {
    const unsdgs = article.external_campaign?.campaign_category_infos?.map(
      (c: any) => c.campaign_category?.unsdg
    );
    return unsdgs;
  };
  const categories = getCategoryNames(article);
  const unsdgs = getUNSDGs(article);
  return (
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
          {categories?.length > 0 && (
            <div className="text-[0.8rem] font-semibold flex gap-x-1 justify-between">
              {categories.map((category: any) => (
                <Link
                  key={category.id}
                  className="text-[#5603AD] hover:underline"
                  to={`/categories/${category.id}`}
                  state={{ categoryName: category.name }}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}

          {unsdgs?.length > 0 && (
            <div className="text-xs text-gray-800 flex justify-start items-center gap-x-1">
              {unsdgs.map((unsdg: any, index: number) => (
                <Link
                  key={index}
                  to={{ pathname: `/unsdgs/${unsdg.id}` }}
                  state={{ sdg: unsdg }}
                >
                  <img className=" w-10" src={unsdg.icon_url} />
                </Link>
              ))}
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
};

export default ArticleCard;
