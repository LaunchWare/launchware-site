import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `LaunchWare`,
    siteUrl: `https://launchware.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("postcss-import"), require("tailwindcss"), require("autoprefixer")],
      }
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LaunchWare`,
        short_name: `LaunchWare`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         // serialize: ({ query: { site, allMarkdownRemark } }) => {
    //         //   return allMarkdownRemark.nodes.map((node) => {
    //         //     return Object.assign({}, node.frontmatter, {
    //         //       description: node.excerpt,
    //         //       date: node.frontmatter.date,
    //         //       url: site.siteMetadata.siteUrl + node.fields.slug,
    //         //       guid: site.siteMetadata.siteUrl + node.fields.slug,
    //         //       custom_elements: [{ "content:encoded": node.html }],
    //         //     });
    //         //   });
    //         // },
    //         // query: `{
    //         //   allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    //         //     nodes {
    //         //       excerpt
    //         //       html
    //         //       fields {
    //         //         slug
    //         //       }
    //         //       frontmatter {
    //         //         title
    //         //         date
    //         //       }
    //         //     }
    //         //   }
    //         // }`,
    //         output: "/rss.xml",
    //         title: "LaunchWare Blog",
    //       },
    //     ],
    //   },
    // ,
    // ],
  ],
};

export default config;
