import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4">
        <div>
          <h6 className="font-bold uppercare pt-2">solutions</h6>
          <ul>
            <li className="py-1">travel</li>
            <li className="py-1">booking</li>
            <li className="py-1">flights</li>
            <li className="py-1">cruises</li>
            <li className="py-1">ground</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercare pt-2">support</h6>
          <ul>
            <li className="py-1">pricing</li>
            <li className="py-1">documentation</li>
            <li className="py-1">tours</li>
            <li className="py-1">refunds</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercare pt-2">company</h6>
          <ul>
            <li className="py-1">about</li>
            <li className="py-1">blog</li>
            <li className="py-1">jobs</li>
            <li className="py-1">press</li>
            <li className="py-1">partners</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercare pt-2">legal</h6>
          <ul>
            <li className="py-1">claims</li>
            <li className="py-1">privacy</li>
            <li className="py-1">terms</li>
            <li className="py-1">policies</li>
            <li className="py-1">conditions</li>
          </ul>
        </div>
        <div className="col-span-2 py-8 md:pt-2">
          <p>Subscribe</p>
          <p className="py-4">
            The Latest deals, articles and resources sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4 rounded-md">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">&copy; 2024 sagelvl40 All rights reserved.</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
