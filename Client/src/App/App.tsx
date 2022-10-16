import {FC} from 'react';
import StartMenu from '../Components/StartMenu/SartMenu';
import style from './App.module.scss';

interface AppProps {}

const App: FC<AppProps> = () => {
    return(
            <div className={style.App}>
                <StartMenu />
            </div>
    )
}

export default App;