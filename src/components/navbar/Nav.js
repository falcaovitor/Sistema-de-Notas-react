import styles from './NavBar.module.css';
import {BsGithub} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import Teste from '../.././img/teste.png';
function NavBar(){
    return(
        <nav className={styles.nav}>
            <Link to="/">
                <img src={Teste} alt="Logo"/>
            </Link>
            <a href="https://github.com/falcaovitor" target="_blank">
                <BsGithub className={styles.icon}/>
            </a>
        </nav>
    )
}

export default NavBar;