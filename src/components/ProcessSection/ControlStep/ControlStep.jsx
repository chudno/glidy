import "./ControlStep.scss";
import {Image} from "minista";

function ControlStep({ iconSrc, title, description }) {
    return (
        <div className="control-step">

            <Image
                className="control-step__icon"
                src={iconSrc}
                alt=""
                format="original"
            />

            <h3 className="control-step__title">
                {title}
            </h3>

            {description && (
                <p className="control-step__description">
                    {description}
                </p>
            )}
        </div>
    );
}

export default ControlStep;
