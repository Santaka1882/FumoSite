import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../layouts/Layout"

const NotFoundPage = () => {
  return (

    <Layout pageTitle="404">
      <div className="flex flex-col justify-center items-center w-4/5 mx-auto pt-6 max-w-2xl">
        <StaticImage src="../images/404.jpg"/>
        <Link to="/">
          <p className="text-lg text-red-500 text-bold">Go home</p> 
        </Link>
      </div>
      
    </Layout>

  )
}

export default NotFoundPage
