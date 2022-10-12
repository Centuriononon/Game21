import {FC} from 'react';
import style from './App.module.scss';

interface AppProps {}

const App: FC<AppProps> = () => {
    return <h1 className={style.hello}>
        Hello World!
    </h1>
}

export default App;