import Button from "@/components/Button/index.js";
import {Image} from "minista";
import './Analytics.scss'

const Analytics = () => {
    const titleId = "analytics-title";

    return (
        <section className="container">
            <div className="bottom-section">
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
                            iconName={
                                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8H20M20 8L12.8222 15M20 8L12.8222 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            }
                            href={'/analytics'}
                        />
                    </div>
                    <Image
                        className="analytics__image"
                        src="/src/assets/images/main/analytics/2.webp"
                        alt=""
                        format="original"
                    />
                </div>
            </div>
        </section>
    )
}

export default Analytics