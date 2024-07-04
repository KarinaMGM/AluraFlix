import { Link } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import logo from '../../assets/imagens/logo.png'
import CabecalhoMenu from '../CabecalhoMenu'

function Cabecalho() {
    return (
        <header className={styles.Cabecalho}>
            <section className={styles.CabecalhoContainer}>
                <Link to="./">
                    <img className={styles.logo} src={logo} alt='Logo AluraFlix' />
                </Link>
                <nav>
                    <CabecalhoMenu url="./">
                        HOME
                    </CabecalhoMenu>
                    <CabecalhoMenu url="./NovoVideo">
                        NOVO VÍDEO
                    </CabecalhoMenu>
                </nav>
            </section>
        </header>
    )
}

export default Cabecalho