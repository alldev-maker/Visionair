const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryResults = await graphql(`
    {
      allPrismicResource {
        nodes {
          id
          url
        }
      }
    }
  `)

  queryResults.data.allPrismicResource.nodes.forEach(page => {
    createPage({
      path: page.url,
      component: path.resolve("src/templates/resource.js"),
      context: {
        id: page.id,
      },
    })
  })
}
