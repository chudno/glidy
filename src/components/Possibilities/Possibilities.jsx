import classNames from "classnames";
import {Image} from "minista";
import './Possibilities.scss'

const Possibilities = (props) => {
    const {
        mode,
        cards
    } = props;

    return (
        <section className={classNames('possibilities container',
            {
                'possibilities--dark': mode === 'dark',
            })}>
            {cards.map(({title, description, imgSrc}, index) => (
                <div className="possibilities-card" key={index}>
                    <div className="possibilities-card__header">
                        <Image className="possibilities-card__circle" src="/src/assets/images/payment/1.svg" />
                        <Image className="possibilities-card__image" src={imgSrc} alt=""/>
                    </div>
                    <div className="possibilities-card__body">
                        <h3 className="possibilities-card__title">
                            {title}
                        </h3>
                        <div className={'possibilities-card__description'}>
                            <p>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
export default Possibilities