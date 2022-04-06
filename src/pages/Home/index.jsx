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
import Footer from "../../components/Footer";
import Partners from "../../components/Partners";
import Recomended from "../../components/Recommended";
import YouTube from "../../components/YouTube";
import Blog from "../../components/Blog";
import Deals from "../../components/Deals";
import "../../assets/scss/bootstrap.scss"

function index() {
    return (
        <div>
            <div className="container" style={{padding:"0"}}>
                <Header></Header>
                <Banner></Banner>
                <section className="sections">
                    <Categories></Categories>
                    <Brands></Brands>
                    <Products
                        title="Trending Products"
                        linktitle="Products"
                    ></Products>
                    <Products
                        title="Best Seller"
                        linktitle="Products"
                    ></Products>
                    <Products
                        title="Best Seller"
                        linktitle="Products"
                    ></Products>
                    <Deals></Deals>
                    <Partners></Partners>
                    <Recomended></Recomended>
                    <YouTube></YouTube>
                    <Blog></Blog>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default index;
