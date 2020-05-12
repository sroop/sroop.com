import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

const Home = ({data: { allContentfulCommissionedWork: { nodes } }}) => {
  return(
    <Layout>
      <div>
        <Message>Illustration</Message>
        { nodes.map(node => {
          return <Link key={node.slug} to={`/${node.slug}`}>{node.projectName}</Link>
        })}
      </div>
    </Layout>
  )
}

const Message = styled.div`
  color: red;
`

export const query = graphql`
  query {
    allContentfulCommissionedWork {
      nodes {
        slug
        projectName
      }
    }
  }
`

export default Home