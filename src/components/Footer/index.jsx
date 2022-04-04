import React from 'react';
import Email from '../../assets/images/mail.png'
import Phone from '../../assets/images/phone_second.png'
import Rocket from '../../assets/images/rocket_footer.png'
import Payment from '../../assets/images/payment_footer.png'
import Cash from '../../assets/images/cash_footer.png'
import Headphone from '../../assets/images/headphone_footer.png'
import DropIcon from '../../assets/images/dropDown_light.png'
import Logo from '../../assets/images/logo.png';
import FlagBlue from '../../assets/images/flag_blue.png'
import FlagWhite from '../../assets/images/flag_white.png'
import FlagGreen from '../../assets/images/flag_green.png'
import UzCard from '../../assets/images/uzcard.png'
import Visa from '../../assets/images/visa.png'
import Humo from '../../assets/images/humo.png'
import MasterCard from '../../assets/images/mastercard.png'


import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer__wrapper">
      <div className="main__section">
        <div className="categories">
          <div className="categories__title">
            <h1>Categories</h1>
          </div>
          <ul className="category__links">
            <li className="category__links__item">Electronics</li>
            <li className="category__links__item">Sneakers & Athletic</li>
            <li className="category__links__item">Furniture</li>
            <li className="category__links__item">Toys</li>
            <li className="category__links__item">Home Improvement</li>
            <li className="category__links__item">Baby</li>
            <li className="category__links__item">Sports & Outdoors</li>
            <li className="category__links__item">Auto Parts & Accessories</li>
            <li className="category__links__item">Arts, Crafts & Sewing</li>
            <li className="category__links__item">Movies & TV Shows</li>
            <li className="category__links__item">Patio & Garden</li>
            <li className="category__links__item">Office Supplies</li>
          </ul>
        </div>
        <div className="account">
          <div className="account__title">
            <h1>Account & Shipping info</h1>
          </div>
          <ul className="account__links">
            <li className="account__links__item">Sign in</li>
            <li className="account__links__item">Create Account</li>
            <li className="account__links__item">Forgot Password</li>
            <li className="account__links__item">Returns</li>
            <li className="account__links__item">Refunds & replacement</li>
            <li className="account__links__item">Delivery info</li>
          </ul>
          <div className="aboutus">
            <div className="aboutus__title">
              <h1>About us</h1>
            </div>
            <ul className="aboutus__links">
              <li className="aboutus__links__item">About Company</li>
              <li className="aboutus__links__item">Our Services</li>
              <li className="aboutus__links__item">Career</li>
              <li className="aboutus__links__item">News</li>
            </ul>
          </div>
        </div>
        <div className="signup">
          <div className="signup__title">
            <h1>Sign up for newsletters</h1>
          </div>
          <div className="signup__action">
            <div className="field">
              <input type="text" placeholder="Your email" />
              <img src={ Email } alt="mail" />
            </div>
            <button>Subscribe*</button>
          </div>
          <span>*Subscribe to our newsletter to receive early discount offers, updates and new products info.</span>
          <div className="hotline">
            <div className="hotline__title">
              <h2>Hotline 24/7</h2>
            </div>
            <div className="hotline__action">
              <a href="#" className="hotline__action__item">
                <div>
                  <img src={ Phone } alt="phone" />
                </div>
                <div>
                  <span>+998 97 745 96 96</span>
                </div>
              </a>
              <a href="#" className="hotline__action__item">
                <div>
                  <img src={ Email } alt="phone" />
                </div>
                <div>
                  <span>support@abad.uz</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="second__section">
        <div className="second__section__wrapper">
          <div className="section__item">
            <div className="section__item__icon">
              <img src={ Rocket } alt="" />
            </div>
            <div className="section__item__content">
              <h4>Fast and free deliver</h4>
              <p>Free delivery for all orders over $200</p>
            </div>
          </div>
          <div className="section__item">
            <div className="section__item__icon">
              <img src={ Cash } alt="" />
            </div>
            <div className="section__item__content">
              <h4>Fast and free deliver</h4>
              <p>Free delivery for all orders over $200</p>
            </div>
          </div>
          <div className="section__item">
            <div className="section__item__icon">
              <img src={ Headphone } alt="" />
            </div>
            <div className="section__item__content">
              <h4>Fast and free deliver</h4>
              <p>Free delivery for all orders over $200</p>
            </div>
          </div>
          <div className="section__item">
            <div className="section__item__icon">
              <img src={ Payment } alt="" />
            </div>
            <div className="section__item__content">
              <h4>Fast and free deliver</h4>
              <p>Free delivery for all orders over $200</p>
            </div>
          </div>
        </div>
      </div>
      <div className="vertical__line">
        <div className="line"></div>
      </div>
      <div className="bottom__section">
        <div className="about__section">
          <div className="logo">
            <img src={ Logo } alt="" />
            <div className="field">
              <div className="flag">
                <img src={ FlagBlue } alt="" />
                <img src={ FlagWhite } alt="" />
                <img src={ FlagGreen } alt="" />
              </div>
              <span>Eng / USD</span>
              <img src={ DropIcon } alt="" />
            </div>
          </div>
          <div className="links">
            <ul>
              <li>Outlets</li>
              <li>Affiliates</li>
              <li>Support</li>
              <li>Privacy</li>
              <li>Terms of use</li>
            </ul>
          </div>
        </div>
        <div className="social__network">
          <div className="social__network__wrapper">
            <div className="social__network__item">
              <i className="fa fa-facebook"></i>
            </div>
            <div className="social__network__item">
              <i className="fa fa-instagram"></i>
            </div>
            <div className="social__network__item">
              <i className="fa fa-telegram"></i>
            </div>
            <div className="social__network__item">
              <i className="fa fa-youtube"></i>
            </div>
            <div className="social__network__item">
              <i className="fa fa-google"></i>
            </div>
          </div>
          <div className="payments">
            <div className="payments__item">
              <img src={ UzCard } alt="" />
            </div>
            <div className="payments__item">
              <img src={ Humo } alt="" />
            </div>
            <div className="payments__item">
              <img src={ Visa } alt="" />
            </div>
            <div className="payments__item">
              <img src={ MasterCard } alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="last_section">
        <div className="last_section__title">
          <p>© 2022 Abad. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
