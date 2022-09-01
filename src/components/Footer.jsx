import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Veres-Pop Cosmin {year}</p>
    </footer>
  );
}

export default Footer;
