
import './Why.scss'
import {Image} from "minista";
import classNames from "classnames";



const Why = (props) => {
    const {
        title,
        cards
    } = props
    const titleId= 'why-title'

    return (
        <section className="why container" aria-labelledby={titleId}>
            <h2 className={classNames("why__title", {
                'visually-hidden': !title
            })} id={titleId}>
                {title}
            </h2>
            <div className={classNames("why__grid", {
                    'why__grid--centered': !title
            })}>
                {
                    cards.map(({imgSrc, title,  items}, index) => {
                        return (
                            <div className="card" key={index}>
                                <div className="card__header">
                                    <Image className="card__circle" src="/src/assets/images/main/why/circle.svg" />
                                    <Image className="card__image" src={imgSrc} alt=""/>
                                </div>
                                <div className="card__body">
                                    <h3 className="card__title">
                                        {title}
                                    </h3>
                                    <ul className="card__list">
                                        {
                                            items.map((item, index) => {
                                                return (
                                                    <li className="card__item" key={index}>
                                                        {item}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Why