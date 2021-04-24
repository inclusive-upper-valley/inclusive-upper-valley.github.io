import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <StaticImage src="../images/logo.jpg" alt="Logo" />
      <p>
        A brief mission statement here ...
      </p>
    </Layout>
  )
}
