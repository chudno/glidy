import "./IntegrationStep.scss";
import {Image} from "minista";

function IntegrationStep({ iconSrc, title, description }) {
    return (
        <div className="IntegrationStep">

            <Image
                className="IntegrationStep__icon"
                src={iconSrc}
                alt=""
                format="original"
            />

            <h3 className="IntegrationStep__title">
                {title}
            </h3>

            {description && (
                <p className="IntegrationStep__description">
                    {description}
                </p>
            )}
        </div>
    );
}

export default IntegrationStep;
