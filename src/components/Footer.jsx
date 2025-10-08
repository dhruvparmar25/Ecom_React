import React from "react";
import { NavLink } from "react-router-dom";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

function Footer() {
  return (
    <div className="mb-16">
      {/* <section className="contact-short w-[60%] flex m-auto bg-gray-400 text-white  ">
        <div className="flex justify-between items-center px-15 py-4 w-[100%]">
          <div>
            <h3>Ready to get Started?</h3>
            <h3>Talk to us Today</h3>
          </div>
          <div>
            <button className="bg-purple-400  p-2">
              <NavLink to="/contact">Get Started</NavLink>
            </button>
          </div>
        </div>
      </section>   */}
        <div className="bg-[#06122d] text-white ">
        <footer className="w-[80%] m-auto justify-center items-centerin b">
          <div className="footer-main md:grid md:grid-cols-5 flex flex-col gap-11 p-5">
            <div className="footer-about">
              <h3 className="text-2xl">Dhruv Parmar</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
            </div>
            <div className="footer-subscribe">
              <h3 className="text-2xl">Subscribe to get important updaates</h3>
              <form action="#">
                <input
                  type="email"
                  placeholder="your E-mail"
                  className="border-1 mt-2 p-2"
                />{" "}
                <br />
                <input
                  type="submit"
                  value="subscribe"
                  className=" p-1 bg-gray-600 text-white rounded mt-2"
                />
              </form>
            </div>
            <div className="followUs">
              <h3>Follow Us</h3>
              <div className="social-icon flex gap-2 text-2xl mt-2">
                <div className="fb">
                  <TiSocialFacebookCircular className="text-blue-500" />
                </div>
                <div className="ins">
                  <TiSocialInstagram className="text-orange-300" />
                </div>
                <div className="yt">
                  <TiSocialYoutube className="text-red-500" />
                </div>
              </div>
            </div>
            <div className="callUs">
              <h3>Call Us</h3>
              <a href="tel:8140137412" className="mt-2 text-[12px]">+91 8140137412</a>
            </div>
            <div>
              <p>PRIVACY POLICY</p>
              <p className="text-[12px] mt-2">TERMS & CONDITION</p>
            </div>
          </div>

        </footer>
        <div className="footer-bottom ">
          <hr />
          <div className="copyright text-center p-3.5 ">
            <p>@{new Date().getFullYear()} DhruvParmar. All Rights Reserved</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
