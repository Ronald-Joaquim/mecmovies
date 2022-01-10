import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="cointainer">
                <div className="mecmovies-nav-content">
                    <h1>MECmovies</h1>
                    <a href="https://github.com/Ronald-Joaquim">
                        <div className="mecmovies-contact-container">
                            <GithubIcon />
                            <p className="mecmovies-contact-link">/Ronald-Joaquim</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;