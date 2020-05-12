import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const CommissionedWork = ({data: { allContentfulCommissionedWork: {nodes}}}) => {
  const { projectName, commissionedBy, images, createdAt, description: { description } } = nodes[0]
  return (
    <Layout>
      <div>{ projectName }</div>
      <div>{ commissionedBy }</div>
      <div>{ description }</div>
      <div>{ createdAt }</div>
      { images.map(image => <img alt={image.fileName} key={image.contentful_id} src={image.file.url} />) }
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allContentfulCommissionedWork(filter: {slug: {eq: $slug}}) {
      nodes {
        slug
        commissionedBy
        projectName
        description {
          description
        }
        createdAt(formatString: "")
        images {
          contentful_id
          file {
            url
            fileName
          }
        }
      }
    }
  }
`

export default CommissionedWork