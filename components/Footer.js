import React from "react";

const Footer = () => {
  return (
    <div className="footer-img bg-cover bg-center bg-no-repeat   h-96">
          <div className="h-full  bg-black/80">
          <section className="flex flex-col md:flex-row justify-center md:items-center text-center  md:justify-around h-full">
          <div>
            <h1 className="text-2xl font-bold text-red-600">Useful Links</h1>
            <ul className="text-white">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-red-600">Open Hours</h1>
            <ul className="text-white">
              <li>Monday - Friday</li>
              <li>8:00am - 5:00pm</li>
              <li>Saturday</li>
              <li>8:00am - 12:00pm</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-red-600">Contact Us</h1>
            <ul className="text-white">
              <li>123-456-7890</li>
              <li>123-456-7890</li>
              <li>123-456-7890</li>
              <li>123-456-7890</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
