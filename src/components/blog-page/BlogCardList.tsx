import React, { FC } from "react";

import "./css/blog-card-list.css";

interface BlogCardListProps {
  articles: {
    id: number;
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
        <a href={`/blog${article.fields?.slug}`}>{article.frontmatter?.title}</a>
      </li>
    );
  });

  return (
    <section className="blog-card-list">
      <ul className="blog-card-list__contents">{listItems}</ul>
    </section>
  );
};
