import * as React from "react";

import { PageProps, graphql } from "gatsby";

import { BlogCardList } from "../components/blog-page/BlogCardList";
import { BlogHero } from "../components/blog-page/BlogHero";
import { HeadDefaults } from "../components/layout/HeadDefaults";
import { Layout } from "../components/layout/Layout";

export function Head() {
  return <>
    <title>LaunchWare Insights: Leading Thoughts in Software Development</title>
    <meta
      name="keywords"
      content="software development blog, LaunchWare insights, technical expertise, software consultancy tips, staff augmentation insights, Boston tech blog, software development best practices"
    />
    <meta
      name="description"
      content="Dive deep into the world of custom software development, staff augmentation, and best practices with insights and articles from LaunchWare's technical experts."
    />
    <HeadDefaults />
  </>
}
function BlogPage({location, data}: PageProps<Queries.MarkdownArticlesForIndexQuery>) {
  return (
    <Layout location={location} title="Blog">
      <BlogHero />
      <BlogCardList articles={data.allMarkdownRemark.nodes} />
    </Layout>
  );
}

export default BlogPage;

export const pageQuery = graphql`
  query MarkdownArticlesForIndex {
    allMarkdownRemark(sort: { frontmatter: { publishedAt: DESC } }, limit: 1000) {
      nodes {
        id
        excerpt(pruneLength: 160)
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
`;
