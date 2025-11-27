import {Image} from "minista";
import './AnalyticsV2.scss'

const AnalyticsV2 = (props) => {
    const {
        cards,
        imgSrc
    } = props;

    const titleId = "analytics-title";

    return (
        <section className="bottom-section container">
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
                />
            </div>
        </section>
    )
}

export default AnalyticsV2