import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"

const BlogPage = (pageProps: PageProps<Queries.MarkdownArticlesForIndexQuery>) => {
  const { data } = pageProps
  const listItems = data.allMarkdownRemark.nodes.map(article => {
    return <li key={article.id}><a href={`/blog${article.fields?.slug}`}>{article.frontmatter?.title}</a></li>
  })
  return (
    <main>
      <h1>LaunchWare</h1>
      {listItems && (<ol>{listItems}</ol>)}
    </main>
  )
}

export default BlogPage

export const Head: HeadFC = () => <title>LaunchWare - Software Development Consulting</title>

export const pageQuery = graphql`
  query MarkdownArticlesForIndex {
    allMarkdownRemark(
      sort: { frontmatter: { publishedAt: DESC } }
      limit: 1000
    ) {
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
`
