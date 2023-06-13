import React from "react";
import css from "./Footer.module.css";
import facebook from "../../images/footer/facebook.png";
import twitter from "../../images/footer/twitter.png";
import instagram from "../../images/footer/instagram.png";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <nav className={css.nav}>
          <a className={css.social} href="" target="_blank" rel="nofollow">
            <img
              src={instagram}
              className={css.instagram}
              alt="instagram"
            ></img>
          </a>
          <a className={css.social} href="" target="_blank" rel="nofollow">
            <img src={facebook} className={css.facebook} alt="facebook"></img>
          </a>
          <a className={css.social} href="" target="_blank" rel="nofollow">
            <img src={twitter} className={css.twitter} alt="twitter"></img>
          </a>
          <div className={css.contacts}>
            <p className={css.social}>+7(777)777-77-77</p>
          </div>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
