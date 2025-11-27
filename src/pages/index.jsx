import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Payment from "@/components/Payment";
import Analytics from "@/components/Analytics";
import Gaming from "@/components/Gaming";

export const metadata = {
    title: 'Global Payment Platform : Services for Gaming & Digital Products',
}

const cards = [
    {
        imgSrc: '/src/assets/images/main/why/1.webp',
        title: 'One platform instead of many tools',
        items: [
            'Cards, digital wallets and local payment methods from a single place',
            'Smart routing and 3DS 2.0 for secure processing',
            'End‑to‑end analytics across the entire payment lifecycle.'
        ],
    },
    {
        imgSrc: '/src/assets/images/main/why/2.webp',
        title: 'Global reach with risk management',
        items: [
            'Real‑time risk engine flags and blocks suspicious activity.',
            "Fewer false declines while keeping conversion high."
        ],
    },
    {
        imgSrc: '/src/assets/images/main/why/3.webp',
        title: 'Full transparency and control',
        items: [
            'Dashboards, reports and webhooks for faster decisions.',
            'Decline diagnostics and approval‑rate recommendations.'
        ],
    }
]
const gamingCards = [
    {
        title: 'Best-Selling Game Vouchers',
        description: 'Offer the game vouchers players truly want — from Genshin Impact credits to V-Bucks and Valorant Points. Increase engagement with products users instantly recognize and trust.',
        imgSrc: '/src/assets/images/main/gaming/1.webp',
    },
    {
        title: 'Instant Steam Wallet Top-Ups',
        description: 'Fast, secure, and seamless Steam Wallet recharges. Give your users more purchasing  freedom and keep them connected to the world’s largest PC gaming marketplace.',
        imgSrc: '/src/assets/images/main/gaming/2.webp',
    },
    {
        title: 'Top-Ups for Digital Platforms',
        description: 'Enable instant top-ups for a wide range of digital platforms — subscriptions, media services, productivity tools, and more. Transparent delivery and reliable processing every time.',
        imgSrc: '/src/assets/images/main/gaming/3.webp',
    }
]

export default function () {
    return (
        <>
            <Hero
                title={'Grow revenue on every payment'}
                subtitle={'Connect a single payment platform and extract more \n' +
                'value from every transaction: higher approvals, fewer declines, more repeat purchases.'}
                imgSrc={'/src/assets/images/main/2.webp'}/>
            <Why title={'Why Glidy'} cards={cards}/>
            <Payment />
            <Analytics />
            <Gaming title={'Games & Services'} cards={gamingCards}/>
        </>
    )
}
