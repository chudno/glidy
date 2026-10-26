import "./Infrastructure.scss";
import {Image} from "minista";
import classNames from "classnames";
import ControlStep from "@/components/ProcessSection/ControlStep/ControlStep.jsx";

const items = [
    {
        type: "control",
        iconSrc: "/src/assets/images/infrastructure/items/1.svg",
        title: "Лимиты, правила и сценарии обработки"
    },
    {
        type: "control",
        iconSrc: "/src/assets/images/infrastructure/items/2.svg",
        title: "Контроль рисков и аномальных операций"
    },
    {
        type: "control",
        iconSrc: "/src/assets/images/infrastructure/items/3.svg",
        title: "Статусы транзакций и история операций"
    }
]

const cards = [
    {
        iconScr: "/src/assets/images/infrastructure/cards/1.svg",
        title: "Аномальная транзакция",
        description: "Операция отклоняется от заданных платежных параметров",
        buttons: ["Подтвердить", "Заблокировать"],
        money: "45 380 ₽"
    },
    {
        iconScr: "/src/assets/images/infrastructure/cards/2.svg",
        title: "Операция вне сценария",
        description: "Попытка проведения транзакции за пределами заданных правил",
        money: "156 200 ₽"
    },
    {
        iconScr: "/src/assets/images/infrastructure/cards/3.svg",
        title: "Превышен лимит операции",
        description: "Сумма операции превышает установленный лимит",
        limit: "Лимит: 120 000 ₽",
        money: "163 710 ₽"
    }
]

function Infrastructure() {
    return (
        <section className="infrastructure">
            <div className="infrastructure__container container">
                <div className="infrastructure__wrapper">
                    <Image
                        className="infrastructure__image"
                        src={"/src/assets/images/infrastructure/1.png"}
                        alt=""
                        format="webp"
                    />
                    <div className="infrastructure__body">

                        <div className="infrastructure__content">
                            <h2 className="infrastructure__title">
                                Полный контроль платёжной инфраструктуры
                            </h2>
                            <div className="infrastructure__description">
                                <p>
                                    Управляйте всеми финансовыми операциями платформы из одного интерфейса. Контролируйте транзакции, статусы и платёжные потоки на каждом этапе — от инициации до завершения.
                                </p>
                            </div>
                        </div>

                        <div className="infrastructure__cards">
                            {cards.map((card, i) => (
                                <div key={i} className="infrastructure-card">
                                    <div
                                        className={classNames(
                                            "infrastructure-card__icon-wrapper",
                                            `infrastructure-card__icon-wrapper--${i + 1}`
                                        )}
                                    >
                                        <img
                                            className="infrastructure-card__icon"
                                            src={card.iconScr}
                                            alt=""
                                        />
                                    </div>
                                    <div className="infrastructure-card__body">
                                        <h4 className="infrastructure-card__title">
                                            {card.title}
                                        </h4>
                                        <div className="infrastructure-card__description">
                                            <p>
                                                {card.description}
                                            </p>
                                        </div>
                                        {card.buttons && (
                                            <div className="infrastructure-card__buttons">
                                                    {card.buttons.map((button, i) => (
                                                        <button className="infrastructure-card__button" key={i}>
                                                            {button}
                                                        </button>
                                                    ))}
                                            </div>
                                        )}
                                        <div className="infrastructure-card__money">
                                            {card.money}
                                        </div>
                                        { card.limit && (
                                            <div className="infrastructure-card__limit">
                                                <p>
                                                    {card.limit}
                                                </p>
                                            </div>
                                        )}

                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <div className="infrastructure__footer">
                    {
                        items.map((item, index) => {
                            return (
                                <ControlStep title={item.title} iconSrc={item.iconSrc} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Infrastructure;
