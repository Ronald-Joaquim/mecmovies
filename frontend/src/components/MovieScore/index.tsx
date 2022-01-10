import MovieStars from "components/MovieStars";
import './styles.css';
function MovieScore() {

    const score = 3.7;
    const count = 14;

    return (
        <div className="mecmovie-score-container">
            <p className="mecmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="mecmovie-score-count">{count} avaliações</p>
        </div>
    )
}

export default MovieScore;