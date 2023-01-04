import style from "../../Style/Board.module.scss";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import OptionButton from "../Ui/OptionButton";
import CreateGame from "../../Pages/CreateGame";

const Board: React.FC = () => {
    return (
        <div className={style.container}>
            <OptionButton path="/createGame" content="Create Game" />
            <Routes>
                <Route path="/createGame" element={<CreateGame />} />
            </Routes>
        </div>
    );
};

export default Board;
