import classNames from "classnames";
import {Image} from "minista";
import './Possibilities.scss'

const Possibilities = (props) => {
    const {
        mode,
        cards
    } = props;

    return (
        <section>
            <div className={'container'}>
                <div className={classNames('possibilities ',
                    {
                        'possibilities--dark': mode === 'dark',
                    })}>
                    {cards.map(({title, description, imgSrc}, index) => (
                        <div className="possibilities-card" key={index}>
                            <div className="possibilities-card__header">
                                <Image className="possibilities-card__circle" src="/src/assets/images/payment/1.svg" format="original"/>
                                <Image className="possibilities-card__image" src={imgSrc} alt="" format="original"/>
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
                </div>
            </div>
        </section>

    )
}
export default Possibilities