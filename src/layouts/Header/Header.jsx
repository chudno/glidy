import './Header.scss'
import Logo from "@/components/Logo";
import classNames from "classnames";
import BurgerButton from "@/components/BurgerButton";
import Button from "@/components/Button/index.js";

const Header = (props) => {
    const {
        url,
        isFixed
    } = props;

    const menuItems = [
        {
            label: 'Решения для платформ',
            href: '/about'
        },
        {
            label: 'Риск менеджмент',
            href: '/risk'
        }
    ]

    return (
        <header
            className={classNames('header',
                {
                    'is-fixed': true
                })}
            data-js-overlay-menu=""
        >
            <div className="header__inner container">
                <Logo
                    className='header__logo'
                    loading={'eager'}
                />
                <dialog
                    className="header__overlay-menu-dialog" data-js-overlay-menu-dialog=""
                >
                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            <li className="header__menu-item visible-tablet">
                                <Logo
                                    loading={'eager'}
                                />
                            </li>
                            {menuItems.map(({label, href, iconName}, index) => (
                                <li className="header__menu-item" key={index}>
                                    <a
                                        className={classNames("header__menu-link", {
                                            'is-active': href === url,
                                        })}
                                        href={href}
                                    >
                                        <span>
                                            {label}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Button
                        className="header__button"
                        label={"Написать"}
                        extraAttrs={{'modal-button-open': ''}}
                    />
                </dialog>
                <BurgerButton
                    className='header__burger-button visible-tablet'
                    extraAttrs={{
                        'data-js-overlay-menu-burger-button': ''
                    }}
                />
            </div>
        </header>
    )
}

export default Header;