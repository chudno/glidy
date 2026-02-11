import Logo from "@/components/Logo/Logo.jsx";
import './Footer.scss'

const Footer = () => {
  return (
      <footer  className="footer ">
          <div className="container">
              <div className="footer__inner">
                  <div className="footer__contacts">
                      <Logo />
                      <p className="footer__email">
                          support@apiport.pro
                      </p>
                  </div>
                  <div className="footer__wrapper">
                      <ul className="footer__list">
                          <li className="footer__item">
                              <a className="footer__items-link" href="/about">
                                  Решения для платформ
                              </a>
                          </li>
                          <li className="footer__item">
                              <a className="footer__items-link" href="/risk">
                                  Риск менеджмент
                              </a>
                          </li>
                          <li className="footer__item">
                              <a className="footer__items-link" href="/misc">
                                  Договор оферта
                              </a>
                          </li>

                      </ul>
                      <div className="footer__border visible-mobile">
                      </div>
                      <p className="footer__info">
                          © ООО "Технологии Интеграции" ИНН 9726046121
                      </p>
                  </div>
                  <div className="footer__copyright visible-mobile">
                      <p>
                          All rights reserved © 2026
                      </p>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer
