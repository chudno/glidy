import './HeroAdvantages.scss'

const HeroAdvantages = (props) => {

    const {
        items,
        activeIndex
    } = props

    return (
        <ul className="hero__footer">
            {items.map((item, index) => (
                <li
                    key={item}
                    className={`hero__advantage ${
                        index === activeIndex ? 'is-active' : ''
                    }`}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}

export default HeroAdvantages;
