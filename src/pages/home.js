import styles from './home.module.css';
import Nota from '../components/Lottie/notaAnimation';
import TypeWriter from '../components/TypeWriter/TypeWriter';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div className={styles.content}>
            <div className={styles.svg}>
                <Nota/>
            </div>
            <div className={styles.elements}>
                <h1>Seja Bem vindo!</h1>
                <span><TypeWriter text="Para começar é só clicar no botão abaixo"/></span>
                <Link to="/calcular">Calcular média</Link>
            </div>
            
        </div>
    );
}

export default Home;