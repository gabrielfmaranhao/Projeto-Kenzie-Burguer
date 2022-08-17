import styles from './style.module.css'
export default function CartProduts({cartProduts, setCartProduts}) {
    function totalPrice() {
        const price = cartProduts.map((produto)=>produto.price)
        const result = price.reduce((previusValue, currentValue)=>previusValue + currentValue,0);
        return result.toFixed(2)
    }
    function remove (item) {
        setCartProduts(cartProduts.filter((elemento)=> elemento !== item))
    }
    function removeAll () {
        setCartProduts([]);
    }
    return(
        <div className={styles.container}>
            <ul className={styles.ul}>{cartProduts.map((elemento,index)=>
                <li key={elemento.id} className={styles.card}>
                    <figure>
                        <img src={elemento.image} alt={elemento.name} />
                    </figure>
                    <div>
                        <h3>{elemento.name}</h3>
                        <span>{elemento.category}</span>
                    </div>
                    <button onClick={()=> remove(elemento)}>Remover</button>
                </li>)}
            </ul>
            <div className={styles.blockValue}>
                <div>
                    <strong>Total</strong>
                    <span>R${totalPrice()}</span>
                </div>
                <button onClick={()=>removeAll()}>Remover todos</button>
            </div>
        </div>
    )
}