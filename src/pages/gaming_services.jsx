import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Gaming from "@/components/Gaming";

export const metadata = {
    title: 'Games & Services',
}

const cards = [
    {
        imgSrc: '/src/assets/images/games/why/1.webp',
        title: 'Fraud Protection',
        items: [
            'Protect your business with advanced fraud-detection technology built for gaming transactions. Monitor activity in real time and reduce chargebacks with intelligent security layers.'
        ],
    },
    {
        imgSrc: '/src/assets/images/games/why/2.webp',
        title: 'Fast Global Pay',
        items: [
            'Accept instant payments across multiple currencies with smart conversion. Ensure smooth, reliable processing for players anywhere in the world.'
        ],
    },
    {
        imgSrc: '/src/assets/images/games/why/3.webp',
        title: 'Easy API Integration',
        items: [
            'Integrate payment features in minutes using a clean and intuitive API. Launch faster with clear documentation and full support for every development stage.'
        ],
    }
]

const gamingCards = [
    {
        title: 'Popular Games Top-Up',
        description: 'Access a broad selection of in-demand online game titles with region-flexible pricing and commissions. Customize your settings, stay competitive, and instantly deliver top-ups through game vouchers. Enable your users to recharge, unlock content, and elevate their gaming experience effortlessly.',
        imgSrc: '/src/assets/images/games/games/1.webp',
        items: [
            '/src/assets/images/games/items/1.svg',
            '/src/assets/images/games/items/2.svg',
            '/src/assets/images/games/items/3.svg',
            '/src/assets/images/games/items/4.svg',
            '/src/assets/images/games/items/5.svg',
            '/src/assets/images/games/items/6.svg',
            '/src/assets/images/games/items/7.svg',
        ]
    },
    {
        title: 'Steam Wallet Recharges',
        description: 'Take complete control with adjustable commission rates that fit your business model. Enjoy fast integration, real-time analytics, and an intuitive dashboard. Create custom promo codes to boost user retention and drive recurring sales.',
        imgSrc: '/src/assets/images/games/games/2.webp',
    },
    {
        title: 'Digital Service Top-Ups',
        description: 'Offer instant top-ups for leading global digital platforms. Customize commission rates by region, streamline management, and automate delivery. Our voucher-based integration ensures reliable recharges, smooth user flows, and increased monetization opportunities.',
        imgSrc: '/src/assets/images/games/games/3.webp',
        items: [
            '/src/assets/images/games/items/8.svg',
            '/src/assets/images/games/items/9.svg',
            '/src/assets/images/games/items/10.svg',
            '/src/assets/images/games/items/11.svg',
            '/src/assets/images/games/items/12.svg',
            '/src/assets/images/games/items/13.svg',
            '/src/assets/images/games/items/14.svg',
            '/src/assets/images/games/items/15.svg',
            '/src/assets/images/games/items/16.svg',
        ]
    }
]

export default function () {
    return (
        <>
            <Hero
                title={'Unlock the Full Potential of Your Gaming Traffic'}
                subtitle={'Monetize your gaming audience with a flexible, high-performance platform. Deliver top-tier games and digital services while staying in complete control of your revenue and growth.'}
                imgSrc={'/src/assets/images/games/3.webp'}/>
            <Why cards={cards}/>
            <Gaming cards={gamingCards} />
        </>
    )
}
