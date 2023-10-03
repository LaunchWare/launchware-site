import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { Layout } from "../components/layout/Layout";
import { BlogHero } from "../components/blog-page/BlogHero";
import { BlogCardList } from "../components/blog-page/BlogCardList";

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

export const Head: HeadFC = () => <title>LaunchWare - Software Development Consulting</title>;

export const pageQuery = graphql`
  query MarkdownArticlesForIndex {
    allMarkdownRemark(sort: { frontmatter: { publishedAt: DESC } }, limit: 1000) {
      nodes {
        id
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
