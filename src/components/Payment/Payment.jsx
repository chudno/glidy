import './Payment.scss'
import Button from "@/components/Button/index.js";
import {Image} from "minista";

const cards = [
    {
        title: "Faster, More Reliable Processing",
        description: "Increase speed and stability with our all-in-one platform. Higher approval rates mean quicker payments, happier customers, and fewer abandoned carts.",
        imgSrc: "/src/assets/images/main/payment/2.svg",
    },
    {
        title: "Future-Ready Payments",
        description: "Unify every payment method in one system that adapts to your goals and real-time changes—so you’re ready for whatever comes next.",
        imgSrc: "/src/assets/images/main/payment/3.svg",
    },
    {
        title: "Customer Trust & Security",
        description: "Protect the journey with advanced fraud controls that stop threats in real time—so you can focus on building strong customer relationships.",
        imgSrc: "/src/assets/images/main/payment/4.svg",
    },
    {
        title: "Actionable Data & Insights",
        description: "See the full payment lifecycle at a glance. Spot trends and bottlenecks, find growth opportunities, and optimize strategy with clear, exportable reports.",
        imgSrc: "/src/assets/images/main/payment/5.svg",
    }
]

const Payment = () => {
    return (
        <section className="payment container">
            <Image
                className="payment__bg"
                src={'/src/assets/images/main/payment/1.svg'}
                alt=""
            />
            <div className="payment__content">
                <h2 className="payment__title">
                    All-in-One Payment <br/>
                    API — built to scale
                </h2>
                <div className="payment__description">
                    <p>
                        Ship faster and capture more revenue with a single, custom-fit <br/>
                        payments API. Glidy processes transactions securely and efficiently <br/>
                        to lift approvals, cut declines, and deliver a seamless checkout.
                    </p>
                </div>
                <Button
                    className={'payment__button'}
                    label="Contact us"
                    iconName={'arrow-right'}
                    extraAttrs={{'modal-button-open': ''}}
                />
            </div>
            {
                cards.map(({title, description, imgSrc}, index) => (
                    <div className="payment-card" key={index}>
                        <div className="payment-card__inner">
                            <Image
                                className="payment-card__image"
                                src={imgSrc}
                                alt={""}
                            />
                        </div>
                        <h3 className="payment-card__title">
                            { title }
                        </h3>
                        <div className="payment-card__description">
                            <p>
                                {description}
                            </p>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default Payment