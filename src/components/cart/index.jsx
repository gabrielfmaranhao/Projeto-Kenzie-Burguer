import styles from "./style.module.css";
export default function Cart () {
    return (
            <div className={styles.conteudo}>
                <div>
                    <strong>Sua sacola está vazia</strong>
                    <span>Adicione itens</span>
                    </div>
            </div>
    )
}