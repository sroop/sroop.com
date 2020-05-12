import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { get } from "lodash"

const Layout = ({children}) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const title = get(data, `site.siteMetadata.title`)
  return(
    <Container>
      <div>{ title }</div>
      {children}
    </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`

export default Layout