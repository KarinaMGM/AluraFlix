import { Link } from 'react-router-dom'
import styles from './CabecalhoMenu.module.css'


function CabecalhoMenu ({ url, children}) {
    return(
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default CabecalhoMenu