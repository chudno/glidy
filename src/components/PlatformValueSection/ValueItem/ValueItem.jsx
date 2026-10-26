import "./ValueItem.scss";
import {Image} from "minista";

function ValueItem({ iconSrc, title, description }) {
    return (
        <div className="value-item">
            <div className={`value-item__icon-wrapper`}>
                <Image
                    className="value-item__icon"
                    src={iconSrc}
                    alt=""
                    format="original"
                />
            </div>

            <div className="value-item__content">
                <h4 className="value-item__title">
                    {title}
                </h4>

                {description && (
                    <p className="value-item__description">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}

export default ValueItem;
