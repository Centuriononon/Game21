import style from './OptionButton.module.scss';
import { Link } from "react-router-dom";

interface OptionButtonProps {
    content: string,
    href: string,
}

const OptionButton: React.FC<OptionButtonProps> = (ButtonProps: OptionButtonProps ) => {
  return (
    <a href={ButtonProps.href} className={style.link}>
      <button className={style.button}>{ButtonProps.content}</button>
    </a>
  )
}

export default OptionButton;