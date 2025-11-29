import classNames from "classnames"
import {Icon as MinistaIcon, Image} from 'minista'
import './Icon.scss'

const Icon = (props) => {
    const {
        className,
        name,
        hasFill = false,
        ariaLabel
    } = props

    return (
        <span
            className={classNames(className, 'icon')}
            aria-label={ariaLabel}
        >

            <svg>
                <use href={`/src/assets/icons/sprite.svg#${name}`}></use>
            </svg>
        </span>
    );
};

export default Icon;