import './Header.scss'
import Logo from "@/components/Logo";
import classNames from "classnames";
import BurgerButton from "@/components/BurgerButton";
import spriteUrl from '@/assets/icons/sprite.svg';

const Header = (props) => {
    const {
        url,
        isFixed
    } = props;

    const menuItems = [
        {
            label: 'About',
            href: '/',
            iconName: 'about'
        },
        {
            label: 'Games & Services',
            href: '/gaming_services',
            iconName: 'games'
        },
        {
            label: 'Payment Solutions',
            href: '/payment_solutions',
            iconName: 'payment'
        },
        {
            label: 'Analytics',
            href: '/analytics',
            iconName: 'analytics'
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
                            <li className="header__menu-item">
                                <Logo
                                    className='visible-tablet'
                                    mode={'black'}
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
                                        <svg width={24} height={24}>
                                            <use href={`${spriteUrl}#${iconName}`}></use>
                                        </svg>
                                        <span>
                                            {label}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
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