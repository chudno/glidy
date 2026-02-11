import "./Payment.scss";
import Button from "@/components/Button/index.js";
import {Image} from "minista";

const paymentItems = [
    {
        iconScr: "/src/assets/images/main/payment/1.svg",
    },
    {
        iconScr: "/src/assets/images/main/payment/2.svg",
    },
    {
        iconScr: "/src/assets/images/main/payment/3.svg",
    },
    {
        iconScr: "/src/assets/images/main/payment/4.svg",
    },
    {
        iconScr: "/src/assets/images/main/payment/5.svg",
    },
    {
        iconScr: "/src/assets/images/main/payment/6.svg",
    },
    {
        iconScr: "/src/assets/images/main/payment/7.svg",
    },
]

function Payment() {
    return (
        <section className="payment">
            <div className="container">
                <div className="payment__wrapper">
                    <Image
                        className="payment__image"
                        src={"/src/assets/images/main/payment/1.png"}
                        alt=""
                        format="webp"
                    />
                    <div className="payment__body">
                        <h2 className="payment__title">
                            Локальные способы оплаты
                            для глобальных клиентов
                        </h2>
                        <div className="payment__description">
                            <p>
                                Поддерживайте привычные методы оплаты в разных регионах без сложной интеграции.
                            </p>
                        </div>
                        <div className="payment__footer">
                            {
                                paymentItems.map((item, index) => {
                                    return (
                                        <div className="payment-card">
                                            <img className="payment-card__icon" src={item.iconScr} alt=""/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Payment;
