
import './Security.scss'
import {Image} from "minista";

const cards = [
    {
        title: 'Unlock Modern Acquiring',
        description: 'Process payments faster, smarter, and more securely with our next-gen acquiring technology. Get global card acceptance, seamless wallet integration, and reliable local payment support—all in one solution.',
        imgSrc: '/src/assets/images/payment/cards/1.svg',
    },
    {
        title: 'Smarter Fraud Prevention',
        description: 'Protect your business with AI-driven fraud detection built for today’s payments. Every transaction is monitored in real time, blocking suspicious activity instantly while reducing false declines to keep conversions high.',
        imgSrc: '/src/assets/images/payment/cards/2.svg',
    }
]

const Security = () => {

    const titleId = 'security-title';

    return (
        <section className={'security'} aria-labelledby={titleId}>
            <h2 className={'visually-hidden'} id={titleId}>
                Security
            </h2>
            <div className={'security__content container'}>
                {
                    cards.map(({title, description, imgSrc}) => {
                        return (
                            <div className={'security-card'}>
                                <Image
                                    className={'security-card__image'}
                                    src={imgSrc}
                                    alt={''}
                                />
                                <div className={'security-card__body'}>
                                    <h3 className={'security-card__title'}>
                                        {title}
                                    </h3>
                                    <div className={'security-card__description'}>
                                        <p>
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Security;