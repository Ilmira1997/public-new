import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Welcome = () => {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash);

    // Dispatch
    const AddCash = (cash) => {
        dispatch({ type: "ADD_CASH", payload: cash });
    }
    const GetCash = (cash) => {
        dispatch({ type: "GET_CASH", payload: cash });
    }
    return (
        <div>
            <h1>{cash}</h1>
            <div className='buttons' style={{ display: "flex", gap: "20px" }}>
                <button onClick={() => AddCash(Number(prompt("Введите сумму")))} style={{ backgroundColor: "blue", color: "white" }}>Положить деньги</button>
                <button onClick={() => GetCash(Number(prompt("Введите сумму")))} style={{ backgroundColor: "blue", color: "white" }}>Снять деньги</button>
            </div>

            <Link to="/page-one">
                <button style={{ backgroundColor: "blue", color: "white" }}>Перейти на другую страницу</button>
            </Link>
        </div>
    );
};
