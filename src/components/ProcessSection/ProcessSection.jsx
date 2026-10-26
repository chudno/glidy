import ProcessStep from "@/components/ProcessSection/ProcessStep/ProcessStep.jsx";
import ControlStep from "@/components/ProcessSection/ControlStep/ControlStep.jsx";
import "./ProcessSection.scss";
import IntegrationStep from "@/components/ProcessSection/IntegrationStep/IntegrationStep.jsx";

function ProcessSection({
                            title,
                            subtitle,
                            items,
                            columns = 3,
                            numbered = false,
                        }) {
    return (
        <section className="process-section container">
            <header className="process-section__header">
                <h2 className="process-section__title">{title}</h2>

                {subtitle && (
                    <p className="process-section__subtitle">
                        {subtitle}
                    </p>
                )}
            </header>

            <div className={`process-section__grid process-section__grid--${columns}`}>
                {items.map((item, index) => {
                    if (item.type === "process") {
                        return (
                            <ProcessStep
                                key={index}
                                index={index}
                                numbered={numbered}
                                {...item}
                            />
                        );
                    }

                    if (item.type === "control") {
                        return (
                            <ControlStep
                                key={index}
                                {...item}
                            />
                        );
                    }

                    if (item.type === "integration") {
                        return (
                            <IntegrationStep
                                key={index}
                                {...item}
                            />
                        );
                    }

                    return null;
                })}
            </div>
        </section>
    );
}

export default ProcessSection;
