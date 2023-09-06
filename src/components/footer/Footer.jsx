import React from "react";


const Footer = () => {
  return (
    <div>
      <div className="bg-dark text-white text-center p-4 fixed-bottom">Copyright {new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;
