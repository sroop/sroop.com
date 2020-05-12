const path = require(`path`)

exports.createPages = async ({ graphql, actions: { createPage } }) => {

  const { data: { allContentfulCommissionedWork: { nodes } } } = await graphql(`
    query {
      allContentfulCommissionedWork {
        nodes {
          slug
        }
      }
    }
  `)

  nodes.forEach(node => {
    const { slug } = node
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/CommissionedWork.js`),
      context: {
        slug: slug
      }
    })
  })

}