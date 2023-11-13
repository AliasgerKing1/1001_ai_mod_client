/* eslint-disable */
import React, { useEffect, useState } from 'react'
import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import { NavLink, useParams } from 'react-router-dom'
import { getModAppByQuery } from '../../../Services/ModAppSearchService'

const Search = () => {
  let searchQuery = useParams().query;
  let [searchResult, setSearchResult] = useState([])
  let [modName, setModName] = useState('');

  let getAppFun = async ()=> {
    let result = await getModAppByQuery(searchQuery);
    if(result?.data?.status === 200) {
      setSearchResult(result?.data?.resultedData)
      let name = result?.data?.resultedData[0]?.description.split('.!')[0];
      setModName(name); // Set the state here
    }
  }

  useEffect(()=> {
    getAppFun()
  }, [searchQuery])
  return (
    <>
<Header />
  <div className="responsive-navbar offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex={-1} id="navbarOffcanvas">
    <div className="offcanvas-header">
      <a href="index.html" className="logo d-inline-block">
        <img className="logo-light" src="/assets/img/logo.webp" alt="logo" />
        <img className="logo-dark" src="/assets/img/logo-white.webp" alt="logo" />
      </a>
      <button type="button" className="close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
        <i className="ri-close-line" />
      </button>
    </div>
    <div className="offcanvas-body">
      <div className="accordion" id="navbarAccordion">
        <div className="accordion-item">
          <button className="accordion-button collapsed active" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Home
          </button>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
            <div className="accordion-body">
              <div className="accordion" id="navbarAccordion2">
                <div className="accordion-item">
                  <a className="accordion-link active" href="index.html">
                    Home Demo One
                  </a>
                </div>
                <div className="accordion-item">
                  <a className="accordion-link" href="index-2.html">
                    Home Demo Two
                  </a>
                </div>
                <div className="accordion-item">
                  <a className="accordion-link" href="index-3.html">
                    Home Demo Three
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapbaxour" aria-expanded="false" aria-controls="collapbaxour">
            Pages
          </button>
          <div id="collapbaxour" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
            <div className="accordion-body">
              <div className="accordion" id="navbarAccordion45">
                <div className="accordion-item">
                  <a className="accordion-link" href="about.html">
                    About Us
                  </a>
                </div>
                <div className="accordion-item">
                  <a className="accordion-link" href="contact.html">
                    Contact Us
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="team.html" className="accordion-link">
                    Team
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="author.html" className="accordion-link">
                    Author
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="privacy-policy.html" className="accordion-link">
                    Privacy Policy
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="terms-conditions.html" className="accordion-link">
                    Terms &amp; Conditions
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="error-404.html" className="accordion-link">
                    404 Error Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Business
          </button>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
            <div className="accordion-body">
              <div className="accordion" id="navbarAccordion7">
                <div className="accordion-item">
                  <a href="business.html" className="accordion-link">
                    Business News
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="business-details.html" className="accordion-link">
                    Business News Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Politics
          </button>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
            <div className="accordion-body">
              <div className="accordion" id="navbarAccordion30">
                <div className="accordion-item">
                  <a href="politics.html" className="accordion-link">
                    Political News
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="politics-details.html" className="accordion-link">
                    Political News Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Video
          </button>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
            <div className="accordion-body">
              <div className="accordion" id="navbarAccordion11">
                <div className="accordion-item">
                  <a href="featured-video.html" className="accordion-link">
                    Featured Video
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="featured-video-details.html" className="accordion-link">
                    Featured Video Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourth" aria-expanded="false" aria-controls="collapseFourth">
            Sports
          </button>
          <div id="collapseFourth" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
            <div className="accordion-body">
              <div className="accordion" id="navbarAccordion111">
                <div className="accordion-item">
                  <a href="sports.html" className="accordion-link">
                    Sports News
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="sports-details.html" className="accordion-link">
                    Sports News Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Shop
          </button>
          <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
            <div className="accordion-body">
              <div className="accordion" id="navbarAccordion70">
                <div className="accordion-item">
                  <a href="shop-grid.html" className="accordion-link">
                    Shop Grid
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="shop-left-sidebar.html" className="accordion-link">
                    Shop Left Sidebar
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="shop-right-sidebar.html" className="accordion-link">
                    Shop Right Sidebar
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="shop-details.html" className="accordion-link">
                    Shop Details
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="cart.html" className="accordion-link">
                    Cart
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="wishlist.html" className="accordion-link">
                    Wishlist
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="checkout.html" className="accordion-link">
                    Checkout
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="login.html" className="accordion-link">
                    Login
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="signup.html" className="accordion-link">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-contact-info">
        <h4>Contact Info</h4>
        <ul className="contact-info list-style">
          <li>
            <i className="ri-map-pin-fill" />
            <p>28/A Street, New York, USA</p>
          </li>
          <li>
            <i className="ri-mail-fill" />
            <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#2b434e4747446b494a534405484446"><span className="__cf_email__" data-cfemail="8ee6ebe2e2e1ceeceff6e1a0ede1e3">[email&nbsp;protected]</span></a>
          </li>
          <li>
            <i className="ri-phone-fill" />
            <a href="tel:1800123456789">+1 800 123 456 789</a>
          </li>
        </ul>
        <ul className="social-profile list-style">
          <li><a href="https://www.fb.com/" target="_blank"><i className="ri-facebook-fill" /></a></li>
          <li><a href="https://www.instagram.com/" target="_blank"><i className="ri-instagram-line" /></a></li>
          <li><a href="https://www.linkedin.com/" target="_blank"><i className="ri-linkedin-fill" /></a></li>
          <li><a href="https://www.twitter.com/" target="_blank"><i className="ri-twitter-fill" /></a></li>
        </ul>
      </div>
      <div className="others-option d-flex d-lg-none align-items-center">
        <div className="option-item">
          <a href="login.html" className="btn-two">Sign In</a>
        </div>
      </div>
    </div>
  </div>
  {/* <div className="breadcrumb-wrap">
    <div className="container">
      <h2 className="breadcrumb-title">Shop Grid</h2>
      <ul className="breadcrumb-menu list-style">
        <li><a href="index.html">Home</a></li>
        <li>Shop</li>
      </ul>
    </div>
  </div> */}
  {searchResult?.length > 0 ? (  <div className="container ptb-100">
    <div className="row align-items-center">
      <div className="col-md-6">
        <p className="search-result">Showing 1{searchResult?.length > 1 ? (searchResult?.length > 8 ? '-8' : `-${searchResult?.length}`) : ''}  of {searchResult?.length} Results</p>
      </div>
      <div className="col-md-6 text-md-end">
        <select name="product-filter" id="product-filter">
          <option value={0}>Default Sorting</option>
          <option value={1}>Price: High To Low</option>
          <option value={2}>Price: Low To High</option>
        </select>
      </div>
    </div>
    <div className="row justify-content-center">
    {searchResult?.map((resulteditem) => (
      <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6" key={resulteditem?.app_name}>
        <div className="product-card">
          <div className="product-card-img">
            <img src={resulteditem?.banner_image} alt={resulteditem?.app_name} />
            {/* <a href="cart.html" className="btn-two add-to-cart">Add To Cart</a> */}
          </div>
          <h3><NavLink to={`/details/app/${modName}/${resulteditem?._id}`}>{resulteditem?.app_name}</NavLink></h3>
          <div className="product-price"><i className="fi fi-rr-fire-flame-curved" />{resulteditem?.category}</div>
        </div>
      </div>
      ))}
    </div>
    {searchResult?.length > 8 && (    <ul className="page-nav list-style text-center mt-20">
      <li><a href="shop-left-sidebar.html"><i className="flaticon-arrow-left" /></a></li>
      <li><a className="active" href="shop-left-sidebar.html">01</a></li>
      <li><a href="shop-left-sidebar.html">02</a></li>
      <li><a href="shop-left-sidebar.html">03</a></li>
      <li><a href="shop-left-sidebar.html"><i className="flaticon-arrow-right" /></a></li>
    </ul>)}
  </div>) : (<div className="error-wrap ptb-100">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div className="error-content">
          <img src="/assets/img/404.webp" alt="Iamge" />
          <h2>Oops! No App Found with <span style={{color : ' #E93314'}}>{searchQuery}</span></h2>
          <p>I’m sorry, but the application you’re attempting to locate has not been uploaded yet, or there may have been a misspelling in your search query. Please try searching for something else. Thank you for your understanding.</p>
          <button type='button' data-bs-toggle="modal" data-bs-target="#searchModal" className="btn-one">Search something else<i className="flaticon-right-arrow" /></button>
        </div>
      </div>
    </div>
  </div>
</div>)}

  <Footer />
  <button type="button" id="backtotop" className="position-fixed text-center border-0 p-0">
    <i className="ri-arrow-up-line" />
  </button>
  <div className="modal fade" id="newsletter-popup" tabIndex={-1} aria-labelledby="newsletter-popup" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <button type="button" className="btn_close" data-bs-dismiss="modal" aria-label="Close">
          <i className="fi fi-rr-cross" />
        </button>
        <div className="modal-body">
          <div className="newsletter-bg bg-f" />
          <div className="newsletter-content">
            <img src="/assets/img/newsletter-icon.webp" alt="Image" className="newsletter-icon" />
            <h2>Join Our Newsletter &amp; Read The New Posts First</h2>
            <form action="#" className="newsletter-form">
              <input type="email" placeholder="Email Address" />
              <button type="button" className="btn-one">Subscribe<i className="flaticon-arrow-right" /></button>
            </form>
            <div className="form-check checkbox">
              <input className="form-check-input" type="checkbox" id="test_21" />
              <label className="form-check-label" htmlFor="test_21">
                I've read and accept <a href="privacy-policy.html">Privacy Policy</a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default Search
