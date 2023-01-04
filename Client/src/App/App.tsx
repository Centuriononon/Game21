import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import Board from "./Components/Board/Board";
import "./Style/App.scss";

interface AppProps {}

const App: FC<AppProps> = () => {
    return (
        <BrowserRouter>
            <Board />
        </BrowserRouter>
    );
};

export default App;
