import Hero from "@/components/Hero/index.js";
import Possibilities from "@/components/Possibilities/index.js";
import AnalyticsV2 from "@/components/AnalyticsV2/index.js";

export const metadata = {
    title: 'Analytics',
}

const cards = [
    {
        imgSrc: '/src/assets/images/analytics/cards/1.svg',
        title: 'Smarter Insights with Built-In Analytics',
        description: 'Understand how customers interact with your platform through real-time analytics. Monitor trends, track key metrics, and optimize every stage of the payment journey instantly.'
    },
    {
        imgSrc: '/src/assets/images/analytics/cards/2.svg',
        title: 'Fast, Flexible API Integration',
        description: 'Seamlessly connect your business with our developer-first API. Get started quickly with clear documentation, customizable features, and complete control over your payment flow—scalable from startups to global enterprises.'
    },
    {
        imgSrc: '/src/assets/images/analytics/cards/3.svg',
        title: 'Reach Clients in 130+ Countries',
        description: 'Expand your audience with global reach. Our infrastructure supports payments in over 130 countries, enabling you to enter new markets, increase conversions, and connect with customers anywhere.'
    },
    {
        imgSrc: '/src/assets/images/analytics/cards/4.svg',
        title: 'Built-In Fraud Protection',
        description: 'Keep your business secure with advanced fraud detection and live monitoring. Every transaction is verified in real time, reducing risk while safeguarding your revenue and customer trust.'
    }
]

const analyticsCards = [
    {
        imgSrc: '/src/assets/images/analytics/analytics/1.svg',
        title: 'Clear, On-Demand Reporting ',
        description: 'Access and share your payment data anytime. Generate reports instantly to track trends, monitor KPIs, and align teams—helping you make faster, smarter decisions that keep your strategy sharp.'
    },
    {
        imgSrc: '/src/assets/images/analytics/analytics/2.svg',
        title: 'Boost Growth with Smarter Payment Data',
        description: 'Turn raw payment data into powerful insights. Identify spending behaviors, spot conversion blockers, and detect early fraud signals—all with complete, real-time visibility.'
    }
]

export default function () {
    return (
        <>
            <Hero
                title={'Smarter Payments with Real-Time Data'}
                subtitle={'Stay ahead with live visibility into your payments. Track activity, uncover trends, and make faster, data-driven decisions to maximize growth and revenue.'}
                imgSrc={'/src/assets/images/analytics/2.webp'}
            />
            <Possibilities cards={cards}/>
            <AnalyticsV2 cards={analyticsCards} imgSrc={'/src/assets/images/analytics/analytics/3.webp'} />
        </>
    )
}
