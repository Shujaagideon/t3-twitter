import React from 'react'
import BlogComponent from '~/components/blog'
import Footer from '~/components/footer'
import { Header } from '~/components/header'

const Blog = () => {
  return (
    <div>
        <Header/>
        <BlogComponent/>
        <Footer/>
    </div>
  )
}

export default Blog