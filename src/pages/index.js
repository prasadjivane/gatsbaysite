import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Prasad Jivane">
      <p>Full Stack Software Developer</p>
      <StaticImage
        alt="prasad"
        src="https://avatars.githubusercontent.com/u/26869583?v=4"
      />
    </Layout>
  )
}

export default IndexPage
