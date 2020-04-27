/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const slug = require("slug")
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `ProjectsJson`) {
    createNodeField({
      node,
      name: `slug`,
      value: slug(node.title, { lower: true }),
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allProjectsJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allProjectsJson.edges.forEach(({ node }) => {
    console.log(node.fields.slug);
    if (node.fields.slug === 'ruler-app') {
      createPage({
        path: `projects/${node.fields.slug}`,
        component: path.resolve(`./src/templates/blog-project1.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    }
    else {
      createPage({
        path: `projects/${node.fields.slug}`,
        component: path.resolve(`./src/templates/blog-project.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    }
  })
}
