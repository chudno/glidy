import './Hero.scss'
import Button from "@/components/Button";
import {Image} from "minista";
import HeroAdvantages from "@/components/HeroAdvantages/index.js";

const Hero = (props) => {

    const {
        title,
        subtitle,
        buttonText,
        imgSrc,
        imgMobileSrc,
        items,
        activeIndex
    } = props

    const titleId = "hero-title"

    return (
        <section
            className="hero"
            aria-labelledby={titleId}
        >
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__content">
                        <div className="hero__body">
                            <h1 className="hero__title" id={titleId}>
                                {title}
                            </h1>
                            <div className="hero__subtitle">
                                <p>
                                    {subtitle}
                                </p>
                            </div>
                            <Button
                                className="hero__button"
                                label={buttonText}
                                extraAttrs={{'modal-button-open': ''}}
                            />
                        </div>
                        <HeroAdvantages
                            items={items}
                            activeIndex={activeIndex}
                        />
                    </div>
                    <Image
                        className="hero__image hidden-mobile"
                        src={imgSrc}
                        alt=""
                        format="original"
                    />
                    <Image
                        className="hero__image visible-mobile"
                        src={imgMobileSrc}
                        alt=""
                        format="original"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero