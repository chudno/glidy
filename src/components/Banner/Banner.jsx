import Button from "@/components/Button";
import "./Banner.scss";

function Banner({ title, description, buttonText }) {
    return (
        <section className="container">
            <div className="banner">
                <div className="banner__wrapper">
                    <div className="banner__content">
                        <h2 className="banner__title">
                            {title}
                        </h2>

                        {description && (
                            <p className="banner__description">
                                {description}
                            </p>
                        )}
                    </div>


                    {buttonText && (
                        <Button
                            mode="white"
                            className="banner__button"
                            label={buttonText}
                            extraAttrs={{'modal-button-open': ''}}
                        />
                    )}
                </div>
            </div>

        </section>
    );
}

export default Banner;
