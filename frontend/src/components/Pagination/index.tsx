import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import './styles.css';

function Pagination() {
    return (
        <div className="mecmovie-pagination-container">
            <div className="mecmovie-pagination-box">
                <button className="mecmovie-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="mecmovie-pagination-button" disabled={false} >
                    <Arrow className="mecmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;