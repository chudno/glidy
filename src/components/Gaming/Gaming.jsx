import './Gaming.scss'
import {Image} from "minista";
import classNames from "classnames";

const Gaming = (props) => {
    const  {
        title,
        cards
    } = props

    const titleId = 'gaming-title'

    return (
        <section className={classNames("gaming container", {
            'gaming--mt-92': !title
        })}>
            <h2 className={classNames("gaming__title", {
                'visually-hidden': !title
            })} id={titleId}>
                {title}
            </h2>
            <div className="gaming__content">
                {
                    cards.map(({title, description, imgSrc, items = []}, index) => {
                        return (
                            <div className={classNames("gaming-card", {
                                'gaming-card--reverse': index === 1
                            })} key={index}>
                                <div className={'gaming-card__content'}>
                                    <h3 className={'gaming-card__title'}>{title}
                                        {title}
                                    </h3>
                                    <div className="gaming-card__description">
                                        <p>
                                            {description}
                                        </p>
                                    </div>
                                    <div className={classNames('gaming-card__items',
                                        {
                                            'visually-hidden': items.length === 0
                                        })}>
                                        {
                                            items.map((itemSrc, index) => {
                                                return (
                                                    <div className={'gaming-card__item'} key={index}>
                                                        <Image className={'gaming-card__item-image'} src={itemSrc} alt={''} format="original"/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <Image
                                    className={'gaming-card__image'}
                                    src={imgSrc}
                                    alt=""
                                    format="original"
                                />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Gaming