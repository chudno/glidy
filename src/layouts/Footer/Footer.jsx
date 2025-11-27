import Logo from "@/components/Logo/Logo.jsx";
import './Footer.scss'

const Footer = () => {
  return (
      <footer  className="footer ">
          <div className="footer__wrapper container">
              <div className="footer__inner">
                  <div className="footer__info">
                      <Logo mode={'black'} className={"hidden-mobile"}/>
                      <p>
                          Glidy Services FZCO <br/>
                          Register No. ____ <br/>
                          Address Office No. 399, Obaid Musabbeh Mohammed Al <br/>
                          Mansoori - Hor Al Anz
                      </p>
                  </div>
                  <div className="footer__contacts">
                      <Logo
                          mode={'black'}
                          className={"footer__contacts-logo"}
                      />
                      <p className="footer__email-label">
                          Email:
                      </p>
                      <a
                         href="mailto:support@glidy.pro"
                         className="footer__email"
                      >
                          support@glidy.pro
                      </a>
                      <ul className="footer__list">
                          <li className="footer__item">
                              <a className="footer__items-link" href="/terms">
                                  Merchant Terms & Conditions
                              </a>
                          </li>
                          <li className="footer__item">
                              <a className="footer__items-link" href="/policy">
                                  Cookie Policy
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="footer__copyright">
                  <p>
                      All rights reserved © 2025
                  </p>
              </div>
          </div>
      </footer>
  )
}

export default Footer
