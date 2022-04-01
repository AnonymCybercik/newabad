import React from 'react'
import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Products from "../../components/Products"
import "./index.scss"
import Categories from "../../components/Categories"
import Footer from '../../components/Footer'

function index() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <section className="sections">
        <Categories></Categories>
        <Products></Products>
      </section>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default index