import Button from "@/components/Button";
import "./PlatformValueSection.scss";
import ValueItem from "@/components/PlatformValueSection/ValueItem/ValueItem.jsx";
import {Image} from "minista";
import classNames from "classnames";

function PlatformValueSection({
                                  image,
                                  title,
                                  description,
                                  buttonText,
                                  items,
                                  reverse = false,
                                  bigMarginTop = false,
                              }) {
    return (
        <section className="platform-value container">
            <div className="platform-value__body">
                <Image
                    className="platform-value__image"
                    src={image}
                    alt=""
                    format="original"
                />
                <div className={classNames(
                    "platform-value__content", {
                        "platform-value__content--reverse": reverse
                    })}>
                    <h2 className="platform-value__title">
                        {title}
                    </h2>

                    {description && (
                        <p className="platform-value__description">
                            {description}
                        </p>
                    )}

                    <div className={classNames(
                        "platform-value__items", {
                            "platform-value__items--bigMarginTop": bigMarginTop,
                            "platform-value__items--withButton": !!buttonText,
                        })}>
                        {items.map((item, index) => (
                            <ValueItem
                                key={index}
                                {...item}
                            />
                        ))}
                    </div>

                    {buttonText && (
                        <Button
                            label={buttonText}
                            className="platform-value__button"
                            extraAttrs={{'modal-button-open': ''}}
                        />
                    )}
                </div>

            </div>
        </section>
    );
}

export default PlatformValueSection;
