import ButtonProps from "../../Types/ButtonProps";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "../../Style/Button.module.scss";

const LinkButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    const [visibility, setVisibility] = useState(style.block);

    const location = useLocation();

    const checkPath = () => {
        location.pathname === "/"
            ? setVisibility(style.block)
            : setVisibility(style.none);
    };

    useEffect(() => {
        checkPath();
    }, [location.pathname]);

    return (
        <button className={style.linkButton} id={visibility}>
            props.content
            <Link
                to={props.path}
                onClick={checkPath}
                className={style.joinButton}
            >
                Join
            </Link>
        </button>
    );
};

export default LinkButton;
