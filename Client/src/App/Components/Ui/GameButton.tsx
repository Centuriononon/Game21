import style from "../../Style/GameButton.module.scss";
import ButtonProps from "../../Types/ButtonProps";

const GameButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button className={style.gameButton} id={props.id} onClick={props.fn}>
            {props.content}
        </button>
    );
};

export default GameButton;
