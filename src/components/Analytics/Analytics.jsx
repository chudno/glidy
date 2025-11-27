import Button from "@/components/Button/index.js";
import {Image} from "minista";
import './Analytics.scss'

const Analytics = () => {
    const titleId = "analytics-title";

    return (
        <section className="bottom-section container">
            <div className="analytics">
                <div className="analytics__content">
                    <h2 className="analytics__title" id={titleId}>
                        Built‑in Analytics
                    </h2>
                    <div className="analytics__description">
                        <p>
                            real‑time visibility, fewer blind spots, smarter decisions. <br/>
                            Approvals up, false declines down
                        </p>
                    </div>
                    <Button
                        className="analytics__button"
                        label={'See more'}
                        iconName={'arrow-right'}
                        href={'/analytics'}
                    />
                </div>
                <Image
                    className="analytics__image"
                    src="/src/assets/images/main/analytics/2.webp"
                    alt=""
                />
            </div>
        </section>
    )
}

export default Analytics