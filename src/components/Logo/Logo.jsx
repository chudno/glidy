import './Logo.scss'
import classNames from 'classnames'

const Logo = (props) => {
    const {
        className,
        loading = 'lazy',
        mode = 'white'
    } = props
    const title = 'Home'

    return (
        <a
            className={classNames(className, 'logo')}
            href={'/'}
            title={title}
            aria-label={title}
        >
            <img
                className="logo__image"
                src={ mode === "white" ? "/logo.svg" : "/logoV2.svg" }
                alt=""
                width={"113"}
                height={"33"}
                loading={loading}
            />
        </a>
    );

};

export default Logo;