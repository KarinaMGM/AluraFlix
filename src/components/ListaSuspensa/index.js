import styles from './ListaSuspensa.module.css'

function ListaSuspensa(props) {
    return (
        <div className={styles.ListaSuspensa}>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa