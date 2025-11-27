import Hero from "@/components/Hero/index.js";
import Security from "@/components/Secturity/index.js";
import Possibilities from "@/components/Possibilities/index.js";
import AnalyticsV2 from "@/components/AnalyticsV2/index.js";

export const metadata = {
    title: 'Payment Solutions',
}

const cards = [
    {
        imgSrc: '/src/assets/images/payment/cards/3.svg',
        title: 'One platform instead of many tools',
        description: 'Deliver a friction-free checkout across all devices with flows tailored to your brand. Reduce cart abandonment, speed up transactions, and give customers an easy way to pay.'
    },
    {
        imgSrc: '/src/assets/images/payment/cards/4.svg',
        title: 'Global reach with risk management',
        description: 'Deliver a friction-free checkout across all devices with flows tailored to your brand. Reduce cart abandonment, speed up transactions, and give customers an easy way to pay.'
    },
    {
        imgSrc: '/src/assets/images/payment/cards/5.svg',
        title: 'Full transparency and control',
        description: 'Deliver a friction-free checkout across all devices with flows tailored to your brand. Reduce cart abandonment, speed up transactions, and give customers an easy way to pay.'
    },
    {
        imgSrc: '/src/assets/images/payment/cards/6.svg',
        title: 'Full transparency and control',
        description: 'Deliver a friction-free checkout across all devices with flows tailored to your brand. Reduce cart abandonment, speed up transactions, and give customers an easy way to pay.'
    }
]

const analyticsCards = [
    {
        imgSrc: '/src/assets/images/payment/analytics/2.svg',
        title: 'Flexible Reporting ',
        description: 'Access, analyze, and share your payment data whenever you need it. Custom reporting empowers faster, smarter decisions to keep your business moving forward.'
    },
    {
        imgSrc: '/src/assets/images/payment/analytics/3.svg',
        title: 'Insights That Drive Growth',
        description: 'See your payments clearly with real-time analytics. Spot decline patterns, boost conversions, and optimize your revenue streams.'
    }
]

export default function () {
    return (
        <>
            <Hero
                title={'More payment options for your customers'}
                subtitle={'With glidy you can accept all major debit and credit cards, popular digital wallets like Apple Pay and Google Pay, and leading local payment methods—giving your customers the choice they want and a smoother checkout experience.'}
                imgSrc={'/src/assets/images/payment/2.webp'}
            />
            <Security />
            <Possibilities mode={'dark'} cards={cards}/>
            <AnalyticsV2 cards={analyticsCards} imgSrc={'/src/assets/images/payment/analytics/3.webp'} />
        </>
    )
}
