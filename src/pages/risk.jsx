import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection/ProcessSection.jsx";
import PlatformValueSection from "@/components/PlatformValueSection/PlatformValueSection.jsx";
import Bunner from "@/components/Banner/Banner.jsx";

export const metadata = {
    title: 'Global Payment Platform : Services for Gaming & Digital Products',
}

const heroItems = [
    'Правила + ML',
    'Прозрачная логика решений',
    'Контроль в реальном времени',
]

const processSteps = [
    {
        type: "process",
        image: "/src//assets/images/risk/cards/1.webp",
        title: "Анализируйте подозрительные паттерны",
        description: "Используйте поведенческую аналитику и связи между транзакциями, пользователями и атрибутами, чтобы выявлять аномалии и потенциально рискованные операции."
    },
    {
        type: "process",
        image: "/src/assets/images/risk/cards/2.webp",
        title: "Настраивайте допустимый уровень риска",
        description: "Определяйте, какие операции разрешать автоматически, какие — отправлять на проверку, а какие — блокировать, в зависимости от контекста и бизнес-сценария."
    },
    {
        type: "process",
        image: "/src//assets/images/risk/cards/3.webp",
        title: "Оптимизируйте решения и снижайте потери",
        description: "Тестируйте различные стратегии обработки операций, сравнивайте результаты и корректируйте правила, снижая уровень отказов и чарджбеков без ущерба для конверсии."
    }
]

const controlSteps = [
    {
        type: "control",
        iconSrc: "/src/assets/icons/check.svg",
        title: "Лимиты частоты транзакций",
        description: "Ограничивайте число операций за заданный период."
    },
    {
        type: "control",
        iconSrc: "/src/assets/icons/check.svg",
        title: "Анализ консистентности данных",
        description: "Выявляйте несоответствия в данных и поведении клиентов."
    },
    {
        type: "control",
        iconSrc: "/src/assets/icons/check.svg",
        title: "Списки разрешений и блокировок",
        description: "Разрешайте или блокируйте операции по спискам клиентов."
    },

    {
        type: "control",
        iconSrc: "/src/assets/icons/check.svg",
        title: "3D Secure аутентификация",
        description: "Направляйте рискованные операции на дополнительную проверку."
    },
    {
        type: "control",
        iconSrc: "/src/assets/icons/check.svg",
        title: "Автоматическое выявление риска (ML)",
        description: "Система сама оценивает риск на основе машинного обучения."
    },
    {
        type: "control",
        iconSrc: "/src/assets/icons/check.svg",
        title: "Профиль покупателя",
        description: "Идентифицируйте клиентов на разных устройствах и сессиях.."
    },

    {
        type: "control",
        iconSrc: "/src/assets/icons/check.svg",
        title: "Гибкие правила риска",
        description: "Настраивайте собственные сценарии контроля операций."
    },
    {
        type: "control",
        iconSrc: "/src/assets/icons/check.svg",
        title: "Ручное управление транзакциями",
        description: "Одобряйте или отклоняйте отдельные операции вручную."
    },
    {
        type: "control",
        iconSrc: "/src/assets/icons/check.svg",
        title: "A/B-тесты стратегий риска",
        description: "Сравнивайте настройки и находите оптимальный баланс риска и дохода."
    },
];

const platformValues = [
    {
        iconSrc: "/src/assets/icons/risk/1.svg",
        title: "Онбординг и KYC",
        description: "Проверка, допуск, источники данных"
    },
    {
        iconSrc: "/src/assets/icons/risk/2.svg",
        title: "Транзакции",
        description: "Лимиты, правила, статусы, сценарии"
    },
    {
        iconSrc: "/src/assets/icons/risk/3.svg",
        title: "Поведение",
        description: "Аномалии, частота, отклонения от профиля"
    },
    {
        iconSrc: "/src/assets/icons/risk/4.svg",
        title: "Массовые операции",
        description: "Батчи, повторяемость, всплески"
    },
]

export default function () {
    return (
        <>
            <Hero
                title={'Управляйте риском, не теряя оборот'}
                subtitle={'Единая система для правил, профилей риска и контроля транзакций в реальном времени — на уровне платформы.'}
                buttonText={'Обсудить решение'}
                imgSrc={'/src/assets/images/risk/1.webp'}
                imgMobileSrc={'/src/assets/images/risk/1_mobile.webp'}
                items={heroItems}
                activeIndex={2}
            />

            <ProcessSection
                title={"Как формируется решение по риску"}
                subtitle={"Платформа анализирует финансовый поток, выявляет повторяющиеся паттерны и принимает решения на основе контекста операций, а не отдельных действий."}
                items={processSteps}
            />

            <ProcessSection
                title={"Выберите нужные инструменты"}
                subtitle={"Повышайте конверсию и снижайте фрод с помощью аналитики и машинного обучения."}
                items={controlSteps}
            />

            <PlatformValueSection
                image="/src/assets/images/risk/platform.webp"
                title="Покройте риски на каждом этапе платёжного процесса"
                items={platformValues}
            />


            <Bunner
                title={"Хотите настроить риск-менеджмент под вашу платформу?"}
                description="Покажем сценарии и предложим стратегию контроля под вашу модель."
                buttonText={"Связаться с нами"}
            />
        </>
    )
}
