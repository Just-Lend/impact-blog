import React, { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { useParams, useLocation } from "react-router-dom";
import { getCampaignArticlesByUNSDGs } from "../api/campaignArticleService";
import type { Article } from "../types";

const UNSDGArticles: React.FC = () => {
  const { unsdgNumber } = useParams<{ unsdgNumber: string }>();
  const location = useLocation();
  const { unsdgPhoto } = location.state || {};
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (unsdgNumber) {
      console.log("hhs", unsdgNumber);
      getCampaignArticlesByUNSDGs(Number(unsdgNumber))
        .then((articles) => setArticles(articles))
        .catch((error) => console.error("Error fetching article:", error));
    }
  }, [unsdgNumber]);

  return (
    <main className="container mx-auto px-4 py-4">
      <div className=" flex items-center">
        <div className="text-2xl font-bold text-gray-800 mb-4">
          Articles on:
        </div>
        <img className=" w-24 aspect-auto rounded-md" src={unsdgPhoto} />
      </div>
      {articles.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className=" my-6 text-center">Articles not found</div>
      )}
    </main>
  );
};

export default UNSDGArticles;
