import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection/ProcessSection.jsx";
import PlatformValueSection from "@/components/PlatformValueSection/PlatformValueSection.jsx";
import Bunner from "@/components/Banner/Banner.jsx";
import Infrastructure from "@/components/Infrastructure/Infrastructure.jsx";

export const metadata = {
    title: 'Global Payment Platform : Services for Gaming & Digital Products',
}

const heroItems = [
    'Поддержка 24/7',
    'Гарантия безопасности',
    'Прозрачные комиссии',
]

const processSteps = [
    {
        type: "process",
        image: "/src//assets/images/about/cards/1.webp",
        title: "Подключение через API или готовые модули",
    },
    {
        type: "process",
        image: "/src/assets/images/about/cards/2.webp",
        title: "Приём и обработка платежей внутри платформы",
    },
    {
        type: "process",
        image: "/src//assets/images/about/cards/3.webp",
        title: "Контроль транзакций и рисков в реальном времени",
    },
    {
        type: "process",
        image: "/src//assets/images/about/cards/4.webp",
        title: "Отчётность и аналитика в одном интерфейсе",
    },
]

const platformValues = [
    {
        iconSrc: "/src/assets/icons/about/1.svg",
        title: "Поддержка роста оборота и нагрузки"
    },
    {
        iconSrc: "/src/assets/icons/about/2.svg",
        title: "Запуск новых платёжных сценариев"
    },
    {
        iconSrc: "/src/assets/icons/about/3.svg",
        title: "Гибкое управление потоками средств"
    },
    {
        iconSrc: "/src/assets/icons/about/4.svg",
        title: "Готовность к масштабированию и новым рынкам"
    },
]

export default function () {
    return (
        <>
            <Hero
                title={'Единая платформа для приема и управления платежами'}
                subtitle={'Company помогает платформам и маркетплейсам принимать платежи, контролировать транзакции и управлять финансовыми потоками в одном интерфейсе.'}
                buttonText={'Подключить платформу'}
                imgSrc={'/src/assets/images/about/1.webp'}
                imgMobileSrc={'/src/assets/images/about/1_mobile.webp'}
                items={heroItems}
                activeIndex={2}
            />

            <ProcessSection
                title={"Как работает платформа Company"}
                subtitle={"Единый процесс работы с платежами — от подключения до аналитики"}
                items={processSteps}
                columns={4}
                numbered
            />

            <Infrastructure />

            <PlatformValueSection
                image="/src/assets/images/about/platform.webp"
                title="Эксплуатация и масштабирование платформы"
                description={"После запуска платёжной инфраструктуры Company платформа готова к росту объёмов, усложнению сценариев и расширению бизнеса — без изменений в базовой логике системы."}
                items={platformValues}
                bigMarginTop
                reverse
            />

            <Bunner
                title={"Готовы подключить платёжную инфраструктуру?"}
                description="Свяжитесь с нами, чтобы обсудить интеграцию Company в вашу платформу."
                buttonText={"Подключить платформу"}
            />
        </>
    )
}
