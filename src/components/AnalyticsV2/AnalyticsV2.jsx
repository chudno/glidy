import {Image} from "minista";
import './AnalyticsV2.scss'

const AnalyticsV2 = (props) => {
    const {
        cards,
        imgSrc
    } = props;

    const titleId = "analytics-title";

    return (
        <section className="container">
            <div className="bottom-section">
                <h2 className="visually-hidden" id={titleId}>
                    Built‑in Analytics
                </h2>
                <div className="analyticsV2">
                    <div className="analyticsV2__content">
                        {cards.map(({title, imgSrc, description}, index) => (
                            <div className="analyticsV2-card" key={index} >
                                <Image
                                    className="analyticsV2-card__img"
                                    src={imgSrc}
                                    alt={''}
                                    format="original"
                                />
                                <h3 className={'analyticsV2-card__title'}>
                                    {title}
                                </h3>
                                <div className={'analyticsV2-card__description'}>
                                    <p>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Image
                        className="analyticsV2__image"
                        src={imgSrc}
                        alt=""
                        format="original"
                    />
                </div>
            </div>
        </section>

    )
}

export default AnalyticsV2