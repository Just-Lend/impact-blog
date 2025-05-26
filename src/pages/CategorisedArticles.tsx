import React, { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { useParams, useLocation } from "react-router-dom";
import { getCampaignArticlesByCategory } from "../api/campaignArticleService";
import type { Article } from "../types";
import Spinner from "../components/Spinner";

const CategorisedArticles: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { categoryName } = location.state || {};
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchCampaignArticlesByCategory = async (
    categoryId: number,
    categoryName: string
  ) => {
    try {
      const articles = await getCampaignArticlesByCategory(
        categoryId,
        categoryName
      );
      setArticles(articles);
    } catch (error) {
      setHasError;
      console.error("Error fetching articles by category:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const categoryId = id ? parseInt(id) : null;
    if (categoryId) {
      fetchCampaignArticlesByCategory(categoryId, categoryName);
    }
  }, [id]);

  if (loading) return <Spinner />;

  if (hasError) {
    return (
      <main className="container mx-auto px-4 py-4">
        <div className="text-center text-gray-600 mt-20">
          An error occurred, please try again later.
        </div>
      </main>
    );
  }

  if (articles.length === 0) {
    return (
      <main className="container mx-auto px-4 py-4">
        <div className="text-2xl font-bold text-gray-800 mb-4">
          Latest Articles
        </div>
        <div className="text-center text-gray-600">Articles not found</div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-4">
      <div className="text-2xl font-bold text-gray-800 mb-4">
        {categoryName} Articles
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

export default CategorisedArticles;
