import OptionButton from '../Buttons/OptionButton';
import style from './StartMenu.module.scss';


const StartMenu = () => {
  return (
    <div className={style.container}>
      <OptionButton content="Game" href="/Game"/>
      <OptionButton content="Settings" href="/Settings"/>
   </div>
  )
}

export default StartMenu;