import './Button.scss'
import classNames from "classnames"

const Button = (props) => {
    const {
        className,
        href,
        type = 'button',
        target,
        /**
         * '' (default) | 'white'
         **/
        mode = '',
        label,
        isLabelVisible = true,
        iconName,
        /**
        * 'before' | 'after'
        **/
        iconPosition = 'after',
        hasFillIcon = false,
        extraAttrs
    } = props

    const isLink = href !== undefined
    const Component = isLink ? 'a'  : 'button'
    const linkProps = {href, target}
    const buttonProps = {type}
    const specificProps = isLink ? linkProps : buttonProps
    const title = !isLabelVisible ? label : undefined
    const iconComponent = iconName

    return (
        <Component
            className={classNames(className, "button", {
                [`button__${mode}`]: mode,
            })}
            title={title}
            aria-label={title}
            {...specificProps}
            {...extraAttrs}
        >
            {iconPosition === 'before' && iconComponent}
            {isLabelVisible && (
                <span className={'button__label'}>
                    {label}
                </span>
            )}
            {iconPosition === 'after' && iconComponent}
        </Component>
    );
};

export default Button;