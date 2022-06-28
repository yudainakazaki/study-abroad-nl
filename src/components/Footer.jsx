import React from "react";
import "../css/footer.css";

function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer>
        <p>ⓒ {year} studyabroad.nl</p>
      </footer>
    );
  }
  
  export default Footer;