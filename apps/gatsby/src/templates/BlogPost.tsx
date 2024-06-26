import * as React from "react";
import { Link, graphql, PageProps, HeadFC, HeadProps } from "gatsby";

import { Layout } from "../components/layout/Layout";
import "./css/blog-post.css";
// import Seo from "../components/seo";

const BlogPostTemplate = ({ data, location }: PageProps<Queries.BlogPostBySlugQuery>) => {
  const queryData = data;
  const siteTitle = queryData?.site?.siteMetadata?.title || `Title`;
  const post = queryData.markdownRemark;
  const { previous, next } = queryData;

  return (
    <Layout location={location} title={siteTitle}>
      <div className="blog-post">
        <div className="blog-post__contents">
          <article className="blog-post__article" itemScope itemType="http://schema.org/Article">
            <header>
              <h1 className="blog-post__heading" itemProp="headline">
                {post?.frontmatter?.title}
              </h1>
              <p className="blog-post__text_center">{post?.frontmatter?.date}</p>
            </header>
            <section
              className="blog-post__text"
              dangerouslySetInnerHTML={{ __html: post?.html || "" }}
              itemProp="articleBody"
            />
            <hr />
          </article>
          <nav className="blog-post-nav">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li className="blog-post-nav__previous">
                {previous && (
                  <Link to={`/blog${previous?.fields?.slug}` || "/"} rel="prev">
                    ← {previous?.frontmatter?.title}
                  </Link>
                )}
              </li>
              <li className="blog-post-nav__next">
                {next && (
                  <Link to={`/blog${next.fields?.slug}` || "/"} rel="next">
                    {next.frontmatter?.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Layout>
  );
};

export const Head = (props: HeadProps<Queries.BlogPostBySlugQuery>) => {
  return (
    <>
      <title>{props.data.markdownRemark?.frontmatter?.title} - LaunchWare</title>
      <meta name="description" content={props.data.markdownRemark?.excerpt || undefined} />
    </>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
