import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection/ProcessSection.jsx";
import PlatformValueSection from "@/components/PlatformValueSection/PlatformValueSection.jsx";
import Banner from "@/components/Banner/Banner.jsx";
import Scenarios from "@/components/Scenarios/Scenarios.jsx";
import Payment from "@/components/Payment/Payment.jsx";

export const metadata = {
    title: 'Global Payment Platform : Services for Gaming & Digital Products',
}

const heroItems = [
    'Поддержка 24/7',
    'Безопасность',
    'Прозрачная логика работы',
]

const processSteps = [
    {
        type: "process",
        image: "/src/assets/images/main/2.webp",
        title: "Онлайн-продажи",
        description: "Принимайте платежи на сайте и в приложении с поддержкой локальных методов оплаты."
    },
    {
        type: "process",
        image: "/src/assets/images/main/3.webp",
        title: "Маркетплейсы и платформы",
        description: "Управляйте потоками средств между пользователями, продавцами и сервисами."
    },
    {
        type: "process",
        image: "/src/assets/images/main/4.webp",
        title: "Подписки и регулярные платежи",
        description: "Автоматизируйте списания и контролируйте статусы операций."
    },
];

const controlSteps = [
    {
        type: "control",
        iconSrc: "/src/assets/icons/check.svg",
        title: "Статусы и жизненный цикл операций",
    },
    {
        type: "control",
        iconSrc: "/src/assets/icons/check.svg",
        title: "Лимиты, правила и сценарии обработки",
    },
    {
        type: "control",
        iconSrc: "/src/assets/icons/check.svg",
        title: "Подготовка к масштабированию",
    },
];

const integrationSteps = [
    {
        type: "integration",
        iconSrc: "/src/assets/images/integration/1.svg",
        title: "Виджет",
    },
    {
        type: "integration",
        iconSrc: "/src/assets/images/integration/2.svg",
        title: "Компоненты",
    },
    {
        type: "integration",
        iconSrc: "/src/assets/images/integration/3.svg",
        title: "API",
    },
    {
        type: "integration",
        iconSrc: "/src/assets/images/integration/4.svg",
        title: "Готовые интеграции",
    },
];

const platformValues = [
    {
        iconSrc: "/src/assets/icons/main/1.svg",
        title: "Приём и обработка платежей"
    },
    {
        iconSrc: "/src/assets/icons/main/2.svg",
        title: "Контроль транзакций"
    },
    {
        iconSrc: "/src/assets/icons/main/3.svg",
        title: "Управление рисками"
    },
    {
        iconSrc: "/src/assets/icons/main/4.svg",
        title: "Аналитика и отчётность"
    },
]

export default function () {
    return (
        <>
            <Hero
                title={'Платёжная платформа для роста онлайн-бизнеса'}
                subtitle={'Приём платежей, управление финансовыми потоками и рисками — в одном решении для масштабируемого бизнеса.'}
                buttonText={'Подключить платформу'}
                imgSrc={'/src/assets/images/main/1.webp'}
                imgMobileSrc={'/src/assets/images/main/1_mobile.webp'}
                items={heroItems}
                activeIndex={1}
            />

            <ProcessSection
                title={"Как клиенты используют Company"}
                items={processSteps}
            />

            <Scenarios />

            <ProcessSection
                title={"Контроль операций и рисков в реальном времени"}
                subtitle={"Company помогает не только принимать платежи, но и контролировать их качество: от статусов транзакций до выявления аномалий и подозрительных сценариев."}
                items={controlSteps}
            />

            <Payment />

            <ProcessSection
                title={"Интеграция под ваш продукт и команду"}
                subtitle={"Выберите подходящий способ подключения — от готовых решений до API."}
                items={integrationSteps}
                columns={4}
            />

            <PlatformValueSection
                image="/src/assets/images/main/platform.webp"
                title="Единая платформа для платежей и управления рисками"
                items={platformValues}
                buttonText={"Управление рисками"}
                bigMarginTop
            />

            <Banner
                title={"Готовы обсудить платёжную инфраструктуру для вашего продукта?"}
                buttonText={"Написать нам"}
            />
        </>
    )
}
