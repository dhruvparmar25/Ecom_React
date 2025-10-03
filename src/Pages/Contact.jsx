import React from "react";
import Nav from "../components/Nav";

function Contact() {
  return (
    <>
      <div className="common-headding m-10"> Contact Us</div>
      <div className="contack-page flex justify-between">
        <div className="map w-[48%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d932.1427286684032!2d73.17680057850067!3d20.849026534495334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1759476956244!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="form w-[48%]">
          <form action="https://formspree.io/f/xyznjlao" method="POST">
            <input
              type="text"
              placeholder="UserName"
              name="username"
              required
              autoComplete="off"
              className="border w-[80%] mt-5 p-3 rounded-2xl "
            />
            <br />
            <input
              type="text"
              placeholder="Email"
              name="email"
              required
              autoComplete="off"
              className="border w-[80%] mt-5 p-3 rounded-2xl "
            />
            <br />
            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
              className="border w-[80%] mt-5 p-3 rounded-2xl "
            ></textarea>
            <br />
            <input
              type="submit"
              value="send"
              className="border-none bg-red-400 w-[80%] mt-5 p-3 rounded-2xl "
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
