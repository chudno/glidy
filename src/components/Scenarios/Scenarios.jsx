import "./Scenarios.scss";
import Button from "@/components/Button/index.js";
import {Image} from "minista";

function Scenarios() {
    return (
        <section className="scenarios-section">
            <div className="container">
                <div className="scenarios-section__wrapper">
                    <div className="scenarios-section__body">
                        <h2 className="scenarios-section__title">
                            Гибкие платёжные сценарии под разные модели бизнеса
                        </h2>
                        <div className="scenarios-section__description">
                            <p>
                                Настраивайте процесс оплаты под ваш продукт — от простой формы до сложных сценариев.
                            </p>
                        </div>
                        <Button
                            className="scenarios-section__button"
                            label={"Решения для платформ"}
                            extraAttrs={{'modal-button-open': ''}}
                        />
                    </div>
                    <Image
                        className="scenarios-section__image"
                        src={"/src/assets/images/main/scenarios/1.png"}
                        alt=""
                        format="webp"
                    />
                </div>
            </div>
        </section>
    );
}

export default Scenarios;
