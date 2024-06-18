import { useSelector } from 'react-redux';

const PageOne = () => {
    const cash = useSelector(state => state.cash);
    return (
        <div>
            <h1>{cash}</h1>
        </div>
    );
};

export default PageOne;