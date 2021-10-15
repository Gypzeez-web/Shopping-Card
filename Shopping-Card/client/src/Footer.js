import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{ position: "fixed", width: "100%" }}
        className="p-3 bg-dark text-white text-center "
      >
        <div className="container">
          <p className="lead">
            Copyright @ <span>{new Date().getFullYear()}</span> Kumaran
          </p>
        </div>
      </footer>
    );
  }
}
export default Footer;
