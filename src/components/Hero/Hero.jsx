import Button from "@/components/Button/index.js";
import {Image} from "minista";
import "./Hero.scss"


const Hero = (props) => {
    const {
        title,
        subtitle,
        imgSrc
    } = props;

    const titleId = "hero-title"

    return (
        <section
            className="hero"
            aria-labelledby={titleId}
        >
            <div className="hero__wrapper container">
                <Image
                    className="hero__bg"
                    src="/src/assets/images/main/3.svg"
                    alt=""
                    format="original"
                />
                <div className="hero__content">
                    <h1 className="hero__title" id={titleId}>
                        {title}
                    </h1>
                    <div className="hero__description">
                        <p>
                            {subtitle}
                        </p>
                    </div>
                    <Button
                        className="hero__button"
                        label={'Contact us'}
                        iconName={'arrow-right'}
                        extraAttrs={{'modal-button-open': ''}}
                    />
                </div>
                <Image
                    className="hero__image"
                    src={imgSrc}
                    alt=""
                    format="original"
                />
            </div>

        </section>
    )
}
export default Hero;