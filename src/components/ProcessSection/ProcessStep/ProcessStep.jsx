import './ProcessStep.scss'

function ProcessStep({
                         image,
                         title,
                         description,
                         index,
                         numbered,
                     }) {
    return (
        <div className="process-step">
            {numbered && (
                <span className="process-step__number">
                    {index + 1}
                </span>
            )}

            {image && (
                <img
                    className="process-step__image"
                    src={image}
                    alt={title}
                />
            )}

            <div className="process-step__content">
                <h3 className="process-step__title">{title}</h3>

                {description && (
                    <p className="process-step__description">
                        {description}
                    </p>
                )}
            </div>

        </div>
    );
}

export default ProcessStep;
