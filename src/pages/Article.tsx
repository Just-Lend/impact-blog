import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCampaignArticleBySlug } from "../api/campaignArticleService";
import type { Article } from "../types";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (slug) {
      getCampaignArticleBySlug(slug)
        .then((article) => setArticle(article))
        .catch((error) => console.error("Error fetching article:", error));
    }
  }, [slug]);

  if (!article) return <div className="text-center py-8">Loading...</div>;

  const encodedUrl = encodeURIComponent(
    window.location.origin + window.location.pathname
  );
  const encodedTitle = encodeURIComponent(article.title);

  return (
    <article className="container mx-auto px-4 article-page">
      <img src={article.image_urls[0]} className="coverImage" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4 w-4/6 mx-auto">
        {article.title}
      </h1>
      <div className=" flex justify-between w-full mt-8">
        <div className=" w-1/6 flex flex-col gap-y-2 pr-6">
          <div>
            <div className=" underline">Categories</div>
            <div className=" flex flex-col gap-y-1">
              {article.categories.map((c: string) => (
                <Link className=" text-[#5603AD] font-semibold text-sm" to="/">
                  {c}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className=" underline">Tags</div>
            <div className=" flex flex-col gap-y-1">
              {article.tags.map((c: string) => (
                <div className=" text-xs">{c}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 border-l border-l-gray-300 px-4">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            {article.preview}
          </h3>
          <div
            className="prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
        <div className=" w-1/8 flex flex-col gap-y-2 px-6">
          <div className=" font-semibold">Share:</div>
          <div className=" flex flex-col gap-y-2">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                size={30}
                color="white"
                className=" cursor-pointer bg-[#5603AD] rounded-md p-1"
              />
            </a>
            <a
              href={`https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter
                size={30}
                color="white"
                className=" cursor-pointer bg-[#5603AD] rounded-md p-1"
              />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                size={30}
                color="white"
                className=" cursor-pointer bg-[#5603AD] rounded-md p-1"
              />
            </a>
          </div>
        </div>
      </div>
      {/* {article?.image_urls.length > 0 && (
        <img
          src={article.image_urls[0]}
          alt={article.title}
          className="w-full h-64 object-cover mb-6"
        />
      )} */}
    </article>
  );
};

export default ArticlePage;
