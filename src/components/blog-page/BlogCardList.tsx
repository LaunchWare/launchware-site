import React, { FC } from "react";
import { Link } from "gatsby";

import "./css/blog-card-list.css";

interface BlogCardListProps {
  articles: {
    id: number;
    excerpt: string;
    frontmatter?: {
      title: string;
    };
    fields?: {
      slug: string;
    };
  }[];
}

export const BlogCardList: FC<BlogCardListProps> = ({ articles }) => {
  const listItems = articles.map((article) => {
    return (
      <li className="blog-card-list__card" key={article.id}>
        <Link to={`/blog${article.fields?.slug}`}>
          <h3 className="blog-card-list__heading">{article.frontmatter?.title}</h3>
          <p className="blog-card-list__excerpt">{article.excerpt}</p>
        </Link>
      </li>
    );
  });

  return (
    <div className="blog-card-list">
      <ul className="blog-card-list__contents">{listItems}</ul>
    </div>
  );
};
