import Heading from "../Header/Heading";
import "./footer.css";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container__row">
          <div className="col-fot1">

            <div className="footer__details">
              <Heading />
              <p>Cinemy Movies and Tv Series</p>
              <p>Alexandr Midved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
