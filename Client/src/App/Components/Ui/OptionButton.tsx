import ButtonProps from "../../Types/ButtonProps";
import { Link, useLocation } from "react-router-dom";
import style from "../../Style/Button.module.scss";

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const location = useLocation();

    return (
        <Link
            to={props.path}
            className={style.optionButton}
            id={location.pathname === "/" ? style.block : style.none}
        >
            {props.content}
        </Link>
    );
};

export default Button;
