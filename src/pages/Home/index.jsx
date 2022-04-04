<<<<<<< HEAD
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
=======
import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Products from "../../components/Products";
import Brands from "../../components/Brands";
import "./index.scss";
import Categories from "../../components/Categories";
import { Link } from "react-router-dom";
import banner1 from "../../assets/images/shop1.png";
import banner2 from "../../assets/images/shop2.png";
import banner3 from "../../assets/images/shop3.png";

function index() {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>

            <section className="sections">
                <Categories></Categories>
                <Brands></Brands>
                <Products
                    title="Trending Products"
                    linktitle="Products"
                ></Products>
                <Products title="Best Seller" linktitle="Products"></Products>
                <Products title="Best Seller" linktitle="Products"></Products>
                <div style={{display:"flex"}}>
                    <div className="shop-banner1">
                        <div className="text">
                            Top Rated
                            <br />
                            <b>Gadgets</b>
                            <br />
                            are on <b>Sale</b>
                            <br />
                            <Link to="/" className="shop-btn">
                                Shop now <i className="fa fa-angle-right"></i>
                            </Link>
                        </div>
                        <img src={banner1} alt="" />
                    </div>
                    <div className="shop-banner2">
                        <div className="text">
                            Catch Big <br />
                            <b>Deals</b> on <br />
                            <b> Earbuds</b>
                            <br />
                            <Link to="/" className="shop-btn">
                                Shop now <i className="fa fa-angle-right"></i>
                            </Link>
                        </div>
                        <img src={banner2} alt="" />
                    </div>
                    <div className="shop-banner3">
                        <div className="text">
                            Catch Big <br />
                            <b>Deals</b> on <br />
                            <b> Earbuds</b>
                            <br />
                            <Link to="/" className="shop-btn">
                                Shop now <i className="fa fa-angle-right"></i>
                            </Link>
                        </div>
                        <img src={banner3} alt="" />
                    </div>
                </div>
            </section>

            <br />
            <br />
            <br />
            <br />
        </div>
    );
>>>>>>> 7b414a2459ffa78cd37fdee76f5c13f8e9677c73
}

export default index;
