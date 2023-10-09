import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { Layout } from "../components/layout/Layout";
import { BlogHero } from "../components/blog-page/BlogHero";
import { BlogCardList } from "../components/blog-page/BlogCardList";

export const Head = () => (
  <>
    <title>LaunchWare Insights: Leading Thoughts in Software Development</title>
    <meta
      name="keywords"
      content="software development blog, LaunchWare insights, technical expertise, software consultancy tips, staff augmentation insights, Boston tech blog, software development best practices"
    />
    <meta
      name="description"
      content="Dive deep into the world of custom software development, staff augmentation, and best practices with insights and articles from LaunchWare's technical experts."
    />
  </>
);
const BlogPage = (pageProps: PageProps<Queries.MarkdownArticlesForIndexQuery>) => {
  const { data } = pageProps;

  return (
    <Layout location={pageProps.location} title="Blog">
      <BlogHero />
      <BlogCardList articles={data.allMarkdownRemark.nodes} />
    </Layout>
  );
};

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
